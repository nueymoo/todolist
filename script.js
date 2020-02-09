$(document).ready(function () {

    $(".button1").on("click", function () {
        var text = $(".textbox").val()
        if (text) {
            $(".checklist1").append(`
            <div class="line-ch">
            <div class="cchw">
            <i class="fas fa-check circle hidecircle"></i>
            <span class="text">    ${text}</span>
            </div>
            <div class="iconhomework">
                <i class="fas fa-trash-alt iconhm"></i>
            </div>
        </div>   
            `)
            $(".textbox").val("");
        }
        // $(".line-ch").hover(function () {
        //     $(this).find(".iconhomework").show();
        // }, function () {
        //     $(this).find(".iconhomework").hide();
        // }
        // );
        $(".circle").unbind("click");
        $(".circle").on("click", function () {
            $(this).toggleClass('hidecircle')
            .parent()
            .find(".text")
            .toggleClass('complete')
            .parent().parent()
            .toggleClass('guitar')
            .find(".iconhomework")
            .toggleClass('showiconhomework');
        });
            
        $(".iconhm").on("click", function () {
            $(this).parent().parent().remove();
        });
    });
    $('.textbox').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            $(".button1").click().toggleClass('active');
            setTimeout(function () {
                $(".button1").removeClass("active")
            }, 10);
        }
    });
});