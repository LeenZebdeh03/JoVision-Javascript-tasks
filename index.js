const ele = document.querySelector(".ele");
const ele2 = document.querySelector(".ele2");
ele.addEventListener("click",writer);
function writer()
{

    ele2.innerHTML="Hello, World";
    console.log("Hello, World");
}