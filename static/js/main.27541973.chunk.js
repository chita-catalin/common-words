(this["webpackJsonpcommon-words-frontend"]=this["webpackJsonpcommon-words-frontend"]||[]).push([[0],{211:function(e,t,n){},238:function(e,t,n){},271:function(e,t,n){},379:function(e,t,n){},380:function(e,t,n){},382:function(e,t,n){},383:function(e,t,n){},384:function(e,t,n){},386:function(e,t,n){},394:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(53),c=n.n(r),i=(n(271),n(5)),l=n(435),o=n(141),d=n(438),j=n(442),u=n(426),b=n(436),g=n(91),x=(n(211),n(433)),h=n(256),O=n(441),p=n(243),f=n(1),m=function(){var e=Object(a.useContext)(Te),t=Object(a.useContext)(Le),n=(t.wordsPerPage,t.words,t.minWordLength,t.maxWordLength,t.wordMatch,Object(a.useState)(0)),s=Object(i.a)(n,2),r=s[0],c=s[1],l=Object(a.useState)(200),o=Object(i.a)(l,2),d=o[0],j=o[1];Object(a.useEffect)((function(){e.setFilteredList(e.blendedList.filter((function(t){return t.length>=e.minLength&&t.length<=e.maxLength})))}),[e.minLength,e.maxLength,e.blendedList]);var u=e.filteredList.map((function(e){return{word:e}})),b=[{title:"word",dataIndex:"word",key:"word",render:function(e){return Object(f.jsx)("a",{children:e})}}];return Object(f.jsxs)(f.Fragment,{children:[e.tableView&&e.blendedList.length>0?Object(f.jsx)(x.a,{columns:b,dataSource:u,style:{marginTop:"6px"},bordered:!0,loading:e.loading,size:"small",pagination:{pageSize:d,position:["topCenter","bottomCenter"]}}):e.blendedList.length>0?Object(f.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",paddingTop:"12px"},children:[Object(f.jsx)(h.a,{current:r,pageSize:d,defaultCurrent:1,total:e.filteredList.length,pageSizeOptions:[50,100,200,500,1e3,2e3,5e3,1e4],style:{flexGrow:1},onChange:function(e,t){j(t),c(e)}}),Object(f.jsx)("div",{style:{display:"flex",flexWrap:"wrap",marginTop:"6px"},children:e.filteredList.map((function(t,n){if(n>=d*r&&n<=d*(r+1)-1)return Object(f.jsx)(O.a,{style:{flexGrow:1,marginTop:"6px",backgroundColor:t.length<=5?"#e6f7ff":t.length<=10?"#bae7ff":t.length<=15?"#91d5ff":"#69c0ff"},children:t.split("").map((function(t,n){return Object(f.jsx)("span",{style:{color:n<e.suffixLetters&&0!==e.suffixLetetrs1?"#f5222d":"black",fontWeight:n<e.suffixLetters&&0!==e.suffixLetetrs1?500:100},children:t})}))})}))})]}):null,e.loading&&Object(f.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"48px"},children:Object(f.jsx)(p.a,{})})]})},y=n(443),v=s.a.createContext(null),w=function(){var e=s.a.useContext(Te);return Object(f.jsxs)(v.Provider,{value:e,children:[Object(f.jsxs)("div",{id:"header-container",children:[Object(f.jsxs)(l.a,{id:"inputs-card",children:[Object(f.jsx)(o.a,{onChange:function(t){e.getFirstLanguage(t)},placeholder:"select a language",style:{width:"160px"},defaultValue:"",children:e.languages.map((function(e){return Object(f.jsx)(o.a.Option,{value:e.name,children:e.name},e._id)}))}),Object(f.jsx)(y.a,{style:{marginLeft:"10px",marginRight:"10px"}}),Object(f.jsx)(o.a,{placeholder:"select another language",onChange:function(t){e.getSecondLanguage(t)},defaultValue:"",style:{width:"160px"},children:e.languages.sort((function(e,t){return e.name>t.name?1:-1})).map((function(e){return Object(f.jsx)(o.a.Option,{value:e.name,children:e.name},e._id)}))})]}),Object(f.jsx)(l.a,{id:"statistics-card",children:Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(f.jsx)(d.a,{title:"Common words",value:e.filteredList.length,style:{marginRight:"24px"}}),Object(f.jsx)(d.a,{title:"Language match",suffix:"%",value:e.filteredList.length>0?(100*e.filteredList.length/(e.selectedLanguage1.length+e.selectedLanguage2.length)*2).toFixed(2):0,style:{marginRight:"24px"}})]})}),e.blendedList.length>0&&Object(f.jsxs)(l.a,{id:"controls-card",children:[Object(f.jsxs)("div",{id:"controls-content",children:[Object(f.jsx)(j.a,{onChange:function(t){e.setTableView(t)},style:{margin:"5px"},checkedChildren:"Table view",unCheckedChildren:"Words view",checked:e.tableView}),Object(f.jsx)(u.a,{type:"vertical"}),Object(f.jsxs)("div",{style:{margin:"5px"},children:["Minimum word length:"," ",Object(f.jsx)(b.a,{size:"small",min:1,max:99,value:e.minLength,onChange:function(t){e.setMinLength(t)},style:{marginLeft:"2px",width:"55px"}})]}),Object(f.jsx)(u.a,{type:"vertical"}),Object(f.jsxs)("div",{style:{margin:"5px"},children:["Maximum word length:"," ",Object(f.jsx)(b.a,{size:"small",min:1,max:99,value:e.maxLength,onChange:function(t){e.setMaxLength(t)},style:{marginLeft:"2px",width:"55px"}})]}),Object(f.jsx)(u.a,{type:"vertical"}),Object(f.jsxs)("div",{style:{margin:"5px"},children:["Same prefix length:"," ",Object(f.jsx)(b.a,{size:"small",min:0,max:99,defaultValue:0,onChange:function(){},style:{marginLeft:"2px",width:"55px"}})]}),Object(f.jsx)(u.a,{type:"vertical"}),Object(f.jsxs)("div",{style:{margin:"5px"},children:["Same suffix length:"," ",Object(f.jsx)(b.a,{size:"small",min:0,max:99,value:e.suffixLetters,onChange:function(t){e.setSuffixLetters(t)},style:{marginLeft:"2px",width:"55px"}})]}),Object(f.jsx)(u.a,{type:"vertical"}),Object(f.jsxs)("div",{style:{margin:"5px"},children:["Word match (number of different letters) :"," ",Object(f.jsx)(b.a,{size:"small",min:0,max:99,value:e.lettersToIgnore,onChange:function(t){e.setLettersToIgnore(t)},style:{marginLeft:"2px",width:"55px"}})]})]}),Object(f.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(f.jsx)(g.a,{style:{marginTop:"12px"},onClick:function(){e.setMinLength(1),e.setMaxLength(99),e.setSuffixLetters(0)},children:"Reset all filters"})})]})]}),Object(f.jsx)(m,{})]})},S=n(82),C=n.n(S),L=n(122),T=n(451),k=n(36),E=n(123),A=n.n(E),I=(n(238),function(){var e=Object(k.g)().language,t=Object(a.useState)(!1),n=Object(i.a)(t,2),s=n[0],r=n[1],c=Object(a.useState)([]),l=Object(i.a)(c,2),o=l[0],d=l[1],j=function(){var t=Object(L.a)(C.a.mark((function t(){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(!0),t.prev=1,t.next=4,A.a.get("".concat("https://common-words.herokuapp.com","/getLanguage?language=").concat(e));case 4:200===(n=t.sent).status&&d(n.data.data[0].list),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:r(!1);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){j()}),[]),Object(f.jsxs)(f.Fragment,{children:[!0===s&&Object(f.jsx)(T.a,{id:"resource-spinner"}),Object(f.jsx)("p",{style:{whiteSpace:"pre"},children:o.join("\r\n")})]})}),R=n(440),N=n(437),W=n(41),V=(n(379),function(){return Object(f.jsxs)("div",{className:"more-statistics-container",children:[Object(f.jsx)(R.a,{style:{fontSize:"3.58rem",fontWeight:100},children:"STATISTICS:"}),Object(f.jsx)(N.a,{children:Object(f.jsxs)(W.b,{to:"/",style:{textDecoration:"none"},children:[Object(f.jsx)("b",{children:"\u2190 \xa0"})," back to blending"]})})]})}),M=function(){var e=Object(a.useContext)(Le),t=(e.languageWordList,e.english),n=e.finnish,s=e.french,r=e.german,c=e.hungarian,i=e.italian,l=e.polish,o=e.romanian,d=e.spanish,j=e.turkish;return Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(f.jsxs)("div",{children:["(en) ",t]}),Object(f.jsx)(W.b,{to:"/resources/english",children:"View list"})]}),Object(f.jsx)(u.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(f.jsxs)("div",{children:["(fi) ",n]}),Object(f.jsx)(W.b,{to:"/resources/finnish",children:"View list"})]}),Object(f.jsx)(u.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(f.jsxs)("div",{children:["(fr) ",s]}),Object(f.jsx)(W.b,{to:"/resources/french",children:"View list"})]}),Object(f.jsx)(u.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(f.jsxs)("div",{children:["(de) ",r]}),Object(f.jsx)(W.b,{to:"/resources/german",children:"View list"})]}),Object(f.jsx)(u.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(f.jsxs)("div",{children:["(hu) ",c]}),Object(f.jsx)(W.b,{to:"/resources/hungarian",children:"View list"})]}),Object(f.jsx)(u.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(f.jsxs)("div",{children:["(it) ",i]}),Object(f.jsx)(W.b,{to:"/resources/italian",children:"View list"})]}),Object(f.jsx)(u.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(f.jsxs)("div",{children:["(pl) ",l]}),Object(f.jsx)(W.b,{to:"/resources/polish",children:"View list"})]}),Object(f.jsx)(u.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(f.jsxs)("div",{children:["(ro) ",o]}),Object(f.jsx)(W.b,{to:"/resources/romanian",children:"View list"})]}),Object(f.jsx)(u.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(f.jsxs)("div",{children:["(es) ",d]}),Object(f.jsx)(W.b,{to:"/resources/spanish",children:"View list"})]}),Object(f.jsx)(u.a,{style:{marginTop:"8px",marginBottom:"2px"}}),Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(f.jsxs)("div",{children:["(tr) ",j]}),Object(f.jsx)(W.b,{to:"/resources/turkish",children:"View list"})]})]})},D=(n(380),function(){var e=Object(a.useContext)(Le),t=e.update1,n=e.update2,s=e.update3,r=e.update4,c=e.update5,i=e.update6;return Object(f.jsx)("div",{children:Object(f.jsx)("div",{id:"changelog-container",children:Object(f.jsxs)("div",{id:"changelog-sub-container",children:[Object(f.jsx)(l.a,{title:"V1.0.0 / -",style:{margin:"12px"}}),Object(f.jsx)(l.a,{title:"V0.5.0 / 17.5.2022",style:{margin:"12px"},children:i}),Object(f.jsx)(l.a,{title:"V0.0.5 / 26.4.2022",style:{margin:"12px"},children:c}),Object(f.jsx)(l.a,{title:"V0.0.4 / 16.4.2022",style:{margin:"12px"},children:r}),Object(f.jsx)(l.a,{title:"V0.3 / 29.12.2021",style:{margin:"12px"},children:s}),Object(f.jsx)(l.a,{title:"V0.2 / 10.12.2021",style:{margin:"12px"},children:n}),Object(f.jsx)(l.a,{title:"V0.1 / 1.12.2021",style:{margin:"12px"},children:t})]})})})}),B=n(247),F=n.n(B),U=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)([]),c=Object(i.a)(r,2),l=c[0],o=c[1],d=Object(a.useState)([]),j=Object(i.a)(d,2),u=j[0],b=j[1],g=Object(a.useState)([]),x=Object(i.a)(g,2),h=x[0],O=x[1],p=Object(a.useState)([]),f=Object(i.a)(p,2),m=f[0],y=f[1];return{text:n,setText:s,wordsArray:l,setWordsArray:o,UTF8Array:u,setUTF8Array:b,textRef:Object(a.useRef)(),goodCharacters:h,setGoodCharacters:O,badCharacters:m,setBadCharacters:y}},z=function(){var e=Object(a.useContext)(X),t=e.setText,n=e.textRef,s=Object(a.useCallback)(function(e){var t;return function(){for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];t&&clearTimeout(t),t=setTimeout((function(){t=null,e.apply(null,a)}),500)}}((function(e){t(e),console.log("acum se face set state")})),[]);return Object(f.jsx)("textarea",{rows:15,cols:100,name:"description",placeholder:"Extract the unique words from every text!",onChange:function(e){return s(e.target.value)},ref:n})},P=n(248),G=n(452),H=n(57);H.d.register(H.a,H.l,H.f);var X=s.a.createContext(null),q=function(){var e=U(),t=Object(a.useState)([]),n=Object(i.a)(t,2),s=(n[0],n[1],Object(a.useState)(0)),r=Object(i.a)(s,2),c=r[0],l=r[1],o=Object(a.useRef)(null),d={labels:["".concat(c," total words (100%)"),"".concat(e.wordsArray.length," unique words (").concat((100*e.wordsArray.length/c).toFixed(2),"%)")],datasets:[{label:"# of Votes",data:[c,e.wordsArray.length],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)"],borderWidth:1}]};return Object(f.jsx)(X.Provider,{value:e,children:Object(f.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 10px 50px 10px"},children:Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(f.jsx)(W.b,{to:"/tools",style:{alignSelf:"flex-start",textDecoration:"none"},children:Object(f.jsx)(N.a,{style:{color:"#00adb5",marginBottom:"10px"},children:"< Go back"})}),Object(f.jsx)(z,{}),Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[Object(f.jsx)(N.a,{variant:"contained",style:{margin:"10px 0 10px 0",backgroundColor:"grey"},onClick:function(){console.log("wa",e.textRef),e.textRef.current.value="",e.setText(""),e.setWordsArray([])},children:"CLEAR"}),e.wordsArray.length>0&&Object(f.jsxs)(N.a,{variant:"contained",style:{margin:"10px 0 10px 0",backgroundColor:"#FF2E63"},onClick:function(){return o.current.scrollIntoView()},children:["VIEW STATISTICS ",Object(f.jsx)(F.a,{})]}),Object(f.jsx)(N.a,{variant:"contained",style:{margin:"10px 0 10px 0",backgroundColor:"#00adb5"},onClick:function(){var t=e.text.replace(/\r/g," ").split(/[ \x1b\x1a\x19\x18\x17\x15\x14\x13\x12\x11\x10\x0f\x0e\x0c\x08\x06\x03\x02\x05\x01\x04\u25a0+#\u2019\u2018%$=^\u2020\u2026\u201e\u2666\xac\xab\xbb\u2022\xb9\xb21234567890\u201c*\u201d.\xb7:;\uf077?!~,`"&|()<>{}\[\]\r\n/\\]+/);t=t.map((function(e){return e.toLowerCase()})),l(t.length),(t=Object.keys(t.reduce((function(e,t){return e[t]=!0,e}),{}))).sort(),e.setWordsArray(t),console.log(t)},children:"EXTRACT UNIQUE WORDS"})]}),Object(f.jsx)("textarea",{rows:15,cols:100,name:"description",placeholder:"Unique words will appear here",value:e.wordsArray.join("\n"),readOnly:!0}),e.wordsArray.length>0&&Object(f.jsx)(G.a,{ref:o,style:{width:"100%",marginTop:"30px",minHeight:"100px"},children:Object(f.jsxs)("div",{style:{width:"45%",margin:"20px"},children:[" ",Object(f.jsx)(P.a,{data:d})]})})]})})})},K=function(){return Object(f.jsx)("div",{style:{display:"flex",flexDirection:"column",color:"#fff"},children:Object(f.jsxs)("div",{style:{display:"flex",flexGrow:1,flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(f.jsx)("span",{style:{fontSize:"6rem",marginTop:"100px"},children:"404"}),Object(f.jsx)("p",{style:{marginTop:"-15px",marginBottom:"30px"},children:"Nothing to see here"})]})})},Y=n(434),J=function(){var e=s.a.useContext(Te),t=e.blendedList,n=s.a.useState(1),a=Object(i.a)(n,2),r=a[0],c=a[1],l=s.a.useState(10),o=Object(i.a)(l,2),d=o[0],j=o[1];return Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(f.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(f.jsxs)("h1",{style:{fontFamily:"consolas",color:"white",marginTop:"30px"},children:[Object(f.jsx)("span",{onClick:function(){e.setBlendedList([]),e.setSelectedLanguage2(""),e.setSelectedLanguage1("")},style:{cursor:"pointer"},children:"BLEND LANGUAGES"}),">"," ",Object(f.jsx)(W.b,{to:"/language-blend",style:{color:"white",textDecoration:"none"},children:"RESULTS"}),">"," ",Object(f.jsx)("u",{children:"MORE DETAILS"})]})}),Object(f.jsxs)("div",{style:{padding:"10px",margin:"30px 0 30px 0",display:"flex"},children:[Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"column",margin:"5px"},children:[Object(f.jsx)("span",{style:{color:"white",marginBottom:"5px"},children:"minimum word length"}),Object(f.jsx)(Y.a,{placeholder:"",type:"number",InputLabelProps:{shrink:!0},value:r,style:{backgroundColor:"white",borderRadius:"4px"},onChange:function(e){return c(Number(e.target.value))}})]}),Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"column",margin:"5px"},children:[Object(f.jsx)("span",{style:{color:"white",marginBottom:"5px"},children:"maximum word length"}),Object(f.jsx)(Y.a,{placeholder:"",type:"number",InputLabelProps:{shrink:!0},value:d,style:{backgroundColor:"white",borderRadius:"4px"},onChange:function(e){return j(Number(e.target.value))}})]})]}),Object(f.jsx)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"},children:t.map((function(e){return e.word&&e.word.length>=r&&e.word.length<=d?Object(f.jsx)("div",{style:{margin:"10px",padding:"10px",borderRadius:"20px",backgroundColor:"rgba(255, 255, 255,0.1)",color:"white"},children:e.word}):null}))})]})},Q=n(178),Z=n.n(Q),_=(n(382),function(){Object(a.useRef)(null);var e=s.a.useContext(Te),t=s.a.useContext(Le),n=t.startExploring,r=t.landingPageText;return s.a.useEffect((function(){e.selectedLanguage1=[],e.selectedLanguage2=[],e.blendedList=[]}),[]),Object(f.jsxs)("div",{id:"landing-page-container",children:[Object(f.jsxs)(l.a,{style:{margin:"12px",flexGrow:1,maxWidth:"40%",display:"flex",flexDirection:"column",height:"100%",backgroundColor:"#fafafa"},children:[Object(f.jsx)("div",{style:{marginBottom:"10px"},children:r}),Object(f.jsxs)(g.a,{type:"primary",children:[n,Object(f.jsx)(Z.a,{style:{fontSize:"16px",color:"#EEEEEE"}})]})]}),Object(f.jsx)(l.a,{style:{margin:"12px",flexGrow:1,backgroundColor:"#f5f5f5"},children:Object(f.jsx)(d.a,{title:"Languages",value:10})}),Object(f.jsx)(l.a,{style:{margin:"12px",flexGrow:1,backgroundColor:"#f0f0f0"},children:"wow"}),Object(f.jsx)(l.a,{style:{margin:"12px",flexGrow:1,backgroundColor:"#d9d9d9"},children:"wow"})]})}),$=n(10),ee=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)([]),c=Object(i.a)(r,2),l=c[0],o=c[1],d=Object(a.useState)(""),j=Object(i.a)(d,2),u=j[0],b=j[1],g=Object(a.useState)(""),x=Object(i.a)(g,2),h=x[0],O=x[1],p=Object(a.useState)([]),f=Object(i.a)(p,2),m=f[0],y=f[1],v=Object(a.useState)(!1),w=Object(i.a)(v,2),S=w[0],T=w[1],k=Object(a.useState)([]),E=Object(i.a)(k,2),I=E[0],R=E[1],N=Object(a.useState)(""),W=Object(i.a)(N,2),V=W[0],M=W[1],D=Object(a.useState)(!0),B=Object(i.a)(D,2),F=B[0],U=B[1],z=Object(a.useState)(0),P=Object(i.a)(z,2),G=P[0],H=P[1],X=Object(a.useState)(4),q=Object(i.a)(X,2),K=q[0],Y=q[1],J=Object(a.useState)(0),Q=Object(i.a)(J,2),Z=Q[0],_=Q[1],ee=Object(a.useState)([]),te=Object(i.a)(ee,2),ne=te[0],ae=te[1],se=Object(a.useState)(1),re=Object(i.a)(se,2),ce=re[0],ie=re[1],le=Object(a.useState)(99),oe=Object(i.a)(le,2),de=oe[0],je=oe[1];Object(a.useEffect)((function(){}),[G]);var ue=function(){var e=Object(L.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),e.prev=1,e.next=4,A.a.get("".concat("https://common-words.herokuapp.com","/getLanguages"));case 4:200===(t=e.sent).status&&y(t.data.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:T(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=Object(L.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T(!0),e.t0=t,e.next="english"===e.t0?4:"finnish"===e.t0?6:"french"===e.t0?8:"german"===e.t0?10:"hungarian"===e.t0?12:"italian"===e.t0?14:"polish"===e.t0?16:"romanian"===e.t0?18:"spanish"===e.t0?20:"turkish"===e.t0?22:24;break;case 4:return b("en"),e.abrupt("break",24);case 6:return b("fi"),e.abrupt("break",24);case 8:return b("fr"),e.abrupt("break",24);case 10:return b("de"),e.abrupt("break",24);case 12:return b("hu"),e.abrupt("break",24);case 14:return b("it"),e.abrupt("break",24);case 16:return b("pl"),e.abrupt("break",24);case 18:return b("ro"),e.abrupt("break",24);case 20:return b("es"),e.abrupt("break",24);case 22:return b("tr"),e.abrupt("break",24);case 24:return e.prev=24,e.next=27,A.a.get("".concat("https://common-words.herokuapp.com","/getLanguage?language=").concat(t));case 27:200===(n=e.sent).status&&s(n.data.data[0].list),e.next=34;break;case 31:e.prev=31,e.t1=e.catch(24),console.log(e.t1);case 34:T(!1);case 35:case"end":return e.stop()}}),e,null,[[24,31]])})));return function(t){return e.apply(this,arguments)}}(),ge=function(){var e=Object(L.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T(!0),e.t0=t,e.next="english"===e.t0?4:"finnish"===e.t0?6:"french"===e.t0?8:"german"===e.t0?10:"hungarian"===e.t0?12:"italian"===e.t0?14:"polish"===e.t0?16:"romanian"===e.t0?18:"spanish"===e.t0?20:"turkish"===e.t0?22:24;break;case 4:return O("en"),e.abrupt("break",24);case 6:return O("fi"),e.abrupt("break",24);case 8:return O("fr"),e.abrupt("break",24);case 10:return O("de"),e.abrupt("break",24);case 12:return O("hu"),e.abrupt("break",24);case 14:return O("it"),e.abrupt("break",24);case 16:return O("pl"),e.abrupt("break",24);case 18:return O("ro"),e.abrupt("break",24);case 20:return O("es"),e.abrupt("break",24);case 22:return O("tr"),e.abrupt("break",24);case 24:return e.prev=24,e.next=27,A.a.get("".concat("https://common-words.herokuapp.com","/getLanguage?language=").concat(t));case 27:200===(n=e.sent).status&&o(n.data.data[0].list),e.next=34;break;case 31:e.prev=31,e.t1=e.catch(24),console.log(e.t1);case 34:T(!1);case 35:case"end":return e.stop()}}),e,null,[[24,31]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){ue()}),[]),Object(a.useEffect)((function(){if(n.length>0&&l.length>0){var e=[].concat(Object($.a)(n),Object($.a)(l)).reduce((function(e,t){return e[t]=e[t]+1||1,e}),{});console.log(Object.keys(e)[23]);var t=Object.keys(e).filter((function(t){return e[t]>1})).map(String);R(t)}}),[n,l]),{selectedLanguage1:n,setSelectedLanguage1:s,selectedLanguage2:l,setSelectedLanguage2:o,loading:S,setLoading:T,blendedList:I,setBlendedList:R,languages:m,setLanguages:y,alert:V,setAlert:M,getFirstLanguage:be,getSecondLanguage:ge,languageCode1:u,setLanguageCode1:b,languageCode2:h,setLanguageCode2:O,lettersToIgnore:G,setLettersToIgnore:H,tableView:F,setTableView:U,minLength:ce,setMinLength:ie,maxLength:de,setMaxLength:je,filteredList:ne,setFilteredList:ae,suffixLetters:K,setSuffixLetters:Y,prefixLetters:Z,setPrefixLetters:_}},te=n(249),ne=n.n(te),ae=n(252),se=n.n(ae),re=n(254),ce=n.n(re),ie=n(253),le=n.n(ie),oe=n(250),de=n.n(oe),je=n(255),ue=n.n(je),be=n(251),ge=n.n(be),xe=(n(383),function(){var e=Object(a.useContext)(Le),t=e.findTheCommonWordsOfLanguages,n=e.appBuiltUsingMERN,s=e.developerAndCommunity,r=e.getInvolved,c=e.contribuitors;return Object(f.jsxs)("div",{id:"about-page-container",children:[Object(f.jsxs)(l.a,{id:"project-description-container",children:[Object(f.jsx)("h1",{children:t}),Object(f.jsxs)("div",{style:{display:"flex",color:"grey",alignItems:"center",justifyContent:"center"},children:[Object(f.jsxs)("div",{style:{color:"grey",display:"flex",flexDirection:"column",border:"1px solid lightgrey",padding:"8px"},children:[Object(f.jsx)("span",{style:{color:"#2f54eb",fontWeight:"bolder"},children:"ABC"})," ","PVBF AUX"," ",Object(f.jsx)("span",{style:{color:"#2f54eb",fontWeight:"bolder"},children:"DEF"})," ","IQYE"]}),Object(f.jsx)(y.a,{style:{fontSize:"2rem",margin:"0px 10px 0px 10px"}}),Object(f.jsxs)("div",{style:{color:"grey",display:"flex",flexDirection:"column",border:"1px solid lightgrey",padding:"8px"},children:["OQUE"," ",Object(f.jsx)("span",{style:{color:"#2f54eb",fontWeight:"bolder"},children:"ABC"})," ","KIYW JSU"," ",Object(f.jsx)("span",{style:{color:"#2f54eb",fontWeight:"bolder"},children:"DEF"})]})]}),Object(f.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(f.jsx)(ne.a,{style:{fontSize:"2rem",color:"grey"}})}),Object(f.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"column",color:"#2f54eb",marginLeft:"7px",fontWeight:"bolder",border:"1px solid lightgrey",padding:"8px"},children:[Object(f.jsx)("span",{children:"ABC"}),Object(f.jsx)("span",{children:"DEF"})]})})]}),Object(f.jsxs)(l.a,{id:"mern-container",children:[Object(f.jsx)("h1",{children:n}),Object(f.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[Object(f.jsxs)("div",{className:"technology-container",children:[Object(f.jsx)("a",{href:"https://www.mongodb.com/",style:{color:"#2f54eb"},children:"mongoDB"}),Object(f.jsx)(de.a,{style:{fontSize:"3rem",color:"grey"}})]}),Object(f.jsxs)("div",{className:"technology-container",children:[Object(f.jsx)("a",{href:"https://nodejs.dev/",style:{color:"#2f54eb"},children:"Node"}),Object(f.jsx)(ge.a,{style:{fontSize:"3rem",color:"grey"}})]}),Object(f.jsxs)("div",{className:"technology-container",children:[Object(f.jsx)("a",{href:"https://expressjs.com/",style:{color:"#2f54eb"},children:"Express"}),Object(f.jsx)(se.a,{style:{fontSize:"3rem",color:"grey"}})]}),Object(f.jsxs)("div",{className:"technology-container",children:[Object(f.jsx)("a",{href:"https://reactjs.org/",style:{color:"#2f54eb"},children:"React"}),Object(f.jsx)(le.a,{style:{fontSize:"3rem",color:"grey"}})]})]})]}),Object(f.jsxs)(l.a,{id:"developer-and-community-container",children:[Object(f.jsx)("h1",{children:s}),Object(f.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(f.jsx)(ce.a,{style:{fontSize:"1.5rem",color:"grey",marginRight:"10px"}}),Object(f.jsx)("div",{style:{color:"#2f54eb"},children:"chita.catalin.adrian@gmail.com"})]}),Object(f.jsx)("h2",{style:{fontWeight:100},children:r}),Object(f.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(f.jsx)(ue.a,{style:{fontSize:"1.5rem",color:"grey",marginRight:"10px"}}),Object(f.jsxs)("div",{style:{color:"#2f54eb"},children:["github.com/chita-catalin/common-words"," "]})]}),Object(f.jsx)("h2",{style:{fontWeight:100},children:c}),Object(f.jsx)("a",{href:"https://github.com/chita-catalin",style:{color:"#2f54eb"},children:"chita-catalin"})]})]})}),he=(n(384),function(){return Object(f.jsx)("div",{id:"tools-container",children:Object(f.jsx)(W.b,{to:"/tools/text-scraper",style:{textDecoration:"none"},children:Object(f.jsxs)(N.a,{variant:"contained",style:{fontSize:"16px",backgroundColor:"#393E46"},children:["TEXT SCRAPER",Object(f.jsx)(Z.a,{style:{fontSize:"18px",marginLeft:"2px"}})]})})})}),Oe=n(444),pe=n(445),fe=n(446),me=n(447),ye=n(448),ve=n(449),we=n(450),Se=n(432),Ce=n(182),Le=(n(385),n(386),n(387),s.a.createContext(null)),Te=s.a.createContext(null),ke=Se.a.Header,Ee=Se.a.Sider,Ae=Se.a.Content;var Ie=function(){var e=ee(),t=function(){var e=Object(a.useState)("english"),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)("COMMON WORDS"),c=Object(i.a)(r,2),l=c[0],o=c[1],d=Object(a.useState)("resources"),j=Object(i.a)(d,2),u=j[0],b=j[1],g=Object(a.useState)("about"),x=Object(i.a)(g,2),h=x[0],O=x[1],p=Object(a.useState)("changelog"),f=Object(i.a)(p,2),m=f[0],y=f[1],v=Object(a.useState)("START EXPLORING"),w=Object(i.a)(v,2),S=w[0],C=w[1],L=Object(a.useState)("Compare your language with another! Find the common words, and more fun statistics about languages, completely free!"),T=Object(i.a)(L,2),k=T[0],E=T[1],A=Object(a.useState)("tools"),I=Object(i.a)(A,2),R=I[0],N=I[1],W=Object(a.useState)("Select two languages!"),V=Object(i.a)(W,2),M=V[0],D=V[1],B=Object(a.useState)("Words per page"),F=Object(i.a)(B,2),U=F[0],z=F[1],P=Object(a.useState)("Words"),G=Object(i.a)(P,2),H=G[0],X=G[1],q=Object(a.useState)("Min. word length"),K=Object(i.a)(q,2),Y=K[0],J=K[1],Q=Object(a.useState)("Max. word length"),Z=Object(i.a)(Q,2),_=Z[0],$=Z[1],ee=Object(a.useState)("Word match (different letters)"),te=Object(i.a)(ee,2),ne=te[0],ae=te[1],se=Object(a.useState)("FIND THE COMMON WORDS OF LANGUAGES"),re=Object(i.a)(se,2),ce=re[0],ie=re[1],le=Object(a.useState)("DEVELOPER & COMMUNITY"),oe=Object(i.a)(le,2),de=oe[0],je=oe[1],ue=Object(a.useState)("GET INVOLVED!"),be=Object(i.a)(ue,2),ge=be[0],xe=be[1],he=Object(a.useState)("CONTRIBUTORS:"),Oe=Object(i.a)(he,2),pe=Oe[0],fe=Oe[1],me=Object(a.useState)("THIS WEB APP WAS BUILT USING THE MERN STACK"),ye=Object(i.a)(me,2),ve=ye[0],we=ye[1],Se=Object(a.useState)("Language word lists (all words)"),Ce=Object(i.a)(Se,2),Le=Ce[0],Te=Ce[1],ke=Object(a.useState)("English"),Ee=Object(i.a)(ke,2),Ae=Ee[0],Ie=Ee[1],Re=Object(a.useState)("Finnish"),Ne=Object(i.a)(Re,2),We=Ne[0],Ve=Ne[1],Me=Object(a.useState)("French"),De=Object(i.a)(Me,2),Be=De[0],Fe=De[1],Ue=Object(a.useState)("German"),ze=Object(i.a)(Ue,2),Pe=ze[0],Ge=ze[1],He=Object(a.useState)("Hungarian"),Xe=Object(i.a)(He,2),qe=Xe[0],Ke=Xe[1],Ye=Object(a.useState)("Italian"),Je=Object(i.a)(Ye,2),Qe=Je[0],Ze=Je[1],_e=Object(a.useState)("Polish"),$e=Object(i.a)(_e,2),et=$e[0],tt=$e[1],nt=Object(a.useState)("Romanian"),at=Object(i.a)(nt,2),st=at[0],rt=at[1],ct=Object(a.useState)("Spanish"),it=Object(i.a)(ct,2),lt=it[0],ot=it[1],dt=Object(a.useState)("Turkish"),jt=Object(i.a)(dt,2),ut=jt[0],bt=jt[1],gt=Object(a.useState)("Project created"),xt=Object(i.a)(gt,2),ht=xt[0],Ot=xt[1],pt=Object(a.useState)("Added basic language blending"),ft=Object(i.a)(pt,2),mt=ft[0],yt=ft[1],vt=Object(a.useState)("Added Italian,French,Finnish languages\nEnhanced results page.\nadded ".concat("changelog"," section.\nadded country flags.\nadded dark/light theme switch")),wt=Object(i.a)(vt,2),St=wt[0],Ct=wt[1],Lt=Object(a.useState)("Removed language lists from frontend side\nAdded about section\nRemoved light/dark theme switch\nEnhanced landing page UI\nUpdated versioning system to match web standards"),Tt=Object(i.a)(Lt,2),kt=Tt[0],Et=Tt[1],At=Object(a.useState)('Connected to Backend App\nNow retreiving languages list from database\nAdded not-yet-functional table to "blend-page"\nadded Romanian word list to "Resources" page'),It=Object(i.a)(At,2),Rt=It[0],Nt=It[1],Wt=Object(a.useState)("Added language switch RO/EN\nAdded more languages\nAdded language comparing functionality\nAdded tools section, with unique word extraction tool\nAdded languages list from database to resources page\nImproved general UI"),Vt=Object(i.a)(Wt,2),Mt=Vt[0],Dt=Vt[1];return Object(a.useEffect)((function(){switch(n){case"english":o("COMMON WORDS"),b("resources"),O("about"),y("changelog"),C("START EXPLORING"),E("Compare your language with another! Find the common words, and more fun statistics about languages, completely free!"),N("tools"),D("Select two languages!"),z("Words per page"),X("Words"),J("Min. word length"),$("Max. word length"),ae("Word Match (different letters)"),ie("FIND THE COMMON WORDS OF LANGUAGES"),je("DEVELOPER & COMMUNITY"),xe("GET INVOLVED!"),fe("CONTRIBUITORS:"),we("THIS WEB APP WAS BUILT USING THE MERN STACK"),Te("Language word lists (all words)"),Ie("English"),Ve("Finnish"),Fe("French"),Ge("German"),Ke("Hungarian"),Ze("Italian"),tt("Polish"),rt("Romanian"),ot("Spanish"),bt("Turkish"),Ot("Project created"),yt("Added basic language blending"),Ct("Added Italian,French,Finnish languages\nEnhanced results page.\nadded ".concat("changelog"," section.\nadded country flags.\nadded dark/light theme switch")),Et("Removed language lists from frontend side\nAdded about section\nRemoved light/dark theme switch\nEnhanced landing page UI\nUpdated versioning system to match web standards"),Nt('Connected to Backend App\nNow retreiving languages list from database\nAdded not-yet-functional table to "blend-page"\nadded Romanian word list to "Resources" page'),Dt("Added language switch RO/EN\nAdded more languages\nAdded language comparing functionality\nAdded tools section, with unique word extraction tool\nAdded languages list from database to resources page\nImproved general UI");break;case"romanian":o("CUVINTE COMUNE"),b("resurse"),O("despre"),y("istoric schimbari"),C("EXPLOREAZ\u0102"),E("Compar\u0103 limba ta cu alt\u0103 limb\u0103! G\u0103se\u0219te cuvintele comune, \u0219i alte statistici interesante despre limbi, complet gratuit!"),N("unelte"),D("Selecteaz\u0103 dou\u0103 limbi diferite!"),z("Cuvinte pe pagin\u0103"),X("Cuvinte"),J("Lungime minim\u0103"),$("Lungime maxim\u0103"),ae("Potrivire cuvinte (litere diferite)"),ie("G\u0102SE\u0218TE CUVINTELE COMUNE ALE LIMBILOR"),je("DEZVOLTATOR & COMUNITATE"),xe("IMPLIC\u0102-TE!"),fe("CONTRIBUITORI:"),we("ACEAST\u0102 APLICA\u021aIE WEB A FOST DEZVOLTAT\u0102 FOLOSIND STACK-UL MERN"),Te("Listele de cuvinte ale limbilor (toate cuvintele)"),Ie("Englez\u0103"),Ve("Finlandez\u0103"),Fe("Francez\u0103"),Ge("German\u0103"),Ke("Maghiar\u0103"),Ze("Italian\u0103"),tt("Polonez\u0103"),rt("Rom\xe2n\u0103"),ot("Spaniol\u0103"),bt("Turc\u0103"),Ot("\xcenceput proiect"),yt("Ad\u0103ugat algoritm de combinare a limbilor"),Ct('Ad\u0103ugat Italian\u0103, Francez\u0103, Finlandez\u0103\n\xcembun\u0103t\u0103\u021bit pagina de rezultate\nAd\u0103ugat sec\u021biune de "istoric schimb\u0103ri"\nAd\u0103ugat steaguri pentru \u021b\u0103ri\nAd\u0103ugat buton pentru tem\u0103 light/dark'),Et('\xcenl\u0103turat listele de cuvinte din Frontend\nAd\u0103ugat sec\u021biunea "despre"\n\xcenl\u0103turat butonul pentru tem\u0103 light/dark\n\xcembun\u0103t\u0103\u021bit UI-ul paginii de pornire\nUpdatat sistemul de versionare cu standardul web'),Nt("Conectat aplica\u021bia web la Backend\nListele de limbi acum sunt preluate dintr-o baz\u0103 de date\nAd\u0103ugat tabel de cuvinte, \xeenc\u0103 nefunc\u021bional\nAd\u0103ugat lista cuvintelor din limba rom\xe2n\u0103 la pagina de resurse "),Dt("Ad\u0103ugat func\u021bia de schimbare de limb\u0103\nAd\u0103ugat mai multe limbi\nAd\u0103ugat func\u021bia de comparare a limbilor\nAd\u0103ugat sec\u021biunea de unelte\nAd\u0103ugat unealta de extragere a cuvintelor unice\nAd\u0103ugat liste de limbi la pagina de resurse\n\xcembun\u0103t\u0103\u021bit UI general")}}),[n]),{language:n,setLanguage:s,commonWords:l,resources:u,about:h,changelog:m,startExploring:S,landingPageText:k,tools:R,selectTwoLanguages:M,wordsPerPage:U,words:H,minWordLength:Y,maxWordLength:_,findTheCommonWordsOfLanguages:ce,developerAndCommunity:de,getInvolved:ge,contribuitors:pe,appBuiltUsingMERN:ve,wordMatch:ne,languageWordList:Le,english:Ae,finnish:We,french:Be,german:Pe,hungarian:qe,italian:Qe,polish:et,romanian:st,spanish:lt,turkish:ut,update1:ht,update2:mt,update3:St,update4:kt,update5:Rt,update6:Mt}}(),n=Object(a.useState)(!1),s=Object(i.a)(n,2),r=s[0],c=s[1];return Object(f.jsx)(Le.Provider,{value:t,children:Object(f.jsx)(Te.Provider,{value:e,children:Object(f.jsx)(W.a,{children:Object(f.jsxs)(Se.a,{children:[Object(f.jsx)(Ee,{trigger:null,collapsible:!0,collapsed:r,children:Object(f.jsxs)(Ce.a,{style:{paddingTop:"60px",minHeight:"100vh",height:"100%"},theme:"light",mode:"inline",defaultSelectedKeys:["0"],children:[Object(f.jsx)(Ce.a.Item,{children:Object(f.jsxs)(W.b,{to:"/",children:[Object(f.jsx)(Oe.a,{}),Object(f.jsx)("span",{children:"Explore"})]})},"0"),Object(f.jsx)(Ce.a.Item,{children:Object(f.jsxs)(W.b,{to:"/language-blend",children:[Object(f.jsx)(y.a,{})," ",Object(f.jsx)("span",{children:"Compare languages"})]})},"1"),Object(f.jsx)(Ce.a.Item,{children:Object(f.jsxs)(W.b,{to:"/tools",children:[Object(f.jsx)(pe.a,{})," ",Object(f.jsx)("span",{children:t.tools})]})},"2"),Object(f.jsx)(Ce.a.Item,{children:Object(f.jsxs)(W.b,{to:"/resources",children:[Object(f.jsx)(fe.a,{})," ",Object(f.jsx)("span",{children:t.resources})]})},"3"),Object(f.jsx)(Ce.a.Item,{children:Object(f.jsxs)(W.b,{to:"/about",children:[Object(f.jsx)(me.a,{})," ",Object(f.jsx)("span",{children:t.about})]})},"4"),Object(f.jsx)(Ce.a.Item,{children:Object(f.jsxs)(W.b,{to:"/changelog",children:[Object(f.jsx)(ye.a,{})," ",Object(f.jsx)("span",{children:t.changelog})]})},"5")]})}),Object(f.jsxs)(Se.a,{className:"site-layout",children:[Object(f.jsxs)(ke,{className:"site-layout-background",style:{padding:0,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r?Object(f.jsx)(ve.a,{className:"trigger",onClick:function(){return c(!r)}}):Object(f.jsx)(we.a,{className:"trigger",onClick:function(){return c(!r)}}),Object(f.jsxs)("div",{id:"title",children:[Object(f.jsx)(W.b,{to:"/",style:{textDecoration:"none",color:"black"},children:t.commonWords}),Object(f.jsx)("span",{style:{fontSize:"15px",marginLeft:"2px"},children:"V1.0.0"})]}),Object(f.jsxs)(o.a,{style:{marginRight:"24px"},defaultValue:"english",bordered:!1,onChange:function(e){return t.setLanguage(e)},children:[Object(f.jsx)(o.a.Option,{value:"english",children:t.english}),Object(f.jsx)(o.a.Option,{value:"romanian",children:t.romanian})]})]}),Object(f.jsx)(Ae,{className:"site-layout-background",style:{margin:"24px 16px",padding:12,minHeight:280},children:Object(f.jsxs)(k.c,{children:[Object(f.jsx)(k.a,{path:"/language-blend",element:Object(f.jsx)(w,{})}),Object(f.jsx)(k.a,{path:"/resources",element:Object(f.jsx)(M,{})}),Object(f.jsx)(k.a,{path:"/resources/:language",element:Object(f.jsx)(I,{})}),Object(f.jsx)(k.a,{path:"/changelog",element:Object(f.jsx)(D,{})}),Object(f.jsx)(k.a,{path:"/more-statistics",element:Object(f.jsx)(V,{})}),Object(f.jsx)(k.a,{path:"/more-details",element:Object(f.jsx)(J,{})}),Object(f.jsx)(k.a,{path:"/about",element:Object(f.jsx)(xe,{})}),Object(f.jsx)(k.a,{path:"/",element:Object(f.jsx)(_,{})}),Object(f.jsx)(k.a,{path:"*",element:Object(f.jsx)(K,{})}),Object(f.jsx)(k.a,{path:"/tools",element:Object(f.jsx)(he,{})}),Object(f.jsx)(k.a,{path:"/tools/text-scraper",element:Object(f.jsx)(q,{})})]})})]})]})})})})};c.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(Ie,{})}),document.getElementById("root"))}},[[394,1,2]]]);
//# sourceMappingURL=main.27541973.chunk.js.map