(this["webpackJsonpnomfilx-v2"]=this["webpackJsonpnomfilx-v2"]||[]).push([[0],{37:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/noPosterSmall.ea2ad102.png"},80:function(e,t,n){"use strict";n.r(t);var r,a,i,c,o,s,l,u,d,p,j,b,h,g,x,m,v,O,f,y,_,w,k,S,T,R,U,M,z,C,P=n(1),I=n.n(P),N=n(38),F=n.n(N),B=n(39),D=n.n(B),V=n(12),A=n(13),L=n(15),q=n(14),J=n(19),E=n(5),H=n(10),G=n.n(H),K=n(17),Q=n(40),W=n.n(Q).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"919391ffbb064ac19920954789868ead",language:"en-US"}}),X=function(){return W.get("movie/now_playing")},Y=function(){return W.get("movie/upcoming")},Z=function(){return W.get("movie/popular")},$=function(e){return W.get("movie/".concat(e),{params:{append_to_response:"videos"}})},ee=function(e){return W.get("search/movie",{params:{query:encodeURIComponent(e)}})},te=function(){return W.get("tv/top_rated")},ne=function(){return W.get("tv/popular")},re=function(){return W.get("tv/airing_today")},ae=function(e){return W.get("tv/".concat(e),{params:{append_to_response:"videos"}})},ie=function(e){return W.get("search/tv",{params:{query:encodeURIComponent(e)}})},ce=n(3),oe=n(16),se=n(2),le=n(0),ue=se.c.div(r||(r=Object(ce.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 28px;\n  margin-top: 20px;\n"]))),de=function(){return Object(le.jsx)(ue,{children:Object(le.jsx)("span",{role:"img","aria-label":"Loading",children:"\u23f0"})})},pe=se.c.div(a||(a=Object(ce.a)([""]))),je=se.c.div(i||(i=Object(ce.a)(["\n  background-image: url(",");\n  width: 100%;\n  height: 180px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  transition: opacity 0.1s linear;\n"])),(function(e){return e.bgUrl})),be=se.c.span(c||(c=Object(ce.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n"]))),he=se.c.div(o||(o=Object(ce.a)(["\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"])),je,be),ge=se.c.span(s||(s=Object(ce.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]))),xe=se.c.span(l||(l=Object(ce.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]))),me=function(e){var t=e.id,r=e.imageUrl,a=e.title,i=e.rating,c=e.year,o=e.isMovie,s=void 0!==o&&o;return Object(le.jsx)(J.b,{to:s?"/movie/".concat(t):"/tv/".concat(t),children:Object(le.jsxs)(pe,{children:[Object(le.jsxs)(he,{children:[Object(le.jsx)(je,{bgUrl:r?"https://image.tmdb.org/t/p/w300".concat(r):n(37)}),Object(le.jsxs)(be,{children:[Object(le.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50\ufe0f"})," ",i,"/10"]})]}),Object(le.jsx)(ge,{children:a.length>18?"".concat(a.substring(0,18),"..."):a}),Object(le.jsx)(xe,{children:c})]})})},ve=se.c.section(u||(u=Object(ce.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]))),Oe=se.c.h2(d||(d=Object(ce.a)(["\n  font-size: 14px;\n  font-weight: 600;\n"]))),fe=se.c.div(p||(p=Object(ce.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]))),ye=function(e){var t=e.title,n=e.children;return Object(le.jsxs)(ve,{children:[Object(le.jsx)(Oe,{children:t}),Object(le.jsx)(fe,{children:n})]})},_e=se.c.div(j||(j=Object(ce.a)(["\n  padding: 10px;\n"]))),we=function(e){var t=e.nowPlaying,n=e.upcoming,r=e.popular,a=(e.error,e.loading);return Object(le.jsxs)(le.Fragment,{children:[Object(le.jsx)(oe.a,{children:Object(le.jsx)("title",{children:"Movies | Nomflix"})}),a?Object(le.jsx)(de,{}):Object(le.jsxs)(_e,{children:[Object(le.jsx)(ye,{title:"Now Playing",children:t.map((function(e){return Object(le.jsx)(me,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0},e.id)}))}),Object(le.jsx)(ye,{title:"Upcoming",children:n.map((function(e){return Object(le.jsx)(me,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0},e.id)}))}),Object(le.jsx)(ye,{title:"Popular",children:r.map((function(e){return Object(le.jsx)(me,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0},e.id)}))})]})]})},ke=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(V.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={loading:!0,nowPlaying:null,upcoming:null,popular:null,error:null},e}return Object(A.a)(n,[{key:"componentDidMount",value:function(){var e=Object(K.a)(G.a.mark((function e(){var t,n,r,a,i,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X();case 3:return t=e.sent,n=t.data.results,e.next=7,Y();case 7:return r=e.sent,a=r.data.results,e.next=11,Z();case 11:i=e.sent,c=i.data.results,this.setState({nowPlaying:n,upcoming:a,popular:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movie information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error,i=e.loading;return Object(le.jsx)(we,{nowPlaying:t,upcoming:n,popular:r,error:a,loading:i})}}]),n}(I.a.Component),Se=se.c.div(b||(b=Object(ce.a)(["\n  padding: 20px;\n"]))),Te=se.c.form(h||(h=Object(ce.a)(["\n  margin-bottom: 50px;\n"]))),Re=se.c.input(g||(g=Object(ce.a)(["\n  all: unset;\n  font-size: 20px;\n  width: 100%;\n"]))),Ue=function(e){var t=e.movieResults,n=e.tvResults,r=e.loading,a=e.searchTerm,i=e.handleSubmit,c=e.updateTerm;e.error;return Object(le.jsxs)(Se,{children:[Object(le.jsx)(oe.a,{children:Object(le.jsx)("title",{children:"Search | Nomflix"})}),Object(le.jsx)(Te,{onSubmit:i,children:Object(le.jsx)(Re,{placeholder:"Search Movies or TV Shows...",value:a,onChange:c})}),r?Object(le.jsx)(de,{}):Object(le.jsxs)(le.Fragment,{children:[t&&t.length>0&&Object(le.jsx)(ye,{title:"Movie Results",children:t.map((function(e){var t;return Object(le.jsx)(me,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:null===(t=e.release_date)||void 0===t?void 0:t.substring(0,4),isMovie:!0},e.id)}))}),n&&n.length>0&&Object(le.jsx)(ye,{title:"TV Show Results",children:n.map((function(e){var t;return Object(le.jsx)(me,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:null===(t=e.first_air_date)||void 0===t?void 0:t.substring(0,4)},e.id)}))})]})]})},Me=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(V.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchByTerm=Object(K.a)(G.a.mark((function t(){var n,r,a,i,c;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,e.setState({loading:!0}),t.prev=2,t.next=5,ee(n);case 5:return r=t.sent,a=r.data.results,t.next=9,ie(n);case 9:i=t.sent,c=i.data.results,e.setState({movieResults:a,tvResults:c}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),e.setState({error:"Can't find results."});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])}))),e}return Object(A.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.loading,i=e.error;return Object(le.jsx)(Ue,{movieResults:t,tvResults:n,loading:a,error:i,searchTerm:r,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(I.a.Component),ze=se.c.div(x||(x=Object(ce.a)(["\n  padding: 10px;\n"]))),Ce=function(e){var t=e.airingToday,n=e.topRated,r=e.popular,a=(e.error,e.loading);return Object(le.jsxs)(le.Fragment,{children:[Object(le.jsx)(oe.a,{children:Object(le.jsx)("title",{children:"TV | Nomflix"})}),a?Object(le.jsx)(de,{}):Object(le.jsxs)(ze,{children:[Object(le.jsx)(ye,{title:"Now Playing",children:t.map((function(e){return Object(le.jsx)(me,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)},e.id)}))}),Object(le.jsx)(ye,{title:"Upcoming",children:n.map((function(e){return Object(le.jsx)(me,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)},e.id)}))}),Object(le.jsx)(ye,{title:"Popular",children:r.map((function(e){return Object(le.jsx)(me,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)},e.id)}))})]})]})},Pe=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(V.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={loading:!0,airingToday:null,topRated:null,popular:null,error:null},e}return Object(A.a)(n,[{key:"componentDidMount",value:function(){var e=Object(K.a)(G.a.mark((function e(){var t,n,r,a,i,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re();case 3:return t=e.sent,n=t.data.results,e.next=7,te();case 7:return r=e.sent,a=r.data.results,e.next=11,ne();case 11:i=e.sent,c=i.data.results,this.setState({airingToday:n,topRated:a,popular:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movie information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.airingToday,n=e.topRated,r=e.popular,a=e.error,i=e.loading;return Object(le.jsx)(Ce,{airingToday:t,topRated:n,popular:r,error:a,loading:i})}}]),n}(I.a.Component),Ie=se.c.div(m||(m=Object(ce.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]))),Ne=se.c.div(v||(v=Object(ce.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"])),(function(e){return e.bgImage})),Fe=se.c.div(O||(O=Object(ce.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n"]))),Be=se.c.div(f||(f=Object(ce.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"])),(function(e){return e.bgImage})),De=se.c.div(y||(y=Object(ce.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]))),Ve=se.c.h3(_||(_=Object(ce.a)(["\n  font-size: 32px;\n"]))),Ae=se.c.div(w||(w=Object(ce.a)(["\n  margin: 20px 0;\n"]))),Le=se.c.span(k||(k=Object(ce.a)([""]))),qe=se.c.span(S||(S=Object(ce.a)(["\n  margin: 0 10px;\n"]))),Je=se.c.p(T||(T=Object(ce.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 1.5;\n  width: 50%;\n"]))),Ee=function(e){var t=e.result,r=e.loading;e.error;return r?Object(le.jsxs)(le.Fragment,{children:[Object(le.jsx)(oe.a,{children:Object(le.jsx)("title",{children:"Loading | Nomflix"})}),Object(le.jsx)(de,{})]}):Object(le.jsxs)(Ie,{children:[Object(le.jsx)(oe.a,{children:Object(le.jsxs)("title",{children:[t.original_title?t.original_title:t.original_name," ","| Nomflix"]})}),Object(le.jsx)(Ne,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),Object(le.jsxs)(Fe,{children:[Object(le.jsx)(Be,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(37)}),Object(le.jsxs)(De,{children:[Object(le.jsx)(Ve,{children:t.original_title?t.original_title:t.original_name}),Object(le.jsxs)(Ae,{children:[Object(le.jsx)(Le,{children:t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)}),Object(le.jsx)(qe,{children:"\u2022"}),Object(le.jsxs)(Le,{children:[t.runtime?t.runtime:t.episode_run_time[0]," min"]}),Object(le.jsx)(qe,{children:"\u2022"}),Object(le.jsx)(Le,{children:t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))})]}),Object(le.jsx)(Je,{children:t.overview})]})]})]})},He=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(e){var r;Object(V.a)(this,n),r=t.call(this,e);var a=e.location.pathname;return r.state={result:null,loading:!0,error:null,isMovie:a.includes("/movie/")},r}return Object(A.a)(n,[{key:"componentDidMount",value:function(){var e=Object(K.a)(G.a.mark((function e(){var t,n,r,a,i;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.match.params.id,n=null,r=this.state.isMovie,e.prev=3,!r){e.next=11;break}return e.next=7,$(t);case 7:a=e.sent,n=a.data,e.next=15;break;case 11:return e.next=13,ae(t);case 13:i=e.sent,n=i.data;case 15:this.setState({result:n}),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),this.setState({error:"Can't find anything."});case 21:return e.prev=21,this.setState({loading:!1}),e.finish(21);case 24:case"end":return e.stop()}}),e,this,[[3,18,21,24]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,r=e.loading;return Object(le.jsx)(Ee,{result:t,error:n,loading:r})}}]),n}(I.a.Component),Ge=se.c.header(R||(R=Object(ce.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 50px;\n  width: 100%;\n  background-color: rgba(20, 20, 20, 0.8);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]))),Ke=se.c.ul(U||(U=Object(ce.a)(["\n  display: flex;\n"]))),Qe=se.c.li(M||(M=Object(ce.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 3px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"])),(function(e){return e.current?"#3498db":"transparent"})),We=Object(se.c)(J.b)(z||(z=Object(ce.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Xe=Object(E.g)((function(e){var t=e.location.pathname;return Object(le.jsx)(Ge,{children:Object(le.jsxs)(Ke,{children:[Object(le.jsx)(Qe,{current:"/"===t,children:Object(le.jsx)(We,{to:"/",children:"Movie"})}),Object(le.jsx)(Qe,{current:"/tv"===t,children:Object(le.jsx)(We,{to:"/tv",children:"TV"})}),Object(le.jsx)(Qe,{current:"/search"===t,children:Object(le.jsx)(We,{to:"/search",children:"Search"})})]})})})),Ye=function(){return Object(le.jsx)(J.a,{children:Object(le.jsxs)(le.Fragment,{children:[Object(le.jsx)(Xe,{}),Object(le.jsxs)(E.d,{children:[Object(le.jsx)(E.b,{exact:!0,path:"/",component:ke}),Object(le.jsx)(E.b,{exact:!0,path:"/tv",component:Pe}),Object(le.jsx)(E.b,{exact:!0,path:"/search",component:Me}),Object(le.jsx)(E.b,{exact:!0,path:"/movie/:id",component:He}),Object(le.jsx)(E.b,{exact:!0,path:"/tv/:id",component:He}),Object(le.jsx)(E.a,{from:"*",to:"/"})]})]})})},Ze=n(46),$e=Object(se.a)(C||(C=Object(ce.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:12px;\n        background-color:rgba(20, 20, 20, 1);\n        color:white;\n        padding-top:50px;\n    }\n"])),Ze.a),et=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(){return Object(V.a)(this,n),t.apply(this,arguments)}return Object(A.a)(n,[{key:"render",value:function(){return Object(le.jsxs)(le.Fragment,{children:[Object(le.jsx)($e,{}),Object(le.jsx)(Ye,{})]})}}]),n}(I.a.Component);D.a.config(),F.a.render(Object(le.jsx)(I.a.StrictMode,{children:Object(le.jsx)(et,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.ab62c59c.chunk.js.map