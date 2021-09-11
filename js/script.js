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

 