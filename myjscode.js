$(function() {
    $(document).ready(function() {
        $("#name").val('');
        $("#email").val('');
        $("#password").val('');
        $("#confirm_password").val('');
    });
    $("#myForm").submit(function() {

        var submit_form = true;

        if ($("#name").val().length < 5) {
            $("#name").css({ "border": "2px solid red" });
            alert("Name must be Greater than 5 characters");
            return false;
        } else {
            $("#name").css({ "border": "2px solid green" });
        }
        if ($("#email").val() == '') {
            $("#email").css("border", "2px solid red");
            alert("Invalid email");
            return false;
        } else {
            $("#email").css("border", "2px solid green");
        }
        if ($("#password").val().length < 8) {
            alert("Password must be atleast 8 characters");
            $("#password").css("border", "2px solid red");
            return false;
        } else {
            $("#password").css("border", "2px solid green");
        }

        if ($("#password").val() != $("#confirm_password").val()) {
            alert("Confirm Password does not match");
            $("#confirm_password").css("border", "2px solid red");
            return false;
        } else {
            $("#confirm_password").css("border", "2px solid green");
        }
        alert("FORM SUBMITTED SUCCESSFULLY")
        return true;
    });
});