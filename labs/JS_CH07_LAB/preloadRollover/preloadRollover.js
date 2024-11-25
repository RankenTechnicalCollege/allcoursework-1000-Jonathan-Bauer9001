"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const image1 = $("#image1");
    const image2 = $("#image2");

    // preload images
    const links = $("#image_list").querySelectorAll("a");


    for ( let link of links) {
        const image = new Image();
        image.src = link;
    }

    setTimeout(()=>{
      image1.src = 'images/release.jpg';
      image2.src = 'images/deer.jpg';
    }, 1000);

    setTimeout(()=>{
      image1.src = 'images/hero.jpg';
      image2.src = 'images/bison.jpg';
    }, 2000);

        image1.addEventListener("mouseover", () => {
            image1.src = 'images/release.jpg';
        });
        image1.addEventListener("mouseout", () => {
            image1.src = 'images/hero.jpg';
        });
        image2.addEventListener("mouseover", () => {
            image2.src = 'images/deer.jpg';
        });
        image2.addEventListener("mouseout", () => {
           image2.src = 'images/bison.jpg';
  });           

});
