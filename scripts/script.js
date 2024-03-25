const imgRow = document.querySelector('.img-row');
    
    // Voeg eventlistener toe voor scrollen
    imgRow.addEventListener('scroll', function() {
      const lastImage = imgRow.lastElementChild.getBoundingClientRect();
      if (lastImage.right <= window.innerWidth) {
        // Als de rechterrand van de laatste afbeelding zichtbaar is, voeg meer afbeeldingen toe
        const images = imgRow.innerHTML;
        imgRow.innerHTML += images;
      }
    });