const input = document.querySelector(".form input");
const button = document.querySelector(".form button");
const qrImg = document.querySelector(".qr-img img");

button.addEventListener("click",function(){
const data = input.value;
if(data.length > 0){
    const imgSrc = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+data;
    qrImg.src = imgSrc;
}
})