$(document).ready(function() {
  var imagesLoaded = 0;
  var totalImages = 12;

  Array(totalImages)
    .fill()
    .map((_, i) => 'https://picsum.photos/200/200/?random=' + i)
    .forEach(img => {
      $('<img>').on('load', imageLoaded).attr('src', img).appendTo($('main'));
    })

  function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded == totalImages) {
      allImagesLoaded();
    }
  }

  function allImagesLoaded() {
    $('.loading').remove();
    $('main').show();
  }
});