const productImgs = document.querySelectorAll('.our-product .products .products-img')
productImgs.forEach(productImg => {
    const quickView = productImg.querySelector('.our-product .products .quick-view')
    const overlay = productImg.querySelector('.our-product .products .overlay')
    const addToCartBtn = productImg.parentElement.querySelector('.our-product .products .addToCart-btn')
    const infoProduct = productImg.parentElement.querySelector('.our-product .products .info')

    const app = {
        // Create Animation for addToCart button
        creatAnimation() {
            // creat animation for addToCart button
            const addToCartBtnSlide = addToCartBtn.animate([
                { transform: 'translateY(0)'},
                { transform: 'translateY(20px)'}
            ], {
                duration: 300
            })
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Nest Hub|Nest Hub Max|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
                addToCartBtnSlide.pause()
            } else {
                addToCartBtnSlide.play()
            }
        },
        // Handle when device is a mobile device
        mobileResponsive() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Nest Hub|Nest Hub Max|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
                addToCartBtn.classList.remove("hide")
                addToCartBtn.classList.add("display")
            }
        },
        //Handle events
        handleEvents() {
            // Checked variable how many times users mouseover on productImg If (!productImg.parentElement.onmouseleave)
            let check = 0
    
            // Handle mouse over on product-image
            productImg.onmouseover = () => {
                check++
                if (check === 1) {
                    quickView.classList.remove('hide')
                    overlay.classList.remove('hide')
                    addToCartBtn.classList.remove('hide')
                    infoProduct.classList.add('hide')
                    this.creatAnimation()
                }
            }
            
            // Handle mouse over on parent element of product-image
            productImg.parentElement.onmouseleave = () => {
                addToCartBtn.classList.add('hide')
                quickView.classList.add('hide')
                overlay.classList.add('hide')
                addToCartBtn.classList.add('hide')
                infoProduct.classList.remove('hide')
                check = 0
            }
    
            // Handle when mouseover on quickView in order not to active mouseover event of productImg
            quickView.onmouseover = (e) => {
                e.stopPropagation()
            }

            // Handle when users click on product image by mobile device
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Nest Hub|Nest Hub Max|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
                productImg.onclick = () => {
                    addToCartBtn.style.marginTop = 61 + 'px'
                    quickView.classList.add('hide')
                    overlay.classList.add('hide')
                }
            }
        },
    
        // Handle function
        start() {
            this.mobileResponsive()
            this.handleEvents()
        }
    } 
    app.start()
})

// Products list slide (owl carousel)
$('.owl-carousel').owlCarousel({
    rtl:false,
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})




