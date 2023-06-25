"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[548],{75548:function(e,s,n){n.r(s),n.d(s,{UserList:function(){return H},default:function(){return K}});var t=n(74165),i=n(15861),a=n(1413),r=n(29439),l=n(71810),c=n(67354),d=n(94378),o=n(3661),u=n(31752),x=n(24215),m=n(82622),h=n(15671),j=n(43144),v=n(60136),p=n(29388),f=n(72791),Z=n(17828),N=n(2962),b=n(77128),k=n(29529),y=n(7123),C=n(99214),w=n(41891),P=n(89771),g=n(91665),z=n(53130),U=n(9973),L=n(80184),T=function(e){(0,v.Z)(n,e);var s=(0,p.Z)(n);function n(){return(0,h.Z)(this,n),s.apply(this,arguments)}return(0,j.Z)(n,[{key:"render",value:function(){var e,s,n,t,i,a=this.props,r=a.data,l=a.visible,c=a.close;return(0,L.jsxs)(Z.Z,{width:300,placement:"right",onClose:c,closable:!1,open:l,children:[(0,L.jsxs)("div",{className:"text-center mt-3",children:[(0,L.jsx)(N.C,{size:80,src:null}),(0,L.jsx)("h3",{className:"mt-2 mb-0",children:null===r||void 0===r?void 0:r.name}),(0,L.jsx)("span",{className:"text-muted",children:null===r||void 0===r?void 0:r.username})]}),(0,L.jsx)(b.Z,{dashed:!0}),(0,L.jsxs)("div",{className:"",children:[(0,L.jsx)("h6",{className:"text-muted text-uppercase mb-3",children:"Account details"}),(0,L.jsxs)("p",{children:[(0,L.jsx)(k.Z,{}),(0,L.jsxs)("span",{className:"ml-3 text-dark",children:["id: ",null===r||void 0===r?void 0:r.id]})]})]}),(0,L.jsxs)("div",{className:"mt-5",children:[(0,L.jsx)("h6",{className:"text-muted text-uppercase mb-3",children:"CONTACT"}),(0,L.jsxs)("p",{children:[(0,L.jsx)(y.Z,{}),(0,L.jsx)("span",{className:"ml-3 text-dark",children:null===r||void 0===r?void 0:r.phone})]}),(0,L.jsxs)("p",{children:[(0,L.jsx)(C.Z,{}),(0,L.jsx)("span",{className:"ml-3 text-dark",children:null!==r&&void 0!==r&&r.email?null===r||void 0===r?void 0:r.email:"-"})]}),(0,L.jsxs)("p",{children:[(0,L.jsx)(w.Z,{}),(0,L.jsx)("span",{className:"ml-3 text-dark",children:"".concat(null===r||void 0===r||null===(e=r.address)||void 0===e?void 0:e.city,", ").concat(null===r||void 0===r||null===(s=r.address)||void 0===s?void 0:s.street)})]}),(0,L.jsxs)("p",{children:[(0,L.jsx)(P.Z,{}),(0,L.jsx)("span",{className:"ml-3 text-dark",children:null===r||void 0===r?void 0:r.website})]})]}),(0,L.jsxs)("div",{className:"mt-5",children:[(0,L.jsx)("h6",{className:"text-muted text-uppercase mb-3",children:"Company"}),(0,L.jsxs)("p",{children:[(0,L.jsx)(g.Z,{}),(0,L.jsx)("a",{href:"/#",className:"ml-3 text-dark",children:(null===r||void 0===r||null===(n=r.company)||void 0===n?void 0:n.name)||"-"})]}),(0,L.jsxs)("p",{children:[(0,L.jsx)(z.Z,{}),(0,L.jsx)("a",{href:"/#",className:"ml-3 text-dark",children:(null===r||void 0===r||null===(t=r.company)||void 0===t?void 0:t.catchPhrase)||"-"})]}),(0,L.jsxs)("p",{children:[(0,L.jsx)(U.Z,{}),(0,L.jsx)("a",{href:"/#",className:"ml-3 text-dark",children:(null===r||void 0===r||null===(i=r.company)||void 0===i?void 0:i.bs)||"-"})]})]})]})}}]),n}(f.Component),V=T,I=function(e){return(0,L.jsx)(N.C,(0,a.Z)((0,a.Z)({},e),{},{className:"ant-avatar-".concat(e.type),children:e.text}))},S=function(e){var s=e.name,n=e.suffix,t=e.subTitle,i=e.id,a=e.type,r=e.src,l=e.icon,c=e.size,d=e.shape,o=e.gap,u=e.text,x=e.onNameClick;return(0,L.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[I({icon:l,src:r,type:a,size:c,shape:d,gap:o,text:u}),(0,L.jsxs)("div",{className:"ml-2",children:[(0,L.jsxs)("div",{children:[x?(0,L.jsx)("div",{onClick:function(){return x({name:s,subTitle:t,src:r,id:i})},className:"avatar-status-name clickable",children:s}):(0,L.jsx)("div",{className:"avatar-status-name",children:s}),(0,L.jsx)("span",{children:n})]}),(0,L.jsx)("div",{className:"text-muted avatar-status-subtitle",children:t})]})]})},A=n(57689),E=n(59305),D=n(38937),H=function(){var e=(0,A.s0)(),s=(0,f.useState)({users:[],userProfileVisible:!1,selectedUser:null}),n=(0,r.Z)(s,2),h=n[0],j=n[1],v=(0,f.useState)(!0),p=(0,r.Z)(v,2),Z=p[0],N=p[1];(0,f.useEffect)((function(){N(!0),(0,i.Z)((0,t.Z)().mark((function e(){var s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()}));case 2:s=e.sent,j((function(e){return(0,a.Z)((0,a.Z)({},e),{},{users:s})}));case 4:case"end":return e.stop()}}),e)})))(),N(!1)}),[]);var b=[{title:"User",dataIndex:"name",render:function(e,s){return(0,L.jsx)("div",{className:"d-flex",children:(0,L.jsx)(S,{src:s.img,name:s.name,subTitle:s.email})})},sorter:{compare:function(e,s){return(e=e.name.toLowerCase())>(s=s.name.toLowerCase())?-1:s>e?1:0}}},{title:"Nickname",dataIndex:"nickname",render:function(e,s){return(0,L.jsx)("div",{className:"d-flex",children:(0,L.jsx)("span",{children:s.username})})},sorter:{compare:function(e,s){return(e=e.username.toLowerCase())>(s=s.username.toLowerCase())?-1:s>e?1:0}}},{title:"Phone",dataIndex:"phone"},{title:"",dataIndex:"actions",render:function(s,n){return(0,L.jsxs)("div",{className:"text-right d-flex justify-content-end",children:[(0,L.jsx)(l.Z,{title:"Edit",children:(0,L.jsx)(c.ZP,{type:"default",className:"mr-2",icon:(0,L.jsx)(u.Z,{}),onClick:function(){var s;s=n,e("".concat(E.sH,"/users/edit/").concat(s.id))},size:"small"})}),(0,L.jsx)(l.Z,{title:"View",children:(0,L.jsx)(c.ZP,{type:"primary",className:"mr-2",icon:(0,L.jsx)(x.Z,{}),onClick:function(){var e;e=n,j((function(s){return(0,a.Z)((0,a.Z)({},s),{},{userProfileVisible:!0,selectedUser:e})}))},size:"small"})}),(0,L.jsx)(l.Z,{title:"Delete",children:(0,L.jsx)(c.ZP,{danger:!0,icon:(0,L.jsx)(m.Z,{}),onClick:function(){var e;e=n.id,j((function(s){return(0,a.Z)((0,a.Z)({},s),{},{users:h.users.filter((function(s){return s.id!==e}))})}))},size:"small"})})]})}}];return Z?(0,L.jsx)(D.Z,{cover:"content"}):(0,L.jsxs)(d.Z,{bodyStyle:{padding:"0px"},children:[(0,L.jsx)("div",{className:"table-responsive",children:(0,L.jsx)(o.Z,{columns:b,dataSource:h.users,rowKey:"id"})}),(0,L.jsx)(V,{data:h.selectedUser,visible:h.userProfileVisible,close:function(){j((function(e){return(0,a.Z)((0,a.Z)({},e),{},{userProfileVisible:!1,selectedUser:null})}))}})]})},K=H}}]);
//# sourceMappingURL=548.53b4463f.chunk.js.map