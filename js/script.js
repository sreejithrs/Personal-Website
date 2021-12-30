



$('input[name="mob"]').keyup(function (e) {
    if (/\D/g.test(this.value)) {
      // Filter non-digits from input value.
      this.value = this.value.replace(/\D/g, "");
    }
});

function validateSignup() {
    $.validator.addMethod(
      "regex",
      function (value, element, regexp) {
        if (regexp.constructor != RegExp) regexp = new RegExp(regexp);
        else if (regexp.global) regexp.lastIndex = 0;
        return this.optional(element) || regexp.test(value);
      },
      "Please check your input."
    );
  
    $("#submit-form").validate({
      errorClass: "req_mess",
      ignore: ":hidden",
      validClass: "signup_valid_class",
      errorClass: "signup_error_class",
  
      rules: {
        email: {
          required: true,
          email: true,
          regex: /^[A-Za-z0-9_]+\@[A-Za-z0-9_]+\.[A-Za-z0-9_]+/,
        },
  
        name: {
          required: true,
          minlength: 3,
          regex: /^[a-zA-Z\\s]/,
        },
  
        mob: {
          required: true,
          minlength: 10,
          maxlength: 10,
        },
  
        sub: {
          required: true,
          regex: /^[A-Za-z0-9_]{5,30}$/,
        },
  
        comments: {
          required: true,
          regex: /^[A-Za-z0-9_]{10,500}$/,
        },
      },
      messages: {
        email: {
          required: "You must enter an email",
          regex: "Please enter a valid email address, eg: example@gmail.com",
        },
  
        name: {
          regex: "No numbers or white spaces allowed",
          required: "Please enter your name"
        },
  
        mob: {
          required: "Please enter your phone number",
          minlength: "Number should contain 10 digits",
          maxlength: "Number should not exceed 10 digits",
        },
        sub: {
          required: "Please enter the subject",
          regex: "Subject should be in between 5 and 30 characters",
        },
  
        comments: {
          required: "Please enter your message",
          regex: "Message should be in between 10 and 400 characters",
        },
      },
  
      submitHandler: function (form) {
        return true;
      },
    });
}



var x = document.getElementById("name").value;
var y = document.getElementById("mob").value;
var z = document.getElementById("email").value;
var ab = document.getElementById("comments").value;

    $("#submit-form").submit((e) => {
        e.preventDefault();
        $.ajax({
          url: "https://script.google.com/macros/s/AKfycbwRNLBIlKFl5wgemgyV6mv7hTAX_2Kcr3q4_ZIKzeLiUfd7G63iy0h2UhpRk7vItggX0Q/exec",
          data: $("#submit-form").serialize(),
          method: "post",
          success: function (response) {
            alert("Form submitted successfully");
            window.location.reload();
            //window.location.href="https://google.com"
          },
          error: function (err) {
            alert("Something Error");
          },
        });
      });



 