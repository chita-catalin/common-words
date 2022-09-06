(this["webpackJsonpcommon-words-frontend"]=this["webpackJsonpcommon-words-frontend"]||[]).push([[0],{174:function(e,t,a){},234:function(e,t,a){},323:function(e,t,a){},329:function(e,t,a){},330:function(e,t,a){},331:function(e,t,a){},419:function(e,t,a){},427:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(35),s=a.n(i),r=(a(234),a(4)),l=a(433),o=a(117),d=a(435),j=a(430),u=a(113),b=a(434),x=a(438),g=a(439),h=(a(174),a(82)),O=a(2),p=function(){var e=Object(n.useContext)(ie),t=Object(n.useContext)(ce),a=(t.wordsPerPage,t.words,t.minWordLength,t.maxWordLength,t.wordMatch,Object(n.useState)(0)),c=Object(r.a)(a,2),i=c[0],s=c[1],l=Object(n.useState)(200),o=Object(r.a)(l,2),d=o[0],j=o[1],u=Object(n.useState)(!1),p=Object(r.a)(u,2),m=p[0],f=p[1],y=Object(n.useState)([]),v=Object(r.a)(y,2),E=v[0],S=v[1];return Object(O.jsxs)(O.Fragment,{children:[e.blendedList.length>0?Object(O.jsxs)("div",{id:"pagination-container",children:[Object(O.jsx)(b.a,{current:i,pageSize:d,defaultCurrent:1,total:e.blendedList.length,pageSizeOptions:[50,100,200,500,1e3,2e3,5e3,1e4],style:{flexGrow:1},onChange:function(e,t){j(t),s(e)}}),Object(O.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",marginTop:"12px"},children:[e.prefixLetters>0&&"object"===typeof e.blendedList[0]&&e.blendedList.map((function(t,a){return null===t||void 0===t?void 0:t.map((function(n,c){if(a*c>=d*i&&a*c<=d*(i+1)-1&&n.length<=e.maxLength&&n.length>=e.minLength&&-1!==t.join().indexOf("1")&&-1!==t.join().indexOf("2"))return Object(O.jsx)("div",{className:"word-tag",style:{backgroundColor:n.length<=5?"#58606e":n.length<=10?"#707a8c":n.length<=15?"#8b97ad":"#a3b2cc"},onClick:function(){S(t),f(!0)},children:n.substring(0,n.length-1)})}))})),Object(O.jsxs)(x.a,{title:"Common words",visible:m,onCancel:function(){return f(!1)},footer:null,style:{backgroundColor:"#EEEEEE"},bodyStyle:{backgroundColor:"#EEEEEE"},maskStyle:{backgroundColor:"#00ADB5"},children:[Object(O.jsxs)("h3",{children:[Object(O.jsx)(g.a,{color:"#096dd9",style:{marginRight:"0px"}})," (",e.languageCode1,") |",Object(O.jsx)(g.a,{color:"#cf1322",style:{marginLeft:"10px"}}),"(",e.languageCode2,")"]}),E.map((function(t){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{style:{color:-1!==t.indexOf("1")?"#096dd9":"#cf1322"},children:t.substr(0,t.length-1).split("").map((function(t,a){return Object(O.jsx)("span",{style:{fontWeight:a<e.prefixLetters&&0!==e.prefixLetters?600:100,textDecoration:a<e.prefixLetters&&0!==e.prefixLetters?"underline":"normal"},children:t})}))})," ","|"," "]})}))]})]})]}):null,e.loading&&Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"48px"},children:Object(O.jsx)(h.a,{style:{fontSize:44,color:"#EEEEEE"},spin:!0})})]})},m=a(141),f=a(441),y=c.a.createContext(null),v=function(){var e=c.a.useContext(ie),t=c.a.useContext(ce);return Object(O.jsxs)(y.Provider,{value:e,children:[Object(O.jsxs)("div",{id:"header-container",children:[Object(O.jsxs)(l.a,{id:"inputs-card",children:[Object(O.jsx)(o.a,{suffixIcon:Object(O.jsx)(m.a,{style:{color:"black",fontWeight:"bold",fontSize:"14px"}}),onChange:function(t){e.getFirstLanguage(t)},placeholder:"select a language",style:{width:"160px"},defaultValue:"",children:e.languages.map((function(e){return Object(O.jsx)(o.a.Option,{value:e.name,children:e.name},e._id)}))}),Object(O.jsx)(f.a,{style:{marginLeft:"10px",marginRight:"10px",color:"white"}}),Object(O.jsx)(o.a,{suffixIcon:Object(O.jsx)(m.a,{style:{color:"black",fontWeight:"bold",fontSize:"14px"}}),placeholder:"select another language",onChange:function(t){e.getSecondLanguage(t)},defaultValue:"",style:{width:"160px"},children:e.languages.sort((function(e,t){return e.name>t.name?1:-1})).map((function(e){return Object(O.jsx)(o.a.Option,{value:e.name,children:e.name},e._id)}))})]}),e.blendedList.length>0&&Object(O.jsxs)(l.a,{id:"controls-card",children:[Object(O.jsxs)("div",{id:"controls-content",children:[Object(O.jsxs)("div",{style:{margin:"5px"},children:[t.minWordLength," ",Object(O.jsx)(d.a,{size:"small",min:1,max:99,value:e.minLength,onChange:function(t){e.setMinLength(t)},style:{marginLeft:"2px",width:"55px"}})]}),Object(O.jsx)(j.a,{type:"vertical"}),Object(O.jsxs)("div",{style:{margin:"5px"},children:[t.maxWordLength," ",Object(O.jsx)(d.a,{size:"small",min:1,max:99,value:e.maxLength,onChange:function(t){e.setMaxLength(t)},style:{marginLeft:"2px",width:"55px"}})]}),Object(O.jsx)(j.a,{type:"vertical"}),Object(O.jsxs)("div",{style:{margin:"5px"},children:[t.samePrefixLength," ",Object(O.jsx)(d.a,{size:"small",min:3,max:99,value:e.prefixLetters,onChange:function(t){e.setPrefixLetters(t)},style:{marginLeft:"2px",width:"55px"}})]}),Object(O.jsx)(j.a,{type:"vertical"})]}),Object(O.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(O.jsx)(u.a,{style:{marginTop:"12px"},onClick:function(){e.setMinLength(1),e.setMaxLength(99)},children:t.resetAllFilters})})]})]}),Object(O.jsx)(p,{})]})},E=a(79),S=a(17),w=a(65),C=a.n(w),k=a(101),L=a(431),A=a(102),T=a.n(A),I=(a(323),function(){var e=Object(n.useContext)(ce),t=e.english,a=e.finnish,c=e.french,i=e.german,s=e.hungarian,l=e.italian,o=e.polish,d=e.romanian,u=e.spanish,b=e.turkish,x=e.viewList,g=Object(n.useState)(!1),p=Object(r.a)(g,2),m=p[0],f=p[1],y=function(){var e=Object(k.a)(C.a.mark((function e(t){var a,n,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.prev=1,e.next=4,T.a.get("".concat("https://common-words.herokuapp.com","/getLanguage?language=").concat(t));case 4:200===(a=e.sent).status&&(n=document.createElement("a"),c=new Blob([a.data.data[0].list.join("\n")],{type:"text/plain"}),n.href=URL.createObjectURL(c),n.download="list.txt",document.body.appendChild(n),n.click()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:f(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{style:{display:"flex",flexDirection:"column",maxWidth:"300px"},children:m?Object(O.jsx)(L.a,{indicator:Object(O.jsx)(h.a,{style:{fontSize:48,color:"white",marginTop:"100px"},spin:!0})}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsxs)("div",{children:["(en) ",t]}),Object(O.jsx)("div",{className:"download-link",onClick:function(){return y("english")},children:x})]}),Object(O.jsx)(j.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsxs)("div",{children:["(fi) ",a]}),Object(O.jsx)("div",{className:"download-link",onClick:function(){return y("finnish")},children:x})]}),Object(O.jsx)(j.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsxs)("div",{children:["(fr) ",c]}),Object(O.jsx)("div",{className:"download-link",onClick:function(){return y("french")},children:x})]}),Object(O.jsx)(j.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsxs)("div",{children:["(de) ",i]}),Object(O.jsx)("div",{className:"download-link",onClick:function(){return y("german")},children:x})]}),Object(O.jsx)(j.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsxs)("div",{children:["(hu) ",s]}),Object(O.jsx)("div",{className:"download-link",onClick:function(){return y("hungarian")},children:x})]}),Object(O.jsx)(j.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsxs)("div",{children:["(it) ",l]}),Object(O.jsx)("div",{className:"download-link",onClick:function(){return y("italian")},children:x})]}),Object(O.jsx)(j.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsxs)("div",{children:["(pl) ",o]}),Object(O.jsx)("div",{className:"download-link",onClick:function(){return y("polish")},children:x})]}),Object(O.jsx)(j.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsxs)("div",{children:["(ro) ",d]}),Object(O.jsx)("div",{className:"download-link",onClick:function(){return y("romanian")},children:x})]}),Object(O.jsx)(j.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsxs)("div",{children:["(es) ",u]}),Object(O.jsx)("div",{className:"download-link",onClick:function(){return y("spanish")},children:x})]}),Object(O.jsx)(j.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsxs)("div",{children:["(tr) ",b]}),Object(O.jsx)("div",{className:"download-link",onClick:function(){return y("turkish")},children:x})]})]})})}),N=(a(329),function(){var e=Object(n.useContext)(ce),t=e.update1,a=e.update2,c=e.update3,i=e.update4,s=e.update5,r=e.update6;return Object(O.jsx)("div",{style:{whiteSpace:"pre-wrap"},children:Object(O.jsx)("div",{id:"changelog-container",children:Object(O.jsxs)("div",{id:"changelog-sub-container",children:[Object(O.jsx)(l.a,{headStyle:{color:"white"},title:"V1.0.0 / -",style:{margin:"12px",backgroundColor:"#393E46",color:"white"}}),Object(O.jsx)(l.a,{headStyle:{color:"white"},title:"V0.5.0 / 17.5.2022",style:{margin:"12px",backgroundColor:"#393E46",color:"white"},children:r.split(".").join("\n")}),Object(O.jsx)(l.a,{headStyle:{color:"white"},title:"V0.0.5 / 26.4.2022",style:{margin:"12px",backgroundColor:"#393E46",color:"white"},children:s.split(".").join("\n")}),Object(O.jsx)(l.a,{headStyle:{color:"white"},title:"V0.0.4 / 16.4.2022",style:{margin:"12px",backgroundColor:"#393E46",color:"white"},children:Object(O.jsx)("div",{children:i.split(".").join("\n")})}),Object(O.jsx)(l.a,{headStyle:{color:"white"},title:"V0.3 / 29.12.2021",style:{margin:"12px",backgroundColor:"#393E46",color:"white"},children:c.split(".").join("\n")}),Object(O.jsx)(l.a,{headStyle:{color:"white"},title:"V0.2 / 10.12.2021",style:{margin:"12px",backgroundColor:"#393E46",color:"white"},children:a.split(".").join("\n")}),Object(O.jsx)(l.a,{headStyle:{color:"white"},title:"V0.1 / 1.12.2021",style:{margin:"12px",backgroundColor:"#393E46",color:"white"},children:t.split(".").join("\n")})]})})})}),R=function(){return Object(O.jsx)("div",{style:{display:"flex",flexDirection:"column",color:"#fff"},children:Object(O.jsxs)("div",{style:{display:"flex",flexGrow:1,flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(O.jsx)("span",{style:{fontSize:"6rem",marginTop:"100px"},children:"404"}),Object(O.jsx)("p",{style:{marginTop:"-15px",marginBottom:"30px"},children:"Nothing to see here"})]})})},B=a(16),D=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),s=Object(r.a)(i,2),l=s[0],o=s[1],d=Object(n.useState)(""),j=Object(r.a)(d,2),u=j[0],b=j[1],x=Object(n.useState)(""),g=Object(r.a)(x,2),h=g[0],O=g[1],p=Object(n.useState)([]),m=Object(r.a)(p,2),f=m[0],y=m[1],v=Object(n.useState)(!1),E=Object(r.a)(v,2),S=E[0],w=E[1],L=Object(n.useState)([]),A=Object(r.a)(L,2),I=A[0],N=A[1],R=Object(n.useState)(""),D=Object(r.a)(R,2),W=D[0],U=D[1],M=Object(n.useState)(3),F=Object(r.a)(M,2),z=F[0],P=F[1],V=Object(n.useState)(3),G=Object(r.a)(V,2),H=G[0],q=G[1],Y=Object(n.useState)(10),K=Object(r.a)(Y,2),J=K[0],Q=K[1],Z=function(){var e=Object(k.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,T.a.get("".concat("https://common-words.herokuapp.com","/getLanguages"));case 4:200===(t=e.sent).status&&y(t.data.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:w(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(k.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(!0),e.t0=t,e.next="english"===e.t0?4:"finnish"===e.t0?6:"french"===e.t0?8:"german"===e.t0?10:"hungarian"===e.t0?12:"italian"===e.t0?14:"polish"===e.t0?16:"romanian"===e.t0?18:"spanish"===e.t0?20:"turkish"===e.t0?22:24;break;case 4:return b("en"),e.abrupt("break",24);case 6:return b("fi"),e.abrupt("break",24);case 8:return b("fr"),e.abrupt("break",24);case 10:return b("de"),e.abrupt("break",24);case 12:return b("hu"),e.abrupt("break",24);case 14:return b("it"),e.abrupt("break",24);case 16:return b("pl"),e.abrupt("break",24);case 18:return b("ro"),e.abrupt("break",24);case 20:return b("es"),e.abrupt("break",24);case 22:return b("tr"),e.abrupt("break",24);case 24:return e.prev=24,e.next=27,T.a.get("".concat("https://common-words.herokuapp.com","/getLanguage?language=").concat(t));case 27:200===(a=e.sent).status&&c(a.data.data[0].list.map((function(e){return e+"1"}))),e.next=34;break;case 31:e.prev=31,e.t1=e.catch(24),console.log(e.t1);case 34:w(!1);case 35:case"end":return e.stop()}}),e,null,[[24,31]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(k.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(!0),e.t0=t,e.next="english"===e.t0?4:"finnish"===e.t0?6:"french"===e.t0?8:"german"===e.t0?10:"hungarian"===e.t0?12:"italian"===e.t0?14:"polish"===e.t0?16:"romanian"===e.t0?18:"spanish"===e.t0?20:"turkish"===e.t0?22:24;break;case 4:return O("en"),e.abrupt("break",24);case 6:return O("fi"),e.abrupt("break",24);case 8:return O("fr"),e.abrupt("break",24);case 10:return O("de"),e.abrupt("break",24);case 12:return O("hu"),e.abrupt("break",24);case 14:return O("it"),e.abrupt("break",24);case 16:return O("pl"),e.abrupt("break",24);case 18:return O("ro"),e.abrupt("break",24);case 20:return O("es"),e.abrupt("break",24);case 22:return O("tr"),e.abrupt("break",24);case 24:return e.prev=24,e.next=27,T.a.get("".concat("https://common-words.herokuapp.com","/getLanguage?language=").concat(t));case 27:200===(a=e.sent).status&&o(a.data.data[0].list.map((function(e){return e+"2"}))),e.next=34;break;case 31:e.prev=31,e.t1=e.catch(24),console.log(e.t1);case 34:w(!1);case 35:case"end":return e.stop()}}),e,null,[[24,31]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){Z()}),[]),Object(n.useEffect)((function(){if(0!==z){if(a.length>0&&l.length>0){var e=[].concat(Object(B.a)(a),Object(B.a)(l)).reduce((function(e,t){var a=t.substring(0,z);return e[a]=void 0===e[a]?"":e[a]+"|"+t,e}),{}),t=Object.keys(e).map(String).map((function(t){if(e[t].split("|").length>=3)return e[t].split("|")})).filter((function(e){return void 0!==e}));console.log(t),N(t)}}else if(a.length>0&&l.length>0){var n=[].concat(Object(B.a)(a),Object(B.a)(l)).reduce((function(e,t){return e[t]=e[t]+1||1,e}),{}),c=Object.keys(n).filter((function(e){return n[e]>1})).map(String);N(c)}}),[a,l,z]),{selectedLanguage1:a,setSelectedLanguage1:c,selectedLanguage2:l,setSelectedLanguage2:o,loading:S,setLoading:w,blendedList:I,setBlendedList:N,languages:f,setLanguages:y,alert:W,setAlert:U,getFirstLanguage:X,getSecondLanguage:_,languageCode1:u,setLanguageCode1:b,languageCode2:h,setLanguageCode2:O,minLength:H,setMinLength:q,maxLength:J,setMaxLength:Q,prefixLetters:z,setPrefixLetters:P}},W=a(442),U=a(443),M=a(444),F=a(445),z=a(446),P=a(447),V=a(448),G=(a(330),function(){var e=Object(n.useContext)(ce),t=e.findTheCommonWordsOfLanguages,a=e.appBuiltUsingMERN,c=e.developerAndCommunity,i=(e.getInvolved,e.contribuitors);return Object(O.jsxs)("div",{id:"about-page-container",children:[Object(O.jsxs)(l.a,{id:"project-description-container",children:[Object(O.jsx)("h1",{style:{color:"white"},children:t}),Object(O.jsxs)("div",{style:{display:"flex",color:"#EEEEEE",alignItems:"center",justifyContent:"center"},children:[Object(O.jsxs)("div",{style:{color:"#EEEEEE",display:"flex",flexDirection:"column",border:"1px solid light#EEEEEE",padding:"8px",borderRadius:"4px"},children:[Object(O.jsx)("span",{style:{color:"#00ADB5"},children:"ABC"})," PVBF AUX"," ",Object(O.jsx)("span",{style:{color:"#00ADB5"},children:"DEF"})," IQYE"]}),Object(O.jsx)(f.a,{style:{fontSize:"2rem",margin:"0px 10px 0px 10px"}}),Object(O.jsxs)("div",{style:{color:"#EEEEEE",display:"flex",flexDirection:"column",border:"1px solid light#EEEEEE",padding:"8px",borderRadius:"4px"},children:["OQUE ",Object(O.jsx)("span",{style:{color:"#00ADB5"},children:"ABC"})," KIYW JSU"," ",Object(O.jsx)("span",{style:{color:"#00ADB5"},children:"DEF"})]}),Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(O.jsx)(W.a,{style:{fontSize:"2rem",color:"#EEEEEE",marginLeft:"10px"}})}),Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(O.jsxs)("div",{style:{display:"flex",flexDirection:"column",color:"#00ADB5",marginLeft:"7px",border:"1px solid light#EEEEEE",padding:"8px",borderRadius:"4px"},children:[Object(O.jsx)("span",{children:"ABC"}),Object(O.jsx)("span",{children:"DEF"})]})})]})]}),Object(O.jsxs)(l.a,{id:"mern-container",children:[Object(O.jsx)("h1",{style:{color:"white"},children:a}),Object(O.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[Object(O.jsxs)("div",{className:"technology-container",children:[Object(O.jsx)("a",{href:"https://www.mongodb.com/",style:{color:"#00ADB5"},children:"mongoDB"}),Object(O.jsx)(U.a,{style:{fontSize:"3rem",color:"#EEEEEE",marginTop:"8px"}})]}),Object(O.jsxs)("div",{className:"technology-container",children:[Object(O.jsx)("a",{href:"https://nodejs.dev/",style:{color:"#00ADB5"},children:"Node"}),Object(O.jsx)(M.a,{style:{fontSize:"3rem",color:"#EEEEEE",marginTop:"8px"}})]}),Object(O.jsxs)("div",{className:"technology-container",children:[Object(O.jsx)("a",{href:"https://expressjs.com/",style:{color:"#00ADB5"},children:"Express"}),Object(O.jsx)(F.a,{style:{fontSize:"3rem",color:"#EEEEEE",marginTop:"8px"}})]}),Object(O.jsxs)("div",{className:"technology-container",children:[Object(O.jsx)("a",{href:"https://reactjs.org/",style:{color:"#00ADB5"},children:"React"}),Object(O.jsx)(z.a,{style:{fontSize:"3rem",color:"#EEEEEE",marginTop:"8px"}})]})]})]}),Object(O.jsxs)(l.a,{id:"developer-and-community-container",children:[Object(O.jsx)("h1",{style:{color:"white"},children:c}),Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(O.jsx)(P.a,{style:{fontSize:"1.5rem",color:"#EEEEEE",marginRight:"10px"}}),Object(O.jsx)("div",{style:{color:"#00ADB5"},children:"chita.catalin.adrian@gmail.com"})]}),Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(O.jsx)(V.a,{style:{fontSize:"1.5rem",color:"#EEEEEE",marginRight:"10px"}}),Object(O.jsxs)("div",{style:{color:"#00ADB5"},children:["github.com/chita-catalin/common-words"," "]})]}),Object(O.jsx)("h1",{style:{color:"white",marginTop:"10px"},children:i}),Object(O.jsx)("a",{href:"https://github.com/chita-catalin",style:{color:"#00ADB5"},children:"chita-catalin"})]})]})}),H=a(228),q=a(437),Y=a(440),K=(a(331),a(449)),J=a(450),Q=a(224),Z=a.n(Q),X=function(){var e=Object(n.useContext)(ce),t=Object(n.useState)("English"),a=Object(r.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)(""),l=Object(r.a)(s,2),d=l[0],j=l[1],b=Object(n.useState)([]),x=Object(r.a)(b,2),g=x[0],h=x[1],p=Object(n.useState)(!1),m=Object(r.a)(p,2),f=m[0],y=m[1],v=Object(n.useState)(!1),E=Object(r.a)(v,2),S=E[0],w=E[1],C=Object(n.useState)(""),k=Object(r.a)(C,2),L=k[0],A=k[1],T=Object(n.useState)(!1),I=Object(r.a)(T,2),N=I[0],R=I[1],B=Object(n.useState)(!1),D=Object(r.a)(B,2),W=D[0],U=D[1],M=Object(n.useState)("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),F=Object(r.a)(M,2),z=F[0],P=F[1],V=Object(n.useState)(0),G=Object(r.a)(V,2),Q=G[0],X=G[1],_=Object(n.useState)(0),$=Object(r.a)(_,2),ee=$[0],te=$[1],ae=Object(n.useState)(0),ne=Object(r.a)(ae,2),ie=ne[0],se=ne[1];return Object(O.jsxs)("div",{id:"tools-container",style:{position:"relative"},children:[g.length>0?Object(O.jsx)("div",{style:{display:"flex",flexDirection:"column",overflowY:"scroll"},children:g.map((function(e){return Object(O.jsx)("span",{style:{margin:"2px"},children:e})}))}):Object(O.jsx)("textarea",{value:d,placeholder:e.enterYourTextHere,rows:1e3,id:"text-area",onChange:function(e){return j(e.target.value)}}),Object(O.jsx)(u.a,{id:"main-action-button",type:"primary",onClick:function(){g.length>0?(window.navigator.clipboard.writeText(g.join("\n")),H.a.open({message:e.copied,placement:"bottomRight"})):function(){var e=performance.now(),t=[];if(f)t=d.replace(/\r/g," ").split(" ");else if(S){for(var a=0;a<d.length;a++)L.includes(d[a])?t[a]=d[a]:t[a]=" ";var n=t.join("");t=n.replace(/\r/g," ").split(" ")}else{for(var c=0;c<d.length;c++)z.includes(d[c])?t[c]=d[c]:t[c]=" ";var i=t.join("");t=i.replace(/\r/g," ").split(" ")}t=t.map((function(e){return e.toLowerCase()})),X(t.length),(t=Object.keys(t.reduce((function(e,t){return e[t]=!0,e}),{}))).sort(),h(t),te(t.length);var s=performance.now();se(s-e)}()},children:g.length>0?e.copyAll:e.extract}),Object(O.jsx)(u.a,{id:"clear-button",onClick:function(){j(""),h([])},children:e.clear}),N?Object(O.jsx)(K.a,{className:"fixed-controls-collapse",onClick:function(){return R(!1)}}):Object(O.jsx)(J.a,{className:"fixed-controls-collapse",onClick:function(){return R(!0)}}),g.length>0?Object(O.jsx)(O.Fragment,{children:W?Object(O.jsx)(K.a,{className:"fixed-statistics-collapse",onClick:function(){return U(!1)}}):Object(O.jsx)(J.a,{className:"fixed-statistics-collapse",onClick:function(){return U(!0)}})}):null,g.length>0&&Object(O.jsxs)("div",{id:"fixed-statistics-container",style:{display:W?"none":""},children:[Object(O.jsxs)("div",{style:{margin:"4px 6px 0px 6px"},children:[e.extractionTime,":"]}),Object(O.jsxs)("div",{style:{margin:"0px 6px 2px 6px",fontWeight:"bold"},children:[Object(O.jsx)(q.a,{strokeColor:{"0%":"#00ADB5","100%":"#00ADB5"},percent:100*ie/1e3,size:"small",width:20,format:function(){return""},className:"white-text"}),ie.toFixed(1)," ms"]}),Object(O.jsxs)("div",{style:{margin:"4px 6px 0px 6px"},children:[e.allWords,":"]}),Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingTop:"4px"},children:Object(O.jsx)(q.a,{strokeColor:{"0%":"#EEEEEE","100%":"#EEEEEE"},width:80,type:"circle",percent:100,format:function(){return Q.toString()},className:"white-text"})}),Object(O.jsxs)("div",{style:{margin:"4px 6px 0px 6px"},children:[e.uniqueWords,":"]}),Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingTop:"4px"},children:Object(O.jsx)(q.a,{strokeColor:{"0%":"#00ADB5","100%":"#00ADB5"},width:80,type:"circle",percent:100*ee/Q,format:function(){return ee.toString()+" (".concat((100*ee/Q).toFixed(0),"%)")},trailColor:"rgb(100,100,100)",className:"blue-text"})})]}),Object(O.jsxs)("div",{id:"fixed-controls-container",style:{display:N?"none":""},children:[Object(O.jsxs)("div",{style:{margin:"6px",borderBottom:"2px solid lightgrey",paddingBottom:"6px"},children:[Object(O.jsx)(Y.a,{checked:f,style:{marginRight:"4px"},onClick:function(){y(!f),w(!1)}}),e.allowAll]}),Object(O.jsxs)("div",{style:{margin:"0px 6px 6px 6px",borderBottom:"2px solid lightgrey",paddingBottom:"6px"},children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(Y.a,{checked:S,style:{marginRight:"4px"},onClick:function(){w(!S),y(!1)}}),e.customCharacters]}),S&&Object(O.jsx)(Z.a,{rows:2,style:{marginTop:"4px"},onChange:function(e){A(e.target.value)}})]}),Object(O.jsxs)("div",{style:{margin:"0px 6px 0px 6px",fontWeight:"bold"},children:[e.textLanguage,":"]}),Object(O.jsxs)(o.a,{disabled:f||S,value:c,style:{borderRadius:"4px",margin:"6px 6px 10px 6px"},onChange:function(e){switch(i(e),console.log(e),e){case"Romanian":P("a\u0103\xe2bcdefghi\xeejklmnopqrs\u0219t\u021buvwxyzA\u0102\xc2BCDEFGHI\xceJKLMNOPQRS\u0218T\u021aUVWXYZ");break;case"English":P("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");break;case"German":P("abcdefghijklmnopqrstuvwxyz\xe4\xf6\xfc\xdfABCDEFGHIJKLMNOPQRSTUVWXYZ\xc4\xd6\xdc\xdf");break;case"Dutch":P("abcdefghi\u0133jklmnopqrstuvwxyzABCDEFGHI\u0132JKLMNOPQRSTUVWXYZ");break;case"Ukrainian":P("\u0410\u0430\u0411\u0431\u0412\u0432\u0413\u0433\u0490\u0491\u0414\u0434\u0415\u0435\u0404\u0454\u0416\u0436\u0417\u0437\u0418\u0438\u0406\u0456\u0407\u0457\u0419\u0439\u041a\u043a\u041b\u043b\u041c\u043c\u041d\u043d\u041e\u043e\u041f\u043f\u0420\u0440\u0421\u0441\u0422\u0442\u0423\u0443\u0424\u0444\u0425\u0445\u0426\u0446\u0427\u0447\u0428\u0448\u0429\u0449\u042c\u044c\u042e\u044e\u042f\u044f")}},children:[Object(O.jsx)(o.a.Option,{value:"Dutch",children:e.dutch}),Object(O.jsx)(o.a.Option,{value:"English",children:e.english}),Object(O.jsx)(o.a.Option,{value:"German",children:e.german}),Object(O.jsx)(o.a.Option,{value:"Romanian",children:e.romanian}),Object(O.jsx)(o.a.Option,{value:"Ukrainian",children:e.ukrainian})]}),!f&&!S&&Object(O.jsxs)("div",{id:"characters-count",children:[e.characters," (",z.length,"):"," "]}),!f&&!S&&Object(O.jsx)("div",{id:"allowed-chars-container",children:z.split("").map((function(e){return Object(O.jsx)("span",{id:"allowed-chars",children:e})}))})]})]})},_=a(145),$=a(451),ee=a(452),te=a(453),ae=a(432),ne=a(436),ce=(a(418),a(419),a(420),c.a.createContext(null)),ie=c.a.createContext(null),se=ae.a.Header,re=ae.a.Sider,le=ae.a.Content;var oe=function(){var e=D(),t=function(){var e=Object(n.useState)("english"),t=Object(r.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)("Compare languages"),s=Object(r.a)(i,2),l=s[0],o=s[1],d=Object(n.useState)("Download list (.txt)"),j=Object(r.a)(d,2),u=j[0],b=j[1],x=Object(n.useState)("COMMON WORDS"),g=Object(r.a)(x,2),h=g[0],O=g[1],p=Object(n.useState)("Resources"),m=Object(r.a)(p,2),f=m[0],y=m[1],v=Object(n.useState)("About"),E=Object(r.a)(v,2),S=E[0],w=E[1],C=Object(n.useState)("Changelog"),k=Object(r.a)(C,2),L=k[0],A=k[1],T=Object(n.useState)("Copied!"),I=Object(r.a)(T,2),N=I[0],R=I[1],B=Object(n.useState)("Extract unique words"),D=Object(r.a)(B,2),W=D[0],U=D[1],M=Object(n.useState)("Copy all"),F=Object(r.a)(M,2),z=F[0],P=F[1],V=Object(n.useState)("Extract"),G=Object(r.a)(V,2),H=G[0],q=G[1],Y=Object(n.useState)("Text language"),K=Object(r.a)(Y,2),J=K[0],Q=K[1],Z=Object(n.useState)("Custom characters"),X=Object(r.a)(Z,2),_=X[0],$=X[1],ee=Object(n.useState)("Allow all"),te=Object(r.a)(ee,2),ae=te[0],ne=te[1],ce=Object(n.useState)("Enter your text here..."),ie=Object(r.a)(ce,2),se=ie[0],re=ie[1],le=Object(n.useState)("Extraction time"),oe=Object(r.a)(le,2),de=oe[0],je=oe[1],ue=Object(n.useState)("All words"),be=Object(r.a)(ue,2),xe=be[0],ge=be[1],he=Object(n.useState)("Characters"),Oe=Object(r.a)(he,2),pe=Oe[0],me=Oe[1],fe=Object(n.useState)("tools"),ye=Object(r.a)(fe,2),ve=ye[0],Ee=ye[1],Se=Object(n.useState)("Clear"),we=Object(r.a)(Se,2),Ce=we[0],ke=we[1],Le=Object(n.useState)("Initial words"),Ae=Object(r.a)(Le,2),Te=Ae[0],Ie=Ae[1],Ne=Object(n.useState)("Unique words"),Re=Object(r.a)(Ne,2),Be=Re[0],De=Re[1],We=Object(n.useState)("Reset all filters"),Ue=Object(r.a)(We,2),Me=Ue[0],Fe=Ue[1],ze=Object(n.useState)("Same prefix length"),Pe=Object(r.a)(ze,2),Ve=Pe[0],Ge=Pe[1],He=Object(n.useState)("Select two languages!"),qe=Object(r.a)(He,2),Ye=qe[0],Ke=qe[1],Je=Object(n.useState)("Words per page"),Qe=Object(r.a)(Je,2),Ze=Qe[0],Xe=Qe[1],_e=Object(n.useState)("Words"),$e=Object(r.a)(_e,2),et=$e[0],tt=$e[1],at=Object(n.useState)("Min. word length"),nt=Object(r.a)(at,2),ct=nt[0],it=nt[1],st=Object(n.useState)("Max. word length"),rt=Object(r.a)(st,2),lt=rt[0],ot=rt[1],dt=Object(n.useState)("Word match (different letters)"),jt=Object(r.a)(dt,2),ut=jt[0],bt=jt[1],xt=Object(n.useState)("FIND THE COMMON WORDS OF LANGUAGES"),gt=Object(r.a)(xt,2),ht=gt[0],Ot=gt[1],pt=Object(n.useState)("DEVELOPER & COMMUNITY"),mt=Object(r.a)(pt,2),ft=mt[0],yt=mt[1],vt=Object(n.useState)("GET INVOLVED!"),Et=Object(r.a)(vt,2),St=Et[0],wt=Et[1],Ct=Object(n.useState)("CONTRIBUTORS:"),kt=Object(r.a)(Ct,2),Lt=kt[0],At=kt[1],Tt=Object(n.useState)("THIS WEB APP WAS BUILT USING THE MERN STACK"),It=Object(r.a)(Tt,2),Nt=It[0],Rt=It[1],Bt=Object(n.useState)("Language word lists (all words)"),Dt=Object(r.a)(Bt,2),Wt=Dt[0],Ut=Dt[1],Mt=Object(n.useState)("English"),Ft=Object(r.a)(Mt,2),zt=Ft[0],Pt=Ft[1],Vt=Object(n.useState)("Mandarin Chinese"),Gt=Object(r.a)(Vt,2),Ht=(Gt[0],Gt[1],Object(n.useState)("Hindi")),qt=Object(r.a)(Ht,2),Yt=(qt[0],qt[1],Object(n.useState)("Spanish")),Kt=Object(r.a)(Yt,2),Jt=Kt[0],Qt=Kt[1],Zt=Object(n.useState)("French"),Xt=Object(r.a)(Zt,2),_t=Xt[0],$t=Xt[1],ea=Object(n.useState)("Standard Arabic"),ta=Object(r.a)(ea,2),aa=(ta[0],ta[1],Object(n.useState)("Bengali")),na=Object(r.a)(aa,2),ca=(na[0],na[1],Object(n.useState)("Dutch")),ia=Object(r.a)(ca,2),sa=ia[0],ra=ia[1],la=Object(n.useState)("Ukrainian"),oa=Object(r.a)(la,2),da=oa[0],ja=oa[1],ua=Object(n.useState)("Finnish"),ba=Object(r.a)(ua,2),xa=ba[0],ga=ba[1],ha=Object(n.useState)("German"),Oa=Object(r.a)(ha,2),pa=Oa[0],ma=Oa[1],fa=Object(n.useState)("Hungarian"),ya=Object(r.a)(fa,2),va=ya[0],Ea=ya[1],Sa=Object(n.useState)("Italian"),wa=Object(r.a)(Sa,2),Ca=wa[0],ka=wa[1],La=Object(n.useState)("Polish"),Aa=Object(r.a)(La,2),Ta=Aa[0],Ia=Aa[1],Na=Object(n.useState)("Romanian"),Ra=Object(r.a)(Na,2),Ba=Ra[0],Da=Ra[1],Wa=Object(n.useState)("Turkish"),Ua=Object(r.a)(Wa,2),Ma=Ua[0],Fa=Ua[1],za=Object(n.useState)("Project created"),Pa=Object(r.a)(za,2),Va=Pa[0],Ga=Pa[1],Ha=Object(n.useState)("Added basic language blending"),qa=Object(r.a)(Ha,2),Ya=qa[0],Ka=qa[1],Ja=Object(n.useState)("Added Italian,French,Finnish languages.Enhanced results page..added ".concat("changelog"," section..added country flags..added dark/light theme switch")),Qa=Object(r.a)(Ja,2),Za=Qa[0],Xa=Qa[1],_a=Object(n.useState)("Removed language lists from frontend side.Added about section.Removed light/dark theme switch.Enhanced landing page UI.Updated versioning system to match web standards"),$a=Object(r.a)(_a,2),en=$a[0],tn=$a[1],an=Object(n.useState)('Connected to Backend App.Now retreiving languages list from database.Added not-yet-functional table to "blend-page".added Romanian word list to "Resources" page'),nn=Object(r.a)(an,2),cn=nn[0],sn=nn[1],rn=Object(n.useState)("Added language switch RO/EN.Added more languages.Added language comparing functionality.Added tools section, with unique word extraction tool.Added languages list from database to resources page.Improved general UI"),ln=Object(r.a)(rn,2),on=ln[0],dn=ln[1];return Object(n.useEffect)((function(){switch(a){case"english":O("COMMON WORDS"),o("Compare languages"),b("Download list (.txt)"),y("Resources"),w("About"),A("Changelog"),R("Copied!"),P("Copy all"),U("Extract unique words"),q("Extract"),Q("Text language"),$("Custom characters"),ne("Allow all"),re("Enter your text here..."),je("Extraction time"),ge("All words"),me("Characters"),Ee("Tools"),ke("Clear"),Ie("Initial words"),De("Unique words"),Fe("Reset all filters"),Ge("Same prefix length"),Ke("Select two languages!"),Xe("Words per page"),tt("Words"),it("Min. word length"),ot("Max. word length"),bt("Word Match (different letters)"),Ot("FIND THE COMMON WORDS OF LANGUAGES"),yt("DEVELOPER & COMMUNITY"),wt("GET INVOLVED!"),At("CONTRIBUITORS:"),Rt("THIS WEB APP WAS BUILT USING THE MERN STACK"),Ut("Language word lists (all words)"),ja("Ukrainian"),ra("Dutch"),Pt("English"),ga("Finnish"),$t("French"),ma("German"),Ea("Hungarian"),ka("Italian"),Ia("Polish"),Da("Romanian"),Qt("Spanish"),Fa("Turkish"),Ga("Project created"),Ka("Added basic language blending"),Xa("Added Italian,French,Finnish languages.Enhanced results page..added ".concat("changelog"," section..added country flags..added dark/light theme switch")),tn("Removed language lists from frontend side.Added about section.Removed light/dark theme switch.Enhanced landing page UI.Updated versioning system to match web standards"),sn('Connected to Backend App.Now retreiving languages list from database.Added not-yet-functional table to "blend-page".added Romanian word list to "Resources" page'),dn("Added language switch RO/EN.Added more languages.Added language comparing functionality.Added tools section, with unique word extraction tool.Added languages list from database to resources page.Improved general UI");break;case"romanian":O("CUVINTE COMUNE"),o("Compar\u0103"),b("Descarc\u0103 lista (.txt)"),y("Resurse"),w("Despre"),A("Istoric schimbari"),R("Copiat!"),P("Copiaz\u0103 tot"),U("Extrage cuvinte unice"),q("Extrage"),Q("Limba textului"),$("Permite doar caracterele urm\u0103toare"),ne("Permite tot"),re("Introdu textul aici..."),je("Durat\u0103 extragere"),ge("Cuvinte totale"),me("Caractere"),Ee("Unelte"),ke("\u0218terge"),Ie("Cuvinte ini\u021biale"),De("Cuvinte unice"),Fe("Reseteaz\u0103 toate filtrele"),Ge("Acela\u0219i prefix"),Ke("Selecteaz\u0103 dou\u0103 limbi diferite!"),Xe("Cuvinte pe pagin\u0103"),tt("Cuvinte"),it("Lungime minim\u0103"),ot("Lungime maxim\u0103"),bt("Potrivire cuvinte (litere diferite)"),Ot("G\u0102SE\u0218TE CUVINTELE COMUNE ALE LIMBILOR"),yt("DEZVOLTATOR & COMUNITATE"),wt("IMPLIC\u0102-TE!"),At("CONTRIBUITORI:"),Rt("ACEAST\u0102 APLICA\u021aIE WEB A FOST DEZVOLTAT\u0102 FOLOSIND STACK-UL MERN"),Ut("Listele de cuvinte ale limbilor (toate cuvintele)"),ja("Ucrainean\u0103"),ra("Neerlandez\u0103"),Pt("Englez\u0103"),ga("Finlandez\u0103"),$t("Francez\u0103"),ma("German\u0103"),Ea("Maghiar\u0103"),ka("Italian\u0103"),Ia("Polonez\u0103"),Da("Rom\xe2n\u0103"),Qt("Spaniol\u0103"),Fa("Turc\u0103"),Ga("\xcenceput proiect"),Ka("Ad\u0103ugat algoritm de combinare a limbilor"),Xa('Ad\u0103ugat Italian\u0103, Francez\u0103, Finlandez\u0103.\xcembun\u0103t\u0103\u021bit pagina de rezultate.Ad\u0103ugat sec\u021biune de "istoric schimb\u0103ri".Ad\u0103ugat steaguri pentru \u021b\u0103ri.Ad\u0103ugat buton pentru tem\u0103 light/dark'),tn('\xcenl\u0103turat listele de cuvinte din Frontend.Ad\u0103ugat sec\u021biunea "despre".\xcenl\u0103turat butonul pentru tem\u0103 light/dark.\xcembun\u0103t\u0103\u021bit UI-ul paginii de pornire.Updatat sistemul de versionare cu standardul web'),sn("Conectat aplica\u021bia web la Backend.Listele de limbi acum sunt preluate dintr-o baz\u0103 de date.Ad\u0103ugat tabel de cuvinte, \xeenc\u0103 nefunc\u021bional.Ad\u0103ugat lista cuvintelor din limba rom\xe2n\u0103 la pagina de resurse "),dn("Ad\u0103ugat func\u021bia de schimbare de limb\u0103.Ad\u0103ugat mai multe limbi.Ad\u0103ugat func\u021bia de comparare a limbilor.Ad\u0103ugat sec\u021biunea de unelte.Ad\u0103ugat unealta de extragere a cuvintelor unice.Ad\u0103ugat liste de limbi la pagina de resurse.\xcembun\u0103t\u0103\u021bit UI general")}}),[a]),{language:a,compareLanguages:l,viewList:u,setLanguage:c,commonWords:h,resources:f,about:S,changelog:L,copied:N,copyAll:z,allWords:xe,extractionTime:de,extract:H,textLanguage:J,customCharacters:_,allowAll:ae,enterYourTextHere:se,extractUniqueWords:W,characters:pe,clear:Ce,initialWords:Te,uniqueWords:Be,tools:ve,samePrefixLength:Ve,selectTwoLanguages:Ye,wordsPerPage:Ze,words:et,minWordLength:ct,maxWordLength:lt,resetAllFilters:Me,findTheCommonWordsOfLanguages:ht,developerAndCommunity:ft,getInvolved:St,contribuitors:Lt,appBuiltUsingMERN:Nt,wordMatch:ut,languageWordList:Wt,ukrainian:da,dutch:sa,english:zt,finnish:xa,french:_t,german:pa,hungarian:va,italian:Ca,polish:Ta,romanian:Ba,spanish:Jt,turkish:Ma,update1:Va,update2:Ya,update3:Za,update4:en,update5:cn,update6:on}}(),a=Object(n.useState)(!1),c=Object(r.a)(a,2),i=c[0],s=c[1];return Object(O.jsx)(ce.Provider,{value:t,children:Object(O.jsx)(ie.Provider,{value:e,children:Object(O.jsx)(E.a,{children:Object(O.jsxs)(ae.a,{children:[Object(O.jsx)(re,{trigger:null,collapsible:!0,collapsed:i,className:"sider",collapsedWidth:0,children:Object(O.jsxs)(ne.a,{style:{paddingTop:"60px",minHeight:"100vh",height:"100%",backgroundColor:"#393E46"},theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(O.jsx)(ne.a.Item,{children:Object(O.jsxs)(E.b,{to:"/language-blend",children:[Object(O.jsx)(f.a,{})," ",Object(O.jsx)("span",{children:t.compareLanguages})]})},"1"),Object(O.jsx)(ne.a.Item,{children:Object(O.jsxs)(E.b,{to:"/resources",children:[Object(O.jsx)(U.a,{})," ",Object(O.jsx)("span",{children:t.resources})]})},"2"),Object(O.jsx)(ne.a.Item,{children:Object(O.jsxs)(E.b,{to:"/tools",children:[Object(O.jsx)(F.a,{})," ",Object(O.jsx)("span",{children:t.extractUniqueWords})]})},"3"),Object(O.jsx)(ne.a.Item,{children:Object(O.jsxs)(E.b,{to:"/about",children:[Object(O.jsx)(_.a,{})," ",Object(O.jsx)("span",{children:t.about})]})},"4"),Object(O.jsx)(ne.a.Item,{children:Object(O.jsxs)(E.b,{to:"/changelog",children:[Object(O.jsx)($.a,{})," ",Object(O.jsx)("span",{children:t.changelog})]})},"5")]})}),Object(O.jsxs)(ae.a,{className:"site-layout",style:{minWidth:320},children:[Object(O.jsxs)(se,{className:"site-layout-background",style:{color:"white",backgroundColor:"#393E46",padding:0,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(O.jsx)("div",{className:"trigger-container",children:i?Object(O.jsx)(ee.a,{className:"trigger",onClick:function(){return s(!i)}}):Object(O.jsx)(te.a,{className:"trigger",onClick:function(){return s(!i)}})}),Object(O.jsxs)("div",{id:"title",children:[Object(O.jsx)(E.b,{to:"/",style:{textDecoration:"none",color:"white"},children:t.commonWords}),Object(O.jsx)("span",{style:{fontSize:"15px",marginLeft:"2px",color:"white"},className:"version",children:"V1.0.0"})]}),Object(O.jsxs)(o.a,{suffixIcon:Object(O.jsx)(m.a,{style:{color:"white"}}),style:{marginRight:"24px",color:"white"},defaultValue:"english",bordered:!1,value:"romanian"===t.language?"Rom\xe2n\u0103":"English",onChange:function(e){return t.setLanguage(e)},children:[Object(O.jsx)(o.a.Option,{value:"english",children:t.english}),Object(O.jsx)(o.a.Option,{value:"romanian",children:t.romanian})]})]}),Object(O.jsx)(le,{style:{padding:"12px",color:"white",minHeight:280,minWidth:320,backgroundColor:"#222831"},children:Object(O.jsxs)(S.c,{children:[Object(O.jsx)(S.a,{path:"/language-blend",element:Object(O.jsx)(v,{})}),Object(O.jsx)(S.a,{path:"/resources",element:Object(O.jsx)(I,{})}),Object(O.jsx)(S.a,{path:"/changelog",element:Object(O.jsx)(N,{})}),Object(O.jsx)(S.a,{path:"/about",element:Object(O.jsx)(G,{})}),Object(O.jsx)(S.a,{path:"*",element:Object(O.jsx)(R,{})}),Object(O.jsx)(S.a,{path:"/tools",element:Object(O.jsx)(X,{})}),Object(O.jsx)(S.a,{path:"/",element:Object(O.jsx)(v,{})})]})})]})]})})})})};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(oe,{})}),document.getElementById("root"))}},[[427,1,2]]]);
//# sourceMappingURL=main.545b9092.chunk.js.map