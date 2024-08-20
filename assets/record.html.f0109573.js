import{_ as r,r as e,o as u,c as k,b as n,f as a,w as t,d as s,e as c}from"./app.675f509a.js";const d={},m=n("h1",{id:"record",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#record","aria-hidden":"true"},"#"),s(" Record")],-1),b={class:"table-of-contents"},v=c('<h3 id="mendapatkan-rerata-data-pengukuran" tabindex="-1"><a class="header-anchor" href="#mendapatkan-rerata-data-pengukuran" aria-hidden="true">#</a> Mendapatkan rerata data pengukuran</h3><p>Berfungsi untuk mendapatkan mendapatkan rerata data pengukuran.</p><table><thead><tr><th>Method</th><th>Path</th></tr></thead><tbody><tr><td>POST</td><td>/api/v1/cems/record</td></tr></tbody></table><p><strong>Header:</strong></p>',4),g={class:"custom-container warning"},h=n("p",{class:"custom-container-title"},"CATATAN",-1),y=n("p",null,"Untuk versi sebelumnya membutuhkan X-XSRF-Token pada header.",-1),f=c("<table><thead><tr><th>Key</th><th>Description</th></tr></thead><tbody><tr><td>X-XSRF-Token</td><td>CSRF token</td></tr></tbody></table><p><strong>Body:</strong></p><table><thead><tr><th>Parameter</th><th>Tipe Data</th><th>Wajib ada</th><th>Deskripsi</th><th>Contoh</th></tr></thead><tbody><tr><td>stackUID</td><td>string</td><td>ya</td><td>UID cerobong</td><td>&quot;dc04ce57-b6be-4aee-aff4-fbab1a3b32ad&quot;</td></tr><tr><td>from</td><td>string</td><td>ya</td><td>Awal waktu pengukuran</td><td>&quot;now()-1d&quot; atau &quot;1646240400000&quot;</td></tr><tr><td>to</td><td>string</td><td>ya</td><td>Akhir waktu pengukuran</td><td>&quot;now()&quot; atau &quot;1646413199000&quot;</td></tr><tr><td>parameters</td><td>array dari string</td><td>ya</td><td>Nama parameter</td><td>[&quot;SO2&quot;, &quot;SO2_C&quot;, &quot;NOX&quot;, &quot;NOX_C&quot;]</td></tr><tr><td>avg</td><td>string</td><td>ya</td><td>Rerata data, durasinya bisa dalam satuan detik (s), menit (m), jam (h) dan hari (h)</td><td>&quot;1m&quot; untuk rerata 1 menit</td></tr></tbody></table><p><strong>Contoh kode</strong></p>",4),_=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token string"},'"fmt"'),s(`
  `),n("span",{class:"token string"},'"strings"'),s(`
  `),n("span",{class:"token string"},'"net/http"'),s(`
  `),n("span",{class:"token string"},'"io/ioutil"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

  url `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token string"},'"http://localhost:3000/api/v1/cems/record"'),s(`
  method `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token string"},'"POST"'),s(`

  payload `),n("span",{class:"token operator"},":="),s(" strings"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"NewReader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"`{`"),n("span",{class:"token operator"},"+"),s(`"
"`),n("span",{class:"token operator"},"+"),n("span",{class:"token string"},'`\n    "from": "1646240400000",`'),n("span",{class:"token operator"},"+"),s(`"
"`),n("span",{class:"token operator"},"+"),n("span",{class:"token string"},'`\n    "to": "1646413199000",`'),n("span",{class:"token operator"},"+"),s(`"
"`),n("span",{class:"token operator"},"+"),n("span",{class:"token string"},'`\n    "avg": "5m",`'),n("span",{class:"token operator"},"+"),s(`"
"`),n("span",{class:"token operator"},"+"),n("span",{class:"token string"},'`\n    "chartStyle": "single",`'),n("span",{class:"token operator"},"+"),s(`"
"`),n("span",{class:"token operator"},"+"),n("span",{class:"token string"},'`\n    "stackUID": "dc04ce57-b6be-4aee-aff4-fbab1a3b329c",`'),n("span",{class:"token operator"},"+"),s(`"
"`),n("span",{class:"token operator"},"+"),n("span",{class:"token string"},'`\n    "parameters": [`'),n("span",{class:"token operator"},"+"),s(`"
"`),n("span",{class:"token operator"},"+"),n("span",{class:"token string"},'`\n        "SO2",`'),n("span",{class:"token operator"},"+"),s(`"
"`),n("span",{class:"token operator"},"+"),n("span",{class:"token string"},'`\n        "SO2_C"`'),n("span",{class:"token operator"},"+"),s(`"
"`),n("span",{class:"token operator"},"+"),n("span",{class:"token string"},"`\n    ]`"),n("span",{class:"token operator"},"+"),s(`"
"`),n("span",{class:"token operator"},"+"),n("span",{class:"token string"},"`\n}`"),n("span",{class:"token punctuation"},")"),s(`

  client `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token operator"},"&"),s("http"),n("span",{class:"token punctuation"},"."),s("Client "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  req`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" http"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"NewRequest"),n("span",{class:"token punctuation"},"("),s("method"),n("span",{class:"token punctuation"},","),s(" url"),n("span",{class:"token punctuation"},","),s(" payload"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  req`),n("span",{class:"token punctuation"},"."),s("Header"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"x-api-key"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"NE42aU4tSFZrOjdjODRiZThkNTczM2Y5YWM 4OGQ1ZDlkOTdiY2QzOGZm"'),n("span",{class:"token punctuation"},")"),s(`
  req`),n("span",{class:"token punctuation"},"."),s("Header"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"X-XSRF-Token"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"csrf-token-from-cookie"'),n("span",{class:"token punctuation"},")"),s(`
  req`),n("span",{class:"token punctuation"},"."),s("Header"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Content-Type"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"application/json"'),n("span",{class:"token punctuation"},")"),s(`

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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(" request "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'request'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"var"),s(" options "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token string-property property"},"'method'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string-property property"},"'url'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://localhost:3000/api/v1/cems/record'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string-property property"},"'headers'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string-property property"},"'x-api-key'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'NE42aU4tSFZrOjdjODRiZThkNTczM2Y5YWM4OGQ1ZDlkOTdiY2QzOGZm'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string-property property"},"'X-XSRF-Token'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'csrf-token-from-cookie'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string-property property"},"'Content-Type'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'application/json'"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"body"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string-property property"},'"from"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1646240400000"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string-property property"},'"to"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1646413199000"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string-property property"},'"avg"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"5m"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string-property property"},'"chartStyle"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"single"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string-property property"},'"stackUID"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"dc04ce57-b6be-4aee-aff4-fbab1a3b329c"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string-property property"},'"parameters"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token string"},'"SO2"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"SO2_C"'),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),s("options"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("error"),n("span",{class:"token punctuation"},","),s(" response")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Error"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("response"),n("span",{class:"token punctuation"},"."),s("body"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-php line-numbers-mode","data-ext":"php"},[n("pre",{class:"language-php"},[n("code",null,[n("span",{class:"token php language-php"},[n("span",{class:"token delimiter important"},"<?php"),s(`

`),n("span",{class:"token variable"},"$curl"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"curl_init"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token function"},"curl_setopt_array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$curl"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"array"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token constant"},"CURLOPT_URL"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token string single-quoted-string"},"'http://localhost:3000/api/v1/cems/record'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token constant"},"CURLOPT_RETURNTRANSFER"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token constant boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token constant"},"CURLOPT_ENCODING"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token string single-quoted-string"},"''"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token constant"},"CURLOPT_MAXREDIRS"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token constant"},"CURLOPT_TIMEOUT"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token constant"},"CURLOPT_FOLLOWLOCATION"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token constant boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token constant"},"CURLOPT_HTTP_VERSION"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token constant"},"CURL_HTTP_VERSION_1_1"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token constant"},"CURLOPT_CUSTOMREQUEST"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token string single-quoted-string"},"'POST'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token constant"},"CURLOPT_POSTFIELDS"),s(),n("span",{class:"token operator"},"=>"),n("span",{class:"token string single-quoted-string"},`'{
    "from": "1646240400000",
    "to": "1646413199000",
    "avg": "5m",
    "chartStyle": "single",
    "stackUID": "dc04ce57-b6be-4aee-aff4-fbab1a3b329c",
    "parameters": [
        "SO2",
        "SO2_C"
    ]
}'`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token constant"},"CURLOPT_HTTPHEADER"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"array"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string single-quoted-string"},"'x-api-key: NE42aU4tSFZrOjdjODRiZThkNTczM2Y5YWM4OGQ1ZDlkOTdiY2QzOGZm'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string single-quoted-string"},"'X-XSRF-Token'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string single-quoted-string"},"'csrf-token-from-cookie'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string single-quoted-string"},"'Content-Type: application/json'"),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token variable"},"$response"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"curl_exec"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$curl"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token function"},"curl_close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$curl"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"echo"),s(),n("span",{class:"token variable"},"$response"),n("span",{class:"token punctuation"},";"),s(`


`)])])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=c(`<p><strong>Contoh respon</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">20000</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;statement_id&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Series&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stat&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;time&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;SO2&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;SO2_C&quot;</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">[</span>
                        <span class="token number">1646240400000</span><span class="token punctuation">,</span>
                        <span class="token number">1.4472116142323326</span><span class="token punctuation">,</span>
                        <span class="token number">34.419074404696154</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token punctuation">[</span>
                        <span class="token number">1646240700000</span><span class="token punctuation">,</span>
                        <span class="token number">0.44690545793658515</span><span class="token punctuation">,</span>
                        <span class="token number">10.77162740421586</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>

                    ...

                    <span class="token punctuation">[</span>
                        <span class="token number">1646412900000</span><span class="token punctuation">,</span>
                        <span class="token number">1.5531294298555327</span><span class="token punctuation">,</span>
                        <span class="token number">43.89767170746943</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Messages&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function S(R,C){const l=e("router-link"),p=e("RouterLink"),o=e("CodeGroupItem"),i=e("CodeGroup");return u(),k("div",null,[m,n("nav",b,[n("ul",null,[n("li",null,[a(l,{to:"#mendapatkan-rerata-data-pengukuran"},{default:t(()=>[s("Mendapatkan rerata data pengukuran")]),_:1})])])]),v,n("div",g,[h,y,n("p",null,[s("Klik "),a(p,{to:"/api/controllers/mendapatkan-csrf-token.html"},{default:t(()=>[s("disini")]),_:1}),s(" untuk melihat cara mendapatkan XSRF-Token.")])]),f,a(i,null,{default:t(()=>[a(o,{title:"GO"},{default:t(()=>[_]),_:1}),a(o,{title:"NodeJS"},{default:t(()=>[q]),_:1}),a(o,{title:"PHP"},{default:t(()=>[O]),_:1})]),_:1}),T])}const P=r(d,[["render",S],["__file","record.html.vue"]]);export{P as default};
