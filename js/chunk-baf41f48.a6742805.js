(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-baf41f48"],{"1dde":function(t,e,c){var r=c("d039"),n=c("b622"),o=c("2d00"),a=n("species");t.exports=function(t){return o>=51||!r((function(){var e=[],c=e.constructor={};return c[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},8418:function(t,e,c){"use strict";var r=c("a04b"),n=c("9bf2"),o=c("5c6c");t.exports=function(t,e,c){var a=r(e);a in t?n.f(t,a,o(0,c)):t[a]=c}},"99af":function(t,e,c){"use strict";var r=c("23e7"),n=c("d039"),o=c("e8b5"),a=c("861d"),l=c("7b0b"),u=c("50c4"),d=c("8418"),i=c("65f0"),s=c("1dde"),b=c("b622"),h=c("2d00"),O=b("isConcatSpreadable"),j=9007199254740991,f="Maximum allowed index exceeded",p=h>=51||!n((function(){var t=[];return t[O]=!1,t.concat()[0]!==t})),g=s("concat"),v=function(t){if(!a(t))return!1;var e=t[O];return void 0!==e?!!e:o(t)},y=!p||!g;r({target:"Array",proto:!0,forced:y},{concat:function(t){var e,c,r,n,o,a=l(this),s=i(a,0),b=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?a:arguments[e],v(o)){if(n=u(o.length),b+n>j)throw TypeError(f);for(c=0;c<n;c++,b++)c in o&&d(s,b,o[c])}else{if(b>=j)throw TypeError(f);d(s,b++,o)}return s.length=b,s}})},a3d3:function(t,e,c){"use strict";c.r(e);c("b0c0");var r=c("7a23"),n={class:"my-5 row justify-content-center"},o={class:"table align-middle"},a=Object(r["h"])("thead",null,[Object(r["h"])("th",null,"品名"),Object(r["h"])("th",null,"數量"),Object(r["h"])("th",null,"單價")],-1),l={class:"text-end"},u=Object(r["h"])("td",{colspan:"2",class:"text-end"},"總計",-1),d={class:"text-end"},i={class:"table"},s=Object(r["h"])("th",{width:"100"},"Email",-1),b=Object(r["h"])("th",null,"姓名",-1),h=Object(r["h"])("th",null,"收件人電話",-1),O=Object(r["h"])("th",null,"收件人地址",-1),j=Object(r["h"])("th",null,"付款狀態",-1),f={key:0},p={key:1,class:"text-success"},g={key:0,class:"text-end"},v=Object(r["h"])("button",{class:"btn btn-danger"},"確認付款去",-1),y=[v];function m(t,e,c,v,m,x){var w=Object(r["J"])("Loading");return Object(r["z"])(),Object(r["g"])(r["a"],null,[Object(r["k"])(w,{active:m.isLoading},null,8,["active"]),Object(r["h"])("div",n,[Object(r["h"])("form",{class:"col-md-6",onSubmit:e[0]||(e[0]=Object(r["X"])((function(){return x.payOrder&&x.payOrder.apply(x,arguments)}),["prevent"]))},[Object(r["h"])("table",o,[a,Object(r["h"])("tbody",null,[(Object(r["z"])(!0),Object(r["g"])(r["a"],null,Object(r["H"])(m.order.products,(function(e){return Object(r["z"])(),Object(r["g"])("tr",{key:e.id},[Object(r["h"])("td",null,Object(r["M"])(e.product.title),1),Object(r["h"])("td",null,Object(r["M"])(e.qty)+"/"+Object(r["M"])(e.product.unit),1),Object(r["h"])("td",l,Object(r["M"])(t.$filters.currency(e.final_total)),1)])})),128))]),Object(r["h"])("tfoot",null,[Object(r["h"])("tr",null,[u,Object(r["h"])("td",d,Object(r["M"])(t.$filters.currency(m.order.total)),1)])])]),Object(r["h"])("table",i,[Object(r["h"])("tbody",null,[Object(r["h"])("tr",null,[s,Object(r["h"])("td",null,Object(r["M"])(m.order.user.email),1)]),Object(r["h"])("tr",null,[b,Object(r["h"])("td",null,Object(r["M"])(m.order.user.name),1)]),Object(r["h"])("tr",null,[h,Object(r["h"])("td",null,Object(r["M"])(m.order.user.tel),1)]),Object(r["h"])("tr",null,[O,Object(r["h"])("td",null,Object(r["M"])(m.order.user.address),1)]),Object(r["h"])("tr",null,[j,Object(r["h"])("td",null,[m.order.is_paid?(Object(r["z"])(),Object(r["g"])("span",p,"付款完成")):(Object(r["z"])(),Object(r["g"])("span",f,"尚未付款"))])])])]),!1===m.order.is_paid?(Object(r["z"])(),Object(r["g"])("div",g,y)):Object(r["f"])("",!0)],32)])],64)}c("99af");var x={data:function(){return{orderId:"",order:{user:{}},isLoading:!1}},methods:{getOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("shelly-vue3-api","/order/").concat(this.orderId);this.isLoading=!0,this.$http.get(e).then((function(e){e.data.success&&(t.order=e.data.order,console.log(t.order)),t.isLoading=!1}))},payOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("shelly-vue3-api","/pay/").concat(this.orderId);this.$http.post(e).then((function(e){console.log(e),e.data.success&&t.getOrder()}))}},created:function(){this.orderId=this.$route.params.orderId,console.log(this.orderId),this.getOrder()}},w=c("d959"),M=c.n(w);const k=M()(x,[["render",m]]);e["default"]=k},b0c0:function(t,e,c){var r=c("83ab"),n=c("9bf2").f,o=Function.prototype,a=o.toString,l=/^\s*function ([^ (]*)/,u="name";r&&!(u in o)&&n(o,u,{configurable:!0,get:function(){try{return a.call(this).match(l)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-baf41f48.a6742805.js.map