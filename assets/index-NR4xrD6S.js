var sO=Object.defineProperty;var oO=(n,e,t)=>e in n?sO(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ue=(n,e,t)=>(oO(n,typeof e!="symbol"?e+"":e,t),t);function lO(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const a=Object.getOwnPropertyDescriptor(i,r);a&&Object.defineProperty(n,r,a.get?a:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var Sc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var xb={exports:{}},vm={},yb={exports:{}},wt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf=Symbol.for("react.element"),uO=Symbol.for("react.portal"),cO=Symbol.for("react.fragment"),fO=Symbol.for("react.strict_mode"),dO=Symbol.for("react.profiler"),hO=Symbol.for("react.provider"),pO=Symbol.for("react.context"),mO=Symbol.for("react.forward_ref"),gO=Symbol.for("react.suspense"),vO=Symbol.for("react.memo"),_O=Symbol.for("react.lazy"),RE=Symbol.iterator;function xO(n){return n===null||typeof n!="object"?null:(n=RE&&n[RE]||n["@@iterator"],typeof n=="function"?n:null)}var Sb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Eb=Object.assign,Mb={};function Ku(n,e,t){this.props=n,this.context=e,this.refs=Mb,this.updater=t||Sb}Ku.prototype.isReactComponent={};Ku.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ku.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function wb(){}wb.prototype=Ku.prototype;function Ax(n,e,t){this.props=n,this.context=e,this.refs=Mb,this.updater=t||Sb}var Cx=Ax.prototype=new wb;Cx.constructor=Ax;Eb(Cx,Ku.prototype);Cx.isPureReactComponent=!0;var PE=Array.isArray,Tb=Object.prototype.hasOwnProperty,Rx={current:null},bb={key:!0,ref:!0,__self:!0,__source:!0};function Ab(n,e,t){var i,r={},a=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)Tb.call(e,i)&&!bb.hasOwnProperty(i)&&(r[i]=e[i]);var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){for(var c=Array(l),f=0;f<l;f++)c[f]=arguments[f+2];r.children=c}if(n&&n.defaultProps)for(i in l=n.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:Kf,type:n,key:a,ref:o,props:r,_owner:Rx.current}}function yO(n,e){return{$$typeof:Kf,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Px(n){return typeof n=="object"&&n!==null&&n.$$typeof===Kf}function SO(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var LE=/\/+/g;function sv(n,e){return typeof n=="object"&&n!==null&&n.key!=null?SO(""+n.key):e.toString(36)}function rp(n,e,t,i,r){var a=typeof n;(a==="undefined"||a==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Kf:case uO:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+sv(o,0):i,PE(r)?(t="",n!=null&&(t=n.replace(LE,"$&/")+"/"),rp(r,e,t,"",function(f){return f})):r!=null&&(Px(r)&&(r=yO(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(LE,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",PE(n))for(var l=0;l<n.length;l++){a=n[l];var c=i+sv(a,l);o+=rp(a,e,t,c,r)}else if(c=xO(n),typeof c=="function")for(n=c.call(n),l=0;!(a=n.next()).done;)a=a.value,c=i+sv(a,l++),o+=rp(a,e,t,c,r);else if(a==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function eh(n,e,t){if(n==null)return n;var i=[],r=0;return rp(n,i,"","",function(a){return e.call(t,a,r++)}),i}function EO(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var wi={current:null},ap={transition:null},MO={ReactCurrentDispatcher:wi,ReactCurrentBatchConfig:ap,ReactCurrentOwner:Rx};wt.Children={map:eh,forEach:function(n,e,t){eh(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return eh(n,function(){e++}),e},toArray:function(n){return eh(n,function(e){return e})||[]},only:function(n){if(!Px(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};wt.Component=Ku;wt.Fragment=cO;wt.Profiler=dO;wt.PureComponent=Ax;wt.StrictMode=fO;wt.Suspense=gO;wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MO;wt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Eb({},n.props),r=n.key,a=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=Rx.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var l=n.type.defaultProps;for(c in e)Tb.call(e,c)&&!bb.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=t;else if(1<c){l=Array(c);for(var f=0;f<c;f++)l[f]=arguments[f+2];i.children=l}return{$$typeof:Kf,type:n.type,key:r,ref:a,props:i,_owner:o}};wt.createContext=function(n){return n={$$typeof:pO,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:hO,_context:n},n.Consumer=n};wt.createElement=Ab;wt.createFactory=function(n){var e=Ab.bind(null,n);return e.type=n,e};wt.createRef=function(){return{current:null}};wt.forwardRef=function(n){return{$$typeof:mO,render:n}};wt.isValidElement=Px;wt.lazy=function(n){return{$$typeof:_O,_payload:{_status:-1,_result:n},_init:EO}};wt.memo=function(n,e){return{$$typeof:vO,type:n,compare:e===void 0?null:e}};wt.startTransition=function(n){var e=ap.transition;ap.transition={};try{n()}finally{ap.transition=e}};wt.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};wt.useCallback=function(n,e){return wi.current.useCallback(n,e)};wt.useContext=function(n){return wi.current.useContext(n)};wt.useDebugValue=function(){};wt.useDeferredValue=function(n){return wi.current.useDeferredValue(n)};wt.useEffect=function(n,e){return wi.current.useEffect(n,e)};wt.useId=function(){return wi.current.useId()};wt.useImperativeHandle=function(n,e,t){return wi.current.useImperativeHandle(n,e,t)};wt.useInsertionEffect=function(n,e){return wi.current.useInsertionEffect(n,e)};wt.useLayoutEffect=function(n,e){return wi.current.useLayoutEffect(n,e)};wt.useMemo=function(n,e){return wi.current.useMemo(n,e)};wt.useReducer=function(n,e,t){return wi.current.useReducer(n,e,t)};wt.useRef=function(n){return wi.current.useRef(n)};wt.useState=function(n){return wi.current.useState(n)};wt.useSyncExternalStore=function(n,e,t){return wi.current.useSyncExternalStore(n,e,t)};wt.useTransition=function(){return wi.current.useTransition()};wt.version="18.2.0";yb.exports=wt;var Te=yb.exports;const Lx=bx(Te),wO=lO({__proto__:null,default:Lx},[Te]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TO=Te,bO=Symbol.for("react.element"),AO=Symbol.for("react.fragment"),CO=Object.prototype.hasOwnProperty,RO=TO.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,PO={key:!0,ref:!0,__self:!0,__source:!0};function Cb(n,e,t){var i,r={},a=null,o=null;t!==void 0&&(a=""+t),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)CO.call(e,i)&&!PO.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:bO,type:n,key:a,ref:o,props:r,_owner:RO.current}}vm.Fragment=AO;vm.jsx=Cb;vm.jsxs=Cb;xb.exports=vm;var Be=xb.exports,U0={},Rb={exports:{}},fr={},Pb={exports:{}},Lb={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(H,Z){var Q=H.length;H.push(Z);e:for(;0<Q;){var le=Q-1>>>1,de=H[le];if(0<r(de,Z))H[le]=Z,H[Q]=de,Q=le;else break e}}function t(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var Z=H[0],Q=H.pop();if(Q!==Z){H[0]=Q;e:for(var le=0,de=H.length,re=de>>>1;le<re;){var ue=2*(le+1)-1,xe=H[ue],Le=ue+1,Ne=H[Le];if(0>r(xe,Q))Le<de&&0>r(Ne,xe)?(H[le]=Ne,H[Le]=Q,le=Le):(H[le]=xe,H[ue]=Q,le=ue);else if(Le<de&&0>r(Ne,Q))H[le]=Ne,H[Le]=Q,le=Le;else break e}}return Z}function r(H,Z){var Q=H.sortIndex-Z.sortIndex;return Q!==0?Q:H.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();n.unstable_now=function(){return o.now()-l}}var c=[],f=[],d=1,p=null,m=3,v=!1,M=!1,x=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(H){for(var Z=t(f);Z!==null;){if(Z.callback===null)i(f);else if(Z.startTime<=H)i(f),Z.sortIndex=Z.expirationTime,e(c,Z);else break;Z=t(f)}}function w(H){if(x=!1,y(H),!M)if(t(c)!==null)M=!0,K(A);else{var Z=t(f);Z!==null&&se(w,Z.startTime-H)}}function A(H,Z){M=!1,x&&(x=!1,g(N),N=-1),v=!0;var Q=m;try{for(y(Z),p=t(c);p!==null&&(!(p.expirationTime>Z)||H&&!G());){var le=p.callback;if(typeof le=="function"){p.callback=null,m=p.priorityLevel;var de=le(p.expirationTime<=Z);Z=n.unstable_now(),typeof de=="function"?p.callback=de:p===t(c)&&i(c),y(Z)}else i(c);p=t(c)}if(p!==null)var re=!0;else{var ue=t(f);ue!==null&&se(w,ue.startTime-Z),re=!1}return re}finally{p=null,m=Q,v=!1}}var R=!1,P=null,N=-1,T=5,C=-1;function G(){return!(n.unstable_now()-C<T)}function X(){if(P!==null){var H=n.unstable_now();C=H;var Z=!0;try{Z=P(!0,H)}finally{Z?ae():(R=!1,P=null)}}else R=!1}var ae;if(typeof S=="function")ae=function(){S(X)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,Y=k.port2;k.port1.onmessage=X,ae=function(){Y.postMessage(null)}}else ae=function(){_(X,0)};function K(H){P=H,R||(R=!0,ae())}function se(H,Z){N=_(function(){H(n.unstable_now())},Z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_continueExecution=function(){M||v||(M=!0,K(A))},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(c)},n.unstable_next=function(H){switch(m){case 1:case 2:case 3:var Z=3;break;default:Z=m}var Q=m;m=Z;try{return H()}finally{m=Q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(H,Z){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Q=m;m=H;try{return Z()}finally{m=Q}},n.unstable_scheduleCallback=function(H,Z,Q){var le=n.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?le+Q:le):Q=le,H){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=Q+de,H={id:d++,callback:Z,priorityLevel:H,startTime:Q,expirationTime:de,sortIndex:-1},Q>le?(H.sortIndex=Q,e(f,H),t(c)===null&&H===t(f)&&(x?(g(N),N=-1):x=!0,se(w,Q-le))):(H.sortIndex=de,e(c,H),M||v||(M=!0,K(A))),H},n.unstable_shouldYield=G,n.unstable_wrapCallback=function(H){var Z=m;return function(){var Q=m;m=Z;try{return H.apply(this,arguments)}finally{m=Q}}}})(Lb);Pb.exports=Lb;var LO=Pb.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Db=Te,ur=LO;function ve(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ib=new Set,df={};function ol(n,e){Iu(n,e),Iu(n+"Capture",e)}function Iu(n,e){for(df[n]=e,n=0;n<e.length;n++)Ib.add(e[n])}var qa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),N0=Object.prototype.hasOwnProperty,DO=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,DE={},IE={};function IO(n){return N0.call(IE,n)?!0:N0.call(DE,n)?!1:DO.test(n)?IE[n]=!0:(DE[n]=!0,!1)}function UO(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function NO(n,e,t,i){if(e===null||typeof e>"u"||UO(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ti(n,e,t,i,r,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var ei={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){ei[n]=new Ti(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];ei[e]=new Ti(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){ei[n]=new Ti(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){ei[n]=new Ti(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){ei[n]=new Ti(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){ei[n]=new Ti(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){ei[n]=new Ti(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){ei[n]=new Ti(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){ei[n]=new Ti(n,5,!1,n.toLowerCase(),null,!1,!1)});var Dx=/[\-:]([a-z])/g;function Ix(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Dx,Ix);ei[e]=new Ti(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Dx,Ix);ei[e]=new Ti(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Dx,Ix);ei[e]=new Ti(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){ei[n]=new Ti(n,1,!1,n.toLowerCase(),null,!1,!1)});ei.xlinkHref=new Ti("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){ei[n]=new Ti(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ux(n,e,t,i){var r=ei.hasOwnProperty(e)?ei[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(NO(e,t,r,i)&&(t=null),i||r===null?IO(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var as=Db.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,th=Symbol.for("react.element"),nu=Symbol.for("react.portal"),iu=Symbol.for("react.fragment"),Nx=Symbol.for("react.strict_mode"),O0=Symbol.for("react.profiler"),Ub=Symbol.for("react.provider"),Nb=Symbol.for("react.context"),Ox=Symbol.for("react.forward_ref"),F0=Symbol.for("react.suspense"),k0=Symbol.for("react.suspense_list"),Fx=Symbol.for("react.memo"),bs=Symbol.for("react.lazy"),Ob=Symbol.for("react.offscreen"),UE=Symbol.iterator;function Ec(n){return n===null||typeof n!="object"?null:(n=UE&&n[UE]||n["@@iterator"],typeof n=="function"?n:null)}var dn=Object.assign,ov;function Bc(n){if(ov===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ov=e&&e[1]||""}return`
`+ov+n}var lv=!1;function uv(n,e){if(!n||lv)return"";lv=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(f){var i=f}Reflect.construct(n,[],e)}else{try{e.call()}catch(f){i=f}n.call(e.prototype)}else{try{throw Error()}catch(f){i=f}n()}}catch(f){if(f&&i&&typeof f.stack=="string"){for(var r=f.stack.split(`
`),a=i.stack.split(`
`),o=r.length-1,l=a.length-1;1<=o&&0<=l&&r[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(r[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||r[o]!==a[l]){var c=`
`+r[o].replace(" at new "," at ");return n.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",n.displayName)),c}while(1<=o&&0<=l);break}}}finally{lv=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Bc(n):""}function OO(n){switch(n.tag){case 5:return Bc(n.type);case 16:return Bc("Lazy");case 13:return Bc("Suspense");case 19:return Bc("SuspenseList");case 0:case 2:case 15:return n=uv(n.type,!1),n;case 11:return n=uv(n.type.render,!1),n;case 1:return n=uv(n.type,!0),n;default:return""}}function z0(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case iu:return"Fragment";case nu:return"Portal";case O0:return"Profiler";case Nx:return"StrictMode";case F0:return"Suspense";case k0:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Nb:return(n.displayName||"Context")+".Consumer";case Ub:return(n._context.displayName||"Context")+".Provider";case Ox:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Fx:return e=n.displayName||null,e!==null?e:z0(n.type)||"Memo";case bs:e=n._payload,n=n._init;try{return z0(n(e))}catch{}}return null}function FO(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return z0(e);case 8:return e===Nx?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qs(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fb(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kO(n){var e=Fb(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,a=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function nh(n){n._valueTracker||(n._valueTracker=kO(n))}function kb(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Fb(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Ap(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function B0(n,e){var t=e.checked;return dn({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function NE(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Qs(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zb(n,e){e=e.checked,e!=null&&Ux(n,"checked",e,!1)}function H0(n,e){zb(n,e);var t=Qs(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?G0(n,e.type,t):e.hasOwnProperty("defaultValue")&&G0(n,e.type,Qs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function OE(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function G0(n,e,t){(e!=="number"||Ap(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Hc=Array.isArray;function Su(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Qs(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function W0(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ve(91));return dn({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function FE(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ve(92));if(Hc(t)){if(1<t.length)throw Error(ve(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Qs(t)}}function Bb(n,e){var t=Qs(e.value),i=Qs(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function kE(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Hb(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function V0(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Hb(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ih,Gb=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ih=ih||document.createElement("div"),ih.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ih.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function hf(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var $c={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zO=["Webkit","ms","Moz","O"];Object.keys($c).forEach(function(n){zO.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),$c[e]=$c[n]})});function Wb(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||$c.hasOwnProperty(n)&&$c[n]?(""+e).trim():e+"px"}function Vb(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Wb(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var BO=dn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function X0(n,e){if(e){if(BO[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ve(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ve(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ve(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ve(62))}}function Y0(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var j0=null;function kx(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var $0=null,Eu=null,Mu=null;function zE(n){if(n=Jf(n)){if(typeof $0!="function")throw Error(ve(280));var e=n.stateNode;e&&(e=Em(e),$0(n.stateNode,n.type,e))}}function Xb(n){Eu?Mu?Mu.push(n):Mu=[n]:Eu=n}function Yb(){if(Eu){var n=Eu,e=Mu;if(Mu=Eu=null,zE(n),e)for(n=0;n<e.length;n++)zE(e[n])}}function jb(n,e){return n(e)}function $b(){}var cv=!1;function qb(n,e,t){if(cv)return n(e,t);cv=!0;try{return jb(n,e,t)}finally{cv=!1,(Eu!==null||Mu!==null)&&($b(),Yb())}}function pf(n,e){var t=n.stateNode;if(t===null)return null;var i=Em(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ve(231,e,typeof t));return t}var q0=!1;if(qa)try{var Mc={};Object.defineProperty(Mc,"passive",{get:function(){q0=!0}}),window.addEventListener("test",Mc,Mc),window.removeEventListener("test",Mc,Mc)}catch{q0=!1}function HO(n,e,t,i,r,a,o,l,c){var f=Array.prototype.slice.call(arguments,3);try{e.apply(t,f)}catch(d){this.onError(d)}}var qc=!1,Cp=null,Rp=!1,K0=null,GO={onError:function(n){qc=!0,Cp=n}};function WO(n,e,t,i,r,a,o,l,c){qc=!1,Cp=null,HO.apply(GO,arguments)}function VO(n,e,t,i,r,a,o,l,c){if(WO.apply(this,arguments),qc){if(qc){var f=Cp;qc=!1,Cp=null}else throw Error(ve(198));Rp||(Rp=!0,K0=f)}}function ll(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Kb(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function BE(n){if(ll(n)!==n)throw Error(ve(188))}function XO(n){var e=n.alternate;if(!e){if(e=ll(n),e===null)throw Error(ve(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===t)return BE(r),n;if(a===i)return BE(r),e;a=a.sibling}throw Error(ve(188))}if(t.return!==i.return)t=r,i=a;else{for(var o=!1,l=r.child;l;){if(l===t){o=!0,t=r,i=a;break}if(l===i){o=!0,i=r,t=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===t){o=!0,t=a,i=r;break}if(l===i){o=!0,i=a,t=r;break}l=l.sibling}if(!o)throw Error(ve(189))}}if(t.alternate!==i)throw Error(ve(190))}if(t.tag!==3)throw Error(ve(188));return t.stateNode.current===t?n:e}function Zb(n){return n=XO(n),n!==null?Qb(n):null}function Qb(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Qb(n);if(e!==null)return e;n=n.sibling}return null}var Jb=ur.unstable_scheduleCallback,HE=ur.unstable_cancelCallback,YO=ur.unstable_shouldYield,jO=ur.unstable_requestPaint,Sn=ur.unstable_now,$O=ur.unstable_getCurrentPriorityLevel,zx=ur.unstable_ImmediatePriority,eA=ur.unstable_UserBlockingPriority,Pp=ur.unstable_NormalPriority,qO=ur.unstable_LowPriority,tA=ur.unstable_IdlePriority,_m=null,ya=null;function KO(n){if(ya&&typeof ya.onCommitFiberRoot=="function")try{ya.onCommitFiberRoot(_m,n,void 0,(n.current.flags&128)===128)}catch{}}var Jr=Math.clz32?Math.clz32:JO,ZO=Math.log,QO=Math.LN2;function JO(n){return n>>>=0,n===0?32:31-(ZO(n)/QO|0)|0}var rh=64,ah=4194304;function Gc(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Lp(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,a=n.pingedLanes,o=t&268435455;if(o!==0){var l=o&~r;l!==0?i=Gc(l):(a&=o,a!==0&&(i=Gc(a)))}else o=t&~r,o!==0?i=Gc(o):a!==0&&(i=Gc(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,a=e&-e,r>=a||r===16&&(a&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Jr(e),r=1<<t,i|=n[t],e&=~r;return i}function eF(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tF(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,a=n.pendingLanes;0<a;){var o=31-Jr(a),l=1<<o,c=r[o];c===-1?(!(l&t)||l&i)&&(r[o]=eF(l,e)):c<=e&&(n.expiredLanes|=l),a&=~l}}function Z0(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function nA(){var n=rh;return rh<<=1,!(rh&4194240)&&(rh=64),n}function fv(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Zf(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Jr(e),n[e]=t}function nF(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Jr(t),a=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~a}}function Bx(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Jr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Nt=0;function iA(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var rA,Hx,aA,sA,oA,Q0=!1,sh=[],ks=null,zs=null,Bs=null,mf=new Map,gf=new Map,Cs=[],iF="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function GE(n,e){switch(n){case"focusin":case"focusout":ks=null;break;case"dragenter":case"dragleave":zs=null;break;case"mouseover":case"mouseout":Bs=null;break;case"pointerover":case"pointerout":mf.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":gf.delete(e.pointerId)}}function wc(n,e,t,i,r,a){return n===null||n.nativeEvent!==a?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},e!==null&&(e=Jf(e),e!==null&&Hx(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function rF(n,e,t,i,r){switch(e){case"focusin":return ks=wc(ks,n,e,t,i,r),!0;case"dragenter":return zs=wc(zs,n,e,t,i,r),!0;case"mouseover":return Bs=wc(Bs,n,e,t,i,r),!0;case"pointerover":var a=r.pointerId;return mf.set(a,wc(mf.get(a)||null,n,e,t,i,r)),!0;case"gotpointercapture":return a=r.pointerId,gf.set(a,wc(gf.get(a)||null,n,e,t,i,r)),!0}return!1}function lA(n){var e=Oo(n.target);if(e!==null){var t=ll(e);if(t!==null){if(e=t.tag,e===13){if(e=Kb(t),e!==null){n.blockedOn=e,oA(n.priority,function(){aA(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function sp(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=J0(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);j0=i,t.target.dispatchEvent(i),j0=null}else return e=Jf(t),e!==null&&Hx(e),n.blockedOn=t,!1;e.shift()}return!0}function WE(n,e,t){sp(n)&&t.delete(e)}function aF(){Q0=!1,ks!==null&&sp(ks)&&(ks=null),zs!==null&&sp(zs)&&(zs=null),Bs!==null&&sp(Bs)&&(Bs=null),mf.forEach(WE),gf.forEach(WE)}function Tc(n,e){n.blockedOn===e&&(n.blockedOn=null,Q0||(Q0=!0,ur.unstable_scheduleCallback(ur.unstable_NormalPriority,aF)))}function vf(n){function e(r){return Tc(r,n)}if(0<sh.length){Tc(sh[0],n);for(var t=1;t<sh.length;t++){var i=sh[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ks!==null&&Tc(ks,n),zs!==null&&Tc(zs,n),Bs!==null&&Tc(Bs,n),mf.forEach(e),gf.forEach(e),t=0;t<Cs.length;t++)i=Cs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Cs.length&&(t=Cs[0],t.blockedOn===null);)lA(t),t.blockedOn===null&&Cs.shift()}var wu=as.ReactCurrentBatchConfig,Dp=!0;function sF(n,e,t,i){var r=Nt,a=wu.transition;wu.transition=null;try{Nt=1,Gx(n,e,t,i)}finally{Nt=r,wu.transition=a}}function oF(n,e,t,i){var r=Nt,a=wu.transition;wu.transition=null;try{Nt=4,Gx(n,e,t,i)}finally{Nt=r,wu.transition=a}}function Gx(n,e,t,i){if(Dp){var r=J0(n,e,t,i);if(r===null)Sv(n,e,i,Ip,t),GE(n,i);else if(rF(r,n,e,t,i))i.stopPropagation();else if(GE(n,i),e&4&&-1<iF.indexOf(n)){for(;r!==null;){var a=Jf(r);if(a!==null&&rA(a),a=J0(n,e,t,i),a===null&&Sv(n,e,i,Ip,t),a===r)break;r=a}r!==null&&i.stopPropagation()}else Sv(n,e,i,null,t)}}var Ip=null;function J0(n,e,t,i){if(Ip=null,n=kx(i),n=Oo(n),n!==null)if(e=ll(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Kb(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Ip=n,null}function uA(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($O()){case zx:return 1;case eA:return 4;case Pp:case qO:return 16;case tA:return 536870912;default:return 16}default:return 16}}var Ps=null,Wx=null,op=null;function cA(){if(op)return op;var n,e=Wx,t=e.length,i,r="value"in Ps?Ps.value:Ps.textContent,a=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[a-i];i++);return op=r.slice(n,1<i?1-i:void 0)}function lp(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function oh(){return!0}function VE(){return!1}function dr(n){function e(t,i,r,a,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in n)n.hasOwnProperty(l)&&(t=n[l],this[l]=t?t(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?oh:VE,this.isPropagationStopped=VE,this}return dn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=oh)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=oh)},persist:function(){},isPersistent:oh}),e}var Zu={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vx=dr(Zu),Qf=dn({},Zu,{view:0,detail:0}),lF=dr(Qf),dv,hv,bc,xm=dn({},Qf,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xx,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==bc&&(bc&&n.type==="mousemove"?(dv=n.screenX-bc.screenX,hv=n.screenY-bc.screenY):hv=dv=0,bc=n),dv)},movementY:function(n){return"movementY"in n?n.movementY:hv}}),XE=dr(xm),uF=dn({},xm,{dataTransfer:0}),cF=dr(uF),fF=dn({},Qf,{relatedTarget:0}),pv=dr(fF),dF=dn({},Zu,{animationName:0,elapsedTime:0,pseudoElement:0}),hF=dr(dF),pF=dn({},Zu,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),mF=dr(pF),gF=dn({},Zu,{data:0}),YE=dr(gF),vF={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_F={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xF={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yF(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=xF[n])?!!e[n]:!1}function Xx(){return yF}var SF=dn({},Qf,{key:function(n){if(n.key){var e=vF[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=lp(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?_F[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xx,charCode:function(n){return n.type==="keypress"?lp(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?lp(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),EF=dr(SF),MF=dn({},xm,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jE=dr(MF),wF=dn({},Qf,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xx}),TF=dr(wF),bF=dn({},Zu,{propertyName:0,elapsedTime:0,pseudoElement:0}),AF=dr(bF),CF=dn({},xm,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),RF=dr(CF),PF=[9,13,27,32],Yx=qa&&"CompositionEvent"in window,Kc=null;qa&&"documentMode"in document&&(Kc=document.documentMode);var LF=qa&&"TextEvent"in window&&!Kc,fA=qa&&(!Yx||Kc&&8<Kc&&11>=Kc),$E=" ",qE=!1;function dA(n,e){switch(n){case"keyup":return PF.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hA(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ru=!1;function DF(n,e){switch(n){case"compositionend":return hA(e);case"keypress":return e.which!==32?null:(qE=!0,$E);case"textInput":return n=e.data,n===$E&&qE?null:n;default:return null}}function IF(n,e){if(ru)return n==="compositionend"||!Yx&&dA(n,e)?(n=cA(),op=Wx=Ps=null,ru=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fA&&e.locale!=="ko"?null:e.data;default:return null}}var UF={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function KE(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!UF[n.type]:e==="textarea"}function pA(n,e,t,i){Xb(i),e=Up(e,"onChange"),0<e.length&&(t=new Vx("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Zc=null,_f=null;function NF(n){TA(n,0)}function ym(n){var e=ou(n);if(kb(e))return n}function OF(n,e){if(n==="change")return e}var mA=!1;if(qa){var mv;if(qa){var gv="oninput"in document;if(!gv){var ZE=document.createElement("div");ZE.setAttribute("oninput","return;"),gv=typeof ZE.oninput=="function"}mv=gv}else mv=!1;mA=mv&&(!document.documentMode||9<document.documentMode)}function QE(){Zc&&(Zc.detachEvent("onpropertychange",gA),_f=Zc=null)}function gA(n){if(n.propertyName==="value"&&ym(_f)){var e=[];pA(e,_f,n,kx(n)),qb(NF,e)}}function FF(n,e,t){n==="focusin"?(QE(),Zc=e,_f=t,Zc.attachEvent("onpropertychange",gA)):n==="focusout"&&QE()}function kF(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ym(_f)}function zF(n,e){if(n==="click")return ym(e)}function BF(n,e){if(n==="input"||n==="change")return ym(e)}function HF(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var na=typeof Object.is=="function"?Object.is:HF;function xf(n,e){if(na(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!N0.call(e,r)||!na(n[r],e[r]))return!1}return!0}function JE(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function eM(n,e){var t=JE(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=JE(t)}}function vA(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?vA(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function _A(){for(var n=window,e=Ap();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ap(n.document)}return e}function jx(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function GF(n){var e=_A(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&vA(t.ownerDocument.documentElement,t)){if(i!==null&&jx(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!n.extend&&a>i&&(r=i,i=a,a=r),r=eM(t,a);var o=eM(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),a>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var WF=qa&&"documentMode"in document&&11>=document.documentMode,au=null,e_=null,Qc=null,t_=!1;function tM(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;t_||au==null||au!==Ap(i)||(i=au,"selectionStart"in i&&jx(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qc&&xf(Qc,i)||(Qc=i,i=Up(e_,"onSelect"),0<i.length&&(e=new Vx("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=au)))}function lh(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var su={animationend:lh("Animation","AnimationEnd"),animationiteration:lh("Animation","AnimationIteration"),animationstart:lh("Animation","AnimationStart"),transitionend:lh("Transition","TransitionEnd")},vv={},xA={};qa&&(xA=document.createElement("div").style,"AnimationEvent"in window||(delete su.animationend.animation,delete su.animationiteration.animation,delete su.animationstart.animation),"TransitionEvent"in window||delete su.transitionend.transition);function Sm(n){if(vv[n])return vv[n];if(!su[n])return n;var e=su[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in xA)return vv[n]=e[t];return n}var yA=Sm("animationend"),SA=Sm("animationiteration"),EA=Sm("animationstart"),MA=Sm("transitionend"),wA=new Map,nM="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function so(n,e){wA.set(n,e),ol(e,[n])}for(var _v=0;_v<nM.length;_v++){var xv=nM[_v],VF=xv.toLowerCase(),XF=xv[0].toUpperCase()+xv.slice(1);so(VF,"on"+XF)}so(yA,"onAnimationEnd");so(SA,"onAnimationIteration");so(EA,"onAnimationStart");so("dblclick","onDoubleClick");so("focusin","onFocus");so("focusout","onBlur");so(MA,"onTransitionEnd");Iu("onMouseEnter",["mouseout","mouseover"]);Iu("onMouseLeave",["mouseout","mouseover"]);Iu("onPointerEnter",["pointerout","pointerover"]);Iu("onPointerLeave",["pointerout","pointerover"]);ol("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ol("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ol("onBeforeInput",["compositionend","keypress","textInput","paste"]);ol("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ol("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ol("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YF=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wc));function iM(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,VO(i,e,void 0,n),n.currentTarget=null}function TA(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var o=i.length-1;0<=o;o--){var l=i[o],c=l.instance,f=l.currentTarget;if(l=l.listener,c!==a&&r.isPropagationStopped())break e;iM(r,l,f),a=c}else for(o=0;o<i.length;o++){if(l=i[o],c=l.instance,f=l.currentTarget,l=l.listener,c!==a&&r.isPropagationStopped())break e;iM(r,l,f),a=c}}}if(Rp)throw n=K0,Rp=!1,K0=null,n}function qt(n,e){var t=e[s_];t===void 0&&(t=e[s_]=new Set);var i=n+"__bubble";t.has(i)||(bA(e,n,2,!1),t.add(i))}function yv(n,e,t){var i=0;e&&(i|=4),bA(t,n,i,e)}var uh="_reactListening"+Math.random().toString(36).slice(2);function yf(n){if(!n[uh]){n[uh]=!0,Ib.forEach(function(t){t!=="selectionchange"&&(YF.has(t)||yv(t,!1,n),yv(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[uh]||(e[uh]=!0,yv("selectionchange",!1,e))}}function bA(n,e,t,i){switch(uA(e)){case 1:var r=sF;break;case 4:r=oF;break;default:r=Gx}t=r.bind(null,e,t,n),r=void 0,!q0||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Sv(n,e,t,i,r){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;o=o.return}for(;l!==null;){if(o=Oo(l),o===null)return;if(c=o.tag,c===5||c===6){i=a=o;continue e}l=l.parentNode}}i=i.return}qb(function(){var f=a,d=kx(t),p=[];e:{var m=wA.get(n);if(m!==void 0){var v=Vx,M=n;switch(n){case"keypress":if(lp(t)===0)break e;case"keydown":case"keyup":v=EF;break;case"focusin":M="focus",v=pv;break;case"focusout":M="blur",v=pv;break;case"beforeblur":case"afterblur":v=pv;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=XE;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=cF;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=TF;break;case yA:case SA:case EA:v=hF;break;case MA:v=AF;break;case"scroll":v=lF;break;case"wheel":v=RF;break;case"copy":case"cut":case"paste":v=mF;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=jE}var x=(e&4)!==0,_=!x&&n==="scroll",g=x?m!==null?m+"Capture":null:m;x=[];for(var S=f,y;S!==null;){y=S;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,g!==null&&(w=pf(S,g),w!=null&&x.push(Sf(S,w,y)))),_)break;S=S.return}0<x.length&&(m=new v(m,M,null,t,d),p.push({event:m,listeners:x}))}}if(!(e&7)){e:{if(m=n==="mouseover"||n==="pointerover",v=n==="mouseout"||n==="pointerout",m&&t!==j0&&(M=t.relatedTarget||t.fromElement)&&(Oo(M)||M[Ka]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(M=t.relatedTarget||t.toElement,v=f,M=M?Oo(M):null,M!==null&&(_=ll(M),M!==_||M.tag!==5&&M.tag!==6)&&(M=null)):(v=null,M=f),v!==M)){if(x=XE,w="onMouseLeave",g="onMouseEnter",S="mouse",(n==="pointerout"||n==="pointerover")&&(x=jE,w="onPointerLeave",g="onPointerEnter",S="pointer"),_=v==null?m:ou(v),y=M==null?m:ou(M),m=new x(w,S+"leave",v,t,d),m.target=_,m.relatedTarget=y,w=null,Oo(d)===f&&(x=new x(g,S+"enter",M,t,d),x.target=y,x.relatedTarget=_,w=x),_=w,v&&M)t:{for(x=v,g=M,S=0,y=x;y;y=Ul(y))S++;for(y=0,w=g;w;w=Ul(w))y++;for(;0<S-y;)x=Ul(x),S--;for(;0<y-S;)g=Ul(g),y--;for(;S--;){if(x===g||g!==null&&x===g.alternate)break t;x=Ul(x),g=Ul(g)}x=null}else x=null;v!==null&&rM(p,m,v,x,!1),M!==null&&_!==null&&rM(p,_,M,x,!0)}}e:{if(m=f?ou(f):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var A=OF;else if(KE(m))if(mA)A=BF;else{A=kF;var R=FF}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(A=zF);if(A&&(A=A(n,f))){pA(p,A,t,d);break e}R&&R(n,m,f),n==="focusout"&&(R=m._wrapperState)&&R.controlled&&m.type==="number"&&G0(m,"number",m.value)}switch(R=f?ou(f):window,n){case"focusin":(KE(R)||R.contentEditable==="true")&&(au=R,e_=f,Qc=null);break;case"focusout":Qc=e_=au=null;break;case"mousedown":t_=!0;break;case"contextmenu":case"mouseup":case"dragend":t_=!1,tM(p,t,d);break;case"selectionchange":if(WF)break;case"keydown":case"keyup":tM(p,t,d)}var P;if(Yx)e:{switch(n){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ru?dA(n,t)&&(N="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(fA&&t.locale!=="ko"&&(ru||N!=="onCompositionStart"?N==="onCompositionEnd"&&ru&&(P=cA()):(Ps=d,Wx="value"in Ps?Ps.value:Ps.textContent,ru=!0)),R=Up(f,N),0<R.length&&(N=new YE(N,n,null,t,d),p.push({event:N,listeners:R}),P?N.data=P:(P=hA(t),P!==null&&(N.data=P)))),(P=LF?DF(n,t):IF(n,t))&&(f=Up(f,"onBeforeInput"),0<f.length&&(d=new YE("onBeforeInput","beforeinput",null,t,d),p.push({event:d,listeners:f}),d.data=P))}TA(p,e)})}function Sf(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Up(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=pf(n,t),a!=null&&i.unshift(Sf(n,a,r)),a=pf(n,e),a!=null&&i.push(Sf(n,a,r))),n=n.return}return i}function Ul(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function rM(n,e,t,i,r){for(var a=e._reactName,o=[];t!==null&&t!==i;){var l=t,c=l.alternate,f=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&f!==null&&(l=f,r?(c=pf(t,a),c!=null&&o.unshift(Sf(t,c,l))):r||(c=pf(t,a),c!=null&&o.push(Sf(t,c,l)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var jF=/\r\n?/g,$F=/\u0000|\uFFFD/g;function aM(n){return(typeof n=="string"?n:""+n).replace(jF,`
`).replace($F,"")}function ch(n,e,t){if(e=aM(e),aM(n)!==e&&t)throw Error(ve(425))}function Np(){}var n_=null,i_=null;function r_(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var a_=typeof setTimeout=="function"?setTimeout:void 0,qF=typeof clearTimeout=="function"?clearTimeout:void 0,sM=typeof Promise=="function"?Promise:void 0,KF=typeof queueMicrotask=="function"?queueMicrotask:typeof sM<"u"?function(n){return sM.resolve(null).then(n).catch(ZF)}:a_;function ZF(n){setTimeout(function(){throw n})}function Ev(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),vf(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);vf(e)}function Hs(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function oM(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Qu=Math.random().toString(36).slice(2),pa="__reactFiber$"+Qu,Ef="__reactProps$"+Qu,Ka="__reactContainer$"+Qu,s_="__reactEvents$"+Qu,QF="__reactListeners$"+Qu,JF="__reactHandles$"+Qu;function Oo(n){var e=n[pa];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Ka]||t[pa]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=oM(n);n!==null;){if(t=n[pa])return t;n=oM(n)}return e}n=t,t=n.parentNode}return null}function Jf(n){return n=n[pa]||n[Ka],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ou(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ve(33))}function Em(n){return n[Ef]||null}var o_=[],lu=-1;function oo(n){return{current:n}}function Qt(n){0>lu||(n.current=o_[lu],o_[lu]=null,lu--)}function Xt(n,e){lu++,o_[lu]=n.current,n.current=e}var Js={},di=oo(Js),Ui=oo(!1),Zo=Js;function Uu(n,e){var t=n.type.contextTypes;if(!t)return Js;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in t)r[a]=e[a];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Ni(n){return n=n.childContextTypes,n!=null}function Op(){Qt(Ui),Qt(di)}function lM(n,e,t){if(di.current!==Js)throw Error(ve(168));Xt(di,e),Xt(Ui,t)}function AA(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ve(108,FO(n)||"Unknown",r));return dn({},t,i)}function Fp(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Js,Zo=di.current,Xt(di,n),Xt(Ui,Ui.current),!0}function uM(n,e,t){var i=n.stateNode;if(!i)throw Error(ve(169));t?(n=AA(n,e,Zo),i.__reactInternalMemoizedMergedChildContext=n,Qt(Ui),Qt(di),Xt(di,n)):Qt(Ui),Xt(Ui,t)}var Wa=null,Mm=!1,Mv=!1;function CA(n){Wa===null?Wa=[n]:Wa.push(n)}function ek(n){Mm=!0,CA(n)}function lo(){if(!Mv&&Wa!==null){Mv=!0;var n=0,e=Nt;try{var t=Wa;for(Nt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Wa=null,Mm=!1}catch(r){throw Wa!==null&&(Wa=Wa.slice(n+1)),Jb(zx,lo),r}finally{Nt=e,Mv=!1}}return null}var uu=[],cu=0,kp=null,zp=0,Ar=[],Cr=0,Qo=null,Xa=1,Ya="";function Ao(n,e){uu[cu++]=zp,uu[cu++]=kp,kp=n,zp=e}function RA(n,e,t){Ar[Cr++]=Xa,Ar[Cr++]=Ya,Ar[Cr++]=Qo,Qo=n;var i=Xa;n=Ya;var r=32-Jr(i)-1;i&=~(1<<r),t+=1;var a=32-Jr(e)+r;if(30<a){var o=r-r%5;a=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Xa=1<<32-Jr(e)+r|t<<r|i,Ya=a+n}else Xa=1<<a|t<<r|i,Ya=n}function $x(n){n.return!==null&&(Ao(n,1),RA(n,1,0))}function qx(n){for(;n===kp;)kp=uu[--cu],uu[cu]=null,zp=uu[--cu],uu[cu]=null;for(;n===Qo;)Qo=Ar[--Cr],Ar[Cr]=null,Ya=Ar[--Cr],Ar[Cr]=null,Xa=Ar[--Cr],Ar[Cr]=null}var sr=null,rr=null,rn=!1,qr=null;function PA(n,e){var t=Pr(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function cM(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,sr=n,rr=Hs(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,sr=n,rr=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Qo!==null?{id:Xa,overflow:Ya}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Pr(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,sr=n,rr=null,!0):!1;default:return!1}}function l_(n){return(n.mode&1)!==0&&(n.flags&128)===0}function u_(n){if(rn){var e=rr;if(e){var t=e;if(!cM(n,e)){if(l_(n))throw Error(ve(418));e=Hs(t.nextSibling);var i=sr;e&&cM(n,e)?PA(i,t):(n.flags=n.flags&-4097|2,rn=!1,sr=n)}}else{if(l_(n))throw Error(ve(418));n.flags=n.flags&-4097|2,rn=!1,sr=n}}}function fM(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;sr=n}function fh(n){if(n!==sr)return!1;if(!rn)return fM(n),rn=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!r_(n.type,n.memoizedProps)),e&&(e=rr)){if(l_(n))throw LA(),Error(ve(418));for(;e;)PA(n,e),e=Hs(e.nextSibling)}if(fM(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ve(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){rr=Hs(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}rr=null}}else rr=sr?Hs(n.stateNode.nextSibling):null;return!0}function LA(){for(var n=rr;n;)n=Hs(n.nextSibling)}function Nu(){rr=sr=null,rn=!1}function Kx(n){qr===null?qr=[n]:qr.push(n)}var tk=as.ReactCurrentBatchConfig;function jr(n,e){if(n&&n.defaultProps){e=dn({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Bp=oo(null),Hp=null,fu=null,Zx=null;function Qx(){Zx=fu=Hp=null}function Jx(n){var e=Bp.current;Qt(Bp),n._currentValue=e}function c_(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Tu(n,e){Hp=n,Zx=fu=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Ii=!0),n.firstContext=null)}function Nr(n){var e=n._currentValue;if(Zx!==n)if(n={context:n,memoizedValue:e,next:null},fu===null){if(Hp===null)throw Error(ve(308));fu=n,Hp.dependencies={lanes:0,firstContext:n}}else fu=fu.next=n;return e}var Fo=null;function ey(n){Fo===null?Fo=[n]:Fo.push(n)}function DA(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,ey(e)):(t.next=r.next,r.next=t),e.interleaved=t,Za(n,i)}function Za(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var As=!1;function ty(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function IA(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function $a(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Gs(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Za(n,t)}return r=i.interleaved,r===null?(e.next=e,ey(i)):(e.next=r.next,r.next=e),i.interleaved=e,Za(n,t)}function up(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Bx(n,t)}}function dM(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?r=a=o:a=a.next=o,t=t.next}while(t!==null);a===null?r=a=e:a=a.next=e}else r=a=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Gp(n,e,t,i){var r=n.updateQueue;As=!1;var a=r.firstBaseUpdate,o=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,f=c.next;c.next=null,o===null?a=f:o.next=f,o=c;var d=n.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=f:l.next=f,d.lastBaseUpdate=c))}if(a!==null){var p=r.baseState;o=0,d=f=c=null,l=a;do{var m=l.lane,v=l.eventTime;if((i&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var M=n,x=l;switch(m=e,v=t,x.tag){case 1:if(M=x.payload,typeof M=="function"){p=M.call(v,p,m);break e}p=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=x.payload,m=typeof M=="function"?M.call(v,p,m):M,m==null)break e;p=dn({},p,m);break e;case 2:As=!0}}l.callback!==null&&l.lane!==0&&(n.flags|=64,m=r.effects,m===null?r.effects=[l]:m.push(l))}else v={eventTime:v,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(f=d=v,c=p):d=d.next=v,o|=m;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;m=l,l=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(d===null&&(c=p),r.baseState=c,r.firstBaseUpdate=f,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else a===null&&(r.shared.lanes=0);el|=o,n.lanes=o,n.memoizedState=p}}function hM(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ve(191,r));r.call(i)}}}var UA=new Db.Component().refs;function f_(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:dn({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var wm={isMounted:function(n){return(n=n._reactInternals)?ll(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Ei(),r=Vs(n),a=$a(i,r);a.payload=e,t!=null&&(a.callback=t),e=Gs(n,a,r),e!==null&&(ea(e,n,r,i),up(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Ei(),r=Vs(n),a=$a(i,r);a.tag=1,a.payload=e,t!=null&&(a.callback=t),e=Gs(n,a,r),e!==null&&(ea(e,n,r,i),up(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Ei(),i=Vs(n),r=$a(t,i);r.tag=2,e!=null&&(r.callback=e),e=Gs(n,r,i),e!==null&&(ea(e,n,i,t),up(e,n,i))}};function pM(n,e,t,i,r,a,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,a,o):e.prototype&&e.prototype.isPureReactComponent?!xf(t,i)||!xf(r,a):!0}function NA(n,e,t){var i=!1,r=Js,a=e.contextType;return typeof a=="object"&&a!==null?a=Nr(a):(r=Ni(e)?Zo:di.current,i=e.contextTypes,a=(i=i!=null)?Uu(n,r):Js),e=new e(t,a),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wm,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=a),e}function mM(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&wm.enqueueReplaceState(e,e.state,null)}function d_(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=UA,ty(n);var a=e.contextType;typeof a=="object"&&a!==null?r.context=Nr(a):(a=Ni(e)?Zo:di.current,r.context=Uu(n,a)),r.state=n.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(f_(n,e,a,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&wm.enqueueReplaceState(r,r.state,null),Gp(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ac(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ve(309));var i=t.stateNode}if(!i)throw Error(ve(147,n));var r=i,a=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(o){var l=r.refs;l===UA&&(l=r.refs={}),o===null?delete l[a]:l[a]=o},e._stringRef=a,e)}if(typeof n!="string")throw Error(ve(284));if(!t._owner)throw Error(ve(290,n))}return n}function dh(n,e){throw n=Object.prototype.toString.call(e),Error(ve(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function gM(n){var e=n._init;return e(n._payload)}function OA(n){function e(g,S){if(n){var y=g.deletions;y===null?(g.deletions=[S],g.flags|=16):y.push(S)}}function t(g,S){if(!n)return null;for(;S!==null;)e(g,S),S=S.sibling;return null}function i(g,S){for(g=new Map;S!==null;)S.key!==null?g.set(S.key,S):g.set(S.index,S),S=S.sibling;return g}function r(g,S){return g=Xs(g,S),g.index=0,g.sibling=null,g}function a(g,S,y){return g.index=y,n?(y=g.alternate,y!==null?(y=y.index,y<S?(g.flags|=2,S):y):(g.flags|=2,S)):(g.flags|=1048576,S)}function o(g){return n&&g.alternate===null&&(g.flags|=2),g}function l(g,S,y,w){return S===null||S.tag!==6?(S=Pv(y,g.mode,w),S.return=g,S):(S=r(S,y),S.return=g,S)}function c(g,S,y,w){var A=y.type;return A===iu?d(g,S,y.props.children,w,y.key):S!==null&&(S.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===bs&&gM(A)===S.type)?(w=r(S,y.props),w.ref=Ac(g,S,y),w.return=g,w):(w=mp(y.type,y.key,y.props,null,g.mode,w),w.ref=Ac(g,S,y),w.return=g,w)}function f(g,S,y,w){return S===null||S.tag!==4||S.stateNode.containerInfo!==y.containerInfo||S.stateNode.implementation!==y.implementation?(S=Lv(y,g.mode,w),S.return=g,S):(S=r(S,y.children||[]),S.return=g,S)}function d(g,S,y,w,A){return S===null||S.tag!==7?(S=Wo(y,g.mode,w,A),S.return=g,S):(S=r(S,y),S.return=g,S)}function p(g,S,y){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Pv(""+S,g.mode,y),S.return=g,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case th:return y=mp(S.type,S.key,S.props,null,g.mode,y),y.ref=Ac(g,null,S),y.return=g,y;case nu:return S=Lv(S,g.mode,y),S.return=g,S;case bs:var w=S._init;return p(g,w(S._payload),y)}if(Hc(S)||Ec(S))return S=Wo(S,g.mode,y,null),S.return=g,S;dh(g,S)}return null}function m(g,S,y,w){var A=S!==null?S.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:l(g,S,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case th:return y.key===A?c(g,S,y,w):null;case nu:return y.key===A?f(g,S,y,w):null;case bs:return A=y._init,m(g,S,A(y._payload),w)}if(Hc(y)||Ec(y))return A!==null?null:d(g,S,y,w,null);dh(g,y)}return null}function v(g,S,y,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(y)||null,l(S,g,""+w,A);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case th:return g=g.get(w.key===null?y:w.key)||null,c(S,g,w,A);case nu:return g=g.get(w.key===null?y:w.key)||null,f(S,g,w,A);case bs:var R=w._init;return v(g,S,y,R(w._payload),A)}if(Hc(w)||Ec(w))return g=g.get(y)||null,d(S,g,w,A,null);dh(S,w)}return null}function M(g,S,y,w){for(var A=null,R=null,P=S,N=S=0,T=null;P!==null&&N<y.length;N++){P.index>N?(T=P,P=null):T=P.sibling;var C=m(g,P,y[N],w);if(C===null){P===null&&(P=T);break}n&&P&&C.alternate===null&&e(g,P),S=a(C,S,N),R===null?A=C:R.sibling=C,R=C,P=T}if(N===y.length)return t(g,P),rn&&Ao(g,N),A;if(P===null){for(;N<y.length;N++)P=p(g,y[N],w),P!==null&&(S=a(P,S,N),R===null?A=P:R.sibling=P,R=P);return rn&&Ao(g,N),A}for(P=i(g,P);N<y.length;N++)T=v(P,g,N,y[N],w),T!==null&&(n&&T.alternate!==null&&P.delete(T.key===null?N:T.key),S=a(T,S,N),R===null?A=T:R.sibling=T,R=T);return n&&P.forEach(function(G){return e(g,G)}),rn&&Ao(g,N),A}function x(g,S,y,w){var A=Ec(y);if(typeof A!="function")throw Error(ve(150));if(y=A.call(y),y==null)throw Error(ve(151));for(var R=A=null,P=S,N=S=0,T=null,C=y.next();P!==null&&!C.done;N++,C=y.next()){P.index>N?(T=P,P=null):T=P.sibling;var G=m(g,P,C.value,w);if(G===null){P===null&&(P=T);break}n&&P&&G.alternate===null&&e(g,P),S=a(G,S,N),R===null?A=G:R.sibling=G,R=G,P=T}if(C.done)return t(g,P),rn&&Ao(g,N),A;if(P===null){for(;!C.done;N++,C=y.next())C=p(g,C.value,w),C!==null&&(S=a(C,S,N),R===null?A=C:R.sibling=C,R=C);return rn&&Ao(g,N),A}for(P=i(g,P);!C.done;N++,C=y.next())C=v(P,g,N,C.value,w),C!==null&&(n&&C.alternate!==null&&P.delete(C.key===null?N:C.key),S=a(C,S,N),R===null?A=C:R.sibling=C,R=C);return n&&P.forEach(function(X){return e(g,X)}),rn&&Ao(g,N),A}function _(g,S,y,w){if(typeof y=="object"&&y!==null&&y.type===iu&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case th:e:{for(var A=y.key,R=S;R!==null;){if(R.key===A){if(A=y.type,A===iu){if(R.tag===7){t(g,R.sibling),S=r(R,y.props.children),S.return=g,g=S;break e}}else if(R.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===bs&&gM(A)===R.type){t(g,R.sibling),S=r(R,y.props),S.ref=Ac(g,R,y),S.return=g,g=S;break e}t(g,R);break}else e(g,R);R=R.sibling}y.type===iu?(S=Wo(y.props.children,g.mode,w,y.key),S.return=g,g=S):(w=mp(y.type,y.key,y.props,null,g.mode,w),w.ref=Ac(g,S,y),w.return=g,g=w)}return o(g);case nu:e:{for(R=y.key;S!==null;){if(S.key===R)if(S.tag===4&&S.stateNode.containerInfo===y.containerInfo&&S.stateNode.implementation===y.implementation){t(g,S.sibling),S=r(S,y.children||[]),S.return=g,g=S;break e}else{t(g,S);break}else e(g,S);S=S.sibling}S=Lv(y,g.mode,w),S.return=g,g=S}return o(g);case bs:return R=y._init,_(g,S,R(y._payload),w)}if(Hc(y))return M(g,S,y,w);if(Ec(y))return x(g,S,y,w);dh(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,S!==null&&S.tag===6?(t(g,S.sibling),S=r(S,y),S.return=g,g=S):(t(g,S),S=Pv(y,g.mode,w),S.return=g,g=S),o(g)):t(g,S)}return _}var Ou=OA(!0),FA=OA(!1),ed={},Sa=oo(ed),Mf=oo(ed),wf=oo(ed);function ko(n){if(n===ed)throw Error(ve(174));return n}function ny(n,e){switch(Xt(wf,e),Xt(Mf,n),Xt(Sa,ed),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:V0(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=V0(e,n)}Qt(Sa),Xt(Sa,e)}function Fu(){Qt(Sa),Qt(Mf),Qt(wf)}function kA(n){ko(wf.current);var e=ko(Sa.current),t=V0(e,n.type);e!==t&&(Xt(Mf,n),Xt(Sa,t))}function iy(n){Mf.current===n&&(Qt(Sa),Qt(Mf))}var on=oo(0);function Wp(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wv=[];function ry(){for(var n=0;n<wv.length;n++)wv[n]._workInProgressVersionPrimary=null;wv.length=0}var cp=as.ReactCurrentDispatcher,Tv=as.ReactCurrentBatchConfig,Jo=0,fn=null,In=null,Wn=null,Vp=!1,Jc=!1,Tf=0,nk=0;function ri(){throw Error(ve(321))}function ay(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!na(n[t],e[t]))return!1;return!0}function sy(n,e,t,i,r,a){if(Jo=a,fn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cp.current=n===null||n.memoizedState===null?sk:ok,n=t(i,r),Jc){a=0;do{if(Jc=!1,Tf=0,25<=a)throw Error(ve(301));a+=1,Wn=In=null,e.updateQueue=null,cp.current=lk,n=t(i,r)}while(Jc)}if(cp.current=Xp,e=In!==null&&In.next!==null,Jo=0,Wn=In=fn=null,Vp=!1,e)throw Error(ve(300));return n}function oy(){var n=Tf!==0;return Tf=0,n}function ca(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wn===null?fn.memoizedState=Wn=n:Wn=Wn.next=n,Wn}function Or(){if(In===null){var n=fn.alternate;n=n!==null?n.memoizedState:null}else n=In.next;var e=Wn===null?fn.memoizedState:Wn.next;if(e!==null)Wn=e,In=n;else{if(n===null)throw Error(ve(310));In=n,n={memoizedState:In.memoizedState,baseState:In.baseState,baseQueue:In.baseQueue,queue:In.queue,next:null},Wn===null?fn.memoizedState=Wn=n:Wn=Wn.next=n}return Wn}function bf(n,e){return typeof e=="function"?e(n):e}function bv(n){var e=Or(),t=e.queue;if(t===null)throw Error(ve(311));t.lastRenderedReducer=n;var i=In,r=i.baseQueue,a=t.pending;if(a!==null){if(r!==null){var o=r.next;r.next=a.next,a.next=o}i.baseQueue=r=a,t.pending=null}if(r!==null){a=r.next,i=i.baseState;var l=o=null,c=null,f=a;do{var d=f.lane;if((Jo&d)===d)c!==null&&(c=c.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),i=f.hasEagerState?f.eagerState:n(i,f.action);else{var p={lane:d,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};c===null?(l=c=p,o=i):c=c.next=p,fn.lanes|=d,el|=d}f=f.next}while(f!==null&&f!==a);c===null?o=i:c.next=l,na(i,e.memoizedState)||(Ii=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=c,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do a=r.lane,fn.lanes|=a,el|=a,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Av(n){var e=Or(),t=e.queue;if(t===null)throw Error(ve(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,a=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do a=n(a,o.action),o=o.next;while(o!==r);na(a,e.memoizedState)||(Ii=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),t.lastRenderedState=a}return[a,i]}function zA(){}function BA(n,e){var t=fn,i=Or(),r=e(),a=!na(i.memoizedState,r);if(a&&(i.memoizedState=r,Ii=!0),i=i.queue,ly(WA.bind(null,t,i,n),[n]),i.getSnapshot!==e||a||Wn!==null&&Wn.memoizedState.tag&1){if(t.flags|=2048,Af(9,GA.bind(null,t,i,r,e),void 0,null),Xn===null)throw Error(ve(349));Jo&30||HA(t,e,r)}return r}function HA(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=fn.updateQueue,e===null?(e={lastEffect:null,stores:null},fn.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function GA(n,e,t,i){e.value=t,e.getSnapshot=i,VA(e)&&XA(n)}function WA(n,e,t){return t(function(){VA(e)&&XA(n)})}function VA(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!na(n,t)}catch{return!0}}function XA(n){var e=Za(n,1);e!==null&&ea(e,n,1,-1)}function vM(n){var e=ca();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bf,lastRenderedState:n},e.queue=n,n=n.dispatch=ak.bind(null,fn,n),[e.memoizedState,n]}function Af(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=fn.updateQueue,e===null?(e={lastEffect:null,stores:null},fn.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function YA(){return Or().memoizedState}function fp(n,e,t,i){var r=ca();fn.flags|=n,r.memoizedState=Af(1|e,t,void 0,i===void 0?null:i)}function Tm(n,e,t,i){var r=Or();i=i===void 0?null:i;var a=void 0;if(In!==null){var o=In.memoizedState;if(a=o.destroy,i!==null&&ay(i,o.deps)){r.memoizedState=Af(e,t,a,i);return}}fn.flags|=n,r.memoizedState=Af(1|e,t,a,i)}function _M(n,e){return fp(8390656,8,n,e)}function ly(n,e){return Tm(2048,8,n,e)}function jA(n,e){return Tm(4,2,n,e)}function $A(n,e){return Tm(4,4,n,e)}function qA(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function KA(n,e,t){return t=t!=null?t.concat([n]):null,Tm(4,4,qA.bind(null,e,n),t)}function uy(){}function ZA(n,e){var t=Or();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&ay(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function QA(n,e){var t=Or();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&ay(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function JA(n,e,t){return Jo&21?(na(t,e)||(t=nA(),fn.lanes|=t,el|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Ii=!0),n.memoizedState=t)}function ik(n,e){var t=Nt;Nt=t!==0&&4>t?t:4,n(!0);var i=Tv.transition;Tv.transition={};try{n(!1),e()}finally{Nt=t,Tv.transition=i}}function e2(){return Or().memoizedState}function rk(n,e,t){var i=Vs(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},t2(n))n2(e,t);else if(t=DA(n,e,t,i),t!==null){var r=Ei();ea(t,n,i,r),i2(t,e,i)}}function ak(n,e,t){var i=Vs(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(t2(n))n2(e,r);else{var a=n.alternate;if(n.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var o=e.lastRenderedState,l=a(o,t);if(r.hasEagerState=!0,r.eagerState=l,na(l,o)){var c=e.interleaved;c===null?(r.next=r,ey(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}t=DA(n,e,r,i),t!==null&&(r=Ei(),ea(t,n,i,r),i2(t,e,i))}}function t2(n){var e=n.alternate;return n===fn||e!==null&&e===fn}function n2(n,e){Jc=Vp=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function i2(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Bx(n,t)}}var Xp={readContext:Nr,useCallback:ri,useContext:ri,useEffect:ri,useImperativeHandle:ri,useInsertionEffect:ri,useLayoutEffect:ri,useMemo:ri,useReducer:ri,useRef:ri,useState:ri,useDebugValue:ri,useDeferredValue:ri,useTransition:ri,useMutableSource:ri,useSyncExternalStore:ri,useId:ri,unstable_isNewReconciler:!1},sk={readContext:Nr,useCallback:function(n,e){return ca().memoizedState=[n,e===void 0?null:e],n},useContext:Nr,useEffect:_M,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,fp(4194308,4,qA.bind(null,e,n),t)},useLayoutEffect:function(n,e){return fp(4194308,4,n,e)},useInsertionEffect:function(n,e){return fp(4,2,n,e)},useMemo:function(n,e){var t=ca();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=ca();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=rk.bind(null,fn,n),[i.memoizedState,n]},useRef:function(n){var e=ca();return n={current:n},e.memoizedState=n},useState:vM,useDebugValue:uy,useDeferredValue:function(n){return ca().memoizedState=n},useTransition:function(){var n=vM(!1),e=n[0];return n=ik.bind(null,n[1]),ca().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=fn,r=ca();if(rn){if(t===void 0)throw Error(ve(407));t=t()}else{if(t=e(),Xn===null)throw Error(ve(349));Jo&30||HA(i,e,t)}r.memoizedState=t;var a={value:t,getSnapshot:e};return r.queue=a,_M(WA.bind(null,i,a,n),[n]),i.flags|=2048,Af(9,GA.bind(null,i,a,t,e),void 0,null),t},useId:function(){var n=ca(),e=Xn.identifierPrefix;if(rn){var t=Ya,i=Xa;t=(i&~(1<<32-Jr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Tf++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=nk++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},ok={readContext:Nr,useCallback:ZA,useContext:Nr,useEffect:ly,useImperativeHandle:KA,useInsertionEffect:jA,useLayoutEffect:$A,useMemo:QA,useReducer:bv,useRef:YA,useState:function(){return bv(bf)},useDebugValue:uy,useDeferredValue:function(n){var e=Or();return JA(e,In.memoizedState,n)},useTransition:function(){var n=bv(bf)[0],e=Or().memoizedState;return[n,e]},useMutableSource:zA,useSyncExternalStore:BA,useId:e2,unstable_isNewReconciler:!1},lk={readContext:Nr,useCallback:ZA,useContext:Nr,useEffect:ly,useImperativeHandle:KA,useInsertionEffect:jA,useLayoutEffect:$A,useMemo:QA,useReducer:Av,useRef:YA,useState:function(){return Av(bf)},useDebugValue:uy,useDeferredValue:function(n){var e=Or();return In===null?e.memoizedState=n:JA(e,In.memoizedState,n)},useTransition:function(){var n=Av(bf)[0],e=Or().memoizedState;return[n,e]},useMutableSource:zA,useSyncExternalStore:BA,useId:e2,unstable_isNewReconciler:!1};function ku(n,e){try{var t="",i=e;do t+=OO(i),i=i.return;while(i);var r=t}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:n,source:e,stack:r,digest:null}}function Cv(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function h_(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var uk=typeof WeakMap=="function"?WeakMap:Map;function r2(n,e,t){t=$a(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){jp||(jp=!0,M_=i),h_(n,e)},t}function a2(n,e,t){t=$a(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){h_(n,e)}}var a=n.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){h_(n,e),typeof i!="function"&&(Ws===null?Ws=new Set([this]):Ws.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function xM(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new uk;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Mk.bind(null,n,e,t),e.then(n,n))}function yM(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function SM(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=$a(-1,1),e.tag=2,Gs(t,e,1))),t.lanes|=1),n)}var ck=as.ReactCurrentOwner,Ii=!1;function _i(n,e,t,i){e.child=n===null?FA(e,null,t,i):Ou(e,n.child,t,i)}function EM(n,e,t,i,r){t=t.render;var a=e.ref;return Tu(e,r),i=sy(n,e,t,i,a,r),t=oy(),n!==null&&!Ii?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Qa(n,e,r)):(rn&&t&&$x(e),e.flags|=1,_i(n,e,i,r),e.child)}function MM(n,e,t,i,r){if(n===null){var a=t.type;return typeof a=="function"&&!vy(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=a,s2(n,e,a,i,r)):(n=mp(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(a=n.child,!(n.lanes&r)){var o=a.memoizedProps;if(t=t.compare,t=t!==null?t:xf,t(o,i)&&n.ref===e.ref)return Qa(n,e,r)}return e.flags|=1,n=Xs(a,i),n.ref=e.ref,n.return=e,e.child=n}function s2(n,e,t,i,r){if(n!==null){var a=n.memoizedProps;if(xf(a,i)&&n.ref===e.ref)if(Ii=!1,e.pendingProps=i=a,(n.lanes&r)!==0)n.flags&131072&&(Ii=!0);else return e.lanes=n.lanes,Qa(n,e,r)}return p_(n,e,t,i,r)}function o2(n,e,t){var i=e.pendingProps,r=i.children,a=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(hu,Qi),Qi|=t;else{if(!(t&1073741824))return n=a!==null?a.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Xt(hu,Qi),Qi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:t,Xt(hu,Qi),Qi|=i}else a!==null?(i=a.baseLanes|t,e.memoizedState=null):i=t,Xt(hu,Qi),Qi|=i;return _i(n,e,r,t),e.child}function l2(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function p_(n,e,t,i,r){var a=Ni(t)?Zo:di.current;return a=Uu(e,a),Tu(e,r),t=sy(n,e,t,i,a,r),i=oy(),n!==null&&!Ii?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Qa(n,e,r)):(rn&&i&&$x(e),e.flags|=1,_i(n,e,t,r),e.child)}function wM(n,e,t,i,r){if(Ni(t)){var a=!0;Fp(e)}else a=!1;if(Tu(e,r),e.stateNode===null)dp(n,e),NA(e,t,i),d_(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,f=t.contextType;typeof f=="object"&&f!==null?f=Nr(f):(f=Ni(t)?Zo:di.current,f=Uu(e,f));var d=t.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==i||c!==f)&&mM(e,o,i,f),As=!1;var m=e.memoizedState;o.state=m,Gp(e,i,o,r),c=e.memoizedState,l!==i||m!==c||Ui.current||As?(typeof d=="function"&&(f_(e,t,d,i),c=e.memoizedState),(l=As||pM(e,t,l,i,m,c,f))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),o.props=i,o.state=c,o.context=f,i=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,IA(n,e),l=e.memoizedProps,f=e.type===e.elementType?l:jr(e.type,l),o.props=f,p=e.pendingProps,m=o.context,c=t.contextType,typeof c=="object"&&c!==null?c=Nr(c):(c=Ni(t)?Zo:di.current,c=Uu(e,c));var v=t.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==c)&&mM(e,o,i,c),As=!1,m=e.memoizedState,o.state=m,Gp(e,i,o,r);var M=e.memoizedState;l!==p||m!==M||Ui.current||As?(typeof v=="function"&&(f_(e,t,v,i),M=e.memoizedState),(f=As||pM(e,t,f,i,m,M,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,M,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,M,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=M),o.props=i,o.state=M,o.context=c,i=f):(typeof o.componentDidUpdate!="function"||l===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),i=!1)}return m_(n,e,t,i,a,r)}function m_(n,e,t,i,r,a){l2(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&uM(e,t,!1),Qa(n,e,a);i=e.stateNode,ck.current=e;var l=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ou(e,n.child,null,a),e.child=Ou(e,null,l,a)):_i(n,e,l,a),e.memoizedState=i.state,r&&uM(e,t,!0),e.child}function u2(n){var e=n.stateNode;e.pendingContext?lM(n,e.pendingContext,e.pendingContext!==e.context):e.context&&lM(n,e.context,!1),ny(n,e.containerInfo)}function TM(n,e,t,i,r){return Nu(),Kx(r),e.flags|=256,_i(n,e,t,i),e.child}var g_={dehydrated:null,treeContext:null,retryLane:0};function v_(n){return{baseLanes:n,cachePool:null,transitions:null}}function c2(n,e,t){var i=e.pendingProps,r=on.current,a=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=n!==null&&n.memoizedState===null?!1:(r&2)!==0),l?(a=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Xt(on,r&1),n===null)return u_(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,a?(i=e.mode,a=e.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Cm(o,i,0,null),n=Wo(n,i,t,null),a.return=e,n.return=e,a.sibling=n,e.child=a,e.child.memoizedState=v_(t),e.memoizedState=g_,n):cy(e,o));if(r=n.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return fk(n,e,o,i,l,r,t);if(a){a=i.fallback,o=e.mode,r=n.child,l=r.sibling;var c={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=Xs(r,c),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?a=Xs(l,a):(a=Wo(a,o,t,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,o=n.child.memoizedState,o=o===null?v_(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=n.childLanes&~t,e.memoizedState=g_,i}return a=n.child,n=a.sibling,i=Xs(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function cy(n,e){return e=Cm({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function hh(n,e,t,i){return i!==null&&Kx(i),Ou(e,n.child,null,t),n=cy(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function fk(n,e,t,i,r,a,o){if(t)return e.flags&256?(e.flags&=-257,i=Cv(Error(ve(422))),hh(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(a=i.fallback,r=e.mode,i=Cm({mode:"visible",children:i.children},r,0,null),a=Wo(a,r,o,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&Ou(e,n.child,null,o),e.child.memoizedState=v_(o),e.memoizedState=g_,a);if(!(e.mode&1))return hh(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,a=Error(ve(419)),i=Cv(a,i,void 0),hh(n,e,o,i)}if(l=(o&n.childLanes)!==0,Ii||l){if(i=Xn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,Za(n,r),ea(i,n,r,-1))}return gy(),i=Cv(Error(ve(421))),hh(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=wk.bind(null,n),r._reactRetry=e,null):(n=a.treeContext,rr=Hs(r.nextSibling),sr=e,rn=!0,qr=null,n!==null&&(Ar[Cr++]=Xa,Ar[Cr++]=Ya,Ar[Cr++]=Qo,Xa=n.id,Ya=n.overflow,Qo=e),e=cy(e,i.children),e.flags|=4096,e)}function bM(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),c_(n.return,e,t)}function Rv(n,e,t,i,r){var a=n.memoizedState;a===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=t,a.tailMode=r)}function f2(n,e,t){var i=e.pendingProps,r=i.revealOrder,a=i.tail;if(_i(n,e,i.children,t),i=on.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&bM(n,t,e);else if(n.tag===19)bM(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Xt(on,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Wp(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Rv(e,!1,r,t,a);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Wp(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Rv(e,!0,t,null,a);break;case"together":Rv(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function dp(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Qa(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),el|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ve(153));if(e.child!==null){for(n=e.child,t=Xs(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Xs(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function dk(n,e,t){switch(e.tag){case 3:u2(e),Nu();break;case 5:kA(e);break;case 1:Ni(e.type)&&Fp(e);break;case 4:ny(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Xt(Bp,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Xt(on,on.current&1),e.flags|=128,null):t&e.child.childLanes?c2(n,e,t):(Xt(on,on.current&1),n=Qa(n,e,t),n!==null?n.sibling:null);Xt(on,on.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return f2(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Xt(on,on.current),i)break;return null;case 22:case 23:return e.lanes=0,o2(n,e,t)}return Qa(n,e,t)}var d2,__,h2,p2;d2=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};__=function(){};h2=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ko(Sa.current);var a=null;switch(t){case"input":r=B0(n,r),i=B0(n,i),a=[];break;case"select":r=dn({},r,{value:void 0}),i=dn({},i,{value:void 0}),a=[];break;case"textarea":r=W0(n,r),i=W0(n,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Np)}X0(t,i);var o;t=null;for(f in r)if(!i.hasOwnProperty(f)&&r.hasOwnProperty(f)&&r[f]!=null)if(f==="style"){var l=r[f];for(o in l)l.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(df.hasOwnProperty(f)?a||(a=[]):(a=a||[]).push(f,null));for(f in i){var c=i[f];if(l=r!=null?r[f]:void 0,i.hasOwnProperty(f)&&c!==l&&(c!=null||l!=null))if(f==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(t||(t={}),t[o]=c[o])}else t||(a||(a=[]),a.push(f,t)),t=c;else f==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(f,c)):f==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(f,""+c):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(df.hasOwnProperty(f)?(c!=null&&f==="onScroll"&&qt("scroll",n),a||l===c||(a=[])):(a=a||[]).push(f,c))}t&&(a=a||[]).push("style",t);var f=a;(e.updateQueue=f)&&(e.flags|=4)}};p2=function(n,e,t,i){t!==i&&(e.flags|=4)};function Cc(n,e){if(!rn)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function ai(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function hk(n,e,t){var i=e.pendingProps;switch(qx(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ai(e),null;case 1:return Ni(e.type)&&Op(),ai(e),null;case 3:return i=e.stateNode,Fu(),Qt(Ui),Qt(di),ry(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(fh(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qr!==null&&(b_(qr),qr=null))),__(n,e),ai(e),null;case 5:iy(e);var r=ko(wf.current);if(t=e.type,n!==null&&e.stateNode!=null)h2(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ve(166));return ai(e),null}if(n=ko(Sa.current),fh(e)){i=e.stateNode,t=e.type;var a=e.memoizedProps;switch(i[pa]=e,i[Ef]=a,n=(e.mode&1)!==0,t){case"dialog":qt("cancel",i),qt("close",i);break;case"iframe":case"object":case"embed":qt("load",i);break;case"video":case"audio":for(r=0;r<Wc.length;r++)qt(Wc[r],i);break;case"source":qt("error",i);break;case"img":case"image":case"link":qt("error",i),qt("load",i);break;case"details":qt("toggle",i);break;case"input":NE(i,a),qt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},qt("invalid",i);break;case"textarea":FE(i,a),qt("invalid",i)}X0(t,a),r=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?i.textContent!==l&&(a.suppressHydrationWarning!==!0&&ch(i.textContent,l,n),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&ch(i.textContent,l,n),r=["children",""+l]):df.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&qt("scroll",i)}switch(t){case"input":nh(i),OE(i,a,!0);break;case"textarea":nh(i),kE(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Np)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Hb(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[pa]=e,n[Ef]=i,d2(n,e,!1,!1),e.stateNode=n;e:{switch(o=Y0(t,i),t){case"dialog":qt("cancel",n),qt("close",n),r=i;break;case"iframe":case"object":case"embed":qt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Wc.length;r++)qt(Wc[r],n);r=i;break;case"source":qt("error",n),r=i;break;case"img":case"image":case"link":qt("error",n),qt("load",n),r=i;break;case"details":qt("toggle",n),r=i;break;case"input":NE(n,i),r=B0(n,i),qt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=dn({},i,{value:void 0}),qt("invalid",n);break;case"textarea":FE(n,i),r=W0(n,i),qt("invalid",n);break;default:r=i}X0(t,r),l=r;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?Vb(n,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Gb(n,c)):a==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&hf(n,c):typeof c=="number"&&hf(n,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(df.hasOwnProperty(a)?c!=null&&a==="onScroll"&&qt("scroll",n):c!=null&&Ux(n,a,c,o))}switch(t){case"input":nh(n),OE(n,i,!1);break;case"textarea":nh(n),kE(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Qs(i.value));break;case"select":n.multiple=!!i.multiple,a=i.value,a!=null?Su(n,!!i.multiple,a,!1):i.defaultValue!=null&&Su(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Np)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ai(e),null;case 6:if(n&&e.stateNode!=null)p2(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ve(166));if(t=ko(wf.current),ko(Sa.current),fh(e)){if(i=e.stateNode,t=e.memoizedProps,i[pa]=e,(a=i.nodeValue!==t)&&(n=sr,n!==null))switch(n.tag){case 3:ch(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ch(i.nodeValue,t,(n.mode&1)!==0)}a&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[pa]=e,e.stateNode=i}return ai(e),null;case 13:if(Qt(on),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(rn&&rr!==null&&e.mode&1&&!(e.flags&128))LA(),Nu(),e.flags|=98560,a=!1;else if(a=fh(e),i!==null&&i.dehydrated!==null){if(n===null){if(!a)throw Error(ve(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ve(317));a[pa]=e}else Nu(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ai(e),a=!1}else qr!==null&&(b_(qr),qr=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||on.current&1?On===0&&(On=3):gy())),e.updateQueue!==null&&(e.flags|=4),ai(e),null);case 4:return Fu(),__(n,e),n===null&&yf(e.stateNode.containerInfo),ai(e),null;case 10:return Jx(e.type._context),ai(e),null;case 17:return Ni(e.type)&&Op(),ai(e),null;case 19:if(Qt(on),a=e.memoizedState,a===null)return ai(e),null;if(i=(e.flags&128)!==0,o=a.rendering,o===null)if(i)Cc(a,!1);else{if(On!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Wp(n),o!==null){for(e.flags|=128,Cc(a,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)a=t,n=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=n,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,n=o.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Xt(on,on.current&1|2),e.child}n=n.sibling}a.tail!==null&&Sn()>zu&&(e.flags|=128,i=!0,Cc(a,!1),e.lanes=4194304)}else{if(!i)if(n=Wp(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Cc(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!rn)return ai(e),null}else 2*Sn()-a.renderingStartTime>zu&&t!==1073741824&&(e.flags|=128,i=!0,Cc(a,!1),e.lanes=4194304);a.isBackwards?(o.sibling=e.child,e.child=o):(t=a.last,t!==null?t.sibling=o:e.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Sn(),e.sibling=null,t=on.current,Xt(on,i?t&1|2:t&1),e):(ai(e),null);case 22:case 23:return my(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Qi&1073741824&&(ai(e),e.subtreeFlags&6&&(e.flags|=8192)):ai(e),null;case 24:return null;case 25:return null}throw Error(ve(156,e.tag))}function pk(n,e){switch(qx(e),e.tag){case 1:return Ni(e.type)&&Op(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Fu(),Qt(Ui),Qt(di),ry(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return iy(e),null;case 13:if(Qt(on),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ve(340));Nu()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Qt(on),null;case 4:return Fu(),null;case 10:return Jx(e.type._context),null;case 22:case 23:return my(),null;case 24:return null;default:return null}}var ph=!1,li=!1,mk=typeof WeakSet=="function"?WeakSet:Set,De=null;function du(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){pn(n,e,i)}else t.current=null}function x_(n,e,t){try{t()}catch(i){pn(n,e,i)}}var AM=!1;function gk(n,e){if(n_=Dp,n=_A(),jx(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var o=0,l=-1,c=-1,f=0,d=0,p=n,m=null;t:for(;;){for(var v;p!==t||r!==0&&p.nodeType!==3||(l=o+r),p!==a||i!==0&&p.nodeType!==3||(c=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===n)break t;if(m===t&&++f===r&&(l=o),m===a&&++d===i&&(c=o),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}t=l===-1||c===-1?null:{start:l,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(i_={focusedElem:n,selectionRange:t},Dp=!1,De=e;De!==null;)if(e=De,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,De=n;else for(;De!==null;){e=De;try{var M=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var x=M.memoizedProps,_=M.memoizedState,g=e.stateNode,S=g.getSnapshotBeforeUpdate(e.elementType===e.type?x:jr(e.type,x),_);g.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ve(163))}}catch(w){pn(e,e.return,w)}if(n=e.sibling,n!==null){n.return=e.return,De=n;break}De=e.return}return M=AM,AM=!1,M}function ef(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var a=r.destroy;r.destroy=void 0,a!==void 0&&x_(e,t,a)}r=r.next}while(r!==i)}}function bm(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function y_(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function m2(n){var e=n.alternate;e!==null&&(n.alternate=null,m2(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[pa],delete e[Ef],delete e[s_],delete e[QF],delete e[JF])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function g2(n){return n.tag===5||n.tag===3||n.tag===4}function CM(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||g2(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function S_(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Np));else if(i!==4&&(n=n.child,n!==null))for(S_(n,e,t),n=n.sibling;n!==null;)S_(n,e,t),n=n.sibling}function E_(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(E_(n,e,t),n=n.sibling;n!==null;)E_(n,e,t),n=n.sibling}var Kn=null,$r=!1;function vs(n,e,t){for(t=t.child;t!==null;)v2(n,e,t),t=t.sibling}function v2(n,e,t){if(ya&&typeof ya.onCommitFiberUnmount=="function")try{ya.onCommitFiberUnmount(_m,t)}catch{}switch(t.tag){case 5:li||du(t,e);case 6:var i=Kn,r=$r;Kn=null,vs(n,e,t),Kn=i,$r=r,Kn!==null&&($r?(n=Kn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Kn.removeChild(t.stateNode));break;case 18:Kn!==null&&($r?(n=Kn,t=t.stateNode,n.nodeType===8?Ev(n.parentNode,t):n.nodeType===1&&Ev(n,t),vf(n)):Ev(Kn,t.stateNode));break;case 4:i=Kn,r=$r,Kn=t.stateNode.containerInfo,$r=!0,vs(n,e,t),Kn=i,$r=r;break;case 0:case 11:case 14:case 15:if(!li&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&x_(t,e,o),r=r.next}while(r!==i)}vs(n,e,t);break;case 1:if(!li&&(du(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(l){pn(t,e,l)}vs(n,e,t);break;case 21:vs(n,e,t);break;case 22:t.mode&1?(li=(i=li)||t.memoizedState!==null,vs(n,e,t),li=i):vs(n,e,t);break;default:vs(n,e,t)}}function RM(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new mk),e.forEach(function(i){var r=Tk.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Wr(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var a=n,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Kn=l.stateNode,$r=!1;break e;case 3:Kn=l.stateNode.containerInfo,$r=!0;break e;case 4:Kn=l.stateNode.containerInfo,$r=!0;break e}l=l.return}if(Kn===null)throw Error(ve(160));v2(a,o,r),Kn=null,$r=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(f){pn(r,e,f)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_2(e,n),e=e.sibling}function _2(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Wr(e,n),la(n),i&4){try{ef(3,n,n.return),bm(3,n)}catch(x){pn(n,n.return,x)}try{ef(5,n,n.return)}catch(x){pn(n,n.return,x)}}break;case 1:Wr(e,n),la(n),i&512&&t!==null&&du(t,t.return);break;case 5:if(Wr(e,n),la(n),i&512&&t!==null&&du(t,t.return),n.flags&32){var r=n.stateNode;try{hf(r,"")}catch(x){pn(n,n.return,x)}}if(i&4&&(r=n.stateNode,r!=null)){var a=n.memoizedProps,o=t!==null?t.memoizedProps:a,l=n.type,c=n.updateQueue;if(n.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&zb(r,a),Y0(l,o);var f=Y0(l,a);for(o=0;o<c.length;o+=2){var d=c[o],p=c[o+1];d==="style"?Vb(r,p):d==="dangerouslySetInnerHTML"?Gb(r,p):d==="children"?hf(r,p):Ux(r,d,p,f)}switch(l){case"input":H0(r,a);break;case"textarea":Bb(r,a);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?Su(r,!!a.multiple,v,!1):m!==!!a.multiple&&(a.defaultValue!=null?Su(r,!!a.multiple,a.defaultValue,!0):Su(r,!!a.multiple,a.multiple?[]:"",!1))}r[Ef]=a}catch(x){pn(n,n.return,x)}}break;case 6:if(Wr(e,n),la(n),i&4){if(n.stateNode===null)throw Error(ve(162));r=n.stateNode,a=n.memoizedProps;try{r.nodeValue=a}catch(x){pn(n,n.return,x)}}break;case 3:if(Wr(e,n),la(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{vf(e.containerInfo)}catch(x){pn(n,n.return,x)}break;case 4:Wr(e,n),la(n);break;case 13:Wr(e,n),la(n),r=n.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(hy=Sn())),i&4&&RM(n);break;case 22:if(d=t!==null&&t.memoizedState!==null,n.mode&1?(li=(f=li)||d,Wr(e,n),li=f):Wr(e,n),la(n),i&8192){if(f=n.memoizedState!==null,(n.stateNode.isHidden=f)&&!d&&n.mode&1)for(De=n,d=n.child;d!==null;){for(p=De=d;De!==null;){switch(m=De,v=m.child,m.tag){case 0:case 11:case 14:case 15:ef(4,m,m.return);break;case 1:du(m,m.return);var M=m.stateNode;if(typeof M.componentWillUnmount=="function"){i=m,t=m.return;try{e=i,M.props=e.memoizedProps,M.state=e.memoizedState,M.componentWillUnmount()}catch(x){pn(i,t,x)}}break;case 5:du(m,m.return);break;case 22:if(m.memoizedState!==null){LM(p);continue}}v!==null?(v.return=m,De=v):LM(p)}d=d.sibling}e:for(d=null,p=n;;){if(p.tag===5){if(d===null){d=p;try{r=p.stateNode,f?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Wb("display",o))}catch(x){pn(n,n.return,x)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=f?"":p.memoizedProps}catch(x){pn(n,n.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===n)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break e;for(;p.sibling===null;){if(p.return===null||p.return===n)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Wr(e,n),la(n),i&4&&RM(n);break;case 21:break;default:Wr(e,n),la(n)}}function la(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(g2(t)){var i=t;break e}t=t.return}throw Error(ve(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(hf(r,""),i.flags&=-33);var a=CM(n);E_(n,a,r);break;case 3:case 4:var o=i.stateNode.containerInfo,l=CM(n);S_(n,l,o);break;default:throw Error(ve(161))}}catch(c){pn(n,n.return,c)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function vk(n,e,t){De=n,x2(n)}function x2(n,e,t){for(var i=(n.mode&1)!==0;De!==null;){var r=De,a=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ph;if(!o){var l=r.alternate,c=l!==null&&l.memoizedState!==null||li;l=ph;var f=li;if(ph=o,(li=c)&&!f)for(De=r;De!==null;)o=De,c=o.child,o.tag===22&&o.memoizedState!==null?DM(r):c!==null?(c.return=o,De=c):DM(r);for(;a!==null;)De=a,x2(a),a=a.sibling;De=r,ph=l,li=f}PM(n)}else r.subtreeFlags&8772&&a!==null?(a.return=r,De=a):PM(n)}}function PM(n){for(;De!==null;){var e=De;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:li||bm(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!li)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:jr(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&hM(e,a,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}hM(e,o,t)}break;case 5:var l=e.stateNode;if(t===null&&e.flags&4){t=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var f=e.alternate;if(f!==null){var d=f.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&vf(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ve(163))}li||e.flags&512&&y_(e)}catch(m){pn(e,e.return,m)}}if(e===n){De=null;break}if(t=e.sibling,t!==null){t.return=e.return,De=t;break}De=e.return}}function LM(n){for(;De!==null;){var e=De;if(e===n){De=null;break}var t=e.sibling;if(t!==null){t.return=e.return,De=t;break}De=e.return}}function DM(n){for(;De!==null;){var e=De;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{bm(4,e)}catch(c){pn(e,t,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){pn(e,r,c)}}var a=e.return;try{y_(e)}catch(c){pn(e,a,c)}break;case 5:var o=e.return;try{y_(e)}catch(c){pn(e,o,c)}}}catch(c){pn(e,e.return,c)}if(e===n){De=null;break}var l=e.sibling;if(l!==null){l.return=e.return,De=l;break}De=e.return}}var _k=Math.ceil,Yp=as.ReactCurrentDispatcher,fy=as.ReactCurrentOwner,Ir=as.ReactCurrentBatchConfig,Rt=0,Xn=null,bn=null,Qn=0,Qi=0,hu=oo(0),On=0,Cf=null,el=0,Am=0,dy=0,tf=null,Di=null,hy=0,zu=1/0,Ha=null,jp=!1,M_=null,Ws=null,mh=!1,Ls=null,$p=0,nf=0,w_=null,hp=-1,pp=0;function Ei(){return Rt&6?Sn():hp!==-1?hp:hp=Sn()}function Vs(n){return n.mode&1?Rt&2&&Qn!==0?Qn&-Qn:tk.transition!==null?(pp===0&&(pp=nA()),pp):(n=Nt,n!==0||(n=window.event,n=n===void 0?16:uA(n.type)),n):1}function ea(n,e,t,i){if(50<nf)throw nf=0,w_=null,Error(ve(185));Zf(n,t,i),(!(Rt&2)||n!==Xn)&&(n===Xn&&(!(Rt&2)&&(Am|=t),On===4&&Rs(n,Qn)),Oi(n,i),t===1&&Rt===0&&!(e.mode&1)&&(zu=Sn()+500,Mm&&lo()))}function Oi(n,e){var t=n.callbackNode;tF(n,e);var i=Lp(n,n===Xn?Qn:0);if(i===0)t!==null&&HE(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&HE(t),e===1)n.tag===0?ek(IM.bind(null,n)):CA(IM.bind(null,n)),KF(function(){!(Rt&6)&&lo()}),t=null;else{switch(iA(i)){case 1:t=zx;break;case 4:t=eA;break;case 16:t=Pp;break;case 536870912:t=tA;break;default:t=Pp}t=A2(t,y2.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function y2(n,e){if(hp=-1,pp=0,Rt&6)throw Error(ve(327));var t=n.callbackNode;if(bu()&&n.callbackNode!==t)return null;var i=Lp(n,n===Xn?Qn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=qp(n,i);else{e=i;var r=Rt;Rt|=2;var a=E2();(Xn!==n||Qn!==e)&&(Ha=null,zu=Sn()+500,Go(n,e));do try{Sk();break}catch(l){S2(n,l)}while(!0);Qx(),Yp.current=a,Rt=r,bn!==null?e=0:(Xn=null,Qn=0,e=On)}if(e!==0){if(e===2&&(r=Z0(n),r!==0&&(i=r,e=T_(n,r))),e===1)throw t=Cf,Go(n,0),Rs(n,i),Oi(n,Sn()),t;if(e===6)Rs(n,i);else{if(r=n.current.alternate,!(i&30)&&!xk(r)&&(e=qp(n,i),e===2&&(a=Z0(n),a!==0&&(i=a,e=T_(n,a))),e===1))throw t=Cf,Go(n,0),Rs(n,i),Oi(n,Sn()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ve(345));case 2:Co(n,Di,Ha);break;case 3:if(Rs(n,i),(i&130023424)===i&&(e=hy+500-Sn(),10<e)){if(Lp(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Ei(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=a_(Co.bind(null,n,Di,Ha),e);break}Co(n,Di,Ha);break;case 4:if(Rs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Jr(i);a=1<<o,o=e[o],o>r&&(r=o),i&=~a}if(i=r,i=Sn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*_k(i/1960))-i,10<i){n.timeoutHandle=a_(Co.bind(null,n,Di,Ha),i);break}Co(n,Di,Ha);break;case 5:Co(n,Di,Ha);break;default:throw Error(ve(329))}}}return Oi(n,Sn()),n.callbackNode===t?y2.bind(null,n):null}function T_(n,e){var t=tf;return n.current.memoizedState.isDehydrated&&(Go(n,e).flags|=256),n=qp(n,e),n!==2&&(e=Di,Di=t,e!==null&&b_(e)),n}function b_(n){Di===null?Di=n:Di.push.apply(Di,n)}function xk(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],a=r.getSnapshot;r=r.value;try{if(!na(a(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rs(n,e){for(e&=~dy,e&=~Am,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Jr(e),i=1<<t;n[t]=-1,e&=~i}}function IM(n){if(Rt&6)throw Error(ve(327));bu();var e=Lp(n,0);if(!(e&1))return Oi(n,Sn()),null;var t=qp(n,e);if(n.tag!==0&&t===2){var i=Z0(n);i!==0&&(e=i,t=T_(n,i))}if(t===1)throw t=Cf,Go(n,0),Rs(n,e),Oi(n,Sn()),t;if(t===6)throw Error(ve(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Co(n,Di,Ha),Oi(n,Sn()),null}function py(n,e){var t=Rt;Rt|=1;try{return n(e)}finally{Rt=t,Rt===0&&(zu=Sn()+500,Mm&&lo())}}function tl(n){Ls!==null&&Ls.tag===0&&!(Rt&6)&&bu();var e=Rt;Rt|=1;var t=Ir.transition,i=Nt;try{if(Ir.transition=null,Nt=1,n)return n()}finally{Nt=i,Ir.transition=t,Rt=e,!(Rt&6)&&lo()}}function my(){Qi=hu.current,Qt(hu)}function Go(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,qF(t)),bn!==null)for(t=bn.return;t!==null;){var i=t;switch(qx(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Op();break;case 3:Fu(),Qt(Ui),Qt(di),ry();break;case 5:iy(i);break;case 4:Fu();break;case 13:Qt(on);break;case 19:Qt(on);break;case 10:Jx(i.type._context);break;case 22:case 23:my()}t=t.return}if(Xn=n,bn=n=Xs(n.current,null),Qn=Qi=e,On=0,Cf=null,dy=Am=el=0,Di=tf=null,Fo!==null){for(e=0;e<Fo.length;e++)if(t=Fo[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,a=t.pending;if(a!==null){var o=a.next;a.next=r,i.next=o}t.pending=i}Fo=null}return n}function S2(n,e){do{var t=bn;try{if(Qx(),cp.current=Xp,Vp){for(var i=fn.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Vp=!1}if(Jo=0,Wn=In=fn=null,Jc=!1,Tf=0,fy.current=null,t===null||t.return===null){On=1,Cf=e,bn=null;break}e:{var a=n,o=t.return,l=t,c=e;if(e=Qn,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var f=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=yM(o);if(v!==null){v.flags&=-257,SM(v,o,l,a,e),v.mode&1&&xM(a,f,e),e=v,c=f;var M=e.updateQueue;if(M===null){var x=new Set;x.add(c),e.updateQueue=x}else M.add(c);break e}else{if(!(e&1)){xM(a,f,e),gy();break e}c=Error(ve(426))}}else if(rn&&l.mode&1){var _=yM(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),SM(_,o,l,a,e),Kx(ku(c,l));break e}}a=c=ku(c,l),On!==4&&(On=2),tf===null?tf=[a]:tf.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var g=r2(a,c,e);dM(a,g);break e;case 1:l=c;var S=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof S.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Ws===null||!Ws.has(y)))){a.flags|=65536,e&=-e,a.lanes|=e;var w=a2(a,l,e);dM(a,w);break e}}a=a.return}while(a!==null)}w2(t)}catch(A){e=A,bn===t&&t!==null&&(bn=t=t.return);continue}break}while(!0)}function E2(){var n=Yp.current;return Yp.current=Xp,n===null?Xp:n}function gy(){(On===0||On===3||On===2)&&(On=4),Xn===null||!(el&268435455)&&!(Am&268435455)||Rs(Xn,Qn)}function qp(n,e){var t=Rt;Rt|=2;var i=E2();(Xn!==n||Qn!==e)&&(Ha=null,Go(n,e));do try{yk();break}catch(r){S2(n,r)}while(!0);if(Qx(),Rt=t,Yp.current=i,bn!==null)throw Error(ve(261));return Xn=null,Qn=0,On}function yk(){for(;bn!==null;)M2(bn)}function Sk(){for(;bn!==null&&!YO();)M2(bn)}function M2(n){var e=b2(n.alternate,n,Qi);n.memoizedProps=n.pendingProps,e===null?w2(n):bn=e,fy.current=null}function w2(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=pk(t,e),t!==null){t.flags&=32767,bn=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{On=6,bn=null;return}}else if(t=hk(t,e,Qi),t!==null){bn=t;return}if(e=e.sibling,e!==null){bn=e;return}bn=e=n}while(e!==null);On===0&&(On=5)}function Co(n,e,t){var i=Nt,r=Ir.transition;try{Ir.transition=null,Nt=1,Ek(n,e,t,i)}finally{Ir.transition=r,Nt=i}return null}function Ek(n,e,t,i){do bu();while(Ls!==null);if(Rt&6)throw Error(ve(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ve(177));n.callbackNode=null,n.callbackPriority=0;var a=t.lanes|t.childLanes;if(nF(n,a),n===Xn&&(bn=Xn=null,Qn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||mh||(mh=!0,A2(Pp,function(){return bu(),null})),a=(t.flags&15990)!==0,t.subtreeFlags&15990||a){a=Ir.transition,Ir.transition=null;var o=Nt;Nt=1;var l=Rt;Rt|=4,fy.current=null,gk(n,t),_2(t,n),GF(i_),Dp=!!n_,i_=n_=null,n.current=t,vk(t),jO(),Rt=l,Nt=o,Ir.transition=a}else n.current=t;if(mh&&(mh=!1,Ls=n,$p=r),a=n.pendingLanes,a===0&&(Ws=null),KO(t.stateNode),Oi(n,Sn()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(jp)throw jp=!1,n=M_,M_=null,n;return $p&1&&n.tag!==0&&bu(),a=n.pendingLanes,a&1?n===w_?nf++:(nf=0,w_=n):nf=0,lo(),null}function bu(){if(Ls!==null){var n=iA($p),e=Ir.transition,t=Nt;try{if(Ir.transition=null,Nt=16>n?16:n,Ls===null)var i=!1;else{if(n=Ls,Ls=null,$p=0,Rt&6)throw Error(ve(331));var r=Rt;for(Rt|=4,De=n.current;De!==null;){var a=De,o=a.child;if(De.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var f=l[c];for(De=f;De!==null;){var d=De;switch(d.tag){case 0:case 11:case 15:ef(8,d,a)}var p=d.child;if(p!==null)p.return=d,De=p;else for(;De!==null;){d=De;var m=d.sibling,v=d.return;if(m2(d),d===f){De=null;break}if(m!==null){m.return=v,De=m;break}De=v}}}var M=a.alternate;if(M!==null){var x=M.child;if(x!==null){M.child=null;do{var _=x.sibling;x.sibling=null,x=_}while(x!==null)}}De=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,De=o;else e:for(;De!==null;){if(a=De,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ef(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,De=g;break e}De=a.return}}var S=n.current;for(De=S;De!==null;){o=De;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,De=y;else e:for(o=S;De!==null;){if(l=De,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:bm(9,l)}}catch(A){pn(l,l.return,A)}if(l===o){De=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,De=w;break e}De=l.return}}if(Rt=r,lo(),ya&&typeof ya.onPostCommitFiberRoot=="function")try{ya.onPostCommitFiberRoot(_m,n)}catch{}i=!0}return i}finally{Nt=t,Ir.transition=e}}return!1}function UM(n,e,t){e=ku(t,e),e=r2(n,e,1),n=Gs(n,e,1),e=Ei(),n!==null&&(Zf(n,1,e),Oi(n,e))}function pn(n,e,t){if(n.tag===3)UM(n,n,t);else for(;e!==null;){if(e.tag===3){UM(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ws===null||!Ws.has(i))){n=ku(t,n),n=a2(e,n,1),e=Gs(e,n,1),n=Ei(),e!==null&&(Zf(e,1,n),Oi(e,n));break}}e=e.return}}function Mk(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Ei(),n.pingedLanes|=n.suspendedLanes&t,Xn===n&&(Qn&t)===t&&(On===4||On===3&&(Qn&130023424)===Qn&&500>Sn()-hy?Go(n,0):dy|=t),Oi(n,e)}function T2(n,e){e===0&&(n.mode&1?(e=ah,ah<<=1,!(ah&130023424)&&(ah=4194304)):e=1);var t=Ei();n=Za(n,e),n!==null&&(Zf(n,e,t),Oi(n,t))}function wk(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),T2(n,t)}function Tk(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ve(314))}i!==null&&i.delete(e),T2(n,t)}var b2;b2=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Ui.current)Ii=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Ii=!1,dk(n,e,t);Ii=!!(n.flags&131072)}else Ii=!1,rn&&e.flags&1048576&&RA(e,zp,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;dp(n,e),n=e.pendingProps;var r=Uu(e,di.current);Tu(e,t),r=sy(null,e,i,n,r,t);var a=oy();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ni(i)?(a=!0,Fp(e)):a=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ty(e),r.updater=wm,e.stateNode=r,r._reactInternals=e,d_(e,i,n,t),e=m_(null,e,i,!0,a,t)):(e.tag=0,rn&&a&&$x(e),_i(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(dp(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ak(i),n=jr(i,n),r){case 0:e=p_(null,e,i,n,t);break e;case 1:e=wM(null,e,i,n,t);break e;case 11:e=EM(null,e,i,n,t);break e;case 14:e=MM(null,e,i,jr(i.type,n),t);break e}throw Error(ve(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jr(i,r),p_(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jr(i,r),wM(n,e,i,r,t);case 3:e:{if(u2(e),n===null)throw Error(ve(387));i=e.pendingProps,a=e.memoizedState,r=a.element,IA(n,e),Gp(e,i,null,t);var o=e.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){r=ku(Error(ve(423)),e),e=TM(n,e,i,t,r);break e}else if(i!==r){r=ku(Error(ve(424)),e),e=TM(n,e,i,t,r);break e}else for(rr=Hs(e.stateNode.containerInfo.firstChild),sr=e,rn=!0,qr=null,t=FA(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Nu(),i===r){e=Qa(n,e,t);break e}_i(n,e,i,t)}e=e.child}return e;case 5:return kA(e),n===null&&u_(e),i=e.type,r=e.pendingProps,a=n!==null?n.memoizedProps:null,o=r.children,r_(i,r)?o=null:a!==null&&r_(i,a)&&(e.flags|=32),l2(n,e),_i(n,e,o,t),e.child;case 6:return n===null&&u_(e),null;case 13:return c2(n,e,t);case 4:return ny(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ou(e,null,i,t):_i(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jr(i,r),EM(n,e,i,r,t);case 7:return _i(n,e,e.pendingProps,t),e.child;case 8:return _i(n,e,e.pendingProps.children,t),e.child;case 12:return _i(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,a=e.memoizedProps,o=r.value,Xt(Bp,i._currentValue),i._currentValue=o,a!==null)if(na(a.value,o)){if(a.children===r.children&&!Ui.current){e=Qa(n,e,t);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(a.tag===1){c=$a(-1,t&-t),c.tag=2;var f=a.updateQueue;if(f!==null){f=f.shared;var d=f.pending;d===null?c.next=c:(c.next=d.next,d.next=c),f.pending=c}}a.lanes|=t,c=a.alternate,c!==null&&(c.lanes|=t),c_(a.return,t,e),l.lanes|=t;break}c=c.next}}else if(a.tag===10)o=a.type===e.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(ve(341));o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),c_(o,t,e),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}_i(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Tu(e,t),r=Nr(r),i=i(r),e.flags|=1,_i(n,e,i,t),e.child;case 14:return i=e.type,r=jr(i,e.pendingProps),r=jr(i.type,r),MM(n,e,i,r,t);case 15:return s2(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jr(i,r),dp(n,e),e.tag=1,Ni(i)?(n=!0,Fp(e)):n=!1,Tu(e,t),NA(e,i,r),d_(e,i,r,t),m_(null,e,i,!0,n,t);case 19:return f2(n,e,t);case 22:return o2(n,e,t)}throw Error(ve(156,e.tag))};function A2(n,e){return Jb(n,e)}function bk(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pr(n,e,t,i){return new bk(n,e,t,i)}function vy(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ak(n){if(typeof n=="function")return vy(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Ox)return 11;if(n===Fx)return 14}return 2}function Xs(n,e){var t=n.alternate;return t===null?(t=Pr(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function mp(n,e,t,i,r,a){var o=2;if(i=n,typeof n=="function")vy(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case iu:return Wo(t.children,r,a,e);case Nx:o=8,r|=8;break;case O0:return n=Pr(12,t,e,r|2),n.elementType=O0,n.lanes=a,n;case F0:return n=Pr(13,t,e,r),n.elementType=F0,n.lanes=a,n;case k0:return n=Pr(19,t,e,r),n.elementType=k0,n.lanes=a,n;case Ob:return Cm(t,r,a,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Ub:o=10;break e;case Nb:o=9;break e;case Ox:o=11;break e;case Fx:o=14;break e;case bs:o=16,i=null;break e}throw Error(ve(130,n==null?n:typeof n,""))}return e=Pr(o,t,e,r),e.elementType=n,e.type=i,e.lanes=a,e}function Wo(n,e,t,i){return n=Pr(7,n,i,e),n.lanes=t,n}function Cm(n,e,t,i){return n=Pr(22,n,i,e),n.elementType=Ob,n.lanes=t,n.stateNode={isHidden:!1},n}function Pv(n,e,t){return n=Pr(6,n,null,e),n.lanes=t,n}function Lv(n,e,t){return e=Pr(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Ck(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fv(0),this.expirationTimes=fv(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fv(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function _y(n,e,t,i,r,a,o,l,c){return n=new Ck(n,e,t,l,c),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Pr(3,null,null,e),n.current=a,a.stateNode=n,a.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ty(a),n}function Rk(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nu,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function C2(n){if(!n)return Js;n=n._reactInternals;e:{if(ll(n)!==n||n.tag!==1)throw Error(ve(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ni(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ve(171))}if(n.tag===1){var t=n.type;if(Ni(t))return AA(n,t,e)}return e}function R2(n,e,t,i,r,a,o,l,c){return n=_y(t,i,!0,n,r,a,o,l,c),n.context=C2(null),t=n.current,i=Ei(),r=Vs(t),a=$a(i,r),a.callback=e??null,Gs(t,a,r),n.current.lanes=r,Zf(n,r,i),Oi(n,i),n}function Rm(n,e,t,i){var r=e.current,a=Ei(),o=Vs(r);return t=C2(t),e.context===null?e.context=t:e.pendingContext=t,e=$a(a,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Gs(r,e,o),n!==null&&(ea(n,r,o,a),up(n,r,o)),o}function Kp(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function NM(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function xy(n,e){NM(n,e),(n=n.alternate)&&NM(n,e)}function Pk(){return null}var P2=typeof reportError=="function"?reportError:function(n){console.error(n)};function yy(n){this._internalRoot=n}Pm.prototype.render=yy.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ve(409));Rm(n,e,null,null)};Pm.prototype.unmount=yy.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;tl(function(){Rm(null,n,null,null)}),e[Ka]=null}};function Pm(n){this._internalRoot=n}Pm.prototype.unstable_scheduleHydration=function(n){if(n){var e=sA();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Cs.length&&e!==0&&e<Cs[t].priority;t++);Cs.splice(t,0,n),t===0&&lA(n)}};function Sy(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Lm(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function OM(){}function Lk(n,e,t,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var f=Kp(o);a.call(f)}}var o=R2(e,i,n,0,null,!1,!1,"",OM);return n._reactRootContainer=o,n[Ka]=o.current,yf(n.nodeType===8?n.parentNode:n),tl(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var f=Kp(c);l.call(f)}}var c=_y(n,0,!1,null,null,!1,!1,"",OM);return n._reactRootContainer=c,n[Ka]=c.current,yf(n.nodeType===8?n.parentNode:n),tl(function(){Rm(e,c,t,i)}),c}function Dm(n,e,t,i,r){var a=t._reactRootContainer;if(a){var o=a;if(typeof r=="function"){var l=r;r=function(){var c=Kp(o);l.call(c)}}Rm(e,o,n,r)}else o=Lk(t,e,n,r,i);return Kp(o)}rA=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Gc(e.pendingLanes);t!==0&&(Bx(e,t|1),Oi(e,Sn()),!(Rt&6)&&(zu=Sn()+500,lo()))}break;case 13:tl(function(){var i=Za(n,1);if(i!==null){var r=Ei();ea(i,n,1,r)}}),xy(n,1)}};Hx=function(n){if(n.tag===13){var e=Za(n,134217728);if(e!==null){var t=Ei();ea(e,n,134217728,t)}xy(n,134217728)}};aA=function(n){if(n.tag===13){var e=Vs(n),t=Za(n,e);if(t!==null){var i=Ei();ea(t,n,e,i)}xy(n,e)}};sA=function(){return Nt};oA=function(n,e){var t=Nt;try{return Nt=n,e()}finally{Nt=t}};$0=function(n,e,t){switch(e){case"input":if(H0(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Em(i);if(!r)throw Error(ve(90));kb(i),H0(i,r)}}}break;case"textarea":Bb(n,t);break;case"select":e=t.value,e!=null&&Su(n,!!t.multiple,e,!1)}};jb=py;$b=tl;var Dk={usingClientEntryPoint:!1,Events:[Jf,ou,Em,Xb,Yb,py]},Rc={findFiberByHostInstance:Oo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ik={bundleType:Rc.bundleType,version:Rc.version,rendererPackageName:Rc.rendererPackageName,rendererConfig:Rc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:as.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Zb(n),n===null?null:n.stateNode},findFiberByHostInstance:Rc.findFiberByHostInstance||Pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gh.isDisabled&&gh.supportsFiber)try{_m=gh.inject(Ik),ya=gh}catch{}}fr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dk;fr.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sy(e))throw Error(ve(200));return Rk(n,e,null,t)};fr.createRoot=function(n,e){if(!Sy(n))throw Error(ve(299));var t=!1,i="",r=P2;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=_y(n,1,!1,null,null,t,!1,i,r),n[Ka]=e.current,yf(n.nodeType===8?n.parentNode:n),new yy(e)};fr.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ve(188)):(n=Object.keys(n).join(","),Error(ve(268,n)));return n=Zb(e),n=n===null?null:n.stateNode,n};fr.flushSync=function(n){return tl(n)};fr.hydrate=function(n,e,t){if(!Lm(e))throw Error(ve(200));return Dm(null,n,e,!0,t)};fr.hydrateRoot=function(n,e,t){if(!Sy(n))throw Error(ve(405));var i=t!=null&&t.hydratedSources||null,r=!1,a="",o=P2;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=R2(e,null,n,1,t??null,r,!1,a,o),n[Ka]=e.current,yf(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Pm(e)};fr.render=function(n,e,t){if(!Lm(e))throw Error(ve(200));return Dm(null,n,e,!1,t)};fr.unmountComponentAtNode=function(n){if(!Lm(n))throw Error(ve(40));return n._reactRootContainer?(tl(function(){Dm(null,null,n,!1,function(){n._reactRootContainer=null,n[Ka]=null})}),!0):!1};fr.unstable_batchedUpdates=py;fr.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Lm(t))throw Error(ve(200));if(n==null||n._reactInternals===void 0)throw Error(ve(38));return Dm(n,e,t,!1,i)};fr.version="18.2.0-next-9e3b772b8-20220608";function L2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L2)}catch(n){console.error(n)}}L2(),Rb.exports=fr;var Uk=Rb.exports,FM=Uk;U0.createRoot=FM.createRoot,U0.hydrateRoot=FM.hydrateRoot;/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rf(){return Rf=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Rf.apply(this,arguments)}var Ds;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Ds||(Ds={}));const kM="popstate";function Nk(n){n===void 0&&(n={});function e(i,r){let{pathname:a,search:o,hash:l}=i.location;return A_("",{pathname:a,search:o,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(i,r){return typeof r=="string"?r:Zp(r)}return Fk(e,t,null,n)}function Cn(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Ey(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ok(){return Math.random().toString(36).substr(2,8)}function zM(n,e){return{usr:n.state,key:n.key,idx:e}}function A_(n,e,t,i){return t===void 0&&(t=null),Rf({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Ju(e):e,{state:t,key:e&&e.key||i||Ok()})}function Zp(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ju(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function Fk(n,e,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:a=!1}=i,o=r.history,l=Ds.Pop,c=null,f=d();f==null&&(f=0,o.replaceState(Rf({},o.state,{idx:f}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=Ds.Pop;let _=d(),g=_==null?null:_-f;f=_,c&&c({action:l,location:x.location,delta:g})}function m(_,g){l=Ds.Push;let S=A_(x.location,_,g);t&&t(S,_),f=d()+1;let y=zM(S,f),w=x.createHref(S);try{o.pushState(y,"",w)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;r.location.assign(w)}a&&c&&c({action:l,location:x.location,delta:1})}function v(_,g){l=Ds.Replace;let S=A_(x.location,_,g);t&&t(S,_),f=d();let y=zM(S,f),w=x.createHref(S);o.replaceState(y,"",w),a&&c&&c({action:l,location:x.location,delta:0})}function M(_){let g=r.location.origin!=="null"?r.location.origin:r.location.href,S=typeof _=="string"?_:Zp(_);return Cn(g,"No window.location.(origin|href) available to create URL for href: "+S),new URL(S,g)}let x={get action(){return l},get location(){return n(r,o)},listen(_){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(kM,p),c=_,()=>{r.removeEventListener(kM,p),c=null}},createHref(_){return e(r,_)},createURL:M,encodeLocation(_){let g=M(_);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:v,go(_){return o.go(_)}};return x}var BM;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(BM||(BM={}));function kk(n,e,t){t===void 0&&(t="/");let i=typeof e=="string"?Ju(e):e,r=My(i.pathname||"/",t);if(r==null)return null;let a=D2(n);zk(a);let o=null;for(let l=0;o==null&&l<a.length;++l)o=$k(a[l],Zk(r));return o}function D2(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let r=(a,o,l)=>{let c={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};c.relativePath.startsWith("/")&&(Cn(c.relativePath.startsWith(i),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(i.length));let f=Ys([i,c.relativePath]),d=t.concat(c);a.children&&a.children.length>0&&(Cn(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),D2(a.children,e,d,f)),!(a.path==null&&!a.index)&&e.push({path:f,score:Yk(f,a.index),routesMeta:d})};return n.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))r(a,o);else for(let c of I2(a.path))r(a,o,c)}),e}function I2(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,r=t.endsWith("?"),a=t.replace(/\?$/,"");if(i.length===0)return r?[a,""]:[a];let o=I2(i.join("/")),l=[];return l.push(...o.map(c=>c===""?a:[a,c].join("/"))),r&&l.push(...o),l.map(c=>n.startsWith("/")&&c===""?"/":c)}function zk(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:jk(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const Bk=/^:[\w-]+$/,Hk=3,Gk=2,Wk=1,Vk=10,Xk=-2,HM=n=>n==="*";function Yk(n,e){let t=n.split("/"),i=t.length;return t.some(HM)&&(i+=Xk),e&&(i+=Gk),t.filter(r=>!HM(r)).reduce((r,a)=>r+(Bk.test(a)?Hk:a===""?Wk:Vk),i)}function jk(n,e){return n.length===e.length&&n.slice(0,-1).every((i,r)=>i===e[r])?n[n.length-1]-e[e.length-1]:0}function $k(n,e){let{routesMeta:t}=n,i={},r="/",a=[];for(let o=0;o<t.length;++o){let l=t[o],c=o===t.length-1,f=r==="/"?e:e.slice(r.length)||"/",d=qk({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f);if(!d)return null;Object.assign(i,d.params);let p=l.route;a.push({params:i,pathname:Ys([r,d.pathname]),pathnameBase:n4(Ys([r,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(r=Ys([r,d.pathnameBase]))}return a}function qk(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=Kk(n.path,n.caseSensitive,n.end),r=e.match(t);if(!r)return null;let a=r[0],o=a.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:i.reduce((f,d,p)=>{let{paramName:m,isOptional:v}=d;if(m==="*"){let x=l[p]||"";o=a.slice(0,a.length-x.length).replace(/(.)\/+$/,"$1")}const M=l[p];return v&&!M?f[m]=void 0:f[m]=Qk(M||"",m),f},{}),pathname:a,pathnameBase:o,pattern:n}}function Kk(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Ey(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(i.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function Zk(n){try{return decodeURI(n)}catch(e){return Ey(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Qk(n,e){try{return decodeURIComponent(n)}catch(t){return Ey(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+n+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),n}}function My(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function Jk(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:r=""}=typeof n=="string"?Ju(n):n;return{pathname:t?t.startsWith("/")?t:e4(t,e):e,search:i4(i),hash:r4(r)}}function e4(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function Dv(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function t4(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function U2(n,e){let t=t4(n);return e?t.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function N2(n,e,t,i){i===void 0&&(i=!1);let r;typeof n=="string"?r=Ju(n):(r=Rf({},n),Cn(!r.pathname||!r.pathname.includes("?"),Dv("?","pathname","search",r)),Cn(!r.pathname||!r.pathname.includes("#"),Dv("#","pathname","hash",r)),Cn(!r.search||!r.search.includes("#"),Dv("#","search","hash",r)));let a=n===""||r.pathname==="",o=a?"/":r.pathname,l;if(o==null)l=t;else{let p=e.length-1;if(!i&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;r.pathname=m.join("/")}l=p>=0?e[p]:"/"}let c=Jk(r,l),f=o&&o!=="/"&&o.endsWith("/"),d=(a||o===".")&&t.endsWith("/");return!c.pathname.endsWith("/")&&(f||d)&&(c.pathname+="/"),c}const Ys=n=>n.join("/").replace(/\/\/+/g,"/"),n4=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),i4=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,r4=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function a4(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const O2=["post","put","patch","delete"];new Set(O2);const s4=["get",...O2];new Set(s4);/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pf(){return Pf=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Pf.apply(this,arguments)}const wy=Te.createContext(null),o4=Te.createContext(null),ul=Te.createContext(null),Im=Te.createContext(null),cl=Te.createContext({outlet:null,matches:[],isDataRoute:!1}),F2=Te.createContext(null);function l4(n,e){let{relative:t}=e===void 0?{}:e;td()||Cn(!1);let{basename:i,navigator:r}=Te.useContext(ul),{hash:a,pathname:o,search:l}=z2(n,{relative:t}),c=o;return i!=="/"&&(c=o==="/"?i:Ys([i,o])),r.createHref({pathname:c,search:l,hash:a})}function td(){return Te.useContext(Im)!=null}function Um(){return td()||Cn(!1),Te.useContext(Im).location}function k2(n){Te.useContext(ul).static||Te.useLayoutEffect(n)}function u4(){let{isDataRoute:n}=Te.useContext(cl);return n?E4():c4()}function c4(){td()||Cn(!1);let n=Te.useContext(wy),{basename:e,future:t,navigator:i}=Te.useContext(ul),{matches:r}=Te.useContext(cl),{pathname:a}=Um(),o=JSON.stringify(U2(r,t.v7_relativeSplatPath)),l=Te.useRef(!1);return k2(()=>{l.current=!0}),Te.useCallback(function(f,d){if(d===void 0&&(d={}),!l.current)return;if(typeof f=="number"){i.go(f);return}let p=N2(f,JSON.parse(o),a,d.relative==="path");n==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Ys([e,p.pathname])),(d.replace?i.replace:i.push)(p,d.state,d)},[e,i,o,a,n])}function z2(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=Te.useContext(ul),{matches:r}=Te.useContext(cl),{pathname:a}=Um(),o=JSON.stringify(U2(r,i.v7_relativeSplatPath));return Te.useMemo(()=>N2(n,JSON.parse(o),a,t==="path"),[n,o,a,t])}function f4(n,e){return d4(n,e)}function d4(n,e,t,i){td()||Cn(!1);let{navigator:r}=Te.useContext(ul),{matches:a}=Te.useContext(cl),o=a[a.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let f=Um(),d;if(e){var p;let _=typeof e=="string"?Ju(e):e;c==="/"||(p=_.pathname)!=null&&p.startsWith(c)||Cn(!1),d=_}else d=f;let m=d.pathname||"/",v=c==="/"?m:m.slice(c.length)||"/",M=kk(n,{pathname:v}),x=v4(M&&M.map(_=>Object.assign({},_,{params:Object.assign({},l,_.params),pathname:Ys([c,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?c:Ys([c,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),a,t,i);return e&&x?Te.createElement(Im.Provider,{value:{location:Pf({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Ds.Pop}},x):x}function h4(){let n=S4(),e=a4(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Te.createElement(Te.Fragment,null,Te.createElement("h2",null,"Unexpected Application Error!"),Te.createElement("h3",{style:{fontStyle:"italic"}},e),t?Te.createElement("pre",{style:r},t):null,null)}const p4=Te.createElement(h4,null);class m4 extends Te.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Te.createElement(cl.Provider,{value:this.props.routeContext},Te.createElement(F2.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function g4(n){let{routeContext:e,match:t,children:i}=n,r=Te.useContext(wy);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),Te.createElement(cl.Provider,{value:e},i)}function v4(n,e,t,i){var r;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var a;if((a=t)!=null&&a.errors)n=t.matches;else return null}let o=n,l=(r=t)==null?void 0:r.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id]));d>=0||Cn(!1),o=o.slice(0,Math.min(o.length,d+1))}let c=!1,f=-1;if(t&&i&&i.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(f=d),p.route.id){let{loaderData:m,errors:v}=t,M=p.route.loader&&m[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||M){c=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let v,M=!1,x=null,_=null;t&&(v=l&&p.route.id?l[p.route.id]:void 0,x=p.route.errorElement||p4,c&&(f<0&&m===0?(M4("route-fallback",!1),M=!0,_=null):f===m&&(M=!0,_=p.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,m+1)),S=()=>{let y;return v?y=x:M?y=_:p.route.Component?y=Te.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=d,Te.createElement(g4,{match:p,routeContext:{outlet:d,matches:g,isDataRoute:t!=null},children:y})};return t&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?Te.createElement(m4,{location:t.location,revalidation:t.revalidation,component:x,error:v,children:S(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):S()},null)}var B2=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(B2||{}),Qp=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Qp||{});function _4(n){let e=Te.useContext(wy);return e||Cn(!1),e}function x4(n){let e=Te.useContext(o4);return e||Cn(!1),e}function y4(n){let e=Te.useContext(cl);return e||Cn(!1),e}function H2(n){let e=y4(),t=e.matches[e.matches.length-1];return t.route.id||Cn(!1),t.route.id}function S4(){var n;let e=Te.useContext(F2),t=x4(Qp.UseRouteError),i=H2(Qp.UseRouteError);return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function E4(){let{router:n}=_4(B2.UseNavigateStable),e=H2(Qp.UseNavigateStable),t=Te.useRef(!1);return k2(()=>{t.current=!0}),Te.useCallback(function(r,a){a===void 0&&(a={}),t.current&&(typeof r=="number"?n.navigate(r):n.navigate(r,Pf({fromRouteId:e},a)))},[n,e])}const GM={};function M4(n,e,t){!e&&!GM[n]&&(GM[n]=!0)}function Ro(n){Cn(!1)}function w4(n){let{basename:e="/",children:t=null,location:i,navigationType:r=Ds.Pop,navigator:a,static:o=!1,future:l}=n;td()&&Cn(!1);let c=e.replace(/^\/*/,"/"),f=Te.useMemo(()=>({basename:c,navigator:a,static:o,future:Pf({v7_relativeSplatPath:!1},l)}),[c,l,a,o]);typeof i=="string"&&(i=Ju(i));let{pathname:d="/",search:p="",hash:m="",state:v=null,key:M="default"}=i,x=Te.useMemo(()=>{let _=My(d,c);return _==null?null:{location:{pathname:_,search:p,hash:m,state:v,key:M},navigationType:r}},[c,d,p,m,v,M,r]);return x==null?null:Te.createElement(ul.Provider,{value:f},Te.createElement(Im.Provider,{children:t,value:x}))}function T4(n){let{children:e,location:t}=n;return f4(C_(e),t)}new Promise(()=>{});function C_(n,e){e===void 0&&(e=[]);let t=[];return Te.Children.forEach(n,(i,r)=>{if(!Te.isValidElement(i))return;let a=[...e,r];if(i.type===Te.Fragment){t.push.apply(t,C_(i.props.children,a));return}i.type!==Ro&&Cn(!1),!i.props.index||!i.props.children||Cn(!1);let o={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=C_(i.props.children,a)),t.push(o)}),t}/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function R_(){return R_=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},R_.apply(this,arguments)}function b4(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function A4(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function C4(n,e){return n.button===0&&(!e||e==="_self")&&!A4(n)}const R4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],P4="startTransition",WM=wO[P4];function L4(n){let{basename:e,children:t,future:i,window:r}=n,a=Te.useRef();a.current==null&&(a.current=Nk({window:r,v5Compat:!0}));let o=a.current,[l,c]=Te.useState({action:o.action,location:o.location}),{v7_startTransition:f}=i||{},d=Te.useCallback(p=>{f&&WM?WM(()=>c(p)):c(p)},[c,f]);return Te.useLayoutEffect(()=>o.listen(d),[o,d]),Te.createElement(w4,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:o,future:i})}const D4=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",I4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ma=Te.forwardRef(function(e,t){let{onClick:i,relative:r,reloadDocument:a,replace:o,state:l,target:c,to:f,preventScrollReset:d,unstable_viewTransition:p}=e,m=b4(e,R4),{basename:v}=Te.useContext(ul),M,x=!1;if(typeof f=="string"&&I4.test(f)&&(M=f,D4))try{let y=new URL(window.location.href),w=f.startsWith("//")?new URL(y.protocol+f):new URL(f),A=My(w.pathname,v);w.origin===y.origin&&A!=null?f=A+w.search+w.hash:x=!0}catch{}let _=l4(f,{relative:r}),g=U4(f,{replace:o,state:l,target:c,preventScrollReset:d,relative:r,unstable_viewTransition:p});function S(y){i&&i(y),y.defaultPrevented||g(y)}return Te.createElement("a",R_({},m,{href:M||_,onClick:x||a?i:S,ref:t,target:c}))});var VM;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(VM||(VM={}));var XM;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(XM||(XM={}));function U4(n,e){let{target:t,replace:i,state:r,preventScrollReset:a,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,c=u4(),f=Um(),d=z2(n,{relative:o});return Te.useCallback(p=>{if(C4(p,t)){p.preventDefault();let m=i!==void 0?i:Zp(f)===Zp(d);c(n,{replace:m,state:r,preventScrollReset:a,relative:o,unstable_viewTransition:l})}},[f,c,d,i,r,t,n,a,o,l])}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ty="160",N4=0,YM=1,O4=2,G2=1,F4=2,Ba=3,eo=0,Fi=1,tr=2,js=0,Au=1,P_=2,jM=3,$M=4,k4=5,Io=100,z4=101,B4=102,qM=103,KM=104,H4=200,G4=201,W4=202,V4=203,L_=204,D_=205,X4=206,Y4=207,j4=208,$4=209,q4=210,K4=211,Z4=212,Q4=213,J4=214,ez=0,tz=1,nz=2,Jp=3,iz=4,rz=5,az=6,sz=7,W2=0,oz=1,lz=2,$s=0,uz=1,cz=2,fz=3,dz=4,hz=5,pz=6,ZM="attached",mz="detached",V2=300,Bu=301,Hu=302,I_=303,U_=304,Nm=306,Lf=1e3,Zr=1001,N_=1002,Un=1003,QM=1004,Iv=1005,er=1006,gz=1007,Df=1008,qs=1009,vz=1010,_z=1011,by=1012,X2=1013,Is=1014,va=1015,If=1016,Y2=1017,j2=1018,Vo=1020,xz=1021,nr=1023,yz=1024,Sz=1025,Xo=1026,Gu=1027,Ez=1028,$2=1029,Mz=1030,q2=1031,K2=1033,Uv=33776,Nv=33777,Ov=33778,Fv=33779,JM=35840,ew=35841,tw=35842,nw=35843,Z2=36196,iw=37492,rw=37496,aw=37808,sw=37809,ow=37810,lw=37811,uw=37812,cw=37813,fw=37814,dw=37815,hw=37816,pw=37817,mw=37818,gw=37819,vw=37820,_w=37821,kv=36492,xw=36494,yw=36495,wz=36283,Sw=36284,Ew=36285,Mw=36286,Q2=3e3,Yo=3001,Tz=3200,bz=3201,Az=0,Cz=1,Rr="",Zn="srgb",Ja="srgb-linear",Ay="display-p3",Om="display-p3-linear",em="linear",Kt="srgb",tm="rec709",nm="p3",Nl=7680,ww=519,Rz=512,Pz=513,Lz=514,J2=515,Dz=516,Iz=517,Uz=518,Nz=519,Tw=35044,bw="300 es",O_=1035,ja=2e3,im=2001;class ec{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Aw=1234567;const rf=Math.PI/180,Uf=180/Math.PI;function fl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(si[n&255]+si[n>>8&255]+si[n>>16&255]+si[n>>24&255]+"-"+si[e&255]+si[e>>8&255]+"-"+si[e>>16&15|64]+si[e>>24&255]+"-"+si[t&63|128]+si[t>>8&255]+"-"+si[t>>16&255]+si[t>>24&255]+si[i&255]+si[i>>8&255]+si[i>>16&255]+si[i>>24&255]).toLowerCase()}function xi(n,e,t){return Math.max(e,Math.min(t,n))}function Cy(n,e){return(n%e+e)%e}function Oz(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Fz(n,e,t){return n!==e?(t-n)/(e-n):0}function af(n,e,t){return(1-t)*n+t*e}function kz(n,e,t,i){return af(n,e,1-Math.exp(-t*i))}function zz(n,e=1){return e-Math.abs(Cy(n,e*2)-e)}function Bz(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Hz(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Gz(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Wz(n,e){return n+Math.random()*(e-n)}function Vz(n){return n*(.5-Math.random())}function Xz(n){n!==void 0&&(Aw=n);let e=Aw+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yz(n){return n*rf}function jz(n){return n*Uf}function F_(n){return(n&n-1)===0&&n!==0}function $z(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function rm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qz(n,e,t,i,r){const a=Math.cos,o=Math.sin,l=a(t/2),c=o(t/2),f=a((e+i)/2),d=o((e+i)/2),p=a((e-i)/2),m=o((e-i)/2),v=a((i-e)/2),M=o((i-e)/2);switch(r){case"XYX":n.set(l*d,c*p,c*m,l*f);break;case"YZY":n.set(c*m,l*d,c*p,l*f);break;case"ZXZ":n.set(c*p,c*m,l*d,l*f);break;case"XZX":n.set(l*d,c*M,c*v,l*f);break;case"YXY":n.set(c*v,l*d,c*M,l*f);break;case"ZYZ":n.set(c*M,c*v,l*d,l*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function tu(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const eC={DEG2RAD:rf,RAD2DEG:Uf,generateUUID:fl,clamp:xi,euclideanModulo:Cy,mapLinear:Oz,inverseLerp:Fz,lerp:af,damp:kz,pingpong:zz,smoothstep:Bz,smootherstep:Hz,randInt:Gz,randFloat:Wz,randFloatSpread:Vz,seededRandom:Xz,degToRad:Yz,radToDeg:jz,isPowerOfTwo:F_,ceilPowerOfTwo:$z,floorPowerOfTwo:rm,setQuaternionFromProperEuler:qz,normalize:gi,denormalize:tu};class st{constructor(e=0,t=0){st.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xi(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yt{constructor(e,t,i,r,a,o,l,c,f){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,l,c,f)}set(e,t,i,r,a,o,l,c,f){const d=this.elements;return d[0]=e,d[1]=r,d[2]=l,d[3]=t,d[4]=a,d[5]=c,d[6]=i,d[7]=o,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],l=i[3],c=i[6],f=i[1],d=i[4],p=i[7],m=i[2],v=i[5],M=i[8],x=r[0],_=r[3],g=r[6],S=r[1],y=r[4],w=r[7],A=r[2],R=r[5],P=r[8];return a[0]=o*x+l*S+c*A,a[3]=o*_+l*y+c*R,a[6]=o*g+l*w+c*P,a[1]=f*x+d*S+p*A,a[4]=f*_+d*y+p*R,a[7]=f*g+d*w+p*P,a[2]=m*x+v*S+M*A,a[5]=m*_+v*y+M*R,a[8]=m*g+v*w+M*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],f=e[7],d=e[8];return t*o*d-t*l*f-i*a*d+i*l*c+r*a*f-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],f=e[7],d=e[8],p=d*o-l*f,m=l*c-d*a,v=f*a-o*c,M=t*p+i*m+r*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/M;return e[0]=p*x,e[1]=(r*f-d*i)*x,e[2]=(l*i-r*o)*x,e[3]=m*x,e[4]=(d*t-r*c)*x,e[5]=(r*a-l*t)*x,e[6]=v*x,e[7]=(i*c-f*t)*x,e[8]=(o*t-i*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,o,l){const c=Math.cos(a),f=Math.sin(a);return this.set(i*c,i*f,-i*(c*o+f*l)+o+e,-r*f,r*c,-r*(-f*o+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(zv.makeScale(e,t)),this}rotate(e){return this.premultiply(zv.makeRotation(-e)),this}translate(e,t){return this.premultiply(zv.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zv=new yt;function tC(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Nf(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kz(){const n=Nf("canvas");return n.style.display="block",n}const Cw={};function sf(n){n in Cw||(Cw[n]=!0,console.warn(n))}const Rw=new yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pw=new yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vh={[Ja]:{transfer:em,primaries:tm,toReference:n=>n,fromReference:n=>n},[Zn]:{transfer:Kt,primaries:tm,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Om]:{transfer:em,primaries:nm,toReference:n=>n.applyMatrix3(Pw),fromReference:n=>n.applyMatrix3(Rw)},[Ay]:{transfer:Kt,primaries:nm,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Pw),fromReference:n=>n.applyMatrix3(Rw).convertLinearToSRGB()}},Zz=new Set([Ja,Om]),zt={enabled:!0,_workingColorSpace:Ja,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Zz.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=vh[e].toReference,r=vh[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return vh[n].primaries},getTransfer:function(n){return n===Rr?em:vh[n].transfer}};function Cu(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bv(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ol;class nC{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ol===void 0&&(Ol=Nf("canvas")),Ol.width=e.width,Ol.height=e.height;const i=Ol.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ol}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nf("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=Cu(a[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Cu(t[i]/255)*255):t[i]=Cu(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qz=0;class iC{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qz++}),this.uuid=fl(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?a.push(Hv(r[o].image)):a.push(Hv(r[o]))}else a=Hv(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Hv(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jz=0;class Mi extends ec{constructor(e=Mi.DEFAULT_IMAGE,t=Mi.DEFAULT_MAPPING,i=Zr,r=Zr,a=er,o=Df,l=nr,c=qs,f=Mi.DEFAULT_ANISOTROPY,d=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jz++}),this.uuid=fl(),this.name="",this.source=new iC(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=f,this.format=l,this.internalFormat=null,this.type=c,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(sf("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Yo?Zn:Rr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==V2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lf:e.x=e.x-Math.floor(e.x);break;case Zr:e.x=e.x<0?0:1;break;case N_:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lf:e.y=e.y-Math.floor(e.y);break;case Zr:e.y=e.y<0?0:1;break;case N_:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return sf("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Zn?Yo:Q2}set encoding(e){sf("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Yo?Zn:Rr}}Mi.DEFAULT_IMAGE=null;Mi.DEFAULT_MAPPING=V2;Mi.DEFAULT_ANISOTROPY=1;class An{constructor(e=0,t=0,i=0,r=1){An.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const c=e.elements,f=c[0],d=c[4],p=c[8],m=c[1],v=c[5],M=c[9],x=c[2],_=c[6],g=c[10];if(Math.abs(d-m)<.01&&Math.abs(p-x)<.01&&Math.abs(M-_)<.01){if(Math.abs(d+m)<.1&&Math.abs(p+x)<.1&&Math.abs(M+_)<.1&&Math.abs(f+v+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(f+1)/2,w=(v+1)/2,A=(g+1)/2,R=(d+m)/4,P=(p+x)/4,N=(M+_)/4;return y>w&&y>A?y<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(y),r=R/i,a=P/i):w>A?w<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(w),i=R/r,a=N/r):A<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(A),i=P/a,r=N/a),this.set(i,r,a,t),this}let S=Math.sqrt((_-M)*(_-M)+(p-x)*(p-x)+(m-d)*(m-d));return Math.abs(S)<.001&&(S=1),this.x=(_-M)/S,this.y=(p-x)/S,this.z=(m-d)/S,this.w=Math.acos((f+v+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eB extends ec{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new An(0,0,e,t),this.scissorTest=!1,this.viewport=new An(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(sf("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Yo?Zn:Rr),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:er,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Mi(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new iC(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ma extends eB{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class rC extends Mi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tB extends Mi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nl{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,o,l){let c=i[r+0],f=i[r+1],d=i[r+2],p=i[r+3];const m=a[o+0],v=a[o+1],M=a[o+2],x=a[o+3];if(l===0){e[t+0]=c,e[t+1]=f,e[t+2]=d,e[t+3]=p;return}if(l===1){e[t+0]=m,e[t+1]=v,e[t+2]=M,e[t+3]=x;return}if(p!==x||c!==m||f!==v||d!==M){let _=1-l;const g=c*m+f*v+d*M+p*x,S=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const A=Math.sqrt(y),R=Math.atan2(A,g*S);_=Math.sin(_*R)/A,l=Math.sin(l*R)/A}const w=l*S;if(c=c*_+m*w,f=f*_+v*w,d=d*_+M*w,p=p*_+x*w,_===1-l){const A=1/Math.sqrt(c*c+f*f+d*d+p*p);c*=A,f*=A,d*=A,p*=A}}e[t]=c,e[t+1]=f,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,a,o){const l=i[r],c=i[r+1],f=i[r+2],d=i[r+3],p=a[o],m=a[o+1],v=a[o+2],M=a[o+3];return e[t]=l*M+d*p+c*v-f*m,e[t+1]=c*M+d*m+f*p-l*v,e[t+2]=f*M+d*v+l*m-c*p,e[t+3]=d*M-l*p-c*m-f*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,o=e._order,l=Math.cos,c=Math.sin,f=l(i/2),d=l(r/2),p=l(a/2),m=c(i/2),v=c(r/2),M=c(a/2);switch(o){case"XYZ":this._x=m*d*p+f*v*M,this._y=f*v*p-m*d*M,this._z=f*d*M+m*v*p,this._w=f*d*p-m*v*M;break;case"YXZ":this._x=m*d*p+f*v*M,this._y=f*v*p-m*d*M,this._z=f*d*M-m*v*p,this._w=f*d*p+m*v*M;break;case"ZXY":this._x=m*d*p-f*v*M,this._y=f*v*p+m*d*M,this._z=f*d*M+m*v*p,this._w=f*d*p-m*v*M;break;case"ZYX":this._x=m*d*p-f*v*M,this._y=f*v*p+m*d*M,this._z=f*d*M-m*v*p,this._w=f*d*p+m*v*M;break;case"YZX":this._x=m*d*p+f*v*M,this._y=f*v*p+m*d*M,this._z=f*d*M-m*v*p,this._w=f*d*p-m*v*M;break;case"XZY":this._x=m*d*p-f*v*M,this._y=f*v*p-m*d*M,this._z=f*d*M+m*v*p,this._w=f*d*p+m*v*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],o=t[1],l=t[5],c=t[9],f=t[2],d=t[6],p=t[10],m=i+l+p;if(m>0){const v=.5/Math.sqrt(m+1);this._w=.25/v,this._x=(d-c)*v,this._y=(a-f)*v,this._z=(o-r)*v}else if(i>l&&i>p){const v=2*Math.sqrt(1+i-l-p);this._w=(d-c)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(a+f)/v}else if(l>p){const v=2*Math.sqrt(1+l-i-p);this._w=(a-f)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(c+d)/v}else{const v=2*Math.sqrt(1+p-i-l);this._w=(o-r)/v,this._x=(a+f)/v,this._y=(c+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xi(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,o=e._w,l=t._x,c=t._y,f=t._z,d=t._w;return this._x=i*d+o*l+r*f-a*c,this._y=r*d+o*c+a*l-i*f,this._z=a*d+o*f+i*c-r*l,this._w=o*d-i*l-r*c-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let l=o*e._w+i*e._x+r*e._y+a*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const c=1-l*l;if(c<=Number.EPSILON){const v=1-t;return this._w=v*o+t*this._w,this._x=v*i+t*this._x,this._y=v*r+t*this._y,this._z=v*a+t*this._z,this.normalize(),this}const f=Math.sqrt(c),d=Math.atan2(f,l),p=Math.sin((1-t)*d)/f,m=Math.sin(t*d)/f;return this._w=o*p+this._w*m,this._x=i*p+this._x*m,this._y=r*p+this._y*m,this._z=a*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lw.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lw.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,o=e.y,l=e.z,c=e.w,f=2*(o*r-l*i),d=2*(l*t-a*r),p=2*(a*i-o*t);return this.x=t+c*f+o*p-l*d,this.y=i+c*d+l*f-a*p,this.z=r+c*p+a*d-o*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,o=t.x,l=t.y,c=t.z;return this.x=r*c-a*l,this.y=a*o-i*c,this.z=i*l-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gv.copy(this).projectOnVector(e),this.sub(Gv)}reflect(e){return this.sub(Gv.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xi(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gv=new j,Lw=new nl;class uo{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=a.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,Vr):Vr.fromBufferAttribute(a,o),Vr.applyMatrix4(e.matrixWorld),this.expandByPoint(Vr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_h.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_h.copy(i.boundingBox)),_h.applyMatrix4(e.matrixWorld),this.union(_h)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vr),Vr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pc),xh.subVectors(this.max,Pc),Fl.subVectors(e.a,Pc),kl.subVectors(e.b,Pc),zl.subVectors(e.c,Pc),_s.subVectors(kl,Fl),xs.subVectors(zl,kl),So.subVectors(Fl,zl);let t=[0,-_s.z,_s.y,0,-xs.z,xs.y,0,-So.z,So.y,_s.z,0,-_s.x,xs.z,0,-xs.x,So.z,0,-So.x,-_s.y,_s.x,0,-xs.y,xs.x,0,-So.y,So.x,0];return!Wv(t,Fl,kl,zl,xh)||(t=[1,0,0,0,1,0,0,0,1],!Wv(t,Fl,kl,zl,xh))?!1:(yh.crossVectors(_s,xs),t=[yh.x,yh.y,yh.z],Wv(t,Fl,kl,zl,xh))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Na),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Na=[new j,new j,new j,new j,new j,new j,new j,new j],Vr=new j,_h=new uo,Fl=new j,kl=new j,zl=new j,_s=new j,xs=new j,So=new j,Pc=new j,xh=new j,yh=new j,Eo=new j;function Wv(n,e,t,i,r){for(let a=0,o=n.length-3;a<=o;a+=3){Eo.fromArray(n,a);const l=r.x*Math.abs(Eo.x)+r.y*Math.abs(Eo.y)+r.z*Math.abs(Eo.z),c=e.dot(Eo),f=t.dot(Eo),d=i.dot(Eo);if(Math.max(-Math.max(c,f,d),Math.min(c,f,d))>l)return!1}return!0}const nB=new uo,Lc=new j,Vv=new j;class dl{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):nB.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lc.subVectors(e,this.center);const t=Lc.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Lc,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vv.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lc.copy(e.center).add(Vv)),this.expandByPoint(Lc.copy(e.center).sub(Vv))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oa=new j,Xv=new j,Sh=new j,ys=new j,Yv=new j,Eh=new j,jv=new j;class Ry{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oa)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oa.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oa.copy(this.origin).addScaledVector(this.direction,t),Oa.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Xv.copy(e).add(t).multiplyScalar(.5),Sh.copy(t).sub(e).normalize(),ys.copy(this.origin).sub(Xv);const a=e.distanceTo(t)*.5,o=-this.direction.dot(Sh),l=ys.dot(this.direction),c=-ys.dot(Sh),f=ys.lengthSq(),d=Math.abs(1-o*o);let p,m,v,M;if(d>0)if(p=o*c-l,m=o*l-c,M=a*d,p>=0)if(m>=-M)if(m<=M){const x=1/d;p*=x,m*=x,v=p*(p+o*m+2*l)+m*(o*p+m+2*c)+f}else m=a,p=Math.max(0,-(o*m+l)),v=-p*p+m*(m+2*c)+f;else m=-a,p=Math.max(0,-(o*m+l)),v=-p*p+m*(m+2*c)+f;else m<=-M?(p=Math.max(0,-(-o*a+l)),m=p>0?-a:Math.min(Math.max(-a,-c),a),v=-p*p+m*(m+2*c)+f):m<=M?(p=0,m=Math.min(Math.max(-a,-c),a),v=m*(m+2*c)+f):(p=Math.max(0,-(o*a+l)),m=p>0?a:Math.min(Math.max(-a,-c),a),v=-p*p+m*(m+2*c)+f);else m=o>0?-a:a,p=Math.max(0,-(o*m+l)),v=-p*p+m*(m+2*c)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Xv).addScaledVector(Sh,m),v}intersectSphere(e,t){Oa.subVectors(e.center,this.origin);const i=Oa.dot(this.direction),r=Oa.dot(Oa)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),l=i-o,c=i+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,o,l,c;const f=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,m=this.origin;return f>=0?(i=(e.min.x-m.x)*f,r=(e.max.x-m.x)*f):(i=(e.max.x-m.x)*f,r=(e.min.x-m.x)*f),d>=0?(a=(e.min.y-m.y)*d,o=(e.max.y-m.y)*d):(a=(e.max.y-m.y)*d,o=(e.min.y-m.y)*d),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),p>=0?(l=(e.min.z-m.z)*p,c=(e.max.z-m.z)*p):(l=(e.max.z-m.z)*p,c=(e.min.z-m.z)*p),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Oa)!==null}intersectTriangle(e,t,i,r,a){Yv.subVectors(t,e),Eh.subVectors(i,e),jv.crossVectors(Yv,Eh);let o=this.direction.dot(jv),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;ys.subVectors(this.origin,e);const c=l*this.direction.dot(Eh.crossVectors(ys,Eh));if(c<0)return null;const f=l*this.direction.dot(Yv.cross(ys));if(f<0||c+f>o)return null;const d=-l*ys.dot(jv);return d<0?null:this.at(d/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,t,i,r,a,o,l,c,f,d,p,m,v,M,x,_){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,l,c,f,d,p,m,v,M,x,_)}set(e,t,i,r,a,o,l,c,f,d,p,m,v,M,x,_){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=a,g[5]=o,g[9]=l,g[13]=c,g[2]=f,g[6]=d,g[10]=p,g[14]=m,g[3]=v,g[7]=M,g[11]=x,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Bl.setFromMatrixColumn(e,0).length(),a=1/Bl.setFromMatrixColumn(e,1).length(),o=1/Bl.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),f=Math.sin(r),d=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const m=o*d,v=o*p,M=l*d,x=l*p;t[0]=c*d,t[4]=-c*p,t[8]=f,t[1]=v+M*f,t[5]=m-x*f,t[9]=-l*c,t[2]=x-m*f,t[6]=M+v*f,t[10]=o*c}else if(e.order==="YXZ"){const m=c*d,v=c*p,M=f*d,x=f*p;t[0]=m+x*l,t[4]=M*l-v,t[8]=o*f,t[1]=o*p,t[5]=o*d,t[9]=-l,t[2]=v*l-M,t[6]=x+m*l,t[10]=o*c}else if(e.order==="ZXY"){const m=c*d,v=c*p,M=f*d,x=f*p;t[0]=m-x*l,t[4]=-o*p,t[8]=M+v*l,t[1]=v+M*l,t[5]=o*d,t[9]=x-m*l,t[2]=-o*f,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){const m=o*d,v=o*p,M=l*d,x=l*p;t[0]=c*d,t[4]=M*f-v,t[8]=m*f+x,t[1]=c*p,t[5]=x*f+m,t[9]=v*f-M,t[2]=-f,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){const m=o*c,v=o*f,M=l*c,x=l*f;t[0]=c*d,t[4]=x-m*p,t[8]=M*p+v,t[1]=p,t[5]=o*d,t[9]=-l*d,t[2]=-f*d,t[6]=v*p+M,t[10]=m-x*p}else if(e.order==="XZY"){const m=o*c,v=o*f,M=l*c,x=l*f;t[0]=c*d,t[4]=-p,t[8]=f*d,t[1]=m*p+x,t[5]=o*d,t[9]=v*p-M,t[2]=M*p-v,t[6]=l*d,t[10]=x*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iB,e,rB)}lookAt(e,t,i){const r=this.elements;return Ki.subVectors(e,t),Ki.lengthSq()===0&&(Ki.z=1),Ki.normalize(),Ss.crossVectors(i,Ki),Ss.lengthSq()===0&&(Math.abs(i.z)===1?Ki.x+=1e-4:Ki.z+=1e-4,Ki.normalize(),Ss.crossVectors(i,Ki)),Ss.normalize(),Mh.crossVectors(Ki,Ss),r[0]=Ss.x,r[4]=Mh.x,r[8]=Ki.x,r[1]=Ss.y,r[5]=Mh.y,r[9]=Ki.y,r[2]=Ss.z,r[6]=Mh.z,r[10]=Ki.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],l=i[4],c=i[8],f=i[12],d=i[1],p=i[5],m=i[9],v=i[13],M=i[2],x=i[6],_=i[10],g=i[14],S=i[3],y=i[7],w=i[11],A=i[15],R=r[0],P=r[4],N=r[8],T=r[12],C=r[1],G=r[5],X=r[9],ae=r[13],k=r[2],Y=r[6],K=r[10],se=r[14],H=r[3],Z=r[7],Q=r[11],le=r[15];return a[0]=o*R+l*C+c*k+f*H,a[4]=o*P+l*G+c*Y+f*Z,a[8]=o*N+l*X+c*K+f*Q,a[12]=o*T+l*ae+c*se+f*le,a[1]=d*R+p*C+m*k+v*H,a[5]=d*P+p*G+m*Y+v*Z,a[9]=d*N+p*X+m*K+v*Q,a[13]=d*T+p*ae+m*se+v*le,a[2]=M*R+x*C+_*k+g*H,a[6]=M*P+x*G+_*Y+g*Z,a[10]=M*N+x*X+_*K+g*Q,a[14]=M*T+x*ae+_*se+g*le,a[3]=S*R+y*C+w*k+A*H,a[7]=S*P+y*G+w*Y+A*Z,a[11]=S*N+y*X+w*K+A*Q,a[15]=S*T+y*ae+w*se+A*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],o=e[1],l=e[5],c=e[9],f=e[13],d=e[2],p=e[6],m=e[10],v=e[14],M=e[3],x=e[7],_=e[11],g=e[15];return M*(+a*c*p-r*f*p-a*l*m+i*f*m+r*l*v-i*c*v)+x*(+t*c*v-t*f*m+a*o*m-r*o*v+r*f*d-a*c*d)+_*(+t*f*p-t*l*v-a*o*p+i*o*v+a*l*d-i*f*d)+g*(-r*l*d-t*c*p+t*l*m+r*o*p-i*o*m+i*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],f=e[7],d=e[8],p=e[9],m=e[10],v=e[11],M=e[12],x=e[13],_=e[14],g=e[15],S=p*_*f-x*m*f+x*c*v-l*_*v-p*c*g+l*m*g,y=M*m*f-d*_*f-M*c*v+o*_*v+d*c*g-o*m*g,w=d*x*f-M*p*f+M*l*v-o*x*v-d*l*g+o*p*g,A=M*p*c-d*x*c-M*l*m+o*x*m+d*l*_-o*p*_,R=t*S+i*y+r*w+a*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=S*P,e[1]=(x*m*a-p*_*a-x*r*v+i*_*v+p*r*g-i*m*g)*P,e[2]=(l*_*a-x*c*a+x*r*f-i*_*f-l*r*g+i*c*g)*P,e[3]=(p*c*a-l*m*a-p*r*f+i*m*f+l*r*v-i*c*v)*P,e[4]=y*P,e[5]=(d*_*a-M*m*a+M*r*v-t*_*v-d*r*g+t*m*g)*P,e[6]=(M*c*a-o*_*a-M*r*f+t*_*f+o*r*g-t*c*g)*P,e[7]=(o*m*a-d*c*a+d*r*f-t*m*f-o*r*v+t*c*v)*P,e[8]=w*P,e[9]=(M*p*a-d*x*a-M*i*v+t*x*v+d*i*g-t*p*g)*P,e[10]=(o*x*a-M*l*a+M*i*f-t*x*f-o*i*g+t*l*g)*P,e[11]=(d*l*a-o*p*a-d*i*f+t*p*f+o*i*v-t*l*v)*P,e[12]=A*P,e[13]=(d*x*r-M*p*r+M*i*m-t*x*m-d*i*_+t*p*_)*P,e[14]=(M*l*r-o*x*r-M*i*c+t*x*c+o*i*_-t*l*_)*P,e[15]=(o*p*r-d*l*r+d*i*c-t*p*c-o*i*m+t*l*m)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,o=e.x,l=e.y,c=e.z,f=a*o,d=a*l;return this.set(f*o+i,f*l-r*c,f*c+r*l,0,f*l+r*c,d*l+i,d*c-r*o,0,f*c-r*l,d*c+r*o,a*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,o=t._y,l=t._z,c=t._w,f=a+a,d=o+o,p=l+l,m=a*f,v=a*d,M=a*p,x=o*d,_=o*p,g=l*p,S=c*f,y=c*d,w=c*p,A=i.x,R=i.y,P=i.z;return r[0]=(1-(x+g))*A,r[1]=(v+w)*A,r[2]=(M-y)*A,r[3]=0,r[4]=(v-w)*R,r[5]=(1-(m+g))*R,r[6]=(_+S)*R,r[7]=0,r[8]=(M+y)*P,r[9]=(_-S)*P,r[10]=(1-(m+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=Bl.set(r[0],r[1],r[2]).length();const o=Bl.set(r[4],r[5],r[6]).length(),l=Bl.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Xr.copy(this);const f=1/a,d=1/o,p=1/l;return Xr.elements[0]*=f,Xr.elements[1]*=f,Xr.elements[2]*=f,Xr.elements[4]*=d,Xr.elements[5]*=d,Xr.elements[6]*=d,Xr.elements[8]*=p,Xr.elements[9]*=p,Xr.elements[10]*=p,t.setFromRotationMatrix(Xr),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,a,o,l=ja){const c=this.elements,f=2*a/(t-e),d=2*a/(i-r),p=(t+e)/(t-e),m=(i+r)/(i-r);let v,M;if(l===ja)v=-(o+a)/(o-a),M=-2*o*a/(o-a);else if(l===im)v=-o/(o-a),M=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=f,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,a,o,l=ja){const c=this.elements,f=1/(t-e),d=1/(i-r),p=1/(o-a),m=(t+e)*f,v=(i+r)*d;let M,x;if(l===ja)M=(o+a)*p,x=-2*p;else if(l===im)M=a*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*f,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=x,c[14]=-M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Bl=new j,Xr=new Ot,iB=new j(0,0,0),rB=new j(1,1,1),Ss=new j,Mh=new j,Ki=new j,Dw=new Ot,Iw=new nl;class Fm{constructor(e=0,t=0,i=0,r=Fm.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],l=r[8],c=r[1],f=r[5],d=r[9],p=r[2],m=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(xi(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-xi(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,v),this._z=Math.atan2(c,f)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(xi(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,v),this._z=Math.atan2(-o,f)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-xi(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,v),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,f));break;case"YZX":this._z=Math.asin(xi(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(l,v));break;case"XZY":this._z=Math.asin(-xi(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Dw.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dw,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Iw.setFromEuler(this),this.setFromQuaternion(Iw,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fm.DEFAULT_ORDER="XYZ";let Py=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},aB=0;const Uw=new j,Hl=new nl,Fa=new Ot,wh=new j,Dc=new j,sB=new j,oB=new nl,Nw=new j(1,0,0),Ow=new j(0,1,0),Fw=new j(0,0,1),lB={type:"added"},uB={type:"removed"};class ki extends ec{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aB++}),this.uuid=fl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ki.DEFAULT_UP.clone();const e=new j,t=new Fm,i=new nl,r=new j(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new yt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=ki.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ki.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Py,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hl.setFromAxisAngle(e,t),this.quaternion.multiply(Hl),this}rotateOnWorldAxis(e,t){return Hl.setFromAxisAngle(e,t),this.quaternion.premultiply(Hl),this}rotateX(e){return this.rotateOnAxis(Nw,e)}rotateY(e){return this.rotateOnAxis(Ow,e)}rotateZ(e){return this.rotateOnAxis(Fw,e)}translateOnAxis(e,t){return Uw.copy(e).applyQuaternion(this.quaternion),this.position.add(Uw.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nw,e)}translateY(e){return this.translateOnAxis(Ow,e)}translateZ(e){return this.translateOnAxis(Fw,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fa.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wh.copy(e):wh.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Dc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fa.lookAt(Dc,wh,this.up):Fa.lookAt(wh,Dc,this.up),this.quaternion.setFromRotationMatrix(Fa),r&&(Fa.extractRotation(r.matrixWorld),Hl.setFromRotationMatrix(Fa),this.quaternion.premultiply(Hl.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lB)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uB)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fa),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dc,e,sB),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dc,oB,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const l=r[a];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let f=0,d=c.length;f<d;f++){const p=c[f];a(e.shapes,p)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,f=this.material.length;c<f;c++)l.push(a(e.materials,this.material[c]));r.material=l}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(a(e.animations,c))}}if(t){const l=o(e.geometries),c=o(e.materials),f=o(e.textures),d=o(e.images),p=o(e.shapes),m=o(e.skeletons),v=o(e.animations),M=o(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),f.length>0&&(i.textures=f),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),m.length>0&&(i.skeletons=m),v.length>0&&(i.animations=v),M.length>0&&(i.nodes=M)}return i.object=r,i;function o(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ki.DEFAULT_UP=new j(0,1,0);ki.DEFAULT_MATRIX_AUTO_UPDATE=!0;ki.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yr=new j,ka=new j,$v=new j,za=new j,Gl=new j,Wl=new j,kw=new j,qv=new j,Kv=new j,Zv=new j;let Th=!1;class Kr{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yr.subVectors(e,t),r.cross(Yr);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Yr.subVectors(r,t),ka.subVectors(i,t),$v.subVectors(e,t);const o=Yr.dot(Yr),l=Yr.dot(ka),c=Yr.dot($v),f=ka.dot(ka),d=ka.dot($v),p=o*f-l*l;if(p===0)return a.set(0,0,0),null;const m=1/p,v=(f*c-l*d)*m,M=(o*d-l*c)*m;return a.set(1-v-M,M,v)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,za)===null?!1:za.x>=0&&za.y>=0&&za.x+za.y<=1}static getUV(e,t,i,r,a,o,l,c){return Th===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Th=!0),this.getInterpolation(e,t,i,r,a,o,l,c)}static getInterpolation(e,t,i,r,a,o,l,c){return this.getBarycoord(e,t,i,r,za)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,za.x),c.addScaledVector(o,za.y),c.addScaledVector(l,za.z),c)}static isFrontFacing(e,t,i,r){return Yr.subVectors(i,t),ka.subVectors(e,t),Yr.cross(ka).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yr.subVectors(this.c,this.b),ka.subVectors(this.a,this.b),Yr.cross(ka).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kr.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return Th===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Th=!0),Kr.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}getInterpolation(e,t,i,r,a){return Kr.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Kr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let o,l;Gl.subVectors(r,i),Wl.subVectors(a,i),qv.subVectors(e,i);const c=Gl.dot(qv),f=Wl.dot(qv);if(c<=0&&f<=0)return t.copy(i);Kv.subVectors(e,r);const d=Gl.dot(Kv),p=Wl.dot(Kv);if(d>=0&&p<=d)return t.copy(r);const m=c*p-d*f;if(m<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(i).addScaledVector(Gl,o);Zv.subVectors(e,a);const v=Gl.dot(Zv),M=Wl.dot(Zv);if(M>=0&&v<=M)return t.copy(a);const x=v*f-c*M;if(x<=0&&f>=0&&M<=0)return l=f/(f-M),t.copy(i).addScaledVector(Wl,l);const _=d*M-v*p;if(_<=0&&p-d>=0&&v-M>=0)return kw.subVectors(a,r),l=(p-d)/(p-d+(v-M)),t.copy(r).addScaledVector(kw,l);const g=1/(_+x+m);return o=x*g,l=m*g,t.copy(i).addScaledVector(Gl,o).addScaledVector(Wl,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const aC={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Es={h:0,s:0,l:0},bh={h:0,s:0,l:0};function Qv(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Bt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=zt.workingColorSpace){return this.r=e,this.g=t,this.b=i,zt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=zt.workingColorSpace){if(e=Cy(e,1),t=xi(t,0,1),i=xi(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=Qv(o,a,e+1/3),this.g=Qv(o,a,e),this.b=Qv(o,a,e-1/3)}return zt.toWorkingColorSpace(this,r),this}setStyle(e,t=Zn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zn){const i=aC[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cu(e.r),this.g=Cu(e.g),this.b=Cu(e.b),this}copyLinearToSRGB(e){return this.r=Bv(e.r),this.g=Bv(e.g),this.b=Bv(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return zt.fromWorkingColorSpace(oi.copy(this),e),Math.round(xi(oi.r*255,0,255))*65536+Math.round(xi(oi.g*255,0,255))*256+Math.round(xi(oi.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.fromWorkingColorSpace(oi.copy(this),t);const i=oi.r,r=oi.g,a=oi.b,o=Math.max(i,r,a),l=Math.min(i,r,a);let c,f;const d=(l+o)/2;if(l===o)c=0,f=0;else{const p=o-l;switch(f=d<=.5?p/(o+l):p/(2-o-l),o){case i:c=(r-a)/p+(r<a?6:0);break;case r:c=(a-i)/p+2;break;case a:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=f,e.l=d,e}getRGB(e,t=zt.workingColorSpace){return zt.fromWorkingColorSpace(oi.copy(this),t),e.r=oi.r,e.g=oi.g,e.b=oi.b,e}getStyle(e=Zn){zt.fromWorkingColorSpace(oi.copy(this),e);const t=oi.r,i=oi.g,r=oi.b;return e!==Zn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Es),this.setHSL(Es.h+e,Es.s+t,Es.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Es),e.getHSL(bh);const i=af(Es.h,bh.h,t),r=af(Es.s,bh.s,t),a=af(Es.l,bh.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const oi=new Bt;Bt.NAMES=aC;let cB=0;class km extends ec{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cB++}),this.uuid=fl(),this.name="",this.type="Material",this.blending=Au,this.side=eo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=L_,this.blendDst=D_,this.blendEquation=Io,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Jp,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ww,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nl,this.stencilZFail=Nl,this.stencilZPass=Nl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Au&&(i.blending=this.blending),this.side!==eo&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==L_&&(i.blendSrc=this.blendSrc),this.blendDst!==D_&&(i.blendDst=this.blendDst),this.blendEquation!==Io&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jp&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ww&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nl&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nl&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nl&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const l in a){const c=a[l];delete c.metadata,o.push(c)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Of extends km{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=W2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mn=new j,Ah=new st;class ta{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tw,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=va,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ah.fromBufferAttribute(this,t),Ah.applyMatrix3(e),this.setXY(t,Ah.x,Ah.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix3(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=tu(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gi(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tu(t,this.array)),t}setX(e,t){return this.normalized&&(t=gi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tu(t,this.array)),t}setY(e,t){return this.normalized&&(t=gi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tu(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tu(t,this.array)),t}setW(e,t){return this.normalized&&(t=gi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gi(t,this.array),i=gi(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=gi(t,this.array),i=gi(i,this.array),r=gi(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=gi(t,this.array),i=gi(i,this.array),r=gi(r,this.array),a=gi(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tw&&(e.usage=this.usage),e}}class Ly extends ta{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class sC extends ta{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Jn extends ta{constructor(e,t,i){super(new Float32Array(e),t,i)}}let fB=0;const wr=new Ot,Jv=new ki,Vl=new j,Zi=new uo,Ic=new uo,Gn=new j;class ia extends ec{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fB++}),this.uuid=fl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tC(e)?sC:Ly)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new yt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wr.makeRotationFromQuaternion(e),this.applyMatrix4(wr),this}rotateX(e){return wr.makeRotationX(e),this.applyMatrix4(wr),this}rotateY(e){return wr.makeRotationY(e),this.applyMatrix4(wr),this}rotateZ(e){return wr.makeRotationZ(e),this.applyMatrix4(wr),this}translate(e,t,i){return wr.makeTranslation(e,t,i),this.applyMatrix4(wr),this}scale(e,t,i){return wr.makeScale(e,t,i),this.applyMatrix4(wr),this}lookAt(e){return Jv.lookAt(e),Jv.updateMatrix(),this.applyMatrix4(Jv.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vl).negate(),this.translate(Vl.x,Vl.y,Vl.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Jn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Zi.setFromBufferAttribute(a),this.morphTargetsRelative?(Gn.addVectors(this.boundingBox.min,Zi.min),this.boundingBox.expandByPoint(Gn),Gn.addVectors(this.boundingBox.max,Zi.max),this.boundingBox.expandByPoint(Gn)):(this.boundingBox.expandByPoint(Zi.min),this.boundingBox.expandByPoint(Zi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Zi.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const l=t[a];Ic.setFromBufferAttribute(l),this.morphTargetsRelative?(Gn.addVectors(Zi.min,Ic.min),Zi.expandByPoint(Gn),Gn.addVectors(Zi.max,Ic.max),Zi.expandByPoint(Gn)):(Zi.expandByPoint(Ic.min),Zi.expandByPoint(Ic.max))}Zi.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)Gn.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Gn));if(t)for(let a=0,o=t.length;a<o;a++){const l=t[a],c=this.morphTargetsRelative;for(let f=0,d=l.count;f<d;f++)Gn.fromBufferAttribute(l,f),c&&(Vl.fromBufferAttribute(e,f),Gn.add(Vl)),r=Math.max(r,i.distanceToSquared(Gn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,a=t.normal.array,o=t.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ta(new Float32Array(4*l),4));const c=this.getAttribute("tangent").array,f=[],d=[];for(let C=0;C<l;C++)f[C]=new j,d[C]=new j;const p=new j,m=new j,v=new j,M=new st,x=new st,_=new st,g=new j,S=new j;function y(C,G,X){p.fromArray(r,C*3),m.fromArray(r,G*3),v.fromArray(r,X*3),M.fromArray(o,C*2),x.fromArray(o,G*2),_.fromArray(o,X*2),m.sub(p),v.sub(p),x.sub(M),_.sub(M);const ae=1/(x.x*_.y-_.x*x.y);isFinite(ae)&&(g.copy(m).multiplyScalar(_.y).addScaledVector(v,-x.y).multiplyScalar(ae),S.copy(v).multiplyScalar(x.x).addScaledVector(m,-_.x).multiplyScalar(ae),f[C].add(g),f[G].add(g),f[X].add(g),d[C].add(S),d[G].add(S),d[X].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let C=0,G=w.length;C<G;++C){const X=w[C],ae=X.start,k=X.count;for(let Y=ae,K=ae+k;Y<K;Y+=3)y(i[Y+0],i[Y+1],i[Y+2])}const A=new j,R=new j,P=new j,N=new j;function T(C){P.fromArray(a,C*3),N.copy(P);const G=f[C];A.copy(G),A.sub(P.multiplyScalar(P.dot(G))).normalize(),R.crossVectors(N,G);const ae=R.dot(d[C])<0?-1:1;c[C*4]=A.x,c[C*4+1]=A.y,c[C*4+2]=A.z,c[C*4+3]=ae}for(let C=0,G=w.length;C<G;++C){const X=w[C],ae=X.start,k=X.count;for(let Y=ae,K=ae+k;Y<K;Y+=3)T(i[Y+0]),T(i[Y+1]),T(i[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ta(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,v=i.count;m<v;m++)i.setXYZ(m,0,0,0);const r=new j,a=new j,o=new j,l=new j,c=new j,f=new j,d=new j,p=new j;if(e)for(let m=0,v=e.count;m<v;m+=3){const M=e.getX(m+0),x=e.getX(m+1),_=e.getX(m+2);r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,x),o.fromBufferAttribute(t,_),d.subVectors(o,a),p.subVectors(r,a),d.cross(p),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,_),l.add(d),c.add(d),f.add(d),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(_,f.x,f.y,f.z)}else for(let m=0,v=t.count;m<v;m+=3)r.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),d.subVectors(o,a),p.subVectors(r,a),d.cross(p),i.setXYZ(m+0,d.x,d.y,d.z),i.setXYZ(m+1,d.x,d.y,d.z),i.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gn.fromBufferAttribute(e,t),Gn.normalize(),e.setXYZ(t,Gn.x,Gn.y,Gn.z)}toNonIndexed(){function e(l,c){const f=l.array,d=l.itemSize,p=l.normalized,m=new f.constructor(c.length*d);let v=0,M=0;for(let x=0,_=c.length;x<_;x++){l.isInterleavedBufferAttribute?v=c[x]*l.data.stride+l.offset:v=c[x]*d;for(let g=0;g<d;g++)m[M++]=f[v++]}return new ta(m,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ia,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],f=e(c,i);t.setAttribute(l,f)}const a=this.morphAttributes;for(const l in a){const c=[],f=a[l];for(let d=0,p=f.length;d<p;d++){const m=f[d],v=e(m,i);c.push(v)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const f=o[l];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const f in c)c[f]!==void 0&&(e[f]=c[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const f=i[c];e.data.attributes[c]=f.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const f=this.morphAttributes[c],d=[];for(let p=0,m=f.length;p<m;p++){const v=f[p];d.push(v.toJSON(e.data))}d.length>0&&(r[c]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const f in r){const d=r[f];this.setAttribute(f,d.clone(t))}const a=e.morphAttributes;for(const f in a){const d=[],p=a[f];for(let m=0,v=p.length;m<v;m++)d.push(p[m].clone(t));this.morphAttributes[f]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let f=0,d=o.length;f<d;f++){const p=o[f];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zw=new Ot,Mo=new Ry,Ch=new dl,Bw=new j,Xl=new j,Yl=new j,jl=new j,e0=new j,Rh=new j,Ph=new st,Lh=new st,Dh=new st,Hw=new j,Gw=new j,Ww=new j,Ih=new j,Uh=new j;class cn extends ki{constructor(e=new ia,t=new Of){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(a&&l){Rh.set(0,0,0);for(let c=0,f=a.length;c<f;c++){const d=l[c],p=a[c];d!==0&&(e0.fromBufferAttribute(p,e),o?Rh.addScaledVector(e0,d):Rh.addScaledVector(e0.sub(t),d))}t.add(Rh)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ch.copy(i.boundingSphere),Ch.applyMatrix4(a),Mo.copy(e.ray).recast(e.near),!(Ch.containsPoint(Mo.origin)===!1&&(Mo.intersectSphere(Ch,Bw)===null||Mo.origin.distanceToSquared(Bw)>(e.far-e.near)**2))&&(zw.copy(a).invert(),Mo.copy(e.ray).applyMatrix4(zw),!(i.boundingBox!==null&&Mo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mo)))}_computeIntersections(e,t,i){let r;const a=this.geometry,o=this.material,l=a.index,c=a.attributes.position,f=a.attributes.uv,d=a.attributes.uv1,p=a.attributes.normal,m=a.groups,v=a.drawRange;if(l!==null)if(Array.isArray(o))for(let M=0,x=m.length;M<x;M++){const _=m[M],g=o[_.materialIndex],S=Math.max(_.start,v.start),y=Math.min(l.count,Math.min(_.start+_.count,v.start+v.count));for(let w=S,A=y;w<A;w+=3){const R=l.getX(w),P=l.getX(w+1),N=l.getX(w+2);r=Nh(this,g,e,i,f,d,p,R,P,N),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const M=Math.max(0,v.start),x=Math.min(l.count,v.start+v.count);for(let _=M,g=x;_<g;_+=3){const S=l.getX(_),y=l.getX(_+1),w=l.getX(_+2);r=Nh(this,o,e,i,f,d,p,S,y,w),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let M=0,x=m.length;M<x;M++){const _=m[M],g=o[_.materialIndex],S=Math.max(_.start,v.start),y=Math.min(c.count,Math.min(_.start+_.count,v.start+v.count));for(let w=S,A=y;w<A;w+=3){const R=w,P=w+1,N=w+2;r=Nh(this,g,e,i,f,d,p,R,P,N),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const M=Math.max(0,v.start),x=Math.min(c.count,v.start+v.count);for(let _=M,g=x;_<g;_+=3){const S=_,y=_+1,w=_+2;r=Nh(this,o,e,i,f,d,p,S,y,w),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function dB(n,e,t,i,r,a,o,l){let c;if(e.side===Fi?c=i.intersectTriangle(o,a,r,!0,l):c=i.intersectTriangle(r,a,o,e.side===eo,l),c===null)return null;Uh.copy(l),Uh.applyMatrix4(n.matrixWorld);const f=t.ray.origin.distanceTo(Uh);return f<t.near||f>t.far?null:{distance:f,point:Uh.clone(),object:n}}function Nh(n,e,t,i,r,a,o,l,c,f){n.getVertexPosition(l,Xl),n.getVertexPosition(c,Yl),n.getVertexPosition(f,jl);const d=dB(n,e,t,i,Xl,Yl,jl,Ih);if(d){r&&(Ph.fromBufferAttribute(r,l),Lh.fromBufferAttribute(r,c),Dh.fromBufferAttribute(r,f),d.uv=Kr.getInterpolation(Ih,Xl,Yl,jl,Ph,Lh,Dh,new st)),a&&(Ph.fromBufferAttribute(a,l),Lh.fromBufferAttribute(a,c),Dh.fromBufferAttribute(a,f),d.uv1=Kr.getInterpolation(Ih,Xl,Yl,jl,Ph,Lh,Dh,new st),d.uv2=d.uv1),o&&(Hw.fromBufferAttribute(o,l),Gw.fromBufferAttribute(o,c),Ww.fromBufferAttribute(o,f),d.normal=Kr.getInterpolation(Ih,Xl,Yl,jl,Hw,Gw,Ww,new j),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a:l,b:c,c:f,normal:new j,materialIndex:0};Kr.getNormal(Xl,Yl,jl,p.normal),d.face=p}return d}class nd extends ia{constructor(e=1,t=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const l=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const c=[],f=[],d=[],p=[];let m=0,v=0;M("z","y","x",-1,-1,i,t,e,o,a,0),M("z","y","x",1,-1,i,t,-e,o,a,1),M("x","z","y",1,1,e,i,t,r,o,2),M("x","z","y",1,-1,e,i,-t,r,o,3),M("x","y","z",1,-1,e,t,i,r,a,4),M("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(c),this.setAttribute("position",new Jn(f,3)),this.setAttribute("normal",new Jn(d,3)),this.setAttribute("uv",new Jn(p,2));function M(x,_,g,S,y,w,A,R,P,N,T){const C=w/P,G=A/N,X=w/2,ae=A/2,k=R/2,Y=P+1,K=N+1;let se=0,H=0;const Z=new j;for(let Q=0;Q<K;Q++){const le=Q*G-ae;for(let de=0;de<Y;de++){const re=de*C-X;Z[x]=re*S,Z[_]=le*y,Z[g]=k,f.push(Z.x,Z.y,Z.z),Z[x]=0,Z[_]=0,Z[g]=R>0?1:-1,d.push(Z.x,Z.y,Z.z),p.push(de/P),p.push(1-Q/N),se+=1}}for(let Q=0;Q<N;Q++)for(let le=0;le<P;le++){const de=m+le+Y*Q,re=m+le+Y*(Q+1),ue=m+(le+1)+Y*(Q+1),xe=m+(le+1)+Y*Q;c.push(de,re,xe),c.push(re,ue,xe),H+=6}l.addGroup(v,H,T),v+=H,m+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nd(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wu(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function vi(n){const e={};for(let t=0;t<n.length;t++){const i=Wu(n[t]);for(const r in i)e[r]=i[r]}return e}function hB(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function oC(n){return n.getRenderTarget()===null?n.outputColorSpace:zt.workingColorSpace}const pB={clone:Wu,merge:vi};var mB=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gB=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends km{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mB,this.fragmentShader=gB,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wu(e.uniforms),this.uniformsGroups=hB(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}let lC=class extends ki{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=ja}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class yi extends lC{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Uf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uf*2*Math.atan(Math.tan(rf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,f=o.fullHeight;a+=o.offsetX*r/c,t-=o.offsetY*i/f,r*=o.width/c,i*=o.height/f}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $l=-90,ql=1;class vB extends ki{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yi($l,ql,e,t);r.layers=this.layers,this.add(r);const a=new yi($l,ql,e,t);a.layers=this.layers,this.add(a);const o=new yi($l,ql,e,t);o.layers=this.layers,this.add(o);const l=new yi($l,ql,e,t);l.layers=this.layers,this.add(l);const c=new yi($l,ql,e,t);c.layers=this.layers,this.add(c);const f=new yi($l,ql,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,o,l,c]=t;for(const f of t)this.remove(f);if(e===ja)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===im)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,l,c,f,d]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,l),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,f),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(p,m,v),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class uC extends Mi{constructor(e,t,i,r,a,o,l,c,f,d){e=e!==void 0?e:[],t=t!==void 0?t:Bu,super(e,t,i,r,a,o,l,c,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _B extends Ma{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(sf("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Yo?Zn:Rr),this.texture=new uC(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:er}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new nd(5,5,5),a=new Nn({name:"CubemapFromEquirect",uniforms:Wu(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fi,blending:js});a.uniforms.tEquirect.value=t;const o=new cn(r,a),l=t.minFilter;return t.minFilter===Df&&(t.minFilter=er),new vB(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(a)}}const t0=new j,xB=new j,yB=new yt;class Po{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=t0.subVectors(i,t).cross(xB.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(t0),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||yB.getNormalMatrix(e),r=this.coplanarPoint(t0).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wo=new dl,Oh=new j;class cC{constructor(e=new Po,t=new Po,i=new Po,r=new Po,a=new Po,o=new Po){this.planes=[e,t,i,r,a,o]}set(e,t,i,r,a,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(r),l[4].copy(a),l[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ja){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],f=r[4],d=r[5],p=r[6],m=r[7],v=r[8],M=r[9],x=r[10],_=r[11],g=r[12],S=r[13],y=r[14],w=r[15];if(i[0].setComponents(c-a,m-f,_-v,w-g).normalize(),i[1].setComponents(c+a,m+f,_+v,w+g).normalize(),i[2].setComponents(c+o,m+d,_+M,w+S).normalize(),i[3].setComponents(c-o,m-d,_-M,w-S).normalize(),i[4].setComponents(c-l,m-p,_-x,w-y).normalize(),t===ja)i[5].setComponents(c+l,m+p,_+x,w+y).normalize();else if(t===im)i[5].setComponents(l,p,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wo)}intersectsSprite(e){return wo.center.set(0,0,0),wo.radius=.7071067811865476,wo.applyMatrix4(e.matrixWorld),this.intersectsSphere(wo)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Oh.x=r.normal.x>0?e.max.x:e.min.x,Oh.y=r.normal.y>0?e.max.y:e.min.y,Oh.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oh)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fC(){let n=null,e=!1,t=null,i=null;function r(a,o){t(a,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function SB(n,e){const t=e.isWebGL2,i=new WeakMap;function r(f,d){const p=f.array,m=f.usage,v=p.byteLength,M=n.createBuffer();n.bindBuffer(d,M),n.bufferData(d,p,m),f.onUploadCallback();let x;if(p instanceof Float32Array)x=n.FLOAT;else if(p instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=n.SHORT;else if(p instanceof Uint32Array)x=n.UNSIGNED_INT;else if(p instanceof Int32Array)x=n.INT;else if(p instanceof Int8Array)x=n.BYTE;else if(p instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:M,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function a(f,d,p){const m=d.array,v=d._updateRange,M=d.updateRanges;if(n.bindBuffer(p,f),v.count===-1&&M.length===0&&n.bufferSubData(p,0,m),M.length!==0){for(let x=0,_=M.length;x<_;x++){const g=M[x];t?n.bufferSubData(p,g.start*m.BYTES_PER_ELEMENT,m,g.start,g.count):n.bufferSubData(p,g.start*m.BYTES_PER_ELEMENT,m.subarray(g.start,g.start+g.count))}d.clearUpdateRanges()}v.count!==-1&&(t?n.bufferSubData(p,v.offset*m.BYTES_PER_ELEMENT,m,v.offset,v.count):n.bufferSubData(p,v.offset*m.BYTES_PER_ELEMENT,m.subarray(v.offset,v.offset+v.count)),v.count=-1),d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),i.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=i.get(f);d&&(n.deleteBuffer(d.buffer),i.delete(f))}function c(f,d){if(f.isGLBufferAttribute){const m=i.get(f);(!m||m.version<f.version)&&i.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const p=i.get(f);if(p===void 0)i.set(f,r(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,f,d),p.version=f.version}}return{get:o,remove:l,update:c}}class or extends ia{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,o=t/2,l=Math.floor(i),c=Math.floor(r),f=l+1,d=c+1,p=e/l,m=t/c,v=[],M=[],x=[],_=[];for(let g=0;g<d;g++){const S=g*m-o;for(let y=0;y<f;y++){const w=y*p-a;M.push(w,-S,0),x.push(0,0,1),_.push(y/l),_.push(1-g/c)}}for(let g=0;g<c;g++)for(let S=0;S<l;S++){const y=S+f*g,w=S+f*(g+1),A=S+1+f*(g+1),R=S+1+f*g;v.push(y,w,R),v.push(w,A,R)}this.setIndex(v),this.setAttribute("position",new Jn(M,3)),this.setAttribute("normal",new Jn(x,3)),this.setAttribute("uv",new Jn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.width,e.height,e.widthSegments,e.heightSegments)}}var EB=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MB=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wB=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TB=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bB=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,AB=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CB=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RB=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PB=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LB=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,DB=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IB=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UB=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,NB=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,OB=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FB=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,kB=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zB=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BB=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HB=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GB=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WB=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,VB=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,XB=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,YB=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jB=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$B=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qB=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KB=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZB=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QB="gl_FragColor = linearToOutputTexel( gl_FragColor );",JB=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,e5=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,t5=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,n5=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,i5=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r5=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,a5=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s5=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o5=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l5=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u5=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,c5=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,f5=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d5=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h5=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p5=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,m5=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,g5=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v5=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_5=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x5=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y5=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,S5=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,E5=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,M5=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,w5=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T5=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b5=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A5=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,C5=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,R5=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P5=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L5=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,D5=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I5=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U5=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N5=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O5=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,F5=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,k5=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,z5=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,B5=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,H5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W5=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V5=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,X5=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y5=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j5=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$5=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q5=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K5=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Z5=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q5=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J5=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eH=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tH=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nH=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iH=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,rH=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aH=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sH=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oH=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lH=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uH=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cH=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fH=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dH=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hH=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pH=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mH=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gH=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_H=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yH=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SH=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EH=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wH=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bH=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AH=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,CH=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,RH=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PH=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,LH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DH=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IH=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UH=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NH=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,OH=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FH=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kH=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zH=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,BH=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HH=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GH=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WH=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VH=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XH=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YH=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jH=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$H=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qH=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KH=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZH=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QH=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,JH=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eG=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:EB,alphahash_pars_fragment:MB,alphamap_fragment:wB,alphamap_pars_fragment:TB,alphatest_fragment:bB,alphatest_pars_fragment:AB,aomap_fragment:CB,aomap_pars_fragment:RB,batching_pars_vertex:PB,batching_vertex:LB,begin_vertex:DB,beginnormal_vertex:IB,bsdfs:UB,iridescence_fragment:NB,bumpmap_pars_fragment:OB,clipping_planes_fragment:FB,clipping_planes_pars_fragment:kB,clipping_planes_pars_vertex:zB,clipping_planes_vertex:BB,color_fragment:HB,color_pars_fragment:GB,color_pars_vertex:WB,color_vertex:VB,common:XB,cube_uv_reflection_fragment:YB,defaultnormal_vertex:jB,displacementmap_pars_vertex:$B,displacementmap_vertex:qB,emissivemap_fragment:KB,emissivemap_pars_fragment:ZB,colorspace_fragment:QB,colorspace_pars_fragment:JB,envmap_fragment:e5,envmap_common_pars_fragment:t5,envmap_pars_fragment:n5,envmap_pars_vertex:i5,envmap_physical_pars_fragment:m5,envmap_vertex:r5,fog_vertex:a5,fog_pars_vertex:s5,fog_fragment:o5,fog_pars_fragment:l5,gradientmap_pars_fragment:u5,lightmap_fragment:c5,lightmap_pars_fragment:f5,lights_lambert_fragment:d5,lights_lambert_pars_fragment:h5,lights_pars_begin:p5,lights_toon_fragment:g5,lights_toon_pars_fragment:v5,lights_phong_fragment:_5,lights_phong_pars_fragment:x5,lights_physical_fragment:y5,lights_physical_pars_fragment:S5,lights_fragment_begin:E5,lights_fragment_maps:M5,lights_fragment_end:w5,logdepthbuf_fragment:T5,logdepthbuf_pars_fragment:b5,logdepthbuf_pars_vertex:A5,logdepthbuf_vertex:C5,map_fragment:R5,map_pars_fragment:P5,map_particle_fragment:L5,map_particle_pars_fragment:D5,metalnessmap_fragment:I5,metalnessmap_pars_fragment:U5,morphcolor_vertex:N5,morphnormal_vertex:O5,morphtarget_pars_vertex:F5,morphtarget_vertex:k5,normal_fragment_begin:z5,normal_fragment_maps:B5,normal_pars_fragment:H5,normal_pars_vertex:G5,normal_vertex:W5,normalmap_pars_fragment:V5,clearcoat_normal_fragment_begin:X5,clearcoat_normal_fragment_maps:Y5,clearcoat_pars_fragment:j5,iridescence_pars_fragment:$5,opaque_fragment:q5,packing:K5,premultiplied_alpha_fragment:Z5,project_vertex:Q5,dithering_fragment:J5,dithering_pars_fragment:eH,roughnessmap_fragment:tH,roughnessmap_pars_fragment:nH,shadowmap_pars_fragment:iH,shadowmap_pars_vertex:rH,shadowmap_vertex:aH,shadowmask_pars_fragment:sH,skinbase_vertex:oH,skinning_pars_vertex:lH,skinning_vertex:uH,skinnormal_vertex:cH,specularmap_fragment:fH,specularmap_pars_fragment:dH,tonemapping_fragment:hH,tonemapping_pars_fragment:pH,transmission_fragment:mH,transmission_pars_fragment:gH,uv_pars_fragment:vH,uv_pars_vertex:_H,uv_vertex:xH,worldpos_vertex:yH,background_vert:SH,background_frag:EH,backgroundCube_vert:MH,backgroundCube_frag:wH,cube_vert:TH,cube_frag:bH,depth_vert:AH,depth_frag:CH,distanceRGBA_vert:RH,distanceRGBA_frag:PH,equirect_vert:LH,equirect_frag:DH,linedashed_vert:IH,linedashed_frag:UH,meshbasic_vert:NH,meshbasic_frag:OH,meshlambert_vert:FH,meshlambert_frag:kH,meshmatcap_vert:zH,meshmatcap_frag:BH,meshnormal_vert:HH,meshnormal_frag:GH,meshphong_vert:WH,meshphong_frag:VH,meshphysical_vert:XH,meshphysical_frag:YH,meshtoon_vert:jH,meshtoon_frag:$H,points_vert:qH,points_frag:KH,shadow_vert:ZH,shadow_frag:QH,sprite_vert:JH,sprite_frag:eG},Se={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},ha={basic:{uniforms:vi([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:vi([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Bt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:vi([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:vi([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:vi([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Bt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:vi([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:vi([Se.points,Se.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:vi([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:vi([Se.common,Se.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:vi([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:vi([Se.sprite,Se.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:vi([Se.common,Se.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:vi([Se.lights,Se.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};ha.physical={uniforms:vi([ha.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Fh={r:0,b:0,g:0};function tG(n,e,t,i,r,a,o){const l=new Bt(0);let c=a===!0?0:1,f,d,p=null,m=0,v=null;function M(_,g){let S=!1,y=g.isScene===!0?g.background:null;y&&y.isTexture&&(y=(g.backgroundBlurriness>0?t:e).get(y)),y===null?x(l,c):y&&y.isColor&&(x(y,1),S=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Nm)?(d===void 0&&(d=new cn(new nd(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Wu(ha.backgroundCube.uniforms),vertexShader:ha.backgroundCube.vertexShader,fragmentShader:ha.backgroundCube.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.toneMapped=zt.getTransfer(y.colorSpace)!==Kt,(p!==y||m!==y.version||v!==n.toneMapping)&&(d.material.needsUpdate=!0,p=y,m=y.version,v=n.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(f===void 0&&(f=new cn(new or(2,2),new Nn({name:"BackgroundMaterial",uniforms:Wu(ha.background.uniforms),vertexShader:ha.background.vertexShader,fragmentShader:ha.background.fragmentShader,side:eo,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=y,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.toneMapped=zt.getTransfer(y.colorSpace)!==Kt,y.matrixAutoUpdate===!0&&y.updateMatrix(),f.material.uniforms.uvTransform.value.copy(y.matrix),(p!==y||m!==y.version||v!==n.toneMapping)&&(f.material.needsUpdate=!0,p=y,m=y.version,v=n.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null))}function x(_,g){_.getRGB(Fh,oC(n)),i.buffers.color.setClear(Fh.r,Fh.g,Fh.b,g,o)}return{getClearColor:function(){return l},setClearColor:function(_,g=1){l.set(_),c=g,x(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,x(l,c)},render:M}}function nG(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,l={},c=_(null);let f=c,d=!1;function p(k,Y,K,se,H){let Z=!1;if(o){const Q=x(se,K,Y);f!==Q&&(f=Q,v(f.object)),Z=g(k,se,K,H),Z&&S(k,se,K,H)}else{const Q=Y.wireframe===!0;(f.geometry!==se.id||f.program!==K.id||f.wireframe!==Q)&&(f.geometry=se.id,f.program=K.id,f.wireframe=Q,Z=!0)}H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(Z||d)&&(d=!1,N(k,Y,K,se),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function m(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function v(k){return i.isWebGL2?n.bindVertexArray(k):a.bindVertexArrayOES(k)}function M(k){return i.isWebGL2?n.deleteVertexArray(k):a.deleteVertexArrayOES(k)}function x(k,Y,K){const se=K.wireframe===!0;let H=l[k.id];H===void 0&&(H={},l[k.id]=H);let Z=H[Y.id];Z===void 0&&(Z={},H[Y.id]=Z);let Q=Z[se];return Q===void 0&&(Q=_(m()),Z[se]=Q),Q}function _(k){const Y=[],K=[],se=[];for(let H=0;H<r;H++)Y[H]=0,K[H]=0,se[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:K,attributeDivisors:se,object:k,attributes:{},index:null}}function g(k,Y,K,se){const H=f.attributes,Z=Y.attributes;let Q=0;const le=K.getAttributes();for(const de in le)if(le[de].location>=0){const ue=H[de];let xe=Z[de];if(xe===void 0&&(de==="instanceMatrix"&&k.instanceMatrix&&(xe=k.instanceMatrix),de==="instanceColor"&&k.instanceColor&&(xe=k.instanceColor)),ue===void 0||ue.attribute!==xe||xe&&ue.data!==xe.data)return!0;Q++}return f.attributesNum!==Q||f.index!==se}function S(k,Y,K,se){const H={},Z=Y.attributes;let Q=0;const le=K.getAttributes();for(const de in le)if(le[de].location>=0){let ue=Z[de];ue===void 0&&(de==="instanceMatrix"&&k.instanceMatrix&&(ue=k.instanceMatrix),de==="instanceColor"&&k.instanceColor&&(ue=k.instanceColor));const xe={};xe.attribute=ue,ue&&ue.data&&(xe.data=ue.data),H[de]=xe,Q++}f.attributes=H,f.attributesNum=Q,f.index=se}function y(){const k=f.newAttributes;for(let Y=0,K=k.length;Y<K;Y++)k[Y]=0}function w(k){A(k,0)}function A(k,Y){const K=f.newAttributes,se=f.enabledAttributes,H=f.attributeDivisors;K[k]=1,se[k]===0&&(n.enableVertexAttribArray(k),se[k]=1),H[k]!==Y&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,Y),H[k]=Y)}function R(){const k=f.newAttributes,Y=f.enabledAttributes;for(let K=0,se=Y.length;K<se;K++)Y[K]!==k[K]&&(n.disableVertexAttribArray(K),Y[K]=0)}function P(k,Y,K,se,H,Z,Q){Q===!0?n.vertexAttribIPointer(k,Y,K,H,Z):n.vertexAttribPointer(k,Y,K,se,H,Z)}function N(k,Y,K,se){if(i.isWebGL2===!1&&(k.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const H=se.attributes,Z=K.getAttributes(),Q=Y.defaultAttributeValues;for(const le in Z){const de=Z[le];if(de.location>=0){let re=H[le];if(re===void 0&&(le==="instanceMatrix"&&k.instanceMatrix&&(re=k.instanceMatrix),le==="instanceColor"&&k.instanceColor&&(re=k.instanceColor)),re!==void 0){const ue=re.normalized,xe=re.itemSize,Le=t.get(re);if(Le===void 0)continue;const Ne=Le.buffer,et=Le.type,nt=Le.bytesPerElement,Ze=i.isWebGL2===!0&&(et===n.INT||et===n.UNSIGNED_INT||re.gpuType===X2);if(re.isInterleavedBufferAttribute){const xt=re.data,J=xt.stride,Bn=re.offset;if(xt.isInstancedInterleavedBuffer){for(let Oe=0;Oe<de.locationSize;Oe++)A(de.location+Oe,xt.meshPerAttribute);k.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Oe=0;Oe<de.locationSize;Oe++)w(de.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let Oe=0;Oe<de.locationSize;Oe++)P(de.location+Oe,xe/de.locationSize,et,ue,J*nt,(Bn+xe/de.locationSize*Oe)*nt,Ze)}else{if(re.isInstancedBufferAttribute){for(let xt=0;xt<de.locationSize;xt++)A(de.location+xt,re.meshPerAttribute);k.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let xt=0;xt<de.locationSize;xt++)w(de.location+xt);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let xt=0;xt<de.locationSize;xt++)P(de.location+xt,xe/de.locationSize,et,ue,xe*nt,xe/de.locationSize*xt*nt,Ze)}}else if(Q!==void 0){const ue=Q[le];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(de.location,ue);break;case 3:n.vertexAttrib3fv(de.location,ue);break;case 4:n.vertexAttrib4fv(de.location,ue);break;default:n.vertexAttrib1fv(de.location,ue)}}}}R()}function T(){X();for(const k in l){const Y=l[k];for(const K in Y){const se=Y[K];for(const H in se)M(se[H].object),delete se[H];delete Y[K]}delete l[k]}}function C(k){if(l[k.id]===void 0)return;const Y=l[k.id];for(const K in Y){const se=Y[K];for(const H in se)M(se[H].object),delete se[H];delete Y[K]}delete l[k.id]}function G(k){for(const Y in l){const K=l[Y];if(K[k.id]===void 0)continue;const se=K[k.id];for(const H in se)M(se[H].object),delete se[H];delete K[k.id]}}function X(){ae(),d=!0,f!==c&&(f=c,v(f.object))}function ae(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:p,reset:X,resetDefaultState:ae,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:G,initAttributes:y,enableAttribute:w,disableUnusedAttributes:R}}function iG(n,e,t,i){const r=i.isWebGL2;let a;function o(d){a=d}function l(d,p){n.drawArrays(a,d,p),t.update(p,a,1)}function c(d,p,m){if(m===0)return;let v,M;if(r)v=n,M="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[M](a,d,p,m),t.update(p,a,m)}function f(d,p,m){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let M=0;M<m;M++)this.render(d[M],p[M]);else{v.multiDrawArraysWEBGL(a,d,0,p,0,m);let M=0;for(let x=0;x<m;x++)M+=p[x];t.update(M,a,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function rG(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const c=a(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const f=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),g=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,w=o||e.has("OES_texture_float"),A=y&&w,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:f,getMaxAnisotropy:r,getMaxPrecision:a,precision:l,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:w,floatVertexTextures:A,maxSamples:R}}function aG(n){const e=this;let t=null,i=0,r=!1,a=!1;const o=new Po,l=new yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const v=p.length!==0||m||i!==0||r;return r=m,i=p.length,v},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,m){t=d(p,m,0)},this.setState=function(p,m,v){const M=p.clippingPlanes,x=p.clipIntersection,_=p.clipShadows,g=n.get(p);if(!r||M===null||M.length===0||a&&!_)a?d(null):f();else{const S=a?0:i,y=S*4;let w=g.clippingState||null;c.value=w,w=d(M,m,y,v);for(let A=0;A!==y;++A)w[A]=t[A];g.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function f(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,m,v,M){const x=p!==null?p.length:0;let _=null;if(x!==0){if(_=c.value,M!==!0||_===null){const g=v+x*4,S=m.matrixWorldInverse;l.getNormalMatrix(S),(_===null||_.length<g)&&(_=new Float32Array(g));for(let y=0,w=v;y!==x;++y,w+=4)o.copy(p[y]).applyMatrix4(S,l),o.normal.toArray(_,w),_[w+3]=o.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,_}}function sG(n){let e=new WeakMap;function t(o,l){return l===I_?o.mapping=Bu:l===U_&&(o.mapping=Hu),o}function i(o){if(o&&o.isTexture){const l=o.mapping;if(l===I_||l===U_)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const f=new _B(c.height/2);return f.fromEquirectangularTexture(n,o),e.set(o,f),o.addEventListener("dispose",r),t(f.texture,o.mapping)}else return null}}return o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class dC extends lC{constructor(e=-1,t=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,o=a+f*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(a,o,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const pu=4,Vw=[.125,.215,.35,.446,.526,.582],Uo=20,n0=new dC,Xw=new Bt;let i0=null,r0=0,a0=0;const Lo=(1+Math.sqrt(5))/2,Kl=1/Lo,Yw=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Lo,Kl),new j(0,Lo,-Kl),new j(Kl,0,Lo),new j(-Kl,0,Lo),new j(Lo,Kl,0),new j(-Lo,Kl,0)];class jw{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){i0=this._renderer.getRenderTarget(),r0=this._renderer.getActiveCubeFace(),a0=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kw(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qw(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(i0,r0,a0),e.scissorTest=!1,kh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bu||e.mapping===Hu?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),i0=this._renderer.getRenderTarget(),r0=this._renderer.getActiveCubeFace(),a0=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:er,minFilter:er,generateMipmaps:!1,type:If,format:nr,colorSpace:Ja,depthBuffer:!1},r=$w(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$w(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oG(a)),this._blurMaterial=lG(a,e,t)}return r}_compileMaterial(e){const t=new cn(this._lodPlanes[0],e);this._renderer.compile(t,n0)}_sceneToCubeUV(e,t,i,r){const l=new yi(90,1,t,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(Xw),d.toneMapping=$s,d.autoClear=!1;const v=new Of({name:"PMREM.Background",side:Fi,depthWrite:!1,depthTest:!1}),M=new cn(new nd,v);let x=!1;const _=e.background;_?_.isColor&&(v.color.copy(_),e.background=null,x=!0):(v.color.copy(Xw),x=!0);for(let g=0;g<6;g++){const S=g%3;S===0?(l.up.set(0,c[g],0),l.lookAt(f[g],0,0)):S===1?(l.up.set(0,0,c[g]),l.lookAt(0,f[g],0)):(l.up.set(0,c[g],0),l.lookAt(0,0,f[g]));const y=this._cubeSize;kh(r,S*y,g>2?y:0,y,y),d.setRenderTarget(r),x&&d.render(M,l),d.render(e,l)}M.geometry.dispose(),M.material.dispose(),d.toneMapping=m,d.autoClear=p,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Bu||e.mapping===Hu;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kw()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qw());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new cn(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=e;const c=this._cubeSize;kh(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,n0)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Yw[(r-1)%Yw.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,o,l){const c=this._renderer,f=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new cn(this._lodPlanes[r],f),m=f.uniforms,v=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*Uo-1),x=a/M,_=isFinite(a)?1+Math.floor(d*x):Uo;_>Uo&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Uo}`);const g=[];let S=0;for(let P=0;P<Uo;++P){const N=P/x,T=Math.exp(-N*N/2);g.push(T),P===0?S+=T:P<_&&(S+=2*T)}for(let P=0;P<g.length;P++)g[P]=g[P]/S;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=g,m.latitudinal.value=o==="latitudinal",l&&(m.poleAxis.value=l);const{_lodMax:y}=this;m.dTheta.value=M,m.mipInt.value=y-i;const w=this._sizeLods[r],A=3*w*(r>y-pu?r-y+pu:0),R=4*(this._cubeSize-w);kh(t,A,R,3*w,2*w),c.setRenderTarget(t),c.render(p,n0)}}function oG(n){const e=[],t=[],i=[];let r=n;const a=n-pu+1+Vw.length;for(let o=0;o<a;o++){const l=Math.pow(2,r);t.push(l);let c=1/l;o>n-pu?c=Vw[o-n+pu-1]:o===0&&(c=0),i.push(c);const f=1/(l-2),d=-f,p=1+f,m=[d,d,p,d,p,p,d,d,p,p,d,p],v=6,M=6,x=3,_=2,g=1,S=new Float32Array(x*M*v),y=new Float32Array(_*M*v),w=new Float32Array(g*M*v);for(let R=0;R<v;R++){const P=R%3*2/3-1,N=R>2?0:-1,T=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];S.set(T,x*M*R),y.set(m,_*M*R);const C=[R,R,R,R,R,R];w.set(C,g*M*R)}const A=new ia;A.setAttribute("position",new ta(S,x)),A.setAttribute("uv",new ta(y,_)),A.setAttribute("faceIndex",new ta(w,g)),e.push(A),r>pu&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function $w(n,e,t){const i=new Ma(n,e,t);return i.texture.mapping=Nm,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kh(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function lG(n,e,t){const i=new Float32Array(Uo),r=new j(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Uo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Dy(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:js,depthTest:!1,depthWrite:!1})}function qw(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dy(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:js,depthTest:!1,depthWrite:!1})}function Kw(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dy(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:js,depthTest:!1,depthWrite:!1})}function Dy(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uG(n){let e=new WeakMap,t=null;function i(l){if(l&&l.isTexture){const c=l.mapping,f=c===I_||c===U_,d=c===Bu||c===Hu;if(f||d)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let p=e.get(l);return t===null&&(t=new jw(n)),p=f?t.fromEquirectangular(l,p):t.fromCubemap(l,p),e.set(l,p),p.texture}else{if(e.has(l))return e.get(l).texture;{const p=l.image;if(f&&p&&p.height>0||d&&p&&r(p)){t===null&&(t=new jw(n));const m=f?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,m),l.addEventListener("dispose",a),m.texture}else return null}}}return l}function r(l){let c=0;const f=6;for(let d=0;d<f;d++)l[d]!==void 0&&c++;return c===f}function a(l){const c=l.target;c.removeEventListener("dispose",a);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function cG(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fG(n,e,t,i){const r={},a=new WeakMap;function o(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);for(const M in m.morphAttributes){const x=m.morphAttributes[M];for(let _=0,g=x.length;_<g;_++)e.remove(x[_])}m.removeEventListener("dispose",o),delete r[m.id];const v=a.get(m);v&&(e.remove(v),a.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(p,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,t.memory.geometries++),m}function c(p){const m=p.attributes;for(const M in m)e.update(m[M],n.ARRAY_BUFFER);const v=p.morphAttributes;for(const M in v){const x=v[M];for(let _=0,g=x.length;_<g;_++)e.update(x[_],n.ARRAY_BUFFER)}}function f(p){const m=[],v=p.index,M=p.attributes.position;let x=0;if(v!==null){const S=v.array;x=v.version;for(let y=0,w=S.length;y<w;y+=3){const A=S[y+0],R=S[y+1],P=S[y+2];m.push(A,R,R,P,P,A)}}else if(M!==void 0){const S=M.array;x=M.version;for(let y=0,w=S.length/3-1;y<w;y+=3){const A=y+0,R=y+1,P=y+2;m.push(A,R,R,P,P,A)}}else return;const _=new(tC(m)?sC:Ly)(m,1);_.version=x;const g=a.get(p);g&&e.remove(g),a.set(p,_)}function d(p){const m=a.get(p);if(m){const v=p.index;v!==null&&m.version<v.version&&f(p)}else f(p);return a.get(p)}return{get:l,update:c,getWireframeAttribute:d}}function dG(n,e,t,i){const r=i.isWebGL2;let a;function o(v){a=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function d(v,M){n.drawElements(a,M,l,v*c),t.update(M,a,1)}function p(v,M,x){if(x===0)return;let _,g;if(r)_=n,g="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[g](a,M,l,v*c,x),t.update(M,a,x)}function m(v,M,x){if(x===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<x;g++)this.render(v[g]/c,M[g]);else{_.multiDrawElementsWEBGL(a,M,0,l,v,0,x);let g=0;for(let S=0;S<x;S++)g+=M[S];t.update(g,a,1)}}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=m}function hG(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,l){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=l*(a/3);break;case n.LINES:t.lines+=l*(a/2);break;case n.LINE_STRIP:t.lines+=l*(a-1);break;case n.LINE_LOOP:t.lines+=l*a;break;case n.POINTS:t.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function pG(n,e){return n[0]-e[0]}function mG(n,e){return Math.abs(e[1])-Math.abs(n[1])}function gG(n,e,t){const i={},r=new Float32Array(8),a=new WeakMap,o=new An,l=[];for(let f=0;f<8;f++)l[f]=[f,0];function c(f,d,p){const m=f.morphTargetInfluences;if(e.isWebGL2===!0){const M=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=M!==void 0?M.length:0;let _=a.get(d);if(_===void 0||_.count!==x){let Y=function(){ae.dispose(),a.delete(d),d.removeEventListener("dispose",Y)};var v=Y;_!==void 0&&_.texture.dispose();const y=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,A=d.morphAttributes.color!==void 0,R=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let T=0;y===!0&&(T=1),w===!0&&(T=2),A===!0&&(T=3);let C=d.attributes.position.count*T,G=1;C>e.maxTextureSize&&(G=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const X=new Float32Array(C*G*4*x),ae=new rC(X,C,G,x);ae.type=va,ae.needsUpdate=!0;const k=T*4;for(let K=0;K<x;K++){const se=R[K],H=P[K],Z=N[K],Q=C*G*4*K;for(let le=0;le<se.count;le++){const de=le*k;y===!0&&(o.fromBufferAttribute(se,le),X[Q+de+0]=o.x,X[Q+de+1]=o.y,X[Q+de+2]=o.z,X[Q+de+3]=0),w===!0&&(o.fromBufferAttribute(H,le),X[Q+de+4]=o.x,X[Q+de+5]=o.y,X[Q+de+6]=o.z,X[Q+de+7]=0),A===!0&&(o.fromBufferAttribute(Z,le),X[Q+de+8]=o.x,X[Q+de+9]=o.y,X[Q+de+10]=o.z,X[Q+de+11]=Z.itemSize===4?o.w:1)}}_={count:x,texture:ae,size:new st(C,G)},a.set(d,_),d.addEventListener("dispose",Y)}let g=0;for(let y=0;y<m.length;y++)g+=m[y];const S=d.morphTargetsRelative?1:1-g;p.getUniforms().setValue(n,"morphTargetBaseInfluence",S),p.getUniforms().setValue(n,"morphTargetInfluences",m),p.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),p.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const M=m===void 0?0:m.length;let x=i[d.id];if(x===void 0||x.length!==M){x=[];for(let w=0;w<M;w++)x[w]=[w,0];i[d.id]=x}for(let w=0;w<M;w++){const A=x[w];A[0]=w,A[1]=m[w]}x.sort(mG);for(let w=0;w<8;w++)w<M&&x[w][1]?(l[w][0]=x[w][0],l[w][1]=x[w][1]):(l[w][0]=Number.MAX_SAFE_INTEGER,l[w][1]=0);l.sort(pG);const _=d.morphAttributes.position,g=d.morphAttributes.normal;let S=0;for(let w=0;w<8;w++){const A=l[w],R=A[0],P=A[1];R!==Number.MAX_SAFE_INTEGER&&P?(_&&d.getAttribute("morphTarget"+w)!==_[R]&&d.setAttribute("morphTarget"+w,_[R]),g&&d.getAttribute("morphNormal"+w)!==g[R]&&d.setAttribute("morphNormal"+w,g[R]),r[w]=P,S+=P):(_&&d.hasAttribute("morphTarget"+w)===!0&&d.deleteAttribute("morphTarget"+w),g&&d.hasAttribute("morphNormal"+w)===!0&&d.deleteAttribute("morphNormal"+w),r[w]=0)}const y=d.morphTargetsRelative?1:1-S;p.getUniforms().setValue(n,"morphTargetBaseInfluence",y),p.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function vG(n,e,t,i){let r=new WeakMap;function a(c){const f=i.render.frame,d=c.geometry,p=e.get(c,d);if(r.get(p)!==f&&(e.update(p),r.set(p,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==f&&(m.update(),r.set(m,f))}return p}function o(){r=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}class hC extends Mi{constructor(e,t,i,r,a,o,l,c,f,d){if(d=d!==void 0?d:Xo,d!==Xo&&d!==Gu)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Xo&&(i=Is),i===void 0&&d===Gu&&(i=Vo),super(null,r,a,o,l,c,d,i,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:Un,this.minFilter=c!==void 0?c:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const pC=new Mi,mC=new hC(1,1);mC.compareFunction=J2;const gC=new rC,vC=new tB,_C=new uC,Zw=[],Qw=[],Jw=new Float32Array(16),eT=new Float32Array(9),tT=new Float32Array(4);function tc(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Zw[r];if(a===void 0&&(a=new Float32Array(r),Zw[r]=a),e!==0){i.toArray(a,0);for(let o=1,l=0;o!==e;++o)l+=t,n[o].toArray(a,l)}return a}function Fn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zm(n,e){let t=Qw[e];t===void 0&&(t=new Int32Array(e),Qw[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _G(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function xG(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;n.uniform2fv(this.addr,e),kn(t,e)}}function yG(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Fn(t,e))return;n.uniform3fv(this.addr,e),kn(t,e)}}function SG(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;n.uniform4fv(this.addr,e),kn(t,e)}}function EG(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Fn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kn(t,e)}else{if(Fn(t,i))return;tT.set(i),n.uniformMatrix2fv(this.addr,!1,tT),kn(t,i)}}function MG(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Fn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kn(t,e)}else{if(Fn(t,i))return;eT.set(i),n.uniformMatrix3fv(this.addr,!1,eT),kn(t,i)}}function wG(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Fn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kn(t,e)}else{if(Fn(t,i))return;Jw.set(i),n.uniformMatrix4fv(this.addr,!1,Jw),kn(t,i)}}function TG(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function bG(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;n.uniform2iv(this.addr,e),kn(t,e)}}function AG(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Fn(t,e))return;n.uniform3iv(this.addr,e),kn(t,e)}}function CG(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;n.uniform4iv(this.addr,e),kn(t,e)}}function RG(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function PG(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;n.uniform2uiv(this.addr,e),kn(t,e)}}function LG(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Fn(t,e))return;n.uniform3uiv(this.addr,e),kn(t,e)}}function DG(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;n.uniform4uiv(this.addr,e),kn(t,e)}}function IG(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const a=this.type===n.SAMPLER_2D_SHADOW?mC:pC;t.setTexture2D(e||a,r)}function UG(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||vC,r)}function NG(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||_C,r)}function OG(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||gC,r)}function FG(n){switch(n){case 5126:return _G;case 35664:return xG;case 35665:return yG;case 35666:return SG;case 35674:return EG;case 35675:return MG;case 35676:return wG;case 5124:case 35670:return TG;case 35667:case 35671:return bG;case 35668:case 35672:return AG;case 35669:case 35673:return CG;case 5125:return RG;case 36294:return PG;case 36295:return LG;case 36296:return DG;case 35678:case 36198:case 36298:case 36306:case 35682:return IG;case 35679:case 36299:case 36307:return UG;case 35680:case 36300:case 36308:case 36293:return NG;case 36289:case 36303:case 36311:case 36292:return OG}}function kG(n,e){n.uniform1fv(this.addr,e)}function zG(n,e){const t=tc(e,this.size,2);n.uniform2fv(this.addr,t)}function BG(n,e){const t=tc(e,this.size,3);n.uniform3fv(this.addr,t)}function HG(n,e){const t=tc(e,this.size,4);n.uniform4fv(this.addr,t)}function GG(n,e){const t=tc(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function WG(n,e){const t=tc(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function VG(n,e){const t=tc(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function XG(n,e){n.uniform1iv(this.addr,e)}function YG(n,e){n.uniform2iv(this.addr,e)}function jG(n,e){n.uniform3iv(this.addr,e)}function $G(n,e){n.uniform4iv(this.addr,e)}function qG(n,e){n.uniform1uiv(this.addr,e)}function KG(n,e){n.uniform2uiv(this.addr,e)}function ZG(n,e){n.uniform3uiv(this.addr,e)}function QG(n,e){n.uniform4uiv(this.addr,e)}function JG(n,e,t){const i=this.cache,r=e.length,a=zm(t,r);Fn(i,a)||(n.uniform1iv(this.addr,a),kn(i,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||pC,a[o])}function e6(n,e,t){const i=this.cache,r=e.length,a=zm(t,r);Fn(i,a)||(n.uniform1iv(this.addr,a),kn(i,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||vC,a[o])}function t6(n,e,t){const i=this.cache,r=e.length,a=zm(t,r);Fn(i,a)||(n.uniform1iv(this.addr,a),kn(i,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||_C,a[o])}function n6(n,e,t){const i=this.cache,r=e.length,a=zm(t,r);Fn(i,a)||(n.uniform1iv(this.addr,a),kn(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||gC,a[o])}function i6(n){switch(n){case 5126:return kG;case 35664:return zG;case 35665:return BG;case 35666:return HG;case 35674:return GG;case 35675:return WG;case 35676:return VG;case 5124:case 35670:return XG;case 35667:case 35671:return YG;case 35668:case 35672:return jG;case 35669:case 35673:return $G;case 5125:return qG;case 36294:return KG;case 36295:return ZG;case 36296:return QG;case 35678:case 36198:case 36298:case 36306:case 35682:return JG;case 35679:case 36299:case 36307:return e6;case 35680:case 36300:case 36308:case 36293:return t6;case 36289:case 36303:case 36311:case 36292:return n6}}class r6{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=FG(t.type)}}class a6{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=i6(t.type)}}class s6{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const l=r[a];l.setValue(e,t[l.id],i)}}}const s0=/(\w+)(\])?(\[|\.)?/g;function nT(n,e){n.seq.push(e),n.map[e.id]=e}function o6(n,e,t){const i=n.name,r=i.length;for(s0.lastIndex=0;;){const a=s0.exec(i),o=s0.lastIndex;let l=a[1];const c=a[2]==="]",f=a[3];if(c&&(l=l|0),f===void 0||f==="["&&o+2===r){nT(t,f===void 0?new r6(l,n,e):new a6(l,n,e));break}else{let p=t.map[l];p===void 0&&(p=new s6(l),nT(t,p)),t=p}}}class gp{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);o6(a,o,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,o=t.length;a!==o;++a){const l=t[a],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function iT(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const l6=37297;let u6=0;function c6(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const l=o+1;i.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return i.join(`
`)}function f6(n){const e=zt.getPrimaries(zt.workingColorSpace),t=zt.getPrimaries(n);let i;switch(e===t?i="":e===nm&&t===tm?i="LinearDisplayP3ToLinearSRGB":e===tm&&t===nm&&(i="LinearSRGBToLinearDisplayP3"),n){case Ja:case Om:return[i,"LinearTransferOETF"];case Zn:case Ay:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function rT(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+c6(n.getShaderSource(e),o)}else return r}function d6(n,e){const t=f6(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function h6(n,e){let t;switch(e){case uz:t="Linear";break;case cz:t="Reinhard";break;case fz:t="OptimizedCineon";break;case dz:t="ACESFilmic";break;case pz:t="AgX";break;case hz:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function p6(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mu).join(`
`)}function m6(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(mu).join(`
`)}function g6(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function v6(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),o=a.name;let l=1;a.type===n.FLOAT_MAT2&&(l=2),a.type===n.FLOAT_MAT3&&(l=3),a.type===n.FLOAT_MAT4&&(l=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:l}}return t}function mu(n){return n!==""}function aT(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sT(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _6=/^[ \t]*#include +<([\w\d./]+)>/gm;function k_(n){return n.replace(_6,y6)}const x6=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function y6(n,e){let t=vt[e];if(t===void 0){const i=x6.get(e);if(i!==void 0)t=vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return k_(t)}const S6=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oT(n){return n.replace(S6,E6)}function E6(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function lT(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function M6(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===G2?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===F4?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ba&&(e="SHADOWMAP_TYPE_VSM"),e}function w6(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Bu:case Hu:e="ENVMAP_TYPE_CUBE";break;case Nm:e="ENVMAP_TYPE_CUBE_UV";break}return e}function T6(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hu:e="ENVMAP_MODE_REFRACTION";break}return e}function b6(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case W2:e="ENVMAP_BLENDING_MULTIPLY";break;case oz:e="ENVMAP_BLENDING_MIX";break;case lz:e="ENVMAP_BLENDING_ADD";break}return e}function A6(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function C6(n,e,t,i){const r=n.getContext(),a=t.defines;let o=t.vertexShader,l=t.fragmentShader;const c=M6(t),f=w6(t),d=T6(t),p=b6(t),m=A6(t),v=t.isWebGL2?"":p6(t),M=m6(t),x=g6(a),_=r.createProgram();let g,S,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(mu).join(`
`),g.length>0&&(g+=`
`),S=[v,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(mu).join(`
`),S.length>0&&(S+=`
`)):(g=[lT(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mu).join(`
`),S=[v,lT(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$s?"#define TONE_MAPPING":"",t.toneMapping!==$s?vt.tonemapping_pars_fragment:"",t.toneMapping!==$s?h6("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,d6("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mu).join(`
`)),o=k_(o),o=aT(o,t),o=sT(o,t),l=k_(l),l=aT(l,t),l=sT(l,t),o=oT(o),l=oT(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[M,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===bw?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bw?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const w=y+g+o,A=y+S+l,R=iT(r,r.VERTEX_SHADER,w),P=iT(r,r.FRAGMENT_SHADER,A);r.attachShader(_,R),r.attachShader(_,P),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function N(X){if(n.debug.checkShaderErrors){const ae=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(R).trim(),Y=r.getShaderInfoLog(P).trim();let K=!0,se=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,P);else{const H=rT(r,R,"vertex"),Z=rT(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+ae+`
`+H+`
`+Z)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(k===""||Y==="")&&(se=!1);se&&(X.diagnostics={runnable:K,programLog:ae,vertexShader:{log:k,prefix:g},fragmentShader:{log:Y,prefix:S}})}r.deleteShader(R),r.deleteShader(P),T=new gp(r,_),C=v6(r,_)}let T;this.getUniforms=function(){return T===void 0&&N(this),T};let C;this.getAttributes=function(){return C===void 0&&N(this),C};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(_,l6)),G},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=u6++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=P,this}let R6=0;class P6{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new L6(e),t.set(e,i)),i}}class L6{constructor(e){this.id=R6++,this.code=e,this.usedTimes=0}}function D6(n,e,t,i,r,a,o){const l=new Py,c=new P6,f=[],d=r.isWebGL2,p=r.logarithmicDepthBuffer,m=r.vertexTextures;let v=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return T===0?"uv":`uv${T}`}function _(T,C,G,X,ae){const k=X.fog,Y=ae.geometry,K=T.isMeshStandardMaterial?X.environment:null,se=(T.isMeshStandardMaterial?t:e).get(T.envMap||K),H=se&&se.mapping===Nm?se.image.height:null,Z=M[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const Q=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,le=Q!==void 0?Q.length:0;let de=0;Y.morphAttributes.position!==void 0&&(de=1),Y.morphAttributes.normal!==void 0&&(de=2),Y.morphAttributes.color!==void 0&&(de=3);let re,ue,xe,Le;if(Z){const jn=ha[Z];re=jn.vertexShader,ue=jn.fragmentShader}else re=T.vertexShader,ue=T.fragmentShader,c.update(T),xe=c.getVertexShaderID(T),Le=c.getFragmentShaderID(T);const Ne=n.getRenderTarget(),et=ae.isInstancedMesh===!0,nt=ae.isBatchedMesh===!0,Ze=!!T.map,xt=!!T.matcap,J=!!se,Bn=!!T.aoMap,Oe=!!T.lightMap,Qe=!!T.bumpMap,Ge=!!T.normalMap,At=!!T.displacementMap,ct=!!T.emissiveMap,O=!!T.metalnessMap,D=!!T.roughnessMap,q=T.anisotropy>0,ge=T.clearcoat>0,pe=T.iridescence>0,_e=T.sheen>0,Fe=T.transmission>0,be=q&&!!T.anisotropyMap,Ce=ge&&!!T.clearcoatMap,Ve=ge&&!!T.clearcoatNormalMap,ot=ge&&!!T.clearcoatRoughnessMap,me=pe&&!!T.iridescenceMap,Pt=pe&&!!T.iridescenceThicknessMap,ft=_e&&!!T.sheenColorMap,tt=_e&&!!T.sheenRoughnessMap,We=!!T.specularMap,Ie=!!T.specularColorMap,it=!!T.specularIntensityMap,Ct=Fe&&!!T.transmissionMap,en=Fe&&!!T.thicknessMap,pt=!!T.gradientMap,ye=!!T.alphaMap,B=T.alphaTest>0,Ee=!!T.alphaHash,Me=!!T.extensions,Je=!!Y.attributes.uv1,Xe=!!Y.attributes.uv2,Ft=!!Y.attributes.uv3;let It=$s;return T.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(It=n.toneMapping),{isWebGL2:d,shaderID:Z,shaderType:T.type,shaderName:T.name,vertexShader:re,fragmentShader:ue,defines:T.defines,customVertexShaderID:xe,customFragmentShaderID:Le,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:nt,instancing:et,instancingColor:et&&ae.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:Ne===null?n.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Ja,map:Ze,matcap:xt,envMap:J,envMapMode:J&&se.mapping,envMapCubeUVHeight:H,aoMap:Bn,lightMap:Oe,bumpMap:Qe,normalMap:Ge,displacementMap:m&&At,emissiveMap:ct,normalMapObjectSpace:Ge&&T.normalMapType===Cz,normalMapTangentSpace:Ge&&T.normalMapType===Az,metalnessMap:O,roughnessMap:D,anisotropy:q,anisotropyMap:be,clearcoat:ge,clearcoatMap:Ce,clearcoatNormalMap:Ve,clearcoatRoughnessMap:ot,iridescence:pe,iridescenceMap:me,iridescenceThicknessMap:Pt,sheen:_e,sheenColorMap:ft,sheenRoughnessMap:tt,specularMap:We,specularColorMap:Ie,specularIntensityMap:it,transmission:Fe,transmissionMap:Ct,thicknessMap:en,gradientMap:pt,opaque:T.transparent===!1&&T.blending===Au,alphaMap:ye,alphaTest:B,alphaHash:Ee,combine:T.combine,mapUv:Ze&&x(T.map.channel),aoMapUv:Bn&&x(T.aoMap.channel),lightMapUv:Oe&&x(T.lightMap.channel),bumpMapUv:Qe&&x(T.bumpMap.channel),normalMapUv:Ge&&x(T.normalMap.channel),displacementMapUv:At&&x(T.displacementMap.channel),emissiveMapUv:ct&&x(T.emissiveMap.channel),metalnessMapUv:O&&x(T.metalnessMap.channel),roughnessMapUv:D&&x(T.roughnessMap.channel),anisotropyMapUv:be&&x(T.anisotropyMap.channel),clearcoatMapUv:Ce&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:tt&&x(T.sheenRoughnessMap.channel),specularMapUv:We&&x(T.specularMap.channel),specularColorMapUv:Ie&&x(T.specularColorMap.channel),specularIntensityMapUv:it&&x(T.specularIntensityMap.channel),transmissionMapUv:Ct&&x(T.transmissionMap.channel),thicknessMapUv:en&&x(T.thicknessMap.channel),alphaMapUv:ye&&x(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ge||q),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:Je,vertexUv2s:Xe,vertexUv3s:Ft,pointsUvs:ae.isPoints===!0&&!!Y.attributes.uv&&(Ze||ye),fog:!!k,useFog:T.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:ae.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:de,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:It,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ze&&T.map.isVideoTexture===!0&&zt.getTransfer(T.map.colorSpace)===Kt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===tr,flipSided:T.side===Fi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Me&&T.extensions.derivatives===!0,extensionFragDepth:Me&&T.extensions.fragDepth===!0,extensionDrawBuffers:Me&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Me&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Me&&T.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function g(T){const C=[];if(T.shaderID?C.push(T.shaderID):(C.push(T.customVertexShaderID),C.push(T.customFragmentShaderID)),T.defines!==void 0)for(const G in T.defines)C.push(G),C.push(T.defines[G]);return T.isRawShaderMaterial===!1&&(S(C,T),y(C,T),C.push(n.outputColorSpace)),C.push(T.customProgramCacheKey),C.join()}function S(T,C){T.push(C.precision),T.push(C.outputColorSpace),T.push(C.envMapMode),T.push(C.envMapCubeUVHeight),T.push(C.mapUv),T.push(C.alphaMapUv),T.push(C.lightMapUv),T.push(C.aoMapUv),T.push(C.bumpMapUv),T.push(C.normalMapUv),T.push(C.displacementMapUv),T.push(C.emissiveMapUv),T.push(C.metalnessMapUv),T.push(C.roughnessMapUv),T.push(C.anisotropyMapUv),T.push(C.clearcoatMapUv),T.push(C.clearcoatNormalMapUv),T.push(C.clearcoatRoughnessMapUv),T.push(C.iridescenceMapUv),T.push(C.iridescenceThicknessMapUv),T.push(C.sheenColorMapUv),T.push(C.sheenRoughnessMapUv),T.push(C.specularMapUv),T.push(C.specularColorMapUv),T.push(C.specularIntensityMapUv),T.push(C.transmissionMapUv),T.push(C.thicknessMapUv),T.push(C.combine),T.push(C.fogExp2),T.push(C.sizeAttenuation),T.push(C.morphTargetsCount),T.push(C.morphAttributeCount),T.push(C.numDirLights),T.push(C.numPointLights),T.push(C.numSpotLights),T.push(C.numSpotLightMaps),T.push(C.numHemiLights),T.push(C.numRectAreaLights),T.push(C.numDirLightShadows),T.push(C.numPointLightShadows),T.push(C.numSpotLightShadows),T.push(C.numSpotLightShadowsWithMaps),T.push(C.numLightProbes),T.push(C.shadowMapType),T.push(C.toneMapping),T.push(C.numClippingPlanes),T.push(C.numClipIntersection),T.push(C.depthPacking)}function y(T,C){l.disableAll(),C.isWebGL2&&l.enable(0),C.supportsVertexTextures&&l.enable(1),C.instancing&&l.enable(2),C.instancingColor&&l.enable(3),C.matcap&&l.enable(4),C.envMap&&l.enable(5),C.normalMapObjectSpace&&l.enable(6),C.normalMapTangentSpace&&l.enable(7),C.clearcoat&&l.enable(8),C.iridescence&&l.enable(9),C.alphaTest&&l.enable(10),C.vertexColors&&l.enable(11),C.vertexAlphas&&l.enable(12),C.vertexUv1s&&l.enable(13),C.vertexUv2s&&l.enable(14),C.vertexUv3s&&l.enable(15),C.vertexTangents&&l.enable(16),C.anisotropy&&l.enable(17),C.alphaHash&&l.enable(18),C.batching&&l.enable(19),T.push(l.mask),l.disableAll(),C.fog&&l.enable(0),C.useFog&&l.enable(1),C.flatShading&&l.enable(2),C.logarithmicDepthBuffer&&l.enable(3),C.skinning&&l.enable(4),C.morphTargets&&l.enable(5),C.morphNormals&&l.enable(6),C.morphColors&&l.enable(7),C.premultipliedAlpha&&l.enable(8),C.shadowMapEnabled&&l.enable(9),C.useLegacyLights&&l.enable(10),C.doubleSided&&l.enable(11),C.flipSided&&l.enable(12),C.useDepthPacking&&l.enable(13),C.dithering&&l.enable(14),C.transmission&&l.enable(15),C.sheen&&l.enable(16),C.opaque&&l.enable(17),C.pointsUvs&&l.enable(18),C.decodeVideoTexture&&l.enable(19),T.push(l.mask)}function w(T){const C=M[T.type];let G;if(C){const X=ha[C];G=pB.clone(X.uniforms)}else G=T.uniforms;return G}function A(T,C){let G;for(let X=0,ae=f.length;X<ae;X++){const k=f[X];if(k.cacheKey===C){G=k,++G.usedTimes;break}}return G===void 0&&(G=new C6(n,C,T,a),f.push(G)),G}function R(T){if(--T.usedTimes===0){const C=f.indexOf(T);f[C]=f[f.length-1],f.pop(),T.destroy()}}function P(T){c.remove(T)}function N(){c.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:w,acquireProgram:A,releaseProgram:R,releaseShaderCache:P,programs:f,dispose:N}}function I6(){let n=new WeakMap;function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function t(a){n.delete(a)}function i(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function U6(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function uT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cT(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function o(p,m,v,M,x,_){let g=n[e];return g===void 0?(g={id:p.id,object:p,geometry:m,material:v,groupOrder:M,renderOrder:p.renderOrder,z:x,group:_},n[e]=g):(g.id=p.id,g.object=p,g.geometry=m,g.material=v,g.groupOrder=M,g.renderOrder=p.renderOrder,g.z=x,g.group=_),e++,g}function l(p,m,v,M,x,_){const g=o(p,m,v,M,x,_);v.transmission>0?i.push(g):v.transparent===!0?r.push(g):t.push(g)}function c(p,m,v,M,x,_){const g=o(p,m,v,M,x,_);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):t.unshift(g)}function f(p,m){t.length>1&&t.sort(p||U6),i.length>1&&i.sort(m||uT),r.length>1&&r.sort(m||uT)}function d(){for(let p=e,m=n.length;p<m;p++){const v=n[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:l,unshift:c,finish:d,sort:f}}function N6(){let n=new WeakMap;function e(i,r){const a=n.get(i);let o;return a===void 0?(o=new cT,n.set(i,[o])):r>=a.length?(o=new cT,a.push(o)):o=a[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function O6(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new Bt};break;case"SpotLight":t={position:new j,direction:new j,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":t={color:new Bt,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function F6(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let k6=0;function z6(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function B6(n,e){const t=new O6,i=F6(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new j);const a=new j,o=new Ot,l=new Ot;function c(d,p){let m=0,v=0,M=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let x=0,_=0,g=0,S=0,y=0,w=0,A=0,R=0,P=0,N=0,T=0;d.sort(z6);const C=p===!0?Math.PI:1;for(let X=0,ae=d.length;X<ae;X++){const k=d[X],Y=k.color,K=k.intensity,se=k.distance,H=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)m+=Y.r*K*C,v+=Y.g*K*C,M+=Y.b*K*C;else if(k.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(k.sh.coefficients[Z],K);T++}else if(k.isDirectionalLight){const Z=t.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity*C),k.castShadow){const Q=k.shadow,le=i.get(k);le.shadowBias=Q.bias,le.shadowNormalBias=Q.normalBias,le.shadowRadius=Q.radius,le.shadowMapSize=Q.mapSize,r.directionalShadow[x]=le,r.directionalShadowMap[x]=H,r.directionalShadowMatrix[x]=k.shadow.matrix,w++}r.directional[x]=Z,x++}else if(k.isSpotLight){const Z=t.get(k);Z.position.setFromMatrixPosition(k.matrixWorld),Z.color.copy(Y).multiplyScalar(K*C),Z.distance=se,Z.coneCos=Math.cos(k.angle),Z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Z.decay=k.decay,r.spot[g]=Z;const Q=k.shadow;if(k.map&&(r.spotLightMap[P]=k.map,P++,Q.updateMatrices(k),k.castShadow&&N++),r.spotLightMatrix[g]=Q.matrix,k.castShadow){const le=i.get(k);le.shadowBias=Q.bias,le.shadowNormalBias=Q.normalBias,le.shadowRadius=Q.radius,le.shadowMapSize=Q.mapSize,r.spotShadow[g]=le,r.spotShadowMap[g]=H,R++}g++}else if(k.isRectAreaLight){const Z=t.get(k);Z.color.copy(Y).multiplyScalar(K),Z.halfWidth.set(k.width*.5,0,0),Z.halfHeight.set(0,k.height*.5,0),r.rectArea[S]=Z,S++}else if(k.isPointLight){const Z=t.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity*C),Z.distance=k.distance,Z.decay=k.decay,k.castShadow){const Q=k.shadow,le=i.get(k);le.shadowBias=Q.bias,le.shadowNormalBias=Q.normalBias,le.shadowRadius=Q.radius,le.shadowMapSize=Q.mapSize,le.shadowCameraNear=Q.camera.near,le.shadowCameraFar=Q.camera.far,r.pointShadow[_]=le,r.pointShadowMap[_]=H,r.pointShadowMatrix[_]=k.shadow.matrix,A++}r.point[_]=Z,_++}else if(k.isHemisphereLight){const Z=t.get(k);Z.skyColor.copy(k.color).multiplyScalar(K*C),Z.groundColor.copy(k.groundColor).multiplyScalar(K*C),r.hemi[y]=Z,y++}}S>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=m,r.ambient[1]=v,r.ambient[2]=M;const G=r.hash;(G.directionalLength!==x||G.pointLength!==_||G.spotLength!==g||G.rectAreaLength!==S||G.hemiLength!==y||G.numDirectionalShadows!==w||G.numPointShadows!==A||G.numSpotShadows!==R||G.numSpotMaps!==P||G.numLightProbes!==T)&&(r.directional.length=x,r.spot.length=g,r.rectArea.length=S,r.point.length=_,r.hemi.length=y,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=R+P-N,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=T,G.directionalLength=x,G.pointLength=_,G.spotLength=g,G.rectAreaLength=S,G.hemiLength=y,G.numDirectionalShadows=w,G.numPointShadows=A,G.numSpotShadows=R,G.numSpotMaps=P,G.numLightProbes=T,r.version=k6++)}function f(d,p){let m=0,v=0,M=0,x=0,_=0;const g=p.matrixWorldInverse;for(let S=0,y=d.length;S<y;S++){const w=d[S];if(w.isDirectionalLight){const A=r.directional[m];A.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(g),m++}else if(w.isSpotLight){const A=r.spot[M];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(g),M++}else if(w.isRectAreaLight){const A=r.rectArea[x];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(g),l.identity(),o.copy(w.matrixWorld),o.premultiply(g),l.extractRotation(o),A.halfWidth.set(w.width*.5,0,0),A.halfHeight.set(0,w.height*.5,0),A.halfWidth.applyMatrix4(l),A.halfHeight.applyMatrix4(l),x++}else if(w.isPointLight){const A=r.point[v];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(g),v++}else if(w.isHemisphereLight){const A=r.hemi[_];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(g),_++}}}return{setup:c,setupView:f,state:r}}function fT(n,e){const t=new B6(n,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(p){i.push(p)}function l(p){r.push(p)}function c(p){t.setup(i,p)}function f(p){t.setupView(i,p)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:f,pushLight:o,pushShadow:l}}function H6(n,e){let t=new WeakMap;function i(a,o=0){const l=t.get(a);let c;return l===void 0?(c=new fT(n,e),t.set(a,[c])):o>=l.length?(c=new fT(n,e),l.push(c)):c=l[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class G6 extends km{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tz,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class W6 extends km{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const V6=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X6=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Y6(n,e,t){let i=new cC;const r=new st,a=new st,o=new An,l=new G6({depthPacking:bz}),c=new W6,f={},d=t.maxTextureSize,p={[eo]:Fi,[Fi]:eo,[tr]:tr},m=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:V6,fragmentShader:X6}),v=m.clone();v.defines.HORIZONTAL_PASS=1;const M=new ia;M.setAttribute("position",new ta(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new cn(M,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=G2;let g=this.type;this.render=function(R,P,N){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||R.length===0)return;const T=n.getRenderTarget(),C=n.getActiveCubeFace(),G=n.getActiveMipmapLevel(),X=n.state;X.setBlending(js),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const ae=g!==Ba&&this.type===Ba,k=g===Ba&&this.type!==Ba;for(let Y=0,K=R.length;Y<K;Y++){const se=R[Y],H=se.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const Z=H.getFrameExtents();if(r.multiply(Z),a.copy(H.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/Z.x),r.x=a.x*Z.x,H.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/Z.y),r.y=a.y*Z.y,H.mapSize.y=a.y)),H.map===null||ae===!0||k===!0){const le=this.type!==Ba?{minFilter:Un,magFilter:Un}:{};H.map!==null&&H.map.dispose(),H.map=new Ma(r.x,r.y,le),H.map.texture.name=se.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const Q=H.getViewportCount();for(let le=0;le<Q;le++){const de=H.getViewport(le);o.set(a.x*de.x,a.y*de.y,a.x*de.z,a.y*de.w),X.viewport(o),H.updateMatrices(se,le),i=H.getFrustum(),w(P,N,H.camera,se,this.type)}H.isPointLightShadow!==!0&&this.type===Ba&&S(H,N),H.needsUpdate=!1}g=this.type,_.needsUpdate=!1,n.setRenderTarget(T,C,G)};function S(R,P){const N=e.update(x);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,v.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ma(r.x,r.y)),m.uniforms.shadow_pass.value=R.map.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,N,m,x,null),v.uniforms.shadow_pass.value=R.mapPass.texture,v.uniforms.resolution.value=R.mapSize,v.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,N,v,x,null)}function y(R,P,N,T){let C=null;const G=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(G!==void 0)C=G;else if(C=N.isPointLight===!0?c:l,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const X=C.uuid,ae=P.uuid;let k=f[X];k===void 0&&(k={},f[X]=k);let Y=k[ae];Y===void 0&&(Y=C.clone(),k[ae]=Y,P.addEventListener("dispose",A)),C=Y}if(C.visible=P.visible,C.wireframe=P.wireframe,T===Ba?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:p[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,N.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const X=n.properties.get(C);X.light=N}return C}function w(R,P,N,T,C){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&C===Ba)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const ae=e.update(R),k=R.material;if(Array.isArray(k)){const Y=ae.groups;for(let K=0,se=Y.length;K<se;K++){const H=Y[K],Z=k[H.materialIndex];if(Z&&Z.visible){const Q=y(R,Z,T,C);R.onBeforeShadow(n,R,P,N,ae,Q,H),n.renderBufferDirect(N,null,ae,Q,R,H),R.onAfterShadow(n,R,P,N,ae,Q,H)}}}else if(k.visible){const Y=y(R,k,T,C);R.onBeforeShadow(n,R,P,N,ae,Y,null),n.renderBufferDirect(N,null,ae,Y,R,null),R.onAfterShadow(n,R,P,N,ae,Y,null)}}const X=R.children;for(let ae=0,k=X.length;ae<k;ae++)w(X[ae],P,N,T,C)}function A(R){R.target.removeEventListener("dispose",A);for(const N in f){const T=f[N],C=R.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function j6(n,e,t){const i=t.isWebGL2;function r(){let B=!1;const Ee=new An;let Me=null;const Je=new An(0,0,0,0);return{setMask:function(Xe){Me!==Xe&&!B&&(n.colorMask(Xe,Xe,Xe,Xe),Me=Xe)},setLocked:function(Xe){B=Xe},setClear:function(Xe,Ft,It,En,jn){jn===!0&&(Xe*=En,Ft*=En,It*=En),Ee.set(Xe,Ft,It,En),Je.equals(Ee)===!1&&(n.clearColor(Xe,Ft,It,En),Je.copy(Ee))},reset:function(){B=!1,Me=null,Je.set(-1,0,0,0)}}}function a(){let B=!1,Ee=null,Me=null,Je=null;return{setTest:function(Xe){Xe?nt(n.DEPTH_TEST):Ze(n.DEPTH_TEST)},setMask:function(Xe){Ee!==Xe&&!B&&(n.depthMask(Xe),Ee=Xe)},setFunc:function(Xe){if(Me!==Xe){switch(Xe){case ez:n.depthFunc(n.NEVER);break;case tz:n.depthFunc(n.ALWAYS);break;case nz:n.depthFunc(n.LESS);break;case Jp:n.depthFunc(n.LEQUAL);break;case iz:n.depthFunc(n.EQUAL);break;case rz:n.depthFunc(n.GEQUAL);break;case az:n.depthFunc(n.GREATER);break;case sz:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=Xe}},setLocked:function(Xe){B=Xe},setClear:function(Xe){Je!==Xe&&(n.clearDepth(Xe),Je=Xe)},reset:function(){B=!1,Ee=null,Me=null,Je=null}}}function o(){let B=!1,Ee=null,Me=null,Je=null,Xe=null,Ft=null,It=null,En=null,jn=null;return{setTest:function(kt){B||(kt?nt(n.STENCIL_TEST):Ze(n.STENCIL_TEST))},setMask:function(kt){Ee!==kt&&!B&&(n.stencilMask(kt),Ee=kt)},setFunc:function(kt,Rn,pr){(Me!==kt||Je!==Rn||Xe!==pr)&&(n.stencilFunc(kt,Rn,pr),Me=kt,Je=Rn,Xe=pr)},setOp:function(kt,Rn,pr){(Ft!==kt||It!==Rn||En!==pr)&&(n.stencilOp(kt,Rn,pr),Ft=kt,It=Rn,En=pr)},setLocked:function(kt){B=kt},setClear:function(kt){jn!==kt&&(n.clearStencil(kt),jn=kt)},reset:function(){B=!1,Ee=null,Me=null,Je=null,Xe=null,Ft=null,It=null,En=null,jn=null}}}const l=new r,c=new a,f=new o,d=new WeakMap,p=new WeakMap;let m={},v={},M=new WeakMap,x=[],_=null,g=!1,S=null,y=null,w=null,A=null,R=null,P=null,N=null,T=new Bt(0,0,0),C=0,G=!1,X=null,ae=null,k=null,Y=null,K=null;const se=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Q)[1]),H=Z>=1):Q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),H=Z>=2);let le=null,de={};const re=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),xe=new An().fromArray(re),Le=new An().fromArray(ue);function Ne(B,Ee,Me,Je){const Xe=new Uint8Array(4),Ft=n.createTexture();n.bindTexture(B,Ft),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<Me;It++)i&&(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)?n.texImage3D(Ee,0,n.RGBA,1,1,Je,0,n.RGBA,n.UNSIGNED_BYTE,Xe):n.texImage2D(Ee+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Xe);return Ft}const et={};et[n.TEXTURE_2D]=Ne(n.TEXTURE_2D,n.TEXTURE_2D,1),et[n.TEXTURE_CUBE_MAP]=Ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(et[n.TEXTURE_2D_ARRAY]=Ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),et[n.TEXTURE_3D]=Ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),nt(n.DEPTH_TEST),c.setFunc(Jp),ct(!1),O(YM),nt(n.CULL_FACE),Ge(js);function nt(B){m[B]!==!0&&(n.enable(B),m[B]=!0)}function Ze(B){m[B]!==!1&&(n.disable(B),m[B]=!1)}function xt(B,Ee){return v[B]!==Ee?(n.bindFramebuffer(B,Ee),v[B]=Ee,i&&(B===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=Ee),B===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function J(B,Ee){let Me=x,Je=!1;if(B)if(Me=M.get(Ee),Me===void 0&&(Me=[],M.set(Ee,Me)),B.isWebGLMultipleRenderTargets){const Xe=B.texture;if(Me.length!==Xe.length||Me[0]!==n.COLOR_ATTACHMENT0){for(let Ft=0,It=Xe.length;Ft<It;Ft++)Me[Ft]=n.COLOR_ATTACHMENT0+Ft;Me.length=Xe.length,Je=!0}}else Me[0]!==n.COLOR_ATTACHMENT0&&(Me[0]=n.COLOR_ATTACHMENT0,Je=!0);else Me[0]!==n.BACK&&(Me[0]=n.BACK,Je=!0);Je&&(t.isWebGL2?n.drawBuffers(Me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Me))}function Bn(B){return _!==B?(n.useProgram(B),_=B,!0):!1}const Oe={[Io]:n.FUNC_ADD,[z4]:n.FUNC_SUBTRACT,[B4]:n.FUNC_REVERSE_SUBTRACT};if(i)Oe[qM]=n.MIN,Oe[KM]=n.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&(Oe[qM]=B.MIN_EXT,Oe[KM]=B.MAX_EXT)}const Qe={[H4]:n.ZERO,[G4]:n.ONE,[W4]:n.SRC_COLOR,[L_]:n.SRC_ALPHA,[q4]:n.SRC_ALPHA_SATURATE,[j4]:n.DST_COLOR,[X4]:n.DST_ALPHA,[V4]:n.ONE_MINUS_SRC_COLOR,[D_]:n.ONE_MINUS_SRC_ALPHA,[$4]:n.ONE_MINUS_DST_COLOR,[Y4]:n.ONE_MINUS_DST_ALPHA,[K4]:n.CONSTANT_COLOR,[Z4]:n.ONE_MINUS_CONSTANT_COLOR,[Q4]:n.CONSTANT_ALPHA,[J4]:n.ONE_MINUS_CONSTANT_ALPHA};function Ge(B,Ee,Me,Je,Xe,Ft,It,En,jn,kt){if(B===js){g===!0&&(Ze(n.BLEND),g=!1);return}if(g===!1&&(nt(n.BLEND),g=!0),B!==k4){if(B!==S||kt!==G){if((y!==Io||R!==Io)&&(n.blendEquation(n.FUNC_ADD),y=Io,R=Io),kt)switch(B){case Au:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case P_:n.blendFunc(n.ONE,n.ONE);break;case jM:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $M:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Au:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case P_:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case jM:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $M:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}w=null,A=null,P=null,N=null,T.set(0,0,0),C=0,S=B,G=kt}return}Xe=Xe||Ee,Ft=Ft||Me,It=It||Je,(Ee!==y||Xe!==R)&&(n.blendEquationSeparate(Oe[Ee],Oe[Xe]),y=Ee,R=Xe),(Me!==w||Je!==A||Ft!==P||It!==N)&&(n.blendFuncSeparate(Qe[Me],Qe[Je],Qe[Ft],Qe[It]),w=Me,A=Je,P=Ft,N=It),(En.equals(T)===!1||jn!==C)&&(n.blendColor(En.r,En.g,En.b,jn),T.copy(En),C=jn),S=B,G=!1}function At(B,Ee){B.side===tr?Ze(n.CULL_FACE):nt(n.CULL_FACE);let Me=B.side===Fi;Ee&&(Me=!Me),ct(Me),B.blending===Au&&B.transparent===!1?Ge(js):Ge(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),l.setMask(B.colorWrite);const Je=B.stencilWrite;f.setTest(Je),Je&&(f.setMask(B.stencilWriteMask),f.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),f.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),q(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?nt(n.SAMPLE_ALPHA_TO_COVERAGE):Ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function ct(B){X!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),X=B)}function O(B){B!==N4?(nt(n.CULL_FACE),B!==ae&&(B===YM?n.cullFace(n.BACK):B===O4?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ze(n.CULL_FACE),ae=B}function D(B){B!==k&&(H&&n.lineWidth(B),k=B)}function q(B,Ee,Me){B?(nt(n.POLYGON_OFFSET_FILL),(Y!==Ee||K!==Me)&&(n.polygonOffset(Ee,Me),Y=Ee,K=Me)):Ze(n.POLYGON_OFFSET_FILL)}function ge(B){B?nt(n.SCISSOR_TEST):Ze(n.SCISSOR_TEST)}function pe(B){B===void 0&&(B=n.TEXTURE0+se-1),le!==B&&(n.activeTexture(B),le=B)}function _e(B,Ee,Me){Me===void 0&&(le===null?Me=n.TEXTURE0+se-1:Me=le);let Je=de[Me];Je===void 0&&(Je={type:void 0,texture:void 0},de[Me]=Je),(Je.type!==B||Je.texture!==Ee)&&(le!==Me&&(n.activeTexture(Me),le=Me),n.bindTexture(B,Ee||et[B]),Je.type=B,Je.texture=Ee)}function Fe(){const B=de[le];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function be(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ve(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ft(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function We(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(B){xe.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),xe.copy(B))}function Ct(B){Le.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Le.copy(B))}function en(B,Ee){let Me=p.get(Ee);Me===void 0&&(Me=new WeakMap,p.set(Ee,Me));let Je=Me.get(B);Je===void 0&&(Je=n.getUniformBlockIndex(Ee,B.name),Me.set(B,Je))}function pt(B,Ee){const Je=p.get(Ee).get(B);d.get(Ee)!==Je&&(n.uniformBlockBinding(Ee,Je,B.__bindingPointIndex),d.set(Ee,Je))}function ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),m={},le=null,de={},v={},M=new WeakMap,x=[],_=null,g=!1,S=null,y=null,w=null,A=null,R=null,P=null,N=null,T=new Bt(0,0,0),C=0,G=!1,X=null,ae=null,k=null,Y=null,K=null,xe.set(0,0,n.canvas.width,n.canvas.height),Le.set(0,0,n.canvas.width,n.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:nt,disable:Ze,bindFramebuffer:xt,drawBuffers:J,useProgram:Bn,setBlending:Ge,setMaterial:At,setFlipSided:ct,setCullFace:O,setLineWidth:D,setPolygonOffset:q,setScissorTest:ge,activeTexture:pe,bindTexture:_e,unbindTexture:Fe,compressedTexImage2D:be,compressedTexImage3D:Ce,texImage2D:We,texImage3D:Ie,updateUBOMapping:en,uniformBlockBinding:pt,texStorage2D:ft,texStorage3D:tt,texSubImage2D:Ve,texSubImage3D:ot,compressedTexSubImage2D:me,compressedTexSubImage3D:Pt,scissor:it,viewport:Ct,reset:ye}}function $6(n,e,t,i,r,a,o){const l=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let p;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,D){return v?new OffscreenCanvas(O,D):Nf("canvas")}function x(O,D,q,ge){let pe=1;if((O.width>ge||O.height>ge)&&(pe=ge/Math.max(O.width,O.height)),pe<1||D===!0)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap){const _e=D?rm:Math.floor,Fe=_e(pe*O.width),be=_e(pe*O.height);p===void 0&&(p=M(Fe,be));const Ce=q?M(Fe,be):p;return Ce.width=Fe,Ce.height=be,Ce.getContext("2d").drawImage(O,0,0,Fe,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+Fe+"x"+be+")."),Ce}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),O;return O}function _(O){return F_(O.width)&&F_(O.height)}function g(O){return l?!1:O.wrapS!==Zr||O.wrapT!==Zr||O.minFilter!==Un&&O.minFilter!==er}function S(O,D){return O.generateMipmaps&&D&&O.minFilter!==Un&&O.minFilter!==er}function y(O){n.generateMipmap(O)}function w(O,D,q,ge,pe=!1){if(l===!1)return D;if(O!==null){if(n[O]!==void 0)return n[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let _e=D;if(D===n.RED&&(q===n.FLOAT&&(_e=n.R32F),q===n.HALF_FLOAT&&(_e=n.R16F),q===n.UNSIGNED_BYTE&&(_e=n.R8)),D===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(_e=n.R8UI),q===n.UNSIGNED_SHORT&&(_e=n.R16UI),q===n.UNSIGNED_INT&&(_e=n.R32UI),q===n.BYTE&&(_e=n.R8I),q===n.SHORT&&(_e=n.R16I),q===n.INT&&(_e=n.R32I)),D===n.RG&&(q===n.FLOAT&&(_e=n.RG32F),q===n.HALF_FLOAT&&(_e=n.RG16F),q===n.UNSIGNED_BYTE&&(_e=n.RG8)),D===n.RGBA){const Fe=pe?em:zt.getTransfer(ge);q===n.FLOAT&&(_e=n.RGBA32F),q===n.HALF_FLOAT&&(_e=n.RGBA16F),q===n.UNSIGNED_BYTE&&(_e=Fe===Kt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(_e=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(_e=n.RGB5_A1)}return(_e===n.R16F||_e===n.R32F||_e===n.RG16F||_e===n.RG32F||_e===n.RGBA16F||_e===n.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function A(O,D,q){return S(O,q)===!0||O.isFramebufferTexture&&O.minFilter!==Un&&O.minFilter!==er?Math.log2(Math.max(D.width,D.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?D.mipmaps.length:1}function R(O){return O===Un||O===QM||O===Iv?n.NEAREST:n.LINEAR}function P(O){const D=O.target;D.removeEventListener("dispose",P),T(D),D.isVideoTexture&&d.delete(D)}function N(O){const D=O.target;D.removeEventListener("dispose",N),G(D)}function T(O){const D=i.get(O);if(D.__webglInit===void 0)return;const q=O.source,ge=m.get(q);if(ge){const pe=ge[D.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&C(O),Object.keys(ge).length===0&&m.delete(q)}i.remove(O)}function C(O){const D=i.get(O);n.deleteTexture(D.__webglTexture);const q=O.source,ge=m.get(q);delete ge[D.__cacheKey],o.memory.textures--}function G(O){const D=O.texture,q=i.get(O),ge=i.get(D);if(ge.__webglTexture!==void 0&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(q.__webglFramebuffer[pe]))for(let _e=0;_e<q.__webglFramebuffer[pe].length;_e++)n.deleteFramebuffer(q.__webglFramebuffer[pe][_e]);else n.deleteFramebuffer(q.__webglFramebuffer[pe]);q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer[pe])}else{if(Array.isArray(q.__webglFramebuffer))for(let pe=0;pe<q.__webglFramebuffer.length;pe++)n.deleteFramebuffer(q.__webglFramebuffer[pe]);else n.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&n.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let pe=0;pe<q.__webglColorRenderbuffer.length;pe++)q.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(q.__webglColorRenderbuffer[pe]);q.__webglDepthRenderbuffer&&n.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let pe=0,_e=D.length;pe<_e;pe++){const Fe=i.get(D[pe]);Fe.__webglTexture&&(n.deleteTexture(Fe.__webglTexture),o.memory.textures--),i.remove(D[pe])}i.remove(D),i.remove(O)}let X=0;function ae(){X=0}function k(){const O=X;return O>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),X+=1,O}function Y(O){const D=[];return D.push(O.wrapS),D.push(O.wrapT),D.push(O.wrapR||0),D.push(O.magFilter),D.push(O.minFilter),D.push(O.anisotropy),D.push(O.internalFormat),D.push(O.format),D.push(O.type),D.push(O.generateMipmaps),D.push(O.premultiplyAlpha),D.push(O.flipY),D.push(O.unpackAlignment),D.push(O.colorSpace),D.join()}function K(O,D){const q=i.get(O);if(O.isVideoTexture&&At(O),O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){const ge=O.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(q,O,D);return}}t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+D)}function se(O,D){const q=i.get(O);if(O.version>0&&q.__version!==O.version){xe(q,O,D);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+D)}function H(O,D){const q=i.get(O);if(O.version>0&&q.__version!==O.version){xe(q,O,D);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+D)}function Z(O,D){const q=i.get(O);if(O.version>0&&q.__version!==O.version){Le(q,O,D);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+D)}const Q={[Lf]:n.REPEAT,[Zr]:n.CLAMP_TO_EDGE,[N_]:n.MIRRORED_REPEAT},le={[Un]:n.NEAREST,[QM]:n.NEAREST_MIPMAP_NEAREST,[Iv]:n.NEAREST_MIPMAP_LINEAR,[er]:n.LINEAR,[gz]:n.LINEAR_MIPMAP_NEAREST,[Df]:n.LINEAR_MIPMAP_LINEAR},de={[Rz]:n.NEVER,[Nz]:n.ALWAYS,[Pz]:n.LESS,[J2]:n.LEQUAL,[Lz]:n.EQUAL,[Uz]:n.GEQUAL,[Dz]:n.GREATER,[Iz]:n.NOTEQUAL};function re(O,D,q){if(q?(n.texParameteri(O,n.TEXTURE_WRAP_S,Q[D.wrapS]),n.texParameteri(O,n.TEXTURE_WRAP_T,Q[D.wrapT]),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,Q[D.wrapR]),n.texParameteri(O,n.TEXTURE_MAG_FILTER,le[D.magFilter]),n.texParameteri(O,n.TEXTURE_MIN_FILTER,le[D.minFilter])):(n.texParameteri(O,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(O,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(D.wrapS!==Zr||D.wrapT!==Zr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(O,n.TEXTURE_MAG_FILTER,R(D.magFilter)),n.texParameteri(O,n.TEXTURE_MIN_FILTER,R(D.minFilter)),D.minFilter!==Un&&D.minFilter!==er&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),D.compareFunction&&(n.texParameteri(O,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(O,n.TEXTURE_COMPARE_FUNC,de[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ge=e.get("EXT_texture_filter_anisotropic");if(D.magFilter===Un||D.minFilter!==Iv&&D.minFilter!==Df||D.type===va&&e.has("OES_texture_float_linear")===!1||l===!1&&D.type===If&&e.has("OES_texture_half_float_linear")===!1)return;(D.anisotropy>1||i.get(D).__currentAnisotropy)&&(n.texParameterf(O,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,r.getMaxAnisotropy())),i.get(D).__currentAnisotropy=D.anisotropy)}}function ue(O,D){let q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,D.addEventListener("dispose",P));const ge=D.source;let pe=m.get(ge);pe===void 0&&(pe={},m.set(ge,pe));const _e=Y(D);if(_e!==O.__cacheKey){pe[_e]===void 0&&(pe[_e]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),pe[_e].usedTimes++;const Fe=pe[O.__cacheKey];Fe!==void 0&&(pe[O.__cacheKey].usedTimes--,Fe.usedTimes===0&&C(D)),O.__cacheKey=_e,O.__webglTexture=pe[_e].texture}return q}function xe(O,D,q){let ge=n.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(ge=n.TEXTURE_2D_ARRAY),D.isData3DTexture&&(ge=n.TEXTURE_3D);const pe=ue(O,D),_e=D.source;t.bindTexture(ge,O.__webglTexture,n.TEXTURE0+q);const Fe=i.get(_e);if(_e.version!==Fe.__version||pe===!0){t.activeTexture(n.TEXTURE0+q);const be=zt.getPrimaries(zt.workingColorSpace),Ce=D.colorSpace===Rr?null:zt.getPrimaries(D.colorSpace),Ve=D.colorSpace===Rr||be===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,D.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,D.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const ot=g(D)&&_(D.image)===!1;let me=x(D.image,ot,!1,r.maxTextureSize);me=ct(D,me);const Pt=_(me)||l,ft=a.convert(D.format,D.colorSpace);let tt=a.convert(D.type),We=w(D.internalFormat,ft,tt,D.colorSpace,D.isVideoTexture);re(ge,D,Pt);let Ie;const it=D.mipmaps,Ct=l&&D.isVideoTexture!==!0&&We!==Z2,en=Fe.__version===void 0||pe===!0,pt=A(D,me,Pt);if(D.isDepthTexture)We=n.DEPTH_COMPONENT,l?D.type===va?We=n.DEPTH_COMPONENT32F:D.type===Is?We=n.DEPTH_COMPONENT24:D.type===Vo?We=n.DEPTH24_STENCIL8:We=n.DEPTH_COMPONENT16:D.type===va&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),D.format===Xo&&We===n.DEPTH_COMPONENT&&D.type!==by&&D.type!==Is&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),D.type=Is,tt=a.convert(D.type)),D.format===Gu&&We===n.DEPTH_COMPONENT&&(We=n.DEPTH_STENCIL,D.type!==Vo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),D.type=Vo,tt=a.convert(D.type))),en&&(Ct?t.texStorage2D(n.TEXTURE_2D,1,We,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,We,me.width,me.height,0,ft,tt,null));else if(D.isDataTexture)if(it.length>0&&Pt){Ct&&en&&t.texStorage2D(n.TEXTURE_2D,pt,We,it[0].width,it[0].height);for(let ye=0,B=it.length;ye<B;ye++)Ie=it[ye],Ct?t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Ie.width,Ie.height,ft,tt,Ie.data):t.texImage2D(n.TEXTURE_2D,ye,We,Ie.width,Ie.height,0,ft,tt,Ie.data);D.generateMipmaps=!1}else Ct?(en&&t.texStorage2D(n.TEXTURE_2D,pt,We,me.width,me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,me.width,me.height,ft,tt,me.data)):t.texImage2D(n.TEXTURE_2D,0,We,me.width,me.height,0,ft,tt,me.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){Ct&&en&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pt,We,it[0].width,it[0].height,me.depth);for(let ye=0,B=it.length;ye<B;ye++)Ie=it[ye],D.format!==nr?ft!==null?Ct?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Ie.width,Ie.height,me.depth,ft,Ie.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ye,We,Ie.width,Ie.height,me.depth,0,Ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Ie.width,Ie.height,me.depth,ft,tt,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ye,We,Ie.width,Ie.height,me.depth,0,ft,tt,Ie.data)}else{Ct&&en&&t.texStorage2D(n.TEXTURE_2D,pt,We,it[0].width,it[0].height);for(let ye=0,B=it.length;ye<B;ye++)Ie=it[ye],D.format!==nr?ft!==null?Ct?t.compressedTexSubImage2D(n.TEXTURE_2D,ye,0,0,Ie.width,Ie.height,ft,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,ye,We,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Ie.width,Ie.height,ft,tt,Ie.data):t.texImage2D(n.TEXTURE_2D,ye,We,Ie.width,Ie.height,0,ft,tt,Ie.data)}else if(D.isDataArrayTexture)Ct?(en&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pt,We,me.width,me.height,me.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,ft,tt,me.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,me.width,me.height,me.depth,0,ft,tt,me.data);else if(D.isData3DTexture)Ct?(en&&t.texStorage3D(n.TEXTURE_3D,pt,We,me.width,me.height,me.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,ft,tt,me.data)):t.texImage3D(n.TEXTURE_3D,0,We,me.width,me.height,me.depth,0,ft,tt,me.data);else if(D.isFramebufferTexture){if(en)if(Ct)t.texStorage2D(n.TEXTURE_2D,pt,We,me.width,me.height);else{let ye=me.width,B=me.height;for(let Ee=0;Ee<pt;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,We,ye,B,0,ft,tt,null),ye>>=1,B>>=1}}else if(it.length>0&&Pt){Ct&&en&&t.texStorage2D(n.TEXTURE_2D,pt,We,it[0].width,it[0].height);for(let ye=0,B=it.length;ye<B;ye++)Ie=it[ye],Ct?t.texSubImage2D(n.TEXTURE_2D,ye,0,0,ft,tt,Ie):t.texImage2D(n.TEXTURE_2D,ye,We,ft,tt,Ie);D.generateMipmaps=!1}else Ct?(en&&t.texStorage2D(n.TEXTURE_2D,pt,We,me.width,me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,tt,me)):t.texImage2D(n.TEXTURE_2D,0,We,ft,tt,me);S(D,Pt)&&y(ge),Fe.__version=_e.version,D.onUpdate&&D.onUpdate(D)}O.__version=D.version}function Le(O,D,q){if(D.image.length!==6)return;const ge=ue(O,D),pe=D.source;t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+q);const _e=i.get(pe);if(pe.version!==_e.__version||ge===!0){t.activeTexture(n.TEXTURE0+q);const Fe=zt.getPrimaries(zt.workingColorSpace),be=D.colorSpace===Rr?null:zt.getPrimaries(D.colorSpace),Ce=D.colorSpace===Rr||Fe===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,D.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,D.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ve=D.isCompressedTexture||D.image[0].isCompressedTexture,ot=D.image[0]&&D.image[0].isDataTexture,me=[];for(let ye=0;ye<6;ye++)!Ve&&!ot?me[ye]=x(D.image[ye],!1,!0,r.maxCubemapSize):me[ye]=ot?D.image[ye].image:D.image[ye],me[ye]=ct(D,me[ye]);const Pt=me[0],ft=_(Pt)||l,tt=a.convert(D.format,D.colorSpace),We=a.convert(D.type),Ie=w(D.internalFormat,tt,We,D.colorSpace),it=l&&D.isVideoTexture!==!0,Ct=_e.__version===void 0||ge===!0;let en=A(D,Pt,ft);re(n.TEXTURE_CUBE_MAP,D,ft);let pt;if(Ve){it&&Ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,en,Ie,Pt.width,Pt.height);for(let ye=0;ye<6;ye++){pt=me[ye].mipmaps;for(let B=0;B<pt.length;B++){const Ee=pt[B];D.format!==nr?tt!==null?it?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B,0,0,Ee.width,Ee.height,tt,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B,Ie,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B,0,0,Ee.width,Ee.height,tt,We,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B,Ie,Ee.width,Ee.height,0,tt,We,Ee.data)}}}else{pt=D.mipmaps,it&&Ct&&(pt.length>0&&en++,t.texStorage2D(n.TEXTURE_CUBE_MAP,en,Ie,me[0].width,me[0].height));for(let ye=0;ye<6;ye++)if(ot){it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,me[ye].width,me[ye].height,tt,We,me[ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Ie,me[ye].width,me[ye].height,0,tt,We,me[ye].data);for(let B=0;B<pt.length;B++){const Me=pt[B].image[ye].image;it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B+1,0,0,Me.width,Me.height,tt,We,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B+1,Ie,Me.width,Me.height,0,tt,We,Me.data)}}else{it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,tt,We,me[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Ie,tt,We,me[ye]);for(let B=0;B<pt.length;B++){const Ee=pt[B];it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B+1,0,0,tt,We,Ee.image[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B+1,Ie,tt,We,Ee.image[ye])}}}S(D,ft)&&y(n.TEXTURE_CUBE_MAP),_e.__version=pe.version,D.onUpdate&&D.onUpdate(D)}O.__version=D.version}function Ne(O,D,q,ge,pe,_e){const Fe=a.convert(q.format,q.colorSpace),be=a.convert(q.type),Ce=w(q.internalFormat,Fe,be,q.colorSpace);if(!i.get(D).__hasExternalTextures){const ot=Math.max(1,D.width>>_e),me=Math.max(1,D.height>>_e);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,_e,Ce,ot,me,D.depth,0,Fe,be,null):t.texImage2D(pe,_e,Ce,ot,me,0,Fe,be,null)}t.bindFramebuffer(n.FRAMEBUFFER,O),Ge(D)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,pe,i.get(q).__webglTexture,0,Qe(D)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ge,pe,i.get(q).__webglTexture,_e),t.bindFramebuffer(n.FRAMEBUFFER,null)}function et(O,D,q){if(n.bindRenderbuffer(n.RENDERBUFFER,O),D.depthBuffer&&!D.stencilBuffer){let ge=l===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(q||Ge(D)){const pe=D.depthTexture;pe&&pe.isDepthTexture&&(pe.type===va?ge=n.DEPTH_COMPONENT32F:pe.type===Is&&(ge=n.DEPTH_COMPONENT24));const _e=Qe(D);Ge(D)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,ge,D.width,D.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,ge,D.width,D.height)}else n.renderbufferStorage(n.RENDERBUFFER,ge,D.width,D.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,O)}else if(D.depthBuffer&&D.stencilBuffer){const ge=Qe(D);q&&Ge(D)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,D.width,D.height):Ge(D)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,D.width,D.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,O)}else{const ge=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let pe=0;pe<ge.length;pe++){const _e=ge[pe],Fe=a.convert(_e.format,_e.colorSpace),be=a.convert(_e.type),Ce=w(_e.internalFormat,Fe,be,_e.colorSpace),Ve=Qe(D);q&&Ge(D)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Ce,D.width,D.height):Ge(D)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve,Ce,D.width,D.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,D.width,D.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function nt(O,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,O),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(D.depthTexture).__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),K(D.depthTexture,0);const ge=i.get(D.depthTexture).__webglTexture,pe=Qe(D);if(D.depthTexture.format===Xo)Ge(D)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0);else if(D.depthTexture.format===Gu)Ge(D)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ze(O){const D=i.get(O),q=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!D.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");nt(D.__webglFramebuffer,O)}else if(q){D.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(n.FRAMEBUFFER,D.__webglFramebuffer[ge]),D.__webglDepthbuffer[ge]=n.createRenderbuffer(),et(D.__webglDepthbuffer[ge],O,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer=n.createRenderbuffer(),et(D.__webglDepthbuffer,O,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function xt(O,D,q){const ge=i.get(O);D!==void 0&&Ne(ge.__webglFramebuffer,O,O.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&Ze(O)}function J(O){const D=O.texture,q=i.get(O),ge=i.get(D);O.addEventListener("dispose",N),O.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture()),ge.__version=D.version,o.memory.textures++);const pe=O.isWebGLCubeRenderTarget===!0,_e=O.isWebGLMultipleRenderTargets===!0,Fe=_(O)||l;if(pe){q.__webglFramebuffer=[];for(let be=0;be<6;be++)if(l&&D.mipmaps&&D.mipmaps.length>0){q.__webglFramebuffer[be]=[];for(let Ce=0;Ce<D.mipmaps.length;Ce++)q.__webglFramebuffer[be][Ce]=n.createFramebuffer()}else q.__webglFramebuffer[be]=n.createFramebuffer()}else{if(l&&D.mipmaps&&D.mipmaps.length>0){q.__webglFramebuffer=[];for(let be=0;be<D.mipmaps.length;be++)q.__webglFramebuffer[be]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(_e)if(r.drawBuffers){const be=O.texture;for(let Ce=0,Ve=be.length;Ce<Ve;Ce++){const ot=i.get(be[Ce]);ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&O.samples>0&&Ge(O)===!1){const be=_e?D:[D];q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ce=0;Ce<be.length;Ce++){const Ve=be[Ce];q.__webglColorRenderbuffer[Ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[Ce]);const ot=a.convert(Ve.format,Ve.colorSpace),me=a.convert(Ve.type),Pt=w(Ve.internalFormat,ot,me,Ve.colorSpace,O.isXRRenderTarget===!0),ft=Qe(O);n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,Pt,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,q.__webglColorRenderbuffer[Ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),O.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),et(q.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),re(n.TEXTURE_CUBE_MAP,D,Fe);for(let be=0;be<6;be++)if(l&&D.mipmaps&&D.mipmaps.length>0)for(let Ce=0;Ce<D.mipmaps.length;Ce++)Ne(q.__webglFramebuffer[be][Ce],O,D,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ce);else Ne(q.__webglFramebuffer[be],O,D,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);S(D,Fe)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){const be=O.texture;for(let Ce=0,Ve=be.length;Ce<Ve;Ce++){const ot=be[Ce],me=i.get(ot);t.bindTexture(n.TEXTURE_2D,me.__webglTexture),re(n.TEXTURE_2D,ot,Fe),Ne(q.__webglFramebuffer,O,ot,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,0),S(ot,Fe)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let be=n.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(l?be=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(be,ge.__webglTexture),re(be,D,Fe),l&&D.mipmaps&&D.mipmaps.length>0)for(let Ce=0;Ce<D.mipmaps.length;Ce++)Ne(q.__webglFramebuffer[Ce],O,D,n.COLOR_ATTACHMENT0,be,Ce);else Ne(q.__webglFramebuffer,O,D,n.COLOR_ATTACHMENT0,be,0);S(D,Fe)&&y(be),t.unbindTexture()}O.depthBuffer&&Ze(O)}function Bn(O){const D=_(O)||l,q=O.isWebGLMultipleRenderTargets===!0?O.texture:[O.texture];for(let ge=0,pe=q.length;ge<pe;ge++){const _e=q[ge];if(S(_e,D)){const Fe=O.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,be=i.get(_e).__webglTexture;t.bindTexture(Fe,be),y(Fe),t.unbindTexture()}}}function Oe(O){if(l&&O.samples>0&&Ge(O)===!1){const D=O.isWebGLMultipleRenderTargets?O.texture:[O.texture],q=O.width,ge=O.height;let pe=n.COLOR_BUFFER_BIT;const _e=[],Fe=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(O),Ce=O.isWebGLMultipleRenderTargets===!0;if(Ce)for(let Ve=0;Ve<D.length;Ve++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ve=0;Ve<D.length;Ve++){_e.push(n.COLOR_ATTACHMENT0+Ve),O.depthBuffer&&_e.push(Fe);const ot=be.__ignoreDepthValues!==void 0?be.__ignoreDepthValues:!1;if(ot===!1&&(O.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),O.stencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),Ce&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ve]),ot===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Fe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Fe])),Ce){const me=i.get(D[Ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,me,0)}n.blitFramebuffer(0,0,q,ge,0,0,q,ge,pe,n.NEAREST),f&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ce)for(let Ve=0;Ve<D.length;Ve++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ve]);const ot=i.get(D[Ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,ot,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}}function Qe(O){return Math.min(r.maxSamples,O.samples)}function Ge(O){const D=i.get(O);return l&&O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function At(O){const D=o.render.frame;d.get(O)!==D&&(d.set(O,D),O.update())}function ct(O,D){const q=O.colorSpace,ge=O.format,pe=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||O.format===O_||q!==Ja&&q!==Rr&&(zt.getTransfer(q)===Kt?l===!1?e.has("EXT_sRGB")===!0&&ge===nr?(O.format=O_,O.minFilter=er,O.generateMipmaps=!1):D=nC.sRGBToLinear(D):(ge!==nr||pe!==qs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),D}this.allocateTextureUnit=k,this.resetTextureUnits=ae,this.setTexture2D=K,this.setTexture2DArray=se,this.setTexture3D=H,this.setTextureCube=Z,this.rebindTextures=xt,this.setupRenderTarget=J,this.updateRenderTargetMipmap=Bn,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Ge}function q6(n,e,t){const i=t.isWebGL2;function r(a,o=Rr){let l;const c=zt.getTransfer(o);if(a===qs)return n.UNSIGNED_BYTE;if(a===Y2)return n.UNSIGNED_SHORT_4_4_4_4;if(a===j2)return n.UNSIGNED_SHORT_5_5_5_1;if(a===vz)return n.BYTE;if(a===_z)return n.SHORT;if(a===by)return n.UNSIGNED_SHORT;if(a===X2)return n.INT;if(a===Is)return n.UNSIGNED_INT;if(a===va)return n.FLOAT;if(a===If)return i?n.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(a===xz)return n.ALPHA;if(a===nr)return n.RGBA;if(a===yz)return n.LUMINANCE;if(a===Sz)return n.LUMINANCE_ALPHA;if(a===Xo)return n.DEPTH_COMPONENT;if(a===Gu)return n.DEPTH_STENCIL;if(a===O_)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(a===Ez)return n.RED;if(a===$2)return n.RED_INTEGER;if(a===Mz)return n.RG;if(a===q2)return n.RG_INTEGER;if(a===K2)return n.RGBA_INTEGER;if(a===Uv||a===Nv||a===Ov||a===Fv)if(c===Kt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Uv)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Nv)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ov)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Fv)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Uv)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Nv)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ov)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Fv)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===JM||a===ew||a===tw||a===nw)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===JM)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ew)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===tw)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===nw)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Z2)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===iw||a===rw)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===iw)return c===Kt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===rw)return c===Kt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===aw||a===sw||a===ow||a===lw||a===uw||a===cw||a===fw||a===dw||a===hw||a===pw||a===mw||a===gw||a===vw||a===_w)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===aw)return c===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===sw)return c===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===ow)return c===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===lw)return c===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===uw)return c===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===cw)return c===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===fw)return c===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===dw)return c===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===hw)return c===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===pw)return c===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===mw)return c===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===gw)return c===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===vw)return c===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===_w)return c===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===kv||a===xw||a===yw)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===kv)return c===Kt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===xw)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===yw)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===wz||a===Sw||a===Ew||a===Mw)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===kv)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Sw)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Ew)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Mw)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Vo?i?n.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:r}}class K6 extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zh extends ki{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z6={type:"move"};class o0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zh,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zh,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zh,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,o=null;const l=this._targetRay,c=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){o=!0;for(const x of e.hand.values()){const _=t.getJointPose(x,i),g=this._getHandJoint(f,x);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const d=f.joints["index-finger-tip"],p=f.joints["thumb-tip"],m=d.position.distanceTo(p.position),v=.02,M=.005;f.inputState.pinching&&m>v+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=v-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Z6)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),f!==null&&(f.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zh;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Q6 extends ec{constructor(e,t){super();const i=this;let r=null,a=1,o=null,l="local-floor",c=1,f=null,d=null,p=null,m=null,v=null,M=null;const x=t.getContextAttributes();let _=null,g=null;const S=[],y=[],w=new st;let A=null;const R=new yi;R.layers.enable(1),R.viewport=new An;const P=new yi;P.layers.enable(2),P.viewport=new An;const N=[R,P],T=new K6;T.layers.enable(1),T.layers.enable(2);let C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ue=S[re];return ue===void 0&&(ue=new o0,S[re]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(re){let ue=S[re];return ue===void 0&&(ue=new o0,S[re]=ue),ue.getGripSpace()},this.getHand=function(re){let ue=S[re];return ue===void 0&&(ue=new o0,S[re]=ue),ue.getHandSpace()};function X(re){const ue=y.indexOf(re.inputSource);if(ue===-1)return;const xe=S[ue];xe!==void 0&&(xe.update(re.inputSource,re.frame,f||o),xe.dispatchEvent({type:re.type,data:re.inputSource}))}function ae(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",ae),r.removeEventListener("inputsourceschange",k);for(let re=0;re<S.length;re++){const ue=y[re];ue!==null&&(y[re]=null,S[re].disconnect(ue))}C=null,G=null,e.setRenderTarget(_),v=null,m=null,p=null,r=null,g=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){l=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||o},this.setReferenceSpace=function(re){f=re},this.getBaseLayer=function(){return m!==null?m:v},this.getBinding=function(){return p},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",ae),r.addEventListener("inputsourceschange",k),x.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),g=new Ma(v.framebufferWidth,v.framebufferHeight,{format:nr,type:qs,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ue=null,xe=null,Le=null;x.depth&&(Le=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=x.stencil?Gu:Xo,xe=x.stencil?Vo:Is);const Ne={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:a};p=new XRWebGLBinding(r,t),m=p.createProjectionLayer(Ne),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),g=new Ma(m.textureWidth,m.textureHeight,{format:nr,type:qs,depthTexture:new hC(m.textureWidth,m.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const et=e.properties.get(g);et.__ignoreDepthValues=m.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(c),f=null,o=await r.requestReferenceSpace(l),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function k(re){for(let ue=0;ue<re.removed.length;ue++){const xe=re.removed[ue],Le=y.indexOf(xe);Le>=0&&(y[Le]=null,S[Le].disconnect(xe))}for(let ue=0;ue<re.added.length;ue++){const xe=re.added[ue];let Le=y.indexOf(xe);if(Le===-1){for(let et=0;et<S.length;et++)if(et>=y.length){y.push(xe),Le=et;break}else if(y[et]===null){y[et]=xe,Le=et;break}if(Le===-1)break}const Ne=S[Le];Ne&&Ne.connect(xe)}}const Y=new j,K=new j;function se(re,ue,xe){Y.setFromMatrixPosition(ue.matrixWorld),K.setFromMatrixPosition(xe.matrixWorld);const Le=Y.distanceTo(K),Ne=ue.projectionMatrix.elements,et=xe.projectionMatrix.elements,nt=Ne[14]/(Ne[10]-1),Ze=Ne[14]/(Ne[10]+1),xt=(Ne[9]+1)/Ne[5],J=(Ne[9]-1)/Ne[5],Bn=(Ne[8]-1)/Ne[0],Oe=(et[8]+1)/et[0],Qe=nt*Bn,Ge=nt*Oe,At=Le/(-Bn+Oe),ct=At*-Bn;ue.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ct),re.translateZ(At),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert();const O=nt+At,D=Ze+At,q=Qe-ct,ge=Ge+(Le-ct),pe=xt*Ze/D*O,_e=J*Ze/D*O;re.projectionMatrix.makePerspective(q,ge,pe,_e,O,D),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}function H(re,ue){ue===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ue.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;T.near=P.near=R.near=re.near,T.far=P.far=R.far=re.far,(C!==T.near||G!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),C=T.near,G=T.far);const ue=re.parent,xe=T.cameras;H(T,ue);for(let Le=0;Le<xe.length;Le++)H(xe[Le],ue);xe.length===2?se(T,R,P):T.projectionMatrix.copy(R.projectionMatrix),Z(re,T,ue)};function Z(re,ue,xe){xe===null?re.matrix.copy(ue.matrixWorld):(re.matrix.copy(xe.matrixWorld),re.matrix.invert(),re.matrix.multiply(ue.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ue.projectionMatrix),re.projectionMatrixInverse.copy(ue.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Uf*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(m===null&&v===null))return c},this.setFoveation=function(re){c=re,m!==null&&(m.fixedFoveation=re),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=re)};let Q=null;function le(re,ue){if(d=ue.getViewerPose(f||o),M=ue,d!==null){const xe=d.views;v!==null&&(e.setRenderTargetFramebuffer(g,v.framebuffer),e.setRenderTarget(g));let Le=!1;xe.length!==T.cameras.length&&(T.cameras.length=0,Le=!0);for(let Ne=0;Ne<xe.length;Ne++){const et=xe[Ne];let nt=null;if(v!==null)nt=v.getViewport(et);else{const xt=p.getViewSubImage(m,et);nt=xt.viewport,Ne===0&&(e.setRenderTargetTextures(g,xt.colorTexture,m.ignoreDepthValues?void 0:xt.depthStencilTexture),e.setRenderTarget(g))}let Ze=N[Ne];Ze===void 0&&(Ze=new yi,Ze.layers.enable(Ne),Ze.viewport=new An,N[Ne]=Ze),Ze.matrix.fromArray(et.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(et.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(nt.x,nt.y,nt.width,nt.height),Ne===0&&(T.matrix.copy(Ze.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Le===!0&&T.cameras.push(Ze)}}for(let xe=0;xe<S.length;xe++){const Le=y[xe],Ne=S[xe];Le!==null&&Ne!==void 0&&Ne.update(Le,ue,f||o)}Q&&Q(re,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),M=null}const de=new fC;de.setAnimationLoop(le),this.setAnimationLoop=function(re){Q=re},this.dispose=function(){}}}function J6(n,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function i(_,g){g.color.getRGB(_.fogColor.value,oC(n)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function r(_,g,S,y,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?a(_,g):g.isMeshToonMaterial?(a(_,g),p(_,g)):g.isMeshPhongMaterial?(a(_,g),d(_,g)):g.isMeshStandardMaterial?(a(_,g),m(_,g),g.isMeshPhysicalMaterial&&v(_,g,w)):g.isMeshMatcapMaterial?(a(_,g),M(_,g)):g.isMeshDepthMaterial?a(_,g):g.isMeshDistanceMaterial?(a(_,g),x(_,g)):g.isMeshNormalMaterial?a(_,g):g.isLineBasicMaterial?(o(_,g),g.isLineDashedMaterial&&l(_,g)):g.isPointsMaterial?c(_,g,S,y):g.isSpriteMaterial?f(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===Fi&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===Fi&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const S=e.get(g).envMap;if(S&&(_.envMap.value=S,_.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap){_.lightMap.value=g.lightMap;const y=n._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=g.lightMapIntensity*y,t(g.lightMap,_.lightMapTransform)}g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}function o(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}function l(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function c(_,g,S,y){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*S,_.scale.value=y*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function f(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function d(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function p(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function m(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),e.get(g).envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function v(_,g,S){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Fi&&_.clearcoatNormalScale.value.negate())),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=S.texture,_.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}function M(_,g){g.matcap&&(_.matcap.value=g.matcap)}function x(_,g){const S=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(S.matrixWorld),_.nearDistance.value=S.shadow.camera.near,_.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eW(n,e,t,i){let r={},a={},o=[];const l=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,y){const w=y.program;i.uniformBlockBinding(S,w)}function f(S,y){let w=r[S.id];w===void 0&&(M(S),w=d(S),r[S.id]=w,S.addEventListener("dispose",_));const A=y.program;i.updateUBOMapping(S,A);const R=e.render.frame;a[S.id]!==R&&(m(S),a[S.id]=R)}function d(S){const y=p();S.__bindingPointIndex=y;const w=n.createBuffer(),A=S.__size,R=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,A,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,w),w}function p(){for(let S=0;S<l;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(S){const y=r[S.id],w=S.uniforms,A=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let R=0,P=w.length;R<P;R++){const N=Array.isArray(w[R])?w[R]:[w[R]];for(let T=0,C=N.length;T<C;T++){const G=N[T];if(v(G,R,T,A)===!0){const X=G.__offset,ae=Array.isArray(G.value)?G.value:[G.value];let k=0;for(let Y=0;Y<ae.length;Y++){const K=ae[Y],se=x(K);typeof K=="number"||typeof K=="boolean"?(G.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,X+k,G.__data)):K.isMatrix3?(G.__data[0]=K.elements[0],G.__data[1]=K.elements[1],G.__data[2]=K.elements[2],G.__data[3]=0,G.__data[4]=K.elements[3],G.__data[5]=K.elements[4],G.__data[6]=K.elements[5],G.__data[7]=0,G.__data[8]=K.elements[6],G.__data[9]=K.elements[7],G.__data[10]=K.elements[8],G.__data[11]=0):(K.toArray(G.__data,k),k+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,G.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function v(S,y,w,A){const R=S.value,P=y+"_"+w;if(A[P]===void 0)return typeof R=="number"||typeof R=="boolean"?A[P]=R:A[P]=R.clone(),!0;{const N=A[P];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return A[P]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function M(S){const y=S.uniforms;let w=0;const A=16;for(let P=0,N=y.length;P<N;P++){const T=Array.isArray(y[P])?y[P]:[y[P]];for(let C=0,G=T.length;C<G;C++){const X=T[C],ae=Array.isArray(X.value)?X.value:[X.value];for(let k=0,Y=ae.length;k<Y;k++){const K=ae[k],se=x(K),H=w%A;H!==0&&A-H<se.boundary&&(w+=A-H),X.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=w,w+=se.storage}}}const R=w%A;return R>0&&(w+=A-R),S.__size=w,S.__cache={},this}function x(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function _(S){const y=S.target;y.removeEventListener("dispose",_);const w=o.indexOf(y.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete a[y.id]}function g(){for(const S in r)n.deleteBuffer(r[S]);o=[],r={},a={}}return{bind:c,update:f,dispose:g}}class id{constructor(e={}){const{canvas:t=Kz(),context:i=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;i!==null?m=i.getContextAttributes().alpha:m=o;const v=new Uint32Array(4),M=new Int32Array(4);let x=null,_=null;const g=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zn,this._useLegacyLights=!1,this.toneMapping=$s,this.toneMappingExposure=1;const y=this;let w=!1,A=0,R=0,P=null,N=-1,T=null;const C=new An,G=new An;let X=null;const ae=new Bt(0);let k=0,Y=t.width,K=t.height,se=1,H=null,Z=null;const Q=new An(0,0,Y,K),le=new An(0,0,Y,K);let de=!1;const re=new cC;let ue=!1,xe=!1,Le=null;const Ne=new Ot,et=new st,nt=new j,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xt(){return P===null?se:1}let J=i;function Bn(U,$){for(let te=0;te<U.length;te++){const ie=U[te],ee=t.getContext(ie,$);if(ee!==null)return ee}return null}try{const U={alpha:!0,depth:r,stencil:a,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ty}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),J===null){const $=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&$.shift(),J=Bn($,U),J===null)throw Bn($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let Oe,Qe,Ge,At,ct,O,D,q,ge,pe,_e,Fe,be,Ce,Ve,ot,me,Pt,ft,tt,We,Ie,it,Ct;function en(){Oe=new cG(J),Qe=new rG(J,Oe,e),Oe.init(Qe),Ie=new q6(J,Oe,Qe),Ge=new j6(J,Oe,Qe),At=new hG(J),ct=new I6,O=new $6(J,Oe,Ge,ct,Qe,Ie,At),D=new sG(y),q=new uG(y),ge=new SB(J,Qe),it=new nG(J,Oe,ge,Qe),pe=new fG(J,ge,At,it),_e=new vG(J,pe,ge,At),ft=new gG(J,Qe,O),ot=new aG(ct),Fe=new D6(y,D,q,Oe,Qe,it,ot),be=new J6(y,ct),Ce=new N6,Ve=new H6(Oe,Qe),Pt=new tG(y,D,q,Ge,_e,m,c),me=new Y6(y,_e,Qe),Ct=new eW(J,At,Qe,Ge),tt=new iG(J,Oe,At,Qe),We=new dG(J,Oe,At,Qe),At.programs=Fe.programs,y.capabilities=Qe,y.extensions=Oe,y.properties=ct,y.renderLists=Ce,y.shadowMap=me,y.state=Ge,y.info=At}en();const pt=new Q6(y,J);this.xr=pt,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const U=Oe.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=Oe.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(U){U!==void 0&&(se=U,this.setSize(Y,K,!1))},this.getSize=function(U){return U.set(Y,K)},this.setSize=function(U,$,te=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=U,K=$,t.width=Math.floor(U*se),t.height=Math.floor($*se),te===!0&&(t.style.width=U+"px",t.style.height=$+"px"),this.setViewport(0,0,U,$)},this.getDrawingBufferSize=function(U){return U.set(Y*se,K*se).floor()},this.setDrawingBufferSize=function(U,$,te){Y=U,K=$,se=te,t.width=Math.floor(U*te),t.height=Math.floor($*te),this.setViewport(0,0,U,$)},this.getCurrentViewport=function(U){return U.copy(C)},this.getViewport=function(U){return U.copy(Q)},this.setViewport=function(U,$,te,ie){U.isVector4?Q.set(U.x,U.y,U.z,U.w):Q.set(U,$,te,ie),Ge.viewport(C.copy(Q).multiplyScalar(se).floor())},this.getScissor=function(U){return U.copy(le)},this.setScissor=function(U,$,te,ie){U.isVector4?le.set(U.x,U.y,U.z,U.w):le.set(U,$,te,ie),Ge.scissor(G.copy(le).multiplyScalar(se).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(U){Ge.setScissorTest(de=U)},this.setOpaqueSort=function(U){H=U},this.setTransparentSort=function(U){Z=U},this.getClearColor=function(U){return U.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(U=!0,$=!0,te=!0){let ie=0;if(U){let ee=!1;if(P!==null){const Ae=P.texture.format;ee=Ae===K2||Ae===q2||Ae===$2}if(ee){const Ae=P.texture.type,ke=Ae===qs||Ae===Is||Ae===by||Ae===Vo||Ae===Y2||Ae===j2,je=Pt.getClearColor(),$e=Pt.getClearAlpha(),dt=je.r,rt=je.g,lt=je.b;ke?(v[0]=dt,v[1]=rt,v[2]=lt,v[3]=$e,J.clearBufferuiv(J.COLOR,0,v)):(M[0]=dt,M[1]=rt,M[2]=lt,M[3]=$e,J.clearBufferiv(J.COLOR,0,M))}else ie|=J.COLOR_BUFFER_BIT}$&&(ie|=J.DEPTH_BUFFER_BIT),te&&(ie|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Ce.dispose(),Ve.dispose(),ct.dispose(),D.dispose(),q.dispose(),_e.dispose(),it.dispose(),Ct.dispose(),Fe.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",jn),pt.removeEventListener("sessionend",kt),Le&&(Le.dispose(),Le=null),Rn.stop()};function ye(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const U=At.autoReset,$=me.enabled,te=me.autoUpdate,ie=me.needsUpdate,ee=me.type;en(),At.autoReset=U,me.enabled=$,me.autoUpdate=te,me.needsUpdate=ie,me.type=ee}function Ee(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Me(U){const $=U.target;$.removeEventListener("dispose",Me),Je($)}function Je(U){Xe(U),ct.remove(U)}function Xe(U){const $=ct.get(U).programs;$!==void 0&&($.forEach(function(te){Fe.releaseProgram(te)}),U.isShaderMaterial&&Fe.releaseShaderCache(U))}this.renderBufferDirect=function(U,$,te,ie,ee,Ae){$===null&&($=Ze);const ke=ee.isMesh&&ee.matrixWorld.determinant()<0,je=Km(U,$,te,ie,ee);Ge.setMaterial(ie,ke);let $e=te.index,dt=1;if(ie.wireframe===!0){if($e=pe.getWireframeAttribute(te),$e===void 0)return;dt=2}const rt=te.drawRange,lt=te.attributes.position;let tn=rt.start*dt,ti=(rt.start+rt.count)*dt;Ae!==null&&(tn=Math.max(tn,Ae.start*dt),ti=Math.min(ti,(Ae.start+Ae.count)*dt)),$e!==null?(tn=Math.max(tn,0),ti=Math.min(ti,$e.count)):lt!=null&&(tn=Math.max(tn,0),ti=Math.min(ti,lt.count));const vn=ti-tn;if(vn<0||vn===1/0)return;it.setup(ee,ie,je,te,$e);let kr,Yt=tt;if($e!==null&&(kr=ge.get($e),Yt=We,Yt.setIndex(kr)),ee.isMesh)ie.wireframe===!0?(Ge.setLineWidth(ie.wireframeLinewidth*xt()),Yt.setMode(J.LINES)):Yt.setMode(J.TRIANGLES);else if(ee.isLine){let mt=ie.linewidth;mt===void 0&&(mt=1),Ge.setLineWidth(mt*xt()),ee.isLineSegments?Yt.setMode(J.LINES):ee.isLineLoop?Yt.setMode(J.LINE_LOOP):Yt.setMode(J.LINE_STRIP)}else ee.isPoints?Yt.setMode(J.POINTS):ee.isSprite&&Yt.setMode(J.TRIANGLES);if(ee.isBatchedMesh)Yt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else if(ee.isInstancedMesh)Yt.renderInstances(tn,vn,ee.count);else if(te.isInstancedBufferGeometry){const mt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,ic=Math.min(te.instanceCount,mt);Yt.renderInstances(tn,vn,ic)}else Yt.render(tn,vn)};function Ft(U,$,te){U.transparent===!0&&U.side===tr&&U.forceSinglePass===!1?(U.side=Fi,U.needsUpdate=!0,gl(U,$,te),U.side=eo,U.needsUpdate=!0,gl(U,$,te),U.side=tr):gl(U,$,te)}this.compile=function(U,$,te=null){te===null&&(te=U),_=Ve.get(te),_.init(),S.push(_),te.traverseVisible(function(ee){ee.isLight&&ee.layers.test($.layers)&&(_.pushLight(ee),ee.castShadow&&_.pushShadow(ee))}),U!==te&&U.traverseVisible(function(ee){ee.isLight&&ee.layers.test($.layers)&&(_.pushLight(ee),ee.castShadow&&_.pushShadow(ee))}),_.setupLights(y._useLegacyLights);const ie=new Set;return U.traverse(function(ee){const Ae=ee.material;if(Ae)if(Array.isArray(Ae))for(let ke=0;ke<Ae.length;ke++){const je=Ae[ke];Ft(je,te,ee),ie.add(je)}else Ft(Ae,te,ee),ie.add(Ae)}),S.pop(),_=null,ie},this.compileAsync=function(U,$,te=null){const ie=this.compile(U,$,te);return new Promise(ee=>{function Ae(){if(ie.forEach(function(ke){ct.get(ke).currentProgram.isReady()&&ie.delete(ke)}),ie.size===0){ee(U);return}setTimeout(Ae,10)}Oe.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let It=null;function En(U){It&&It(U)}function jn(){Rn.stop()}function kt(){Rn.start()}const Rn=new fC;Rn.setAnimationLoop(En),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(U){It=U,pt.setAnimationLoop(U),U===null?Rn.stop():Rn.start()},pt.addEventListener("sessionstart",jn),pt.addEventListener("sessionend",kt),this.render=function(U,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera($),$=pt.getCamera()),U.isScene===!0&&U.onBeforeRender(y,U,$,P),_=Ve.get(U,S.length),_.init(),S.push(_),Ne.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),re.setFromProjectionMatrix(Ne),xe=this.localClippingEnabled,ue=ot.init(this.clippingPlanes,xe),x=Ce.get(U,g.length),x.init(),g.push(x),pr(U,$,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(H,Z),this.info.render.frame++,ue===!0&&ot.beginShadows();const te=_.state.shadowsArray;if(me.render(te,U,$),ue===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),Pt.render(x,U),_.setupLights(y._useLegacyLights),$.isArrayCamera){const ie=$.cameras;for(let ee=0,Ae=ie.length;ee<Ae;ee++){const ke=ie[ee];pl(x,U,ke,ke.viewport)}}else pl(x,U,$);P!==null&&(O.updateMultisampleRenderTarget(P),O.updateRenderTargetMipmap(P)),U.isScene===!0&&U.onAfterRender(y,U,$),it.resetDefaultState(),N=-1,T=null,S.pop(),S.length>0?_=S[S.length-1]:_=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function pr(U,$,te,ie){if(U.visible===!1)return;if(U.layers.test($.layers)){if(U.isGroup)te=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update($);else if(U.isLight)_.pushLight(U),U.castShadow&&_.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||re.intersectsSprite(U)){ie&&nt.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Ne);const ke=_e.update(U),je=U.material;je.visible&&x.push(U,ke,je,te,nt.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||re.intersectsObject(U))){const ke=_e.update(U),je=U.material;if(ie&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),nt.copy(U.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),nt.copy(ke.boundingSphere.center)),nt.applyMatrix4(U.matrixWorld).applyMatrix4(Ne)),Array.isArray(je)){const $e=ke.groups;for(let dt=0,rt=$e.length;dt<rt;dt++){const lt=$e[dt],tn=je[lt.materialIndex];tn&&tn.visible&&x.push(U,ke,tn,te,nt.z,lt)}}else je.visible&&x.push(U,ke,je,te,nt.z,null)}}const Ae=U.children;for(let ke=0,je=Ae.length;ke<je;ke++)pr(Ae[ke],$,te,ie)}function pl(U,$,te,ie){const ee=U.opaque,Ae=U.transmissive,ke=U.transparent;_.setupLightsView(te),ue===!0&&ot.setGlobalState(y.clippingPlanes,te),Ae.length>0&&qm(ee,Ae,$,te),ie&&Ge.viewport(C.copy(ie)),ee.length>0&&ml(ee,$,te),Ae.length>0&&ml(Ae,$,te),ke.length>0&&ml(ke,$,te),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function qm(U,$,te,ie){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;const Ae=Qe.isWebGL2;Le===null&&(Le=new Ma(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")?If:qs,minFilter:Df,samples:Ae?4:0})),y.getDrawingBufferSize(et),Ae?Le.setSize(et.x,et.y):Le.setSize(rm(et.x),rm(et.y));const ke=y.getRenderTarget();y.setRenderTarget(Le),y.getClearColor(ae),k=y.getClearAlpha(),k<1&&y.setClearColor(16777215,.5),y.clear();const je=y.toneMapping;y.toneMapping=$s,ml(U,te,ie),O.updateMultisampleRenderTarget(Le),O.updateRenderTargetMipmap(Le);let $e=!1;for(let dt=0,rt=$.length;dt<rt;dt++){const lt=$[dt],tn=lt.object,ti=lt.geometry,vn=lt.material,kr=lt.group;if(vn.side===tr&&tn.layers.test(ie.layers)){const Yt=vn.side;vn.side=Fi,vn.needsUpdate=!0,cd(tn,te,ie,ti,vn,kr),vn.side=Yt,vn.needsUpdate=!0,$e=!0}}$e===!0&&(O.updateMultisampleRenderTarget(Le),O.updateRenderTargetMipmap(Le)),y.setRenderTarget(ke),y.setClearColor(ae,k),y.toneMapping=je}function ml(U,$,te){const ie=$.isScene===!0?$.overrideMaterial:null;for(let ee=0,Ae=U.length;ee<Ae;ee++){const ke=U[ee],je=ke.object,$e=ke.geometry,dt=ie===null?ke.material:ie,rt=ke.group;je.layers.test(te.layers)&&cd(je,$,te,$e,dt,rt)}}function cd(U,$,te,ie,ee,Ae){U.onBeforeRender(y,$,te,ie,ee,Ae),U.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),ee.onBeforeRender(y,$,te,ie,U,Ae),ee.transparent===!0&&ee.side===tr&&ee.forceSinglePass===!1?(ee.side=Fi,ee.needsUpdate=!0,y.renderBufferDirect(te,$,ie,ee,U,Ae),ee.side=eo,ee.needsUpdate=!0,y.renderBufferDirect(te,$,ie,ee,U,Ae),ee.side=tr):y.renderBufferDirect(te,$,ie,ee,U,Ae),U.onAfterRender(y,$,te,ie,ee,Ae)}function gl(U,$,te){$.isScene!==!0&&($=Ze);const ie=ct.get(U),ee=_.state.lights,Ae=_.state.shadowsArray,ke=ee.state.version,je=Fe.getParameters(U,ee.state,Ae,$,te),$e=Fe.getProgramCacheKey(je);let dt=ie.programs;ie.environment=U.isMeshStandardMaterial?$.environment:null,ie.fog=$.fog,ie.envMap=(U.isMeshStandardMaterial?q:D).get(U.envMap||ie.environment),dt===void 0&&(U.addEventListener("dispose",Me),dt=new Map,ie.programs=dt);let rt=dt.get($e);if(rt!==void 0){if(ie.currentProgram===rt&&ie.lightsStateVersion===ke)return dd(U,je),rt}else je.uniforms=Fe.getUniforms(U),U.onBuild(te,je,y),U.onBeforeCompile(je,y),rt=Fe.acquireProgram(je,$e),dt.set($e,rt),ie.uniforms=je.uniforms;const lt=ie.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(lt.clippingPlanes=ot.uniform),dd(U,je),ie.needsLights=hd(U),ie.lightsStateVersion=ke,ie.needsLights&&(lt.ambientLightColor.value=ee.state.ambient,lt.lightProbe.value=ee.state.probe,lt.directionalLights.value=ee.state.directional,lt.directionalLightShadows.value=ee.state.directionalShadow,lt.spotLights.value=ee.state.spot,lt.spotLightShadows.value=ee.state.spotShadow,lt.rectAreaLights.value=ee.state.rectArea,lt.ltc_1.value=ee.state.rectAreaLTC1,lt.ltc_2.value=ee.state.rectAreaLTC2,lt.pointLights.value=ee.state.point,lt.pointLightShadows.value=ee.state.pointShadow,lt.hemisphereLights.value=ee.state.hemi,lt.directionalShadowMap.value=ee.state.directionalShadowMap,lt.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,lt.spotShadowMap.value=ee.state.spotShadowMap,lt.spotLightMatrix.value=ee.state.spotLightMatrix,lt.spotLightMap.value=ee.state.spotLightMap,lt.pointShadowMap.value=ee.state.pointShadowMap,lt.pointShadowMatrix.value=ee.state.pointShadowMatrix),ie.currentProgram=rt,ie.uniformsList=null,rt}function fd(U){if(U.uniformsList===null){const $=U.currentProgram.getUniforms();U.uniformsList=gp.seqWithValue($.seq,U.uniforms)}return U.uniformsList}function dd(U,$){const te=ct.get(U);te.outputColorSpace=$.outputColorSpace,te.batching=$.batching,te.instancing=$.instancing,te.instancingColor=$.instancingColor,te.skinning=$.skinning,te.morphTargets=$.morphTargets,te.morphNormals=$.morphNormals,te.morphColors=$.morphColors,te.morphTargetsCount=$.morphTargetsCount,te.numClippingPlanes=$.numClippingPlanes,te.numIntersection=$.numClipIntersection,te.vertexAlphas=$.vertexAlphas,te.vertexTangents=$.vertexTangents,te.toneMapping=$.toneMapping}function Km(U,$,te,ie,ee){$.isScene!==!0&&($=Ze),O.resetTextureUnits();const Ae=$.fog,ke=ie.isMeshStandardMaterial?$.environment:null,je=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ja,$e=(ie.isMeshStandardMaterial?q:D).get(ie.envMap||ke),dt=ie.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,rt=!!te.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),lt=!!te.morphAttributes.position,tn=!!te.morphAttributes.normal,ti=!!te.morphAttributes.color;let vn=$s;ie.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(vn=y.toneMapping);const kr=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Yt=kr!==void 0?kr.length:0,mt=ct.get(ie),ic=_.state.lights;if(ue===!0&&(xe===!0||U!==T)){const bi=U===T&&ie.id===N;ot.setState(ie,U,bi)}let jt=!1;ie.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==ic.state.version||mt.outputColorSpace!==je||ee.isBatchedMesh&&mt.batching===!1||!ee.isBatchedMesh&&mt.batching===!0||ee.isInstancedMesh&&mt.instancing===!1||!ee.isInstancedMesh&&mt.instancing===!0||ee.isSkinnedMesh&&mt.skinning===!1||!ee.isSkinnedMesh&&mt.skinning===!0||ee.isInstancedMesh&&mt.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&mt.instancingColor===!1&&ee.instanceColor!==null||mt.envMap!==$e||ie.fog===!0&&mt.fog!==Ae||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==ot.numPlanes||mt.numIntersection!==ot.numIntersection)||mt.vertexAlphas!==dt||mt.vertexTangents!==rt||mt.morphTargets!==lt||mt.morphNormals!==tn||mt.morphColors!==ti||mt.toneMapping!==vn||Qe.isWebGL2===!0&&mt.morphTargetsCount!==Yt)&&(jt=!0):(jt=!0,mt.__version=ie.version);let ra=mt.currentProgram;jt===!0&&(ra=gl(ie,$,ee));let rc=!1,Ta=!1,ac=!1;const Pn=ra.getUniforms(),mr=mt.uniforms;if(Ge.useProgram(ra.program)&&(rc=!0,Ta=!0,ac=!0),ie.id!==N&&(N=ie.id,Ta=!0),rc||T!==U){Pn.setValue(J,"projectionMatrix",U.projectionMatrix),Pn.setValue(J,"viewMatrix",U.matrixWorldInverse);const bi=Pn.map.cameraPosition;bi!==void 0&&bi.setValue(J,nt.setFromMatrixPosition(U.matrixWorld)),Qe.logarithmicDepthBuffer&&Pn.setValue(J,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Pn.setValue(J,"isOrthographic",U.isOrthographicCamera===!0),T!==U&&(T=U,Ta=!0,ac=!0)}if(ee.isSkinnedMesh){Pn.setOptional(J,ee,"bindMatrix"),Pn.setOptional(J,ee,"bindMatrixInverse");const bi=ee.skeleton;bi&&(Qe.floatVertexTextures?(bi.boneTexture===null&&bi.computeBoneTexture(),Pn.setValue(J,"boneTexture",bi.boneTexture,O)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ee.isBatchedMesh&&(Pn.setOptional(J,ee,"batchingTexture"),Pn.setValue(J,"batchingTexture",ee._matricesTexture,O));const vl=te.morphAttributes;if((vl.position!==void 0||vl.normal!==void 0||vl.color!==void 0&&Qe.isWebGL2===!0)&&ft.update(ee,te,ra),(Ta||mt.receiveShadow!==ee.receiveShadow)&&(mt.receiveShadow=ee.receiveShadow,Pn.setValue(J,"receiveShadow",ee.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(mr.envMap.value=$e,mr.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),Ta&&(Pn.setValue(J,"toneMappingExposure",y.toneMappingExposure),mt.needsLights&&Zm(mr,ac),Ae&&ie.fog===!0&&be.refreshFogUniforms(mr,Ae),be.refreshMaterialUniforms(mr,ie,se,K,Le),gp.upload(J,fd(mt),mr,O)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(gp.upload(J,fd(mt),mr,O),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Pn.setValue(J,"center",ee.center),Pn.setValue(J,"modelViewMatrix",ee.modelViewMatrix),Pn.setValue(J,"normalMatrix",ee.normalMatrix),Pn.setValue(J,"modelMatrix",ee.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const bi=ie.uniformsGroups;for(let _l=0,pd=bi.length;_l<pd;_l++)if(Qe.isWebGL2){const xl=bi[_l];Ct.update(xl,ra),Ct.bind(xl,ra)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ra}function Zm(U,$){U.ambientLightColor.needsUpdate=$,U.lightProbe.needsUpdate=$,U.directionalLights.needsUpdate=$,U.directionalLightShadows.needsUpdate=$,U.pointLights.needsUpdate=$,U.pointLightShadows.needsUpdate=$,U.spotLights.needsUpdate=$,U.spotLightShadows.needsUpdate=$,U.rectAreaLights.needsUpdate=$,U.hemisphereLights.needsUpdate=$}function hd(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(U,$,te){ct.get(U.texture).__webglTexture=$,ct.get(U.depthTexture).__webglTexture=te;const ie=ct.get(U);ie.__hasExternalTextures=!0,ie.__hasExternalTextures&&(ie.__autoAllocateDepthBuffer=te===void 0,ie.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,$){const te=ct.get(U);te.__webglFramebuffer=$,te.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(U,$=0,te=0){P=U,A=$,R=te;let ie=!0,ee=null,Ae=!1,ke=!1;if(U){const $e=ct.get(U);$e.__useDefaultFramebuffer!==void 0?(Ge.bindFramebuffer(J.FRAMEBUFFER,null),ie=!1):$e.__webglFramebuffer===void 0?O.setupRenderTarget(U):$e.__hasExternalTextures&&O.rebindTextures(U,ct.get(U.texture).__webglTexture,ct.get(U.depthTexture).__webglTexture);const dt=U.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(ke=!0);const rt=ct.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(rt[$])?ee=rt[$][te]:ee=rt[$],Ae=!0):Qe.isWebGL2&&U.samples>0&&O.useMultisampledRTT(U)===!1?ee=ct.get(U).__webglMultisampledFramebuffer:Array.isArray(rt)?ee=rt[te]:ee=rt,C.copy(U.viewport),G.copy(U.scissor),X=U.scissorTest}else C.copy(Q).multiplyScalar(se).floor(),G.copy(le).multiplyScalar(se).floor(),X=de;if(Ge.bindFramebuffer(J.FRAMEBUFFER,ee)&&Qe.drawBuffers&&ie&&Ge.drawBuffers(U,ee),Ge.viewport(C),Ge.scissor(G),Ge.setScissorTest(X),Ae){const $e=ct.get(U.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+$,$e.__webglTexture,te)}else if(ke){const $e=ct.get(U.texture),dt=$||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,$e.__webglTexture,te||0,dt)}N=-1},this.readRenderTargetPixels=function(U,$,te,ie,ee,Ae,ke){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=ct.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&ke!==void 0&&(je=je[ke]),je){Ge.bindFramebuffer(J.FRAMEBUFFER,je);try{const $e=U.texture,dt=$e.format,rt=$e.type;if(dt!==nr&&Ie.convert(dt)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const lt=rt===If&&(Oe.has("EXT_color_buffer_half_float")||Qe.isWebGL2&&Oe.has("EXT_color_buffer_float"));if(rt!==qs&&Ie.convert(rt)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&!(rt===va&&(Qe.isWebGL2||Oe.has("OES_texture_float")||Oe.has("WEBGL_color_buffer_float")))&&!lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=U.width-ie&&te>=0&&te<=U.height-ee&&J.readPixels($,te,ie,ee,Ie.convert(dt),Ie.convert(rt),Ae)}finally{const $e=P!==null?ct.get(P).__webglFramebuffer:null;Ge.bindFramebuffer(J.FRAMEBUFFER,$e)}}},this.copyFramebufferToTexture=function(U,$,te=0){const ie=Math.pow(2,-te),ee=Math.floor($.image.width*ie),Ae=Math.floor($.image.height*ie);O.setTexture2D($,0),J.copyTexSubImage2D(J.TEXTURE_2D,te,0,0,U.x,U.y,ee,Ae),Ge.unbindTexture()},this.copyTextureToTexture=function(U,$,te,ie=0){const ee=$.image.width,Ae=$.image.height,ke=Ie.convert(te.format),je=Ie.convert(te.type);O.setTexture2D(te,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,te.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,te.unpackAlignment),$.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,ie,U.x,U.y,ee,Ae,ke,je,$.image.data):$.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,ie,U.x,U.y,$.mipmaps[0].width,$.mipmaps[0].height,ke,$.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,ie,U.x,U.y,ke,je,$.image),ie===0&&te.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(U,$,te,ie,ee=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=U.max.x-U.min.x+1,ke=U.max.y-U.min.y+1,je=U.max.z-U.min.z+1,$e=Ie.convert(ie.format),dt=Ie.convert(ie.type);let rt;if(ie.isData3DTexture)O.setTexture3D(ie,0),rt=J.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)O.setTexture2DArray(ie,0),rt=J.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,ie.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,ie.unpackAlignment);const lt=J.getParameter(J.UNPACK_ROW_LENGTH),tn=J.getParameter(J.UNPACK_IMAGE_HEIGHT),ti=J.getParameter(J.UNPACK_SKIP_PIXELS),vn=J.getParameter(J.UNPACK_SKIP_ROWS),kr=J.getParameter(J.UNPACK_SKIP_IMAGES),Yt=te.isCompressedTexture?te.mipmaps[ee]:te.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,Yt.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Yt.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,U.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,U.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,U.min.z),te.isDataTexture||te.isData3DTexture?J.texSubImage3D(rt,ee,$.x,$.y,$.z,Ae,ke,je,$e,dt,Yt.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(rt,ee,$.x,$.y,$.z,Ae,ke,je,$e,Yt.data)):J.texSubImage3D(rt,ee,$.x,$.y,$.z,Ae,ke,je,$e,dt,Yt),J.pixelStorei(J.UNPACK_ROW_LENGTH,lt),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,tn),J.pixelStorei(J.UNPACK_SKIP_PIXELS,ti),J.pixelStorei(J.UNPACK_SKIP_ROWS,vn),J.pixelStorei(J.UNPACK_SKIP_IMAGES,kr),ee===0&&ie.generateMipmaps&&J.generateMipmap(rt),Ge.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?O.setTextureCube(U,0):U.isData3DTexture?O.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?O.setTexture2DArray(U,0):O.setTexture2D(U,0),Ge.unbindTexture()},this.resetState=function(){A=0,R=0,P=null,Ge.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ja}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ay?"display-p3":"srgb",t.unpackColorSpace=zt.workingColorSpace===Om?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Zn?Yo:Q2}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Yo?Zn:Ja}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class tW extends id{}tW.prototype.isWebGL1Renderer=!0;class rd extends ki{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}const dT=new j,hT=new An,pT=new An,nW=new j,mT=new Ot,Bh=new j,l0=new dl,gT=new Ot,u0=new Ry;class iW extends cn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ZM,this.bindMatrix=new Ot,this.bindMatrixInverse=new Ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new uo),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Bh),this.boundingBox.expandByPoint(Bh)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new dl),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Bh),this.boundingSphere.expandByPoint(Bh)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),l0.copy(this.boundingSphere),l0.applyMatrix4(r),e.ray.intersectsSphere(l0)!==!1&&(gT.copy(r).invert(),u0.copy(e.ray).applyMatrix4(gT),!(this.boundingBox!==null&&u0.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,u0)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new An,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ZM?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===mz?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;hT.fromBufferAttribute(r.attributes.skinIndex,e),pT.fromBufferAttribute(r.attributes.skinWeight,e),dT.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const o=pT.getComponent(a);if(o!==0){const l=hT.getComponent(a);mT.multiplyMatrices(i.bones[l].matrixWorld,i.boneInverses[l]),t.addScaledVector(nW.copy(dT).applyMatrix4(mT),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class z_ extends ki{constructor(){super(),this.isBone=!0,this.type="Bone"}}class rW extends Mi{constructor(e=null,t=1,i=1,r,a,o,l,c,f=Un,d=Un,p,m){super(null,o,l,c,f,d,r,a,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vT=new Ot,aW=new Ot;class Iy{constructor(e=[],t=[]){this.uuid=fl(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ot;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let a=0,o=e.length;a<o;a++){const l=e[a]?e[a].matrixWorld:aW;vT.multiplyMatrices(l,t[a]),vT.toArray(i,a*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Iy(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new rW(t,e,e,nr,va);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const a=e.bones[i];let o=t[a];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),o=new z_),this.bones.push(o),this.boneInverses.push(new Ot().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,a=t.length;r<a;r++){const o=t[r];e.bones.push(o.uuid);const l=i[r];e.boneInverses.push(l.toArray())}return e}}class fa extends ta{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zl=new Ot,_T=new Ot,Hh=[],xT=new uo,sW=new Ot,Uc=new cn,Nc=new dl;class oW extends cn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fa(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,sW)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new uo),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zl),xT.copy(e.boundingBox).applyMatrix4(Zl),this.boundingBox.union(xT)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new dl),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zl),Nc.copy(e.boundingSphere).applyMatrix4(Zl),this.boundingSphere.union(Nc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Uc.geometry=this.geometry,Uc.material=this.material,Uc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nc.copy(this.boundingSphere),Nc.applyMatrix4(i),e.ray.intersectsSphere(Nc)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Zl),_T.multiplyMatrices(i,Zl),Uc.matrixWorld=_T,Uc.raycast(e,Hh);for(let o=0,l=Hh.length;o<l;o++){const c=Hh[o];c.instanceId=a,c.object=this,t.push(c)}Hh.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fa(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Uy extends ia{constructor(e=1,t=1,i=1,r=32,a=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:o,thetaStart:l,thetaLength:c};const f=this;r=Math.floor(r),a=Math.floor(a);const d=[],p=[],m=[],v=[];let M=0;const x=[],_=i/2;let g=0;S(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new Jn(p,3)),this.setAttribute("normal",new Jn(m,3)),this.setAttribute("uv",new Jn(v,2));function S(){const w=new j,A=new j;let R=0;const P=(t-e)/i;for(let N=0;N<=a;N++){const T=[],C=N/a,G=C*(t-e)+e;for(let X=0;X<=r;X++){const ae=X/r,k=ae*c+l,Y=Math.sin(k),K=Math.cos(k);A.x=G*Y,A.y=-C*i+_,A.z=G*K,p.push(A.x,A.y,A.z),w.set(Y,P,K).normalize(),m.push(w.x,w.y,w.z),v.push(ae,1-C),T.push(M++)}x.push(T)}for(let N=0;N<r;N++)for(let T=0;T<a;T++){const C=x[T][N],G=x[T+1][N],X=x[T+1][N+1],ae=x[T][N+1];d.push(C,G,ae),d.push(G,X,ae),R+=6}f.addGroup(g,R,0),g+=R}function y(w){const A=M,R=new st,P=new j;let N=0;const T=w===!0?e:t,C=w===!0?1:-1;for(let X=1;X<=r;X++)p.push(0,_*C,0),m.push(0,C,0),v.push(.5,.5),M++;const G=M;for(let X=0;X<=r;X++){const k=X/r*c+l,Y=Math.cos(k),K=Math.sin(k);P.x=T*K,P.y=_*C,P.z=T*Y,p.push(P.x,P.y,P.z),m.push(0,C,0),R.x=Y*.5+.5,R.y=K*.5*C+.5,v.push(R.x,R.y),M++}for(let X=0;X<r;X++){const ae=A+X,k=G+X;w===!0?d.push(k,k+1,ae):d.push(k+1,k,ae),N+=3}f.addGroup(g,N,w===!0?1:2),g+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uy(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ny extends ia{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const a=[],o=[];l(r),f(i),d(),this.setAttribute("position",new Jn(a,3)),this.setAttribute("normal",new Jn(a.slice(),3)),this.setAttribute("uv",new Jn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function l(S){const y=new j,w=new j,A=new j;for(let R=0;R<t.length;R+=3)v(t[R+0],y),v(t[R+1],w),v(t[R+2],A),c(y,w,A,S)}function c(S,y,w,A){const R=A+1,P=[];for(let N=0;N<=R;N++){P[N]=[];const T=S.clone().lerp(w,N/R),C=y.clone().lerp(w,N/R),G=R-N;for(let X=0;X<=G;X++)X===0&&N===R?P[N][X]=T:P[N][X]=T.clone().lerp(C,X/G)}for(let N=0;N<R;N++)for(let T=0;T<2*(R-N)-1;T++){const C=Math.floor(T/2);T%2===0?(m(P[N][C+1]),m(P[N+1][C]),m(P[N][C])):(m(P[N][C+1]),m(P[N+1][C+1]),m(P[N+1][C]))}}function f(S){const y=new j;for(let w=0;w<a.length;w+=3)y.x=a[w+0],y.y=a[w+1],y.z=a[w+2],y.normalize().multiplyScalar(S),a[w+0]=y.x,a[w+1]=y.y,a[w+2]=y.z}function d(){const S=new j;for(let y=0;y<a.length;y+=3){S.x=a[y+0],S.y=a[y+1],S.z=a[y+2];const w=_(S)/2/Math.PI+.5,A=g(S)/Math.PI+.5;o.push(w,1-A)}M(),p()}function p(){for(let S=0;S<o.length;S+=6){const y=o[S+0],w=o[S+2],A=o[S+4],R=Math.max(y,w,A),P=Math.min(y,w,A);R>.9&&P<.1&&(y<.2&&(o[S+0]+=1),w<.2&&(o[S+2]+=1),A<.2&&(o[S+4]+=1))}}function m(S){a.push(S.x,S.y,S.z)}function v(S,y){const w=S*3;y.x=e[w+0],y.y=e[w+1],y.z=e[w+2]}function M(){const S=new j,y=new j,w=new j,A=new j,R=new st,P=new st,N=new st;for(let T=0,C=0;T<a.length;T+=9,C+=6){S.set(a[T+0],a[T+1],a[T+2]),y.set(a[T+3],a[T+4],a[T+5]),w.set(a[T+6],a[T+7],a[T+8]),R.set(o[C+0],o[C+1]),P.set(o[C+2],o[C+3]),N.set(o[C+4],o[C+5]),A.copy(S).add(y).add(w).divideScalar(3);const G=_(A);x(R,C+0,S,G),x(P,C+2,y,G),x(N,C+4,w,G)}}function x(S,y,w,A){A<0&&S.x===1&&(o[y]=S.x-1),w.x===0&&w.z===0&&(o[y]=A/2/Math.PI+.5)}function _(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ny(e.vertices,e.indices,e.radius,e.details)}}class Bm extends Ny{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bm(e.radius,e.detail)}}class Hm extends ia{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+l,Math.PI);let f=0;const d=[],p=new j,m=new j,v=[],M=[],x=[],_=[];for(let g=0;g<=i;g++){const S=[],y=g/i;let w=0;g===0&&o===0?w=.5/t:g===i&&c===Math.PI&&(w=-.5/t);for(let A=0;A<=t;A++){const R=A/t;p.x=-e*Math.cos(r+R*a)*Math.sin(o+y*l),p.y=e*Math.cos(o+y*l),p.z=e*Math.sin(r+R*a)*Math.sin(o+y*l),M.push(p.x,p.y,p.z),m.copy(p).normalize(),x.push(m.x,m.y,m.z),_.push(R+w,1-y),S.push(f++)}d.push(S)}for(let g=0;g<i;g++)for(let S=0;S<t;S++){const y=d[g][S+1],w=d[g][S],A=d[g+1][S],R=d[g+1][S+1];(g!==0||o>0)&&v.push(y,w,R),(g!==i-1||c<Math.PI)&&v.push(w,A,R)}this.setIndex(v),this.setAttribute("position",new Jn(M,3)),this.setAttribute("normal",new Jn(x,3)),this.setAttribute("uv",new Jn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ur extends Nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const yT={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class lW{constructor(e,t,i){const r=this;let a=!1,o=0,l=0,c;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(d){l++,a===!1&&r.onStart!==void 0&&r.onStart(d,o,l),a=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,p){return f.push(d,p),this},this.removeHandler=function(d){const p=f.indexOf(d);return p!==-1&&f.splice(p,2),this},this.getHandler=function(d){for(let p=0,m=f.length;p<m;p+=2){const v=f[p],M=f[p+1];if(v.global&&(v.lastIndex=0),v.test(d))return M}return null}}}const uW=new lW;class Oy{constructor(e){this.manager=e!==void 0?e:uW,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Oy.DEFAULT_MATERIAL_NAME="__DEFAULT";class cW extends Oy{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=yT.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(o),a.manager.itemEnd(e)},0),o;const l=Nf("img");function c(){d(),yT.add(e,this),t&&t(this),a.manager.itemEnd(e)}function f(p){d(),r&&r(p),a.manager.itemError(e),a.manager.itemEnd(e)}function d(){l.removeEventListener("load",c,!1),l.removeEventListener("error",f,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),a.manager.itemStart(e),l.src=e,l}}class Ff extends Oy{constructor(e){super(e)}load(e,t,i,r){const a=new Mi,o=new cW(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){a.image=l,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}}class xC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ST(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ST();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ST(){return(typeof performance>"u"?Date:performance).now()}class fW{constructor(e,t,i=0,r=1/0){this.ray=new Ry(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Py,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return B_(e,this,i,t),i.sort(ET),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)B_(e[r],this,i,t);return i.sort(ET),i}}function ET(n,e){return n.distance-e.distance}function B_(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)B_(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ty}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ty);class dW extends yi{constructor(){super();Ue(this,"cameraResolution");Ue(this,"time");this.cameraResolution=new st,this.time=0}start(){this.far=5e3,this.setFocalLength(50),this.position.set(0,0,130),this.lookAt(new j)}update(t){this.time+=t}resize(t){this.aspect=t.x/t.y,this.updateProjectionMatrix(),this.position.z=this.aspect<1?150:120}}var hW=`attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
uniform vec3 cameraPosition;

varying vec2 vUv;
varying float vEdge;

void main() {
    vec4 mPosition = modelMatrix * vec4(position, 1.0);
    float angleToCamera = acos(dot(normalize(cameraPosition), normal));
    vUv = uv;
    vEdge = smoothstep(0.4, 1.0, abs(sin(angleToCamera)));
    gl_Position = projectionMatrix * viewMatrix * mPosition;
}`,pW=`precision highp float;

uniform float time;
uniform sampler2D noiseTex;

varying vec2 vUv;
varying float vEdge;

vec3 convertHsvToRgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
    vec2 p = vUv * 2.0 - 1.0;

    float noise1 = texture2D(noiseTex, vUv + vec2(time * 0.1, 0.0)).r;
    float noise2 = texture2D(noiseTex, vUv + vec2(time * -0.1, 0.0)).g;

    
    vec3 hsv = vec3((noise1 + noise2) * 0.35 + time * 0.1, 1.0 - vEdge, 0.02 + vEdge * 0.98);
    vec3 rgb = convertHsvToRgb(hsv);

    gl_FragColor = vec4(rgb, 1.0);
}`;class mW extends cn{constructor(){const t=new Bm(10,6),i=new Ur({uniforms:{time:{value:0},noiseTex:{value:null}},vertexShader:hW,fragmentShader:pW});super(t,i);Ue(this,"acceleration");Ue(this,"anchor");this.name="Core",this.acceleration=new j,this.anchor=new j}start(t){const i=this.material,{uniforms:r}=i;r.noiseTex.value=t}update(t,i){const r=this.material,{uniforms:a}=r;a.time.value+=t,this.applyHook(0,.2),this.applyDrag(.6),this.position.add(this.acceleration),this.lookAt(i.position)}applyDrag(t){const i=this.acceleration.clone();i.multiplyScalar(-1),i.normalize(),i.multiplyScalar(this.acceleration.length()*t),this.acceleration.add(i)}applyHook(t,i){const r=this.position.clone().sub(this.anchor),a=r.length()-t;r.normalize(),r.multiplyScalar(-1*i*a),this.acceleration.add(r)}}var gW=`attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

uniform float time;
uniform sampler2D noiseTex;
uniform vec3 acceleration;

varying vec2 vUv;

void main() {
    float noise1 = texture2D(noiseTex, uv * 0.25 + vec2(0.1, -0.1) * time).r;
    float noise2 = texture2D(noiseTex, uv * 0.25 + vec2(-0.1, -0.1) * time).g;
    float noise = (noise1 + noise2) * 0.5 * (1.0 - min(length(acceleration) / 5.0, 1.0));

    vec3 transformed = vec3(position + normalize(position) * smoothstep(0.2, 1.0, noise) * 15.0);
    vec4 mPosition = modelMatrix * vec4(transformed, 1.0);

    vUv = uv;

    gl_Position = projectionMatrix * viewMatrix * mPosition;
}`,vW=`precision highp float;

uniform float time;
uniform sampler2D noiseTex;
uniform vec3 acceleration;

varying vec2 vUv;

vec3 convertHsvToRgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
    float noise1 = texture2D(noiseTex, vUv * vec2(1.0, 0.5) + vec2(0.4, -0.3) * time).r;
    float noise2 = texture2D(noiseTex, vUv * vec2(1.0, 0.5) + vec2(-0.4, -0.6) * time).g;
    float noise3 = texture2D(noiseTex, vUv * vec2(1.0, 0.5) + vec2(0.0, -0.6) * time).b;
    float noise = (noise1 + noise2) / 2.0 * smoothstep(0.0, 0.15, vUv.y) * (1.0 - smoothstep(0.9, 1.0, vUv.y));
    noise = smoothstep(0.5 - min(length(acceleration) / 5.0, 1.0) * 0.15, 1.0, noise);
    vec3 hsv = vec3(noise * 0.5 + time * 0.1 + noise3 * 0.4, 0.7 - noise * 3.0, 0.6 + noise * 0.6);
    vec3 rgb = convertHsvToRgb(hsv);
    float opacity = noise;

    if(opacity < 0.01)
        discard;

    gl_FragColor = vec4(rgb, 1.0);
}`;class _W extends cn{constructor(){const e=new Bm(10.1,10),t=new Ur({uniforms:{time:{value:0},noiseTex:{value:null},acceleration:{value:new j}},vertexShader:gW,fragmentShader:vW,side:tr});super(e,t)}start(e){const{uniforms:t}=this.material;console.log(e),t.noiseTex.value=e}update(e,t){const{uniforms:i}=this.material;i.time.value+=e,i.acceleration.value.copy(t.acceleration),this.position.copy(t.position)}}const xW="/deploy-portfolio2024/assets/noise-FliwDgVQ.jpg",yC=(n,e,t)=>Math.min(Math.max(n,e),t),yW=n=>n/Math.PI*180,SW=(n,e,t)=>n*(1-t)+e*t,SC=n=>n*Math.PI/180,EW=(n,e)=>Math.random()*(e-n)+n,MW=(n,e)=>Math.floor(Math.random()*(e-n+1))+n,wW=(n,e,t)=>(1-t)*n+t*e,vp=(n,e,t,i,r,a=!1,o=!0,l=!0)=>{if(o&&n<e)return i;if(l&&n>t)return r;const f=(n-e)/(t-e)*(r-i)+i;return a?Math.round(f):f},TW=(n,e,t)=>{if(n>=e)return 0;const i=yC((t-n)/(e-n),0,1);return i*i*(3-2*i)},bW=(n,e,t)=>[Math.sin(n)*Math.cos(e)*t,Math.cos(n)*t,Math.sin(n)*Math.sin(e)*t],AW=(n,e)=>e>=n?1:0,c0={clamp:yC,degrees:yW,mix:SW,radians:SC,randomArbitrary:EW,randomInt:MW,smoothstep:TW,spherical:bW,step:AW,map:vp,lerp:wW};var CW=`attribute vec3 position;
attribute vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

varying vec2 vUv;

void main() {
    vec4 mPosition = modelMatrix * vec4(position, 1.0);

    vUv = uv;

    gl_Position = projectionMatrix * viewMatrix * mPosition;
}`,RW=`precision highp float;

uniform float time;
uniform sampler2D noiseTex;

varying vec2 vUv;

vec3 convertHsvToRgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
    vec2 p = vUv * 2.0 - 1.0;

    float noise1 = texture2D(noiseTex, vUv * 0.25 + vec2(time * 0.1, 0.0)).r;
    float noise2 = texture2D(noiseTex, vUv * 0.25 + vec2(time * -0.1, 0.0)).g;
    float noise = (noise1 + noise2) / 2.0;
    vec3 hsv = vec3(noise * 0.5 + time * 0.1, 0.7, 0.7);
    vec3 rgb = convertHsvToRgb(hsv) * (1.0 - smoothstep(0.4, 1.0, length(p))) + (1.0 - smoothstep(0.67, 0.74, length(p)));
    float opacity = 1.0 - smoothstep(0.9, 1.0, length(p));

    if(opacity < 0.01)
        discard;

    gl_FragColor = vec4(rgb, opacity);
}`;class PW extends cn{constructor(){const e=new or(30,30),t=new Ur({uniforms:{time:{value:0},noiseTex:{value:null},acceleration:{value:new j}},vertexShader:CW,fragmentShader:RW,transparent:!0,blending:P_});super(e,t),this.name="CoreLight"}start(e){const{uniforms:t}=this.material;t.noiseTex.value=e}update(e,t){const{uniforms:i}=this.material;i.time.value+=e,i.acceleration.value.copy(t.acceleration),this.position.copy(t.position)}}var LW=`attribute vec3 position;
attribute vec2 uv;
attribute vec3 iPosition;
attribute vec3 iDirection;
attribute float iTime;
attribute float iDuration;
attribute float iDistance;
attribute float iScale;
attribute vec3 iRotate;
attribute vec2 iUvDiff;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
uniform float time;

varying vec2 vUv;
varying vec2 vUvDiff;
varying float vOpacity;
varying float vStep;

mat4 calcRotateMat4X(float radian) {
    return mat4(1.0, 0.0, 0.0, 0.0, 0.0, cos(radian), -sin(radian), 0.0, 0.0, sin(radian), cos(radian), 0.0, 0.0, 0.0, 0.0, 1.0);
}

mat4 calcRotateMat4Y(float radian) {
    return mat4(cos(radian), 0.0, sin(radian), 0.0, 0.0, 1.0, 0.0, 0.0, -sin(radian), 0.0, cos(radian), 0.0, 0.0, 0.0, 0.0, 1.0);
}

mat4 calcRotateMat4Z(float radian) {
    return mat4(cos(radian), -sin(radian), 0.0, 0.0, sin(radian), cos(radian), 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
}

mat4 calcRotateMat4(vec3 radian) {
    return calcRotateMat4X(radian.x) * calcRotateMat4Y(radian.y) * calcRotateMat4Z(radian.z);
}

mat4 calcScaleMat4(vec3 scale) {
    return mat4(scale.x, 0.0, 0.0, 0.0, 0.0, scale.y, 0.0, 0.0, 0.0, 0.0, scale.z, 0.0, 0.0, 0.0, 0.0, 1.0);
}

void main() {
    float stp = iTime / iDuration;

    mat4 rotateMat = calcRotateMat4(iRotate * time * 2.0);
    mat4 scaleMat = calcScaleMat4(vec3(iScale));
    vec3 transformed = position + vec3(cos(time * 3.0) * 6.0 * stp, 0.0, sin(time * 3.0) * 6.0 * stp);
    transformed = (rotateMat * scaleMat * vec4(transformed, 1.0)).xyz;
    transformed = transformed + iPosition + iDirection * iDistance * stp;
    vec4 mPosition = modelMatrix * vec4(transformed, 1.0);

    vUv = uv;
    vUvDiff = iUvDiff;
    vOpacity = step(0.0, iTime);
    vStep = stp;

    gl_Position = projectionMatrix * viewMatrix * mPosition;
}`,DW=`precision highp float;

uniform float time;
uniform sampler2D noiseTex;

varying vec2 vUv;
varying vec2 vUvDiff;
varying float vOpacity;
varying float vStep;

vec3 convertHsvToRgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
    vec2 p = vUv * 2.0 - 1.0;

    float noise = texture2D(noiseTex, (vUv + vUvDiff) * 0.25 + time * 0.1).r * 2.0 - 1.0;
    float stp = smoothstep(0.25, 1.0, vStep);
    noise = smoothstep(0.0 + stp, 0.2 + stp, noise * (1.0 - length(p)));
    float noise2 = texture2D(noiseTex, (vUv + vUvDiff) * 0.125 + time * 0.1).g;

    vec3 hsv = vec3(noise2 * 0.5 + time * 0.1, 0.4 - stp * 5.0, 0.95);
    vec3 rgb = convertHsvToRgb(hsv);
    float vOpacity = noise * vOpacity;

    gl_FragColor = vec4(rgb, vOpacity);
}`;const ua=400;class IW extends oW{constructor(){const e=new ia,t=new or(1,1);e.copy(t);const i=new fa(new Float32Array(ua*3),3),r=new fa(new Float32Array(ua*3),3),a=new fa(new Float32Array(ua),1),o=new fa(new Float32Array(ua),1),l=new fa(new Float32Array(ua),1),c=new fa(new Float32Array(ua),1),f=new fa(new Float32Array(ua*3),3),d=new fa(new Float32Array(ua*2),2);for(let m=0,v=ua;m<v;m++){const M=c0.radians((Math.random()*2-1)*75),x=c0.radians(Math.random()*360),g=c0.spherical(M,x,1);i.setXYZ(m,g[0]*5,g[1]*5,g[2]*5),r.setXYZ(m,g[0],g[1],g[2]),a.setX(m,0-Math.random()*5),o.setXYZ(m,2+Math.random()*4,0,0),l.setXYZ(m,20+Math.random()*15,0,0),c.setXYZ(m,1+Math.random()*1,0,0),f.setXYZ(m,Math.random()*2-1,Math.random()*2-1,Math.random()*2-1),d.setXYZ(m,Math.random()*2-1,Math.random()*2-1,0)}e.setAttribute("iPosition",i),e.setAttribute("iDirection",r),e.setAttribute("iTime",a),e.setAttribute("iDuration",o),e.setAttribute("iDistance",l),e.setAttribute("iScale",c),e.setAttribute("iRotate",f),e.setAttribute("iUvDiff",d);const p=new Ur({uniforms:{time:{value:0},noiseTex:{value:null}},vertexShader:LW,fragmentShader:DW,transparent:!0,side:tr,depthWrite:!1});super(e,p,ua)}start(e){const{uniforms:t}=this.material;t.noiseTex.value=e}update(e,t){const{iPosition:i,iDirection:r,iTime:a,iDuration:o}=this.geometry.attributes,{uniforms:l}=this.material;l.time.value+=e;for(let c=0;c<a.count;c++){const f=o.getX(c);let d=a.getX(c);(d>f||d<0&&d+e>0)&&(d%=f,i.setXYZ(c,r.getX(c)*5+t.position.x,r.getY(c)*5+t.position.y,r.getZ(c)*5+t.position.z)),a.setX(c,d+e)}i.needsUpdate=!0,a.needsUpdate=!0}}var UW=`precision highp float;

#define MAX_BONES 1024

attribute vec3 position;
attribute vec2 uv;
attribute vec4 skinIndex;
attribute vec4 skinWeight;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;

uniform mat4 bindMatrix;
uniform mat4 bindMatrixInverse;
uniform highp sampler2D boneTexture;
uniform int boneTextureSize;

uniform float time;
uniform sampler2D noiseTex;
uniform vec3 acceleration;

mat4 getBoneMatrix(const in float i) {
    float j = i * 4.0;
    float x = mod(j, float(boneTextureSize));
    float y = floor(j / float(boneTextureSize));
    float dx = 1.0 / float(boneTextureSize);
    float dy = 1.0 / float(boneTextureSize);

    y = dy * (y + 0.5);

    vec4 v1 = texture2D(boneTexture, vec2(dx * (x + 0.5), y));
    vec4 v2 = texture2D(boneTexture, vec2(dx * (x + 1.5), y));
    vec4 v3 = texture2D(boneTexture, vec2(dx * (x + 2.5), y));
    vec4 v4 = texture2D(boneTexture, vec2(dx * (x + 3.5), y));
    mat4 bone = mat4(v1, v2, v3, v4);

    return bone;
}

varying vec2 vUv;

void main() {
    float noise1 = texture2D(noiseTex, uv + vec2(0.4, -0.8) * time).r;
    float noise2 = texture2D(noiseTex, uv + vec2(-0.4, -1.4) * time).g;
    float noise = ((noise1 + noise2) - 1.0) * (uv.y * 0.9 + 0.1) * min(length(acceleration) / 3.0, 1.0);

    vec3 transformed = vec3(position + normalize(position) * vec3(1.0, 0.0, 1.0) * noise * 40.0);

    mat4 boneMatX = getBoneMatrix(skinIndex.x);
    mat4 boneMatY = getBoneMatrix(skinIndex.y);
    mat4 boneMatZ = getBoneMatrix(skinIndex.z);
    mat4 boneMatW = getBoneMatrix(skinIndex.w);
    vec4 skinVertex = bindMatrix * vec4(transformed, 1.0);
    vec4 skinned = vec4(0.0);

    skinned += boneMatX * skinVertex * skinWeight.x;
    skinned += boneMatY * skinVertex * skinWeight.y;
    skinned += boneMatZ * skinVertex * skinWeight.z;
    skinned += boneMatW * skinVertex * skinWeight.w;
    transformed = (bindMatrixInverse * skinned).xyz;

    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);

    vUv = uv;

    gl_Position = projectionMatrix * mvPosition;
}`,NW=`precision highp float;

uniform float time;
uniform sampler2D noiseTex;

varying vec2 vUv;

vec3 convertHsvToRgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
    float noise1 = texture2D(noiseTex, vUv + vec2(0.4, -1.6) * time).r;
    float noise2 = texture2D(noiseTex, vUv + vec2(-0.4, -2.4) * time).g;
    float noise3 = texture2D(noiseTex, vUv + vec2(0.0, -0.6) * time).b;
    float noise = (noise1 + noise2) / 2.0 * (1.0 - vUv.y) * smoothstep(0.0, 0.05, vUv.y);
    noise = smoothstep(0.3, 1.0, noise);

    vec3 hsv = vec3(noise * 0.5 + time * 0.1 + noise3 * 0.4, 0.7 - noise * 3.0, 0.6 + noise * 0.6);
    vec3 rgb = convertHsvToRgb(hsv);

    float opacity = noise;

    if(opacity < 0.01)
        discard;

    gl_FragColor = vec4(rgb, opacity);
}`;const Vc=2,H_=20,f0=Vc*H_,OW=(n,e)=>{const t=n.clone();t.multiplyScalar(-1),t.normalize(),t.multiplyScalar(n.length()*e),n.add(t)},FW=(n,e,t,i,r)=>{const a=n.clone().sub(t),o=a.length()-i;a.normalize(),a.multiplyScalar(-1*r*o),e.add(a)};class kW extends iW{constructor(){const t=[],i=new Uy(5,10,f0,24,H_*3,!0),{position:r}=i.attributes,a=new j,o=[],l=[],c=[];let f=new z_;for(let m=0;m<r.count;m++){a.fromBufferAttribute(r,m);const v=a.y+f0/2,M=Math.floor(v/Vc),x=v%Vc/Vc;o.push(M,M+1,0,0),l.push(1-x,x,0,0)}for(let m=0;m<=H_;m++){if(m===0)f.position.y=f0/-2,c.push(f);else{const v=new z_;v.position.y=Vc,c.push(v),f.add(v),f=v}t.push({velocity:new j,acceleration:new j})}i.setAttribute("skinIndex",new Ly(o,4)),i.setAttribute("skinWeight",new Jn(l,4));const d=new Ur({uniforms:{time:{value:0},noiseTex:{value:null},acceleration:{value:new j}},vertexShader:UW,fragmentShader:NW,side:tr}),p=new Iy(c);super(i,d);Ue(this,"top");Ue(this,"hookes");Ue(this,"time");this.top=new j(0,1,0),this.hookes=t,this.time=0,this.add(c[0]),this.bind(p)}start(t){const{uniforms:i}=this.material;i.noiseTex.value=t}update(t,i){const{uniforms:r}=this.material,{bones:a}=this.skeleton,o=new nl,l=new nl;this.time+=t,r.time.value+=t,this.hookes.map(({velocity:c,acceleration:f},d)=>{if(d===0)c.copy(i.position);else{const p=this.hookes[d-1].velocity;FW(c,f,p,0,1),OW(f,.7),c.add(f)}}),r.acceleration.value.copy(i.acceleration),a.map((c,f)=>{const{velocity:d}=this.hookes[f];if(f===0){const m=this.hookes[f+1].velocity.clone().sub(d).normalize(),v=new j().crossVectors(this.top,m).normalize(),M=Math.acos(this.top.clone().dot(m));o.setFromAxisAngle(v,M),c.rotation.setFromQuaternion(o),c.position.copy(i.position)}else if(f<a.length-1){const p=this.hookes[f-1].velocity,m=d.clone().sub(p).normalize(),v=new j().crossVectors(this.top,m).normalize(),M=Math.acos(this.top.clone().dot(m)),_=this.hookes[f+1].velocity.clone().sub(d).normalize(),g=new j().crossVectors(this.top,_).normalize(),S=Math.acos(this.top.clone().dot(_));o.setFromAxisAngle(v,M),l.setFromAxisAngle(g,S),o.conjugate().multiply(l),c.rotation.setFromQuaternion(o),c.position.y=d.distanceTo(p)}})}}var Fy=`attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;

void main() {
    vUv = uv;

    gl_Position = vec4(position, 1.0);
}`,zW=`precision highp float;

uniform sampler2D texture1;
uniform sampler2D texture2;

varying vec2 vUv;

void main() {
    vec4 color1 = texture2D(texture1, vUv);
    vec4 color2 = texture2D(texture2, vUv);

    gl_FragColor = color1 + color2;
}`;class BW extends cn{constructor(){const e=new or(2,2),t=new Ur({uniforms:{texture1:{value:null},texture2:{value:null}},vertexShader:Fy,fragmentShader:zW});super(e,t),this.name="PostEffectBloom"}start(e,t){this.material instanceof Ur&&(this.material.uniforms.texture1.value=e,this.material.uniforms.texture2.value=t)}}var HW=`precision highp float;

uniform float minBright;
uniform sampler2D texture;

varying vec2 vUv;

void main() {
    vec4 bright = max(vec4(0.0), (texture2D(texture, vUv) - minBright));

    gl_FragColor = bright;
}`;class GW extends cn{constructor(){const e=new or(2,2),t=new Ur({uniforms:{minBright:{value:.5},texture:{value:null}},vertexShader:Fy,fragmentShader:HW});super(e,t),this.name="PostEffectBright"}start(e){this.material instanceof Ur&&(this.material.uniforms.texture.value=e)}}var WW=`precision highp float;

uniform vec2 resolution;
uniform vec2 direction;
uniform sampler2D texture;

varying vec2 vUv;

vec4 gaussianBlur(sampler2D texture, vec2 uv, float radius, vec2 resolution, vec2 direction) {
    vec4 color = vec4(0.0);
    vec2 step = radius / resolution * direction;
    color += texture2D(texture, uv - 4.0 * step) * 0.02699548325659403;
    color += texture2D(texture, uv - 3.0 * step) * 0.06475879783294587;
    color += texture2D(texture, uv - 2.0 * step) * 0.12098536225957168;
    color += texture2D(texture, uv - 1.0 * step) * 0.17603266338214976;
    color += texture2D(texture, uv) * 0.19947114020071635;
    color += texture2D(texture, uv + 1.0 * step) * 0.17603266338214976;
    color += texture2D(texture, uv + 2.0 * step) * 0.12098536225957168;
    color += texture2D(texture, uv + 3.0 * step) * 0.06475879783294587;
    color += texture2D(texture, uv + 4.0 * step) * 0.02699548325659403;
    return color;
}

void main() {
    vec4 color = gaussianBlur(texture, vUv, 1.0, resolution, direction);
    gl_FragColor = color;
}`;class EC extends cn{constructor(){const e=new or(2,2),t=new Ur({uniforms:{resolution:{value:new st},direction:{value:new st},texture:{value:null}},vertexShader:Fy,fragmentShader:WW});super(e,t),this.name="PostEffectBlur"}start(e,t,i){this.material instanceof Ur&&(this.material.uniforms.texture.value=e,this.material.uniforms.direction.value.set(t,i))}resize(e,t){this.material instanceof Ur&&this.material.uniforms.resolution.value.set(e,t)}}let wn;const Ql=new rd,Ms=new dW,Gh=new xC({autoStart:!1}),Wh=new Ma,Oc=new Ma,d0=new Ma,Tr=new rd,Vh=new dC(-1,1,1,-1,1,2),ws=new mW,h0=new PW,p0=new _W,m0=new IW,g0=new kW,VW=new Ff,Fc=new st,Jl=n=>"touches"in n;let v0=!1;const _0=new GW,Xh=new EC,Yh=new EC,x0=new BW;class XW{constructor(){}async start(e){wn=new id({alpha:!0,antialias:!0,canvas:e}),wn.setPixelRatio(Math.min(window.devicePixelRatio,2)),wn.setClearColor(921102,1),await Promise.all([VW.loadAsync(xW)]).then(t=>{const i=t[0];i.wrapS=Lf,i.wrapT=Lf,i.format=nr,i.type=va,i.minFilter=Un,i.magFilter=Un,ws.start(i),h0.start(i),p0.start(i),m0.start(i),g0.start(i)}),Ql.add(ws),Ql.add(h0),Ql.add(p0),Ql.add(m0),Ql.add(g0),Ms.start(),_0.start(Wh.texture),Xh.start(Oc.texture,1,0),Yh.start(d0.texture,0,1),x0.start(Wh.texture,Oc.texture)}play(){Gh.start(),this.update()}pause(){Gh.stop()}update(){if(Gh.running===!1)return;const e=Gh.getDelta();Ms.update(e),ws.update(e,Ms),h0.update(e,ws),p0.update(e,ws),m0.update(e,ws),g0.update(e,ws),wn.setRenderTarget(Wh),wn.render(Ql,Ms),Tr.add(_0),wn.setRenderTarget(Oc),wn.render(Tr,Vh),Tr.remove(_0),Tr.add(Xh),wn.setRenderTarget(d0),wn.render(Tr,Vh),Tr.remove(Xh),Tr.add(Yh),wn.setRenderTarget(Oc),wn.render(Tr,Vh),Tr.remove(Yh),Tr.add(x0),wn.setRenderTarget(null),wn.render(Tr,Vh),Tr.remove(x0)}resize(e){Ms.resize(e),wn.setSize(e.x,e.y),Wh.setSize(e.x*wn.getPixelRatio(),e.y*wn.getPixelRatio()),Oc.setSize(e.x*wn.getPixelRatio(),e.y*wn.getPixelRatio()),d0.setSize(e.x*wn.getPixelRatio(),e.y*wn.getPixelRatio()),Yh.resize(e.x/4,e.y/4),Xh.resize(e.x/4,e.y/4)}setCoreAnchor(e){const t=(Fc.y/e.y*2-1)*70,i=Math.abs((Ms.position.z-t)*SC(Ms.fov)/2)*2,r=i*Ms.aspect;ws.anchor.set((Fc.x/e.x-.5)*r,-(Fc.y/e.y-.5)*i,t)}touchStart(e,t){Jl(e)||e.preventDefault(),Fc.set(Jl(e)?e.touches[0].clientX:e.clientX,Jl(e)?e.touches[0].clientY:e.clientY),v0=!0,this.setCoreAnchor(t)}touchMove(e,t){Jl(e)||e.preventDefault(),v0===!0&&(Fc.set(Jl(e)?e.touches[0].clientX:e.clientX,Jl(e)?e.touches[0].clientY:e.clientY),this.setCoreAnchor(t))}touchEnd(){v0=!1}}function MT(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Pe(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?MT(Object(t),!0).forEach(function(i){zn(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):MT(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function am(n){"@babel/helpers - typeof";return am=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},am(n)}function YW(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function wT(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function jW(n,e,t){return e&&wT(n.prototype,e),t&&wT(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function zn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ky(n,e){return qW(n)||ZW(n,e)||MC(n,e)||JW()}function ad(n){return $W(n)||KW(n)||MC(n)||QW()}function $W(n){if(Array.isArray(n))return G_(n)}function qW(n){if(Array.isArray(n))return n}function KW(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ZW(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,a=!1,o,l;try{for(t=t.call(n);!(r=(o=t.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(c){a=!0,l=c}finally{try{!r&&t.return!=null&&t.return()}finally{if(a)throw l}}return i}}function MC(n,e){if(n){if(typeof n=="string")return G_(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return G_(n,e)}}function G_(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function QW(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function JW(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var TT=function(){},zy={},wC={},TC=null,bC={mark:TT,measure:TT};try{typeof window<"u"&&(zy=window),typeof document<"u"&&(wC=document),typeof MutationObserver<"u"&&(TC=MutationObserver),typeof performance<"u"&&(bC=performance)}catch{}var eV=zy.navigator||{},bT=eV.userAgent,AT=bT===void 0?"":bT,to=zy,Jt=wC,CT=TC,jh=bC;to.document;var ss=!!Jt.documentElement&&!!Jt.head&&typeof Jt.addEventListener=="function"&&typeof Jt.createElement=="function",AC=~AT.indexOf("MSIE")||~AT.indexOf("Trident/"),$h,qh,Kh,Zh,Qh,es="___FONT_AWESOME___",W_=16,CC="fa",RC="svg-inline--fa",il="data-fa-i2svg",V_="data-fa-pseudo-element",tV="data-fa-pseudo-element-pending",By="data-prefix",Hy="data-icon",RT="fontawesome-i2svg",nV="async",iV=["HTML","HEAD","STYLE","SCRIPT"],PC=function(){try{return!0}catch{return!1}}(),Zt="classic",mn="sharp",Gy=[Zt,mn];function sd(n){return new Proxy(n,{get:function(t,i){return i in t?t[i]:t[Zt]}})}var kf=sd(($h={},zn($h,Zt,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),zn($h,mn,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),$h)),zf=sd((qh={},zn(qh,Zt,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),zn(qh,mn,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),qh)),Bf=sd((Kh={},zn(Kh,Zt,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),zn(Kh,mn,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Kh)),rV=sd((Zh={},zn(Zh,Zt,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),zn(Zh,mn,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Zh)),aV=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,LC="fa-layers-text",sV=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,oV=sd((Qh={},zn(Qh,Zt,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),zn(Qh,mn,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Qh)),DC=[1,2,3,4,5,6,7,8,9,10],lV=DC.concat([11,12,13,14,15,16,17,18,19,20]),uV=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],zo={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Hf=new Set;Object.keys(zf[Zt]).map(Hf.add.bind(Hf));Object.keys(zf[mn]).map(Hf.add.bind(Hf));var cV=[].concat(Gy,ad(Hf),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",zo.GROUP,zo.SWAP_OPACITY,zo.PRIMARY,zo.SECONDARY]).concat(DC.map(function(n){return"".concat(n,"x")})).concat(lV.map(function(n){return"w-".concat(n)})),of=to.FontAwesomeConfig||{};function fV(n){var e=Jt.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function dV(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(Jt&&typeof Jt.querySelector=="function"){var hV=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];hV.forEach(function(n){var e=ky(n,2),t=e[0],i=e[1],r=dV(fV(t));r!=null&&(of[i]=r)})}var IC={styleDefault:"solid",familyDefault:"classic",cssPrefix:CC,replacementClass:RC,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};of.familyPrefix&&(of.cssPrefix=of.familyPrefix);var Vu=Pe(Pe({},IC),of);Vu.autoReplaceSvg||(Vu.observeMutations=!1);var He={};Object.keys(IC).forEach(function(n){Object.defineProperty(He,n,{enumerable:!0,set:function(t){Vu[n]=t,lf.forEach(function(i){return i(He)})},get:function(){return Vu[n]}})});Object.defineProperty(He,"familyPrefix",{enumerable:!0,set:function(e){Vu.cssPrefix=e,lf.forEach(function(t){return t(He)})},get:function(){return Vu.cssPrefix}});to.FontAwesomeConfig=He;var lf=[];function pV(n){return lf.push(n),function(){lf.splice(lf.indexOf(n),1)}}var Ts=W_,_a={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function mV(n){if(!(!n||!ss)){var e=Jt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;for(var t=Jt.head.childNodes,i=null,r=t.length-1;r>-1;r--){var a=t[r],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=a)}return Jt.head.insertBefore(e,i),n}}var gV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Gf(){for(var n=12,e="";n-- >0;)e+=gV[Math.random()*62|0];return e}function nc(n){for(var e=[],t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function Wy(n){return n.classList?nc(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(e){return e})}function UC(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function vV(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(UC(n[t]),'" ')},"").trim()}function Gm(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(n[t].trim(),";")},"")}function Vy(n){return n.size!==_a.size||n.x!==_a.x||n.y!==_a.y||n.rotate!==_a.rotate||n.flipX||n.flipY}function _V(n){var e=n.transform,t=n.containerWidth,i=n.iconWidth,r={transform:"translate(".concat(t/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(a," ").concat(o," ").concat(l)},f={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:c,path:f}}function xV(n){var e=n.transform,t=n.width,i=t===void 0?W_:t,r=n.height,a=r===void 0?W_:r,o=n.startCentered,l=o===void 0?!1:o,c="";return l&&AC?c+="translate(".concat(e.x/Ts-i/2,"em, ").concat(e.y/Ts-a/2,"em) "):l?c+="translate(calc(-50% + ".concat(e.x/Ts,"em), calc(-50% + ").concat(e.y/Ts,"em)) "):c+="translate(".concat(e.x/Ts,"em, ").concat(e.y/Ts,"em) "),c+="scale(".concat(e.size/Ts*(e.flipX?-1:1),", ").concat(e.size/Ts*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var yV=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function NC(){var n=CC,e=RC,t=He.cssPrefix,i=He.replacementClass,r=yV;if(t!==n||i!==e){var a=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");r=r.replace(a,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(l,".".concat(i))}return r}var PT=!1;function y0(){He.autoAddCss&&!PT&&(mV(NC()),PT=!0)}var SV={mixout:function(){return{dom:{css:NC,insertCss:y0}}},hooks:function(){return{beforeDOMElementCreation:function(){y0()},beforeI2svg:function(){y0()}}}},ts=to||{};ts[es]||(ts[es]={});ts[es].styles||(ts[es].styles={});ts[es].hooks||(ts[es].hooks={});ts[es].shims||(ts[es].shims=[]);var Qr=ts[es],OC=[],EV=function n(){Jt.removeEventListener("DOMContentLoaded",n),sm=1,OC.map(function(e){return e()})},sm=!1;ss&&(sm=(Jt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Jt.readyState),sm||Jt.addEventListener("DOMContentLoaded",EV));function MV(n){ss&&(sm?setTimeout(n,0):OC.push(n))}function od(n){var e=n.tag,t=n.attributes,i=t===void 0?{}:t,r=n.children,a=r===void 0?[]:r;return typeof n=="string"?UC(n):"<".concat(e," ").concat(vV(i),">").concat(a.map(od).join(""),"</").concat(e,">")}function LT(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var wV=function(e,t){return function(i,r,a,o){return e.call(t,i,r,a,o)}},S0=function(e,t,i,r){var a=Object.keys(e),o=a.length,l=r!==void 0?wV(t,r):t,c,f,d;for(i===void 0?(c=1,d=e[a[0]]):(c=0,d=i);c<o;c++)f=a[c],d=l(d,e[f],f,e);return d};function TV(n){for(var e=[],t=0,i=n.length;t<i;){var r=n.charCodeAt(t++);if(r>=55296&&r<=56319&&t<i){var a=n.charCodeAt(t++);(a&64512)==56320?e.push(((r&1023)<<10)+(a&1023)+65536):(e.push(r),t--)}else e.push(r)}return e}function X_(n){var e=TV(n);return e.length===1?e[0].toString(16):null}function bV(n,e){var t=n.length,i=n.charCodeAt(e),r;return i>=55296&&i<=56319&&t>e+1&&(r=n.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function DT(n){return Object.keys(n).reduce(function(e,t){var i=n[t],r=!!i.icon;return r?e[i.iconName]=i.icon:e[t]=i,e},{})}function Y_(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.skipHooks,r=i===void 0?!1:i,a=DT(e);typeof Qr.hooks.addPack=="function"&&!r?Qr.hooks.addPack(n,DT(e)):Qr.styles[n]=Pe(Pe({},Qr.styles[n]||{}),a),n==="fas"&&Y_("fa",e)}var Jh,ep,tp,gu=Qr.styles,AV=Qr.shims,CV=(Jh={},zn(Jh,Zt,Object.values(Bf[Zt])),zn(Jh,mn,Object.values(Bf[mn])),Jh),Xy=null,FC={},kC={},zC={},BC={},HC={},RV=(ep={},zn(ep,Zt,Object.keys(kf[Zt])),zn(ep,mn,Object.keys(kf[mn])),ep);function PV(n){return~cV.indexOf(n)}function LV(n,e){var t=e.split("-"),i=t[0],r=t.slice(1).join("-");return i===n&&r!==""&&!PV(r)?r:null}var GC=function(){var e=function(a){return S0(gu,function(o,l,c){return o[c]=S0(l,a,{}),o},{})};FC=e(function(r,a,o){if(a[3]&&(r[a[3]]=o),a[2]){var l=a[2].filter(function(c){return typeof c=="number"});l.forEach(function(c){r[c.toString(16)]=o})}return r}),kC=e(function(r,a,o){if(r[o]=o,a[2]){var l=a[2].filter(function(c){return typeof c=="string"});l.forEach(function(c){r[c]=o})}return r}),HC=e(function(r,a,o){var l=a[2];return r[o]=o,l.forEach(function(c){r[c]=o}),r});var t="far"in gu||He.autoFetchSvg,i=S0(AV,function(r,a){var o=a[0],l=a[1],c=a[2];return l==="far"&&!t&&(l="fas"),typeof o=="string"&&(r.names[o]={prefix:l,iconName:c}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:l,iconName:c}),r},{names:{},unicodes:{}});zC=i.names,BC=i.unicodes,Xy=Wm(He.styleDefault,{family:He.familyDefault})};pV(function(n){Xy=Wm(n.styleDefault,{family:He.familyDefault})});GC();function Yy(n,e){return(FC[n]||{})[e]}function DV(n,e){return(kC[n]||{})[e]}function Bo(n,e){return(HC[n]||{})[e]}function WC(n){return zC[n]||{prefix:null,iconName:null}}function IV(n){var e=BC[n],t=Yy("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function no(){return Xy}var jy=function(){return{prefix:null,iconName:null,rest:[]}};function Wm(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,i=t===void 0?Zt:t,r=kf[i][n],a=zf[i][n]||zf[i][r],o=n in Qr.styles?n:null;return a||o||null}var IT=(tp={},zn(tp,Zt,Object.keys(Bf[Zt])),zn(tp,mn,Object.keys(Bf[mn])),tp);function Vm(n){var e,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.skipLookups,r=i===void 0?!1:i,a=(e={},zn(e,Zt,"".concat(He.cssPrefix,"-").concat(Zt)),zn(e,mn,"".concat(He.cssPrefix,"-").concat(mn)),e),o=null,l=Zt;(n.includes(a[Zt])||n.some(function(f){return IT[Zt].includes(f)}))&&(l=Zt),(n.includes(a[mn])||n.some(function(f){return IT[mn].includes(f)}))&&(l=mn);var c=n.reduce(function(f,d){var p=LV(He.cssPrefix,d);if(gu[d]?(d=CV[l].includes(d)?rV[l][d]:d,o=d,f.prefix=d):RV[l].indexOf(d)>-1?(o=d,f.prefix=Wm(d,{family:l})):p?f.iconName=p:d!==He.replacementClass&&d!==a[Zt]&&d!==a[mn]&&f.rest.push(d),!r&&f.prefix&&f.iconName){var m=o==="fa"?WC(f.iconName):{},v=Bo(f.prefix,f.iconName);m.prefix&&(o=null),f.iconName=m.iconName||v||f.iconName,f.prefix=m.prefix||f.prefix,f.prefix==="far"&&!gu.far&&gu.fas&&!He.autoFetchSvg&&(f.prefix="fas")}return f},jy());return(n.includes("fa-brands")||n.includes("fab"))&&(c.prefix="fab"),(n.includes("fa-duotone")||n.includes("fad"))&&(c.prefix="fad"),!c.prefix&&l===mn&&(gu.fass||He.autoFetchSvg)&&(c.prefix="fass",c.iconName=Bo(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=no()||"fas"),c}var UV=function(){function n(){YW(this,n),this.definitions={}}return jW(n,[{key:"add",value:function(){for(var t=this,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){t.definitions[l]=Pe(Pe({},t.definitions[l]||{}),o[l]),Y_(l,o[l]);var c=Bf[Zt][l];c&&Y_(c,o[l]),GC()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(a){var o=r[a],l=o.prefix,c=o.iconName,f=o.icon,d=f[2];t[l]||(t[l]={}),d.length>0&&d.forEach(function(p){typeof p=="string"&&(t[l][p]=f)}),t[l][c]=f}),t}}]),n}(),UT=[],vu={},Ru={},NV=Object.keys(Ru);function OV(n,e){var t=e.mixoutsTo;return UT=n,vu={},Object.keys(Ru).forEach(function(i){NV.indexOf(i)===-1&&delete Ru[i]}),UT.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(t[o]=r[o]),am(r[o])==="object"&&Object.keys(r[o]).forEach(function(l){t[o]||(t[o]={}),t[o][l]=r[o][l]})}),i.hooks){var a=i.hooks();Object.keys(a).forEach(function(o){vu[o]||(vu[o]=[]),vu[o].push(a[o])})}i.provides&&i.provides(Ru)}),t}function j_(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),r=2;r<t;r++)i[r-2]=arguments[r];var a=vu[n]||[];return a.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function rl(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var r=vu[n]||[];r.forEach(function(a){a.apply(null,t)})}function ns(){var n=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ru[n]?Ru[n].apply(null,e):void 0}function $_(n){n.prefix==="fa"&&(n.prefix="fas");var e=n.iconName,t=n.prefix||no();if(e)return e=Bo(t,e)||e,LT(VC.definitions,t,e)||LT(Qr.styles,t,e)}var VC=new UV,FV=function(){He.autoReplaceSvg=!1,He.observeMutations=!1,rl("noAuto")},kV={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ss?(rl("beforeI2svg",e),ns("pseudoElements2svg",e),ns("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;He.autoReplaceSvg===!1&&(He.autoReplaceSvg=!0),He.observeMutations=!0,MV(function(){BV({autoReplaceSvgRoot:t}),rl("watch",e)})}},zV={icon:function(e){if(e===null)return null;if(am(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Bo(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Wm(e[0]);return{prefix:i,iconName:Bo(i,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(He.cssPrefix,"-"))>-1||e.match(aV))){var r=Vm(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||no(),iconName:Bo(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var a=no();return{prefix:a,iconName:Bo(a,e)||e}}}},hr={noAuto:FV,config:He,dom:kV,parse:zV,library:VC,findIconDefinition:$_,toHtml:od},BV=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,i=t===void 0?Jt:t;(Object.keys(Qr.styles).length>0||He.autoFetchSvg)&&ss&&He.autoReplaceSvg&&hr.dom.i2svg({node:i})};function Xm(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(i){return od(i)})}}),Object.defineProperty(n,"node",{get:function(){if(ss){var i=Jt.createElement("div");return i.innerHTML=n.html,i.children}}}),n}function HV(n){var e=n.children,t=n.main,i=n.mask,r=n.attributes,a=n.styles,o=n.transform;if(Vy(o)&&t.found&&!i.found){var l=t.width,c=t.height,f={x:l/c/2,y:.5};r.style=Gm(Pe(Pe({},a),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function GV(n){var e=n.prefix,t=n.iconName,i=n.children,r=n.attributes,a=n.symbol,o=a===!0?"".concat(e,"-").concat(He.cssPrefix,"-").concat(t):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Pe(Pe({},r),{},{id:o}),children:i}]}]}function $y(n){var e=n.icons,t=e.main,i=e.mask,r=n.prefix,a=n.iconName,o=n.transform,l=n.symbol,c=n.title,f=n.maskId,d=n.titleId,p=n.extra,m=n.watchable,v=m===void 0?!1:m,M=i.found?i:t,x=M.width,_=M.height,g=r==="fak",S=[He.replacementClass,a?"".concat(He.cssPrefix,"-").concat(a):""].filter(function(T){return p.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(p.classes).join(" "),y={children:[],attributes:Pe(Pe({},p.attributes),{},{"data-prefix":r,"data-icon":a,class:S,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(_)})},w=g&&!~p.classes.indexOf("fa-fw")?{width:"".concat(x/_*16*.0625,"em")}:{};v&&(y.attributes[il]=""),c&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(d||Gf())},children:[c]}),delete y.attributes.title);var A=Pe(Pe({},y),{},{prefix:r,iconName:a,main:t,mask:i,maskId:f,transform:o,symbol:l,styles:Pe(Pe({},w),p.styles)}),R=i.found&&t.found?ns("generateAbstractMask",A)||{children:[],attributes:{}}:ns("generateAbstractIcon",A)||{children:[],attributes:{}},P=R.children,N=R.attributes;return A.children=P,A.attributes=N,l?GV(A):HV(A)}function NT(n){var e=n.content,t=n.width,i=n.height,r=n.transform,a=n.title,o=n.extra,l=n.watchable,c=l===void 0?!1:l,f=Pe(Pe(Pe({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});c&&(f[il]="");var d=Pe({},o.styles);Vy(r)&&(d.transform=xV({transform:r,startCentered:!0,width:t,height:i}),d["-webkit-transform"]=d.transform);var p=Gm(d);p.length>0&&(f.style=p);var m=[];return m.push({tag:"span",attributes:f,children:[e]}),a&&m.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),m}function WV(n){var e=n.content,t=n.title,i=n.extra,r=Pe(Pe(Pe({},i.attributes),t?{title:t}:{}),{},{class:i.classes.join(" ")}),a=Gm(i.styles);a.length>0&&(r.style=a);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),t&&o.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),o}var E0=Qr.styles;function q_(n){var e=n[0],t=n[1],i=n.slice(4),r=ky(i,1),a=r[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(He.cssPrefix,"-").concat(zo.GROUP)},children:[{tag:"path",attributes:{class:"".concat(He.cssPrefix,"-").concat(zo.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(He.cssPrefix,"-").concat(zo.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:t,icon:o}}var VV={found:!1,width:512,height:512};function XV(n,e){!PC&&!He.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function K_(n,e){var t=e;return e==="fa"&&He.styleDefault!==null&&(e=no()),new Promise(function(i,r){if(ns("missingIconAbstract"),t==="fa"){var a=WC(n)||{};n=a.iconName||n,e=a.prefix||e}if(n&&e&&E0[e]&&E0[e][n]){var o=E0[e][n];return i(q_(o))}XV(n,e),i(Pe(Pe({},VV),{},{icon:He.showMissingIcons&&n?ns("missingIconAbstract")||{}:{}}))})}var OT=function(){},Z_=He.measurePerformance&&jh&&jh.mark&&jh.measure?jh:{mark:OT,measure:OT},Xc='FA "6.5.1"',YV=function(e){return Z_.mark("".concat(Xc," ").concat(e," begins")),function(){return XC(e)}},XC=function(e){Z_.mark("".concat(Xc," ").concat(e," ends")),Z_.measure("".concat(Xc," ").concat(e),"".concat(Xc," ").concat(e," begins"),"".concat(Xc," ").concat(e," ends"))},qy={begin:YV,end:XC},_p=function(){};function FT(n){var e=n.getAttribute?n.getAttribute(il):null;return typeof e=="string"}function jV(n){var e=n.getAttribute?n.getAttribute(By):null,t=n.getAttribute?n.getAttribute(Hy):null;return e&&t}function $V(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(He.replacementClass)}function qV(){if(He.autoReplaceSvg===!0)return xp.replace;var n=xp[He.autoReplaceSvg];return n||xp.replace}function KV(n){return Jt.createElementNS("http://www.w3.org/2000/svg",n)}function ZV(n){return Jt.createElement(n)}function YC(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,i=t===void 0?n.tag==="svg"?KV:ZV:t;if(typeof n=="string")return Jt.createTextNode(n);var r=i(n.tag);Object.keys(n.attributes||[]).forEach(function(o){r.setAttribute(o,n.attributes[o])});var a=n.children||[];return a.forEach(function(o){r.appendChild(YC(o,{ceFn:i}))}),r}function QV(n){var e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var xp={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(r){t.parentNode.insertBefore(YC(r),t)}),t.getAttribute(il)===null&&He.keepOriginalSource){var i=Jt.createComment(QV(t));t.parentNode.replaceChild(i,t)}else t.remove()},nest:function(e){var t=e[0],i=e[1];if(~Wy(t).indexOf(He.replacementClass))return xp.replace(e);var r=new RegExp("".concat(He.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var a=i[0].attributes.class.split(" ").reduce(function(l,c){return c===He.replacementClass||c.match(r)?l.toSvg.push(c):l.toNode.push(c),l},{toNode:[],toSvg:[]});i[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",a.toNode.join(" "))}var o=i.map(function(l){return od(l)}).join(`
`);t.setAttribute(il,""),t.innerHTML=o}};function kT(n){n()}function jC(n,e){var t=typeof e=="function"?e:_p;if(n.length===0)t();else{var i=kT;He.mutateApproach===nV&&(i=to.requestAnimationFrame||kT),i(function(){var r=qV(),a=qy.begin("mutate");n.map(r),a(),t()})}}var Ky=!1;function $C(){Ky=!0}function Q_(){Ky=!1}var om=null;function zT(n){if(CT&&He.observeMutations){var e=n.treeCallback,t=e===void 0?_p:e,i=n.nodeCallback,r=i===void 0?_p:i,a=n.pseudoElementsCallback,o=a===void 0?_p:a,l=n.observeMutationsRoot,c=l===void 0?Jt:l;om=new CT(function(f){if(!Ky){var d=no();nc(f).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!FT(p.addedNodes[0])&&(He.searchPseudoElements&&o(p.target),t(p.target)),p.type==="attributes"&&p.target.parentNode&&He.searchPseudoElements&&o(p.target.parentNode),p.type==="attributes"&&FT(p.target)&&~uV.indexOf(p.attributeName))if(p.attributeName==="class"&&jV(p.target)){var m=Vm(Wy(p.target)),v=m.prefix,M=m.iconName;p.target.setAttribute(By,v||d),M&&p.target.setAttribute(Hy,M)}else $V(p.target)&&r(p.target)})}}),ss&&om.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function JV(){om&&om.disconnect()}function e8(n){var e=n.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(i,r){var a=r.split(":"),o=a[0],l=a.slice(1);return o&&l.length>0&&(i[o]=l.join(":").trim()),i},{})),t}function t8(n){var e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"",r=Vm(Wy(n));return r.prefix||(r.prefix=no()),e&&t&&(r.prefix=e,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=DV(r.prefix,n.innerText)||Yy(r.prefix,X_(n.innerText))),!r.iconName&&He.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=n.firstChild.data)),r}function n8(n){var e=nc(n.attributes).reduce(function(r,a){return r.name!=="class"&&r.name!=="style"&&(r[a.name]=a.value),r},{}),t=n.getAttribute("title"),i=n.getAttribute("data-fa-title-id");return He.autoA11y&&(t?e["aria-labelledby"]="".concat(He.replacementClass,"-title-").concat(i||Gf()):(e["aria-hidden"]="true",e.focusable="false")),e}function i8(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_a,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function BT(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=t8(n),i=t.iconName,r=t.prefix,a=t.rest,o=n8(n),l=j_("parseNodeAttributes",{},n),c=e.styleParser?e8(n):[];return Pe({iconName:i,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:r,transform:_a,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:c,attributes:o}},l)}var r8=Qr.styles;function qC(n){var e=He.autoReplaceSvg==="nest"?BT(n,{styleParser:!1}):BT(n);return~e.extra.classes.indexOf(LC)?ns("generateLayersText",n,e):ns("generateSvgReplacementMutation",n,e)}var io=new Set;Gy.map(function(n){io.add("fa-".concat(n))});Object.keys(kf[Zt]).map(io.add.bind(io));Object.keys(kf[mn]).map(io.add.bind(io));io=ad(io);function HT(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ss)return Promise.resolve();var t=Jt.documentElement.classList,i=function(p){return t.add("".concat(RT,"-").concat(p))},r=function(p){return t.remove("".concat(RT,"-").concat(p))},a=He.autoFetchSvg?io:Gy.map(function(d){return"fa-".concat(d)}).concat(Object.keys(r8));a.includes("fa")||a.push("fa");var o=[".".concat(LC,":not([").concat(il,"])")].concat(a.map(function(d){return".".concat(d,":not([").concat(il,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=nc(n.querySelectorAll(o))}catch{}if(l.length>0)i("pending"),r("complete");else return Promise.resolve();var c=qy.begin("onTree"),f=l.reduce(function(d,p){try{var m=qC(p);m&&d.push(m)}catch(v){PC||v.name==="MissingIcon"&&console.error(v)}return d},[]);return new Promise(function(d,p){Promise.all(f).then(function(m){jC(m,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),c(),d()})}).catch(function(m){c(),p(m)})})}function a8(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qC(n).then(function(t){t&&jC([t],e)})}function s8(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:$_(e||{}),r=t.mask;return r&&(r=(r||{}).icon?r:$_(r||{})),n(i,Pe(Pe({},t),{},{mask:r}))}}var o8=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.transform,r=i===void 0?_a:i,a=t.symbol,o=a===void 0?!1:a,l=t.mask,c=l===void 0?null:l,f=t.maskId,d=f===void 0?null:f,p=t.title,m=p===void 0?null:p,v=t.titleId,M=v===void 0?null:v,x=t.classes,_=x===void 0?[]:x,g=t.attributes,S=g===void 0?{}:g,y=t.styles,w=y===void 0?{}:y;if(e){var A=e.prefix,R=e.iconName,P=e.icon;return Xm(Pe({type:"icon"},e),function(){return rl("beforeDOMElementCreation",{iconDefinition:e,params:t}),He.autoA11y&&(m?S["aria-labelledby"]="".concat(He.replacementClass,"-title-").concat(M||Gf()):(S["aria-hidden"]="true",S.focusable="false")),$y({icons:{main:q_(P),mask:c?q_(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:R,transform:Pe(Pe({},_a),r),symbol:o,title:m,maskId:d,titleId:M,extra:{attributes:S,styles:w,classes:_}})})}},l8={mixout:function(){return{icon:s8(o8)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=HT,t.nodeCallback=a8,t}}},provides:function(e){e.i2svg=function(t){var i=t.node,r=i===void 0?Jt:i,a=t.callback,o=a===void 0?function(){}:a;return HT(r,o)},e.generateSvgReplacementMutation=function(t,i){var r=i.iconName,a=i.title,o=i.titleId,l=i.prefix,c=i.transform,f=i.symbol,d=i.mask,p=i.maskId,m=i.extra;return new Promise(function(v,M){Promise.all([K_(r,l),d.iconName?K_(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var _=ky(x,2),g=_[0],S=_[1];v([t,$y({icons:{main:g,mask:S},prefix:l,iconName:r,transform:c,symbol:f,maskId:p,title:a,titleId:o,extra:m,watchable:!0})])}).catch(M)})},e.generateAbstractIcon=function(t){var i=t.children,r=t.attributes,a=t.main,o=t.transform,l=t.styles,c=Gm(l);c.length>0&&(r.style=c);var f;return Vy(o)&&(f=ns("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),i.push(f||a.icon),{children:i,attributes:r}}}},u8={mixout:function(){return{layer:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,a=r===void 0?[]:r;return Xm({type:"layer"},function(){rl("beforeDOMElementCreation",{assembler:t,params:i});var o=[];return t(function(l){Array.isArray(l)?l.map(function(c){o=o.concat(c.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(He.cssPrefix,"-layers")].concat(ad(a)).join(" ")},children:o}]})}}}},c8={mixout:function(){return{counter:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,a=r===void 0?null:r,o=i.classes,l=o===void 0?[]:o,c=i.attributes,f=c===void 0?{}:c,d=i.styles,p=d===void 0?{}:d;return Xm({type:"counter",content:t},function(){return rl("beforeDOMElementCreation",{content:t,params:i}),WV({content:t.toString(),title:a,extra:{attributes:f,styles:p,classes:["".concat(He.cssPrefix,"-layers-counter")].concat(ad(l))}})})}}}},f8={mixout:function(){return{text:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,a=r===void 0?_a:r,o=i.title,l=o===void 0?null:o,c=i.classes,f=c===void 0?[]:c,d=i.attributes,p=d===void 0?{}:d,m=i.styles,v=m===void 0?{}:m;return Xm({type:"text",content:t},function(){return rl("beforeDOMElementCreation",{content:t,params:i}),NT({content:t,transform:Pe(Pe({},_a),a),title:l,extra:{attributes:p,styles:v,classes:["".concat(He.cssPrefix,"-layers-text")].concat(ad(f))}})})}}},provides:function(e){e.generateLayersText=function(t,i){var r=i.title,a=i.transform,o=i.extra,l=null,c=null;if(AC){var f=parseInt(getComputedStyle(t).fontSize,10),d=t.getBoundingClientRect();l=d.width/f,c=d.height/f}return He.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,NT({content:t.innerHTML,width:l,height:c,transform:a,title:r,extra:o,watchable:!0})])}}},d8=new RegExp('"',"ug"),GT=[1105920,1112319];function h8(n){var e=n.replace(d8,""),t=bV(e,0),i=t>=GT[0]&&t<=GT[1],r=e.length===2?e[0]===e[1]:!1;return{value:X_(r?e[0]:e),isSecondary:i||r}}function WT(n,e){var t="".concat(tV).concat(e.replace(":","-"));return new Promise(function(i,r){if(n.getAttribute(t)!==null)return i();var a=nc(n.children),o=a.filter(function(P){return P.getAttribute(V_)===e})[0],l=to.getComputedStyle(n,e),c=l.getPropertyValue("font-family").match(sV),f=l.getPropertyValue("font-weight"),d=l.getPropertyValue("content");if(o&&!c)return n.removeChild(o),i();if(c&&d!=="none"&&d!==""){var p=l.getPropertyValue("content"),m=~["Sharp"].indexOf(c[2])?mn:Zt,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?zf[m][c[2].toLowerCase()]:oV[m][f],M=h8(p),x=M.value,_=M.isSecondary,g=c[0].startsWith("FontAwesome"),S=Yy(v,x),y=S;if(g){var w=IV(x);w.iconName&&w.prefix&&(S=w.iconName,v=w.prefix)}if(S&&!_&&(!o||o.getAttribute(By)!==v||o.getAttribute(Hy)!==y)){n.setAttribute(t,y),o&&n.removeChild(o);var A=i8(),R=A.extra;R.attributes[V_]=e,K_(S,v).then(function(P){var N=$y(Pe(Pe({},A),{},{icons:{main:P,mask:jy()},prefix:v,iconName:y,extra:R,watchable:!0})),T=Jt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(T,n.firstChild):n.appendChild(T),T.outerHTML=N.map(function(C){return od(C)}).join(`
`),n.removeAttribute(t),i()}).catch(r)}else i()}else i()})}function p8(n){return Promise.all([WT(n,"::before"),WT(n,"::after")])}function m8(n){return n.parentNode!==document.head&&!~iV.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(V_)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function VT(n){if(ss)return new Promise(function(e,t){var i=nc(n.querySelectorAll("*")).filter(m8).map(p8),r=qy.begin("searchPseudoElements");$C(),Promise.all(i).then(function(){r(),Q_(),e()}).catch(function(){r(),Q_(),t()})})}var g8={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=VT,t}}},provides:function(e){e.pseudoElements2svg=function(t){var i=t.node,r=i===void 0?Jt:i;He.searchPseudoElements&&VT(r)}}},XT=!1,v8={mixout:function(){return{dom:{unwatch:function(){$C(),XT=!0}}}},hooks:function(){return{bootstrap:function(){zT(j_("mutationObserverCallbacks",{}))},noAuto:function(){JV()},watch:function(t){var i=t.observeMutationsRoot;XT?Q_():zT(j_("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},YT=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var a=r.toLowerCase().split("-"),o=a[0],l=a.slice(1).join("-");if(o&&l==="h")return i.flipX=!0,i;if(o&&l==="v")return i.flipY=!0,i;if(l=parseFloat(l),isNaN(l))return i;switch(o){case"grow":i.size=i.size+l;break;case"shrink":i.size=i.size-l;break;case"left":i.x=i.x-l;break;case"right":i.x=i.x+l;break;case"up":i.y=i.y-l;break;case"down":i.y=i.y+l;break;case"rotate":i.rotate=i.rotate+l;break}return i},t)},_8={mixout:function(){return{parse:{transform:function(t){return YT(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-transform");return r&&(t.transform=YT(r)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var i=t.main,r=t.transform,a=t.containerWidth,o=t.iconWidth,l={transform:"translate(".concat(a/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),d="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(c," ").concat(f," ").concat(d)},m={transform:"translate(".concat(o/2*-1," -256)")},v={outer:l,inner:p,path:m};return{tag:"g",attributes:Pe({},v.outer),children:[{tag:"g",attributes:Pe({},v.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:Pe(Pe({},i.icon.attributes),v.path)}]}]}}}},M0={x:0,y:0,width:"100%",height:"100%"};function jT(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function x8(n){return n.tag==="g"?n.children:[n]}var y8={hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-mask"),a=r?Vm(r.split(" ").map(function(o){return o.trim()})):jy();return a.prefix||(a.prefix=no()),t.mask=a,t.maskId=i.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var i=t.children,r=t.attributes,a=t.main,o=t.mask,l=t.maskId,c=t.transform,f=a.width,d=a.icon,p=o.width,m=o.icon,v=_V({transform:c,containerWidth:p,iconWidth:f}),M={tag:"rect",attributes:Pe(Pe({},M0),{},{fill:"white"})},x=d.children?{children:d.children.map(jT)}:{},_={tag:"g",attributes:Pe({},v.inner),children:[jT(Pe({tag:d.tag,attributes:Pe(Pe({},d.attributes),v.path)},x))]},g={tag:"g",attributes:Pe({},v.outer),children:[_]},S="mask-".concat(l||Gf()),y="clip-".concat(l||Gf()),w={tag:"mask",attributes:Pe(Pe({},M0),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,g]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:x8(m)},w]};return i.push(A,{tag:"rect",attributes:Pe({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(S,")")},M0)}),{children:i,attributes:r}}}},S8={provides:function(e){var t=!1;to.matchMedia&&(t=to.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:Pe(Pe({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=Pe(Pe({},a),{},{attributeName:"opacity"}),l={tag:"circle",attributes:Pe(Pe({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||l.children.push({tag:"animate",attributes:Pe(Pe({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Pe(Pe({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(l),i.push({tag:"path",attributes:Pe(Pe({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:Pe(Pe({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||i.push({tag:"path",attributes:Pe(Pe({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Pe(Pe({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},E8={hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-symbol"),a=r===null?!1:r===""?!0:r;return t.symbol=a,t}}}},M8=[SV,l8,u8,c8,f8,g8,v8,_8,y8,S8,E8];OV(M8,{mixoutsTo:hr});hr.noAuto;hr.config;hr.library;hr.dom;var J_=hr.parse;hr.findIconDefinition;hr.toHtml;var w8=hr.icon;hr.layer;hr.text;hr.counter;var KC={exports:{}},T8="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",b8=T8,A8=b8;function ZC(){}function QC(){}QC.resetWarningCache=ZC;var C8=function(){function n(i,r,a,o,l,c){if(c!==A8){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}n.isRequired=n;function e(){return n}var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:QC,resetWarningCache:ZC};return t.PropTypes=t,t};KC.exports=C8();var R8=KC.exports;const Et=bx(R8);function $T(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Us(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?$T(Object(t),!0).forEach(function(i){_u(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):$T(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function lm(n){"@babel/helpers - typeof";return lm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lm(n)}function _u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function P8(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function L8(n,e){if(n==null)return{};var t=P8(n,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function ex(n){return D8(n)||I8(n)||U8(n)||N8()}function D8(n){if(Array.isArray(n))return tx(n)}function I8(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function U8(n,e){if(n){if(typeof n=="string")return tx(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return tx(n,e)}}function tx(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function N8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O8(n){var e,t=n.beat,i=n.fade,r=n.beatFade,a=n.bounce,o=n.shake,l=n.flash,c=n.spin,f=n.spinPulse,d=n.spinReverse,p=n.pulse,m=n.fixedWidth,v=n.inverse,M=n.border,x=n.listItem,_=n.flip,g=n.size,S=n.rotation,y=n.pull,w=(e={"fa-beat":t,"fa-fade":i,"fa-beat-fade":r,"fa-bounce":a,"fa-shake":o,"fa-flash":l,"fa-spin":c,"fa-spin-reverse":d,"fa-spin-pulse":f,"fa-pulse":p,"fa-fw":m,"fa-inverse":v,"fa-border":M,"fa-li":x,"fa-flip":_===!0,"fa-flip-horizontal":_==="horizontal"||_==="both","fa-flip-vertical":_==="vertical"||_==="both"},_u(e,"fa-".concat(g),typeof g<"u"&&g!==null),_u(e,"fa-rotate-".concat(S),typeof S<"u"&&S!==null&&S!==0),_u(e,"fa-pull-".concat(y),typeof y<"u"&&y!==null),_u(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(w).map(function(A){return w[A]?A:null}).filter(function(A){return A})}function F8(n){return n=n-0,n===n}function JC(n){return F8(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var k8=["style"];function z8(n){return n.charAt(0).toUpperCase()+n.slice(1)}function B8(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var i=t.indexOf(":"),r=JC(t.slice(0,i)),a=t.slice(i+1).trim();return r.startsWith("webkit")?e[z8(r)]=a:e[r]=a,e},{})}function eR(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(c){return eR(n,c)}),r=Object.keys(e.attributes||{}).reduce(function(c,f){var d=e.attributes[f];switch(f){case"class":c.attrs.className=d,delete e.attributes.class;break;case"style":c.attrs.style=B8(d);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?c.attrs[f.toLowerCase()]=d:c.attrs[JC(f)]=d}return c},{attrs:{}}),a=t.style,o=a===void 0?{}:a,l=L8(t,k8);return r.attrs.style=Us(Us({},r.attrs.style),o),n.apply(void 0,[e.tag,Us(Us({},r.attrs),l)].concat(ex(i)))}var tR=!1;try{tR=!0}catch{}function H8(){if(!tR&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function qT(n){if(n&&lm(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(J_.icon)return J_.icon(n);if(n===null)return null;if(n&&lm(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function w0(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?_u({},n,e):{}}var os=Lx.forwardRef(function(n,e){var t=n.icon,i=n.mask,r=n.symbol,a=n.className,o=n.title,l=n.titleId,c=n.maskId,f=qT(t),d=w0("classes",[].concat(ex(O8(n)),ex(a.split(" ")))),p=w0("transform",typeof n.transform=="string"?J_.transform(n.transform):n.transform),m=w0("mask",qT(i)),v=w8(f,Us(Us(Us(Us({},d),p),m),{},{symbol:r,title:o,titleId:l,maskId:c}));if(!v)return H8("Could not find icon",f),null;var M=v.abstract,x={ref:e};return Object.keys(n).forEach(function(_){os.defaultProps.hasOwnProperty(_)||(x[_]=n[_])}),G8(M[0],x)});os.displayName="FontAwesomeIcon";os.propTypes={beat:Et.bool,border:Et.bool,beatFade:Et.bool,bounce:Et.bool,className:Et.string,fade:Et.bool,flash:Et.bool,mask:Et.oneOfType([Et.object,Et.array,Et.string]),maskId:Et.string,fixedWidth:Et.bool,inverse:Et.bool,flip:Et.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Et.oneOfType([Et.object,Et.array,Et.string]),listItem:Et.bool,pull:Et.oneOf(["right","left"]),pulse:Et.bool,rotation:Et.oneOf([0,90,180,270]),shake:Et.bool,size:Et.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Et.bool,spinPulse:Et.bool,spinReverse:Et.bool,symbol:Et.oneOfType([Et.bool,Et.string]),title:Et.string,titleId:Et.string,transform:Et.oneOfType([Et.string,Et.object]),swapOpacity:Et.bool};os.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var G8=eR.bind(null,Lx.createElement),ld={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};const W8=(n,e)=>{let t;return i=>{clearTimeout(t),t=setTimeout(()=>{n&&n(i)},e)}};function V8(){return Te.useEffect(()=>{const n=new XW,e=new st,t=document.getElementById("canvas"),i=()=>{e.set(document.body.clientWidth,window.innerHeight),t instanceof HTMLCanvasElement&&(t.width=e.x,t.height=e.y,n.resize(e))},r=()=>{const l=d=>{n.touchStart(d,e)},c=d=>{n.touchMove(d,e)},f=()=>{n.touchEnd()};t==null||t.addEventListener("mousedown",l,{passive:!1}),window.addEventListener("mousemove",c,{passive:!1}),window.addEventListener("mouseup",f),window.addEventListener("resize",W8(i,100))},a=()=>{n.update(),requestAnimationFrame(a)};(async()=>{t instanceof HTMLCanvasElement&&await n.start(t)})(),r(),i(),n.play(),a()},[]),Be.jsxs(Be.Fragment,{children:[Be.jsx(ma,{className:"absolute left-3 top-2 z-10 text-white",to:"/",children:Be.jsx(os,{icon:ld,size:"2x"})}),Be.jsx("canvas",{id:"canvas"}),";"]})}var X8=`varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Y8=`precision highp float;

uniform float time;
uniform float progress;
uniform sampler2D uTexture;
uniform vec2 resolution;

varying vec2 vUv;
varying vec3 vPosition;
float PI = 3.141592;

void main() {
    vec2 normalizedUV = gl_FragCoord.xy / resolution;
    float aspect = resolution.x / resolution.y;
    vec2 scale;

    if(aspect < 1.0) {
        
        scale = vec2(1.0, 1.0 / aspect);
    } else {
        
        scale = vec2(aspect, 1.0);
    }

    
    normalizedUV = (normalizedUV - vec2(0.5)) * scale * 1.5 + vec2(0.5);
    normalizedUV.x -= progress;

    vec4 color = texture2D(uTexture, normalizedUV);
    gl_FragColor = vec4(normalizedUV, 0.0, 1.0);
    gl_FragColor = color;
}`;const j8="/deploy-portfolio2024/assets/UV_checker_Map_byValle-1VGPmyRo.jpg",$8=.5*(Math.sqrt(3)-1),kc=(3-Math.sqrt(3))/6,KT=n=>Math.floor(n)|0,ZT=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function q8(n=Math.random){const e=K8(n),t=new Float64Array(e).map(r=>ZT[r%12*2]),i=new Float64Array(e).map(r=>ZT[r%12*2+1]);return function(a,o){let l=0,c=0,f=0;const d=(a+o)*$8,p=KT(a+d),m=KT(o+d),v=(p+m)*kc,M=p-v,x=m-v,_=a-M,g=o-x;let S,y;_>g?(S=1,y=0):(S=0,y=1);const w=_-S+kc,A=g-y+kc,R=_-1+2*kc,P=g-1+2*kc,N=p&255,T=m&255;let C=.5-_*_-g*g;if(C>=0){const ae=N+e[T],k=t[ae],Y=i[ae];C*=C,l=C*C*(k*_+Y*g)}let G=.5-w*w-A*A;if(G>=0){const ae=N+S+e[T+y],k=t[ae],Y=i[ae];G*=G,c=G*G*(k*w+Y*A)}let X=.5-R*R-P*P;if(X>=0){const ae=N+1+e[T+1],k=t[ae],Y=i[ae];X*=X,f=X*X*(k*R+Y*P)}return 70*(l+c+f)}}function K8(n){const t=new Uint8Array(512);for(let i=0;i<512/2;i++)t[i]=i;for(let i=0;i<512/2-1;i++){const r=i+~~(n()*(256-i)),a=t[i];t[i]=t[r],t[r]=a}for(let i=256;i<512;i++)t[i]=t[i-256];return t}const QT=q8();class Z8{constructor(e,t,i,r){Ue(this,"position");Ue(this,"originalPos");Ue(this,"mesh");Ue(this,"originalMesh");Ue(this,"originalMeshX");Ue(this,"index");this.position=new st(e,t),this.originalPos=new st(e,t),this.originalMesh=i,this.originalMeshX=i.position.x,this.index=r,this.mesh=new cn(new Hm(.05,10,10),new Of({color:65280}))}update(e){const t=this.originalPos.clone().sub(e),i=t.length(),r=1/Math.max(i,.2),a=this.originalPos.clone().sub(t.normalize().multiplyScalar(-i*.2*r));this.position.lerp(a,.1),this.mesh.position.x=this.position.x,this.mesh.position.y=this.position.y;const o=this.originalMesh.geometry.attributes.position.array;o[this.index*3]=this.position.x-this.originalMeshX,o[this.index*3+1]=this.position.y,this.originalMesh.geometry.attributes.position.needsUpdate=!0}}function Q8(){const n=Te.useRef(null),e=["https://images.unsplash.com/photo-1552922280-27619b672183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&h=768","https://images.unsplash.com/photo-1569503689347-a5dbdaca7c69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&h=768","https://images.unsplash.com/photo-1575651607650-5a5c39edce9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&h=768","https://images.unsplash.com/photo-1575905283836-a741eb65a192?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&h=768","https://images.unsplash.com/photo-1573743338941-39db12ef9b64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&h=768"];return Te.useEffect(()=>{const t=n.current,i=new rd;let r=null;const a=new yi(70,window.innerWidth/window.innerHeight,.001,1e3);t&&(r=new id({canvas:t}),r.setClearColor(15658734,1),r.setSize(window.innerWidth,window.innerHeight)),a.position.set(0,0,2);let o=0;const l=[],c=[],f=new fW,d=new st,p=new Ff().load(j8),m=new or(1,1,1,1),v=new Nn({uniforms:{time:{value:0},uTexture:{value:p},progress:{value:0},resolution:{value:new st(window.innerWidth,window.innerHeight)}},side:tr,vertexShader:X8,fragmentShader:Y8});for(let y=-2;y<3;y++){const w=new or(1,1,1,1),A=v.clone();A.uniforms.uTexture.value=new Ff().load(e[y+2]),A.uniforms.progress.value=y/2;const R=new cn(w,A);R.position.x=y,R.userData.position=y,l.push(R),i.add(R)}r==null||r.render(i,a);function M(){const y=window.innerWidth,w=window.innerHeight;t&&(t.style.width=`${y}px`,t.style.height=`${w}px`),r==null||r.setSize(y,w),a.aspect=y/w,a.updateProjectionMatrix()}function x(){const y=m.attributes.position.array,w=y.length;for(let A=0;A<w;A+=3){const R=y[A],P=y[A+1],N=.1*Math.sin(P*2+o)*.2;y[A]=R+N}m.attributes.position.needsUpdate=!0}function _(){requestAnimationFrame(_);const{uniforms:y}=v;o+=.05,x(),y.time.value=o,y.resolution.value=new st(window.innerWidth,window.innerHeight),c.map(w=>{w.update(d)}),r==null||r.render(i,a)}M(),g(),_(),S(),window.addEventListener("resize",M);function g(){l.forEach(y=>{const w=y.geometry.attributes.position.array;for(let A=0;A<w.length;A+=3){const R=w[A]+y.position.x,P=w[A+1],N=.1*QT(R,P),T=.1*QT(R,P),C=new Z8(R+N,P+T,y,A/3);c.push(C),i.add(C.mesh)}})}function S(){const y=new cn(new or(10,10),new Of({color:16711680})),w=new cn(new Hm(.1,10,10),new Of({color:16711680,wireframe:!0}));i.add(w),window.addEventListener("mousemove",A=>{d.x=A.clientX/window.innerWidth*2-1,d.y=-(A.clientY/window.innerHeight)*2+1,f.setFromCamera(d,a);const R=f.intersectObjects([y]);R.length>0&&w.position.copy(R[0].point)})}return()=>{r&&r.dispose()}},[]),Be.jsxs(Be.Fragment,{children:[Be.jsx(ma,{className:"absolute left-3 top-2 z-10 text-black",to:"/",children:Be.jsx(os,{icon:ld,size:"2x"})}),Be.jsx("canvas",{ref:n})]})}var JT=!1,No,nx,ix,yp,Sp,nR,Ep,rx,ax,sx,iR,ox,lx,rR,aR;function Li(){if(!JT){JT=!0;var n=navigator.userAgent,e=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(n),t=/(Mac OS X)|(Windows)|(Linux)/.exec(n);if(ox=/\b(iPhone|iP[ao]d)/.exec(n),lx=/\b(iP[ao]d)/.exec(n),sx=/Android/i.exec(n),rR=/FBAN\/\w+;/i.exec(n),aR=/Mobile/i.exec(n),iR=!!/Win64/.exec(n),e){No=e[1]?parseFloat(e[1]):e[5]?parseFloat(e[5]):NaN,No&&document&&document.documentMode&&(No=document.documentMode);var i=/(?:Trident\/(\d+.\d+))/.exec(n);nR=i?parseFloat(i[1])+4:No,nx=e[2]?parseFloat(e[2]):NaN,ix=e[3]?parseFloat(e[3]):NaN,yp=e[4]?parseFloat(e[4]):NaN,yp?(e=/(?:Chrome\/(\d+\.\d+))/.exec(n),Sp=e&&e[1]?parseFloat(e[1]):NaN):Sp=NaN}else No=nx=ix=Sp=yp=NaN;if(t){if(t[1]){var r=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(n);Ep=r?parseFloat(r[1].replace("_",".")):!0}else Ep=!1;rx=!!t[2],ax=!!t[3]}else Ep=rx=ax=!1}}var ux={ie:function(){return Li()||No},ieCompatibilityMode:function(){return Li()||nR>No},ie64:function(){return ux.ie()&&iR},firefox:function(){return Li()||nx},opera:function(){return Li()||ix},webkit:function(){return Li()||yp},safari:function(){return ux.webkit()},chrome:function(){return Li()||Sp},windows:function(){return Li()||rx},osx:function(){return Li()||Ep},linux:function(){return Li()||ax},iphone:function(){return Li()||ox},mobile:function(){return Li()||ox||lx||sx||aR},nativeApp:function(){return Li()||rR},android:function(){return Li()||sx},ipad:function(){return Li()||lx}},J8=ux,np=!!(typeof window<"u"&&window.document&&window.document.createElement),e9={canUseDOM:np,canUseWorkers:typeof Worker<"u",canUseEventListeners:np&&!!(window.addEventListener||window.attachEvent),canUseViewport:np&&!!window.screen,isInWorker:!np},t9=e9,sR=t9,oR;sR.canUseDOM&&(oR=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function n9(n,e){if(!sR.canUseDOM||e&&!("addEventListener"in document))return!1;var t="on"+n,i=t in document;if(!i){var r=document.createElement("div");r.setAttribute(t,"return;"),i=typeof r[t]=="function"}return!i&&oR&&n==="wheel"&&(i=document.implementation.hasFeature("Events.wheel","3.0")),i}var i9=n9,r9=J8,a9=i9,eb=10,tb=40,nb=800;function lR(n){var e=0,t=0,i=0,r=0;return"detail"in n&&(t=n.detail),"wheelDelta"in n&&(t=-n.wheelDelta/120),"wheelDeltaY"in n&&(t=-n.wheelDeltaY/120),"wheelDeltaX"in n&&(e=-n.wheelDeltaX/120),"axis"in n&&n.axis===n.HORIZONTAL_AXIS&&(e=t,t=0),i=e*eb,r=t*eb,"deltaY"in n&&(r=n.deltaY),"deltaX"in n&&(i=n.deltaX),(i||r)&&n.deltaMode&&(n.deltaMode==1?(i*=tb,r*=tb):(i*=nb,r*=nb)),i&&!e&&(e=i<1?-1:1),r&&!t&&(t=r<1?-1:1),{spinX:e,spinY:t,pixelX:i,pixelY:r}}lR.getEventType=function(){return r9.firefox()?"DOMMouseScroll":a9("wheel")?"wheel":"mousewheel"};var s9=lR,o9=s9;const l9=bx(o9);var um={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */um.exports;(function(n,e){(function(){var t,i="4.17.21",r=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",o="Expected a function",l="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",f=500,d="__lodash_placeholder__",p=1,m=2,v=4,M=1,x=2,_=1,g=2,S=4,y=8,w=16,A=32,R=64,P=128,N=256,T=512,C=30,G="...",X=800,ae=16,k=1,Y=2,K=3,se=1/0,H=9007199254740991,Z=17976931348623157e292,Q=NaN,le=4294967295,de=le-1,re=le>>>1,ue=[["ary",P],["bind",_],["bindKey",g],["curry",y],["curryRight",w],["flip",T],["partial",A],["partialRight",R],["rearg",N]],xe="[object Arguments]",Le="[object Array]",Ne="[object AsyncFunction]",et="[object Boolean]",nt="[object Date]",Ze="[object DOMException]",xt="[object Error]",J="[object Function]",Bn="[object GeneratorFunction]",Oe="[object Map]",Qe="[object Number]",Ge="[object Null]",At="[object Object]",ct="[object Promise]",O="[object Proxy]",D="[object RegExp]",q="[object Set]",ge="[object String]",pe="[object Symbol]",_e="[object Undefined]",Fe="[object WeakMap]",be="[object WeakSet]",Ce="[object ArrayBuffer]",Ve="[object DataView]",ot="[object Float32Array]",me="[object Float64Array]",Pt="[object Int8Array]",ft="[object Int16Array]",tt="[object Int32Array]",We="[object Uint8Array]",Ie="[object Uint8ClampedArray]",it="[object Uint16Array]",Ct="[object Uint32Array]",en=/\b__p \+= '';/g,pt=/\b(__p \+=) '' \+/g,ye=/(__e\(.*?\)|\b__t\)) \+\n'';/g,B=/&(?:amp|lt|gt|quot|#39);/g,Ee=/[&<>"']/g,Me=RegExp(B.source),Je=RegExp(Ee.source),Xe=/<%-([\s\S]+?)%>/g,Ft=/<%([\s\S]+?)%>/g,It=/<%=([\s\S]+?)%>/g,En=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,jn=/^\w*$/,kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rn=/[\\^$.*+?()[\]{}|]/g,pr=RegExp(Rn.source),pl=/^\s+/,qm=/\s/,ml=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,cd=/\{\n\/\* \[wrapped with (.+)\] \*/,gl=/,? & /,fd=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,dd=/[()=,{}\[\]\/\s]/,Km=/\\(\\)?/g,Zm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,hd=/\w*$/,U=/^[-+]0x[0-9a-f]+$/i,$=/^0b[01]+$/i,te=/^\[object .+?Constructor\]$/,ie=/^0o[0-7]+$/i,ee=/^(?:0|[1-9]\d*)$/,Ae=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ke=/($^)/,je=/['\n\r\u2028\u2029\\]/g,$e="\\ud800-\\udfff",dt="\\u0300-\\u036f",rt="\\ufe20-\\ufe2f",lt="\\u20d0-\\u20ff",tn=dt+rt+lt,ti="\\u2700-\\u27bf",vn="a-z\\xdf-\\xf6\\xf8-\\xff",kr="\\xac\\xb1\\xd7\\xf7",Yt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",mt="\\u2000-\\u206f",ic=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",jt="A-Z\\xc0-\\xd6\\xd8-\\xde",ra="\\ufe0e\\ufe0f",rc=kr+Yt+mt+ic,Ta="['’]",ac="["+$e+"]",Pn="["+rc+"]",mr="["+tn+"]",vl="\\d+",bi="["+ti+"]",_l="["+vn+"]",pd="[^"+$e+rc+vl+ti+vn+jt+"]",xl="\\ud83c[\\udffb-\\udfff]",lP="(?:"+mr+"|"+xl+")",p1="[^"+$e+"]",Qm="(?:\\ud83c[\\udde6-\\uddff]){2}",Jm="[\\ud800-\\udbff][\\udc00-\\udfff]",yl="["+jt+"]",m1="\\u200d",g1="(?:"+_l+"|"+pd+")",uP="(?:"+yl+"|"+pd+")",v1="(?:"+Ta+"(?:d|ll|m|re|s|t|ve))?",_1="(?:"+Ta+"(?:D|LL|M|RE|S|T|VE))?",x1=lP+"?",y1="["+ra+"]?",cP="(?:"+m1+"(?:"+[p1,Qm,Jm].join("|")+")"+y1+x1+")*",fP="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",dP="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",S1=y1+x1+cP,hP="(?:"+[bi,Qm,Jm].join("|")+")"+S1,pP="(?:"+[p1+mr+"?",mr,Qm,Jm,ac].join("|")+")",mP=RegExp(Ta,"g"),gP=RegExp(mr,"g"),eg=RegExp(xl+"(?="+xl+")|"+pP+S1,"g"),vP=RegExp([yl+"?"+_l+"+"+v1+"(?="+[Pn,yl,"$"].join("|")+")",uP+"+"+_1+"(?="+[Pn,yl+g1,"$"].join("|")+")",yl+"?"+g1+"+"+v1,yl+"+"+_1,dP,fP,vl,hP].join("|"),"g"),_P=RegExp("["+m1+$e+tn+ra+"]"),xP=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,yP=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],SP=-1,$t={};$t[ot]=$t[me]=$t[Pt]=$t[ft]=$t[tt]=$t[We]=$t[Ie]=$t[it]=$t[Ct]=!0,$t[xe]=$t[Le]=$t[Ce]=$t[et]=$t[Ve]=$t[nt]=$t[xt]=$t[J]=$t[Oe]=$t[Qe]=$t[At]=$t[D]=$t[q]=$t[ge]=$t[Fe]=!1;var Wt={};Wt[xe]=Wt[Le]=Wt[Ce]=Wt[Ve]=Wt[et]=Wt[nt]=Wt[ot]=Wt[me]=Wt[Pt]=Wt[ft]=Wt[tt]=Wt[Oe]=Wt[Qe]=Wt[At]=Wt[D]=Wt[q]=Wt[ge]=Wt[pe]=Wt[We]=Wt[Ie]=Wt[it]=Wt[Ct]=!0,Wt[xt]=Wt[J]=Wt[Fe]=!1;var EP={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},MP={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},wP={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},TP={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},bP=parseFloat,AP=parseInt,E1=typeof Sc=="object"&&Sc&&Sc.Object===Object&&Sc,CP=typeof self=="object"&&self&&self.Object===Object&&self,$n=E1||CP||Function("return this")(),tg=e&&!e.nodeType&&e,fo=tg&&!0&&n&&!n.nodeType&&n,M1=fo&&fo.exports===tg,ng=M1&&E1.process,gr=function(){try{var W=fo&&fo.require&&fo.require("util").types;return W||ng&&ng.binding&&ng.binding("util")}catch{}}(),w1=gr&&gr.isArrayBuffer,T1=gr&&gr.isDate,b1=gr&&gr.isMap,A1=gr&&gr.isRegExp,C1=gr&&gr.isSet,R1=gr&&gr.isTypedArray;function Vi(W,oe,ne){switch(ne.length){case 0:return W.call(oe);case 1:return W.call(oe,ne[0]);case 2:return W.call(oe,ne[0],ne[1]);case 3:return W.call(oe,ne[0],ne[1],ne[2])}return W.apply(oe,ne)}function RP(W,oe,ne,Re){for(var at=-1,Lt=W==null?0:W.length;++at<Lt;){var Ln=W[at];oe(Re,Ln,ne(Ln),W)}return Re}function vr(W,oe){for(var ne=-1,Re=W==null?0:W.length;++ne<Re&&oe(W[ne],ne,W)!==!1;);return W}function PP(W,oe){for(var ne=W==null?0:W.length;ne--&&oe(W[ne],ne,W)!==!1;);return W}function P1(W,oe){for(var ne=-1,Re=W==null?0:W.length;++ne<Re;)if(!oe(W[ne],ne,W))return!1;return!0}function ls(W,oe){for(var ne=-1,Re=W==null?0:W.length,at=0,Lt=[];++ne<Re;){var Ln=W[ne];oe(Ln,ne,W)&&(Lt[at++]=Ln)}return Lt}function md(W,oe){var ne=W==null?0:W.length;return!!ne&&Sl(W,oe,0)>-1}function ig(W,oe,ne){for(var Re=-1,at=W==null?0:W.length;++Re<at;)if(ne(oe,W[Re]))return!0;return!1}function nn(W,oe){for(var ne=-1,Re=W==null?0:W.length,at=Array(Re);++ne<Re;)at[ne]=oe(W[ne],ne,W);return at}function us(W,oe){for(var ne=-1,Re=oe.length,at=W.length;++ne<Re;)W[at+ne]=oe[ne];return W}function rg(W,oe,ne,Re){var at=-1,Lt=W==null?0:W.length;for(Re&&Lt&&(ne=W[++at]);++at<Lt;)ne=oe(ne,W[at],at,W);return ne}function LP(W,oe,ne,Re){var at=W==null?0:W.length;for(Re&&at&&(ne=W[--at]);at--;)ne=oe(ne,W[at],at,W);return ne}function ag(W,oe){for(var ne=-1,Re=W==null?0:W.length;++ne<Re;)if(oe(W[ne],ne,W))return!0;return!1}var DP=sg("length");function IP(W){return W.split("")}function UP(W){return W.match(fd)||[]}function L1(W,oe,ne){var Re;return ne(W,function(at,Lt,Ln){if(oe(at,Lt,Ln))return Re=Lt,!1}),Re}function gd(W,oe,ne,Re){for(var at=W.length,Lt=ne+(Re?1:-1);Re?Lt--:++Lt<at;)if(oe(W[Lt],Lt,W))return Lt;return-1}function Sl(W,oe,ne){return oe===oe?YP(W,oe,ne):gd(W,D1,ne)}function NP(W,oe,ne,Re){for(var at=ne-1,Lt=W.length;++at<Lt;)if(Re(W[at],oe))return at;return-1}function D1(W){return W!==W}function I1(W,oe){var ne=W==null?0:W.length;return ne?lg(W,oe)/ne:Q}function sg(W){return function(oe){return oe==null?t:oe[W]}}function og(W){return function(oe){return W==null?t:W[oe]}}function U1(W,oe,ne,Re,at){return at(W,function(Lt,Ln,Ht){ne=Re?(Re=!1,Lt):oe(ne,Lt,Ln,Ht)}),ne}function OP(W,oe){var ne=W.length;for(W.sort(oe);ne--;)W[ne]=W[ne].value;return W}function lg(W,oe){for(var ne,Re=-1,at=W.length;++Re<at;){var Lt=oe(W[Re]);Lt!==t&&(ne=ne===t?Lt:ne+Lt)}return ne}function ug(W,oe){for(var ne=-1,Re=Array(W);++ne<W;)Re[ne]=oe(ne);return Re}function FP(W,oe){return nn(oe,function(ne){return[ne,W[ne]]})}function N1(W){return W&&W.slice(0,z1(W)+1).replace(pl,"")}function Xi(W){return function(oe){return W(oe)}}function cg(W,oe){return nn(oe,function(ne){return W[ne]})}function sc(W,oe){return W.has(oe)}function O1(W,oe){for(var ne=-1,Re=W.length;++ne<Re&&Sl(oe,W[ne],0)>-1;);return ne}function F1(W,oe){for(var ne=W.length;ne--&&Sl(oe,W[ne],0)>-1;);return ne}function kP(W,oe){for(var ne=W.length,Re=0;ne--;)W[ne]===oe&&++Re;return Re}var zP=og(EP),BP=og(MP);function HP(W){return"\\"+TP[W]}function GP(W,oe){return W==null?t:W[oe]}function El(W){return _P.test(W)}function WP(W){return xP.test(W)}function VP(W){for(var oe,ne=[];!(oe=W.next()).done;)ne.push(oe.value);return ne}function fg(W){var oe=-1,ne=Array(W.size);return W.forEach(function(Re,at){ne[++oe]=[at,Re]}),ne}function k1(W,oe){return function(ne){return W(oe(ne))}}function cs(W,oe){for(var ne=-1,Re=W.length,at=0,Lt=[];++ne<Re;){var Ln=W[ne];(Ln===oe||Ln===d)&&(W[ne]=d,Lt[at++]=ne)}return Lt}function vd(W){var oe=-1,ne=Array(W.size);return W.forEach(function(Re){ne[++oe]=Re}),ne}function XP(W){var oe=-1,ne=Array(W.size);return W.forEach(function(Re){ne[++oe]=[Re,Re]}),ne}function YP(W,oe,ne){for(var Re=ne-1,at=W.length;++Re<at;)if(W[Re]===oe)return Re;return-1}function jP(W,oe,ne){for(var Re=ne+1;Re--;)if(W[Re]===oe)return Re;return Re}function Ml(W){return El(W)?qP(W):DP(W)}function zr(W){return El(W)?KP(W):IP(W)}function z1(W){for(var oe=W.length;oe--&&qm.test(W.charAt(oe)););return oe}var $P=og(wP);function qP(W){for(var oe=eg.lastIndex=0;eg.test(W);)++oe;return oe}function KP(W){return W.match(eg)||[]}function ZP(W){return W.match(vP)||[]}var QP=function W(oe){oe=oe==null?$n:wl.defaults($n.Object(),oe,wl.pick($n,yP));var ne=oe.Array,Re=oe.Date,at=oe.Error,Lt=oe.Function,Ln=oe.Math,Ht=oe.Object,dg=oe.RegExp,JP=oe.String,_r=oe.TypeError,_d=ne.prototype,eL=Lt.prototype,Tl=Ht.prototype,xd=oe["__core-js_shared__"],yd=eL.toString,Ut=Tl.hasOwnProperty,tL=0,B1=function(){var s=/[^.]+$/.exec(xd&&xd.keys&&xd.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Sd=Tl.toString,nL=yd.call(Ht),iL=$n._,rL=dg("^"+yd.call(Ut).replace(Rn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ed=M1?oe.Buffer:t,fs=oe.Symbol,Md=oe.Uint8Array,H1=Ed?Ed.allocUnsafe:t,wd=k1(Ht.getPrototypeOf,Ht),G1=Ht.create,W1=Tl.propertyIsEnumerable,Td=_d.splice,V1=fs?fs.isConcatSpreadable:t,oc=fs?fs.iterator:t,ho=fs?fs.toStringTag:t,bd=function(){try{var s=_o(Ht,"defineProperty");return s({},"",{}),s}catch{}}(),aL=oe.clearTimeout!==$n.clearTimeout&&oe.clearTimeout,sL=Re&&Re.now!==$n.Date.now&&Re.now,oL=oe.setTimeout!==$n.setTimeout&&oe.setTimeout,Ad=Ln.ceil,Cd=Ln.floor,hg=Ht.getOwnPropertySymbols,lL=Ed?Ed.isBuffer:t,X1=oe.isFinite,uL=_d.join,cL=k1(Ht.keys,Ht),Dn=Ln.max,ni=Ln.min,fL=Re.now,dL=oe.parseInt,Y1=Ln.random,hL=_d.reverse,pg=_o(oe,"DataView"),lc=_o(oe,"Map"),mg=_o(oe,"Promise"),bl=_o(oe,"Set"),uc=_o(oe,"WeakMap"),cc=_o(Ht,"create"),Rd=uc&&new uc,Al={},pL=xo(pg),mL=xo(lc),gL=xo(mg),vL=xo(bl),_L=xo(uc),Pd=fs?fs.prototype:t,fc=Pd?Pd.valueOf:t,j1=Pd?Pd.toString:t;function L(s){if(hn(s)&&!ut(s)&&!(s instanceof Mt)){if(s instanceof xr)return s;if(Ut.call(s,"__wrapped__"))return $S(s)}return new xr(s)}var Cl=function(){function s(){}return function(u){if(!sn(u))return{};if(G1)return G1(u);s.prototype=u;var h=new s;return s.prototype=t,h}}();function Ld(){}function xr(s,u){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!u,this.__index__=0,this.__values__=t}L.templateSettings={escape:Xe,evaluate:Ft,interpolate:It,variable:"",imports:{_:L}},L.prototype=Ld.prototype,L.prototype.constructor=L,xr.prototype=Cl(Ld.prototype),xr.prototype.constructor=xr;function Mt(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=le,this.__views__=[]}function xL(){var s=new Mt(this.__wrapped__);return s.__actions__=Ai(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=Ai(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=Ai(this.__views__),s}function yL(){if(this.__filtered__){var s=new Mt(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function SL(){var s=this.__wrapped__.value(),u=this.__dir__,h=ut(s),E=u<0,b=h?s.length:0,I=I3(0,b,this.__views__),F=I.start,z=I.end,V=z-F,ce=E?z:F-1,fe=this.__iteratees__,he=fe.length,we=0,ze=ni(V,this.__takeCount__);if(!h||!E&&b==V&&ze==V)return vS(s,this.__actions__);var qe=[];e:for(;V--&&we<ze;){ce+=u;for(var gt=-1,Ke=s[ce];++gt<he;){var St=fe[gt],Tt=St.iteratee,$i=St.type,mi=Tt(Ke);if($i==Y)Ke=mi;else if(!mi){if($i==k)continue e;break e}}qe[we++]=Ke}return qe}Mt.prototype=Cl(Ld.prototype),Mt.prototype.constructor=Mt;function po(s){var u=-1,h=s==null?0:s.length;for(this.clear();++u<h;){var E=s[u];this.set(E[0],E[1])}}function EL(){this.__data__=cc?cc(null):{},this.size=0}function ML(s){var u=this.has(s)&&delete this.__data__[s];return this.size-=u?1:0,u}function wL(s){var u=this.__data__;if(cc){var h=u[s];return h===c?t:h}return Ut.call(u,s)?u[s]:t}function TL(s){var u=this.__data__;return cc?u[s]!==t:Ut.call(u,s)}function bL(s,u){var h=this.__data__;return this.size+=this.has(s)?0:1,h[s]=cc&&u===t?c:u,this}po.prototype.clear=EL,po.prototype.delete=ML,po.prototype.get=wL,po.prototype.has=TL,po.prototype.set=bL;function ba(s){var u=-1,h=s==null?0:s.length;for(this.clear();++u<h;){var E=s[u];this.set(E[0],E[1])}}function AL(){this.__data__=[],this.size=0}function CL(s){var u=this.__data__,h=Dd(u,s);if(h<0)return!1;var E=u.length-1;return h==E?u.pop():Td.call(u,h,1),--this.size,!0}function RL(s){var u=this.__data__,h=Dd(u,s);return h<0?t:u[h][1]}function PL(s){return Dd(this.__data__,s)>-1}function LL(s,u){var h=this.__data__,E=Dd(h,s);return E<0?(++this.size,h.push([s,u])):h[E][1]=u,this}ba.prototype.clear=AL,ba.prototype.delete=CL,ba.prototype.get=RL,ba.prototype.has=PL,ba.prototype.set=LL;function Aa(s){var u=-1,h=s==null?0:s.length;for(this.clear();++u<h;){var E=s[u];this.set(E[0],E[1])}}function DL(){this.size=0,this.__data__={hash:new po,map:new(lc||ba),string:new po}}function IL(s){var u=Vd(this,s).delete(s);return this.size-=u?1:0,u}function UL(s){return Vd(this,s).get(s)}function NL(s){return Vd(this,s).has(s)}function OL(s,u){var h=Vd(this,s),E=h.size;return h.set(s,u),this.size+=h.size==E?0:1,this}Aa.prototype.clear=DL,Aa.prototype.delete=IL,Aa.prototype.get=UL,Aa.prototype.has=NL,Aa.prototype.set=OL;function mo(s){var u=-1,h=s==null?0:s.length;for(this.__data__=new Aa;++u<h;)this.add(s[u])}function FL(s){return this.__data__.set(s,c),this}function kL(s){return this.__data__.has(s)}mo.prototype.add=mo.prototype.push=FL,mo.prototype.has=kL;function Br(s){var u=this.__data__=new ba(s);this.size=u.size}function zL(){this.__data__=new ba,this.size=0}function BL(s){var u=this.__data__,h=u.delete(s);return this.size=u.size,h}function HL(s){return this.__data__.get(s)}function GL(s){return this.__data__.has(s)}function WL(s,u){var h=this.__data__;if(h instanceof ba){var E=h.__data__;if(!lc||E.length<r-1)return E.push([s,u]),this.size=++h.size,this;h=this.__data__=new Aa(E)}return h.set(s,u),this.size=h.size,this}Br.prototype.clear=zL,Br.prototype.delete=BL,Br.prototype.get=HL,Br.prototype.has=GL,Br.prototype.set=WL;function $1(s,u){var h=ut(s),E=!h&&yo(s),b=!h&&!E&&gs(s),I=!h&&!E&&!b&&Dl(s),F=h||E||b||I,z=F?ug(s.length,JP):[],V=z.length;for(var ce in s)(u||Ut.call(s,ce))&&!(F&&(ce=="length"||b&&(ce=="offset"||ce=="parent")||I&&(ce=="buffer"||ce=="byteLength"||ce=="byteOffset")||La(ce,V)))&&z.push(ce);return z}function q1(s){var u=s.length;return u?s[bg(0,u-1)]:t}function VL(s,u){return Xd(Ai(s),go(u,0,s.length))}function XL(s){return Xd(Ai(s))}function gg(s,u,h){(h!==t&&!Hr(s[u],h)||h===t&&!(u in s))&&Ca(s,u,h)}function dc(s,u,h){var E=s[u];(!(Ut.call(s,u)&&Hr(E,h))||h===t&&!(u in s))&&Ca(s,u,h)}function Dd(s,u){for(var h=s.length;h--;)if(Hr(s[h][0],u))return h;return-1}function YL(s,u,h,E){return ds(s,function(b,I,F){u(E,b,h(b),F)}),E}function K1(s,u){return s&&sa(u,Hn(u),s)}function jL(s,u){return s&&sa(u,Ri(u),s)}function Ca(s,u,h){u=="__proto__"&&bd?bd(s,u,{configurable:!0,enumerable:!0,value:h,writable:!0}):s[u]=h}function vg(s,u){for(var h=-1,E=u.length,b=ne(E),I=s==null;++h<E;)b[h]=I?t:Zg(s,u[h]);return b}function go(s,u,h){return s===s&&(h!==t&&(s=s<=h?s:h),u!==t&&(s=s>=u?s:u)),s}function yr(s,u,h,E,b,I){var F,z=u&p,V=u&m,ce=u&v;if(h&&(F=b?h(s,E,b,I):h(s)),F!==t)return F;if(!sn(s))return s;var fe=ut(s);if(fe){if(F=N3(s),!z)return Ai(s,F)}else{var he=ii(s),we=he==J||he==Bn;if(gs(s))return yS(s,z);if(he==At||he==xe||we&&!b){if(F=V||we?{}:zS(s),!z)return V?w3(s,jL(F,s)):M3(s,K1(F,s))}else{if(!Wt[he])return b?s:{};F=O3(s,he,z)}}I||(I=new Br);var ze=I.get(s);if(ze)return ze;I.set(s,F),pE(s)?s.forEach(function(Ke){F.add(yr(Ke,u,h,Ke,s,I))}):dE(s)&&s.forEach(function(Ke,St){F.set(St,yr(Ke,u,h,St,s,I))});var qe=ce?V?Fg:Og:V?Ri:Hn,gt=fe?t:qe(s);return vr(gt||s,function(Ke,St){gt&&(St=Ke,Ke=s[St]),dc(F,St,yr(Ke,u,h,St,s,I))}),F}function $L(s){var u=Hn(s);return function(h){return Z1(h,s,u)}}function Z1(s,u,h){var E=h.length;if(s==null)return!E;for(s=Ht(s);E--;){var b=h[E],I=u[b],F=s[b];if(F===t&&!(b in s)||!I(F))return!1}return!0}function Q1(s,u,h){if(typeof s!="function")throw new _r(o);return xc(function(){s.apply(t,h)},u)}function hc(s,u,h,E){var b=-1,I=md,F=!0,z=s.length,V=[],ce=u.length;if(!z)return V;h&&(u=nn(u,Xi(h))),E?(I=ig,F=!1):u.length>=r&&(I=sc,F=!1,u=new mo(u));e:for(;++b<z;){var fe=s[b],he=h==null?fe:h(fe);if(fe=E||fe!==0?fe:0,F&&he===he){for(var we=ce;we--;)if(u[we]===he)continue e;V.push(fe)}else I(u,he,E)||V.push(fe)}return V}var ds=TS(aa),J1=TS(xg,!0);function qL(s,u){var h=!0;return ds(s,function(E,b,I){return h=!!u(E,b,I),h}),h}function Id(s,u,h){for(var E=-1,b=s.length;++E<b;){var I=s[E],F=u(I);if(F!=null&&(z===t?F===F&&!ji(F):h(F,z)))var z=F,V=I}return V}function KL(s,u,h,E){var b=s.length;for(h=ht(h),h<0&&(h=-h>b?0:b+h),E=E===t||E>b?b:ht(E),E<0&&(E+=b),E=h>E?0:gE(E);h<E;)s[h++]=u;return s}function eS(s,u){var h=[];return ds(s,function(E,b,I){u(E,b,I)&&h.push(E)}),h}function qn(s,u,h,E,b){var I=-1,F=s.length;for(h||(h=k3),b||(b=[]);++I<F;){var z=s[I];u>0&&h(z)?u>1?qn(z,u-1,h,E,b):us(b,z):E||(b[b.length]=z)}return b}var _g=bS(),tS=bS(!0);function aa(s,u){return s&&_g(s,u,Hn)}function xg(s,u){return s&&tS(s,u,Hn)}function Ud(s,u){return ls(u,function(h){return Da(s[h])})}function vo(s,u){u=ps(u,s);for(var h=0,E=u.length;s!=null&&h<E;)s=s[oa(u[h++])];return h&&h==E?s:t}function nS(s,u,h){var E=u(s);return ut(s)?E:us(E,h(s))}function hi(s){return s==null?s===t?_e:Ge:ho&&ho in Ht(s)?D3(s):X3(s)}function yg(s,u){return s>u}function ZL(s,u){return s!=null&&Ut.call(s,u)}function QL(s,u){return s!=null&&u in Ht(s)}function JL(s,u,h){return s>=ni(u,h)&&s<Dn(u,h)}function Sg(s,u,h){for(var E=h?ig:md,b=s[0].length,I=s.length,F=I,z=ne(I),V=1/0,ce=[];F--;){var fe=s[F];F&&u&&(fe=nn(fe,Xi(u))),V=ni(fe.length,V),z[F]=!h&&(u||b>=120&&fe.length>=120)?new mo(F&&fe):t}fe=s[0];var he=-1,we=z[0];e:for(;++he<b&&ce.length<V;){var ze=fe[he],qe=u?u(ze):ze;if(ze=h||ze!==0?ze:0,!(we?sc(we,qe):E(ce,qe,h))){for(F=I;--F;){var gt=z[F];if(!(gt?sc(gt,qe):E(s[F],qe,h)))continue e}we&&we.push(qe),ce.push(ze)}}return ce}function e3(s,u,h,E){return aa(s,function(b,I,F){u(E,h(b),I,F)}),E}function pc(s,u,h){u=ps(u,s),s=WS(s,u);var E=s==null?s:s[oa(Er(u))];return E==null?t:Vi(E,s,h)}function iS(s){return hn(s)&&hi(s)==xe}function t3(s){return hn(s)&&hi(s)==Ce}function n3(s){return hn(s)&&hi(s)==nt}function mc(s,u,h,E,b){return s===u?!0:s==null||u==null||!hn(s)&&!hn(u)?s!==s&&u!==u:i3(s,u,h,E,mc,b)}function i3(s,u,h,E,b,I){var F=ut(s),z=ut(u),V=F?Le:ii(s),ce=z?Le:ii(u);V=V==xe?At:V,ce=ce==xe?At:ce;var fe=V==At,he=ce==At,we=V==ce;if(we&&gs(s)){if(!gs(u))return!1;F=!0,fe=!1}if(we&&!fe)return I||(I=new Br),F||Dl(s)?OS(s,u,h,E,b,I):P3(s,u,V,h,E,b,I);if(!(h&M)){var ze=fe&&Ut.call(s,"__wrapped__"),qe=he&&Ut.call(u,"__wrapped__");if(ze||qe){var gt=ze?s.value():s,Ke=qe?u.value():u;return I||(I=new Br),b(gt,Ke,h,E,I)}}return we?(I||(I=new Br),L3(s,u,h,E,b,I)):!1}function r3(s){return hn(s)&&ii(s)==Oe}function Eg(s,u,h,E){var b=h.length,I=b,F=!E;if(s==null)return!I;for(s=Ht(s);b--;){var z=h[b];if(F&&z[2]?z[1]!==s[z[0]]:!(z[0]in s))return!1}for(;++b<I;){z=h[b];var V=z[0],ce=s[V],fe=z[1];if(F&&z[2]){if(ce===t&&!(V in s))return!1}else{var he=new Br;if(E)var we=E(ce,fe,V,s,u,he);if(!(we===t?mc(fe,ce,M|x,E,he):we))return!1}}return!0}function rS(s){if(!sn(s)||B3(s))return!1;var u=Da(s)?rL:te;return u.test(xo(s))}function a3(s){return hn(s)&&hi(s)==D}function s3(s){return hn(s)&&ii(s)==q}function o3(s){return hn(s)&&Zd(s.length)&&!!$t[hi(s)]}function aS(s){return typeof s=="function"?s:s==null?Pi:typeof s=="object"?ut(s)?lS(s[0],s[1]):oS(s):AE(s)}function Mg(s){if(!_c(s))return cL(s);var u=[];for(var h in Ht(s))Ut.call(s,h)&&h!="constructor"&&u.push(h);return u}function l3(s){if(!sn(s))return V3(s);var u=_c(s),h=[];for(var E in s)E=="constructor"&&(u||!Ut.call(s,E))||h.push(E);return h}function wg(s,u){return s<u}function sS(s,u){var h=-1,E=Ci(s)?ne(s.length):[];return ds(s,function(b,I,F){E[++h]=u(b,I,F)}),E}function oS(s){var u=zg(s);return u.length==1&&u[0][2]?HS(u[0][0],u[0][1]):function(h){return h===s||Eg(h,s,u)}}function lS(s,u){return Hg(s)&&BS(u)?HS(oa(s),u):function(h){var E=Zg(h,s);return E===t&&E===u?Qg(h,s):mc(u,E,M|x)}}function Nd(s,u,h,E,b){s!==u&&_g(u,function(I,F){if(b||(b=new Br),sn(I))u3(s,u,F,h,Nd,E,b);else{var z=E?E(Wg(s,F),I,F+"",s,u,b):t;z===t&&(z=I),gg(s,F,z)}},Ri)}function u3(s,u,h,E,b,I,F){var z=Wg(s,h),V=Wg(u,h),ce=F.get(V);if(ce){gg(s,h,ce);return}var fe=I?I(z,V,h+"",s,u,F):t,he=fe===t;if(he){var we=ut(V),ze=!we&&gs(V),qe=!we&&!ze&&Dl(V);fe=V,we||ze||qe?ut(z)?fe=z:_n(z)?fe=Ai(z):ze?(he=!1,fe=yS(V,!0)):qe?(he=!1,fe=SS(V,!0)):fe=[]:yc(V)||yo(V)?(fe=z,yo(z)?fe=vE(z):(!sn(z)||Da(z))&&(fe=zS(V))):he=!1}he&&(F.set(V,fe),b(fe,V,E,I,F),F.delete(V)),gg(s,h,fe)}function uS(s,u){var h=s.length;if(h)return u+=u<0?h:0,La(u,h)?s[u]:t}function cS(s,u,h){u.length?u=nn(u,function(I){return ut(I)?function(F){return vo(F,I.length===1?I[0]:I)}:I}):u=[Pi];var E=-1;u=nn(u,Xi(Ye()));var b=sS(s,function(I,F,z){var V=nn(u,function(ce){return ce(I)});return{criteria:V,index:++E,value:I}});return OP(b,function(I,F){return E3(I,F,h)})}function c3(s,u){return fS(s,u,function(h,E){return Qg(s,E)})}function fS(s,u,h){for(var E=-1,b=u.length,I={};++E<b;){var F=u[E],z=vo(s,F);h(z,F)&&gc(I,ps(F,s),z)}return I}function f3(s){return function(u){return vo(u,s)}}function Tg(s,u,h,E){var b=E?NP:Sl,I=-1,F=u.length,z=s;for(s===u&&(u=Ai(u)),h&&(z=nn(s,Xi(h)));++I<F;)for(var V=0,ce=u[I],fe=h?h(ce):ce;(V=b(z,fe,V,E))>-1;)z!==s&&Td.call(z,V,1),Td.call(s,V,1);return s}function dS(s,u){for(var h=s?u.length:0,E=h-1;h--;){var b=u[h];if(h==E||b!==I){var I=b;La(b)?Td.call(s,b,1):Rg(s,b)}}return s}function bg(s,u){return s+Cd(Y1()*(u-s+1))}function d3(s,u,h,E){for(var b=-1,I=Dn(Ad((u-s)/(h||1)),0),F=ne(I);I--;)F[E?I:++b]=s,s+=h;return F}function Ag(s,u){var h="";if(!s||u<1||u>H)return h;do u%2&&(h+=s),u=Cd(u/2),u&&(s+=s);while(u);return h}function _t(s,u){return Vg(GS(s,u,Pi),s+"")}function h3(s){return q1(Il(s))}function p3(s,u){var h=Il(s);return Xd(h,go(u,0,h.length))}function gc(s,u,h,E){if(!sn(s))return s;u=ps(u,s);for(var b=-1,I=u.length,F=I-1,z=s;z!=null&&++b<I;){var V=oa(u[b]),ce=h;if(V==="__proto__"||V==="constructor"||V==="prototype")return s;if(b!=F){var fe=z[V];ce=E?E(fe,V,z):t,ce===t&&(ce=sn(fe)?fe:La(u[b+1])?[]:{})}dc(z,V,ce),z=z[V]}return s}var hS=Rd?function(s,u){return Rd.set(s,u),s}:Pi,m3=bd?function(s,u){return bd(s,"toString",{configurable:!0,enumerable:!1,value:ev(u),writable:!0})}:Pi;function g3(s){return Xd(Il(s))}function Sr(s,u,h){var E=-1,b=s.length;u<0&&(u=-u>b?0:b+u),h=h>b?b:h,h<0&&(h+=b),b=u>h?0:h-u>>>0,u>>>=0;for(var I=ne(b);++E<b;)I[E]=s[E+u];return I}function v3(s,u){var h;return ds(s,function(E,b,I){return h=u(E,b,I),!h}),!!h}function Od(s,u,h){var E=0,b=s==null?E:s.length;if(typeof u=="number"&&u===u&&b<=re){for(;E<b;){var I=E+b>>>1,F=s[I];F!==null&&!ji(F)&&(h?F<=u:F<u)?E=I+1:b=I}return b}return Cg(s,u,Pi,h)}function Cg(s,u,h,E){var b=0,I=s==null?0:s.length;if(I===0)return 0;u=h(u);for(var F=u!==u,z=u===null,V=ji(u),ce=u===t;b<I;){var fe=Cd((b+I)/2),he=h(s[fe]),we=he!==t,ze=he===null,qe=he===he,gt=ji(he);if(F)var Ke=E||qe;else ce?Ke=qe&&(E||we):z?Ke=qe&&we&&(E||!ze):V?Ke=qe&&we&&!ze&&(E||!gt):ze||gt?Ke=!1:Ke=E?he<=u:he<u;Ke?b=fe+1:I=fe}return ni(I,de)}function pS(s,u){for(var h=-1,E=s.length,b=0,I=[];++h<E;){var F=s[h],z=u?u(F):F;if(!h||!Hr(z,V)){var V=z;I[b++]=F===0?0:F}}return I}function mS(s){return typeof s=="number"?s:ji(s)?Q:+s}function Yi(s){if(typeof s=="string")return s;if(ut(s))return nn(s,Yi)+"";if(ji(s))return j1?j1.call(s):"";var u=s+"";return u=="0"&&1/s==-se?"-0":u}function hs(s,u,h){var E=-1,b=md,I=s.length,F=!0,z=[],V=z;if(h)F=!1,b=ig;else if(I>=r){var ce=u?null:C3(s);if(ce)return vd(ce);F=!1,b=sc,V=new mo}else V=u?[]:z;e:for(;++E<I;){var fe=s[E],he=u?u(fe):fe;if(fe=h||fe!==0?fe:0,F&&he===he){for(var we=V.length;we--;)if(V[we]===he)continue e;u&&V.push(he),z.push(fe)}else b(V,he,h)||(V!==z&&V.push(he),z.push(fe))}return z}function Rg(s,u){return u=ps(u,s),s=WS(s,u),s==null||delete s[oa(Er(u))]}function gS(s,u,h,E){return gc(s,u,h(vo(s,u)),E)}function Fd(s,u,h,E){for(var b=s.length,I=E?b:-1;(E?I--:++I<b)&&u(s[I],I,s););return h?Sr(s,E?0:I,E?I+1:b):Sr(s,E?I+1:0,E?b:I)}function vS(s,u){var h=s;return h instanceof Mt&&(h=h.value()),rg(u,function(E,b){return b.func.apply(b.thisArg,us([E],b.args))},h)}function Pg(s,u,h){var E=s.length;if(E<2)return E?hs(s[0]):[];for(var b=-1,I=ne(E);++b<E;)for(var F=s[b],z=-1;++z<E;)z!=b&&(I[b]=hc(I[b]||F,s[z],u,h));return hs(qn(I,1),u,h)}function _S(s,u,h){for(var E=-1,b=s.length,I=u.length,F={};++E<b;){var z=E<I?u[E]:t;h(F,s[E],z)}return F}function Lg(s){return _n(s)?s:[]}function Dg(s){return typeof s=="function"?s:Pi}function ps(s,u){return ut(s)?s:Hg(s,u)?[s]:jS(Dt(s))}var _3=_t;function ms(s,u,h){var E=s.length;return h=h===t?E:h,!u&&h>=E?s:Sr(s,u,h)}var xS=aL||function(s){return $n.clearTimeout(s)};function yS(s,u){if(u)return s.slice();var h=s.length,E=H1?H1(h):new s.constructor(h);return s.copy(E),E}function Ig(s){var u=new s.constructor(s.byteLength);return new Md(u).set(new Md(s)),u}function x3(s,u){var h=u?Ig(s.buffer):s.buffer;return new s.constructor(h,s.byteOffset,s.byteLength)}function y3(s){var u=new s.constructor(s.source,hd.exec(s));return u.lastIndex=s.lastIndex,u}function S3(s){return fc?Ht(fc.call(s)):{}}function SS(s,u){var h=u?Ig(s.buffer):s.buffer;return new s.constructor(h,s.byteOffset,s.length)}function ES(s,u){if(s!==u){var h=s!==t,E=s===null,b=s===s,I=ji(s),F=u!==t,z=u===null,V=u===u,ce=ji(u);if(!z&&!ce&&!I&&s>u||I&&F&&V&&!z&&!ce||E&&F&&V||!h&&V||!b)return 1;if(!E&&!I&&!ce&&s<u||ce&&h&&b&&!E&&!I||z&&h&&b||!F&&b||!V)return-1}return 0}function E3(s,u,h){for(var E=-1,b=s.criteria,I=u.criteria,F=b.length,z=h.length;++E<F;){var V=ES(b[E],I[E]);if(V){if(E>=z)return V;var ce=h[E];return V*(ce=="desc"?-1:1)}}return s.index-u.index}function MS(s,u,h,E){for(var b=-1,I=s.length,F=h.length,z=-1,V=u.length,ce=Dn(I-F,0),fe=ne(V+ce),he=!E;++z<V;)fe[z]=u[z];for(;++b<F;)(he||b<I)&&(fe[h[b]]=s[b]);for(;ce--;)fe[z++]=s[b++];return fe}function wS(s,u,h,E){for(var b=-1,I=s.length,F=-1,z=h.length,V=-1,ce=u.length,fe=Dn(I-z,0),he=ne(fe+ce),we=!E;++b<fe;)he[b]=s[b];for(var ze=b;++V<ce;)he[ze+V]=u[V];for(;++F<z;)(we||b<I)&&(he[ze+h[F]]=s[b++]);return he}function Ai(s,u){var h=-1,E=s.length;for(u||(u=ne(E));++h<E;)u[h]=s[h];return u}function sa(s,u,h,E){var b=!h;h||(h={});for(var I=-1,F=u.length;++I<F;){var z=u[I],V=E?E(h[z],s[z],z,h,s):t;V===t&&(V=s[z]),b?Ca(h,z,V):dc(h,z,V)}return h}function M3(s,u){return sa(s,Bg(s),u)}function w3(s,u){return sa(s,FS(s),u)}function kd(s,u){return function(h,E){var b=ut(h)?RP:YL,I=u?u():{};return b(h,s,Ye(E,2),I)}}function Rl(s){return _t(function(u,h){var E=-1,b=h.length,I=b>1?h[b-1]:t,F=b>2?h[2]:t;for(I=s.length>3&&typeof I=="function"?(b--,I):t,F&&pi(h[0],h[1],F)&&(I=b<3?t:I,b=1),u=Ht(u);++E<b;){var z=h[E];z&&s(u,z,E,I)}return u})}function TS(s,u){return function(h,E){if(h==null)return h;if(!Ci(h))return s(h,E);for(var b=h.length,I=u?b:-1,F=Ht(h);(u?I--:++I<b)&&E(F[I],I,F)!==!1;);return h}}function bS(s){return function(u,h,E){for(var b=-1,I=Ht(u),F=E(u),z=F.length;z--;){var V=F[s?z:++b];if(h(I[V],V,I)===!1)break}return u}}function T3(s,u,h){var E=u&_,b=vc(s);function I(){var F=this&&this!==$n&&this instanceof I?b:s;return F.apply(E?h:this,arguments)}return I}function AS(s){return function(u){u=Dt(u);var h=El(u)?zr(u):t,E=h?h[0]:u.charAt(0),b=h?ms(h,1).join(""):u.slice(1);return E[s]()+b}}function Pl(s){return function(u){return rg(TE(wE(u).replace(mP,"")),s,"")}}function vc(s){return function(){var u=arguments;switch(u.length){case 0:return new s;case 1:return new s(u[0]);case 2:return new s(u[0],u[1]);case 3:return new s(u[0],u[1],u[2]);case 4:return new s(u[0],u[1],u[2],u[3]);case 5:return new s(u[0],u[1],u[2],u[3],u[4]);case 6:return new s(u[0],u[1],u[2],u[3],u[4],u[5]);case 7:return new s(u[0],u[1],u[2],u[3],u[4],u[5],u[6])}var h=Cl(s.prototype),E=s.apply(h,u);return sn(E)?E:h}}function b3(s,u,h){var E=vc(s);function b(){for(var I=arguments.length,F=ne(I),z=I,V=Ll(b);z--;)F[z]=arguments[z];var ce=I<3&&F[0]!==V&&F[I-1]!==V?[]:cs(F,V);if(I-=ce.length,I<h)return DS(s,u,zd,b.placeholder,t,F,ce,t,t,h-I);var fe=this&&this!==$n&&this instanceof b?E:s;return Vi(fe,this,F)}return b}function CS(s){return function(u,h,E){var b=Ht(u);if(!Ci(u)){var I=Ye(h,3);u=Hn(u),h=function(z){return I(b[z],z,b)}}var F=s(u,h,E);return F>-1?b[I?u[F]:F]:t}}function RS(s){return Pa(function(u){var h=u.length,E=h,b=xr.prototype.thru;for(s&&u.reverse();E--;){var I=u[E];if(typeof I!="function")throw new _r(o);if(b&&!F&&Wd(I)=="wrapper")var F=new xr([],!0)}for(E=F?E:h;++E<h;){I=u[E];var z=Wd(I),V=z=="wrapper"?kg(I):t;V&&Gg(V[0])&&V[1]==(P|y|A|N)&&!V[4].length&&V[9]==1?F=F[Wd(V[0])].apply(F,V[3]):F=I.length==1&&Gg(I)?F[z]():F.thru(I)}return function(){var ce=arguments,fe=ce[0];if(F&&ce.length==1&&ut(fe))return F.plant(fe).value();for(var he=0,we=h?u[he].apply(this,ce):fe;++he<h;)we=u[he].call(this,we);return we}})}function zd(s,u,h,E,b,I,F,z,V,ce){var fe=u&P,he=u&_,we=u&g,ze=u&(y|w),qe=u&T,gt=we?t:vc(s);function Ke(){for(var St=arguments.length,Tt=ne(St),$i=St;$i--;)Tt[$i]=arguments[$i];if(ze)var mi=Ll(Ke),qi=kP(Tt,mi);if(E&&(Tt=MS(Tt,E,b,ze)),I&&(Tt=wS(Tt,I,F,ze)),St-=qi,ze&&St<ce){var xn=cs(Tt,mi);return DS(s,u,zd,Ke.placeholder,h,Tt,xn,z,V,ce-St)}var Gr=he?h:this,Ua=we?Gr[s]:s;return St=Tt.length,z?Tt=Y3(Tt,z):qe&&St>1&&Tt.reverse(),fe&&V<St&&(Tt.length=V),this&&this!==$n&&this instanceof Ke&&(Ua=gt||vc(Ua)),Ua.apply(Gr,Tt)}return Ke}function PS(s,u){return function(h,E){return e3(h,s,u(E),{})}}function Bd(s,u){return function(h,E){var b;if(h===t&&E===t)return u;if(h!==t&&(b=h),E!==t){if(b===t)return E;typeof h=="string"||typeof E=="string"?(h=Yi(h),E=Yi(E)):(h=mS(h),E=mS(E)),b=s(h,E)}return b}}function Ug(s){return Pa(function(u){return u=nn(u,Xi(Ye())),_t(function(h){var E=this;return s(u,function(b){return Vi(b,E,h)})})})}function Hd(s,u){u=u===t?" ":Yi(u);var h=u.length;if(h<2)return h?Ag(u,s):u;var E=Ag(u,Ad(s/Ml(u)));return El(u)?ms(zr(E),0,s).join(""):E.slice(0,s)}function A3(s,u,h,E){var b=u&_,I=vc(s);function F(){for(var z=-1,V=arguments.length,ce=-1,fe=E.length,he=ne(fe+V),we=this&&this!==$n&&this instanceof F?I:s;++ce<fe;)he[ce]=E[ce];for(;V--;)he[ce++]=arguments[++z];return Vi(we,b?h:this,he)}return F}function LS(s){return function(u,h,E){return E&&typeof E!="number"&&pi(u,h,E)&&(h=E=t),u=Ia(u),h===t?(h=u,u=0):h=Ia(h),E=E===t?u<h?1:-1:Ia(E),d3(u,h,E,s)}}function Gd(s){return function(u,h){return typeof u=="string"&&typeof h=="string"||(u=Mr(u),h=Mr(h)),s(u,h)}}function DS(s,u,h,E,b,I,F,z,V,ce){var fe=u&y,he=fe?F:t,we=fe?t:F,ze=fe?I:t,qe=fe?t:I;u|=fe?A:R,u&=~(fe?R:A),u&S||(u&=~(_|g));var gt=[s,u,b,ze,he,qe,we,z,V,ce],Ke=h.apply(t,gt);return Gg(s)&&VS(Ke,gt),Ke.placeholder=E,XS(Ke,s,u)}function Ng(s){var u=Ln[s];return function(h,E){if(h=Mr(h),E=E==null?0:ni(ht(E),292),E&&X1(h)){var b=(Dt(h)+"e").split("e"),I=u(b[0]+"e"+(+b[1]+E));return b=(Dt(I)+"e").split("e"),+(b[0]+"e"+(+b[1]-E))}return u(h)}}var C3=bl&&1/vd(new bl([,-0]))[1]==se?function(s){return new bl(s)}:iv;function IS(s){return function(u){var h=ii(u);return h==Oe?fg(u):h==q?XP(u):FP(u,s(u))}}function Ra(s,u,h,E,b,I,F,z){var V=u&g;if(!V&&typeof s!="function")throw new _r(o);var ce=E?E.length:0;if(ce||(u&=~(A|R),E=b=t),F=F===t?F:Dn(ht(F),0),z=z===t?z:ht(z),ce-=b?b.length:0,u&R){var fe=E,he=b;E=b=t}var we=V?t:kg(s),ze=[s,u,h,E,b,fe,he,I,F,z];if(we&&W3(ze,we),s=ze[0],u=ze[1],h=ze[2],E=ze[3],b=ze[4],z=ze[9]=ze[9]===t?V?0:s.length:Dn(ze[9]-ce,0),!z&&u&(y|w)&&(u&=~(y|w)),!u||u==_)var qe=T3(s,u,h);else u==y||u==w?qe=b3(s,u,z):(u==A||u==(_|A))&&!b.length?qe=A3(s,u,h,E):qe=zd.apply(t,ze);var gt=we?hS:VS;return XS(gt(qe,ze),s,u)}function US(s,u,h,E){return s===t||Hr(s,Tl[h])&&!Ut.call(E,h)?u:s}function NS(s,u,h,E,b,I){return sn(s)&&sn(u)&&(I.set(u,s),Nd(s,u,t,NS,I),I.delete(u)),s}function R3(s){return yc(s)?t:s}function OS(s,u,h,E,b,I){var F=h&M,z=s.length,V=u.length;if(z!=V&&!(F&&V>z))return!1;var ce=I.get(s),fe=I.get(u);if(ce&&fe)return ce==u&&fe==s;var he=-1,we=!0,ze=h&x?new mo:t;for(I.set(s,u),I.set(u,s);++he<z;){var qe=s[he],gt=u[he];if(E)var Ke=F?E(gt,qe,he,u,s,I):E(qe,gt,he,s,u,I);if(Ke!==t){if(Ke)continue;we=!1;break}if(ze){if(!ag(u,function(St,Tt){if(!sc(ze,Tt)&&(qe===St||b(qe,St,h,E,I)))return ze.push(Tt)})){we=!1;break}}else if(!(qe===gt||b(qe,gt,h,E,I))){we=!1;break}}return I.delete(s),I.delete(u),we}function P3(s,u,h,E,b,I,F){switch(h){case Ve:if(s.byteLength!=u.byteLength||s.byteOffset!=u.byteOffset)return!1;s=s.buffer,u=u.buffer;case Ce:return!(s.byteLength!=u.byteLength||!I(new Md(s),new Md(u)));case et:case nt:case Qe:return Hr(+s,+u);case xt:return s.name==u.name&&s.message==u.message;case D:case ge:return s==u+"";case Oe:var z=fg;case q:var V=E&M;if(z||(z=vd),s.size!=u.size&&!V)return!1;var ce=F.get(s);if(ce)return ce==u;E|=x,F.set(s,u);var fe=OS(z(s),z(u),E,b,I,F);return F.delete(s),fe;case pe:if(fc)return fc.call(s)==fc.call(u)}return!1}function L3(s,u,h,E,b,I){var F=h&M,z=Og(s),V=z.length,ce=Og(u),fe=ce.length;if(V!=fe&&!F)return!1;for(var he=V;he--;){var we=z[he];if(!(F?we in u:Ut.call(u,we)))return!1}var ze=I.get(s),qe=I.get(u);if(ze&&qe)return ze==u&&qe==s;var gt=!0;I.set(s,u),I.set(u,s);for(var Ke=F;++he<V;){we=z[he];var St=s[we],Tt=u[we];if(E)var $i=F?E(Tt,St,we,u,s,I):E(St,Tt,we,s,u,I);if(!($i===t?St===Tt||b(St,Tt,h,E,I):$i)){gt=!1;break}Ke||(Ke=we=="constructor")}if(gt&&!Ke){var mi=s.constructor,qi=u.constructor;mi!=qi&&"constructor"in s&&"constructor"in u&&!(typeof mi=="function"&&mi instanceof mi&&typeof qi=="function"&&qi instanceof qi)&&(gt=!1)}return I.delete(s),I.delete(u),gt}function Pa(s){return Vg(GS(s,t,ZS),s+"")}function Og(s){return nS(s,Hn,Bg)}function Fg(s){return nS(s,Ri,FS)}var kg=Rd?function(s){return Rd.get(s)}:iv;function Wd(s){for(var u=s.name+"",h=Al[u],E=Ut.call(Al,u)?h.length:0;E--;){var b=h[E],I=b.func;if(I==null||I==s)return b.name}return u}function Ll(s){var u=Ut.call(L,"placeholder")?L:s;return u.placeholder}function Ye(){var s=L.iteratee||tv;return s=s===tv?aS:s,arguments.length?s(arguments[0],arguments[1]):s}function Vd(s,u){var h=s.__data__;return z3(u)?h[typeof u=="string"?"string":"hash"]:h.map}function zg(s){for(var u=Hn(s),h=u.length;h--;){var E=u[h],b=s[E];u[h]=[E,b,BS(b)]}return u}function _o(s,u){var h=GP(s,u);return rS(h)?h:t}function D3(s){var u=Ut.call(s,ho),h=s[ho];try{s[ho]=t;var E=!0}catch{}var b=Sd.call(s);return E&&(u?s[ho]=h:delete s[ho]),b}var Bg=hg?function(s){return s==null?[]:(s=Ht(s),ls(hg(s),function(u){return W1.call(s,u)}))}:rv,FS=hg?function(s){for(var u=[];s;)us(u,Bg(s)),s=wd(s);return u}:rv,ii=hi;(pg&&ii(new pg(new ArrayBuffer(1)))!=Ve||lc&&ii(new lc)!=Oe||mg&&ii(mg.resolve())!=ct||bl&&ii(new bl)!=q||uc&&ii(new uc)!=Fe)&&(ii=function(s){var u=hi(s),h=u==At?s.constructor:t,E=h?xo(h):"";if(E)switch(E){case pL:return Ve;case mL:return Oe;case gL:return ct;case vL:return q;case _L:return Fe}return u});function I3(s,u,h){for(var E=-1,b=h.length;++E<b;){var I=h[E],F=I.size;switch(I.type){case"drop":s+=F;break;case"dropRight":u-=F;break;case"take":u=ni(u,s+F);break;case"takeRight":s=Dn(s,u-F);break}}return{start:s,end:u}}function U3(s){var u=s.match(cd);return u?u[1].split(gl):[]}function kS(s,u,h){u=ps(u,s);for(var E=-1,b=u.length,I=!1;++E<b;){var F=oa(u[E]);if(!(I=s!=null&&h(s,F)))break;s=s[F]}return I||++E!=b?I:(b=s==null?0:s.length,!!b&&Zd(b)&&La(F,b)&&(ut(s)||yo(s)))}function N3(s){var u=s.length,h=new s.constructor(u);return u&&typeof s[0]=="string"&&Ut.call(s,"index")&&(h.index=s.index,h.input=s.input),h}function zS(s){return typeof s.constructor=="function"&&!_c(s)?Cl(wd(s)):{}}function O3(s,u,h){var E=s.constructor;switch(u){case Ce:return Ig(s);case et:case nt:return new E(+s);case Ve:return x3(s,h);case ot:case me:case Pt:case ft:case tt:case We:case Ie:case it:case Ct:return SS(s,h);case Oe:return new E;case Qe:case ge:return new E(s);case D:return y3(s);case q:return new E;case pe:return S3(s)}}function F3(s,u){var h=u.length;if(!h)return s;var E=h-1;return u[E]=(h>1?"& ":"")+u[E],u=u.join(h>2?", ":" "),s.replace(ml,`{
/* [wrapped with `+u+`] */
`)}function k3(s){return ut(s)||yo(s)||!!(V1&&s&&s[V1])}function La(s,u){var h=typeof s;return u=u??H,!!u&&(h=="number"||h!="symbol"&&ee.test(s))&&s>-1&&s%1==0&&s<u}function pi(s,u,h){if(!sn(h))return!1;var E=typeof u;return(E=="number"?Ci(h)&&La(u,h.length):E=="string"&&u in h)?Hr(h[u],s):!1}function Hg(s,u){if(ut(s))return!1;var h=typeof s;return h=="number"||h=="symbol"||h=="boolean"||s==null||ji(s)?!0:jn.test(s)||!En.test(s)||u!=null&&s in Ht(u)}function z3(s){var u=typeof s;return u=="string"||u=="number"||u=="symbol"||u=="boolean"?s!=="__proto__":s===null}function Gg(s){var u=Wd(s),h=L[u];if(typeof h!="function"||!(u in Mt.prototype))return!1;if(s===h)return!0;var E=kg(h);return!!E&&s===E[0]}function B3(s){return!!B1&&B1 in s}var H3=xd?Da:av;function _c(s){var u=s&&s.constructor,h=typeof u=="function"&&u.prototype||Tl;return s===h}function BS(s){return s===s&&!sn(s)}function HS(s,u){return function(h){return h==null?!1:h[s]===u&&(u!==t||s in Ht(h))}}function G3(s){var u=qd(s,function(E){return h.size===f&&h.clear(),E}),h=u.cache;return u}function W3(s,u){var h=s[1],E=u[1],b=h|E,I=b<(_|g|P),F=E==P&&h==y||E==P&&h==N&&s[7].length<=u[8]||E==(P|N)&&u[7].length<=u[8]&&h==y;if(!(I||F))return s;E&_&&(s[2]=u[2],b|=h&_?0:S);var z=u[3];if(z){var V=s[3];s[3]=V?MS(V,z,u[4]):z,s[4]=V?cs(s[3],d):u[4]}return z=u[5],z&&(V=s[5],s[5]=V?wS(V,z,u[6]):z,s[6]=V?cs(s[5],d):u[6]),z=u[7],z&&(s[7]=z),E&P&&(s[8]=s[8]==null?u[8]:ni(s[8],u[8])),s[9]==null&&(s[9]=u[9]),s[0]=u[0],s[1]=b,s}function V3(s){var u=[];if(s!=null)for(var h in Ht(s))u.push(h);return u}function X3(s){return Sd.call(s)}function GS(s,u,h){return u=Dn(u===t?s.length-1:u,0),function(){for(var E=arguments,b=-1,I=Dn(E.length-u,0),F=ne(I);++b<I;)F[b]=E[u+b];b=-1;for(var z=ne(u+1);++b<u;)z[b]=E[b];return z[u]=h(F),Vi(s,this,z)}}function WS(s,u){return u.length<2?s:vo(s,Sr(u,0,-1))}function Y3(s,u){for(var h=s.length,E=ni(u.length,h),b=Ai(s);E--;){var I=u[E];s[E]=La(I,h)?b[I]:t}return s}function Wg(s,u){if(!(u==="constructor"&&typeof s[u]=="function")&&u!="__proto__")return s[u]}var VS=YS(hS),xc=oL||function(s,u){return $n.setTimeout(s,u)},Vg=YS(m3);function XS(s,u,h){var E=u+"";return Vg(s,F3(E,j3(U3(E),h)))}function YS(s){var u=0,h=0;return function(){var E=fL(),b=ae-(E-h);if(h=E,b>0){if(++u>=X)return arguments[0]}else u=0;return s.apply(t,arguments)}}function Xd(s,u){var h=-1,E=s.length,b=E-1;for(u=u===t?E:u;++h<u;){var I=bg(h,b),F=s[I];s[I]=s[h],s[h]=F}return s.length=u,s}var jS=G3(function(s){var u=[];return s.charCodeAt(0)===46&&u.push(""),s.replace(kt,function(h,E,b,I){u.push(b?I.replace(Km,"$1"):E||h)}),u});function oa(s){if(typeof s=="string"||ji(s))return s;var u=s+"";return u=="0"&&1/s==-se?"-0":u}function xo(s){if(s!=null){try{return yd.call(s)}catch{}try{return s+""}catch{}}return""}function j3(s,u){return vr(ue,function(h){var E="_."+h[0];u&h[1]&&!md(s,E)&&s.push(E)}),s.sort()}function $S(s){if(s instanceof Mt)return s.clone();var u=new xr(s.__wrapped__,s.__chain__);return u.__actions__=Ai(s.__actions__),u.__index__=s.__index__,u.__values__=s.__values__,u}function $3(s,u,h){(h?pi(s,u,h):u===t)?u=1:u=Dn(ht(u),0);var E=s==null?0:s.length;if(!E||u<1)return[];for(var b=0,I=0,F=ne(Ad(E/u));b<E;)F[I++]=Sr(s,b,b+=u);return F}function q3(s){for(var u=-1,h=s==null?0:s.length,E=0,b=[];++u<h;){var I=s[u];I&&(b[E++]=I)}return b}function K3(){var s=arguments.length;if(!s)return[];for(var u=ne(s-1),h=arguments[0],E=s;E--;)u[E-1]=arguments[E];return us(ut(h)?Ai(h):[h],qn(u,1))}var Z3=_t(function(s,u){return _n(s)?hc(s,qn(u,1,_n,!0)):[]}),Q3=_t(function(s,u){var h=Er(u);return _n(h)&&(h=t),_n(s)?hc(s,qn(u,1,_n,!0),Ye(h,2)):[]}),J3=_t(function(s,u){var h=Er(u);return _n(h)&&(h=t),_n(s)?hc(s,qn(u,1,_n,!0),t,h):[]});function eD(s,u,h){var E=s==null?0:s.length;return E?(u=h||u===t?1:ht(u),Sr(s,u<0?0:u,E)):[]}function tD(s,u,h){var E=s==null?0:s.length;return E?(u=h||u===t?1:ht(u),u=E-u,Sr(s,0,u<0?0:u)):[]}function nD(s,u){return s&&s.length?Fd(s,Ye(u,3),!0,!0):[]}function iD(s,u){return s&&s.length?Fd(s,Ye(u,3),!0):[]}function rD(s,u,h,E){var b=s==null?0:s.length;return b?(h&&typeof h!="number"&&pi(s,u,h)&&(h=0,E=b),KL(s,u,h,E)):[]}function qS(s,u,h){var E=s==null?0:s.length;if(!E)return-1;var b=h==null?0:ht(h);return b<0&&(b=Dn(E+b,0)),gd(s,Ye(u,3),b)}function KS(s,u,h){var E=s==null?0:s.length;if(!E)return-1;var b=E-1;return h!==t&&(b=ht(h),b=h<0?Dn(E+b,0):ni(b,E-1)),gd(s,Ye(u,3),b,!0)}function ZS(s){var u=s==null?0:s.length;return u?qn(s,1):[]}function aD(s){var u=s==null?0:s.length;return u?qn(s,se):[]}function sD(s,u){var h=s==null?0:s.length;return h?(u=u===t?1:ht(u),qn(s,u)):[]}function oD(s){for(var u=-1,h=s==null?0:s.length,E={};++u<h;){var b=s[u];E[b[0]]=b[1]}return E}function QS(s){return s&&s.length?s[0]:t}function lD(s,u,h){var E=s==null?0:s.length;if(!E)return-1;var b=h==null?0:ht(h);return b<0&&(b=Dn(E+b,0)),Sl(s,u,b)}function uD(s){var u=s==null?0:s.length;return u?Sr(s,0,-1):[]}var cD=_t(function(s){var u=nn(s,Lg);return u.length&&u[0]===s[0]?Sg(u):[]}),fD=_t(function(s){var u=Er(s),h=nn(s,Lg);return u===Er(h)?u=t:h.pop(),h.length&&h[0]===s[0]?Sg(h,Ye(u,2)):[]}),dD=_t(function(s){var u=Er(s),h=nn(s,Lg);return u=typeof u=="function"?u:t,u&&h.pop(),h.length&&h[0]===s[0]?Sg(h,t,u):[]});function hD(s,u){return s==null?"":uL.call(s,u)}function Er(s){var u=s==null?0:s.length;return u?s[u-1]:t}function pD(s,u,h){var E=s==null?0:s.length;if(!E)return-1;var b=E;return h!==t&&(b=ht(h),b=b<0?Dn(E+b,0):ni(b,E-1)),u===u?jP(s,u,b):gd(s,D1,b,!0)}function mD(s,u){return s&&s.length?uS(s,ht(u)):t}var gD=_t(JS);function JS(s,u){return s&&s.length&&u&&u.length?Tg(s,u):s}function vD(s,u,h){return s&&s.length&&u&&u.length?Tg(s,u,Ye(h,2)):s}function _D(s,u,h){return s&&s.length&&u&&u.length?Tg(s,u,t,h):s}var xD=Pa(function(s,u){var h=s==null?0:s.length,E=vg(s,u);return dS(s,nn(u,function(b){return La(b,h)?+b:b}).sort(ES)),E});function yD(s,u){var h=[];if(!(s&&s.length))return h;var E=-1,b=[],I=s.length;for(u=Ye(u,3);++E<I;){var F=s[E];u(F,E,s)&&(h.push(F),b.push(E))}return dS(s,b),h}function Xg(s){return s==null?s:hL.call(s)}function SD(s,u,h){var E=s==null?0:s.length;return E?(h&&typeof h!="number"&&pi(s,u,h)?(u=0,h=E):(u=u==null?0:ht(u),h=h===t?E:ht(h)),Sr(s,u,h)):[]}function ED(s,u){return Od(s,u)}function MD(s,u,h){return Cg(s,u,Ye(h,2))}function wD(s,u){var h=s==null?0:s.length;if(h){var E=Od(s,u);if(E<h&&Hr(s[E],u))return E}return-1}function TD(s,u){return Od(s,u,!0)}function bD(s,u,h){return Cg(s,u,Ye(h,2),!0)}function AD(s,u){var h=s==null?0:s.length;if(h){var E=Od(s,u,!0)-1;if(Hr(s[E],u))return E}return-1}function CD(s){return s&&s.length?pS(s):[]}function RD(s,u){return s&&s.length?pS(s,Ye(u,2)):[]}function PD(s){var u=s==null?0:s.length;return u?Sr(s,1,u):[]}function LD(s,u,h){return s&&s.length?(u=h||u===t?1:ht(u),Sr(s,0,u<0?0:u)):[]}function DD(s,u,h){var E=s==null?0:s.length;return E?(u=h||u===t?1:ht(u),u=E-u,Sr(s,u<0?0:u,E)):[]}function ID(s,u){return s&&s.length?Fd(s,Ye(u,3),!1,!0):[]}function UD(s,u){return s&&s.length?Fd(s,Ye(u,3)):[]}var ND=_t(function(s){return hs(qn(s,1,_n,!0))}),OD=_t(function(s){var u=Er(s);return _n(u)&&(u=t),hs(qn(s,1,_n,!0),Ye(u,2))}),FD=_t(function(s){var u=Er(s);return u=typeof u=="function"?u:t,hs(qn(s,1,_n,!0),t,u)});function kD(s){return s&&s.length?hs(s):[]}function zD(s,u){return s&&s.length?hs(s,Ye(u,2)):[]}function BD(s,u){return u=typeof u=="function"?u:t,s&&s.length?hs(s,t,u):[]}function Yg(s){if(!(s&&s.length))return[];var u=0;return s=ls(s,function(h){if(_n(h))return u=Dn(h.length,u),!0}),ug(u,function(h){return nn(s,sg(h))})}function eE(s,u){if(!(s&&s.length))return[];var h=Yg(s);return u==null?h:nn(h,function(E){return Vi(u,t,E)})}var HD=_t(function(s,u){return _n(s)?hc(s,u):[]}),GD=_t(function(s){return Pg(ls(s,_n))}),WD=_t(function(s){var u=Er(s);return _n(u)&&(u=t),Pg(ls(s,_n),Ye(u,2))}),VD=_t(function(s){var u=Er(s);return u=typeof u=="function"?u:t,Pg(ls(s,_n),t,u)}),XD=_t(Yg);function YD(s,u){return _S(s||[],u||[],dc)}function jD(s,u){return _S(s||[],u||[],gc)}var $D=_t(function(s){var u=s.length,h=u>1?s[u-1]:t;return h=typeof h=="function"?(s.pop(),h):t,eE(s,h)});function tE(s){var u=L(s);return u.__chain__=!0,u}function qD(s,u){return u(s),s}function Yd(s,u){return u(s)}var KD=Pa(function(s){var u=s.length,h=u?s[0]:0,E=this.__wrapped__,b=function(I){return vg(I,s)};return u>1||this.__actions__.length||!(E instanceof Mt)||!La(h)?this.thru(b):(E=E.slice(h,+h+(u?1:0)),E.__actions__.push({func:Yd,args:[b],thisArg:t}),new xr(E,this.__chain__).thru(function(I){return u&&!I.length&&I.push(t),I}))});function ZD(){return tE(this)}function QD(){return new xr(this.value(),this.__chain__)}function JD(){this.__values__===t&&(this.__values__=mE(this.value()));var s=this.__index__>=this.__values__.length,u=s?t:this.__values__[this.__index__++];return{done:s,value:u}}function eI(){return this}function tI(s){for(var u,h=this;h instanceof Ld;){var E=$S(h);E.__index__=0,E.__values__=t,u?b.__wrapped__=E:u=E;var b=E;h=h.__wrapped__}return b.__wrapped__=s,u}function nI(){var s=this.__wrapped__;if(s instanceof Mt){var u=s;return this.__actions__.length&&(u=new Mt(this)),u=u.reverse(),u.__actions__.push({func:Yd,args:[Xg],thisArg:t}),new xr(u,this.__chain__)}return this.thru(Xg)}function iI(){return vS(this.__wrapped__,this.__actions__)}var rI=kd(function(s,u,h){Ut.call(s,h)?++s[h]:Ca(s,h,1)});function aI(s,u,h){var E=ut(s)?P1:qL;return h&&pi(s,u,h)&&(u=t),E(s,Ye(u,3))}function sI(s,u){var h=ut(s)?ls:eS;return h(s,Ye(u,3))}var oI=CS(qS),lI=CS(KS);function uI(s,u){return qn(jd(s,u),1)}function cI(s,u){return qn(jd(s,u),se)}function fI(s,u,h){return h=h===t?1:ht(h),qn(jd(s,u),h)}function nE(s,u){var h=ut(s)?vr:ds;return h(s,Ye(u,3))}function iE(s,u){var h=ut(s)?PP:J1;return h(s,Ye(u,3))}var dI=kd(function(s,u,h){Ut.call(s,h)?s[h].push(u):Ca(s,h,[u])});function hI(s,u,h,E){s=Ci(s)?s:Il(s),h=h&&!E?ht(h):0;var b=s.length;return h<0&&(h=Dn(b+h,0)),Qd(s)?h<=b&&s.indexOf(u,h)>-1:!!b&&Sl(s,u,h)>-1}var pI=_t(function(s,u,h){var E=-1,b=typeof u=="function",I=Ci(s)?ne(s.length):[];return ds(s,function(F){I[++E]=b?Vi(u,F,h):pc(F,u,h)}),I}),mI=kd(function(s,u,h){Ca(s,h,u)});function jd(s,u){var h=ut(s)?nn:sS;return h(s,Ye(u,3))}function gI(s,u,h,E){return s==null?[]:(ut(u)||(u=u==null?[]:[u]),h=E?t:h,ut(h)||(h=h==null?[]:[h]),cS(s,u,h))}var vI=kd(function(s,u,h){s[h?0:1].push(u)},function(){return[[],[]]});function _I(s,u,h){var E=ut(s)?rg:U1,b=arguments.length<3;return E(s,Ye(u,4),h,b,ds)}function xI(s,u,h){var E=ut(s)?LP:U1,b=arguments.length<3;return E(s,Ye(u,4),h,b,J1)}function yI(s,u){var h=ut(s)?ls:eS;return h(s,Kd(Ye(u,3)))}function SI(s){var u=ut(s)?q1:h3;return u(s)}function EI(s,u,h){(h?pi(s,u,h):u===t)?u=1:u=ht(u);var E=ut(s)?VL:p3;return E(s,u)}function MI(s){var u=ut(s)?XL:g3;return u(s)}function wI(s){if(s==null)return 0;if(Ci(s))return Qd(s)?Ml(s):s.length;var u=ii(s);return u==Oe||u==q?s.size:Mg(s).length}function TI(s,u,h){var E=ut(s)?ag:v3;return h&&pi(s,u,h)&&(u=t),E(s,Ye(u,3))}var bI=_t(function(s,u){if(s==null)return[];var h=u.length;return h>1&&pi(s,u[0],u[1])?u=[]:h>2&&pi(u[0],u[1],u[2])&&(u=[u[0]]),cS(s,qn(u,1),[])}),$d=sL||function(){return $n.Date.now()};function AI(s,u){if(typeof u!="function")throw new _r(o);return s=ht(s),function(){if(--s<1)return u.apply(this,arguments)}}function rE(s,u,h){return u=h?t:u,u=s&&u==null?s.length:u,Ra(s,P,t,t,t,t,u)}function aE(s,u){var h;if(typeof u!="function")throw new _r(o);return s=ht(s),function(){return--s>0&&(h=u.apply(this,arguments)),s<=1&&(u=t),h}}var jg=_t(function(s,u,h){var E=_;if(h.length){var b=cs(h,Ll(jg));E|=A}return Ra(s,E,u,h,b)}),sE=_t(function(s,u,h){var E=_|g;if(h.length){var b=cs(h,Ll(sE));E|=A}return Ra(u,E,s,h,b)});function oE(s,u,h){u=h?t:u;var E=Ra(s,y,t,t,t,t,t,u);return E.placeholder=oE.placeholder,E}function lE(s,u,h){u=h?t:u;var E=Ra(s,w,t,t,t,t,t,u);return E.placeholder=lE.placeholder,E}function uE(s,u,h){var E,b,I,F,z,V,ce=0,fe=!1,he=!1,we=!0;if(typeof s!="function")throw new _r(o);u=Mr(u)||0,sn(h)&&(fe=!!h.leading,he="maxWait"in h,I=he?Dn(Mr(h.maxWait)||0,u):I,we="trailing"in h?!!h.trailing:we);function ze(xn){var Gr=E,Ua=b;return E=b=t,ce=xn,F=s.apply(Ua,Gr),F}function qe(xn){return ce=xn,z=xc(St,u),fe?ze(xn):F}function gt(xn){var Gr=xn-V,Ua=xn-ce,CE=u-Gr;return he?ni(CE,I-Ua):CE}function Ke(xn){var Gr=xn-V,Ua=xn-ce;return V===t||Gr>=u||Gr<0||he&&Ua>=I}function St(){var xn=$d();if(Ke(xn))return Tt(xn);z=xc(St,gt(xn))}function Tt(xn){return z=t,we&&E?ze(xn):(E=b=t,F)}function $i(){z!==t&&xS(z),ce=0,E=V=b=z=t}function mi(){return z===t?F:Tt($d())}function qi(){var xn=$d(),Gr=Ke(xn);if(E=arguments,b=this,V=xn,Gr){if(z===t)return qe(V);if(he)return xS(z),z=xc(St,u),ze(V)}return z===t&&(z=xc(St,u)),F}return qi.cancel=$i,qi.flush=mi,qi}var CI=_t(function(s,u){return Q1(s,1,u)}),RI=_t(function(s,u,h){return Q1(s,Mr(u)||0,h)});function PI(s){return Ra(s,T)}function qd(s,u){if(typeof s!="function"||u!=null&&typeof u!="function")throw new _r(o);var h=function(){var E=arguments,b=u?u.apply(this,E):E[0],I=h.cache;if(I.has(b))return I.get(b);var F=s.apply(this,E);return h.cache=I.set(b,F)||I,F};return h.cache=new(qd.Cache||Aa),h}qd.Cache=Aa;function Kd(s){if(typeof s!="function")throw new _r(o);return function(){var u=arguments;switch(u.length){case 0:return!s.call(this);case 1:return!s.call(this,u[0]);case 2:return!s.call(this,u[0],u[1]);case 3:return!s.call(this,u[0],u[1],u[2])}return!s.apply(this,u)}}function LI(s){return aE(2,s)}var DI=_3(function(s,u){u=u.length==1&&ut(u[0])?nn(u[0],Xi(Ye())):nn(qn(u,1),Xi(Ye()));var h=u.length;return _t(function(E){for(var b=-1,I=ni(E.length,h);++b<I;)E[b]=u[b].call(this,E[b]);return Vi(s,this,E)})}),$g=_t(function(s,u){var h=cs(u,Ll($g));return Ra(s,A,t,u,h)}),cE=_t(function(s,u){var h=cs(u,Ll(cE));return Ra(s,R,t,u,h)}),II=Pa(function(s,u){return Ra(s,N,t,t,t,u)});function UI(s,u){if(typeof s!="function")throw new _r(o);return u=u===t?u:ht(u),_t(s,u)}function NI(s,u){if(typeof s!="function")throw new _r(o);return u=u==null?0:Dn(ht(u),0),_t(function(h){var E=h[u],b=ms(h,0,u);return E&&us(b,E),Vi(s,this,b)})}function OI(s,u,h){var E=!0,b=!0;if(typeof s!="function")throw new _r(o);return sn(h)&&(E="leading"in h?!!h.leading:E,b="trailing"in h?!!h.trailing:b),uE(s,u,{leading:E,maxWait:u,trailing:b})}function FI(s){return rE(s,1)}function kI(s,u){return $g(Dg(u),s)}function zI(){if(!arguments.length)return[];var s=arguments[0];return ut(s)?s:[s]}function BI(s){return yr(s,v)}function HI(s,u){return u=typeof u=="function"?u:t,yr(s,v,u)}function GI(s){return yr(s,p|v)}function WI(s,u){return u=typeof u=="function"?u:t,yr(s,p|v,u)}function VI(s,u){return u==null||Z1(s,u,Hn(u))}function Hr(s,u){return s===u||s!==s&&u!==u}var XI=Gd(yg),YI=Gd(function(s,u){return s>=u}),yo=iS(function(){return arguments}())?iS:function(s){return hn(s)&&Ut.call(s,"callee")&&!W1.call(s,"callee")},ut=ne.isArray,jI=w1?Xi(w1):t3;function Ci(s){return s!=null&&Zd(s.length)&&!Da(s)}function _n(s){return hn(s)&&Ci(s)}function $I(s){return s===!0||s===!1||hn(s)&&hi(s)==et}var gs=lL||av,qI=T1?Xi(T1):n3;function KI(s){return hn(s)&&s.nodeType===1&&!yc(s)}function ZI(s){if(s==null)return!0;if(Ci(s)&&(ut(s)||typeof s=="string"||typeof s.splice=="function"||gs(s)||Dl(s)||yo(s)))return!s.length;var u=ii(s);if(u==Oe||u==q)return!s.size;if(_c(s))return!Mg(s).length;for(var h in s)if(Ut.call(s,h))return!1;return!0}function QI(s,u){return mc(s,u)}function JI(s,u,h){h=typeof h=="function"?h:t;var E=h?h(s,u):t;return E===t?mc(s,u,t,h):!!E}function qg(s){if(!hn(s))return!1;var u=hi(s);return u==xt||u==Ze||typeof s.message=="string"&&typeof s.name=="string"&&!yc(s)}function eU(s){return typeof s=="number"&&X1(s)}function Da(s){if(!sn(s))return!1;var u=hi(s);return u==J||u==Bn||u==Ne||u==O}function fE(s){return typeof s=="number"&&s==ht(s)}function Zd(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=H}function sn(s){var u=typeof s;return s!=null&&(u=="object"||u=="function")}function hn(s){return s!=null&&typeof s=="object"}var dE=b1?Xi(b1):r3;function tU(s,u){return s===u||Eg(s,u,zg(u))}function nU(s,u,h){return h=typeof h=="function"?h:t,Eg(s,u,zg(u),h)}function iU(s){return hE(s)&&s!=+s}function rU(s){if(H3(s))throw new at(a);return rS(s)}function aU(s){return s===null}function sU(s){return s==null}function hE(s){return typeof s=="number"||hn(s)&&hi(s)==Qe}function yc(s){if(!hn(s)||hi(s)!=At)return!1;var u=wd(s);if(u===null)return!0;var h=Ut.call(u,"constructor")&&u.constructor;return typeof h=="function"&&h instanceof h&&yd.call(h)==nL}var Kg=A1?Xi(A1):a3;function oU(s){return fE(s)&&s>=-H&&s<=H}var pE=C1?Xi(C1):s3;function Qd(s){return typeof s=="string"||!ut(s)&&hn(s)&&hi(s)==ge}function ji(s){return typeof s=="symbol"||hn(s)&&hi(s)==pe}var Dl=R1?Xi(R1):o3;function lU(s){return s===t}function uU(s){return hn(s)&&ii(s)==Fe}function cU(s){return hn(s)&&hi(s)==be}var fU=Gd(wg),dU=Gd(function(s,u){return s<=u});function mE(s){if(!s)return[];if(Ci(s))return Qd(s)?zr(s):Ai(s);if(oc&&s[oc])return VP(s[oc]());var u=ii(s),h=u==Oe?fg:u==q?vd:Il;return h(s)}function Ia(s){if(!s)return s===0?s:0;if(s=Mr(s),s===se||s===-se){var u=s<0?-1:1;return u*Z}return s===s?s:0}function ht(s){var u=Ia(s),h=u%1;return u===u?h?u-h:u:0}function gE(s){return s?go(ht(s),0,le):0}function Mr(s){if(typeof s=="number")return s;if(ji(s))return Q;if(sn(s)){var u=typeof s.valueOf=="function"?s.valueOf():s;s=sn(u)?u+"":u}if(typeof s!="string")return s===0?s:+s;s=N1(s);var h=$.test(s);return h||ie.test(s)?AP(s.slice(2),h?2:8):U.test(s)?Q:+s}function vE(s){return sa(s,Ri(s))}function hU(s){return s?go(ht(s),-H,H):s===0?s:0}function Dt(s){return s==null?"":Yi(s)}var pU=Rl(function(s,u){if(_c(u)||Ci(u)){sa(u,Hn(u),s);return}for(var h in u)Ut.call(u,h)&&dc(s,h,u[h])}),_E=Rl(function(s,u){sa(u,Ri(u),s)}),Jd=Rl(function(s,u,h,E){sa(u,Ri(u),s,E)}),mU=Rl(function(s,u,h,E){sa(u,Hn(u),s,E)}),gU=Pa(vg);function vU(s,u){var h=Cl(s);return u==null?h:K1(h,u)}var _U=_t(function(s,u){s=Ht(s);var h=-1,E=u.length,b=E>2?u[2]:t;for(b&&pi(u[0],u[1],b)&&(E=1);++h<E;)for(var I=u[h],F=Ri(I),z=-1,V=F.length;++z<V;){var ce=F[z],fe=s[ce];(fe===t||Hr(fe,Tl[ce])&&!Ut.call(s,ce))&&(s[ce]=I[ce])}return s}),xU=_t(function(s){return s.push(t,NS),Vi(xE,t,s)});function yU(s,u){return L1(s,Ye(u,3),aa)}function SU(s,u){return L1(s,Ye(u,3),xg)}function EU(s,u){return s==null?s:_g(s,Ye(u,3),Ri)}function MU(s,u){return s==null?s:tS(s,Ye(u,3),Ri)}function wU(s,u){return s&&aa(s,Ye(u,3))}function TU(s,u){return s&&xg(s,Ye(u,3))}function bU(s){return s==null?[]:Ud(s,Hn(s))}function AU(s){return s==null?[]:Ud(s,Ri(s))}function Zg(s,u,h){var E=s==null?t:vo(s,u);return E===t?h:E}function CU(s,u){return s!=null&&kS(s,u,ZL)}function Qg(s,u){return s!=null&&kS(s,u,QL)}var RU=PS(function(s,u,h){u!=null&&typeof u.toString!="function"&&(u=Sd.call(u)),s[u]=h},ev(Pi)),PU=PS(function(s,u,h){u!=null&&typeof u.toString!="function"&&(u=Sd.call(u)),Ut.call(s,u)?s[u].push(h):s[u]=[h]},Ye),LU=_t(pc);function Hn(s){return Ci(s)?$1(s):Mg(s)}function Ri(s){return Ci(s)?$1(s,!0):l3(s)}function DU(s,u){var h={};return u=Ye(u,3),aa(s,function(E,b,I){Ca(h,u(E,b,I),E)}),h}function IU(s,u){var h={};return u=Ye(u,3),aa(s,function(E,b,I){Ca(h,b,u(E,b,I))}),h}var UU=Rl(function(s,u,h){Nd(s,u,h)}),xE=Rl(function(s,u,h,E){Nd(s,u,h,E)}),NU=Pa(function(s,u){var h={};if(s==null)return h;var E=!1;u=nn(u,function(I){return I=ps(I,s),E||(E=I.length>1),I}),sa(s,Fg(s),h),E&&(h=yr(h,p|m|v,R3));for(var b=u.length;b--;)Rg(h,u[b]);return h});function OU(s,u){return yE(s,Kd(Ye(u)))}var FU=Pa(function(s,u){return s==null?{}:c3(s,u)});function yE(s,u){if(s==null)return{};var h=nn(Fg(s),function(E){return[E]});return u=Ye(u),fS(s,h,function(E,b){return u(E,b[0])})}function kU(s,u,h){u=ps(u,s);var E=-1,b=u.length;for(b||(b=1,s=t);++E<b;){var I=s==null?t:s[oa(u[E])];I===t&&(E=b,I=h),s=Da(I)?I.call(s):I}return s}function zU(s,u,h){return s==null?s:gc(s,u,h)}function BU(s,u,h,E){return E=typeof E=="function"?E:t,s==null?s:gc(s,u,h,E)}var SE=IS(Hn),EE=IS(Ri);function HU(s,u,h){var E=ut(s),b=E||gs(s)||Dl(s);if(u=Ye(u,4),h==null){var I=s&&s.constructor;b?h=E?new I:[]:sn(s)?h=Da(I)?Cl(wd(s)):{}:h={}}return(b?vr:aa)(s,function(F,z,V){return u(h,F,z,V)}),h}function GU(s,u){return s==null?!0:Rg(s,u)}function WU(s,u,h){return s==null?s:gS(s,u,Dg(h))}function VU(s,u,h,E){return E=typeof E=="function"?E:t,s==null?s:gS(s,u,Dg(h),E)}function Il(s){return s==null?[]:cg(s,Hn(s))}function XU(s){return s==null?[]:cg(s,Ri(s))}function YU(s,u,h){return h===t&&(h=u,u=t),h!==t&&(h=Mr(h),h=h===h?h:0),u!==t&&(u=Mr(u),u=u===u?u:0),go(Mr(s),u,h)}function jU(s,u,h){return u=Ia(u),h===t?(h=u,u=0):h=Ia(h),s=Mr(s),JL(s,u,h)}function $U(s,u,h){if(h&&typeof h!="boolean"&&pi(s,u,h)&&(u=h=t),h===t&&(typeof u=="boolean"?(h=u,u=t):typeof s=="boolean"&&(h=s,s=t)),s===t&&u===t?(s=0,u=1):(s=Ia(s),u===t?(u=s,s=0):u=Ia(u)),s>u){var E=s;s=u,u=E}if(h||s%1||u%1){var b=Y1();return ni(s+b*(u-s+bP("1e-"+((b+"").length-1))),u)}return bg(s,u)}var qU=Pl(function(s,u,h){return u=u.toLowerCase(),s+(h?ME(u):u)});function ME(s){return Jg(Dt(s).toLowerCase())}function wE(s){return s=Dt(s),s&&s.replace(Ae,zP).replace(gP,"")}function KU(s,u,h){s=Dt(s),u=Yi(u);var E=s.length;h=h===t?E:go(ht(h),0,E);var b=h;return h-=u.length,h>=0&&s.slice(h,b)==u}function ZU(s){return s=Dt(s),s&&Je.test(s)?s.replace(Ee,BP):s}function QU(s){return s=Dt(s),s&&pr.test(s)?s.replace(Rn,"\\$&"):s}var JU=Pl(function(s,u,h){return s+(h?"-":"")+u.toLowerCase()}),eN=Pl(function(s,u,h){return s+(h?" ":"")+u.toLowerCase()}),tN=AS("toLowerCase");function nN(s,u,h){s=Dt(s),u=ht(u);var E=u?Ml(s):0;if(!u||E>=u)return s;var b=(u-E)/2;return Hd(Cd(b),h)+s+Hd(Ad(b),h)}function iN(s,u,h){s=Dt(s),u=ht(u);var E=u?Ml(s):0;return u&&E<u?s+Hd(u-E,h):s}function rN(s,u,h){s=Dt(s),u=ht(u);var E=u?Ml(s):0;return u&&E<u?Hd(u-E,h)+s:s}function aN(s,u,h){return h||u==null?u=0:u&&(u=+u),dL(Dt(s).replace(pl,""),u||0)}function sN(s,u,h){return(h?pi(s,u,h):u===t)?u=1:u=ht(u),Ag(Dt(s),u)}function oN(){var s=arguments,u=Dt(s[0]);return s.length<3?u:u.replace(s[1],s[2])}var lN=Pl(function(s,u,h){return s+(h?"_":"")+u.toLowerCase()});function uN(s,u,h){return h&&typeof h!="number"&&pi(s,u,h)&&(u=h=t),h=h===t?le:h>>>0,h?(s=Dt(s),s&&(typeof u=="string"||u!=null&&!Kg(u))&&(u=Yi(u),!u&&El(s))?ms(zr(s),0,h):s.split(u,h)):[]}var cN=Pl(function(s,u,h){return s+(h?" ":"")+Jg(u)});function fN(s,u,h){return s=Dt(s),h=h==null?0:go(ht(h),0,s.length),u=Yi(u),s.slice(h,h+u.length)==u}function dN(s,u,h){var E=L.templateSettings;h&&pi(s,u,h)&&(u=t),s=Dt(s),u=Jd({},u,E,US);var b=Jd({},u.imports,E.imports,US),I=Hn(b),F=cg(b,I),z,V,ce=0,fe=u.interpolate||ke,he="__p += '",we=dg((u.escape||ke).source+"|"+fe.source+"|"+(fe===It?Zm:ke).source+"|"+(u.evaluate||ke).source+"|$","g"),ze="//# sourceURL="+(Ut.call(u,"sourceURL")?(u.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++SP+"]")+`
`;s.replace(we,function(Ke,St,Tt,$i,mi,qi){return Tt||(Tt=$i),he+=s.slice(ce,qi).replace(je,HP),St&&(z=!0,he+=`' +
__e(`+St+`) +
'`),mi&&(V=!0,he+=`';
`+mi+`;
__p += '`),Tt&&(he+=`' +
((__t = (`+Tt+`)) == null ? '' : __t) +
'`),ce=qi+Ke.length,Ke}),he+=`';
`;var qe=Ut.call(u,"variable")&&u.variable;if(!qe)he=`with (obj) {
`+he+`
}
`;else if(dd.test(qe))throw new at(l);he=(V?he.replace(en,""):he).replace(pt,"$1").replace(ye,"$1;"),he="function("+(qe||"obj")+`) {
`+(qe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(z?", __e = _.escape":"")+(V?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+he+`return __p
}`;var gt=bE(function(){return Lt(I,ze+"return "+he).apply(t,F)});if(gt.source=he,qg(gt))throw gt;return gt}function hN(s){return Dt(s).toLowerCase()}function pN(s){return Dt(s).toUpperCase()}function mN(s,u,h){if(s=Dt(s),s&&(h||u===t))return N1(s);if(!s||!(u=Yi(u)))return s;var E=zr(s),b=zr(u),I=O1(E,b),F=F1(E,b)+1;return ms(E,I,F).join("")}function gN(s,u,h){if(s=Dt(s),s&&(h||u===t))return s.slice(0,z1(s)+1);if(!s||!(u=Yi(u)))return s;var E=zr(s),b=F1(E,zr(u))+1;return ms(E,0,b).join("")}function vN(s,u,h){if(s=Dt(s),s&&(h||u===t))return s.replace(pl,"");if(!s||!(u=Yi(u)))return s;var E=zr(s),b=O1(E,zr(u));return ms(E,b).join("")}function _N(s,u){var h=C,E=G;if(sn(u)){var b="separator"in u?u.separator:b;h="length"in u?ht(u.length):h,E="omission"in u?Yi(u.omission):E}s=Dt(s);var I=s.length;if(El(s)){var F=zr(s);I=F.length}if(h>=I)return s;var z=h-Ml(E);if(z<1)return E;var V=F?ms(F,0,z).join(""):s.slice(0,z);if(b===t)return V+E;if(F&&(z+=V.length-z),Kg(b)){if(s.slice(z).search(b)){var ce,fe=V;for(b.global||(b=dg(b.source,Dt(hd.exec(b))+"g")),b.lastIndex=0;ce=b.exec(fe);)var he=ce.index;V=V.slice(0,he===t?z:he)}}else if(s.indexOf(Yi(b),z)!=z){var we=V.lastIndexOf(b);we>-1&&(V=V.slice(0,we))}return V+E}function xN(s){return s=Dt(s),s&&Me.test(s)?s.replace(B,$P):s}var yN=Pl(function(s,u,h){return s+(h?" ":"")+u.toUpperCase()}),Jg=AS("toUpperCase");function TE(s,u,h){return s=Dt(s),u=h?t:u,u===t?WP(s)?ZP(s):UP(s):s.match(u)||[]}var bE=_t(function(s,u){try{return Vi(s,t,u)}catch(h){return qg(h)?h:new at(h)}}),SN=Pa(function(s,u){return vr(u,function(h){h=oa(h),Ca(s,h,jg(s[h],s))}),s});function EN(s){var u=s==null?0:s.length,h=Ye();return s=u?nn(s,function(E){if(typeof E[1]!="function")throw new _r(o);return[h(E[0]),E[1]]}):[],_t(function(E){for(var b=-1;++b<u;){var I=s[b];if(Vi(I[0],this,E))return Vi(I[1],this,E)}})}function MN(s){return $L(yr(s,p))}function ev(s){return function(){return s}}function wN(s,u){return s==null||s!==s?u:s}var TN=RS(),bN=RS(!0);function Pi(s){return s}function tv(s){return aS(typeof s=="function"?s:yr(s,p))}function AN(s){return oS(yr(s,p))}function CN(s,u){return lS(s,yr(u,p))}var RN=_t(function(s,u){return function(h){return pc(h,s,u)}}),PN=_t(function(s,u){return function(h){return pc(s,h,u)}});function nv(s,u,h){var E=Hn(u),b=Ud(u,E);h==null&&!(sn(u)&&(b.length||!E.length))&&(h=u,u=s,s=this,b=Ud(u,Hn(u)));var I=!(sn(h)&&"chain"in h)||!!h.chain,F=Da(s);return vr(b,function(z){var V=u[z];s[z]=V,F&&(s.prototype[z]=function(){var ce=this.__chain__;if(I||ce){var fe=s(this.__wrapped__),he=fe.__actions__=Ai(this.__actions__);return he.push({func:V,args:arguments,thisArg:s}),fe.__chain__=ce,fe}return V.apply(s,us([this.value()],arguments))})}),s}function LN(){return $n._===this&&($n._=iL),this}function iv(){}function DN(s){return s=ht(s),_t(function(u){return uS(u,s)})}var IN=Ug(nn),UN=Ug(P1),NN=Ug(ag);function AE(s){return Hg(s)?sg(oa(s)):f3(s)}function ON(s){return function(u){return s==null?t:vo(s,u)}}var FN=LS(),kN=LS(!0);function rv(){return[]}function av(){return!1}function zN(){return{}}function BN(){return""}function HN(){return!0}function GN(s,u){if(s=ht(s),s<1||s>H)return[];var h=le,E=ni(s,le);u=Ye(u),s-=le;for(var b=ug(E,u);++h<s;)u(h);return b}function WN(s){return ut(s)?nn(s,oa):ji(s)?[s]:Ai(jS(Dt(s)))}function VN(s){var u=++tL;return Dt(s)+u}var XN=Bd(function(s,u){return s+u},0),YN=Ng("ceil"),jN=Bd(function(s,u){return s/u},1),$N=Ng("floor");function qN(s){return s&&s.length?Id(s,Pi,yg):t}function KN(s,u){return s&&s.length?Id(s,Ye(u,2),yg):t}function ZN(s){return I1(s,Pi)}function QN(s,u){return I1(s,Ye(u,2))}function JN(s){return s&&s.length?Id(s,Pi,wg):t}function eO(s,u){return s&&s.length?Id(s,Ye(u,2),wg):t}var tO=Bd(function(s,u){return s*u},1),nO=Ng("round"),iO=Bd(function(s,u){return s-u},0);function rO(s){return s&&s.length?lg(s,Pi):0}function aO(s,u){return s&&s.length?lg(s,Ye(u,2)):0}return L.after=AI,L.ary=rE,L.assign=pU,L.assignIn=_E,L.assignInWith=Jd,L.assignWith=mU,L.at=gU,L.before=aE,L.bind=jg,L.bindAll=SN,L.bindKey=sE,L.castArray=zI,L.chain=tE,L.chunk=$3,L.compact=q3,L.concat=K3,L.cond=EN,L.conforms=MN,L.constant=ev,L.countBy=rI,L.create=vU,L.curry=oE,L.curryRight=lE,L.debounce=uE,L.defaults=_U,L.defaultsDeep=xU,L.defer=CI,L.delay=RI,L.difference=Z3,L.differenceBy=Q3,L.differenceWith=J3,L.drop=eD,L.dropRight=tD,L.dropRightWhile=nD,L.dropWhile=iD,L.fill=rD,L.filter=sI,L.flatMap=uI,L.flatMapDeep=cI,L.flatMapDepth=fI,L.flatten=ZS,L.flattenDeep=aD,L.flattenDepth=sD,L.flip=PI,L.flow=TN,L.flowRight=bN,L.fromPairs=oD,L.functions=bU,L.functionsIn=AU,L.groupBy=dI,L.initial=uD,L.intersection=cD,L.intersectionBy=fD,L.intersectionWith=dD,L.invert=RU,L.invertBy=PU,L.invokeMap=pI,L.iteratee=tv,L.keyBy=mI,L.keys=Hn,L.keysIn=Ri,L.map=jd,L.mapKeys=DU,L.mapValues=IU,L.matches=AN,L.matchesProperty=CN,L.memoize=qd,L.merge=UU,L.mergeWith=xE,L.method=RN,L.methodOf=PN,L.mixin=nv,L.negate=Kd,L.nthArg=DN,L.omit=NU,L.omitBy=OU,L.once=LI,L.orderBy=gI,L.over=IN,L.overArgs=DI,L.overEvery=UN,L.overSome=NN,L.partial=$g,L.partialRight=cE,L.partition=vI,L.pick=FU,L.pickBy=yE,L.property=AE,L.propertyOf=ON,L.pull=gD,L.pullAll=JS,L.pullAllBy=vD,L.pullAllWith=_D,L.pullAt=xD,L.range=FN,L.rangeRight=kN,L.rearg=II,L.reject=yI,L.remove=yD,L.rest=UI,L.reverse=Xg,L.sampleSize=EI,L.set=zU,L.setWith=BU,L.shuffle=MI,L.slice=SD,L.sortBy=bI,L.sortedUniq=CD,L.sortedUniqBy=RD,L.split=uN,L.spread=NI,L.tail=PD,L.take=LD,L.takeRight=DD,L.takeRightWhile=ID,L.takeWhile=UD,L.tap=qD,L.throttle=OI,L.thru=Yd,L.toArray=mE,L.toPairs=SE,L.toPairsIn=EE,L.toPath=WN,L.toPlainObject=vE,L.transform=HU,L.unary=FI,L.union=ND,L.unionBy=OD,L.unionWith=FD,L.uniq=kD,L.uniqBy=zD,L.uniqWith=BD,L.unset=GU,L.unzip=Yg,L.unzipWith=eE,L.update=WU,L.updateWith=VU,L.values=Il,L.valuesIn=XU,L.without=HD,L.words=TE,L.wrap=kI,L.xor=GD,L.xorBy=WD,L.xorWith=VD,L.zip=XD,L.zipObject=YD,L.zipObjectDeep=jD,L.zipWith=$D,L.entries=SE,L.entriesIn=EE,L.extend=_E,L.extendWith=Jd,nv(L,L),L.add=XN,L.attempt=bE,L.camelCase=qU,L.capitalize=ME,L.ceil=YN,L.clamp=YU,L.clone=BI,L.cloneDeep=GI,L.cloneDeepWith=WI,L.cloneWith=HI,L.conformsTo=VI,L.deburr=wE,L.defaultTo=wN,L.divide=jN,L.endsWith=KU,L.eq=Hr,L.escape=ZU,L.escapeRegExp=QU,L.every=aI,L.find=oI,L.findIndex=qS,L.findKey=yU,L.findLast=lI,L.findLastIndex=KS,L.findLastKey=SU,L.floor=$N,L.forEach=nE,L.forEachRight=iE,L.forIn=EU,L.forInRight=MU,L.forOwn=wU,L.forOwnRight=TU,L.get=Zg,L.gt=XI,L.gte=YI,L.has=CU,L.hasIn=Qg,L.head=QS,L.identity=Pi,L.includes=hI,L.indexOf=lD,L.inRange=jU,L.invoke=LU,L.isArguments=yo,L.isArray=ut,L.isArrayBuffer=jI,L.isArrayLike=Ci,L.isArrayLikeObject=_n,L.isBoolean=$I,L.isBuffer=gs,L.isDate=qI,L.isElement=KI,L.isEmpty=ZI,L.isEqual=QI,L.isEqualWith=JI,L.isError=qg,L.isFinite=eU,L.isFunction=Da,L.isInteger=fE,L.isLength=Zd,L.isMap=dE,L.isMatch=tU,L.isMatchWith=nU,L.isNaN=iU,L.isNative=rU,L.isNil=sU,L.isNull=aU,L.isNumber=hE,L.isObject=sn,L.isObjectLike=hn,L.isPlainObject=yc,L.isRegExp=Kg,L.isSafeInteger=oU,L.isSet=pE,L.isString=Qd,L.isSymbol=ji,L.isTypedArray=Dl,L.isUndefined=lU,L.isWeakMap=uU,L.isWeakSet=cU,L.join=hD,L.kebabCase=JU,L.last=Er,L.lastIndexOf=pD,L.lowerCase=eN,L.lowerFirst=tN,L.lt=fU,L.lte=dU,L.max=qN,L.maxBy=KN,L.mean=ZN,L.meanBy=QN,L.min=JN,L.minBy=eO,L.stubArray=rv,L.stubFalse=av,L.stubObject=zN,L.stubString=BN,L.stubTrue=HN,L.multiply=tO,L.nth=mD,L.noConflict=LN,L.noop=iv,L.now=$d,L.pad=nN,L.padEnd=iN,L.padStart=rN,L.parseInt=aN,L.random=$U,L.reduce=_I,L.reduceRight=xI,L.repeat=sN,L.replace=oN,L.result=kU,L.round=nO,L.runInContext=W,L.sample=SI,L.size=wI,L.snakeCase=lN,L.some=TI,L.sortedIndex=ED,L.sortedIndexBy=MD,L.sortedIndexOf=wD,L.sortedLastIndex=TD,L.sortedLastIndexBy=bD,L.sortedLastIndexOf=AD,L.startCase=cN,L.startsWith=fN,L.subtract=iO,L.sum=rO,L.sumBy=aO,L.template=dN,L.times=GN,L.toFinite=Ia,L.toInteger=ht,L.toLength=gE,L.toLower=hN,L.toNumber=Mr,L.toSafeInteger=hU,L.toString=Dt,L.toUpper=pN,L.trim=mN,L.trimEnd=gN,L.trimStart=vN,L.truncate=_N,L.unescape=xN,L.uniqueId=VN,L.upperCase=yN,L.upperFirst=Jg,L.each=nE,L.eachRight=iE,L.first=QS,nv(L,function(){var s={};return aa(L,function(u,h){Ut.call(L.prototype,h)||(s[h]=u)}),s}(),{chain:!1}),L.VERSION=i,vr(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){L[s].placeholder=L}),vr(["drop","take"],function(s,u){Mt.prototype[s]=function(h){h=h===t?1:Dn(ht(h),0);var E=this.__filtered__&&!u?new Mt(this):this.clone();return E.__filtered__?E.__takeCount__=ni(h,E.__takeCount__):E.__views__.push({size:ni(h,le),type:s+(E.__dir__<0?"Right":"")}),E},Mt.prototype[s+"Right"]=function(h){return this.reverse()[s](h).reverse()}}),vr(["filter","map","takeWhile"],function(s,u){var h=u+1,E=h==k||h==K;Mt.prototype[s]=function(b){var I=this.clone();return I.__iteratees__.push({iteratee:Ye(b,3),type:h}),I.__filtered__=I.__filtered__||E,I}}),vr(["head","last"],function(s,u){var h="take"+(u?"Right":"");Mt.prototype[s]=function(){return this[h](1).value()[0]}}),vr(["initial","tail"],function(s,u){var h="drop"+(u?"":"Right");Mt.prototype[s]=function(){return this.__filtered__?new Mt(this):this[h](1)}}),Mt.prototype.compact=function(){return this.filter(Pi)},Mt.prototype.find=function(s){return this.filter(s).head()},Mt.prototype.findLast=function(s){return this.reverse().find(s)},Mt.prototype.invokeMap=_t(function(s,u){return typeof s=="function"?new Mt(this):this.map(function(h){return pc(h,s,u)})}),Mt.prototype.reject=function(s){return this.filter(Kd(Ye(s)))},Mt.prototype.slice=function(s,u){s=ht(s);var h=this;return h.__filtered__&&(s>0||u<0)?new Mt(h):(s<0?h=h.takeRight(-s):s&&(h=h.drop(s)),u!==t&&(u=ht(u),h=u<0?h.dropRight(-u):h.take(u-s)),h)},Mt.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},Mt.prototype.toArray=function(){return this.take(le)},aa(Mt.prototype,function(s,u){var h=/^(?:filter|find|map|reject)|While$/.test(u),E=/^(?:head|last)$/.test(u),b=L[E?"take"+(u=="last"?"Right":""):u],I=E||/^find/.test(u);b&&(L.prototype[u]=function(){var F=this.__wrapped__,z=E?[1]:arguments,V=F instanceof Mt,ce=z[0],fe=V||ut(F),he=function(St){var Tt=b.apply(L,us([St],z));return E&&we?Tt[0]:Tt};fe&&h&&typeof ce=="function"&&ce.length!=1&&(V=fe=!1);var we=this.__chain__,ze=!!this.__actions__.length,qe=I&&!we,gt=V&&!ze;if(!I&&fe){F=gt?F:new Mt(this);var Ke=s.apply(F,z);return Ke.__actions__.push({func:Yd,args:[he],thisArg:t}),new xr(Ke,we)}return qe&&gt?s.apply(this,z):(Ke=this.thru(he),qe?E?Ke.value()[0]:Ke.value():Ke)})}),vr(["pop","push","shift","sort","splice","unshift"],function(s){var u=_d[s],h=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",E=/^(?:pop|shift)$/.test(s);L.prototype[s]=function(){var b=arguments;if(E&&!this.__chain__){var I=this.value();return u.apply(ut(I)?I:[],b)}return this[h](function(F){return u.apply(ut(F)?F:[],b)})}}),aa(Mt.prototype,function(s,u){var h=L[u];if(h){var E=h.name+"";Ut.call(Al,E)||(Al[E]=[]),Al[E].push({name:u,func:h})}}),Al[zd(t,g).name]=[{name:"wrapper",func:t}],Mt.prototype.clone=xL,Mt.prototype.reverse=yL,Mt.prototype.value=SL,L.prototype.at=KD,L.prototype.chain=ZD,L.prototype.commit=QD,L.prototype.next=JD,L.prototype.plant=tI,L.prototype.reverse=nI,L.prototype.toJSON=L.prototype.valueOf=L.prototype.value=iI,L.prototype.first=L.prototype.head,oc&&(L.prototype[oc]=eI),L},wl=QP();fo?((fo.exports=wl)._=wl,tg._=wl):$n._=wl}).call(Sc)})(um,um.exports);var cx=um.exports;function Ga(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function uR(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var lr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Xu={duration:.5,overwrite:!1,delay:0},Zy,ci,an,Lr=1e8,Vt=1/Lr,fx=Math.PI*2,u9=fx/4,c9=0,cR=Math.sqrt,f9=Math.cos,d9=Math.sin,Yn=function(e){return typeof e=="string"},gn=function(e){return typeof e=="function"},is=function(e){return typeof e=="number"},Qy=function(e){return typeof e>"u"},wa=function(e){return typeof e=="object"},zi=function(e){return e!==!1},Jy=function(){return typeof window<"u"},ip=function(e){return gn(e)||Yn(e)},fR=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},fi=Array.isArray,dx=/(?:-?\.?\d|\.)+/gi,dR=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,xu=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,T0=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,hR=/[+-]=-?[.\d]+/,pR=/[^,'"\[\]\s]+/gi,h9=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ln,da,hx,e1,cr={},cm={},mR,gR=function(e){return(cm=al(e,cr))&&Wi},t1=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Wf=function(e,t){return!t&&console.warn(e)},vR=function(e,t){return e&&(cr[e]=t)&&cm&&(cm[e]=t)||cr},Vf=function(){return 0},p9={suppressEvents:!0,isStart:!0,kill:!1},Mp={suppressEvents:!0,kill:!1},m9={suppressEvents:!0},n1={},Ks=[],px={},_R,Ji={},b0={},ib=30,wp=[],i1="",r1=function(e){var t=e[0],i,r;if(wa(t)||gn(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=wp.length;r--&&!wp[r].targetTest(t););i=wp[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new GR(e[r],i)))||e.splice(r,1);return e},jo=function(e){return e._gsap||r1(Dr(e))[0]._gsap},xR=function(e,t,i){return(i=e[t])&&gn(i)?e[t]():Qy(i)&&e.getAttribute&&e.getAttribute(t)||i},Bi=function(e,t){return(e=e.split(",")).forEach(t)||e},yn=function(e){return Math.round(e*1e5)/1e5||0},Vn=function(e){return Math.round(e*1e7)/1e7||0},Pu=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},g9=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},fm=function(){var e=Ks.length,t=Ks.slice(0),i,r;for(px={},Ks.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},yR=function(e,t,i,r){Ks.length&&!ci&&fm(),e.render(t,i,r||ci&&t<0&&(e._initted||e._startAt)),Ks.length&&!ci&&fm()},SR=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(pR).length<2?t:Yn(e)?e.trim():e},ER=function(e){return e},Fr=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},v9=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},al=function(e,t){for(var i in t)e[i]=t[i];return e},rb=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=wa(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},dm=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},uf=function(e){var t=e.parent||ln,i=e.keyframes?v9(fi(e.keyframes)):Fr;if(zi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},_9=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},MR=function(e,t,i,r,a){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=e[r],l;if(a)for(l=t[a];o&&o[a]>l;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Ym=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var a=t._prev,o=t._next;a?a._next=o:e[i]===t&&(e[i]=o),o?o._prev=a:e[r]===t&&(e[r]=a),t._next=t._prev=t.parent=null},ro=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},$o=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},x9=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},mx=function(e,t,i,r){return e._startAt&&(ci?e._startAt.revert(Mp):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},y9=function n(e){return!e||e._ts&&n(e.parent)},ab=function(e){return e._repeat?Yu(e._tTime,e=e.duration()+e._rDelay)*e:0},Yu=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},hm=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},jm=function(e){return e._end=Vn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Vt)||0))},$m=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Vn(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),jm(e),i._dirty||$o(i,e)),e},wR=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=hm(e.rawTime(),t),(!t._dur||ud(0,t.totalDuration(),i)-t._tTime>Vt)&&t.render(i,!0)),$o(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Vt}},ga=function(e,t,i,r){return t.parent&&ro(t),t._start=Vn((is(i)?i:i||e!==ln?br(e,i,t):e._time)+t._delay),t._end=Vn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),MR(e,t,"_first","_last",e._sort?"_start":0),gx(t)||(e._recent=t),r||wR(e,t),e._ts<0&&$m(e,e._tTime),e},TR=function(e,t){return(cr.ScrollTrigger||t1("scrollTrigger",t))&&cr.ScrollTrigger.create(t,e)},bR=function(e,t,i,r,a){if(s1(e,t,a),!e._initted)return 1;if(!i&&e._pt&&!ci&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&_R!==ir.frame)return Ks.push(e),e._lazy=[a,r],1},S9=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},gx=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},E9=function(e,t,i,r){var a=e.ratio,o=t<0||!t&&(!e._start&&S9(e)&&!(!e._initted&&gx(e))||(e._ts<0||e._dp._ts<0)&&!gx(e))?0:1,l=e._rDelay,c=0,f,d,p;if(l&&e._repeat&&(c=ud(0,e._tDur,t),d=Yu(c,l),e._yoyo&&d&1&&(o=1-o),d!==Yu(e._tTime,l)&&(a=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==a||ci||r||e._zTime===Vt||!t&&e._zTime){if(!e._initted&&bR(e,t,r,i,c))return;for(p=e._zTime,e._zTime=t||(i?Vt:0),i||(i=t&&!p),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,f=e._pt;f;)f.r(o,f.d),f=f._next;t<0&&mx(e,t,i,!0),e._onUpdate&&!i&&ar(e,"onUpdate"),c&&e._repeat&&!i&&e.parent&&ar(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ro(e,1),!i&&!ci&&(ar(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},M9=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ju=function(e,t,i,r){var a=e._repeat,o=Vn(t)||0,l=e._tTime/e._tDur;return l&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=a?a<0?1e10:Vn(o*(a+1)+e._rDelay*a):o,l>0&&!r&&$m(e,e._tTime=e._tDur*l),e.parent&&jm(e),i||$o(e.parent,e),e},sb=function(e){return e instanceof Si?$o(e):ju(e,e._dur)},w9={_start:0,endTime:Vf,totalDuration:Vf},br=function n(e,t,i){var r=e.labels,a=e._recent||w9,o=e.duration()>=Lr?a.endTime(!1):e._dur,l,c,f;return Yn(t)&&(isNaN(t)||t in r)?(c=t.charAt(0),f=t.substr(-1)==="%",l=t.indexOf("="),c==="<"||c===">"?(l>=0&&(t=t.replace(/=/,"")),(c==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(f?(l<0?a:i).totalDuration()/100:1)):l<0?(t in r||(r[t]=o),r[t]):(c=parseFloat(t.charAt(l-1)+t.substr(l+1)),f&&i&&(c=c/100*(fi(i)?i[0]:i).totalDuration()),l>1?n(e,t.substr(0,l-1),i)+c:o+c)):t==null?o:+t},cf=function(e,t,i){var r=is(t[1]),a=(r?2:1)+(e<2?0:1),o=t[a],l,c;if(r&&(o.duration=t[1]),o.parent=i,e){for(l=o,c=i;c&&!("immediateRender"in l);)l=c.vars.defaults||{},c=zi(c.vars.inherit)&&c.parent;o.immediateRender=zi(l.immediateRender),e<2?o.runBackwards=1:o.startAt=t[a-1]}return new Tn(t[0],o,t[a+1])},co=function(e,t){return e||e===0?t(e):t},ud=function(e,t,i){return i<e?e:i>t?t:i},ui=function(e,t){return!Yn(e)||!(t=h9.exec(e))?"":t[1]},T9=function(e,t,i){return co(i,function(r){return ud(e,t,r)})},vx=[].slice,AR=function(e,t){return e&&wa(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&wa(e[0]))&&!e.nodeType&&e!==da},b9=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var a;return Yn(r)&&!t||AR(r,1)?(a=i).push.apply(a,Dr(r)):i.push(r)})||i},Dr=function(e,t,i){return an&&!t&&an.selector?an.selector(e):Yn(e)&&!i&&(hx||!$u())?vx.call((t||e1).querySelectorAll(e),0):fi(e)?b9(e,i):AR(e)?vx.call(e,0):e?[e]:[]},_x=function(e){return e=Dr(e)[0]||Wf("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Dr(t,i.querySelectorAll?i:i===e?Wf("Invalid scope")||e1.createElement("div"):e)}},CR=function(e){return e.sort(function(){return .5-Math.random()})},RR=function(e){if(gn(e))return e;var t=wa(e)?e:{each:e},i=qo(t.ease),r=t.from||0,a=parseFloat(t.base)||0,o={},l=r>0&&r<1,c=isNaN(r)||l,f=t.axis,d=r,p=r;return Yn(r)?d=p={center:.5,edges:.5,end:1}[r]||0:!l&&c&&(d=r[0],p=r[1]),function(m,v,M){var x=(M||t).length,_=o[x],g,S,y,w,A,R,P,N,T;if(!_){if(T=t.grid==="auto"?0:(t.grid||[1,Lr])[1],!T){for(P=-Lr;P<(P=M[T++].getBoundingClientRect().left)&&T<x;);T<x&&T--}for(_=o[x]=[],g=c?Math.min(T,x)*d-.5:r%T,S=T===Lr?0:c?x*p/T-.5:r/T|0,P=0,N=Lr,R=0;R<x;R++)y=R%T-g,w=S-(R/T|0),_[R]=A=f?Math.abs(f==="y"?w:y):cR(y*y+w*w),A>P&&(P=A),A<N&&(N=A);r==="random"&&CR(_),_.max=P-N,_.min=N,_.v=x=(parseFloat(t.amount)||parseFloat(t.each)*(T>x?x-1:f?f==="y"?x/T:T:Math.max(T,x/T))||0)*(r==="edges"?-1:1),_.b=x<0?a-x:a,_.u=ui(t.amount||t.each)||0,i=i&&x<0?zR(i):i}return x=(_[m]-_.min)/_.max||0,Vn(_.b+(i?i(x):x)*_.v)+_.u}},xx=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Vn(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(is(i)?0:ui(i))}},PR=function(e,t){var i=fi(e),r,a;return!i&&wa(e)&&(r=i=e.radius||Lr,e.values?(e=Dr(e.values),(a=!is(e[0]))&&(r*=r)):e=xx(e.increment)),co(t,i?gn(e)?function(o){return a=e(o),Math.abs(a-o)<=r?a:o}:function(o){for(var l=parseFloat(a?o.x:o),c=parseFloat(a?o.y:0),f=Lr,d=0,p=e.length,m,v;p--;)a?(m=e[p].x-l,v=e[p].y-c,m=m*m+v*v):m=Math.abs(e[p]-l),m<f&&(f=m,d=p);return d=!r||f<=r?e[d]:o,a||d===o||is(o)?d:d+ui(o)}:xx(e))},LR=function(e,t,i,r){return co(fi(e)?!t:i===!0?!!(i=0):!r,function(){return fi(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},A9=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(a,o){return o(a)},r)}},C9=function(e,t){return function(i){return e(parseFloat(i))+(t||ui(i))}},R9=function(e,t,i){return IR(e,t,0,1,i)},DR=function(e,t,i){return co(i,function(r){return e[~~t(r)]})},P9=function n(e,t,i){var r=t-e;return fi(e)?DR(e,n(0,e.length),t):co(i,function(a){return(r+(a-e)%r)%r+e})},L9=function n(e,t,i){var r=t-e,a=r*2;return fi(e)?DR(e,n(0,e.length-1),t):co(i,function(o){return o=(a+(o-e)%a)%a||0,e+(o>r?a-o:o)})},Xf=function(e){for(var t=0,i="",r,a,o,l;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),l=e.charAt(r+7)==="[",a=e.substr(r+7,o-r-7).match(l?pR:dx),i+=e.substr(t,r-t)+LR(l?a:+a[0],l?0:+a[1],+a[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},IR=function(e,t,i,r,a){var o=t-e,l=r-i;return co(a,function(c){return i+((c-e)/o*l||0)})},D9=function n(e,t,i,r){var a=isNaN(e+t)?0:function(v){return(1-v)*e+v*t};if(!a){var o=Yn(e),l={},c,f,d,p,m;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(fi(e)&&!fi(t)){for(d=[],p=e.length,m=p-2,f=1;f<p;f++)d.push(n(e[f-1],e[f]));p--,a=function(M){M*=p;var x=Math.min(m,~~M);return d[x](M-x)},i=t}else r||(e=al(fi(e)?[]:{},e));if(!d){for(c in t)a1.call(l,e,c,"get",t[c]);a=function(M){return u1(M,l)||(o?e.p:e)}}}return co(i,a)},ob=function(e,t,i){var r=e.labels,a=Lr,o,l,c;for(o in r)l=r[o]-t,l<0==!!i&&l&&a>(l=Math.abs(l))&&(c=o,a=l);return c},ar=function(e,t,i){var r=e.vars,a=r[t],o=an,l=e._ctx,c,f,d;if(a)return c=r[t+"Params"],f=r.callbackScope||e,i&&Ks.length&&fm(),l&&(an=l),d=c?a.apply(f,c):a.call(f),an=o,d},Yc=function(e){return ro(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ci),e.progress()<1&&ar(e,"onInterrupt"),e},yu,UR=[],NR=function(e){if(e)if(e=!e.name&&e.default||e,Jy()||e.headless){var t=e.name,i=gn(e),r=t&&!i&&e.init?function(){this._props=[]}:e,a={init:Vf,render:u1,add:a1,kill:$9,modifier:j9,rawVars:0},o={targetTest:0,get:0,getSetter:l1,aliases:{},register:0};if($u(),e!==r){if(Ji[t])return;Fr(r,Fr(dm(e,a),o)),al(r.prototype,al(a,dm(e,o))),Ji[r.prop=t]=r,e.targetTest&&(wp.push(r),n1[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}vR(t,r),e.register&&e.register(Wi,r,Hi)}else UR.push(e)},Gt=255,jc={aqua:[0,Gt,Gt],lime:[0,Gt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Gt],navy:[0,0,128],white:[Gt,Gt,Gt],olive:[128,128,0],yellow:[Gt,Gt,0],orange:[Gt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Gt,0,0],pink:[Gt,192,203],cyan:[0,Gt,Gt],transparent:[Gt,Gt,Gt,0]},A0=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Gt+.5|0},OR=function(e,t,i){var r=e?is(e)?[e>>16,e>>8&Gt,e&Gt]:0:jc.black,a,o,l,c,f,d,p,m,v,M;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),jc[e])r=jc[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),o=e.charAt(2),l=e.charAt(3),e="#"+a+a+o+o+l+l+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Gt,r&Gt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Gt,e&Gt]}else if(e.substr(0,3)==="hsl"){if(r=M=e.match(dx),!t)c=+r[0]%360/360,f=+r[1]/100,d=+r[2]/100,o=d<=.5?d*(f+1):d+f-d*f,a=d*2-o,r.length>3&&(r[3]*=1),r[0]=A0(c+1/3,a,o),r[1]=A0(c,a,o),r[2]=A0(c-1/3,a,o);else if(~e.indexOf("="))return r=e.match(dR),i&&r.length<4&&(r[3]=1),r}else r=e.match(dx)||jc.transparent;r=r.map(Number)}return t&&!M&&(a=r[0]/Gt,o=r[1]/Gt,l=r[2]/Gt,p=Math.max(a,o,l),m=Math.min(a,o,l),d=(p+m)/2,p===m?c=f=0:(v=p-m,f=d>.5?v/(2-p-m):v/(p+m),c=p===a?(o-l)/v+(o<l?6:0):p===o?(l-a)/v+2:(a-o)/v+4,c*=60),r[0]=~~(c+.5),r[1]=~~(f*100+.5),r[2]=~~(d*100+.5)),i&&r.length<4&&(r[3]=1),r},FR=function(e){var t=[],i=[],r=-1;return e.split(Zs).forEach(function(a){var o=a.match(xu)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},lb=function(e,t,i){var r="",a=(e+r).match(Zs),o=t?"hsla(":"rgba(",l=0,c,f,d,p;if(!a)return e;if(a=a.map(function(m){return(m=OR(m,t,1))&&o+(t?m[0]+","+m[1]+"%,"+m[2]+"%,"+m[3]:m.join(","))+")"}),i&&(d=FR(e),c=i.c,c.join(r)!==d.c.join(r)))for(f=e.replace(Zs,"1").split(xu),p=f.length-1;l<p;l++)r+=f[l]+(~c.indexOf(l)?a.shift()||o+"0,0,0,0)":(d.length?d:a.length?a:i).shift());if(!f)for(f=e.split(Zs),p=f.length-1;l<p;l++)r+=f[l]+a[l];return r+f[p]},Zs=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in jc)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),I9=/hsl[a]?\(/,kR=function(e){var t=e.join(" "),i;if(Zs.lastIndex=0,Zs.test(t))return i=I9.test(t),e[1]=lb(e[1],i),e[0]=lb(e[0],i,FR(e[1])),!0},Yf,ir=function(){var n=Date.now,e=500,t=33,i=n(),r=i,a=1e3/240,o=a,l=[],c,f,d,p,m,v,M=function x(_){var g=n()-r,S=_===!0,y,w,A,R;if((g>e||g<0)&&(i+=g-t),r+=g,A=r-i,y=A-o,(y>0||S)&&(R=++p.frame,m=A-p.time*1e3,p.time=A=A/1e3,o+=y+(y>=a?4:a-y),w=1),S||(c=f(x)),w)for(v=0;v<l.length;v++)l[v](A,m,R,_)};return p={time:0,frame:0,tick:function(){M(!0)},deltaRatio:function(_){return m/(1e3/(_||60))},wake:function(){mR&&(!hx&&Jy()&&(da=hx=window,e1=da.document||{},cr.gsap=Wi,(da.gsapVersions||(da.gsapVersions=[])).push(Wi.version),gR(cm||da.GreenSockGlobals||!da.gsap&&da||{}),UR.forEach(NR)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&p.sleep(),f=d||function(_){return setTimeout(_,o-p.time*1e3+1|0)},Yf=1,M(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(c),Yf=0,f=Vf},lagSmoothing:function(_,g){e=_||1/0,t=Math.min(g||33,e)},fps:function(_){a=1e3/(_||240),o=p.time*1e3+a},add:function(_,g,S){var y=g?function(w,A,R,P){_(w,A,R,P),p.remove(y)}:_;return p.remove(_),l[S?"unshift":"push"](y),$u(),y},remove:function(_,g){~(g=l.indexOf(_))&&l.splice(g,1)&&v>=g&&v--},_listeners:l},p}(),$u=function(){return!Yf&&ir.wake()},bt={},U9=/^[\d.\-M][\d.\-,\s]/,N9=/["']/g,O9=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],a=1,o=i.length,l,c,f;a<o;a++)c=i[a],l=a!==o-1?c.lastIndexOf(","):c.length,f=c.substr(0,l),t[r]=isNaN(f)?f.replace(N9,"").trim():+f,r=c.substr(l+1).trim();return t},F9=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},k9=function(e){var t=(e+"").split("("),i=bt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[O9(t[1])]:F9(e).split(",").map(SR)):bt._CE&&U9.test(e)?bt._CE("",e):i},zR=function(e){return function(t){return 1-e(1-t)}},BR=function n(e,t){for(var i=e._first,r;i;)i instanceof Si?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},qo=function(e,t){return e&&(gn(e)?e:bt[e]||k9(e))||t},hl=function(e,t,i,r){i===void 0&&(i=function(c){return 1-t(1-c)}),r===void 0&&(r=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var a={easeIn:t,easeOut:i,easeInOut:r},o;return Bi(e,function(l){bt[l]=cr[l]=a,bt[o=l.toLowerCase()]=i;for(var c in a)bt[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=bt[l+"."+c]=a[c]}),a},HR=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},C0=function n(e,t,i){var r=t>=1?t:1,a=(i||(e?.3:.45))/(t<1?t:1),o=a/fx*(Math.asin(1/r)||0),l=function(d){return d===1?1:r*Math.pow(2,-10*d)*d9((d-o)*a)+1},c=e==="out"?l:e==="in"?function(f){return 1-l(1-f)}:HR(l);return a=fx/a,c.config=function(f,d){return n(e,f,d)},c},R0=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(a){return 1-i(1-a)}:HR(i);return r.config=function(a){return n(e,a)},r};Bi("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;hl(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});bt.Linear.easeNone=bt.none=bt.Linear.easeIn;hl("Elastic",C0("in"),C0("out"),C0());(function(n,e){var t=1/e,i=2*t,r=2.5*t,a=function(l){return l<t?n*l*l:l<i?n*Math.pow(l-1.5/e,2)+.75:l<r?n*(l-=2.25/e)*l+.9375:n*Math.pow(l-2.625/e,2)+.984375};hl("Bounce",function(o){return 1-a(1-o)},a)})(7.5625,2.75);hl("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});hl("Circ",function(n){return-(cR(1-n*n)-1)});hl("Sine",function(n){return n===1?1:-f9(n*u9)+1});hl("Back",R0("in"),R0("out"),R0());bt.SteppedEase=bt.steps=cr.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),a=t?1:0,o=1-Vt;return function(l){return((r*ud(0,o,l)|0)+a)*i}}};Xu.ease=bt["quad.out"];Bi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return i1+=n+","+n+"Params,"});var GR=function(e,t){this.id=c9++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:xR,this.set=t?t.getSetter:l1},jf=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ju(this,+t.duration,1,1),this.data=t.data,an&&(this._ctx=an,an.data.push(this)),Yf||ir.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ju(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if($u(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for($m(this,i),!a._dp||a.parent||wR(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ga(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Vt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),yR(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+ab(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+ab(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*a,r):this._repeat?Yu(this._tTime,a)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Vt?0:this._rts;if(this._rts===i)return this;var a=this.parent&&this._ts?hm(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Vt?0:this._rts,this.totalTime(ud(-Math.abs(this._delay),this._tDur,a),r!==!1),jm(this),x9(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($u(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Vt&&(this._tTime-=Vt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ga(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(zi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?hm(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=m9);var r=ci;return ci=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),ci=r,this},e.globalTime=function(i){for(var r=this,a=arguments.length?i:r.rawTime();r;)a=r._start+a/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):a},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,sb(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,sb(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(br(this,i),zi(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,zi(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Vt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Vt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,a;return!!(!i||this._ts&&this._initted&&i.isActive()&&(a=i.rawTime(!0))>=r&&a<this.endTime(!0)-Vt)},e.eventCallback=function(i,r,a){var o=this.vars;return arguments.length>1?(r?(o[i]=r,a&&(o[i+"Params"]=a),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(a){var o=gn(i)?i:ER,l=function(){var f=r.then;r.then=null,gn(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=f),a(o),r.then=f};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Yc(this)},n}();Fr(jf.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Vt,_prom:0,_ps:!1,_rts:1});var Si=function(n){uR(e,n);function e(i,r){var a;return i===void 0&&(i={}),a=n.call(this,i)||this,a.labels={},a.smoothChildTiming=!!i.smoothChildTiming,a.autoRemoveChildren=!!i.autoRemoveChildren,a._sort=zi(i.sortChildren),ln&&ga(i.parent||ln,Ga(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),i.scrollTrigger&&TR(Ga(a),i.scrollTrigger),a}var t=e.prototype;return t.to=function(r,a,o){return cf(0,arguments,this),this},t.from=function(r,a,o){return cf(1,arguments,this),this},t.fromTo=function(r,a,o,l){return cf(2,arguments,this),this},t.set=function(r,a,o){return a.duration=0,a.parent=this,uf(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Tn(r,a,br(this,o),1),this},t.call=function(r,a,o){return ga(this,Tn.delayedCall(0,r,a),o)},t.staggerTo=function(r,a,o,l,c,f,d){return o.duration=a,o.stagger=o.stagger||l,o.onComplete=f,o.onCompleteParams=d,o.parent=this,new Tn(r,o,br(this,c)),this},t.staggerFrom=function(r,a,o,l,c,f,d){return o.runBackwards=1,uf(o).immediateRender=zi(o.immediateRender),this.staggerTo(r,a,o,l,c,f,d)},t.staggerFromTo=function(r,a,o,l,c,f,d,p){return l.startAt=o,uf(l).immediateRender=zi(l.immediateRender),this.staggerTo(r,a,l,c,f,d,p)},t.render=function(r,a,o){var l=this._time,c=this._dirty?this.totalDuration():this._tDur,f=this._dur,d=r<=0?0:Vn(r),p=this._zTime<0!=r<0&&(this._initted||!f),m,v,M,x,_,g,S,y,w,A,R,P;if(this!==ln&&d>c&&r>=0&&(d=c),d!==this._tTime||o||p){if(l!==this._time&&f&&(d+=this._time-l,r+=this._time-l),m=d,w=this._start,y=this._ts,g=!y,p&&(f||(l=this._zTime),(r||!a)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,_=f+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,a,o);if(m=Vn(d%_),d===c?(x=this._repeat,m=f):(x=~~(d/_),x&&x===d/_&&(m=f,x--),m>f&&(m=f)),A=Yu(this._tTime,_),!l&&this._tTime&&A!==x&&this._tTime-A*_-this._dur<=0&&(A=x),R&&x&1&&(m=f-m,P=1),x!==A&&!this._lock){var N=R&&A&1,T=N===(R&&x&1);if(x<A&&(N=!N),l=N?0:d%f?f:d,this._lock=1,this.render(l||(P?0:Vn(x*_)),a,!f)._lock=0,this._tTime=d,!a&&this.parent&&ar(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),l&&l!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(f=this._dur,c=this._tDur,T&&(this._lock=2,l=N?f:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;BR(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=M9(this,Vn(l),Vn(m)),S&&(d-=m-(m=S._start))),this._tTime=d,this._time=m,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,l=0),!l&&m&&!a&&!x&&(ar(this,"onStart"),this._tTime!==d))return this;if(m>=l&&r>=0)for(v=this._first;v;){if(M=v._next,(v._act||m>=v._start)&&v._ts&&S!==v){if(v.parent!==this)return this.render(r,a,o);if(v.render(v._ts>0?(m-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(m-v._start)*v._ts,a,o),m!==this._time||!this._ts&&!g){S=0,M&&(d+=this._zTime=-Vt);break}}v=M}else{v=this._last;for(var C=r<0?r:m;v;){if(M=v._prev,(v._act||C<=v._end)&&v._ts&&S!==v){if(v.parent!==this)return this.render(r,a,o);if(v.render(v._ts>0?(C-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(C-v._start)*v._ts,a,o||ci&&(v._initted||v._startAt)),m!==this._time||!this._ts&&!g){S=0,M&&(d+=this._zTime=C?-Vt:Vt);break}}v=M}}if(S&&!a&&(this.pause(),S.render(m>=l?0:-Vt)._zTime=m>=l?1:-1,this._ts))return this._start=w,jm(this),this.render(r,a,o);this._onUpdate&&!a&&ar(this,"onUpdate",!0),(d===c&&this._tTime>=this.totalDuration()||!d&&l)&&(w===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!f)&&(d===c&&this._ts>0||!d&&this._ts<0)&&ro(this,1),!a&&!(r<0&&!l)&&(d||l||!c)&&(ar(this,d===c&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,a){var o=this;if(is(a)||(a=br(this,a,r)),!(r instanceof jf)){if(fi(r))return r.forEach(function(l){return o.add(l,a)}),this;if(Yn(r))return this.addLabel(r,a);if(gn(r))r=Tn.delayedCall(0,r);else return this}return this!==r?ga(this,r,a):this},t.getChildren=function(r,a,o,l){r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=!0),l===void 0&&(l=-Lr);for(var c=[],f=this._first;f;)f._start>=l&&(f instanceof Tn?a&&c.push(f):(o&&c.push(f),r&&c.push.apply(c,f.getChildren(!0,a,o)))),f=f._next;return c},t.getById=function(r){for(var a=this.getChildren(1,1,1),o=a.length;o--;)if(a[o].vars.id===r)return a[o]},t.remove=function(r){return Yn(r)?this.removeLabel(r):gn(r)?this.killTweensOf(r):(Ym(this,r),r===this._recent&&(this._recent=this._last),$o(this))},t.totalTime=function(r,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Vn(ir.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,a),this._forcing=0,this):this._tTime},t.addLabel=function(r,a){return this.labels[r]=br(this,a),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,a,o){var l=Tn.delayedCall(0,a||Vf,o);return l.data="isPause",this._hasPause=1,ga(this,l,br(this,r))},t.removePause=function(r){var a=this._first;for(r=br(this,r);a;)a._start===r&&a.data==="isPause"&&ro(a),a=a._next},t.killTweensOf=function(r,a,o){for(var l=this.getTweensOf(r,o),c=l.length;c--;)Ns!==l[c]&&l[c].kill(r,a);return this},t.getTweensOf=function(r,a){for(var o=[],l=Dr(r),c=this._first,f=is(a),d;c;)c instanceof Tn?g9(c._targets,l)&&(f?(!Ns||c._initted&&c._ts)&&c.globalTime(0)<=a&&c.globalTime(c.totalDuration())>a:!a||c.isActive())&&o.push(c):(d=c.getTweensOf(l,a)).length&&o.push.apply(o,d),c=c._next;return o},t.tweenTo=function(r,a){a=a||{};var o=this,l=br(o,r),c=a,f=c.startAt,d=c.onStart,p=c.onStartParams,m=c.immediateRender,v,M=Tn.to(o,Fr({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:a.duration||Math.abs((l-(f&&"time"in f?f.time:o._time))/o.timeScale())||Vt,onStart:function(){if(o.pause(),!v){var _=a.duration||Math.abs((l-(f&&"time"in f?f.time:o._time))/o.timeScale());M._dur!==_&&ju(M,_,0,1).render(M._time,!0,!0),v=1}d&&d.apply(M,p||[])}},a));return m?M.render(0):M},t.tweenFromTo=function(r,a,o){return this.tweenTo(a,Fr({startAt:{time:br(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),ob(this,br(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),ob(this,br(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Vt)},t.shiftChildren=function(r,a,o){o===void 0&&(o=0);for(var l=this._first,c=this.labels,f;l;)l._start>=o&&(l._start+=r,l._end+=r),l=l._next;if(a)for(f in c)c[f]>=o&&(c[f]+=r);return $o(this)},t.invalidate=function(r){var a=this._first;for(this._lock=0;a;)a.invalidate(r),a=a._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var a=this._first,o;a;)o=a._next,this.remove(a),a=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),$o(this)},t.totalDuration=function(r){var a=0,o=this,l=o._last,c=Lr,f,d,p;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(p=o.parent;l;)f=l._prev,l._dirty&&l.totalDuration(),d=l._start,d>c&&o._sort&&l._ts&&!o._lock?(o._lock=1,ga(o,l,d-l._delay,1)._lock=0):c=d,d<0&&l._ts&&(a-=d,(!p&&!o._dp||p&&p.smoothChildTiming)&&(o._start+=d/o._ts,o._time-=d,o._tTime-=d),o.shiftChildren(-d,!1,-1/0),c=0),l._end>a&&l._ts&&(a=l._end),l=f;ju(o,o===ln&&o._time>a?o._time:a,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(ln._ts&&(yR(ln,hm(r,ln)),_R=ir.frame),ir.frame>=ib){ib+=lr.autoSleep||120;var a=ln._first;if((!a||!a._ts)&&lr.autoSleep&&ir._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||ir.sleep()}}},e}(jf);Fr(Si.prototype,{_lock:0,_hasPause:0,_forcing:0});var z9=function(e,t,i,r,a,o,l){var c=new Hi(this._pt,e,t,0,1,$R,null,a),f=0,d=0,p,m,v,M,x,_,g,S;for(c.b=i,c.e=r,i+="",r+="",(g=~r.indexOf("random("))&&(r=Xf(r)),o&&(S=[i,r],o(S,e,t),i=S[0],r=S[1]),m=i.match(T0)||[];p=T0.exec(r);)M=p[0],x=r.substring(f,p.index),v?v=(v+1)%5:x.substr(-5)==="rgba("&&(v=1),M!==m[d++]&&(_=parseFloat(m[d-1])||0,c._pt={_next:c._pt,p:x||d===1?x:",",s:_,c:M.charAt(1)==="="?Pu(_,M)-_:parseFloat(M)-_,m:v&&v<4?Math.round:0},f=T0.lastIndex);return c.c=f<r.length?r.substring(f,r.length):"",c.fp=l,(hR.test(r)||g)&&(c.e=0),this._pt=c,c},a1=function(e,t,i,r,a,o,l,c,f,d){gn(r)&&(r=r(a||0,e,o));var p=e[t],m=i!=="get"?i:gn(p)?f?e[t.indexOf("set")||!gn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](f):e[t]():p,v=gn(p)?f?V9:YR:o1,M;if(Yn(r)&&(~r.indexOf("random(")&&(r=Xf(r)),r.charAt(1)==="="&&(M=Pu(m,r)+(ui(m)||0),(M||M===0)&&(r=M))),!d||m!==r||yx)return!isNaN(m*r)&&r!==""?(M=new Hi(this._pt,e,t,+m||0,r-(m||0),typeof p=="boolean"?Y9:jR,0,v),f&&(M.fp=f),l&&M.modifier(l,this,e),this._pt=M):(!p&&!(t in e)&&t1(t,r),z9.call(this,e,t,m,r,v,c||lr.stringFilter,f))},B9=function(e,t,i,r,a){if(gn(e)&&(e=ff(e,a,t,i,r)),!wa(e)||e.style&&e.nodeType||fi(e)||fR(e))return Yn(e)?ff(e,a,t,i,r):e;var o={},l;for(l in e)o[l]=ff(e[l],a,t,i,r);return o},WR=function(e,t,i,r,a,o){var l,c,f,d;if(Ji[e]&&(l=new Ji[e]).init(a,l.rawVars?t[e]:B9(t[e],r,a,o,i),i,r,o)!==!1&&(i._pt=c=new Hi(i._pt,a,e,0,1,l.render,l,0,l.priority),i!==yu))for(f=i._ptLookup[i._targets.indexOf(a)],d=l._props.length;d--;)f[l._props[d]]=c;return l},Ns,yx,s1=function n(e,t,i){var r=e.vars,a=r.ease,o=r.startAt,l=r.immediateRender,c=r.lazy,f=r.onUpdate,d=r.runBackwards,p=r.yoyoEase,m=r.keyframes,v=r.autoRevert,M=e._dur,x=e._startAt,_=e._targets,g=e.parent,S=g&&g.data==="nested"?g.vars.targets:_,y=e._overwrite==="auto"&&!Zy,w=e.timeline,A,R,P,N,T,C,G,X,ae,k,Y,K,se;if(w&&(!m||!a)&&(a="none"),e._ease=qo(a,Xu.ease),e._yEase=p?zR(qo(p===!0?a:p,Xu.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!w&&!!r.runBackwards,!w||m&&!r.stagger){if(X=_[0]?jo(_[0]).harness:0,K=X&&r[X.prop],A=dm(r,n1),x&&(x._zTime<0&&x.progress(1),t<0&&d&&l&&!v?x.render(-1,!0):x.revert(d&&M?Mp:p9),x._lazy=0),o){if(ro(e._startAt=Tn.set(_,Fr({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!x&&zi(c),startAt:null,delay:0,onUpdate:f&&function(){return ar(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ci||!l&&!v)&&e._startAt.revert(Mp),l&&M&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(d&&M&&!x){if(t&&(l=!1),P=Fr({overwrite:!1,data:"isFromStart",lazy:l&&!x&&zi(c),immediateRender:l,stagger:0,parent:g},A),K&&(P[X.prop]=K),ro(e._startAt=Tn.set(_,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ci?e._startAt.revert(Mp):e._startAt.render(-1,!0)),e._zTime=t,!l)n(e._startAt,Vt,Vt);else if(!t)return}for(e._pt=e._ptCache=0,c=M&&zi(c)||c&&!M,R=0;R<_.length;R++){if(T=_[R],G=T._gsap||r1(_)[R]._gsap,e._ptLookup[R]=k={},px[G.id]&&Ks.length&&fm(),Y=S===_?R:S.indexOf(T),X&&(ae=new X).init(T,K||A,e,Y,S)!==!1&&(e._pt=N=new Hi(e._pt,T,ae.name,0,1,ae.render,ae,0,ae.priority),ae._props.forEach(function(H){k[H]=N}),ae.priority&&(C=1)),!X||K)for(P in A)Ji[P]&&(ae=WR(P,A,e,Y,T,S))?ae.priority&&(C=1):k[P]=N=a1.call(e,T,P,"get",A[P],Y,S,0,r.stringFilter);e._op&&e._op[R]&&e.kill(T,e._op[R]),y&&e._pt&&(Ns=e,ln.killTweensOf(T,k,e.globalTime(t)),se=!e.parent,Ns=0),e._pt&&c&&(px[G.id]=1)}C&&qR(e),e._onInit&&e._onInit(e)}e._onUpdate=f,e._initted=(!e._op||e._pt)&&!se,m&&t<=0&&w.render(Lr,!0,!0)},H9=function(e,t,i,r,a,o,l,c){var f=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,p,m,v;if(!f)for(f=e._ptCache[t]=[],m=e._ptLookup,v=e._targets.length;v--;){if(d=m[v][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return yx=1,e.vars[t]="+=0",s1(e,l),yx=0,c?Wf(t+" not eligible for reset"):1;f.push(d)}for(v=f.length;v--;)p=f[v],d=p._pt||p,d.s=(r||r===0)&&!a?r:d.s+(r||0)+o*d.c,d.c=i-d.s,p.e&&(p.e=yn(i)+ui(p.e)),p.b&&(p.b=d.s+ui(p.b))},G9=function(e,t){var i=e[0]?jo(e[0]).harness:0,r=i&&i.aliases,a,o,l,c;if(!r)return t;a=al({},t);for(o in r)if(o in a)for(c=r[o].split(","),l=c.length;l--;)a[c[l]]=a[o];return a},W9=function(e,t,i,r){var a=t.ease||r||"power1.inOut",o,l;if(fi(t))l=i[e]||(i[e]=[]),t.forEach(function(c,f){return l.push({t:f/(t.length-1)*100,v:c,e:a})});else for(o in t)l=i[o]||(i[o]=[]),o==="ease"||l.push({t:parseFloat(e),v:t[o],e:a})},ff=function(e,t,i,r,a){return gn(e)?e.call(t,i,r,a):Yn(e)&&~e.indexOf("random(")?Xf(e):e},VR=i1+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",XR={};Bi(VR+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return XR[n]=1});var Tn=function(n){uR(e,n);function e(i,r,a,o){var l;typeof r=="number"&&(a.duration=r,r=a,a=null),l=n.call(this,o?r:uf(r))||this;var c=l.vars,f=c.duration,d=c.delay,p=c.immediateRender,m=c.stagger,v=c.overwrite,M=c.keyframes,x=c.defaults,_=c.scrollTrigger,g=c.yoyoEase,S=r.parent||ln,y=(fi(i)||fR(i)?is(i[0]):"length"in r)?[i]:Dr(i),w,A,R,P,N,T,C,G;if(l._targets=y.length?r1(y):Wf("GSAP target "+i+" not found. https://gsap.com",!lr.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=v,M||m||ip(f)||ip(d)){if(r=l.vars,w=l.timeline=new Si({data:"nested",defaults:x||{},targets:S&&S.data==="nested"?S.vars.targets:y}),w.kill(),w.parent=w._dp=Ga(l),w._start=0,m||ip(f)||ip(d)){if(P=y.length,C=m&&RR(m),wa(m))for(N in m)~VR.indexOf(N)&&(G||(G={}),G[N]=m[N]);for(A=0;A<P;A++)R=dm(r,XR),R.stagger=0,g&&(R.yoyoEase=g),G&&al(R,G),T=y[A],R.duration=+ff(f,Ga(l),A,T,y),R.delay=(+ff(d,Ga(l),A,T,y)||0)-l._delay,!m&&P===1&&R.delay&&(l._delay=d=R.delay,l._start+=d,R.delay=0),w.to(T,R,C?C(A,T,y):0),w._ease=bt.none;w.duration()?f=d=0:l.timeline=0}else if(M){uf(Fr(w.vars.defaults,{ease:"none"})),w._ease=qo(M.ease||r.ease||"none");var X=0,ae,k,Y;if(fi(M))M.forEach(function(K){return w.to(y,K,">")}),w.duration();else{R={};for(N in M)N==="ease"||N==="easeEach"||W9(N,M[N],R,M.easeEach);for(N in R)for(ae=R[N].sort(function(K,se){return K.t-se.t}),X=0,A=0;A<ae.length;A++)k=ae[A],Y={ease:k.e,duration:(k.t-(A?ae[A-1].t:0))/100*f},Y[N]=k.v,w.to(y,Y,X),X+=Y.duration;w.duration()<f&&w.to({},{duration:f-w.duration()})}}f||l.duration(f=w.duration())}else l.timeline=0;return v===!0&&!Zy&&(Ns=Ga(l),ln.killTweensOf(y),Ns=0),ga(S,Ga(l),a),r.reversed&&l.reverse(),r.paused&&l.paused(!0),(p||!f&&!M&&l._start===Vn(S._time)&&zi(p)&&y9(Ga(l))&&S.data!=="nested")&&(l._tTime=-Vt,l.render(Math.max(0,-d)||0)),_&&TR(Ga(l),_),l}var t=e.prototype;return t.render=function(r,a,o){var l=this._time,c=this._tDur,f=this._dur,d=r<0,p=r>c-Vt&&!d?c:r<Vt?0:r,m,v,M,x,_,g,S,y,w;if(!f)E9(this,r,a,o);else if(p!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d){if(m=p,y=this.timeline,this._repeat){if(x=f+this._rDelay,this._repeat<-1&&d)return this.totalTime(x*100+r,a,o);if(m=Vn(p%x),p===c?(M=this._repeat,m=f):(M=~~(p/x),M&&M===Vn(p/x)&&(m=f,M--),m>f&&(m=f)),g=this._yoyo&&M&1,g&&(w=this._yEase,m=f-m),_=Yu(this._tTime,x),m===l&&!o&&this._initted&&M===_)return this._tTime=p,this;M!==_&&(y&&this._yEase&&BR(y,g),this.vars.repeatRefresh&&!g&&!this._lock&&this._time!==x&&this._initted&&(this._lock=o=1,this.render(Vn(x*M),!0).invalidate()._lock=0))}if(!this._initted){if(bR(this,d?r:m,o,a,p))return this._tTime=0,this;if(l!==this._time&&!(o&&this.vars.repeatRefresh&&M!==_))return this;if(f!==this._dur)return this.render(r,a,o)}if(this._tTime=p,this._time=m,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(w||this._ease)(m/f),this._from&&(this.ratio=S=1-S),m&&!l&&!a&&!M&&(ar(this,"onStart"),this._tTime!==p))return this;for(v=this._pt;v;)v.r(S,v.d),v=v._next;y&&y.render(r<0?r:y._dur*y._ease(m/this._dur),a,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!a&&(d&&mx(this,r,a,o),ar(this,"onUpdate")),this._repeat&&M!==_&&this.vars.onRepeat&&!a&&this.parent&&ar(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(d&&!this._onUpdate&&mx(this,r,!0,!0),(r||!f)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&ro(this,1),!a&&!(d&&!l)&&(p||l||g)&&(ar(this,p===c?"onComplete":"onReverseComplete",!0),this._prom&&!(p<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,a,o,l,c){Yf||ir.wake(),this._ts||this.play();var f=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||s1(this,f),d=this._ease(f/this._dur),H9(this,r,a,o,l,d,f,c)?this.resetTo(r,a,o,l,1):($m(this,0),this.parent||MR(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,a){if(a===void 0&&(a="all"),!r&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Yc(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,a,Ns&&Ns.vars.overwrite!==!0)._first||Yc(this),this.parent&&o!==this.timeline.totalDuration()&&ju(this,this._dur*this.timeline._tDur/o,0,1),this}var l=this._targets,c=r?Dr(r):l,f=this._ptLookup,d=this._pt,p,m,v,M,x,_,g;if((!a||a==="all")&&_9(l,c))return a==="all"&&(this._pt=0),Yc(this);for(p=this._op=this._op||[],a!=="all"&&(Yn(a)&&(x={},Bi(a,function(S){return x[S]=1}),a=x),a=G9(l,a)),g=l.length;g--;)if(~c.indexOf(l[g])){m=f[g],a==="all"?(p[g]=a,M=m,v={}):(v=p[g]=p[g]||{},M=a);for(x in M)_=m&&m[x],_&&((!("kill"in _.d)||_.d.kill(x)===!0)&&Ym(this,_,"_pt"),delete m[x]),v!=="all"&&(v[x]=1)}return this._initted&&!this._pt&&d&&Yc(this),this},e.to=function(r,a){return new e(r,a,arguments[2])},e.from=function(r,a){return cf(1,arguments)},e.delayedCall=function(r,a,o,l){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:a,onReverseComplete:a,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:l})},e.fromTo=function(r,a,o){return cf(2,arguments)},e.set=function(r,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(r,a)},e.killTweensOf=function(r,a,o){return ln.killTweensOf(r,a,o)},e}(jf);Fr(Tn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bi("staggerTo,staggerFrom,staggerFromTo",function(n){Tn[n]=function(){var e=new Si,t=vx.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var o1=function(e,t,i){return e[t]=i},YR=function(e,t,i){return e[t](i)},V9=function(e,t,i,r){return e[t](r.fp,i)},X9=function(e,t,i){return e.setAttribute(t,i)},l1=function(e,t){return gn(e[t])?YR:Qy(e[t])&&e.setAttribute?X9:o1},jR=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Y9=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},$R=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},u1=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},j9=function(e,t,i,r){for(var a=this._pt,o;a;)o=a._next,a.p===r&&a.modifier(e,t,i),a=o},$9=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ym(this,t,"_pt"):t.dep||(i=1),t=r;return!i},q9=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},qR=function(e){for(var t=e._pt,i,r,a,o;t;){for(i=t._next,r=a;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:a=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=a},Hi=function(){function n(t,i,r,a,o,l,c,f,d){this.t=i,this.s=a,this.c=o,this.p=r,this.r=l||jR,this.d=c||this,this.set=f||o1,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,a){this.mSet=this.mSet||this.set,this.set=q9,this.m=i,this.mt=a,this.tween=r},n}();Bi(i1+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return n1[n]=1});cr.TweenMax=cr.TweenLite=Tn;cr.TimelineLite=cr.TimelineMax=Si;ln=new Si({sortChildren:!1,defaults:Xu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});lr.stringFilter=kR;var Ko=[],Tp={},K9=[],ub=0,Z9=0,P0=function(e){return(Tp[e]||K9).map(function(t){return t()})},Sx=function(){var e=Date.now(),t=[];e-ub>2&&(P0("matchMediaInit"),Ko.forEach(function(i){var r=i.queries,a=i.conditions,o,l,c,f;for(l in r)o=da.matchMedia(r[l]).matches,o&&(c=1),o!==a[l]&&(a[l]=o,f=1);f&&(i.revert(),c&&t.push(i))}),P0("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),ub=e,P0("matchMedia"))},KR=function(){function n(t,i){this.selector=i&&_x(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Z9++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,a){gn(i)&&(a=r,r=i,i=gn);var o=this,l=function(){var f=an,d=o.selector,p;return f&&f!==o&&f.data.push(o),a&&(o.selector=_x(a)),an=o,p=r.apply(o,arguments),gn(p)&&o._r.push(p),an=f,o.selector=d,o.isReverted=!1,p};return o.last=l,i===gn?l(o,function(c){return o.add(null,c)}):i?o[i]=l:l},e.ignore=function(i){var r=an;an=null,i(this),an=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Tn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var a=this;if(i?function(){for(var l=a.getTweens(),c=a.data.length,f;c--;)f=a.data[c],f.data==="isFlip"&&(f.revert(),f.getChildren(!0,!0,!1).forEach(function(d){return l.splice(l.indexOf(d),1)}));for(l.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,p){return p.g-d.g||-1/0}).forEach(function(d){return d.t.revert(i)}),c=a.data.length;c--;)f=a.data[c],f instanceof Si?f.data!=="nested"&&(f.scrollTrigger&&f.scrollTrigger.revert(),f.kill()):!(f instanceof Tn)&&f.revert&&f.revert(i);a._r.forEach(function(d){return d(i,a)}),a.isReverted=!0}():this.data.forEach(function(l){return l.kill&&l.kill()}),this.clear(),r)for(var o=Ko.length;o--;)Ko[o].id===this.id&&Ko.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),Q9=function(){function n(t){this.contexts=[],this.scope=t,an&&an.data.push(this)}var e=n.prototype;return e.add=function(i,r,a){wa(i)||(i={matches:i});var o=new KR(0,a||this.scope),l=o.conditions={},c,f,d;an&&!o.selector&&(o.selector=an.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(f in i)f==="all"?d=1:(c=da.matchMedia(i[f]),c&&(Ko.indexOf(o)<0&&Ko.push(o),(l[f]=c.matches)&&(d=1),c.addListener?c.addListener(Sx):c.addEventListener("change",Sx)));return d&&r(o,function(p){return o.add(null,p)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),pm={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return NR(r)})},timeline:function(e){return new Si(e)},getTweensOf:function(e,t){return ln.getTweensOf(e,t)},getProperty:function(e,t,i,r){Yn(e)&&(e=Dr(e)[0]);var a=jo(e||{}).get,o=i?ER:SR;return i==="native"&&(i=""),e&&(t?o((Ji[t]&&Ji[t].get||a)(e,t,i,r)):function(l,c,f){return o((Ji[l]&&Ji[l].get||a)(e,l,c,f))})},quickSetter:function(e,t,i){if(e=Dr(e),e.length>1){var r=e.map(function(d){return Wi.quickSetter(d,t,i)}),a=r.length;return function(d){for(var p=a;p--;)r[p](d)}}e=e[0]||{};var o=Ji[t],l=jo(e),c=l.harness&&(l.harness.aliases||{})[t]||t,f=o?function(d){var p=new o;yu._pt=0,p.init(e,i?d+i:d,yu,0,[e]),p.render(1,p),yu._pt&&u1(1,yu)}:l.set(e,c);return o?f:function(d){return f(e,c,i?d+i:d,l,1)}},quickTo:function(e,t,i){var r,a=Wi.to(e,al((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(c,f,d){return a.resetTo(t,c,f,d)};return o.tween=a,o},isTweening:function(e){return ln.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=qo(e.ease,Xu.ease)),rb(Xu,e||{})},config:function(e){return rb(lr,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,a=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(l){return l&&!Ji[l]&&!cr[l]&&Wf(t+" effect requires "+l+" plugin.")}),b0[t]=function(l,c,f){return i(Dr(l),Fr(c||{},a),f)},o&&(Si.prototype[t]=function(l,c,f){return this.add(b0[t](l,wa(c)?c:(f=c)&&{},this),f)})},registerEase:function(e,t){bt[e]=qo(t)},parseEase:function(e,t){return arguments.length?qo(e,t):bt},getById:function(e){return ln.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Si(e),r,a;for(i.smoothChildTiming=zi(e.smoothChildTiming),ln.remove(i),i._dp=0,i._time=i._tTime=ln._time,r=ln._first;r;)a=r._next,(t||!(!r._dur&&r instanceof Tn&&r.vars.onComplete===r._targets[0]))&&ga(i,r,r._start-r._delay),r=a;return ga(ln,i,0),i},context:function(e,t){return e?new KR(e,t):an},matchMedia:function(e){return new Q9(e)},matchMediaRefresh:function(){return Ko.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Sx()},addEventListener:function(e,t){var i=Tp[e]||(Tp[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Tp[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:P9,wrapYoyo:L9,distribute:RR,random:LR,snap:PR,normalize:R9,getUnit:ui,clamp:T9,splitColor:OR,toArray:Dr,selector:_x,mapRange:IR,pipe:A9,unitize:C9,interpolate:D9,shuffle:CR},install:gR,effects:b0,ticker:ir,updateRoot:Si.updateRoot,plugins:Ji,globalTimeline:ln,core:{PropTween:Hi,globals:vR,Tween:Tn,Timeline:Si,Animation:jf,getCache:jo,_removeLinkedListItem:Ym,reverting:function(){return ci},context:function(e){return e&&an&&(an.data.push(e),e._ctx=an),an},suppressOverwrites:function(e){return Zy=e}}};Bi("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return pm[n]=Tn[n]});ir.add(Si.updateRoot);yu=pm.to({},{duration:0});var J9=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},e7=function(e,t){var i=e._targets,r,a,o;for(r in t)for(a=i.length;a--;)o=e._ptLookup[a][r],o&&(o=o.d)&&(o._pt&&(o=J9(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[a],r))},L0=function(e,t){return{name:e,rawVars:1,init:function(r,a,o){o._onInit=function(l){var c,f;if(Yn(a)&&(c={},Bi(a,function(d){return c[d]=1}),a=c),t){c={};for(f in a)c[f]=t(a[f]);a=c}e7(l,a)}}}},Wi=pm.registerPlugin({name:"attr",init:function(e,t,i,r,a){var o,l,c;this.tween=i;for(o in t)c=e.getAttribute(o)||"",l=this.add(e,"setAttribute",(c||0)+"",t[o],r,a,0,0,o),l.op=o,l.b=c,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)ci?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},L0("roundProps",xx),L0("modifiers"),L0("snap",PR))||pm;Tn.version=Si.version=Wi.version="3.12.5";mR=1;Jy()&&$u();bt.Power0;bt.Power1;bt.Power2;bt.Power3;bt.Power4;bt.Linear;bt.Quad;bt.Cubic;bt.Quart;bt.Quint;bt.Strong;bt.Elastic;bt.Back;bt.SteppedEase;bt.Bounce;bt.Sine;bt.Expo;bt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var cb,Os,Lu,c1,Ho,fb,f1,t7=function(){return typeof window<"u"},rs={},Do=180/Math.PI,Du=Math.PI/180,eu=Math.atan2,db=1e8,d1=/([A-Z])/g,n7=/(left|right|width|margin|padding|x)/i,i7=/[\s,\(]\S/,xa={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ex=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},r7=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},a7=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},s7=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},ZR=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},QR=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},o7=function(e,t,i){return e.style[t]=i},l7=function(e,t,i){return e.style.setProperty(t,i)},u7=function(e,t,i){return e._gsap[t]=i},c7=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},f7=function(e,t,i,r,a){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(a,o)},d7=function(e,t,i,r,a){var o=e._gsap;o[t]=i,o.renderTransform(a,o)},un="transform",Gi=un+"Origin",h7=function n(e,t){var i=this,r=this.target,a=r.style,o=r._gsap;if(e in rs&&a){if(this.tfm=this.tfm||{},e!=="transform")e=xa[e]||e,~e.indexOf(",")?e.split(",").forEach(function(l){return i.tfm[l]=Va(r,l)}):this.tfm[e]=o.x?o[e]:Va(r,e),e===Gi&&(this.tfm.zOrigin=o.zOrigin);else return xa.transform.split(",").forEach(function(l){return n.call(i,l,t)});if(this.props.indexOf(un)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Gi,t,"")),e=un}(a||t)&&this.props.push(e,t,a[e])},JR=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},p7=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,a,o;for(a=0;a<e.length;a+=3)e[a+1]?t[e[a]]=e[a+2]:e[a+2]?i[e[a]]=e[a+2]:i.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(d1,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=f1(),(!a||!a.isStart)&&!i[un]&&(JR(i),r.zOrigin&&i[Gi]&&(i[Gi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},eP=function(e,t){var i={target:e,props:[],revert:p7,save:h7};return e._gsap||Wi.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},tP,Mx=function(e,t){var i=Os.createElementNS?Os.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Os.createElement(e);return i&&i.style?i:Os.createElement(e)},Ea=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(d1,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,qu(t)||t,1)||""},hb="O,Moz,ms,Ms,Webkit".split(","),qu=function(e,t,i){var r=t||Ho,a=r.style,o=5;if(e in a&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(hb[o]+e in a););return o<0?null:(o===3?"ms":o>=0?hb[o]:"")+e},wx=function(){t7()&&window.document&&(cb=window,Os=cb.document,Lu=Os.documentElement,Ho=Mx("div")||{style:{}},Mx("div"),un=qu(un),Gi=un+"Origin",Ho.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",tP=!!qu("perspective"),f1=Wi.core.reverting,c1=1)},D0=function n(e){var t=Mx("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,a=this.style.cssText,o;if(Lu.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Lu.removeChild(t),this.style.cssText=a,o},pb=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},nP=function(e){var t;try{t=e.getBBox()}catch{t=D0.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===D0||(t=D0.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+pb(e,["x","cx","x1"])||0,y:+pb(e,["y","cy","y1"])||0,width:0,height:0}:t},iP=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&nP(e))},sl=function(e,t){if(t){var i=e.style,r;t in rs&&t!==Gi&&(t=un),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(d1,"-$1").toLowerCase())):i.removeAttribute(t)}},Fs=function(e,t,i,r,a,o){var l=new Hi(e._pt,t,i,0,1,o?QR:ZR);return e._pt=l,l.b=r,l.e=a,e._props.push(i),l},mb={deg:1,rad:1,turn:1},m7={grid:1,flex:1},ao=function n(e,t,i,r){var a=parseFloat(i)||0,o=(i+"").trim().substr((a+"").length)||"px",l=Ho.style,c=n7.test(t),f=e.tagName.toLowerCase()==="svg",d=(f?"client":"offset")+(c?"Width":"Height"),p=100,m=r==="px",v=r==="%",M,x,_,g;if(r===o||!a||mb[r]||mb[o])return a;if(o!=="px"&&!m&&(a=n(e,t,i,"px")),g=e.getCTM&&iP(e),(v||o==="%")&&(rs[t]||~t.indexOf("adius")))return M=g?e.getBBox()[c?"width":"height"]:e[d],yn(v?a/M*p:a/100*M);if(l[c?"width":"height"]=p+(m?o:r),x=~t.indexOf("adius")||r==="em"&&e.appendChild&&!f?e:e.parentNode,g&&(x=(e.ownerSVGElement||{}).parentNode),(!x||x===Os||!x.appendChild)&&(x=Os.body),_=x._gsap,_&&v&&_.width&&c&&_.time===ir.time&&!_.uncache)return yn(a/_.width*p);if(v&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=p+r,M=e[d],S?e.style[t]=S:sl(e,t)}else(v||o==="%")&&!m7[Ea(x,"display")]&&(l.position=Ea(e,"position")),x===e&&(l.position="static"),x.appendChild(Ho),M=Ho[d],x.removeChild(Ho),l.position="absolute";return c&&v&&(_=jo(x),_.time=ir.time,_.width=x[d]),yn(m?M*a/p:M&&a?p/M*a:0)},Va=function(e,t,i,r){var a;return c1||wx(),t in xa&&t!=="transform"&&(t=xa[t],~t.indexOf(",")&&(t=t.split(",")[0])),rs[t]&&t!=="transform"?(a=qf(e,r),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:gm(Ea(e,Gi))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||r||~(a+"").indexOf("calc("))&&(a=mm[t]&&mm[t](e,t,i)||Ea(e,t)||xR(e,t)||(t==="opacity"?1:0))),i&&!~(a+"").trim().indexOf(" ")?ao(e,t,a,i)+i:a},g7=function(e,t,i,r){if(!i||i==="none"){var a=qu(t,e,1),o=a&&Ea(e,a,1);o&&o!==i?(t=a,i=o):t==="borderColor"&&(i=Ea(e,"borderTopColor"))}var l=new Hi(this._pt,e.style,t,0,1,$R),c=0,f=0,d,p,m,v,M,x,_,g,S,y,w,A;if(l.b=i,l.e=r,i+="",r+="",r==="auto"&&(x=e.style[t],e.style[t]=r,r=Ea(e,t)||r,x?e.style[t]=x:sl(e,t)),d=[i,r],kR(d),i=d[0],r=d[1],m=i.match(xu)||[],A=r.match(xu)||[],A.length){for(;p=xu.exec(r);)_=p[0],S=r.substring(c,p.index),M?M=(M+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(M=1),_!==(x=m[f++]||"")&&(v=parseFloat(x)||0,w=x.substr((v+"").length),_.charAt(1)==="="&&(_=Pu(v,_)+w),g=parseFloat(_),y=_.substr((g+"").length),c=xu.lastIndex-y.length,y||(y=y||lr.units[t]||w,c===r.length&&(r+=y,l.e+=y)),w!==y&&(v=ao(e,t,x,y)||0),l._pt={_next:l._pt,p:S||f===1?S:",",s:v,c:g-v,m:M&&M<4||t==="zIndex"?Math.round:0});l.c=c<r.length?r.substring(c,r.length):""}else l.r=t==="display"&&r==="none"?QR:ZR;return hR.test(r)&&(l.e=0),this._pt=l,l},gb={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},v7=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=gb[i]||i,t[1]=gb[r]||r,t.join(" ")},_7=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,a=t.u,o=i._gsap,l,c,f;if(a==="all"||a===!0)r.cssText="",c=1;else for(a=a.split(","),f=a.length;--f>-1;)l=a[f],rs[l]&&(c=1,l=l==="transformOrigin"?Gi:un),sl(i,l);c&&(sl(i,un),o&&(o.svg&&i.removeAttribute("transform"),qf(i,1),o.uncache=1,JR(r)))}},mm={clearProps:function(e,t,i,r,a){if(a.data!=="isFromStart"){var o=e._pt=new Hi(e._pt,t,i,0,0,_7);return o.u=r,o.pr=-10,o.tween=a,e._props.push(i),1}}},$f=[1,0,0,1,0,0],rP={},aP=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},vb=function(e){var t=Ea(e,un);return aP(t)?$f:t.substr(7).match(dR).map(yn)},h1=function(e,t){var i=e._gsap||jo(e),r=e.style,a=vb(e),o,l,c,f;return i.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,a=[c.a,c.b,c.c,c.d,c.e,c.f],a.join(",")==="1,0,0,1,0,0"?$f:a):(a===$f&&!e.offsetParent&&e!==Lu&&!i.svg&&(c=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(f=1,l=e.nextElementSibling,Lu.appendChild(e)),a=vb(e),c?r.display=c:sl(e,"display"),f&&(l?o.insertBefore(e,l):o?o.appendChild(e):Lu.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Tx=function(e,t,i,r,a,o){var l=e._gsap,c=a||h1(e,!0),f=l.xOrigin||0,d=l.yOrigin||0,p=l.xOffset||0,m=l.yOffset||0,v=c[0],M=c[1],x=c[2],_=c[3],g=c[4],S=c[5],y=t.split(" "),w=parseFloat(y[0])||0,A=parseFloat(y[1])||0,R,P,N,T;i?c!==$f&&(P=v*_-M*x)&&(N=w*(_/P)+A*(-x/P)+(x*S-_*g)/P,T=w*(-M/P)+A*(v/P)-(v*S-M*g)/P,w=N,A=T):(R=nP(e),w=R.x+(~y[0].indexOf("%")?w/100*R.width:w),A=R.y+(~(y[1]||y[0]).indexOf("%")?A/100*R.height:A)),r||r!==!1&&l.smooth?(g=w-f,S=A-d,l.xOffset=p+(g*v+S*x)-g,l.yOffset=m+(g*M+S*_)-S):l.xOffset=l.yOffset=0,l.xOrigin=w,l.yOrigin=A,l.smooth=!!r,l.origin=t,l.originIsAbsolute=!!i,e.style[Gi]="0px 0px",o&&(Fs(o,l,"xOrigin",f,w),Fs(o,l,"yOrigin",d,A),Fs(o,l,"xOffset",p,l.xOffset),Fs(o,l,"yOffset",m,l.yOffset)),e.setAttribute("data-svg-origin",w+" "+A)},qf=function(e,t){var i=e._gsap||new GR(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,a=i.scaleX<0,o="px",l="deg",c=getComputedStyle(e),f=Ea(e,Gi)||"0",d,p,m,v,M,x,_,g,S,y,w,A,R,P,N,T,C,G,X,ae,k,Y,K,se,H,Z,Q,le,de,re,ue,xe;return d=p=m=x=_=g=S=y=w=0,v=M=1,i.svg=!!(e.getCTM&&iP(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(r[un]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[un]!=="none"?c[un]:"")),r.scale=r.rotate=r.translate="none"),P=h1(e,i.svg),i.svg&&(i.uncache?(H=e.getBBox(),f=i.xOrigin-H.x+"px "+(i.yOrigin-H.y)+"px",se=""):se=!t&&e.getAttribute("data-svg-origin"),Tx(e,se||f,!!se||i.originIsAbsolute,i.smooth!==!1,P)),A=i.xOrigin||0,R=i.yOrigin||0,P!==$f&&(G=P[0],X=P[1],ae=P[2],k=P[3],d=Y=P[4],p=K=P[5],P.length===6?(v=Math.sqrt(G*G+X*X),M=Math.sqrt(k*k+ae*ae),x=G||X?eu(X,G)*Do:0,S=ae||k?eu(ae,k)*Do+x:0,S&&(M*=Math.abs(Math.cos(S*Du))),i.svg&&(d-=A-(A*G+R*ae),p-=R-(A*X+R*k))):(xe=P[6],re=P[7],Q=P[8],le=P[9],de=P[10],ue=P[11],d=P[12],p=P[13],m=P[14],N=eu(xe,de),_=N*Do,N&&(T=Math.cos(-N),C=Math.sin(-N),se=Y*T+Q*C,H=K*T+le*C,Z=xe*T+de*C,Q=Y*-C+Q*T,le=K*-C+le*T,de=xe*-C+de*T,ue=re*-C+ue*T,Y=se,K=H,xe=Z),N=eu(-ae,de),g=N*Do,N&&(T=Math.cos(-N),C=Math.sin(-N),se=G*T-Q*C,H=X*T-le*C,Z=ae*T-de*C,ue=k*C+ue*T,G=se,X=H,ae=Z),N=eu(X,G),x=N*Do,N&&(T=Math.cos(N),C=Math.sin(N),se=G*T+X*C,H=Y*T+K*C,X=X*T-G*C,K=K*T-Y*C,G=se,Y=H),_&&Math.abs(_)+Math.abs(x)>359.9&&(_=x=0,g=180-g),v=yn(Math.sqrt(G*G+X*X+ae*ae)),M=yn(Math.sqrt(K*K+xe*xe)),N=eu(Y,K),S=Math.abs(N)>2e-4?N*Do:0,w=ue?1/(ue<0?-ue:ue):0),i.svg&&(se=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!aP(Ea(e,un)),se&&e.setAttribute("transform",se))),Math.abs(S)>90&&Math.abs(S)<270&&(a?(v*=-1,S+=x<=0?180:-180,x+=x<=0?180:-180):(M*=-1,S+=S<=0?180:-180)),t=t||i.uncache,i.x=d-((i.xPercent=d&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=p-((i.yPercent=p&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-p)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=m+o,i.scaleX=yn(v),i.scaleY=yn(M),i.rotation=yn(x)+l,i.rotationX=yn(_)+l,i.rotationY=yn(g)+l,i.skewX=S+l,i.skewY=y+l,i.transformPerspective=w+o,(i.zOrigin=parseFloat(f.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Gi]=gm(f)),i.xOffset=i.yOffset=0,i.force3D=lr.force3D,i.renderTransform=i.svg?y7:tP?sP:x7,i.uncache=0,i},gm=function(e){return(e=e.split(" "))[0]+" "+e[1]},I0=function(e,t,i){var r=ui(t);return yn(parseFloat(t)+parseFloat(ao(e,"x",i+"px",r)))+r},x7=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,sP(e,t)},To="0deg",zc="0px",bo=") ",sP=function(e,t){var i=t||this,r=i.xPercent,a=i.yPercent,o=i.x,l=i.y,c=i.z,f=i.rotation,d=i.rotationY,p=i.rotationX,m=i.skewX,v=i.skewY,M=i.scaleX,x=i.scaleY,_=i.transformPerspective,g=i.force3D,S=i.target,y=i.zOrigin,w="",A=g==="auto"&&e&&e!==1||g===!0;if(y&&(p!==To||d!==To)){var R=parseFloat(d)*Du,P=Math.sin(R),N=Math.cos(R),T;R=parseFloat(p)*Du,T=Math.cos(R),o=I0(S,o,P*T*-y),l=I0(S,l,-Math.sin(R)*-y),c=I0(S,c,N*T*-y+y)}_!==zc&&(w+="perspective("+_+bo),(r||a)&&(w+="translate("+r+"%, "+a+"%) "),(A||o!==zc||l!==zc||c!==zc)&&(w+=c!==zc||A?"translate3d("+o+", "+l+", "+c+") ":"translate("+o+", "+l+bo),f!==To&&(w+="rotate("+f+bo),d!==To&&(w+="rotateY("+d+bo),p!==To&&(w+="rotateX("+p+bo),(m!==To||v!==To)&&(w+="skew("+m+", "+v+bo),(M!==1||x!==1)&&(w+="scale("+M+", "+x+bo),S.style[un]=w||"translate(0, 0)"},y7=function(e,t){var i=t||this,r=i.xPercent,a=i.yPercent,o=i.x,l=i.y,c=i.rotation,f=i.skewX,d=i.skewY,p=i.scaleX,m=i.scaleY,v=i.target,M=i.xOrigin,x=i.yOrigin,_=i.xOffset,g=i.yOffset,S=i.forceCSS,y=parseFloat(o),w=parseFloat(l),A,R,P,N,T;c=parseFloat(c),f=parseFloat(f),d=parseFloat(d),d&&(d=parseFloat(d),f+=d,c+=d),c||f?(c*=Du,f*=Du,A=Math.cos(c)*p,R=Math.sin(c)*p,P=Math.sin(c-f)*-m,N=Math.cos(c-f)*m,f&&(d*=Du,T=Math.tan(f-d),T=Math.sqrt(1+T*T),P*=T,N*=T,d&&(T=Math.tan(d),T=Math.sqrt(1+T*T),A*=T,R*=T)),A=yn(A),R=yn(R),P=yn(P),N=yn(N)):(A=p,N=m,R=P=0),(y&&!~(o+"").indexOf("px")||w&&!~(l+"").indexOf("px"))&&(y=ao(v,"x",o,"px"),w=ao(v,"y",l,"px")),(M||x||_||g)&&(y=yn(y+M-(M*A+x*P)+_),w=yn(w+x-(M*R+x*N)+g)),(r||a)&&(T=v.getBBox(),y=yn(y+r/100*T.width),w=yn(w+a/100*T.height)),T="matrix("+A+","+R+","+P+","+N+","+y+","+w+")",v.setAttribute("transform",T),S&&(v.style[un]=T)},S7=function(e,t,i,r,a){var o=360,l=Yn(a),c=parseFloat(a)*(l&&~a.indexOf("rad")?Do:1),f=c-r,d=r+f+"deg",p,m;return l&&(p=a.split("_")[1],p==="short"&&(f%=o,f!==f%(o/2)&&(f+=f<0?o:-o)),p==="cw"&&f<0?f=(f+o*db)%o-~~(f/o)*o:p==="ccw"&&f>0&&(f=(f-o*db)%o-~~(f/o)*o)),e._pt=m=new Hi(e._pt,t,i,r,f,r7),m.e=d,m.u="deg",e._props.push(i),m},_b=function(e,t){for(var i in t)e[i]=t[i];return e},E7=function(e,t,i){var r=_b({},i._gsap),a="perspective,force3D,transformOrigin,svgOrigin",o=i.style,l,c,f,d,p,m,v,M;r.svg?(f=i.getAttribute("transform"),i.setAttribute("transform",""),o[un]=t,l=qf(i,1),sl(i,un),i.setAttribute("transform",f)):(f=getComputedStyle(i)[un],o[un]=t,l=qf(i,1),o[un]=f);for(c in rs)f=r[c],d=l[c],f!==d&&a.indexOf(c)<0&&(v=ui(f),M=ui(d),p=v!==M?ao(i,c,f,M):parseFloat(f),m=parseFloat(d),e._pt=new Hi(e._pt,l,c,p,m-p,Ex),e._pt.u=M||0,e._props.push(c));_b(l,r)};Bi("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",a="Left",o=(e<3?[t,i,r,a]:[t+a,t+i,r+i,r+a]).map(function(l){return e<2?n+l:"border"+l+n});mm[e>1?"border"+n:n]=function(l,c,f,d,p){var m,v;if(arguments.length<4)return m=o.map(function(M){return Va(l,M,f)}),v=m.join(" "),v.split(m[0]).length===5?m[0]:v;m=(d+"").split(" "),v={},o.forEach(function(M,x){return v[M]=m[x]=m[x]||m[(x-1)/2|0]}),l.init(c,v,p)}});var oP={name:"css",register:wx,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,a){var o=this._props,l=e.style,c=i.vars.startAt,f,d,p,m,v,M,x,_,g,S,y,w,A,R,P,N;c1||wx(),this.styles=this.styles||eP(e),N=this.styles.props,this.tween=i;for(x in t)if(x!=="autoRound"&&(d=t[x],!(Ji[x]&&WR(x,t,i,r,e,a)))){if(v=typeof d,M=mm[x],v==="function"&&(d=d.call(i,r,e,a),v=typeof d),v==="string"&&~d.indexOf("random(")&&(d=Xf(d)),M)M(this,e,x,d,i)&&(P=1);else if(x.substr(0,2)==="--")f=(getComputedStyle(e).getPropertyValue(x)+"").trim(),d+="",Zs.lastIndex=0,Zs.test(f)||(_=ui(f),g=ui(d)),g?_!==g&&(f=ao(e,x,f,g)+g):_&&(d+=_),this.add(l,"setProperty",f,d,r,a,0,0,x),o.push(x),N.push(x,0,l[x]);else if(v!=="undefined"){if(c&&x in c?(f=typeof c[x]=="function"?c[x].call(i,r,e,a):c[x],Yn(f)&&~f.indexOf("random(")&&(f=Xf(f)),ui(f+"")||f==="auto"||(f+=lr.units[x]||ui(Va(e,x))||""),(f+"").charAt(1)==="="&&(f=Va(e,x))):f=Va(e,x),m=parseFloat(f),S=v==="string"&&d.charAt(1)==="="&&d.substr(0,2),S&&(d=d.substr(2)),p=parseFloat(d),x in xa&&(x==="autoAlpha"&&(m===1&&Va(e,"visibility")==="hidden"&&p&&(m=0),N.push("visibility",0,l.visibility),Fs(this,l,"visibility",m?"inherit":"hidden",p?"inherit":"hidden",!p)),x!=="scale"&&x!=="transform"&&(x=xa[x],~x.indexOf(",")&&(x=x.split(",")[0]))),y=x in rs,y){if(this.styles.save(x),w||(A=e._gsap,A.renderTransform&&!t.parseTransform||qf(e,t.parseTransform),R=t.smoothOrigin!==!1&&A.smooth,w=this._pt=new Hi(this._pt,l,un,0,1,A.renderTransform,A,0,-1),w.dep=1),x==="scale")this._pt=new Hi(this._pt,A,"scaleY",A.scaleY,(S?Pu(A.scaleY,S+p):p)-A.scaleY||0,Ex),this._pt.u=0,o.push("scaleY",x),x+="X";else if(x==="transformOrigin"){N.push(Gi,0,l[Gi]),d=v7(d),A.svg?Tx(e,d,0,R,0,this):(g=parseFloat(d.split(" ")[2])||0,g!==A.zOrigin&&Fs(this,A,"zOrigin",A.zOrigin,g),Fs(this,l,x,gm(f),gm(d)));continue}else if(x==="svgOrigin"){Tx(e,d,1,R,0,this);continue}else if(x in rP){S7(this,A,x,m,S?Pu(m,S+d):d);continue}else if(x==="smoothOrigin"){Fs(this,A,"smooth",A.smooth,d);continue}else if(x==="force3D"){A[x]=d;continue}else if(x==="transform"){E7(this,d,e);continue}}else x in l||(x=qu(x)||x);if(y||(p||p===0)&&(m||m===0)&&!i7.test(d)&&x in l)_=(f+"").substr((m+"").length),p||(p=0),g=ui(d)||(x in lr.units?lr.units[x]:_),_!==g&&(m=ao(e,x,f,g)),this._pt=new Hi(this._pt,y?A:l,x,m,(S?Pu(m,S+p):p)-m,!y&&(g==="px"||x==="zIndex")&&t.autoRound!==!1?s7:Ex),this._pt.u=g||0,_!==g&&g!=="%"&&(this._pt.b=f,this._pt.r=a7);else if(x in l)g7.call(this,e,x,f,S?S+d:d);else if(x in e)this.add(e,x,f||e[x],S?S+d:d,r,a);else if(x!=="parseTransform"){t1(x,d);continue}y||(x in l?N.push(x,0,l[x]):N.push(x,1,f||e[x])),o.push(x)}}P&&qR(this)},render:function(e,t){if(t.tween._time||!f1())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Va,aliases:xa,getSetter:function(e,t,i){var r=xa[t];return r&&r.indexOf(",")<0&&(t=r),t in rs&&t!==Gi&&(e._gsap.x||Va(e,"x"))?i&&fb===i?t==="scale"?c7:u7:(fb=i||{})&&(t==="scale"?f7:d7):e.style&&!Qy(e.style[t])?o7:~t.indexOf("-")?l7:l1(e,t)},core:{_removeProperty:sl,_getMatrix:h1}};Wi.utils.checkPrefix=qu;Wi.core.getStyleSaver=eP;(function(n,e,t,i){var r=Bi(n+","+e+","+t,function(a){rs[a]=1});Bi(e,function(a){lr.units[a]="deg",rP[a]=1}),xa[r[13]]=n+","+e,Bi(i,function(a){var o=a.split(":");xa[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){lr.units[n]="px"});Wi.registerPlugin(oP);var bp=Wi.registerPlugin(oP)||Wi;bp.core.Tween;var M7=`uniform float distortion;
uniform float distortionX;
uniform float distortionY;

varying vec2 vUv;

void main() {
    vUv = uv;

    vec3 newPosition = position;

    
    float distanceX = length(position.x) / 50.0;
    float distanceY = length(position.y) / 50.0;

    float distanceXPow = pow(distortionX, distanceX);
    float distanceYPow = pow(distortionY, distanceY);

    newPosition.z -= distortion * max(distanceXPow + distanceYPow, 2.2);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}`,w7=`uniform float alpha;
uniform float displacementX;
uniform float displacementY;
uniform sampler2D image;
uniform vec2 imageResolution;
uniform vec2 resolution;
uniform float scale;
uniform float time;

varying vec2 vUv;

vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
    return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float cnoise(vec3 P) {
    vec3 Pi0 = floor(P); 
    vec3 Pi1 = Pi0 + vec3(1.0); 
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); 
    vec3 Pf1 = Pf0 - vec3(1.0); 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}

vec2 zoom(vec2 uv, float amount) {
    return 0.5 + ((uv - 0.5) * (1.0 - amount));
}

void main() {
    vec2 ratio = vec2(min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0), min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0));
    vec2 uv = vec2(vUv.x * ratio.x + (1.0 - ratio.x) * 0.5, vUv.y * ratio.y + (1.0 - ratio.y) * 0.5);

    float noise = cnoise(vec3(uv, cos(time * 0.1)) * 10.0 + time * 0.5);

    uv.x += noise * displacementX;
    uv.y += noise * displacementY;

    uv = zoom(uv, scale);

    gl_FragColor = vec4(texture2D(image, uv).xyz, alpha);
}`;class T7 extends cn{constructor({cover:t,environment:i,index:r}){super();Ue(this,"index");Ue(this,"environment");Ue(this,"location");Ue(this,"height");Ue(this,"width");Ue(this,"isAfter");Ue(this,"isBefore");this.index=r,this.environment=i,this.location=i.height*1.33*r*-1,this.position.y=this.location,this.isAfter=!1,this.isBefore=!1,this.createGeometry(i),this.createMaterial(t)}createGeometry({height:t,width:i}){this.height=t,this.width=i,this.geometry=new or(this.width,this.height,100,50),this.position.z=-.01}createMaterial(t){this.material=new Nn({depthTest:!1,depthWrite:!1,uniforms:{alpha:{value:1},displacementX:{value:0},displacementY:{value:0},distortion:{value:0},distortionX:{value:1.75},distortionY:{value:2},image:{value:t},imageResolution:{value:new st(t.image.width,t.image.height)},resolution:{value:new st(window.innerWidth,window.innerHeight)},scale:{value:0},time:{value:0}},transparent:!0,vertexShader:M7,fragmentShader:w7})}onTouchStart(){this.material instanceof Nn&&bp.to(this.material.uniforms.displacementY,{value:.1,duration:.4})}onTouchEnd(){this.material instanceof Nn&&(bp.killTweensOf(this.material.uniforms.displacementY),bp.to(this.material.uniforms.displacementY,{value:0,duration:.4}))}update(t){if(this.material instanceof Nn){this.position.y=this.location+t;const i=this.position.y/this.environment.height,r=Math.abs(i);this.material.uniforms.distortion.value=vp(r,0,1,0,5),this.material.uniforms.scale.value=vp(i,0,1,0,.5),this.position.z=vp(r,0,1,-.01,-50)}}animate(t){this.material instanceof Nn&&(this.material.uniforms.time.value=t)}}class b7{constructor({covers:e,environment:t,scene:i}){Ue(this,"covers");Ue(this,"environment");Ue(this,"scene");Ue(this,"position");Ue(this,"scroll");Ue(this,"indexInfinite");Ue(this,"projects");Ue(this,"isDown");Ue(this,"index");Ue(this,"direction");Ue(this,"current");Ue(this,"onCheckDebounce");Ue(this,"onHoldEndDebounce");this.covers=e,this.environment=t,this.scene=i,this.position={current:0,previous:0},this.scroll={clamp:{minimum:0,maximum:0},values:{current:0,target:0},y:{end:0,start:0}},this.indexInfinite=0,this.projects=[],this.isDown=!1,this.index=0,this.direction="none",this.onCheckDebounce=cx.debounce(this.onCheck,200),this.onHoldEndDebounce=cx.debounce(this.onHoldEnd,200),this.createProjects()}createProjects(){this.projects=this.covers.map((e,t)=>{const i=new T7({cover:e,environment:this.environment,index:t});return this.scene.add(i),i})}onTouchDown({y:e}){this.isDown=!0,this.scroll.values.current=this.position.current,this.scroll.y.start=e,this.onHoldStart()}onTouchMove({y:e}){this.isDown&&(this.scroll.y.end=e,this.scroll.values.target=this.scroll.values.current+(this.scroll.y.start-this.scroll.y.end))}onTouchUp(){this.isDown=!1,this.onCheck(),this.onHoldEnd()}onWheel(e){this.scroll.values.target+=e,this.onCheckDebounce(),this.onHoldStart(),this.onHoldEndDebounce()}onHoldStart(){this.projects.forEach(e=>{e.onTouchStart()})}onHoldEnd(){this.projects.forEach(e=>{e.onTouchEnd()})}onCheck(){this.scroll.values.target=this.environment.height*1.33*this.indexInfinite}update(e){const t=this.environment.height*1.33;this.indexInfinite=Math.round(this.scroll.values.target/t);let i=this.indexInfinite%this.covers.length;this.indexInfinite<0&&(i=(this.covers.length-Math.abs(this.indexInfinite%this.covers.length))%this.covers.length),this.index!==i&&(this.index=i),this.current=this.projects[this.index],this.position.current+=(this.scroll.values.target-this.position.current)*.1,this.calculate(),this.position.previous=this.position.current,this.projects.forEach(r=>{r.animate(e)})}calculate(){const e=this.environment.height*1.33,t=e*this.covers.length;this.position.current<this.position.previous?this.direction="up":this.position.current>this.position.previous?this.direction="down":this.direction="none",this.projects.forEach(i=>{if(i.isAfter=i.position.y<-e,i.isBefore=i.position.y>e,this.direction==="down"&&i.isBefore){const r=i.location-t;i.isBefore=!1,i.isAfter=!0,i.location=r}if(this.direction==="up"&&i.isAfter){const r=i.location+t;i.isBefore=!0,i.isAfter=!1,i.location=r}i.update(this.position.current)})}}class A7{constructor({images:e,canvasDom:t}){Ue(this,"environment",{height:0,width:0});Ue(this,"images");Ue(this,"renderer");Ue(this,"scene");Ue(this,"camera");Ue(this,"covers",[]);Ue(this,"loader");Ue(this,"projects");Ue(this,"clock");this.clock=new xC,this.images=e,this.createRenderer(t),this.createScene(),this.createTextures()}createRenderer(e){this.renderer=new id({alpha:!0,canvas:e}),this.renderer.setSize(window.innerWidth,window.innerHeight)}createScene(){this.scene=new rd,this.camera=new yi(45,window.innerWidth/window.innerHeight,1,500),this.camera.position.z=300;const e=eC.degToRad(this.camera.fov),t=Math.tan(e/2)*this.camera.position.z*2,i=t*this.camera.aspect;this.environment={height:t,width:i}}createTextures(){this.covers=[],this.loader=new Ff,this.images.forEach(e=>{var t;(t=this.loader)==null||t.load(e,i=>{var r,a,o;i.generateMipmaps=!1,i.minFilter=er,i.needsUpdate=!0,(r=this.renderer)==null||r.initTexture(i),(a=this.covers)==null||a.push(i),((o=this.covers)==null?void 0:o.length)===this.images.length&&this.createProjects()})})}createProjects(){this.scene&&(this.projects=new b7({covers:this.covers,environment:this.environment,scene:this.scene}))}onTouchDown(e){var t;this.projects&&((t=this.projects)==null||t.onTouchDown(e))}onTouchMove(e){this.projects&&this.projects.onTouchMove(e)}onTouchUp(){this.projects&&this.projects.onTouchUp()}onWheel(e){this.projects&&this.projects.onWheel(e)}update(){var t;const e=this.clock.getElapsedTime();this.projects&&this.projects.update(e),this.scene&&this.camera&&((t=this.renderer)==null||t.render(this.scene,this.camera))}}function C7(){const n=Te.useRef(null),e=Te.useRef(null);return Te.useEffect(()=>{const t=["https://images.unsplash.com/photo-1552922280-27619b672183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&h=768","https://images.unsplash.com/photo-1569503689347-a5dbdaca7c69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&h=768","https://images.unsplash.com/photo-1575651607650-5a5c39edce9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&h=768","https://images.unsplash.com/photo-1575905283836-a741eb65a192?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&h=768","https://images.unsplash.com/photo-1573743338941-39db12ef9b64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&h=768"],i={x:0,y:0},r=n.current;r&&(e.current=new A7({images:t,canvasDom:r})),f(),d();function a(p){p.stopPropagation(),i.x="touches"in p?p.touches[0].clientX:p.clientX,i.y="touches"in p?p.touches[0].clientY:p.clientY,e.current&&e.current.onTouchDown(i)}function o(p){p.stopPropagation(),i.x="touches"in p?p.touches[0].clientX:p.clientX,i.y="touches"in p?p.touches[0].clientY:p.clientY,e.current&&e.current.onTouchMove(i)}function l(p){p.stopPropagation(),i.x="changedTouches"in p?p.changedTouches[0].clientX:p.clientX,i.y="changedTouches"in p?p.changedTouches[0].clientY:p.clientY,e.current&&e.current.onTouchUp()}function c(p){const v=l9(p).pixelY*.2;e.current&&e.current.onWheel(v)}function f(){window.addEventListener("wheel",c),window.addEventListener("mousedown",a),window.addEventListener("mousemove",o),window.addEventListener("mouseup",l),window.addEventListener("touchstart",l),window.addEventListener("touchmove",l),window.addEventListener("touchend",l)}function d(){e.current&&e.current.update(),window.requestAnimationFrame(d)}},[]),Be.jsxs(Be.Fragment,{children:[Be.jsx(ma,{className:"absolute left-3 top-2 z-10 text-white",to:"/",children:Be.jsx(os,{icon:ld,size:"2x"})}),Be.jsx("canvas",{ref:n})]})}var R7=`uniform float bendFactor; 
varying vec2 vUv; 
uniform float imageWidth; 

void main() {
    vUv = uv;

  
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  
    float halfWidth = imageWidth / 2.0;
    float distanceFromCenterX = abs(modelPosition.x);

  
    float normalizedDistance = distanceFromCenterX / halfWidth;
    modelPosition.y += pow(normalizedDistance, 2.0) * bendFactor;

  
    gl_Position = projectionMatrix * viewMatrix * modelPosition;
}`,P7=`varying vec2 vUv;
uniform sampler2D uTexture;
uniform float offsetFactor;

void main() {
    
    vec2 uv = vUv;
    vec2 offsetUv = vUv;
    offsetUv.y += offsetFactor;
    gl_FragColor = vec4(texture(uTexture, offsetUv).xyz, 1.0);
}`;const L7=()=>{const n=Te.useRef(null),e=Te.useRef(!1),t=Te.useRef({x:0,y:0}),i=Te.useRef([]);return Te.useEffect(()=>{const r=new rd,a=new yi(75,window.innerWidth/window.innerHeight,.1,1e3),o=new id({alpha:!0,antialias:!0,canvas:n.current});o.setSize(window.innerWidth,window.innerHeight),a.position.z=5;const l=2*a.position.z*Math.tan(eC.degToRad(a.fov)/2),c=l*a.aspect,f=["https://images.unsplash.com/photo-1552922280-27619b672183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&h=768","https://images.unsplash.com/photo-1569503689347-a5dbdaca7c69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&h=768","https://images.unsplash.com/photo-1575651607650-5a5c39edce9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&h=768","https://images.unsplash.com/photo-1575905283836-a741eb65a192?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&h=768","https://images.unsplash.com/photo-1573743338941-39db12ef9b64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&h=768"],d=l*.3,p=d*.5,m=f.length*(d+p),v=(f.length-1)*(d+p)/2+d/2,M=-v,x=new or(c*.7,l*.3,50,50),_=f.map((N,T)=>{const C=new Ff().load(N),G=new Nn({uniforms:{uTexture:{value:C},bendFactor:{value:0},imageWidth:{value:c*.7},offsetFactor:{value:0}},vertexShader:R7,fragmentShader:P7}),X=new cn(x,G);return r.add(X),X.position.y=T*(d+p)-v,X}),g=()=>{requestAnimationFrame(g),e.current||i.current.forEach(({mesh:N,targetY:T})=>{N.position.y+=(T-N.position.y)*.1}),o.render(r,a)};g();const S=()=>{let N=1/0,T;if(_.forEach(C=>{const G=Math.abs(C.position.y-a.position.y);G<N&&(N=G,T=C)}),T){const C=a.position.y-T.position.y;_.forEach(G=>{G.material instanceof Nn&&(G.material.uniforms.bendFactor.value=0),i.current.push({mesh:G,targetY:G.position.y+C})})}},y=cx.debounce(S,150),w=N=>{const T=N.deltaY*.01;_.forEach(C=>{C.position.y+=T,C.material instanceof Nn&&(C.material.uniforms.bendFactor.value=-T*2.5,C.material.uniforms.offsetFactor.value=T*.7),C.position.y>v?C.position.y-=m:C.position.y<M&&(C.position.y+=m)}),i.current=_.map(C=>({mesh:C,targetY:C.position.y})),y()},A=N=>{e.current=!0,t.current={x:N.clientX,y:N.clientY}},R=N=>{if(e.current){const T=N.clientY-t.current.y;_.forEach(C=>{C.position.y-=T*.01,C.material instanceof Nn&&(C.material.uniforms.bendFactor.value=T*.05,C.material.uniforms.offsetFactor.value=-T*.01),C.position.y>v?C.position.y-=m:C.position.y<M&&(C.position.y+=m)}),t.current={x:N.clientX,y:N.clientY}}},P=()=>{e.current=!1;let N=1/0,T;_.forEach(C=>{const G=Math.abs(C.position.y-a.position.y);C.material instanceof Nn&&(C.material.uniforms.bendFactor.value=0),G<N&&(N=G,T=C)}),i.current=_.map(C=>({mesh:C,targetY:C.position.y+(a.position.y-T.position.y)}))};return document.addEventListener("wheel",w,!1),document.addEventListener("mousedown",A,!1),document.addEventListener("mousemove",R,!1),document.addEventListener("mouseup",P,!1),()=>{document.removeEventListener("wheel",w),document.removeEventListener("mousedown",A),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",P)}},[]),Be.jsxs(Be.Fragment,{children:[Be.jsx(ma,{className:"absolute left-3 top-2 z-10 text-black",to:"/",children:Be.jsx(os,{icon:ld,size:"2x"})}),Be.jsx("canvas",{ref:n})]})};class D7{constructor(e,t,i){Ue(this,"originX");Ue(this,"originY");Ue(this,"effect");Ue(this,"x");Ue(this,"y");Ue(this,"ctx");Ue(this,"vx");Ue(this,"vy");Ue(this,"ease");Ue(this,"friction");Ue(this,"dx");Ue(this,"dy");Ue(this,"distance");Ue(this,"force");Ue(this,"angle");Ue(this,"size");this.originX=e,this.originY=t,this.effect=i,this.x=Math.floor(e),this.y=Math.floor(t),this.ctx=this.effect.ctx,this.ctx.fillStyle="white",this.vx=0,this.vy=0,this.ease=.2,this.friction=.95,this.dx=0,this.dy=0,this.distance=0,this.force=0,this.angle=0,this.size=Math.floor(Math.random()*5),this.draw()}draw(){this.ctx.beginPath(),this.ctx.fillRect(this.x,this.y,this.size,this.size)}update(){this.dx=this.effect.mouse.x-this.x,this.dy=this.effect.mouse.y-this.y,this.distance=this.dx*this.dx+this.dy*this.dy,this.force=-this.effect.mouse.radius/this.distance*8,this.distance<this.effect.mouse.radius&&(this.angle=Math.atan2(this.dy,this.dx),this.vx+=this.force*Math.cos(this.angle),this.vy+=this.force*Math.sin(this.angle)),this.x+=(this.vx*=this.friction)+(this.originX-this.x)*this.ease,this.y+=(this.vy*=this.friction)+(this.originY-this.y)*this.ease,this.draw()}}class I7{constructor(e,t,i){Ue(this,"width");Ue(this,"height");Ue(this,"ctx");Ue(this,"particlesArray");Ue(this,"mouse");Ue(this,"gap");this.width=e,this.height=t,this.ctx=i,this.particlesArray=[],this.gap=20,this.mouse={radius:3e3,x:0,y:0},window.addEventListener("mousemove",r=>{this.mouse.x=r.clientX*window.devicePixelRatio,this.mouse.y=r.pageY*window.devicePixelRatio}),this.init()}init(){for(let e=0;e<this.width;e+=this.gap)for(let t=0;t<this.height;t+=this.gap)this.particlesArray.push(new D7(e,t,this))}update(){this.ctx.clearRect(0,0,this.width,this.height),this.particlesArray.forEach(e=>{e.update()})}resize(){this.width=window.innerWidth*window.devicePixelRatio,this.height=window.innerHeight*window.devicePixelRatio,this.particlesArray=[],this.init()}}function U7(){return Te.useEffect(()=>{const n=document.querySelector("canvas"),e=n==null?void 0:n.getContext("2d");if(e){n.width=window.innerWidth*window.devicePixelRatio,n.height=window.innerHeight*window.devicePixelRatio,n.style.width=`${window.innerWidth}px`,n.style.height=`${window.innerHeight}px`;const t=new I7(n.width,n.height,e);let i;const r=()=>{t.update(),i=window.requestAnimationFrame(r)};r();const a=()=>{n.width=window.innerWidth*window.devicePixelRatio,n.height=window.innerHeight*window.devicePixelRatio,n.style.width=`${window.innerWidth}px`,n.style.height=`${window.innerHeight}px`,t.resize()};return window.addEventListener("resize",a),()=>{window.cancelAnimationFrame(i),window.removeEventListener("resize",a)}}},[]),Be.jsxs(Be.Fragment,{children:[Be.jsx(ma,{className:"absolute left-3 top-2 z-10 text-white",to:"/",children:Be.jsx(os,{icon:ld,size:"2x"})}),Be.jsxs("div",{className:"bg-black",children:[Be.jsx("canvas",{className:"w-full h-full",id:"canvas"}),";"]})]})}const N7="/deploy-portfolio2024/assets/fireball-ezgif.com-video-to-gif-converter-BmEQqBwv.gif",O7="/deploy-portfolio2024/assets/infinite-slider-ezgif.com-video-to-gif-converter-gX8gUYZk.gif",F7="/deploy-portfolio2024/assets/slider-with-masked-image-ezgif.com-video-to-gif-converter-rO3tpgJJ.gif",k7="/deploy-portfolio2024/assets/distorted-infinite-slider-ezgif.com-video-to-gif-converter-iETiGxio.gif",z7="/deploy-portfolio2024/assets/be73428b-1303-4749-a401-07871ab74555-gVS86Y06.gif";function B7(){return Be.jsx("nav",{className:"bg-black h-full flex justify-center items-center",children:Be.jsxs("ul",{className:"w-[70vw] grid grid-cols-2 gap-5 text-white",children:[Be.jsx("li",{className:"border border-gray-600 rounded-sm overflow-hidden relative hover:before:hidden before:opacity-85 before:content-['fireball'] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-black before:flex before:justify-center before:items-center",children:Be.jsx(ma,{to:"/fireball",children:Be.jsx("img",{src:N7,alt:""})})}),Be.jsx("li",{className:"border border-gray-600 rounded-sm overflow-hidden relative hover:before:hidden before:opacity-85 before:content-['infinite-slider'] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-black before:flex before:justify-center before:items-center",children:Be.jsx(ma,{to:"/infinite-slider",children:Be.jsx("img",{src:O7,alt:""})})}),Be.jsx("li",{className:"border border-gray-600 rounded-sm overflow-hidden relative hover:before:hidden before:opacity-85 before:content-['masked-slider'] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-black before:flex before:justify-center before:items-center",children:Be.jsx(ma,{to:"/slider-with-masked-image",children:Be.jsx("img",{src:F7,alt:""})})}),Be.jsx("li",{className:"border border-gray-600 rounded-sm overflow-hidden relative hover:before:hidden before:opacity-85 before:content-['distorted-slider'] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-black before:flex before:justify-center before:items-center",children:Be.jsx(ma,{to:"/distorted-infinite-slider",children:Be.jsx("img",{src:k7,alt:""})})}),Be.jsx("li",{className:"border border-gray-600 rounded-sm overflow-hidden relative hover:before:hidden before:opacity-85 before:content-['particles-animation'] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-black before:flex before:justify-center before:items-center",children:Be.jsx(ma,{to:"/particles-animation",children:Be.jsx("img",{src:z7,alt:""})})})]})})}function H7(){return Be.jsx(Be.Fragment,{children:Be.jsxs(T4,{children:[Be.jsx(Ro,{path:"/fireball",element:Be.jsx(V8,{})}),Be.jsx(Ro,{path:"/particles-animation",element:Be.jsx(U7,{})}),Be.jsx(Ro,{path:"/slider-with-masked-image",element:Be.jsx(Q8,{})}),Be.jsx(Ro,{path:"/infinite-slider",element:Be.jsx(C7,{})}),Be.jsx(Ro,{path:"/distorted-infinite-slider",element:Be.jsx(L7,{})}),Be.jsx(Ro,{path:"/",element:Be.jsx(B7,{})})," "]})})}var G7={VITE_BASE_URL:"/",BASE_URL:"/deploy-portfolio2024/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const W7=G7.VITE_BASENAME||"/";U0.createRoot(document.getElementById("root")).render(Be.jsx(L4,{basename:W7,children:Be.jsx(H7,{})}));
