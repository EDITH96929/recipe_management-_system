// document.addEventListener('DOMContentLoaded', () => {
//     const srConfig = (origin, distance = '50px', delay = 200, opacity = 1, interval = 0) => ({
//         origin,
//         distance,
//         delay,
//         opacity,
//         interval,
//         duration: 1000,
//         easing: 'ease-in-out',
//         reset: true
//     });

//     const sr = ScrollReveal();

//     sr.reveal('.navbar', srConfig('top', '50px', 200));
//     sr.reveal('.logo', srConfig('left', '100px', 400, 0));
//     sr.reveal('.search-container', srConfig('right', '50px', 600, 0));
//     sr.reveal('.recipe-card', srConfig('bottom', '50px', 500, 0, 200));
//     sr.reveal('.recipe-name', srConfig('left', '30px', 800));
//     sr.reveal('.rating', srConfig('right', '30px', 1000));
// });


// function navigateToRecipe(pageUrl) {
//     window.location.href = pageUrl;
//   }

//   ScrollReveal().reveal('.recipe-button', {
//     duration: 1000,        
//     origin: 'left',      
//     distance: '50px',      
//     easing: 'ease-in-out', 
//     delay: 200,            
//     reset: true,           
//   });

const recipe = ScrollReveal({
  origin: 'bottom',
  distance: '40px',
  duration: 1000,
  delay: 300,
  easing: 'ease-out',
  reset: true
});

recipe.reveal('.recipe-container', {
  origin: 'top',
  distance: '50px',
  duration: 1200,
  delay: 400,
  easing: 'ease-in-out'
});

recipe.reveal('.recipe-card', {
  origin: 'bottom',
  distance: '60px',
  duration: 1200,
  delay: 500,
  easing: 'ease-in-out',
  interval: 200
});

recipe.reveal('.recipe-name', {
  origin: 'left',
  distance: '30px',
  duration: 1000,
  delay: 600,
  easing: 'ease-in-out'
});

recipe.reveal('.rating', {
  origin: 'right',
  distance: '30px',
  duration: 1000,
  delay: 700,
  easing: 'ease-in-out'
});

recipe.reveal('.icon-details', {
  origin: 'top',
  distance: '20px',
  duration: 1000,
  delay: 800,
  easing: 'ease-in-out'
});

recipe.reveal('.recipe-button', {
  origin: 'bottom',
  distance: '20px',
  duration: 1000,
  delay: 900,
  easing: 'ease-out',
  interval: 100
});


  const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    easing: 'ease-out',
    reset: true
  });

  sr.reveal('.home-text', {
    origin: 'left',
    distance: '80px',
    duration: 1200,
    delay: 300
  });

  sr.reveal('.home-image', {
    origin: 'right',
    distance: '80px',
    duration: 1200,
    delay: 500
  });

  sr.reveal('.curvy-menu', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 700
  });

  sr.reveal('#dynamic-text', {
    origin: 'top',
    distance: '50px',
    duration: 1500,
    delay: 900
  });



  sr.reveal('.features .container', {
    origin: 'top',
    distance: '60px',
    duration: 1200,
    delay: 300
  });

  sr.reveal('.feature-box', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 500,
    interval: 200
  });

  sr.reveal('.icon-container', {
    origin: 'left',
    distance: '30px',
    duration: 1000,
    delay: 600
  });
  
  
