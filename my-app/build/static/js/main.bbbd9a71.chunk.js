(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(8),l=c.n(n),r=c(9),o=c(13),i=c(29),j=c.n(i),d=c(30),b=(c(43),c(31)),u=(c(44),c(5)),m=(c(45),c(12)),O=c.n(m),h=c(1);var g=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){O.a.get("/api/getMyInfo",{params:{}}).then((function(e){return a(e.data)})).catch((function(e){return console.log(e.res.data)}))}),[]),Object(h.jsxs)("div",{className:"sideBox",children:[Object(h.jsxs)("div",{className:"profileTtile",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"profileImg",src:"/image/me.jpg"})}),Object(h.jsx)("div",{className:"profileInfo",children:Object(h.jsxs)("p",{children:[Object(h.jsxs)("span",{style:{fontSize:"4vmin"},children:[c.NICK_NAME,Object(h.jsx)("br",{})]}),Object(h.jsxs)("span",{style:{fontSize:"2.5vmin",color:"gray"},children:[c.USER_NAME,Object(h.jsx)("br",{}),c.JOB]})]})})]}),Object(h.jsxs)("div",{className:"profileContents",children:[Object(h.jsx)("p",{children:"MY INFO"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("li",{children:"\uc18c\uc18d : IBK\uc2dc\uc2a4\ud15c"}),Object(h.jsx)("li",{children:"\uacbd\ub825 : 2\ub144\ucc28"}),Object(h.jsx)("li",{children:"\uc5b8\uc5b4 : JAVA, JAVASCRIPT, PYpON, C++, C, MYSQL"}),Object(h.jsx)("li",{children:"\uc778\uc2a4\ud0c0 : 9u_a_ang_5"}),Object(h.jsxs)("li",{children:["\uae43\ud5c8\ube0c : ",Object(h.jsx)("a",{href:"https://gipub.com/rhkddh1909",children:"https://github.com/rhkddh1909"})]}),Object(h.jsx)("li",{children:"\uc774\uba54\uc77c : rhkddh1909@gmail.com"}),Object(h.jsx)("li",{children:"\uce74\uce74\uc624\ud1a1 : rhkddh1909"}),Object(h.jsx)("li",{children:"\uc804\ud654\ubc88\ud638 : 010-9965-0688"}),Object(h.jsx)("li",{children:"\ud300\ud504\ub85c\uc81d\ud2b8 : HF\ucc28\uc138\ub300\uad6c\ucd95, \ubbf8\uc138\uba3c\uc9c0\uc800\uac10\ub300\ucc45APP\uac1c\ubc1c, \uae30\uc5c5\uc740\ud589BOX\ud504\ub85c\uc81d\ud2b8"}),Object(h.jsx)("li",{children:"\uac1c\uc778\ud504\ub85c\uc81d\ud2b8 : PORTFOLIO BLOG \ub9cc\ub4e4\uae30"})]})]})]})};c(65);var p=function(){var e=Object(s.useState)("\ud83d\udd0d\uac80\uc0c9"),t=Object(u.a)(e,2),c=t[0],a=t[1];return Object(h.jsxs)("div",{className:"black-nav",children:[Object(h.jsx)("div",{className:"mainTitle",children:"portfolio"}),Object(h.jsx)("div",{className:"searchBox",children:Object(h.jsx)("input",{className:"inputBox",type:"text",placeholder:c,onClick:function(){a("")},onBlur:function(){a("\ud83d\udd0d\uac80\uc0c9")}})})]})},x="CURRCLICK/SETID",v={currId:"",moreBtn:!1},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(console.log("action-type : "+t.type),console.log("state.Id : "+e.currId),t.type){case x:return console.log("actionId : "+t.currId),e.currId=t.currId,console.log("actionId : "+e.currId),e;default:return console.log("default"),e}},y=(c(66),c(10)),I=c(2),N=c(4);c(27),c(67);var k=function(e){var t=function(e){e.target.style.background="hsl(0, 0%, 96%)"},c=function(e){e.target.style.background="white",alert(e.target.id)},s=function(e){e.target.style.background="hsl(0, 0%, 96%)"},a=function(e){e.target.style.background="white"};return e.visible.moreBtn?Object(n.createPortal)(Object(h.jsx)("div",{className:"udModalOverlay",children:Object(h.jsx)("div",{onClick:function(t){document.body.style.overflow="unset",e.setClose(Object(N.a)(Object(N.a)({},e.visible),{},{moreBtn:!1}))},className:"udModalWrapper",children:Object(h.jsx)("div",{className:"udModalInner",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("button",{id:"update",className:"customBtn top",onMouseUp:c,onMouseDown:t,onMouseOver:s,onMouseOut:a,children:"\uc218\uc815"})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{id:"delete",className:"customBtn bottom",onMouseUp:c,onMouseDown:t,onMouseOver:s,onMouseOut:a,children:"\uc0ad\uc81c"})})]})})})}),document.getElementById("modal")):null};function w(e){var t,c=e.list,a=Object(s.useState)({ogInfo:{ogUrl:"",ogTitle:"",ogDescription:"",ogImageUrl:""},contentslen:5}),n=Object(u.a)(a,2),l=n[0],r=n[1];return Object(s.useEffect)((function(){O.a.get("/api/getOgInfo",{params:{url:c.url}}).then((function(e){console.log("result",e),console.log("url",e.data.ogImage.url),r(Object(N.a)(Object(N.a)({},l),{},{ogInfo:{ogUrl:e.data.ogUrl,ogTitle:e.data.ogTitle,ogDescription:e.data.ogDescription,ogImageUrl:e.data.ogImage.url}}))})).catch((function(e){return console.log(e)}))}),[]),Object(h.jsx)(s.Suspense,{fallback:Object(h.jsx)("div",{children:"loading..."}),children:(t=l.ogInfo.ogImageUrl,Object(h.jsxs)("div",{children:[t," "]}))})}var C=a.a.memo(w);var B=function(e){var t,c=e.data,a=Object(s.useState)({detailBtn:!0,moreBtn:!1}),n=Object(u.a)(a,2),l=n[0],r=n[1],o="9u_a_ang_5";return Object(h.jsxs)("div",{className:"postList",children:[Object(h.jsxs)("div",{className:"titleBox",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"contentImg",src:"/image/me.JPG"})}),Object(h.jsxs)("div",{className:"contentTitle",children:[Object(h.jsx)("h6",{className:"titleText",children:c.title}),Object(h.jsx)("p",{className:"subText",children:o}),Object(h.jsx)("p",{className:"subText",children:(new Date).getFullYear()+"\ub144"+((new Date).getMonth()+1)+"\uc6d4"+(new Date).getDate()+"\uc77c \uc791\uc131\uae00"})]}),Object(h.jsx)("a",{className:"option",onClick:function(e){document.body.style.overflow="hidden",r(Object(N.a)(Object(N.a)({},l),{},{moreBtn:!0}))},children:Object(h.jsx)("img",{src:"image/see_more.png"})})]}),Object(h.jsx)(C,{list:c}),Object(h.jsxs)("p",{className:"commentsTitle",children:[o," 's Comments",Object(h.jsx)("a",{onClick:function(e){l.detailBtn?r(Object(N.a)(Object(N.a)({},l),{},{detailBtn:!1})):r(Object(N.a)(Object(N.a)({},l),{},{detailBtn:!0}))},className:"moreComents",children:l.detailBtn?"..\ubcf4\uae30":"..\uc811\uae30"})]}),(t=l.detailBtn,t?null:Object(h.jsxs)("ul",{className:"comments",children:[Object(h.jsx)("li",{children:"\uc7ac\ubbf8 : \u2b50\u2b50\u2b50\u2b50\u2b50"}),Object(h.jsx)("li",{children:"\ub09c\uc774\ub3c4 : \ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25"}),Object(h.jsx)("li",{children:"\uc124\uba85 : \ub9cc\ub4dc\ub294 \uc911\uc774\ub2e4."}),Object(h.jsx)("li",{children:"\ubc30\uc6b4\uc810 : \ub9ac\uc561\ud2b8 \ucc98\uc74c\ubc30\uc6b4\ub2e4."})]})),Object(h.jsx)(k,{visible:l,setClose:r})]})};var M=function(e){var t;switch(e.args){case"all":t=[{type:1,key:"all1",title:"all",url:"https://naver.com/"},{type:1,key:"all2",title:"all2",url:"https://youtube.com/"}];break;case"algorithm":t=[{type:2,key:"algorithm1",title:"algorithm",url:"https://naver.com/"},{type:2,key:"algorithm2",title:"algorithm2",url:"https://youtube.com/"},{type:2,key:3,title:"projects2",url:"https://github.com/rhkddh1909/algorithm/blob/main/CPP/-2%EC%A7%84%EC%88%98(2089).cc"}];break;case"projects":t=[{type:3,key:"projects1",title:"projects",url:"https://naver.com/"},{type:3,key:"projects2",title:"projects2",url:"https://youtube.com/"},{type:3,key:3,title:"projects2",url:"https://github.com/rhkddh1909/algorithm/blob/main/CPP/-2%EC%A7%84%EC%88%98(2089).cc"}];break;case"awards":t=[{type:4,key:"awards1",title:"awards",url:"https://naver.com/"},{type:4,key:"awards2",title:"awards2",url:"https://youtube.com/"}];break;default:t=[{title:"\uc624\ub958"+e.args}]}return Object(h.jsx)("div",{children:t.map((function(e){return Object(h.jsx)(B,{data:e},e.key)}))})};function T(e){var t=window.location.pathname.replace(/\//gi,"");console.log("location : "+t);var c=function(t){var c;console.log("click"),e.dispatch((c=t.target.id,{type:x,currId:c})),console.log(e.stateValues.currId);for(var s=document.getElementsByClassName("menus"),a=0;a<s.length;a++)s[a].id===e.stateValues.currId?s[a].classList.add("on"):s[a].classList.remove("on")};return Object(h.jsxs)(y.a,{children:[Object(h.jsxs)("div",{className:"menuList",children:[Object(h.jsx)(y.b,{to:"/",id:"all",onClick:c,className:"menus "+(""===t?"on":""),children:"all."}),Object(h.jsx)(y.b,{to:"/algorithm",id:"algorithm",onClick:c,className:"menus "+("algorithm"===t?"on":""),children:"algorithm."}),Object(h.jsx)(y.b,{to:"/projects",id:"projects",onClick:c,className:"menus "+("projects"===t?"on":""),children:"project."}),Object(h.jsx)(y.b,{to:"/awards",id:"awards",onClick:c,className:"menus "+("awards"===t?"on":""),children:"awards."})]}),Object(h.jsxs)(I.c,{children:[Object(h.jsx)(I.a,{path:"/",element:Object(h.jsx)(M,{args:"all"})}),Object(h.jsx)(I.a,{path:"/algorithm",element:Object(h.jsx)(M,{args:"algorithm"})}),Object(h.jsx)(I.a,{path:"/projects",element:Object(h.jsx)(M,{args:"projects"})}),Object(h.jsx)(I.a,{path:"/awards",element:Object(h.jsx)(M,{args:"awards"})})]})]})}var P=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.stateValues}));return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"listFormat",children:Object(h.jsx)(T,{dispatch:e,stateValues:t})})})};var _=function(){var e=document.location.href,t="/image/shadow.jpeg";return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)(b.a,{children:[Object(h.jsx)("meta",{property:"og.url",content:e}),Object(h.jsx)("meta",{property:"og.title",content:"9u_a_ang_5's PORTFOLIO"}),Object(h.jsx)("meta",{property:"og.decoration",content:"git, awards, projects, algorithm \uc744 \uae30\ub85d\ud558\ub294 \uacf3\uc785\ub2c8\ub2e4."}),Object(h.jsx)("meta",{property:"og.image",content:t}),Object(h.jsx)("meta",{name:"twitter.title",content:"9u_a_ang_5's PORTFOLIO"}),Object(h.jsx)("meta",{name:"twitter.decoration",content:"git, awards, projects, algorithm \uc744 \uae30\ub85d\ud558\ub294 \uacf3\uc785\ub2c8\ub2e4."}),Object(h.jsx)("meta",{name:"twitter.image",content:t}),Object(h.jsx)("title",{children:"PORTFOLIO"})]}),Object(h.jsx)(p,{}),Object(h.jsx)(P,{}),Object(h.jsx)("div",{className:"sideFormat",children:Object(h.jsx)(g,{})})]})},S=Object(r.combineReducers)({stateValues:f}),E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,69)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),s(e),a(e),n(e),l(e)}))},F=Object(d.composeWithDevTools)(Object(r.applyMiddleware)(j.a)),L=Object(r.createStore)(S,F);l.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(o.a,{store:L,children:Object(h.jsx)(_,{})})}),document.getElementById("root")),E()}},[[68,1,2]]]);
//# sourceMappingURL=main.bbbd9a71.chunk.js.map