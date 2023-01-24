(function(e){function t(t){for(var r,i,s=t[0],l=t[1],c=t[2],u=0,h=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(h.length)h.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1203:function(e,t,n){},4283:function(e,t,n){"use strict";n("1203")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("7a23");const o=Object(r["e"])("h1",null,"Vue3",-1);function a(e,t,n,a,i,s){const l=Object(r["m"])("vue-tree");return Object(r["h"])(),Object(r["d"])("div",null,[o,Object(r["e"])("button",{onClick:t[0]||(t[0]=(...e)=>s.onChangeDataset&&s.onChangeDataset(...e))},"change dataset"),Object(r["f"])(l,{style:{width:"800px",height:"600px",border:"1px solid gray"},dataset:i.sampleData,config:i.treeConfig},null,8,["dataset","config"])])}const i={class:"tree-container",ref:"container"},s=["onClick"];function l(e,t,n,o,a,l){return Object(r["h"])(),Object(r["d"])("div",i,[(Object(r["h"])(),Object(r["d"])("svg",{class:"svg vue-tree",ref:"svg",style:Object(r["g"])(a.initialTransformStyle)},null,4)),Object(r["e"])("div",{class:"dom-container",ref:"domContainer",style:Object(r["g"])(a.initialTransformStyle)},[Object(r["f"])(r["b"],{name:"tree-node-item",tag:"div"},{default:Object(r["o"])(()=>[(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["k"])(a.nodeDataList,(t,o)=>(Object(r["h"])(),Object(r["d"])("div",{class:"node-slot",onClick:e=>l.onClickNode(o),key:t.data._key,style:Object(r["g"])({left:a.formatDimension(n.direction===a.Direction.VERTICAL?t.x:t.y),top:a.formatDimension(n.direction===a.Direction.VERTICAL?t.y:t.x),width:a.formatDimension(n.config.nodeWidth),height:a.formatDimension(n.config.nodeHeight)})},[Object(r["l"])(e.$slots,"node",{node:t.data,collapsed:t.data._collapsed},()=>[Object(r["e"])("span",null,Object(r["n"])(t.data.value),1)],!0)],12,s))),128))]),_:3})],4)],512)}var c=n("efdb");const d=e=>"number"===typeof e?e+"px":-1!==e.indexOf("px")?e:e+"px";var u={name:"vue-tree",props:{config:{type:Object,default:()=>({nodeWidth:c["c"],nodeHeight:c["b"],levelHeight:c["a"]})},linkStyle:{type:String,default:c["e"].CURVE},direction:{type:String,default:c["d"].VERTICAL},collapseEnabled:{type:Boolean,default:!0},dataset:{type:[Object,Array],required:!0}},data(){return{formatDimension:d,Direction:c["d"],treeChartCore:null,nodeDataList:[],initialTransformStyle:{}}},mounted(){this.init()},beforeUnmount(){this.treeChartCore.destroy()},methods:{init(){this.treeChartCore=new c["f"]({svgElement:this.$refs.svg,domElement:this.$refs.domContainer,treeContainer:this.$refs.container,dataset:this.dataset,direction:this.direction,treeConfig:this.config,collapseEnabled:this.collapseEnabled,linkStyle:this.linkStyle}),this.treeChartCore.init(),this.nodeDataList=this.treeChartCore.getNodeDataList(),this.initialTransformStyle=this.treeChartCore.getInitialTransformStyle()},zoomIn(){this.treeChartCore.zoomIn()},zoomOut(){this.treeChartCore.zoomOut()},restoreScale(){this.treeChartCore.setScale(1)},onClickNode(e){this.treeChartCore.onClickNode(e),this.nodeDataList=this.treeChartCore.getNodeDataList()}},watch:{dataset:{deep:!0,handler:function(){this.treeChartCore.updateDataset(this.dataset),this.nodeDataList=this.treeChartCore.getNodeDataList()}}}},h=(n("aef9"),n("4283"),n("6b0d")),f=n.n(h);const p=f()(u,[["render",l],["__scopeId","data-v-ae31e58a"]]);var b=p,v={components:{VueTree:b},data(){return{showTree:!1,sampleData:{value:"1",children:[{value:"2",children:[{value:"4"},{value:"5"}]},{value:"3"}]},treeConfig:{nodeWidth:120,nodeHeight:80,levelHeight:200}}},methods:{onChangeDataset(){this.sampleData={value:"100",children:[{value:"200"},{value:"300",children:[{value:"400"},{value:"500"}]}]}},onClick(){this.showTree=!0}}};n("ef0d");const g=f()(v,[["render",a]]);var C=g;Object(r["c"])(C).mount("#app")},"7bf9":function(e,t,n){},aef9:function(e,t,n){"use strict";n("f42e")},ef0d:function(e,t,n){"use strict";n("7bf9")},f42e:function(e,t,n){}});
//# sourceMappingURL=app.884b8e63.js.map