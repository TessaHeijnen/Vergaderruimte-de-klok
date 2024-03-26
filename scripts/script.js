// const imgRow = document.querySelector('.img-row');
    
//     // Voeg eventlistener toe voor scrollen
//     imgRow.addEventListener('scroll', function() {
//       const lastImage = imgRow.lastElementChild.getBoundingClientRect();
//       if (lastImage.right <= window.innerWidth) {
//         // Als de rechterrand van de laatste afbeelding zichtbaar is, voeg meer afbeeldingen toe
//         const images = imgRow.innerHTML;
//         imgRow.innerHTML += images;
//       }
//     });

jQuery(document).ready(function( $ ) {
  $("#google-reviews").googlePlaces({
       placeId: 'ChIJBzlxoAECDTkR28XtVffiBJM' //Find placeID @: https://developers.google.com/places/place-id
     , render: ['reviews']
     , min_rating:4
     , max_rows:5
     ,rotateTime: false
     , shorten_names: true

    
  });
});