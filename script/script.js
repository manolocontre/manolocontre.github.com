/******Menu******/
((d) =>{
    const $btnMenu = d.querySelector(".menu-btn"),
      $menu = d.querySelector(".menu");
  
    $btnMenu.addEventListener("click", (e) => {
      $btnMenu.firstElementChild.classList.toggle("none");
      $btnMenu.lastElementChild.classList.toggle("none");
      $menu.classList.toggle("is-active");
    });


    d.addEventListener("click", (e) => {
        if (!e.target.matches(".menu a")) return false;
    
        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
    });   
   
    })(document);


/******Menu******/
(function(){
  const sliders = [...document.querySelectorAll('.methods_body')];
  const buttonNext = document.querySelector('#next');
  const buttonBefore = document.querySelector('#before');
  let value;

  buttonNext.addEventListener('click',()=>{
      changePosition(1);
  });

  buttonBefore.addEventListener('click',()=>{
      changePosition(-1);
  });

  const changePosition = (add)=>{
    const currentMethods =document.querySelector('.methods_body--show').dataset.id;
    value =  Number(currentMethods);
    value+= add;

     sliders[Number(currentMethods)-1].classList.remove('methods_body--show')

    if(value === sliders.length+1 || value ===0){
      value = value === 0 ? sliders.length : 1;
    }

    sliders[value-1].classList.add('methods_body--show');


  }


})()

 /******modal******/   
 
 const openModal = document.querySelector('.modal-closes');
 const modal = document.querySelector('.modal');
 const closeModal = document.querySelector('.modal-close');

 openModal.addEventListener('click', (e) => {
   e.preventDefault();
  modal.classList.add('modal--show'); 
 }); 
 closeModal.addEventListener('click', (e) => {
   e.preventDefault();
  modal.classList.remove('modal--show'); 
 }); 

 /******To hide sailing bar  ******/
/* 
let mainLocation = window.pageYOffset;
window.onscroll = function() {
  let Displacement_Current = window.pageYOffset;
  if(mainLocation >= Displacement_Current){
    document.getElementById('header').style.top = '0'; 
  }
  else{
    document.getElementById('header').style.top = '-100px';
  }
  mainLocation = Displacement_Current;
}*/
/******Scroll******/
window.onscroll = miFuncion;

function miFuncion(){
 let scroll = document.body.scrollTop || document.documentElement.scrollTop;
 let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
 let scrolled = (scroll/ height) *100;
 document.getElementById("sweep").style.width = scrolled + '%';

}
/* ********** ContactForm ********** */
((d) => {
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/rafael.calzadilla@desft.cu", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
        $response.querySelector( "h3").innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);