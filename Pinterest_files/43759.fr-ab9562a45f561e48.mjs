"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[43759,18755],{17314:(e,t,n)=>{n.d(t,{Z:()=>u});var r,i,a=n(813653),s=n(861470),o=0,l=0;let u=function(e,t,n){var u=t&&n||0,d=t||Array(16),p=(e=e||{}).node||r,c=void 0!==e.clockseq?e.clockseq:i;if(null==p||null==c){var m=e.random||(e.rng||a.Z)();null==p&&(p=r=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==c&&(c=i=(m[6]<<8|m[7])&16383)}var h=void 0!==e.msecs?e.msecs:Date.now(),f=void 0!==e.nsecs?e.nsecs:l+1,g=h-o+(f-l)/1e4;if(g<0&&void 0===e.clockseq&&(c=c+1&16383),(g<0||h>o)&&void 0===e.nsecs&&(f=0),f>=1e4)throw Error("uuid.v1(): Can't create more than 10M uuids/sec");o=h,l=f,i=c;var _=((0xfffffff&(h+=122192928e5))*1e4+f)%0x100000000;d[u++]=_>>>24&255,d[u++]=_>>>16&255,d[u++]=_>>>8&255,d[u++]=255&_;var b=h/0x100000000*1e4&0xfffffff;d[u++]=b>>>8&255,d[u++]=255&b,d[u++]=b>>>24&15|16,d[u++]=b>>>16&255,d[u++]=c>>>8|128,d[u++]=255&c;for(var w=0;w<6;++w)d[u+w]=p[w];return t||(0,s.Z)(d)}},216931:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});let r={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"UnifiedPinRepAuthDesktopPinRep_pin",selections:[{args:null,kind:"FragmentSpread",name:"PinRepWithImpressions_pin"}],type:"Pin",abstractKey:null};r.hash="000e24070b5df05da76d803775cb37e6";let i=r},515280:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});let r={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"isAuthParam"},{defaultValue:!0,kind:"LocalArgument",name:"isDesktopParam"},{defaultValue:!1,kind:"LocalArgument",name:"shouldShowSeoDrawerOption"},{defaultValue:!1,kind:"LocalArgument",name:"skipUnauthFragment"}],kind:"Fragment",metadata:null,name:"UnifiedPinRepDefaultPinRep_pin",selections:[{args:[{kind:"Variable",name:"isAuthParam",variableName:"isAuthParam"},{kind:"Variable",name:"isDesktopParam",variableName:"isDesktopParam"},{kind:"Variable",name:"shouldShowSeoDrawerOption",variableName:"shouldShowSeoDrawerOption"},{kind:"Variable",name:"skipUnauthFragment",variableName:"skipUnauthFragment"}],kind:"FragmentSpread",name:"PinRep_pin"}],type:"Pin",abstractKey:null};r.hash="356ca54371ec491fc7d18426f65e52da";let i=r},84267:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});let r={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"UnifiedPinRepVariant_pin",selections:[{args:null,kind:"FragmentSpread",name:"UnifiedPinRepAuthDesktopPinRep_pin"}],type:"Pin",abstractKey:null};r.hash="7982b415980bdf92f7b9338cb5f6c539";let i=r},878069:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});let r={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"isAuthParam"},{defaultValue:!1,kind:"LocalArgument",name:"shouldShowSeoDrawerOption"},{defaultValue:!1,kind:"LocalArgument",name:"skipUnauthFragment"}],kind:"Fragment",metadata:null,name:"UnifiedPinRep_pin",selections:[{args:[{kind:"Variable",name:"isAuthParam",variableName:"isAuthParam"},{kind:"Variable",name:"shouldShowSeoDrawerOption",variableName:"shouldShowSeoDrawerOption"},{kind:"Variable",name:"skipUnauthFragment",variableName:"skipUnauthFragment"}],kind:"FragmentSpread",name:"UnifiedPinRepDefaultPinRep_pin"}],type:"Pin",abstractKey:null};r.hash="fc4b2e24d8cdf7e314cf2f4966357629";let i=r},718075:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(667294),i=n(297728),a=n(415787),s=n(785893);let o=console,l=({id:e,children:t})=>{let n=(0,i.F)(),l=(0,r.useRef)(!1),u=(0,r.useRef)({renderCount:0,renderTime:{mount:0,slowestUpdate:0,average:0},totalRenderTime:0}),d=(0,r.useRef)(n.checkExperiment("perf_profiler_logs").anyEnabled);return(0,r.useEffect)(()=>()=>{l.current&&(d.current&&o.info(`ProfilerWithStats - ${e}`,u.current),(0,a.LY)("webapp.renderStats.mount",u.current.renderTime.mount,{sampleRate:.1,tags:{id:e}}),(0,a.LY)("webapp.renderStats.slowest",u.current.renderTime.slowestUpdate,{sampleRate:.1,tags:{id:e}}),(0,a.LY)("webapp.renderStats.average",u.current.renderTime.average,{sampleRate:.1,tags:{id:e}}),(0,a.S0)("webapp.renderStats.count",u.current.renderCount,{tags:{id:e}}))},[u,e]),(0,s.jsx)(r.Profiler,{id:`ProfilerWithStats-${e}`,onRender:(e,t,n)=>{l.current=!0,u.current.renderCount+=1,u.current.totalRenderTime+=n,u.current.renderTime.average=u.current.totalRenderTime/u.current.renderCount,"mount"===t?(u.current.renderTime.mount=n,u.current.renderTime.slowestUpdate=n):u.current.renderTime.slowestUpdate<n&&(u.current.renderTime.slowestUpdate=n)},children:t})}},640498:(e,t,n)=>{n.d(t,{LG:()=>r,UO:()=>i,ZB:()=>a,ZP:()=>s});let r=100,i=10,a=28,s={AMP_TRACKING_DOMAIN:"amp.pinterest.com",BoardPrivacy:{SECRET:"secret",PUBLIC:"public",PROTECTED:"protected"},BoardType:{PROTECTED:"protected"},BulkAction:{MOVE:"bulkMove",COPY:"bulkCopy",CREATE_SECTION:"bulkCreateSection",DELETE:"bulkDelete"},MAX_CHARS_FOR_BOARD_PIN_DESCRIPTION:500,MAX_CHARS_FOR_BOARD_TITLE:50,MAX_CHARS_FOR_FIRST_NAME:30,MAX_FETCH_NUM_FOLLOWERS_PER_PAGE:50,MAX_STORED_VISITED_PIN_PAGES:10,VIDEO_IFRAME_ID:"video-iframe"}},136061:(e,t,n)=>{n.d(t,{Hv:()=>l,aX:()=>p,nK:()=>c});var r=n(667294),i=n(616550),a=n(498490),s=n(785893);let{Provider:o,useHook:l}=(0,a.Z)("HistoryStackContext",{previous:[],current:null,forward:[]}),u=e=>e&&e.pathname?e.pathname+(e.search||""):"";function d(e,t){let n={action:t.type,location:t.location,match:t.match};if(t.location===e.current?.location)return e;switch(t.type){case"POP":if(e.forward.length>0&&u(e.forward[0].location)===u(n.location))return{...e,forward:e.forward.slice(1),current:{...e.forward[0],action:t.type},previous:e.current?[...e.previous,{action:e.current.action,location:e.current.location,match:e.current.match}]:e.previous};return{...e,forward:e.current?[{action:e.current.action,location:e.current.location,match:e.current.match},...e.forward]:e.forward,current:{...e.previous.slice(-1)[0],action:t.type},previous:e.previous.slice(0,-1)};case"PUSH":return{...e,forward:e.forward.length>0?[]:e.forward,current:n,previous:e.current?[...e.previous,{action:e.current.action,location:e.current.location,match:e.current.match}]:e.previous};case"REPLACE":return{...e,current:n};default:return e}}function p(){let{current:e,previous:t}=l();return(0,r.useMemo)(()=>e?t.concat(e):t,[e,t])}function c({children:e}){let t=(0,i.k6)(),n=(0,i.TH)(),a=(0,i.$B)(),l={forward:[],current:{action:t.action,location:n,match:a},previous:[]},[u,p]=(0,r.useReducer)(d,l),c=(0,r.useRef)(n);if(c.current!==n){let{action:e}=t;p({type:e,location:n,match:a}),c.current=n}return(0,s.jsx)(o,{value:u,children:e})}},829196:(e,t,n)=>{n.d(t,{YS:()=>o,eF:()=>l,m_:()=>s});var r=n(431705),i=n(194093),a=n(415787);function s(e,t,n,i,s){let o=new URLSearchParams,l=t.reduce((e,t)=>{if(null!=t){let n=function(e){let t;try{t=decodeURIComponent(e)}catch(n){t=e}t.startsWith("http")?t.startsWith("http://")&&(t=t.replace("http://","https://")):t="https://"+t;try{return new URL(t).origin}catch(r){let n=t.match(/^(https?:\/\/[^\/]+)(\/|$)/);if(n&&n.length>1)return n[1];return e}}(t);return e.add(n)}return e},new Set);o.append(r.NR.SOURCE_EVENT_ID,e??"0"),o.append(r.NR.DESTINATION,JSON.stringify([...l])),o.append(r.NR.EXPIRY,n?r.uV:r.ug),o.append(r.NR.PRIORITY,n?r.NR.CLICK_PRIORITY:r.NR.VIEW_PRIORITY),s&&o.append(r.NR.ADVERTISER_ID,s),i&&o.append(r.NR.CAMPAIGN_ID,i),o.append(r.NR.SOURCE_EVENT_TYPE,n?r.bC:r.Cu);try{let{hostname:e}=new URL(window.location.href);"www.pinterest.com"!==e&&o.append(r.NR.HOSTNAME,e)}catch(e){(0,a.nP)("webapp.arapi.generateARASourceEventURL",{sampleRate:.1,tags:{status:"failed",href:window&&window.location&&window.location.href}})}return"https://www.pinterest.com/attribution_source/?"+o.toString()}async function o(e,t,n,r,o,l,u,d,p){let c;let{appType:m,osType:h}=l||{},f="",g="";if(["Pin","pinImpressions"].includes(e)&&t&&(r||d||p)){(0,a.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"start",appType:m,osType:h}});try{if(!window.document.featurePolicy?.allowsFeature("attribution-reporting")){(0,a.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"skipped",message:"attribution-reporting is not enabled",appType:m,osType:h}});return}f=s(n,[r,d,p],!1,o,u);try{g=new URL(window.location.href).hostname}catch(e){(0,a.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"hostname_parse_failed",href:window&&window.location&&window.location.href}})}if(g&&"www.pinterest.com"!==g)document.createElement("img").setAttribute("attributionsrc",f),(0,a.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"international",appType:m,osType:h,hostname:g}});else if(!(c=await window.fetch(f,{keepalive:!0,attributionReporting:{eventSourceEligible:!0,triggerEligible:!1}})).ok)throw Error("server request failed.");(0,a.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"success",appType:m,osType:h}})}catch(e){(0,a.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"failed",error:(0,i.Z)(e,"name"),message:(0,i.Z)(e,"message"),appType:m,osType:h,hostname:g,responseStatus:c&&c.status}})}}else(0,a.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"missing_param",appType:m,osType:h}})}function l(e){if(e){let t=e.toLowerCase();if(t.includes("windows"))return"windows xp"===t?1:"windows vista"===t?2:"windows 7"===t?3:"windows 8"===t?4:12;if(t.includes("mac os"))return 5;if(t.includes("android"))return 7;if(t.includes("ios"))return 6;if(t.includes("ubuntu"))return 8;if(t.includes("chromium os"))return 13}return 0}},118755:(e,t,n)=>{n.d(t,{G6:()=>a,i7:()=>s,oi:()=>r,u$:()=>i,un:()=>l,vU:()=>o,w1:()=>u});let r=Object.freeze({OTHER:0,CHROME:1,SAFARI:2,IE:3,FIREFOX:4,OPERA:5,EDGE:6}),i=e=>e?e.includes("Chrome")?r.CHROME:e.includes("Safari")?r.SAFARI:e.includes("Firefox")?r.FIREFOX:e.includes("Opera")?r.OPERA:e.includes("IE")?r.IE:e.includes("Edge")?r.EDGE:r.OTHER:r.OTHER;function a(e){return i(e)===r.SAFARI}function s(e){return i(e)===r.CHROME}function o(e){return i(e)===r.FIREFOX}function l(e){return i(e)===r.EDGE}function u(e){return i(e)===r.IE}},766546:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(667294);function i(e,t,n){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:r+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class a extends r.Component{constructor(...e){super(...e),i(this,"ref",(0,r.createRef)()),i(this,"observer",null),i(this,"handleVisibilityChanged",(e,t)=>{this.props.onVisibilityChange(e,t)})}componentDidMount(){this.ref&&this.ref.current&&(this.observer=new window.IntersectionObserver(this.handleVisibilityChanged,this.props.options),this.observer.observe(this.ref.current))}componentWillUnmount(){this.observer&&(this.observer.unobserve(this.ref.current),delete this.observer)}render(){return this.props.children(this.ref)}}let s=a},836350:(e,t,n)=>{n.d(t,{P:()=>a,Z:()=>i});var r=n(545007);function i(e){return e?.[1000069]&&500417===e[1000069].experience_id&&e[1000069].display_data.hide_footer}function a(){let e=(0,r.v9)(({experiences:e})=>e);return!!e&&i(e)}},978993:(e,t,n)=>{n.d(t,{L_:()=>i,Nh:()=>a,qn:()=>r});let r=(e,t)=>{if("undefined"==typeof window)return t;try{return window.sessionStorage.getItem(e)}catch(e){return window.console.error("Cannot access sessionStorage."),t}},i=e=>{if("undefined"!=typeof window)try{window.sessionStorage.removeItem(e)}catch(e){window.console.error("Cannot access sessionStorage.")}},a=(e,t)=>{if("undefined"!=typeof window)try{window.sessionStorage.setItem(e,t)}catch(e){window.console.error("Cannot access sessionStorage.")}}},499671:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(667294),i=n(883119),a=n(136061),s=n(766546),o=n(730212),l=n(655201),u=n(616949),d=n(158776),p=n(603667),c=n(66560),m=n(785893);function h(e,t,n){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:r+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class f extends r.Component{constructor(e){super(e),h(this,"componentWillUnmount",()=>{this.unregisterComponent()}),h(this,"getContext",()=>{let{clientTrackingParams:e,component:t,element:n,objectId:r,timeSpentContext:i,view:a,viewParameter:s}=this.props;return{view:a||i?.view,viewParameter:s||i?.viewParameter,component:t||i?.component,element:n,objectId:r||i?.objectId,clientTrackingParams:e||i?.clientTrackingParams,getParentUuid:()=>this.getUuid(),getGrandparentUuid:()=>this.getParentId()}}),h(this,"getLoggerContext",()=>{let e={...this.getContext()};return delete e.getParentUuid,e}),h(this,"getParentId",()=>{let{timeSpentContext:e,shouldUseGrandparentId:t=!1}=this.props;if(t&&e&&e.getGrandparentUuid){let t=e.getGrandparentUuid();if(t)return t}return e&&e.getParentUuid?e.getParentUuid():void 0}),h(this,"getUuid",()=>this.state.timedPair?this.state.timedPair.uuid:void 0),h(this,"getTimedPair",()=>this.state.timedPair),h(this,"setTimedPair",(e,t)=>{this.setState({timedPair:e},()=>{t&&t()})}),h(this,"isRegistered",!1),h(this,"registerComponent",()=>{this.props.timeSpentManager.registerComponent(this),this.isRegistered=!0}),h(this,"unregisterComponent",()=>{this.isRegistered&&(this.props.timeSpentManager.unregisterComponent(this),this.isRegistered=!1)}),h(this,"handleVisibilityChange",e=>{let{intersectionRatio:t}=e[0],{bottom:n,left:r,right:i,top:a}=e[0].intersectionRect;t>0?this.registerComponent():0===t&&(0===n&&0===r&&0===i&&0===a?this.unregisterComponent():this.registerComponent())}),this.state={timedPair:new u.Z(this.getLoggerContext())}}componentDidUpdate(e){!this.isRegistered||e.view===this.props.view&&e.viewParameter===this.props.viewParameter&&e.component===this.props.component&&e.element===this.props.element&&e.objectId===this.props.objectId&&(0,l.Z)(e.auxData,this.props.auxData)&&(0,l.Z)(e.viewData,this.props.viewData)||(this.unregisterComponent(),setTimeout(this.registerComponent))}render(){let{children:e,intersectionObserverBoxHeight:t}=this.props;return(0,m.jsx)(d.$,{value:this.getContext(),children:(0,m.jsx)(s.Z,{onVisibilityChange:this.handleVisibilityChange,options:{threshold:0},children:n=>(0,m.jsx)(i.xu,{ref:n,height:t??"100%",children:r.Children.only(e)})})})}}function g(e){let t=(0,a.Hv)(),n=(0,d.Z)(),i=(0,p.Z)(),s=(0,c.H0)(),{requestIdentifier:l=""}=(0,o.B)(),u={app_instance_id:l.slice(0,8),...e.auxData??{}};return(0,r.useEffect)(()=>{i?.setHistoryStackContext(t)},[t,i]),(0,r.useEffect)(()=>{i?.setPins(s??{})},[s,i]),i?(0,m.jsx)(f,{...e,auxData:u,timeSpentContext:n,timeSpentManager:i,children:e.children}):e.children}g.displayName="DeprecatedTimeSpent";let _=g},158776:(e,t,n)=>{n.d(t,{$:()=>r,Z:()=>i});let{Provider:r,useMaybeHook:i}=(0,n(498490).Z)("timeSpentContext")},616949:(e,t,n)=>{n.d(t,{Z:()=>o,h:()=>s});var r=n(172045),i=n(17314);function a(e,t,n){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:r+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let s="undefined"!=typeof window&&window.performance&&window.performance.now?()=>Math.floor(1e6*window.performance.now()):()=>1e6*Date.now(),o=class{constructor(e){a(this,"start",()=>(this.startTime=s(),this.startTime)),a(this,"end",()=>(this.endTime=s(),this.duration=this.startTime?this.endTime-this.startTime:null,this.duration));try{this.uuid=(0,r.Z)()}catch(e){this.uuid=(0,i.Z)()}e&&Object.assign(this,e)}}},386270:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(545007);let i=[1000069,1000075],a={};function s(){var e;return e=(0,r.v9)(({experiences:e})=>e),i.forEach(t=>{e[t]&&(void 0===a[t]||a[t].id!==e[t].id)&&(a[t]=e[t])}),a}},644797:(e,t,n)=>{n.d(t,{W:()=>d,r:()=>u});var r=n(667294),i=n(573706),a=n(498490),s=n(297728),o=n(785893);let{Provider:l,useHook:u}=(0,a.Z)("VideoPlayer");function d({children:e}){let{logContextEvent:t,logImpression:n}=(0,i.v)(),{checkExperiment:a}=(0,s.F)(),[u,d]=(0,r.useState)(!1),[p,c]=(0,r.useState)([]),[m,h]=(0,r.useState)([]),[f,g]=(0,r.useState)({}),_=a("web_ads_mrc_video_impression").anyEnabled,b=e=>{g(t=>({...t,[e]:!0}))},w=(0,r.useCallback)(e=>{if(18===e.event_type&&e.event_data?.pinImpressions?.length){let{isNativeVideoAndWatchable:t}=e.event_data.pinImpressions[0],n=JSON.stringify(e.aux_data?.commerce_data||"").includes("story_pin_id");_&&(t||n)&&c(t=>[...t,e].slice(-1e3))}},[_]),v=(0,r.useCallback)(e=>{18===e.eventType&&_&&h(t=>[...t,e].slice(-1e3))},[_]),P=e=>{let{time:t}=e.event_data.pinImpressions[0];return{...e,event_data:{...e.event_data,pinImpressions:[{...e.event_data.pinImpressions[0],isMrcBtr:!0,endTime:t,renderDuration:0}]}}},E=e=>{if(e.eventData){let{time:t}=e.eventData;return{...e,eventData:{...e.eventData,isMrcBtr:!0,endTime:t??0}}}return null};(0,r.useEffect)(()=>{let e=p.filter(e=>{let{pinIdStr:n}=e.event_data.pinImpressions[0];return!f[n]||!_||(t(P(e)),!1)});e.length!==p.length&&c(e)},[p,_,t,f]),(0,r.useEffect)(()=>{let e=m.filter(e=>{let t=e.eventData?.pinIdStr;if(!t)return!1;if(f[t]&&_){let t=E(e);return t&&n(t),!1}return!0});e.length!==m.length&&h(e)},[m,_,n,f]);let R=(0,r.useMemo)(()=>({captionsEnabled:u,logMrcVideoAdImpressionOnPlay:v,logMrcVideoAdEventOnPlay:w,setCaptionsEnabled:d,setVideoPlayed:b,videosPlayed:f}),[u,w,v,f]);return(0,o.jsx)(l,{value:R,children:e})}},682661:(e,t,n)=>{n.d(t,{BK:()=>f,Tw:()=>g,ZP:()=>y,rX:()=>S}),n(167912);var r,i,a,s,o=n(718075),l=n(384609),u=n(297728),d=n(410150),p=n(383399),c=n(66560),m=n(179735),h=n(785893);let f=(0,m.Z)(()=>Promise.all([n.e(97270),n.e(30360),n.e(18998),n.e(2984)]).then(n.bind(n,279985)),void 0,"AuthDesktopPinRep"),g=(0,m.Z)(()=>Promise.all([n.e(97270),n.e(39921)]).then(n.bind(n,106088)),void 0,"DefaultPinRep"),_=void 0!==r?r:r=n(878069),b=void 0!==i?i:i=n(84267),w=void 0!==a?a:a=n(216931),v=e=>{let{pinKey:t,...n}=e,r=(0,l.Z)(w,t);return(0,h.jsx)(o.Z,{id:"AuthDesktopPinRepWithImpressions",children:(0,h.jsx)(f,{...n,pinKey:r})})},P=e=>{let{pinId:t,...n}=e,r=(0,c.S6)(),i=t?r(t):null,a=i?.tracking_params;return i&&(0,h.jsx)(o.Z,{id:"AuthDesktopPinRepDeprecated",children:(0,h.jsx)(f,{...n,pinKey:{type:"deprecated",data:i},trackingParams:a})})},E=void 0!==s?s:s=n(515280),R=e=>{let{pinKey:t,...n}=e,r=(0,l.Z)(E,e.pinKey);return(0,h.jsx)(o.Z,{id:"DefaultPinRep",children:(0,h.jsx)(g,{...n,duploQueryRef:r})})};function y(e){let t=(0,d.HG)(),n=(0,p.Z)(),r=n&&n.isAuth&&t,i=(0,l.Z)(_,e.duploQueryRef),{checkExperiment:a}=(0,u.F)();if(!(!r||e.duploQueryRef||a("web_auth_desktop_default_pin_rep").anyEnabled)){let{disableAppUpsell:t,duploDedupeVisualAnnotations:n,duploDisablePinCardPadding:r,duploFeedItemProps:i,duploIsSquarePin:a,duploLazyLoadImage:s,duploOneTapSave:o,duploPinCardDetailsMargin:l,duploPriorityFetchImage:u,duploQueryRef:d,duploShouldAddNiiSearchParamToImageUrls:p,duploShouldAllowProductPriceIndicator:c,duploConversationPin:m,topLevelTrafficSource:f,topLevelTrafficSourceDepth:g,trafficSource:_,...b}=e;return(0,h.jsx)(P,{...b})}let{duploQueryRef:s,...o}=e;return(0,h.jsx)(R,{...o,pinKey:i})}function S(e){let t=(0,d.HG)(),n=(0,p.Z)(),r=n&&n.isAuth&&t,i=(0,l.Z)(_,e.duploQueryRef),a=(0,l.Z)(b,e.pinKey);if(r&&null!=a&&null!=e.pinKey){let{disableAppUpsell:t,duploDedupeVisualAnnotations:n,duploDisablePinCardPadding:r,duploFeedItemProps:i,duploIsSquarePin:s,duploLazyLoadImage:o,duploOneTapSave:l,duploPinCardDetailsMargin:u,duploPriorityFetchImage:d,duploQueryRef:p,duploShouldAddNiiSearchParamToImageUrls:c,duploShouldAllowProductPriceIndicator:m,duploConversationPin:f,topLevelTrafficSource:g,topLevelTrafficSourceDepth:_,trafficSource:b,pinKey:w,...P}=e,{pinId:E,...R}=P;return(0,h.jsx)(v,{...R,pinKey:a})}let{duploQueryRef:s,...o}=e;return(0,h.jsx)(R,{...o,pinKey:i})}},845873:(e,t,n)=>{n.d(t,{bn:()=>o,fJ:()=>u,gC:()=>l});var r=n(545007),i=n(498490),a=n(785893);let{Provider:s,useHook:o}=(0,i.Z)("Boards");function l(){let e=o();return t=>e[t]}function u({children:e}){let t=(0,r.v9)(({boards:e})=>e,r.wU);return(0,a.jsx)(s,{value:t,children:e})}},55463:(e,t,n)=>{n.d(t,{f:()=>o,w:()=>l});var r=n(667294),i=n(498490),a=n(785893);let{Provider:s,useHook:o}=(0,i.Z)("Session");function l({children:e}){let[t,n]=(0,r.useState)(void 0),i=(0,r.useCallback)(()=>n(void 0),[]),o=(0,r.useMemo)(()=>({unauthFollowUserId:t,setUnauthFollowUserId:n,removeUnauthFollowUserId:i}),[t,i]);return(0,a.jsx)(s,{value:o,children:e})}},243583:(e,t,n)=>{n.d(t,{Yg:()=>l,ib:()=>d,nF:()=>c,xX:()=>p});var r=n(297728),i=n(730212),a=n(410150),s=n(415787);let o=({checkExperiment:e})=>{let{group:t}=e("auth_mweb_graphql_pin_page",{dangerouslySkipActivation:!0});return{logStat:(e,n)=>(0,s.nP)("webapp.graphql.debug_auth_mweb_graphql_pin_page",{sampleRate:1,tags:{event:e,group:t,...n}})}},l=()=>{let{isAuthenticated:e}=(0,i.B)(),t=(0,a.HG)(),{checkExperiment:n}=(0,r.F)();return e&&!t?o({checkExperiment:n}):{logStat:()=>{}}},u=0,d=({checkExperiment:e,isAuthMweb:t})=>{if(!t)return;let{logStat:n}=o({checkExperiment:e});(u+=1)<10&&n(`repin_${u}`)};function p({checkExperiment:e,isDesktop:t,isAuthenticated:n}){if(!n)return{isGraphQLEnabledInGeneral:!0,isGraphQLEnabledForRelatedPins:!0,closeupPageSuspenseBehavior:"SuspendOnMissingData",isImpressionFixEnabled:!1,addRelatedPinsLatency:!1};if(t){let{anyEnabled:t}=e("auth_dweb_graphql_pin_page");return{isGraphQLEnabledForRelatedPins:t,isGraphQLEnabledInGeneral:t,closeupPageSuspenseBehavior:null,isImpressionFixEnabled:!1,addRelatedPinsLatency:!1}}{let{anyEnabled:t,group:n}=e("auth_mweb_graphql_pin_page");switch(n){case"control":return{isGraphQLEnabledInGeneral:!1,isGraphQLEnabledForRelatedPins:!1,closeupPageSuspenseBehavior:null,isImpressionFixEnabled:!1,addRelatedPinsLatency:!1};case"only_impression_fix":return{isGraphQLEnabledInGeneral:!1,isGraphQLEnabledForRelatedPins:!1,closeupPageSuspenseBehavior:null,isImpressionFixEnabled:!0,addRelatedPinsLatency:!1};case"enabled":return{isGraphQLEnabledInGeneral:!0,isGraphQLEnabledForRelatedPins:!0,closeupPageSuspenseBehavior:"SuspendOnMissingData",isImpressionFixEnabled:!1,addRelatedPinsLatency:!1};case"enabled_and_impression_fix":return{isGraphQLEnabledInGeneral:!0,isGraphQLEnabledForRelatedPins:!0,closeupPageSuspenseBehavior:"SuspendOnMissingData",isImpressionFixEnabled:!0,addRelatedPinsLatency:!1};case"only_related_pins":return{isGraphQLEnabledInGeneral:!1,isGraphQLEnabledForRelatedPins:!0,closeupPageSuspenseBehavior:null,isImpressionFixEnabled:!1,addRelatedPinsLatency:!1};case"only_related_pins_and_impression_fix":return{isGraphQLEnabledInGeneral:!1,isGraphQLEnabledForRelatedPins:!0,closeupPageSuspenseBehavior:null,isImpressionFixEnabled:!0,addRelatedPinsLatency:!1};case"should_render_with_missing_data":return{isGraphQLEnabledInGeneral:!0,isGraphQLEnabledForRelatedPins:!0,closeupPageSuspenseBehavior:"RenderWithMissingData",isImpressionFixEnabled:!1,addRelatedPinsLatency:!1};case"render_and_subscribe":return{isGraphQLEnabledInGeneral:!0,isGraphQLEnabledForRelatedPins:!0,closeupPageSuspenseBehavior:"RenderWithMissingDataAndSubscribe",isImpressionFixEnabled:!1,addRelatedPinsLatency:!1};case"add_related_pins_latency":return{isGraphQLEnabledInGeneral:!1,isGraphQLEnabledForRelatedPins:!1,closeupPageSuspenseBehavior:null,isImpressionFixEnabled:!1,addRelatedPinsLatency:!0};default:return{isGraphQLEnabledInGeneral:t,isGraphQLEnabledForRelatedPins:t,closeupPageSuspenseBehavior:t?"SuspendOnMissingData":null,isImpressionFixEnabled:!1,addRelatedPinsLatency:!1}}}}function c(){let{checkExperiment:e}=(0,r.F)(),t=(0,a.HG)(),{isAuthenticated:n}=(0,i.B)();return p({checkExperiment:e,isDesktop:t,isAuthenticated:n})}},578406:(e,t,n)=>{n.d(t,{N4:()=>a,Wh:()=>r,hr:()=>i});let r=e=>e.bt("Connectez-vous pour continuer", "Log in to continue", "limitedLogin.modalHeader.default", undefined, true),i=e=>e.bt("Vous y êtes presque ! Connectez-vous pour accéder à l’ensemble de Pinterest", "You're almost there! Log in to access all of Pinterest", "loginModal.limitedLogin.subheader", undefined, true),a=({i18n:e,toFollow:t})=>t?e.bt("Connectez-vous pour vous abonner", "Log in to follow", "limitedLogin.modalHeader.follow", undefined, true):e.bt("Connectez-vous pour vous désabonner", "Log in to unfollow", "limitedLogin.modalHeader.unfollow", undefined, true)},35486:(e,t,n)=>{n.d(t,{Z:()=>r});let r=(e,t)=>`${e}:${t||""}`},701842:(e,t,n)=>{function r(e){return{type:"FEED_ITEM_REORDERED",payload:e}}function i(e,t){return{type:"FEED_INVALIDATE",payload:{feedType:e,feedId:t}}}n.d(t,{EX:()=>s,N8:()=>i,Qv:()=>a,_f:()=>r,vX:()=>o});let a=(e,t,n=Object.freeze({}))=>({type:"APPEND_FEED_ITEMS",payload:{id:e,options:n,items:t}});function s(e){return{type:"FEED_ITEMS_REMOVED",payload:e}}function o(e){return{type:"FEED_ITEMS_ADDED",payload:e}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/43759.fr-ab9562a45f561e48.mjs.map