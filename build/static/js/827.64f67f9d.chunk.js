"use strict";(self.webpackChunkhealthapp=self.webpackChunkhealthapp||[]).push([[827],{4968:function(n,e,t){t(2791);e.Z=t.p+"static/media/board_write_picture_24.877cbbba3b7052eb8cc7bf98d072d000.svg"},287:function(n,e,t){t.d(e,{$n:function(){return h},Ut:function(){return m},Xn:function(){return l},mF:function(){return f},o4:function(){return x},xZ:function(){return p}});var i,r,a,o,c,s,d=t(168),u=t(6031),l=u.ZP.div(i||(i=(0,d.Z)(["\n  max-width: 1040px;\n  width: 1024px;\n  color: #333;\n  display: flex;\n  margin: 0 auto;\n  flex-direction: column;\n"]))),p=u.ZP.input(r||(r=(0,d.Z)(["\n  width: 100%;\n  height: 56px;\n  min-height: 56px;\n  border: none;\n  font-size: 16px;\n  font-weight: 500;\n  color: #333;\n  border-bottom: 1px solid #eeeeee;\n  margin-bottom: 20px;\n  :focus {\n    outline: none;\n  }\n"]))),x=u.ZP.label(a||(a=(0,d.Z)(['\n  border: 1px solid #0066ff;\n  border-radius: 60px;\n  color: #0066ff;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 15px 30px;\n  font-size: 16px;\n  margin-bottom: 5px;\n  font-weight: bold;\n  font-family: "Pretendard";\n']))),f=u.ZP.div(o||(o=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n"]))),h=u.ZP.div(c||(c=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-top: 1px solid #eeeeee;\n  margin-top: 20px;\n  padding-top: 20px;\n  margin-bottom: 50px;\n"]))),m=u.ZP.button(s||(s=(0,d.Z)(['\n  width: 100px;\n  height: 50px;\n  border-radius: 40px;\n  margin: 0px 10px;\n  border: 1px solid #eeeeee;\n  background-color: transparent;\n  text-align: center;\n  font-family: "Pretendard";\n  cursor: pointer;\n'])))},8827:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var i=t(4165),r=t(5861),a=t(885),o=t(6871),c=t(3013),s=(t(8276),t(2791)),d=t(4569),u=t.n(d),l=t(4175),p=t(287),x=t(4968),f=t(4465),h=t(5252),m=t(184);function g(){var n=(0,o.s0)(),e=(0,o.TH)().pathname,t=e.split("/")[1],d="/api".concat(e),g=(0,s.useState)(""),b=(0,a.Z)(g,2),v=b[0],w=b[1],Z=(0,s.useState)(""),j=(0,a.Z)(Z,2),y=j[0],k=j[1],P=(0,s.useState)([]),C=(0,a.Z)(P,2)[1],N=(0,s.useState)(!1),_=(0,a.Z)(N,2),z=_[0],A=_[1],B=(0,s.useState)([]),F=(0,a.Z)(B,2),H=F[0],S=F[1],E=function(n){for(var e=n.target.files,t=[],i=0;i<e.length;i++){if(e.length>5)return;t.push(e[i])}S(t)};(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)((0,i.Z)().mark((function n(){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u()(d);case 2:e=n.sent,C(e.data.data),w(e.data.data.title),k(e.data.data.content),A(!0);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[d]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.Z,{}),(0,m.jsx)(h.vE,{children:z?(0,m.jsx)(p.Xn,{children:(0,m.jsxs)("form",{onSubmit:function(t){t.preventDefault();var i=new FormData,r=t.target.inputfile.files;i.append("title",v),i.append("content",y);for(var a=0;a<r.length;a++)i.append("files",r[a]);A(!0),u().post(d,i,{headers:{"content-type":"multipart/form-data"}}).then((function(){n("/".concat(e.split("/")[1]))})).catch((function(n){return alert("".concat(n.response.status,"\ubc88 error \uc785\ub2c8\ub2e4. \uc785\ub825  \uc815\ubcf4\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694"))}))},children:[(0,m.jsx)(p.xZ,{id:"input-title",placeholder:"\uae00 \uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694!",value:v,onChange:function(n){w(n.target.value)},autoComplete:"off"}),(0,m.jsx)(c.Z,{setDescription:k,description:y}),(0,m.jsxs)(p.mF,{children:[(0,m.jsxs)(p.o4,{children:[(0,m.jsx)("img",{src:x.Z,style:{marginRight:"5px"},alt:"fileAdd"}),"\ud30c\uc77c \ucca8\ubd80","exercisepost"===t?(0,m.jsx)("input",{type:"file",multiple:!0,name:"inputfile",accept:"image/*",style:{display:"none"},onChange:E}):(0,m.jsx)("input",{type:"file",multiple:!0,name:"inputfile",accept:"video/* , image/*",style:{display:"none"},onChange:E}),(0,m.jsx)("span",{style:{color:"red"},children:"(\ud30c\uc77c\ubcc0\uacbd\uc2dc \uae30\uc874 \ud30c\uc77c\uc740 \uc0ad\uc81c\ub429\ub2c8\ub2e4)"})]}),H.map((function(n){return(0,m.jsx)("span",{style:{margin:"0px 10px"},children:" ".concat(n.name," ")},n.name)}))]}),(0,m.jsxs)(p.$n,{children:[(0,m.jsx)(p.Ut,{type:"button",onClick:function(){n("/".concat(t))},children:"\ucde8\uc18c"}),(0,m.jsx)(p.Ut,{type:"submit",style:{color:"white",backgroundColor:"#0066FF"},children:"\uc81c\ucd9c\ud558\uae30"})]})]})}):(0,m.jsx)(f.Z,{})})]})}},5252:function(n,e,t){t.d(e,{In:function(){return v},JH:function(){return k},NB:function(){return j},Ts:function(){return b},_r:function(){return g},dz:function(){return P},f:function(){return w},fm:function(){return N},pd:function(){return Z},rG:function(){return y},vE:function(){return C}});var i,r,a,o,c,s,d,u,l,p,x,f,h=t(168),m=t(6031),g=(m.ZP.div(i||(i=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  width: 100vw;\n  height: 84px;\n  background: #222222;\n"]))),m.ZP.div(r||(r=(0,h.Z)(["\n  width: 100%;\n  position: relative;\n"])))),b=m.ZP.div(a||(a=(0,h.Z)(["\n  width: 100%;\n  max-width: 1440px;\n  display: flex;\n  margin: 0 auto;\n  box-sizing: border-box;\n\n  @media screen and (max-width: 1440px) {\n    flex-direction: column;\n    align-items: center;\n  }\n  @media screen and (max-width: 600px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"]))),v=m.ZP.div(o||(o=(0,h.Z)(["\n  box-sizing: border-box;\n  order: 1;\n  @media screen and (max-width: 1440px) {\n    order: 2;\n  }\n  @media screen and (max-width: 600px) {\n    order: 2;\n  }\n"]))),w=m.ZP.div(c||(c=(0,h.Z)(["\n  box-sizing: border-box;\n  order: 2;\n  margin: 0 auto;\n  @media screen and (max-width: 1440px) {\n    order: 1;\n  }\n  @media screen and (max-width: 600px) {\n    order: 1;\n  }\n"]))),Z=m.ZP.div(s||(s=(0,h.Z)(["\n  box-sizing: border-box;\n  width: 96%;\n  margin: 70px auto;\n  height: 450px;\n  background: #222222;\n"]))),j=m.ZP.div(d||(d=(0,h.Z)(["\n  /* max-width: 1100px; */\n  margin: 30px auto;\n  @media screen and (max-width: 1024px) {\n    margin: 30px 20px;\n  }\n  @media screen and (max-width: 600px) {\n    margin: 30px 20px;\n  }\n"]))),y=m.ZP.div(u||(u=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  @media screen and (max-width: 420px) {\n    margin: 5px;\n  }\n"]))),k=m.ZP.div(l||(l=(0,h.Z)(['\n  font-size: 24px;\n  font-weight: 400;\n  letter-spacing: 1px;\n  white-space: nowrap;\n  font-family: "GangwonEduPower";\n']))),P=m.ZP.section(p||(p=(0,h.Z)(["\n  box-sizing: border-box;\n  width: 90%;\n  max-width: 1039px;\n  margin: 0 auto;\n"]))),C=m.ZP.section(x||(x=(0,h.Z)(["\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 1396px;\n  margin: 0 auto;\n  margin-top: 100px;\n  @media screen and (max-width: 1440px) {\n    width: 1039px; /*\uc544\uc774\ud15c 4\uac1c*/\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  @media screen and (max-width: 1024px) {\n    width: 682px; /*\uc544\uc774\ud15c 3\uac1c*/\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  @media screen and (max-width: 600px) {\n    width: 400px;\n    display: flex;\n    margin: 0 10px;\n    flex-wrap: wrap;\n  }\n  @media screen and (max-width: 420px) {\n    width: 350px;\n    margin-top: 80px;\n    display: flex;\n    flex-wrap: wrap;\n  }\n"]))),N=m.ZP.div(f||(f=(0,h.Z)(["\n  box-sizing: border-box;\n  margin: 32px 0px;\n  display: flex;\n  flex-wrap: wrap;\n"])))},3013:function(n,e,t){var i=t(4561),r=t(5942),a=t(7769),o=t(9135),c=t(184),s=function(n){var e=n.editor;return e?(0,c.jsx)("div",{className:"menuBar",children:(0,c.jsxs)("div",{children:[(0,c.jsx)("button",{type:"button",onClick:function(){return e.chain().focus().toggleBold().run()},className:e.isActive("bold")?"is_active":"",children:(0,c.jsx)(o.PKR,{})}),(0,c.jsx)("button",{type:"button",onClick:function(){return e.chain().focus().toggleItalic().run()},className:e.isActive("italic")?"is_active":"",children:(0,c.jsx)(o.Mef,{})}),(0,c.jsx)("button",{type:"button",onClick:function(){return e.chain().focus().toggleUnderline().run()},className:e.isActive("underline")?"is_active":"",children:(0,c.jsx)(o.LRB,{})}),(0,c.jsx)("button",{type:"button",onClick:function(){return e.chain().focus().toggleStrike().run()},className:e.isActive("strike")?"is_active":"",children:(0,c.jsx)(o.zal,{})}),(0,c.jsx)("button",{type:"button",onClick:function(){return e.chain().focus().toggleHeading({level:2}).run()},className:e.isActive("heading",{level:2})?"is_active":"",children:(0,c.jsx)(o.YHB,{})}),(0,c.jsx)("button",{type:"button",onClick:function(){return e.chain().focus().toggleHeading({level:3}).run()},className:e.isActive("heading",{level:3})?"is_active":"",children:(0,c.jsx)(o.YHB,{className:"heading3"})}),(0,c.jsx)("button",{type:"button",onClick:function(){return e.chain().focus().toggleBulletList().run()},className:e.isActive("bulletList")?"is_active":"",children:(0,c.jsx)(o.hON,{})}),(0,c.jsx)("button",{type:"button",onClick:function(){return e.chain().focus().toggleOrderedList().run()},className:e.isActive("orderedList")?"is_active":"",children:(0,c.jsx)(o.Fe1,{})}),(0,c.jsx)("button",{type:"button",onClick:function(){return e.chain().focus().toggleBlockquote().run()},className:e.isActive("blockquote")?"is_active":"",children:(0,c.jsx)(o.fkU,{})})]})}):null};e.Z=function(n){var e=n.setDescription,t=n.description,o=(0,i.jE)({extensions:[r.Z,a.Z],content:t||"",onUpdate:function(n){var t=n.editor.getHTML();e(t)}});return(0,c.jsxs)("div",{className:"textEditor",children:[(0,c.jsx)(s,{editor:o}),(0,c.jsx)(i.kg,{editor:o})]})}},8276:function(){}}]);
//# sourceMappingURL=827.64f67f9d.chunk.js.map