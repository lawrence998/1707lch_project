require(['config'],function(){
    require(['jquery','common','zoom'],function($){
        jQuery(function($){
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
            $('#search-keyword').on('focus',function(){console.log(44)
                $('.subsearch').removeClass('hide');
            }).on('blur',function(){
                $('.subsearch').addClass('hide');
            })

            var cookies = document.cookie;
            var id;
            
            var cook = cookies.split('; ');
            cook.forEach(function(item){
                var arr = item.split('=');
                if(arr[0] === 'id'){
                    id = Number(JSON.parse(arr[1])); //console.log(type(id),id);
                    // var now = new Date();
                    // now.setDate(now.getDate()-10);
                    // document.cookie = 'id=' + id + ';expires=' + now.toUTCString();
                }
            })
            

            id = id;
            var ul1 = document.querySelector('#MyFocus .dianul');
            var ul2 = document.querySelector('#MyFocus .tuul');
            $.ajax({
                url:'../api/details.php',
                data:{
                    id:id
                },
                success:function(data){console.log(data)
                    data = JSON.parse(data)[0];
                    console.log(data);
                    var imgurl = data.imgurl.split(',');
                    for(var i=1;i<imgurl.length;i++){
                        if(i<=3){
                            ul1.innerHTML += `
                                        <li>
                                            <img src="${imgurl[i]}">
                                            <span><img src="../img/panel.png"></span>
                                        </li>
                                    `
                        }else{
                            ul2.innerHTML += `
                                        <li>
                                            <img src="${imgurl[i]}" data-big="${imgurl[i]}">
                                        </li>
                                    `
                        }
                    }
                    $('.huise').text(data.name);
                    $('.country .name h3').text(data.name);
                    $('.country .name .title_describeapp').text(data.title);
                    $('.price01 .box .price-sp').text('￥' + data.price);
                    $('.guige .zhuang span').text(data.unit);

                    var $ul_1 = $('#MyFocus .dianul')
                    var $ul_2 = $('#MyFocus .tuul');
                    var $li_2 = $ul_2.children();
                    $ul_1.on('mouseenter','li',function(){
                        $ul_1.children().removeClass('cur');
                        $(this).addClass('cur');
                        var idx = $(this).index();

                        $li_2.slice(1).hide();

                        $li_2.eq(idx).show(1000).siblings().hide(600);
                    })

                    // $li_2.first().lchZoom();
                    var $addcar = $('.price-info .buy .fr-add');
                    var $buy = $('.price-info .buy .fr-buy');
                    var $car = $('.navbar-right #miniCart');
                    var $carcont = $('.navbar-right .cartcont');
                    var $totalqty = $('.navbar-right .cartcont .mcart-pay').children().first();
                    var $totalprice = $totalqty.next();
                    var carcont = document.querySelector('.navbar-right .cartcont');
                    var carlist = carcont.querySelector('ul');
                    var cul = carcont.querySelector('.mcart-pay');
                    var pd;
                    //点击购物车图标显示
                    $car.on('click',function(){
                        if(pd){
                           $carcont.css({
                                    display:'none'
                            });
                            $car.children().first().css({
                                    color:'#64a131'
                            })
                            pd = false; 
                        }else{
                            $carcont.css({
                                    display:'block'
                            });
                            $car.children().first().css({
                                    color:'#fc0'
                            })
                            pd = true;
                        }

                    })

                    //点击加入购物车
                    $addcar.on('click',function(){
                        var $cartnum1 = $car.children('.cartnum').text();
                        
                        $car.children('.cartnum').text(data.qty);
                        var $img1 = $('#MyFocus .dianul').children().first().children('img');
                        var $copyimg = $('<img/>');
                        $copyimg.attr('src',imgurl[1]).css({
                            position:'absolute',
                            left:$img1.offset().left,
                            top:$img1.offset().top,
                            width:$img1.width(),
                            height:$img1.height()
                        }).appendTo('body').animate({
                            left:$car.offset().left,
                            top:$car.offset().top,
                            width:50
                        },function(){
                            $copyimg.remove();
                        })
                        if()
                        carlist.innerHTML = `
                            <li id="${data.id}">
                                <a href="#">
                                    <img src="${imgurl[1]}" class="pull-left">
                                    <div class="p-minicart-info">
                                        <h5>${data.name}</h5>
                                        <h5>${data.price}/${data.unit}</h5>
                                    </div>
                                </a>
                                <div class="p-mincart-modify">
                                    <span class="p-mincart-act btn-rel">-</span>
                                    <input class="set-num-in" value="${data.qty}">
                                    <span class="p-mincart-act btn-add">+</span>
                                </div>
                                <span class="p-mincart-delete">删除</span>
                            </li>
                        `

                        $car.children('.cartnum').text(carlist.children.length);

                        cul.children[0].children[0].innerText = data.qty;
                        cul.children[1].children[0].innerText = (data.price*data.qty).toFixed(2);

                        data.qty++;
                    })
                    
                    //购物车的数量增减
                    $carcont.on('click','.btn-add',function(){
                        var $current = $(this).prev().attr('value')*1;
                        $current++;
                        $(this).prev().attr('value',$current);
                        $totalqty.children().first().text($current);
                        $totalprice.children().first().text(($current*data.price).toFixed(2));
                    })
                    $carcont.on('click','.btn-rel',function(){
                        var $current = $(this).next().attr('value')*1;
                        $current--;
                        $(this).next().attr('value',$current);
                        $totalqty.children().first().text($current);
                        $totalprice.children().first().text(($current*data.price).toFixed(2));
                        if($current === 0){
                            $(this).parent().parent().remove();
                        }
                    })

                    //购物车的删除按钮
                    $carcont.on('click','.p-mincart-delete',function(){
                        $(this).parent().remove();
                        $car.children('.cartnum').text(carlist.children.length);
                        if(carlist.children.length == 0){
                            $totalqty.children().first().text(0);
                            $totalprice.children().first().text('0.00');
                            $car.children('.cartnum').text(0);
                        }
                        
                        
                    })

                    //点击立即购买按钮
                    $buy.on('click',function(){
                        //var $current = $car.
                    })

                }
            })

            
        })
    })
})