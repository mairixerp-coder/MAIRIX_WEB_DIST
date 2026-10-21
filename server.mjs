import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 10000);

const mime = new Map([
  [".html","text/html; charset=utf-8"],
  [".js","text/javascript; charset=utf-8"],
  [".css","text/css; charset=utf-8"],
  [".json","application/json; charset=utf-8"],
  [".webmanifest","application/manifest+json"],
  [".svg","image/svg+xml"],
  [".png","image/png"],
  [".jpg","image/jpeg"],
  [".jpeg","image/jpeg"],
  [".webp","image/webp"],
  [".ico","image/x-icon"],
  [".woff","font/woff"],
  [".woff2","font/woff2"]
]);

const securityHeaders = {
  "Content-Security-Policy":"default-src self; base-uri self; object-src none; frame-ancestors none; form-action self; script-src self; style-src self unsafe-inline; img-src self data: blob: https:; font-src self data: https:; connect-src self https: wss:; worker-src self blob:; upgrade-insecure-requests",
  "Strict-Transport-Security":"max-age=31536000; includeSubDomains; preload",
  "X-Content-Type-Options":"nosniff",
  "X-Frame-Options":"DENY",
  "Referrer-Policy":"strict-origin-when-cross-origin",
  "Permissions-Policy":"camera=(), microphone=(), geolocation=()"
};

function safeFile(urlPath){
  const clean = decodeURIComponent(urlPath.split("?")[0] || "/");
  const relative = clean.replace(/^\/+/, "");
  const candidate = path.resolve(root, relative || "index.html");
  if (!candidate.startsWith(root + path.sep) && candidate !== path.join(root,"index.html")) return null;
  return candidate;
}

function sendFile(res,file,status=200){
  const ext = path.extname(file).toLowerCase();
  const headers = {...securityHeaders,"Content-Type":mime.get(ext)||"application/octet-stream"};
  if (file.includes(path.sep+"assets"+path.sep)) headers["Cache-Control"]="public,max-age=31536000,immutable";
  else headers["Cache-Control"]="no-cache";
  res.writeHead(status,headers);
  fs.createReadStream(file).pipe(res);
}

const server = http.createServer((req,res)=>{
  if(req.method!=="GET" && req.method!=="HEAD"){
    res.writeHead(405,{...securityHeaders,"Allow":"GET, HEAD"});
    return res.end();
  }

  if(req.url==="/health" || req.url==="/healthz"){
    res.writeHead(200,{...securityHeaders,"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"});
    return res.end(JSON.stringify({ok:true,service:"mairix-web",runtime:"render-fallback"}));
  }

  const candidate=safeFile(req.url||"/");
  if(candidate && fs.existsSync(candidate) && fs.statSync(candidate).isFile()){
    if(req.method==="HEAD"){
      const ext=path.extname(candidate).toLowerCase();
      res.writeHead(200,{...securityHeaders,"Content-Type":mime.get(ext)||"application/octet-stream"});
      return res.end();
    }
    return sendFile(res,candidate);
  }

  const index=path.join(root,"index.html");
  if(req.method==="HEAD"){
    res.writeHead(200,{...securityHeaders,"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-cache"});
    return res.end();
  }
  return sendFile(res,index,200);
});

server.listen(port,"0.0.0.0",()=>console.log(JSON.stringify({event:"MAIRIX_WEB_READY",port})));
