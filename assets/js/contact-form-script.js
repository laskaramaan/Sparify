// (function($){"use strict";$("#contactForm").validator().on("submit",function(event){if(event.isDefaultPrevented()){formError();submitMSG(false,"Did you fill in the form properly?");}
// else{event.preventDefault();submitForm();}});function submitForm(){var name=$("#name").val();var email=$("#email").val();var msg_subject=$("#msg_subject").val();var phone_number=$("#phone_number").val();var message=$("#message").val();var gridCheck=$("#gridCheck").val();$.ajax({type:"POST",url:"assets/php/form-process.php",data:"name="+name+"&email="+email+"&msg_subject="+msg_subject+"&phone_number="+phone_number+"&message="+message+"&gridCheck="+gridCheck,success:function(text){if(text=="success"){formSuccess();}
// else{formError();submitMSG(false,text);}}});}
// function formSuccess(){$("#contactForm")[0].reset();submitMSG(true,"Message Submitted!")}
// function formError(){$("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){$(this).removeClass();});}
// function submitMSG(valid,msg){if(valid){var msgClasses="h4 tada animated text-success";}
// else{var msgClasses="h4 text-danger";}
// $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);}}(jQuery));

function sendmail() {
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone_number').val();
    var subject = $('#msg_subject').val();
    var message = $('#message').val();

    // var body = $('#body').val();

    var Body = 'Name: ' + name + '<br>Email: ' + email +  '<br>Phone Number: ' + phone + '<br>Subject: ' + subject + '<br>Message: ' + message;
    //console.log(name, phone, email, message);

    Email.send({
        SecureToken: "bd43e833-6609-4174-8d6a-237724fa349b",
        To: 'ashish.worksspace@gmail.com',
        From: email,
        Subject: "New Message On Feedback From " + name,
        Body: Body
    }).then(
        message => {
            //console.log (message);
            if (message == 'OK') {
                alert('Your mail has been send. Thank you for connecting.');
            }
            else {
                console.error(message);
                alert('There is error at sending message. ')

            }

        }
    );
}