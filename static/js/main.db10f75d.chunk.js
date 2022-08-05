(this["webpackJsonpcommon-words-frontend"]=this["webpackJsonpcommon-words-frontend"]||[]).push([[0],{175:function(e,t,n){},235:function(e,t,n){},329:function(e,t,n){},330:function(e,t,n){},331:function(e,t,n){},332:function(e,t,n){},420:function(e,t,n){},428:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(35),r=n.n(i),s=(n(235),n(4)),l=n(434),o=n(118),d=n(436),j=n(432),u=n(114),b=(n(175),n(435)),x=n(442),g=n(439),h=n(440),p=n(431),O=n(2),m=function(){var e=Object(a.useContext)(re),t=Object(a.useContext)(ie),n=(t.wordsPerPage,t.words,t.minWordLength,t.maxWordLength,t.wordMatch,Object(a.useState)(0)),c=Object(s.a)(n,2),i=c[0],r=c[1],l=Object(a.useState)(200),o=Object(s.a)(l,2),d=o[0],j=o[1],u=Object(a.useState)(!1),m=Object(s.a)(u,2),f=m[0],y=m[1],v=Object(a.useState)([]),E=Object(s.a)(v,2),w=E[0],S=E[1];e.blendedList.map((function(e){return{word:e}}));return Object(O.jsxs)(O.Fragment,{children:[e.blendedList.length>0?Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",paddingTop:"12px"},children:[Object(O.jsx)(b.a,{current:i,pageSize:d,defaultCurrent:1,total:e.blendedList.length,pageSizeOptions:[50,100,200,500,1e3,2e3,5e3,1e4],style:{flexGrow:1},onChange:function(e,t){j(t),r(e)}}),Object(O.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",marginTop:"6px"},children:[e.prefixLetters>0&&"object"===typeof e.blendedList[0]&&e.blendedList.map((function(t,n){return null===t||void 0===t?void 0:t.map((function(a,c){if(n*c>=d*i&&n*c<=d*(i+1)-1&&a.length<=e.maxLength&&a.length>=e.minLength&&-1!==t.join().indexOf("1")&&-1!==t.join().indexOf("2"))return Object(O.jsx)(x.a,{className:"word-tag",style:{cursor:"pointer",flexGrow:1,marginTop:"6px",backgroundColor:a.length<=5?"#e6f7ff":a.length<=10?"#bae7ff":a.length<=15?"#91d5ff":"#69c0ff"},onClick:function(){S(t),y(!0)},children:a.substr(0,a.length-1).split("").map((function(t,n){return Object(O.jsx)("span",{style:{fontWeight:n<e.prefixLetters&&0!==e.prefixLetters?600:100,textDecoration:n<e.prefixLetters&&0!==e.prefixLetters?"underline":"normal"},children:t})}))})}))})),Object(O.jsxs)(g.a,{title:"Common words",visible:f,onCancel:function(){return y(!1)},footer:null,children:[Object(O.jsxs)("h3",{children:[Object(O.jsx)(h.a,{color:"#096dd9",style:{marginRight:"0px"}})," (",e.languageCode1,") |",Object(O.jsx)(h.a,{color:"#cf1322",style:{marginLeft:"10px"}}),"(",e.languageCode2,")"]}),w.map((function(t){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{style:{color:-1!==t.indexOf("1")?"#096dd9":"#cf1322"},children:t.substr(0,t.length-1).split("").map((function(t,n){return Object(O.jsx)("span",{style:{fontWeight:n<e.prefixLetters&&0!==e.prefixLetters?600:100,textDecoration:n<e.prefixLetters&&0!==e.prefixLetters?"underline":"normal"},children:t})}))})," ","|"," "]})}))]}),0===e.prefixLetters&&e.blendedList.map((function(t,n){if(n>=d*i&&n<=d*(i+1)-1&&t.length<=e.maxLength&&t.length>=e.minLength)return Object(O.jsx)(x.a,{style:{flexGrow:1,marginTop:"6px",backgroundColor:t.length<=5?"#e6f7ff":t.length<=10?"#bae7ff":t.length<=15?"#91d5ff":"#69c0ff"},children:t.split("").map((function(t,n){return Object(O.jsx)("span",{style:{color:n<e.prefixLetters&&0!==e.prefixLetetrs1?"#002766":"black",fontWeight:n<e.prefixLetters&&0!==e.prefixLetters?500:100},children:t})}))})}))]})]}):null,e.loading&&Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"48px"},children:Object(O.jsx)(p.a,{})})]})},f=n(443),y=c.a.createContext(null),v=function(){var e=c.a.useContext(re);return Object(O.jsxs)(y.Provider,{value:e,children:[Object(O.jsxs)("div",{id:"header-container",children:[Object(O.jsxs)(l.a,{id:"inputs-card",children:[Object(O.jsx)(o.a,{onChange:function(t){e.getFirstLanguage(t)},placeholder:"select a language",style:{width:"160px"},defaultValue:"",children:e.languages.map((function(e){return Object(O.jsx)(o.a.Option,{value:e.name,children:e.name},e._id)}))}),Object(O.jsx)(f.a,{style:{marginLeft:"10px",marginRight:"10px",color:"white"}}),Object(O.jsx)(o.a,{placeholder:"select another language",onChange:function(t){e.getSecondLanguage(t)},defaultValue:"",style:{width:"160px"},children:e.languages.sort((function(e,t){return e.name>t.name?1:-1})).map((function(e){return Object(O.jsx)(o.a.Option,{value:e.name,children:e.name},e._id)}))})]}),Object(O.jsx)(l.a,{id:"statistics-card",children:"add statistics here"}),e.blendedList.length>0&&Object(O.jsxs)(l.a,{id:"controls-card",children:[Object(O.jsxs)("div",{id:"controls-content",children:[Object(O.jsxs)("div",{style:{margin:"5px"},children:["Min. word length:"," ",Object(O.jsx)(d.a,{size:"small",min:1,max:99,value:e.minLength,onChange:function(t){e.setMinLength(t)},style:{marginLeft:"2px",width:"55px"}})]}),Object(O.jsx)(j.a,{type:"vertical"}),Object(O.jsxs)("div",{style:{margin:"5px"},children:["Max. word length:"," ",Object(O.jsx)(d.a,{size:"small",min:1,max:99,value:e.maxLength,onChange:function(t){e.setMaxLength(t)},style:{marginLeft:"2px",width:"55px"}})]}),Object(O.jsx)(j.a,{type:"vertical"}),Object(O.jsxs)("div",{style:{margin:"5px"},children:["Same prefix length:"," ",Object(O.jsx)(d.a,{size:"small",min:3,max:99,value:e.prefixLetters,onChange:function(t){e.setPrefixLetters(t)},style:{marginLeft:"2px",width:"55px"}})]}),Object(O.jsx)(j.a,{type:"vertical"})]}),Object(O.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(O.jsx)(u.a,{style:{marginTop:"12px"},onClick:function(){e.setMinLength(1),e.setMaxLength(99)},children:"Reset all filters"})})]})]}),Object(O.jsx)(m,{})]})},E=n(79),w=n(18),S=n(65),C=n.n(S),k=n(101),L=n(83),A=n(102),T=n.n(A),N=(n(329),function(){var e=Object(a.useContext)(ie),t=e.english,n=e.finnish,c=e.french,i=e.german,r=e.hungarian,l=e.italian,o=e.polish,d=e.romanian,u=e.spanish,b=e.turkish,x=e.viewList,g=Object(a.useState)(!1),h=Object(s.a)(g,2),m=h[0],f=h[1],y=function(){var e=Object(k.a)(C.a.mark((function e(t){var n,a,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.prev=1,e.next=4,T.a.get("".concat("https://common-words.herokuapp.com","/getLanguage?language=").concat(t));case 4:200===(n=e.sent).status&&(a=document.createElement("a"),c=new Blob([n.data.data[0].list.join("\n")],{type:"text/plain"}),a.href=URL.createObjectURL(c),a.download="list.txt",document.body.appendChild(a),a.click()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:f(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{style:{display:"flex",flexDirection:"column",maxWidth:"300px"},children:m?Object(O.jsx)(p.a,{indicator:Object(O.jsx)(L.a,{style:{fontSize:48,color:"white",marginTop:"100px"},spin:!0})}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsxs)("div",{children:["(en) ",t]}),Object(O.jsx)("div",{className:"download-link",onClick:function(){return y("english")},children:x})]}),Object(O.jsx)(j.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsxs)("div",{children:["(fi) ",n]}),Object(O.jsx)("div",{className:"download-link",onClick:function(){return y("finnish")},children:x})]}),Object(O.jsx)(j.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsxs)("div",{children:["(fr) ",c]}),Object(O.jsx)("div",{className:"download-link",onClick:function(){return y("french")},children:x})]}),Object(O.jsx)(j.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsxs)("div",{children:["(de) ",i]}),Object(O.jsx)("div",{className:"download-link",onClick:function(){return y("german")},children:x})]}),Object(O.jsx)(j.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsxs)("div",{children:["(hu) ",r]}),Object(O.jsx)("div",{className:"download-link",onClick:function(){return y("hungarian")},children:x})]}),Object(O.jsx)(j.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsxs)("div",{children:["(it) ",l]}),Object(O.jsx)("div",{className:"download-link",onClick:function(){return y("italian")},children:x})]}),Object(O.jsx)(j.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsxs)("div",{children:["(pl) ",o]}),Object(O.jsx)("div",{className:"download-link",onClick:function(){return y("polish")},children:x})]}),Object(O.jsx)(j.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsxs)("div",{children:["(ro) ",d]}),Object(O.jsx)("div",{className:"download-link",onClick:function(){return y("romanian")},children:x})]}),Object(O.jsx)(j.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsxs)("div",{children:["(es) ",u]}),Object(O.jsx)("div",{className:"download-link",onClick:function(){return y("spanish")},children:x})]}),Object(O.jsx)(j.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsxs)("div",{children:["(tr) ",b]}),Object(O.jsx)("div",{className:"download-link",onClick:function(){return y("turkish")},children:x})]})]})})}),I=(n(330),function(){var e=Object(a.useContext)(ie),t=e.update1,n=e.update2,c=e.update3,i=e.update4,r=e.update5,s=e.update6;return Object(O.jsx)("div",{children:Object(O.jsx)("div",{id:"changelog-container",children:Object(O.jsxs)("div",{id:"changelog-sub-container",children:[Object(O.jsx)(l.a,{headStyle:{color:"white"},title:"V1.0.0 / -",style:{margin:"12px",backgroundColor:"#393E46",color:"white"}}),Object(O.jsx)(l.a,{headStyle:{color:"white"},title:"V0.5.0 / 17.5.2022",style:{margin:"12px",backgroundColor:"#393E46",color:"white"},children:s}),Object(O.jsx)(l.a,{headStyle:{color:"white"},title:"V0.0.5 / 26.4.2022",style:{margin:"12px",backgroundColor:"#393E46",color:"white"},children:r}),Object(O.jsx)(l.a,{headStyle:{color:"white"},title:"V0.0.4 / 16.4.2022",style:{margin:"12px",backgroundColor:"#393E46",color:"white"},children:i}),Object(O.jsx)(l.a,{headStyle:{color:"white"},title:"V0.3 / 29.12.2021",style:{margin:"12px",backgroundColor:"#393E46",color:"white"},children:c}),Object(O.jsx)(l.a,{headStyle:{color:"white"},title:"V0.2 / 10.12.2021",style:{margin:"12px",backgroundColor:"#393E46",color:"white"},children:n}),Object(O.jsx)(l.a,{headStyle:{color:"white"},title:"V0.1 / 1.12.2021",style:{margin:"12px",backgroundColor:"#393E46",color:"white"},children:t})]})})})}),R=function(){return Object(O.jsx)("div",{style:{display:"flex",flexDirection:"column",color:"#fff"},children:Object(O.jsxs)("div",{style:{display:"flex",flexGrow:1,flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(O.jsx)("span",{style:{fontSize:"6rem",marginTop:"100px"},children:"404"}),Object(O.jsx)("p",{style:{marginTop:"-15px",marginBottom:"30px"},children:"Nothing to see here"})]})})},B=n(16),D=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)([]),r=Object(s.a)(i,2),l=r[0],o=r[1],d=Object(a.useState)(""),j=Object(s.a)(d,2),u=j[0],b=j[1],x=Object(a.useState)(""),g=Object(s.a)(x,2),h=g[0],p=g[1],O=Object(a.useState)([]),m=Object(s.a)(O,2),f=m[0],y=m[1],v=Object(a.useState)(!1),E=Object(s.a)(v,2),w=E[0],S=E[1],L=Object(a.useState)([]),A=Object(s.a)(L,2),N=A[0],I=A[1],R=Object(a.useState)(""),D=Object(s.a)(R,2),W=D[0],U=D[1],M=Object(a.useState)(3),F=Object(s.a)(M,2),P=F[0],z=F[1],V=Object(a.useState)(1),G=Object(s.a)(V,2),H=G[0],q=G[1],Y=Object(a.useState)(99),K=Object(s.a)(Y,2),X=K[0],J=K[1],Z=function(){var e=Object(k.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.prev=1,e.next=4,T.a.get("".concat("https://common-words.herokuapp.com","/getLanguages"));case 4:200===(t=e.sent).status&&y(t.data.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:S(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(k.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(!0),e.t0=t,e.next="english"===e.t0?4:"finnish"===e.t0?6:"french"===e.t0?8:"german"===e.t0?10:"hungarian"===e.t0?12:"italian"===e.t0?14:"polish"===e.t0?16:"romanian"===e.t0?18:"spanish"===e.t0?20:"turkish"===e.t0?22:24;break;case 4:return b("en"),e.abrupt("break",24);case 6:return b("fi"),e.abrupt("break",24);case 8:return b("fr"),e.abrupt("break",24);case 10:return b("de"),e.abrupt("break",24);case 12:return b("hu"),e.abrupt("break",24);case 14:return b("it"),e.abrupt("break",24);case 16:return b("pl"),e.abrupt("break",24);case 18:return b("ro"),e.abrupt("break",24);case 20:return b("es"),e.abrupt("break",24);case 22:return b("tr"),e.abrupt("break",24);case 24:return e.prev=24,e.next=27,T.a.get("".concat("https://common-words.herokuapp.com","/getLanguage?language=").concat(t));case 27:200===(n=e.sent).status&&c(n.data.data[0].list.map((function(e){return e+"1"}))),e.next=34;break;case 31:e.prev=31,e.t1=e.catch(24),console.log(e.t1);case 34:S(!1);case 35:case"end":return e.stop()}}),e,null,[[24,31]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(k.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(!0),e.t0=t,e.next="english"===e.t0?4:"finnish"===e.t0?6:"french"===e.t0?8:"german"===e.t0?10:"hungarian"===e.t0?12:"italian"===e.t0?14:"polish"===e.t0?16:"romanian"===e.t0?18:"spanish"===e.t0?20:"turkish"===e.t0?22:24;break;case 4:return p("en"),e.abrupt("break",24);case 6:return p("fi"),e.abrupt("break",24);case 8:return p("fr"),e.abrupt("break",24);case 10:return p("de"),e.abrupt("break",24);case 12:return p("hu"),e.abrupt("break",24);case 14:return p("it"),e.abrupt("break",24);case 16:return p("pl"),e.abrupt("break",24);case 18:return p("ro"),e.abrupt("break",24);case 20:return p("es"),e.abrupt("break",24);case 22:return p("tr"),e.abrupt("break",24);case 24:return e.prev=24,e.next=27,T.a.get("".concat("https://common-words.herokuapp.com","/getLanguage?language=").concat(t));case 27:200===(n=e.sent).status&&o(n.data.data[0].list.map((function(e){return e+"2"}))),e.next=34;break;case 31:e.prev=31,e.t1=e.catch(24),console.log(e.t1);case 34:S(!1);case 35:case"end":return e.stop()}}),e,null,[[24,31]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){Z()}),[]),Object(a.useEffect)((function(){if(0!==P){if(n.length>0&&l.length>0){var e=[].concat(Object(B.a)(n),Object(B.a)(l)).reduce((function(e,t){var n=t.substring(0,P);return e[n]=void 0===e[n]?"":e[n]+"|"+t,e}),{});console.log(e[Object.keys(e)[28]]);var t=Object.keys(e).map(String).map((function(t){if(e[t].split("|").length>=3)return e[t].split("|")})).filter((function(e){return void 0!==e}));console.log(t),I(t)}}else if(n.length>0&&l.length>0){var a=[].concat(Object(B.a)(n),Object(B.a)(l)).reduce((function(e,t){return e[t]=e[t]+1||1,e}),{});console.log(Object.keys(a)[23]);var c=Object.keys(a).filter((function(e){return a[e]>1})).map(String);I(c)}}),[n,l,P]),{selectedLanguage1:n,setSelectedLanguage1:c,selectedLanguage2:l,setSelectedLanguage2:o,loading:w,setLoading:S,blendedList:N,setBlendedList:I,languages:f,setLanguages:y,alert:W,setAlert:U,getFirstLanguage:Q,getSecondLanguage:_,languageCode1:u,setLanguageCode1:b,languageCode2:h,setLanguageCode2:p,minLength:H,setMinLength:q,maxLength:X,setMaxLength:J,prefixLetters:P,setPrefixLetters:z}},W=n(444),U=n(445),M=n(446),F=n(447),P=n(448),z=n(449),V=n(450),G=(n(331),function(){var e=Object(a.useContext)(ie),t=e.findTheCommonWordsOfLanguages,n=e.appBuiltUsingMERN,c=e.developerAndCommunity,i=(e.getInvolved,e.contribuitors);return Object(O.jsxs)("div",{id:"about-page-container",children:[Object(O.jsxs)(l.a,{id:"project-description-container",children:[Object(O.jsx)("h1",{style:{color:"white"},children:t}),Object(O.jsxs)("div",{style:{display:"flex",color:"#EEEEEE",alignItems:"center",justifyContent:"center"},children:[Object(O.jsxs)("div",{style:{color:"#EEEEEE",display:"flex",flexDirection:"column",border:"1px solid light#EEEEEE",padding:"8px",borderRadius:"4px"},children:[Object(O.jsx)("span",{style:{color:"#00ADB5"},children:"ABC"})," PVBF AUX"," ",Object(O.jsx)("span",{style:{color:"#00ADB5"},children:"DEF"})," IQYE"]}),Object(O.jsx)(f.a,{style:{fontSize:"2rem",margin:"0px 10px 0px 10px"}}),Object(O.jsxs)("div",{style:{color:"#EEEEEE",display:"flex",flexDirection:"column",border:"1px solid light#EEEEEE",padding:"8px",borderRadius:"4px"},children:["OQUE ",Object(O.jsx)("span",{style:{color:"#00ADB5"},children:"ABC"})," KIYW JSU"," ",Object(O.jsx)("span",{style:{color:"#00ADB5"},children:"DEF"})]}),Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(O.jsx)(W.a,{style:{fontSize:"2rem",color:"#EEEEEE",marginLeft:"10px"}})}),Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(O.jsxs)("div",{style:{display:"flex",flexDirection:"column",color:"#00ADB5",marginLeft:"7px",border:"1px solid light#EEEEEE",padding:"8px",borderRadius:"4px"},children:[Object(O.jsx)("span",{children:"ABC"}),Object(O.jsx)("span",{children:"DEF"})]})})]})]}),Object(O.jsxs)(l.a,{id:"mern-container",children:[Object(O.jsx)("h1",{style:{color:"white"},children:n}),Object(O.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[Object(O.jsxs)("div",{className:"technology-container",children:[Object(O.jsx)("a",{href:"https://www.mongodb.com/",style:{color:"#00ADB5"},children:"mongoDB"}),Object(O.jsx)(U.a,{style:{fontSize:"3rem",color:"#EEEEEE",marginTop:"8px"}})]}),Object(O.jsxs)("div",{className:"technology-container",children:[Object(O.jsx)("a",{href:"https://nodejs.dev/",style:{color:"#00ADB5"},children:"Node"}),Object(O.jsx)(M.a,{style:{fontSize:"3rem",color:"#EEEEEE",marginTop:"8px"}})]}),Object(O.jsxs)("div",{className:"technology-container",children:[Object(O.jsx)("a",{href:"https://expressjs.com/",style:{color:"#00ADB5"},children:"Express"}),Object(O.jsx)(F.a,{style:{fontSize:"3rem",color:"#EEEEEE",marginTop:"8px"}})]}),Object(O.jsxs)("div",{className:"technology-container",children:[Object(O.jsx)("a",{href:"https://reactjs.org/",style:{color:"#00ADB5"},children:"React"}),Object(O.jsx)(P.a,{style:{fontSize:"3rem",color:"#EEEEEE",marginTop:"8px"}})]})]})]}),Object(O.jsxs)(l.a,{id:"developer-and-community-container",children:[Object(O.jsx)("h1",{style:{color:"white"},children:c}),Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(O.jsx)(z.a,{style:{fontSize:"1.5rem",color:"#EEEEEE",marginRight:"10px"}}),Object(O.jsx)("div",{style:{color:"#00ADB5"},children:"chita.catalin.adrian@gmail.com"})]}),Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(O.jsx)(V.a,{style:{fontSize:"1.5rem",color:"#EEEEEE",marginRight:"10px"}}),Object(O.jsxs)("div",{style:{color:"#00ADB5"},children:["github.com/chita-catalin/common-words"," "]})]}),Object(O.jsx)("h2",{style:{fontWeight:100,color:"white",marginTop:"10px"},children:i}),Object(O.jsx)("a",{href:"https://github.com/chita-catalin",style:{color:"#00ADB5"},children:"chita-catalin"})]})]})}),H=n(229),q=n(438),Y=n(441),K=(n(332),n(451)),X=n(452),J=n(225),Z=n.n(J),Q=function(){var e=Object(a.useContext)(ie),t=Object(a.useState)("English"),n=Object(s.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(""),l=Object(s.a)(r,2),d=l[0],j=l[1],b=Object(a.useState)([]),x=Object(s.a)(b,2),g=x[0],h=x[1],p=Object(a.useState)(!1),m=Object(s.a)(p,2),f=m[0],y=m[1],v=Object(a.useState)(!1),E=Object(s.a)(v,2),w=E[0],S=E[1],C=Object(a.useState)(""),k=Object(s.a)(C,2),L=k[0],A=k[1],T=Object(a.useState)(!1),N=Object(s.a)(T,2),I=N[0],R=N[1],B=Object(a.useState)(!1),D=Object(s.a)(B,2),W=D[0],U=D[1],M=Object(a.useState)("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),F=Object(s.a)(M,2),P=F[0],z=F[1],V=Object(a.useState)(0),G=Object(s.a)(V,2),J=G[0],Q=G[1],_=Object(a.useState)(0),$=Object(s.a)(_,2),ee=$[0],te=$[1],ne=Object(a.useState)(0),ae=Object(s.a)(ne,2),ce=ae[0],re=ae[1];return Object(O.jsxs)("div",{id:"tools-container",style:{position:"relative"},children:[g.length>0?Object(O.jsx)("div",{style:{display:"flex",flexDirection:"column",overflowY:"scroll"},children:g.map((function(e){return Object(O.jsx)("span",{style:{margin:"2px"},children:e})}))}):Object(O.jsx)("textarea",{value:d,placeholder:e.enterYourTextHere,rows:1e3,id:"text-area",onChange:function(e){return j(e.target.value)}}),Object(O.jsx)(u.a,{id:"main-action-button",type:"primary",onClick:function(){g.length>0?(window.navigator.clipboard.writeText(g.join("\n")),H.a.open({message:e.copied,placement:"bottomRight"})):function(){var e=performance.now(),t=[];if(f)t=d.replace(/\r/g," ").split(" ");else if(w){for(var n=0;n<d.length;n++)L.includes(d[n])?t[n]=d[n]:t[n]=" ";var a=t.join("");t=a.replace(/\r/g," ").split(" ")}else{for(var c=0;c<d.length;c++)P.includes(d[c])?t[c]=d[c]:t[c]=" ";var i=t.join("");t=i.replace(/\r/g," ").split(" ")}t=t.map((function(e){return e.toLowerCase()})),Q(t.length),(t=Object.keys(t.reduce((function(e,t){return e[t]=!0,e}),{}))).sort(),h(t),te(t.length);var r=performance.now();re(r-e)}()},children:g.length>0?e.copyAll:e.extract}),Object(O.jsx)(u.a,{id:"clear-button",onClick:function(){j(""),h([])},children:e.clear}),I?Object(O.jsx)(K.a,{className:"fixed-controls-collapse",onClick:function(){return R(!1)}}):Object(O.jsx)(X.a,{className:"fixed-controls-collapse",onClick:function(){return R(!0)}}),g.length>0?Object(O.jsx)(O.Fragment,{children:W?Object(O.jsx)(K.a,{className:"fixed-statistics-collapse",onClick:function(){return U(!1)}}):Object(O.jsx)(X.a,{className:"fixed-statistics-collapse",onClick:function(){return U(!0)}})}):null,g.length>0&&Object(O.jsxs)("div",{id:"fixed-statistics-container",style:{display:W?"none":""},children:[Object(O.jsxs)("div",{style:{margin:"4px 6px 0px 6px"},children:[e.extractionTime,":"]}),Object(O.jsxs)("div",{style:{margin:"0px 6px 2px 6px",fontWeight:"bold"},children:[Object(O.jsx)(q.a,{strokeColor:{"0%":"#00ADB5","100%":"#00ADB5"},percent:100*ce/1e3,size:"small",width:20,format:function(){return""},className:"white-text"}),ce.toFixed(1)," ms"]}),Object(O.jsxs)("div",{style:{margin:"4px 6px 0px 6px"},children:[e.allWords,":"]}),Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingTop:"4px"},children:Object(O.jsx)(q.a,{strokeColor:{"0%":"#EEEEEE","100%":"#EEEEEE"},width:80,type:"circle",percent:100,format:function(){return J.toString()},className:"white-text"})}),Object(O.jsxs)("div",{style:{margin:"4px 6px 0px 6px"},children:[e.uniqueWords,":"]}),Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingTop:"4px"},children:Object(O.jsx)(q.a,{strokeColor:{"0%":"#00ADB5","100%":"#00ADB5"},width:80,type:"circle",percent:100*ee/J,format:function(){return ee.toString()+" (".concat((100*ee/J).toFixed(0),"%)")},trailColor:"rgb(100,100,100)",className:"blue-text"})})]}),Object(O.jsxs)("div",{id:"fixed-controls-container",style:{display:I?"none":""},children:[Object(O.jsxs)("div",{style:{margin:"6px",borderBottom:"2px solid lightgrey",paddingBottom:"6px"},children:[Object(O.jsx)(Y.a,{checked:f,style:{marginRight:"4px"},onClick:function(){y(!f),S(!1)}}),e.allowAll]}),Object(O.jsxs)("div",{style:{margin:"0px 6px 6px 6px",borderBottom:"2px solid lightgrey",paddingBottom:"6px"},children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(Y.a,{checked:w,style:{marginRight:"4px"},onClick:function(){S(!w),y(!1)}}),e.customCharacters]}),w&&Object(O.jsx)(Z.a,{rows:2,style:{marginTop:"4px"},onChange:function(e){A(e.target.value)}})]}),Object(O.jsxs)("div",{style:{margin:"0px 6px 0px 6px",fontWeight:"bold"},children:[e.textLanguage,":"]}),Object(O.jsxs)(o.a,{disabled:f||w,value:c,style:{borderRadius:"4px",margin:"6px 6px 10px 6px"},onChange:function(e){switch(i(e),console.log(e),e){case"Romanian":z("a\u0103\xe2bcdefghi\xeejklmnopqrs\u0219t\u021buvwxyzA\u0102\xc2BCDEFGHI\xceJKLMNOPQRS\u0218T\u021aUVWXYZ");break;case"English":z("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");break;case"German":z("abcdefghijklmnopqrstuvwxyz\xe4\xf6\xfc\xdfABCDEFGHIJKLMNOPQRSTUVWXYZ\xc4\xd6\xdc\xdf");break;case"Dutch":z("abcdefghi\u0133jklmnopqrstuvwxyzABCDEFGHI\u0132JKLMNOPQRSTUVWXYZ");break;case"Ukrainian":z("\u0410\u0430\u0411\u0431\u0412\u0432\u0413\u0433\u0490\u0491\u0414\u0434\u0415\u0435\u0404\u0454\u0416\u0436\u0417\u0437\u0418\u0438\u0406\u0456\u0407\u0457\u0419\u0439\u041a\u043a\u041b\u043b\u041c\u043c\u041d\u043d\u041e\u043e\u041f\u043f\u0420\u0440\u0421\u0441\u0422\u0442\u0423\u0443\u0424\u0444\u0425\u0445\u0426\u0446\u0427\u0447\u0428\u0448\u0429\u0449\u042c\u044c\u042e\u044e\u042f\u044f")}},children:[Object(O.jsx)(o.a.Option,{value:"Dutch",children:e.dutch}),Object(O.jsx)(o.a.Option,{value:"English",children:e.english}),Object(O.jsx)(o.a.Option,{value:"German",children:e.german}),Object(O.jsx)(o.a.Option,{value:"Romanian",children:e.romanian}),Object(O.jsx)(o.a.Option,{value:"Ukrainian",children:e.ukrainian})]}),!f&&!w&&Object(O.jsxs)("div",{id:"characters-count",children:[e.characters," (",P.length,"):"," "]}),!f&&!w&&Object(O.jsx)("div",{id:"allowed-chars-container",children:P.split("").map((function(e){return Object(O.jsx)("span",{id:"allowed-chars",children:e})}))})]})]})},_=n(146),$=n(453),ee=n(454),te=n(455),ne=n(141),ae=n(433),ce=n(437),ie=(n(419),n(420),n(421),c.a.createContext(null)),re=c.a.createContext(null),se=ae.a.Header,le=ae.a.Sider,oe=ae.a.Content;var de=function(){var e=D(),t=function(){var e=Object(a.useState)("english"),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)("Explore"),r=Object(s.a)(i,2),l=r[0],o=r[1],d=Object(a.useState)("Compare languages"),j=Object(s.a)(d,2),u=j[0],b=j[1],x=Object(a.useState)("Download list (.txt)"),g=Object(s.a)(x,2),h=g[0],p=g[1],O=Object(a.useState)("COMMON WORDS"),m=Object(s.a)(O,2),f=m[0],y=m[1],v=Object(a.useState)("resources"),E=Object(s.a)(v,2),w=E[0],S=E[1],C=Object(a.useState)("about"),k=Object(s.a)(C,2),L=k[0],A=k[1],T=Object(a.useState)("changelog"),N=Object(s.a)(T,2),I=N[0],R=N[1],B=Object(a.useState)("START EXPLORING"),D=Object(s.a)(B,2),W=D[0],U=D[1],M=Object(a.useState)("Compare your language with another! Find the common words, and more fun statistics about languages, completely free!"),F=Object(s.a)(M,2),P=F[0],z=F[1],V=Object(a.useState)("Copied!"),G=Object(s.a)(V,2),H=G[0],q=G[1],Y=Object(a.useState)("Extract unique words"),K=Object(s.a)(Y,2),X=K[0],J=K[1],Z=Object(a.useState)("Copy all"),Q=Object(s.a)(Z,2),_=Q[0],$=Q[1],ee=Object(a.useState)("Extract"),te=Object(s.a)(ee,2),ne=te[0],ae=te[1],ce=Object(a.useState)("Text language"),ie=Object(s.a)(ce,2),re=ie[0],se=ie[1],le=Object(a.useState)("Custom characters"),oe=Object(s.a)(le,2),de=oe[0],je=oe[1],ue=Object(a.useState)("Allow all"),be=Object(s.a)(ue,2),xe=be[0],ge=be[1],he=Object(a.useState)("Enter your text here..."),pe=Object(s.a)(he,2),Oe=pe[0],me=pe[1],fe=Object(a.useState)("Extraction time"),ye=Object(s.a)(fe,2),ve=ye[0],Ee=ye[1],we=Object(a.useState)("All words"),Se=Object(s.a)(we,2),Ce=Se[0],ke=Se[1],Le=Object(a.useState)("Characters"),Ae=Object(s.a)(Le,2),Te=Ae[0],Ne=Ae[1],Ie=Object(a.useState)("tools"),Re=Object(s.a)(Ie,2),Be=Re[0],De=Re[1],We=Object(a.useState)("Clear"),Ue=Object(s.a)(We,2),Me=Ue[0],Fe=Ue[1],Pe=Object(a.useState)("Initial words"),ze=Object(s.a)(Pe,2),Ve=ze[0],Ge=ze[1],He=Object(a.useState)("Unique words"),qe=Object(s.a)(He,2),Ye=qe[0],Ke=qe[1],Xe=Object(a.useState)("Select two languages!"),Je=Object(s.a)(Xe,2),Ze=Je[0],Qe=Je[1],_e=Object(a.useState)("Words per page"),$e=Object(s.a)(_e,2),et=$e[0],tt=$e[1],nt=Object(a.useState)("Words"),at=Object(s.a)(nt,2),ct=at[0],it=at[1],rt=Object(a.useState)("Min. word length"),st=Object(s.a)(rt,2),lt=st[0],ot=st[1],dt=Object(a.useState)("Max. word length"),jt=Object(s.a)(dt,2),ut=jt[0],bt=jt[1],xt=Object(a.useState)("Word match (different letters)"),gt=Object(s.a)(xt,2),ht=gt[0],pt=gt[1],Ot=Object(a.useState)("FIND THE COMMON WORDS OF LANGUAGES"),mt=Object(s.a)(Ot,2),ft=mt[0],yt=mt[1],vt=Object(a.useState)("DEVELOPER & COMMUNITY"),Et=Object(s.a)(vt,2),wt=Et[0],St=Et[1],Ct=Object(a.useState)("GET INVOLVED!"),kt=Object(s.a)(Ct,2),Lt=kt[0],At=kt[1],Tt=Object(a.useState)("CONTRIBUTORS:"),Nt=Object(s.a)(Tt,2),It=Nt[0],Rt=Nt[1],Bt=Object(a.useState)("THIS WEB APP WAS BUILT USING THE MERN STACK"),Dt=Object(s.a)(Bt,2),Wt=Dt[0],Ut=Dt[1],Mt=Object(a.useState)("Language word lists (all words)"),Ft=Object(s.a)(Mt,2),Pt=Ft[0],zt=Ft[1],Vt=Object(a.useState)("English"),Gt=Object(s.a)(Vt,2),Ht=Gt[0],qt=Gt[1],Yt=Object(a.useState)("Mandarin Chinese"),Kt=Object(s.a)(Yt,2),Xt=(Kt[0],Kt[1],Object(a.useState)("Hindi")),Jt=Object(s.a)(Xt,2),Zt=(Jt[0],Jt[1],Object(a.useState)("Spanish")),Qt=Object(s.a)(Zt,2),_t=Qt[0],$t=Qt[1],en=Object(a.useState)("French"),tn=Object(s.a)(en,2),nn=tn[0],an=tn[1],cn=Object(a.useState)("Standard Arabic"),rn=Object(s.a)(cn,2),sn=(rn[0],rn[1],Object(a.useState)("Bengali")),ln=Object(s.a)(sn,2),on=(ln[0],ln[1],Object(a.useState)("Dutch")),dn=Object(s.a)(on,2),jn=dn[0],un=dn[1],bn=Object(a.useState)("Ukrainian"),xn=Object(s.a)(bn,2),gn=xn[0],hn=xn[1],pn=Object(a.useState)("Finnish"),On=Object(s.a)(pn,2),mn=On[0],fn=On[1],yn=Object(a.useState)("German"),vn=Object(s.a)(yn,2),En=vn[0],wn=vn[1],Sn=Object(a.useState)("Hungarian"),Cn=Object(s.a)(Sn,2),kn=Cn[0],Ln=Cn[1],An=Object(a.useState)("Italian"),Tn=Object(s.a)(An,2),Nn=Tn[0],In=Tn[1],Rn=Object(a.useState)("Polish"),Bn=Object(s.a)(Rn,2),Dn=Bn[0],Wn=Bn[1],Un=Object(a.useState)("Romanian"),Mn=Object(s.a)(Un,2),Fn=Mn[0],Pn=Mn[1],zn=Object(a.useState)("Turkish"),Vn=Object(s.a)(zn,2),Gn=Vn[0],Hn=Vn[1],qn=Object(a.useState)("Project created"),Yn=Object(s.a)(qn,2),Kn=Yn[0],Xn=Yn[1],Jn=Object(a.useState)("Added basic language blending"),Zn=Object(s.a)(Jn,2),Qn=Zn[0],_n=Zn[1],$n=Object(a.useState)("Added Italian,French,Finnish languages\nEnhanced results page.\nadded ".concat("changelog"," section.\nadded country flags.\nadded dark/light theme switch")),ea=Object(s.a)($n,2),ta=ea[0],na=ea[1],aa=Object(a.useState)("Removed language lists from frontend side\nAdded about section\nRemoved light/dark theme switch\nEnhanced landing page UI\nUpdated versioning system to match web standards"),ca=Object(s.a)(aa,2),ia=ca[0],ra=ca[1],sa=Object(a.useState)('Connected to Backend App\nNow retreiving languages list from database\nAdded not-yet-functional table to "blend-page"\nadded Romanian word list to "Resources" page'),la=Object(s.a)(sa,2),oa=la[0],da=la[1],ja=Object(a.useState)("Added language switch RO/EN\nAdded more languages\nAdded language comparing functionality\nAdded tools section, with unique word extraction tool\nAdded languages list from database to resources page\nImproved general UI"),ua=Object(s.a)(ja,2),ba=ua[0],xa=ua[1];return Object(a.useEffect)((function(){switch(n){case"english":y("COMMON WORDS"),o("Explore"),b("Compare languages"),p("Download list (.txt)"),S("resources"),A("about"),R("changelog"),U("START EXPLORING"),z("Compare your language with another! Find the common words, and more fun statistics about languages, completely free!"),q("Copied!"),$("Copy all"),J("Extract unique words"),ae("Extract"),se("Text language"),je("Custom characters"),ge("Allow all"),me("Enter your text here..."),Ee("Extraction time"),ke("All words"),Ne("Characters"),De("Tools"),Fe("Clear"),Ge("Initial words"),Ke("Unique words"),Qe("Select two languages!"),tt("Words per page"),it("Words"),ot("Min. word length"),bt("Max. word length"),pt("Word Match (different letters)"),yt("FIND THE COMMON WORDS OF LANGUAGES"),St("DEVELOPER & COMMUNITY"),At("GET INVOLVED!"),Rt("CONTRIBUITORS:"),Ut("THIS WEB APP WAS BUILT USING THE MERN STACK"),zt("Language word lists (all words)"),hn("Ukrainian"),un("Dutch"),qt("English"),fn("Finnish"),an("French"),wn("German"),Ln("Hungarian"),In("Italian"),Wn("Polish"),Pn("Romanian"),$t("Spanish"),Hn("Turkish"),Xn("Project created"),_n("Added basic language blending"),na("Added Italian,French,Finnish languages\nEnhanced results page.\nadded ".concat("changelog"," section.\nadded country flags.\nadded dark/light theme switch")),ra("Removed language lists from frontend side\nAdded about section\nRemoved light/dark theme switch\nEnhanced landing page UI\nUpdated versioning system to match web standards"),da('Connected to Backend App\nNow retreiving languages list from database\nAdded not-yet-functional table to "blend-page"\nadded Romanian word list to "Resources" page'),xa("Added language switch RO/EN\nAdded more languages\nAdded language comparing functionality\nAdded tools section, with unique word extraction tool\nAdded languages list from database to resources page\nImproved general UI");break;case"romanian":y("CUVINTE COMUNE"),o("Exploreaz\u0103"),b("Compar\u0103"),p("Descarc\u0103 lista (.txt)"),S("Resurse"),A("Despre"),R("Istoric schimbari"),U("EXPLOREAZ\u0102"),z("Compar\u0103 limba ta cu alt\u0103 limb\u0103! G\u0103se\u0219te cuvintele comune, \u0219i alte statistici interesante despre limbi, complet gratuit!"),q("Copiat!"),$("Copiaz\u0103 tot"),J("Extrage cuvinte unice"),ae("Extrage"),se("Limba textului"),je("Permite doar caracterele urm\u0103toare"),ge("Permite tot"),me("Introdu textul aici..."),Ee("Durat\u0103 extragere"),ke("Cuvinte totale"),Ne("Caractere"),De("Unelte"),Fe("\u0218terge"),Ge("Cuvinte ini\u021biale"),Ke("Cuvinte unice"),Qe("Selecteaz\u0103 dou\u0103 limbi diferite!"),tt("Cuvinte pe pagin\u0103"),it("Cuvinte"),ot("Lungime minim\u0103"),bt("Lungime maxim\u0103"),pt("Potrivire cuvinte (litere diferite)"),yt("G\u0102SE\u0218TE CUVINTELE COMUNE ALE LIMBILOR"),St("DEZVOLTATOR & COMUNITATE"),At("IMPLIC\u0102-TE!"),Rt("CONTRIBUITORI:"),Ut("ACEAST\u0102 APLICA\u021aIE WEB A FOST DEZVOLTAT\u0102 FOLOSIND STACK-UL MERN"),zt("Listele de cuvinte ale limbilor (toate cuvintele)"),hn("Ucrainean\u0103"),un("Neerlandez\u0103"),qt("Englez\u0103"),fn("Finlandez\u0103"),an("Francez\u0103"),wn("German\u0103"),Ln("Maghiar\u0103"),In("Italian\u0103"),Wn("Polonez\u0103"),Pn("Rom\xe2n\u0103"),$t("Spaniol\u0103"),Hn("Turc\u0103"),Xn("\xcenceput proiect"),_n("Ad\u0103ugat algoritm de combinare a limbilor"),na('Ad\u0103ugat Italian\u0103, Francez\u0103, Finlandez\u0103\n\xcembun\u0103t\u0103\u021bit pagina de rezultate\nAd\u0103ugat sec\u021biune de "istoric schimb\u0103ri"\nAd\u0103ugat steaguri pentru \u021b\u0103ri\nAd\u0103ugat buton pentru tem\u0103 light/dark'),ra('\xcenl\u0103turat listele de cuvinte din Frontend\nAd\u0103ugat sec\u021biunea "despre"\n\xcenl\u0103turat butonul pentru tem\u0103 light/dark\n\xcembun\u0103t\u0103\u021bit UI-ul paginii de pornire\nUpdatat sistemul de versionare cu standardul web'),da("Conectat aplica\u021bia web la Backend\nListele de limbi acum sunt preluate dintr-o baz\u0103 de date\nAd\u0103ugat tabel de cuvinte, \xeenc\u0103 nefunc\u021bional\nAd\u0103ugat lista cuvintelor din limba rom\xe2n\u0103 la pagina de resurse "),xa("Ad\u0103ugat func\u021bia de schimbare de limb\u0103\nAd\u0103ugat mai multe limbi\nAd\u0103ugat func\u021bia de comparare a limbilor\nAd\u0103ugat sec\u021biunea de unelte\nAd\u0103ugat unealta de extragere a cuvintelor unice\nAd\u0103ugat liste de limbi la pagina de resurse\n\xcembun\u0103t\u0103\u021bit UI general")}}),[n]),{language:n,explore:l,compareLanguages:u,viewList:h,setLanguage:c,commonWords:f,resources:w,about:L,changelog:I,startExploring:W,landingPageText:P,copied:H,copyAll:_,allWords:Ce,extractionTime:ve,extract:ne,textLanguage:re,customCharacters:de,allowAll:xe,enterYourTextHere:Oe,extractUniqueWords:X,characters:Te,clear:Me,initialWords:Ve,uniqueWords:Ye,tools:Be,selectTwoLanguages:Ze,wordsPerPage:et,words:ct,minWordLength:lt,maxWordLength:ut,findTheCommonWordsOfLanguages:ft,developerAndCommunity:wt,getInvolved:Lt,contribuitors:It,appBuiltUsingMERN:Wt,wordMatch:ht,languageWordList:Pt,ukrainian:gn,dutch:jn,english:Ht,finnish:mn,french:nn,german:En,hungarian:kn,italian:Nn,polish:Dn,romanian:Fn,spanish:_t,turkish:Gn,update1:Kn,update2:Qn,update3:ta,update4:ia,update5:oa,update6:ba}}(),n=Object(a.useState)(!1),c=Object(s.a)(n,2),i=c[0],r=c[1];return Object(O.jsx)(ie.Provider,{value:t,children:Object(O.jsx)(re.Provider,{value:e,children:Object(O.jsx)(E.a,{children:Object(O.jsxs)(ae.a,{children:[Object(O.jsx)(le,{trigger:null,collapsible:!0,collapsed:i,className:"sider",collapsedWidth:0,children:Object(O.jsxs)(ce.a,{style:{paddingTop:"60px",minHeight:"100vh",height:"100%",backgroundColor:"#393E46"},theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(O.jsx)(ce.a.Item,{children:Object(O.jsxs)(E.b,{to:"/language-blend",children:[Object(O.jsx)(f.a,{})," ",Object(O.jsx)("span",{children:t.compareLanguages})]})},"1"),Object(O.jsx)(ce.a.Item,{children:Object(O.jsxs)(E.b,{to:"/resources",children:[Object(O.jsx)(U.a,{})," ",Object(O.jsx)("span",{children:t.resources})]})},"2"),Object(O.jsx)(ce.a.Item,{children:Object(O.jsxs)(E.b,{to:"/tools",children:[Object(O.jsx)(F.a,{})," ",Object(O.jsx)("span",{children:t.extractUniqueWords})]})},"3"),Object(O.jsx)(ce.a.Item,{children:Object(O.jsxs)(E.b,{to:"/about",children:[Object(O.jsx)(_.a,{})," ",Object(O.jsx)("span",{children:t.about})]})},"4"),Object(O.jsx)(ce.a.Item,{children:Object(O.jsxs)(E.b,{to:"/changelog",children:[Object(O.jsx)($.a,{})," ",Object(O.jsx)("span",{children:t.changelog})]})},"5")]})}),Object(O.jsxs)(ae.a,{className:"site-layout",style:{minWidth:320},children:[Object(O.jsxs)(se,{className:"site-layout-background",style:{color:"white",backgroundColor:"#393E46",padding:0,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(O.jsx)("div",{className:"trigger-container",children:i?Object(O.jsx)(ee.a,{className:"trigger",onClick:function(){return r(!i)}}):Object(O.jsx)(te.a,{className:"trigger",onClick:function(){return r(!i)}})}),Object(O.jsxs)("div",{id:"title",children:[Object(O.jsx)(E.b,{to:"/",style:{textDecoration:"none",color:"white"},children:t.commonWords}),Object(O.jsx)("span",{style:{fontSize:"15px",marginLeft:"2px",color:"white"},className:"version",children:"V1.0.0"})]}),Object(O.jsxs)(o.a,{suffixIcon:Object(O.jsx)(ne.a,{style:{color:"white"}}),style:{marginRight:"24px",color:"white"},defaultValue:"english",bordered:!1,value:"romanian"===t.language?"Rom\xe2n\u0103":"English",onChange:function(e){return t.setLanguage(e)},children:[Object(O.jsx)(o.a.Option,{value:"english",children:t.english}),Object(O.jsx)(o.a.Option,{value:"romanian",children:t.romanian})]})]}),Object(O.jsx)(oe,{style:{padding:"12px",color:"white",minHeight:280,minWidth:320,backgroundColor:"#222831"},children:Object(O.jsxs)(w.c,{children:[Object(O.jsx)(w.a,{path:"/language-blend",element:Object(O.jsx)(v,{})}),Object(O.jsx)(w.a,{path:"/resources",element:Object(O.jsx)(N,{})}),Object(O.jsx)(w.a,{path:"/changelog",element:Object(O.jsx)(I,{})}),Object(O.jsx)(w.a,{path:"/about",element:Object(O.jsx)(G,{})}),Object(O.jsx)(w.a,{path:"*",element:Object(O.jsx)(R,{})}),Object(O.jsx)(w.a,{path:"/tools",element:Object(O.jsx)(Q,{})}),Object(O.jsx)(w.a,{path:"/",element:Object(O.jsx)(v,{})})]})})]})]})})})})};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(de,{})}),document.getElementById("root"))}},[[428,1,2]]]);
//# sourceMappingURL=main.db10f75d.chunk.js.map