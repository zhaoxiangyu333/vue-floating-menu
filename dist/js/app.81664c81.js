(function(t){function e(e){for(var o,s,a=e[0],l=e[1],u=e[2],f=0,p=[];f<a.length;f++)s=a[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},i=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0d91":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("floatBtn")],1)},i=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"page",class:{"floating-window":!0,zIndexTop:t.moveFlags},on:{mouseup:function(e){return e.stopPropagation(),e.preventDefault(),t.moveEnd(e)},mousemove:function(e){return e.stopPropagation(),e.preventDefault(),t.moving(e)}}},[o("div",{ref:"floatBtn",staticClass:"popover-content__trigger floatBtn",style:{transition:t.moveFlags?"unset":"all 300ms ease",transform:"translate3d("+t.transform.left+"px,"+t.transform.top+"px,0)"},on:{mousedown:function(e){return e.stopPropagation(),e.preventDefault(),t.moveStart(e)},mouseover:function(e){return e.stopPropagation(),e.preventDefault(),t.showButton(e)},click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleMenu(e)}}},[o("span",{staticClass:"hover-area",style:{left:t.transform.left<50?"-50px":0,width:t.moveFlags?"50px":"100px"},on:{mouseleave:function(e){return e.stopPropagation(),e.preventDefault(),t.hideButton(e)}}}),o("transition",{attrs:{name:"floating-popover-fade-in-out"}},[t.popoverShow?o("div",{staticClass:"floating-popover",style:t.menuPosition},[o("div",{staticClass:"popover-content"},[o("div",{staticClass:"popover-content__item el-button",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.handleClickMenuAction(),t.closeMenuAndFloating()}}},[o("img",{attrs:{src:n("9e49")}}),t._v("自动标准化 ")])])]):t._e()]),o("img",{staticClass:"icon",attrs:{src:n("9e49")}})],1)])},a=[],l=(n("99af"),n("96cf"),n("1da1")),u={name:"floating-window",data:function(){return{moveFlags:!1,clickFlag:!1,hoverFlag:!1,movePosition:{x:0,y:0},nx:"",ny:"",dx:"",dy:"",xPum:"",yPum:"",popoverShow:!1,transform:{top:document.body.offsetHeight-300,left:document.body.offsetWidth-25},lastMoveIndex:0,curMoveIndex:0,menuPosition:{top:0,left:0}}},created:function(){var t=this;document.addEventListener("mouseup",(function(e){(e.clientY>window.innerHeight||e.clientY<60||e.clientX<0||e.clientX>window.innerWidth)&&t.moveEnd()}))},mounted:function(){var t=this,e=this.$refs.floatBtn;document.addEventListener("click",(function(n){if(e){var o=n.target;e===o||e.contains(o)||t.closeMenuAndFloating()}}))},methods:{handleClickMenuAction:function(){this.$alert("点击菜单了","标题名称",{confirmButtonText:"确定"})},closeMenuAndFloating:function(){console.log("closeMenuAndFloating"),this.popoverShow=!1,this.hoverFlag=!1,this.moveFlags=!1,this.resetFloatBtnLocation()},toggleMenu:function(){if(this.lastMoveIndex==this.curMoveIndex&&(console.log(this.lastMoveIndex-this.curMoveIndex),console.warn("点击"),this.popoverShow=!this.popoverShow,this.popoverShow)){document.onmousemove=null;var t=this.transform,e=t.top,n=t.left;this.menuPosition.top=e>=60?"-60px":"60px",this.menuPosition.left=n>200?"-132px":0,console.log("top:".concat(e,",left:").concat(n))}this.curMoveIndex=this.lastMoveIndex},hideButton:function(){console.log("mouse-leave"),this.popoverShow||(this.hoverFlag=!1,this.moveFlags||this.resetFloatBtnLocation())},showButton:function(){if(console.log("mouse-over"),this.moveFlags)return this.hoverFlag=!1;this.hoverFlag=!0;var t=this.transform,e=t.left,n=t.top;if(!(e>0&&e<-25)){var o=document.body.clientWidth;e<o/2?this.generateTransform({top:n,left:20}):this.generateTransform({top:n,left:o-70})}},moveStart:function(t){var e=this;if(console.log("moveStart"),2!=event.button)if(this.popoverShow)this.moveFlags=!1;else{this.clickFlag=!0;var n=this.$refs.floatBtn;this.movePosition.x=t.clientX,this.movePosition.y=t.clientY;var o=this.transform,r=o.left,i=o.top;this.dx=t.clientX-r,this.dy=t.clientY-i,this.moveFlags=!0,document.onmousemove=function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(o){var r,i,s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("onmousemove"),r=document.body.clientWidth,i=document.body.clientHeight,s=i-30,a=r-n.offsetWidth/2+e.dx,e.nx=o.clientX,e.ny=o.clientY,e.xPum=(e.nx>a?a:e.nx)-e.dx,e.yPum=(e.ny>s?s:e.ny)-e.dy,t.next=11,e.$nextTick();case 11:e.lastMoveIndex++,e.generateTransform({left:e.xPum>-25?e.xPum:-25,top:e.yPum>0?e.yPum:0});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},generateTransform:function(t){var e=t.top,n=t.left,o=this.$refs.floatBtn;o&&(this.$set(this.transform,"left",n),this.$set(this.transform,"top",e))},moving:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var o,r,i,s,a,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(console.log("moving"),e.clickFlag=!1,!e.moveFlags){n.next=20;break}return e.hoverFlag=!1,r=e.$refs.floatBtn,o=t.touches?t.touches[0]:t,i=document.body.clientWidth,s=document.body.clientHeight,a=s-30,l=i-r.offsetWidth/2+e.dx,e.nx=o.clientX,e.ny=o.clientY,e.xPum=(e.nx>l?l:e.nx)-e.dx,e.yPum=(e.ny>a?a:e.ny)-e.dy,n.next=16,e.$nextTick();case 16:e.lastMoveIndex++,e.generateTransform({left:e.xPum>-25?e.xPum:-25,top:e.yPum>0?e.yPum:0}),t.preventDefault(),t.stopPropagation();case 20:case"end":return n.stop()}}),n)})))()},resetFloatBtnLocation:function(){console.log("------reset");var t=this.$refs.floatBtn;if(t){var e=document.body.clientWidth,n=this.transform,o=n.left,r=n.top;o<e/2?this.generateTransform({top:r,left:"-25"}):this.generateTransform({top:r,left:e-25})}},moveEnd:function(){console.log("moveEnd"),this.moveFlags=!1,this.hoverFlag||(document.onmousemove=null,this.resetFloatBtnLocation())}}},c=u,f=(n("8c76"),n("7809"),n("2877")),p=Object(f["a"])(c,s,a,!1,null,"034c0166",null),d=p.exports,m={name:"App",components:{floatBtn:d}},v=m,h=(n("5c0b"),Object(f["a"])(v,r,i,!1,null,null,null)),g=h.exports,A=n("5c96"),x=n.n(A);n("0fae");o["default"].config.productionTip=!1,o["default"].use(x.a,{size:"small"}),new o["default"]({render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"5df2":function(t,e,n){},7809:function(t,e,n){"use strict";var o=n("5df2"),r=n.n(o);r.a},"8c76":function(t,e,n){"use strict";var o=n("0d91"),r=n.n(o);r.a},"9c0c":function(t,e,n){},"9e49":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAYAAAGJuT3dAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFqADAAQAAAABAAAAGAAAAACjEY07AAADZElEQVRIDY1VS0yTQRCeLa1gghE9UUqAgwePGOTCHb2YeNFoIpp4UHzQwkHRoCQkKvF1oC3gMzEKetDEk0YtBz1xksjRRBOEQMsJJWIE+li/b+n+/f9alE3+7uw3M9/OzsxuRdyjekDrYFS/MRgXbqWEhnQjAcUfo1US9xmkTJo5m+H2A1lCa63WzKHu09p40LI6qmNrHlF9Ljio67mAx4IB7Q+Ad1aW4IBus2EQhPKbo+TGtXd0yAGgfcAFNvrpgBSCMd3uAWCRM4qoHtkR0+XmiNaiJqpvIRPhQECCmbT0WHnmjPpubLgx9jpqHUrNzAKinzWnT3WqERqB+Ti+w9bBpk4pxaS99FsF52CFjM4ty0LDkP6wmpGDqM5Ht17VDOhWnCLh88neZEQl3EorI4RPlD0HJID4n2Dah8NVIcaGZKeaIV5ysARwKLmDw1w3rLel05ICEPcHpN/KYD7vsJq0oIil2LiLJ7XMn+kmx/1vgXWgk4/5Yx5pwq4gmGdb62/gtg6mKJYrsyKz811K8UPsj1kkq+PsMUYil6zyZESeY7sWu+bsqSCC+Qy28Ca/vLgbky+hCtmecll7jFNdqjkY17tXsrJ/vlNtmXcZUmQ3mVLCcFeRziyddhDZY4rCxv6lhTu+xslNu/La6axMAevGLrfpaYwpcCDeupyWKaRiEctXcDxmFPkfj7FbQdlc6qxcQVbaYPiDGOQqyKNSJr2pDjVNrNTwEDP0JS1hgLx+JHgKgsvFBIwW+qt2Q8z9lXilvkbUit3E3BMobuJrBNEkvu5klxqzBhuZmdxiDsX2QvbiSGRkPRKWFDloMnolE6mw8txit595IHFqT1+4DZru6UDyt4yj13eqnPSwsahfTcsBOL83DbdZWibaVdrtZ+V1iZPLMkzSUxHZ2qdAXRiDeMKH0b2LtAF8oqAqSN47UsDZW+M4fuX9uBxywUY0GHTGpliZX68fcad6hGueyK7KQ9ThmdsfVXnrL5fa2dNqzo27ZVu8JHa/mIzIqH073EYbkflA1UTlCGyvo0NC4EPTW1ChN7XU4zaN+fzSPXdWTf6LlE9gLoNW1dIKn2nY9trgDHGxMx9d+x9FHZwG/X65RjmTkUsg6jB4/lF2/sMI5kdJYqu0cz6yG1zjJBf+dxLa/QG90YyCvnf1IgAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.81664c81.js.map