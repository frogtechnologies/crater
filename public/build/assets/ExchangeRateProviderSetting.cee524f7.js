import{u as Y}from"./exchange-rate.664632a5.js";import{c as H,b as se,j as le}from"./main.8525167c.js";import{J,B as b,k as C,L as B,M as F,O as X,R as ce,T as ie,C as T,A as ue,r as d,o as R,l as w,w as s,h as p,i as k,t as y,u as e,f as o,j as I,m as Z,U as de,ah as ge,e as ve,aZ as he,a_ as pe,a$ as me,b0 as fe,F as ye,a0 as _e}from"./vendor.8669b7df.js";import xe from"./BaseTable.990efc67.js";const Ce={class:"flex justify-between w-full"},Ee=["onSubmit"],$e={class:"px-4 md:px-8 py-8 overflow-y-auto sm:p-6"},be={class:"z-0 flex justify-end p-4 border-t border-gray-200 border-solid"},Re={setup(K){const{t:E}=J();let c=b(!1),i=b(!1),_=b(!1),h=b([]),m=b([]);const f=H(),t=Y();let D=b([]);const P=C(()=>({currentExchangeRate:{key:{required:B.withMessage(E("validation.required"),F)},driver:{required:B.withMessage(E("validation.required"),F)},currencies:{required:B.withMessage(E("validation.required"),F)}},currencyConverter:{type:{required:B.withMessage(E("validation.required"),X(l))},url:{required:B.withMessage(E("validation.required"),X(x)),url:B.withMessage(E("validation.invalid_url"),ce)}}})),U=C(()=>t.drivers.map(r=>Object.assign({},r,{key:E(r.key)}))),A=C(()=>f.active&&f.componentName==="ExchangeRateProviderModal");C(()=>f.title);const l=C(()=>t.currentExchangeRate.driver==="currency_converter"),x=C(()=>t.currencyConverter&&t.currencyConverter.type==="DEDICATED"),S=C(()=>{switch(t.currentExchangeRate.driver){case"currency_converter":return"https://www.currencyconverterapi.com";case"currency_freak":return"https://currencyfreaks.com";case"currency_layer":return"https://currencylayer.com";case"open_exchange_rate":return"https://openexchangerates.org";default:return""}}),n=ie(P,C(()=>t));function M(){h.value=[]}function O(){const{currencies:r}=t.currentExchangeRate;h.value.forEach(a=>{r.forEach((v,$)=>{v===a&&r.splice($,1)})}),h.value=[]}function q(){t.currentExchangeRate.key=null,t.currentExchangeRate.currencies=[],t.supportedCurrencies=[]}function g(){t.supportedCurrencies=[],m.value=[],t.currentExchangeRate={id:null,name:"",driver:"",key:"",active:!0,currencies:[]},t.currencyConverter={type:"",url:""},h.value=[]}async function z(){t.currentExchangeRate.driver="currency_converter";let r={};t.isEdit&&(r.provider_id=t.currentExchangeRate.id),i.value=!0,await t.fetchDefaultProviders(),await t.fetchActiveCurrency(r),m.value=t.currentExchangeRate.currencies,i.value=!1}T(()=>l.value,(r,a)=>{r&&ee()},{immediate:!0}),T(()=>t.currentExchangeRate.key,(r,a)=>{r&&N()}),T(()=>t?.currencyConverter?.type,(r,a)=>{r&&N()}),N=ue.exports.debounce(N,500);function Q(){return n.value.$touch(),te(),!!(n.value.$invalid||h.value.length&&t.currentExchangeRate.active)}async function W(){if(Q())return!0;let r={...t.currentExchangeRate};l.value&&(r.driver_config={...t.currencyConverter},x.value||(r.driver_config.url=""));const a=t.isEdit?t.updateProvider:t.addProvider;c.value=!0,await a(r).then(v=>{c.value=!1,f.refreshData&&f.refreshData(),j()}).catch(v=>{c.value=!1})}async function ee(){let r=await t.getCurrencyConverterServers();D.value=r.data.currency_converter_servers,t.currencyConverter.type="FREE"}function N(){const{driver:r,key:a}=t.currentExchangeRate;if(r&&a){_.value=!0;let v={driver:r,key:a};if(l.value&&!t.currencyConverter.type){_.value=!1;return}t?.currencyConverter?.type&&(v.type=t.currencyConverter.type),t.fetchCurrencies(v).then($=>{_.value=!1}).catch($=>{_.value=!1})}}function te(r=!0){h.value=[];const{currencies:a}=t.currentExchangeRate;a.length&&t.activeUsedCurrencies?.length&&a.forEach(v=>{t.activeUsedCurrencies.includes(v)&&h.value.push(v)})}function j(){f.closeModal(),setTimeout(()=>{g(),n.value.$reset()},300)}return(r,a)=>{const v=d("BaseIcon"),$=d("BaseMultiselect"),V=d("BaseInputGroup"),G=d("BaseInput"),re=d("BaseSwitch"),ae=d("BaseInputGrid"),ne=d("BaseInfoAlert"),L=d("BaseButton"),oe=d("BaseModal");return R(),w(oe,{show:e(A),onClose:j,onOpen:z},{header:s(()=>[p("div",Ce,[k(y(e(f).title)+" ",1),o(v,{name:"XIcon",class:"w-6 h-6 text-gray-500 cursor-pointer",onClick:j})])]),default:s(()=>[p("form",{onSubmit:de(W,["prevent"])},[p("div",$e,[o(ae,{layout:"one-column"},{default:s(()=>[o(V,{label:r.$tc("settings.exchange_rate.driver"),"content-loading":e(i),required:"",error:e(n).currentExchangeRate.driver.$error&&e(n).currentExchangeRate.driver.$errors[0].$message,"help-text":e(S)},{default:s(()=>[o($,{modelValue:e(t).currentExchangeRate.driver,"onUpdate:modelValue":[a[0]||(a[0]=u=>e(t).currentExchangeRate.driver=u),q],options:e(U),"content-loading":e(i),"value-prop":"value","can-deselect":!0,label:"key",searchable:!0,invalid:e(n).currentExchangeRate.driver.$error,onInput:a[1]||(a[1]=u=>e(n).currentExchangeRate.driver.$touch())},null,8,["modelValue","options","content-loading","invalid"])]),_:1},8,["label","content-loading","error","help-text"]),e(l)?(R(),w(V,{key:0,required:"",label:r.$t("settings.exchange_rate.server"),"content-loading":e(i),error:e(n).currencyConverter.type.$error&&e(n).currencyConverter.type.$errors[0].$message},{default:s(()=>[o($,{modelValue:e(t).currencyConverter.type,"onUpdate:modelValue":[a[2]||(a[2]=u=>e(t).currencyConverter.type=u),q],"content-loading":e(i),"value-prop":"value",searchable:"",options:e(D),invalid:e(n).currencyConverter.type.$error,label:"value"},null,8,["modelValue","content-loading","options","invalid"])]),_:1},8,["label","content-loading","error"])):I("",!0),o(V,{label:r.$t("settings.exchange_rate.key"),required:"","content-loading":e(i),error:e(n).currentExchangeRate.key.$error&&e(n).currentExchangeRate.key.$errors[0].$message},{default:s(()=>[o(G,{modelValue:e(t).currentExchangeRate.key,"onUpdate:modelValue":a[3]||(a[3]=u=>e(t).currentExchangeRate.key=u),"content-loading":e(i),type:"text",name:"key",loading:e(_),"loading-position":"right",invalid:e(n).currentExchangeRate.key.$error},null,8,["modelValue","content-loading","loading","invalid"])]),_:1},8,["label","content-loading","error"]),e(t).supportedCurrencies.length?(R(),w(V,{key:1,label:r.$t("settings.exchange_rate.currency"),"content-loading":e(i),error:e(n).currentExchangeRate.currencies.$error&&e(n).currentExchangeRate.currencies.$errors[0].$message,"help-text":r.$t("settings.exchange_rate.currency_help_text")},{default:s(()=>[o($,{modelValue:e(t).currentExchangeRate.currencies,"onUpdate:modelValue":a[4]||(a[4]=u=>e(t).currentExchangeRate.currencies=u),"content-loading":e(i),"value-prop":"code",mode:"tags",searchable:"",options:e(t).supportedCurrencies,invalid:e(n).currentExchangeRate.currencies.$error,label:"code","track-by":"code",onInput:a[5]||(a[5]=u=>e(n).currentExchangeRate.currencies.$touch()),openDirection:"top"},null,8,["modelValue","content-loading","options","invalid"])]),_:1},8,["label","content-loading","error","help-text"])):I("",!0),e(x)?(R(),w(V,{key:2,label:r.$t("settings.exchange_rate.url"),"content-loading":e(i),error:e(n).currencyConverter.url.$error&&e(n).currencyConverter.url.$errors[0].$message},{default:s(()=>[o(G,{modelValue:e(t).currencyConverter.url,"onUpdate:modelValue":a[6]||(a[6]=u=>e(t).currencyConverter.url=u),"content-loading":e(i),type:"url",invalid:e(n).currencyConverter.url.$error,onInput:a[7]||(a[7]=u=>e(n).currencyConverter.url.$touch())},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["label","content-loading","error"])):I("",!0),o(re,{modelValue:e(t).currentExchangeRate.active,"onUpdate:modelValue":a[8]||(a[8]=u=>e(t).currentExchangeRate.active=u),class:"flex","label-right":r.$t("settings.exchange_rate.active")},null,8,["modelValue","label-right"])]),_:1}),e(h).length&&e(t).currentExchangeRate.active?(R(),w(ne,{key:0,class:"mt-5",title:r.$t("settings.exchange_rate.currency_in_used"),lists:[e(h).toString()],actions:["Remove"],onHide:M,onRemove:O},null,8,["title","lists"])):I("",!0)]),p("div",be,[o(L,{class:"mr-3",variant:"primary-outline",type:"button",disabled:e(c),onClick:j},{default:s(()=>[k(y(r.$t("general.cancel")),1)]),_:1},8,["disabled"]),o(L,{loading:e(c),disabled:e(c)||e(_),variant:"primary",type:"submit"},{left:s(u=>[e(c)?I("",!0):(R(),w(v,{key:0,name:"SaveIcon",class:Z(u.class)},null,8,["class"]))]),default:s(()=>[k(" "+y(e(t).isEdit?r.$t("general.update"):r.$t("general.save")),1)]),_:1},8,["loading","disabled"])])],40,Ee)]),_:1},8,["show"])}}},ke={slot:"header",class:"flex flex-wrap justify-between lg:flex-nowrap"},Be={class:"text-lg font-medium text-left"},we={class:"mt-2 text-sm leading-snug text-left text-gray-500",style:{"max-width":"680px"}},Se={class:"mt-4 lg:mt-0 lg:ml-2"},Ve={class:"capitalize"},Ie={class:"inline-block"},je={setup(K){const{tm:E,t:c}=J();se();const i=Y(),_=H(),h=le();let m=b("");const f=ge("utils"),t=C(()=>[{key:"driver",label:c("settings.exchange_rate.driver"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"key",label:c("settings.exchange_rate.key"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"active",label:c("settings.exchange_rate.active"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"actions",label:"",tdClass:"text-right text-sm font-medium",sortable:!1}]);async function D({page:l,sort:x}){let S=_e({orderByField:x.fieldName||"created_at",orderBy:x.order||"desc",page:l}),n=await i.fetchProviders(S);return{data:n.data.data,pagination:{totalPages:n.data.meta.last_page,currentPage:l,totalCount:n.data.meta.total,limit:5}}}function P(){_.openModal({title:c("settings.exchange_rate.new_driver"),componentName:"ExchangeRateProviderModal",size:"md",refreshData:m.value&&m.value.refresh})}function U(l){i.fetchProvider(l),_.openModal({title:c("settings.exchange_rate.edit_driver"),componentName:"ExchangeRateProviderModal",size:"md",data:l,refreshData:m.value&&m.value.refresh})}function A(l){h.openDialog({title:c("general.are_you_sure"),message:c("settings.exchange_rate.exchange_rate_confirm_delete"),yesLabel:c("general.ok"),noLabel:c("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(async x=>{x&&(await i.deleteExchangeRate(l),m.value&&m.value.refresh())})}return(l,x)=>{const S=d("BaseButton"),n=d("BaseBadge"),M=d("BaseDropdownItem"),O=d("BaseDropdown"),q=d("BaseCard");return R(),ve(ye,null,[o(Re),o(q,null,{default:s(()=>[p("div",ke,[p("div",null,[p("h6",Be,y(l.$t("settings.menu_title.exchange_rate")),1),p("p",we,y(l.$t("settings.exchange_rate.providers_description")),1)]),p("div",Se,[o(S,{variant:"primary-outline",size:"lg",onClick:P},{left:s(g=>[o(e(he),{class:Z(g.class)},null,8,["class"])]),default:s(()=>[k(" "+y(l.$t("settings.exchange_rate.new_driver")),1)]),_:1})])]),o(xe,{ref_key:"table",ref:m,class:"mt-16",data:D,columns:e(t)},{"cell-driver":s(({row:g})=>[p("span",Ve,y(g.data.driver.replace("_"," ")),1)]),"cell-active":s(({row:g})=>[o(n,{"bg-color":e(f).getBadgeStatusColor(g.data.active?"YES":"NO").bgColor,color:e(f).getBadgeStatusColor(g.data.active?"YES":"NO").color},{default:s(()=>[k(y(g.data.active?"YES":"NO"),1)]),_:2},1032,["bg-color","color"])]),"cell-actions":s(({row:g})=>[o(O,null,{activator:s(()=>[p("div",Ie,[o(e(pe),{class:"w-5 text-gray-500"})])]),default:s(()=>[o(M,{onClick:z=>U(g.data.id)},{default:s(()=>[o(e(me),{class:"h-5 mr-3 text-gray-600"}),k(" "+y(l.$t("general.edit")),1)]),_:2},1032,["onClick"]),o(M,{onClick:z=>A(g.data.id)},{default:s(()=>[o(e(fe),{class:"h-5 mr-3 text-gray-600"}),k(" "+y(l.$t("general.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["columns"])]),_:1})],64)}}};export{je as default};