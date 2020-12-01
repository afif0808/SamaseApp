import React from 'react'
import { View , Text, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import VerticalSeparator from '../components/VerticalSeparator'
 

function ListItem({text}) {
    return (
        <View style={{flexDirection:"row"}}>
            <Text> - {text} </Text>
        </View>
    )
}

function PointOne() {
    return (
        <View>
            <Text style={styles.title}>1. Ketentuan Umum</Text>
            <VerticalSeparator height={10} />
            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>1.1 </Text> 
                Aplikasi Samase ini adalah aplikasi mobile yang dimiliki dan dikelola oleh PT Samase Maju Bersama yang berkedudukan di Kota Bandung – Indonesia.

            </Text>

            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>1.2 </Text>
                Syarat & Ketentuan aplikasi ini merupakan bagian yang tidak terpisahkan dari Kebijakan Privasi dan ketentuan lainnya yang terdapat di dalam aplikasi.
            </Text>

            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>1.3 </Text>
                Aplikasi ini ditujukan untuk para Pengguna yang berkedudukan di wilayah hukum Republik Indonesia, baik Pria maupun Wanita berusia minimal 18 (delapan belas) tahun, telah menikah dan /atau paham hukum dengan suatu perjanjian. Ketentuan lebih lanjut tentang keanggotaan (membership) mengacu kepada Syarat & Ketentuan ini.
            </Text>
        </View>
    )
}

function PointTwo() {
    return (
        <View>
            <Text style={styles.title}>2. Tentang Aplikasi Samase</Text>
            <VerticalSeparator height={10} />
            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>2.1 </Text> 
                Aplikasi Samase adalah layanan keanggotaan (membership) yang hadir untuk memberikan solusi berupa penawaran potongan harga, informasi promo serta informasi terkait produk untuk pengguna Aplikasi. Aplikasi ini memberikan informasi yang berhubungan dengan promosi produk yang dijual di Official Store Samase maupun dikemitraan Samase. Dengan mengakses Aplikasi ini, Pengguna sepenuhnya memahami bahwa aplikasi Samase memberikan informasi dan edukasi informasi ini atas permintaan Pengguna pribadi.
            </Text>           
        </View>
    )
}

function PointThree() {
    return (
        <View>
            <Text style={styles.title}>3. Akun, Sandi Dan Keamanan Akun </Text>
            <Text style={{margin:5}}>
                Layanan pada Aplikasi hanya dapat diakses oleh akun terdaftar. Oleh karenanya, Anda akan diminta untuk mengakses aplikasi dengan Akun Terdaftar dan /atau mendaftar terlebih dahulu Akun baru dengan mengisi alamat identitas dan /atau informasi pribadi tertentu dengan membuat Akun (username) dan Sandi (password). Apabila Anda memilih nama pengguna (username) dengan nama yang tidak sopan dan /atau tidak pantas menurut atas kebijakan Kami, maka kami berhak untuk menangguhkan atau mengakhiri Akun Anda.
            </Text>
            <Text style={{margin:5}}>
                Untuk membuat ID Pengguna (username) maka Anda akan diminta untuk mengisi data diri dengan sebenar-benarnya berupa Nama, Jenis Kelamin, Alamat E-mail, Tanggal lahir dan No Ponsel serta membuat kata sandi (password) dengan kode unik yang diinginkan, untuk rincian lebih lanjut terkait pembuatan ID Pengguna (username) akan dijelaskan di point no 4 (4.2) dalam Syarat & Ketentuan ini.
            </Text>
            <Text style={{margin:5}}>
                Anda setuju untuk : (a) menjaga kerahasiaan kata sandi Anda dan hanya menggunakan ID Pengguna dan kata sandi Anda saat login; (b) memastikan bahwa Anda keluar dari akun Anda pada akhir setiap sesi di Aplikasi; (c) segera memberi tahu Kami tentang penggunaan tanpa izin atas Akun, ID Pengguna dan/atau kata sandi Anda; dan (d) memastikan bahwa informasi Akun Anda akurat dan terkini. Anda sepenuhnya bertanggung jawab untuk semua kegiatan yang dilakukan dengan menggunakan ID Pengguna dan Akun Anda bahkan bila kegiatan atau penggunaan tersebut tidak dilakukan oleh Anda. Kami tidak bertanggung jawab untuk setiap kerugian atau kerusakan yang timbul dari penggunaan tanpa izin atas kata sandi Anda atau kegagalan Anda untuk mematuhi ketentuan ini kecuali Akun Anda diretas (hack) oleh pihak yang tidak bertanggung jawab maka Kami akan melakukan invetigasi terlebih dahulu dan memulihkan Akun Anda.
            </Text>
            <Text style={{margin:5}}>
                Anda setuju bahwa untuk alasan apapun atas kebijakan Kami sendiri dan dengan ataupun tanpa pemberitahuan atau kebijakan kepada Anda atau pihak ketiga mana pun, Kami dapat mengakhiri Akun dan ID Pengguna Anda serta menghapus atau membuang setiap Konten yang berkaitan dengan Akun dan ID Pengguna Anda dari Aplikasi. Dasar untuk pengakhiran tersebut dapat termasuk, tetapi tidak terbatas pada : (a) tidak aktif dalam jangka waktu lama;  (b) pelanggaran terhadap ketentuan Syarat dan Ketentuan ini; (c) perilaku yang ilegal, menipu, melecehkan, memfitnah, mengancam dan/atau kasar; (d) memiliki beberapa akun pengguna untuk alasan yang tidak sah; dan/atau (e) perilaku yang merugikan Pengguna lain, pihak ketiga, atau kepentingan bisnis Kami. Penggunaan Akun untuk tujuan yang ilegal, menipu, melecehkan, memfitnah, mengancam dan/atau kasar dapat dirujuk ke pihak penegak hukum tanpa pemberitahuan kepada Anda. Apabila permasalahan hukum timbul atau tindakan penegakan hukum dilakukan dalam kaitan dengan Akun anda atau penggunaan layanan pada Aplikasi oleh Anda untuk alasan apapun, dapat mengakhiri Akun Anda dengan segera dengan atau tanpa pemberitahuan.
                Anda dapat menghapus Akun Anda dengan memberi tahu Kami melalui customer support email tentang niatan tersebut.

            </Text>
            <Text>

            </Text>
        </View>
    )
}

function PointFour() {
    return (
        <View>
            <Text style={styles.title}>4. Syarat & Ketentuan keanggotaan Aplikasi Samase</Text>
            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>4.1 </Text> 
                Layanan pada Aplikasi hanya dapat diakses oleh akun terdaftar. Oleh karenanya, Anda akan diminta untuk mengakses aplikasi dengan Akun Terdaftar dan /atau mendaftar terlebih dahulu Akun baru dengan mengisi alamat identitas dan /atau informasi pribadi tertentu dengan membuat Akun (username) dan Sandi (password). Apabila Anda memilih nama pengguna (username) dengan nama yang tidak sopan dan /atau tidak pantas menurut atas kebijakan Kami, maka kami berhak untuk menangguhkan atau mengakhiri Akun Anda.
            </Text>

            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>4.2 </Text> 
                Pengguna (“Anda”) kemudian harus melakukan pendaftaran (registrasi) saat akan melakukan Login pada Aplikasi sebagai berikut :            
            </Text>

            <Text style={{margin:10,fontWeight:"bold"}}>
                4.2.1 Registrasi
            </Text>

            <Text style={{marginLeft:15,marginBottom:10}}>
                <Text style={{fontWeight:"bold"}}>4.2.1.1 </Text>
                Pada saat pendaftaran Anda akan diminta mengisi Username, Email, Sandi, Konfirmasi Sandi. Setelah itu Anda akan diminta untuk memasukkan kode verifikasi yang dikirimkan ke email yang Anda gunakan untuk pendaftaran.
            </Text>

            <Text style={{marginLeft:15,marginBottom:10}}>
                <Text style={{fontWeight:"bold"}}>4.2.1.2 </Text>
                Pada saat pendaftaran Anda akan diminta mengisi Username, Email, Sandi, Konfirmasi Sandi. Setelah itu Anda akan diminta untuk memasukkan kode verifikasi yang dikirimkan ke email yang Anda gunakan untuk pendaftaran.
            </Text>

            <Text style={{marginLeft:15}}>
                <Text style={{fontWeight:"bold"}}>4.2.1.3 </Text>
                Pengguna dapat langsung menggunakan akun google yang terdaftar di sistem ponsel dan secara otomatis akan masuk (login) ke dalam Aplikasi, Anda dapat mengganti Nama Akun dan Sandi di menu Akun di dalam Aplikasi.
            </Text>

            <Text style={{margin:10,fontWeight:"bold"}}>
                4.2.2 Login
            </Text>
            <Text style={{marginLeft:15,marginBottom:5}}>
                Pengguna masuk (login) ke dalam aplikasi dengan menggunakan alamat email terdaftar dan sandi (password).
            </Text>

            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>4.3 </Text> 
                Anda bertanggung jawab penuh atas penggunaan Nama Akun dan Sandi Pengguna. Anda juga bertanggung jawab untuk segera melaporkan kepada Kami apabila Akun Anda diretas (hack) dan /atau digunakan pihak yang tidak bertanggung jawab dan /atau digunakan secara tidak sah oleh pihak lain dan apabila terjadi pelanggaran keamanan lainnya.            
            </Text>
        
            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>4.4 </Text> 
                Kami berhak sewaktu-waktu meminta Pengguna untuk mengganti dan /atau memperbaiki Nama Akun dan Sandi jika diperlukan demi keamanan akses.
            </Text>

            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>4.5 </Text> 
                Semua akun harus diregistrasi dengan alamat email pribadi yang valid dan aktif yang dapat Pengguna akses secara teratur sehingga email bisa terkirim kepada Pengguna.
            </Text>

            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>4.6 </Text> 
                Akun yang terdaftar atas nama alamat email orang lain, atau dengan alamat email sementara akan ditutup tanpa pemberitahuan terlebih dahulu. Kami berhak meminta Pengguna untuk memvalidasi dan /atau memverifikasi ulang akunnya jika Kami mengetahui Pengguna tersebut menggunakan alamat email yang tidak valid dan tidak aktif.             
            </Text>

            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>4.7 </Text> 
                Kami berhak menutup akun jika Pengguna terbukti menggunakan IP proxy (Alamat Internet Protocol) untuk menyembunyikan ID Pengguna ganda, yang berpotensi mengacaukan layanan Aplikasi Samase dengan cara apapun atau melakukan perbuatan pelanggaran hukum lainnya.
            </Text>

            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>4.8 </Text> 
                Dengan memberikan data diri Anda sebagaimana dimaksud dalam Angka 4(4.2) Syarat dan Ketentuan ini (“Informasi Pribadi”) melalui Aplikasi, Anda sebagai Pengguna memberikan persetujuan kepada Kami untuk:
            </Text>

            <Text style={{margin:10}}>
                <Text style={{fontWeight:"bold"}}>4.8.1 </Text> 
                Menyimpan dan menggunakan Informasi Pribadi untuk memverifikasi usia Anda dan ketaatan atas kebijakan internal Samase.
            </Text>

            <Text style={{margin:10}}>
                <Text style={{fontWeight:"bold"}}>4.8.2 </Text> 
                Mengirimkan informasi kepada Anda dengan cara apapun (surat, email, SMS, telepon, dan lain-lain) komunikasi yang berhubungan dengan promosi yang diberikan oleh Samase, termasuk namun tidak terbatas pada informasi dan materi tips penggunaan produk dan informasi lain yang berhubungan dengan Samase, sepanjang diizinkan oleh hukum yang berlaku;
            </Text>


            <Text style={{margin:10}}>
                <Text style={{fontWeight:"bold"}}>4.8.3 </Text> 
                Mengungkapkan Informasi Pribadi kepada penyedia layanan Samase untuk tujuan di atas dan/atau afiliasi Samase dan/atau pihak ketiga yang ditunjuk oleh Samase untuk melakukan hal-hal di atas untuk tujuannya sendiri serta (jika diperlukan oleh hukum) kepada pihak yang berwenang; dan/atau
            </Text>


            <Text style={{margin:10}}>
                <Text style={{fontWeight:"bold"}}>4.8.4 </Text> 
                Menggunakan tanggapan, komentar, gambar, cerita dan/atau tulisan yang Anda kirimkan ke Aplikasi untuk tujuan apapun, termasuk namun tidak terbatas untuk materi komunikasi atau promosi internal dan eksternal Samase.
            </Text>
        </View>
    )
}

function PointFive() {
    return (
        <View>
            <Text style={styles.title}>5. Penggunaan Aplikasi Samase</Text>

            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>5.1 </Text> 
                Aplikasi dan seluruh konten/materi yang terdapat di dalam Aplikasi Samase hanya digunakan oleh Pengguna sendiri ( pribadi) dan tidak untuk tujuan komersial.           
            </Text>

            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>5.2 </Text> 
                Setiap Pengguna akan mendapatkan potongan harga sebesar 5% setiap melakukan pembelanjaan baik di Official Store Samase maupun di toko kemitraan Samase dengan menunjukkan konten potongan harga 5% di halaman beranda di dalam Aplikasi.
            </Text>

            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>5.3 </Text> 
                Pengguna diperkenankan untuk mengutip atau mengunduh sebagian atau seluruh bagian dari materi atau konten yang kami sediakan di Aplikasi dan media sosial Samase sepanjang mencantumkan sumber, yaitu Aplikasi atau Situs kami. Kami juga mendorong Pengguna untuk menggunakan fitur sharing ke media sosial saat memberikan penilaian (rate) dalam Aplikasi (ketika fungsi ini sudah tersedia)
            </Text>

            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>5.4 </Text> 
                Pengguna tidak dapat mendistribusikan, memodifikasi, mentransmisikan, me-repost atau menggunakan materi dalam Aplikasi ini untuk tujuan umum atau komersial tanpa persetujuan tertulis terlebih dahulu dari Samase. Semua hak cipta dan hak kepemilikan lainnya dalam materi yang diunduh (downloaded material) atau di capture harus dijaga dan dipertahankan.
            </Text>

            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>5.5 </Text> 
                Penggunaan Aplikasi ini adalah dengan risiko pribadi Pengguna. Samase atau pihak lain yang terlibat dalam penciptaan, pembuatan dan/atau pengelolaan Aplikasi ini tidak bertanggung jawab atas segala kerugian langsung, tidak disengaja, konsekuensial, tidak langsung atau kerugian yang diakibatkan oleh akses dan penggunaan Aplikasi ini, termasuk namun tidak terbatas pada : kerusakan, atau virus yang mungkin menginfeksi peralatan komputer atau mobile tanpa membatasi ketentuan sebelumnya, segala sesuatu pada Aplikasi ini disediakan untuk Pengguna 'apa adanya' tanpa jaminan isi atau jaminan keberhargaannya serta kesesuaiannya untuk tujuan tertentu, atau tidak ada jaminan bebas dari pelanggaran hukum.  
            </Text>
        </View>
    )
}

function PointSix() {
    return (
        <View>
            <Text style={styles.title}>6. Hak Kekayaan Intelektual</Text>
            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>6.1 </Text> 
                Semua isi dari Aplikasi ini, termasuk namun tidak terbatas pada teks, foto, grafik, materi audio, perangkat lunak maupun bentuk lainnya adalah hak cipta milik Samase dan/atau afiliasinya dan/atau pihak ketiga lain yang ditunjuk oleh Samase, kecuali dinyatakan lain, dan tidak dapat digunakan tanpa izin tertulis dari Samase atau pemilik hak tersebut. Gambar yang ditampilkan di Aplikasi merupakan milik, atau digunakan harus dengan izin             
                oleh Samase. Penggunaan dan/atau modifikasi pada gambar-gambar tersebut oleh Anda sangat dilarang. Penggunaan yang tidak sah dari gambar dapat melanggar hak cipta, merek, privasi dan/atau peraturan yang berlaku dapat dikenakan sanksi hukum sesuai ketentuan yang berlaku. Konten atau materi yang terkandung di dalam Aplikasi ini dapat diakses oleh Anda sesuai syarat dan ketentuan yang berlaku untuk para anggota (member) dan non anggota (non-member) yang ingin mendaftar Aplikasi Samase melalui Aplikasi.
            </Text>

            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>6.2 </Text> 
                Pada saat Pengguna mengirimkan atau menulis materi ke atau pada Aplikasi ini, Pengguna telah setuju untuk memberikan kepada Samase hak non-eksklusif, berlaku di seluruh dunia, bebas dari kewajiban atas royalti, untuk menggunakan, mereproduksi, mengubah, mengadaptasi, menerbitkan, menerjemahkan, menciptakan karya turunan, memajang dan/atau menyebarkan materi tersebut ke seluruh dunia melalui Aplikasi ini, atau dengan cara yang lain tanpa ada kewajiban apapun terhadap Pengguna.
            </Text>

            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>6.3 </Text> 
                Semua isi dalam Aplikasi ini tidak dapat ditafsirkan sebagai izin, dengan implikasi, larangan atau lainnya, atas lisensi dan/atau hak atas merek dagang tanpa adanya izin tertulis dari Samase. Penggunaan terhadap Merek Dagang dan isi Aplikasi ini oleh Pengguna kecuali yang telah ditentukan dalam Syarat dan Ketentuan ini, adalah dilarang. Samase akan menginformasikan kepada Pengguna bahwa Samase akan mempertahankan hak kekayaan intelektualnya dalam Aplikasi ini beserta isinya sampai sejauh yang diperbolehkan oleh hukum, termasuk mengupayakan sanksi hukum.
            </Text>

            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>6.4 </Text> 
                Kami berhak mengubah atau menghapus materi pada Aplikasi sewaktu-waktu berdasarkan pertimbangan Samase sendiri.
            </Text>

            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>6.5 </Text> 
                Kami dapat sewaktu-waktu mengubah Syarat dan Ketentuan ini dengan memperbarui postingan pada Aplikasi. Dengan mengakses Aplikasi, Anda secara hukum terikat pada revisi tersebut, itulah sebabnya akses Aplikasi ini.            </Text>
        </View>
    )
}

function PointSeven() {
    return (
        <View>
            <Text style={styles.title}>7. Kebijakan Privasi</Text>

            <Text style={{fontWeight:"bold",margin:5}}>7.1 Informasi Pribadi Pengguna</Text> 

            <Text style={{margin:5}}>
                Untuk mengakses Aplikasi, Anda akan diminta untuk menggunakan Akun yang telah terdaftar atau membuat ID Pengguna baru dengan cara mendaftar. Kami akan meminta Informasi Pribadi Anda yang sebenar-benarnya.
                Kami berkomitmen untuk memastikan dan memelihara keamanan terkait proses pengumpulan dan pemrosesan Informasi Pribadi Anda dan memastikan perlindungan atas keamanan Informasi Pribadi Anda. 
            </Text>

            <Text style={{fontWeight:"bold",margin:5}}>7.2 Tujuan Pengumpulan Informasi Pribadi Pengguna</Text> 


            <Text style={{margin:5}}>
                Tujuan utama pengumpulan informasi anggota adalah untuk menawarkan layanan yang paling sesuai bagi anggota saat mereka berkunjung dan menggunakan layanan kami dari Aplikasi tanpa biaya. Pada saat-saat tertentu, kami akan mengirimkan pemberitahuan atau email untuk menginformasikan berita, kegiatan dan layanan. Tujuan lainnya adalah untuk verifikasi kebenaran Informasi Pribadi Pengguna.
            </Text>

            <Text style={{fontWeight:"bold",margin:5}}>7.3 Tujuan Pengumpulan Informasi Pribadi Pengguna</Text> 

            <Text style={{margin:5}}>
            Jika Kami membutuhkan informasi pribadi tambahan, Kami akan mengumpulkannya dan tetap menjaga kerahasiaan data tersebut. Dalam hal tertentu saat Kami perlu mengungkapkan Informasi Pribadi Anda ke pihak ketiga, Kami akan memberitahukan terlebih dahulu hal tersebut kepada Anda. Anggota tersebut akan selalu memiliki hak untuk menyetujui atau tidak menyetujui pengungkapan tersebut, atau bahkan menolak layanan tersebut sesuai keinginannya.
            </Text>
        </View>
    )
}

function PointEight() {
    return (
        <View>
            <Text style={styles.title}>8. Pengungkapan Informasi Pribadi</Text>
            <Text>
            Kami tidak akan mengungkapkan Informasi Pribadi anggota kepada pihak lain, kecuali Anda mengizinkan sebagaimana disampaikan pada bagian awal untuk persetujuan Anda atau dalam kondisi berikut ini :
            </Text>

            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>8.1 </Text> 
                yang diberikan kepada mitra dagang dan/atau aliansi bisnis maupun sponsor bisnis. Samase dapat mengungkapkan informasi pribadi kepada rekan bisnis dan sponsor bisnis. Samase akan menginformasikan terlebih dahulu hal ini sebelum mengungkapkan atau mengalihkan informasi keanggotaan Anda. Rincian mengenai pengungkapan informasi bisa dilihat pada bagian awal Syarat dan Ketentuan.
            </Text>

            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>8.2 </Text> 
                beberapa program promosi, sponsor program mungkin dapat meminta informasi tambahan. Untuk informasi ini, Samase berhak untuk mengungkapkan Informasi Pribadi Anda dengan tujuan agar kami bisa tanggap terhadap kebutuhan Anda di masa yang akan datang secara efektif.            
            </Text>


            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>8.3 </Text> 
                Suatu saat Anda mungkin mendapat tawaran informasi atau penawaran khusus dari pihak ketiga. Jika Anda menerima tawaran itu, nama dan alamat email Anda akan terungkap. dapat mengungkapkan informasi dalam hal berikut ini :
            </Text>

            <Text style={{margin:10}}>
                <Text style={{fontWeight:"bold"}}>8.3.1 </Text> 
                Samase menganggap bahwa pengungkapan informasi itu akan mempengaruhi klasifikasi, kontak, dan tindakan hukum terhadap orang-orang yang melanggar syarat layanan Kami atau menyebabkan dampak atau kerugian tertentu kepada kami dengan mencampuri atau melanggar hak atau kekayaan intelektual, secara sengaja atau tidak.
            </Text>

            <Text style={{margin:10}}>
                <Text style={{fontWeight:"bold"}}>8.3.2 </Text> 
                Kami dapat mengungkapkan informasi bila diminta oleh pihak yang berwenang sesuai hukum yang berlaku, atau dengan tujuan lain yang kami anggap perlu untuk mempertahankan dan meningkatkan layanan, atau untuk pengembangan dan ekspansi barang dan layanan Kami.
            </Text>
        </View>
    )
}


function PointNine() {
    return (
        <View>
            <Text style={styles.title}>9. Perubahan dan penghapusan Informasi Pribadi</Text>
            <Text>
            Anggota bisa mengubah, memperbarui, dan/atau menyesuaikan Informasi Pribadi dengan menggunakan ID Pengguna dan kata sandi kapan saja mereka mau. Untuk penghapusan Informasi Pribadi, Anggota diharuskan menginformasikan kepada customer care Samase. Jika Anda lupa ID Pengguna dan kata sandi, Anda bisa mengunjungi halaman utama atau halaman registrasi anggota dan klik pada “Lupa Kata Sandi.” Program akan membawa Anda ke halaman Lupa Kata Sandi. Anda akan diminta untuk mengetikkan alamat email yang digunakan untuk registrasi dan program secara otomatis akan mengirimkan ID Pengguna dan kata sandi ke alamat email terdaftar.
            </Text>
        </View>
    )
}
function PointTen(){
    return (
        <View>
            <Text style={styles.title}>
            10. Peringatan tentang informasi yang hilang, yang digunakan tidak semestinya dan/atau perubahan informasi.
            </Text>
            <Text>
            Semua anggota harus memiliki kata sandi sendiri untuk dapat mengakses Informasi Pribadi, sehingga hanya dialah yang dapat mengakses data pribadi. Anda bisa memperbaiki, memperbaiki, dan menyesuaikan Informasi Pribadi dengan menggunakan username dan kata sandi Anda. Samase sangat menganjurkan Anda merahasiakan username dan kata sandi Anda. Samase tidak akan meminta kata sandi Anda, lewat telepon maupun email. 
            </Text>
        </View>
    )
}

function PointEleven() {
    return (
        <View>
            <Text style={styles.title}>11. Lain-lain</Text>
            <Text>
            Berhati-hatilah saat mengungkapkan Informasi Pribadi saat Anda online, misalnya sedang menggunakan papan pesan, ruang chatting, dan email. Informasi tersebut dapat dikumpulkan dan digunakan pihak lain. Maka, jagalah kerahasiaan informasi pribadi, username dan kata sandi Anda.
            </Text>
        </View>
    )
}

function PointTwelve() {
    return(
        <View>
            <Text style={styles.title}>12. Peraturan</Text>
            
            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>12.1 </Text> 
                Pengguna tidak diizinkan menggunakan Aplikasi Samase dengan alasan atau tujuan yang melanggar hukum, memfitnah, mengganggu, melecehkan, membahayakan, mengutuk, menyerang privasi dan/atau tindakan pelanggaran hukum Khususnya, Pengguna tidak diizinkan untuk mengirim segala sesuatu yang menurut Samase, membahayakan reputasi atau usaha  Samase dan/atau menyerang Pengguna lainnya.
            </Text>

            <Text style={{margin:5}}>
                <Text style={{fontWeight:"bold"}}>12.1 </Text> 
                Pengguna tidak diizinkan melakukan tindakan apapun yang bisa mengganggu kelancaran, penggunaan dan kenyamanan Aplikasi ini (dan layanannya) bagi Samase dan/atau Pengguna lainnya. Pengguna dilarang melakukan kegiatan yang tidak sesuai dengan tujuan penggunaan Aplikasi ini, termasuk namun tidak terbatas pada   kegiatan komersial dalam bentuk apapun.
            </Text>


        </View>
    )
}


export default function TOSScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            
            <Text style={styles.text}>
            Perjanjian Penggunaan Aplikasi membership Samase (“Perjanjian”) antara Pihak yang menggunakan layanan Aplikasi “Samase” (“Pengguna”) dan PT Samase Maju Bersama (“SMB”) sebagai pengelola Aplikasi “Samaseapp” , memuat syarat-syarat dan ketentuan penggunaan layanan Aplikasi “Samase” yang berlaku bagi pengguna untuk dapat menggunakan Aplikasi “Samase”. SMB selanjutnya dapat disebut juga dengan istilah “Kami” dan Pengguna selanjutnya dapat disebut juga dengan istilah “Anda”
            </Text>
            
            <VerticalSeparator height={10} />
          
            <Text style={styles.text}>
            Mohon untuk membaca syarat & ketentuan ini dengan sangat hati-hati sebelum menggunakan aplikasi Samase. Dengan mengakses atau menggunakan Anda harus membaca, memahami, menyetujui dan mengerti semua persyaratan dan ketentuan yang tertera dalam perjanjian
            </Text>
      
            <VerticalSeparator height={10} />

            <Text style={styles.text}>
            Kami berhak sewaktu-waktu merubah Syarat & Ketentuan ini, dan perubahan tersebut berlaku efektif setelah diposting melalui aplikasi dan diberitahukan melalui notifikasi di aplikasi. Pengguna bertanggung jawab untuk membaca secara seksama Syarat & Ketentuan ini setiap kali menggunakan atau mengakses aplikasi Samase. Dengan menggunakan atau mengakses aplikasi Samase, merupakan persetujuan atas Syarat & Ketentuan ini serta perubahannya. Syarat & Ketentuan ini adalah bagian yang tidak terpisahkan dari Kebijakan Privasi pada aplikasi.
            </Text>

            <VerticalSeparator height={10} />

            <Text style={styles.text}>
            Kami berhak mengganti, menghapus, mengubah, menangguhkan dan /atau menghentikan semua atau bagian apapun yang termasuk ke dalam aplikasi setiap saat atau melalui pemberitahuan sebelumnya sesuai dengan persyaratan undang-undang dan peraturan yang berlaku. Kami dapat meluncurkan layanan tertentu atau fitur tertentu dalam versi beta, yang mungkin tidak berfungsi dengan baik atau sama seperti versi akhir dan kami bertanggung jawab dalam hal demikian. Kami juga dapat membatasi fitur tertentu atau membatasi akses Anda ke bagian atau seluruh layanan atas kebijakannya sendiri dan tanpa pemberitahuan atau kewajiban. Kami berhak untuk menolak memberikan akses ke aplikasi kepada Anda atau mengizinkan Anda untuk membuka Akun dengan alasan apapun.
            </Text>

            <VerticalSeparator height={10} />

            <Text style={styles.text}>
            Syarat & Ketentuan penggunaan atau pengaksesan oleh Pengguna sebagai berikut :
            </Text>

            <VerticalSeparator height={10} />

            {PointOne()}
            {PointTwo()}
            {PointThree()}
            {PointFour()}
            {PointFive()}
            {PointSix()}
            {PointSeven()}
            {PointEight()}
            {PointNine()}
            {PointTen()}
            {PointEleven()}
            {PointTwelve()}

            <Text style={styles.title}>Sanggahan ( Disclaimer )</Text>
            <Text>
            Samase berupaya menyajikan informasi secara lengkap dan akurat. 
            Namun,  Samase tidak memberikan jaminan bahwa informasi dalam Aplikasi ini benar-benar lengkap, akurat, dan dapat dipercaya. 
            Samase juga tidak memberikan jaminan bahwa akses ke dalam Aplikasi ini bebas hambatan, bebas kesalahan, bebas virus, atau Aplikasi ini aman.  Samase tidak bertanggung jawab atas segala kerugian yang timbul karena tindakan yang berkaitan dengan penggunaan informasi yang disajikan. 
            Risiko yang timbul karena kepercayaan Pengguna atas informasi yang ditampilkan dalam Aplikasi ini akan menjadi tanggung jawab Pengguna pribadi.
            Informasi yang disajikan di aplikasi Samase bersifat umum dan hanya sebagai 
            rujukan atau referensi.
            </Text>
            
        </ScrollView>
    ) 
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "#fff",
        padding : 20,
    },
    text : {
        fontSize : 14
    },
    title : {
        fontSize : 18,
        fontWeight : "bold"
    },
    listitem : {
        // mar
    }
    
})