/*==================== MENU SHOW ====================*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // remova o menu clicando em cada link
  navMenu.classList.remove('show-menu')
}
navLink.forEach(menu => menu.addEventListener('click', linkAction))



/*==================== PORTFOLIO MODAL ====================*/
const modalViews = document.querySelectorAll('.portfolios_modal'),
      modalBtns = document.querySelectorAll('.portfolios_button'),
      modalCloses = document.querySelectorAll('.portfolios_modal-close')
    
let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})


/*==================== QUALIFICATION ====================*/
function openTab(event, idtab) {
  var tabContent = document.getElementsByClassName('tabcontent')

  for(var i = 0; i < tabContent.length; i++){
    tabContent[i].style.display = 'none'
  }

  var tabs = document.getElementsByClassName('tab_button')
   for(var i = 0; i < tabs.length; i++){
    tabs[i].className = tabs[i].className.replace('active', '');
   }

  document.getElementById(idtab).style.display = 'block';
  event.currentTarget.className += ' active'
}

document.getElementById('Open').click()


/*==================== SWIPER JS ====================*/
let swiper = new Swiper('.certificate_container', {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const sunTheme = 'sun-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](sunTheme)
  themeButton.classList[selectedIcon === 'uil-sun' ? 'add' : 'remove'](
    iconTheme
  )
}

themeButton.addEventListener('click', () => {
  // Adicionar ou remover o tema claro / ícone
  document.body.classList.toggle(sunTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})


/*==================== SCROLL REVEAL ====================*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000
})

scrollReveal.reveal('.delaySmallReveal', { delay: 200 })
scrollReveal.reveal('.delayMediumReveal', { delay: 300 })
scrollReveal.reveal('.delayLargeReveal', { delay: 400 })

scrollReveal.reveal('.intervalCardReveal', { interval: 400 })
