const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


/* Looping through images */

for (i = 1; i <=5;i++){
    if (i === 1){
        xxx = 'images/pic1.jpg';
        
       
    }else if (i===2){
        xxx = 'images/pic2.jpg';
     
       
    }else if (i===3){
        xxx = 'images/pic3.jpg';
       
        
    }else if (i===4){
        xxx = 'images/pic4.jpg';
       
      
    }else if (i===5){
        xxx = 'images/pic5.jpg';
    
       
    }
    const newImage = document.createElement('img');
    
   
    newImage.setAttribute('src', xxx);
    thumbBar.appendChild(newImage);
}






/*
thumbBar.addEventListener('click',function(){

    thumbBar.getAttribute(xxx);
  displayedImage.appendChild(thumbBar);
})
*/




thumbBar.onclick = function(e){


    if(e.target.getAttribute('src')==='images/pic1.jpg'){
        displayedImage.setAttribute('src','images/pic1.jpg');   
    }else if(e.target.getAttribute('src')==='images/pic2.jpg'){
        displayedImage.setAttribute('src','images/pic2.jpg');   
    }else if(e.target.getAttribute('src')==='images/pic3.jpg'){
        displayedImage.setAttribute('src','images/pic3.jpg');
    }else if (e.target.getAttribute('src')==='images/pic4.jpg'){
        displayedImage.setAttribute('src','images/pic4.jpg');
    }else if(e.target.getAttribute('src')==='images/pic5.jpg'){
        displayedImage.setAttribute('src','images/pic5.jpg');
    }
         
 /*
e.target.style.border = '15px solid green';
console.log('aadd');
 */
/*
if( e.target.getAttribute('images/pic2.jpg')){
    displayedImage.appendChild(thumbBar);
    console.log(e);
  }
*/

}
/* Wiring up the Darken/Lighten button */

btn.onclick = function(e){

        if (e.target.getAttribute('class')==='dark'){
            btn.setAttribute('class','light');
            btn.textContent = 'Lighten';
            overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
            console.log('adsd');
        }else if(e.target.getAttribute('class')!=='dark'){   
            btn.setAttribute('class','dark'); 
            btn.textContent = 'Darken';    
            overlay.style.backgroundColor = 'rgba(0,0,0,0)';                      
            console.log('lihhh');
        }
  
}