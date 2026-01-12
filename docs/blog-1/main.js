const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: "Seyahat Blogum",
                text: "Bu yazıya göz at!",
                url: "index.html"
            });
        } catch (err) {
            console.log("Paylaşım iptal edildi");
        }
    } else {
        alert("Tarayıcınız paylaşımı desteklemiyor");
    }
});
