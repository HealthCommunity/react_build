"use strict";(self.webpackChunkhealthapp=self.webpackChunkhealthapp||[]).push([[979],{6979:function(e,n,s){s.r(n),s.d(n,{default:function(){return C}});var t=s(885),a=s(2791),r=s(5252),i=s(1886),l=s(4942),d=s(1413),h=s(5929),c=s(3504),u=s(6871),o=s(4569),x=s.n(o),p=s(7517),j=s(2049),m=s(9480),g=s(184);function f(){var e=(0,h.Z)(),n=(0,t.Z)(e,2)[1];x().defaults.withCredentials=!0;var s=(0,u.s0)(),r=(0,a.useState)({id:"",password:""}),i=(0,t.Z)(r,2),o=i[0],f=i[1],Z=o.id,v=o.password,w=function(e){var n=e.target,s=n.value,t=n.name;f((0,d.Z)((0,d.Z)({},o),{},(0,l.Z)({},t,s)))};return(0,g.jsxs)(p.u4,{onSubmit:function(e){e.preventDefault(),e.stopPropagation();var t={username:Z,password:v};x().post("/api/user/login",t,{withCredentials:!0,credentials:"include"}).then((function(e){"200"===e.data.status?(n(),s("/"),alert("\ub85c\uadf8\uc778\uc5d0 \uc131\uacf5\ud558\uc600\uc2b5\ub2c8\ub2e4.")):"0402"===e.data.status?alert(e.data.message):alert("\uc544\uc774\ub514 \ub610\ub294 \ube44\ubc00\ubc88\ud638\ub97c \uc798\ubabb \uc785\ub825\ud588\uc2b5\ub2c8\ub2e4.")})).catch((function(e){alert("\ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."),n()}))},style:{height:"300px"},children:[(0,g.jsxs)(p.mh,{children:[(0,g.jsx)(p.d5,{children:"\uc544\uc774\ub514"}),(0,g.jsx)(j.Z,{type:"text",name:"id",placeholder:"\uc544\uc774\ub514",onChange:w,required:!0})]}),(0,g.jsxs)(p.mh,{children:[(0,g.jsx)(p.d5,{children:"\ube44\ubc00\ubc88\ud638"}),(0,g.jsx)(j.Z,{type:"password",name:"password",placeholder:"\ube44\ubc00\ubc88\ud638",onChange:w,required:!0})]}),(0,g.jsx)(m.Z,{size:"lg",type:"submit",children:"\ub85c\uadf8\uc778"}),(0,g.jsx)(p.p,{children:(0,g.jsx)(c.rU,{to:"/sign",children:(0,g.jsx)(p.yp,{children:"\ud68c\uc6d0\uac00\uc785"})})})]})}var Z=s(4101),v=s(534),w=s(3627);function C(){var e=(0,a.useState)("emaillogin"),n=(0,t.Z)(e,2),s=n[0],l=n[1];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(w.Z,{name:"Login"}),(0,g.jsx)(i.Z,{}),(0,g.jsx)(r.vE,{children:(0,g.jsx)(p.D2,{children:(0,g.jsx)(p.OO,{children:(0,g.jsxs)(p.Ce,{children:[(0,g.jsx)(Z.qh,{onChange:function(e){l(e)},typeName:s,text:"\ub85c\uadf8\uc778"}),(0,g.jsxs)(Z.Gl,{selected:s,children:[(0,g.jsx)(Z.MN,{name:"emaillogin",children:(0,g.jsx)(f,{})}),(0,g.jsx)(Z.MN,{name:"snslogin",children:(0,g.jsx)(v.o,{})})]})]})})})})]})}}}]);
//# sourceMappingURL=979.ee0ee218.chunk.js.map