import{r as Le,P as tt,Q as nt,S as ot,u as O,t as d,U as at,V as rt,W as it,a as st,e as xe,j as m,X as lt,Y as ct,i as ut,Z as dt,_ as ft}from"./index-a089e988.js";import{p as Pe}from"./index-387d7a00.js";import{c as Ee,d as pt,a as mt,b as se}from"./index.esm-af86d3df.js";import{I as Oe}from"./Icon-232e6b89.js";const Se=e=>e.foodIntake.data,Yn=e=>e.foodIntake.data._id,Hn=e=>e.foodIntake.data.breakfast.totalCarbonohidretes,Qn=e=>e.foodIntake.data.breakfast.totalFat,Kn=e=>e.foodIntake.data.breakfast.totalProtein,Gn=e=>e.foodIntake.data.lunch.totalCarbonohidretes,Vn=e=>e.foodIntake.data.lunch.totalFat,Zn=e=>e.foodIntake.data.lunch.totalProtein,zn=e=>e.foodIntake.data.dinner.totalCarbonohidretes,Jn=e=>e.foodIntake.data.dinner.totalFat,Xn=e=>e.foodIntake.data.dinner.totalProtein,_n=e=>e.foodIntake.data.snack.totalCarbonohidretes,$n=e=>e.foodIntake.data.snack.totalFat,eo=e=>e.foodIntake.data.snack.totalProtein,to=e=>e.foodIntake.data.totalCalories,no=e=>e.foodIntake.data.totalProtein,oo=e=>e.foodIntake.data.totalCarbonohidretes,ao=e=>e.foodIntake.data.totalFat,ro="data:image/png;base64,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",io=""+new URL("breakfast-2x-b3d5a4e0.png",import.meta.url).href,so="data:image/png;base64,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",lo=""+new URL("dinner-2x-9cd80455.png",import.meta.url).href,co="data:image/png;base64,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",uo=""+new URL("lunch-2x-245fcbed.png",import.meta.url).href,fo="data:image/png;base64,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",po=""+new URL("snack-2x-95f725c6.png",import.meta.url).href;var ve={exports:{}},H={},ye={exports:{}},U={},ge={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=b;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",a="contents",i=/input|select|textarea|button|object|iframe/;function h(f,y){return y.getPropertyValue("overflow")!=="visible"||f.scrollWidth<=0&&f.scrollHeight<=0}function x(f){var y=f.offsetWidth<=0&&f.offsetHeight<=0;if(y&&!f.innerHTML)return!0;try{var p=window.getComputedStyle(f),A=p.getPropertyValue("display");return y?A!==a&&h(f,p):A===o}catch{return console.warn("Failed to inspect element style"),!1}}function r(f){for(var y=f,p=f.getRootNode&&f.getRootNode();y&&y!==document.body;){if(p&&y===p&&(y=p.host.parentNode),x(y))return!1;y=y.parentNode}return!0}function C(f,y){var p=f.nodeName.toLowerCase(),A=i.test(p)&&!f.disabled||p==="a"&&f.href||y;return A&&r(f)}function g(f){var y=f.getAttribute("tabindex");y===null&&(y=void 0);var p=isNaN(y);return(p||y>=0)&&C(f,!p)}function b(f){var y=[].slice.call(f.querySelectorAll("*"),0).reduce(function(p,A){return p.concat(A.shadowRoot?b(A.shadowRoot):[A])},[]);return y.filter(g)}e.exports=t.default})(ge,ge.exports);var We=ge.exports;Object.defineProperty(U,"__esModule",{value:!0});U.resetState=gt;U.log=bt;U.handleBlur=te;U.handleFocus=ne;U.markForFocusLater=At;U.returnFocus=Ct;U.popWithoutFocus=wt;U.setupScopedFocus=xt;U.teardownScopedFocus=Et;var ht=We,vt=yt(ht);function yt(e){return e&&e.__esModule?e:{default:e}}var V=[],G=null,be=!1;function gt(){V=[]}function bt(){}function te(){be=!0}function ne(){if(be){if(be=!1,!G)return;setTimeout(function(){if(!G.contains(document.activeElement)){var e=(0,vt.default)(G)[0]||G;e.focus()}},0)}}function At(){V.push(document.activeElement)}function Ct(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{V.length!==0&&(t=V.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function wt(){V.length>0&&V.pop()}function xt(e){G=e,window.addEventListener?(window.addEventListener("blur",te,!1),document.addEventListener("focus",ne,!0)):(window.attachEvent("onBlur",te),document.attachEvent("onFocus",ne))}function Et(){G=null,window.addEventListener?(window.removeEventListener("blur",te),document.removeEventListener("focus",ne)):(window.detachEvent("onBlur",te),document.detachEvent("onFocus",ne))}var Ae={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=x;var o=We,a=i(o);function i(r){return r&&r.__esModule?r:{default:r}}function h(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return r.activeElement.shadowRoot?h(r.activeElement.shadowRoot):r.activeElement}function x(r,C){var g=(0,a.default)(r);if(!g.length){C.preventDefault();return}var b=void 0,f=C.shiftKey,y=g[0],p=g[g.length-1],A=h();if(r===A){if(!f)return;b=p}if(p===A&&!f&&(b=y),y===A&&f&&(b=p),b){C.preventDefault(),b.focus();return}var S=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),B=S!=null&&S[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(B){var N=g.indexOf(A);if(N>-1&&(N+=f?-1:1),b=g[N],typeof b>"u"){C.preventDefault(),b=f?p:y,b.focus();return}C.preventDefault(),b.focus()}}e.exports=t.default})(Ae,Ae.exports);var Ot=Ae.exports,T={},St=function(){},Mt=St,F={},je={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=o:window.ExecutionEnvironment=o})()})(je);var Rt=je.exports;Object.defineProperty(F,"__esModule",{value:!0});F.canUseDOM=F.SafeNodeList=F.SafeHTMLCollection=void 0;var kt=Rt,It=Dt(kt);function Dt(e){return e&&e.__esModule?e:{default:e}}var fe=It.default,Ft=fe.canUseDOM?window.HTMLElement:{};F.SafeHTMLCollection=fe.canUseDOM?window.HTMLCollection:{};F.SafeNodeList=fe.canUseDOM?window.NodeList:{};F.canUseDOM=fe.canUseDOM;F.default=Ft;Object.defineProperty(T,"__esModule",{value:!0});T.resetState=Lt;T.log=Pt;T.assertNodeList=qe;T.setElement=Wt;T.validateElement=Ce;T.hide=jt;T.show=qt;T.documentNotReadyOrSSRTesting=Yt;var Ut=Mt,Tt=Nt(Ut),Bt=F;function Nt(e){return e&&e.__esModule?e:{default:e}}var I=null;function Lt(){I&&(I.removeAttribute?I.removeAttribute("aria-hidden"):I.length!=null?I.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(I).forEach(function(e){return e.removeAttribute("aria-hidden")})),I=null}function Pt(){}function qe(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function Wt(e){var t=e;if(typeof t=="string"&&Bt.canUseDOM){var o=document.querySelectorAll(t);qe(o,t),t=o}return I=t||I,I}function Ce(e){var t=e||I;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,Tt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function jt(e){var t=!0,o=!1,a=void 0;try{for(var i=Ce(e)[Symbol.iterator](),h;!(t=(h=i.next()).done);t=!0){var x=h.value;x.setAttribute("aria-hidden","true")}}catch(r){o=!0,a=r}finally{try{!t&&i.return&&i.return()}finally{if(o)throw a}}}function qt(e){var t=!0,o=!1,a=void 0;try{for(var i=Ce(e)[Symbol.iterator](),h;!(t=(h=i.next()).done);t=!0){var x=h.value;x.removeAttribute("aria-hidden")}}catch(r){o=!0,a=r}finally{try{!t&&i.return&&i.return()}finally{if(o)throw a}}}function Yt(){I=null}var Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.resetState=Ht;Z.log=Qt;var $={},ee={};function Me(e,t){e.classList.remove(t)}function Ht(){var e=document.getElementsByTagName("html")[0];for(var t in $)Me(e,$[t]);var o=document.body;for(var a in ee)Me(o,ee[a]);$={},ee={}}function Qt(){}var Kt=function(t,o){return t[o]||(t[o]=0),t[o]+=1,o},Gt=function(t,o){return t[o]&&(t[o]-=1),o},Vt=function(t,o,a){a.forEach(function(i){Kt(o,i),t.add(i)})},Zt=function(t,o,a){a.forEach(function(i){Gt(o,i),o[i]===0&&t.remove(i)})};Z.add=function(t,o){return Vt(t.classList,t.nodeName.toLowerCase()=="html"?$:ee,o.split(" "))};Z.remove=function(t,o){return Zt(t.classList,t.nodeName.toLowerCase()=="html"?$:ee,o.split(" "))};var z={};Object.defineProperty(z,"__esModule",{value:!0});z.log=Jt;z.resetState=Xt;function zt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Ye=function e(){var t=this;zt(this,e),this.register=function(o){t.openInstances.indexOf(o)===-1&&(t.openInstances.push(o),t.emit("register"))},this.deregister=function(o){var a=t.openInstances.indexOf(o);a!==-1&&(t.openInstances.splice(a,1),t.emit("deregister"))},this.subscribe=function(o){t.subscribers.push(o)},this.emit=function(o){t.subscribers.forEach(function(a){return a(o,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ce=new Ye;function Jt(){console.log("portalOpenInstances ----------"),console.log(ce.openInstances.length),ce.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function Xt(){ce=new Ye}z.default=ce;var we={};Object.defineProperty(we,"__esModule",{value:!0});we.resetState=tn;we.log=nn;var _t=z,$t=en(_t);function en(e){return e&&e.__esModule?e:{default:e}}var R=void 0,D=void 0,Y=[];function tn(){for(var e=[R,D],t=0;t<e.length;t++){var o=e[t];o&&o.parentNode&&o.parentNode.removeChild(o)}R=D=null,Y=[]}function nn(){console.log("bodyTrap ----------"),console.log(Y.length);for(var e=[R,D],t=0;t<e.length;t++){var o=e[t],a=o||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function Re(){Y.length!==0&&Y[Y.length-1].focusContent()}function on(e,t){!R&&!D&&(R=document.createElement("div"),R.setAttribute("data-react-modal-body-trap",""),R.style.position="absolute",R.style.opacity="0",R.setAttribute("tabindex","0"),R.addEventListener("focus",Re),D=R.cloneNode(),D.addEventListener("focus",Re)),Y=t,Y.length>0?(document.body.firstChild!==R&&document.body.insertBefore(R,document.body.firstChild),document.body.lastChild!==D&&document.body.appendChild(D)):(R.parentElement&&R.parentElement.removeChild(R),D.parentElement&&D.parentElement.removeChild(D))}$t.default.subscribe(on);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(u){for(var c=1;c<arguments.length;c++){var w=arguments[c];for(var n in w)Object.prototype.hasOwnProperty.call(w,n)&&(u[n]=w[n])}return u},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},i=function(){function u(c,w){for(var n=0;n<w.length;n++){var s=w[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}return function(c,w,n){return w&&u(c.prototype,w),n&&u(c,n),c}}(),h=Le,x=Pe,r=K(x),C=U,g=L(C),b=Ot,f=K(b),y=T,p=L(y),A=Z,S=L(A),B=F,N=K(B),Q=z,v=K(Q);function L(u){if(u&&u.__esModule)return u;var c={};if(u!=null)for(var w in u)Object.prototype.hasOwnProperty.call(u,w)&&(c[w]=u[w]);return c.default=u,c}function K(u){return u&&u.__esModule?u:{default:u}}function pe(u,c){if(!(u instanceof c))throw new TypeError("Cannot call a class as a function")}function Ze(u,c){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c&&(typeof c=="object"||typeof c=="function")?c:u}function ze(u,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof c);u.prototype=Object.create(c&&c.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),c&&(Object.setPrototypeOf?Object.setPrototypeOf(u,c):u.__proto__=c)}var me={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},Je=function(c){return c.code==="Tab"||c.keyCode===9},Xe=function(c){return c.code==="Escape"||c.keyCode===27},re=0,he=function(u){ze(c,u);function c(w){pe(this,c);var n=Ze(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,w));return n.setOverlayRef=function(s){n.overlay=s,n.props.overlayRef&&n.props.overlayRef(s)},n.setContentRef=function(s){n.content=s,n.props.contentRef&&n.props.contentRef(s)},n.afterClose=function(){var s=n.props,M=s.appElement,k=s.ariaHideApp,E=s.htmlOpenClassName,W=s.bodyOpenClassName,j=s.parentSelector,ie=j&&j().ownerDocument||document;W&&S.remove(ie.body,W),E&&S.remove(ie.getElementsByTagName("html")[0],E),k&&re>0&&(re-=1,re===0&&p.show(M)),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(g.returnFocus(n.props.preventScroll),g.teardownScopedFocus()):g.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),v.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(g.setupScopedFocus(n.node),g.markForFocusLater()),n.setState({isOpen:!0},function(){n.openAnimationFrame=requestAnimationFrame(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})}))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var s=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:s},function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())})},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(s){Je(s)&&(0,f.default)(n.content,s),n.props.shouldCloseOnEsc&&Xe(s)&&(s.stopPropagation(),n.requestClose(s))},n.handleOverlayOnClick=function(s){n.shouldClose===null&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(s):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(s){!n.props.shouldCloseOnOverlayClick&&s.target==n.overlay&&s.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(s){return n.ownerHandlesClose()&&n.props.onRequestClose(s)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(s,M){var k=(typeof M>"u"?"undefined":a(M))==="object"?M:{base:me[s],afterOpen:me[s]+"--after-open",beforeClose:me[s]+"--before-close"},E=k.base;return n.state.afterOpen&&(E=E+" "+k.afterOpen),n.state.beforeClose&&(E=E+" "+k.beforeClose),typeof M=="string"&&M?E+" "+M:E},n.attributesFromObject=function(s,M){return Object.keys(M).reduce(function(k,E){return k[s+"-"+E]=M[E],k},{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return i(c,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(n,s){this.props.isOpen&&!n.isOpen?this.open():!this.props.isOpen&&n.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!s.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var n=this.props,s=n.appElement,M=n.ariaHideApp,k=n.htmlOpenClassName,E=n.bodyOpenClassName,W=n.parentSelector,j=W&&W().ownerDocument||document;E&&S.add(j.body,E),k&&S.add(j.getElementsByTagName("html")[0],k),M&&(re+=1,p.hide(s)),v.default.register(this)}},{key:"render",value:function(){var n=this.props,s=n.id,M=n.className,k=n.overlayClassName,E=n.defaultStyles,W=n.children,j=M?{}:E.content,ie=k?{}:E.overlay;if(this.shouldBeClosed())return null;var _e={ref:this.setOverlayRef,className:this.buildClassName("overlay",k),style:o({},ie,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},$e=o({id:s,ref:this.setContentRef,style:o({},j,this.props.style.content),className:this.buildClassName("content",M),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),et=this.props.contentElement($e,W);return this.props.overlayElement(_e,et)}}]),c}(h.Component);he.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},he.propTypes={isOpen:r.default.bool.isRequired,defaultStyles:r.default.shape({content:r.default.object,overlay:r.default.object}),style:r.default.shape({content:r.default.object,overlay:r.default.object}),className:r.default.oneOfType([r.default.string,r.default.object]),overlayClassName:r.default.oneOfType([r.default.string,r.default.object]),parentSelector:r.default.func,bodyOpenClassName:r.default.string,htmlOpenClassName:r.default.string,ariaHideApp:r.default.bool,appElement:r.default.oneOfType([r.default.instanceOf(N.default),r.default.instanceOf(B.SafeHTMLCollection),r.default.instanceOf(B.SafeNodeList),r.default.arrayOf(r.default.instanceOf(N.default))]),onAfterOpen:r.default.func,onAfterClose:r.default.func,onRequestClose:r.default.func,closeTimeoutMS:r.default.number,shouldFocusAfterRender:r.default.bool,shouldCloseOnOverlayClick:r.default.bool,shouldReturnFocusAfterClose:r.default.bool,preventScroll:r.default.bool,role:r.default.string,contentLabel:r.default.string,aria:r.default.object,data:r.default.object,children:r.default.node,shouldCloseOnEsc:r.default.bool,overlayRef:r.default.func,contentRef:r.default.func,id:r.default.string,overlayElement:r.default.func,contentElement:r.default.func,testId:r.default.string},t.default=he,e.exports=t.default})(ye,ye.exports);var an=ye.exports;function He(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Qe(e){function t(o){var a=this.constructor.getDerivedStateFromProps(e,o);return a??null}this.setState(t.bind(this))}function Ke(e,t){try{var o=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,a)}finally{this.props=o,this.state=a}}He.__suppressDeprecationWarning=!0;Qe.__suppressDeprecationWarning=!0;Ke.__suppressDeprecationWarning=!0;function rn(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var o=null,a=null,i=null;if(typeof t.componentWillMount=="function"?o="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?i="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),o!==null||a!==null||i!==null){var h=e.displayName||e.name,x=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+h+" uses "+x+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(a!==null?`
  `+a:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=He,t.componentWillReceiveProps=Qe),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Ke;var r=t.componentDidUpdate;t.componentDidUpdate=function(g,b,f){var y=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:f;r.call(this,g,b,y)}}return e}const sn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:rn},Symbol.toStringTag,{value:"Module"})),ln=tt(sn);Object.defineProperty(H,"__esModule",{value:!0});H.bodyOpenClassName=H.portalClassName=void 0;var ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},cn=function(){function e(t,o){for(var a=0;a<o.length;a++){var i=o[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),Ge=Le,ue=oe(Ge),un=nt,de=oe(un),dn=Pe,l=oe(dn),fn=an,Ie=oe(fn),pn=T,mn=vn(pn),P=F,De=oe(P),hn=ln;function vn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function oe(e){return e&&e.__esModule?e:{default:e}}function yn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fe(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function gn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var bn=H.portalClassName="ReactModalPortal",An=H.bodyOpenClassName="ReactModal__Body--open",q=P.canUseDOM&&de.default.createPortal!==void 0,Ue=function(t){return document.createElement(t)},Te=function(){return q?de.default.createPortal:de.default.unstable_renderSubtreeIntoContainer};function le(e){return e()}var ae=function(e){gn(t,e);function t(){var o,a,i,h;yn(this,t);for(var x=arguments.length,r=Array(x),C=0;C<x;C++)r[C]=arguments[C];return h=(a=(i=Fe(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this].concat(r))),i),i.removePortal=function(){!q&&de.default.unmountComponentAtNode(i.node);var g=le(i.props.parentSelector);g&&g.contains(i.node)?g.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(g){i.portal=g},i.renderPortal=function(g){var b=Te(),f=b(i,ue.default.createElement(Ie.default,ke({defaultStyles:t.defaultStyles},g)),i.node);i.portalRef(f)},a),Fe(i,h)}return cn(t,[{key:"componentDidMount",value:function(){if(P.canUseDOM){q||(this.node=Ue("div")),this.node.className=this.props.portalClassName;var a=le(this.props.parentSelector);a.appendChild(this.node),!q&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var i=le(a.parentSelector),h=le(this.props.parentSelector);return{prevParent:i,nextParent:h}}},{key:"componentDidUpdate",value:function(a,i,h){if(P.canUseDOM){var x=this.props,r=x.isOpen,C=x.portalClassName;a.portalClassName!==C&&(this.node.className=C);var g=h.prevParent,b=h.nextParent;b!==g&&(g.removeChild(this.node),b.appendChild(this.node)),!(!a.isOpen&&!r)&&!q&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!P.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,i=Date.now(),h=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||i+this.props.closeTimeoutMS);h?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,h-i)):this.removePortal()}}},{key:"render",value:function(){if(!P.canUseDOM||!q)return null;!this.node&&q&&(this.node=Ue("div"));var a=Te();return a(ue.default.createElement(Ie.default,ke({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){mn.setElement(a)}}]),t}(Ge.Component);ae.propTypes={isOpen:l.default.bool.isRequired,style:l.default.shape({content:l.default.object,overlay:l.default.object}),portalClassName:l.default.string,bodyOpenClassName:l.default.string,htmlOpenClassName:l.default.string,className:l.default.oneOfType([l.default.string,l.default.shape({base:l.default.string.isRequired,afterOpen:l.default.string.isRequired,beforeClose:l.default.string.isRequired})]),overlayClassName:l.default.oneOfType([l.default.string,l.default.shape({base:l.default.string.isRequired,afterOpen:l.default.string.isRequired,beforeClose:l.default.string.isRequired})]),appElement:l.default.oneOfType([l.default.instanceOf(De.default),l.default.instanceOf(P.SafeHTMLCollection),l.default.instanceOf(P.SafeNodeList),l.default.arrayOf(l.default.instanceOf(De.default))]),onAfterOpen:l.default.func,onRequestClose:l.default.func,closeTimeoutMS:l.default.number,ariaHideApp:l.default.bool,shouldFocusAfterRender:l.default.bool,shouldCloseOnOverlayClick:l.default.bool,shouldReturnFocusAfterClose:l.default.bool,preventScroll:l.default.bool,parentSelector:l.default.func,aria:l.default.object,data:l.default.object,role:l.default.string,contentLabel:l.default.string,shouldCloseOnEsc:l.default.bool,overlayRef:l.default.func,contentRef:l.default.func,id:l.default.string,overlayElement:l.default.func,contentElement:l.default.func};ae.defaultProps={isOpen:!1,portalClassName:bn,bodyOpenClassName:An,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,o){return ue.default.createElement("div",t,o)},contentElement:function(t,o){return ue.default.createElement("div",t,o)}};ae.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,hn.polyfill)(ae);H.default=ae;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=H,a=i(o);function i(h){return h&&h.__esModule?h:{default:h}}t.default=a.default,e.exports=t.default})(ve,ve.exports);var Cn=ve.exports;const Ve=ot(Cn);let wn=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,o)=>(o&=63,o<36?t+=o.toString(36):o<62?t+=(o-26).toString(36).toUpperCase():o>62?t+="-":t+="_",t),"");const xn=O.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);

  width: 300px;
  height: 546px;

  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  background-color: ${d.color.primaryBlack};
  border-radius: 12px;

  transition: ${d.transition.main};
  z-index: 10;

  @media screen and (min-width: ${d.breakpoint.tablet}) {
    width: 708px;
    height: 408px;
    padding: 24px;
  }
`,En=O.h2`
  font-size: 24px;
  font-weight: 500; //PoppinsMedium
  line-height: 30px;
  color: ${d.color.primaryWhite};
  margin-bottom: 24px;

  @media screen and (min-width: ${d.breakpoint.tablet}) {
    font-size: 30px;
    line-height: 36px;
  }
`,On=O.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 16px;
`,Sn=O.img`
  width: 32px;
  height: 32px;
`,Mn=O.h3`
  font-size: 18px;
  font-weight: 400; //PoppinsRegular
  line-height: 26px;
  color: ${d.color.primaryWhite};

  @media screen and (min-width: ${d.breakpoint.tablet}) {
    font-size: 22px;
    line-height: 32px;
  }
`,Rn=O(at)`
  width: 100%;
  height: 100%;
  flex-grow: 1; // форма має розтягуватися та займати доступний вільний простір
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,kn=O.div`
  max-height: 320px;
  margin-bottom: 16px;

  @media screen and (min-width: ${d.breakpoint.tablet}) {
    max-height: 216px;
  }
`,In=O.ul`
  overflow-y: auto;
  height: 210px;
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${d.breakpoint.tablet}) {
    height: calc(100% - 44px);
  }

  &::-webkit-scrollbar {
    background-color: ${d.color.primaryBlack2};
    border-radius: 12px;
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    width: 5px;
  }
`,Dn=O.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  align-items: center;
  margin-bottom: 12px;
    
  & > div:nth-child(-n + 3) {
    flex-basis: 100%; 
    margin-bottom: 16px;
  }

  & > div:nth-last-child(-n + 3) {
    flex-basis: calc(43.48%);
  }

  @media screen and (min-width: ${d.breakpoint.tablet}) {
    & > div:nth-child(-n + 3) {
      margin-bottom: 0; 
    }
    margin-bottom: 12px;
    display:grid;
    grid-gap: 12px;
    grid-template-columns: 38.15% 15.26% 13.12% 9.30% 11.94% 3.05%; // з урахуванням скрола 5px
    
    & > div:nth-child(1) {.
      grid-column-start: 1;
      grid-column-end: 2;
    }

    & > div:nth-child(2) {
      grid-column-start: 2;
      grid-column-end: 3;
    }

    & > div:nth-child(3) {
      grid-column-start: 3;
      grid-column-end: 4;
    }
  }
  @media screen and (min-width:1440px){
    overflow: hidden;
  }
`,J=O.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,X=O(rt)`
  width: 100%;
  padding: 8px 10px;
  border: 1.5px solid ${d.color.primaryGreenLite};
  border-radius: 12px;
  background-color: ${d.color.primaryBlack2};
  font-size: 14px;
  font-weight: 400; //PoppinsRegular
  line-height: 20px;
  color: ${d.color.primaryWhite};
  outline: none;

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${d.color.primaryGrey};
  }
  &:hover,
  &:focus {
    border-color: ${d.color.primaryViolet};
  }
`,_=O(it)`
  padding: 0 5px;
  font-size: 8px;
  font-weight: 400
  line-height: 10px;
  color: ${d.color.primaryViolet};
`,Fn=O.button`
  max-width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  background-color: inherit;
  font-size: 14px;
  font-weight: 500; //PoppinsMedium;
  line-height: 20px;
  color: ${d.color.primaryGreenLite};
  transition: ${d.transition.main};
  &:hover {
    transform: scale(1.1);
    animation: 1s ease-in-out infinite;
  }
`,Un=O.button`
  padding: 0;
  margin: 0;
  background-color: transparent;
  transition: ${d.transition.main};
  &:hover {
    transform: scale(1.1);
    animation: 1s ease-in-out infinite;
  }
`,Tn=O.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: ${d.breakpoint.tablet}) {
    flex-direction: row-reverse;
  }
`,Bn=O.button`
  padding: 8px 10px;
  width: 100%;
  background-color: ${d.color.primaryGreenLite};
  border: 1.5px solid ${d.color.primaryGreenLite};
  color: ${d.color.primaryBlack2};
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500; // PoppinsMedium
  line-height: 20px;
  transition: ${d.transition.main};
  @media screen and (min-width: ${d.breakpoint.tablet}) {
    width: 212px;
  }
  &:hover {
    animation: 1s ease-in-out infinite;
    background-color: ${d.color.primaryBlack};
    color: ${d.color.primaryWhite};
  }
  &:focus {
    background-color: ${d.color.primaryGreenLite};
    color: ${d.color.primaryBlack};
  }
`,Nn=O.button`
  padding: 8px 10px;
  width: 100%;
  background-color: inherit;
  border: transparent;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 400; //PoppinsRegular
  line-height: 20px;
  color: ${d.color.primaryGrey};
  transition: ${d.transition.main};
  border: 1.5px solid transparent;
  &:hover {
    border: 1.5px solid ${d.color.primaryGreenLite};
    animation: 1s ease-in-out infinite;
    background-color: ${d.color.primaryBlack};
    color: ${d.color.primaryWhite};
  }
  &:focus {
    background-color: ${d.color.primaryGreenLite};
    color: ${d.color.primaryBlack};
  }
  @media screen and (min-width: ${d.breakpoint.tablet}) {
    width: 212px;
  }
`;Ve.setAppElement("#root");const Ln={content:{maxWidth:"fit-content",maxHeight:"fit-content",margin:"auto",overflow:"none",inset:0,padding:0,border:"none",background:"none"},overlay:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.8)",zIndex:3e3}},Be=Ee({productList:pt().of(Ee().shape({name:mt().required("Name is required").matches(/^\p{L}+$/).trim("Name cannot include leading and trailing spaces").strict(!0),carbonohidretes:se().required("Carbonohidretes is required").typeError("Must be a number").min(0,"Must be a positive number").max(1e3,"The maximum allowable value is 1000").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",e=>/^\d+(\.\d{1})?$/.test(e)),protein:se().required("Protein is required").typeError("Must be a number").min(0,"Must be a positive number").max(1e3,"The maximum allowable value is 1000").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",e=>/^\d+(\.\d{1})?$/.test(e)),fat:se().required("Fat is required").typeError("Must be a number").min(0,"Must be a positive number").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",e=>/^\d+(\.\d{1})?$/.test(e)),calories:se().required("Calories is required").typeError("Must be a number").min(0,"Must a be positive number").max(1e3,"The maximum allowable value is 1000").integer("Must be an integer")}))}),Ne={name:"",carbonohidretes:"",protein:"",fat:"",calories:"",productId:""},mo=({isModalOpen:e,onClose:t,category:o,categoryImage:a,item:i})=>{const h=st(),{breakfast:{products:x},lunch:{products:r},dinner:{products:C},snack:{products:g}}=xe(Se),b=xe(Se),f=o==="Lunch"?r:o==="Breakfast"?x:o==="Dinner"?C:o==="Snack"?g:[],y=async(p,{resetForm:A})=>{const S=p.mealsIntake.map(v=>({...v,productId:wn()})),B={date:ut,[o.toLowerCase()]:{products:S}},N={[o.toLowerCase()]:{products:p.mealsIntake}},Q={objectId:b._id,updateDataForBackend:N};i?h(dt(Q)):(h(ft(B)),A()),t()};return m.jsx(Ve,{isOpen:e,onRequestClose:t,style:Ln,children:m.jsxs(xn,{children:[m.jsx(En,{children:"Record your meal"}),m.jsxs(On,{children:[m.jsx(Sn,{src:a,alt:"categoryImage"}),m.jsx(Mn,{children:o})]}),m.jsx(lt,{initialValues:{mealsIntake:i&&f?f.map(p=>({name:p.name||"",carbonohidretes:p.carbonohidretes||"",protein:p.protein||"",fat:p.fat||"",calories:p.calories||"",productId:p.productId||""})):[Ne]},onSubmit:y,validationSchema:Be,validateOnBlur:!0,children:({errors:p,touched:A,values:S,setFieldValue:B})=>m.jsxs(Rn,{autoComplete:"off",children:[m.jsx(ct,{name:"mealsIntake",children:({remove:N})=>m.jsxs(kn,{children:[m.jsx(In,{children:S.mealsIntake.map((Q,v)=>m.jsxs(Dn,{children:[m.jsxs(J,{children:[m.jsx(X,{name:`mealsIntake.${v}.name`,id:`mealsIntake.${v}.name`,placeholder:"The name of the product or dish",type:"text",onKeyDown:L=>{/\d/.test(L.key)&&L.preventDefault()},onChange:L=>{const{name:K,value:pe}=L.target;B(K,pe)},value:S.mealsIntake[v].name,required:!0}),p[`mealsIntake.${v}.name`]&&A[`mealsIntake.${v}.name`]?m.jsx(_,{name:`mealsIntake.${v}.name`,component:"div"}):null]}),m.jsxs(J,{children:[m.jsx(X,{name:`mealsIntake.${v}.carbonohidretes`,id:`mealsIntake.${v}.carbonohidretes`,placeholder:"Carbonoh.",type:"number",min:0,max:1e3,required:!0}),m.jsx(_,{name:`mealsIntake.${v}.carbonohidretes`,component:"div"})]}),m.jsxs(J,{children:[m.jsx(X,{name:`mealsIntake.${v}.protein`,id:`mealsIntake.${v}.protein`,placeholder:"Protein",type:"number",min:0,max:1e3,required:!0}),p[`mealsIntake.${v}.protein`]&&A[`mealsIntake.${v}.protein`]?m.jsx(_,{name:`mealsIntake.${v}.protein`,component:"div"}):null]}),m.jsxs(J,{children:[m.jsx(X,{name:`mealsIntake.${v}.fat`,id:`mealsIntake.${v}.fat`,placeholder:"Fat",type:"number",min:0,max:1e3,required:!0}),p[`mealsIntake.${v}.fat`]&&A[`mealsIntake.${v}.fat`]?m.jsx(_,{name:`mealsIntake.${v}.fat`,component:"div"}):null]}),m.jsxs(J,{children:[m.jsx(X,{name:`mealsIntake.${v}.calories`,id:`mealsIntake.${v}.calories`,placeholder:"Calories",type:"number",min:0,max:1e3,required:!0}),p[`mealsIntake.${v}.calories`]&&A[`mealsIntake.${v}.calories`]?m.jsx(_,{name:`mealsIntake.${v}.calories`,component:"div"}):null]}),m.jsx(Un,{type:"button",onClick:()=>N(v),children:m.jsx(Oe,{name:"icon-trash",width:20,height:20})})]},v))}),m.jsxs(Fn,{type:"button",onClick:()=>{const Q=S.mealsIntake.length-1,v=S.mealsIntake[Q];Be.isValid(v).then(L=>{L&&B("mealsIntake",[...S.mealsIntake,Ne])})},children:[m.jsx(Oe,{name:"icon-add","icon-add-more":!0,width:16,height:16}),"Add more"]})]})}),m.jsxs(Tn,{children:[m.jsx(Bn,{type:"submit",children:"Confirm"}),m.jsx(Nn,{onClick:t,children:"Cancel"})]})]})})]})})};export{mo as R,Qn as a,Kn as b,Gn as c,Vn as d,Zn as e,zn as f,Hn as g,Jn as h,Xn as i,_n as j,$n as k,eo as l,Se as m,co as n,ro as o,so as p,uo as q,io as r,fo as s,lo as t,po as u,no as v,oo as w,ao as x,to as y,Yn as z};
