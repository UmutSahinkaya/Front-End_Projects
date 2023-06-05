//başlık belirtildi

baslık.innerHTML="Kodluyoruz"                
baslık.style.textAlign = "center";              //baslık id'si ortalandı

//kullanıcıya ismi sorulup başlık eklendi

let username= prompt("Adınızı Giriniz?")              
document.querySelector("username")
username = username.charAt(0).toUpperCase() + username.slice(1); /*ilk harfin büyük olmasını sağlayan kod*/

isim.innerHTML=`Merhaba, ${username}! Hoş Geldin!`    
isim.style.textAlign="center"; 

//saat fonksiyonla birlikte tanımlandı
function showTime() {
    let myClock = document.getElementById("myClock"); 
    let now = new Date(); 
    let day = now.getDate();
    let month = now.getMonth() + 1; 
    let year = now.getFullYear(); 
    let hour = now.getHours(); 
    let minute = now.getMinutes(); 
    let second = now.getSeconds(); 

    // Tarih ve saat birleşir
    let time = `${day}/${month}/${year} ${hour}:${minute}:${second}`;
  
    myClock.innerHTML = time  //html e tanımlandı
  
   
    setTimeout(showTime, 1000); // bu kod saniyeyin güncel kalmasını sağlıyor
  }
  
  showTime(); // bu kod fonksiyonu başlatıyor

  
document.write`Javascript bölümü 1. Ödevindesin` 
let ad;
let soyad;
function mesajVer(ad, soyad) { alert(`Merhaba ${ad} ${soyad}`); }
mesajVer();

