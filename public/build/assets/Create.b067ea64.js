import{J as Z,G as ee,aN as te,B as y,k as u,T as ne,r as s,o as S,l as V,w as l,f as a,u as e,h as U,x as C,i as k,t as N,j as P,m as ae,U as oe,L as h,M as se,N as le,S as re}from"./vendor.8669b7df.js";import{p as ie,q as me,c as ue,b as ce,e as de,g as pe}from"./main.8525167c.js";import{_ as _e}from"./ItemUnitModal.ee9c7e3b.js";const ge=["onSubmit"],be={setup(Ie){const n=ie(),T=me(),v=ue(),j=ce(),{t:c}=Z(),B=ee(),q=te(),E=de(),p=y(!1),b=y(j.selectedCompanySettings.tax_per_item);let r=y(!1);n.$reset(),D();const g=u({get:()=>n.currentItem.price/100,set:t=>{n.currentItem.price=Math.round(t*100)}}),$=u({get:()=>n?.currentItem?.taxes?.map(t=>{if(t)return{...t,tax_type_id:t.id,tax_name:t.name+" ("+t.percent+"%)"}}),set:t=>{n.currentItem.taxes=t}}),I=u(()=>B.name==="items.edit"),x=u(()=>I.value?c("items.edit_item"):c("items.new_item")),G=u(()=>T.taxTypes.map(t=>({...t,tax_type_id:t.id,tax_name:t.name+" ("+t.percent+"%)"}))),L=u(()=>b.value==="YES"),z=u(()=>({currentItem:{name:{required:h.withMessage(c("validation.required"),se),minLength:h.withMessage(c("validation.name_min_length",{count:3}),le(3))},description:{maxLength:h.withMessage(c("validation.description_maxlength"),re(65e3))}}})),m=ne(z,n);async function A(){v.openModal({title:c("settings.customization.items.add_item_unit"),componentName:"ItemUnitModal",size:"sm"})}async function D(){if(r.value=!0,await n.fetchItemUnits({limit:"all"}),E.hasAbilities(pe.VIEW_TAX_TYPE)&&await T.fetchTaxTypes({limit:"all"}),I.value){let t=B.params.id;await n.fetchItem(t),n.currentItem.tax_per_item===1?b.value="YES":b.value="NO"}r.value=!1}async function R(){if(m.value.currentItem.$touch(),m.value.currentItem.$invalid)return!1;p.value=!0;try{let o={id:B.params.id,...n.currentItem};n.currentItem&&n.currentItem.taxes&&(o.taxes=n.currentItem.taxes.map(d=>({tax_type_id:d.tax_type_id,amount:g.value*d.percent,percent:d.percent,name:d.name,collective_tax:0}))),await(I.value?n.updateItem:n.addItem)(o),p.value=!1,q.push("/admin/items"),t()}catch{p.value=!1;return}function t(){v.closeModal(),setTimeout(()=>{n.resetCurrentItem(),v.$reset(),m.value.$reset()},300)}}return(t,o)=>{const f=s("BaseBreadcrumbItem"),d=s("BaseBreadcrumb"),Y=s("BasePageHeader"),H=s("BaseInput"),_=s("BaseInputGroup"),F=s("BaseMoney"),M=s("BaseIcon"),J=s("BaseSelectAction"),w=s("BaseMultiselect"),O=s("BaseTextarea"),W=s("BaseButton"),X=s("BaseInputGrid"),K=s("BaseCard"),Q=s("BasePage");return S(),V(Q,null,{default:l(()=>[a(Y,{title:e(x)},{default:l(()=>[a(d,null,{default:l(()=>[a(f,{title:t.$t("general.home"),to:"dashboard"},null,8,["title"]),a(f,{title:t.$tc("items.item",2),to:"/admin/items"},null,8,["title"]),a(f,{title:e(x),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),a(_e),U("form",{class:"grid lg:grid-cols-2 mt-6",action:"submit",onSubmit:oe(R,["prevent"])},[a(K,{class:"w-full"},{default:l(()=>[a(X,{layout:"one-column"},{default:l(()=>[a(_,{label:t.$t("items.name"),"content-loading":e(r),required:"",error:e(m).currentItem.name.$error&&e(m).currentItem.name.$errors[0].$message},{default:l(()=>[a(H,{modelValue:e(n).currentItem.name,"onUpdate:modelValue":o[0]||(o[0]=i=>e(n).currentItem.name=i),"content-loading":e(r),invalid:e(m).currentItem.name.$error,onInput:o[1]||(o[1]=i=>e(m).currentItem.name.$touch())},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["label","content-loading","error"]),a(_,{label:t.$t("items.price"),"content-loading":e(r)},{default:l(()=>[a(F,{modelValue:e(g),"onUpdate:modelValue":o[2]||(o[2]=i=>C(g)?g.value=i:null),"content-loading":e(r)},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading"]),a(_,{"content-loading":e(r),label:t.$t("items.unit")},{default:l(()=>[a(w,{modelValue:e(n).currentItem.unit_id,"onUpdate:modelValue":o[3]||(o[3]=i=>e(n).currentItem.unit_id=i),"content-loading":e(r),label:"name",options:e(n).itemUnits,"value-prop":"id","can-deselect":!1,"can-clear":!1,placeholder:t.$t("items.select_a_unit"),searchable:"","track-by":"name"},{action:l(()=>[a(J,{onClick:A},{default:l(()=>[a(M,{name:"PlusIcon",class:"h-4 mr-2 -ml-2 text-center text-primary-400"}),k(" "+N(t.$t("settings.customization.items.add_item_unit")),1)]),_:1})]),_:1},8,["modelValue","content-loading","options","placeholder"])]),_:1},8,["content-loading","label"]),e(L)?(S(),V(_,{key:0,label:t.$t("items.taxes"),"content-loading":e(r)},{default:l(()=>[a(w,{modelValue:e($),"onUpdate:modelValue":o[4]||(o[4]=i=>C($)?$.value=i:null),"content-loading":e(r),options:e(G),mode:"tags",label:"tax_name",class:"w-full","value-prop":"id","can-deselect":!1,"can-clear":!1,searchable:"","track-by":"tax_name",object:""},null,8,["modelValue","content-loading","options"])]),_:1},8,["label","content-loading"])):P("",!0),a(_,{label:t.$t("items.description"),"content-loading":e(r),error:e(m).currentItem.description.$error&&e(m).currentItem.description.$errors[0].$message},{default:l(()=>[a(O,{modelValue:e(n).currentItem.description,"onUpdate:modelValue":o[5]||(o[5]=i=>e(n).currentItem.description=i),"content-loading":e(r),name:"description",row:2,rows:"2",onInput:o[6]||(o[6]=i=>e(m).currentItem.description.$touch())},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading","error"]),U("div",null,[a(W,{"content-loading":e(r),type:"submit",loading:p.value},{left:l(i=>[p.value?P("",!0):(S(),V(M,{key:0,name:"SaveIcon",class:ae(i.class)},null,8,["class"]))]),default:l(()=>[k(" "+N(e(I)?t.$t("items.update_item"):t.$t("items.save_item")),1)]),_:1},8,["content-loading","loading"])])]),_:1})]),_:1})],40,ge)]),_:1})}}};export{be as default};