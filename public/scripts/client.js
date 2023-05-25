/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const loadTweets = function() {
    $.get('/tweets').then((data) => {
        $("#tweet-container").html("");
        renderTweets(data);
      });
  };
  //ask about this
  loadTweets();

  
  const formReset = function() {
    $('#too-long-error').hide();
    $('#empty-error').hide();
  }

  formReset()
  
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  const renderTweets = function(tweets) {
    for (let tweet of tweets){
      const $tweet = createTweetElement(tweet);
      $('#tweet-container').prepend($tweet); 
    }
  };
  
  const createTweetElement = function(tweetObj) {
    let $tweet = `
      <article class="tweet">
        <h3>
        <i class="fa-sharp fa-solid fa-user-ninja"></i>
          ${tweetObj.user.name}         
        </h3>
        <section class="tweet-text"> 
          ${escape(tweetObj.content.text)}
        </section>
        <footer>
          <div class="timeago"> ${timeago.format(tweetObj.created_at)}</div>
          <div class="icons">
            <i name="flag" class="fa-solid fa-flag"></i>
            <i name="retweet" class="fa-solid fa-retweet"></i>
            <i name="heart" class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>
      `;
    return $tweet
  };

  $('#tweet-form').on("submit", function(event){
    event.preventDefault()
    formReset();
    const data = $(this).serialize();

    if($("textarea").val() === "") {
      $("#empty-error").slideDown(400);
    } else if ($("textarea").val().length >140){
      $("#too-long-error").slideDown(400);
    } else {
    $.post("/tweets", data)
      .then(() => {
        loadTweets();
      })
    }

  });
  




})


{/* <span> <img class="avatar" src="http://example.com/img" alt="avatar-picture" /> My Header </span> */}
