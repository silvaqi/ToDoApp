function _(id){
    return document.getElementById(id)
}

_('totaltasks').innerHTML = `<div>0</div>`

function getRs(){
    /*const button = document.querySelector(".deleteTasks")

button.addEventListener('click', function(){
        if(lengthtasks === 0 || lengthtasks === null || lengthtasks <= 0){
            alert("You don't have tasks for delete")
        }
})*/
    /*if(lengthtasks >= 11){
        alert("You can't add more tasks")
        return
    }*/
    const taskvalue = prompt("Insert something task.")
    if(taskvalue == null || taskvalue == "null" || taskvalue == ""){
        return
    }
    let txt = taskvalue
    const d = new Date()

    const valstorage = _('task').innerHTML += `<div class="card"><input type="checkbox"> ${txt}, ${d.toLocaleString()}</div>`
    localStorage.setItem('Task', valstorage)

    const lengthtasks = document.getElementsByClassName("card").length
    _('totaltasks').innerHTML = `${lengthtasks}`

    /*if(lengthtasks >= 10){
        //alert("Limit exceeded.")
        setTimeout( function ( ) { alert( "Limit exceeded" ); }, 3000 )
    }*/

    if(lengthtasks == 11){
       deleteTasks()
       const zero = 0;
       _('totaltasks').innerHTML = `${0}`
    }
}

function deleteTasks(){
        document.querySelectorAll('.card').forEach(e => e.remove())
        localStorage.removeItem('Task')
}

function getTasks(messageTasks){
    messageTasks = localStorage.getItem('Task')
    _('task').innerHTML += `${messageTasks}`
}