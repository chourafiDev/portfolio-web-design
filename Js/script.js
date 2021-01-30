// text animation
var typed = new Typed('#jobs', {
    strings: [
        'Web Developer.', 
        'Graphic Designer.',
        'Digital Marketer.',
    ],
    typeSpeed: 90,
    backSpeed: 50,
    loop: true,
});

// slider testemonails
var swiper = new Swiper('.swiper-container', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },

    // For Responsive Service, Property Section
    breakpoints: {
        640: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 1,
        },
        1024: {
        slidesPerView: 1,
        },
    }
});

// portfolio bar filter
const filterContainer = document.querySelector("#filter-list"),
    boxItems = document.querySelectorAll(".gallery");

filterContainer.addEventListener("click", (event) =>{
if(event.target.classList.contains("items")){
        // deactivate existing active 'items'
        filterContainer.querySelector(".active").classList.remove("active");
        // activate new 'items'
        event.target.classList.add("active");

        const filterValue = event.target.getAttribute("data-filter");
        boxItems.forEach((item) =>{
        if(item.classList.contains(filterValue) || filterValue === 'all'){
            item.classList.remove("hide");
            item.classList.add("show");
        }
        else{
            item.classList.remove("show");
            item.classList.add("hide");
        }
    });
    }
});

// slider images in portfolio section
//getting all required elements
const gallery  = document.querySelectorAll(".portfolio-box"),
    previewBox = document.querySelector(".preview-box"),
    previewImg = previewBox.querySelector("#iconClick"),
    closeIcon = previewBox.querySelector(".icon"),
    currentImg = previewBox.querySelector(".current-img"),
    totalImg = previewBox.querySelector(".total-img"),
    shadow = document.querySelector(".shadow");

window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; //passing total img length to totalImg variable
        let newIndex = i; //passing i value to newIndex variable
        let clickedImgIndex; //creating new variable
        
        gallery[i].onclick = () =>{
            clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
            function preview(){
                currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
                let imageURL = gallery[newIndex].querySelector("#iconClick"); //getting user clicked img url
                previewImg = imageURL; //passing user clicked img url in previewImg src
            }
            preview(); //calling above function
    
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
                prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
                nextBtn.style.display = "none"; 
            }
            prevBtn.onclick = ()=>{ 
                newIndex--; //decrement index
                if(newIndex == 0){
                    preview(); 
                    prevBtn.style.display = "none"; 
                }else{
                    preview();
                    nextBtn.style.display = "block";
                } 
            }
            nextBtn.onclick = ()=>{ 
                newIndex++; //increment index
                if(newIndex >= gallery.length - 1){
                    preview(); 
                    nextBtn.style.display = "none";
                }else{
                    preview(); 
                    prevBtn.style.display = "block";
                }
            }
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show"); 
            shadow.style.display = "block"; 
            closeIcon.onclick = ()=>{
                newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
                prevBtn.style.display = "block"; 
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            }
        }
        
    }
    
}


