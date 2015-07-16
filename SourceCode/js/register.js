$(document).ready(function(){
    $('#register').click(function(){
        var name = $.trim($('#name').val());
        var email = $.trim($('#email').val());
        var password = $.trim($('#password').val());
        var repass = $.trim($('#repassword').val());

        if (name=="" || email=="" || password=="" || repass=="") {
            alert('请填写必要字段');
            return;
        }
        if (password != repass) {
            alert('两次输入的密码不一致');
            return;
        }
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        if (!reg.test(email)) {
            alert('请输入正确的邮箱');
            return;
        }

        $.post(
            '/api.php',
            {
                'method' : 'register',
                'name' : name,
                'email' : email,
                'password' : password
            },
            function (json) {
                if (json.status == 'true') {
                    alert('注册成功');
                    window.location = "/checkout.html";
                } else {
                    alert('注册失败');
                }

            },
            'json'
        )
    })
});
