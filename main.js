// setTimeout(() => {
//     // console.log('Hello world');
// }, 2000)



// let num = 0;
// let count = setInterval(() => {
//     num++
    
//     if(num >= 10){
//         clearInterval(count)
//     }
    
//     console.log('HELLO WORLD', num);
// },1000)



//----------------------------------------------------
// let time = document.querySelector('.time')
// let btn = document.querySelector('.btn')
// let btnReset = document.querySelector('.btn-reset')
// let btnPause = document.querySelector('.btn-pause')
// let line = document.querySelector('line')

// let minutes = 0;
// let seconds = 0;
// // let count = 0;


// let lineWidth = 0

// btnReset.style.display = 'none'
// btnPause.style.display = 'none'

// btn.addEventListener('click', ()=> {
//     btnReset.style.display = 'inline-block'
//     btnPause.style.display = 'inline-block'
//     btn.disabled = true
//   let timer = setInterval(() => {
//         seconds++

//         if(minutes % 2 === 0){
//             lineWidth += 3.33333
//         }else{
//             lineWidth -= 3.33333
//         }
//         if(seconds === 60){
//             minutes++
//             seconds = 0
//         }
//         line.style.width = lineWidth + 'px'

//         time.textContent = `${minutes < 10 ? 0 : ''}${minutes} : ${seconds < 10 ? 0 : ''}${seconds}`
//     }, 100)

//     btnReset.addEventListener('click', () =>{
//         seconds = 0
//         minutes = 0
//         time.textContent = `0${minutes} : 0${seconds}`
//         clearInterval(timer)
//         btn.desabled = false
//         btnReset.style.display = 'none'
//         btnPause.style.display = 'none'
//     })

//     btnPause.addEventListener('click', () =>{
//         clearInterval(timer)
//         btnPause.style.display = 'none'
//     })
// })





let hello = document.querySelector('.hello')
let stop = document.querySelector('.stop')
let text = document.querySelector('.text')
let body = document.body

    hello.addEventListener("click", () => {    
        const set = setInterval(() => {
            text.innerHTML += `Hello`
        })
        stop.addEventListener('click', () => {
            clearInterval(set)
        })
    })    

