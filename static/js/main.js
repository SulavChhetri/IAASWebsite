// //For the dropdown menu
function dropdownmenu(){
    const dropdown = document.querySelector('.nav__sub-list');
    if (dropdown.style.display === ""){
        dropdown.style.display ="flex";
    }
    else{
        dropdown.style.display ="";
    }
}

function dropdownsecondmenu(){
    const dropdown = document.querySelector('.nav__second-list');
    if (dropdown.style.display === ""){
        dropdown.style.display ="flex";
    }
    else{
        dropdown.style.display ="";
    }
}

function navbar(){
    const dropdown = document.querySelector('.nav__list');
    const header = document.querySelector('header');
    if (dropdown.style.display === ""){
        dropdown.style.display ="flex";
        header.style.position = "sticky";
        header.style.top = "0";
        header.style.zIndex = "9999";
    }
    else{
        dropdown.style.display ="";
        header.style.position = "";
    }
}



//For the Image Slider of Team Members

let indexValue = 1;

showImage(indexValue);

function btmslider(e){
    showImage(indexValue = e);
}

function side_slide(e){
    showImage(indexValue += e);
}

function showImage(e){
    let i;
    const img = document.querySelectorAll('.imageslider img');
    if (e>img.length){
        indexValue = 1;
    }
    if(e<1){
        indexValue = img.length;
    }
    for(i=0; i< img.length; i++){
        img[i].style.display = "none";
    }
    img[indexValue-1].style.display = "block";
}

//For the logo slider of the Partners and Sponsor


let indexLogoValue = 1;

showLogoImage(indexLogoValue);

function logoslider(e){
    showLogoImage(indexLogoValue = e);
}

function side_logo(e){
    showLogoImage(indexLogoValue += e);
}

function showLogoImage(e){
    let i;
    const logo = document.querySelectorAll('.partnersimageslider img');
    if (e>logo.length){
        indexLogoValue = 1;
    }
    if(e<1){
        indexLogoValue = logo.length;
    }
    for(i=0; i< logo.length; i++){
        logo[i].style.display = "none";
    }
    logo[indexLogoValue-1].style.display = "block";
}