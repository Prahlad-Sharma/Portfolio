import{s as f}from"../chunks/scheduler.YAYnZILM.js";import{S as b,i as P,e as r,s as o,c as Y,h as _,a as c,d as D,b as l,f as k,g as w,j as O,k as g,l as L,m as p,n as h,t as v,o as Q,p as U}from"../chunks/index.t6gQgkPG.js";import{P as H,a as $}from"../chunks/Pagination.DEZy0XLT.js";import{s as R}from"../chunks/config.Cw8AKM_O.js";function Z(n){let N,y,M,j,d,s,C="Blog",x,T,a,A,u,m,I,E='<a href="https://github.com/Prahlad-Sharma" target="_blank"><img id="github" alt="github logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg==" class="dark:invert dark:brigthness-[80%]"/></a> <a href="https://www.linkedin.com/in/prahlad-sharma/" target="_blank"><img alt="linkedin logo" id="linkdin" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tMTEgMTloLTN2LTExaDN2MTF6bS0xLjUtMTIuMjY4Yy0uOTY2IDAtMS43NS0uNzktMS43NS0xLjc2NHMuNzg0LTEuNzY0IDEuNzUtMS43NjQgMS43NS43OSAxLjc1IDEuNzY0LS43ODMgMS43NjQtMS43NSAxLjc2NHptMTMuNSAxMi4yNjhoLTN2LTUuNjA0YzAtMy4zNjgtNC0zLjExMy00IDB2NS42MDRoLTN2LTExaDN2MS43NjVjMS4zOTYtMi41ODYgNy0yLjc3NyA3IDIuNDc2djYuNzU5eiIvPjwvc3ZnPg==" class="dark:invert dark:brigthness-[80%]"/></a> <a href="https://www.instagram.com/prahladhacker/" target="_blank"><img id="insta" alt="instagram logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMi4xNjNjMy4yMDQgMCAzLjU4NC4wMTIgNC44NS4wNyAzLjI1Mi4xNDggNC43NzEgMS42OTEgNC45MTkgNC45MTkuMDU4IDEuMjY1LjA2OSAxLjY0NS4wNjkgNC44NDkgMCAzLjIwNS0uMDEyIDMuNTg0LS4wNjkgNC44NDktLjE0OSAzLjIyNS0xLjY2NCA0Ljc3MS00LjkxOSA0LjkxOS0xLjI2Ni4wNTgtMS42NDQuMDctNC44NS4wNy0zLjIwNCAwLTMuNTg0LS4wMTItNC44NDktLjA3LTMuMjYtLjE0OS00Ljc3MS0xLjY5OS00LjkxOS00LjkyLS4wNTgtMS4yNjUtLjA3LTEuNjQ0LS4wNy00Ljg0OSAwLTMuMjA0LjAxMy0zLjU4My4wNy00Ljg0OS4xNDktMy4yMjcgMS42NjQtNC43NzEgNC45MTktNC45MTkgMS4yNjYtLjA1NyAxLjY0NS0uMDY5IDQuODQ5LS4wNjl6bTAtMi4xNjNjLTMuMjU5IDAtMy42NjcuMDE0LTQuOTQ3LjA3Mi00LjM1OC4yLTYuNzggMi42MTgtNi45OCA2Ljk4LS4wNTkgMS4yODEtLjA3MyAxLjY4OS0uMDczIDQuOTQ4IDAgMy4yNTkuMDE0IDMuNjY4LjA3MiA0Ljk0OC4yIDQuMzU4IDIuNjE4IDYuNzggNi45OCA2Ljk4IDEuMjgxLjA1OCAxLjY4OS4wNzIgNC45NDguMDcyIDMuMjU5IDAgMy42NjgtLjAxNCA0Ljk0OC0uMDcyIDQuMzU0LS4yIDYuNzgyLTIuNjE4IDYuOTc5LTYuOTguMDU5LTEuMjguMDczLTEuNjg5LjA3My00Ljk0OCAwLTMuMjU5LS4wMTQtMy42NjctLjA3Mi00Ljk0Ny0uMTk2LTQuMzU0LTIuNjE3LTYuNzgtNi45NzktNi45OC0xLjI4MS0uMDU5LTEuNjktLjA3My00Ljk0OS0uMDczem0wIDUuODM4Yy0zLjQwMyAwLTYuMTYyIDIuNzU5LTYuMTYyIDYuMTYyczIuNzU5IDYuMTYzIDYuMTYyIDYuMTYzIDYuMTYyLTIuNzU5IDYuMTYyLTYuMTYzYzAtMy40MDMtMi43NTktNi4xNjItNi4xNjItNi4xNjJ6bTAgMTAuMTYyYy0yLjIwOSAwLTQtMS43OS00LTQgMC0yLjIwOSAxLjc5MS00IDQtNHM0IDEuNzkxIDQgNGMwIDIuMjEtMS43OTEgNC00IDR6bTYuNDA2LTExLjg0NWMtLjc5NiAwLTEuNDQxLjY0NS0xLjQ0MSAxLjQ0cy42NDUgMS40NCAxLjQ0MSAxLjQ0Yy43OTUgMCAxLjQzOS0uNjQ1IDEuNDM5LTEuNDRzLS42NDQtMS40NC0xLjQzOS0xLjQ0eiIvPjwvc3ZnPg==" class="dark:invert dark:brigthness-[80%]"/></a>',z;return a=new H({props:{posts:n[0].posts}}),u=new $({props:{currentPage:1,totalPosts:n[0].total}}),{c(){N=r("meta"),y=o(),M=r("div"),j=r("div"),d=o(),s=r("h1"),s.textContent=C,x=o(),T=r("div"),Y(a.$$.fragment),A=o(),Y(u.$$.fragment),m=o(),I=r("div"),I.innerHTML=E,this.h()},l(t){const i=_("svelte-7id6i2",document.head);N=c(i,"META",{"data-key":!0,name:!0,content:!0}),i.forEach(D),y=l(t),M=c(t,"DIV",{class:!0});var e=k(M);j=c(e,"DIV",{class:!0}),k(j).forEach(D),d=l(e),s=c(e,"H1",{class:!0,"data-svelte-h":!0}),w(s)!=="svelte-2es3vq"&&(s.textContent=C),x=l(e),T=c(e,"DIV",{class:!0});var S=k(T);O(a.$$.fragment,S),S.forEach(D),A=l(e),O(u.$$.fragment,e),m=l(e),I=c(e,"DIV",{class:!0,"data-svelte-h":!0}),w(I)!=="svelte-12r2s7m"&&(I.innerHTML=E),e.forEach(D),this.h()},h(){document.title="Blog | Akshay Kalathil",g(N,"data-key","description"),g(N,"name","description"),g(N,"content",R),g(j,"class","object-cover w-full bg-yellow-200 h-[100px] md:h-[225px]"),g(s,"class","absolute px-5 top-0 py-5 text-5xl text-center md:text-6xl md:py-[4.5rem] md:px-[8rem] 3xl:px-[8rem]"),g(T,"class","relative border-black border-t-[0.15rem]"),g(I,"class","hidden fixed left-0 z-50 flex-col gap-8 py-4 px-5 rounded-r-md border-black 2xl:flex hidden1 bg-custom-background top-[15rem] border-t-[0.15rem] border-b-[0.15rem] border-r-[0.15rem]"),g(M,"class","relative")},m(t,i){L(document.head,N),p(t,y,i),p(t,M,i),L(M,j),L(M,d),L(M,s),L(M,x),L(M,T),h(a,T,null),L(M,A),h(u,M,null),L(M,m),L(M,I),z=!0},p(t,[i]){const e={};i&1&&(e.posts=t[0].posts),a.$set(e);const S={};i&1&&(S.totalPosts=t[0].total),u.$set(S)},i(t){z||(v(a.$$.fragment,t),v(u.$$.fragment,t),z=!0)},o(t){Q(a.$$.fragment,t),Q(u.$$.fragment,t),z=!1},d(t){t&&(D(y),D(M)),D(N),U(a),U(u)}}}function G(n,N,y){let{data:M}=N;return n.$$set=j=>{"data"in j&&y(0,M=j.data)},[M]}class F extends b{constructor(N){super(),P(this,N,G,Z,f,{data:0})}}export{F as component};
