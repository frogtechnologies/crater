import{B as M,J as k,a0 as q,k as m,T as E,r as o,o as y,l as w,w as u,h as v,f as d,u as i,m as F,j as U,i as Y,t as j,U as D,x as S,L as B,M as G,Q as O}from"./vendor.8669b7df.js";import{b as T}from"./main.8525167c.js";const z=["onSubmit"],J={class:"grid-cols-2 col-span-1 mt-14"},L={class:"divide-y divide-gray-200"},H={setup(Q){const s=T();let r=M(!1);const{t:f}=k(),n=q({notify_invoice_viewed:s.selectedCompanySettings.notify_invoice_viewed,notify_estimate_viewed:s.selectedCompanySettings.notify_estimate_viewed,notification_email:s.selectedCompanySettings.notification_email}),$=m(()=>({notification_email:{required:B.withMessage(f("validation.required"),G),email:B.withMessage(f("validation.email_incorrect"),O)}})),l=E($,m(()=>n)),_=m({get:()=>n.notify_invoice_viewed==="YES",set:async e=>{const t=e?"YES":"NO";let c={settings:{notify_invoice_viewed:t}};n.notify_invoice_viewed=t,await s.updateCompanySettings({data:c,message:"general.setting_updated"})}}),p=m({get:()=>n.notify_estimate_viewed==="YES",set:async e=>{const t=e?"YES":"NO";let c={settings:{notify_estimate_viewed:t}};n.notify_estimate_viewed=t,await s.updateCompanySettings({data:c,message:"general.setting_updated"})}});async function V(){if(l.value.$touch(),l.value.$invalid)return!0;r.value=!0;const e={settings:{notification_email:n.notification_email}};await s.updateCompanySettings({data:e,message:"settings.notification.email_save_message"}),r.value=!1}return(e,t)=>{const c=o("BaseInput"),C=o("BaseInputGroup"),b=o("BaseIcon"),I=o("BaseButton"),N=o("BaseDivider"),g=o("BaseSwitchSection"),h=o("BaseSettingCard");return y(),w(h,{title:e.$t("settings.notification.title"),description:e.$t("settings.notification.description")},{default:u(()=>[v("form",{action:"",onSubmit:D(V,["prevent"])},[v("div",J,[d(C,{error:i(l).notification_email.$error&&i(l).notification_email.$errors[0].$message,label:e.$t("settings.notification.email"),class:"my-2",required:""},{default:u(()=>[d(c,{modelValue:i(n).notification_email,"onUpdate:modelValue":t[0]||(t[0]=a=>i(n).notification_email=a),modelModifiers:{trim:!0},invalid:i(l).notification_email.$error,type:"email",onInput:t[1]||(t[1]=a=>i(l).notification_email.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["error","label"]),d(I,{disabled:i(r),loading:i(r),variant:"primary",type:"submit",class:"mt-6"},{left:u(a=>[i(r)?U("",!0):(y(),w(b,{key:0,class:F(a.class),name:"SaveIcon"},null,8,["class"]))]),default:u(()=>[Y(" "+j(e.$tc("settings.notification.save")),1)]),_:1},8,["disabled","loading"])])],40,z),d(N,{class:"mt-6 mb-2"}),v("ul",L,[d(g,{modelValue:i(_),"onUpdate:modelValue":t[2]||(t[2]=a=>S(_)?_.value=a:null),title:e.$t("settings.notification.invoice_viewed"),description:e.$t("settings.notification.invoice_viewed_desc")},null,8,["modelValue","title","description"]),d(g,{modelValue:i(p),"onUpdate:modelValue":t[3]||(t[3]=a=>S(p)?p.value=a:null),title:e.$t("settings.notification.estimate_viewed"),description:e.$t("settings.notification.estimate_viewed_desc")},null,8,["modelValue","title","description"])])]),_:1},8,["title","description"])}}};export{H as default};