$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            name:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            sub:{
                required:true,
                minlength:5
            },
            comments:{
                required:true,
                minlength:10,
                maxlength:400
            },
            mob:{
                required:true,
                minlength:10,
                maxlength:10
            }
        },
        messages:{
            mob:{
                required:"Enter you mobile number",
                minlength:"Mobile number should contain 10 numbers",
                maxlength:"Should not exceed 10 numbers"
            }
        }
    })
})

