import{J as G,B as $,k as _,a0 as D,T as h,r as u,o as B,e as j,f as o,w as l,u as e,x as A,l as L,m as R,j as P,i as T,t as z,U as E,h as J,L as g,M as b,Q,N as H,P as K}from"./vendor.8669b7df.js";import{e as O,d as W,b as X}from"./main.8525167c.js";const Y=["onSubmit"],Z=J("span",null,null,-1),se={setup(x){const i=O(),V=W(),U=X(),{t:p}=G();let d=$(!1),f=$(null),c=$([]);i.currentUser.avatar&&c.value.push({image:i.currentUser.avatar});const S=_(()=>({name:{required:g.withMessage(p("validation.required"),b)},email:{required:g.withMessage(p("validation.required"),b),email:g.withMessage(p("validation.email_incorrect"),Q)},password:{minLength:g.withMessage(p("validation.password_length",{count:8}),H(8))},confirm_password:{sameAsPassword:g.withMessage(p("validation.password_incorrect"),K(s.password))}})),s=D({name:i.currentUser.name,email:i.currentUser.email,language:i.currentUserSettings.language||U.selectedCompanySettings.language,password:"",confirm_password:""}),n=h(S,_(()=>s));function I(r,a){f.value=a}function y(){f.value=null}async function C(){if(n.value.$touch(),n.value.$invalid)return!0;d.value=!0;let r={name:s.name,email:s.email};try{if(s.password!=null&&s.password!==void 0&&s.password!==""&&(r={...r,password:s.password}),i.currentUserSettings.language!==s.language&&await i.updateUserSettings({settings:{language:s.language}}),(await i.updateCurrentUser(r)).data.data){if(d.value=!1,f.value){let v=new FormData;v.append("admin_avatar",f.value),await i.uploadAvatar(v)}s.password="",s.confirm_password=""}}catch{return d.value=!1,!0}}return(r,a)=>{const v=u("BaseFileUploader"),m=u("BaseInputGroup"),w=u("BaseInput"),M=u("BaseMultiselect"),F=u("BaseInputGrid"),q=u("BaseIcon"),k=u("BaseButton"),N=u("BaseSettingCard");return B(),j("form",{class:"relative",onSubmit:E(C,["prevent"])},[o(N,{title:r.$t("settings.account_settings.account_settings"),description:r.$t("settings.account_settings.section_description")},{default:l(()=>[o(F,null,{default:l(()=>[o(m,{label:r.$tc("settings.account_settings.profile_picture")},{default:l(()=>[o(v,{modelValue:e(c),"onUpdate:modelValue":a[0]||(a[0]=t=>A(c)?c.value=t:c=t),avatar:!0,accept:"image/*",onChange:I,onRemove:y},null,8,["modelValue"])]),_:1},8,["label"]),Z,o(m,{label:r.$tc("settings.account_settings.name"),error:e(n).name.$error&&e(n).name.$errors[0].$message,required:""},{default:l(()=>[o(w,{modelValue:e(s).name,"onUpdate:modelValue":a[1]||(a[1]=t=>e(s).name=t),invalid:e(n).name.$error,onInput:a[2]||(a[2]=t=>e(n).name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),o(m,{label:r.$tc("settings.account_settings.email"),error:e(n).email.$error&&e(n).email.$errors[0].$message,required:""},{default:l(()=>[o(w,{modelValue:e(s).email,"onUpdate:modelValue":a[3]||(a[3]=t=>e(s).email=t),invalid:e(n).email.$error,onInput:a[4]||(a[4]=t=>e(n).email.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),o(m,{error:e(n).password.$error&&e(n).password.$errors[0].$message,label:r.$tc("settings.account_settings.password")},{default:l(()=>[o(w,{modelValue:e(s).password,"onUpdate:modelValue":a[5]||(a[5]=t=>e(s).password=t),type:"password",onInput:a[6]||(a[6]=t=>e(n).password.$touch())},null,8,["modelValue"])]),_:1},8,["error","label"]),o(m,{label:r.$tc("settings.account_settings.confirm_password"),error:e(n).confirm_password.$error&&e(n).confirm_password.$errors[0].$message},{default:l(()=>[o(w,{modelValue:e(s).confirm_password,"onUpdate:modelValue":a[7]||(a[7]=t=>e(s).confirm_password=t),type:"password",onInput:a[8]||(a[8]=t=>e(n).confirm_password.$touch())},null,8,["modelValue"])]),_:1},8,["label","error"]),o(m,{label:r.$tc("settings.language")},{default:l(()=>[o(M,{modelValue:e(s).language,"onUpdate:modelValue":a[9]||(a[9]=t=>e(s).language=t),options:e(V).config.languages,label:"name","value-prop":"code","track-by":"code","open-direction":"top"},null,8,["modelValue","options"])]),_:1},8,["label"])]),_:1}),o(k,{loading:e(d),disabled:e(d),class:"mt-6"},{left:l(t=>[e(d)?P("",!0):(B(),L(q,{key:0,name:"SaveIcon",class:R(t.class)},null,8,["class"]))]),default:l(()=>[T(" "+z(r.$tc("settings.company_info.save")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["title","description"])],40,Y)}}};export{se as default};