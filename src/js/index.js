//首页
require(['config'],function(){
    require(['jquery','carousel'],function($){
        jQuery(function($){
            $('.frame').lchCarousel({
                imgs:['img/banner1.png','img/banner2.png'],
                seamless:true,
                type:'horizontal' //
            })

            //果园公告
            $('.notice1').on('mouseover',function(){
                $('.noticelist').removeClass('hide');
                $('.notice1').css({
                    background:'#fff'
                });
            }).on('mouseout',function(){
                $('.noticelist').addClass('hide');
                $('.notice1').css({
                    background:'#eee'
                });
            })

            //手机果园
            $('.notice2').on('mouseover',function(){
                $('.topcode').removeClass('hide');
                $('.notice2').css({
                    background:'#fff'
                });
            }).on('mouseout',function(){
                $('.topcode').addClass('hide');
                $('.notice2').css({
                    background:'#eee'
                });
            })

            //搜索词语
            $('#search-keyword').on('focus',function(){
                $('.subsearch').removeClass('hide');
            }).on('blur',function(){
                $('.subsearch').addClass('hide');
            })
        });

        var goods = document.querySelector('.good-list');
        $.ajax({
            url:'http:./api/index.php',
            data:{
                category:"'lihe'"
            },
            success:function(data){  
                data = JSON.parse(data);
                var ul = document.createElement('ul');
                ul.className = "clearfix";
                ul.innerHTML = data.map(function(item){
                    var imgurl = item.imgurl.split(',')[0];
                    return `
                        <li class="pro_list" guid="${item.id}">
                            <div class="s-img">
                                <a><img src="${imgurl}"></a>
                            </div>
                            <div class="s-info">
                                <div class="s-name">
                                    ${item.title}
                                </div>
                                <div class="s-unit">
                                    ￥${item.price}/礼盒
                                </div>
                                <div class="s-che">
                                    
                                </div>
                            </div>
                            <div class="pro_list_pos">
                                <span class="pro_list_span">新品</span>
                            </div>
                        </li>
                    `
                    
                }).join('');
                goods.appendChild(ul);

                
            }
        });

        var goods1 = document.querySelector('.g1');
        $.ajax({
            url:'http:./api/index.php',
            data:{
                category:"'jiating'"
            },
            success:function(data){
                data = JSON.parse(data);
                var ul = document.createElement('ul');
                ul.className = "clearfix";
                ul.innerHTML = data.map(function(item){
                    var imgurl = item.imgurl.split(',')[0];
                    console.log(imgurl);
                        return `
                            <li class="pro_list" guid="${item.id}">
                                <div class="s-img">
                                    <a><img src="${imgurl}"></a>
                                </div>
                                <div class="s-info">
                                    <div class="s-name">
                                        ${item.title}
                                    </div>
                                    <div class="s-unit">
                                        ￥${item.price}/${item.unit}
                                    </div>
                                    <div class="s-che">
                                        
                                    </div>
                                </div>
                            </li>
                        `
                    
                }).join('');
                goods1.appendChild(ul);
            }
        });

        var goods2 = document.querySelector('.g2');
        $.ajax({
            url:'http:./api/index.php',
            data:{category:"'quanqiu'"},
            success:function(data){
                data = JSON.parse(data);
                var ul = document.createElement('ul');
                ul.className = "clearfix";
                ul.innerHTML = data.map(function(item){
                    var imgurl = item.imgurl.split(',')[0];
                        return `
                            <li class="pro_list" guid="${item.id}">
                                <div class="s-img">
                                    <a><img src="${imgurl}"></a>
                                </div>
                                <div class="s-info">
                                    <div class="s-name">
                                        ${item.title}
                                    </div>
                                    <div class="s-unit">
                                        ￥${item.price}/${item.unit}
                                    </div>
                                    <div class="s-che">
                                        
                                    </div>
                                </div>
                            </li>
                        `
                    
                }).join('');
                goods2.appendChild(ul);
            }
        });

        var goods3 = document.querySelector('.g3');
        $.ajax({
            url:'http:./api/index.php',
            data:{category:"'shengxian'"},
            success:function(data){
                data = JSON.parse(data);
                var ul = document.createElement('ul');
                ul.className = "clearfix";
                ul.innerHTML = data.map(function(item){
                    var imgurl = item.imgurl.split(',')[0];
                        return `
                            <li class="pro_list" guid="${item.id}">
                                <div class="s-img">
                                    <a><img src="${imgurl}"></a>
                                </div>
                                <div class="s-info">
                                    <div class="s-name">
                                        ${item.title}
                                    </div>
                                    <div class="s-unit">
                                        ￥${item.price}/${item.unit}
                                    </div>
                                    <div class="s-che">
                                        
                                    </div>
                                </div>
                            </li>
                        `
                    
                }).join('');
                goods3.appendChild(ul);
            }
        });
    })
})