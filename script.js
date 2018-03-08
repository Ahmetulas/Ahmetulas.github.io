//Scroll to Contact
document.querySelector('.header').children[2].onclick = () => {
    
    window.scroll({
        top: screen.height * 2, 
        left: 0, 
        behavior: 'smooth' 
      });
}

document.querySelector('.header').children[0].onclick = () =>{
    window.scroll({
        top: -(screen.height * 2), 
        left: 0, 
        behavior: 'smooth' 
      });
}

document.querySelector('.header').children[1].onclick = () => {

document.querySelector('#image2').scrollIntoView({ 
    behavior: 'smooth' 
  });
}