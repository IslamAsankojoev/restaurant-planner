"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[188],{68470:function(e,s,n){var i=n(1413),l=n(84236).Z.div((function(e){var s=e.justifyContent,n=e.alignItems,l=e.flexDirection,a=e.gap,t=e.padding,d=e.margin,r={display:"flex",justifyContent:s,alignItems:n,gap:"number"===typeof a?"".concat(a,"px"):a};return l&&(r.flexDirection=l),t&&(r.padding=t),d&&(r.margin=d),(0,i.Z)({},r)}));s.Z=l},87188:function(e,s,n){n.r(s);var i=n(74165),l=n(15861),a=n(1413),t=n(29439),d=n(72791),r=n(57689),c=n(46988),m=n(2962),o=n(55518),u=n(67354),x=n(17615),h=n(66106),Z=n(30914),j=n(49389),p=n(29529),v=n(6443),f=n(68470),b=n(38937),g=n(80184);s.default=function(){var e,s,n,y=(0,r.UO)(),I=(0,d.useState)({id:null,name:"",username:"",email:"",address:{street:"",suite:"",city:"",zipcode:"",geo:{lat:"",lng:""}},phone:"",website:"",company:{name:"",catchPhrase:"",bs:""}}),w=(0,t.Z)(I,2),P=w[0],C=w[1],k=(0,d.useState)(null),N=(0,t.Z)(k,2),z=N[0],F=N[1],U=(0,d.useState)(!0),S=(0,t.Z)(U,2),q=S[0],D=S[1];return(0,d.useEffect)((function(){console.log(P)}),[P]),(0,d.useEffect)((function(){D(!0),(0,l.Z)((0,i.Z)().mark((function e(){var s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users/".concat(y.id)).then((function(e){return e.json()}));case 2:s=e.sent,C(s),D(!1);case 5:case"end":return e.stop()}}),e)})))()}),[y.id]),q?(0,g.jsx)(b.Z,{cover:"content"}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(f.Z,{alignItems:"center",mobileFlex:!1,className:"text-center text-md-left",children:[(0,g.jsx)(m.C,{size:90,src:z,icon:(0,g.jsx)(p.Z,{})}),(0,g.jsxs)("div",{className:"ml-3 mt-md-0 mt-3",children:[(0,g.jsx)(o.Z,{onChange:function(e){F(URL.createObjectURL(e.file.originFileObj))},showUploadList:!1,children:(0,g.jsx)(u.ZP,{type:"primary",children:"Change Avatar"})}),(0,g.jsx)(u.ZP,{className:"ml-2",onClick:function(){F(null)},children:"Remove"})]})]}),(0,g.jsx)("div",{className:"mt-4",children:(0,g.jsx)(x.Z,{name:"basicInformation",layout:"vertical",initialValues:{name:null===P||void 0===P?void 0:P.name,email:null===P||void 0===P?void 0:P.email,username:null===P||void 0===P?void 0:P.username,phone:null===P||void 0===P?void 0:P.phone,website:null===P||void 0===P?void 0:P.website,address:null===P||void 0===P||null===(e=P.address)||void 0===e?void 0:e.street,city:null===P||void 0===P||null===(s=P.address)||void 0===s?void 0:s.city,zipcode:null===P||void 0===P||null===(n=P.address)||void 0===n?void 0:n.zipcode},onFinish:function(e){var s="updatable";c.ZP.loading({content:"Updating...",key:s}),setTimeout((function(){C({name:e.name,email:e.email,username:e.userName,phone:e.phoneNumber,website:e.website,address:(0,a.Z)((0,a.Z)({},P.address),{},{street:e.address,city:e.city}),zipcode:e.zipcode}),c.ZP.success({content:"Done!",key:s,duration:2})}),1e3)},onFinishFailed:function(e){console.log("Failed:",e)},children:(0,g.jsx)(h.Z,{children:(0,g.jsxs)(Z.Z,{xs:24,sm:24,md:24,lg:16,children:[(0,g.jsxs)(h.Z,{gutter:v.KP,children:[(0,g.jsx)(Z.Z,{xs:24,sm:24,md:12,children:(0,g.jsx)(x.Z.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name!"}],children:(0,g.jsx)(j.Z,{})})}),(0,g.jsx)(Z.Z,{xs:24,sm:24,md:12,children:(0,g.jsx)(x.Z.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:(0,g.jsx)(j.Z,{})})}),(0,g.jsx)(Z.Z,{xs:24,sm:24,md:12,children:(0,g.jsx)(x.Z.Item,{label:"Email",name:"email",rules:[{required:!0,type:"email",message:"Please enter a valid email!"}],children:(0,g.jsx)(j.Z,{})})}),(0,g.jsx)(Z.Z,{xs:24,sm:24,md:12,children:(0,g.jsx)(x.Z.Item,{label:"Phone Number",name:"phone",children:(0,g.jsx)(j.Z,{})})}),(0,g.jsx)(Z.Z,{xs:24,sm:24,md:12,children:(0,g.jsx)(x.Z.Item,{label:"Website",name:"website",children:(0,g.jsx)(j.Z,{})})}),(0,g.jsx)(Z.Z,{xs:24,sm:24,md:24,children:(0,g.jsx)(x.Z.Item,{label:"Address",name:"address",children:(0,g.jsx)(j.Z,{})})}),(0,g.jsx)(Z.Z,{xs:24,sm:24,md:12,children:(0,g.jsx)(x.Z.Item,{label:"City",name:"city",children:(0,g.jsx)(j.Z,{})})}),(0,g.jsx)(Z.Z,{xs:24,sm:24,md:12,children:(0,g.jsx)(x.Z.Item,{label:"Zip code",name:"zipcode",children:(0,g.jsx)(j.Z,{})})})]}),(0,g.jsx)(u.ZP,{type:"primary",htmlType:"submit",children:"Save Change"})]})})})})]})}}}]);
//# sourceMappingURL=188.fdc48949.chunk.js.map