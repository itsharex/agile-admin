"use strict";(self["webpackChunkvue3_element_plus_admin"]=self["webpackChunkvue3_element_plus_admin"]||[]).push([[7574,2357,9971],{54025:function(e,t,a){a.d(t,{D4:function(){return o},EZ:function(){return d},K4:function(){return l},ZF:function(){return s},ao:function(){return i},ou:function(){return n},wS:function(){return u}});var r=a(20077);function o(e){return(0,r.Z)({url:"/backstage/configuration/page",method:"get",params:e})}function l(e){return(0,r.Z)({url:`/backstage/configuration/info/${e}`,method:"get"})}function n(e){return(0,r.Z)({url:"/backstage/configuration/create",method:"post",data:e})}function u(e){return(0,r.Z)({url:"/backstage/configuration/update",method:"post",data:e})}function d(e){return(0,r.Z)({url:"/backstage/configuration/delete",method:"post",data:e})}function i(e){return(0,r.Z)({url:"/backstage/configuration/status",method:"post",data:e})}function s(e){return(0,r.Z)({url:`/backstage/configuration/list/${e}`,method:"get"})}},97212:function(e,t,a){a.d(t,{D4:function(){return l},EZ:function(){return n},ZJ:function(){return u},aq:function(){return d}});var r=a(20077),o=a(45764);function l(e){return(0,r.Z)({url:"/backstage/file/page",method:"get",params:e})}function n(e){return(0,r.Z)({url:"/backstage/file/delete",method:"post",data:e})}function u(e){return(0,r.Z)({url:"/backstage/file/update/config",method:"post",data:e})}function d(e){let t="";const a={url:"/backstage/file/upload",method:"get",params:e};return t=`${(0,o.bR)()+a.url}${a.params?(0,o.xA)(a.params):""}`,t}},72357:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=a(59571),o=(a(97085),a(58125),a(66847)),l=(a(28630),a(440)),n=a(54592);function u(e,t,a,u,d,i){const s=o.EZ,c=r.nH,m=r.ly;return(0,l.wg)(),(0,l.j4)(m,{model:e.form,rules:e.rules,ref:"refForm",onKeyup:t[3]||(t[3]=(0,n.D2)((t=>e.submit()),["enter"])),"label-position":"top"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{label:"域名",prop:"domain"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{modelValue:e.form.domain,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.domain=t),placeholder:"域名"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(c,{label:"前缀",prop:"prefix"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{modelValue:e.form.prefix,"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.prefix=t),placeholder:"前缀"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(c,{label:"存储目录",prop:"path"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{modelValue:e.form.path,"onUpdate:modelValue":t[2]||(t[2]=t=>e.form.path=t),placeholder:"存储目录"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])}var d=a(84367),i=(0,l.aZ)({emits:["refresh"],props:{data:{type:Object}},setup(e){const t=(0,d.iH)(),a=(0,d.qj)({types:[],form:{domain:"",prefix:"",path:""}}),r=(0,d.qj)(function(){return{domain:[{required:!0,message:"请输入域名",trigger:"blur"}],path:[{required:!0,message:"请输入存储目录",trigger:"blur"}]}}());(0,l.YP)(e.data,(e=>{a.form={...e}}),{deep:!0,immediate:!0});const o=e=>{t.value.validate((t=>{"function"===typeof e&&e(t,a.form)}))};return(0,l.Jd)((()=>{t.value.resetFields()})),{refForm:t,...(0,d.BK)(a),rules:r,validate:o}}}),s=a(40465);const c=(0,s.Z)(i,[["render",u]]);var m=c},39971:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=a(59571),o=(a(97085),a(58125),a(66847)),l=(a(28630),a(440)),n=a(54592);function u(e,t,a,u,d,i){const s=o.EZ,c=r.nH,m=r.ly;return(0,l.wg)(),(0,l.j4)(m,{model:e.form,rules:e.rules,ref:"refForm",onKeyup:t[5]||(t[5]=(0,n.D2)((t=>e.submit()),["enter"])),"label-position":"top"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{label:"域名",prop:"domain"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{modelValue:e.form.domain,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.domain=t),placeholder:"域名"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(c,{label:"前缀",prop:"prefix"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{modelValue:e.form.prefix,"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.prefix=t),placeholder:"前缀"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(c,{label:"AccessKey",prop:"access"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{modelValue:e.form.access,"onUpdate:modelValue":t[2]||(t[2]=t=>e.form.access=t),placeholder:"AccessKey"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(c,{label:"SecretKey",prop:"secret"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{modelValue:e.form.secret,"onUpdate:modelValue":t[3]||(t[3]=t=>e.form.secret=t),placeholder:"SecretKey"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(c,{label:"空间名称",prop:"bucket"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{modelValue:e.form.bucket,"onUpdate:modelValue":t[4]||(t[4]=t=>e.form.bucket=t),placeholder:"空间名称"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])}var d=a(84367),i=(0,l.aZ)({emits:["refresh"],props:{data:{type:Object}},setup(e){const t=(0,d.iH)(),a=(0,d.qj)({types:[],form:{domain:"",prefix:"",access:"",bucket:""}}),r=(0,d.qj)(function(){return{domain:[{required:!0,message:"请输入域名",trigger:"blur"}],access:[{required:!0,message:"请输入秘钥",trigger:"blur"}],secret:[{required:!0,message:"请输入私钥",trigger:"blur"}],bucket:[{required:!0,message:"请输入空间名称",trigger:"blur"}]}}());(0,l.YP)(e.data,(e=>{a.form={...e}}),{deep:!0,immediate:!0});const o=e=>{t.value.validate((t=>{"function"===typeof e&&e(t,a.form)}))};return(0,l.Jd)((()=>{t.value.resetFields()})),{refForm:t,...(0,d.BK)(a),rules:r,validate:o}}}),s=a(40465);const c=(0,s.Z)(i,[["render",u]]);var m=c},47574:function(e,t,a){a.r(t),a.d(t,{default:function(){return V}});var r=a(42321),o=(a(1926),a(14646)),l=(a(21123),a(13289)),n=(a(14635),a(59571)),u=(a(97085),a(58125),a(43138)),d=(a(74123),a(37471),a(440)),i=a(38643);const s={class:"dialog-footer"},c=(0,d.Uk)("取消"),m=(0,d.Uk)("确认");function f(e,t,a,f,p,g){const b=u.rh,h=u.KD,v=n.nH,y=n.ly,k=l.mi,w=o.d0,_=r.t,V=(0,d.Q2)("repeat");return(0,d.wg)(),(0,d.j4)(w,{width:"500px",title:"备份配置",modelValue:e.visible,"onUpdate:modelValue":t[3]||(t[3]=t=>e.visible=t),"close-on-click-modal":!1,onClosed:e.dialogClosedHandle,"append-to-body":"",draggable:""},{footer:(0,d.w5)((()=>[(0,d._)("span",s,[(0,d.Wm)(k,{onClick:t[1]||(t[1]=t=>e.visible=!1)},{default:(0,d.w5)((()=>[c])),_:1}),(0,d.wy)(((0,d.wg)(),(0,d.j4)(k,{type:"primary",onClick:t[2]||(t[2]=t=>e.submit())},{default:(0,d.w5)((()=>[m])),_:1})),[[V]])])])),default:(0,d.w5)((()=>[(0,d.wy)(((0,d.wg)(),(0,d.iD)("div",null,[(0,d.Wm)(y,{"label-position":"top"},{default:(0,d.w5)((()=>[(0,d.Wm)(v,{label:"类型"},{default:(0,d.w5)((()=>[(0,d.Wm)(h,{modelValue:e.id,"onUpdate:modelValue":t[0]||(t[0]=t=>e.id=t),onChange:e.changeHandle},{default:(0,d.w5)((()=>[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(e.types,(e=>((0,d.wg)(),(0,d.j4)(b,{key:e.id,label:e.id},{default:(0,d.w5)((()=>[(0,d.Uk)((0,i.zw)(e.name),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1}),e.component?((0,d.wg)(),(0,d.j4)((0,d.LL)(e.component),{key:0,ref:"refForm",data:e.current.json_value},null,8,["data"])):(0,d.kq)("",!0)])),[[_,e.loading]])])),_:1},8,["modelValue","onClosed"])}var p=a(84367),g=a(68257),b=a(72357),h=a(39971),v=a(54025),y=a(97212),k=(0,d.aZ)({emits:["refresh"],components:{Local:b["default"],Qiniu:h["default"]},setup(){const e=(0,p.iH)(),t=(0,p.qj)({visible:!1,loading:!1,key:"CLOUD_STORAGE",types:[],id:"",current:{type:"",json_value:{}}}),a=(0,d.Fl)((()=>{let e="";switch(t.current.type){case 1:e="Local";break;case 2:e="Qiniu";break}return e})),r=async()=>{t.visible=!0,t.loading=!0;const e=await(0,v.ZF)(t.key);if(e){t.types=e.data;for(let e=0;e<t.types.length;e++){const a=t.types[e];if(1===a.status){t.id=a.id;const e=a.json_value?JSON.parse(a.json_value):{};t.current={...a,json_value:e};break}}}(0,d.Y3)((()=>{t.loading=!1}))},o=e=>{for(let a=0;a<t.types.length;a++){const r=t.types[a];if(r.id===e){t.id=r.id;const e=r.json_value?JSON.parse(r.json_value):{};t.current={...r,json_value:e};break}}},l=()=>{e.value.validate((async(e,a={})=>{if(e){const e={id:t.id,json_key:t.key,json_value:JSON.stringify(a)},r=await(0,y.ZJ)(e);r&&(t.visible=!1,(0,g.z8)({message:"操作成功!",type:"success"}))}}))},n=()=>{};return{refForm:e,component:a,...(0,p.BK)(t),init:r,changeHandle:o,submit:l,dialogClosedHandle:n}}}),w=a(40465);const _=(0,w.Z)(k,[["render",f]]);var V=_}}]);