(this["webpackJsonptop-trumps"]=this["webpackJsonptop-trumps"]||[]).push([[0],{23:function(t,n,e){t.exports=e(34)},34:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(19),c=e.n(o),u=e(2),i=e(5),d=e.n(i),l=e(10),s="768px",p="1024px",g={mobile:"(min-width: ".concat("320px",")"),tablet:"(min-width: ".concat(s,")"),desktop:"(min-width: ".concat(p,")")},f="#ffffff",b="#000000",m="#333333",h="#DDDDDD",v={gameState:{win:{text:"#546940",background:"#B5EAD7"},lose:{text:"#8A0000",background:"#FF9AA2"},draw:{text:b,background:"#FFFFD1"},unplayed:{text:m,background:f}},user:{background:"#A5D6F7",backgroundImage:"",scoreColor:b,frontFace:{background:f,textColor:b,categoryBackground:f,categoryBackgroundHover:h},backFace:{background:f,innerBackgroundColor:f,innerBackgroundImage:"",avatarIconColor:m}},computer:{background:"#FFDAC1",backgroundImage:"",scoreColor:b,frontFace:{background:f,textColor:b,categoryBackground:f,categoryBackgroundHover:h},backFace:{background:f,innerBackgroundColor:f,innerBackgroundImage:"",avatarIconColor:m}}},y=e(3);function x(){var t=Object(y.a)(["\n\tpadding: 0 8px;\n"]);return x=function(){return t},t}function O(){var t=Object(y.a)(["\n\tfont-weight: 700;\n"]);return O=function(){return t},t}function k(){var t=Object(y.a)(["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tpadding: 8px;\n\tcolor: ",";\n"]);return k=function(){return t},t}function j(){var t=Object(y.a)(["\n\tdisplay: flex;\n\theight: 100%;\n\tposition: relative;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground: ",";\n\tbackground-image: url(",");\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\n\t@media "," {\n\t\tpadding: 0;\n\t\talign-items: center;\n\t}\n"]);return j=function(){return t},t}var w=u.d.div(j(),(function(t){var n=t.theme,e=t.type;return d.a.get(n,[e,"background"])}),(function(t){return d.a.get(t.theme,[t.type,"backgroundImage"],"")}),g.tablet),C=u.d.span(k(),(function(t){var n=t.theme,e=t.type;return d.a.get(n,[e,"scoreColor"])})),E=u.d.label(O()),R=u.d.span(x()),F=function(t){var n=t.children,e=t.type,r=t.score;return a.a.createElement(w,{type:e},a.a.createElement(C,{type:e},a.a.createElement(E,null,"Score:"),a.a.createElement(R,null,r)),n)},A=e(7),B=e(6),D={user:B.e,computer:B.b};function z(){var t=Object(y.a)(["\n\tfont-size: 14px;\n\tline-height: 16px;\n\tfont-weight: 600;\n"]);return z=function(){return t},t}function I(){var t=Object(y.a)(["\n\tpadding: 0 8px;\n\ttext-align: right;\n\tfont-size: 14px;\n"]);return I=function(){return t},t}function S(){var t=Object(y.a)(["\n\theight: 32px;\n\twidth: 32px;\n\tfont-size: 32px;\n\n\t@media "," {\n\t\theight: 48px;\n\t\twidth: 48px;\n\t\tfont-size: 48px;\n\t}\n"]);return S=function(){return t},t}function T(){var t=Object(y.a)(["\n\tdisplay: flex;\n\tcolor: ",";\n"]);return T=function(){return t},t}var q=u.d.div(T(),(function(t){return d.a.get(t.theme,[t.type,"frontFace","textColor"])})),Y=u.d.div(S(),g.tablet),P=u.d.div(I()),_=u.d.h1(z()),H=function(t){var n=t.title,e=t.info,r=t.type;return a.a.createElement(q,{type:r},a.a.createElement(Y,null,a.a.createElement(A.a,{icon:D[r]})),a.a.createElement(P,null,a.a.createElement(_,null,n),e.map((function(t,n){return a.a.createElement("span",{key:n},t)}))))};H.defaultProps={title:"",info:[]};var N=H,W=e(8);function G(){var t=Object(y.a)(["\n\twidth: auto;\n\tpadding-right: 4px;\n"]);return G=function(){return t},t}function L(){var t=Object(y.a)(["\n\tpadding-left: 4px;\n"]);return L=function(){return t},t}function M(){var t=Object(y.a)(["\n\t\t\tbackground-color: ",";\n\t\t\tcolor: ",";\n\n\t\t\t&:disabled {\n\t\t\t\tbackground-color: ",";\n\t\t\t\tcolor: ",";\n\t\t\t}\n\t\t"]);return M=function(){return t},t}function J(){var t=Object(y.a)(["\n\tdisplay: flex;\n\twidth: 100%;\n\tpadding: 4px 0;\n\tmargin-bottom: 2px;\n\tjustify-content: space-between;\n\tborder: 1px #ccc solid;\n\tbackground-color: ",";\n\tcolor: ",";\n\ttext-align: left;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tbackground-color: ",";\n\t}\n\n\t&:disabled {\n\t\tbackground-color: ",";\n\t\tcolor: ",";\n\t\tcursor: auto;\n\t}\n\n\t",";\n"]);return J=function(){return t},t}function K(){var t=Object(y.a)(["\n\tpadding: 16px 0;\n"]);return K=function(){return t},t}var U=u.d.div(K()),$=u.d.button(J(),(function(t){return d.a.get(t.theme,[t.type,"frontFace","categoryBackground"])}),(function(t){return d.a.get(t.theme,[t.type,"frontFace","textColor"])}),(function(t){return d.a.get(t.theme,[t.type,"frontFace","categoryBackgroundHover"])}),(function(t){return d.a.get(t.theme,[t.type,"frontFace","categoryBackground"])}),(function(t){return d.a.get(t.theme,[t.type,"frontFace","textColor"])}),(function(t){var n=d.a.get(t,["theme","gameState",t.state],{});return Object(u.c)(M(),n.background,n.text,n.background,n.text)})),Q=u.d.div(L()),V=u.d.div(G()),X=function(t){var n=t.type,e=t.categories,r=t.readonly,o=t.handleCategoryClick,c=t.state,u=t.selectedCategory;return a.a.createElement(U,null,Object.entries(e).map((function(t,e){var i=Object(W.a)(t,2),d=i[0],l=i[1];return a.a.createElement($,{key:e,type:n,disabled:r,onClick:function(){return o(d)},state:u===d&&c},a.a.createElement(Q,null,d),a.a.createElement(V,null,l))})))};X.defaultProps={categories:{},readonly:!0,state:"unplayed",selectedCategory:""};var Z=X;function tt(){var t=Object(y.a)(["\n\tdisplay: flex;\n\theight: 128px;\n\twidth: 128px;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-size: 64px;\n\tbackground-color: ",";\n\tcolor: white;\n\tborder-radius: 50%;\n"]);return tt=function(){return t},t}function nt(){var t=Object(y.a)(["\n\tdisplay: flex;\n\theight: 100%;\n\twidth: 100%;\n\talign-items: center;\n\tjustify-content: center;\n\tborder: 1px solid #ccc;\n\tborder-radius: 10px;\n\tbackground-color: ",";\n\tbackground-image: url(",");\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n"]);return nt=function(){return t},t}var et=u.d.div(nt(),(function(t){return d.a.get(t.theme,[t.type,"backFace","innerBackgroundColor"])}),(function(t){return d.a.get(t.theme,[t.type,"backFace","innerBackgroundImage"],"")})),rt=u.d.div(tt(),(function(t){return d.a.get(t.theme,[t.type,"backFace","avatarIconColor"])})),at=function(t){var n=t.type;return a.a.createElement(et,{type:n},a.a.createElement(rt,{type:n},a.a.createElement(A.a,{icon:D[n]})))};function ot(){var t=Object(y.a)(["\n\tbackground-color: ",";\n\ttransform: rotateY(180deg);\n"]);return ot=function(){return t},t}function ct(){var t=Object(y.a)(["\n\tbackground-color: ",";\n"]);return ct=function(){return t},t}function ut(){var t=Object(y.a)(["\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\tpadding: 16px;\n\theight: 100%;\n\twidth: 100%;\n\tflex-direction: column;\n\tbackface-visibility: hidden;\n\tborder-radius: 20px;\n\tbox-shadow: 8px 5px 0 rgba(0, 0, 0, 0.3), 11px 10px 0 rgba(0, 0, 0, 0.22);\n"]);return ut=function(){return t},t}function it(){var t=Object(y.a)(["\n\tposition: relative;\n\tmin-height: 200px;\n\twidth: 100%;\n\tmax-width: 400px;\n\tmargin: 0 16px;\n\ttransform-style: preserve-3d;\n\ttransition: transform 0.6s;\n\ttransform: rotateY(",");\n\n\t@media "," {\n\t\tmin-height: 400px;\n\t\tmax-width: 270px;\n\t}\n"]);return it=function(){return t},t}var dt=u.d.div(it(),(function(t){return t.show?"0deg":"180deg"}),g.tablet),lt=u.d.div(ut()),st=Object(u.d)(lt)(ct(),(function(t){return t.theme[t.type].frontFace.background})),pt=Object(u.d)(lt)(ot(),(function(t){return t.theme[t.type].backFace.background})),gt=function(t){var n=t.type,e=t.data,r=t.show,o=t.readonly,c=t.handleCategoryClick,u=t.state,i=t.selectedCategory;return a.a.createElement(dt,{show:r},a.a.createElement(st,{type:n},a.a.createElement(N,{type:n,title:e.title,info:e.info}),a.a.createElement(Z,{type:n,state:u,readonly:o,categories:e.categories,handleCategoryClick:c,selectedCategory:i})),a.a.createElement(pt,{type:n},a.a.createElement(at,{type:n})))};gt.defaultProps={show:!0,readonly:!0,type:"user",data:{title:"",categories:{},info:[]}};var ft=gt,bt=e(1),mt=e.n(bt);function ht(){var t=Object(y.a)(["\n\tmargin: 16px 0;\n\tpadding: 8px;\n\tborder: none;\n\tborder-radius: 3px;\n\tbackground-color: white;\n\tcolor: #777;\n\tcursor: pointer;\n\tbox-shadow: 3px 3px 0 rgba(0, 0, 0, 0.3), 5px 4px 0 rgba(0, 0, 0, 0.22);\n"]);return ht=function(){return t},t}function vt(){var t=Object(y.a)(["\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\theight: 64px;\n\twidth: 64px;\n\tfont-size: 64px;\n"]);return vt=function(){return t},t}function yt(){var t=Object(y.a)(["\n\tfont-size: 16px;\n\tline-height: 16px;\n"]);return yt=function(){return t},t}function xt(){var t=Object(y.a)(["\n\tfont-size: 32px;\n\tline-height: 48px;\n"]);return xt=function(){return t},t}function Ot(){var t=Object(y.a)(["\n\tposition: relative;\n\tdisplay: flex;\n\theight: 400px;\n\twidth: 320px;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-align: center;\n"]);return Ot=function(){return t},t}function kt(){var t=Object(y.a)(["\n\t\t\tbackground-color: ",";\n\t\t\tcolor: ",";\n\t\t"]);return kt=function(){return t},t}function jt(){var t=Object(y.a)(["\n\tposition: absolute;\n\tdisplay: flex;\n\tleft: 0;\n\ttop: 0;\n\theight: 100%;\n\twidth: 100%;\n\talign-items: center;\n\tjustify-content: center;\n\ttransition: transform 1.2s, background-color 1.2s;\n\ttransform: translateY(",");\n\n\t",";\n"]);return jt=function(){return t},t}var wt={win:{title:"You Won!",subtitle:"You sure showed the computer who's boss."},lose:{title:"You Lost!",subtitle:"Better luck next time."},draw:{title:"You Drew!",subtitle:"Close one!"}},Ct={win:B.d,lose:B.c,draw:B.a},Et=u.d.div(jt(),(function(t){return t.gameOver?"0":"-100%"}),(function(t){var n=d.a.get(t,["theme","gameState",t.state],{});return Object(u.c)(kt(),n.background,n.text)})),Rt=u.d.div(Ot()),Ft=u.d.h1(xt()),At=u.d.h1(yt()),Bt=u.d.div(vt()),Dt=u.d.button(ht()),zt=function(t){var n=t.computer,e=t.user,r=t.gameOver,o=t.playAgain,c=function(t,n){return t.score<n.score?"lose":t.score>n.score?"win":t.score===n.score?"draw":void 0}(e,n);return a.a.createElement(Et,{state:c,gameOver:r},r&&a.a.createElement(Rt,null,a.a.createElement(Ft,null,wt[c].title),a.a.createElement(At,null,wt[c].subtitle),a.a.createElement(Bt,null,a.a.createElement(A.a,{icon:Ct[c]})),a.a.createElement(Dt,{onClick:o},"Play Again?")))};zt.propType={computer:mt.a.object.isRequired,user:mt.a.object.isRequired,gameOver:mt.a.bool.isRequired,playAgain:mt.a.func};var It=zt;function St(){var t=Object(y.a)(["\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbox-sizing: border-box;\n\tpadding: 8px;\n"]);return St=function(){return t},t}function Tt(){var t=Object(y.a)(["\n\t\t\tbackground-color: ",";\n\t\t\tcolor: ",";\n\t\t"]);return Tt=function(){return t},t}function qt(){var t=Object(y.a)(["\n\tposition: absolute;\n\tdisplay: flex;\n\theight: 64px;\n\twidth: 64px;\n\ttop: calc(50% - 32px);\n\tleft: calc(50% - 32px);\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tborder: 1px solid #ccc;\n\tborder-radius: 50%;\n\tfont-weight: 500;\n\tbox-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3), 2px 2px 0 rgba(0, 0, 0, 0.22);\n\n\t",";\n"]);return qt=function(){return t},t}function Yt(){var t=Object(y.a)(["\n\tdisplay: flex;\n\tposition: relative;\n\tflex-direction: column;\n\theight: 100vh;\n\twidth: 100vw;\n\n\t@media "," {\n\t\tflex-direction: row;\n\t}\n"]);return Yt=function(){return t},t}var Pt={unplayed:"?",win:"You Win!",lose:"You Lose!",draw:"You Draw!",gameOver:"Game Over!"},_t=u.d.div(Yt(),g.tablet),Ht=u.d.span(qt(),(function(t){var n=d.a.get(t,["theme","gameState",t.state],{});return Object(u.c)(Tt(),n.background,n.text)})),Nt=u.d.span(St()),Wt=function(t){var n=t.children,e=t.state,r=t.currentRound,o=t.totalRounds,c=t.gameOver,u=t.computer,i=t.user,d=t.playAgain;return a.a.createElement(_t,null,n,a.a.createElement(Ht,{state:e},Pt[e]),a.a.createElement(Nt,null,"Round ",r," / ",o),a.a.createElement(It,{playAgain:d,gameOver:c,computer:u,user:i}))};Wt.propType={state:mt.a.oneOf(["win","lose","draw","unplayed"]),currentRound:mt.a.number,totalRounds:mt.a.number,gameOver:mt.a.bool.isRequired,user:mt.a.object,computer:mt.a.object,playAgain:mt.a.func},Wt.defaultProps={state:"unplayed"};var Gt=Wt,Lt=e(4),Mt="HANDLE_CATEGORY_CLICK",Jt="SET_CARDS",Kt="START_NEW_ROUND",Ut="HIDE_CARDS",$t="NEW_GAME",Qt=5,Vt=function(t,n){var e=t.user,r=t.computer,a=function(t){t.length%2===1&&t.pop();var n=[],e=[];return t.forEach((function(t,r){r%2===0?n.push(t):e.push(t)})),[n,e]}(function(t){return t.sort((function(){return Math.random()-.5}))}(function(t,n){return d.a.take(t,2*n)}(n,Qt))),o=Object(W.a)(a,2),c=o[0],u=o[1];return Object(Lt.a)(Object(Lt.a)({},t),{},{loading:!1,gameOver:!1,currentRound:1,totalRounds:Qt,allCards:n,user:Object(Lt.a)(Object(Lt.a)({},e),{},{readonly:!1,showCard:!0,currentCard:c[0],cards:c,score:c.length,state:void 0}),computer:Object(Lt.a)(Object(Lt.a)({},r),{},{readonly:!0,currentCard:u[0],cards:u,score:u.length,showCard:!1,state:void 0})})};function Xt(t,n){switch(n.type){case Jt:return Vt(t,n.value);case Mt:return function(t,n){var e=t.user,r=t.computer,a=Object(Lt.a)({},e),o=Object(Lt.a)({},r),c=e.currentCard.categories[n],u=r.currentCard.categories[n];return c<u?(a.state="lose",a.score=e.score-1,o.state="win",o.score=r.score+1):c>u?(a.state="win",a.score=e.score+1,o.state="lose",o.score=r.score-1):(a.state="draw",o.state="draw"),d.a.remove(a.cards,(function(t){return t.id===a.currentCard.id})),d.a.remove(o.cards,(function(t){return t.id===o.currentCard.id})),Object(Lt.a)(Object(Lt.a)({},t),{},{user:Object(Lt.a)(Object(Lt.a)({},a),{},{readonly:!0}),computer:Object(Lt.a)(Object(Lt.a)({},o),{},{showCard:!0}),selectedCategory:n})}(t,n.value);case Kt:return function(t){var n=t.user,e=t.computer,r=t.currentRound,a=t.totalRounds,o=Object(Lt.a)({},n),c=Object(Lt.a)({},e),u=r+1;return u>a?Object(Lt.a)(Object(Lt.a)({},t),{},{gameOver:!0}):(o.currentCard=o.cards[0],c.currentCard=c.cards[0],Object(Lt.a)(Object(Lt.a)({},t),{},{currentRound:u,user:Object(Lt.a)(Object(Lt.a)({},o),{},{showCard:!0,readonly:!1}),computer:Object(Lt.a)(Object(Lt.a)({},c),{},{showCard:!1,readonly:!0}),selectedCategory:void 0}))}(t);case Ut:return function(t){var n=t.user,e=t.computer;return Object(Lt.a)(Object(Lt.a)({},t),{},{user:Object(Lt.a)(Object(Lt.a)({},n),{},{showCard:!1,state:void 0}),computer:Object(Lt.a)(Object(Lt.a)({},e),{},{showCard:!1,state:void 0})})}(t);case $t:return function(t){return Vt(t,t.allCards)}(t);default:return t}}var Zt={loading:!0,gameOver:!1,totalRounds:0,currentRound:0,allCards:[],user:{showCard:!1,readonly:!1,cards:[]},computer:{showCard:!1,readonly:!0,cards:[]}},tn=Object(r.createContext)({});function nn(t){var n=t.children,e=t.cards,o=Object(r.useReducer)(Xt,Vt(Zt,e)),c=Object(W.a)(o,2),u=c[0],i=c[1],d={loading:u.loading,gameOver:u.gameOver,allCards:u.allCards,user:u.user,computer:u.computer,selectedCategory:u.selectedCategory,totalRounds:u.totalRounds,currentRound:u.currentRound,setCards:function(t){return i({type:Jt,value:t})},handleCategoryClick:function(t){return i({type:Mt,value:t})},startNewRound:function(){return i({type:Kt})},hideCards:function(){return i({type:Ut})},newGame:function(t){return i({type:$t,value:t})}};return a.a.createElement(tn.Provider,{value:d},n)}var en=function(){var t=Object(r.useContext)(tn),n=t.loading,e=t.user,o=t.computer,c=t.handleCategoryClick,u=t.selectedCategory,i=t.startNewRound,d=t.hideCards,l=t.totalRounds,s=t.currentRound,p=t.gameOver,g=t.newGame;return n?null:a.a.createElement(Gt,{gameOver:p,state:e.state,totalRounds:l,currentRound:s,computer:o,user:e,playAgain:g},a.a.createElement(F,{type:"user",score:e.score},a.a.createElement(ft,{show:e.showCard,state:e.state,type:"user",data:e.currentCard,handleCategoryClick:function(t){c(t),setTimeout((function(){d(),setTimeout((function(){i()}),1e3)}),3e3)},readonly:e.readonly,selectedCategory:u})),a.a.createElement(F,{type:"computer",score:o.score},a.a.createElement(ft,{show:o.showCard,state:o.state,type:"computer",data:o.currentCard,readonly:!0,selectedCategory:u})))};function rn(){var t=Object(y.a)(['\n    html * {\n        font-family: \'Open Sans\', sans-serif !important;\n    }\n\n    body {\n        margin: 0;\n    }\n\n    div {\n        height: auto;\n        width: 100%;\n    }\n\n    html,\n    body,\n    div,\n    span,\n    applet,\n    object,\n    iframe,\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6,\n    p,\n    blockquote,\n    pre,\n    a,\n    abbr,\n    acronym,\n    address,\n    big,\n    cite,\n    code,\n    del,\n    dfn,\n    em,\n    img,\n    ins,\n    kbd,\n    q,\n    s,\n    samp,\n    small,\n    strike,\n    strong,\n    sub,\n    sup,\n    tt,\n    var,\n    b,\n    u,\n    i,\n    center,\n    dl,\n    dt,\n    dd,\n    ol,\n    ul,\n    li,\n    fieldset,\n    form,\n    label,\n    legend,\n    table,\n    caption,\n    tbody,\n    tfoot,\n    thead,\n    tr,\n    th,\n    td,\n    article,\n    aside,\n    canvas,\n    details,\n    embed,\n    figure,\n    figcaption,\n    footer,\n    header,\n    hgroup,\n    menu,\n    nav,\n    output,\n    ruby,\n    section,\n    summary,\n    time,\n    mark,\n    audio,\n    video {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        font-size: 100%;\n        font: inherit;\n        vertical-align: baseline;\n    }\n\n    /* HTML5 display-role reset for older browsers */\n\n    article,\n    aside,\n    details,\n    figcaption,\n    figure,\n    footer,\n    header,\n    hgroup,\n    menu,\n    nav,\n    section {\n        display: block;\n    }\n\n    body {\n        line-height: 1;\n    }\n\n    ol,\n    ul {\n        list-style: none;\n    }\n\n    blockquote,\n    q {\n        quotes: none;\n    }\n\n    blockquote {\n        &:before,\n        &:after {\n            content: "";\n            content: none;\n        }\n    }\n\n    q {\n        &:before,\n        &:after {\n            content: "";\n            content: none;\n        }\n    }\n\n    table {\n        border-collapse: collapse;\n        border-spacing: 0;\n    }\n']);return rn=function(){return t},t}for(var an=Object(u.b)(rn()),on=function(){return a.a.createElement(l.a,null,a.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap",rel:"stylesheet"}))},cn=[],un=1;un<11;un++)cn.push({id:"".concat(un),title:"Test Card ".concat(un),info:["Info"],categories:{Speed:100*un,Cost:100*un,Passengers:100*un,Films:100*un}});var dn=cn,ln=function(t){var n,e,r=t.cards,o=void 0===r?dn:r,c=t.customTheme;return a.a.createElement(l.b,null,a.a.createElement(u.a,{theme:(n=v,e=c,d.a.merge(n,e))},a.a.createElement(on,null),a.a.createElement(an,null),a.a.createElement(nn,{cards:o},a.a.createElement(en,null))))};ln.defaultTheme=v;var sn=ln;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(sn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.635fcfea.chunk.js.map