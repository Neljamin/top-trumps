(this["webpackJsonptop-trumps"]=this["webpackJsonptop-trumps"]||[]).push([[0],{23:function(t,n,e){t.exports=e(34)},34:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(19),c=e.n(o),u=e(2),i=e(5),l=e.n(i),d=e(10),s="768px",p="1024px",g={mobile:"(min-width: ".concat("320px",")"),tablet:"(min-width: ".concat(s,")"),desktop:"(min-width: ".concat(p,")")},f="#ffffff",b="#000000",m="#333333",h="#DDDDDD",v="#A5D6F7",y={gameState:{win:{text:"#546940",background:"#B5EAD7"},lose:{text:"#8A0000",background:"#FF9AA2"},draw:{text:b,background:"#FFFFD1"},unplayed:{text:m,background:f}},user:{background:v,backgroundImage:"",scoreColor:v,frontFace:{background:f,textColor:b,categoryBackground:f,categoryBackgroundHover:h},backFace:{background:f,innerBackgroundColor:f,innerBackgroundImage:"",avatarIconColor:m}},computer:{background:"#FFDAC1",backgroundImage:"",scoreColor:b,frontFace:{background:f,textColor:b,categoryBackground:f,categoryBackgroundHover:h},backFace:{background:f,innerBackgroundColor:f,innerBackgroundImage:"",avatarIconColor:m}}},x=e(3);function O(){var t=Object(x.a)(["\n\tpadding: 0 8px;\n"]);return O=function(){return t},t}function k(){var t=Object(x.a)(["\n\tfont-weight: 700;\n"]);return k=function(){return t},t}function j(){var t=Object(x.a)(["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tpadding: 8px;\n\tcolor: ",";\n"]);return j=function(){return t},t}function w(){var t=Object(x.a)(["\n\tdisplay: flex;\n\theight: 100%;\n\tposition: relative;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground: ",";\n\tbackground-image: url(",");\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\n\t@media "," {\n\t\tpadding: 0;\n\t\talign-items: center;\n\t}\n"]);return w=function(){return t},t}var C=u.d.div(w(),(function(t){var n=t.theme,e=t.type;return l.a.get(n,[e,"background"])}),(function(t){return l.a.get(t.theme,[t.type,"backgroundImage"],"")}),g.tablet),E=u.d.span(j(),(function(t){var n=t.theme,e=t.type;return l.a.get(n,[e,"scoreColor"])})),R=u.d.label(k()),F=u.d.span(O()),A=function(t){var n=t.children,e=t.type,r=t.score;return a.a.createElement(C,{type:e},a.a.createElement(E,{type:e},a.a.createElement(R,null,"Score:"),a.a.createElement(F,null,r)),n)},B=e(7),D=e(6),z={user:D.e,computer:D.b};function I(){var t=Object(x.a)(["\n\tfont-size: 14px;\n\tline-height: 16px;\n\tfont-weight: 600;\n"]);return I=function(){return t},t}function S(){var t=Object(x.a)(["\n\tpadding: 0 8px;\n\ttext-align: right;\n\tfont-size: 14px;\n"]);return S=function(){return t},t}function T(){var t=Object(x.a)(["\n\theight: 32px;\n\twidth: 32px;\n\tfont-size: 32px;\n\n\t@media "," {\n\t\theight: 48px;\n\t\twidth: 48px;\n\t\tfont-size: 48px;\n\t}\n"]);return T=function(){return t},t}function q(){var t=Object(x.a)(["\n\tdisplay: flex;\n\tcolor: ",";\n"]);return q=function(){return t},t}var Y=u.d.div(q(),(function(t){return l.a.get(t.theme,[t.type,"frontFace","textColor"])})),P=u.d.div(T(),g.tablet),_=u.d.div(S()),H=u.d.h1(I()),N=function(t){var n=t.title,e=t.info,r=t.type;return a.a.createElement(Y,{type:r},a.a.createElement(P,null,a.a.createElement(B.a,{icon:z[r]})),a.a.createElement(_,null,a.a.createElement(H,null,n),e.map((function(t,n){return a.a.createElement("span",{key:n},t)}))))};N.defaultProps={title:"",info:[]};var W=N,G=e(8);function L(){var t=Object(x.a)(["\n\twidth: auto;\n\tpadding-right: 4px;\n"]);return L=function(){return t},t}function M(){var t=Object(x.a)(["\n\tpadding-left: 4px;\n"]);return M=function(){return t},t}function J(){var t=Object(x.a)(["\n\t\t\tbackground-color: ",";\n\t\t\tcolor: ",";\n\n\t\t\t&:disabled {\n\t\t\t\tbackground-color: ",";\n\t\t\t\tcolor: ",";\n\t\t\t}\n\t\t"]);return J=function(){return t},t}function K(){var t=Object(x.a)(["\n\tdisplay: flex;\n\twidth: 100%;\n\tpadding: 4px 0;\n\tmargin-bottom: 2px;\n\tjustify-content: space-between;\n\tborder: 1px #ccc solid;\n\tbackground-color: ",";\n\tcolor: ",";\n\ttext-align: left;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tbackground-color: ",";\n\t}\n\n\t&:disabled {\n\t\tbackground-color: ",";\n\t\tcolor: ",";\n\t\tcursor: auto;\n\t}\n\n\t",";\n"]);return K=function(){return t},t}function U(){var t=Object(x.a)(["\n\tpadding: 16px 0;\n"]);return U=function(){return t},t}var $=u.d.div(U()),Q=u.d.button(K(),(function(t){return l.a.get(t.theme,[t.type,"frontFace","categoryBackground"])}),(function(t){return l.a.get(t.theme,[t.type,"frontFace","textColor"])}),(function(t){return l.a.get(t.theme,[t.type,"frontFace","categoryBackgroundHover"])}),(function(t){return l.a.get(t.theme,[t.type,"frontFace","categoryBackground"])}),(function(t){return l.a.get(t.theme,[t.type,"frontFace","textColor"])}),(function(t){var n=l.a.get(t,["theme","gameState",t.state],{});return Object(u.c)(J(),n.background,n.text,n.background,n.text)})),V=u.d.div(M()),X=u.d.div(L()),Z=function(t){var n=t.type,e=t.categories,r=t.readonly,o=t.handleCategoryClick,c=t.state,u=t.selectedCategory;return a.a.createElement($,null,Object.entries(e).map((function(t,e){var i=Object(G.a)(t,2),l=i[0],d=i[1];return a.a.createElement(Q,{key:e,type:n,disabled:r,onClick:function(){return o(l)},state:u===l&&c},a.a.createElement(V,null,l),a.a.createElement(X,null,d))})))};Z.defaultProps={categories:{},readonly:!0,state:"unplayed",selectedCategory:""};var tt=Z;function nt(){var t=Object(x.a)(["\n\tdisplay: flex;\n\theight: 128px;\n\twidth: 128px;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-size: 64px;\n\tbackground-color: ",";\n\tcolor: white;\n\tborder-radius: 50%;\n"]);return nt=function(){return t},t}function et(){var t=Object(x.a)(["\n\tdisplay: flex;\n\theight: 100%;\n\twidth: 100%;\n\talign-items: center;\n\tjustify-content: center;\n\tborder: 1px solid #ccc;\n\tborder-radius: 10px;\n\tbackground-color: ",";\n\tbackground-image: url(",");\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n"]);return et=function(){return t},t}var rt=u.d.div(et(),(function(t){return l.a.get(t.theme,[t.type,"backFace","innerBackgroundColor"])}),(function(t){return l.a.get(t.theme,[t.type,"backFace","innerBackgroundImage"],"")})),at=u.d.div(nt(),(function(t){return l.a.get(t.theme,[t.type,"backFace","avatarIconColor"])})),ot=function(t){var n=t.type;return a.a.createElement(rt,{type:n},a.a.createElement(at,{type:n},a.a.createElement(B.a,{icon:z[n]})))};function ct(){var t=Object(x.a)(["\n\tbackground-color: ",";\n\ttransform: rotateY(180deg);\n"]);return ct=function(){return t},t}function ut(){var t=Object(x.a)(["\n\tbackground-color: ",";\n"]);return ut=function(){return t},t}function it(){var t=Object(x.a)(["\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\tpadding: 16px;\n\theight: 100%;\n\twidth: 100%;\n\tflex-direction: column;\n\tbackface-visibility: hidden;\n\tborder-radius: 20px;\n\tbox-shadow: 8px 5px 0 rgba(0, 0, 0, 0.3), 11px 10px 0 rgba(0, 0, 0, 0.22);\n"]);return it=function(){return t},t}function lt(){var t=Object(x.a)(["\n\tposition: relative;\n\tmin-height: 200px;\n\twidth: 100%;\n\tmax-width: 400px;\n\tmargin: 0 16px;\n\ttransform-style: preserve-3d;\n\ttransition: transform 0.6s;\n\ttransform: rotateY(",");\n\n\t@media "," {\n\t\tmin-height: 400px;\n\t\tmax-width: 270px;\n\t}\n"]);return lt=function(){return t},t}var dt=u.d.div(lt(),(function(t){return t.show?"0deg":"180deg"}),g.tablet),st=u.d.div(it()),pt=Object(u.d)(st)(ut(),(function(t){return t.theme[t.type].frontFace.background})),gt=Object(u.d)(st)(ct(),(function(t){return t.theme[t.type].backFace.background})),ft=function(t){var n=t.type,e=t.data,r=t.show,o=t.readonly,c=t.handleCategoryClick,u=t.state,i=t.selectedCategory;return a.a.createElement(dt,{show:r},a.a.createElement(pt,{type:n},a.a.createElement(W,{type:n,title:e.title,info:e.info}),a.a.createElement(tt,{type:n,state:u,readonly:o,categories:e.categories,handleCategoryClick:c,selectedCategory:i})),a.a.createElement(gt,{type:n},a.a.createElement(ot,{type:n})))};ft.defaultProps={show:!0,readonly:!0,type:"user",data:{title:"",categories:{},info:[]}};var bt=ft,mt=e(1),ht=e.n(mt);function vt(){var t=Object(x.a)(["\n\tmargin: 16px 0;\n\tpadding: 8px;\n\tborder: none;\n\tborder-radius: 3px;\n\tbackground-color: white;\n\tcolor: #777;\n\tcursor: pointer;\n\tbox-shadow: 3px 3px 0 rgba(0, 0, 0, 0.3), 5px 4px 0 rgba(0, 0, 0, 0.22);\n"]);return vt=function(){return t},t}function yt(){var t=Object(x.a)(["\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\theight: 64px;\n\twidth: 64px;\n\tfont-size: 64px;\n"]);return yt=function(){return t},t}function xt(){var t=Object(x.a)(["\n\tfont-size: 16px;\n\tline-height: 16px;\n"]);return xt=function(){return t},t}function Ot(){var t=Object(x.a)(["\n\tfont-size: 32px;\n\tline-height: 48px;\n"]);return Ot=function(){return t},t}function kt(){var t=Object(x.a)(["\n\tposition: relative;\n\tdisplay: flex;\n\theight: 400px;\n\twidth: 320px;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-align: center;\n"]);return kt=function(){return t},t}function jt(){var t=Object(x.a)(["\n\t\t\tbackground-color: ",";\n\t\t\tcolor: ",";\n\t\t"]);return jt=function(){return t},t}function wt(){var t=Object(x.a)(["\n\tposition: absolute;\n\tdisplay: flex;\n\tleft: 0;\n\ttop: 0;\n\theight: 100%;\n\twidth: 100%;\n\talign-items: center;\n\tjustify-content: center;\n\ttransition: transform 1.2s, background-color 1.2s;\n\ttransform: translateY(",");\n\n\t",";\n"]);return wt=function(){return t},t}var Ct={win:{title:"You Won!",subtitle:"You sure showed the computer who's boss."},lose:{title:"You Lost!",subtitle:"Better luck next time."},draw:{title:"You Drew!",subtitle:"Close one!"}},Et={win:D.d,lose:D.c,draw:D.a},Rt=u.d.div(wt(),(function(t){return t.gameOver?"0":"-100%"}),(function(t){var n=l.a.get(t,["theme","gameState",t.state],{});return Object(u.c)(jt(),n.background,n.text)})),Ft=u.d.div(kt()),At=u.d.h1(Ot()),Bt=u.d.h1(xt()),Dt=u.d.div(yt()),zt=u.d.button(vt()),It=function(t){var n=t.computer,e=t.user,r=t.gameOver,o=t.playAgain,c=function(t,n){return t.score<n.score?"lose":t.score>n.score?"win":t.score===n.score?"draw":void 0}(e,n);return a.a.createElement(Rt,{state:c,gameOver:r},r&&a.a.createElement(Ft,null,a.a.createElement(At,null,Ct[c].title),a.a.createElement(Bt,null,Ct[c].subtitle),a.a.createElement(Dt,null,a.a.createElement(B.a,{icon:Et[c]})),a.a.createElement(zt,{onClick:o},"Play Again?")))};It.propType={computer:ht.a.object.isRequired,user:ht.a.object.isRequired,gameOver:ht.a.bool.isRequired,playAgain:ht.a.func};var St=It;function Tt(){var t=Object(x.a)(["\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbox-sizing: border-box;\n\tpadding: 8px;\n\tcolor: ",";\n\n\t@media "," {\n\t\tcolor: ",";\n\t}\n"]);return Tt=function(){return t},t}function qt(){var t=Object(x.a)(["\n\t\t\tbackground-color: ",";\n\t\t\tcolor: ",";\n\t\t"]);return qt=function(){return t},t}function Yt(){var t=Object(x.a)(["\n\tposition: absolute;\n\tdisplay: flex;\n\theight: 64px;\n\twidth: 64px;\n\ttop: calc(50% - 32px);\n\tleft: calc(50% - 32px);\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tborder: 1px solid #ccc;\n\tborder-radius: 50%;\n\tfont-weight: 500;\n\tbox-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3), 2px 2px 0 rgba(0, 0, 0, 0.22);\n\n\t",";\n"]);return Yt=function(){return t},t}function Pt(){var t=Object(x.a)(["\n\tdisplay: flex;\n\tposition: relative;\n\tflex-direction: column;\n\theight: 100vh;\n\twidth: 100vw;\n\n\t@media "," {\n\t\tflex-direction: row;\n\t}\n"]);return Pt=function(){return t},t}var _t={unplayed:"?",win:"You Win!",lose:"You Lose!",draw:"You Draw!",gameOver:"Game Over!"},Ht=u.d.div(Pt(),g.tablet),Nt=u.d.span(Yt(),(function(t){var n=l.a.get(t,["theme","gameState",t.state],{});return Object(u.c)(qt(),n.background,n.text)})),Wt=u.d.span(Tt(),(function(t){return t.theme.user.scoreColor}),g.tablet,(function(t){return t.theme.computer.scoreColor})),Gt=function(t){var n=t.children,e=t.state,r=t.currentRound,o=t.totalRounds,c=t.gameOver,u=t.computer,i=t.user,l=t.playAgain;return a.a.createElement(Ht,null,n,a.a.createElement(Nt,{state:e},_t[e]),a.a.createElement(Wt,null,"Round ",r," / ",o),a.a.createElement(St,{playAgain:l,gameOver:c,computer:u,user:i}))};Gt.propType={state:ht.a.oneOf(["win","lose","draw","unplayed"]),currentRound:ht.a.number,totalRounds:ht.a.number,gameOver:ht.a.bool.isRequired,user:ht.a.object,computer:ht.a.object,playAgain:ht.a.func},Gt.defaultProps={state:"unplayed"};var Lt=Gt,Mt=e(4),Jt="HANDLE_CATEGORY_CLICK",Kt="SET_CARDS",Ut="START_NEW_ROUND",$t="HIDE_CARDS",Qt="NEW_GAME",Vt=5,Xt=function(t,n){var e=t.user,r=t.computer,a=function(t){t.length%2===1&&t.pop();var n=[],e=[];return t.forEach((function(t,r){r%2===0?n.push(t):e.push(t)})),[n,e]}(function(t){return t.sort((function(){return Math.random()-.5}))}(function(t,n){return l.a.take(t,2*n)}(n,Vt))),o=Object(G.a)(a,2),c=o[0],u=o[1];return Object(Mt.a)(Object(Mt.a)({},t),{},{loading:!1,gameOver:!1,currentRound:1,totalRounds:Vt,allCards:n,user:Object(Mt.a)(Object(Mt.a)({},e),{},{readonly:!1,showCard:!0,currentCard:c[0],cards:c,score:c.length,state:void 0}),computer:Object(Mt.a)(Object(Mt.a)({},r),{},{readonly:!0,currentCard:u[0],cards:u,score:u.length,showCard:!1,state:void 0})})};function Zt(t,n){switch(n.type){case Kt:return Xt(t,n.value);case Jt:return function(t,n){var e=t.user,r=t.computer,a=Object(Mt.a)({},e),o=Object(Mt.a)({},r),c=e.currentCard.categories[n],u=r.currentCard.categories[n];return c<u?(a.state="lose",a.score=e.score-1,o.state="win",o.score=r.score+1):c>u?(a.state="win",a.score=e.score+1,o.state="lose",o.score=r.score-1):(a.state="draw",o.state="draw"),l.a.remove(a.cards,(function(t){return t.id===a.currentCard.id})),l.a.remove(o.cards,(function(t){return t.id===o.currentCard.id})),Object(Mt.a)(Object(Mt.a)({},t),{},{user:Object(Mt.a)(Object(Mt.a)({},a),{},{readonly:!0}),computer:Object(Mt.a)(Object(Mt.a)({},o),{},{showCard:!0}),selectedCategory:n})}(t,n.value);case Ut:return function(t){var n=t.user,e=t.computer,r=t.currentRound,a=t.totalRounds,o=Object(Mt.a)({},n),c=Object(Mt.a)({},e),u=r+1;return u>a?Object(Mt.a)(Object(Mt.a)({},t),{},{gameOver:!0}):(o.currentCard=o.cards[0],c.currentCard=c.cards[0],Object(Mt.a)(Object(Mt.a)({},t),{},{currentRound:u,user:Object(Mt.a)(Object(Mt.a)({},o),{},{showCard:!0,readonly:!1}),computer:Object(Mt.a)(Object(Mt.a)({},c),{},{showCard:!1,readonly:!0}),selectedCategory:void 0}))}(t);case $t:return function(t){var n=t.user,e=t.computer;return Object(Mt.a)(Object(Mt.a)({},t),{},{user:Object(Mt.a)(Object(Mt.a)({},n),{},{showCard:!1,state:void 0}),computer:Object(Mt.a)(Object(Mt.a)({},e),{},{showCard:!1,state:void 0})})}(t);case Qt:return function(t){return Xt(t,t.allCards)}(t);default:return t}}var tn={loading:!0,gameOver:!1,totalRounds:0,currentRound:0,allCards:[],user:{showCard:!1,readonly:!1,cards:[]},computer:{showCard:!1,readonly:!0,cards:[]}},nn=Object(r.createContext)({});function en(t){var n=t.children,e=t.cards,o=Object(r.useReducer)(Zt,Xt(tn,e)),c=Object(G.a)(o,2),u=c[0],i=c[1],l={loading:u.loading,gameOver:u.gameOver,allCards:u.allCards,user:u.user,computer:u.computer,selectedCategory:u.selectedCategory,totalRounds:u.totalRounds,currentRound:u.currentRound,setCards:function(t){return i({type:Kt,value:t})},handleCategoryClick:function(t){return i({type:Jt,value:t})},startNewRound:function(){return i({type:Ut})},hideCards:function(){return i({type:$t})},newGame:function(t){return i({type:Qt,value:t})}};return a.a.createElement(nn.Provider,{value:l},n)}var rn=function(){var t=Object(r.useContext)(nn),n=t.loading,e=t.user,o=t.computer,c=t.handleCategoryClick,u=t.selectedCategory,i=t.startNewRound,l=t.hideCards,d=t.totalRounds,s=t.currentRound,p=t.gameOver,g=t.newGame;return n?null:a.a.createElement(Lt,{gameOver:p,state:e.state,totalRounds:d,currentRound:s,computer:o,user:e,playAgain:g},a.a.createElement(A,{type:"user",score:e.score},a.a.createElement(bt,{show:e.showCard,state:e.state,type:"user",data:e.currentCard,handleCategoryClick:function(t){c(t),setTimeout((function(){l(),setTimeout((function(){i()}),1e3)}),3e3)},readonly:e.readonly,selectedCategory:u})),a.a.createElement(A,{type:"computer",score:o.score},a.a.createElement(bt,{show:o.showCard,state:o.state,type:"computer",data:o.currentCard,readonly:!0,selectedCategory:u})))};function an(){var t=Object(x.a)(['\n    html * {\n        font-family: \'Open Sans\', sans-serif !important;\n    }\n\n    body {\n        margin: 0;\n    }\n\n    div {\n        height: auto;\n        width: 100%;\n    }\n\n    html,\n    body,\n    div,\n    span,\n    applet,\n    object,\n    iframe,\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6,\n    p,\n    blockquote,\n    pre,\n    a,\n    abbr,\n    acronym,\n    address,\n    big,\n    cite,\n    code,\n    del,\n    dfn,\n    em,\n    img,\n    ins,\n    kbd,\n    q,\n    s,\n    samp,\n    small,\n    strike,\n    strong,\n    sub,\n    sup,\n    tt,\n    var,\n    b,\n    u,\n    i,\n    center,\n    dl,\n    dt,\n    dd,\n    ol,\n    ul,\n    li,\n    fieldset,\n    form,\n    label,\n    legend,\n    table,\n    caption,\n    tbody,\n    tfoot,\n    thead,\n    tr,\n    th,\n    td,\n    article,\n    aside,\n    canvas,\n    details,\n    embed,\n    figure,\n    figcaption,\n    footer,\n    header,\n    hgroup,\n    menu,\n    nav,\n    output,\n    ruby,\n    section,\n    summary,\n    time,\n    mark,\n    audio,\n    video {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        font-size: 100%;\n        font: inherit;\n        vertical-align: baseline;\n    }\n\n    /* HTML5 display-role reset for older browsers */\n\n    article,\n    aside,\n    details,\n    figcaption,\n    figure,\n    footer,\n    header,\n    hgroup,\n    menu,\n    nav,\n    section {\n        display: block;\n    }\n\n    body {\n        line-height: 1;\n    }\n\n    ol,\n    ul {\n        list-style: none;\n    }\n\n    blockquote,\n    q {\n        quotes: none;\n    }\n\n    blockquote {\n        &:before,\n        &:after {\n            content: "";\n            content: none;\n        }\n    }\n\n    q {\n        &:before,\n        &:after {\n            content: "";\n            content: none;\n        }\n    }\n\n    table {\n        border-collapse: collapse;\n        border-spacing: 0;\n    }\n']);return an=function(){return t},t}for(var on=Object(u.b)(an()),cn=function(){return a.a.createElement(d.a,null,a.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap",rel:"stylesheet"}))},un=[],ln=1;ln<11;ln++)un.push({id:"".concat(ln),title:"Test Card ".concat(ln),info:["Info"],categories:{Speed:100*ln,Cost:100*ln,Passengers:100*ln,Films:100*ln}});var dn=un,sn=function(t){var n,e,r=t.cards,o=void 0===r?dn:r,c=t.customTheme;return a.a.createElement(d.b,null,a.a.createElement(u.a,{theme:(n=y,e=c,l.a.merge(n,e))},a.a.createElement(cn,null),a.a.createElement(on,null),a.a.createElement(en,{cards:o},a.a.createElement(rn,null))))};sn.defaultTheme=y;var pn=sn;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(pn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.425a78c2.chunk.js.map