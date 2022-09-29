

$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });
  
  /* testing code performance "performance.now()""
  const startingTime = performance.now();
  for (let i = 1; i <= 100; i++) { 
    for (let j = 1; j <= 100; j++) {
      console.log('i and j are ', i, j);
    }
  }
  const endingTime = performance.now();
  console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.'); */
  