import{r as m,o as a,e as i,h as t,t as e,f as c,w as l,i as u,j as g,B as b,G as k,aN as j,a as L,k as h,u as n,l as C}from"./vendor.8669b7df.js";const I={class:"bg-white shadow overflow-hidden rounded-lg mt-6"},N={class:"px-4 py-5 sm:px-6"},S={class:"text-lg leading-6 font-medium text-gray-900"},H={key:0,class:"border-t border-gray-200 px-4 py-5 sm:p-0"},M={class:"sm:divide-y sm:divide-gray-200"},P={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},T={class:"text-sm font-medium text-gray-500"},V={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},D={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},R={class:"text-sm font-medium text-gray-500"},U={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},F={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},q={class:"text-sm font-medium text-gray-500 capitalize"},z={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},A={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},E={class:"text-sm font-medium text-gray-500"},G={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},O={key:0,class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},J={class:"text-sm font-medium text-gray-500"},K={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Q=["innerHTML"],W={key:1,class:"w-full flex items-center justify-center p-5"},X={props:{invoice:{type:[Object,null],required:!0}},setup(o){return(s,d)=>{const p=m("BaseInvoiceStatusBadge"),_=m("BaseFormatMoney"),y=m("BaseSpinner");return a(),i("div",I,[t("div",N,[t("h3",S,e(s.$t("invoices.invoice_information")),1)]),o.invoice?(a(),i("div",H,[t("dl",M,[t("div",P,[t("dt",T,e(s.$t("general.from")),1),t("dd",V,e(o.invoice.company.name),1)]),t("div",D,[t("dt",R,e(s.$t("general.to")),1),t("dd",U,e(o.invoice.customer.name),1)]),t("div",F,[t("dt",q,e(s.$t("invoices.paid_status").toLowerCase()),1),t("dd",z,[c(p,{status:o.invoice.paid_status,class:"px-3 py-1"},{default:l(()=>[u(e(o.invoice.paid_status),1)]),_:1},8,["status"])])]),t("div",A,[t("dt",E,e(s.$t("invoices.total")),1),t("dd",G,[c(_,{currency:o.invoice.currency,amount:o.invoice.total},null,8,["currency","amount"])])]),o.invoice.notes?(a(),i("div",O,[t("dt",J,e(s.$t("invoices.notes")),1),t("dd",K,[t("span",{innerHTML:o.invoice.notes},null,8,Q)])])):g("",!0)])])):(a(),i("div",W,[c(y,{class:"text-primary-500 h-10 w-10"})]))])}}},Y={class:"h-screen h-screen-ios overflow-y-auto min-h-0"},Z=t("div",{class:"bg-gradient-to-r from-primary-500 to-primary-400 h-5"},null,-1),tt={class:"relative p-6 pb-28 px-4 md:px-6 w-full md:w-auto md:max-w-xl mx-auto"},st={class:"flex flex-col md:flex-row absolute md:relative bottom-2 left-0 px-4 md:px-0 w-full md:space-x-4 md:space-y-0 space-y-2"},et=["href"],ot={key:0,class:"flex items-center justify-center mt-4 text-gray-500 font-normal"},at=u(" Powered by "),nt={href:"https://craterapp.com",target:"_blank"},it=["src"],mt={setup(o){let s=b(null);const d=k(),p=j();_();async function _(){let r=await L.get(`/customer/invoices/${d.params.hash}`);s.value=r.data.data}const y=h(()=>d.path+"?pdf");function f(){return new URL("/build/img/crater-logo-gray.png",self.location)}const x=h(()=>window.customer_logo?window.customer_logo:!1),w=h(()=>s.value?.invoice_number);function B(){p.push({name:"invoice.pay",params:{hash:d.params.hash,company:s.value.company.slug}})}return(r,ct)=>{const v=m("BaseButton"),$=m("BasePageHeader");return a(),i("div",Y,[Z,t("div",tt,[c($,{title:n(w)||""},{actions:l(()=>[t("div",st,[t("a",{href:n(y),target:"_blank",class:"block w-full"},[c(v,{variant:"primary-outline",class:"justify-center w-full"},{default:l(()=>[u(e(r.$t("general.download_pdf")),1)]),_:1})],8,et),n(s)&&n(s).paid_status!=="PAID"&&n(s).payment_module_enabled?(a(),C(v,{key:0,variant:"primary",class:"justify-center",onClick:B},{default:l(()=>[u(e(r.$t("general.pay_invoice")),1)]),_:1})):g("",!0)])]),_:1},8,["title"]),c(X,{invoice:n(s)},null,8,["invoice"]),n(x)?g("",!0):(a(),i("div",ot,[at,t("a",nt,[t("img",{src:f(),class:"h-4 ml-1 mb-1"},null,8,it)])]))])])}}};export{mt as default};