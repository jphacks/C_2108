(function(){var n={8976:function(){},215:function(n,t,e){"use strict";e(6992),e(8674),e(9601),e(7727);var r=e(144),o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("router-view")},i=[],u=e(8976),a=e.n(u),l=a(),c=e(1001),p=(0,c.Z)(l,o,i,!1,null,null,null),s=p.exports,f=e(5503);e(9433),e(7397),e(7895),f.Z.apps.length||f.Z.initializeApp({apiKey:"AIzaSyDw8BWCt1m9zcjYc_sIvPngZeqFvnGiweg",authDomain:"reply-is-all-you-need.firebaseapp.com",projectId:"reply-is-all-you-need",storageBucket:"reply-is-all-you-need.appspot.com",messagingSenderId:"844962270949",appId:"1:844962270949:web:f2fa37d5dbe750ed674e0c",measurementId:"G-9SP9QYRXKC"});var d=f.Z,v=f.Z.firestore(),m=e(8345),g=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-app",{attrs:{id:"app"}},[e("Appbar"),e("v-main",[e("Add")],1)],1)},h=[],b=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-app-bar",{attrs:{color:"#6A76AB",dark:"","shrink-on-scroll":"",prominent:"",src:"https://picsum.photos/1920/1080?random","fade-img-on-scroll":"",app:""},scopedSlots:n._u([{key:"img",fn:function(t){var r=t.props;return[e("v-img",n._b({attrs:{gradient:"to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"}},"v-img",r,!1))]}}])},[e("v-app-bar-title",[n._v("Reply is All you need")]),e("v-spacer"),e("v-btn",{staticClass:"mt-3",attrs:{text:""}},[n._v(" logout ")])],1)},_=[],y=e(3453),Z=e.n(y),x=e(2464),w=e(7905),O=e(4621),A=e(3127),T=e(7117),j={},k=(0,c.Z)(j,b,_,!1,null,null,null),S=k.exports;Z()(k,{VAppBar:x.Z,VAppBarTitle:w.Z,VBtn:O.Z,VImg:A.Z,VSpacer:T.Z});var B=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("h1",[n._v("MEMO")]),e("div",[e("textarea",{directives:[{name:"model",rawName:"v-model",value:n.inputTxt,expression:"inputTxt"}],domProps:{value:n.inputTxt},on:{input:function(t){t.target.composing||(n.inputTxt=t.target.value)}}}),n._v(" "),e("button",{on:{click:n.addMemo}},[n._v("追加")])])])},M=[],I={name:"Add",data:function(){return{inputTxt:""}},methods:{addMemo:function(){var n=this;v.collection("memos").add({input:this.inputTxt,date:d.firestore.Timestamp.now()}).then((function(){n.inputTxt=""})).catch((function(){}))}}},P=I,V=(0,c.Z)(P,B,M,!1,null,null,null),E=V.exports,C={name:"App",components:{Appbar:S,Add:E},data:function(){return{googleButtonRef:e(7085)}},mounted:function(){},methods:{logout:function(){f.Z.auth().signOut().then()}}},$=C,z=e(1744),R=e(9924),D=(0,c.Z)($,g,h,!1,null,null,null),F=D.exports;Z()(D,{VApp:z.Z,VMain:R.Z}),r.Z.use(m.Z);var G=[{path:"/",name:"",component:F}],K=new m.Z({mode:"history",base:"/",routes:G,scrollBehavior:function(n,t,e){return e||{x:0,y:0}}}),Y=K,q=e(3764);r.Z.use(q.Z);var N=new q.Z({icons:{iconfont:"mdi"}});r.Z.config.productionTip=!1,new r.Z({vuetify:N,router:Y,firebase:d,render:function(n){return n(s)}}).$mount("#app")},7085:function(n,t,e){n.exports=e.p+"img/btn_google_signin_light_normal_web.c48ded8e.png"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return n[r](i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,i){if(!r){var u=1/0;for(p=0;p<n.length;p++){r=n[p][0],o=n[p][1],i=n[p][2];for(var a=!0,l=0;l<r.length;l++)(!1&i||u>=i)&&Object.keys(e.O).every((function(n){return e.O[n](r[l])}))?r.splice(l--,1):(a=!1,i<u&&(u=i));if(a){n.splice(p--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var p=n.length;p>0&&n[p-1][2]>i;p--)n[p]=n[p-1];n[p]=[r,o,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],l=r[2],c=0;if(u.some((function(t){return 0!==n[t]}))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(l)var p=l(e)}for(t&&t(r);c<u.length;c++)i=u[c],e.o(n,i)&&n[i]&&n[i][0](),n[u[c]]=0;return e.O(p)},r=self["webpackChunkreply_is_all_you_need"]=self["webpackChunkreply_is_all_you_need"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(215)}));r=e.O(r)})();
//# sourceMappingURL=app-legacy.dd63beef.js.map