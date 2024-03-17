
// PAGE LOAD
gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 3.5,
  }
  );
  
  gsap.fromTo(
  ".page-load",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 5.5,
    zIndex:-10000,
  }
  );
  
  gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
  );
// PAGE LOAD

// nav

    
            /*=============== SHOW MENU ===============*/
            const headerToggle = document.getElementById('header-toggle'),
            main = document.getElementById('main'),
            navClose = document.getElementById('nav-close')
      
      /*===== MENU SHOW =====*/
      /* Validate if constant exists */
      if(headerToggle){
          headerToggle.addEventListener('click', () =>{
              main.classList.add('show-menu')
          })
      }
      
      /*===== MENU HIDDEN =====*/
      /* Validate if constant exists */
      if(navClose){
          navClose.addEventListener('click', () =>{
              main.classList.remove('show-menu')
          })
      }
      
      /*=============== REMOVE MENU MOBILE ===============*/
      const navLink = document.querySelectorAll('.nav__link')
      
      function linkAction(){
          const main = document.getElementById('main')
          // When we click on each nav__link, we remove the show-menu class
          main.classList.remove('show-menu')
      }
      navLink.forEach(n => n.addEventListener('click', linkAction))
      
      /*=============== CHANGE BACKGROUND HEADER ===============*/
      function scrollHeader(){
          const header = document.getElementById('header')
          // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
          if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
      }
      window.addEventListener('scroll', scrollHeader)
      
      /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
      const sections = document.querySelectorAll('section[id]')
      
      function scrollActive(){
          const scrollY = window.pageYOffset
      
          sections.forEach(current =>{
              const sectionHeight = current.offsetHeight,
                    sectionTop = current.offsetTop - 58,
                    sectionId = current.getAttribute('id')
      
              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                  document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
              }else{
                  document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
              }
          })
      }
      window.addEventListener('scroll', scrollActive)
              
        
// nav


const sel_div = document.querySelectorAll(".col-md-3 .accordion")
const drop_ani = document.querySelectorAll(".col-md-3 .check-box")

function index(ind) {
    sel_div[ind].addEventListener("mouseover", () => {
        drop_ani[ind].classList.add("drop-ani")
      })
      sel_div[ind].addEventListener("mouseout", () => {
        drop_ani[ind].classList.remove("drop-ani")
      })
}
index(0)
index(1)
index(2)

// SECTION 2

let section2 = document.querySelector(".section2 .d-flex")
let section2_imgs = document.querySelectorAll(".section2 .box2 img")


function move(imgName) {
  section2.addEventListener("mousemove", (e) => {
      section2_imgs[imgName].style.transform =  `translate( .${e.y}rem, .${ e.x}rem)`;
})
section2.addEventListener("mouseout", (e) => {
  section2_imgs[imgName].style.transform =  `translate( 0%, 0%)`;
})
}

move(1)
move(2)
move(3)
move(4)


section2.addEventListener("mousemove", (e) => {
  section2_imgs[0].style.transform =  `translate( .${e.x}rem, .${ e.y}rem)`;
})
section2.addEventListener("mouseout", (e) => {
section2_imgs[0].style.transform =  `translate( 0%, 0%)`;
})
// SECTION 3

const section3 = document.querySelector(".section3 .box2 .row")


function sectionInner(image, title, later) {
  let d = document.createElement("div")
let f = document.createElement("div")
let img = document.createElement("img")
let d2 = document.createElement("div")
let h5 = document.createElement("h5")
let p = document.createElement("p")
    d.className = "col-md-6"
    f.className = "d-flex"
    img.setAttribute("src",image)
    f.appendChild(img)
    h5.innerHTML = title
    d2.appendChild(h5)
    p.innerHTML = later
    d2.appendChild(p)
    f.appendChild(d2)
    d.appendChild(f)
    return d
}


    section3.appendChild(sectionInner("./img/s1.png", "Premium design", "I craft beautiful designs that will make your website wow your users, leave a long positive impression, and stand out from the crowd."))
    section3.appendChild(sectionInner("./img/s2.png", "Built for speed", "No one likes a slow website, so my designs offer fast loading and mobile responsive websites with the fastest possible load and performance."))
    section3.appendChild(sectionInner("./img/s3.png", "Perfectly responsive", "Your website will look and work great on any device. No matter if it's a desktop, laptop, tablet, phone, or even a smart fridge."))
    section3.appendChild(sectionInner("./img/s4.png", "Flexible design", "My templates are based on blocks, so you can reuse the blocks to create the layout that perfectly fits your website."))
    section3.appendChild(sectionInner("./img/s5.png", "Seamless animations", "I add animations to make my designs look nice and alive, which will give your website visitors a seamless and unique browsing experience."))
    section3.appendChild(sectionInner("./img/s6.png", "100% customizable", "Fully customized your design with unlimited revisions up to 100% satisfaction."))
    section3.appendChild(sectionInner("./img/s8.png", "CMS structure", "Every template comes with Webflow CMS collections built-in, so you can easily scale your website without any problems."))
    section3.appendChild(sectionInner("./img/s9.png", "Always up-to-date", "My templates are easily updated, so you can enjoy the latest Webflow features available, regardless of when the template was released."))
    section3.appendChild(sectionInner("./img/s10.png", 'Website Templates',"My Website Templates include the editable Figma file or other file with your purchase, so you can customize it and edit the graphics easily."))
    section3.appendChild(sectionInner("./img/s11.png", "Exceptional support", "If you have any questions, or hit a roadblock and need help, I'm always an email away to help you out!"))


  // SECTION 4
  
const section4 = document.querySelector(".section4 .row")
let button = `
                  Browse templates <i class="fa-solid fa-chevron-right i1"></i> <i class="fa-solid fa-arrow-right i2"></i>
                 `

  function section4Inner(image, title, later, buttonText) {

    

  let col_md_6 = document.createElement("div")
  let flex = document.createElement("div")
  let btn = document.createElement("button")
  let img = document.createElement("img")
  let h5 = document.createElement("h5")
  let p = document.createElement("p")

      col_md_6.className = "col-md-6"

      btn.innerHTML = buttonText
      img.setAttribute("src", image)
      h5.innerHTML = title
      p.innerHTML = later

      flex.appendChild(h5)
      flex.appendChild(p)
      flex.appendChild(btn)
      flex.appendChild(img)
      col_md_6.appendChild(flex)
      return col_md_6
  }

  section4.appendChild(section4Inner("./img/15.png", "Browse our fantastic Webflow templates", "Looking for a Webflow Template for your new website? Browse our collection carefully designed templates.", button))
  section4.appendChild(section4Inner("./img/15.png", "Browse our fantastic Webflow templates", "Looking for a Webflow Template for your new website? Browse our collection carefully designed templates.", button))



