$(function () {
    var autoComplete = [
        "Ankara",
        "Çorum",
        "Samsun",
        "İstanbul",
        "Sinop",
        "Konya",
        "Çorum Müzesi",
        "Müze",
        "Kız Kulesi",
        "Aşti",
        "Atakule",
        "Kule",
        "Otogar",
        "Şehir",
        "İçerik",
        "Başlık",
        "Table"
    ];
    $("#tagsSearch").autocomplete({
        source: autoComplete
    });
});
$(function () {
    $("#giris").click(function () {
        $("#myUye").modal()
    });
});
$(function () {
    $("#btnSubmit").click(function () {
        var username, password, phone;
        username = $("#username").val();
        username = jQuery.trim(username);
        phone = $("#phone").val();
        phone = $.trim(phone);
        password = $("#password").val();
        password = password.trim(password);
       
        if (username == "") {
            $("#usernameHata").text("Kullanıcı adınız boş olamaz.");
        }
        else{
            $("#usernameHata").text("");
        }
        if (phone == "") {
            $("#phoneHata").html("Telefon numarası boş olamaz.");
        }
        else if($.isNumeric(phone)==false){
            $("#phoneHata").html("Telefon numarası sayı olmalı.");
        }
        else if(validatePhone(phone)==false){
            $("#phoneHata").html("Telefon numarası başında 0 olmadan 10 haneli olmalıdır.");
        }
        else{
            $("#phoneHata").text(""); 
        }
        if (password == "") {
            $("#passwordHata").html("Şifreniz boş olamaz.");
        }
        else{
            $("#passwordHata").text("");
        }
    });
});

function validatePhone(telephoneNumber){
    var phone = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return phone.test(telephoneNumber);
}
function password_show_hide() {
    var x = document.getElementById("password");
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
        x.type = "text";
        show_eye.style.display = "none";
        hide_eye.style.display = "block";
    } else {
        x.type = "password";
        hide_eye.style.display = "none";
        show_eye.style.display = "block";
    }
};