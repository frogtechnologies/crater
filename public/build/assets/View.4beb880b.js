import{G as K,J as Q,a0 as D,B as v,ah as W,k as g,C as X,A as Y,r as d,o as u,l as y,w as n,f as a,u as s,m as P,i as x,t as m,j as V,h as i,e as k,y as Z,F as ee}from"./vendor.8669b7df.js";import{u as te,w as F,x as oe}from"./main.8525167c.js";import{u as ae}from"./invoice.798a42f7.js";import{u as se}from"./global.fc7631dd.js";import"./auth.65253152.js";const ne={class:"fixed top-0 left-0 hidden h-full pt-16 pb-4 bg-white w-88 xl:block"},re={class:"flex items-center justify-between px-4 pt-8 pb-6 border border-gray-200 border-solid"},ie={class:"flex ml-3",role:"group","aria-label":"First group"},le={class:"px-4 py-1 pb-2 mb-2 text-sm border-b border-gray-200 border-solid"},de={class:"px-2"},ce={class:"px-2"},ue={class:"px-2"},me={class:"h-full pb-32 overflow-y-scroll border-l border-gray-200 border-solid sw-scroll"},pe={class:"flex-2"},fe={class:"mb-1 not-italic font-medium leading-5 text-gray-500 capitalize text-md"},_e={class:"flex-1 whitespace-nowrap right"},ve={class:"text-sm text-right text-gray-500 non-italic"},ye={key:0,class:"flex justify-center px-4 mt-5 text-sm text-gray-600"},be={class:"flex flex-col min-h-0 mt-8 overflow-hidden",style:{height:"75vh"}},he=["src"],ke={setup(ge){const p=K(),l=ae(),f=se(),{tm:S}=Q();let b=D({}),t=D({orderBy:"",orderByField:"",invoice_number:""});v(null),v(null);let B=v(!1),z=v(!1);v(!1),W("utils"),te();const N=g(()=>l.selectedViewInvoice),$=g(()=>t.orderBy==="asc"||t.orderBy==null);g(()=>$.value?S("general.ascending"):S("general.descending"));const j=g(()=>b.unique_hash?`/invoices/pdf/${b.unique_hash}`:!1);X(p,()=>{C()}),U(),C(),c=Y.exports.debounce(c,500);function R(e){return p.params.id==e}async function U(){await l.fetchInvoices({limit:"all"},f.companySlug),setTimeout(()=>{A()},500)}async function C(){if(p&&p.params.id){let e=await l.fetchViewInvoice({id:p.params.id},f.companySlug);e.data&&Object.assign(b,e.data.data)}}function A(){const e=document.getElementById(`invoice-${p.params.id}`);e&&(e.scrollIntoView({behavior:"smooth"}),e.classList.add("shake"))}async function c(){let e={};t.invoice_number!==""&&t.invoice_number!==null&&t.invoice_number!==void 0&&(e.invoice_number=t.invoice_number),t.orderBy!==null&&t.orderBy!==void 0&&(e.orderBy=t.orderBy),t.orderByField!==null&&t.orderByField!==void 0&&(e.orderByField=t.orderByField),B.value=!0;try{let r=await l.searchInvoice(e,f.companySlug);B.value=!1,r.data.data&&(l.invoices=r.data.data)}catch{B.value=!1}}function G(){return t.orderBy==="asc"?(t.orderBy="desc",c(),!0):(t.orderBy="asc",c(),!0)}function T(){router.push({name:"invoice.portal.payment",params:{id:l.selectedViewInvoice.id,company:l.selectedViewInvoice.company.slug}})}return(e,r)=>{const _=d("BaseIcon"),h=d("BaseButton"),q=d("BasePageHeader"),E=d("BaseInput"),w=d("BaseRadio"),I=d("BaseInputGroup"),L=d("BaseInvoiceStatusBadge"),M=d("BaseFormatMoney"),H=d("router-link"),O=d("BasePage");return u(),y(O,{class:"xl:pl-96"},{default:n(()=>[a(q,{title:s(N).invoice_number},{actions:n(()=>[a(h,{disabled:s(z),variant:"primary-outline",class:"mr-2",tag:"a",href:`/invoices/pdf/${s(b).unique_hash}`,download:""},{left:n(o=>[a(_,{name:"DownloadIcon",class:P(o.class)},null,8,["class"]),x(" "+m(e.$t("invoices.download")),1)]),_:1},8,["disabled","href"]),s(l)?.selectedViewInvoice?.paid_status!=="PAID"&&s(f).enabledModules.includes("Payments")?(u(),y(h,{key:0,variant:"primary",onClick:T},{default:n(()=>[x(m(e.$t("invoices.pay_invoice")),1)]),_:1})):V("",!0)]),_:1},8,["title"]),i("div",ne,[i("div",re,[a(E,{modelValue:s(t).invoice_number,"onUpdate:modelValue":r[0]||(r[0]=o=>s(t).invoice_number=o),placeholder:e.$t("general.search"),type:"text",variant:"gray",onInput:c},{right:n(()=>[a(_,{name:"SearchIcon",class:"h-5 text-gray-400"})]),_:1},8,["modelValue","placeholder"]),i("div",ie,[a(oe,{position:"bottom-start","width-class":"w-50","position-class":"left-0"},{activator:n(()=>[a(h,{variant:"gray"},{default:n(()=>[a(_,{name:"FilterIcon",class:"h-5"})]),_:1})]),default:n(()=>[i("div",le,m(e.$t("general.sort_by")),1),i("div",de,[a(F,{class:"pt-3 rounded-md hover:rounded-md"},{default:n(()=>[a(I,{class:"-mt-3 font-normal"},{default:n(()=>[a(w,{id:"filter_invoice_date",modelValue:s(t).orderByField,"onUpdate:modelValue":[r[1]||(r[1]=o=>s(t).orderByField=o),c],label:e.$t("invoices.invoice_date"),name:"filter",size:"sm",value:"invoice_date"},null,8,["modelValue","label"])]),_:1})]),_:1})]),i("div",ce,[a(F,{class:"pt-3 rounded-md hover:rounded-md"},{default:n(()=>[a(I,{class:"-mt-3 font-normal"},{default:n(()=>[a(w,{id:"filter_due_date",modelValue:s(t).orderByField,"onUpdate:modelValue":[r[2]||(r[2]=o=>s(t).orderByField=o),c],label:e.$t("invoices.due_date"),name:"filter",size:"sm",value:"due_date"},null,8,["modelValue","label"])]),_:1})]),_:1})]),i("div",ue,[a(F,{class:"pt-3 rounded-md hover:rounded-md"},{default:n(()=>[a(I,{class:"-mt-3 font-normal"},{default:n(()=>[a(w,{id:"filter_invoice_number",modelValue:s(t).orderByField,"onUpdate:modelValue":[r[3]||(r[3]=o=>s(t).orderByField=o),c],label:e.$t("invoices.invoice_number"),size:"sm",name:"filter",value:"invoice_number"},null,8,["modelValue","label"])]),_:1})]),_:1})])]),_:1}),a(h,{class:"ml-1",variant:"white",onClick:G},{default:n(()=>[s($)?(u(),y(_,{key:0,name:"SortAscendingIcon",class:"h-5"})):(u(),y(_,{key:1,name:"SortDescendingIcon",class:"h-5"}))]),_:1})])]),i("div",me,[(u(!0),k(ee,null,Z(s(l).invoices,(o,J)=>(u(),y(H,{id:"invoice-"+o.id,key:J,to:`/${s(f).companySlug}/customer/invoices/${o.id}/view`,class:P(["flex justify-between p-4 items-center cursor-pointer hover:bg-gray-100 border-l-4 border-transparent",{"bg-gray-100 border-l-4 border-primary-500 border-solid":R(o.id)}]),style:{"border-bottom":"1px solid rgba(185, 193, 209, 0.41)"}},{default:n(()=>[i("div",pe,[i("div",fe,m(o.invoice_number),1),a(L,{status:o.status},{default:n(()=>[x(m(o.status),1)]),_:2},1032,["status"])]),i("div",_e,[a(M,{class:"mb-2 text-xl not-italic font-semibold leading-8 text-right text-gray-900 block",amount:o.total,currency:o.currency},null,8,["amount","currency"]),i("div",ve,m(o.formatted_invoice_date),1)])]),_:2},1032,["id","to","class"]))),128)),s(l).invoices.length?V("",!0):(u(),k("p",ye,m(e.$t("invoices.no_matching_invoices")),1))])]),i("div",be,[s(j)?(u(),k("iframe",{key:0,ref:"report",src:s(j),class:"flex-1 border border-gray-400 border-solid rounded-md",onClick:r[4]||(r[4]=(...o)=>e.ViewReportsPDF&&e.ViewReportsPDF(...o))},null,8,he)):V("",!0)])]),_:1})}}};export{ke as default};