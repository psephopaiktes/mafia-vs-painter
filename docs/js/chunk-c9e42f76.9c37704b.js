(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c9e42f76"],{"0d07":function(t,e,s){"use strict";var r=s("3f51"),n=s.n(r);n.a},"3f51":function(t,e,s){},a812:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"page"}},[s("div",{staticClass:"init container"},[s("h1",{staticClass:"headline"},[t._v(t._s(t.$store.state.en?"Player Setting":"プレイヤーの設定"))]),s("form",[s("ul",{staticClass:"form"},[s("transition-group",{attrs:{name:"list",tag:"p"}},t._l(t.$store.state.player,function(e,r){return s("li",{key:r,staticClass:"form__input"},[s("input",{class:{error:t.errors[r]},attrs:{type:"text"},domProps:{value:e},on:{input:function(e){t.validate(r,e.target.value)},focus:function(t){t.target.select()}}}),s("p",{directives:[{name:"show",rawName:"v-show",value:t.errors[r],expression:"errors[i]"}],staticClass:"form__error"},[s("iconError",{staticClass:"iconError"}),t._v(" "+t._s(t.errors[r]))],1),r>3?s("button",{attrs:{type:"button"},on:{click:function(e){t.$store.commit("removePlayer",r)}}},[s("iconRemoveCircle",{staticClass:"iconRemoveCircle"})],1):t._e()])}))],1)]),t.$store.state.player.length<8?s("button",{staticClass:"form__addButton",on:{click:function(e){t.$store.commit("addPlayer")}}},[s("iconAdd",{staticClass:"iconAdd"})],1):t._e(),s("p",{staticClass:"infoCell"},[t._v(t._s(t.$store.state.en?"TOEN":"ゲームに参加するプレイヤーの名前を入力してください。4人から8人まで参加可能です。順番はシャッフルされます。"))]),s("div",{staticClass:"bottomButtons fade"},[s("button",{staticClass:"button primary",attrs:{type:"button"},on:{click:function(e){t.validateAll()}}},[t._v(t._s(t.$store.state.en?"OK":"次へ"))])])])])},n=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{"enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"m18 13h-5v5c0 .5-.4 1-1 1s-1-.5-1-1v-5h-5c-.6 0-1-.4-1-1s.4-1 1-1h5v-5c0-.6.4-1 1-1s1 .4 1 1v5h5c.5 0 1 .4 1 1s-.5 1-1 1z"}})])},a=[],i=s("2877"),l={},c=Object(i["a"])(l,o,a,!1,null,null,null);c.options.__file="add.vue";var u=c.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{"enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"m12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm4 11h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.5 0 1 .4 1 1s-.5 1-1 1z"}})])},m=[],f={},p=Object(i["a"])(f,v,m,!1,null,null,null);p.options.__file="remove_circle.vue";var d=p.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{"enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"m12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 11c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1v4c0 .6-.4 1-1 1zm1 4h-2v-2h2z"}})])},_=[],w={},b=Object(i["a"])(w,h,_,!1,null,null,null);b.options.__file="error.vue";var g=b.exports,$={name:"init",data(){return{errors:["","","","","","","",""]}},methods:{validate(t,e){let s="";s=e?/^[\w\u30a0-\u30ff\u3040-\u309f\u30e0-\u9fcf]+$/.test(e)?/.{11,}/.test(e)?this.$store.state.en?"TOEN":"10文字以内で入力してください":"":this.$store.state.en?"TOEN":"使用できない文字が含まれています":this.$store.state.en?"TOEN":"入力してください",this.errors.splice(t,1,s),this.$store.commit("updatePlayer",{i:t,val:e})},validateAll(){let t=[];for(let e=0;e<this.$store.state.player.length;e++)this.validate(e,document.querySelectorAll(".form input")[e].value),t[e]=this.errors[e];t.every(t=>""===t)?this.$router.push("theme"):window.alert("入力に間違いがあります。")}},mounted(){document.querySelector(".form input").focus()},components:{iconAdd:u,iconRemoveCircle:d,iconError:g}},C=$,y=(s("0d07"),Object(i["a"])(C,r,n,!1,null,"61b89b67",null));y.options.__file="Init.vue";e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-c9e42f76.9c37704b.js.map