/*! For license information please see 538.57f0507b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[538],{9985:function(e,t,r){r(2791);var n=r(8175),i=r(184);t.Z=function(e){return(0,i.jsxs)(n.ZP,{viewBox:"0 0 400 150",height:130,width:400,children:["speed=",2,(0,i.jsx)("circle",{cx:"10",cy:"20",r:"8"}),(0,i.jsx)("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"}),(0,i.jsx)("circle",{cx:"10",cy:"50",r:"8"}),(0,i.jsx)("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"}),(0,i.jsx)("circle",{cx:"10",cy:"80",r:"8"}),(0,i.jsx)("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"}),(0,i.jsx)("circle",{cx:"10",cy:"110",r:"8"}),(0,i.jsx)("rect",{x:"25",y:"105",rx:"5",ry:"5",width:"220",height:"10"})]})}},4538:function(e,t,r){r.r(t),r.d(t,{default:function(){return S}});var n,i,o,a=r(5861),c=r(9439),l=r(4687),s=r.n(l),u=r(2791),d=r(168),f=r(5706),p=f.Z.form(n||(n=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  border: 1px solid grey;\n"]))),h=f.Z.button(i||(i=(0,d.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  :hover {\n    opacity: 1;\n  }\n"]))),b=f.Z.input(o||(o=(0,d.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),v=r(8683),y=r(184);var m=function(e){return(0,y.jsx)("svg",(0,v.Z)((0,v.Z)({viewBox:"0 0 1024 1024",fill:"black",height:"2em",width:"2em"},e),{},{children:(0,y.jsx)("path",{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"})}))};function g(e){var t=e.addMovie,r=(0,u.useState)(""),n=(0,c.Z)(r,2),i=n[0],o=n[1];return(0,y.jsxs)(p,{onSubmit:function(e){e.preventDefault(),i&&(t(i),o(""))},children:[(0,y.jsx)(h,{type:"submit",children:(0,y.jsx)(m,{children:"Search"})}),(0,y.jsx)(b,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(e){var t=e.target;o(t.value.toLowerCase())},value:i})]})}var x,w,j=r(1087),O=f.Z.li(x||(x=(0,d.Z)(["\n  color: #3f51b5;\n  cursor: pointer;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: black;\n  }\n"]))),E=(0,f.Z)(j.rU)(w||(w=(0,d.Z)(["\n  text-decoration: none;\n"])));function k(e){var t=e.movies,r=e.location,n=(0,u.useState)(""),i=(0,c.Z)(n,2),o=i[0],a=i[1];return(0,u.useEffect)((function(){a(t)}),[t]),(0,y.jsx)("ol",{children:o&&o.map((function(e){return(0,y.jsx)(E,{to:"/movies/".concat(e.id),state:{from:r},children:(0,y.jsx)(O,{children:e.title})},e.id)}))})}var Z=r(3687),C=r(9985),P=r(7689);var S=function(){var e=(0,u.useState)(""),t=(0,c.Z)(e,2),r=t[0],n=t[1],i=(0,u.useState)(!1),o=(0,c.Z)(i,2),l=o[0],d=o[1],f=(0,u.useState)(!1),p=(0,c.Z)(f,2),h=p[0],b=p[1],v=(0,j.lr)(),m=(0,c.Z)(v,2),x=m[0],w=m[1],O=(0,u.useState)(""),E=(0,c.Z)(O,2),S=E[0],D=E[1],z="search/movie",M=(0,P.TH)();return(0,u.useEffect)((function(){var e=new URLSearchParams(M.search).get("query");e&&D(e)}),[M.search]),(0,u.useEffect)((function(){var e=new AbortController,t=function(){var t=(0,a.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d(!0),t.prev=1,t.next=4,(0,Z.v)(z,e.signal,S);case 4:r=t.sent,n(r.results),S&&0===r.results.length&&b(!0),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),"ERR_CANCELED"!==t.t0.code&&console.log(t.t0.message);case 12:return t.prev=12,d(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){e.abort()}}),[z,x,S]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(g,{addMovie:function(e){w({query:e})}}),l&&(0,y.jsx)(C.Z,{}),(0,y.jsx)(k,{movies:r,location:M}),h&&(0,y.jsx)("h3",{children:"\u041f\u043e \u0412\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0438\u0442\u0443 \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"})]})}},3687:function(e,t,r){r.d(t,{v:function(){return l}});var n=r(5861),i=r(4687),o=r.n(i),a=r(1243),c="203c8efd66ec76470e0f4b5662bc1dde";function l(e,t){return s.apply(this,arguments)}function s(){return s=(0,n.Z)(o().mark((function e(t,r){var n,i,l=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=l.length>2&&void 0!==l[2]?l[2]:"",t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,a.Z)("/".concat(t,"?api_key=").concat(c,"&query=").concat(n),{signal:r});case 5:return i=e.sent,e.abrupt("return",i.data);case 7:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}a.Z.defaults.baseURL="https://api.themoviedb.org/3"},8175:function(e,t,r){var n=r(2791),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)};var o=function(e){var t=e.animate,r=void 0===t||t,o=e.animateBegin,a=e.backgroundColor,c=void 0===a?"#f5f6f7":a,l=e.backgroundOpacity,s=void 0===l?1:l,u=e.baseUrl,d=void 0===u?"":u,f=e.children,p=e.foregroundColor,h=void 0===p?"#eee":p,b=e.foregroundOpacity,v=void 0===b?1:b,y=e.gradientRatio,m=void 0===y?2:y,g=e.gradientDirection,x=void 0===g?"left-right":g,w=e.uniqueKey,j=e.interval,O=void 0===j?.25:j,E=e.rtl,k=void 0!==E&&E,Z=e.speed,C=void 0===Z?1.2:Z,P=e.style,S=void 0===P?{}:P,D=e.title,z=void 0===D?"Loading...":D,M=e.beforeMask,L=void 0===M?null:M,R=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),_=w||Math.random().toString(36).substring(6),q=_+"-diff",B=_+"-animated-diff",T=_+"-aria",U=k?{transform:"scaleX(-1)"}:null,N="0; "+O+"; 1",A=C+"s",F="top-bottom"===x?"rotate(90)":void 0;return(0,n.createElement)("svg",i({"aria-labelledby":T,role:"img",style:i(i({},S),U)},R),z?(0,n.createElement)("title",{id:T},z):null,L&&(0,n.isValidElement)(L)?L:null,(0,n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+d+"#"+q+")",style:{fill:"url("+d+"#"+B+")"}}),(0,n.createElement)("defs",null,(0,n.createElement)("clipPath",{id:q},f),(0,n.createElement)("linearGradient",{id:B,gradientTransform:F},(0,n.createElement)("stop",{offset:"0%",stopColor:c,stopOpacity:s},r&&(0,n.createElement)("animate",{attributeName:"offset",values:-m+"; "+-m+"; 1",keyTimes:N,dur:A,repeatCount:"indefinite",begin:o})),(0,n.createElement)("stop",{offset:"50%",stopColor:h,stopOpacity:v},r&&(0,n.createElement)("animate",{attributeName:"offset",values:-m/2+"; "+-m/2+"; "+(1+m/2),keyTimes:N,dur:A,repeatCount:"indefinite",begin:o})),(0,n.createElement)("stop",{offset:"100%",stopColor:c,stopOpacity:s},r&&(0,n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+m),keyTimes:N,dur:A,repeatCount:"indefinite",begin:o})))))},a=function(e){return e.children?(0,n.createElement)(o,i({},e)):(0,n.createElement)(c,i({},e))},c=function(e){return(0,n.createElement)(a,i({viewBox:"0 0 476 124"},e),(0,n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=a},8683:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(9142);function i(e,t,r){return(t=(0,n.Z)(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}}}]);
//# sourceMappingURL=538.57f0507b.chunk.js.map