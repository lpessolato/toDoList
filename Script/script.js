const list = document.querySelector(".list")
const send = document.querySelector(".send")
const task = document.querySelector(".task")
let cont = 0

function createCards (tk){
    let li = document.createElement("li")
    li.setAttribute("id", `${cont}`)

    let div1 = document.createElement("div")
    div1.setAttribute("class", "text")

    let toDo = document.createElement("p")
    let text = document.createTextNode(tk)
    toDo.appendChild(text)

    let div2 = document.createElement("div")
    div2.setAttribute("class", "editing")

    let edit = document.createElement("button")
    edit.setAttribute("class", "edit")
    const modal = document.createElement("input")
    modal.style.display = "none"
    edit.appendChild(modal)

    edit.addEventListener("click",()=>{
        modal.style.display= "block"
    })
    modal.addEventListener("keyup", e=>{
        if(e.key === "Enter"){
            toDo.textContent = `${modal.value}`
            modal.style.display = "none"
        }
    })

    let img = document.createElement("img")
    img.setAttribute("src", "./img/edit.svg")
    edit.appendChild(img)

    let del = document.createElement("button")
    del.setAttribute("class","delete")
    del.setAttribute("id",`${cont}`)
    cont++
    let delText = document.createTextNode("X")
    del.appendChild(delText)

    del.addEventListener("click", function () {
        li.remove()
    })

    div2.append(edit,del)
    div1.appendChild(toDo)
    li.append(div1,div2)
    list.appendChild(li)
}

send.addEventListener("click",(e)=>{
    e.preventDefault()
    send.set
    createCards(task.value)
    task.value = ""
})



