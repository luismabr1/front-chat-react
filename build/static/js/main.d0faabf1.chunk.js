(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(33),s=n.n(r),a=(n(41),n(19)),i=n(2),u=n(12),l=n(20),d=n(1),o=function(e){var t=e.title,n=e.subtitle,c=e.children;return Object(d.jsxs)("main",{className:"bg-base-100 w-full m-0 p-12 flex flex-col items-center rounded shadow-md",children:[Object(d.jsx)("p",{className:"text-4xl font-bold m-4",children:t}),Object(d.jsx)("p",{className:"text-1xl font-bold m-4",children:n}),c]})},j=n(18),b=Object(j.proxy)({users:[],userChats:[],currentUserId:"",currentChatId:""}),h=function(e){var t=e.id,n=e.title,c=e.email,r=e.button,s=e.route;return Object(d.jsxs)("div",{className:"card text-center shadow-md bg-white",children:[Object(d.jsx)("figure",{className:"px-2 pt-2",children:Object(d.jsx)("img",{alt:"Profile",src:"https://picsum.photos/id/1005/400/250",className:"rounded-xl"})}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h2",{className:"card-title",children:n}),Object(d.jsx)("p",{children:c}),Object(d.jsx)("div",{className:"justify-center card-actions",children:Object(d.jsx)(a.b,{to:"/".concat(s),className:"btn btn-outline border-2 btn-primary btn-block",onClick:function(){return"user"===s?function(e){b.currentUserId=e}(t):function(e){b.currentChatId=e}(t)},children:r})})]})]})},x=function(e){var t=e.children;return Object(d.jsx)("section",{className:"grid gap-3 xl:gap-5 w-full grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6",children:t})},m=n(36),f=function(){var e=Object(i.g)();return Object(d.jsxs)("button",{className:"btn fixed left-12 z-10",onClick:function(){return e(-1)},children:[Object(d.jsx)("div",{className:"text-accent text-xl",children:Object(d.jsx)(m.a,{})}),"Go back"]})},O=function(){var e=Object(j.useSnapshot)(b),t=function(){var e=Object(l.a)(Object(u.a)().mark((function e(){var t;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/user");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,b.users=t.data;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){t()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o,{title:"Bienvenidos a la sala situacional",subtitle:"Salas:",children:Object(d.jsx)(x,{children:e.users.length&&e.users.map((function(e){return Object(d.jsx)(h,{id:e._id,title:e.name,email:e.email,button:"Select User",route:"user"},e._id)}))})}),Object(d.jsx)(o,{title:"Bienvenidos a la sala situacional",subtitle:"Salas:",children:Object(d.jsx)(x,{children:e.users.length&&e.users.map((function(e){return Object(d.jsx)(h,{id:e._id,title:e.name,email:e.email,button:"Select User",route:"user"},e._id)}))})})]})},p=function(){var e=Object(j.useSnapshot)(b),t=function(){var e=Object(l.a)(Object(u.a)().mark((function e(t){var n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b.userChats=[],e.next=3,fetch("/api/chat/".concat(t));case 3:return e.next=5,e.sent.json();case 5:n=e.sent,b.userChats=n.data;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var n=e.currentUserId;t(n)}),[e.currentUserId]),e.currentUserId?Object(d.jsxs)(o,{children:[Object(d.jsx)(f,{}),Object(d.jsx)(x,{children:e.userChats&&e.userChats.map((function(t){return Object(d.jsx)(h,{id:t._id,button:"Let's chat",route:"chat",title:"Chat with ".concat(t.users[0]._id===e.currentUserId?t.users[1].name:t.users[0].name)},t._id)}))})]}):Object(d.jsx)(i.a,{to:"/"})},v=n(30),g=n(13),w=n(35),y=Object(w.a)(),N=function(e){var t=e.user,n=e.text;return"left"===e.direction?Object(d.jsx)("div",{style:{width:"fit-content"},className:"card shadow my-3 bg-base-100 ",children:Object(d.jsxs)("div",{className:"card-body p-4 ",children:[Object(d.jsx)("h2",{className:"card-title md:text-2xl",children:t}),Object(d.jsx)("p",{children:n})]})}):Object(d.jsx)("div",{style:{width:"fit-content"},className:"card shadow my-3 w-auto bg-primary md:w-1/2 self-end",children:Object(d.jsxs)("div",{className:"card-body text-right md:text-left p-4",children:[Object(d.jsx)("h2",{className:"card-title md:text-2xl",children:t}),Object(d.jsx)("p",{children:n})]})})},C=function(e){var t=e.onChange,n=e.onClick,c=e.value,r=e.onKeyDown;return Object(d.jsx)("div",{className:"form-control mt-8 ",children:Object(d.jsxs)("div",{className:"flex space-x-2 ",children:[Object(d.jsx)("input",{type:"text",value:c,onChange:t,onKeyDown:r,placeholder:"Write something...",className:"w-full input input-primary input-bordered md:text-2xl md:h-20 md:p-10 "}),Object(d.jsx)("button",{className:"btn btn-neutral md:w-64 md:h-20 md:text-2xl",onClick:n,children:"Send"})]})})},I=function(){var e=Object(j.useSnapshot)(b),t=Object(c.useState)(),n=Object(g.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)([]),o=Object(g.a)(a,2),h=o[0],x=o[1],m=Object(c.useState)(""),O=Object(g.a)(m,2),p=O[0],w=O[1],I=Object(c.useRef)(),k=function(){var e=Object(l.a)(Object(u.a)().mark((function e(t){var n,c;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x([]),e.next=3,fetch("/api/chat/".concat(t));case 3:return e.next=5,e.sent.json();case 5:return n=e.sent,s(n.data[0]),e.next=9,fetch("/api/message?chat=".concat(t));case 9:return e.next=11,e.sent.json();case 11:c=e.sent,x(c.data);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var t=Object(l.a)(Object(u.a)().mark((function t(){var n;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!p){t.next=5;break}return n={chat:e.currentChatId,user:e.currentUserId,message:p},t.next=4,fetch("/api/message",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(n)});case 4:w("");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){var t=e.currentChatId;k(t),y.on("".concat(t),(function(e){x((function(t){return[].concat(Object(v.a)(t),[e])}))}))}),[e.currentChatId]),Object(c.useEffect)((function(){e.currentUserId&&e.currentChatId&&I.current.scrollIntoView({behavior:"smooth"})}),[h]),e.currentUserId?e.currentChatId?Object(d.jsx)("main",{className:"w-full min-h-screen flex justify-center items-center md:text-2xl",children:Object(d.jsxs)("section",{className:"card shadow rounded-none bg-white w-full md:w-4/5 md:rounded-2xl md:my-4 lg:px-12",children:[Object(d.jsxs)("div",{className:"card-body ",children:[Object(d.jsx)(f,{}),Object(d.jsx)("h2",{className:"card-title",children:r?r.users[0]._id===e.currentUserId?r.users[1].name:r.users[0].name:null}),h&&h.map((function(t){return Object(d.jsx)(N,{user:t.user.name,text:t.message,direction:t.user._id===e.currentUserId?"right":"left"},t._id)})),Object(d.jsx)(C,{value:p,onChange:function(e){return function(e){w(e.target.value)}(e)},onClick:function(){return U()},onKeyDown:function(e){return function(e){13===e.keyCode&&U()}(e)}})]}),Object(d.jsx)("div",{ref:I})]})}):Object(d.jsx)(i.a,{to:"/user"}):Object(d.jsx)(i.a,{to:"/"})};n(51);var k=function(){return Object(d.jsx)(a.a,{children:Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{path:"/",element:Object(d.jsx)(O,{})}),Object(d.jsx)(i.b,{path:"/user",element:Object(d.jsx)(p,{})}),Object(d.jsx)(i.b,{path:"/chat",element:Object(d.jsx)(I,{})})]})})};s.a.render(Object(d.jsx)(k,{}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.d0faabf1.chunk.js.map