const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let toDos = [];


function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));   // JSON.stringify: JSON 문자열로 변환해줌
}


function deleteToDo(event) {
    const li = event.target.parentElement;
    // event.target: HTML element == button
    // parentElement: event.target의 부모 요소 == li
    li.remove();
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));    // li.id는 타입이 string이기 때문에 parseInt를 이용
    saveToDo();
}




function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.Text;    // newTodo인 text를 받는게 아니라 newTodo.obj 즉 object를 받기 때문에 .text를 붙임
    const button = document.createElement("button");
    button.innerText = "✕";
    button.addEventListener("click", deleteToDo)

    li.appendChild(span);             // span을 li 자식 element로 넣음
    li.appendChild(button);           // button을 li 자식 element로 넣음
    toDoList.appendChild(li);         // li를 ul 자식 element로 넣음
}




function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;        // toDoInput의 value를 newTodo라는 변수에 복사함 --> newToDo는 input의 value를 비우기 전의 값을 나타내는 string 
    toDoInput.value = "";                   // toDoInput에 값을 넣고 엔터를 누르면 빈칸으로 만드는 
    const newTodoObj = {
        Text: newTodo,
        id: Date.now()                      // 1000분의 1초를 주는 함수 == 랜덤의 숫자를 얻을 수 있음 -> id로 활용 가능
    }

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDo();
}


toDoForm.addEventListener("submit", handleToDoSubmit);




const savedToDo = localStorage.getItem(TODOS_KEY);

if (savedToDo !== null) {
    const parseToDo = JSON.parse(savedToDo);   // JSON.parse: JSON.stringify 함수로 바꾼 문자열을 object로 변환함 (이 경우는 array로 변환함)
    toDos = parseToDo;                         // 새로고침을 할 때마다 toDos array는 항상 비어있음을 방지하는 역할
    parseToDo.forEach(paintToDo);              // forEach(): 배열의 첫 번째부터 마지막까지 반복하면서 argument(paintToDo 함수)를 실행  --> 새로고침을 해도 paintToDo가 사라지지 않게 해주는 역할
}


