$("#form").on('submit',function(event){
    event.preventDefault();
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("textarea#message").val();

    if ($("#name").val() && $("#email").val()){
        alert ("Hi " + name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
        alert("Please provide your correct name and email!");
    }

});

$(document).ready(function(){
    $("#design-icon").click(function(){
      $("#design-icon").slideDown('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function(){
      $("#design").slideUp('1500');
      $("#design-icon").slideDown('1500');
    });
  });

$(document).ready(function(){
    $("#development-icon").click(function(){
      $("#development-icon").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").slideUp('1500');
      $("#development-icon").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#product-icon").click(function(){
      $("#product-icon").slideDown('1500').hide('1000');
      $("#product").show('1500');
    });
    $("#product").click(function(){
      $("#product").slideUp('1500');
      $("#product-icon").slideDown('1500');
    });
  });
  
  