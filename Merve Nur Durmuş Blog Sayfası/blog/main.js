document.querySelectorAll(".slider").forEach(slider => {

    const slides = slider.querySelector(".slides");
    const slideCount = slides.querySelectorAll("img").length;
    const nextBtn = slider.querySelector(".next");
    const prevBtn = slider.querySelector(".prev");

    let index = 0;
    let auto;

    function slide() {
        slides.style.transition = "transform 0.5s ease";
        slides.style.transform = `translateX(-${index * 100}%)`;

        if (index === slideCount - 1) {
            setTimeout(() => {
                slides.style.transition = "none";
                index = 0;
                slides.style.transform = "translateX(0)";
                slides.offsetHeight;
                slides.style.transition = "transform 0.5s ease";
            }, 500);
        }
    }

    function startAuto() {
        auto = setInterval(() => {
            index++;
            slide();
        }, 3000);
    }

    function resetAuto() {
        clearInterval(auto);   // ❗ eskiyi durdur
        startAuto();           // ❗ 3 saniye baştan başlasın
    }

    nextBtn.onclick = () => {
        resetAuto();
        index++;
        slide();
    };

    prevBtn.onclick = () => {
        resetAuto();

        if (index === 0) {
            slides.style.transition = "none";
            index = slideCount - 1;
            slides.style.transform = `translateX(-${index * 100}%)`;
            slides.offsetHeight;

            setTimeout(() => {
                slides.style.transition = "transform 0.5s ease";
                index--;
                slides.style.transform = `translateX(-${index * 100}%)`;
            }, 10);
        } else {
            index--;
            slide();
        }
    };

    startAuto(); // ❗ HER SLIDER KENDİ OTOMATİĞİNİ BAŞLATIYOR
});





// <h2 class="post-title">Blog</h2>
//                     <h2 class="post-title" id="aynanın-öte-yakası">Aynanın Öte Yakası</h2>
//                     <div class="slider">
//                         <div class="slides">
//                             <div class="img-box">
//                                 <div class="image-title">Sudan'da İnsanlık Hâli: Kayıtsızlığın Epistemolojisi ve Etik
//                                     Sorgulama</div><img src="../Assets/blog-3-img.jpeg">
//                             </div>
//                             <div class="img-box">
//                                 <div class="image-title">Görünür İyilik, Toplumsal Bir Performanstır
//                                 </div><img src="../Assets/blog-1-img.jpeg">
//                             </div>
//                             <div class="img-box">
//                                 <div class="image-title">Kül ve Akdeniz: Bu Bir Rıza
//                                     Yelkenidir</div><img src="../Assets/blog-2-img.jpeg">
//                             </div>
//                             <div class="img-box">
//                                 <div class="image-title">Sudan'da İnsanlık Hâli: Kayıtsızlığın Epistemolojisi ve Etik
//                                     Sorgulama</div><img src="../Assets/blog-3-img.jpeg">
//                             </div>
//                             <div class="img-box">
//                                 <div class="image-title">Görünür İyilik, Toplumsal Bir Performanstır</div><img
//                                     src="../Assets/blog-1-img.jpeg">
//                             </div>
//                         </div>

//                         <button class="prev">❮</button>
//                         <button class="next">❯</button>
//                     </div>


//                     <div class="space"></div>
//                     <h2 class="post-title" id="ruhun-haritaları">Ruhun Haritaları</h2>
//                     <div class="slider">
//                         <div class="slides">
//                             <div class="img-box">
//                                 <div class="image-title">Savaş Sonrası Eve Dönmek: Çatısızlık
//                                 </div><img src="../Assets/blog-6-img.jpeg">
//                             </div>
//                             <div class="img-box">
//                                 <div class="image-title"></div><img src="../Assets/">
//                             </div>
//                             <div class="img-box">
//                                 <div class="image-title"></div><img src="../Assets/">
//                             </div>
//                             <div class="img-box">
//                                 <div class="image-title">Savaş Sonrası Eve Dönmek: Çatısızlık
//                                 </div><img src="../Assets/blog-6-img.jpeg">
//                             </div>
//                         </div>

//                         <button class="prev">❮</button>
//                         <button class="next">❯</button>
//                     </div>
//                     <div class="space"></div>
//                     </ul>
//                     <div class="space"></div>