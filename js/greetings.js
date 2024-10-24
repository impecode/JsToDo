const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function loginSubmit(event) {
    event.preventDefault();                               // 브라우저의 기본 동작을 막아주는 function (그 동작은 새로고침)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);         // USERNAME_KEY:key   username:value(변수)  /  localStorage: 브라우저가 갖고 있는 작은 DB
    paintGreetings();
}


function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Have a Good Day ${username}!`;             // string과 변수를 결합할 때 사용하는 백틱(``) 기호 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}




const savedUsername = localStorage.getItem(USERNAME_KEY);



if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);       //addEventListenr: submit even가 발생하면 loginSubmit 함수를 실행

}
else {
    // show the greeting
    paintGreetings();
}
