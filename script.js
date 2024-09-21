const box = document.querySelector(".box");
const toDoBox = document.querySelector("#to-do-box");

box.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            const value = this.value;

            addToDo(this.value)
            this.value = ""
            saveData()
            // localStorage.setItem("list", JSON.stringify(value));
        }
    }

)
const addToDo = (box) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${box}
    <i class="fas fa-times"></i>   
    `;
    listItem.addEventListener(
        "click",
        function () {
            this.classList.toggle("done");
            saveData()
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function () {
            listItem.remove();
            saveData()
        }
    )
    toDoBox.appendChild(listItem);
    saveData()
}
function saveData(){
    localStorage.setItem("data",toDoBox.innerHTML);
}
function showData(){
    toDoBox.innerHTML=localStorage.getItem("data");
}
showData()
