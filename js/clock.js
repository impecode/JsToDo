const clock = document.querySelector("#clock");


function getClock() {
    const date = new Date();                                       // new Date(): 현재 날짜를 가져오는 function
    const hours = String(date.getHours()).padStart(2, "0")         // padStart(2, "0"): string의 길이가 2가 아니라면 앞에 0을 추가함
    const minutes = String(date.getMinutes()).padStart(2, "0")     // date.으로 묶인 함수들은 숫자이기 때문에 String으로 묶어줌으로써 string으로 변환해줌 -> padStart가 string에서만 쓸 수 있는 함수기 때문에
    const seconds = String(date.getSeconds()).padStart(2, "0")

    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}


getClock();      // 새로고침을 해도 시계가 끊기지 않고 바로 보이게 해주는 역할을 함


setInterval(getClock, 1000);    // 2개의 argument를 받음    1st argument: function     2st argument: time