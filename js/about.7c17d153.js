(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about","chunk-2d0c82e2","chunk-2d0a4f1d"],{"0931":function(t,e,c){"use strict";c.r(e);var a=c("7a23");function o(t,e){return Object(a["z"])(),Object(a["g"])("div",null," 元件B ")}var n=c("d959"),l=c.n(n);const i={},r=l()(i,[["render",o]]);e["default"]=r},1799:function(t,e,c){"use strict";var a=c("7a23"),o={"aria-label":"Page navigation example"},n={class:"pagination justify-content-center"},l=Object(a["h"])("span",{"aria-hidden":"true"},"«",-1),i=[l],r=["onClick"],s=Object(a["h"])("span",{"aria-hidden":"true"},"»",-1),u=[s];function d(t,e,c,l,s,d){return Object(a["z"])(),Object(a["g"])("nav",o,[Object(a["h"])("ul",n,[Object(a["h"])("li",{class:Object(a["s"])(["page-item",{disabled:!1===c.pages.has_pre}])},[Object(a["h"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=Object(a["X"])((function(t){return d.updatePage(c.pages.current_page-1)}),["prevent"]))},i)],2),(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["H"])(c.pages.total_pages,(function(t){return Object(a["z"])(),Object(a["g"])("li",{class:Object(a["s"])(["page-item",{active:t===c.pages.current_page}]),key:t},[Object(a["h"])("a",{class:"page-link",href:"#",onClick:Object(a["X"])((function(e){return d.updatePage(t)}),["prevent"])},Object(a["M"])(t),9,r)],2)})),128)),Object(a["h"])("li",{class:Object(a["s"])(["page-item",{disabled:!1===c.pages.has_next}])},[Object(a["h"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=Object(a["X"])((function(t){return d.updatePage(c.pages.current_page+1)}),["prevent"]))},u)],2)])])}var b={props:["pages"],methods:{updatePage:function(t){this.$emit("emit-pages",{id:this.event.id,title:this.title,start:this.start,end:this.end})}}},p=c("d959"),h=c.n(p);const j=h()(b,[["render",d]]);e["a"]=j},"547d":function(t,e,c){"use strict";c.r(e);var a=c("7a23");function o(t,e){return Object(a["z"])(),Object(a["g"])("div",null," 元件A ")}var n=c("d959"),l=c.n(n);const i={},r=l()(i,[["render",o]]);e["default"]=r},"67bd":function(t,e,c){"use strict";c.r(e);var a=c("7a23"),o=Object(a["h"])("h2",null,"命名router",-1),n={class:"row"},l={class:"col-6"},i={class:"col-6"};function r(t,e){var c=Object(a["J"])("router-view");return Object(a["z"])(),Object(a["g"])(a["a"],null,[o,Object(a["h"])("div",n,[Object(a["h"])("div",l,[Object(a["k"])(c,{name:"left"})]),Object(a["h"])("div",i,[Object(a["k"])(c,{name:"right"})])])],64)}var s=c("d959"),u=c.n(s);const d={},b=u()(d,[["render",r]]);e["default"]=b},"9c6c":function(t,e,c){"use strict";c.r(e);var a=c("7a23"),o={class:"row"},n={class:"col"},l={class:"list-group"},i=Object(a["j"])("選單A"),r=Object(a["j"])("選單B"),s=Object(a["j"])("命名ctoa"),u=Object(a["j"])("命名atob"),d={class:"col"};function b(t,e,c,b,p,h){var j=Object(a["J"])("router-link"),m=Object(a["J"])("router-view");return Object(a["z"])(),Object(a["g"])("div",o,[Object(a["h"])("div",n,[Object(a["h"])("div",l,[Object(a["k"])(j,{to:"/newPage/a",class:Object(a["s"])(["list-group-item list-group-item-action",{active:"a"==p.tabactive}]),onClick:e[0]||(e[0]=function(t){return p.tabactive="a"}),"aria-current":"true"},{default:Object(a["V"])((function(){return[i]})),_:1},8,["class"]),Object(a["k"])(j,{to:"/newPage/b",class:Object(a["s"])(["list-group-item list-group-item-action",{active:"b"==p.tabactive}]),onClick:e[1]||(e[1]=function(t){return p.tabactive="b"})},{default:Object(a["V"])((function(){return[r]})),_:1},8,["class"]),Object(a["k"])(j,{to:"/newPage/nameView/ctoa",class:Object(a["s"])(["list-group-item list-group-item-action",{active:"ctoa"==p.tabactive}]),onClick:e[2]||(e[2]=function(t){return p.tabactive="ctoa"})},{default:Object(a["V"])((function(){return[s]})),_:1},8,["class"]),Object(a["k"])(j,{to:"/newPage/nameView/atob",class:Object(a["s"])(["list-group-item list-group-item-action",{active:"atob"==p.tabactive}]),onClick:e[3]||(e[3]=function(t){return p.tabactive="atob"})},{default:Object(a["V"])((function(){return[u]})),_:1},8,["class"])])]),Object(a["h"])("div",d,[Object(a["k"])(m)])])}var p={data:function(){return{tabactive:""}}},h=c("d959"),j=c.n(h);const m=j()(p,[["render",b]]);e["default"]=m},a434:function(t,e,c){"use strict";var a=c("23e7"),o=c("23cb"),n=c("a691"),l=c("50c4"),i=c("7b0b"),r=c("65f0"),s=c("8418"),u=c("1dde"),d=u("splice"),b=Math.max,p=Math.min,h=9007199254740991,j="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var c,a,u,d,m,O,f=i(this),g=l(f.length),v=o(t,g),P=arguments.length;if(0===P?c=a=0:1===P?(c=0,a=g-v):(c=P-2,a=p(b(n(e),0),g-v)),g+c-a>h)throw TypeError(j);for(u=r(f,a),d=0;d<a;d++)m=v+d,m in f&&s(u,d,f[m]);if(u.length=a,c<a){for(d=v;d<g-a;d++)m=d+a,O=d+c,m in f?f[O]=f[m]:delete f[O];for(d=g;d>g-a+c;d--)delete f[d-1]}else if(c>a)for(d=g-a;d>v;d--)m=d+a-1,O=d+c-1,m in f?f[O]=f[m]:delete f[O];for(d=0;d<c;d++)f[d+v]=arguments[d+2];return f.length=g-a+c,u}})},e01a:function(t,e,c){"use strict";var a=c("23e7"),o=c("83ab"),n=c("da84"),l=c("5135"),i=c("861d"),r=c("9bf2").f,s=c("e893"),u=n.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},b=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof b?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};s(b,u);var p=b.prototype=u.prototype;p.constructor=b;var h=p.toString,j="Symbol(test)"==String(u("test")),m=/^Symbol\((.*)\)[^)]+$/;r(p,"description",{configurable:!0,get:function(){var t=i(this)?this.valueOf():this,e=h.call(t);if(l(d,t))return"";var c=j?e.slice(7,-1):e.replace(m,"$1");return""===c?void 0:c}}),a({global:!0,forced:!0},{Symbol:b})}},e6dc:function(t,e,c){"use strict";c.r(e);var a=c("7a23"),o={class:"text-end mt-4"},n={class:"table mt-4"},l=Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("th",{width:"120"},"分類"),Object(a["h"])("th",null,"產品名稱"),Object(a["h"])("th",{width:"120"},"原價"),Object(a["h"])("th",{width:"120"},"售價"),Object(a["h"])("th",{width:"100"},"是否啟用"),Object(a["h"])("th",{width:"200"},"編輯")])],-1),i={class:"text-right"},r={class:"text-right"},s={key:0,class:"text-success"},u={key:1,class:"text-muted"},d={class:"btn-group"},b=["onClick"],p=["onClick"];function h(t,e,c,h,j,m){var O=Object(a["J"])("loading"),f=Object(a["J"])("Pagination"),g=Object(a["J"])("ProductModal"),v=Object(a["J"])("DelModal");return Object(a["z"])(),Object(a["g"])(a["a"],null,[Object(a["k"])(O,{active:j.isLoading},null,8,["active"]),Object(a["h"])("div",o,[Object(a["h"])("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=function(t){return m.openModal(!0)})}," 增加一個產品 ")]),Object(a["h"])("table",n,[l,Object(a["h"])("tbody",null,[(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["H"])(j.products,(function(e){return Object(a["z"])(),Object(a["g"])("tr",{key:e.id},[Object(a["h"])("td",null,Object(a["M"])(e.category),1),Object(a["h"])("td",null,Object(a["M"])(e.title),1),Object(a["h"])("td",i,Object(a["M"])(t.$filters.currency(e.origin_price)),1),Object(a["h"])("td",r,Object(a["M"])(t.$filters.currency(e.price)),1),Object(a["h"])("td",null,[e.is_enabled?(Object(a["z"])(),Object(a["g"])("span",s,"啟用")):(Object(a["z"])(),Object(a["g"])("span",u,"未啟用"))]),Object(a["h"])("td",null,[Object(a["h"])("div",d,[Object(a["h"])("button",{class:"btn btn-outline-primary btn-sm",onClick:function(t){return m.openModal(!1,e)}},"編輯",8,b),Object(a["h"])("button",{class:"btn btn-outline-danger btn-sm",onClick:function(t){return m.openDelProductModal(e)}},"刪除",8,p)])])])})),128))])]),Object(a["k"])(f,{pages:j.pagination,onEmitPages:m.getProducts},null,8,["pages","onEmitPages"]),Object(a["k"])(g,{ref:"productModal",product:j.tempProduct,onUpdateProduct:m.updateProduct},null,8,["product","onUpdateProduct"]),Object(a["k"])(v,{item:j.tempProduct,ref:"delModal",onDelItem:m.delProduct},null,8,["item","onDelItem"])],64)}var j=c("5530"),m=(c("99af"),c("a15b"),c("a434"),c("a4d3"),c("e01a"),{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),O={class:"modal-dialog modal-xl",role:"document"},f={class:"modal-content border-0"},g=Object(a["h"])("div",{class:"modal-header bg-dark text-white"},[Object(a["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(a["h"])("span",null,"新增產品")]),Object(a["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),v={class:"modal-body"},P={class:"row"},y={class:"col-sm-4"},k={class:"mb-3"},x=Object(a["h"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),w={class:"mb-3"},M=Object(a["h"])("label",{for:"customFile",class:"form-label"},[Object(a["j"])("或 上傳圖片 "),Object(a["h"])("i",{class:"fas fa-spinner fa-spin"})],-1),C=["src"],_={key:0,class:"mt-5"},z=["onUpdate:modelValue"],U=["onClick"],V={key:0},$={class:"col-sm-8"},J={class:"mb-3"},L=Object(a["h"])("label",{for:"title",class:"form-label"},"標題",-1),W={class:"row gx-2"},Q={class:"mb-3 col-md-6"},S=Object(a["h"])("label",{for:"category",class:"form-label"},"分類",-1),D={class:"mb-3 col-md-6"},F=Object(a["h"])("label",{for:"price",class:"form-label"},"單位",-1),A={class:"row gx-2"},I={class:"mb-3 col-md-6"},N=Object(a["h"])("label",{for:"origin_price",class:"form-label"},"原價",-1),E={class:"mb-3 col-md-6"},H=Object(a["h"])("label",{for:"price",class:"form-label"},"售價",-1),X=Object(a["h"])("hr",null,null,-1),B={class:"mb-3"},T=Object(a["h"])("label",{for:"description",class:"form-label"},"產品描述",-1),q={class:"mb-3"},G=Object(a["h"])("label",{for:"content",class:"form-label"},"說明內容",-1),K={class:"mb-3"},R={class:"form-check"},Y=Object(a["h"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),Z={class:"modal-footer"},tt=Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function et(t,e,c,o,n,l){return Object(a["z"])(),Object(a["g"])("div",m,[Object(a["h"])("div",O,[Object(a["h"])("div",f,[g,Object(a["h"])("div",v,[Object(a["h"])("div",P,[Object(a["h"])("div",y,[Object(a["h"])("div",k,[x,Object(a["W"])(Object(a["h"])("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[0]||(e[0]=function(t){return n.tempProduct.imageUrl=t}),placeholder:"請輸入圖片連結"},null,512),[[a["Q"],n.tempProduct.imageUrl]])]),Object(a["h"])("div",w,[M,Object(a["h"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=function(){return l.uploadFile&&l.uploadFile.apply(l,arguments)})},null,544)]),Object(a["h"])("img",{class:"img-fluid",src:n.tempProduct.imageUrl,alt:""},null,8,C),n.tempProduct.images?(Object(a["z"])(),Object(a["g"])("div",_,[(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["H"])(n.tempProduct.images,(function(t,e){return Object(a["z"])(),Object(a["g"])("div",{class:"mb-3 input-group",key:e},[Object(a["W"])(Object(a["h"])("input",{type:"url",class:"form-control form-control",placeholder:"請輸入連結","onUpdate:modelValue":function(t){return n.tempProduct.images[e]=t}},null,8,z),[[a["Q"],n.tempProduct.images[e]]]),Object(a["h"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(t){return n.tempProduct.images.splice(e,1)}}," 移除 ",8,U)])})),128)),n.tempProduct.images[n.tempProduct.images.length-1]||!n.tempProduct.images.length?(Object(a["z"])(),Object(a["g"])("div",V,[Object(a["h"])("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=function(t){return n.tempProduct.images.push("")})}," 新增圖片 ")])):Object(a["f"])("",!0)])):Object(a["f"])("",!0)]),Object(a["h"])("div",$,[Object(a["h"])("div",J,[L,Object(a["W"])(Object(a["h"])("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[3]||(e[3]=function(t){return n.tempProduct.title=t})},null,512),[[a["Q"],n.tempProduct.title]])]),Object(a["h"])("div",W,[Object(a["h"])("div",Q,[S,Object(a["W"])(Object(a["h"])("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[4]||(e[4]=function(t){return n.tempProduct.category=t})},null,512),[[a["Q"],n.tempProduct.category]])]),Object(a["h"])("div",D,[F,Object(a["W"])(Object(a["h"])("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[5]||(e[5]=function(t){return n.tempProduct.unit=t})},null,512),[[a["Q"],n.tempProduct.unit]])])]),Object(a["h"])("div",A,[Object(a["h"])("div",I,[N,Object(a["W"])(Object(a["h"])("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":e[6]||(e[6]=function(t){return n.tempProduct.origin_price=t})},null,512),[[a["Q"],n.tempProduct.origin_price,void 0,{number:!0}]])]),Object(a["h"])("div",E,[H,Object(a["W"])(Object(a["h"])("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":e[7]||(e[7]=function(t){return n.tempProduct.price=t})},null,512),[[a["Q"],n.tempProduct.price,void 0,{number:!0}]])])]),X,Object(a["h"])("div",B,[T,Object(a["W"])(Object(a["h"])("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[8]||(e[8]=function(t){return n.tempProduct.description=t})},null,512),[[a["Q"],n.tempProduct.description]])]),Object(a["h"])("div",q,[G,Object(a["W"])(Object(a["h"])("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[9]||(e[9]=function(t){return n.tempProduct.content=t})},null,512),[[a["Q"],n.tempProduct.content]])]),Object(a["h"])("div",K,[Object(a["h"])("div",R,[Object(a["W"])(Object(a["h"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[10]||(e[10]=function(t){return n.tempProduct.is_enabled=t}),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[a["P"],n.tempProduct.is_enabled]]),Y])])])])]),Object(a["h"])("div",Z,[tt,Object(a["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=function(e){return t.$emit("update-product",n.tempProduct)})},"確認")])])])],512)}var ct=c("e0ae"),at={props:{product:{type:Object,default:function(){return{}}}},watch:{product:function(){this.tempProduct=this.product}},data:function(){return{modal:{},tempProduct:{}}},methods:{uploadFile:function(){var t=this,e=this.$refs.fileInput.files[0];console.dir(e);var c=new FormData;c.append("file-to-upload",e);var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("shelly-vue3-api","/admin/upload");this.$http.post(a,c).then((function(e){console.log(e.data),e.data.success&&(t.tempProduct.imageUrl=e.data.imageUrl)}))}},mixins:[ct["a"]]},ot=c("d959"),nt=c.n(ot);const lt=nt()(at,[["render",et]]);var it=lt,rt=c("6ff1"),st=c("1799"),ut={data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:it,DelModal:rt["a"],Pagination:st["a"]},inject:["emitter"],methods:{openModal:function(t,e){console.log(t,e),console.log(Object(j["a"])({},e)),this.tempProduct=t?{}:Object(j["a"])({},e),this.isNew=t;var c=this.$refs.productModal;c.showModal()},openDelProductModal:function(t){this.tempProduct=Object(j["a"])({},t);var e=this.$refs.delModal;e.showModal()},getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("shelly-vue3-api","/admin/products/?page=").concat(e);this.isLoading=!0,this.$http.get(c).then((function(e){console.log(e.data),t.isLoading=!1,e.data.success&&(t.products=e.data.products,t.pagination=e.data.pagination)}))},updateProduct:function(t){var e=this;this.tempProduct=t;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("shelly-vue3-api","/admin/product"),a="post";this.isLoading=!0,this.isNew||(c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("shelly-vue3-api","/admin/product/").concat(t.id),a="put");var o=this.$refs.productModal;this.$http[a](c,{data:this.tempProduct}).then((function(t){console.log(t),e.isLoading=!1,o.hideModal(),t.data.success?(e.getProducts(),e.emitter.emit("push-message",{style:"success",title:"更新成功"})):e.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:t.data.message.join("、")})}))},delProduct:function(){var t=this;console.log(this.tempProduct);var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("shelly-vue3-api","/admin/product/").concat(this.tempProduct.id),c=this.$refs.delModal;this.isLoading=!0,this.$http.delete(e).then((function(e){console.log(e.data),t.isLoading=!1,c.hideModal(),t.getProducts()}))}},created:function(){this.getProducts()}};const dt=nt()(ut,[["render",h]]);e["default"]=dt},f820:function(t,e,c){"use strict";c.r(e);var a=c("7a23"),o=Object(a["h"])("div",{class:"about"},[Object(a["h"])("h1",null,"This is an about page")],-1);function n(t,e,c,n,l,i){var r=Object(a["J"])("Card");return Object(a["z"])(),Object(a["g"])(a["a"],null,[o,Object(a["k"])(r)],64)}var l={class:"card",style:{width:"18rem"}},i={class:"card-body"},r={class:"card-title"},s=Object(a["h"])("h6",{class:"card-subtitle mb-2 text-muted"},"Card subtitle",-1),u=Object(a["h"])("p",{class:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content.",-1),d=Object(a["h"])("a",{href:"#",class:"card-link"},"Card link",-1),b=Object(a["h"])("a",{href:"#",class:"card-link"},"Another link",-1);function p(t,e,c,o,n,p){return Object(a["z"])(),Object(a["g"])("div",l,[Object(a["h"])("div",i,[Object(a["h"])("h5",r,Object(a["M"])(n.title),1),s,u,d,b])])}var h={data:function(){return{title:"這是card標題"}}},j=c("d959"),m=c.n(j);const O=m()(h,[["render",p]]);var f=O,g={components:{Card:f}};const v=m()(g,[["render",n]]);e["default"]=v}}]);
//# sourceMappingURL=about.7c17d153.js.map