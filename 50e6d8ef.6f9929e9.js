/*! For license information please see 50e6d8ef.6f9929e9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{107:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),f=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=f(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),s=f(r),y=n,d=s["".concat(c,".").concat(y)]||s[y]||p[y]||i;return r?o.a.createElement(d,u(u({ref:t},l),{},{components:r})):o.a.createElement(d,u({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=y;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var l=2;l<i;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},108:function(e,t,r){"use strict";e.exports=r(109)},109:function(e,t,r){"use strict";var n=r(110),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.suspense_list"):60120,b=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function w(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||g}function j(){}function E(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||g}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw v(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=w.prototype;var S=E.prototype=new j;S.constructor=E,n(S,w.prototype),S.isPureReactComponent=!0;var k={current:null},x={suspense:null},C={current:null},P=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function $(e,t,r){var n,o={},c=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)P.call(t,n)&&!_.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var l=Array(a),f=0;f<a;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:i,type:e,key:c,ref:u,props:o,_owner:C.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var N=/\/+/g,A=[];function D(e,t,r,n){if(A.length){var o=A.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A.length&&A.push(e)}function I(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case i:case c:u=!0}}if(u)return r(n,e,""===t?"."+q(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var l=t+q(o=e[a],a);u+=I(o,l,r,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=h&&e[h]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),a=0;!(o=e.next()).done;)u+=I(o=o.value,l=t+q(o,a++),r,n);else if("object"===o)throw r=""+e,v(Error(31),"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,"");return u}function M(e,t,r){return null==e?0:I(e,"",t,r)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,n,r,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(N,"$&/")+"/")+r)),n.push(e))}function F(e,t,r,n,o){var i="";null!=r&&(i=(""+r).replace(N,"$&/")+"/"),M(e,L,t=D(t,i,n,o)),T(t)}function H(){var e=k.current;if(null===e)throw v(Error(321));return e}var B={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return F(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;M(e,U,t=D(null,null,t,r)),T(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){if(!R(e))throw v(Error(143));return e}},createRef:function(){return{current:null}},Component:w,PureComponent:E,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return H().useCallback(e,t)},useContext:function(e,t){return H().useContext(e,t)},useEffect:function(e,t){return H().useEffect(e,t)},useImperativeHandle:function(e,t,r){return H().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return H().useLayoutEffect(e,t)},useMemo:function(e,t){return H().useMemo(e,t)},useReducer:function(e,t,r){return H().useReducer(e,t,r)},useRef:function(e){return H().useRef(e)},useState:function(e){return H().useState(e)},Fragment:u,Profiler:l,StrictMode:a,Suspense:y,unstable_SuspenseList:d,createElement:$,cloneElement:function(e,t,r){if(null==e)throw v(Error(267),e);var o=n({},e.props),c=e.key,u=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,a=C.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in t)P.call(t,f)&&!_.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==l?l[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){l=Array(f);for(var s=0;s<f;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:i,type:e.type,key:c,ref:u,props:o,_owner:a}},createFactory:function(e){var t=$.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var r=x.suspense;x.suspense=void 0===t?null:t;try{e()}finally{x.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:x,ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:n}},V={default:B},z=V&&B||V;e.exports=z.default||z},110:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,u,a=c(e),l=1;l<arguments.length;l++){for(var f in r=Object(arguments[l]))o.call(r,f)&&(a[f]=r[f]);if(n){u=n(r);for(var s=0;s<u.length;s++)i.call(r,u[s])&&(a[u[s]]=r[u[s]])}}return a}},85:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return a})),r.d(t,"default",(function(){return f}));var n=r(3),o=r(7),i=(r(108),r(107)),c={title:"Effect",hide_title:!0},u={unversionedId:"basics/Effect",id:"basics/Effect",isDocsHomePage:!1,title:"Effect",description:"A common abstraction: Effect",source:"@site/../docs/basics/Effect.md",slug:"/basics/Effect",permalink:"/docs/basics/Effect",editUrl:"https://github.com/redux-saga/redux-saga/edit/master/docs/../docs/basics/Effect.md",version:"current",sidebar:"docs",previous:{title:"Dispatching Actions",permalink:"/docs/basics/DispatchingActions"},next:{title:"Error Handling",permalink:"/docs/basics/ErrorHandling"}},a=[],l={toc:a};function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"a-common-abstraction-effect"},"A common abstraction: Effect"),Object(i.b)("p",null,"To generalize, triggering Side Effects from inside a Saga is always done by yielding some declarative Effect. (You can also yield Promise directly, but this will make testing difficult as we saw in the first section.)"),Object(i.b)("p",null,"What a Saga does is actually compose all those Effects together to implement the desired control flow. The most basic example is to sequence yielded Effects by putting the yields one after another. You can also use the familiar control flow operators (",Object(i.b)("inlineCode",{parentName:"p"},"if"),", ",Object(i.b)("inlineCode",{parentName:"p"},"while"),", ",Object(i.b)("inlineCode",{parentName:"p"},"for"),") to implement more sophisticated control flows."),Object(i.b)("p",null,"We saw that using Effects like ",Object(i.b)("inlineCode",{parentName:"p"},"call")," and ",Object(i.b)("inlineCode",{parentName:"p"},"put"),", combined with high-level APIs like ",Object(i.b)("inlineCode",{parentName:"p"},"takeEvery")," allows us to achieve the same things as ",Object(i.b)("inlineCode",{parentName:"p"},"redux-thunk"),", but with the added benefit of easy testability."),Object(i.b)("p",null,"But ",Object(i.b)("inlineCode",{parentName:"p"},"redux-saga")," provides another advantage over ",Object(i.b)("inlineCode",{parentName:"p"},"redux-thunk"),". In the Advanced section you'll encounter some more powerful Effects that let you express complex control flows while still allowing the same testability benefit."))}f.isMDXComponent=!0}}]);