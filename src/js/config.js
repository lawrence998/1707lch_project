require.config({
    //默认data-min文件所在的目录
    //baseUrl:'js',可以指定路径
    
    //别名 虚拟路径
    paths:{
        'jquery':'../lib/jquery-3.2.1',
        'carousel':'../lib/jquery-lchCarousel/jquery.lchCarousel',
        'zoom':'../lib/jquery-lchZoom/jquery.lchZoom',
        'ajax':'../lib/ajax'
    },
    shim:{
        //设置依赖
        carousel:['jquery'],
        zoom:['jquery']
    }
});