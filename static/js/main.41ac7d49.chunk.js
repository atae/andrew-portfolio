(this["webpackJsonpandrews-hot-ass-portfolio-site"]=this["webpackJsonpandrews-hot-ass-portfolio-site"]||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/Andrew-Photo-Cropped.e950cb73.jpg"},26:function(e,t,a){e.exports=a.p+"static/media/RaiseMe Messaging Screenshot.cf682f7d.png"},29:function(e,t,a){e.exports=a(63)},34:function(e,t,a){},35:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(15),r=a.n(c),i=(a(34),a(10)),s=(a(35),a(6));function l(e){var t=e.background,a=e.text,n=e.position,c=e.onClick,r=e.expanded,i=e.clicked,l=e.pageName,m=i?"clicked":"";return o.a.createElement("div",{className:"splash-link ".concat(n,"-position ").concat(r," ").concat(m)},o.a.createElement(s.b,{to:"/".concat(l,"/about")},o.a.createElement("button",{onClick:c,className:"".concat(t,"-background ").concat(m)},o.a.createElement("h2",{className:"".concat(i?"fadeOut":"fadeIn"," ").concat(l," page-name")},a))))}var m=a(1);function u(e){var t=e.currentLink,a=e.changeCurrentLink,c=Object(m.f)();Object(n.useEffect)((function(){"/"===c.pathname&&a("home")}),[c]);var r=[{background:"green",text:"Software Engineer",pageName:"engineer"},{background:"white",text:"Musician",pageName:"music"},{background:"orange",text:"Nerd",pageName:"nerd"}];return o.a.createElement("div",{className:"splash-links"},r.map((function(e,n){return o.a.createElement(l,{background:e.background,text:e.text,position:n,onClick:(r=e.pageName,function(){"home"===t&&a(r)}),clicked:e.pageName===t,pageName:e.pageName,currentLink:t,expanded:(c=e.pageName,"home"===t?"unexpanded":c===t?"expanded":"flat"),key:"splashLink".concat(n)});var c,r})))}function p(e){var t=e.currentLink,a=e.pageInfo,n={home:[],engineer:[{pageName:"about",text:"About"},{pageName:"portfolio",text:"Portfolio"},{pageName:"contact",text:"Contact"}],music:[{pageName:"about",text:"About"},{pageName:"discography",text:"Discography"},{pageName:"transcriptions",text:"Sheet Music"},{pageName:"contact",text:"Contact"}],nerd:[{pageName:"about",text:"About"},{pageName:"japanese",text:"\u65e5\u672c\u8a9e"},{pageName:"gaming",text:"Gaming"},{pageName:"blog",text:"Blog"}]},c=Object(m.f)().pathname.split("/")[2];return o.a.createElement("nav",{className:"navbar-container ".concat("home"===t?"fadeOut":"fadeIn")},o.a.createElement("ul",{className:"navbar-list ".concat(a.pageColor,"-background-font")},n[t].map((function(e){return o.a.createElement("li",null,o.a.createElement(s.b,{className:e.pageName===c?"active":"",to:"/".concat(t,"/").concat(e.pageName)},e.text))}))))}var g=a(25),h=a.n(g);function d(e){var t=e.currentLink,a=e.changeCurrentLink,n={home:{pageColor:"",title:""},engineer:{pageColor:"green",title:"Software Engineer"},music:{pageColor:"white",title:"Musician"},nerd:{pageColor:"orange",title:"Nerd"}},c="engineer"===t?"white":n[t].pageColor;return o.a.createElement("header",{className:"header ".concat(n[t].pageColor,"-background-font")},o.a.createElement("div",{className:"info-container"},o.a.createElement("div",{className:"andrew-head-cropper"},"home"!==t&&o.a.createElement("p",{className:"".concat(c,"-background-font")},"Back"),o.a.createElement(s.b,{to:"/",className:"home"===t?"disable-link":"",onClick:function(){a("home")}},o.a.createElement("img",{className:"andrew-head ".concat("home"===t?"":"clickable"),src:h.a}))),o.a.createElement("div",{className:"andrew-title"},o.a.createElement("h1",null,"Andrew Tae"),o.a.createElement("div",{className:"home"===t?"title-placeholder":""}),o.a.createElement("h2",{className:"home"===t?"fadeOut":"fadeIn"},n[t].title))),o.a.createElement(p,{pageInfo:n[t],currentLink:t}))}var b=a(26),f=a.n(b),E=a(27);function v(e){var t=e.content,a=e.pageColor;return o.a.createElement("div",{className:"about-container ".concat(a,"-background-font")},o.a.createElement("h1",null,t.title),o.a.createElement("div",{className:"about"},o.a.createElement("div",{className:"profile"},o.a.createElement("div",{className:"about-image-cropper"},o.a.createElement("img",{className:"about-image",src:t.image})),o.a.createElement("div",{className:"skills"},o.a.createElement("h2",null,"Skills"),Object.keys(t.skills).map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",null,o.a.createElement("span",null,e," "),t.skills[e].join(", ")))})))),o.a.createElement("div",{className:"content"},t.text.map((function(e){return o.a.createElement("p",null,e)})))))}var w=a(28),k=a(11),y=a.n(k);function C(e){var t=e.pageColor,a=e.content,c=Object(n.useRef)(),r=Object(n.useState)(""),s=Object(i.a)(r,2),l=s[0],m=s[1],u=Object(n.useState)(""),p=Object(i.a)(u,2),g=p[0],h=p[1],d=Object(n.useState)(""),b=Object(i.a)(d,2),f=b[0],E=b[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"".concat(t,"-background-font")}),o.a.createElement("div",{className:"contact-methods"},a.map((function(e){var t=e.contact;return"email"===e.type?t="mailto:".concat(t):"phone"===e.type&&(t="tel:".concat(t)),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t},e.type)}))),o.a.createElement("div",{id:"contact",class:"contact-form container ".concat(t,"-background-contact")},o.a.createElement("form",{ref:c,onSubmit:function(e){e.preventDefault(),w.a.sendForm("service_eqju8ub","template_01tobvm",c.current,"UFjtnoCbo0vw-FCiw").then((function(e){!function(e){y()("Email sent! ".concat(e))}(e.text),console.log(e.text),E(""),h(""),m("")}),(function(e){!function(e){y()("Email sending failed! ".concat(e))}(e.text),console.log(e.text)}))}},o.a.createElement("label",{class:"".concat(t,"-background-font")},"Name"),o.a.createElement("input",{type:"text",name:"user_name",value:l,onChange:function(e){return m(e.target.value)}}),o.a.createElement("label",{class:"".concat(t,"-background-font")},"Email"),o.a.createElement("input",{type:"email",name:"user_email",value:g,onChange:function(e){return h(e.target.value)}}),o.a.createElement("label",{class:"".concat(t,"-background-font")},"Message"),o.a.createElement("textarea",{name:"message",value:f,onChange:function(e){return E(e.target.value)}}),o.a.createElement("div",{class:"contact-button-container"},o.a.createElement("button",{id:"contact-submit",type:"submit",value:"Send"},o.a.createElement("p",null,"Submit"))))),o.a.createElement(k.Toaster,null))}function N(e){var t=e.pageColor,a=e.content;return o.a.createElement(C,{pageColor:t,content:a})}var x=function(e){var t=e.link,a=e.text;return o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t},a)};function S(e){var t=e.data,a=e.pageColor;t.soundWarning;return o.a.createElement("div",{className:"card ".concat(a,"-background-card")},o.a.createElement("div",{className:"info"},o.a.createElement("img",{src:t.image}),o.a.createElement("h2",null,t.name),o.a.createElement("h3",null,t.shortDescription," ",o.a.createElement("br",null),o.a.createElement("span",null,"(",t.date,")")),o.a.createElement("h4",null,t.tech.join(", "))),o.a.createElement("div",{className:"links"},t.liveUrl&&o.a.createElement(x,{link:t.liveUrl,text:"live"}),t.liveUrl&&t.githubUrl&&o.a.createElement("span",null," | "),t.githubUrl&&o.a.createElement(x,{link:t.githubUrl,text:"github"}),t.albumUrl&&o.a.createElement(x,{link:t.albumUrl,text:"link"})))}function A(e){var t=e.pageColor,a=e.content;return o.a.createElement("div",{className:"portfolio ".concat(t,"-background-font")},a.map((function(e){return o.a.createElement(S,{data:e,pageColor:t})})))}function U(e){var t=e.type,a=e.match,c=e.changeCurrentLink,r=Object(m.f)();Object(n.useEffect)((function(){c(r.pathname.split("/")[1])}),[r]);var i={engineer:{pageColor:"green",about:{title:"",text:["I'm a fullstack software engineer and UI/UX Javascript specialist (ES6/React/Redux).","I do my best work in environments where I know that my code is making a positive impact in the world.","My passion is in creating beautiful and performant web experiences.","My extensive experience in web pages for marketing campaigns has served to hone my ability to break down real problems into easy-to-understand actionable tasks."],skills:{"Front-end":["React","Redux","Vanilla ES6","Karma/Enzyme/Mocha Unit Testing","HTML5","CSS3","SCSS","CSS Animations"],"Back-end":["Ruby on Rails","Rspec","Node","Express","MongoDB","PostgreSQL"],Other:["Responsive Web Design","AWS","Terraform","Heroku","Git"]},image:"https://avatars2.githubusercontent.com/u/10753609?s=460&u=474d9f32aa1c0dd5beaaac5619048b0cbac2e257&v=4"},portfolio:[{name:"PayPal Shopping Hub",date:"2022",shortDescription:"Customer Portal for PayPal Shopping",tech:["React","GraphQl"],liveUrl:"https://www.paypal.com/shopping",image:"https://i.gyazo.com/437942a0a6550533d9ad8b08abb671b0.gif"},{name:"Portfolio Site",date:"2020",shortDescription:"The site you're on now!",tech:["React","Node"],image:"https://i.gyazo.com/c4e865405d4741027e9e4148c44a5ebc.gif",liveUrl:"https://www.andrewtae.com",githubUrl:"https://github.com/atae/andrews-hot-ass-portfolio-site/"},{name:"RaiseMe Bulk Messaging",shortDescription:"College/Student Bulk Message System",date:"2019",description:[],tech:["AWS SES","React","Redux","Ruby on Rails"],image:f.a,liveUrl:"",githubUrl:""},{name:"RaiseMe B2B Marketing Pages",date:"2019",shortDescription:"Beautiful Landing Pages for B2B Clients",description:[],tech:["HTML, CSS, JS","AWS Cloudfront"],image:"https://i.gyazo.com/2739a6675f9c9f9e2a7dfcc4f8968c68.gif",liveUrl:"https://www.raise.me/college/overview",githubUrl:""},{name:"Hiyoko Jisho",date:"2018",shortDescription:"Japanese Dictionary based on Heisig's RTK",description:[],tech:["React","jisho.org API","Fuzzy"],image:"https://i.gyazo.com/29a17fa248dd34fb374a0459c57a000f.gif",liveUrl:"https://www.hiyokojisho.com",githubUrl:"https://github.com/atae/jisho-word-builder"},{name:"Veritas Customer Success",date:"2018",shortDescription:"Explore Veritas Customer Stories",description:["A one-off application to allow users to search and filter through hundreds of Veritas customers.","This project involved creating a custom API endpoint into the Adobe Experience Manager CMS to access our customer data from the frontend dynamically."],tech:["React","Adobe Experience Manager","API Design"],image:"https://i.gyazo.com/33d2c354bce1bd00e39d74f7d5845724.gif",liveUrl:"",githubUrl:""},{name:"Beautiful Typing",date:"2017",shortDescription:"Modern Arcade-Style Typing Game ",description:[],tech:["jQuery","HTML","CSS","JS","Canvas"],image:"https://raw.githubusercontent.com/atae/andrew-portfolio/master/images/beautiful_typing.gif",liveUrl:"https://atae.github.io/BeautifulTyping/beauTypin.html",githubUrl:"https://github.com/atae/BeautifulTyping",soundWarning:!0},{name:"Major9",date:"2017",shortDescription:"Musical Storefront for Japanese Jazz",description:["Full stack project created during my time at App Academy","It's a Bandcamp clone that I used to host my favorite japanese jazz artists","I'm just happy that it still works to this day"],tech:["React","Ruby on Rails","PostgreSQL"],image:"https://raw.githubusercontent.com/atae/andrew-portfolio/master/images/major9_home.gif",liveUrl:"",githubUrl:"https://github.com/atae/major9"}],contact:[{type:"email",icon:"",contact:"andrewtae368@gmail.com"},{type:"phone",icon:"",contact:"(408) 929-0138"},{type:"github",icon:"",contact:"https://www.github.com/atae"},{type:"linkedin",icon:"",contact:"https://www.linkedin.com/in/andrew-tae"}]},music:{pageColor:"white",about:{title:"DJ\u6700\u30c6\u30fc / DJ SaiTae",text:["I started playing Guitar in 2005 but I am now a composer first, instrumentalist second.","My first songs were from Katamari Damacy and Gitaroo Man, and it's only gotten better/worse from there.","I love any song with a complex harmony and everything I write tends to reflect my anime/video game upbringing, so I lean into it as much as I can."],skills:{Instruments:["Guitar","Bass","Drums","Piano","FL Studio"],Genres:["Funk","Hard Rock","Neo Soul","Japanese Jazz Fusion","Bossa Nova","Metal","Anime/Game BGM"],Other:["Transcription","Fingerstyle Arrangements","Improvisation"]},image:"https://raw.githubusercontent.com/atae/andrew-portfolio/master/images/Tae_Andrew_19-08-01_1072.jpg"},portfolio:[{name:"Call It A Jam in Liyue",date:"2021",shortDescription:"YoMusic Music Composition Contest",description:[],tech:[],image:"https://i.ytimg.com/an_webp/vsWcA03C1Pc/mqdefault_6s.webp?du=3000&sqp=CM-A5ZwG&rs=AOn4CLBImMqOLg-cyActKnjpbLv1ZGIBmQ",albumUrl:"https://www.hoyolab.com/article/4656590"},{name:"Kleepocalypse",date:"2021",shortDescription:"YoMusic Music Composition Contest",description:[],tech:[],image:"https://i.ytimg.com/an_webp/vkFvACmvn6s/mqdefault_6s.webp?du=3000&sqp=COyE5ZwG&rs=AOn4CLCLVDYCAgoxcaNU_edpSiCifXO44Q",albumUrl:"https://www.hoyolab.com/article/4656506"},{name:"Sambanomiya",date:"2021",shortDescription:"YoMusic Music Composition Contest",description:[],tech:[],image:"https://i.ytimg.com/an_webp/WzLTnAId6nE/mqdefault_6s.webp?du=3000&sqp=CLH55JwG&rs=AOn4CLCj7wFZ2GE9SE5X5xOPXp-G8-kDDw",albumUrl:"https://www.hoyolab.com/article/4658068"},{name:"Glory Days (~\u6804\u67af\u76db\u8870~)",date:"2020",shortDescription:"DJMAX Remix Contest - 4th Place",description:["Won 4th place in a remix contest for one of my favorite music games DJMAX"],tech:[],image:"https://i.ytimg.com/vi/zU_iBdlb5UY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBxl3Q_sT_TwlB6wFU-04_mTClKg",albumUrl:"https://www.youtube.com/watch?v=zU_iBdlb5UY"},{name:"coloUrs and mayhem: Universe A & B",date:"2012",shortDescription:"Iron Knight (Track 17) and Violet Prince (Track 24)",description:["Earned a couple spots on the official Homestuck fan album","First time a bunch of people have heard my songs and helped me realize that maybe my music doesn't suck that much"],tech:[],image:"https://f4.bcbits.com/img/a0169239261_16.jpg",albumUrl:"https://homestuck.bandcamp.com/album/colours-and-mayhem-universe-a-b"}],contact:[{type:"email",icon:"",contact:"djsaitae@gmail.com"}]},nerd:{pageColor:"orange",about:{title:"About",text:[" It's nerd"],skills:[""],image:"https://avatars2.githubusercontent.com/u/10753609?s=460&u=474d9f32aa1c0dd5beaaac5619048b0cbac2e257&v=4"}}},s=function(){return o.a.createElement(A,{pageColor:i[t].pageColor,content:i[t].portfolio})};return o.a.createElement("div",{className:"page-container"},o.a.createElement("div",{className:"page"},o.a.createElement(E.CSSTransitionGroup,{key:r.key,classNames:"fade",timeout:300},o.a.createElement(m.c,{location:r},o.a.createElement(m.a,{path:"/nerd/*",component:function(){return o.a.createElement("h2",{className:"orange-background-font"},"Under Construction")}}),o.a.createElement(m.a,{path:"".concat(a.path,"/about"),component:function(){return o.a.createElement(v,{pageColor:i[t].pageColor,content:i[t].about})}}),o.a.createElement(m.a,{path:"".concat(a.path,"/contact"),component:function(){return o.a.createElement(N,{pageColor:i[t].pageColor,content:i[t].contact})}}),o.a.createElement(m.a,{path:"".concat(a.path,"/portfolio"),component:s}),o.a.createElement(m.a,{path:"".concat(a.path,"/discography"),component:s}),o.a.createElement(m.a,{path:"".concat(a.path,"/transcriptions"),component:function(){return o.a.createElement("h2",{className:"white-background-font"},"Under Construction")}})))))}var j=function(){var e=Object(m.f)().pathname.split("/")[1],t=Object(n.useState)(e||"home"),a=Object(i.a)(t,2),c=a[0],r=a[1],s=function(e,t){return o.a.createElement(U,{match:t,type:e,changeCurrentLink:r})};return o.a.createElement("div",{className:"App"},o.a.createElement(d,{currentLink:c,changeCurrentLink:r}),o.a.createElement(u,{currentLink:c,changeCurrentLink:r}),o.a.createElement(m.c,null,o.a.createElement(m.a,{path:"/engineer",component:function(e){var t=e.match;return s("engineer",t)}}),o.a.createElement(m.a,{path:"/music",component:function(e){var t=e.match;return s("music",t)}}),o.a.createElement(m.a,{path:"/nerd",component:function(e){var t=e.match;return s("nerd",t)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s.a,{basename:"/"},o.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.41ac7d49.chunk.js.map