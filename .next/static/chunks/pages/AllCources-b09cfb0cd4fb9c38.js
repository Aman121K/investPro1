(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[827],{6755:function(e,n,r){"use strict";r.d(n,{Z:function(){return I}});var t=r(9499),c=r(4730),s=r(4184),i=r.n(s),a=r(7294),o=r(5038),l=r(9401),u=r(2642),d=r(5893),p=["bsPrefix","className","variant","as"];function h(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}var f=a.forwardRef(function(e,n){var r=e.bsPrefix,s=e.className,a=e.variant,l=e.as,u=(0,c.Z)(e,p),f=(0,o.vE)(r,"card-img");return(0,d.jsx)(void 0===l?"img":l,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?h(Object(r),!0).forEach(function(n){(0,t.Z)(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}({ref:n,className:i()(a?"".concat(f,"-").concat(a):f,s)},u))});f.displayName="CardImg";var j=r(6637),x=["bsPrefix","className","as"];function v(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}function b(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?v(Object(r),!0).forEach(function(n){(0,t.Z)(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var m=a.forwardRef(function(e,n){var r=e.bsPrefix,t=e.className,s=e.as,l=(0,c.Z)(e,x),u=(0,o.vE)(r,"card-header"),p=(0,a.useMemo)(function(){return{cardHeaderBsPrefix:u}},[u]);return(0,d.jsx)(j.Z.Provider,{value:p,children:(0,d.jsx)(void 0===s?"div":s,b(b({ref:n},l),{},{className:i()(t,u)}))})});m.displayName="CardHeader";var y=["bsPrefix","className","bg","text","border","body","children","as"];function O(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}function g(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?O(Object(r),!0).forEach(function(n){(0,t.Z)(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var w=(0,u.Z)("h5"),Z=(0,u.Z)("h6"),P=(0,l.Z)("card-body"),S=(0,l.Z)("card-title",{Component:w}),N=(0,l.Z)("card-subtitle",{Component:Z}),C=(0,l.Z)("card-link",{Component:"a"}),k=(0,l.Z)("card-text",{Component:"p"}),D=(0,l.Z)("card-footer"),E=(0,l.Z)("card-img-overlay"),_=a.forwardRef(function(e,n){var r=e.bsPrefix,t=e.className,s=e.bg,a=e.text,l=e.border,u=e.body,p=e.children,h=e.as,f=(0,c.Z)(e,y),j=(0,o.vE)(r,"card");return(0,d.jsx)(void 0===h?"div":h,g(g({ref:n},f),{},{className:i()(t,j,s&&"bg-".concat(s),a&&"text-".concat(a),l&&"border-".concat(l)),children:u?(0,d.jsx)(P,{children:p}):p}))});_.displayName="Card",_.defaultProps={body:!1};var I=Object.assign(_,{Img:f,Title:S,Subtitle:N,Body:P,Link:C,Text:k,Header:m,Footer:D,ImgOverlay:E})},263:function(e,n,r){"use strict";r.d(n,{Ed:function(){return s},UI:function(){return c},XW:function(){return i}});var t=r(7294);function c(e,n){var r=0;return t.Children.map(e,function(e){return t.isValidElement(e)?n(e,r++):e})}function s(e,n){var r=0;t.Children.forEach(e,function(e){t.isValidElement(e)&&n(e,r++)})}function i(e,n){return t.Children.toArray(e).some(function(e){return t.isValidElement(e)&&e.type===n})}},4400:function(e,n,r){"use strict";r.d(n,{Y:function(){return p},q:function(){return d}});var t,c,s=r(29),i=r(4687),a=r.n(i),o=r(9669),l=r.n(o),u="http://localhost:5000",d=(t=(0,s.Z)(a().mark(function e(n,r){var t;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l().post("".concat(u).concat(n),r);case 3:if(200!==(t=e.sent).status){e.next=6;break}return e.abrupt("return",t.data);case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:return e.prev=11,e.finish(11);case 13:case"end":return e.stop()}},e,null,[[0,8,11,13]])})),function(e,n){return t.apply(this,arguments)}),p=(c=(0,s.Z)(a().mark(function e(n){var r;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l().get("".concat(u).concat(n));case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:return e.prev=10,e.finish(10);case 12:case"end":return e.stop()}},e,null,[[0,7,10,12]])})),function(e){return c.apply(this,arguments)})},5011:function(e,n,r){"use strict";r(7294);var t=r(6755),c=r(5526),s=r.n(c),i=r(5893);n.Z=function(e){var n=e.title,r=e.text,c=e.source;return(0,i.jsx)("div",{className:s().cards,children:(0,i.jsxs)(t.Z,{style:{cursor:"pointer ",border:"none"},children:[(0,i.jsx)(t.Z.Img,{variant:"top",src:c,height:300,style:{objectFit:"cover"}}),(0,i.jsxs)(t.Z.Body,{style:{background:"#1c1c24",color:"#d2d2d2",fontSize:"14px"},children:[(0,i.jsx)(t.Z.Title,{children:n}),(0,i.jsx)(t.Z.Text,{children:r})]})]})})}},3857:function(e,n,r){"use strict";r(7294);var t=r(4267),c=r.n(t),s=r(5893);n.Z=function(e){var n=e.title,r=e.quote;return(0,s.jsxs)("div",{className:c().headingSection,children:[(0,s.jsx)("h3",{className:c().title,children:n}),(0,s.jsx)("h3",{className:c().quote,children:r})]})}},8898:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return F}});var t=r(29),c=r(4687),s=r.n(c),i=r(7294),a=r(316),o=r(4929),l=r(1339);r(5011),r(7435);var u=r(4892),d=r.n(u),p=r(3857);r(1664);var h=r(9499),f=r(4730),j=r(8146),x=function(e,n){var r=(0,i.useRef)(!0);(0,i.useEffect)(function(){if(r.current){r.current=!1;return}return e()},n)},v=r(2029),b=r(6454),m=r(6852),y=r(1819),O=r(4184),g=r.n(O),w=r(5446),Z=(0,r(9401).Z)("carousel-caption"),P=r(5038),S=r(5893),N=["as","bsPrefix","className"];function C(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}function k(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?C(Object(r),!0).forEach(function(n){(0,h.Z)(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var D=i.forwardRef(function(e,n){var r=e.as,t=e.bsPrefix,c=e.className,s=(0,f.Z)(e,N),i=g()(c,(0,P.vE)(t,"carousel-item"));return(0,S.jsx)(void 0===r?"div":r,k(k({ref:n},s),{},{className:i}))});D.displayName="CarouselItem";var E=r(263),_=r(6652),I=r(8607),T=r(5032),M=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"];function A(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}function B(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?A(Object(r),!0).forEach(function(n){(0,h.Z)(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var L={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,S.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,S.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"},R=i.forwardRef(function(e,n){var r,t,c,s=(0,w.Ch)(e,{activeIndex:"onSelect"}),a=s.as,o=s.bsPrefix,l=s.slide,u=s.fade,d=s.controls,p=s.indicators,h=s.indicatorLabels,O=s.activeIndex,Z=s.onSelect,N=s.onSlide,C=s.onSlid,k=s.interval,D=s.keyboard,A=s.onKeyDown,L=s.pause,R=s.onMouseOver,W=s.onMouseOut,q=s.wrap,F=s.touch,H=s.onTouchStart,X=s.onTouchMove,K=s.onTouchEnd,Q=s.prevIcon,U=s.prevLabel,V=s.nextIcon,Y=s.nextLabel,G=s.variant,$=s.className,z=s.children,J=(0,f.Z)(s,M),ee=(0,P.vE)(o,"carousel"),en=(0,P.SC)(),er=(0,i.useRef)(null),et=(0,i.useState)("next"),ec=et[0],es=et[1],ei=(0,i.useState)(!1),ea=ei[0],eo=ei[1],el=(0,i.useState)(!1),eu=el[0],ed=el[1],ep=(0,i.useState)(O||0),eh=ep[0],ef=ep[1];(0,i.useEffect)(function(){eu||O===eh||(er.current?es(er.current):es((O||0)>eh?"next":"prev"),l&&ed(!0),ef(O||0))},[O,eu,eh,l]),(0,i.useEffect)(function(){er.current&&(er.current=null)});var ej=0;(0,E.Ed)(z,function(e,n){++ej,n===O&&(c=e.props.interval)});var ex=(0,v.Z)(c),ev=(0,i.useCallback)(function(e){if(!eu){var n=eh-1;if(n<0){if(!q)return;n=ej-1}er.current="prev",null==Z||Z(n,e)}},[eu,eh,Z,q,ej]),eb=(0,j.Z)(function(e){if(!eu){var n=eh+1;if(n>=ej){if(!q)return;n=0}er.current="next",null==Z||Z(n,e)}}),em=(0,i.useRef)();(0,i.useImperativeHandle)(n,function(){return{element:em.current,prev:ev,next:eb}});var ey=(0,j.Z)(function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var n=getComputedStyle(e);return"none"!==n.display&&"hidden"!==n.visibility&&"none"!==getComputedStyle(e.parentNode).display}(em.current)&&(en?ev():eb())}),eO="next"===ec?"start":"end";x(function(){l||(null==N||N(eh,eO),null==C||C(eh,eO))},[eh]);var eg="".concat(ee,"-item-").concat(ec),ew="".concat(ee,"-item-").concat(eO),eZ=(0,i.useCallback)(function(e){(0,I.Z)(e),null==N||N(eh,eO)},[N,eh,eO]),eP=(0,i.useCallback)(function(){ed(!1),null==C||C(eh,eO)},[C,eh,eO]),eS=(0,i.useCallback)(function(e){if(D&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),en?eb(e):ev(e);return;case"ArrowRight":e.preventDefault(),en?ev(e):eb(e);return}null==A||A(e)},[D,A,ev,eb,en]),eN=(0,i.useCallback)(function(e){"hover"===L&&eo(!0),null==R||R(e)},[L,R]),eC=(0,i.useCallback)(function(e){eo(!1),null==W||W(e)},[W]),ek=(0,i.useRef)(0),eD=(0,i.useRef)(0),eE=(r=(0,b.Z)(),t=(0,i.useRef)(),(0,m.Z)(function(){return clearTimeout(t.current)}),(0,i.useMemo)(function(){var e=function(){return clearTimeout(t.current)};return{set:function(n,c){void 0===c&&(c=0),r()&&(e(),c<=2147483647?t.current=setTimeout(n,c):function e(n,r,t){var c=t-Date.now();n.current=c<=2147483647?setTimeout(r,c):setTimeout(function(){return e(n,r,t)},2147483647)}(t,n,Date.now()+c))},clear:e}},[])),e_=(0,i.useCallback)(function(e){ek.current=e.touches[0].clientX,eD.current=0,"hover"===L&&eo(!0),null==H||H(e)},[L,H]),eI=(0,i.useCallback)(function(e){e.touches&&e.touches.length>1?eD.current=0:eD.current=e.touches[0].clientX-ek.current,null==X||X(e)},[X]),eT=(0,i.useCallback)(function(e){if(F){var n=eD.current;Math.abs(n)>40&&(n>0?ev(e):eb(e))}"hover"===L&&eE.set(function(){eo(!1)},k||void 0),null==K||K(e)},[F,L,ev,eb,eE,k,K]),eM=null!=k&&!ea&&!eu,eA=(0,i.useRef)();(0,i.useEffect)(function(){if(eM){var e,n,r=en?ev:eb;return eA.current=window.setInterval(document.visibilityState?ey:r,null!=(e=null!=(n=ex.current)?n:k)?e:void 0),function(){null!==eA.current&&clearInterval(eA.current)}}},[eM,ev,eb,ex,k,ey,en]);var eB=(0,i.useMemo)(function(){return p&&Array.from({length:ej},function(e,n){return function(e){null==Z||Z(n,e)}})},[p,ej,Z]);return(0,S.jsxs)(void 0===a?"div":a,B(B({ref:em},J),{},{onKeyDown:eS,onMouseOver:eN,onMouseOut:eC,onTouchStart:e_,onTouchMove:eI,onTouchEnd:eT,className:g()($,ee,l&&"slide",u&&"".concat(ee,"-fade"),G&&"".concat(ee,"-").concat(G)),children:[p&&(0,S.jsx)("div",{className:"".concat(ee,"-indicators"),children:(0,E.UI)(z,function(e,n){return(0,S.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=h&&h.length?h[n]:"Slide ".concat(n+1),className:n===eh?"active":void 0,onClick:eB?eB[n]:void 0,"aria-current":n===eh},n)})}),(0,S.jsx)("div",{className:"".concat(ee,"-inner"),children:(0,E.UI)(z,function(e,n){var r=n===eh;return l?(0,S.jsx)(T.Z,{in:r,onEnter:r?eZ:void 0,onEntered:r?eP:void 0,addEndListener:_.Z,children:function(n,t){return i.cloneElement(e,B(B({},t),{},{className:g()(e.props.className,r&&"entered"!==n&&eg,("entered"===n||"exiting"===n)&&"active",("entering"===n||"exiting"===n)&&ew)}))}}):i.cloneElement(e,{className:g()(e.props.className,r&&"active")})})}),d&&(0,S.jsxs)(S.Fragment,{children:[(q||0!==O)&&(0,S.jsxs)(y.Z,{className:"".concat(ee,"-control-prev"),onClick:ev,children:[Q,U&&(0,S.jsx)("span",{className:"visually-hidden",children:U})]}),(q||O!==ej-1)&&(0,S.jsxs)(y.Z,{className:"".concat(ee,"-control-next"),onClick:eb,children:[V,Y&&(0,S.jsx)("span",{className:"visually-hidden",children:Y})]})]})]}))});R.displayName="Carousel",R.defaultProps=L;var W=Object.assign(R,{Caption:Z,Item:D}),q=r(4400),F=function(){var e,n=(0,i.useState)([]),r=(n[0],n[1]),c=(0,i.useState)(!1),u=(c[0],c[1]);(0,i.useEffect)(function(){h()},[]);var h=(e=(0,t.Z)(s().mark(function e(){var n;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,(0,q.Y)("/all-courses");case 4:r((n=e.sent).data||[]),console.log(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error fetching courses:",e.t0);case 12:return e.prev=12,u(!1),e.finish(12);case 15:case"end":return e.stop()}},e,null,[[0,9,12,15]])})),function(){return e.apply(this,arguments)});return(0,S.jsxs)("div",{children:[(0,S.jsxs)(a.Z,{fluid:!0,children:[(0,S.jsx)("div",{className:d().heading,children:(0,S.jsx)(p.Z,{title:"All Courses",quote:""})}),(0,S.jsx)("div",{className:d().allCourcesSection,children:(0,S.jsxs)(W,{interval:null,children:[(0,S.jsxs)(W.Item,{children:[(0,S.jsx)("h3",{style:{textAlign:"center"},children:"Online coording To India"}),(0,S.jsx)("div",{style:{marginBottom:40,padding:50},children:(0,S.jsxs)(o.Z,{children:[(0,S.jsxs)(l.Z,{children:[(0,S.jsx)("h3",{children:"Weekdays Basic Only"}),(0,S.jsx)("p",{children:"7-8pm"}),(0,S.jsx)("p",{children:"13500 fee"}),(0,S.jsx)("p",{children:"20-25 Days Duration"}),(0,S.jsx)("p",{children:"30+ students"})]}),(0,S.jsxs)(l.Z,{children:[(0,S.jsx)("h3",{children:"Weekdays Basic + advance"}),(0,S.jsx)("p",{children:"7-8pm"}),(0,S.jsx)("p",{children:"19500 fee"}),(0,S.jsx)("p",{children:"55-60 Days Duration"}),(0,S.jsx)("p",{children:"30+ students"}),(0,S.jsx)("p",{children:"3 Months after course support"})]}),(0,S.jsxs)(l.Z,{children:[(0,S.jsx)("h3",{children:"Weekdays Basic + advance"}),(0,S.jsx)("p",{children:"9-10am (Live Trading)"}),(0,S.jsx)("p",{children:"24500 fee"}),(0,S.jsx)("p",{children:"55-60 Days Duration"}),(0,S.jsx)("p",{children:"30+ students"}),(0,S.jsx)("p",{children:"3 Months after course support"})]}),(0,S.jsxs)(l.Z,{children:[(0,S.jsx)("h3",{children:"Weekend Basic + advance"}),(0,S.jsx)("p",{children:"10am-12pm (Live Trading)"}),(0,S.jsx)("p",{children:"24500 fee"}),(0,S.jsx)("p",{children:"Saturday Sunday Class"}),(0,S.jsx)("p",{children:"9-10 Weeks Duration"}),(0,S.jsx)("p",{children:"20+ students"})]})]})})]}),(0,S.jsxs)(W.Item,{children:[(0,S.jsx)("h3",{style:{textAlign:"center"},children:"Offline according To India"}),(0,S.jsx)("div",{style:{marginBottom:40,padding:50},children:(0,S.jsxs)(o.Z,{children:[(0,S.jsxs)(l.Z,{children:[(0,S.jsx)("h3",{children:"Equity + FNO"}),(0,S.jsx)("p",{children:"Moday to Friday Sessions"}),(0,S.jsx)("p",{children:"39500 fee"}),(0,S.jsx)("p",{children:"1.5 Months Duration"}),(0,S.jsx)("p",{children:"24 students"}),(0,S.jsx)("p",{children:"11-1 pm"})]}),(0,S.jsxs)(l.Z,{children:[(0,S.jsx)("h3",{children:"Equity + FNO"}),(0,S.jsx)("p",{children:"Moday to Friday Sessions"}),(0,S.jsx)("p",{children:"39500 fee"}),(0,S.jsx)("p",{children:"1.5 Months Duration"}),(0,S.jsx)("p",{children:"24 students"}),(0,S.jsx)("p",{children:"2-4 pm"})]})]})})]}),(0,S.jsxs)(W.Item,{children:[(0,S.jsx)("h3",{style:{textAlign:"center"},children:"Online according To Canada"}),(0,S.jsx)("div",{style:{marginBottom:40,padding:50},children:(0,S.jsxs)(o.Z,{children:[(0,S.jsxs)(l.Z,{children:[(0,S.jsx)("h3",{children:"Weekdays Basic"}),(0,S.jsx)("p",{children:"9:30am-10:30am"}),(0,S.jsx)("p",{children:"13500 fee"}),(0,S.jsx)("p",{children:"20-25 Days Duration"}),(0,S.jsx)("p",{children:"30+ students"}),(0,S.jsx)("p",{children:"3 Months after Course support"})]}),(0,S.jsxs)(l.Z,{children:[(0,S.jsx)("h3",{children:"Weekdays Basic + advance"}),(0,S.jsx)("p",{children:"9:30am-10:30am"}),(0,S.jsx)("p",{children:"19500 fee"}),(0,S.jsx)("p",{children:"55-60 Days Duration"}),(0,S.jsx)("p",{children:"30+ students"}),(0,S.jsx)("p",{children:"3 Months after course support"})]}),(0,S.jsxs)(l.Z,{children:[(0,S.jsx)("h3",{children:"Weekdays Basic + advance (Live Trading)"}),(0,S.jsx)("p",{children:"11:30pm-12:30am"}),(0,S.jsx)("p",{children:"24500 fee"}),(0,S.jsx)("p",{children:"55-60 Days Duration"}),(0,S.jsx)("p",{children:"30+ students"}),(0,S.jsx)("p",{children:"3 Months after course support"})]}),(0,S.jsxs)(l.Z,{children:[(0,S.jsx)("h3",{children:"Weekend Basic + advance"}),(0,S.jsx)("p",{children:"10:30pm-12:30am"}),(0,S.jsx)("p",{children:"24500 fee"}),(0,S.jsx)("p",{children:"Saturday Sunday Class"}),(0,S.jsx)("p",{children:"9-10 Weeks Duration"}),(0,S.jsx)("p",{children:"20 students Only"}),(0,S.jsx)("p",{children:"3 Months after course support"})]})]})})]}),(0,S.jsxs)(W.Item,{children:[(0,S.jsx)("h3",{style:{textAlign:"center"},children:"Offline according To Canada"}),(0,S.jsx)("div",{style:{marginBottom:40,padding:50},children:(0,S.jsxs)(o.Z,{children:[(0,S.jsxs)(l.Z,{children:[(0,S.jsx)("h3",{children:"Basic + Advance"}),(0,S.jsx)("p",{children:"12-2 pm"}),(0,S.jsx)("p",{children:"$700 CAD"}),(0,S.jsx)("p",{children:"Saturday Sunday Class"}),(0,S.jsx)("p",{children:"39500 fee"}),(0,S.jsx)("p",{children:"2 Months Duration"}),(0,S.jsx)("p",{children:"3 Months after course support"})]}),(0,S.jsxs)(l.Z,{children:[(0,S.jsx)("h3",{children:"Basic + Advance"}),(0,S.jsx)("p",{children:"3-5 pm"}),(0,S.jsx)("p",{children:"$700 CAD"}),(0,S.jsx)("p",{children:"Saturday Sunday Class"}),(0,S.jsx)("p",{children:"39500 fee"}),(0,S.jsx)("p",{children:"2 Months Duration"}),(0,S.jsx)("p",{children:"3 Months after course support"})]})]})})]})]})})]}),(0,S.jsx)("div",{className:d().banner}),(0,S.jsx)(a.Z,{children:(0,S.jsx)("div",{className:d().bottomQuote,children:(0,S.jsx)(p.Z,{title:"",quote:'"These are the specific experiences we wish we had access to when we were starting out! These would\'ve accelerated our growth by YEARS"'})})})]})}},1088:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/AllCources",function(){return r(8898)}])},4892:function(e){e.exports={allCourcesSection:"AllCources_allCourcesSection___kEhJ",heading:"AllCources_heading__kw0GT",bottomQuote:"AllCources_bottomQuote__K9gon",bannerImage:"AllCources_bannerImage__HMS1c"}},5526:function(e){e.exports={cards:"Card_cards___k7Aa"}},4267:function(e){e.exports={title:"SectionHeading_title__Lryau",quote:"SectionHeading_quote__FeGRI",headingSection:"SectionHeading_headingSection__ZxPkM"}}},function(e){e.O(0,[256,664,888,774,179],function(){return e(e.s=1088)}),_N_E=e.O()}]);