//     nationalId .....
function Form_Val() {
    const The_nationalId = document.getElementById('nationalId').value;
    
    const The_FullName = document.getElementById('fullName').value;
    
    const The_birthdate = document.getElementById('birthdate').value;
    
    const The_mobileNumber = document.getElementById('mobileNumber').value;
    
    const The_email = document.getElementById('email').value;
    
    const The_captchaInput = document.getElementById('captchaInput').value;
    


    if (The_nationalId.trim() === '' || The_nationalId.length !== 11 ||
    
    (The_FullName.trim() !== '' && !ArabName(The_FullName)) || (The_birthdate.trim() !== '' && !BirthDate(The_birthdate)) || (The_mobileNumber.trim() !== '' && !PhoneNumber(The_mobileNumber)) || (The_email.trim() !== '' && !valueEmail(The_email)) || (The_captchaInput.trim() !== '' && The_captchaInput !== correctCaptcha))
     {
        if (The_nationalId.trim() === '') 
           window.alert('Please Enter The National_ID...');

        else if (The_nationalId.length !== 11) 
           window.alert('The National Number Must Consist of 11 Places...');

        else if (The_FullName.trim() !== '' && !ArabName(The_FullName)) 
           window.alert('Please Enter The Full_Name in Arabic...');

        else if (The_birthdate.trim() !== '' && !BirthDate(The_birthdate)) 
           window.alert('Please Enter The Date of Birth in The Correct Format...');

        else if (The_mobileNumber.trim() !== '' && !PhoneNumber(The_mobileNumber)) 
           window.alert('Please Enter The Valid Mobile Phone Number...');

        else if (The_email.trim() !== '' && !valueEmail(The_email)) 
           window.alert('InValid Email...');

        else if (The_captchaInput.trim() !== '' && The_captchaInput !== correctCaptcha) 
            alert('InValid Captcha Code...');

        return false;
    }
    return true;
}
function BirthDate(dateString) { return true; }
function PhoneNumber(phoneNumber) { return /^[0-9]{10}$/.test(phoneNumber); }
function ArabName(name) { return /[\u0600-\u06FF\s]+/.test(name); }
function valueEmail(email) { return /\S+@\S+\.\S+/.test(email); }


$(document).ready(function(){
    $("#continueBtn").click(function(){ $("#customerInfo").slideToggle(); });
    $(".selectBtn").click(function(){ 
        var city = $(this).data("city");
        $("#customerInfo").data("city", city).data("details", $(this).data("details")).data("price", $(this).data("price")); 
    });
    $(".detailsBtn").click(function(){ $("#" + $(this).data("target")).slideToggle(); });

    $("#submitBtn").click(function(){
        if (Form_Val()) {
            var city = $("#customerInfo").data("city");
            var details = $("#customerInfo").data("details");
            var price = $("#customerInfo").data("price");
            var selectedProperty = "العقار المختار: " + details + " في " + city + ". الإيجار الشهري: " + price;
            alert(selectedProperty);
        }
    });
    
    
    $("input[name='property']").change(() => console.log("تم اختيار " + $("input[name='property']:checked").data("city") + ": " + $("input[name='property']:checked").data("details") + "، بسعر " + $("input[name='property']:checked").data("price")));
});



//   Captcha  ..... 
var correctCaptcha = generateCaptcha(); 
function Captcha() {
    correctCaptcha = generateCaptcha(); 
    document.getElementById("captchaImage").src = "data:image/png;base64," + generateCaptchaImage(correctCaptcha);
}
function generateCaptcha() {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var captcha = "";
    for (var i = 0; i < 6; i++) captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    return captcha;
}
function generateCaptchaImage(captcha) {
    var canvas = document.createElement("canvas");
    canvas.width = 120;
    canvas.height = 40;
    var context = canvas.getContext("2d");
    context.font = "20px Arial";
    context.fillText(captcha, 10, 30);
    return canvas.toDataURL("image/png").replace("data:image/png;base64,", "");
}

