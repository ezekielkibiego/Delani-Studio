$("form#form").on('submit',function(event){
    event.preventDefault();
    let name = $("input#name").val();
    let email = $("input#email").val();
    let message = $("textarea#message").val();

    if ($("input#name").val() && $("input#email").val()){
        alert ("Hi " + name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
        alert("Please provide your correct name and email!");
    }

});
