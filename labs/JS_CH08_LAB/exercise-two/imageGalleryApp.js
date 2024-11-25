"use strict"

$(document).ready( () => {

  $('a').each( (index, link) => {
    const image = new Image();
    image.src = link.href;
  });

  $('a').click( evt => {
    //prevent defualt action of link
    evt.preventDefault();
    //get clicked <a> 
    const link = evt.currentTarget
   
    $('#image').attr('src', link.href);
    $('#imageTitle').text(link.title);
    
    $('li:first-child a').focus()

  });
});