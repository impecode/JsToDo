const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const background = images[Math.floor(Math.random() * images.length)];



const bgImage = document.createElement("img");    // HTML에 img태그 생성

bgImage.src = `img/${background}`;                //  === <img src ="img/0.jpg"/>
document.body.appendChild(bgImage);               // appenChild 함수를 이용해서 bgImage를 body 태그 내부에 자식 element로 추가하는 역할을 함