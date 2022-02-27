// const items = [
//     'img/01.jpg',
//     'img/02.jpg',
//     'img/03.jpg',
//     'img/04.jpg',
//     'img/05.jpg'
// ];

// const title = [
//     'Svezia',
//     'Svizzera',
//     'Gran Bretagna',
//     'Germania',
//     'Paradise'
// ]

// const text = [
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//     'Lorem ipsum',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
//     'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
// ]

// const cards = [

//     {
//         items: 'img/01.jpg',
//         title: 'Svezia',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//     },

//     {
//         items: 'img/02.jpg',
//         title: 'Svizzera',
//         text: 'Lorem ipsum',
//     },

//     {
//         items: 'img/03.jpg',
//         title: 'Gran Bretagna',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     },

//     {
//         items: 'img/04.jpg',
//         title: 'Germania',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
//     },

//     {
//         items: 'img/05.jpg',
//         title: 'Paradise',
//         text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
//     },

// ]

// console.log(cards)


// const msImageWrapperContainer = document.querySelector(".ms_image_wrapper");
// console.log(msImageWrapperContainer);

// const msTitle = document.querySelector(".ms_description");
// console.log(msTitle);

// const msPreviewList = document.querySelector(".ms_preview_list");
// console.log(msPreviewList);



// let currentIndex = 0;

// cards.forEach((Element, ) => {

//     const msImage = document.createElement("div");
//     msImage.classList.add("item");
//     msImage.innerHTML = `<img src="${Element.items}" alt="">`;
//     msImageWrapperContainer.append(msImage);

//     const msPreviewImage = document.createElement("li")
//     msPreviewImage.classList.add("ms_noBorder")
//     msPreviewImage.innerHTML = `<img src="${Element.items}" alt="">`;
//     msPreviewList.append(msPreviewImage)

//     const msTitleTest = document.createElement("h2");
//     msTitleTest.classList.add("ms_title_not_active");
//     msTitleTest.innerHTML = `${Element.title}`
//     msTitle.append(msTitleTest);

//     const msDescriptionP = document.createElement("p");
//     msDescriptionP.classList.add("ms_text_not_active");
//     msDescriptionP.innerHTML = `${Element.text}`
//     msTitle.append(msDescriptionP);
    
// })

// const msActiveImage = [...document.getElementsByClassName("item")];

// msActiveImage[currentIndex].classList.add("active");

// const msActiveTitle = [...document.getElementsByClassName("ms_title_not_active")]

// msActiveTitle[currentIndex].classList.add("ms_active_title")

// const msActiveText = [...document.getElementsByClassName("ms_text_not_active")]

// msActiveText[currentIndex].classList.add("ms_active_text")

// const msPreviewImage = [...document.getElementsByClassName("ms_noBorder")]

// msPreviewImage[currentIndex].classList.add("ms_border_active")

// const msPrevImage = document.querySelector(".ms_prev_button");

// msPrevImage.addEventListener("click", function() {

//     msActiveImage[currentIndex].classList.remove("active");
//     msPreviewImage[currentIndex].classList.remove("ms_border_active")
//     msActiveTitle[currentIndex].classList.remove("ms_active_title")
//     msActiveText[currentIndex].classList.remove("ms_active_text")
//     currentIndex--;
//     msActiveImage[currentIndex].classList.add("active");
//     msPreviewImage[currentIndex].classList.add("ms_border_active")
//     msActiveTitle[currentIndex].classList.add("ms_active_title")
//     msActiveText[currentIndex].classList.add("ms_active_text")

// })

// const msNextImage = document.querySelector(".ms_next_button");

// msNextImage.addEventListener("click", function() {

//     msActiveImage[currentIndex].classList.remove("active");
//     msPreviewImage[currentIndex].classList.remove("ms_border_active")
//     msActiveTitle[currentIndex].classList.remove("ms_active_title")
//     msActiveText[currentIndex].classList.remove("ms_active_text")
//     currentIndex++;
//     msActiveImage[currentIndex].classList.add("active");
//     msPreviewImage[currentIndex].classList.add("ms_border_active")
//     msActiveTitle[currentIndex].classList.add("ms_active_title")
//     msActiveText[currentIndex].classList.add("ms_active_text")

// })



const app = new Vue({

    el: "#app",
    data: {

        notActiveBox: "item",
        activeBox: "ms_active",
        activeBorder: "ms_border_active",
        arrayCards: [

            {
                items: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
        
            {
                items: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum',
            },
        
            {
                items: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
        
            {
                items: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
        
            {
                items: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
        
        ]

    }

})