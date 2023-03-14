const lista=document.querySelector('#escribe')
const tareas=document.querySelector('.contenedor_resultado')
let cont1=0
let cont2=0
pendientes.innerHTML=`Tareas realizadas ${cont2} Tareas pendientes ${cont1}`

agregar.addEventListener('click',()=>{
    const tarea=document.createElement('div')
    tarea.className='tareas'
    tarea.textContent=lista.value
    const boton=document.createElement('div')
    const eliminar=document.createElement('button')
    eliminar.textContent='eliminar'
    eliminar.setAttribute('class','eliminar')
    tareas.append(tarea)
    tarea.append(boton)
    boton.append(eliminar)
    lista.value=''
    cont1++
    pendientes.innerHTML=`Tareas realizadas ${cont2} Tareas pendientes ${cont1}`

})

tareas.addEventListener('click',(event)=>{
    if(event.target.firstChild.data=='eliminar'){
        const papa=event.target.parentElement.parentElement
        tareas.removeChild(papa)
        cont2++
        cont1--
        pendientes.innerHTML=`Tareas realizadas ${cont2} Tareas pendientes ${cont1}`

    }
})

