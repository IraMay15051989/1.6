let swiper1 = null
let swiper2 = null
let swiper3 = null

function initSwiper1() {
  if (swiper1 === null) {
    swiper1 = new Swiper('.brend .swiper-brend', {
      // Optional parameters
      loop: true,
      slidesPerView: '1.3',
      spaceBetween: 16,
      breakpoints: {
        500: { slidesPerView: 2 }
      },

      // If we need pagination
      pagination: {
        el: '.brend .swiper-pagination',
        clickable: true
      }
    })
  }
}

function initSwiper2() {
  if (swiper2 === null) {
    swiper2 = new Swiper('.repair .swiper-repair', {
      // Optional parameters
      loop: true,
      slidesPerView: '1.35',
      spaceBetween: 16,
      breakpoints: {
        500: { slidesPerView: 2 }
      },

      // If we need pagination
      pagination: {
        el: '.repair .swiper-pagination',
        clickable: true
      }
    })
  }
}

function initSwiper3() {
  if (swiper3 === null) {
    swiper3 = new Swiper('.price .swiper-prices', {
      // Optional parameters
      loop: true,
      slidesPerView: '1.2',
      spaceBetween: 16,
      breakpoints: {
        500: { slidesPerView: 2 }
      },

      // If we need pagination
      pagination: {
        el: '.price .swiper-pagination',
        clickable: true
      }
    })
  }
}

function destroySwiper1() {
  if (swiper1 !== null) {
    swiper1.destroy(true, true)
    swiper1 = null
  }
}

function destroySwiper2() {
  if (swiper2 !== null) {
    swiper2.destroy(true, true)
    swiper2 = null
  }
}

function destroySwiper3() {
  if (swiper3 !== null) {
    swiper3.destroy(true, true)
    swiper3 = null
  }
}

// ----->   Проверяем ширину экрана и инициализируем/уничтожаем Swiper   <-----

function checkScreenWidth() {
  if (window.innerWidth <= 767) {
    initSwiper1()
    initSwiper2()
    initSwiper3()
  } else {
    destroySwiper1()
    destroySwiper2()
    destroySwiper3()
  }
}

// ----->   Инициализация при загрузке страницы   <-----

checkScreenWidth()

// ----->   Слушаем изменения размера окна   <-----

window.addEventListener('resize', checkScreenWidth)
