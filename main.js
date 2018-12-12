//lightbox modal 
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

}

//chat// - // nestrādā neviens no variantiem. kāpēc? //

$('SendChatMessage').click(function () {
  
  var userName = $('#chat-username-input').val();
  var text = $('#chat-text-input').val();
  var dateInsert = new Date();


  var html = '<div class="chat-message"><h5>' + userName + '<em>' + dateInsert + '</em></h5><p>' + text + '</p></div>';

  $('.chat-main-window').appendTo(html);

  
});

// document.getElementById("SendChatMessage").addEventListener("click", postMsg);

// function postMsg () {
//   var userName = document.getElementById("chat-username-input").innerHTML;
//   var text = document.getElementById("chat-text-input").innerHTML;

//   document.getElementById("newChatMessage") = "YOU CLICKED ME!" ;

// }

$(document).ready(function() {
  

	  
  var numItems = $('li.fancyTab').length;
  

      if (numItems == 12){
        $("li.fancyTab").width('8.3%');
      }
      if (numItems == 11){
        $("li.fancyTab").width('9%');
      }
      if (numItems == 10){
        $("li.fancyTab").width('10%');
      }
      if (numItems == 9){
        $("li.fancyTab").width('11.1%');
      }
      if (numItems == 8){
        $("li.fancyTab").width('12.5%');
      }
      if (numItems == 7){
        $("li.fancyTab").width('14.2%');
      }
      if (numItems == 6){
        $("li.fancyTab").width('16.666666666666667%');
      }
      if (numItems == 5){
        $("li.fancyTab").width('20%');
      }
      if (numItems == 4){
        $("li.fancyTab").width('25%');
      }
      if (numItems == 3){
        $("li.fancyTab").width('33.3%');
      }
      if (numItems == 2){
        $("li.fancyTab").width('50%');
      }
    
 


  });

$(window).load(function() {

$('.fancyTabs').each(function() {

  var highestBox = 0;
  $('.fancyTab a', this).each(function() {

    if ($(this).height() > highestBox)
      highestBox = $(this).height();
  });

  $('.fancyTab a', this).height(highestBox);

});
});

