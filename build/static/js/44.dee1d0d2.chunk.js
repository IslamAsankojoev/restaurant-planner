"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[44],{26044:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var o=n(1413),r=n(93433),s=n(29439),i=n(72791),c=n(64802),a=n(67354),l=n(78302),u=n(31549),p=n(80184),d=[{id:1,src:"http://help.tvoistore.ru/wp-content/uploads/2023/06/stol1.png",name:"\u041d\u0430 \u0434\u0432\u043e\u0438\u0445 1"},{id:2,src:"http://help.tvoistore.ru/wp-content/uploads/2023/06/stol2.png",name:"\u041d\u0430 \u0434\u0432\u043e\u0438\u0445 2"},{id:3,src:"http://help.tvoistore.ru/wp-content/uploads/2023/06/stol3.png",name:"\u041d\u0430 \u0447\u0435\u0442\u0432\u0435\u0440\u044b\u0445 1"},{id:4,src:"http://help.tvoistore.ru/wp-content/uploads/2023/06/stol4.png",name:"\u041d\u0430 \u0447\u0435\u0442\u0432\u0435\u0440\u044b\u0445 2"},{id:5,src:"http://help.tvoistore.ru/wp-content/uploads/2023/06/stol5.png",name:"\u041d\u0430 \u0447\u0435\u0442\u0432\u0435\u0440\u044b\u0445 3"},{id:6,src:"http://help.tvoistore.ru/wp-content/uploads/2023/06/stol6.png",name:"\u041d\u0430 \u0447\u0435\u0442\u0432\u0435\u0440\u044b\u0445 4"},{id:7,src:"http://help.tvoistore.ru/wp-content/uploads/2023/06/stol7.png",name:"\u041a\u0440\u0443\u0433\u043b\u044b\u0439 \u0441\u0442\u043e\u043b"}],f=function(e){var t=e.onAddObject;return(0,p.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px"},children:d.map((function(e){return(0,p.jsxs)("div",{style:{position:"relative",display:"flex",flexDirection:"column",gap:"10px",justifyContent:"center",alignItems:"center"},children:[(0,p.jsx)("img",{src:e.src,alt:"",width:100,draggable:!0},e.id),(0,p.jsx)(l.Z,{children:e.name}),(0,p.jsxs)(a.ZP,{onClick:function(){t(e.id,0,0)},type:"link",size:"small",children:[(0,p.jsx)(u.Z,{onClick:function(){return t(e.id,0,0)}}),"Add to board"]})]})}))})},v=function(e){var t=e.object,n=e.onMove,o=e.onRemove,r=(0,i.useState)(!1),c=(0,s.Z)(r,2),a=c[0],l=c[1],u=(0,i.useState)(0),d=(0,s.Z)(u,2),f=d[0],v=d[1],m=(0,i.useState)(0),h=(0,s.Z)(m,2),x=h[0],g=h[1];return(0,p.jsx)("img",{src:t.src,alt:"",draggable:!1,onDoubleClick:function(){return o(t.instanceId)},style:{position:"absolute",left:t.x,top:t.y,cursor:"grab"},onMouseDown:function(e){l(!0),v(e.clientX),g(e.clientY)},onMouseMove:function(e){if(a){var o=e.clientX-f,r=e.clientY-x;n(t.instanceId,t.x+o,t.y+r),v(e.clientX),g(e.clientY)}},onMouseUp:function(){l(!1)},onMouseLeave:function(){l(!1)}})},m=function(e){var t=e.objects,n=e.moveObject,o=e.removeObject;return(0,p.jsx)("div",{style:{position:"relative",overflow:"auto",width:"100%",height:"500px",background:"#f0f0f0",border:"1px solid #ccc",backgroundSize:"300px 300px",backgroundImage:"url(https://static.vecteezy.com/system/resources/previews/006/649/753/original/grid-on-a-white-background-paper-for-taking-notes-seamless-square-pattern-lines-and-squares-illustration-free-vector.jpg)"},children:t.map((function(e){return(0,p.jsx)(v,{object:e,onMove:n,onRemove:o},e.instanceId)}))})},h=function(){var e=(0,i.useState)([]),t=(0,s.Z)(e,2),n=t[0],u=t[1],v=(0,i.useState)(0),h=(0,s.Z)(v,2),x=h[0],g=h[1],j=(0,i.useRef)(null),b=function(e,t,s){var i=d.find((function(t){return t.id===e}));u([].concat((0,r.Z)(n),[(0,o.Z)((0,o.Z)({},i),{},{x:t,y:s,instanceId:x})])),g(x+1)},y=(0,i.useCallback)((function(e){u(n.filter((function(t){return t.instanceId!==e})))}),[n]);return(0,p.jsxs)("div",{children:[(0,p.jsx)(f,{onAddObject:b}),(0,p.jsx)("br",{}),(0,p.jsxs)("div",{style:{marginBottom:"10px",marginTop:"10px",display:"flex",gap:"10px"},children:[(0,p.jsx)(a.ZP,{type:"primary",size:"small",onClick:function(){var e=new Blob([JSON.stringify(n)],{type:"application/json"});(0,c.saveAs)(e,"restaurant-scheme.json")},children:"Save scheme"}),(0,p.jsxs)(a.ZP,{type:"dashed",size:"small",onClick:function(){j.current.click()},children:["Import scheme",(0,p.jsx)("input",{type:"file",hidden:!0,ref:j,onChange:function(e){var t=e.target.files[0];if(t){var n=new FileReader;n.onload=function(e){try{var t=JSON.parse(e.target.result);u(t)}catch(n){console.error("Error parsing JSON",n)}},n.readAsText(t)}}})]}),(0,p.jsx)(a.ZP,{danger:!0,size:"small",onClick:function(){u([])},children:"Remove all objects"}),(0,p.jsx)(l.Z,{style:{marginTop:"10px",color:"#ff9393"},children:"or double click on object to remove it"})]}),(0,p.jsx)(m,{objects:n,moveObject:function(e,t,r){u(n.map((function(n){return n.instanceId===e?(0,o.Z)((0,o.Z)({},n),{},{x:t,y:r}):n})))},addObject:b,removeObject:y})]})}}}]);
//# sourceMappingURL=44.dee1d0d2.chunk.js.map