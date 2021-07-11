

slideshow();


function slideshow() {
    console.log(789);
    let active = document.getElementsByClassName('active')[0];
    active.classList.remove('active')
    let next;
    if(active.nextElementSibling){
        next=active.nextElementSibling;
        
    }
    else{
        next=document.getElementsByClassName('sliderDiv')[0];
    }
    setTimeout(function (){
        next.classList.add('active')

    },1000)

    setTimeout(function () {
        slideshow()
    }, 6000)
}