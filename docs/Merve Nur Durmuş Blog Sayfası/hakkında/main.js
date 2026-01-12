const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: "Merve Nur Durmuş Hakkında",
                text: "",
                url: window.location.href
            });
        } catch (err) {
            console.log("Paylaşım iptal edildi");
        }
    } else {
        alert("Tarayıcınız paylaşımı desteklemiyor");
    }
});








