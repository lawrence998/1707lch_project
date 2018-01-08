<?php
    include 'connect.php';

    /*
        * 获取前端参数
        * 拼接sql语句
        * 格式化数据
     */
    
    $pageNo = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : 10;
    $cate = isset($_GET['category']) ? $_GET['category'] : '';
    

    $sql = 'select * from goods';

    if($cate){
        $sql .= " where category=$cate";
        var_dump($sql);

    }

    $sql .= ' limit '.$qty*($pageNo-1) . ',' .$qty;


    //获取查询结果
    $result = $conn->query($sql);

    //使用查询结果集
    $row = $result->fetch_all(MYSQLI_ASSOC);

    //释放查询结果集
    $result->close();

    //格式化数据
    $res = array(
        'pageNo'=>$pageNo,
        'qty'=>$qty,
        'total'=>$conn->query('select count(*) from goods')->fetch_row()[0],
        'data'=>$row
    );

    //把结果输出到前端
    echo json_encode($res,JSON_UNESCAPED_UNICODE);

    // 释放查询内存(销毁)
    //$result->free();

    //关闭连接
    $conn->close();
?>