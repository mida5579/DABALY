const headerscrool = document.querySelector('.navbarContent');

window.onscroll = function(){
    var top = window.scrollY;
    if(top>= 80 ){
        headerscrool.classList.add('active') ; 

    }else{
        headerscrool.classList.remove('active') ;

    }

    
}