
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
// SECTION 1




function section1(card_image_top, card_image_alt = "Hello, i'm sorry", title, text, link, category, color, type, cardno) {

          let main = document.querySelector(".section1 .col-md-9 .d-flex")
  
          let card = document.createElement("div")
          let card_image_div = document.createElement("div") 
          let card_img_top = document.createElement("img")
          let card_body = document.createElement("div")
          let card_title = document.createElement("h5")
          let card_text = document.createElement("p")
          let card_body2 = document.createElement("div")
          let card_link = document.createElement("a")

              card.className = "card"
              card.classList.add(cardno)
              // [category,color,type]
              card_img_top.className = "card-img-top"
              card_img_top.classList.add("image")
              card_img_top.classList.add("cap")
              card_body.className = "card-body"
              card_title.className = "card-title"
              card_text.className = "card-text"
              card_body2.className = "card-body"
              card_link.className = "card-link"
              card_link.classList.add("stretched-link")
              // card_link.classList.add()

              card_img_top.setAttribute("src", card_image_top);
              card_img_top.setAttribute("alt", card_image_alt);
              card_image_div.className = "card-img-div"
              card_image_div.appendChild(card_img_top)

              card_title.innerHTML = title
              card_text.innerHTML = text
              card_body.appendChild(card_title)
              card_body.appendChild(card_text)

              card_link.setAttribute("href", link)
              card_link.setAttribute("target", "_blank")
              card_link.className["card-link", "stretched-link"]
              card_body2.appendChild(card_link)
              card_link.innerHTML = "Explore page"

              card.appendChild(card_image_div)
              card.appendChild(card_body)
              card.appendChild(card_body2)

      main.appendChild(card)
}


        section1("img/1.jpg", "", "e-Commerce web design", "Sleek, intuitive e-commerce web design with seamless user experience.", "https://e3-five.vercel.app/component", "ecomm", "color1", "landing", "card1")
        section1("img/2.jpg", "", "e-Commerce Shop Website Template", "Sleek, intuitive e-commerce web design with seamless user experience.", "https://ecommerce5-five.vercel.app/", "ecomm", "color2", "landing", "card2")
        section1("img/3.jpg","", "Minimal Blog Website Template", "Engage users with minimalist design, clear navigation, and compelling content snippets.", "https://whoprogrammer.github.io/4/", "blog", "color3", "hero", "card3")
        section1("img/4.jpg", "", "Beauty & Wellness eCommerce Landing...", "Beauty & wellness eCommerce Website Template design.", "https://parvaj420.github.io/ecommerce-webpage-design.com/", "ecomm", "color4", "landing", "card4")
        section1("img/5.jpg", "", "Modern hero section design.", "Beauty and Wellness eCommerce Landing Page Design", "https://whoprogrammer.github.io/1/", "blog", "color3", "hero", "card5")
        section1("img/6.jpg", "", "Modern hero section design", "Beauty and Wellness eCommerce Landing Page Design", "https://whoprogrammer.github.io/2/", "ecomm", "color2", "hero", "card6")
        section1("img/7.jpg", "", "Portfolio HERO section design.", "My landing page template is designed for user portfolio.", "https://whoprogrammer.github.io/3/", "port", "color3", "hero", "card7")
        section1("img/8.jpg", "", "Fashion eCommerce shop website template", "My fashion eCommerce website template design.", "https://parvaj420.github.io/e2/", "ecomm", "color4", "landing", "card8")
        section1("img/9.jpg", "", "Restaurant landing page", "My Premium Restaurant Landing Page is designed for the modern restaurateur looking for a great website.", "https://parvaj420.github.io/www.food-website.com/", "resto", "color1", "landing", "card9")
        section1("img/10.jpg", "", "Portfolio design", "simple portfolio landing Page design.", "https://parvaj420.github.io/portfolio-website-design.com/", "port", "color2", "landing", "card10")
        section1("img/11.jpg", "", "Construction & Contractors Website Template", "Experience superior design with our industry-leading Construction Website Template.", "https://parvaj420.github.io/ecommerce-website-design/", "ecomm", "color4", "landing", "card11")
        section1("img/12.jpg", "", "Landing page design", "Clean, intuitive landing page with minimalist design to engage users effectively.", "https://parvaj420.github.io/website-design.com/#", "", "color1", "landing", "card12")
        section1("img/14.jpg", "", "Hero category for games advertising", "User-friendly web interface for analyzing game data with interactive visualizations.", "https://whoprogrammer.github.io/6/", "game", "color2", "hero", "card13")

  function resat() {

    function all(display) {
      let e = document.querySelectorAll(".section1 .col-md-9 .card")
          e.forEach((ev) => {
            // ev.classList.remove(remove)
            // ev.classList.add(display)
            ev.style.display = display
          })
    }
    function card(cardNo, display) {
      let cardName = document.querySelector(`.section1 .col-md-9 .card${cardNo}`)
          cardName.style.display = (display)
          // cardName.classList.remove(rem)
    }
  


    let resat1 = document.querySelector(".section1 .col-md-3 .resat")

    let ecomm1 = document.querySelector(".section1 .col-md-3 .ecomm")
    let blog1 = document.querySelector(".section1 .col-md-3 .blog")
    let port1= document.querySelector(".section1 .col-md-3 .port")
    let rest1 = document.querySelector(".section1 .col-md-3 .rest")
    let game1= document.querySelector(".section1 .col-md-3 .game")

    let Color1 = document.querySelector(".section1 .col-md-3 .color1")
    let Color2 = document.querySelector(".section1 .col-md-3 .color2")
    let Color3 = document.querySelector(".section1 .col-md-3 .color3")
    let Color4 = document.querySelector(".section1 .col-md-3 .color4")
    
    let Hero_site = document.querySelector(".section1 .col-md-3 .hero-site")
    let Landing_site = document.querySelector(".section1 .col-md-3 .landing-site")

        resat1.addEventListener("click", () => {
          all("block")
        })

          ecomm1.addEventListener("click", () => {
          card("1", "block")
          card("2", "block")
          card("4", "block")
          card("6", "block")
          card("8", "block")
          card("11", "block")

          card("3", "none")
          card("5", "none")
          card("7", "none")
          card("9", "none")
          card("10", "none")
          card("12", "none")
          card("13", "none")
        })
        blog1.addEventListener("click", () => {
          card(3, "block")
          card(5, "block")

          card(1, "none")
          card(2, "none")
          card(4, "none")
          card(6, "none")
          card(7, "none")
          card(8, "none")
          card(9, "none")
          card(10, "none")
          card(11, "none")
          card(12, "none")
          card(13, "none")
        })
        port1.addEventListener("click", () => {
          card(10, "block")
          card(7, "block")

          card(3, "none")
          card(4, "none")
          card(5, "none")
          card(1, "none")
          card(2, "none")
          card(8, "none")
          card(9, "none")
          card(6, "none")
          card(11, "none")
          card(12, "none")
          card(13, "none")
        })
        rest1.addEventListener("click", () => {
          card(9, "block")

          card(3, "none")
          card(8, "none")
          card(4, "none")
          card(5, "none")
          card(6, "none")
          card(7, "none")
          card(1, "none")
          card(2, "none")
          card(10, "none")
          card(11, "none")
          card(12, "none")
          card(13, "none")
        })
        game1.addEventListener("click", () => {
          card(13, "block")

          card(3, "none")
          card(4, "none")
          card(5, "none")
          card(6, "none")
          card(7, "none")
          card(8, "none")
          card(9, "none")
          card(10, "none")
          card(1, "none")
          card(11, "none")
          card(2, "none")
          card(12, "none")
        })

        Color1.addEventListener("click", () => {
          card(1, "block")
          card(9, "block")
          card(12, "block")

          card(2, "none")
          card(3, "none")
          card(4, "none")
          card(5, "none")
          card(6, "none")
          card(7, "none")
          card(8, "none")
          card(10, "none")
          card(11, "none")
          card(13, "none")
        })
        Color2.addEventListener("click", () => {
          card(2, "block")
          card(6, "block")
          card(10, "block")
          card(13, "block")

          card(1, "none")
          card(9, "none")
          card(12, "none")
          card(3, "none")
          card(4, "none")
          card(5, "none")
          card(7, "none")
          card(8, "none")
          card(11, "none")
        })
        Color3.addEventListener("click", () => {
          card(3, "block")
          card(5, "block")
          card(7, "block")

          card(2, "none")
          card(4, "none")
          card(6, "none")
          card(1, "none")
          card(9, "none")
          card(12, "none")
          card(8, "none")
          card(10, "none")
          card(11, "none")
          card(13, "none")
        })
        Color4.addEventListener("click", () => {
          card(4, "block")
          card(8, "block")
          card(11, "block")

          card(1, "none")
          card(9, "none")
          card(12, "none")
          card(2, "none")
          card(3, "none")
          card(5, "none")
          card(6, "none")
          card(7, "none")
          card(10, "none")
          card(13, "none")
        })

        Hero_site.addEventListener("click", () => {
          card(3, "block")
          card(5, "block")
          card(6, "block")
          card(7, "block")
          card(13, "block")

          card(1, "none")
          card(2, "none")
          card(4, "none")
          card(8, "none")
          card(9, "none")
          card(10, "none")
          card(11, "none")
          card(12, "none")
        })
        Landing_site.addEventListener("click", () => {
          card(3, "none")
          card(5, "none")
          card(6, "none")
          card(7, "none")
          card(13, "none")

          card(1, "block")
          card(2, "block")
          card(4, "block") 
          card(8, "block")
          card(9, "block")
          card(10, "block")
          card(11, "block")
          card(12, "block")
        })

  }
  resat()
 

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



