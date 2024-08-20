import{_ as s,r,o as l,c as o,b as a,d as e,f as n,a as d,e as i}from"./app.675f509a.js";const m="/assets/chrome.1bd4598d.png",g="/assets/mozilla-firefox.d7f63cd6.png",h="/assets/edge.03e1adc2.png",p="/assets/sample-network-topologi.9b990b59.png",k="/assets/login.44183e55.png",u={},c=i('<h1 id="_1-mengakses-hawa" tabindex="-1"><a class="header-anchor" href="#_1-mengakses-hawa" aria-hidden="true">#</a> 1. Mengakses hawa</h1><h2 id="_1-1-persiapan" tabindex="-1"><a class="header-anchor" href="#_1-1-persiapan" aria-hidden="true">#</a> 1.1 Persiapan</h2><p>Untuk mulai menggunakan atau mengakses CEMS Online, kita memerlukan web browser yang mendukung aplikasi web SPA (Single Page Application).</p><p>Beberapa web browser yang biasa digunakan diantaranya adalah:</p><ul><li>Google chrome <img style="display:inline-block;margin:10px 20px;vertical-align:middle;" src="'+m+'" height="50"></li><li>Mozilla Firefox <img style="display:inline-block;margin:10px 20px;vertical-align:middle;" src="'+g+'" height="50"></li><li>Microsoft Edge <img style="display:inline-block;margin:10px 20px;vertical-align:middle;" src="'+h+'" height="50"></li></ul><p>Jika anda belum memiliki salah satu browser yang disebutkan diatas, kita bisa mengunduhnya pada alamat:</p>',6),b={href:"https://www.google.com/intl/id/chrome/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.mozilla.org/id/firefox/new/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.microsoft.com/id-id/edge",target:"_blank",rel:"noopener noreferrer"},w=a("h2",{id:"_1-2-membuka-hawa",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-2-membuka-hawa","aria-hidden":"true"},"#"),e(" 1.2 Membuka hawa")],-1),y=a("p",null,"Hawa CEMS online merupakan aplikasi berbasis web yang bisa diakses menggunakan alamat web atau URL (Uniform Resource Locator). Pengaturan standar aplikasi cems online menggunakan port 3000.",-1),x={href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"},M=a("code",null,"http://localhost:3000",-1),v={href:"http://127.0.0.1:3000",target:"_blank",rel:"noopener noreferrer"},E=a("code",null,"http://127.0.0.1:3000",-1),N=a("p",null,"Jika kita akan mengakses hawa yang berada pada komputer lain, kita bisa mengaksesnya dengan menggunakan alamat IP komputer tersebut. Berikut ini adalah ilustrasi untuk akses hawa dari remote komputer/laptop yang terhubung ke hub yang sama atau dalam 1 segmen jaringan:",-1),P=a("p",null,[a("img",{src:p,alt:"Local network"})],-1),A={href:"http://192.168.100.114:3000",target:"_blank",rel:"noopener noreferrer"},J=a("code",null,"http://192.168.100.114:3000",-1),L=i('<h2 id="_1-3-login" tabindex="-1"><a class="header-anchor" href="#_1-3-login" aria-hidden="true">#</a> 1.3 Login</h2><div class="custom-container danger"><p class="custom-container-title">PERINGATAN</p><p>Untuk menjaga keamanan, mohon segera mengganti username dan password, dan anda juga harus mengingat username dan password yang baru.</p></div><p>Jika berhasil, tampilan pertama kali yang terbuka adalah halaman login seperti berikut: <img src="'+k+'" alt="An image"></p><p>Agar kita bisa mengakses fitur-fitur yang tersedia di hawa, kita harus memiliki akun hawa terlebih dahulu. Jika belum ada perubahan, secara standar hawa memiliki 2 akun, yaitu akun admin dan operator.</p><table><thead><tr><th style="text-align:left;">Username</th><th style="text-align:left;">Password</th><th style="text-align:left;">Roles</th></tr></thead><tbody><tr><td style="text-align:left;">admin</td><td style="text-align:left;">admin123</td><td style="text-align:left;">administrator</td></tr><tr><td style="text-align:left;">operator</td><td style="text-align:left;">operator</td><td style="text-align:left;">operator</td></tr></tbody></table><p>Jika berhasil login, maka akan diarahkan ke halaman utama yang mungkin berbeda untuk setiap site.</p>',6);function S(B,U){const t=r("ExternalLinkIcon");return l(),o("div",null,[c,a("ul",null,[a("li",null,[a("a",b,[e("Google chrome"),n(t)])]),a("li",null,[a("a",_,[e("Mozilla firefox"),n(t)])]),a("li",null,[a("a",f,[e("Microsoft edge"),n(t)])])]),w,y,a("p",null,[e("Sehingga jika kita ingin membuka pada komputer dimana aplikasi hawa diinstall, kita bisa mengetikkan alamat "),a("a",x,[M,n(t)]),e(" atau "),a("a",v,[E,n(t)]),e(".")]),N,P,a("p",null,[e("Jika kondisi sambungannya seperti yang digambarkan di atas, maka kita bisa mengakses hawa dengan menggunakan alamat "),a("a",A,[J,n(t)]),e(". Tetapi sebelum kita bisa mengakses alamat tersebut, kita harus memastikan bahwa pada firewall, port yang digunakan oleh hawa sudah diberikan akses.")]),L,d(` ## 1.4 Mengganti password

## 1.5 Menambahkan pengguna `)])}const j=s(u,[["render",S],["__file","membuka-hawa.html.vue"]]);export{j as default};