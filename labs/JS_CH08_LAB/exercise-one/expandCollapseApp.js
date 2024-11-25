"use strict"

$(document).ready( () => {

  $('main a').click( evt => {
    evt.preventDefault();

    const a = evt.currentTarget;
    $(a).text(function(i, text){
      return text === 'Show less' ? 'Show more' : 'Show less';
    });
    $(a).prev().toggleClass('hidden');
    
  });
});