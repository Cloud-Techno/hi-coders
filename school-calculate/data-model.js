/**
* Hergün basari sayisi her cocuk icin ayri bir sekilde tutulmali (kaybolmamali) 
* Cocuklarinin gelisimi sürekli izlenebilir olmalidir. 
* Dahasi cocuklarin konstantrasyonlarinin dagilmamasi icin applikasyon full screen modda calismalidir (opsiyonel). 
* Ayni zamanda cocuklarin fokuslanmasina yardimci olmasi icin arka planda bir müzik calmaldir (opsiyonel).
* Cocuklar her soru oturumu acildiginda süreye karsi yarismaktadirlar. 
* Fakat Selami bey bilgisayari acil bir sekilde kullandiginda (baska bir TAB actiginda) sayacin durdurulmasi gerekiyor. 
* Tekrar oyuna dönülünce, programin kaldigi yerden devam etmesi gerekiyor (opsiyonel).
 */

/** PROGRAM AKISI
 * Her cocuk programi actiginda bir isim listesi ve toplam basari puani ile karsilacak. 
 * Eger listede kendi ismi yoksa yeni bir isim girilebilecek. Isim secildikten sonra otomatik olarak 10 soruluk oturum baslayacak.
 * Her soru oturumun süresi 10 saniyedir. 10 saniye sonunda veya cocugun 10 soruyu bitirmesi durumunda 
 * program bitecek ve yine isim listesine geri dönecektir.
 * Cocuk güncellenmis isim listesinde puanini görebilecektir.
 */



/** ANALIZ BOLUMU;
 * 1- Ogrenci listesi olusturulmasi 
 *  1-A) Ogrenci Listesinin UI olusturulmasi
 *  1-B) Listede ogrenci yok ise yeni ogrenci giris yapilmasi ve Ogrenci tablosuna eklenmesi
 *  1-C) Ogrenci secilmesi Event'i  olusturulmasi
 *  1-D) Ogrenci secildikten sonra sorularin gelmesi 
 *  1-E) Puan cizelgesi kaybolmamasi icin localstorage eklenmesi 
 * 2- Her ogrenci icin ayri bir array olusturulmasi 
 * 3- ogrenci Array'ine puan atamasi yapilmasi
 * 4- Oturum Suresi belirlenmesi ve Sure Bitiminde diger soruya gecilmesi
 * 5- Sorular bittiginde  genel Puan Tablosunun ekranda gosterilmesi  
 */

const questions = [
    ["2*2", "1", "2", "4","C"],
    ["3*2", "6", "9", "8","A"],
    ["4*2", "8", "7", "6","A"],
    ["5*2", "4", "10", "9","B"],
    ["6*2", "3", "15", "12","C"],
    ["2*2", "1", "2", "4","C"],
    ["3*2", "6", "9", "8","A"],
    ["4*2", "8", "7", "6","A"],
    ["5*2", "4", "10", "9","B"],
    ["6*2", "3", "15", "12","C"]
];