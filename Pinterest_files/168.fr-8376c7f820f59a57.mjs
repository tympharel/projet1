"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[168],{720687:(e,t,n)=>{n.d(t,{default:()=>r});var i=n(934980);let a=`pulsing {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
}`,r={css:(0,i.Ll)([a]),animation:"pulsing 2s infinite"}},717307:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(297728),a=n(2968),r=n(730212),o=n(410150);function l({dangerouslySkipActivation:e=!1}={}){let t;let{isAuthenticated:n}=(0,r.B)(),s=(0,o.HG)(),{checkExperiment:u}=(0,i.F)();return n&&s&&(t=u("dweb_grid_loading_state",{dangerouslySkipActivation:e}).group),{isInGridLoadingStateExp:(0,a.Z)(t??""),isInGridLoadingStateDefaultExp:"enabled"===t,isInGridInfiniteScrollExp:"enabled_infinite_scroll"===t||"employees"===t,gridLoadingStateGroup:t}}},934980:(e,t,n)=>{n.d(t,{CC:()=>a,Ll:()=>o,XF:()=>r});let i=(e,t,n)=>({x:Math.floor(e*Math.cos(n)),y:Math.floor(t*Math.sin(n))}),a=(e,t)=>i(t/2,e/2,2*Math.random()*Math.PI),r=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,o=e=>["@-webkit-keyframes","@keyframes"].map(t=>e.map(e=>t+" "+e).join("\n")).join("\n")},31723:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var i=n(667294),a=n(883119),r=n(573706),o=n(986782);function l(e,t,n){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:i+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let s={},u=e=>{let t=e.__id||e.id;return"string"==typeof t&&t||null};class m{constructor(){l(this,"idMap",new Map),l(this,"objMap",new WeakMap)}get(e){let t=u(e);return this.objMap.get(e)??(t?this.idMap.get(t):void 0)}has(e){let t=u(e);return this.objMap.has(e)??(!!t&&this.idMap.has(t))}set(e,t){let n=u(e);n&&this.idMap.set(n,t),this.objMap.set(e,t)}reset(){this.idMap=new Map,this.objMap=new WeakMap}}var p=n(587435),d=n(39260),c=n(717307),h=n(876594),_=n(720687),y=n(512541),f=n(785893);let{css:g,animation:x}=_.default,b={backgroundColor:h._VP,animation:x,borderRadius:h.Ev2};function v({data:e}){let{height:t}=e;return(0,f.jsxs)(i.Fragment,{children:[(0,f.jsx)(y.Z,{unsafeCSS:g}),(0,f.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:b},"data-test-id":"skeleton-pin",children:(0,f.jsx)(a.xu,{height:t})})]})}var w=n(679482),C=n(144326),M=n(297728),$=n(730212),k=n(410150),S=n(415787),j=n(855746);function E(e){let{align:t,cacheKey:n,id:l,isFetching:u,isGridCentered:h=!0,items:_,layout:g,loadItems:x,masonryRef:b,optOutFluidGridExperiment:E=!1,renderItem:W,scrollContainerRef:I,virtualize:R=!0,_getColumnSpanConfig:A,_dynamicHeights:G,useLoadingState:P,isLoadingAccessibilityLabel:B,isLoadedAccessibilityLabel:F}=e,Z=(0,C.ZP)(),N=(0,k.ZP)(),{isAuthenticated:L,isRTL:z}=(0,$.B)(),{logContextEvent:D}=(0,r.v)(),O=(0,M.F)(),H="desktop"===N,T=(0,j.MM)(),V=((0,i.useRef)(_.map(()=>({fetchTimestamp:Date.now(),measureTimestamp:Date.now(),hasRendered:!1,pageCount:0}))),H&&!E),{experimentalColumnWidth:X,experimentalGutter:K}=(0,p.Z)(V),U=e.serverRender??!!H,J="flexible"===g||"uniformRowFlexible"===g||"desktop"!==N||V,q=(J&&g?.startsWith("uniformRow")?"uniformRowFlexible":void 0)??(U?"serverRenderedFlexible":"flexible"),Q=e.columnWidth??X??w.yF;J&&(Q=Math.floor(Q));let Y=e.gutterWidth??K??(H?w.oX:1),ee=e.minCols??w.yc,et=((0,i.useRef)(0),Q+Y),en=function(e){if(null==e)return;let t=function(e){let t=s[e];return t&&t.screenWidth===window.innerWidth||(s[e]={screenWidth:window.innerWidth}),s[e]}(e);return t.measurementCache||(t.measurementCache=new m),t.measurementCache}(n),ei=(0,i.useCallback)(()=>I?.current||window,[I]),ea=(0,i.useRef)(!0),{anyEnabled:er,group:eo}=A?O.checkExperiment("web_masonry_mixed_early_bailout"):{anyEnabled:!1,group:""},el=er?e=>e<=3?2*Y:3*Y:void 0,{anyEnabled:es}=G?O.checkExperiment("dynamic_heights_v2"):{anyEnabled:!1},eu=h&&ea.current?"centered":"",{className:em,styles:ep}=function(e){let t=`m_${Object.keys(e).sort().reduce((t,n)=>{let i=e[n];return null==i||"object"==typeof i||"function"==typeof i?t:"boolean"==typeof i?t+(i?"t":"f"):t+i},"").replace(/\:/g,"\\:")}`,{flexible:n,gutterWidth:i,isRTL:a,itemWidth:r,maxColumns:o,minColumns:l,items:s,_getColumnSpanConfig:u}=e,m=u?s.map((e,t)=>({index:t,columnSpanConfig:u(e)??1})).filter(e=>1!==e.columnSpanConfig):[],p=r+i,d=Array.from({length:o+1-l},(e,t)=>t+l).map(e=>{let s=e===l?0:e*p,u=e===o?null:(e+1)*p-.01,{styles:d,numberOfVisibleItems:c}=m.reduce((a,o)=>{let{columnSpanConfig:l}=o,s=Math.min(function({columnCount:e,columnSpanConfig:t}){if("number"==typeof t)return t;let n=e<=2?"sm":e<=4?"md":e<=6?"_lg1":e<=8?"lg":"xl";return"_lg1"===n?t[n]??t.lg??1:t[n]??1}({columnCount:e,columnSpanConfig:l}),e),u=null!=o.index&&a.numberOfVisibleItems>=s+o.index,m=n?100/e*s:r*s+i*(s-1),{numberOfVisibleItems:p}=a;return u?p-=s-1:o.index<p&&(p+=1),{styles:a.styles.concat(function({className:e,index:t,columnSpanConfig:n,visible:i,width:a,flexible:r}){let o="number"==typeof n?n:btoa(JSON.stringify(n));return r?`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${i?"visible":"hidden"} !important;
        position: ${i?"inherit":"absolute"} !important;
        width: ${a}% !important;
      }`:`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${i?"visible":"hidden"} !important;
        position: ${i?"inherit":"absolute"} !important;
        width: ${a}px !important;
      }`}({className:t,index:o.index,columnSpanConfig:l,visible:u,width:m,flexible:n})),numberOfVisibleItems:p}},{styles:"",numberOfVisibleItems:e}),h=n?`
      .${t} .static {
        box-sizing: border-box;
        width: calc(100% / ${e}) !important;
      }
    `:`
      .${t} {
        max-width: ${e*p}px;
      }

      .${t} .static {
        width: ${r}px !important;
      }
    `;return{minWidth:s,maxWidth:u,styles:`
      .${t} .static:nth-child(-n+${c}) {
        position: static !important;
        visibility: visible !important;
        float: ${a?"right":"left"};
        display: block;
      }

      .${t} .static {
        padding: 0 ${i/2}px;
      }

      ${h}

      ${d}
    `}}),c=d.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @container (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),h=d.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @media (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),_=`
    ${c.join("")}
    @supports not (container-type: inline-size) {
      ${h.join("")}
    }
  `;return{className:t,styles:`
  .masonryContainer {
      container-type: inline-size;
    }

    .masonryContainer > .centered {
      margin-left: auto;
      margin-right: auto;
    }

    .${t} .static {
      position: absolute !important;
      visibility: hidden !important;
    }

    ${_}
  `}}({gutterWidth:Y,flexible:J,items:_,isRTL:z,itemWidth:Q,maxColumns:e.maxColumns??Math.max(_.length,w.g5),minColumns:ee,_getColumnSpanConfig:A}),ed=`${eu} ${em}`.trim(),{anyEnabled:ec,expName:eh,group:e_,isMeasureAllEnabled:ey}=(0,d.Z)(),ef=((0,i.useRef)(),(0,i.useRef)(_.length)),eg=(0,i.useRef)(0);(0,i.useEffect)(()=>{ef.current=_.length,eg.current+=1},[_]),(0,i.useEffect)(()=>{ea.current&&(ea.current=!1)},[]),(0,i.useEffect)(()=>()=>{},[]);let ex=(0,i.useCallback)((e,t,n)=>{let i=e.reduce((e,t)=>e+t),a=i/e.length;(0,S.S0)("webapp.masonry.multiColumnWhitespace.average",a,{sampleRate:1,tags:{earlyBailoutExperimentGroup:eo||"unknown",experimentalMasonryGroup:e_||"unknown",handlerId:T,isAuthenticated:L,multiColumnItemSpan:e.length}}),(0,S.S0)("webapp.masonry.twoColWhitespace",a,{sampleRate:1,tags:{columnWidth:Q,minCols:ee}}),eo&&(0,S.S0)("webapp.masonry.graphIterations",t,{sampleRate:1,tags:{columnSpan:n,exprimentGroup:eo}}),D({event_type:15878,component:14468,aux_data:{total_whitespace_px:i}}),D({event_type:16062,component:14468,aux_data:{average_whitespace_px:a}}),D({event_type:16063,component:14468,aux_data:{max_whitespace_px:Math.max(...e)}}),e.forEach(t=>{t>=50&&((0,S.nP)("webapp.masonry.multiColumnWhitespace.over50",{sampleRate:1,tags:{earlyBailoutExperimentGroup:eo||"unknown",experimentalMasonryGroup:e_||"unknown",handlerId:T,isAuthenticated:L,multiColumnItemSpan:e.length}}),D({event_type:16261,component:14468})),t>=100&&((0,S.nP)("webapp.masonry.multiColumnWhitespace.over100",{sampleRate:1,tags:{earlyBailoutExperimentGroup:eo||"unknown",experimentalMasonryGroup:e_||"unknown",handlerId:T,isAuthenticated:L,multiColumnItemSpan:e.length}}),D({event_type:16262,component:14468}))}),(0,S.nP)("webapp.masonry.multiColumnWhitespace.count",{sampleRate:1,tags:{earlyBailoutExperimentGroup:eo||"unknown",experimentalMasonryGroup:e_||"unknown",handlerId:T,isAuthenticated:L,multiColumnItemSpan:e.length}})},[Q,eo,D,ee,L,T,e_]),{_items:eb,_renderItem:ev}=function({initialLoadingStatePinCount:e=50,infiniteScrollPinCount:t=10,isFetching:n,items:a=[],renderItem:r,useLoadingState:o}){let{isInGridInfiniteScrollExp:l}=(0,c.Z)(),s=o&&n&&0===a.length,u=o&&n&&l&&a.length>0,m=(0,i.useMemo)(()=>Array.from({length:u?t:e}).reduce((e,t,n)=>[...e,{height:n%2==0?356:236,key:`skeleton-pin-${n}`,isSkeleton:!0}],[]),[e,t,u]);return{_items:(0,i.useMemo)(()=>s?m:u?[...a,...m]:a,[s,u,a,m]),_renderItem:(0,i.useMemo)(()=>o?e=>{let{itemIdx:t,data:n}=e;return t>=a.length&&n&&"object"==typeof n&&"key"in n&&"height"in n?(0,f.jsx)(v,{data:n},n.key):r(e)}:r,[o,r,a.length])}}({useLoadingState:P,items:_,renderItem:(0,i.useCallback)(e=>(0,f.jsx)(o.Z,{name:"MasonryItem",children:W(e)}),[W]),isFetching:u}),ew=P&&u;return(0,f.jsxs)(i.Fragment,{children:[P&&!ea.current&&(0,f.jsx)(a.xu,{"aria-live":"polite",display:"visuallyHidden",children:ew?B??Z.bt("Chargement des Épingles", "Pins are loading", "Masonry", undefined, true):F??Z.bt("Les Épingles sont chargées", "Pins are loaded", "Masonry", undefined, true)}),(0,f.jsx)("div",{"aria-busy":P?!!ew:void 0,className:"masonryContainer","data-test-id":"masonry-container",id:l,style:V?{padding:`0 ${Y/2}px`}:void 0,children:(0,f.jsxs)("div",{className:ed,children:[U&&ea.current?(0,f.jsx)(y.Z,{"data-test-id":"masonry-ssr-styles",unsafeCSS:ep}):null,(0,f.jsx)(a.xu,{"data-test-id":"max-width-container",marginBottom:0,marginEnd:"auto",marginStart:"auto",marginTop:0,maxWidth:e.maxColumns?et*e.maxColumns:void 0,children:ec?(0,f.jsx)(a.GX,{ref:e=>{b&&(b.current=e)},_dynamicHeights:G,_dynamicHeightsV2Experiment:es,_earlyBailout:el,_getColumnSpanConfig:A,_logTwoColWhitespace:ex,_measureAll:ey,align:t,columnWidth:Q,gutterWidth:Y,items:eb,layout:J?q:g??"basic",loadItems:x,measurementStore:en,minCols:ee,renderItem:ev,scrollContainer:ei,virtualBufferFactor:.3,virtualize:R}):(0,f.jsx)(a.Rk,{ref:e=>{b&&(b.current=e)},_dynamicHeights:G,_dynamicHeightsV2Experiment:es,_earlyBailout:el,_getColumnSpanConfig:A,_logTwoColWhitespace:ex,align:t,columnWidth:Q,gutterWidth:Y,items:eb,layout:J?q:g??"basic",loadItems:x,measurementStore:en,minCols:ee,renderItem:ev,scrollContainer:ei,virtualBufferFactor:.3,virtualize:R})})]})})]})}},587435:(e,t,n)=>{n.d(t,{Z:()=>i});function i(e=!0){let t=e?16:void 0,n=t?Math.floor(t/4):void 0;return{experimentalColumnWidth:e?221:void 0,experimentalGutter:t,experimentalGutterBoints:n}}},39260:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(297728),a=n(730212),r=n(855746);function o(e){let{isAuthenticated:t}=(0,a.B)(),{expName:n,anyEnabled:o,group:l}=function({experimentsClient:e,handlerId:t,isAuthenticated:n,skipActivation:i}){let{checkExperiment:a}=e,r=a(n?"web_masonry_v2_auth":"web_masonry_v2_unauth",{dangerouslySkipActivation:i});return r.group?{expName:n?"web_masonry_v2_auth":"web_masonry_v2_unauth",...r}:"www/[username]/[slug].js"!==t||n?"www/pin/[id].js"!==t||n?{expName:"",anyEnabled:!1,group:""}:{expName:"web_masonry_v2_unauth_pin",...a("web_masonry_v2_unauth_pin",{dangerouslySkipActivation:i})}:{expName:"web_masonry_v2_unauth_board",...a("web_masonry_v2_unauth_board",{dangerouslySkipActivation:i})}}({experimentsClient:(0,i.F)(),handlerId:(0,r.MM)(),isAuthenticated:t,skipActivation:e?.skipActivation??!1});return{expName:n,anyEnabled:o,group:l,isMeasureAllEnabled:"enabled_measure_all"===l||"enabled_measure_all_impression_fix"===l,isImpressionFixEnabled:"control_impression_fix"===l||"enabled_impression_fix"===l||"enabled_measure_all_impression_fix"===l}}},2968:(e,t,n)=>{n.d(t,{Z:()=>i});let i=e=>e.startsWith("enabled")||e.startsWith("employee")}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/168.fr-8376c7f820f59a57.mjs.map