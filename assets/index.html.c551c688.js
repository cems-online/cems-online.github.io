import{_ as a,o as e,c as n,e as i}from"./app.675f509a.js";const r="/assets/dasboard_problem.bbc844f3.png",t="/assets/cek_setting_parameter.804b9fc5.png",s="/assets/setting_device.11eec978.png",p="/assets/tes_ping_rto.c804b245.png",u="/assets/ping_reply.ed0da0fb.png",m={},l=i('<h1 id="_1-pengukuran-parameter-cems-bermasalah" tabindex="-1"><a class="header-anchor" href="#_1-pengukuran-parameter-cems-bermasalah" aria-hidden="true">#</a> 1. Pengukuran parameter CEMS bermasalah?</h1><p><img src="'+r+'" alt="An Image"> Indikasi nilai pengukuran pengukuran parameter bermasalah yaitu pada halaman Dashboard menampilkan <strong>???, undefined, EVAL_ERR, atau nilai realtime tidak update</strong></p><p>Apabila ada parameter yang menampilkan nilai <strong>undefined, ????, atau nilainya tidak update</strong> berarti akses atau koneksi ke sumber data parameter tersebut terganggu, Kemudian apabila ada parameter yang menggunakan formula dari parameter yang menampilkan <strong>undefined, ????</strong> atau parameter yang tidak muncul nilainya maka formula perhitungannya dianggap tidak valid dan akan menampilkan nilai <strong>EVAL_ERR</strong></p><p><strong>Trobleshooting :</strong></p><ol><li>Cek dulu ke menu konfigurasi parameter, caranya masuk ke menu setting &gt; chimney &gt; pilih chimney yang parameternya bermasalah &gt; pilih parameternya untuk ngecek konfigurasi parameternya misal temperature</li></ol><p><img src="'+t+'" alt="An Image"></p><p>Pada bagian datasource terdapat kolom Device , Address &amp; Data type pastikan konfigurasi Datasource ini sesuai dengan konfigurasi / mapping yang disediakan sumber data, kalau ke 3 ini sudah sesuai dengan address mapping parameter berarti pada bagian setting parameter ini tidak ada masalah, lanjut ke Langkah ke 2</p><ol start="2"><li>Cek konfigurasi pada menu device karena di menu ini berfungsi untuk mengkonfigurasi koneksi ke sumber data.</li></ol><p>Cara masuk ke Menu Device: masuk ke menu setting &gt; pilih Device &gt; pilih device yang sesuai dengan konfigurasi data source parameter yang nilainya undefined , ???? atau nilainya tidak update <img src="'+s+'" alt="An Image"></p><p>Nah maka akan tampil halaman seperti di atas, yaitu tampilan konfigurasi untuk konek dengan sumber data. Hal pertama yang perlu di lakukan untuk mengecek koneksi dengan sumber data adalah dengan melakukan ping ke ip address sumber data , silahkan copy ip address pada kolom ip address kemudian paste kan pada terminal cmd untuk ping ip address sumber data nya , kalua respon nya request time out, maka bisa di pastikan ada masalah koneksi antara sumber data dan Server DIS jadi perlu minta bantuan tim IT dan juga tim Support hawa untuk memperbaiki masalah koneksi ini. Kalau respon nya reply berarti ada sesuatu hal yang lain yang menyebabkan Hawa / sumber data tidak menampilkan nilai</p><p>response ping RTO</p><p><img src="'+p+'" alt="An Image"></p><p>response ping Reply</p><p><img src="'+u+'" alt="An Image"></p><p>Berikut beberapa problem &amp; problem sloving yang bisa di lakukan user, kalau problem sloving sudah di lakukan tapi belum bisa normal silahkan hubungi tim IT, vendor CEMS &amp; tim Support Hawa</p><p>Setelah melakukan pengecekan seperti di atas berikut beberapa kemungkinan problem nya :</p><ol><li>kabel LAN antara Server DIS &amp; Sumber Data tidak terhubung dengan baik</li><li>ada perubahan ip address pada Server DIS atau Sumber Data</li><li>konfigurasi mapping parameter antara server DIS &amp; sumber data tidak cocok</li><li>port untuk jalur sumber data ter block firewall</li><li>sumber data bermasalah atau rusak</li><li>driver aplikasi untuk collect data dari sumber data mengalami crash atau ter stop</li></ol><p>Berikut problem sloving nya :</p><ol><li>Pastikan kabel LAN antara server DIS dan sumber data terhubung dengan baik</li><li>pastikan ip address antara server DIS &amp; sumber data sudah dalam 1 segmen jaringan yang sama dan bisa saling komunikasi atau tes ping</li><li>mengecek data list mapping parameter / addressing antara sumber data &amp; mapping di server DIS sudah cocok</li><li>pastikan port yang di gunakan untuk akses sumber data tidak terhalang firewall</li><li>cek kondisi device sumber data</li><li>perlu restart service aplikasi (harus di lakukan oleh tim Support Hawa)</li></ol>',19),d=[l];function k(g,o){return e(),n("div",null,d)}const c=a(m,[["render",k],["__file","index.html.vue"]]);export{c as default};