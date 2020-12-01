import React from 'react'
import { View , Text } from 'react-native'
import { StyleSheet } from 'react-native'
import VerticalSeparator from '../components/VerticalSeparator'
import { ScrollView } from 'react-native-gesture-handler'


export default function AboutUsScreen() {
    return (
        // <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.container} >
            <Text>
                Sebagai Baju Muslim Modern, SAMASE sangat nyaman dan cocok untuk kegiatan
                sehari-hari para pria muslim yang ingin tampil beda agar terlihat lebih baik dan lebih
                rapi. SAMASE - It's Different!
            </Text>
            
            <VerticalSeparator height={10} />

            <Text style={styles.title}>Apa itu Samase ?</Text>

            <VerticalSeparator height={10} />


            <Text>
            SAMASE berdiri pada tahun 2014 di Kota bandung , merupakan produsen pakaian yang berdedikasi untuk menyediakan
            berbagai pakaian pria muslim agar dapat berpenampilan lebih baik. Hadir dengan
            desain-desain terbaru yang sesuai kaidah syariat dalam berpakaian bagi seorang
            muslim dengan tetap menjaga standar kualitas material serta hasil jahitannya,
            menjadikan produk-produk SAMASE dapat dengan mudah diterima di masyarakat
            khususnya kaum muslimin yang ingin lebih baik lagi dalam berbusana. 
            </Text>

            <VerticalSeparator height={10} />


            <Text style={styles.title}>Produk SAMASE?</Text>

            <VerticalSeparator height={10} />

            <Text>
            SAMASE menyediakan berbagai pakaian pria muslim seperti Kemko (kemeja-koko),
            Koku (koko-kurta), Kurta, Gamis, Kaftan, Jubba, Sirwal (celana), Peci, Tas dan masih
            banyak lagi produk-produk lain yang akan muncul. 
            </Text>

            <VerticalSeparator height={10} />

            <Text style={styles.title}>Produk SAMASE yang paling diminati? </Text>            
            
            <VerticalSeparator height={10} />

            <Text>
            Alhamdulillah, terimakasih atas apresiasi para pria muslim yang telah
            mempercayakan produk SAMASE sebagai pilihan dalam berbusananya. Produk yang
            diminati diantaranya adalah Kemko (kemeja-koko), Koku (kemeja-kurta), Kurta,
            Kaftan dan Sirwal (celana). 
            </Text>            

            <VerticalSeparator height={10} />


            <Text style={styles.title}>Desain-desain SAMASE?</Text>            

            <VerticalSeparator height={10} />

            <Text>
            Terinspirasi dari fashion-fashion kekinian, dengan model yang modern dan trendi
serta keberanian dalam membuat desain-desain baru dipadukan dengan nuansa islami
dan Insya Allah sesuai dengan kaidah syariat islam dan Sunnah Rasulullah
Shallallahu’alaihi Wasallam dalam berpakaian bagi seorang muslim membuat desain
SAMASE selalu tampil beda. Alhamdulillah kini hadir pula koleksi pakaian
muslimah yang syar’i dan nyaman dipakai serta fashionable. 
            </Text>

            <VerticalSeparator height={10} />

            <Text style={styles.title}>Komitment Produk SAMASE??</Text>            
            <VerticalSeparator height={10} />

            <Text>
            “Dibuat melalui tangan-tangan yang apik dengan menggunakan bahan
            berkualitas dan selalu menyajikan desain-desain terbaru yang berbeda dengan
            yang lain”, ini merupakan komitmen dari SAMASE untuk para pria muslim yang
            ingin tampil beda dan tidak mau ketinggalan zaman di segala aktivitas kesehariannya.
            </Text>

            <VerticalSeparator height={10} />
            <Text>
                Some icons designed by <Text style={{fontWeight:"bold"}}>Freepik</Text>
            </Text>


            </ScrollView>



        // {/* </View> */}
    )
}


const styles = StyleSheet.create({
    container : {
        padding : 20,
        backgroundColor : "#fff"
    },
    title :  {
        fontSize : 20,
        fontWeight : "bold",
    }
})