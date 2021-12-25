const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
// Handle when users mouse over and mouse out on box-left
const boxLefts = $$('.box-left')

handleEvents = () => {
    // Handle when mouse over on box-left
    const boxLeftsArray = Array.from(boxLefts)
    boxLeftsArray.forEach(boxLeftArray => {
        const boxLeftImg = boxLeftArray.querySelector('img')
        const lines = boxLeftArray.querySelectorAll('.frame > div')
        boxLeftArray.onmouseover = () => {
            //scale image 1.1 times
            boxLeftImg.style.transform = 'scale(1.1)'
            // display the frame
            lines.forEach(line => {
                line.style.display = 'block'
            })
        }
    
        boxLeftArray.onmouseout = () => {
            // get image back initial dimension
            boxLeftImg.style.transform = 'scale(1)'
            // hide the frame
            lines.forEach(line => {
                line.style.display = 'none'
            })
        }
    })



    
}

handleEvents()