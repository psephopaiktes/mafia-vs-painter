(function(e){function n(n){for(var a,c,l=n[0],i=n[1],s=n[2],u=0,h=[];u<l.length;u++)c=l[u],r[c]&&h.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);b&&b(n);while(h.length)h.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,c=1;c<t.length;c++){var l=t[c];0!==r[l]&&(a=!1)}a&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},c={app:0},r={app:0},o=[];function l(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-00e7ce9a":"078be6ee","chunk-05d5aae5":"f2ef9c7a","chunk-1619d344":"2faa1d24","chunk-3f36215c":"c1927991","chunk-67e674af":"87b7a5d6","chunk-7c41b1a8":"c637b748","chunk-8ce9fcbe":"0b1e95c8","chunk-a2c7714c":"bacf8186"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-00e7ce9a":1,"chunk-05d5aae5":1,"chunk-1619d344":1,"chunk-3f36215c":1,"chunk-67e674af":1,"chunk-7c41b1a8":1,"chunk-8ce9fcbe":1,"chunk-a2c7714c":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise(function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-00e7ce9a":"0e433876","chunk-05d5aae5":"efdc42d4","chunk-1619d344":"cdeec231","chunk-3f36215c":"c15c716f","chunk-67e674af":"dbda3cd2","chunk-7c41b1a8":"f383b68a","chunk-8ce9fcbe":"b04f4d46","chunk-a2c7714c":"0e433876"}[e]+".css",r=i.p+a,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var s=o[l],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===a||u===r))return n()}var h=document.getElementsByTagName("style");for(l=0;l<h.length;l++){s=h[l],u=s.getAttribute("data-href");if(u===a||u===r)return n()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=n,b.onerror=function(n){var a=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.request=a,delete c[e],b.parentNode.removeChild(b),t(o)},b.href=r;var v=document.getElementsByTagName("head")[0];v.appendChild(b)}).then(function(){c[e]=0}));var a=r[e];if(0!==a)if(a)n.push(a[2]);else{var o=new Promise(function(n,t){a=r[e]=[n,t]});n.push(a[2]=o);var s,u=document.getElementsByTagName("head")[0],h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=l(e),s=function(n){h.onerror=h.onload=null,clearTimeout(b);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+c+")");o.type=a,o.request=c,t[1](o)}r[e]=void 0}};var b=setTimeout(function(){s({type:"timeout",target:h})},12e4);h.onerror=h.onload=s,u.appendChild(h)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var h=0;h<s.length;h++)n(s[h]);var b=u;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);var a=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view"),t("NavMenu")],1)},r=[],o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("nav",{staticClass:"navMenu"},[t("transition",{attrs:{name:"navMenu__footer"}},[t("footer",{directives:[{name:"show",rawName:"v-show",value:!e.open,expression:"!open"}],staticClass:"navMenu__footer"},[t("button",{on:{click:e.openMenu}},[t("iconMenu",{staticClass:"iconMenu"})],1),"/"==e.$route.path?t("button",{on:{click:function(n){e.$store.commit("changeLang")}}},[e.$store.state.en?t("iconLanguageEn",{staticClass:"iconLanguage"}):t("iconLanguageJp",{staticClass:"iconLanguage"})],1):e._e()])]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"navMenu__content",attrs:{id:"navMenu__content"},on:{scroll:function(n){e.scrollInteraction(n.target)},touchend:function(n){e.touchEndInteraction(n.target)}}},[t("div",{staticClass:"mask",on:{click:function(n){return n.preventDefault(),n.stopPropagation(),e.closeMenu(n)}}}),t("section",{attrs:{id:"navMenu__menu"}},[t("h2",[t("button",{on:{click:e.closeMenu}},[t("iconClose",{staticClass:"iconClose"})],1),e._v("\n        MENU\n      ")]),e._m(0)])])],1)},l=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",[t("li",[e._v("aaa")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")]),t("li",[e._v("bbb")])])}],i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("svg",{attrs:{"enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"m4 18h16c.5 0 1-.5 1-1s-.5-1-1-1h-16c-.5 0-1 .5-1 1s.5 1 1 1zm0-5h16c.5 0 1-.4 1-1s-.5-1-1-1h-16c-.5 0-1 .4-1 1s.5 1 1 1zm-1-6c0 .6.5 1 1 1h16c.5 0 1-.4 1-1s-.5-1-1-1h-16c-.5 0-1 .4-1 1z"}})])},s=[],u=t("2877"),h={},b=Object(u["a"])(h,i,s,!1,null,null,null);b.options.__file="menu.vue";var v=b.exports,d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("svg",{attrs:{"enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("g",[t("path",{attrs:{d:"m12 20c-.8-1.2-1.5-2.5-1.9-4h1.9v-2h-2.3c-.1-.7-.2-1.3-.2-2s.1-1.4.2-2h4.7c.1.6.2 1.3.2 2h1.9c0-.7-.1-1.3-.1-2h3.4c.2.6.3 1.3.3 2h1.9c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10zm6.9-12h-2.9c-.3-1.2-.8-2.4-1.4-3.6 1.8.7 3.4 1.9 4.3 3.6zm-6.9-4c.8 1.2 1.5 2.5 1.9 4h-3.8c.4-1.4 1.1-2.8 1.9-4zm-2.7.4c-.5 1.2-.9 2.4-1.3 3.6h-3c1-1.7 2.5-2.9 4.3-3.6zm-5 9.6c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2h3.4c-.1.7-.1 1.3-.1 2s.1 1.3.1 2zm.8 2h3c.3 1.2.8 2.5 1.4 3.6-1.9-.7-3.5-1.9-4.4-3.6z"}}),t("path",{attrs:{d:"m12.8 19.7 1-.9c.2.3.5.4.8.4.4 0 .6-.3.6-.9v-4.8h2v5.2c0 .4 0 .8-.1 1.1s-.2.5-.4.7c-.4.4-.9.6-1.6.6-1.1 0-2-.6-2.3-1.4z"}}),t("path",{attrs:{d:"m20.2 21h-2v-7.4h1.9c1 0 1.7.2 2.2.6.6.5.8 1.1.8 1.9 0 .9-.3 1.6-.9 2-.4.3-1 .4-1.7.4h-.3zm0-4.1c.3 0 .5-.1.7-.2.1-.1.2-.4.2-.6 0-.3-.1-.5-.2-.6-.1-.2-.3-.2-.5-.2h-.1v1.6z"}})])])},p=[],f={},m=Object(u["a"])(f,d,p,!1,null,null,null);m.options.__file="language_jp.vue";var g=m.exports,_=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("svg",{attrs:{"enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("g",[t("path",{attrs:{d:"m12 20c-.8-1.2-1.5-2.5-1.9-4h1.9v-2h-2.3c-.1-.7-.2-1.3-.2-2s.1-1.4.2-2h4.7c.1.6.2 1.3.2 2h1.9c0-.7-.1-1.3-.1-2h3.4c.2.6.3 1.3.3 2h1.9c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10zm6.9-12h-2.9c-.3-1.2-.8-2.4-1.4-3.6 1.8.7 3.4 1.9 4.3 3.6zm-6.9-4c.8 1.2 1.5 2.5 1.9 4h-3.8c.4-1.4 1.1-2.8 1.9-4zm-2.7.4c-.5 1.2-.9 2.4-1.3 3.6h-3c1-1.7 2.5-2.9 4.3-3.6zm-5 9.6c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2h3.4c-.1.7-.1 1.3-.1 2s.1 1.3.1 2zm.8 2h3c.3 1.2.8 2.5 1.4 3.6-1.9-.7-3.5-1.9-4.4-3.6z"}}),t("path",{attrs:{d:"m13.2 21.1v-7.3h3.7v1.7h-1.7v1.1h1.5v1.6h-1.5v1.1h1.7v1.8z"}}),t("path",{attrs:{d:"m17.7 21.1v-7.3h1.9l1 2.6c.1.2.1.3.2.5s.1.4.2.7l.2.6c-.1-.6-.1-1.2-.2-1.6 0-.5-.1-.8-.1-1.1v-1.6h1.9v7.3h-1.8l-1-2.7c-.1-.3-.2-.6-.3-.8-.1-.3-.2-.5-.2-.7 0 .5.1 1 .1 1.3v1 1.9h-1.9z"}})])])},w=[],y={},k=Object(u["a"])(y,_,w,!1,null,null,null);k.options.__file="language_en.vue";var M=k.exports,E=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("svg",{attrs:{"enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"m18.3 5.7c-.4-.4-1-.4-1.4 0l-4.9 4.9-4.9-4.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4.9 4.9-4.9 4.9c-.4.4-.4 1 0 1.4s1 .4 1.4 0l4.9-4.9 4.9 4.9c.4.4 1 .4 1.4 0s.4-1 0-1.4l-4.9-4.9 4.9-4.9c.4-.4.4-1 0-1.4z"}})])},x=[],z={},T=Object(u["a"])(z,E,x,!1,null,null,null);T.options.__file="close.vue";var P=T.exports;const j=18,O=function(e){var n=1.70158;return(e-=1)*e*((n+1)*e+n)+1},C=e=>{const n=document.getElementById("navMenu__content"),t=n.scrollTop,a=e*window.innerHeight,c=a-t;let r,o=0;return new Promise(function(e){const a=function(){o++,r=t+c*O(o/j),n.scrollTo(0,r),o==j?e():requestAnimationFrame(a)};requestAnimationFrame(a)})};var N={name:"NavMenu",data(){return{open:!1,scrollTrigger:!1}},methods:{openMenu(){this.open=!0;const e=this;this.$nextTick(()=>{setTimeout(function(){C(.6).then(function(){e.scrollTrigger=!0})},100)})},closeMenu(){const e=this;C(0).then(function(){e.open=!1,e.scrollTrigger=!1})},scrollInteraction(e){if(!this.scrollTrigger)return;const n=e.scrollTop/window.innerHeight;if(1>=n&&n>=.6){const e=90+(n-.6)/.4*10;document.getElementById("navMenu__menu").style.width=e+"%"}else.4>n&&this.closeMenu()},touchEndInteraction(){const e=document.getElementById("navMenu__content"),n=e.scrollTop/window.innerHeight;1>n&&n>=.8?C(1):.8>n&&n>=.4&&C(.6)}},components:{iconMenu:v,iconLanguageJp:g,iconLanguageEn:M,iconClose:P}},$=N,S=(t("777c"),Object(u["a"])($,o,l,!1,null,"14b5d6a6",null));S.options.__file="NavMenu.vue";var L=S.exports,B={name:"app",created(){localStorage.state?this.$store.replaceState(JSON.parse(localStorage.state)):"ja-JP"==navigator.language&&(this.$store.state.en=!1),this.$store.watch(e=>e,()=>{localStorage.state=JSON.stringify(this.$store.state)},{deep:!0})},components:{NavMenu:L}},J=B,A=(t("5c0b"),Object(u["a"])(J,c,r,!1,null,null,null));A.options.__file="App.vue";var I=A.exports,q=t("8c4f");a["a"].use(q["a"]);var H=new q["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:()=>t.e("chunk-7c41b1a8").then(t.bind(null,"bb51"))},{path:"/init",name:"init",component:()=>t.e("chunk-67e674af").then(t.bind(null,"a812"))},{path:"/theme",name:"theme",component:()=>t.e("chunk-a2c7714c").then(t.bind(null,"de93")),children:[{path:"",component:()=>t.e("chunk-3f36215c").then(t.bind(null,"e8cc"))},{path:":player",component:()=>t.e("chunk-8ce9fcbe").then(t.bind(null,"7979"))}]},{path:"/draw/select",name:"drawSelect",component:()=>t.e("chunk-05d5aae5").then(t.bind(null,"cf71"))},{path:"/draw/paper",name:"drawPaper",component:()=>t.e("chunk-00e7ce9a").then(t.bind(null,"8101"))},{path:"/draw/device",name:"drawDevice",component:()=>t.e("chunk-1619d344").then(t.bind(null,"9546"))}]}),D=t("2f62"),F={"食べ物":["うどん","お好み焼き","オムライス","カレー","クッキー","ケーキ","サラダ","サンドイッチ","シチュー","スープ","寿司","スパゲッティ","せんべい","雑煮","ハンバーグ","ピザ","焼肉","ラーメン"],"スポーツ":["アーチェリー・弓道","カーリング","カヌー","空手","クレー射撃","競馬・乗馬","ゲートボール","剣道","ゴルフ","サーフィン","サッカー","柔道","重量挙げ・パワーリフティング","シンクロナイズドスイミング","新体操","水泳","スカイダイビング","スキー","スケート","スケートボード","スノーボード","相撲","ダーツ","体操","ダイビング","卓球","テニス","登山","ドッジボール","縄跳び","ハードル走","バスケットボール","バドミントン","バレーボール","ハンマー投げ","ビリヤード","フェンシング","フライングディスク・フリスビー","棒高跳び","ボウリング","ボクシング","ホッケー・アイスホッケー","マラソン","マラソン・駅伝","野球","ラグビー","リレー","レスリング","ロードレース・競輪","ローラースケート","ロッククライミング"],"動物":["アヒル","アリクイ","アルパカ","イヌ","イノシシ","イルカ","ウーパールーパー","ウサギ","ウシ","ウマ","エリマキトカゲ","オオカミ","カエル","カバ","カブトムシ","カメ","カメレオン","カモメ","カワウソ","カラス","カンガルー","キツネ","キリン","クジャク","クマ","蜘蛛","コアラ","ゴキブリ","ゴリラ","サイ","サル","シカ","シチメンチョウ","スカンク","セイウチ","ゾウ","タコ","ダチョウ","タヌキ","蝶","トド","トナカイ","トラ","ナマケモノ","ニワトリ","ネコ","ネズミ","バク","ハト","ハムスター","ハリネズミ","ビーバー","ヒツジ","ヒョウ","フクロウ","ブタ","ペリカン","ペンギン","モグラ","ヤギ","ライオン","ラクダ","ラッコ","リス","ワシ","ワニ"],"物語":["赤ずきん","一休さん","一寸法師","浦島太郎","オズの魔法使い","おむすびころりん","かぐや姫（竹取物語）","笠地蔵","かちかち山","金太郎","こぶとりじいさん","さるかに合戦","3匹の子ぶた","舌切り雀","ジャックと豆の木","白雪姫","シンデレラ","鶴の恩返し","人魚姫","裸の王様","花咲かじいさん","ピーターパン","ピノキオ","不思議の国のアリス","ブレーメンの音楽隊","ヘンゼルとグレーテル","マッチ売りの少女","桃太郎","わらしべ長者"],"行事・イベント":["海の日（海開き）","大晦日","お盆","オリンピック","元旦","クリスマス","結婚式","合コン","こどもの日","七五三","節分","葬式","卒業式","体育祭","七夕","誕生日","夏祭り","入学式","花火大会","花見","母の日","バレンタイン","ハロウィン","ひな祭り","文化祭","忘年会","ホワイトデー","旅行"]},U={"食べ物":["うどん","お好み焼き","オムライス","カレー","クッキー","ケーキ","サラダ","サンドイッチ","シチュー","スープ","寿司","スパゲッティ","せんべい","雑煮","ハンバーグ","ピザ","焼肉","ラーメン"],"スポーツ":["アーチェリー・弓道","カーリング","カヌー","空手","クレー射撃","競馬・乗馬","ゲートボール","剣道","ゴルフ","サーフィン","サッカー","柔道","重量挙げ・パワーリフティング","シンクロナイズドスイミング","新体操","水泳","スカイダイビング","スキー","スケート","スケートボード","スノーボード","相撲","ダーツ","体操","ダイビング","卓球","テニス","登山","ドッジボール","縄跳び","ハードル走","バスケットボール","バドミントン","バレーボール","ハンマー投げ","ビリヤード","フェンシング","フライングディスク・フリスビー","棒高跳び","ボウリング","ボクシング","ホッケー・アイスホッケー","マラソン","マラソン・駅伝","野球","ラグビー","リレー","レスリング","ロードレース・競輪","ローラースケート","ロッククライミング"],"動物":["アヒル","アリクイ","アルパカ","イヌ","イノシシ","イルカ","ウーパールーパー","ウサギ","ウシ","ウマ","エリマキトカゲ","オオカミ","カエル","カバ","カブトムシ","カメ","カメレオン","カモメ","カワウソ","カラス","カンガルー","キツネ","キリン","クジャク","クマ","蜘蛛","コアラ","ゴキブリ","ゴリラ","サイ","サル","シカ","シチメンチョウ","スカンク","セイウチ","ゾウ","タコ","ダチョウ","タヌキ","蝶","トド","トナカイ","トラ","ナマケモノ","ニワトリ","ネコ","ネズミ","バク","ハト","ハムスター","ハリネズミ","ビーバー","ヒツジ","ヒョウ","フクロウ","ブタ","ペリカン","ペンギン","モグラ","ヤギ","ライオン","ラクダ","ラッコ","リス","ワシ","ワニ"],"物語":["赤ずきん","一休さん","一寸法師","浦島太郎","オズの魔法使い","おむすびころりん","かぐや姫（竹取物語）","笠地蔵","かちかち山","金太郎","こぶとりじいさん","さるかに合戦","3匹の子ぶた","舌切り雀","ジャックと豆の木","白雪姫","シンデレラ","鶴の恩返し","人魚姫","裸の王様","花咲かじいさん","ピーターパン","ピノキオ","不思議の国のアリス","ブレーメンの音楽隊","ヘンゼルとグレーテル","マッチ売りの少女","桃太郎","わらしべ長者"],"アニメ・ゲーム・映画":["ウルトラマン","踊る大捜査線","金田一少年の事件簿","クレヨンしんちゃん","ゲゲゲの鬼太郎","こちら葛飾区亀有公園前派出所（こち亀）","ゴルゴ13","サザエさん","進撃の巨人","タイタニック","鉄腕アトム","とっとこハム太郎","となりのトトロ","ドラえもん","ドラゴンボール","ナルト（NARUTO）","バイオハザード","鋼の錬金術師","ハリーポッター","ポケットモンスター","魔女の宅急便","名探偵コナン","もののけ姫","ルパン三世"],"行事・イベント":["海の日（海開き）","大晦日","お盆","オリンピック","元旦","クリスマス","結婚式","合コン","こどもの日","七五三","節分","葬式","卒業式","体育祭","七夕","誕生日","夏祭り","入学式","花火大会","花見","母の日","バレンタイン","ハロウィン","ひな祭り","文化祭","忘年会","ホワイトデー","旅行"]},R={JP:F,EN:U};a["a"].use(D["a"]);const G=e=>e[Math.floor(Math.random()*e.length)];var K=new D["a"].Store({state:{en:!0,player:["","","",""],mafia:"",category:"",theme:"",record:[{}]},mutations:{changeLang(e){e.en=!e.en},addPlayer(e){e.player.push("")},removePlayer(e,n){e.player.splice(n,1)},updatePlayer(e,n){e.player[n.i]=n.val},shufflePlayer(e){for(let n=e.player.length-1;n>=0;n--){const t=Math.floor(Math.random()*(n+1));[e.player[n],e.player[t]]=[e.player[t],e.player[n]]}},selectCategoryTheme(e){e.category=G(Object.keys(R.JP)),e.theme=G(R.JP[e.category])},selectMafia(e){e.mafia=G(e.player)}},actions:{}});a["a"].config.productionTip=!1,a["a"].directive("scroll",{inserted:function(e,n){let t=function(a){n.value(a,e)&&window.removeEventListener("scroll",t)};window.addEventListener("scroll",t)}}),a["a"].directive("touchend",{bind:function(e,n){let t=function(a){n.value(a,e)&&window.removeEventListener("touchend",t)};window.addEventListener("touchend",t)}}),new a["a"]({router:H,store:K,render:function(e){return e(I)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var a=t("5e27"),c=t.n(a);c.a},"5e27":function(e,n,t){},"777c":function(e,n,t){"use strict";var a=t("c4df"),c=t.n(a);c.a},c4df:function(e,n,t){}});
//# sourceMappingURL=app.0dc9a2d9.js.map