

/*
                Plugin Name : JavaScript LightBOX 
                Version : v1.0
                Author : Hamza fayaz 

*/


// This Lightbox file contains the main CODE


///Function to add HTML for POPUP functionality

function includePopupHTML() {
  let html =
    ' <div id="vis-popup" ><span id="close"><img id="npop" src="./images/close.png" alt=""></span><img id="left-arrow" src="./images/left-arrow.png" alt=""><img id="right-arrow" src="./images/right-arrow.png" alt=""><img id="mainPopImage" src="" alt=""></div>';

  let popo = document.body;
  popo.innerHTML;

  let popdiv = document.createElement("div");
  popdiv.innerHTML = html;

  document.body.insertBefore(popdiv, document.body.firstChild);


}


function closebutton(){

    document.getElementById('close').addEventListener('click', ()=>{  
        document.getElementById("mainPopImage").src=""; 
        document.getElementById("vis-popup").style.display='none';
  
    })
    
}


let img;
let current;
//function to init plugin

function imagePopupInit(target) {       

  //select all images with class ="target"
  img = document.getElementsByClassName(target);

  //Add pointers to the images with class "target"
  for (i = 0; i < img.length; i++) {
    img[i].style.cursor = "pointer";

// Adding evertlistner to images so that user click on image and image will popup
    img[i].addEventListener('click', (e)=>{
        document.getElementById("mainPopImage").src=e.target.src;
        document.getElementById("vis-popup").style.display='block';
        checkimagearrow();})    
        
    }
    


  includePopupHTML(); 
  closebutton();

  document.getElementById('right-arrow').addEventListener('click', function(){
    nextimg();
  })

  document.getElementById('left-arrow').addEventListener('click', function(){
    previmg();
  })

}


//Slide to the  prev image when user click left arrow
function previmg(){
    getCurrentImage();
    --current;
    document.getElementById("mainPopImage").src = img[current].src;
    checkimagearrow();
}



// Slide to the Next image when user click right arrow(){
    function nextimg(){
        getCurrentImage();
        current++;
        document.getElementById("mainPopImage").src = img[current].src;
        checkimagearrow();
    }

// get the currrent popup image
function getCurrentImage(){
    for(var i=0; i<img.length; i++){
        if(img[i].src==document.getElementById("mainPopImage").src){
           current=i;
        }
    }
}



// To hide right arrow when last image is poped up 
// To hide Left arrow when last image is poped up 

function checkimagearrow(){
    getCurrentImage()
    if(current == 0){
        document.getElementById('left-arrow').style.display='none';
        document.getElementById('right-arrow').style.display='block';

    }
    else if(current == img.length - 1){
        document.getElementById('right-arrow').style.display='none';
        document.getElementById('left-arrow').style.display='block';


    }
    else {
        document.getElementById('left-arrow').style.display='block';
        document.getElementById('right-arrow').style.display='block';

    }
}

