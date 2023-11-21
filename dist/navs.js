let listElements = document.querySelectorAll('.list_button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click',()=>{
        activation.classList.remove('active');
        let principal = activation.nextElementSibling;
        principal.style.height = '0';

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
/* document.addEventListener('DOMContentLoaded', function () {
    let navActive = document.querySelectorAll('.click-active');

    navActive.forEach(activation => {
      activation.classList.remove('active');
      let principal = activation.nextElementSibling;
      principal.style.height = '0';

      activation.addEventListener('click', () => {
        activation.classList.toggle('active');
        if (activation.classList.contains('active')) {
          principal.style.height = principal.scrollHeight + 'px';
        } else {
          principal.style.height = height;
        }
      })
    });
  });
 */

/*   document.addEventListener('DOMcontentLoaded',function() {
    let navActive = document.querySelectorAll('.click-active');

    navActive.forEach(activation => {
        activation.classList.remove('active');
        let principal = activation.nextElementSibling;
        principal.style.height='0';

        activation.addEventListener('click',()=> {
            activation.classList.toggle('active');
            if (activation.classList.contains('active')) {
                principal.style.height=principal.scrollHeight +'px';
            }else {
                principal.style.height=height;
            }
            
        })
    })
})
  */
   
 