import{_ as i,r as o,o as u,c as r,b as n,f as a,w as t,d as s,e as c}from"./app.675f509a.js";const k={},d=n("h1",{id:"csrf-token",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#csrf-token","aria-hidden":"true"},"#"),s(" CSRF Token")],-1),m={class:"table-of-contents"},b=c('<h3 id="mendapatkan-csrf-xsrf-token" tabindex="-1"><a class="header-anchor" href="#mendapatkan-csrf-xsrf-token" aria-hidden="true">#</a> Mendapatkan CSRF / XSRF Token</h3><p>Berfungsi untuk mendapatkan csrf token.</p><table><thead><tr><th>Method</th><th>Path</th></tr></thead><tbody><tr><td>GET</td><td>/api/v1/ping</td></tr></tbody></table><p><strong>Contoh kode:</strong></p>',4),v=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[s(`
`),n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token string"},'"fmt"'),s(`
  `),n("span",{class:"token string"},'"net/http"'),s(`
  `),n("span",{class:"token string"},'"io/ioutil"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

  url `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token string"},'"http://localhost:3000/api/v1/ping"'),s(`
  method `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token string"},'"GET"'),s(`

  client `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token operator"},"&"),s("http"),n("span",{class:"token punctuation"},"."),s("Client "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  req`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" http"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"NewRequest"),n("span",{class:"token punctuation"},"("),s("method"),n("span",{class:"token punctuation"},","),s(" url"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"nil"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  res`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" client"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Do"),n("span",{class:"token punctuation"},"("),s("req"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"defer"),s(" res"),n("span",{class:"token punctuation"},"."),s("Body"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  body`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" ioutil"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadAll"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},"."),s("Body"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"string"),n("span",{class:"token punctuation"},"("),s("body"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(" request "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'request'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"var"),s(" options "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token string-property property"},"'method'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'GET'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string-property property"},"'url'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://localhost:3000/api/v1/ping'"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),s("options"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("error"),n("span",{class:"token punctuation"},","),s(" response")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Error"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("response"),n("span",{class:"token punctuation"},"."),s("body"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-php line-numbers-mode","data-ext":"php"},[n("pre",{class:"language-php"},[n("code",null,[n("span",{class:"token variable"},"$curl"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"curl_init"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token function"},"curl_setopt_array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$curl"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"array"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token constant"},"CURLOPT_URL"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token string single-quoted-string"},"'http://localhost:3000/api/v1/ping'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token constant"},"CURLOPT_RETURNTRANSFER"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token constant boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token constant"},"CURLOPT_ENCODING"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token string single-quoted-string"},"''"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token constant"},"CURLOPT_MAXREDIRS"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token constant"},"CURLOPT_TIMEOUT"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token constant"},"CURLOPT_FOLLOWLOCATION"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token constant boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token constant"},"CURLOPT_HTTP_VERSION"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token constant"},"CURL_HTTP_VERSION_1_1"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token constant"},"CURLOPT_CUSTOMREQUEST"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token string single-quoted-string"},"'GET'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token variable"},"$response"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"curl_exec"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$curl"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token function"},"curl_close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$curl"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"echo"),s(),n("span",{class:"token variable"},"$response"),n("span",{class:"token punctuation"},";"),s(`


`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=c(`<p><strong>Body pada respon:</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">20000</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Token tidak diberikan dalam body tetapi pada cookie dengan nama _csrf, jadi untuk parsing tokennya harus membaca cookie.</p>`,3);function h(y,T){const l=o("router-link"),e=o("CodeGroupItem"),p=o("CodeGroup");return u(),r("div",null,[d,n("nav",m,[n("ul",null,[n("li",null,[a(l,{to:"#mendapatkan-csrf-xsrf-token"},{default:t(()=>[s("Mendapatkan CSRF / XSRF Token")]),_:1})])])]),b,a(p,null,{default:t(()=>[a(e,{title:"Go Lang"},{default:t(()=>[v]),_:1}),a(e,{title:"NodeJS"},{default:t(()=>[f]),_:1}),a(e,{title:"PHP"},{default:t(()=>[_]),_:1})]),_:1}),g])}const C=i(k,[["render",h],["__file","mendapatkan-csrf-token.html.vue"]]);export{C as default};
