const btn = document.querySelector("button");
if(btn){
    btn.addEventListener("click", () => {
        const img = document.getElementById("memePic");
        img.classList.toggle("hidden");
    })
}