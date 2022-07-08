$(document).ready(function () {

    //give input hover nice

    $("input").hover(function () {
        $(this).css({
            "border-width": "2px",
            "border-color": "red"
        })
    }, function () {
        $(this).css({
            "border-width": "0",
            "border-color": "black"
        })
    })




    $("button").click(function () {
        var inputEmail = $("input").val();
        if (inputEmail == "") {
            notValidEmail();
        } else if ((inputEmail.includes("@gmail.com")) && (inputEmail.length >= 10)) {
            $(".input-div p").css({
                "display": "block",
                "color": "green"
            });
            $(".input-div p").text("Eamil address added");
            $("input").css({
                "border-width": "4px",
                "border-color": "green"
            })
            setTimeout(removeErrorAfterWhile, 3000);
        } else {
            notValidEmail();
        }
    })


    function notValidEmail() {
        $(".input-div p").css({
            "display": "block",
            "color": "red"
        });
        $(".input-div p").text("Provide a valid email addres");
        $("input").css({
            "border-width": "2px",
            "border-color": "red"
        })
        setTimeout(removeErrorAfterWhile, 3000);
    }




    function removeErrorAfterWhile() {
        $(".input-div p").css("display", "none")
        $("input").css({
            "border-width": "0",
            "border-color": "black"
        })
    }
})