"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[81507,93810],{826263:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});let i={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"skipUnauthFragment"}],kind:"Fragment",metadata:null,name:"StructuredFeedStoryModule_story",selections:[{alias:null,args:null,concreteType:"StoryAction",kind:"LinkedField",name:"action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"location",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"containerType",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"contentIds",storageKey:null},{alias:null,args:null,concreteType:"StoryDisplayOptions",kind:"LinkedField",name:"displayOptions",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryContentDisplay",kind:"LinkedField",name:"contentDisplay",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"componentType",storageKey:null}],storageKey:null}],storageKey:null},{alias:"storyId",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storyType",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"trackingParams",storageKey:null},{args:[{kind:"Variable",name:"skipUnauthFragment",variableName:"skipUnauthFragment"}],kind:"FragmentSpread",name:"CarouselModule_story"},{args:null,kind:"FragmentSpread",name:"HeaderModule_story"}],type:"Story",abstractKey:null};i.hash="058a61f5e0b72dbde337960de273d6a5";let r=i},241893:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(667294),r=n(883119),a=n(679482),o=n(785893);function l(){return(0,o.jsx)(r.xu,{width:a.yF})}function s(){return(0,o.jsx)(i.Fragment,{children:Array(12).fill(void 0).map((e,t)=>(0,o.jsx)(l,{},t))})}},483702:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(883119),r=n(132780),a=n(785893);let o=new Map([["pin",4],["explorearticle",2]]);function l({children:e,itemType:t,overrideMargin:n}){return(0,a.jsx)(i.xu,{marginBottom:n||o.get(t)||r.mT,children:e})}},881507:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Q}),n(167912);var i,r=n(883119),a=n(384609),o=n(788388),l=n(253612),s=n(237579),d=n(679482),c=n(117428),u=n(107218),p=n(820139),m=n(132780),y=n(37268),h=n(785893);let g=()=>(0,h.jsx)(r.xu,{color:"secondary",height:d.yF,width:d.yF}),x={1:{itemRep:u.Z,deprecatedActionShape:"square",deprecatedGetActionImage:e=>e.images?.orig?.url||""},4:{itemRep:c.Z,deprecatedActionShape:"circle",deprecatedGetActionImage:e=>e.images?.orig?.url||""},2:{itemRep:p.Z,deprecatedActionShape:"circle",deprecatedGetActionImage:e=>e.image_large_url}};function j({auxData:e,componentFallback:t,showExpanded:n=!0,story:i,view:a,viewParameter:o}){let l=(x[(i.display_options?.content_display||{}).model_type]||m.g5).itemRep||g,s=i.display_options?.content_display?.component_type??t;return(0,h.jsx)(r.xu,{marginBottom:2,children:(0,h.jsxs)(r.kC,{alignItems:"stretch",direction:"column",justifyContent:"center",children:[i.title&&(0,h.jsx)(y.Z,{showExpanded:n,storyKey:{type:"deprecated",data:i}}),(0,h.jsx)(r.kC,{gap:2,justifyContent:"center",wrap:!0,children:i.objects?.map(function(t,n){return(0,h.jsx)(l,{auxData:e,component:s,imagePlaceholderColor:"rgba(0, 0, 0, 0)",index:n,item:t,story:i,view:a,viewParameter:o},n)})})]})})}var f=n(667294),_=n(587435),w=n(266069),v=n(241893),I=n(483702),k=n(474492),b=n(724924),S=n(505471),C=n(410150);let F="rgba(0, 0, 0, 0)",T=()=>(0,h.jsx)(r.xu,{color:"secondary",height:d.yF,width:d.yF}),Z={1:{itemRep:u.Z,deprecatedActionShape:"square",deprecatedGetActionImage:e=>e.images?.orig?.url||""},4:{itemRep:c.Z,deprecatedActionShape:"circle",deprecatedGetActionImage:e=>e.images?.orig?.url||""},2:{itemRep:p.Z,deprecatedActionShape:"circle",deprecatedGetActionImage:e=>e.image_large_url}};function A({auxData:e,componentFallback:t,dangerouslySetActionUrl:n,dangerouslySetContentVisibleItemCount:i,disableHeader:a,dynamicItemWidth:o,initialSlotIndex:l=0,showExpanded:s,story:c,surface:u,view:p,viewParameter:g,width:x}){let j=(0,C.HG)(),A=c.display_options?.content_display||{},D=Z[A.model_type]||m.g5,K=D.itemRep||T,{action:P}=c,L=n||c.action?.url||"",E=c.display_options?.content_display?.component_type??t,R=A.grid_layout?.rows,W="number"==typeof R?R:1,G=A.grid_layout?.cols,z="number"==typeof G?G:-1,N=-1===z,M=i??A.content_visible_item_count?.web,O=M&&x&&o?(0,d.Wv)({defaultItemWidth:d.yF,contentVisibleItemCount:M,gap:d.oX,isDesktop:j,moduleWidth:"number"==typeof x?x:parseInt(x,10)}):d.yF,{containerRef:H,itemsToRender:U,actionItem:B}=(0,S.Z)({items:c.objects||[],itemWidth:(0,k.Z)()?d.tG:O,itemGap:d.oX,actionItemType:P?"one":void 0,numRows:W}),X=B&&D.deprecatedGetActionImage?D.deprecatedGetActionImage(B):void 0,q=N?U:c.objects||[],{experimentalGutterBoints:Y}=(0,_.Z)(),V=q.map((t,n)=>(0,h.jsx)(I.Z,{itemType:"string"==typeof t.type?t.type:null,children:(0,h.jsx)(K,{auxData:e,component:E,imagePlaceholderColor:F,imageWidth:O,index:n,item:t,slotIndex:l+n,story:c,surface:u,view:p,viewParameter:g})},n)),J=!!L&&!!P?.text&&X&&(0,h.jsx)(w.Z,{auxData:e,buttonText:P.text,component:E,contentIds:c.content_ids,element:179,imageWidth:O,previewImageSrc:X,shape:D.deprecatedActionShape,storyId:c.id,storyType:c.story_type,url:L,view:p,viewParameter:g});return(0,h.jsxs)(r.xu,{alignItems:"stretch",color:"default",direction:"column",display:"flex",justifyContent:"start",children:[c.title&&!a&&(0,h.jsx)(y.Z,{showExpanded:s,storyKey:{type:"deprecated",data:c}}),N?(0,h.jsxs)(b.Z,{containerRef:H,itemGap:d.oX,numRows:W,rowAlignment:"center",children:[V,J,W>1&&(0,h.jsx)(v.Z,{})]}):(0,h.jsxs)(f.Fragment,{children:[z>1?Array(W).fill(null).map((e,t)=>(0,h.jsx)(r.kC,{alignItems:"stretch",gap:Y??(j?d.jC:d.D6),justifyContent:"start",width:"100%",wrap:z<=1,children:z>0&&Array(z).fill(null).map((e,n)=>{let i=V[t*z+n];return(0,h.jsx)(r.kC.Item,{flex:"grow",children:i},n)})},q[t].id)):(0,h.jsx)(r.kC,{direction:"column",children:V}),J]})]})}function D({auxData:e,componentFallback:t,showExpanded:n=!0,story:i,view:a,viewParameter:o}){let l=(Z[(i.display_options?.content_display||{}).model_type]||m.g5).itemRep||T,s=i.display_options?.content_display?.component_type??t,c=(0,k.Z)()?d.tG:d.yF;return(0,h.jsxs)(r.kC,{alignItems:"stretch",direction:"column",justifyContent:"start",children:[i.title&&(0,h.jsx)(y.Z,{showExpanded:n,storyKey:{type:"deprecated",data:i}}),(0,h.jsx)(r.Rk,{columnWidth:c,gutterWidth:d.oX,items:i.objects||[],layout:"flexible",renderItem:({data:t,itemIdx:n})=>(0,h.jsx)(l,{auxData:e,component:s,imagePlaceholderColor:F,index:n,item:t,story:i,view:a,viewParameter:o},n)})]})}function K(e){switch(e.story.display_options?.content_display?.pins_display){case 3:case 1:case 2:return(0,h.jsx)(D,{...e});default:return(0,h.jsx)(A,{...e})}}var P=n(656817),L=n(616550),E=n(573706),R=n(559028),W=n(144326),G=n(436922),z=n(383399);let N=({actionText:e,actionUrl:t,articleId:n,author:i,authorAvatar:a,auxData:l,component:s,contentIds:d,coverImage:c,debug:u,index:p,isFullWidth:m=!1,onImageLoad:y,storyId:g,storyType:x,subtitle:j,title:_,view:w,viewParameter:v,width:I,windowWidth:k})=>{let b=(0,W.ZP)(),S=(0,L.k6)(),{logContextEvent:C}=(0,E.v)(),[F,T]=(0,f.useState)(!1),Z=(0,z.Z)(),A=Z.isAuth?Z?.avatar_color_index:void 0,D=(0,o.Z)({loggingId:n,objectIdStr:n,impressionType:"Article",contextLogData:{content_ids:d,story_id:g,story_type:x,article_id:n,...l},slotIndex:p,viewParameter:v,viewType:w,componentType:s});return(0,h.jsx)(r.xu,{"data-test-id":"sf-hero",children:(0,h.jsxs)(r.xu,{ref:D,height:"auto",onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),width:I,children:[(0,h.jsx)(r.iP,{onTap:()=>{C({event_type:101,view_type:w,view_parameter:v,component:s,aux_data:{article_id:n,content_ids:d,story_id:g,story_type:x,...l}}),S.push(t)},children:(0,h.jsxs)(r.xu,{height:m?400:"35vw",maxHeight:500,overflow:"hidden",position:"relative",children:[(0,h.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{transition:"transform 0.4s",transform:F?"scale(1.5)":"scale(1)"}},height:"100%",width:"100%",children:(0,h.jsx)(r.Ee,{alt:b.bt("Image de couverture de ce Shopping Spotlight", "Cover image of this shopping spotlight", "hero.heroCoverImage", undefined, true),color:"#fff",fit:"cover",naturalHeight:400,naturalWidth:400,onLoad:y,src:c,children:(0,h.jsx)(r.xu,{color:"transparentDarkGray",display:"block",height:"100%",opacity:.3,width:"100%"})})}),(0,h.jsx)(r.xu,{bottom:!0,marginBottom:m?12:0,padding:6,position:"absolute",width:"100%",children:(0,h.jsxs)(r.kC,{direction:"column",height:"100%",justifyContent:"end",children:[(0,h.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{transition:"transform 0.4s",transform:F?"translateY(-20px)":"translateY(20px)"}},children:(0,h.jsx)(r.X6,{color:"light",size:k<=822?"600":k<1e3?"400":k<1100?"500":"600",children:_})}),(0,h.jsxs)(r.xu,{dangerouslySetInlineStyle:{__style:{opacity:F?1:0,transition:F?"opacity 0.4s ease-in":"opacity 0.4s ease-out"}},display:"block",height:F?"auto":20,overflow:"hidden",children:[(0,h.jsx)(r.xv,{color:"inverse",children:j}),i&&(0,h.jsx)(r.xu,{marginTop:4,children:(0,h.jsxs)(r.kC,{alignItems:"center",direction:"row",children:[(0,h.jsx)(R.qE,{color:A,name:i,size:"md",src:a})," ",(0,h.jsx)(r.xv,{color:"inverse",children:i})]})})]}),(0,h.jsx)(r.xu,{marginTop:4,width:"74px",children:(0,h.jsx)(r.zx,{color:"white",onClick:()=>{S.push(t)},size:"lg",text:e})})]})})]})}),void 0!==u&&(0,h.jsx)(G.Z,{data:u})]})})};var M=n(773456),O=n(993422),H=n(235753);function U({auxData:e,onImageLoad:t,story:n,view:i,viewParameter:a,component:o,width:l}){let[s,d]=(0,f.useState)(0),c=(0,f.useRef)(null),u=n.objects?.slice(0,3)||[];return(0,h.jsxs)(r.xu,{ref:c,alignItems:"end",display:"flex",height:400,justifyContent:"center",position:"relative",width:l,children:[(0,h.jsx)(M.Z,{containerRef:c.current,id:n.id,index:s,slideWidth:l,children:u.map((r,s)=>(0,h.jsx)(N,{actionText:r.action?.text||"",actionUrl:r.action?.url||"",articleId:r.id,auxData:e,component:o,coverImage:r.cover_images&&r.cover_images[0].originals?.url||"",debug:r.debug,index:s,isFullWidth:!0,onImageLoad:t,storyId:n.id,storyType:n.story_type,subtitle:r.subtitle?.format||"",title:r.title?.format||"",view:i,viewParameter:a,width:l,windowWidth:l},r.id))}),(0,h.jsx)(r.xu,{display:"inlineBlock",height:"auto",paddingY:5,position:"absolute",width:"60%",children:(0,h.jsx)(O.default,{addEllipsis:!0,backNode:(0,h.jsx)(H.Z,{iconColor:"inverse",iconType:"back",showFab:!0}),carouselData:{index:s,entityId:"",carouselSlots:u.map(e=>({id:e.id,title:null}))},carouselIndex:s,forwardNode:(0,h.jsx)(H.Z,{iconColor:"inverse",iconType:"forward",showFab:!0}),handleCarouselSwipe:e=>{d(e)},pinKey:null})})]})}function B({auxData:e,component:t,onImageLoad:n,story:i,view:a,viewParameter:o,windowWidth:l}){let s=i.objects?.slice(0,3)||[];return(0,h.jsxs)(f.Fragment,{children:[(0,h.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:s[0].dominant_colors[0]}},flex:"grow"}),s.map((r,s)=>(0,h.jsx)(N,{actionText:r.action?.text||"",actionUrl:r.action?.url||"",articleId:r.id,auxData:e,component:t,coverImage:r.cover_images&&r.cover_images[0].originals?.url||"",debug:r.debug,index:s,onImageLoad:n,storyId:i.id,storyType:i.story_type,subtitle:r.subtitle?.format||"",title:r.title?.format||"",view:a,viewParameter:o,width:500,windowWidth:l},r.id)),(0,h.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:s[2].dominant_colors[0]}},flex:"grow"})]})}function X({auxData:e,component:t,pwtSurfaceContext:n,story:i,view:a,viewParameter:o}){let{width:l}=(0,P.Z)()||{},s=()=>{n&&n.markConstraintComplete("RenderHeroImages")},d=!l||l>822?3:1;return(0,h.jsx)(f.Fragment,{children:(0,h.jsx)(r.kC,{alignItems:"stretch",direction:"row",justifyContent:"start",width:l,children:3===d?(0,h.jsx)(B,{auxData:e,component:t,onImageLoad:s,story:i,view:a,viewParameter:o,windowWidth:l}):(0,h.jsx)(U,{auxData:e,component:t,onImageLoad:s,story:i,view:a,viewParameter:o,width:l})})})}function q({story:e}){let t=(0,L.k6)(),{user:n,custom_properties:i,action:a}=e||{},{full_name:o,username:l,image_medium_url:s,avatar_color_index:c}=n||{},u=o||e.title?.format||"",{url:p,text:m}=a||{},{image:y}=i||{};if(!p||!m)return null;let g=(0,h.jsxs)(r.xu,{alignItems:"center",color:"transparentDarkGray",display:"flex",height:"100%",justifyContent:"center",padding:2,position:"relative",children:[l&&s&&(0,h.jsx)(r.xu,{left:!0,padding:2,position:"absolute",top:!0,children:(0,h.jsx)(R.qE,{color:c||void 0,name:l,size:"sm",src:s})}),u&&(0,h.jsx)(r.xv,{color:"inverse",weight:"bold",children:u})]});return(0,h.jsxs)(r.xu,{marginBottom:4,width:d.yF,children:[(0,h.jsx)(r.iP,{onTap:()=>t.push(p),children:(0,h.jsx)(r.zd,{height:d.yF,rounding:2,wash:!0,children:"string"==typeof y&&y?(0,h.jsx)(r.Ee,{alt:u,fit:"contain",naturalHeight:d.yF,naturalWidth:d.yF,src:y,children:g}):(0,h.jsx)(r.xu,{height:d.yF,width:d.yF,children:g})})}),(0,h.jsx)(r.xu,{marginTop:3,children:(0,h.jsx)(r.ZP,{fullWidth:!0,href:p,text:m})})]})}let Y=new Set([101]),V="UNKNOWN_CONTAINER_TYPE",J=void 0!==i?i:i=n(826263);function Q(e){var t;let{auxData:n,componentFallback:i,initialSlotIndex:d,view:c,viewParameter:u,width:p}=e,{story:m,storyKey:g,...x}=e,f=(0,a.Z)(J,g),_=f?.displayOptions?.contentDisplay?.componentType??i,w={...x,component:_},v=(0,o.Z)({clientTrackingParams:f?.trackingParams,componentType:_,contextLogData:{story_id:f?.storyId,story_type:f?.storyType,content_ids:f?.contentIds,...n},impressionType:"Story",loggingId:f?.storyId,slotIndex:d||0,viewParameter:u,viewType:c}),I=(()=>{switch(f?.containerType){case 90:case 139:return(0,h.jsx)(l.default,{...w,story:m,storyKey:f,width:p});case 88:return(0,h.jsx)(y.Z,{...w,storyKey:f});case 89:let{location:e,text:t,url:n}=f?.action||{};return(0,h.jsx)(s.Z,{location:e,text:t,url:n});case 91:return!!m&&(0,h.jsx)(K,{...w,story:m});case 101:return!!m&&(0,h.jsx)(X,{...w,story:m});case 92:return!!m&&(0,h.jsx)(q,{...w,story:m});case 131:return!!m&&(0,h.jsx)(j,{...w,story:m});default:return V}})();return I===V?null:(0,h.jsxs)(r.xu,{ref:v,width:(t=f?.containerType,Y.has(t))?void 0:p,children:[I,(0,h.jsx)(r.xu,{})]})}},724924:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(883119),r=n(785893);let a={center:{outer:"center",inner:"center"},left:{outer:"start",inner:"start"},right:{outer:"end",inner:"end"}};function o({children:e,itemGap:t,containerRef:n,numRows:o=1,rowAlignment:l="center"}){let s=a[l];return(0,r.jsx)(i.xu,{ref:n,width:"100%",children:(0,r.jsx)(i.kC,{alignItems:"center",justifyContent:s.outer,children:(0,r.jsx)(i.kC,{dataTestId:"story-row-items-container",gap:{row:Math.floor(t/4),column:0},justifyContent:s.inner,wrap:o>1,children:e})})})}},505471:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(667294);function r({items:e,itemWidth:t,itemGap:n,numRows:r=1,actionItemType:a}){let o;let[l,s]=function(){let[e,t]=(0,i.useState)(0),n=(0,i.useRef)(null),r=(0,i.useCallback)(()=>{n.current&&t(n.current.clientWidth)},[n]);return(0,i.useEffect)(()=>(window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}),[r]),(0,i.useEffect)(r),[e,n]}(),d=Math.floor((l+n)/(t+n))*r||r,c=e.slice(0,d),u=[];switch(a){case"nextFour":d>=e.length?u=[c.pop()]:(c.pop(),u=e.slice(d-1,d+3));break;case"one":o=d>e.length?e[Math.floor(e.length/2)]:c.pop()}return{containerRef:s,itemsToRender:c,actionItem:o,nextFourItems:u}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/81507.fr-17c51ba6242543f9.mjs.map