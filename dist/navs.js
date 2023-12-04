/* menu */
 let navActive = document.querySelectorAll('.click-active');

navActive.forEach(activation => {
    activation.classList.remove('active');
      let principal = activation.nextElementSibling;
      principal.style.height = '0';

    activation.addEventListener('click',()=> {
        activation.classList.toggle('active');
        let height = 0 ;
        let principal = activation.nextElementSibling;
        if (principal.clientHeight=="0") {
            height=null ;
        }
        principal.style.height=height;
    })
})
/* Submenu */
let listElements = document.querySelectorAll('.list_button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click',()=>{
        listElement.classList.toggle('arrow');
        let height = 0 ;
        let menu =listElement.nextElementSibling; 
       if(menu.clientHeight=="0") {
        height=menu.scrollHeight;
       }
       menu.style.height= `${height}px` ;

    
    })
}) 

  
/* submenu-image */
document.addEventListener('DOMContentLoaded',function() {
    let img = document.getElementById('bars');
    img.addEventListener('click',function() {
      img.classList.toggle('oculto');
       

       
       })
    })

