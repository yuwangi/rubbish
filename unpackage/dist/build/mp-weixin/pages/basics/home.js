(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/home"],{2093:function(t,i,a){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{list:[{name:"其它垃圾",id:0},{name:"厨余垃圾",id:1},{name:"可回收",id:2},{name:"有害垃圾",id:3}],tabCur:0,mainCur:0,verticalNavTop:0,load:!0}},onLoad:function(){console.log(12),t.showLoading({title:"加载中...",mask:!0}),t.hideLoading()},onReady:function(){t.hideLoading()},methods:{goCamera:function(){t.navigateTo({url:"../plugin/home?type=beijing"})},TabSelect:function(t){this.tabCur=t.currentTarget.dataset.id,this.mainCur=t.currentTarget.dataset.id,this.verticalNavTop=50*(t.currentTarget.dataset.id-1)},VerticalMain:function(i){var a=this,e=0;if(this.load){for(var s=function(i){var s=t.createSelectorQuery().select("#main-"+a.list[i].id);s.fields({size:!0},function(t){a.list[i].top=e,e+=t.height,a.list[i].bottom=e}).exec()},c=0;c<this.list.length;c++)s(c);this.load=!1}var l=i.detail.scrollTop+10;for(c=0;c<this.list.length;c++)if(l>this.list[c].top&&l<this.list[c].bottom)return this.verticalNavTop=50*(this.list[c].id-1),this.tabCur=this.list[c].id,console.log(l),!1}}};i.default=a}).call(this,a("543d")["default"])},"6c75":function(t,i,a){"use strict";var e=a("c968"),s=a.n(e);s.a},"72ae":function(t,i,a){"use strict";a("cc19");var e=c(a("b0ce")),s=c(a("75c6"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(s.default))},"75c6":function(t,i,a){"use strict";a.r(i);var e=a("e64a"),s=a("845a");for(var c in s)"default"!==c&&function(t){a.d(i,t,function(){return s[t]})}(c);a("6c75");var l=a("2877"),n=Object(l["a"])(s["default"],e["a"],e["b"],!1,null,null,null);i["default"]=n.exports},"845a":function(t,i,a){"use strict";a.r(i);var e=a("2093"),s=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(i,t,function(){return e[t]})}(c);i["default"]=s.a},c968:function(t,i,a){},e64a:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",[a("view",{staticClass:"fixed"},[a("cu-custom",{attrs:{isBack:!1,bgColor:"bg-gradual-blue text-white",mpcomid:"9f2b2704-0"}},[a("block",{slot:"content"},[t._v("首页")])],1)],1),a("view",{staticClass:"cu-bar search bg-white"},[a("view",{staticClass:"search-form round"},[a("text",{staticClass:"cuIcon-search"}),a("input",{attrs:{"adjust-position":!1,type:"text",placeholder:"输入垃圾名称","confirm-type":"search",eventid:"9f2b2704-0"},on:{focus:t.InputFocus,blur:t.InputBlur}})]),a("view",{staticClass:" info action "},[a("button",{staticClass:"cu-btn bg-green shadow-blur round",attrs:{eventid:"9f2b2704-1"},on:{click:t.goCamera}},[a("image",{staticClass:"photos-box",attrs:{mode:"widthFix",src:"../../static/carame.png"}})])],1)]),a("view",{staticClass:"VerticalBox"},[a("scroll-view",{staticClass:"VerticalNav nav bg-white",staticStyle:{height:"calc(100vh - 156px)"},attrs:{"scroll-y":"","scroll-with-animation":"","scroll-top":t.verticalNavTop}},t._l(t.list,function(i,e){return a("view",{key:e,staticClass:"cu-item",class:e==t.tabCur?"text-green cur":"",attrs:{"data-id":e,eventid:"9f2b2704-2-"+e},on:{tap:t.TabSelect}},[t._v(t._s(i.name))])})),a("scroll-view",{staticClass:"VerticalMain ",staticStyle:{height:"calc(100vh - 156px)"},attrs:{"scroll-y":"","scroll-with-animation":"","scroll-into-view":"main-"+t.mainCur,eventid:"9f2b2704-3"},on:{scroll:t.VerticalMain}},t._l(t.list,function(i,e){return a("view",{key:e,staticClass:"padding-bottom-sm padding-lr",attrs:{id:"main-"+e}},[a("view",{staticClass:"solid-bottom bg-white justify-center"},[a("view",{directives:[{name:"show",rawName:"v-show",value:0==e,expression:"index==0"}],staticClass:"action justify-center"},[a("view",{staticClass:"article justify-center"},[a("image",{attrs:{src:"../../static/404.png"}}),a("image",{staticClass:"flex img justify-center",attrs:{src:"../../static/其它垃圾-middle.png"}})]),a("view",{staticClass:"article"},[a("p",{staticClass:"aricle-title"},[a("view",{staticClass:"text-bold names"},[t._v("其它垃圾")]),t._v("指除可回收物、有害垃圾、厨余垃圾以外的其它生活废弃物。")])],1)]),a("view",{directives:[{name:"show",rawName:"v-show",value:1==e,expression:"index==1"}],staticClass:"action justify-center"},[a("view",{staticClass:"article justify-center"},[a("image",{staticClass:"flex img justify-center",attrs:{src:"../../static/厨余垃圾-middle.png"}})]),a("view",{staticClass:"article"},[a("p",{staticClass:"aricle-title"},[a("view",{staticClass:"text-bold names"},[t._v("厨余垃圾")]),t._v("是指家庭中产生的菜帮菜叶、瓜果皮核、剩菜剩饭、废弃食物等易腐性垃圾。")])],1)]),a("view",{directives:[{name:"show",rawName:"v-show",value:2==e,expression:"index==2"}],staticClass:"action justify-center"},[a("view",{staticClass:"article justify-center"},[a("image",{staticClass:"flex img justify-center",attrs:{src:"../../static/recyclable.png"}})]),a("view",{staticClass:"article"},[a("p",{staticClass:"aricle-title"},[a("view",{staticClass:"text-bold names"},[t._v("可回收物")]),t._v("是指在日常生活中或者为日常生活提供服务的活动中产生的，已经失去原有全部或者部分使用价值，回收后经过再加工可以成为生产原料或者经过整理可以再利用的物品，主要包括废纸类、塑料类、玻璃类、金属类、电子废弃物类、织物类等。")])],1)]),a("view",{directives:[{name:"show",rawName:"v-show",value:3==e,expression:"index==3"}],staticClass:"action justify-center"},[a("view",{staticClass:"article justify-center"},[a("image",{staticClass:"flex img justify-center",attrs:{src:"../../static/harmfulWaste.png"}})]),a("view",{staticClass:"article"},[a("p",{staticClass:"aricle-title"},[a("view",{staticClass:"text-bold names"},[t._v("有害垃圾")]),t._v("指废电池、废灯管、废药品、废油漆及其容器等对人体健康或者自然环境造成直接或者潜在危害的生活废弃物。")])],1)])]),a("view",{staticClass:"cu-list menu"},[a("view",{staticClass:"cu-item"},[a("view",{staticClass:"content"},[a("image",{staticClass:"png",attrs:{src:"/static/logo.png",mode:"aspectFit"}}),a("text",{staticClass:"text-grey"},[t._v("图片 + 标题")])])])])])}))],1)])},s=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return s})}},[["72ae","common/runtime","common/vendor"]]]);