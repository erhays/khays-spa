(function(t){function e(e){for(var r,u,i=e[0],s=e[1],c=e[2],l=0,p=[];l<i.length;l++)u=i[l],o[u]&&p.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function u(t){return i.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"af146977"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(t),a=function(e){s.onerror=s.onload=null,clearTimeout(c);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,u=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}o[t]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("a026"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"uk-navbar-container uk-navbar-transparent tm-navbar-container uk-sticky uk-active uk-sticky-below uk-sticky-fixed uk-padding"},[n("div",{staticClass:"uk-container uk-container-expand"},[n("nav",{staticClass:"uk-navbar-container uk-navbar-transparent",attrs:{"uk-navbar":""}},[n("div",{staticClass:"uk-navbar-left"},[n("span",{attrs:{"uk-navbar-item":"","uk-logo":"","uk-icon":"icon: heart"}}),n("span",{staticClass:"uk-flex",attrs:{"uk-navbar-item":""}},[n("router-link",{staticClass:"uk-margin-left uk-text-muted",attrs:{to:"/"}},[t._v("Home")]),n("router-link",{staticClass:"uk-margin-left uk-text-muted",attrs:{to:"/about"}},[t._v("About")]),n("router-link",{staticClass:"uk-margin-left uk-text-muted",attrs:{to:"/work"}},[t._v("Work")]),n("router-link",{staticClass:"uk-margin-left uk-text-muted",attrs:{to:"/blog"}},[t._v("Blog")])],1)])])])]),n("router-view"),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"uk-section uk-background-secondary tm-section-primary uk-padding-remove-bottom uk-position-bottom"},[n("div",{staticClass:"uk-container uk-text-center"},[n("p",{staticClass:"uk-text-muted"},[t._v("Built with Vue.js, UIKit + Buttercms.")])])])}],u=n("2877"),i={},s=Object(u["a"])(i,o,a,!1,null,null,null);s.options.__file="App.vue";var c=s.exports,l=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HeroSection")],1)},p=[],v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero-section"},[n("div",{staticClass:"uk-section uk-section-default"},[n("div",{staticClass:"uk-container"},[t._v("\n      {...Hero Section...}\n    ")])])])}],m={name:"HeroSection"},k=m,b=Object(u["a"])(k,v,d,!1,null,null,null);b.options.__file="HeroSection.vue";var _=b.exports,h={name:"home",components:{HeroSection:_}},g=h,y=Object(u["a"])(g,f,p,!1,null,null,null);y.options.__file="Home.vue";var w=y.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"work"},[n("h1",[t._v("Work page :)")])])}],j={},O=Object(u["a"])(j,x,C,!1,null,null,null);O.options.__file="Work.vue";var E=O.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog"},[n("h1",[t._v("This is the blog page")])])}],P={},H=Object(u["a"])(P,S,$,!1,null,null,null);H.options.__file="Blog.vue";var T=H.exports;r["a"].use(l["a"]);var B=new l["a"]({routes:[{path:"/",name:"home",component:w},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/work",name:"work",component:E},{path:"/blog",name:"blog",component:T}]});r["a"].config.productionTip=!1,new r["a"]({router:B,render:function(t){return t(c)}}).$mount("#app")}});
//# sourceMappingURL=app.85a0d26c.js.map