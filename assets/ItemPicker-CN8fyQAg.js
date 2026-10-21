import{u as M,b as p,s as q,j as r}from"./index-DSJHoN1u.js";function U({value:n,onChange:j,onAddToSales:f}){const{t:b,locale:x}=M(),[y,S]=p.useState(""),[_,g]=p.useState([]),[V,u]=p.useState(!1),[N,T]=p.useState(!1),[A,h]=p.useState(""),[a,k]=p.useState(null),[E,w]=p.useState(!1),[C,P]=p.useState(""),B=p.useRef(0),I=p.useRef(0);function o(e,t,d){return x==="en"?t:x==="fr"?d:e}function v(e){return e?x==="en"?e.nameEn||e.nameAr||e.nameFr||"":x==="fr"?e.nameFr||e.nameAr||e.nameEn||"":e.nameAr||e.nameEn||e.nameFr||"":""}function R(e){return e.trim().split(/\s+/).filter(Boolean).slice(0,2).join(" ")}function z(e){const t={nameAr:e?.nameAr??e?.name_ar??null,nameEn:e?.nameEn??e?.name_en??null,nameFr:e?.nameFr??e?.name_fr??null};return v(t)||e?.itemName||e?.item_name||e?.itemCode||e?.item_code||""}function W(e){return x==="ar"?e.labelAr||e.labelEn||e.labelFr||"":x==="fr"?e.labelFr||e.labelEn||e.labelAr||"":e.labelEn||e.labelAr||e.labelFr||""}function l(e){return Number(e).toLocaleString(x==="ar"?"ar-EG":x==="fr"?"fr-FR":"en-US",{maximumFractionDigits:6})}const F=a?v(a)||a.itemCode:n?z(n):"";p.useEffect(()=>{const e=y.trim();if(!e){g([]),u(!1),T(!1),h("");return}const t=++B.current;u(!0),T(!0),h("");const d=window.setTimeout(async()=>{const{data:m,error:i}=await q.rpc("search_items_v1",{p_query:e,p_limit:20});if(t===B.current){if(i){console.error("search_items_v1:",i),g([]),h(i.message),T(!1),u(!0);return}g(Array.isArray(m)?m:[]),T(!1),u(!0)}},180);return()=>window.clearTimeout(d)},[y,n,F]),p.useEffect(()=>{if(!n?.itemId){k(null),P(""),w(!1);return}const e=++I.current;(async()=>{w(!0),P("");const{data:d,error:m}=await q.rpc("get_item_card_v1",{p_item_id:n.itemId,p_barcode_id:n.barcodeId||null});if(e!==I.current)return;if(m){console.error("get_item_card_v1:",m),k(null),P(m.message),w(!1);return}const i=d,c=i?.taxCalculation,L=c?{side:c.side??"",inputAmount:Number(c.inputAmount??0),taxableBase:Number(c.taxableBase??0),taxStartingBase:Number(c.taxStartingBase??0),taxTotal:Number(c.taxTotal??0),includedTaxTotal:Number(c.includedTaxTotal??0),excludedTaxTotal:Number(c.excludedTaxTotal??0),runningTotalAfterTaxes:Number(c.runningTotalAfterTaxes??0),invoiceAmount:Number(c.invoiceAmount??0),recoverableTaxTotal:Number(c.recoverableTaxTotal??0),capitalizedTaxTotal:Number(c.capitalizedTaxTotal??0),inventoryCostBeforeExpenses:c.inventoryCostBeforeExpenses!==null&&c.inventoryCostBeforeExpenses!==void 0?Number(c.inventoryCostBeforeExpenses):null,taxes:Array.isArray(c.taxes)?c.taxes.map(s=>({sequence:Number(s.sequence??0),priority:Number(s.priority??0),taxId:s.taxId??"",taxCode:s.taxCode??"",nameAr:s.nameAr??null,nameEn:s.nameEn??null,nameFr:s.nameFr??null,rate:Number(s.rate??0),inclusive:s.inclusive===!0,taxableBase:Number(s.taxableBase??0),amount:Number(s.amount??0),runningBaseAfterTax:Number(s.runningBaseAfterTax??0),recoverable:s.recoverable===!0,capitalized:s.capitalized===!0})):[]}:null,G={itemId:i?.itemId??"",itemCode:i?.itemCode??"",nameAr:i?.nameAr??null,nameEn:i?.nameEn??null,nameFr:i?.nameFr??null,active:i?.active===!0,selectedBarcodeId:i?.selectedBarcodeId??null,selectedBarcode:i?.selectedBarcode??null,barcodes:Array.isArray(i?.barcodes)?i.barcodes:[],canViewSalePrice:i?.canViewSalePrice===!0,baseSalePrice:i?.baseSalePrice!==null&&i?.baseSalePrice!==void 0?Number(i.baseSalePrice):null,taxTotal:i?.taxTotal!==null&&i?.taxTotal!==void 0?Number(i.taxTotal):null,salePriceAfterTaxes:i?.salePriceAfterTaxes!==null&&i?.salePriceAfterTaxes!==void 0?Number(i.salePriceAfterTaxes):null,taxCalculation:L,effectiveSalePrice:i?.effectiveSalePrice!==null&&i?.effectiveSalePrice!==void 0?Number(i.effectiveSalePrice):null,promotion:i?.promotion?{active:i.promotion.active===!0,id:i.promotion.id??"",code:i.promotion.code??"",nameAr:i.promotion.nameAr??null,nameEn:i.promotion.nameEn??null,nameFr:i.promotion.nameFr??null,discountType:i.promotion.discountType??"",discountValue:Number(i.promotion.discountValue??0),startsAt:i.promotion.startsAt??"",endsAt:i.promotion.endsAt??null,discountTiming:i.promotion.discountTiming??null,priceBeforePromotion:Number(i.promotion.priceBeforePromotion??i.salePriceAfterTaxes??0),discountAmount:Number(i.promotion.discountAmount??0),finalPrice:Number(i.promotion.finalPrice??i.effectiveSalePrice??0)}:null,warehouses:Array.isArray(i?.warehouses)?i.warehouses.map(s=>({warehouseId:s.warehouseId??"",warehouseCode:s.warehouseCode??"",nameAr:s.nameAr??null,nameEn:s.nameEn??null,nameFr:s.nameFr??null,qty:Number(s.qty??0)})):[]};k(G),w(!1)})()},[n?.itemId,n?.barcodeId]);function D(e){const t=Array.isArray(e.barcodes)?e.barcodes:[],d=t.find(c=>c.isPrimary===!0)??t[0],m=e.sale_price!==null&&e.sale_price!==void 0,i={itemId:e.item_id??"",itemCode:e.item_code??"",itemName:e.item_name??"",nameAr:e.name_ar??null,nameEn:e.name_en??null,nameFr:e.name_fr??null,barcodeId:d?.id??"",barcode:d?.barcode??"",barcodes:t,salePrice:m?Number(e.sale_price):0,canViewSalePrice:m};j(i),S(""),g([]),h(""),u(!1)}function $(){j(null),S(""),g([]),k(null),h(""),P(""),u(!1)}return r.jsxs("div",{className:"picker",style:{width:"100%",minWidth:0},children:[r.jsx("input",{value:y,autoComplete:"off",placeholder:b("typeItem"),onChange:e=>{const t=e.target.value;S(t),n&&(j(null),k(null)),u(t.trim().length>0)},onFocus:()=>{y.trim().length>0&&!n&&u(!0)}}),n&&r.jsxs("article",{className:f?"selected-card selected-card-sales":"selected-card",style:{width:"100%",minWidth:0,boxSizing:"border-box"},children:[r.jsxs("div",{className:"item-picker-sale-header",children:[r.jsxs("div",{className:"item-picker-sale-title",children:[f&&r.jsx("span",{className:"item-picker-sale-intent",children:o("جاهز للإضافة لفاتورة البيع","Ready to add to the sale","Prêt à ajouter à la vente")}),r.jsx("strong",{children:F}),r.jsxs("div",{className:"item-picker-sale-code",children:[r.jsx("span",{children:o("كود الصنف","Item code","Code article")}),r.jsx("b",{children:a?.itemCode??n.itemCode})]})]}),f&&a?.canViewSalePrice&&r.jsxs("div",{className:"item-picker-sale-price-hero",children:[r.jsx("span",{children:o("سعر البيع","Sale price","Prix de vente")}),r.jsx("strong",{children:l(a.effectiveSalePrice??a.salePriceAfterTaxes??a.baseSalePrice??0)})]})]}),E&&r.jsx("p",{children:b("loading")}),C&&r.jsx("p",{className:"error",role:"alert",children:C}),!E&&!C&&r.jsxs(r.Fragment,{children:[a?.canViewSalePrice&&r.jsxs("section",{className:"item-picker-pricing-card",style:{width:"100%",minWidth:0},children:[r.jsx("h4",{children:o("تفاصيل سعر البيع","Sale price details","Détails du prix de vente")}),r.jsxs("div",{children:[r.jsxs("span",{children:[o("سعر البيع الأساسي","Base Sale Price","Prix de vente de base"),":"]})," ",r.jsx("strong",{children:l(a.baseSalePrice??0)})]}),(a.taxTotal??0)>0&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{children:[r.jsxs("span",{children:[o("إجمالي الضرائب","Total Taxes","Total des taxes"),":"]})," ",r.jsx("strong",{children:l(a.taxTotal??0)})]}),r.jsxs("div",{children:[r.jsxs("span",{children:[o("السعر بعد الضرائب","Price After Taxes","Prix après taxes"),":"]})," ",r.jsx("strong",{children:l(a.salePriceAfterTaxes??0)})]})]}),a.taxCalculation&&a.taxCalculation.taxes.length>0&&r.jsxs("div",{style:{marginTop:"0.75rem",width:"100%",minWidth:0},children:[r.jsx("strong",{children:o("تفاصيل الضرائب","Tax Details","Détails des taxes")}),r.jsx("div",{className:"list",style:{width:"100%",minWidth:0},children:a.taxCalculation.taxes.map(e=>r.jsxs("article",{style:{width:"100%",minWidth:0,boxSizing:"border-box"},children:[r.jsx("strong",{children:v(e)||e.taxCode}),r.jsx("span",{children:e.taxCode}),r.jsxs("span",{children:[l(e.rate),"%"]}),r.jsxs("span",{children:[o("الأساس","Base","Base"),":"," ",l(e.taxableBase)]}),r.jsxs("span",{children:[o("الضريبة","Tax","Taxe"),":"," ",l(e.amount)]}),r.jsxs("span",{children:[o("بعد الضريبة","After Tax","Après taxe"),":"," ",l(e.runningBaseAfterTax)]})]},e.taxId))})]}),a.promotion&&r.jsxs("div",{style:{marginTop:"0.75rem"},children:[r.jsx("div",{children:r.jsx("strong",{children:v(a.promotion)||a.promotion.code})}),r.jsxs("div",{children:[o("العرض","Promotion","Promotion"),":"," ",a.promotion.discountType==="PERCENT"?`${l(a.promotion.discountValue)}%`:`${o("سعر ثابت","Fixed Price","Prix fixe")}: ${l(a.promotion.discountValue)}`]}),r.jsxs("div",{children:[r.jsxs("span",{children:[o("السعر قبل العرض","Price Before Promotion","Prix avant promotion"),":"]})," ",r.jsx("strong",{children:l(a.promotion.priceBeforePromotion)})]}),r.jsxs("div",{children:[r.jsxs("span",{children:[o("قيمة الخصم","Discount Amount","Montant de la remise"),":"]})," ",r.jsx("strong",{children:l(a.promotion.discountAmount)})]})]}),r.jsxs("div",{className:"item-picker-final-price",style:{marginTop:"0.75rem"},children:[r.jsx("span",{children:o("السعر النهائي للعميل","Final customer price","Prix final client")})," ",r.jsx("strong",{children:l(a.effectiveSalePrice??a.salePriceAfterTaxes??a.baseSalePrice??0)})]})]}),(a?.barcodes??n.barcodes).length>0&&r.jsxs("label",{className:"item-picker-barcode-field",children:[b("barcodes"),r.jsx("select",{value:n.barcodeId,onChange:e=>{const t=a?.barcodes??n.barcodes,d=t.find(m=>m.id===e.target.value);d&&j({...n,barcodeId:d.id,barcode:d.barcode,barcodes:t})},children:(a?.barcodes??n.barcodes).map(e=>{const t=W(e);return r.jsxs("option",{value:e.id,children:[e.barcode,t?` — ${t}`:"",e.isPrimary?" ★":""]},e.id)})})]}),r.jsxs("div",{children:[r.jsxs("strong",{children:[b("barcode"),":"]})," ",(a?.selectedBarcode??n.barcode)||"—"]}),a&&a.warehouses.length>0&&r.jsxs("section",{className:"item-picker-stock-section",style:{width:"100%",minWidth:0},children:[r.jsxs("div",{className:"item-picker-stock-heading",children:[r.jsx("h4",{children:o("المتاح للبيع بالمخازن","Available stock","Stock disponible")}),r.jsx("strong",{children:l(a.warehouses.reduce((e,t)=>e+Number(t.qty??0),0))})]}),r.jsx("div",{className:"item-picker-stock-row",children:a.warehouses.map(e=>{const t=v(e)||e.warehouseCode;return r.jsxs("article",{className:"item-picker-stock-card",title:t,children:[r.jsxs("div",{className:"item-picker-stock-name",children:[r.jsx("strong",{children:R(t)}),r.jsx("small",{children:e.warehouseCode})]}),r.jsx("strong",{className:"item-picker-stock-qty",children:l(e.qty)})]},e.warehouseId)})})]}),a&&a.warehouses.length===0&&r.jsx("p",{children:o("لا توجد كمية مخزون متاحة للعرض.","No warehouse quantity available.","Aucune quantité de stock disponible.")})]}),r.jsxs("div",{className:"item-picker-actions",children:[f&&n&&r.jsxs("button",{type:"button",className:"item-picker-add-to-sales",onClick:()=>f(n),children:["+"," ",o("إضافة إلى فاتورة البيع","Add to sale invoice","Ajouter à la facture de vente")]}),r.jsx("button",{type:"button",className:"item-picker-clear",onClick:$,children:b("clear")})]})]}),V&&!n&&r.jsxs("div",{className:"suggestions",children:[N&&r.jsx("div",{children:b("loading")}),!N&&A&&r.jsx("div",{className:"error",role:"alert",children:A}),!N&&!A&&_.map(e=>{const t=Array.isArray(e.barcodes)?e.barcodes:[],d=e.sale_price!==null&&e.sale_price!==void 0;return r.jsxs("button",{type:"button",onClick:()=>D(e),children:[r.jsx("strong",{children:z(e)}),r.jsx("small",{children:e.item_code}),t.length>0&&r.jsx("small",{children:t.map(m=>m.barcode).join(" · ")}),d&&r.jsxs("small",{children:[o("سعر البيع الأساسي","Base Sale Price","Prix de vente de base"),":"," ",l(Number(e.sale_price))]})]},e.item_id)}),!N&&!A&&_.length===0&&r.jsx("div",{children:b("noResults")})]}),r.jsx("style",{children:`
        .selected-card-sales{
          display:grid !important;
          gap:12px !important;
          padding:14px !important;
          border:2px solid color-mix(in srgb,var(--mx-sales,#10a957) 48%,var(--mx-border,#d9e0e8)) !important;
          border-inline-start:6px solid var(--mx-sales,#10a957) !important;
          border-radius:16px !important;
          background:
            linear-gradient(
              145deg,
              color-mix(in srgb,var(--mx-sales-soft,rgba(16,169,87,.12)) 70%,var(--mx-surface,#fff)),
              var(--mx-surface,#fff) 58%
            ) !important;
          box-shadow:
            0 10px 28px rgba(0,0,0,.08),
            0 0 0 3px color-mix(in srgb,var(--mx-sales,#10a957) 7%,transparent) !important;
        }
        .item-picker-sale-header{
          display:grid;
          grid-template-columns:minmax(0,1fr) auto;
          gap:14px;
          align-items:center;
          width:100%;
          min-width:0;
          padding-bottom:12px;
          border-bottom:1px solid color-mix(in srgb,var(--mx-sales,#10a957) 20%,var(--mx-border,#d9e0e8));
        }
        .item-picker-sale-title{
          display:grid;
          gap:6px;
          min-width:0;
        }
        .item-picker-sale-title > strong{
          font-size:clamp(1.05rem,2vw,1.3rem);
          line-height:1.35;
          overflow-wrap:anywhere;
        }
        .item-picker-sale-intent{
          display:inline-flex;
          align-items:center;
          width:fit-content;
          min-height:26px;
          padding:4px 9px;
          border:1px solid color-mix(in srgb,var(--mx-sales,#10a957) 38%,var(--mx-border,#d9e0e8));
          border-radius:999px;
          background:color-mix(in srgb,var(--mx-sales,#10a957) 12%,var(--mx-surface,#fff));
          color:var(--mx-sales,#10a957);
          font-size:.7rem;
          font-weight:950;
        }
        .item-picker-sale-code{
          display:flex;
          flex-wrap:wrap;
          gap:6px;
          align-items:center;
          color:var(--mx-text-soft,#6b7480);
          font-size:.75rem;
        }
        .item-picker-sale-code b{
          color:var(--mx-text,#18202b);
          font-size:.78rem;
        }
        .item-picker-sale-price-hero{
          display:grid;
          justify-items:end;
          gap:2px;
          min-width:120px;
          padding:10px 12px;
          border:1px solid color-mix(in srgb,var(--mx-sales,#10a957) 34%,var(--mx-border,#d9e0e8));
          border-radius:12px;
          background:color-mix(in srgb,var(--mx-sales,#10a957) 9%,var(--mx-surface,#fff));
        }
        .item-picker-sale-price-hero span{
          color:var(--mx-text-soft,#6b7480);
          font-size:.68rem;
          font-weight:800;
        }
        .item-picker-sale-price-hero strong{
          color:var(--mx-sales,#10a957) !important;
          font-size:1.35rem;
          line-height:1.1;
        }
        .item-picker-pricing-card{
          display:grid;
          gap:7px;
          padding:10px 12px;
          border:1px solid color-mix(in srgb,var(--mx-sales,#10a957) 16%,var(--mx-border,#d9e0e8));
          border-radius:12px;
          background:color-mix(in srgb,var(--mx-surface-2,#f4f6f9) 85%,var(--mx-sales-soft,rgba(16,169,87,.12)));
        }
        .item-picker-pricing-card > h4{
          margin:0 0 2px;
          font-size:.78rem;
          color:var(--mx-text-soft,#6b7480);
        }
        .item-picker-pricing-card > div:not(.item-picker-final-price){
          display:flex;
          justify-content:space-between;
          gap:12px;
          align-items:center;
          font-size:.78rem;
        }
        .item-picker-final-price{
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:12px;
          padding-top:9px;
          border-top:1px dashed color-mix(in srgb,var(--mx-sales,#10a957) 28%,var(--mx-border,#d9e0e8));
        }
        .item-picker-final-price span{
          font-weight:900;
        }
        .item-picker-final-price strong{
          color:var(--mx-sales,#10a957) !important;
          font-size:1.1rem;
        }
        .item-picker-barcode-field{
          padding:10px 12px;
          border:1px solid var(--mx-border,#d9e0e8);
          border-radius:12px;
          background:var(--mx-surface-2,#f4f6f9);
        }
        .item-picker-stock-section{
          display:grid;
          gap:8px;
          padding:10px 12px;
          border:1px solid color-mix(in srgb,var(--mx-catalog,#08cfd1) 26%,var(--mx-border,#d9e0e8));
          border-radius:12px;
          background:color-mix(in srgb,var(--mx-catalog,#08cfd1) 5%,var(--mx-surface,#fff));
        }
        .item-picker-stock-heading{
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:12px;
        }
        .item-picker-stock-heading h4{
          margin:0;
          font-size:.82rem;
        }
        .item-picker-stock-heading > strong{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          min-width:42px;
          min-height:30px;
          padding:4px 9px;
          border-radius:999px;
          background:color-mix(in srgb,var(--mx-catalog,#08cfd1) 12%,var(--mx-surface,#fff));
          color:var(--mx-catalog,#08cfd1) !important;
          font-size:.9rem;
        }
        .item-picker-stock-row{
          display:grid;
          grid-auto-flow:column;
          grid-auto-columns:minmax(150px,1fr);
          gap:8px;
          width:100%;
          min-width:0;
          overflow-x:auto;
          padding-bottom:2px;
          scrollbar-width:thin;
        }
        .item-picker-stock-card{
          display:grid !important;
          grid-template-columns:minmax(0,1fr) auto !important;
          align-items:center !important;
          gap:8px !important;
          min-width:150px !important;
          width:auto !important;
          padding:10px 11px !important;
          border:1px solid color-mix(in srgb,var(--mx-catalog,#08cfd1) 32%,var(--mx-border,#d9e0e8)) !important;
          border-radius:10px !important;
          background:var(--mx-surface-2,#f4f6f9) !important;
          box-sizing:border-box !important;
        }
        .item-picker-stock-name{
          min-width:0;
          display:grid;
          gap:2px;
        }
        .item-picker-stock-name strong{
          white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
        }
        .item-picker-stock-name small{
          color:var(--mx-text-soft,#6b7480);
          font-size:.68rem;
          white-space:nowrap;
        }
        .item-picker-stock-qty{
          min-width:32px;
          text-align:center;
          font-size:1rem;
        }
        .item-picker-actions{
          display:grid;
          grid-template-columns:minmax(0,1fr) auto;
          gap:8px;
          width:100%;
          margin-top:10px;
        }
        .item-picker-add-to-sales{
          min-height:46px;
          border:0 !important;
          border-radius:10px !important;
          background:linear-gradient(135deg,var(--mx-sales,#10a957),color-mix(in srgb,var(--mx-sales,#10a957) 70%,#8df1b8)) !important;
          color:#04160c !important;
          font-weight:950 !important;
        }
        .item-picker-clear{
          min-height:46px;
          min-width:84px;
        }
        @media(max-width:700px){
          .selected-card-sales{
            padding:11px !important;
            gap:10px !important;
          }
          .item-picker-sale-header{
            grid-template-columns:1fr;
          }
          .item-picker-sale-price-hero{
            justify-items:start;
            width:100%;
            min-width:0;
            box-sizing:border-box;
          }
          .item-picker-pricing-card > div:not(.item-picker-final-price),
          .item-picker-final-price{
            align-items:flex-start;
          }
          .item-picker-stock-row{
            grid-auto-columns:minmax(145px,72vw);
          }
          .item-picker-actions{
            position:static;
            bottom:auto;
            z-index:auto;
            padding:8px;
            margin:10px 0 0;
            border:1px solid color-mix(in srgb,var(--mx-sales,#10a957) 24%,var(--mx-border,#d9e0e8));
            border-radius:12px;
            background:color-mix(in srgb,var(--mx-surface,#fff) 94%,transparent);
            backdrop-filter:none;
            box-shadow:0 8px 22px rgba(0,0,0,.10);
          }
          .item-picker-add-to-sales{
            display:block !important;
            visibility:visible !important;
            opacity:1 !important;
          }
        }
        :root[data-theme="dark"] .selected-card-sales{
          background:
            linear-gradient(
              145deg,
              color-mix(in srgb,var(--mx-sales-soft,rgba(16,169,87,.12)) 38%,#111822),
              #111822 62%
            ) !important;
        }
        :root[data-theme="dark"] .item-picker-sale-price-hero,
        :root[data-theme="dark"] .item-picker-pricing-card,
        :root[data-theme="dark"] .item-picker-barcode-field,
        :root[data-theme="dark"] .item-picker-stock-section{
          background:#17202b !important;
        }
        :root[data-theme="dark"] .item-picker-sale-code b{
          color:var(--mx-text,#f5f7fb);
        }
        :root[data-theme="dark"] .item-picker-stock-card{
          background:#17202b !important;
        }
        :root[data-theme="dark"] .item-picker-actions{
          background:color-mix(in srgb,#111822 94%,transparent);
        }
      `})]})}export{U as I};
