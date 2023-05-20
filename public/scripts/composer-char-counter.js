$(document).ready(function() {
  console.log("documents ready bestie");
  
  $("form").on('keyup', function(){
    const userInput = $("textarea").val();
    const inputLength = userInput.length;





    // console.log($(this))
    let remainingChars = 140 - inputLength

    const counter = $(this).children().children(".counter");
    console.log(counter)
    // $(".counter").text(remainingChars);
    counter.text(remainingChars);
    console.log(counter.text(), "hello");


    if (counter.text() < 0) {
      counter.addClass("counter-red");
    } else {
      counter.removeClass("counter-red");
    }   

    

  })
});


