"use strict";(self["webpackChunkvue3_element_plus_admin"]=self["webpackChunkvue3_element_plus_admin"]||[]).push([[1591,8164],{23930:function(e){
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var n=/["'&<>]/;function t(e){var t,r=""+e,a=n.exec(r);if(!a)return r;var o="",l=0,i=0;for(l=a.index;l<r.length;l++){switch(r.charCodeAt(l)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}i!==l&&(o+=r.substring(i,l)),i=l+1,o+=t}return i!==l?o+r.substring(i,l):o}e.exports=t},78362:function(e,n,t){t.d(n,{D4:function(){return a},Iw:function(){return s},K4:function(){return o},Lo:function(){return g},PI:function(){return p},Sx:function(){return h},Uj:function(){return c},X$:function(){return w},b2:function(){return f},c3:function(){return m},ef:function(){return u},mg:function(){return d},ou:function(){return l},wS:function(){return i}});var r=t(20077);function a(e){return(0,r.Z)({url:"/backstage/role/page",method:"get",params:e})}function o(e){return(0,r.Z)({url:`/backstage/role/info/${e}`,method:"get"})}function l(e){return(0,r.Z)({url:"/backstage/role/create",method:"post",data:e})}function i(e){return(0,r.Z)({url:"/backstage/role/update",method:"post",data:e})}function u(e){return(0,r.Z)({url:"/backstage/role/delete",method:"post",data:e})}function d(e){return(0,r.Z)({url:"/backstage/role/show",method:"post",data:e})}function s(){return(0,r.Z)({url:"/backstage/role/select/list",method:"get"})}function c(e){return(0,r.Z)({url:"/backstage/role/global/page",method:"get",params:e})}function m(e){return(0,r.Z)({url:`/backstage/role/global/info/${e}`,method:"get"})}function f(e){return(0,r.Z)({url:"/backstage/role/global/create",method:"post",data:e})}function p(e){return(0,r.Z)({url:"/backstage/role/global/update",method:"post",data:e})}function w(e){return(0,r.Z)({url:"/backstage/role/global/delete",method:"post",data:e})}function g(e){return(0,r.Z)({url:"/backstage/role/global/show",method:"post",data:e})}function h(e){return(0,r.Z)({url:`/backstage/role/global/select/list/${e}`,method:"get"})}},95006:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(84367);function a(){const e=(0,r.qj)({current:1,size:10,total:0,sizes:[10,20,30,40,50,100,200]});return{page:e}}},70392:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r=t(42321),a=(t(1926),t(14646)),o=(t(21123),t(13289)),l=(t(14635),t(59571)),i=(t(97085),t(33612)),u=(t(82262),t(58125),t(66847)),d=(t(28630),t(440)),s=t(54592);const c={class:"dialog-footer"},m=(0,d.Uk)("取消"),f=(0,d.Uk)("确认");function p(e,n,t,p,w,g){const h=u.EZ,b=l.nH,v=i.m,k=l.ly,_=o.mi,y=a.d0,x=r.t,C=(0,d.Q2)("repeat");return(0,d.wg)(),(0,d.j4)(y,{width:"450px",title:e.form.id?"编辑":"新增",modelValue:e.visible,"onUpdate:modelValue":n[6]||(n[6]=n=>e.visible=n),"close-on-click-modal":!1,onClosed:e.dialogClosedHandle,"append-to-body":"",draggable:""},{footer:(0,d.w5)((()=>[(0,d._)("span",c,[(0,d.Wm)(_,{onClick:n[4]||(n[4]=n=>e.visible=!1)},{default:(0,d.w5)((()=>[m])),_:1}),(0,d.wy)(((0,d.wg)(),(0,d.j4)(_,{type:"primary",onClick:n[5]||(n[5]=n=>e.submit())},{default:(0,d.w5)((()=>[f])),_:1})),[[C]])])])),default:(0,d.w5)((()=>[(0,d.wy)(((0,d.wg)(),(0,d.j4)(k,{model:e.form,rules:e.rules,ref:"refForm",onKeyup:n[3]||(n[3]=(0,s.D2)((n=>e.submit()),["enter"])),"label-position":"top"},{default:(0,d.w5)((()=>[(0,d.Wm)(b,{label:"角色名称",prop:"name"},{default:(0,d.w5)((()=>[(0,d.Wm)(h,{modelValue:e.form.name,"onUpdate:modelValue":n[0]||(n[0]=n=>e.form.name=n),placeholder:"角色名称",maxlength:"20","show-word-limit":""},null,8,["modelValue"])])),_:1}),(0,d.Wm)(b,{label:"备注",prop:"remark"},{default:(0,d.w5)((()=>[(0,d.Wm)(h,{modelValue:e.form.remark,"onUpdate:modelValue":n[1]||(n[1]=n=>e.form.remark=n),type:"textarea",placeholder:"备注",maxlength:"100","show-word-limit":""},null,8,["modelValue"])])),_:1}),(0,d.Wm)(b,{label:"权限",prop:"enterprise_menu_ids"},{default:(0,d.w5)((()=>[(0,d.Wm)(v,{class:"width-full",ref:"refCascader",modelValue:e.form.enterprise_menu_ids,"onUpdate:modelValue":n[2]||(n[2]=n=>e.form.enterprise_menu_ids=n),options:e.menus,props:e.cascaderProps,"show-all-levels":!1,"collapse-tags":"","collapse-tags-tooltip":"",clearable:""},null,8,["modelValue","options","props"])])),_:1})])),_:1},8,["model","rules"])),[[x,e.loading]])])),_:1},8,["title","modelValue","onClosed"])}var w=t(84367),g=t(68257),h=t(58712),b=t(78362),v=(0,d.aZ)({emits:["refresh"],setup(e,{emit:n}){const t=(0,w.iH)(),r=(0,w.iH)(),a=(0,w.qj)({loading:!1,visible:!1,form:{id:null,name:"",remark:"",enterprise_menu_ids:[]},menus:[]}),o=(0,w.qj)(function(){return{name:[{required:!0,message:"请输入角色名称",trigger:"blur"}],enterprise_menu_ids:[{type:"array",required:!0,message:"请选择权限",trigger:"blur"}]}}()),l=(0,d.Fl)((()=>{const e={multiple:!0,emitPath:!1,checkStrictly:!1,value:"id",label:"name_cn",children:"children"};return e})),i=async()=>{const e=await(0,h.Iw)();if(e){const n=[{id:0,name_cn:"一级菜单",name_en:"First level menu",parent_id:0,children:e.data}];a.menus=n}},u=async e=>{if(a.visible=!0,a.loading=!0,a.form.id=e,await i(),e){const n=await(0,b.K4)(e);n&&(a.form.name=n.data.name,a.form.remark=n.data.remark,a.form.enterprise_menu_ids=n.data.enterprise_menu_ids)}(0,d.Y3)((()=>{a.loading=!1}))},s=()=>{t.value.validate((async e=>{if(e){const e=r.value.getCheckedNodes(!0),t=[];e.forEach((e=>{t.push.apply(t,e.pathValues)})),a.form.enterprise_menu_ids=Array.from(new Set(t)).filter((e=>0!==e));const o=a.form.id?await(0,b.wS)(a.form):await(0,b.ou)(a.form);o&&(a.visible=!1,(0,g.z8)({message:"操作成功!",type:"success"}),n("refresh"))}}))},c=()=>{t.value.resetFields()};return{refForm:t,refCascader:r,...(0,w.BK)(a),rules:o,cascaderProps:l,init:u,submit:s,dialogClosedHandle:c}}}),k=t(40465);const _=(0,k.Z)(v,[["render",p]]);var y=_},93993:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var r=t(42321),a=(t(1926),t(91454)),o=t(86690),l=t(15227),i=(t(83049),t(65298)),u=(t(39504),t(79062),t(59571)),d=(t(97085),t(13289)),s=(t(14635),t(58125),t(66847)),c=(t(28630),t(440)),m=t(54592);const f=(0,c.Uk)("搜索"),p=(0,c.Uk)("重置"),w=(0,c.Uk)("新增"),g=(0,c.Uk)("批量删除"),h=(0,c.Uk)("编辑"),b=(0,c.Uk)("删除");function v(e,n,t,v,k,_){const y=s.EZ,x=u.nH,C=d.mi,Z=u.ly,H=l.$Y,W=i.OX,U=l.eI,V=(0,c.up)("AddEdit"),F=o["default"],j=a["default"],E=(0,c.Q2)("repeat"),N=(0,c.Q2)("permission"),D=r.t;return(0,c.wg)(),(0,c.j4)(j,null,{header:(0,c.w5)((()=>[(0,c.Wm)(Z,{ref:"refForm",inline:!0,onKeyup:n[5]||(n[5]=(0,m.D2)((n=>e.reacquireHandle()),["enter"]))},{default:(0,c.w5)((()=>[(0,c.Wm)(x,null,{default:(0,c.w5)((()=>[(0,c.Wm)(y,{modelValue:e.form.name,"onUpdate:modelValue":n[0]||(n[0]=n=>e.form.name=n),placeholder:"名称",clearable:""},null,8,["modelValue"])])),_:1}),(0,c.Wm)(x,null,{default:(0,c.w5)((()=>[(0,c.wy)(((0,c.wg)(),(0,c.j4)(C,{onClick:n[1]||(n[1]=n=>e.reacquireHandle())},{default:(0,c.w5)((()=>[f])),_:1})),[[E]]),(0,c.wy)(((0,c.wg)(),(0,c.j4)(C,{onClick:n[2]||(n[2]=n=>(e.clearJson(e.form),e.reacquireHandle()))},{default:(0,c.w5)((()=>[p])),_:1})),[[E]]),(0,c.wy)(((0,c.wg)(),(0,c.j4)(C,{type:"primary",onClick:n[3]||(n[3]=n=>e.addEditHandle())},{default:(0,c.w5)((()=>[w])),_:1})),[[N,"role:create"]]),(0,c.wy)(((0,c.wg)(),(0,c.j4)(C,{type:"danger",disabled:e.selection.length<=0,onClick:n[4]||(n[4]=n=>e.deleteHandle())},{default:(0,c.w5)((()=>[g])),_:1},8,["disabled"])),[[N,"role:delete"]])])),_:1})])),_:1},512)])),default:(0,c.w5)((()=>[(0,c.wy)(((0,c.wg)(),(0,c.j4)(U,{ref:"refTable",data:e.list,onSelectionChange:e.selectionHandle,border:""},{default:(0,c.w5)((()=>[(0,c.Wm)(H,{align:"center",type:"selection",width:"50"}),(0,c.Wm)(H,{align:"center",label:"ID",prop:"id",width:"80"}),(0,c.Wm)(H,{align:"center",label:"角色名称",prop:"name"}),(0,c.Wm)(H,{align:"center",label:"备注",prop:"remark"}),e.havePermission("role:show")?((0,c.wg)(),(0,c.j4)(H,{key:0,align:"center",label:"是否显示",prop:"show",width:"160"},{default:(0,c.w5)((({row:n})=>[(0,c.wy)((0,c.Wm)(W,{onChange:t=>e.showHandle(n),modelValue:n.show,"onUpdate:modelValue":e=>n.show=e,"active-value":1,"inactive-value":0},null,8,["onChange","modelValue","onUpdate:modelValue"]),[[N,"role:show"]])])),_:1})):(0,c.kq)("",!0),(0,c.Wm)(H,{align:"center",label:"创建时间",prop:"created_at",width:"160"}),(0,c.Wm)(H,{align:"center",label:"更新时间",prop:"updated_at",width:"160"}),(0,c.Wm)(H,{align:"center",label:"操作",width:"110",fixed:"right"},{default:(0,c.w5)((({row:n})=>[(0,c.wy)(((0,c.wg)(),(0,c.j4)(C,{type:"primary",link:"",onClick:t=>e.addEditHandle(n.id)},{default:(0,c.w5)((()=>[h])),_:2},1032,["onClick"])),[[N,"role:update"]]),(0,c.wy)(((0,c.wg)(),(0,c.j4)(C,{type:"danger",link:"",onClick:t=>e.deleteHandle(n.id)},{default:(0,c.w5)((()=>[b])),_:2},1032,["onClick"])),[[N,"role:delete"]])])),_:1})])),_:1},8,["data","onSelectionChange"])),[[D,e.loading]]),e.visible?((0,c.wg)(),(0,c.j4)(V,{key:0,ref:"refAddEdit",onRefresh:e.getList},null,8,["onRefresh"])):(0,c.kq)("",!0)])),footer:(0,c.w5)((()=>[(0,c.Wm)(F,{page:e.page,onChange:e.pageChangeHandle},null,8,["page","onChange"])])),_:1})}var k=t(84367),_=t(81651),y=t(68257),x=t(70392),C=t(95006),Z=t(45764),H=t(78362),W=(0,c.aZ)({components:{AddEdit:x["default"]},setup(){const e=(0,k.iH)(),n=(0,k.iH)(),t=(0,k.iH)(),{page:r}=(0,C.Z)(),a=(0,k.qj)({loading:!1,visible:!1,form:{name:""},list:[],selection:[]}),o=()=>{const e={...a.form,current:r.current,size:r.size};a.loading=!0,(0,H.D4)(e).then((e=>{e&&(a.list=e.data.list,r.total=e.data.total),(0,c.Y3)((()=>{a.loading=!1}))}))},l=()=>{r.current=1,o()},i=e=>{a.visible=!0,(0,c.Y3)((()=>{t.value.init(e)}))},u=e=>{const n=e?[e]:a.selection.map((e=>e.id));_.T.confirm(`确定对[id=${n.join(",")}]进行[${e?"删除":"批量删除"}]操作?`,"提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((()=>{(0,H.ef)({keys:n}).then((e=>{e&&((0,y.z8)({message:"操作成功!",type:"success"}),o())}))})).catch((()=>{}))},d=e=>{const n={key:e.id,value:e.show};(0,H.mg)(n).then((n=>{n?(0,y.z8)({message:"操作成功!",type:"success"}):e.show=1===e.show?0:1}))},s=e=>{a.selection=e},m=e=>{r.current=e.current,r.size=e.size,o()};return(0,c.wF)((()=>{o()})),{refForm:e,refTable:n,refAddEdit:t,page:r,...(0,k.BK)(a),getList:o,reacquireHandle:l,addEditHandle:i,deleteHandle:u,showHandle:d,selectionHandle:s,pageChangeHandle:m,clearJson:Z.vL,havePermission:Z.m5}}}),U=t(40465);const V=(0,U.Z)(W,[["render",v]]);var F=V},15691:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(33392),a=t(7163),o=t(85963),l=t(54421),i=a.Z?a.Z.isConcatSpreadable:void 0;function u(e){return(0,l.Z)(e)||(0,o.Z)(e)||!!(i&&e&&e[i])}var d=u;function s(e,n,t,a,o){var l=-1,i=e.length;t||(t=d),o||(o=[]);while(++l<i){var u=e[l];n>0&&t(u)?n>1?s(u,n-1,t,a,o):(0,r.Z)(o,u):a||(o[o.length]=u)}return o}var c=s,m=1/0;function f(e){var n=null==e?0:e.length;return n?c(e,m):[]}var p=f},26529:function(e,n,t){t.d(n,{Z:function(){return E}});var r,a,o,l,i,u,d,s,c,m,f,p,w,g,h,b=!1;function v(){if(!b){b=!0;var e=navigator.userAgent,n=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),t=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(p=/\b(iPhone|iP[ao]d)/.exec(e),w=/\b(iP[ao]d)/.exec(e),m=/Android/i.exec(e),g=/FBAN\/\w+;/i.exec(e),h=/Mobile/i.exec(e),f=!!/Win64/.exec(e),n){r=n[1]?parseFloat(n[1]):n[5]?parseFloat(n[5]):NaN,r&&document&&document.documentMode&&(r=document.documentMode);var v=/(?:Trident\/(\d+.\d+))/.exec(e);u=v?parseFloat(v[1])+4:r,a=n[2]?parseFloat(n[2]):NaN,o=n[3]?parseFloat(n[3]):NaN,l=n[4]?parseFloat(n[4]):NaN,l?(n=/(?:Chrome\/(\d+\.\d+))/.exec(e),i=n&&n[1]?parseFloat(n[1]):NaN):i=NaN}else r=a=o=i=l=NaN;if(t){if(t[1]){var k=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);d=!k||parseFloat(k[1].replace("_","."))}else d=!1;s=!!t[2],c=!!t[3]}else d=s=c=!1}}var k,_={ie:function(){return v()||r},ieCompatibilityMode:function(){return v()||u>r},ie64:function(){return _.ie()&&f},firefox:function(){return v()||a},opera:function(){return v()||o},webkit:function(){return v()||l},safari:function(){return _.webkit()},chrome:function(){return v()||i},windows:function(){return v()||s},osx:function(){return v()||d},linux:function(){return v()||c},iphone:function(){return v()||p},mobile:function(){return v()||p||w||m||h},nativeApp:function(){return v()||g},android:function(){return v()||m},ipad:function(){return v()||w}},y=_,x=!!(typeof window<"u"&&window.document&&window.document.createElement),C={canUseDOM:x,canUseWorkers:typeof Worker<"u",canUseEventListeners:x&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:x&&!!window.screen,isInWorker:!x},Z=C;function H(e,n){if(!Z.canUseDOM||n&&!("addEventListener"in document))return!1;var t="on"+e,r=t in document;if(!r){var a=document.createElement("div");a.setAttribute(t,"return;"),r="function"==typeof a[t]}return!r&&k&&"wheel"===e&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r}Z.canUseDOM&&(k=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("",""));var W=H,U=10,V=40,F=800;function j(e){var n=0,t=0,r=0,a=0;return"detail"in e&&(t=e.detail),"wheelDelta"in e&&(t=-e.wheelDelta/120),"wheelDeltaY"in e&&(t=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(n=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(n=t,t=0),r=n*U,a=t*U,"deltaY"in e&&(a=e.deltaY),"deltaX"in e&&(r=e.deltaX),(r||a)&&e.deltaMode&&(1==e.deltaMode?(r*=V,a*=V):(r*=F,a*=F)),r&&!n&&(n=r<1?-1:1),a&&!t&&(t=a<1?-1:1),{spinX:n,spinY:t,pixelX:r,pixelY:a}}j.getEventType=function(){return y.firefox()?"DOMMouseScroll":W("wheel")?"wheel":"mousewheel"};var E=j;
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */}}]);