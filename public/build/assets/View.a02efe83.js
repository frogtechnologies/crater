import{J as te,ah as ae,B as u,G as se,aN as oe,a0 as ne,k as h,C as re,A as le,r as d,o as i,e as B,f as a,l as f,w as n,h as c,u as s,i as E,t as _,j as v,F as j,y as ie,m as de}from"./vendor.8669b7df.js";import{_ as ce}from"./InvoiceIndexDropdown.373050b9.js";import{c as ue,i as me,u as fe,e as ve,j as pe,g as V}from"./main.8525167c.js";import{_ as _e}from"./SendInvoiceModal.5f3afc5c.js";import{L as ye}from"./LoadingIcon.5e488a35.js";import"./mail-driver.12e9c4e5.js";const be={class:"text-sm mr-3"},ge={class:"fixed top-0 left-0 hidden h-full pt-16 pb-4 ml-56 bg-white xl:ml-64 w-88 xl:block"},he={class:"flex items-center justify-between px-4 pt-8 pb-2 border border-gray-200 border-solid height-full"},Be={class:"mb-6"},xe={class:"flex mb-6 ml-3",role:"group","aria-label":"First group"},Ie={class:"px-2 py-1 pb-2 mb-1 mb-2 text-sm border-b border-gray-200 border-solid"},ke={key:0,class:"h-full pb-32 overflow-y-scroll border-l border-gray-200 border-solid base-scroll"},Ee={class:"flex-2"},Se={class:"mt-1 mb-2 text-xs not-italic font-medium leading-5 text-gray-600"},we={class:"flex-1 whitespace-nowrap right"},Te={class:"text-sm not-italic font-normal leading-5 text-right text-gray-600 est-date"},De={class:"flex justify-center p-4 items-center"},Ve={key:0,class:"flex justify-center px-4 mt-5 text-sm text-gray-600"},$e={class:"flex flex-col min-h-0 mt-8 overflow-hidden",style:{height:"75vh"}},Fe=["src"],ze={setup(Ne){const R=ue(),m=me();fe();const S=ve(),L=pe(),{t:y}=te();ae("$utils"),u(null),u(null);const r=u(null);u(null);const x=se();oe(),u(["DRAFT","SENT","VIEWED","EXPIRED","ACCEPTED","REJECTED"]);const I=u(!1),M=u(!1);u(!1);const $=u(!1),b=u(!1),t=ne({orderBy:null,orderByField:null,searchText:null}),z=h(()=>r.value.invoice_number),F=h(()=>t.orderBy==="asc"||t.orderBy==null);h(()=>F.value?y("general.ascending"):y("general.descending"));const P=h(()=>`/invoices/pdf/${r.value.unique_hash}`);h(()=>r.value&&r.value.id?invoice.value.id:null),re(x,(e,l)=>{e.name==="invoices.view"&&A()});async function U(){L.openDialog({title:y("general.are_you_sure"),message:y("invoices.invoice_mark_as_sent"),yesLabel:y("general.ok"),noLabel:y("general.cancel"),variant:"primary",hideNoButton:!1,size:"lg"}).then(async e=>{I.value=!1,e&&(await m.markAsSent({id:r.value.id,status:"SENT"}),r.value.status="SENT",I.value=!0),I.value=!1})}async function O(e){R.openModal({title:y("invoices.send_invoice"),componentName:"SendInvoiceModal",id:r.value.id,data:r.value})}function G(e){return x.params.id==e}async function N(){b.value=!0,await m.fetchInvoices(),b.value=!1,setTimeout(()=>{H()},500)}function H(){const e=document.getElementById(`invoice-${x.params.id}`);e&&(e.scrollIntoView({behavior:"smooth"}),e.classList.add("shake"))}async function A(){let e=await m.fetchInvoice(x.params.id);e.data&&(r.value={...e.data.data})}async function p(){let e="";t.searchText!==""&&t.searchText!==null&&t.searchText!==void 0&&(e+=`search=${t.searchText}&`),t.orderBy!==null&&t.orderBy!==void 0&&(e+=`orderBy=${t.orderBy}&`),t.orderByField!==null&&t.orderByField!==void 0&&(e+=`orderByField=${t.orderByField}`),$.value=!0;let l=await m.searchInvoice(e);$.value=!1,l.data&&(m.invoices=l.data.data)}function J(){return t.orderBy==="asc"?(t.orderBy="desc",p(),!0):(t.orderBy="asc",p(),!0)}return N(),A(),p=le.exports.debounce(p,500),(e,l)=>{const g=d("BaseButton"),C=d("router-link"),W=d("BasePageHeader"),k=d("BaseIcon"),q=d("BaseInput"),w=d("BaseRadio"),T=d("BaseInputGroup"),D=d("BaseDropdownItem"),X=d("BaseDropdown"),Y=d("BaseText"),K=d("BaseEstimateStatusBadge"),Q=d("BaseFormatMoney"),Z=d("BasePage");return i(),B(j,null,[a(_e),r.value?(i(),f(Z,{key:0,class:"xl:pl-96 xl:ml-8"},{default:n(()=>[a(W,{title:s(z)},{actions:n(()=>[c("div",be,[r.value.status==="DRAFT"&&s(S).hasAbilities(s(V).EDIT_INVOICE)?(i(),f(g,{key:0,disabled:I.value,variant:"primary-outline",onClick:U},{default:n(()=>[E(_(e.$t("invoices.mark_as_sent")),1)]),_:1},8,["disabled"])):v("",!0)]),r.value.status==="DRAFT"&&s(S).hasAbilities(s(V).SEND_INVOICE)?(i(),f(g,{key:0,disabled:M.value,variant:"primary",class:"text-sm",onClick:O},{default:n(()=>[E(_(e.$t("invoices.send_invoice")),1)]),_:1},8,["disabled"])):v("",!0),s(S).hasAbilities(s(V).CREATE_PAYMENT)?(i(),f(C,{key:1,to:`/admin/payments/${e.$route.params.id}/create`},{default:n(()=>[r.value.status==="SENT"||r.value.status==="OVERDUE"||r.value.status==="VIEWED"?(i(),f(g,{key:0,variant:"primary"},{default:n(()=>[E(_(e.$t("invoices.record_payment")),1)]),_:1})):v("",!0)]),_:1},8,["to"])):v("",!0),a(ce,{class:"ml-3",row:r.value,"load-data":N},null,8,["row"])]),_:1},8,["title"]),c("div",ge,[c("div",he,[c("div",Be,[a(q,{modelValue:s(t).searchText,"onUpdate:modelValue":l[0]||(l[0]=o=>s(t).searchText=o),placeholder:e.$t("general.search"),type:"text",variant:"gray",onInput:l[1]||(l[1]=o=>p())},{right:n(()=>[a(k,{name:"SearchIcon",class:"h-5 text-gray-400"})]),_:1},8,["modelValue","placeholder"])]),c("div",xe,[a(X,{class:"ml-3",position:"bottom-start"},{activator:n(()=>[a(g,{size:"md",variant:"gray"},{default:n(()=>[a(k,{name:"FilterIcon"})]),_:1})]),default:n(()=>[c("div",Ie,_(e.$t("general.sort_by")),1),a(D,{class:"flex px-1 py-2 cursor-pointer"},{default:n(()=>[a(T,{class:"-mt-3 font-normal"},{default:n(()=>[a(w,{id:"filter_invoice_date",modelValue:s(t).orderByField,"onUpdate:modelValue":[l[2]||(l[2]=o=>s(t).orderByField=o),p],label:e.$t("reports.invoices.invoice_date"),size:"sm",name:"filter",value:"invoice_date"},null,8,["modelValue","label"])]),_:1})]),_:1}),a(D,{class:"flex px-1 py-2 cursor-pointer"},{default:n(()=>[a(T,{class:"-mt-3 font-normal"},{default:n(()=>[a(w,{id:"filter_due_date",modelValue:s(t).orderByField,"onUpdate:modelValue":[l[3]||(l[3]=o=>s(t).orderByField=o),p],label:e.$t("invoices.due_date"),value:"due_date",size:"sm",name:"filter"},null,8,["modelValue","label"])]),_:1})]),_:1}),a(D,{class:"flex px-1 py-2 cursor-pointer"},{default:n(()=>[a(T,{class:"-mt-3 font-normal"},{default:n(()=>[a(w,{id:"filter_invoice_number",modelValue:s(t).orderByField,"onUpdate:modelValue":[l[4]||(l[4]=o=>s(t).orderByField=o),p],label:e.$t("invoices.invoice_number"),value:"invoice_number",size:"sm",name:"filter"},null,8,["modelValue","label"])]),_:1})]),_:1})]),_:1}),a(g,{class:"ml-1",size:"md",variant:"gray",onClick:J},{default:n(()=>[s(F)?(i(),f(k,{key:0,name:"SortAscendingIcon"})):(i(),f(k,{key:1,name:"SortDescendingIcon"}))]),_:1})])]),s(m)&&s(m).invoices?(i(),B("div",ke,[(i(!0),B(j,null,ie(s(m).invoices,(o,ee)=>(i(),B("div",{key:ee},[o&&!b.value?(i(),f(C,{key:0,id:"invoice-"+o.id,to:`/admin/invoices/${o.id}/view`,class:de(["flex justify-between side-invoice p-4 cursor-pointer hover:bg-gray-100 items-center border-l-4 border-transparent",{"bg-gray-100 border-l-4 border-primary-500 border-solid":G(o.id)}]),style:{"border-bottom":"1px solid rgba(185, 193, 209, 0.41)"}},{default:n(()=>[c("div",Ee,[a(Y,{text:o.customer.name,length:30,class:"pr-2 mb-2 text-sm not-italic font-normal leading-5 text-black capitalize truncate"},null,8,["text"]),c("div",Se,_(o.invoice_number),1),a(K,{status:o.status,class:"px-1 text-xs"},{default:n(()=>[E(_(o.status),1)]),_:2},1032,["status"])]),c("div",we,[a(Q,{class:"mb-2 text-xl not-italic font-semibold leading-8 text-right text-gray-900 block",amount:o.total,currency:o.customer.currency},null,8,["amount","currency"]),c("div",Te,_(o.formatted_invoice_date),1)])]),_:2},1032,["id","to","class"])):v("",!0)]))),128)),c("div",De,[b.value?(i(),f(ye,{key:0,class:"h-6 m-1 animate-spin text-primary-400"})):v("",!0)]),!s(m).invoices.length&&!b.value?(i(),B("p",Ve,_(e.$t("invoices.no_matching_invoices")),1)):v("",!0)])):v("",!0)]),c("div",$e,[c("iframe",{src:`${s(P)}`,class:"flex-1 border border-gray-400 border-solid bg-white rounded-md frame-style"},null,8,Fe)])]),_:1})):v("",!0)],64)}}};export{ze as default};