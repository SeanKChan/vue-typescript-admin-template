(self["webpackJsonp"]=self["webpackJsonp"]||[]).push([["dashboard"],{"137c":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"link--mallki",class:t.className,attrs:{href:"#"}},[t._v(" "+t._s(t.text)+" "),a("span",{attrs:{"data-letters":t.text}}),a("span",{attrs:{"data-letters":t.text}})])},i=[],r=a("d4ec"),o=a("262e"),s=a("2caf"),c=a("9ab4"),l=a("60a3"),u=function(t){Object(o["a"])(a,t);var e=Object(s["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(l["d"]);Object(c["a"])([Object(l["b"])({default:""})],u.prototype,"className",void 0),Object(c["a"])([Object(l["b"])({default:"vue-typescript-admin"})],u.prototype,"text",void 0),u=Object(c["a"])([Object(l["a"])({name:"Mallki"})],u);var d=u,p=d,h=(a("397a"),a("2877")),f=Object(h["a"])(p,n,i,!1,null,"6e1637c9",null);e["a"]=f.exports},"1d8b":function(t,e,a){"use strict";var n=a("790e"),i=a.n(n);i.a},"35c9":function(t,e,a){},"397a":function(t,e,a){"use strict";var n=a("5943"),i=a.n(n);i.a},"430d":function(t,e,a){},5943:function(t,e,a){},7547:function(t,e,a){"use strict";var n=a("430d"),i=a.n(n);i.a},7736:function(t,e,a){"use strict";var n=a("eac9"),i=a.n(n);i.a},"790e":function(t,e,a){t.exports={menuBg:"#304156",menuText:"#bfcbd9",menuActiveText:"#409eff"}},"817d":function(t,e,a){var n,i,r;(function(o,s){i=[e,a("313e")],n=s,r="function"===typeof n?n.apply(e,i):n,void 0===r||(t.exports=r)})(0,(function(t,e){var a=function(t){"undefined"!==typeof console&&console&&console.error&&console.error(t)};if(e){var n=["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],i={color:n,title:{textStyle:{fontWeight:"normal",color:"#008acd"}},visualMap:{itemWidth:15,color:["#5ab1ef","#e0ffff"]},toolbox:{iconStyle:{normal:{borderColor:n[0]}}},tooltip:{backgroundColor:"rgba(50,50,50,0.5)",axisPointer:{type:"line",lineStyle:{color:"#008acd"},crossStyle:{color:"#008acd"},shadowStyle:{color:"rgba(200,200,200,0.2)"}}},dataZoom:{dataBackgroundColor:"#efefff",fillerColor:"rgba(182,162,222,0.2)",handleColor:"#008acd"},grid:{borderColor:"#eee"},categoryAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitLine:{lineStyle:{color:["#eee"]}}},valueAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.1)","rgba(200,200,200,0.1)"]}},splitLine:{lineStyle:{color:["#eee"]}}},timeline:{lineStyle:{color:"#008acd"},controlStyle:{color:"#008acd",borderColor:"#008acd"},symbol:"emptyCircle",symbolSize:3},line:{smooth:!0,symbol:"emptyCircle",symbolSize:3},candlestick:{itemStyle:{color:"#d87a80",color0:"#2ec7c9"},lineStyle:{width:1,color:"#d87a80",color0:"#2ec7c9"},areaStyle:{color:"#2ec7c9",color0:"#b6a2de"}},scatter:{symbol:"circle",symbolSize:4},map:{itemStyle:{color:"#ddd"},areaStyle:{color:"#fe994e"},label:{color:"#d87a80"}},graph:{itemStyle:{color:"#d87a80"},linkStyle:{color:"#2ec7c9"}},gauge:{axisLine:{lineStyle:{color:[[.2,"#2ec7c9"],[.8,"#5ab1ef"],[1,"#d87a80"]],width:10}},axisTick:{splitNumber:10,length:15,lineStyle:{color:"auto"}},splitLine:{length:22,lineStyle:{color:"auto"}},pointer:{width:5}}};e.registerTheme("macarons",i)}else a("ECharts is not Loaded")}))},"8f57":function(t,e,a){"use strict";var n=a("eca8"),i=a.n(n);i.a},"91ae":function(t,e,a){"use strict";var n=a("bc25"),i=a.n(n);i.a},9406:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container"},[a(t.currentRole,{tag:"component"})],1)},i=[],r=(a("caad"),a("2532"),a("d4ec")),o=a("bee2"),s=a("262e"),c=a("2caf"),l=a("9ab4"),u=a("60a3"),d=a("9dba"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-editor-container"},[a("github-corner",{staticClass:"github-corner"}),a("panel-group",{on:{handleSetLineChartData:t.handleSetLineChartData}}),a("el-row",{staticStyle:{background:"#fff",padding:"16px 16px 0","margin-bottom":"32px"}},[a("line-chart",{attrs:{"chart-data":t.lineChartData}})],1),a("el-row",{attrs:{gutter:32}},[a("el-col",{attrs:{xs:24,sm:24,lg:8}},[a("div",{staticClass:"chart-wrapper"},[a("radar-chart")],1)]),a("el-col",{attrs:{xs:24,sm:24,lg:8}},[a("div",{staticClass:"chart-wrapper"},[a("pie-chart")],1)]),a("el-col",{attrs:{xs:24,sm:24,lg:8}},[a("div",{staticClass:"chart-wrapper"},[a("bar-chart")],1)])],1),a("el-row",{attrs:{gutter:8}},[a("el-col",{staticStyle:{"padding-right":"8px","margin-bottom":"30px"},attrs:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:12},xl:{span:12}}},[a("transaction-table")],1),a("el-col",{staticStyle:{"margin-bottom":"30px"},attrs:{xs:{span:24},sm:{span:12},md:{span:12},lg:{span:6},xl:{span:6}}},[a("todo-list")],1),a("el-col",{staticStyle:{"margin-bottom":"30px"},attrs:{xs:{span:24},sm:{span:12},md:{span:12},lg:{span:6},xl:{span:6}}},[a("box-card")],1)],1)],1)},h=[],f=(a("817d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"github-corner",attrs:{href:"https://github.com/armour/vue-typescript-admin-template",target:"_blank","aria-label":"View source on Github"}},[a("svg",{staticStyle:{fill:"#40c9c6",color:"#fff"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[a("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),a("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),a("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])}),m=[],b=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(u["d"]);b=Object(l["a"])([Object(u["a"])({name:"GithubCorner"})],b);var v=b,g=v,y=(a("fd10"),a("2877")),O=Object(y["a"])(g,f,m,!1,null,"1c8186b6",null),x=O.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},j=[],w=a("313e"),k=a.n(w),S=a("2fe1"),_=a("9b21"),T=6e3,D=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return Object(o["a"])(a,[{key:"mounted",value:function(){var t=this;this.$nextTick((function(){t.initChart()}))}},{key:"beforeDestroy",value:function(){this.chart&&(this.chart.dispose(),this.chart=null)}},{key:"initChart",value:function(){this.chart=k.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:10,left:"2%",right:"2%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",axisTick:{show:!1}}],series:[{name:"pageA",type:"bar",stack:"vistors",data:[79,52,200,334,390,330,220],animationDuration:T},{name:"pageB",type:"bar",stack:"vistors",data:[80,52,200,334,390,330,220],animationDuration:T},{name:"pageC",type:"bar",stack:"vistors",data:[30,52,200,334,390,330,220],animationDuration:T}]})}}]),a}(Object(S["c"])(_["a"]));Object(l["a"])([Object(u["b"])({default:"chart"})],D.prototype,"className",void 0),Object(l["a"])([Object(u["b"])({default:"100%"})],D.prototype,"width",void 0),Object(l["a"])([Object(u["b"])({default:"300px"})],D.prototype,"height",void 0),D=Object(l["a"])([Object(u["a"])({name:"BarChart"})],D);var V=D,A=V,F=Object(y["a"])(A,C,j,!1,null,null,null),E=F.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card-component",staticStyle:{"margin-left":"8px"}},[a("div",{staticClass:"box-card-header",attrs:{slot:"header"},slot:"header"},[a("img",{attrs:{src:"https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"}})]),a("div",{staticStyle:{position:"relative"}},[a("pan-thumb",{staticClass:"panThumb",attrs:{image:t.avatar}}),a("mallki",{staticClass:"mallki-text",attrs:{text:"vue-typescript-admin"}}),a("div",{staticClass:"progress-item",staticStyle:{"padding-top":"35px"}},[a("span",[t._v("Vue")]),a("el-progress",{attrs:{percentage:51}})],1),a("div",{staticClass:"progress-item"},[a("span",[t._v("Typescript")]),a("el-progress",{attrs:{percentage:45}})],1),a("div",{staticClass:"progress-item"},[a("span",[t._v("CSS")]),a("el-progress",{attrs:{percentage:4}})],1),a("div",{staticClass:"progress-item"},[a("span",[t._v("ESLint")]),a("el-progress",{attrs:{percentage:100,status:"success"}})],1)],1)])},$=[],N=(a("b0c0"),a("3cbc")),q=a("137c"),P=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return Object(o["a"])(a,[{key:"name",get:function(){return d["a"].name}},{key:"avatar",get:function(){return d["a"].avatar}},{key:"roles",get:function(){return d["a"].roles}}]),a}(u["d"]);P=Object(l["a"])([Object(u["a"])({name:"BoxCard",components:{PanThumb:N["a"],Mallki:q["a"]}})],P);var M=P,B=M,R=(a("7736"),a("91ae"),Object(y["a"])(B,L,$,!1,null,"6730fd52",null)),G=R.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},z=[],W=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return Object(o["a"])(a,[{key:"onChartDataChange",value:function(t){this.setOptions(t)}},{key:"mounted",value:function(){var t=this;this.$nextTick((function(){t.initChart()}))}},{key:"beforeDestroy",value:function(){this.chart&&(this.chart.dispose(),this.chart=null)}},{key:"initChart",value:function(){this.chart=k.a.init(this.$el,"macarons"),this.setOptions(this.chartData)}},{key:"setOptions",value:function(t){this.chart&&this.chart.setOption({xAxis:{data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],boundaryGap:!1,axisTick:{show:!1}},grid:{left:10,right:10,bottom:20,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:8},yAxis:{axisTick:{show:!1}},legend:{data:["expected","actual"]},series:[{name:"expected",itemStyle:{color:"#FF005A",lineStyle:{color:"#FF005A",width:2}},smooth:!0,type:"line",data:t.expectedData,animationDuration:2800,animationEasing:"cubicInOut"},{name:"actual",smooth:!0,type:"line",itemStyle:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}},data:t.actualData,animationDuration:2800,animationEasing:"quadraticOut"}]})}}]),a}(Object(S["c"])(_["a"]));Object(l["a"])([Object(u["b"])({required:!0})],W.prototype,"chartData",void 0),Object(l["a"])([Object(u["b"])({default:"chart"})],W.prototype,"className",void 0),Object(l["a"])([Object(u["b"])({default:"100%"})],W.prototype,"width",void 0),Object(l["a"])([Object(u["b"])({default:"350px"})],W.prototype,"height",void 0),Object(l["a"])([Object(u["e"])("chartData",{deep:!0})],W.prototype,"onChartDataChange",null),W=Object(l["a"])([Object(u["a"])({name:"LineChart"})],W);var Y=W,J=Y,Z=Object(y["a"])(J,I,z,!1,null,null,null),X=Z.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"panel-group",attrs:{gutter:40}},[a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.handleSetLineChartData("newVisitis")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-people"},[a("svg-icon",{staticClass:"card-panel-icon",attrs:{name:"peoples"}})],1),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v(" New Visits ")]),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":102400,duration:2600}})],1)])]),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.handleSetLineChartData("messages")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-message"},[a("svg-icon",{staticClass:"card-panel-icon",attrs:{name:"message"}})],1),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v(" Messages ")]),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":81212,duration:3e3}})],1)])]),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.handleSetLineChartData("purchases")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-money"},[a("svg-icon",{staticClass:"card-panel-icon",attrs:{name:"money"}})],1),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v(" Purchases ")]),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":9280,duration:3200}})],1)])]),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.handleSetLineChartData("shoppings")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-shopping"},[a("svg-icon",{staticClass:"card-panel-icon",attrs:{name:"shopping"}})],1),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v(" Shoppings ")]),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":13600,duration:3600}})],1)])])],1)},U=[],H=a("ec1b"),Q=a.n(H),tt=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return Object(o["a"])(a,[{key:"handleSetLineChartData",value:function(t){this.$emit("handleSetLineChartData",t)}}]),a}(u["d"]);tt=Object(l["a"])([Object(u["a"])({name:"PanelGroup",components:{CountTo:Q.a}})],tt);var et=tt,at=et,nt=(a("8f57"),Object(y["a"])(at,K,U,!1,null,"80734e4e",null)),it=nt.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},ot=[],st=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return Object(o["a"])(a,[{key:"mounted",value:function(){var t=this;this.$nextTick((function(){t.initChart()}))}},{key:"beforeDestroy",value:function(){this.chart&&(this.chart.dispose(),this.chart=null)}},{key:"initChart",value:function(){this.chart=k.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{left:"center",bottom:"10",data:["Industries","Technology","Forex","Gold","Forecasts"]},series:[{name:"WEEKLY WRITE ARTICLES",type:"pie",roseType:"radius",radius:[15,95],center:["50%","38%"],data:[{value:320,name:"Industries"},{value:240,name:"Technology"},{value:149,name:"Forex"},{value:100,name:"Gold"},{value:59,name:"Forecasts"}],animationEasing:"cubicInOut",animationDuration:2600}]})}}]),a}(Object(S["c"])(_["a"]));Object(l["a"])([Object(u["b"])({default:"chart"})],st.prototype,"className",void 0),Object(l["a"])([Object(u["b"])({default:"100%"})],st.prototype,"width",void 0),Object(l["a"])([Object(u["b"])({default:"300px"})],st.prototype,"height",void 0),st=Object(l["a"])([Object(u["a"])({name:"PieChart"})],st);var ct=st,lt=ct,ut=Object(y["a"])(lt,rt,ot,!1,null,null,null),dt=ut.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},ht=[],ft=3e3,mt=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return Object(o["a"])(a,[{key:"mounted",value:function(){var t=this;this.$nextTick((function(){t.initChart()}))}},{key:"beforeDestroy",value:function(){this.chart&&(this.chart.dispose(),this.chart=null)}},{key:"initChart",value:function(){this.chart=k.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},radar:{radius:"66%",center:["50%","42%"],splitNumber:8,splitArea:{areaStyle:{color:"rgba(127,95,132,.3)",opacity:1,shadowBlur:45,shadowColor:"rgba(0,0,0,.5)",shadowOffsetX:0,shadowOffsetY:15}},indicator:[{name:"Sales",max:1e4},{name:"Administration",max:2e4},{name:"Information Technology",max:2e4},{name:"Customer Support",max:2e4},{name:"Development",max:2e4},{name:"Marketing",max:2e4}]},legend:{left:"center",bottom:"10",data:["Allocated Budget","Expected Spending","Actual Spending"]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:13,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[5e3,7e3,12e3,11e3,15e3,14e3],name:"Allocated Budget"},{value:[4e3,9e3,15e3,15e3,13e3,11e3],name:"Expected Spending"},{value:[5500,11e3,12e3,15e3,12e3,12e3],name:"Actual Spending"}],animationDuration:ft}]})}}]),a}(Object(S["c"])(_["a"]));Object(l["a"])([Object(u["b"])({default:"chart"})],mt.prototype,"className",void 0),Object(l["a"])([Object(u["b"])({default:"100%"})],mt.prototype,"width",void 0),Object(l["a"])([Object(u["b"])({default:"300px"})],mt.prototype,"height",void 0),mt=Object(l["a"])([Object(u["a"])({name:"RadarChart"})],mt);var bt=mt,vt=bt,gt=Object(y["a"])(vt,pt,ht,!1,null,null,null),yt=gt.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"todoapp"},[a("header",{staticClass:"header"},[a("input",{staticClass:"new-todo",attrs:{autocomplete:"off",placeholder:"Todo List"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)}}})]),a("section",{directives:[{name:"show",rawName:"v-show",value:t.todos.length,expression:"todos.length"}],staticClass:"main"},[a("input",{staticClass:"toggle-all",attrs:{id:"toggle-all",type:"checkbox"},domProps:{checked:t.allChecked},on:{change:function(e){return t.toggleAll({done:!t.allChecked})}}}),a("label",{attrs:{for:"toggle-all"}}),a("ul",{staticClass:"todo-list"},t._l(t.filteredTodos,(function(e,n){return a("todo",{key:n,attrs:{todo:e},on:{toggleTodo:t.toggleTodo,editTodo:t.editTodo,deleteTodo:t.deleteTodo}})})),1)]),a("footer",{directives:[{name:"show",rawName:"v-show",value:t.todos.length,expression:"todos.length"}],staticClass:"footer"},[a("span",{staticClass:"todo-count"},[a("strong",[t._v(t._s(t.remaining))]),t._v(" "+t._s(t._f("pluralize")(t.remaining,"item"))+" left ")]),a("ul",{staticClass:"filters"},t._l(t.filters,(function(e,n){return a("li",{key:n},[a("a",{class:{selected:t.visibility===n},on:{click:function(e){e.preventDefault(),t.visibility=n}}},[t._v(t._s(t._f("capitalize")(n)))])])})),0)])])},xt=[],Ct=(a("a623"),a("4de4"),a("4160"),a("c975"),a("fb6a"),a("a434"),a("498a"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"todo",class:{completed:t.todo.done,editing:t.editing}},[a("div",{staticClass:"view"},[a("input",{staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:t.todo.done},on:{change:function(e){return t.toggleTodo(t.todo)}}}),a("label",{domProps:{textContent:t._s(t.todo.text)},on:{dblclick:function(e){t.editing=!0}}}),a("button",{staticClass:"destroy",on:{click:function(e){return t.deleteTodo(t.todo)}}})]),a("input",{directives:[{name:"show",rawName:"v-show",value:t.editing,expression:"editing"},{name:"focus",rawName:"v-focus",value:t.editing,expression:"editing"}],staticClass:"edit",domProps:{value:t.todo.text},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doneEdit(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancelEdit(e)}],blur:t.doneEdit}})])}),jt=[],wt=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.editing=!1,t}return Object(o["a"])(a,[{key:"deleteTodo",value:function(t){this.$emit("deleteTodo",t)}},{key:"editTodo",value:function(t){var e=t.todo,a=t.value;this.$emit("editTodo",{todo:e,value:a})}},{key:"toggleTodo",value:function(t){this.$emit("toggleTodo",t)}},{key:"doneEdit",value:function(t){var e=t.target.value.trim(),a=this.todo;e?this.editing&&(this.editTodo({todo:a,value:e}),this.editing=!1):this.deleteTodo(a)}},{key:"cancelEdit",value:function(t){t.target.value=this.todo.text,this.editing=!1}}]),a}(u["d"]);Object(l["a"])([Object(u["b"])({default:{text:"",done:!1}})],wt.prototype,"todo",void 0),wt=Object(l["a"])([Object(u["a"])({name:"TodoDemo",directives:{focus:function(t,e,a){var n=e.value,i=a.context;n&&i&&i.$nextTick((function(){t.focus()}))}}})],wt);var kt=wt,St=kt,_t=Object(y["a"])(St,Ct,jt,!1,null,null,null),Tt=_t.exports,Dt="todos",Vt={all:function(t){return t},active:function(t){return t.filter((function(t){return!t.done}))},completed:function(t){return t.filter((function(t){return t.done}))}},At=[{text:"star this repository",done:!1},{text:"fork this repository",done:!1},{text:"follow author",done:!1},{text:"vue-typescript-admin-template",done:!0},{text:"vue",done:!0},{text:"element-ui",done:!0},{text:"axios",done:!0},{text:"webpack",done:!0}],Ft=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.visibility="all",t.todos=At,t}return Object(o["a"])(a,[{key:"setLocalStorage",value:function(){window.localStorage.setItem(Dt,JSON.stringify(this.todos))}},{key:"addTodo",value:function(t){var e=t.target.value;e.trim()&&(this.todos.push({text:e,done:!1}),this.setLocalStorage()),t.target.value=""}},{key:"toggleTodo",value:function(t){t.done=!t.done,this.setLocalStorage()}},{key:"deleteTodo",value:function(t){this.todos.splice(this.todos.indexOf(t),1),this.setLocalStorage()}},{key:"editTodo",value:function(t){var e=t.todo,a=t.value;e.text=a,this.setLocalStorage()}},{key:"clearCompleted",value:function(){this.todos=this.todos.filter((function(t){return!t.done})),this.setLocalStorage()}},{key:"toggleAll",value:function(t){var e=this,a=t.done;this.todos.forEach((function(t){t.done=a,e.setLocalStorage()}))}},{key:"allChecked",get:function(){return this.todos.every((function(t){return t.done}))}},{key:"filters",get:function(){return Vt}},{key:"filteredTodos",get:function(){return Vt[this.visibility](this.todos)}},{key:"remaining",get:function(){return this.todos.filter((function(t){return!t.done})).length}}]),a}(u["d"]);Ft=Object(l["a"])([Object(u["a"])({name:"TodoList",components:{Todo:Tt},filters:{pluralize:function(t,e){return 1===t?e:e+"s"},capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}})],Ft);var Et=Ft,Lt=Et,$t=(a("1d8b"),Object(y["a"])(Lt,Ot,xt,!1,null,null,null)),Nt=$t.exports,qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{staticStyle:{width:"100%","padding-top":"15px"},attrs:{data:t.list}},[a("el-table-column",{attrs:{label:"OrderID","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t._f("orderNoFilter")(a.orderId))+" ")]}}])}),a("el-table-column",{attrs:{label:"Price",width:"195",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" ¥"+t._s(t._f("toThousandFilter")(a.price))+" ")]}}])}),a("el-table-column",{attrs:{label:"Status",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("el-tag",{attrs:{type:t._f("transactionStatusFilter")(n.status)}},[t._v(" "+t._s(n.status)+" ")])]}}])})],1)},Pt=[],Mt=(a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("96cf"),a("1da1")),Bt=a("b32d"),Rt=function(t){return Object(Bt["a"])({url:"/transactions",method:"get",params:t})},Gt=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.list=[],t}return Object(o["a"])(a,[{key:"created",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var t=Object(Mt["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Rt({});case 2:e=t.sent,a=e.data,this.list=a.items.slice(0,8);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),a}(u["d"]);Gt=Object(l["a"])([Object(u["a"])({name:"TransactionTable",filters:{transactionStatusFilter:function(t){var e={success:"success",pending:"danger"};return e[t]},orderNoFilter:function(t){return t.substring(0,30)},toThousandFilter:function(t){return(+t||0).toString().replace(/^-?\d+/g,(function(t){return t.replace(/(?=(?!\b)(\d{3})+$)/g,",")}))}}})],Gt);var It=Gt,zt=It,Wt=Object(y["a"])(zt,qt,Pt,!1,null,null,null),Yt=Wt.exports,Jt={newVisitis:{expectedData:[100,120,161,134,105,160,165],actualData:[120,82,91,154,162,140,145]},messages:{expectedData:[200,192,120,144,160,130,140],actualData:[180,160,151,106,145,150,130]},purchases:{expectedData:[80,100,121,104,105,90,100],actualData:[120,90,100,138,142,130,130]},shoppings:{expectedData:[130,140,141,142,145,150,160],actualData:[120,82,91,154,162,140,130]}},Zt=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.lineChartData=Jt.newVisitis,t}return Object(o["a"])(a,[{key:"handleSetLineChartData",value:function(t){this.lineChartData=Jt[t]}}]),a}(u["d"]);Zt=Object(l["a"])([Object(u["a"])({name:"DashboardAdmin",components:{GithubCorner:x,BarChart:E,BoxCard:G,LineChart:X,PanelGroup:it,PieChart:dt,RadarChart:yt,TodoList:Nt,TransactionTable:Yt}})],Zt);var Xt=Zt,Kt=Xt,Ut=(a("7547"),Object(y["a"])(Kt,p,h,!1,null,"2fe025f9",null)),Ht=Ut.exports,Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-editor-container"},[a("div",{staticClass:"clearfix"},[a("pan-thumb",{staticStyle:{float:"left"},attrs:{image:t.avatar}},[t._v(" Your roles: "),t._l(t.roles,(function(e){return a("span",{key:e,staticClass:"info-roles"},[t._v(t._s(e))])}))],2),a("github-corner",{staticStyle:{position:"absolute",top:"0px",border:"0",right:"0"}}),a("div",{staticClass:"info-container"},[a("span",{staticClass:"display_name"},[t._v(t._s(t.name))]),a("span",{staticStyle:{"font-size":"20px","padding-top":"20px",display:"inline-block"}},[t._v("Editor's Dashboard")])])],1),a("div",[a("img",{staticClass:"emptyGif",attrs:{src:t.emptyGif}})])])},te=[],ee=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.emptyGif="https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3",t}return Object(o["a"])(a,[{key:"name",get:function(){return d["a"].name}},{key:"avatar",get:function(){return d["a"].avatar}},{key:"roles",get:function(){return d["a"].roles}}]),a}(u["d"]);ee=Object(l["a"])([Object(u["a"])({name:"DashboardEditor",components:{PanThumb:N["a"],GithubCorner:x}})],ee);var ae=ee,ne=ae,ie=(a("c4bf"),Object(y["a"])(ne,Qt,te,!1,null,"ebe2300e",null)),re=ie.exports,oe=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.currentRole="admin-dashboard",t}return Object(o["a"])(a,[{key:"created",value:function(){this.roles.includes("admin")||(this.currentRole="editor-dashboard")}},{key:"roles",get:function(){return d["a"].roles}}]),a}(u["d"]);oe=Object(l["a"])([Object(u["a"])({name:"Dashboard",components:{AdminDashboard:Ht,EditorDashboard:re}})],oe);var se=oe,ce=se,le=Object(y["a"])(ce,n,i,!1,null,null,null);e["default"]=le.exports},a623:function(t,e,a){"use strict";var n=a("23e7"),i=a("b727").every,r=a("a640"),o=a("ae40"),s=r("every"),c=o("every");n({target:"Array",proto:!0,forced:!s||!c},{every:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},b21b:function(t,e,a){},bc25:function(t,e,a){},c4bf:function(t,e,a){"use strict";var n=a("35c9"),i=a.n(n);i.a},eac9:function(t,e,a){t.exports={menuBg:"#304156",menuText:"#bfcbd9",menuActiveText:"#409eff"}},ec1b:function(t,e,a){!function(e,a){t.exports=a()}(0,(function(){return function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var n=a(4)(a(1),a(5),null,null);t.exports=n.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var e=t.split("."),a=e[0],n=e.length>1?this.decimal+e[1]:"",i=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;i.test(a);)a=a.replace(i,"$1"+this.separator+"$2");return this.prefix+a+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=i.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",i.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,i="webkit moz ms o".split(" "),r=void 0,o=void 0;if("undefined"==typeof window)e.requestAnimationFrame=r=function(){},e.cancelAnimationFrame=o=function(){};else{e.requestAnimationFrame=r=window.requestAnimationFrame,e.cancelAnimationFrame=o=window.cancelAnimationFrame;for(var s=void 0,c=0;c<i.length&&(!r||!o);c++)s=i[c],e.requestAnimationFrame=r=r||window[s+"RequestAnimationFrame"],e.cancelAnimationFrame=o=o||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];r&&o||(e.requestAnimationFrame=r=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-n)),i=window.setTimeout((function(){t(e+a)}),a);return n=e+a,i},e.cancelAnimationFrame=o=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=r,e.cancelAnimationFrame=o},function(t,e){t.exports=function(t,e,a,n){var i,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(i=t,r=t.default);var s="function"==typeof r?r.options:r;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),a&&(s._scopeId=a),n){var c=Object.create(s.computed||null);Object.keys(n).forEach((function(t){var e=n[t];c[t]=function(){return e}})),s.computed=c}return{esModule:i,exports:r,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))},eca8:function(t,e,a){},fd10:function(t,e,a){"use strict";var n=a("b21b"),i=a.n(n);i.a}}]);