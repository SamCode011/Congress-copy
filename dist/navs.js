let listElements = document.querySelectorAll('.list_button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click',()=>{

        listElement.classList.toggle('arrow');

        let height = 0 ;
        let menu =listElement.nextElementSibling;
       /*  console.log(menu.scrollHeight); */
       if(menu.clientHeight=="0") {
        height=menu.scrollHeight;
       }
       menu.style.height= `${height}px` 
    })
})
 
 let navActive = document.querySelectorAll('.click-active');

navActive.forEach(activation => {
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
   
 