import{J as X,ah as K,G as Q,B as b,a0 as Y,k as I,aR as Z,r as s,o as B,l as y,w as a,f as e,q as k,ag as V,u as n,m as F,i,t as u,j as ee,h as x}from"./vendor.8669b7df.js";import{u as te}from"./invoice.798a42f7.js";import ae from"./BaseTable.990efc67.js";import{u as oe}from"./global.fc7631dd.js";import{_ as se}from"./MoonwalkerIcon.48816357.js";import"./auth.65253152.js";import"./main.8525167c.js";const ne=x("div",{class:"hidden w-8 h-0 mx-4 border border-gray-400 border-solid xl:block",style:{"margin-top":"1.5rem"}},null,-1),le={class:"relative table-container"},fe={setup(re){const{t:d}=X();K("utils"),Q();const D=b(null);let g=b(!0),m=b(!1);const P=b(["DRAFT","DUE","SENT","VIEWED","OVERDUE","COMPLETED"]),o=Y({status:"",from_date:"",to_date:"",invoice_number:""}),p=te(),h=oe();I(()=>h.currency);const j=I(()=>[{key:"invoice_date",label:d("invoices.date"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"invoice_number",label:d("invoices.number")},{key:"status",label:d("invoices.status")},{key:"paid_status",label:d("invoices.paid_status")},{key:"due_amount",label:d("dashboard.recent_invoices_card.amount_due")},{key:"actions",thClass:"text-right",tdClass:"text-right text-sm font-medium",sortable:!1}]),$=I(()=>!p.totalInvoices&&!g.value);Z(o,()=>{T()},{debounce:500});function N(){D.value.refresh()}function T(){N()}function S(){o.status="",o.from_date="",o.to_date="",o.invoice_number=""}function U(){m.value&&S(),m.value=!m.value}async function H({page:l,sort:r}){let f={status:o.status,invoice_number:o.invoice_number,from_date:o.from_date,to_date:o.to_date,orderByField:r.fieldName||"created_at",orderBy:r.order||"desc",page:l};g.value=!0;let _=await p.fetchInvoices(f,h.companySlug);return g.value=!1,{data:_.data.data,pagination:{totalPages:_.data.meta.last_page,currentPage:l,totalCount:_.data.meta.total,limit:10}}}return(l,r)=>{const f=s("BaseBreadcrumbItem"),_=s("BaseBreadcrumb"),c=s("BaseIcon"),G=s("BaseButton"),M=s("BasePageHeader"),R=s("BaseSelectInput"),v=s("BaseInputGroup"),W=s("BaseInput"),w=s("BaseDatePicker"),z=s("BaseFilterWrapper"),O=s("BaseEmptyPlaceholder"),C=s("router-link"),q=s("BaseFormatMoney"),E=s("BaseInvoiceStatusBadge"),A=s("BaseDropdownItem"),J=s("BaseDropdown"),L=s("BasePage");return B(),y(L,null,{default:a(()=>[e(M,{title:l.$t("invoices.title")},{actions:a(()=>[k(e(G,{variant:"primary-outline",onClick:U},{right:a(t=>[n(m)?(B(),y(c,{key:1,name:"XIcon",class:F(t.class)},null,8,["class"])):(B(),y(c,{key:0,name:"FilterIcon",class:F(t.class)},null,8,["class"]))]),default:a(()=>[i(u(l.$t("general.filter"))+" ",1)]),_:1},512),[[V,n(p).totalInvoices]])]),default:a(()=>[e(_,null,{default:a(()=>[e(f,{title:l.$t("general.home"),to:`/${n(h).companySlug}/customer/dashboard`},null,8,["title","to"]),e(f,{title:l.$tc("invoices.invoice",2),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),k(e(z,{onClear:S},{default:a(()=>[e(v,{label:l.$t("invoices.status"),class:"px-3"},{default:a(()=>[e(R,{modelValue:n(o).status,"onUpdate:modelValue":r[0]||(r[0]=t=>n(o).status=t),options:P.value,searchable:"","allow-empty":!1,placeholder:l.$t("general.select_a_status")},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"]),e(v,{label:l.$t("invoices.invoice_number"),color:"black-light",class:"px-3 mt-2"},{default:a(()=>[e(W,{modelValue:n(o).invoice_number,"onUpdate:modelValue":r[1]||(r[1]=t=>n(o).invoice_number=t)},{default:a(()=>[e(c,{name:"DotsHorizontalIcon",class:"h-5 text-gray-500"}),e(c,{name:"HashtagIcon",class:"h-5 ml-3 text-gray-600"})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e(v,{label:l.$t("general.from"),class:"px-3"},{default:a(()=>[e(w,{modelValue:n(o).from_date,"onUpdate:modelValue":r[2]||(r[2]=t=>n(o).from_date=t),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"]),ne,e(v,{label:l.$t("general.to"),class:"px-3"},{default:a(()=>[e(w,{modelValue:n(o).to_date,"onUpdate:modelValue":r[3]||(r[3]=t=>n(o).to_date=t),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},512),[[V,n(m)]]),n($)?(B(),y(O,{key:0,title:l.$t("invoices.no_invoices"),description:l.$t("invoices.list_of_invoices")},{default:a(()=>[e(se,{class:"mt-5 mb-4"})]),_:1},8,["title","description"])):ee("",!0),k(x("div",le,[e(ae,{ref_key:"table",ref:D,data:H,columns:n(j),"placeholder-count":n(p).totalInvoices>=20?10:5,class:"mt-10"},{"cell-invoice_date":a(({row:t})=>[i(u(t.data.formatted_invoice_date),1)]),"cell-invoice_number":a(({row:t})=>[e(C,{to:{path:`invoices/${t.data.id}/view`},class:"font-medium text-primary-500"},{default:a(()=>[i(u(t.data.invoice_number),1)]),_:2},1032,["to"])]),"cell-due_amount":a(({row:t})=>[e(q,{amount:t.data.total,currency:t.data.customer.currency},null,8,["amount","currency"])]),"cell-status":a(({row:t})=>[e(E,{status:t.data.status,class:"px-3 py-1"},{default:a(()=>[i(u(t.data.status),1)]),_:2},1032,["status"])]),"cell-paid_status":a(({row:t})=>[e(E,{status:t.data.paid_status,class:"px-3 py-1"},{default:a(()=>[i(u(t.data.paid_status),1)]),_:2},1032,["status"])]),"cell-actions":a(({row:t})=>[e(J,null,{activator:a(()=>[e(c,{name:"DotsHorizontalIcon",class:"h-5 text-gray-500"})]),default:a(()=>[e(C,{to:`invoices/${t.data.id}/view`},{default:a(()=>[e(A,null,{default:a(()=>[e(c,{name:"EyeIcon",class:"h-5 mr-3 text-gray-600"}),i(" "+u(l.$t("general.view")),1)]),_:1})]),_:2},1032,["to"])]),_:2},1024)]),_:1},8,["columns","placeholder-count"])],512),[[V,!n($)]])]),_:1})}}};export{fe as default};