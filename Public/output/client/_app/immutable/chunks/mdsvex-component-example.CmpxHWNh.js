import{s as k,n as T}from"./scheduler.YAYnZILM.js";import{S as g,i as H,e as d,s as _,c as L,a as f,g as v,b as x,j as S,m as i,n as b,t as j,o as P,d as r,p as A,r as $,u as y}from"./index.t6gQgkPG.js";import{C as F}from"./Callout.j1h_AJya.js";function I(h){let t,s,c="src/lib/components/Callout.svelte",o;return{c(){t=$("This is an example of the Callout.svelte component! Find it in "),s=d("code"),s.textContent=c,o=$(".")},l(n){t=y(n,"This is an example of the Callout.svelte component! Find it in "),s=f(n,"CODE",{"data-svelte-h":!0}),v(s)!=="svelte-yfsmsx"&&(s.textContent=c),o=y(n,".")},m(n,a){i(n,t,a),i(n,s,a),i(n,o,a)},p:T,d(n){n&&(r(t),r(s),r(o))}}}function q(h){let t,s="This starter includes an <code>Callout.svelte</code> component. It’s not particularly useful on its own, but here’s how you might use it inside of a Markdown post, thanks to mdsvex.",c,o,n,a,w="You can inject any Svelte components you want into Markdown! Just import them in a <code>&lt;script&gt;</code> tag and then use them wherever you like.",u,m,C="For that matter, you can inject any HTML anywhere! (Note that you cannot use Markdown <em>inside</em> Svelte components or HTML, however. Any opened tag must be closed before returning to Markdown.)",p;return o=new F({props:{$$slots:{default:[I]},$$scope:{ctx:h}}}),{c(){t=d("p"),t.innerHTML=s,c=_(),L(o.$$.fragment),n=_(),a=d("p"),a.innerHTML=w,u=_(),m=d("p"),m.innerHTML=C},l(e){t=f(e,"P",{"data-svelte-h":!0}),v(t)!=="svelte-u86nnu"&&(t.innerHTML=s),c=x(e),S(o.$$.fragment,e),n=x(e),a=f(e,"P",{"data-svelte-h":!0}),v(a)!=="svelte-ulhokh"&&(a.innerHTML=w),u=x(e),m=f(e,"P",{"data-svelte-h":!0}),v(m)!=="svelte-r35kco"&&(m.innerHTML=C)},m(e,l){i(e,t,l),i(e,c,l),b(o,e,l),i(e,n,l),i(e,a,l),i(e,u,l),i(e,m,l),p=!0},p(e,[l]){const M={};l&1&&(M.$$scope={dirty:l,ctx:e}),o.$set(M)},i(e){p||(j(o.$$.fragment,e),p=!0)},o(e){P(o.$$.fragment,e),p=!1},d(e){e&&(r(t),r(c),r(n),r(a),r(u),r(m)),A(o,e)}}}const J={title:"A Markdown post with a Svelte component",date:"2021-12-01",updated:"2021-12-01",categories:["sveltekit","markdown","svelte"],coverImage:"/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg",coverWidth:16,coverHeight:9,excerpt:"This post demonstrates how to include a Svelte component in a Markdown post."};class N extends g{constructor(t){super(),H(this,t,null,q,k,{})}}export{N as default,J as metadata};
