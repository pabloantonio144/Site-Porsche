const colorsPallete = document.querySelectorAll('.colors-palette li span')
const wheelsCollection = document.querySelectorAll('.wheels-collection li span')
const CarSelected = document.querySelector('.imagem-carro img')
let colorsSelected = 'br'
let wheelsSelected = 'r1'

colorsPallete.forEach(li=> 
    li.addEventListener('click', () =>{
    colorsPallete.forEach(span => {
        span.classList.remove('selected')
    })
        
        li.classList.add('selected')

        colorsSelected = li.classList [0]
        handleShowCar()
    })
)

wheelsCollection.forEach(li => {
    li.addEventListener('click', () =>{
        wheelsCollection.forEach(span =>{
            span.classList.remove('selected')
        })

        li.classList.add('selected')

        wheelsSelected = li.classList [0]
        handleShowCar()
        
    })
})

function handleShowCar(){
    CarSelected.src = `./assets/p-${colorsSelected}-${wheelsSelected}.jpeg`

}

handleShowCar()