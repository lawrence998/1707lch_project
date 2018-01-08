require(['config'],function(){
    require(['jquery','common'],function($){
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
            var cartorder = document.querySelector('.cart .cartmain .cart-order');
            var $cartorder = $('.cart .cartmain .cart-order');console.log()
            var cartempty = cartorder.querySelector('.cart-empty');
            $.ajax({
                url:'../api/car.php',
                data:{
                    id:id
                },
                success:function(data){
                    data = JSON.parse(data)[0];console.log(data);
                    var imgurl = data.imgurl.split(',');
                    var ul = document.createElement('ul');
                    ul.className = 'list-unstyled';
                    ul.innerHTML += `
                        <li id="${data.id}">
                            <div class="cartbox clearfix">
                                <div class="cartorder-select pull-left clearfix">

                                </div>
                                <div class="cart-imgs pull-left">
                                    <a href="#">
                                        <img src="${imgurl[1]}">
                                    </a>
                                </div>
                                <div class="cart-name pull-left">
                                    <p>
                                        <a href="#">${data.name}</a>
                                    </p>
                                </div>
                                <div class="spec-num pull-left">
                                    <p>${data.unit}</p>
                                </div>
                                <div class="price-singular pull-left">
                                    <p>￥${data.price}</p>
                                </div>
                                <div class="num_sel_lage cart-goods pull-left clearfix">
                                    <span class="num pull-left btn-rel">-</span>
                                    <input class="pull-left" value="${data.qty}">
                                    <span class="num pull-left btn-add">+</span>
                                </div>
                                <div class="sum pull-left">
                                    <p>￥${data.price*data.qty}</p>
                                </div>
                                <div class="delete pull-left">
                                    <p class="m-cartlist-delete deleteCartpro">删除</p>
                                </div>
                            </div>
                        </li>
                    `
                    cartorder.appendChild(ul);

                    cartempty.style.display = 'none';

                    $cartorder.on('click','.btn-rel',function(){
                        var $current = $(this).next().attr('value')*1;
                        $current--;
                        $(this).next().attr('value',$current);
                        $('.sum p').text(($current*data.price).toFixed(2));
                        if($current === 0){
                            $(this).parent().parent().parent().remove();

                        }
                        $('.all-order').text($('.sum p').text());
                    })

                    $cartorder.on('click','.btn-add',function(){
                        var $current = $(this).prev().attr('value')*1;
                        $current++;
                        $(this).prev().attr('value',$current);
                        
                        $('.sum p').text(($current*data.price).toFixed(2))
                        $('.all-order').text($('.sum p').text());
                    })

                    $('.deleteCartpro').on('click',function(){
                        $(this).parent().parent().parent().remove();
                    })

                    $('.all-order').text($('.sum p').text());
                }
            })
        })
    })
})