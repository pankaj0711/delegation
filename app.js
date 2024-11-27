let btn= document.querySelector('button')
let cnt=document.querySelector('.grid')
let box=document.querySelectorAll('.box')
console.log(box)
btn.addEventListener('click',()=>{
    let newdiv=document.createElement('div')
    newdiv.setAttribute('class','box')
    cnt.append(newdiv)
    console.log('muje mt dbao')

})

//////////here on below code we see the click event is not applied on newly created element because new created elemnt create after the for loop execute copletely hence, it apply event on predefined boxes
/////////to avoid this we used event deliggation technique
// for(let element of box){
//     element.addEventListener('click',(e)=>{
//         console.log(element)
//         e.target.classList.toggle('clr')
//     })
// }

///////////////using delegation technique and apply event on parent element insted of every child

cnt.addEventListener('click',(event)=>{
   console.log( event.target.tagName)
   if(event.target.tagName==='DIV'){
    event.target.classList.toggle('clr')
   }

})