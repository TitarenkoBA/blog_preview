(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],r=!0,s=1;s<o.length;s++){var i=o[s];0!==n[i]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=o[0]))}return t}var r={},s={app:0},n={app:0},a=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-8a091630":"6e9dd535"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o={"chunk-8a091630":1};s[t]?e.push(s[t]):0!==s[t]&&o[t]&&e.push(s[t]=new Promise((function(e,o){for(var r="css/"+({}[t]||t)+"."+{"chunk-8a091630":"56a18702"}[t]+".css",n=c.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var l=a[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===n))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===r||u===n)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||n,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete s[t],p.parentNode.removeChild(p),o(a)},p.href=n;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){s[t]=0})));var r=n[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,o){r=n[t]=[e,o]}));e.push(r[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var o=n[t];if(0!==o){if(o){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",d.name="ChunkLoadError",d.type=r,d.request=s,o[1](d)}n[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(o,r,function(e){return t[e]}.bind(null,r));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"09dd":function(t,e,o){"use strict";var r=o("172e"),s=o.n(r);s.a},"12ce":function(t,e,o){},"172e":function(t,e,o){},"19b4":function(t,e,o){"use strict";var r=o("dded"),s=o.n(r);s.a},2395:function(t,e,o){},"548d":function(t,e,o){"use strict";var r=o("12ce"),s=o.n(r);s.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("b-navbar",{staticClass:"container"},[r("template",{slot:"brand"},[r("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[r("img",{attrs:{src:o("9957"),alt:"Logo Lorem ipsum"}})])],1),r("template",{slot:"start"},[r("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[t._v(" Home ")]),r("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/account"}}},[t._v(" Account ")])],1),r("template",{slot:"end"},[r("b-navbar-item",{attrs:{tag:"div"}},[r("div",{staticClass:"buttons is-centered"},[this.loggedUser.role?t._e():r("SignUp"),this.loggedUser.role?r("b-button",{attrs:{type:"is-light"},on:{click:function(e){return t.logOut()}}},[t._v(" Log out ")]):r("LogIn")],1)])],1)],2),r("router-view")],1)},n=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-button",{attrs:{type:"is-light"},on:{click:function(e){return t.cardModal()}}},[t._v(" Log in ")])},i=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{attrs:{action:"",id:"LogInForm"}},[o("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[t._m(0),o("section",{staticClass:"modal-card-body"},[o("b-field",{attrs:{label:"Email"}},[o("b-input",{attrs:{type:"email",value:t.email,placeholder:"Your email",required:""}})],1),o("b-field",{attrs:{label:"Password"}},[o("b-input",{attrs:{type:"password",value:t.password,"password-reveal":"",placeholder:"Your password",required:""}})],1)],1),o("footer",{staticClass:"modal-card-foot"},[o("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){return t.$parent.close()}}},[t._v("Close")]),o("button",{staticClass:"button is-primary",on:{click:function(e){return e.preventDefault(),t.logIn()}}},[t._v("Log in")])])])])},l=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"modal-card-head"},[o("p",{staticClass:"modal-card-title"},[t._v("Login")])])}],u=(o("7db0"),{name:"ModalFormLogIn",props:{email:String,password:String},methods:{logIn:function(){var t=this,e={email:document.querySelector('[type="email"]').value,password:document.querySelector('[type="password"]').value},o=this.$store.state.users.find((function(t){return t.login===e.email&&t.password===e.password}));o&&(this.$store.dispatch("logIn",o).then((function(){return t.$router.push("/")})),this.$parent.close())}}}),d=u,p=o("2877"),m=Object(p["a"])(d,c,l,!1,null,null,null),f=m.exports,h={name:"LogIn",methods:{cardModal:function(){this.$buefy.modal.open({parent:this,component:f,hasModalCard:!0,customClass:"custom-class custom-class-2",trapFocus:!0})}}},g=h,v=Object(p["a"])(g,a,i,!1,null,null,null),b=v.exports,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-button",{attrs:{type:"is-info"},on:{click:function(e){return t.cardModal()}}},[t._v(" Sign up ")])},_=[],w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{attrs:{action:""}},[o("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[t._m(0),o("section",{staticClass:"modal-card-body"},[o("b-field",{attrs:{label:"Email"}},[o("b-input",{ref:"first",attrs:{type:"email",value:t.email,placeholder:"Your email",required:""}})],1),o("b-field",{attrs:{label:"Password"}},[o("b-input",{ref:"second",attrs:{type:"password",value:t.password,"password-reveal":"",placeholder:"Your password",required:""}})],1),o("b-field",{attrs:{label:"Repeat password"}},[o("b-input",{attrs:{type:"password",value:t.password,"password-reveal":"",placeholder:"Repeat your password",required:""}})],1),o("b-field",{attrs:{label:"Select you role"}},[o("b-select",{attrs:{placeholder:"Select a role"}},[o("option",{attrs:{value:"writer"}},[t._v("Writer")]),o("option",{attrs:{value:"reader"}},[t._v("Reader")])])],1)],1),o("footer",{staticClass:"modal-card-foot"},[o("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){return t.$parent.close()}}},[t._v("Close")]),o("button",{staticClass:"button is-primary",on:{click:function(e){return e.preventDefault(),t.SignUp()}}},[t._v("Sign up")])])])])},P=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"modal-card-head"},[o("p",{staticClass:"modal-card-title"},[t._v("Sign up")])])}],C={name:"ModalFormSignUp",props:{email:String,password:String},methods:{SignUp:function(){var t=this,e={id:Math.round(100*Math.random()),login:document.querySelector('[type="email"]').value,password:document.querySelector('[type="password"]').value,role:document.querySelector("select").value};e.password===document.querySelectorAll('[type="password"]')[1].value&&""!==e.password&&""!==e.login&&(this.$store.dispatch("SignUp",e).then((function(){return t.$router.push("/")})),this.$parent.close())}}},$=C,S=Object(p["a"])($,w,P,!1,null,null,null),E=S.exports,T={name:"SignUp",methods:{cardModal:function(){this.$buefy.modal.open({parent:this,component:E,hasModalCard:!0,customClass:"custom-class custom-class-2",trapFocus:!0})}}},k=T,O=Object(p["a"])(k,y,_,!1,null,null,null),U=O.exports,x={components:{LogIn:b,SignUp:U},methods:{logOut:function(){this.$store.dispatch("logOut")}},computed:{loggedUser:function(){return this.$store.state.loggedUser}}},I=x,A=(o("7c55"),Object(p["a"])(I,s,n,!1,null,null,null)),j=A.exports,M=(o("d3b7"),o("8c4f")),q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home container"},[o("Blog")],1)},B=[],D=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blog"},[o("h1",[t._v("Posts")]),"writer"===this.loggedUser.role?o("CreateEditPost",{staticClass:"buttons is-left",attrs:{setButtonType:"add"}},[t._v("Create")]):t._e(),t._l(this.$store.state.posts,(function(t){return o("Post",{key:t.id,attrs:{post:t}})})),this.$store.state.posts.length>10?o("Pagination"):t._e()],2)},L=[],R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-button",{attrs:{type:"is-info"},on:{click:function(e){return t.cardModal()}}},[t._t("default")],2)},Z=[],F=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{attrs:{action:""}},[o("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[t._m(0),o("section",{staticClass:"modal-card-body"},[o("b-field",{attrs:{label:"Title",message:"Type title of your post here"}},[o("b-input",{attrs:{value:t.title}})],1),o("b-field",{attrs:{label:"Post",message:"Type your post here"}},[o("textarea",{domProps:{value:t.message}})])],1),o("footer",{staticClass:"modal-card-foot"},[o("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){return t.$parent.close()}}},[t._v("Cancel")]),o("button",{staticClass:"button is-primary",on:{click:function(e){return e.preventDefault(),t.save()}}},[t._v("Save")])])])])},N=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"modal-card-head"},[o("p",{staticClass:"modal-card-title"},[t._v("Edit post")])])}],z=(o("a4d3"),o("e01a"),{name:"ModalCreateEditPost",props:{title:String,message:String},methods:{save:function(){if("add"===this.$store.state.buttonType){var t={id:Math.round(100*Math.random()),title:document.querySelector("input").value,description:document.querySelector("textarea").value,claps:0,createdAt:new Date,updateAt:new Date,userId:this.$store.state.loggedUser.id};this.$store.dispatch("createPost",t)}else{var e={};e.title=document.querySelector("input").value,e.description=document.querySelector("textarea").value,e.updateAt=new Date,e.userId=this.$store.state.loggedUser.id,this.$store.dispatch("editPost",e)}this.$parent.close()}},mounted:function(){var t=this;"edit"===this.$store.state.buttonType&&(document.querySelector("input").value=this.$store.state.posts.find((function(e){return e.id===t.$store.state.editingPost})).title,document.querySelector("textarea").value=this.$store.state.posts.find((function(e){return e.id===t.$store.state.editingPost})).description)}}),H=z,Y=(o("548d"),Object(p["a"])(H,F,N,!1,null,"70293579",null)),J=Y.exports,K={name:"CreatEditPost",props:["setButtonType","postID"],methods:{cardModal:function(){this.checkButtonType(),this.rememberEditingPost(),this.$buefy.modal.open({parent:this,component:J,hasModalCard:!0,customClass:"custom-class custom-class-2",trapFocus:!0})},checkButtonType:function(){this.$store.dispatch("setButtonType",this.setButtonType)},rememberEditingPost:function(){this.$store.dispatch("rememberEditingPost",this.postID)}}},W=K,G=(o("09dd"),Object(p["a"])(W,R,Z,!1,null,"eb8fc9f8",null)),Q=G.exports,V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal-card"},[o("header",{staticClass:"modal-card-head"},[o("h3",{staticClass:"modal-card-title"},[t._v(t._s(t.post.title))])]),o("section",{staticClass:"modal-card-body"},[o("p",[t._v(t._s(t.post.description))]),o("p",{staticClass:"date"},[t._v(t._s(new Date(Date.parse(t.post.createdAt))))]),o("p",{staticClass:"date"},[t._v(t._s(new Date(Date.parse(t.post.updateAt))))]),o("div",{staticClass:"buttons"},["writer"===this.loggedUserRole?o("CreateEditPost",{attrs:{setButtonType:"edit",postID:this.post.id}},[t._v("Edit")]):t._e(),"writer"===this.loggedUserRole?o("b-button",{attrs:{type:"is-info"},on:{click:function(e){return t.remove()}}},[t._v(" Delete ")]):t._e(),"reader"===this.loggedUserRole?o("b-button",{attrs:{type:"is-info"},on:{click:function(e){return t.clap()}}},[o("b-icon",{staticClass:"middle",attrs:{pack:"fas",icon:"sign-language",size:"is-small"}}),o("span",{staticClass:"middle"},[t._v(t._s(t.post.claps))])],1):t._e()],1)])])},X=[],tt={name:"Post",components:{CreateEditPost:Q},props:["post"],methods:{clap:function(){this.$store.dispatch("clapPost",this.post.id)},remove:function(){this.$store.dispatch("deletePost",this.post.id)}},computed:{loggedUserRole:function(){return this.$store.state.loggedUser.role}}},et=tt,ot=(o("19b4"),Object(p["a"])(et,V,X,!1,null,"38b7ce2c",null)),rt=ot.exports,st=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"modal-card"},[o("hr"),o("b-pagination",{attrs:{total:t.total,current:t.current,"range-before":t.rangeBefore,"range-after":t.rangeAfter,order:t.order,size:t.size,simple:t.isSimple,rounded:t.isRounded,"per-page":t.perPage,"icon-prev":t.prevIcon,"icon-next":t.nextIcon,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},on:{"update:current":function(e){t.current=e}}})],1)},nt=[],at={name:"Pagination",data:function(){return{total:200,current:1,perPage:10,rangeBefore:2,rangeAfter:2,order:"is-centered",size:"is-small",isSimple:!1,isRounded:!1,prevIcon:"chevron-left",nextIcon:"chevron-right"}}},it=at,ct=Object(p["a"])(it,st,nt,!1,null,null,null),lt=ct.exports,ut={name:"Blog",components:{CreateEditPost:Q,Post:rt,Pagination:lt},computed:{loggedUser:function(){return this.$store.state.loggedUser}},methods:{setButtonType:function(){this.$store.state.buttonType="add"}},mounted:function(){this.$store.dispatch("loadPosts")}},dt=ut,pt=(o("6d33"),Object(p["a"])(dt,D,L,!1,null,"399b3780",null)),mt=pt.exports,ft={name:"Home",components:{Blog:mt}},ht=ft,gt=(o("70ce"),Object(p["a"])(ht,q,B,!1,null,"22c029b7",null)),vt=gt.exports;r["a"].use(M["a"]);var bt=[{path:"/",name:"Home",component:vt},{path:"/account",name:"Account",component:function(){return o.e("chunk-8a091630").then(o.bind(null,"77be"))}}],yt=new M["a"]({mode:"hash",base:"",routes:bt}),_t=yt,wt=(o("c740"),o("a434"),o("5530")),Pt=o("2f62");r["a"].use(Pt["a"]);var Ct=new Pt["a"].Store({state:{buttonType:"",editingPost:"",loggedUser:{id:1,login:"writer@mail.com",password:"123456",role:"writer"},users:[{id:1,login:"writer@mail.com",password:"123456",role:"writer"},{id:2,login:"reader@mail.com",password:"123456",role:"reader"}],posts:[{id:1,title:"Название поста",description:"Текст",claps:0,createdAt:"2019-09-29T00:00:00.000Z",updateAt:"2019-09-29T00:00:00.000Z",userId:1},{id:2,title:"Название поста",description:"Текст",claps:0,createdAt:"2019-09-29T00:00:00.000Z",updateAt:"2019-09-29T00:00:00.000Z",userId:1},{id:3,title:"Название постa",description:"Текст",claps:0,createdAt:"2019-09-29T00:00:00.000Z",updateAt:"2019-09-29T00:00:00.000Z",userId:1},{id:4,title:"Название постa",description:"Текст",claps:0,createdAt:"2019-09-29T00:00:00.000Z",updateAt:"2019-09-29T00:00:00.000Z",userId:1}]},mutations:{SignUp:function(t,e){t.users.push(e),t.loggedUser=Object(wt["a"])({},e)},logOut:function(t){t.loggedUser={}},logIn:function(t,e){t.loggedUser=Object(wt["a"])({},e)},createPost:function(t,e){t.posts.unshift(e)},deletePost:function(t,e){t.posts.splice(t.posts.findIndex((function(t){return t.id===e})),1)},editPost:function(t,e){var o=t.posts.find((function(e){return e.id===t.editingPost}));o.title=e.title,o.description=e.description,o.updateAt=e.updateAt,o.userId=e.userId},clapPost:function(t,e){t.posts.find((function(t){return t.id===e})).claps++},rememberEditingPost:function(t,e){t.editingPost=e},setButtonType:function(t,e){t.buttonType=e},changePassword:function(t,e){t.loggedUser=e,t.users.find((function(e){return e.id===t.loggedUser.id})).password=e},loadPosts:function(){}},actions:{SignUp:function(t,e){t.commit("SignUp",e)},logOut:function(t){t.commit("logOut")},logIn:function(t,e){t.commit("logIn",e)},createPost:function(t,e){t.commit("createPost",e)},deletePost:function(t,e){t.commit("deletePost",e)},editPost:function(t,e){t.commit("editPost",e)},clapPost:function(t,e){t.commit("clapPost",e)},rememberEditingPost:function(t,e){t.commit("rememberEditingPost",e)},setButtonType:function(t,e){t.commit("setButtonType",e)},changePassword:function(t,e){t.commit("changePassword",e)},loadPosts:function(t){t.commit("loadPosts")}}}),$t=o("289d");o("5abe");r["a"].use($t["a"]),r["a"].config.productionTip=!1,new r["a"]({router:_t,store:Ct,render:function(t){return t(j)}}).$mount("#app")},"6d33":function(t,e,o){"use strict";var r=o("ddc1"),s=o.n(r);s.a},"70ce":function(t,e,o){"use strict";var r=o("775b"),s=o.n(r);s.a},"775b":function(t,e,o){},"7c55":function(t,e,o){"use strict";var r=o("2395"),s=o.n(r);s.a},9957:function(t,e,o){t.exports=o.p+"img/logo-1.e188a94a.jpg"},ddc1:function(t,e,o){},dded:function(t,e,o){}});
//# sourceMappingURL=app.86af5918.js.map