$("#form").on('submit',function(event){
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("textarea#message").val();
    
    if ($("#name").val() && $("#email").val()){
        alert ("Hi " + name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
        alert("Please provide your correct name and email!");
    }
    $("#form")[0].reset();
    

});


$(document).ready(function(){
    $("#design-icon").click(function(){
      $("#design-icon").slideDown().hide();
      $("#design").show();
    });
    $("#design").click(function(){
      $("#design").slideUp();
      $("#design-icon").slideDown();
    });
  });

$(document).ready(function(){
    $("#development-icon").click(function(){
      $("#development-icon").slideDown().hide();
      $("#development").show();
    });
    $("#development").click(function(){
      $("#development").slideUp();
      $("#development-icon").slideDown();
    });
  });
  
  $(document).ready(function(){
    $("#product-icon").click(function(){
      $("#product-icon").slideDown().hide();
      $("#product").show();
    });
    $("#product").click(function(){
      $("#product").slideUp();
      $("#product-icon").slideDown();
    });
  });

  $('.work1').mouseover(function() {
    $('#port1').show();
  }).mouseout(function() {
    $('#port1').hide();
  });
  $(".work2").mouseenter(function() {
    $("#port2").show();
  }).mouseleave(function() {
    $("#port2").hide();
  });
  $(".work3").mouseenter(function() {
    $("#port3").show();
  }).mouseleave(function() {
    $("#port3").hide();
  });
  $(".work4").mouseenter(function() {
    $("#port4").show();
  }).mouseleave(function() {
    $("#port4").hide();
  });
  $(".work5").mouseenter(function() {
    $("#port5").show();
  }).mouseleave(function() {
    $("#port5").hide();
  });
  $(".work6").mouseenter(function() {
    $("#port6").show();
  }).mouseleave(function() {
    $("#port6").hide();
  });
  $(".work7").mouseenter(function() {
    $("#port7").show();
  }).mouseleave(function() {
    $("#port7").hide();
  });
  $(".work8").mouseenter(function() {
    $("#port8").show();
  }).mouseleave(function() {
    $("#port8").hide();
  });

  


 