$(document).ready(function() {
  
  $("form").on('keyup', function(){
    const userInput = $("textarea").val();
    const inputLength = userInput.length;





    // console.log($(this))
    let remainingChars = 140 - inputLength

    const counter = $(this).children().children(".counter");
    counter.text(remainingChars);

    if (counter.text() < 0) {
      counter.addClass("counter-red");
    } else {
      counter.removeClass("counter-red");
    }   

    

  })
});


