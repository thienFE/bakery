//------------------shop-details-------------------//
//hover on nav-shop to display shop-details//
let navShop = document.querySelector(".header .shop a")
let shopDetails = document.querySelector(".header .shop-details")

navShop.onmouseover = () => {
    navShop.classList.add("addColor")
    shopDetails.classList.add("display-shopDetails")
}

shopDetails.onmouseover = () => {
    navShop.classList.add("addColor")
    shopDetails.classList.add("display-shopDetails")
}

navShop.onmouseleave = () => {
    navShop.classList.remove("addColor")
    shopDetails.classList.remove("display-shopDetails")
}

shopDetails.onmouseleave = () => {
    navShop.classList.remove("addColor")
    shopDetails.classList.remove("display-shopDetails")
}

//prevent shopDetails display when onclick navShop//
navShop.onclick = () => {
    navShop.classList.add("addColor")
    shopDetails.classList.add("hide")
}

//prevent aboutDetails display when onclick Nav-About//
let aboutDetails = document.querySelector(".header .about .about-details")
let aboutBtn = document.querySelector(".header .about")
aboutBtn.onclick = () => {
    aboutBtn.classList.add("addColor")
    aboutDetails.classList.add("hide")
}

//------------------Search-button-------------------//
{
    let searchBtn = document.querySelector(".header .right .search")
    let searchTool = document.querySelector(".header .search-tool")
    let closeBtn = document.querySelector(".header .search-zone .wrap span i")
    let overlay = document.querySelector(".header .search-tool .overlay")
    

    searchBtn.onclick = () => {
        searchTool.classList.add("transformY-0")
    }

    closeBtn.onclick = () => {
        searchTool.classList.remove("transformY-0")
    }

    overlay.onclick = () => {
        searchTool.classList.remove("transformY-0")
    }
}

//------------------effects of remove Button in shopping-cart-------------------//
{   let removeBtns = document.querySelectorAll(".shopping-cart .cart-heading .cart-operator .remove")
    let cartProductWrappers = document.querySelectorAll(".cart-product-wrapper")
    
    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].onmouseover = () => {
            cartProductWrappers[i].classList.add("change-backgroundColor")
            removeBtns[i].classList.add("change-color-removeBtn")
            
        }
        removeBtns[i].onmouseleave = () => {
            cartProductWrappers[i].classList.remove("change-backgroundColor")
            removeBtns[i].classList.remove("change-color-removeBtn")
        }
    }
   
}

//-------------click on menu-block in order to display nav-leftSide and related operations-------------//
let menuBlockBtn = document.querySelector(".header .navigation .menu-block")
let navLeftSide = document.querySelector(".header .nav-leftSide")
let overlayTablet = document.querySelector(".overlay-tablet-andBelow")
let app = document.querySelector(".app")
let closeBtn = document.querySelector(".header .nav-leftSide > .close")

menuBlockBtn.onclick = () => {
    navLeftSide.classList.add("slideX-for-navLeftSide")
    overlayTablet.classList.remove("hide")
    app.classList.add("marginLeft-to-slideNav")
}

closeBtn.onclick = () => {
    navLeftSide.classList.remove("slideX-for-navLeftSide")
    overlayTablet.classList.add("hide")
    app.classList.remove("marginLeft-to-slideNav")
}

overlayTablet.onclick = () => {
    navLeftSide.classList.remove("slideX-for-navLeftSide")
    overlayTablet.classList.add("hide")
    app.classList.remove("marginLeft-to-slideNav")
}

//-------------handler when click arrowBtn of nav-shop and nav-about in navLeftSide-------------//
{
    let arrowBtn = document.querySelectorAll(".header .nav-leftSide .nav-list li i") 
    let shopDetails = document.querySelector(".shop-leftSide-product")
    let aboutDetails = document.querySelector(".about-leftSide-detail")
    let shopLeftSide = document.querySelector(".shop-leftSide")
    let aboutLeftSide = document.querySelector(".about-leftSide")
    let blogLeftSide = document.querySelector(".blog-leftSide")
    let i = 0, j = 0
    arrowBtn[0].onclick = () => {
        i++
        if (i % 2 == 1) {
            shopLeftSide.classList.add("handler-border-bottom")
            aboutLeftSide.classList.add("handler-border-top")
            arrowBtn[0].classList.add("rotate-arrowBtn")
            shopDetails.classList.add("height-fitContent1")
            shopDetails.innerHTML = `<a href="">Công thức bánh</a>
            <ul>
                <li><a href="">Bagels</a></li>
                <li><a href="">Banana Bread</a></li>
                <li><a href="">Challah</a></li>
                <li><a href="">Cranberry Bread</a></li>
            </ul>
            <a href="">Bánh ngày lễ</a>
            <ul>
                <li><a href="">Challah</a></li>
                <li><a href="">Christmas Bread</a></li>
                <li><a href="">Eater Bread</a></li>
                <li><a href="">Irish Soda Bread</a></li>
            </ul>
            <a href="">Công thức bánh</a>
            <ul>
                <li><a href="">Bagels</a></li>
                <li><a href="">Banana Bread</a></li>
                <li><a href="">Challah</a></li>
                <li><a href="">Cranberry Bread</a></li>
            </ul>
            <a href="">Bánh ngày lễ</a>
            <ul>
                <li><a href="">Challah</a></li>
                <li><a href="">Christmas Bread</a></li>
                <li><a href="">Eater Bread</a></li>
                <li><a href="">Irish Soda Bread</a></li>
            </ul>
            <div class="wrapper"><img src="./assets/images/shop-details/menu-product-1.jpg"></div>
            <div class="wrapper"><img src="./assets/images/shop-details/menu-product-2.jpg"></div>
            <div class="wrapper"><img src="./assets/images/shop-details/menu-product-3.jpg"></div>`
        }
        if (i % 2 == 0) {
            shopLeftSide.classList.remove("handler-border-bottom")
            aboutLeftSide.classList.remove("handler-border-top")
            arrowBtn[0].classList.remove("rotate-arrowBtn")
            shopDetails.classList.remove("height-fitContent1")
            shopDetails.innerHTML = ``
        }
    }

    arrowBtn[1].onclick = () => {
        j++
        if (j % 2 == 1) {
            aboutLeftSide.classList.add("handler-border-bottom")
            blogLeftSide.classList.add("handler-border-top")
            arrowBtn[1].classList.add("rotate-arrowBtn")
            aboutDetails.classList.add("height-fitContent2")
            aboutDetails.innerHTML = `<ul>
            <li><a href="">Giao hàng</a></li>
            <li><a href="">Thông báo pháp lý</a></li>
            <li><a href="">Điều khoản và điều kiện</a></li>
            <li><a href="">Thanh toán an toàn</a></li>
            <li class="seasonings"><a href="">Gia vị</a></li>
            <li><a href="">Nhà cung cấp</a></li>
        </ul>`
        }
        if (j % 2 == 0) {
            aboutLeftSide.classList.remove("handler-border-bottom")
            blogLeftSide.classList.remove("handler-border-top")
            arrowBtn[1].classList.remove("rotate-arrowBtn")
            aboutDetails.classList.remove("height-fitContent2")
            aboutDetails.innerHTML = ``
        }
    }
}








