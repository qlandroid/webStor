/**
 * Created by android on 2017/8/7.
 */

$(document).ready(function () {

    $("#login_btn").click(function () {
        var account = $("#login_account").val();
        var pw = $("#login_password").val();

        if (account === "") {
            $("#login_account").focus();
            return false;
        }
        if (pw === "") {
            $("#login_password").focus();
            return false;
        }

        $.ajax({
            type: "POST",
            data: {
                account: account,
                pw: pw
            },
            url: "www.baidu.com",
            dataType: "json",
            success: function (data) {
                alert(JSON.parse(data))
            },
            error: function () {
                alert("连接不到网路")
            }
        })
    })
});