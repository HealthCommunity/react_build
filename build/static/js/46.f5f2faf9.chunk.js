"use strict";(self.webpackChunkhealthapp=self.webpackChunkhealthapp||[]).push([[46],{1046:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(885),a=t(2791),s=t(5252),i=t(1886),c=t(4942),o=t(1413),l=t(3504),d=t(6871),h=t(4569),u=t.n(h),x=t(7517),p=t(2049),j=t(3916),g=t(9480),f=t(184);function m(){var e=(0,d.s0)(),n=(0,a.useState)({id:"",password:"",checkPassword:"",nickname:"",isAgree:!1}),t=(0,r.Z)(n,2),s=t[0],i=t[1],h=s.id,m=s.password,Z=s.checkPassword,k=s.nickname,w=s.isAgree,v=function(e){var n=e.target,t=n.value,r=n.name;i((0,o.Z)((0,o.Z)({},s),{},(0,c.Z)({},r,t)))};return(0,f.jsxs)(x.u4,{onSubmit:function(n){if(n.preventDefault(),!w)return alert("\ub3d9\uc758 \ud574\uc8fc\uc138\uc694.");var t={loginId:h,password:m,passwordCheck:Z,nickName:k};u().post("/api/user/join",t).then((function(n){"0500"===n.data.status||"0403"===n.data.status||"0404"===n.data.status?alert(n.data.message):(alert("\ud68c\uc6d0\uac00\uc785 \uc131\uacf5"),e("/login"))})).catch((function(e){alert("\ud68c\uc6d0\uac00\uc785\uc774 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4.")}))},style:{height:"510px"},children:[(0,f.jsxs)(x.mh,{children:[(0,f.jsx)(x.d5,{children:"\uc544\uc774\ub514"}),(0,f.jsx)(p.Z,{type:"text",name:"id",placeholder:"\uc544\uc774\ub514 5~12\uc790 \uc785\ub825",onChange:v,onValidation:j.JF,required:!0})]}),(0,f.jsxs)(x.mh,{children:[(0,f.jsx)(x.d5,{children:"\ube44\ubc00\ubc88\ud638"}),(0,f.jsx)(p.Z,{type:"password",name:"password",placeholder:"\ube44\ubc00\ubc88\ud638 8~16\uc790, \uc22b\uc790, \ud2b9\uc218\ubb38\uc790 \ud3ec\ud568",onChange:v,onValidation:j.ew,required:!0}),(0,f.jsx)(p.Z,{type:"password",name:"checkPassword",placeholder:"\ube44\ubc00\ubc88\ud638 \uc7ac\uc785\ub825",onChange:v,onValidation:function(e){return(0,j.PM)(e,m)},required:!0})]}),(0,f.jsxs)(x.mh,{children:[(0,f.jsx)(x.d5,{children:"\ub2c9\ub124\uc784"}),(0,f.jsx)(p.Z,{type:"text",name:"nickname",placeholder:"\ub2c9\ub124\uc784 \uc785\ub825",onChange:v,onValidation:j.bD,required:!0})]}),(0,f.jsxs)(x.BT,{children:[(0,f.jsx)("input",{type:"checkbox",id:"agree",checked:w,name:"isAgree",onChange:function(e){var n=e.target,t=n.checked,r=n.name;i((0,o.Z)((0,o.Z)({},s),{},(0,c.Z)({},r,t)))}}),(0,f.jsx)(x.yp,{htmlFor:"agree",children:"\uc774\uc6a9\uc57d\uad00 \ubc0f \uac1c\uc778\uc815\ubcf4 \uc218\uc9d1\u2219\uc774\uc6a9\uc5d0 \ub3d9\uc758\ud569\ub2c8\ub2e4."})]}),(0,f.jsx)(g.Z,{size:"lg",type:"submit",children:"\uac00\uc785\ud558\uae30"}),(0,f.jsx)(x.p,{children:(0,f.jsx)(l.rU,{to:"/login",children:(0,f.jsx)(x.yp,{children:"\ub85c\uadf8\uc778"})})})]})}var Z=t(4101),k=t(534),w=t(3627);function v(){var e=(0,a.useState)("emaillogin"),n=(0,r.Z)(e,2),t=n[0],c=n[1];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(w.Z,{name:"Sign"}),(0,f.jsx)(i.Z,{}),(0,f.jsx)(s.vE,{children:(0,f.jsx)(x.D2,{children:(0,f.jsx)(x.OO,{children:(0,f.jsxs)(x.Ce,{children:[(0,f.jsx)(Z.qh,{onChange:function(e){c(e)},typeName:t,text:"\uac00\uc785"}),(0,f.jsxs)(Z.Gl,{selected:t,children:[(0,f.jsx)(Z.MN,{name:"emaillogin",children:(0,f.jsx)(m,{})}),(0,f.jsx)(Z.MN,{name:"snslogin",children:(0,f.jsx)(k.o,{})})]})]})})})})]})}},3916:function(e,n,t){t.d(n,{JF:function(){return r},PM:function(){return s},bD:function(){return i},ew:function(){return a}});var r=function(e){return e.length<5||e.length>12?[!1,"5~12\uc790\ub97c \uc785\ub825\ud558\uc138\uc694"]:c(e)?[!0,"\uc0ac\uc6a9 \uac00\ub2a5"]:[!1,"\uc0ac\uc6a9 \ubd88\uac00\ub2a5"]},a=function(e){return e.length<8||e.length>16?[!1,"\uc22b\uc790, \ud2b9\uc218\ubb38\uc790 \ud3ec\ud568"]:o(e)?[!0,"\uc0ac\uc6a9 \uac00\ub2a5"]:[!1,"\uc0ac\uc6a9 \ubd88\uac00\ub2a5"]},s=function(e,n){return n!==e?[!1,"\ube44\ubc00\ubc88\ud638 \ubd88\uc77c\uce58"]:[!0,"\uc0ac\uc6a9 \uac00\ub2a5"]},i=function(e){return e.length<2||e.length>10?[!1,"2~10\uc790\ub97c \uc785\ub825\ud558\uc138\uc694"]:l(e)?[!0,"\uc0ac\uc6a9 \uac00\ub2a5"]:[!1,"\uc0ac\uc6a9 \ubd88\uac00\ub2a5"]},c=function(e){return/^[a-z]+[a-z0-9]{5,19}$/g.test(e)},o=function(e){return/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/.test(e)},l=function(e){return/^[a-zA-Z\u3131-\ud7a3][a-zA-Z\u3131-\ud7a3]*$/.test(e)}}}]);
//# sourceMappingURL=46.f5f2faf9.chunk.js.map