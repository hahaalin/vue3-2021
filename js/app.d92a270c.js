(function(e){function t(t){for(var a,c,u=t[0],l=t[1],i=t[2],d=0,b=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);s&&s(t);while(b.length)b.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(a=!1)}a&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},o={app:0},r=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{"chunk-113c062a":"e3f488bc",about:"7c17d153","chunk-3e5d698c":"c86e9b03","chunk-421b7773":"1c515856","chunk-2d0a4f1d":"1938d2ca","chunk-2d0c82e2":"fa5122e5","chunk-2d229bb7":"f6855102","chunk-419368b2":"dc6a018a","chunk-44e12390":"74dc296b","chunk-2d0cbeb4":"614f748f","chunk-2d0d63f1":"cdc7b836","chunk-4bec8d34":"373796f5","chunk-78ee5e38":"b82e2d87","chunk-baf41f48":"a6742805"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=a);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var i=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",i.name="ChunkLoadError",i.type=a,i.request=r,n[1](i)}o[e]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue3-2021/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var s=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("159b"),n("b64b");var a=n("7a23"),o=n("bc3a"),r=n.n(o),c=n("130e"),u={id:"nav"},l=Object(a["j"])("Home"),i=Object(a["j"])(" | "),d=Object(a["j"])("About"),s=Object(a["j"])(" | "),b=Object(a["j"])("newPage"),h=Object(a["j"])(" | "),p=Object(a["j"])("Dashboard/Product"),f=Object(a["j"])(" | "),v=Object(a["j"])("Login");function g(e,t){var n=Object(a["J"])("router-link"),o=Object(a["J"])("router-view");return Object(a["z"])(),Object(a["g"])(a["a"],null,[Object(a["h"])("div",u,[Object(a["k"])(n,{to:"/"},{default:Object(a["V"])((function(){return[l]})),_:1}),i,Object(a["k"])(n,{to:"/about"},{default:Object(a["V"])((function(){return[d]})),_:1}),s,Object(a["k"])(n,{to:{name:"NewPage"}},{default:Object(a["V"])((function(){return[b]})),_:1}),h,Object(a["k"])(n,{to:"/dashboard/products"},{default:Object(a["V"])((function(){return[p]})),_:1}),f,Object(a["k"])(n,{to:"/login"},{default:Object(a["V"])((function(){return[v]})),_:1})]),Object(a["k"])(o)],64)}n("b743");var m=n("d959"),j=n.n(m);const k={},O=j()(k,[["render",g]]);var y=O,_=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),w=n("cf05"),P=n.n(w),x={class:"home"},L=Object(a["h"])("img",{alt:"Vue logo",src:P.a},null,-1);function M(e,t,n,o,r,c){var u=Object(a["J"])("HelloWorld");return Object(a["z"])(),Object(a["g"])("div",x,[L,Object(a["k"])(u,{msg:"Welcome to Your Vue.js App"})])}Object(a["C"])("data-v-5141a303");var S={class:"hello"},V=Object(a["i"])('<p data-v-5141a303> For a guide and recipes on how to configure / customize this project,<br data-v-5141a303> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-cli documentation</a>. </p><h3 data-v-5141a303>Installed CLI Plugins</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-5141a303>babel</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-5141a303>router</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-5141a303>eslint</a></li></ul><h3 data-v-5141a303>Essential Links</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Core Docs</a></li><li data-v-5141a303><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Forum</a></li><li data-v-5141a303><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Community Chat</a></li><li data-v-5141a303><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-5141a303>Twitter</a></li><li data-v-5141a303><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>News</a></li></ul><h3 data-v-5141a303>Ecosystem</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-router</a></li><li data-v-5141a303><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vuex</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-5141a303>vue-devtools</a></li><li data-v-5141a303><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-loader</a></li><li data-v-5141a303><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-5141a303>awesome-vue</a></li></ul>',7);function C(e,t,n,o,r,c){return Object(a["z"])(),Object(a["g"])("div",S,[Object(a["h"])("h1",null,Object(a["M"])(n.msg),1),V])}Object(a["A"])();var E={name:"HelloWorld",props:{msg:String}};n("65e4");const I=j()(E,[["render",C],["__scopeId","data-v-5141a303"]]);var T=I,z={name:"Home",components:{HelloWorld:T},created:function(){console.log("https://vue3-course-api.hexschool.io/","shelly-vue3-api")}};const H=j()(z,[["render",M]]);var W=H,A=[{path:"/",name:"Home",component:W},{path:"/about",name:"About",component:function(){return Promise.all([n.e("chunk-113c062a"),n.e("about")]).then(n.bind(null,"f820"))}},{path:"/newPage",name:"NewPage",component:function(){return Promise.all([n.e("chunk-113c062a"),n.e("about")]).then(n.bind(null,"9c6c"))},children:[{path:"a",component:function(){return Promise.all([n.e("chunk-113c062a"),n.e("about")]).then(n.bind(null,"547d"))}},{path:"b",component:function(){return Promise.all([n.e("chunk-113c062a"),n.e("about")]).then(n.bind(null,"0931"))}},{path:"nameView",component:function(){return Promise.all([n.e("chunk-113c062a"),n.e("about")]).then(n.bind(null,"67bd"))},children:[{path:"ctoa",components:{left:function(){return n.e("chunk-2d229bb7").then(n.bind(null,"df65"))},right:function(){return n.e("chunk-2d0c82e2").then(n.bind(null,"547d"))}}},{path:"atob",components:{left:function(){return n.e("chunk-2d0c82e2").then(n.bind(null,"547d"))},right:function(){return n.e("chunk-2d0a4f1d").then(n.bind(null,"0931"))}}}]}]},{path:"/login",name:"Login",component:function(){return n.e("chunk-4bec8d34").then(n.bind(null,"a55b"))}},{path:"/dashboard",name:"Dashboard",component:function(){return Promise.all([n.e("chunk-44e12390"),n.e("chunk-2d0d63f1")]).then(n.bind(null,"7277"))},children:[{path:"products",component:function(){return Promise.all([n.e("chunk-113c062a"),n.e("about")]).then(n.bind(null,"e6dc"))}},{path:"orders",component:function(){return Promise.all([n.e("chunk-113c062a"),n.e("chunk-3e5d698c")]).then(n.bind(null,"159d"))}},{path:"coupons",component:function(){return Promise.all([n.e("chunk-113c062a"),n.e("chunk-421b7773")]).then(n.bind(null,"f329"))}}]},{path:"/user",component:function(){return Promise.all([n.e("chunk-44e12390"),n.e("chunk-2d0cbeb4")]).then(n.bind(null,"4c5d"))},children:[{path:"cart",component:function(){return n.e("chunk-78ee5e38").then(n.bind(null,"76db"))}},{path:"product/:productId",component:function(){return n.e("chunk-419368b2").then(n.bind(null,"f962"))}},{path:"checkout/:orderId",component:function(){return n.e("chunk-baf41f48").then(n.bind(null,"a3d3"))}}]}],D=Object(_["a"])({history:Object(_["b"])(),routes:A}),F=D,J=n("8a14");n("fe26"),n("cd74"),n("ac1f"),n("5319"),n("b680");function N(e){var t=parseInt(e,10);return"".concat(t.toFixed(0).replace(/./g,(function(e,t,n){return t&&"."!==e&&(n.length-t)%3===0?", ".concat(e).replace(/\s/g,""):e})))}function $(e){var t=new Date(1e3*e);return t.toLocaleDateString()}n("a15b");var q=n("cfb9"),Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"更新";if(e.data.success)q["a"].emit("push-message",{style:"success",title:"".concat(t,"成功")});else{var n="string"===typeof e.data.message?[e.data.message]:e.data.message;q["a"].emit("push-message",{style:"danger",title:"".concat(t,"失敗"),content:n.join("、")})}},B=n("7bb1"),G=n("3aa8"),K=n("cbdf"),Q=n("9457"),R=Object(a["d"])(y);R.config.globalProperties.$filters={currency:N,date:$},Object.keys(G["a"]).forEach((function(e){Object(B["e"])(e,G["a"][e])})),Object(B["d"])({generateMessage:Object(K["a"])({zh_TW:Q}),validateOnInput:!0}),Object(K["b"])("zh_TW"),R.config.globalProperties.$httpMessageState=Y,R.use(c["a"],r.a),R.use(F),R.component("Loading",J["a"]),R.component("Form",B["c"]),R.component("Field",B["b"]),R.component("ErrorMessage",B["a"]),R.mount("#app")},"65e4":function(e,t,n){"use strict";n("ed12")},b743:function(e,t,n){"use strict";n("b7aa")},b7aa:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},cfb9:function(e,t,n){"use strict";var a=n("1344"),o=Object(a["a"])();t["a"]=o},ed12:function(e,t,n){}});
//# sourceMappingURL=app.d92a270c.js.map