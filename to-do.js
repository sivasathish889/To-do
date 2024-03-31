let inp = document.getElementById("inp");
function change() {
    if (inp.value == "") {
        alert("Please enter the value")
    }
    else {

        let uList = document.getElementById("uList");
        let listitem = document.createElement("li"); //create list
        let btn = document.createElement("button"); // create button
        listitem.innerHTML = inp.value;
        uList.appendChild(listitem)
        btn.innerText = "Delete"
        listitem.appendChild(btn)
        console.log(btn)

        btn.addEventListener("click", function () {
            listitem.remove()
        })
        btn.setAttribute("id", "clear")
        let h = document.createElement("hr");
        listitem.append(h)
    }
    inp.value = ""
}
function remove(event) {
    event.target.parentElement.remove()
}
