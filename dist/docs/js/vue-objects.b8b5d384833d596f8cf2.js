webpackJsonp([1],{19:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(6),n=i.n(r);i.d(t,"Media",function(){return n.a})},21:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=["center","bottom","stretch"],n=["flush","tiny","small","large","huge"];t.default={name:"Media",data:function(){return{}},props:{src:{type:String,required:!0},alt:{type:String,required:!0},reverse:{type:Boolean,default:!1},size:{type:String,validator:function(e){return n.includes(e)}},align:{type:String,validator:function(e){return r.includes(e)}}}}},56:function(e,t){},6:function(e,t,i){i(56);var r=i(1)(i(21),i(63),null,null);e.exports=r.exports},63:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"o-media",class:[e.align&&"o-media--"+e.align,e.size&&"o-media--"+e.size,{"o-media--reverse":e.reverse}]},[i("div",{staticClass:"o-media__img"},[i("img",e._b({},"img",{src:e.src,alt:e.alt}))]),e._v(" "),i("div",{staticClass:"o-media__body"},[e._t("default")],2)])},staticRenderFns:[]}}},[19]);
//# sourceMappingURL=vue-objects.b8b5d384833d596f8cf2.js.map