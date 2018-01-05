//首页
require(['config'],function(){
    require(['jquery','carousel','ajax'],function($){
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
        ajax({
            type:'get',
            url:'http:./api/goodslist.json',
            success:function(res){      console.log(type(res));
                var ul = document.createElement('ul');
                ul.className = "clearfix";
                ul.innerHTML = res.map(function(item){
                    if(item['id'] == "g01"){
                        return `
                            <li class="pro_list">
                                <div class="s-img">
                                    <a><img src="${item.imgurl}"></a>
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
                    }
                }).join('');
                goods.appendChild(ul);
            }
        });

        var goods1 = document.querySelector('.g1');
        ajax({
            type:'get',
            url:'http:./api/goodslist.json',
            success:function(res){
                var ul = document.createElement('ul');
                ul.className = "clearfix";
                ul.innerHTML = res.map(function(item){
                    if(item['id'] == "g02"){
                        return `
                            <li class="pro_list">
                                <div class="s-img">
                                    <a><img src="${item.imgurl}"></a>
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
                    }
                }).join('');
                goods1.appendChild(ul);
            }
        });

        var goods2 = document.querySelector('.g2');
        ajax({
            type:'get',
            url:'http:./api/goodslist.json',
            success:function(res){
                var ul = document.createElement('ul');
                ul.className = "clearfix";
                ul.innerHTML = res.map(function(item){
                    if(item['id'] == "g03"){
                        return `
                            <li class="pro_list">
                                <div class="s-img">
                                    <a><img src="${item.imgurl}"></a>
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
                    }
                }).join('');
                goods2.appendChild(ul);
            }
        });

        var goods3 = document.querySelector('.g3');
        ajax({
            type:'get',
            url:'http:./api/goodslist.json',
            success:function(res){
                var ul = document.createElement('ul');
                ul.className = "clearfix";
                ul.innerHTML = res.map(function(item){
                    if(item['id'] == "g04"){
                        return `
                            <li class="pro_list">
                                <div class="s-img">
                                    <a><img src="${item.imgurl}"></a>
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
                    }
                }).join('');
                goods3.appendChild(ul);
            }
        });
    })
})