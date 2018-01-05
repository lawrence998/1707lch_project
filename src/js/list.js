require(['config'],function(){
    require(['jquery','ajax'],function($){
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


            var goods = document.querySelector('.f-list .leftpart');
            console.log(goods);
            ajax({
                type:'get',
                url:'http:../api/goodslist.json',
                success:function(res){
                    var ul = document.createElement('ul');
                    ul.className = "clearfix";
                    ul.innerHTML = res.map(function(item){
                        if(item['guid'] == "g05"){
                            return `
                                <li>
                                    <div class="wrap">
                                        <div class="s
                                        -img">
                                            <a href="#"><img class="lazy" src="${item.imgurl}"></a>
                                        </div>
                                        <div class="s-info clearfix">
                                            <span class="s-unit pull-right font-color">
                                                ￥${item.price}
                                            </span>
                                            ${item.title}
                                        </div>
                                        <div class="p-operate clearfix">
                                            <div class="s-kg clearfix pull-left">
                                                <span>
                                                    ${item.unit}
                                                </span>
                                            </div>
                                            <div class="s-che pull-right"></div>
                                        </div>
                                    </div>
                                </li>
                            `
                        }
                    }).join('');
                    goods.appendChild(ul);
                }
            });
        });

        
    })
})