let shouldSwap = true;
let pTag = document.createElement("p");
pTag.innerText = "some text";
pTag.addEventListener("mouseover", swap());

let image = document.createElement("img");
image.src = "http://127.0.0.1:5501/Yellow-Belt-Exam/images/assets/aeonium-s.jpg";
image.addEventListener("mouseover", swap());

function swap() {
    if (shouldSwap) {
        document.querySelector("img").parentNode.replaceChild();
        document.appendChild(pTag);
        shouldSwap = false;
    }
    else {
        pTag.parentNode.replaceChild();
        document.appendChild(image);
        shouldSwap = true;
    }
}
