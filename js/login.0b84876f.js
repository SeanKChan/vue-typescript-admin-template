(self["webpackJsonp"]=self["webpackJsonp"]||[]).push([["login"],{"13d5":function(e,t,n){"use strict";var a=n("23e7"),s=n("d58f").left,r=n("a640"),i=n("ae40"),o=r("reduce"),l=i("reduce",{1:0});a({target:"Array",proto:!0,forced:!o||!l},{reduce:function(e){return s(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},2017:function(e,t,n){"use strict";var a=n("ab10"),s=n.n(a);s.a},"3b8c":function(e,t,n){},"95f3":function(e,t,n){"use strict";var a=n("3b8c"),s=n.n(a);s.a},"9ed6":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[e._v(" "+e._s(e.$t("login.title"))+" ")]),n("lang-select",{staticClass:"set-language"})],1),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{name:"user"}})],1),n("el-input",{ref:"username",attrs:{placeholder:e.$t("login.username"),name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),n("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(t){e.capsTooltip=t},expression:"capsTooltip"}},[n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{name:"password"}})],1),n("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:e.$t("login.password"),name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(t){e.capsTooltip=!1}},nativeOn:{keyup:[function(t){return e.checkCapslock(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}]},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),n("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[n("svg-icon",{attrs:{name:"password"===e.passwordType?"eye-off":"eye-on"}})],1)],1)],1),n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v(" "+e._s(e.$t("login.logIn"))+" ")]),n("div",{staticStyle:{position:"relative"}},[n("div",{staticClass:"tips"},[n("span",[e._v(e._s(e.$t("login.username"))+" : admin ")]),n("span",[e._v(e._s(e.$t("login.password"))+" : "+e._s(e.$t("login.any"))+" ")])]),n("div",{staticClass:"tips"},[n("span",[e._v(e._s(e.$t("login.username"))+" : editor ")]),n("span",[e._v(e._s(e.$t("login.password"))+" : "+e._s(e.$t("login.any"))+" ")])]),n("el-button",{staticClass:"thirdparty-button",attrs:{type:"primary"},on:{click:function(t){e.showDialog=!0}}},[e._v(" "+e._s(e.$t("login.thirdparty"))+" ")])],1)],1),n("el-dialog",{attrs:{title:e.$t("login.thirdparty"),visible:e.showDialog},on:{"update:visible":function(t){e.showDialog=t}}},[e._v(" "+e._s(e.$t("login.thirdpartyTips"))+" "),n("br"),n("br"),n("br"),n("social-sign")],1)],1)},s=[],r=(n("13d5"),n("b64b"),n("96cf"),n("1da1")),i=n("d4ec"),o=n("bee2"),l=n("262e"),c=n("2caf"),u=n("9ab4"),p=n("60a3"),d=n("9dba"),f=n("75fb"),g=n("1131"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"social-signup-container"},[n("div",{staticClass:"sign-btn",on:{click:function(t){return e.wechatHandleClick("wechat")}}},[n("span",{staticClass:"wx-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{name:"wechat"}})],1),e._v(" 微信 ")]),n("div",{staticClass:"sign-btn",on:{click:function(t){return e.tencentHandleClick("tencent")}}},[n("span",{staticClass:"qq-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{name:"qq"}})],1),e._v(" QQ ")])])},v=[],m=function(e){Object(l["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return Object(o["a"])(n,[{key:"wechatHandleClick",value:function(e){alert("handle "+e+" here")}},{key:"tencentHandleClick",value:function(e){alert("handle "+e+" here")}}]),n}(p["d"]);m=Object(u["a"])([Object(p["a"])({name:"SocialSignin"})],m);var b=m,w=b,y=(n("95f3"),n("2877")),k=Object(y["a"])(w,h,v,!1,null,"01fd1c75",null),C=k.exports,O=function(e){Object(l["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.validateUsername=function(e,t,n){Object(f["d"])(t)?n():n(new Error("Please enter the correct user name"))},e.validatePassword=function(e,t,n){t.length<6?n(new Error("The password can not be less than 6 digits")):n()},e.loginForm={username:"admin",password:"111111"},e.loginRules={username:[{validator:e.validateUsername,trigger:"blur"}],password:[{validator:e.validatePassword,trigger:"blur"}]},e.passwordType="password",e.loading=!1,e.showDialog=!1,e.capsTooltip=!1,e.otherQuery={},e}return Object(o["a"])(n,[{key:"onRouteChange",value:function(e){var t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))}},{key:"mounted",value:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()}},{key:"checkCapslock",value:function(e){var t=e.key;this.capsTooltip=null!==t&&1===t.length&&t>="A"&&t<="Z"}},{key:"showPwd",value:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))}},{key:"handleLogin",value:function(){var e=this;this.$refs.loginForm.validate(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=8;break}return e.loading=!0,t.next=4,d["a"].Login(e.loginForm);case 4:e.$router.push({path:e.redirect||"/",query:e.otherQuery}),setTimeout((function(){e.loading=!1}),500),t.next=9;break;case 8:return t.abrupt("return",!1);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"getOtherQuery",value:function(e){return Object.keys(e).reduce((function(t,n){return"redirect"!==n&&(t[n]=e[n]),t}),{})}}]),n}(p["d"]);Object(u["a"])([Object(p["e"])("$route",{immediate:!0})],O.prototype,"onRouteChange",null),O=Object(u["a"])([Object(p["a"])({name:"Login",components:{LangSelect:g["a"],SocialSign:C}})],O);var _=O,$=_,x=(n("2017"),n("f8f9"),Object(y["a"])($,a,s,!1,null,"fa15a148",null));t["default"]=x.exports},a950:function(e,t,n){},ab10:function(e,t,n){e.exports={menuBg:"#304156",menuText:"#bfcbd9",menuActiveText:"#409eff"}},d58f:function(e,t,n){var a=n("1c0b"),s=n("7b0b"),r=n("44ad"),i=n("50c4"),o=function(e){return function(t,n,o,l){a(n);var c=s(t),u=r(c),p=i(c.length),d=e?p-1:0,f=e?-1:1;if(o<2)while(1){if(d in u){l=u[d],d+=f;break}if(d+=f,e?d<0:p<=d)throw TypeError("Reduce of empty array with no initial value")}for(;e?d>=0:p>d;d+=f)d in u&&(l=n(l,u[d],d,c));return l}};e.exports={left:o(!1),right:o(!0)}},f8f9:function(e,t,n){"use strict";var a=n("a950"),s=n.n(a);s.a}}]);