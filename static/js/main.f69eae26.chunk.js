(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,s,t){},44:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t(0),r=t.n(c),i=t(14),n=t.n(i),l=t(4),o=t(15),b=t(17),d=t(30),j=t(18),m="app/IS_MOBILE",u="app/SHOW_SIDEBAR",h={isMobile:!1,showSidebar:!0},x=Object(b.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case m:return Object(j.a)(Object(j.a)({},e),{},{isMobile:s.payload});case u:return Object(j.a)(Object(j.a)({},e),{},{showSidebar:s.payload});default:return e}}}),O=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,p=Object(b.e)(x,{},O(Object(b.a)(d.a))),f=(t(46),function(e){return{type:u,payload:e}}),N=function(){return Object(a.jsx)("div",{className:"header_logo",children:"Logo"})},v=function(e){var s=e.isOpen,t=e.menuToggle;return Object(a.jsx)("div",{className:s?"header_burger header_burger__open":"header_burger",onClick:t,children:Object(a.jsx)("span",{})})},g=function(){return Object(a.jsxs)("div",{className:"header_user",children:[Object(a.jsx)("span",{children:"User Name"}),Object(a.jsxs)("ul",{className:"header_submenu",children:[Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{className:"",to:"/settings",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})}),Object(a.jsx)("li",{children:Object(a.jsx)("button",{className:"btn btn__block btn__danger",children:"\u0412\u044b\u0445\u043e\u0434"})})]})]})},_=Object(o.b)((function(e){return{isMobile:e.app.isMobile,showSidebar:e.app.showSidebar}}),{setShowSidebar:f})((function(e){var s=e.isAuth,t=e.isMobile,c=e.showSidebar,r=e.setShowSidebar;return Object(a.jsx)("header",{className:"header",children:Object(a.jsxs)("div",{className:"header_wrapper container",children:[s&&t?Object(a.jsx)(v,{isOpen:c,menuToggle:function(){r(!c)}}):Object(a.jsx)(N,{}),s&&Object(a.jsx)(g,{})]})})})),w=(Object(o.b)((function(e){return{isMobile:e.app.isMobile}}),{setShowSidebar:f})((function(e){var s=e.isMobile,t=e.setShowSidebar,r=Object(c.useCallback)((function(e){var s=document.getElementsByClassName("sidebar")[0],a=document.getElementsByClassName("header_burger")[0];e.path.includes(s)||e.path.includes(a)||t(!1)}),[t]),i=function(){t(!1)};return Object(c.useEffect)((function(){return s&&document.addEventListener("click",r),function(){return document.removeEventListener("click",r)}})),Object(a.jsx)("nav",{className:"sidebar",children:Object(a.jsxs)("ul",{className:"sidebar_list",children:[Object(a.jsx)("li",{className:"sidebar_item",onClick:i,children:Object(a.jsxs)(l.b,{to:"/",children:[Object(a.jsx)("i",{className:"far fa-user-circle"}),"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"]})}),Object(a.jsx)("li",{className:"sidebar_item",onClick:i,children:Object(a.jsxs)(l.b,{to:"/friends",children:[Object(a.jsx)("i",{className:"fas fa-users"}),"\u0414\u0440\u0443\u0437\u044c\u044f"]})}),Object(a.jsx)("li",{className:"sidebar_item",onClick:i,children:Object(a.jsxs)(l.b,{to:"/messages",children:[Object(a.jsx)("i",{className:"far fa-comments"}),"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"]})}),Object(a.jsx)("li",{className:"sidebar_item",onClick:i,children:Object(a.jsxs)(l.b,{to:"/feed",children:[Object(a.jsx)("i",{className:"fas fa-rss"}),"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"]})})]})})})),t(3)),S=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"SettingsPage"})})},C=t(23),y=function(){var e=Object(C.a)({initialValues:{email:"",password:""},validate:function(e){var s={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(s.email="\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"):s.email="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e",e.password||(s.password="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),s},onSubmit:function(e){alert(JSON.stringify(e))}});return Object(a.jsxs)("div",{className:"sign",children:[Object(a.jsx)("i",{className:"fas fa-sign-in-alt fa-2x mb-05"}),Object(a.jsx)("h1",{className:"title mb-05",children:"\u0412\u0445\u043e\u0434"}),Object(a.jsxs)("form",{className:"sign_form mb-1",onSubmit:e.handleSubmit,children:[Object(a.jsx)("input",{className:e.touched.email&&e.errors.email?"form-control error mb-05":"form-control mb-05",name:"email",type:"email",placeholder:"Email",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.email}),e.touched.email&&e.errors.email?Object(a.jsx)("div",{className:"subtext error mb-05",children:e.errors.email}):null,Object(a.jsx)("input",{className:e.touched.password&&e.errors.password?"form-control error mb-05":"form-control mb-1",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.password}),e.touched.password&&e.errors.password?Object(a.jsx)("div",{className:"subtext error mb-05",children:e.errors.password}):null,Object(a.jsx)("button",{type:"submit",className:"btn btn__primary btn__block",children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(a.jsxs)("p",{className:"subtext",children:["\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? ",Object(a.jsx)(l.b,{to:"/register",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f!"})]})]})},k=function(){var e=Object(C.a)({initialValues:{name:"",email:"",password:"",birthdate:""},validate:function(e){var s={};return e.name||(s.name="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(s.email="\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"):s.email="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e",e.password||(s.password="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),e.birthdate||(s.birthdate="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),s},onSubmit:function(e){alert(JSON.stringify(e))}});return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"sign",children:[Object(a.jsx)("i",{className:"fas fa-user-plus fa-2x mb-05"}),Object(a.jsx)("h1",{className:"title mb-05",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsxs)("form",{className:"sign_form mb-1",onSubmit:e.handleSubmit,children:[Object(a.jsx)("input",{className:e.touched.name&&e.errors.name?"form-control error mb-05":"form-control mb-05",name:"name",type:"text",placeholder:"\u0418\u043c\u044f \u0438 \u0444\u0430\u043c\u0438\u043b\u0438\u044f",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.name}),e.touched.name&&e.errors.name?Object(a.jsx)("div",{className:"subtext error mb-05",children:e.errors.name}):null,Object(a.jsx)("input",{className:e.touched.email&&e.errors.email?"form-control error mb-05":"form-control mb-05",name:"email",type:"email",placeholder:"Email",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.email}),e.touched.email&&e.errors.email?Object(a.jsx)("div",{className:"subtext error mb-05",children:e.errors.email}):null,Object(a.jsx)("input",{className:e.touched.password&&e.errors.password?"form-control error mb-05":"form-control mb-05",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.password}),e.touched.password&&e.errors.password?Object(a.jsx)("div",{className:"subtext error mb-05",children:e.errors.password}):null,Object(a.jsx)("label",{htmlFor:"",children:Object(a.jsx)("p",{className:"subtext",children:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"})}),Object(a.jsx)("input",{className:e.touched.birthdate&&e.errors.birthdate?"form-control error mb-05":"form-control mb-1",name:"birthdate",type:"date",placeholder:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.birthdate}),e.touched.birthdate&&e.errors.birthdate?Object(a.jsx)("div",{className:"subtext error mb-05",children:e.errors.birthdate}):null,Object(a.jsx)("button",{className:"btn btn__primary btn__block",type:"submit",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]}),Object(a.jsxs)("p",{className:"subtext",children:["\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442? ",Object(a.jsx)(l.b,{to:"/",children:"\u0412\u043e\u0439\u0442\u0438!"})]})]})})},M=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"FriendsPage"})})},E=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"MessagesPage"})})},B=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"FeedsPage"})})},L=function(e){var s=e.author,t=s.src,c=s.userName,r=e.body,i=e.isMeLiked,n=e.commentsCount,o=e.likeCounts;return Object(a.jsxs)("div",{className:"post",children:[Object(a.jsxs)("div",{className:"post_header",children:[Object(a.jsx)(l.b,{to:"/",children:Object(a.jsxs)("div",{className:"author",children:[Object(a.jsx)("img",{src:t,alt:t}),Object(a.jsx)("p",{children:c})]})}),Object(a.jsx)("div",{children:Object(a.jsx)("i",{className:"fas fa-ellipsis-v"})})]}),Object(a.jsx)("div",{className:"post_body",children:r}),Object(a.jsxs)("div",{className:"post_footer",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("i",{className:"far fa-comment-dots"}),Object(a.jsx)("p",{className:"subtext",children:n||""})]}),Object(a.jsxs)("div",{children:[i?Object(a.jsx)("i",{className:"fas fa-heart"}):Object(a.jsx)("i",{className:"far fa-heart"}),Object(a.jsx)("p",{className:"subtext",children:o||""})]})]})]})},A=[{id:1,author:{userName:"\u0410\u043d\u0442\u043e\u043d \u0414\u044b\u043c\u043e\u0432",src:"http://archilab.online/images/1/123.jpg"},body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus ea est facere impedit laboriosam nesciunt quo veniam. Delectus, quia.",isMeLiked:!0,commentsCount:51,likesCount:112},{id:2,author:{userName:"\u0410\u043d\u0442\u043e\u043d \u0414\u044b\u043c\u043e\u0432",src:"http://archilab.online/images/1/123.jpg"},body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus ea est facere impedit laboriosam nesciunt quo veniam. Delectus, quia.",isMeLiked:!1,commentsCount:2,likesCount:16},{id:3,author:{userName:"\u0410\u043d\u0442\u043e\u043d \u0414\u044b\u043c\u043e\u0432",src:"http://archilab.online/images/1/123.jpg"},body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus ea est facere impedit laboriosam nesciunt quo veniam. Delectus, quia.",isMeLiked:!1,commentsCount:0,likesCount:0}],I=function(){var e=A.map((function(e){return Object(a.jsx)(L,{author:e.author,body:e.body,isMeLiked:e.isMeLiked,commentsCount:e.commentsCount,likeCounts:e.likesCount},e.id)}));return Object(a.jsxs)("div",{className:"wall",children:[Object(a.jsxs)("div",{className:"wall_new-post",children:[Object(a.jsx)("textarea",{className:"form-control",rows:3,placeholder:"\u041e \u0447\u0451\u043c \u0434\u0443\u043c\u0430\u0435\u0442\u0435?"}),Object(a.jsx)("button",{className:"btn btn__primary ",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]}),Object(a.jsx)("div",{className:"wall_posts",children:e})]})},q=function(){return Object(a.jsxs)("div",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile_wrapper",children:[Object(a.jsxs)("div",{className:"profile_photo",children:[Object(a.jsx)("img",{src:"https://img4.goodfon.ru/original/2048x1344/6/55/kot-sneg-zima-1.jpg",alt:"avatar",className:"card_img"}),Object(a.jsx)("button",{className:"btn btn__light btn__small btn__block",children:"\u0421\u043c\u0435\u043d\u0438\u0442\u044c"})]}),Object(a.jsxs)("div",{className:"profile_info",children:[Object(a.jsx)("h1",{className:"title profile_title",children:"\u0410\u043d\u0442\u043e\u043d \u0414\u044b\u043c\u043e\u0432"}),Object(a.jsx)("div",{className:"profile_status",children:Object(a.jsx)("p",{className:"subtext",children:"\u0422\u0443\u0442 \u043a\u0440\u0443\u0442\u0430\u044f \u0446\u0438\u0442\u0430\u0442\u0430 \u0442\u0438\u043f\u043e \u0441\u0442\u0430\u0442\u0443\u0441"})}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{className:"subtext profile_subtext",children:["\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f: ",Object(a.jsx)(l.c,{to:"/settings",children:"31.08.1992"})]}),Object(a.jsxs)("p",{className:"subtext profile_subtext",children:["\u0421\u0435\u043c\u0435\u0439\u043d\u043e\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435: ",Object(a.jsx)(l.c,{to:"/settings",children:"\u0436\u0435\u043d\u0430\u0442"})]}),Object(a.jsxs)("p",{className:"subtext profile_subtext",children:["\u041c\u0435\u0441\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u044b: ",Object(a.jsx)(l.c,{to:"/settings",children:'\u041e\u041e\u041e "\u0424\u0438\u0440\u043c\u0430"'})]}),Object(a.jsxs)("p",{className:"subtext profile_subtext",children:["\u0412\u0435\u0431 \u0441\u0430\u0439\u0442: ",Object(a.jsx)(l.c,{to:"/settings",children:"http://localhost"})]})]})]})]}),Object(a.jsx)(I,{})]})},D=(t(43),Object(o.b)((function(e){return{isMobile:e.app.isMobile,showSidebar:e.app.showSidebar}}),{setIsMobile:function(e){return{type:m,payload:e}},setShowSidebar:f})((function(e){var s=e.isMobile,t=e.showSidebar,r=e.setIsMobile,i=e.setShowSidebar,n=!1,l=function(e){return e?Object(a.jsxs)(w.d,{children:[Object(a.jsx)(w.b,{path:"/settings",exact:!0,children:Object(a.jsx)(S,{})}),Object(a.jsx)(w.b,{path:"/friends",exact:!0,children:Object(a.jsx)(M,{})}),Object(a.jsx)(w.b,{path:"/messages",exact:!0,children:Object(a.jsx)(E,{})}),Object(a.jsx)(w.b,{path:"/feed",exact:!0,children:Object(a.jsx)(B,{})}),Object(a.jsx)(w.b,{path:"/",exact:!0,children:Object(a.jsx)(q,{})}),Object(a.jsx)(w.a,{to:"/"})]}):Object(a.jsxs)(w.d,{children:[Object(a.jsx)(w.b,{path:"/",exact:!0,children:Object(a.jsx)(y,{})}),Object(a.jsx)(w.b,{path:"/register",exact:!0,children:Object(a.jsx)(k,{})}),Object(a.jsx)(w.a,{to:"/"})]})}(n),o=function(){!s&&document.documentElement.clientWidth<=768?(r(!0),i(!1)):document.documentElement.clientWidth>768&&(r(!1),i(!0))};return Object(c.useEffect)((function(){return o(),window.addEventListener("resize",o),function(){return window.removeEventListener("resize",o)}})),Object(a.jsxs)("div",{className:s&&t?"app shadow":"app",children:[Object(a.jsx)(_,{isAuth:n}),Object(a.jsx)("div",{className:"container",children:l})]})})));n.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(o.a,{store:p,children:Object(a.jsx)(l.a,{children:Object(a.jsx)(D,{})})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.f69eae26.chunk.js.map