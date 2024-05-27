"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8582],{461229:function(P,a,e){e.r(a);var u=e(719632),t=e.n(u),o=e(805574),r=e.n(o),n=e(667294),s=e(639389),l=e.n(s),d=e(965516),O=e(844183),E=e(534826),L=e(279643),h=e(785893),g=function(){var I=d.Z.useToken(),C=I.token,i=(0,n.useState)(["Tag 1","Tag 2","Tag 3"]),M=r()(i,2),c=M[0],m=M[1],v=(0,n.useState)(!1),x=r()(v,2),T=x[0],Z=x[1],p=(0,n.useState)(""),W=r()(p,2),R=W[0],B=W[1],U=(0,n.useRef)(null);(0,n.useEffect)(function(){if(T){var f;(f=U.current)===null||f===void 0||f.focus()}},[T]);var V=function(D){var K=c.filter(function(b){return b!==D});console.log(K),m(K)},$=function(){Z(!0)},F=function(D){B(D.target.value)},y=function(){R&&c.indexOf(R)===-1&&m([].concat(t()(c),[R])),Z(!1),B("")},z=function(D){return(0,h.jsx)("span",{style:{display:"inline-block"},children:(0,h.jsx)(O.Z,{closable:!0,onClose:function(b){b.preventDefault(),V(D)},children:D})},D)},G=c.map(z),N={background:C.colorBgContainer,borderStyle:"dashed"};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{style:{marginBottom:16},children:(0,h.jsx)(L.Z,{appear:!1,enter:{scale:.8,opacity:0,type:"from",duration:100},leave:{opacity:0,width:0,scale:0,duration:200},onEnd:function(D){(D.type==="appear"||D.type==="enter")&&(D.target.style="display: inline-block")},children:G})}),T?(0,h.jsx)(E.Z,{ref:U,type:"text",size:"small",style:{width:78},value:R,onChange:F,onBlur:y,onPressEnter:y}):(0,h.jsxs)(O.Z,{onClick:$,style:N,children:[(0,h.jsx)(s.PlusOutlined,{})," New Tag"]})]})};a.default=g},967806:function(P,a,e){e.r(a);var u=e(667294),t=e(639389),o=e.n(t),r=e(844183),n=e(785893),s=function(O){O.preventDefault(),console.log("Clicked! But prevent default.")},l=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Z,{children:"Tag 1"}),(0,n.jsx)(r.Z,{children:(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Link"})}),(0,n.jsx)(r.Z,{closeIcon:!0,onClose:s,children:"Prevent Default"}),(0,n.jsx)(r.Z,{closeIcon:(0,n.jsx)(t.CloseCircleOutlined,{}),onClose:console.log,children:"Tag 2"})]})};a.default=l},927713:function(P,a,e){e.r(a);var u=e(667294),t=e(106750),o=e(844183),r=e(315816),n=e(785893),s=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.Z,{gap:"4px 0",wrap:!0,children:[(0,n.jsx)(o.Z,{bordered:!1,children:"Tag 1"}),(0,n.jsx)(o.Z,{bordered:!1,children:"Tag 2"}),(0,n.jsx)(o.Z,{bordered:!1,closable:!0,children:"Tag 3"}),(0,n.jsx)(o.Z,{bordered:!1,closable:!0,children:"Tag 4"})]}),(0,n.jsx)(r.Z,{}),(0,n.jsxs)(t.Z,{gap:"4px 0",wrap:!0,children:[(0,n.jsx)(o.Z,{bordered:!1,color:"processing",children:"processing"}),(0,n.jsx)(o.Z,{bordered:!1,color:"success",children:"success"}),(0,n.jsx)(o.Z,{bordered:!1,color:"error",children:"error"}),(0,n.jsx)(o.Z,{bordered:!1,color:"warning",children:"warning"}),(0,n.jsx)(o.Z,{bordered:!1,color:"magenta",children:"magenta"}),(0,n.jsx)(o.Z,{bordered:!1,color:"red",children:"red"}),(0,n.jsx)(o.Z,{bordered:!1,color:"volcano",children:"volcano"}),(0,n.jsx)(o.Z,{bordered:!1,color:"orange",children:"orange"}),(0,n.jsx)(o.Z,{bordered:!1,color:"gold",children:"gold"}),(0,n.jsx)(o.Z,{bordered:!1,color:"lime",children:"lime"}),(0,n.jsx)(o.Z,{bordered:!1,color:"green",children:"green"}),(0,n.jsx)(o.Z,{bordered:!1,color:"cyan",children:"cyan"}),(0,n.jsx)(o.Z,{bordered:!1,color:"blue",children:"blue"}),(0,n.jsx)(o.Z,{bordered:!1,color:"geekblue",children:"geekblue"}),(0,n.jsx)(o.Z,{bordered:!1,color:"purple",children:"purple"})]})]})};a.default=s},864400:function(P,a,e){e.r(a);var u=e(667294),t=e(965516),o=e(106750),r=e(844183),n=e(315816),s=e(785893),l=function(){var O=t.Z.useToken(),E=O.token;return(0,s.jsxs)("div",{style:{backgroundColor:E.colorBgLayout,padding:E.padding},children:[(0,s.jsxs)(o.Z,{gap:"4px 0",wrap:!0,children:[(0,s.jsx)(r.Z,{bordered:!1,children:"Tag 1"}),(0,s.jsx)(r.Z,{bordered:!1,children:"Tag 2"}),(0,s.jsx)(r.Z,{bordered:!1,closable:!0,children:"Tag 3"}),(0,s.jsx)(r.Z,{bordered:!1,closable:!0,children:"Tag 4"})]}),(0,s.jsx)(n.Z,{}),(0,s.jsxs)(o.Z,{gap:"4px 0",wrap:!0,children:[(0,s.jsx)(r.Z,{bordered:!1,color:"magenta",children:"magenta"}),(0,s.jsx)(r.Z,{bordered:!1,color:"red",children:"red"}),(0,s.jsx)(r.Z,{bordered:!1,color:"volcano",children:"volcano"}),(0,s.jsx)(r.Z,{bordered:!1,color:"orange",children:"orange"}),(0,s.jsx)(r.Z,{bordered:!1,color:"gold",children:"gold"}),(0,s.jsx)(r.Z,{bordered:!1,color:"lime",children:"lime"}),(0,s.jsx)(r.Z,{bordered:!1,color:"green",children:"green"}),(0,s.jsx)(r.Z,{bordered:!1,color:"cyan",children:"cyan"}),(0,s.jsx)(r.Z,{bordered:!1,color:"blue",children:"blue"}),(0,s.jsx)(r.Z,{bordered:!1,color:"geekblue",children:"geekblue"}),(0,s.jsx)(r.Z,{bordered:!1,color:"purple",children:"purple"})]})]})};a.default=l},972389:function(P,a,e){e.r(a);var u=e(719632),t=e.n(u),o=e(805574),r=e.n(o),n=e(667294),s=e(106750),l=e(844183),d=e(785893),O=["Movies","Books","Music","Sports"],E=function(){var h=n.useState(["Movies"]),g=r()(h,2),A=g[0],I=g[1],C=function(M,c){var m=c?[].concat(t()(A),[M]):A.filter(function(v){return v!==M});console.log("You are interested in: ",m),I(m)};return(0,d.jsxs)(s.Z,{gap:4,wrap:!0,align:"center",children:[(0,d.jsx)("span",{children:"Categories:"}),O.map(function(i){return(0,d.jsx)(l.Z.CheckableTag,{checked:A.includes(i),onChange:function(c){return C(i,c)},children:i},i)})]})};a.default=E},332289:function(P,a,e){e.r(a);var u=e(667294),t=e(106750),o=e(844183),r=e(785893),n=function(){return(0,r.jsxs)(t.Z,{gap:"4px 0",wrap:!0,children:[(0,r.jsx)(o.Z,{color:"magenta-inverse",children:"magenta"}),(0,r.jsx)(o.Z,{color:"red-inverse",children:"red"}),(0,r.jsx)(o.Z,{color:"volcano-inverse",children:"volcano"}),(0,r.jsx)(o.Z,{color:"orange-inverse",children:"orange"}),(0,r.jsx)(o.Z,{color:"gold-inverse",children:"gold"}),(0,r.jsx)(o.Z,{color:"lime-inverse",children:"lime"}),(0,r.jsx)(o.Z,{color:"green-inverse",children:"green"}),(0,r.jsx)(o.Z,{color:"cyan-inverse",children:"cyan"}),(0,r.jsx)(o.Z,{color:"blue-inverse",children:"blue"}),(0,r.jsx)(o.Z,{color:"geekblue-inverse",children:"geekblue"}),(0,r.jsx)(o.Z,{color:"purple-inverse",children:"purple"})]})};a.default=n},381176:function(P,a,e){e.r(a);var u=e(667294),t=e(315816),o=e(106750),r=e(844183),n=e(785893),s=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.Z,{orientation:"left",children:"Presets"}),(0,n.jsxs)(o.Z,{gap:"4px 0",wrap:!0,children:[(0,n.jsx)(r.Z,{color:"magenta",children:"magenta"}),(0,n.jsx)(r.Z,{color:"red",children:"red"}),(0,n.jsx)(r.Z,{color:"volcano",children:"volcano"}),(0,n.jsx)(r.Z,{color:"orange",children:"orange"}),(0,n.jsx)(r.Z,{color:"gold",children:"gold"}),(0,n.jsx)(r.Z,{color:"lime",children:"lime"}),(0,n.jsx)(r.Z,{color:"green",children:"green"}),(0,n.jsx)(r.Z,{color:"cyan",children:"cyan"}),(0,n.jsx)(r.Z,{color:"blue",children:"blue"}),(0,n.jsx)(r.Z,{color:"geekblue",children:"geekblue"}),(0,n.jsx)(r.Z,{color:"purple",children:"purple"})]}),(0,n.jsx)(t.Z,{orientation:"left",children:"Custom"}),(0,n.jsxs)(o.Z,{gap:"4px 0",wrap:!0,children:[(0,n.jsx)(r.Z,{color:"#f50",children:"#f50"}),(0,n.jsx)(r.Z,{color:"#2db7f5",children:"#2db7f5"}),(0,n.jsx)(r.Z,{color:"#87d068",children:"#87d068"}),(0,n.jsx)(r.Z,{color:"#108ee9",children:"#108ee9"})]})]})};a.default=s},422294:function(P,a,e){e.r(a);var u=e(667294),t=e(639389),o=e.n(t),r=e(75529),n=e(106750),s=e(844183),l=e(785893),d=function(){return(0,l.jsx)(r.ZP,{theme:{components:{Tag:{defaultBg:"#f9f0ff",defaultColor:"#4b34d3"}}},children:(0,l.jsxs)(n.Z,{gap:"4px 0",wrap:!0,children:[(0,l.jsx)(s.Z,{children:(0,l.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Link"})}),(0,l.jsx)(s.Z,{bordered:!1,children:(0,l.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Link"})}),(0,l.jsx)(s.Z,{closable:!0,color:"magenta",children:"Tag 2"}),(0,l.jsx)(s.Z,{icon:(0,l.jsx)(t.CloseCircleOutlined,{}),color:"error",children:"error"}),(0,l.jsx)(s.Z,{color:"red-inverse",children:"red"}),(0,l.jsx)(s.Z,{bordered:!1,color:"magenta",children:"magenta"}),(0,l.jsx)(s.Z,{icon:(0,l.jsx)(t.SyncOutlined,{spin:!0}),color:"processing",children:"processing"})]})})};a.default=d},828857:function(P,a,e){e.r(a);var u=e(719632),t=e.n(u),o=e(805574),r=e.n(o),n=e(667294),s=e(639389),l=e.n(s),d=e(965516),O=e(106750),E=e(534826),L=e(844183),h=e(879587),g=e(785893),A={width:64,height:22,marginInlineEnd:8,verticalAlign:"top"},I=function(){var i=d.Z.useToken(),M=i.token,c=(0,n.useState)(["Unremovable","Tag 2","Tag 3"]),m=r()(c,2),v=m[0],x=m[1],T=(0,n.useState)(!1),Z=r()(T,2),p=Z[0],W=Z[1],R=(0,n.useState)(""),B=r()(R,2),U=B[0],V=B[1],$=(0,n.useState)(-1),F=r()($,2),y=F[0],z=F[1],G=(0,n.useState)(""),N=r()(G,2),f=N[0],D=N[1],K=(0,n.useRef)(null),b=(0,n.useRef)(null);(0,n.useEffect)(function(){if(p){var _;(_=K.current)===null||_===void 0||_.focus()}},[p]),(0,n.useEffect)(function(){var _;(_=b.current)===null||_===void 0||_.focus()},[f]);var Q=function(j){var S=v.filter(function(Y){return Y!==j});console.log(S),x(S)},X=function(){W(!0)},k=function(j){V(j.target.value)},H=function(){U&&!v.includes(U)&&x([].concat(t()(v),[U])),W(!1),V("")},w=function(j){D(j.target.value)},J=function(){var j=t()(v);j[y]=f,x(j),z(-1),D("")},q={height:22,background:M.colorBgContainer,borderStyle:"dashed"};return(0,g.jsxs)(O.Z,{gap:"4px 0",wrap:!0,children:[v.map(function(_,j){if(y===j)return(0,g.jsx)(E.Z,{ref:b,size:"small",style:A,value:f,onChange:w,onBlur:J,onPressEnter:J},_);var S=_.length>20,Y=(0,g.jsx)(L.Z,{closable:j!==0,style:{userSelect:"none"},onClose:function(){return Q(_)},children:(0,g.jsx)("span",{onDoubleClick:function(ne){j!==0&&(z(j),D(_),ne.preventDefault())},children:S?"".concat(_.slice(0,20),"..."):_})},_);return S?(0,g.jsx)(h.Z,{title:_,children:Y},_):Y}),p?(0,g.jsx)(E.Z,{ref:K,type:"text",size:"small",style:A,value:U,onChange:k,onBlur:H,onPressEnter:H}):(0,g.jsx)(L.Z,{style:q,icon:(0,g.jsx)(s.PlusOutlined,{}),onClick:X,children:"New Tag"})]})};a.default=I},618807:function(P,a,e){e.r(a);var u=e(667294),t=e(639389),o=e.n(t),r=e(106750),n=e(844183),s=e(785893),l=function(){return(0,s.jsxs)(r.Z,{gap:"4px 0",wrap:!0,children:[(0,s.jsx)(n.Z,{closable:!0,closeIcon:"\u5173 \u95ED",children:"Tag1"}),(0,s.jsx)(n.Z,{closable:!0,closeIcon:(0,s.jsx)(t.CloseCircleOutlined,{}),children:"Tag2"})]})};a.default=l},726322:function(P,a,e){e.r(a);var u=e(805574),t=e.n(u),o=e(97857),r=e.n(o),n=e(667294),s=e(960887),l=e(245587),d=e(844183),O=e(106750),E=e(785893),L={cursor:"move",transition:"unset"},h=function(I){var C=I.tag,i=(0,l.useSortable)({id:C.id}),M=i.listeners,c=i.transform,m=i.transition,v=i.isDragging,x=i.setNodeRef,T=c?r()(r()({},L),{},{transform:"translate3d(".concat(c.x,"px, ").concat(c.y,"px, 0)"),transition:v?"unset":m}):L;return(0,E.jsx)(d.Z,r()(r()({style:T,ref:x},M),{},{children:C.text}))},g=function(){var I=(0,n.useState)([{id:1,text:"Tag 1"},{id:2,text:"Tag 2"},{id:3,text:"Tag 3"}]),C=t()(I,2),i=C[0],M=C[1],c=(0,s.useSensors)((0,s.useSensor)(s.PointerSensor)),m=function(x){var T=x.active,Z=x.over;Z&&T.id!==Z.id&&M(function(p){var W=p.findIndex(function(B){return B.id===T.id}),R=p.findIndex(function(B){return B.id===Z.id});return(0,l.arrayMove)(p,W,R)})};return(0,E.jsx)(s.DndContext,{sensors:c,onDragEnd:m,collisionDetection:s.closestCenter,children:(0,E.jsx)(l.SortableContext,{items:i,strategy:l.horizontalListSortingStrategy,children:(0,E.jsx)(O.Z,{gap:"4px 0",wrap:!0,children:i.map(function(v){return(0,E.jsx)(h,{tag:v},v.id)})})})})};a.default=g},311882:function(P,a,e){e.r(a);var u=e(667294),t=e(639389),o=e.n(t),r=e(106750),n=e(844183),s=e(785893),l=function(){return(0,s.jsxs)(r.Z,{gap:"4px 0",wrap:!0,children:[(0,s.jsx)(n.Z,{icon:(0,s.jsx)(t.TwitterOutlined,{}),color:"#55acee",children:"Twitter"}),(0,s.jsx)(n.Z,{icon:(0,s.jsx)(t.YoutubeOutlined,{}),color:"#cd201f",children:"Youtube"}),(0,s.jsx)(n.Z,{icon:(0,s.jsx)(t.FacebookOutlined,{}),color:"#3b5999",children:"Facebook"}),(0,s.jsx)(n.Z,{icon:(0,s.jsx)(t.LinkedinOutlined,{}),color:"#55acee",children:"LinkedIn"})]})};a.default=l},997413:function(P,a,e){e.r(a);var u=e(667294),t=e(639389),o=e.n(t),r=e(315816),n=e(106750),s=e(844183),l=e(785893),d=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z,{orientation:"left",children:"Without icon"}),(0,l.jsxs)(n.Z,{gap:"4px 0",wrap:!0,children:[(0,l.jsx)(s.Z,{color:"success",children:"success"}),(0,l.jsx)(s.Z,{color:"processing",children:"processing"}),(0,l.jsx)(s.Z,{color:"error",children:"error"}),(0,l.jsx)(s.Z,{color:"warning",children:"warning"}),(0,l.jsx)(s.Z,{color:"default",children:"default"})]}),(0,l.jsx)(r.Z,{orientation:"left",children:"With icon"}),(0,l.jsxs)(n.Z,{gap:"4px 0",wrap:!0,children:[(0,l.jsx)(s.Z,{icon:(0,l.jsx)(t.CheckCircleOutlined,{}),color:"success",children:"success"}),(0,l.jsx)(s.Z,{icon:(0,l.jsx)(t.SyncOutlined,{spin:!0}),color:"processing",children:"processing"}),(0,l.jsx)(s.Z,{icon:(0,l.jsx)(t.CloseCircleOutlined,{}),color:"error",children:"error"}),(0,l.jsx)(s.Z,{icon:(0,l.jsx)(t.ExclamationCircleOutlined,{}),color:"warning",children:"warning"}),(0,l.jsx)(s.Z,{icon:(0,l.jsx)(t.ClockCircleOutlined,{}),color:"default",children:"waiting"}),(0,l.jsx)(s.Z,{icon:(0,l.jsx)(t.MinusCircleOutlined,{}),color:"default",children:"stop"})]})]})};a.default=d}}]);
