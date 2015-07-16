<?php
    header('Content-Type: text/html; charset=utf-8');
    // 连接数据库
    $con = mysqli_connect("localhost", "root", "","503");
    if (mysqli_connect_errno($con)) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    if ($_POST["method"] == 'register') {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        $sql = "INSERT INTO user (name, email, password) VALUES ('{$name}','{$email}','".md5($password)."')";
        if (mysqli_query($con, $sql)) {
            $json['status'] = 'true';
        } else {
            echo mysqli_error($con);
            $json['status'] = 'false';
        }
        echo json_encode($json);
    } else {
        $email = $_POST["email"];
        $password = $_POST["password"];
        $sql = "SELECT * FROM user WHERE email = '{$email}' AND password = '".md5($password)."'";

        $result = mysqli_query($con, $sql);
        if (mysqli_num_rows($result) >= 1) {
            $json['status'] = 'true';
        } else {
            echo mysqli_error($con);
            $json['status'] = 'false';
        }
        echo json_encode($json);
    }

?>
