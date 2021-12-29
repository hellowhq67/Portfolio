var typed3 = new Typed('.animate', {
    strings: ['Lijan Haque','Devolaper', 'Designer', 'Freelancer'],
    typeSpeed: 20,
    backSpeed: 20,
    smartBackspace: true, // this is a default
    loop: true
  });
  document.querySelector('.ham').addEventListener("click",()=>{
document.querySelector('.nav-sectionn').classList.toggle('nav-hide');
});

    AOS.init();
 