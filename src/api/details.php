<?php
    include 'connect.php';

    /*
        * 获取前端参数
        * 拼接sql语句
        * 格式化数据
     */
    $id = isset($_GET['id']) ? $_GET['id'] : '';

    $sql = "select * from goods where id=$id";

    //获取查询结果
    $result = $conn->query($sql);

    //使用查询结果集
    $row = $result->fetch_all(MYSQLI_ASSOC);

    //释放查询结果集
    $result->close();

    //把结果输出到前端
    echo json_encode($row,JSON_UNESCAPED_UNICODE);

    //关闭连接
    $conn->close();
?>