$(document).ready(function(){
    $('#login').click(function(){
        var email = $.trim($('#email').val());
        var password = $.trim($('#password').val());

        $.post(
            '/api.php',
            {
                'method' : 'login',
                'email' : email,
                'password' : password
            },
            function (json) {
                if (json.status == 'true') {
                    alert('登陆成功');
                    window.location = "/checkout.html";
                } else {
                    alert('用户名或密码不正确');
                }

            },
            'json'
        )
    })
});
