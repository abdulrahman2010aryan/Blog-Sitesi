const shareBtn = document.getElementById("shareBtn");
const result = document.getElementById("result");
shareBtn.addEventListener("click", async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: "Seyahat Blogum",
                text: "Bu yazıya göz at!",
                url: window.location.href
            });
            result.innerText = "Paylaşıldı ✔️";
        } catch (err) {
            result.innerText = "Paylaşım iptal edildi ❗";
        }
    } else {
        result.innerText = "Tarayıcınız paylaşımı desteklemiyor ❌";
    }
});


let lastHighlighted = null;

function searchPage() {
    const input = document.getElementById("search").value.trim();
    if (!input) return;

    const main = document.getElementById("main-content");
    const elements = main.querySelectorAll("p, h1, h2, h3, li");

    // Önceki vurguyu temizle
    if (lastHighlighted) {
        lastHighlighted.querySelectorAll("span.highlight").forEach(span => {
            span.replaceWith(document.createTextNode(span.textContent));
        });
        lastHighlighted = null;
    }

    const searchLower = input.toLowerCase();

    for (let el of elements) {
        let nodes = [];
        function collectTextNodes(node) {
            if (node.nodeType === 3) nodes.push(node);
            else if (node.nodeType === 1) node.childNodes.forEach(collectTextNodes);
        }
        collectTextNodes(el);

        // DOM node’ları üzerinde ardışık eşleşme kontrolü
        let matchNodes = [];
        let charIndex = 0;

        for (let node of nodes) {
            const text = node.textContent;
            for (let i = 0; i < text.length; i++) {
                if (text[i].toLowerCase() === searchLower[matchNodes.length]) {
                    matchNodes.push({ node, offset: i });
                    if (matchNodes.length === searchLower.length) break;
                } else if (text[i].toLowerCase() === searchLower[0]) {
                    matchNodes = [{ node, offset: i }];
                } else {
                    matchNodes = [];
                }
            }
            if (matchNodes.length === searchLower.length) break;
        }

        if (matchNodes.length === searchLower.length) {
            // Bulunan harfleri kapsayan span oluştur
            const range = document.createRange();
            const start = matchNodes[0];
            const end = matchNodes[matchNodes.length - 1];
            range.setStart(start.node, start.offset);
            range.setEnd(end.node, end.offset + 1);

            const span = document.createElement("span");
            span.className = "highlight";
            range.surroundContents(span);

            el.scrollIntoView({ behavior: "smooth", block: "center" });
            lastHighlighted = el;
            break; // sadece ilk eşleşmeyi göster
        }
    }
}