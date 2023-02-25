function _(id){
    return document.getElementById(id)
}

_('totaltasks').innerHTML = `<div>0</div>`

function getRs(){
    const taskvalue = prompt("Insert something task.")
    if(taskvalue == null || taskvalue == "null" || taskvalue == ""){
        return
    }
    let txt = taskvalue;
    const d = new Date();
    const id = Math.floor(Math.random()* 10);

    const valstorage = _('task').innerHTML += `<div class="card"><input type="checkbox"> ${txt}, ${d.toLocaleString()}<span>ID(${id})</span></div>`
    localStorage.setItem('Task', valstorage)

    const lengthtasks = document.getElementsByClassName("card").length
    _('totaltasks').innerHTML = `${lengthtasks}`
    localStorage.setItem('length', lengthtasks)

    if(document.getElementById("noneTasks").style.display !== "none" ){
        document.getElementById("noneTasks").style.display = "none"
    }

    if(lengthtasks == 11){
       deleteTasks()
       const zero = 0;
       _('totaltasks').innerHTML = `${0}`
    }
}

function deleteTasks(){
        document.querySelectorAll('.card').forEach(e => e.remove())
        localStorage.removeItem('Task')
        localStorage.setItem('length', '0')
        _('totaltasks').innerHTML = localStorage.getItem('length')
        document.getElementById("noneTasks").style.display = "block"
}

function getTasks(messageTasks){
    messageTasks = localStorage.getItem('Task')
    if(messageTasks){
        document.getElementById("noneTasks").style.display = "none"
        _('task').innerHTML = `${messageTasks}`
    }
    const valuet = localStorage.getItem('length')
    _('totaltasks').innerHTML = `${valuet}`
}

console.log("");