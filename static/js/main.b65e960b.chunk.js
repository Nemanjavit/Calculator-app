(this["webpackJsonptip-calculator-app"]=this["webpackJsonptip-calculator-app"]||[]).push([[0],{19:function(e,t,c){},35:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(1),l=c.n(n),s=c(14),a=c.n(s),i=(c(19),c(9)),r=c(8),j=c(5),o=c(2),b=(c(35),c(0)),d=function(e){var t=e.name,c=e.clickHandler;return Object(b.jsx)(o.Col,{xs:6,md:6,lg:6,xl:4,style:{padding:"5px"},children:Object(b.jsx)("button",{onClick:c,className:"button",children:t})})},p=function(e){var t=e.className;return Object(b.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"11",height:"17",children:Object(b.jsx)("path",{fill:"#9EBBBD",d:"M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"})})},u=function(){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"16",children:Object(b.jsx)("path",{fill:"#9EBBBD",d:"M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"})})},x=function(e){var t=e.label,c=e.name,n=e.id,l=e.message,s=e.changeHandler,a=e.value,i=e.style,r=e.placeHolder;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("label",{htmlFor:n,children:t}),"custom"===c?"":Object(b.jsx)("span",{className:"warning",children:l}),"bill"===n&&Object(b.jsx)(p,{}),"person"===n&&Object(b.jsx)(u,{}),Object(b.jsx)("input",{id:n,type:"number",name:c,onChange:s,value:a,className:i,placeholder:r})]})};var O=function(){var e=Object(n.useState)({bill:"",people:"",custom:""}),t=Object(j.a)(e,2),c=t[0],l=t[1],s=Object(n.useState)(0),a=Object(j.a)(s,2),u=a[0],O=a[1],h=Object(n.useState)(""),m=Object(j.a)(h,2),v=m[0],g=m[1],f=Object(n.useState)(!1),N=Object(j.a)(f,2),C=N[0],w=N[1],H=Object(n.useState)(0),I=Object(j.a)(H,2),_=I[0],k=I[1];Object(o.setConfiguration)({breakpoints:[576,768,992,1200,1400]});var F=function(e){l(Object(r.a)(Object(r.a)({},c),{},Object(i.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){S(),B()}),[c.custom,c.bill,c.people]);var S=function(){var e=parseInt(c.custom);if(e){var t=e/100*parseInt(c.bill)/parseInt(c.people);console.log("sad");var n=(e/100*parseInt(c.bill)+parseInt(c.bill))/parseInt(c.people);k(n.toFixed(2)),O(t.toFixed(2)),w(!0)}},y=function(e){l(Object(r.a)(Object(r.a)({},c),{},{custom:""}));var t=e/100*parseInt(c.bill)/parseInt(c.people),n=(e/100*parseInt(c.bill)+parseInt(c.bill))/parseInt(c.people);k(n.toFixed(2)),O(t.toFixed(2)),w(!0)},B=function(){""===c.people||0===c.people?g("Can't be zero"):g("")};return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(o.Container,{children:[Object(b.jsxs)("h1",{className:"app__heading",children:["SPLI",Object(b.jsx)("br",{}),"TTER"]}),Object(b.jsxs)(o.Row,{className:"main",children:[Object(b.jsx)(o.Col,{xs:12,md:12,lg:12,xl:12,xxl:6,children:Object(b.jsxs)("div",{className:"input__section",children:[Object(b.jsx)("div",{className:"input__wrapper",children:Object(b.jsx)(x,{id:"bill",label:"Bill",name:"bill",changeHandler:F,value:c.bill,style:"input",placeHolder:"0"})}),Object(b.jsx)("h4",{className:"button__section__heading",children:"Select Tip %"}),Object(b.jsxs)(o.Row,{className:"button__section",children:[Object(b.jsx)(d,{clickHandler:function(){return y(5)},name:"5%"}),Object(b.jsx)(d,{clickHandler:function(){return y(10)},name:"10%"}),Object(b.jsx)(d,{clickHandler:function(){return y(15)},name:"15%"}),Object(b.jsx)(d,{clickHandler:function(){return y(25)},name:"25%"}),Object(b.jsx)(d,{clickHandler:function(){return y(50)},name:"50%"}),Object(b.jsx)(o.Col,{xs:6,md:6,lg:6,xl:4,children:Object(b.jsx)(x,{style:"input customInput",id:"customInput",name:"custom",placeHolder:"Custom",value:c.custom,changeHandler:F})})]}),Object(b.jsx)("div",{className:"input__wrapper person",children:Object(b.jsx)(x,{id:"person",name:"people",label:"Number of People",changeHandler:F,value:c.people,style:"input",message:v,placeHolder:"0"})})]})}),Object(b.jsx)(o.Col,{xs:12,md:12,lg:12,xl:12,xxl:6,children:Object(b.jsxs)("div",{className:"display__section",children:[Object(b.jsxs)(o.Row,{justify:"center",style:{flexGrow:1},children:[Object(b.jsx)(o.Col,{sm:12,children:Object(b.jsxs)(o.Row,{align:"center",children:[Object(b.jsx)(o.Col,{xs:4,children:Object(b.jsxs)("div",{className:"amount",children:[Object(b.jsx)("h3",{children:"Tip Amount"}),Object(b.jsx)("p",{children:"/person"})]})}),Object(b.jsx)(o.Col,{xs:8,children:Object(b.jsxs)("h2",{children:[Object(b.jsx)(p,{className:"tipSvg"}),isNaN(u)||!isFinite(u)?0:u]})})]})}),Object(b.jsx)(o.Col,{sm:12,children:Object(b.jsxs)(o.Row,{align:"center",children:[Object(b.jsx)(o.Col,{xs:4,children:Object(b.jsxs)("div",{className:"amount",children:[Object(b.jsx)("h3",{children:"Total"}),Object(b.jsx)("p",{children:"/person"})]})}),Object(b.jsx)(o.Col,{xs:8,children:Object(b.jsxs)("h2",{children:[Object(b.jsx)(p,{className:"tipSvg"}),isNaN(_)||!isFinite(_)?0:_]})})]})})]}),Object(b.jsx)("button",{className:"resetButton ".concat(C?"btn-active":""),onClick:C?function(){l({bill:"",people:"",custom:""}),O(""),w(!1),k(""),console.log("click")}:null,children:"RESET"})]})})]})]})})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,n=t.getFID,l=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),l(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),h()}},[[37,1,2]]]);
//# sourceMappingURL=main.b65e960b.chunk.js.map