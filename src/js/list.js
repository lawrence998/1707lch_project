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


            var goods = document.querySelector('.f-list .leftpart');
            console.log(goods);
            $.ajax({
                // type:'POST',
                url:'http:../api/list.php',
                data:{
                    // category:"'xianguo'",
                    pageNo:1,
                    qty:10
                },
                success:function(data){
                    data1 = JSON.parse(data);
                    data = data1.data;
                    var ul = document.createElement('ul');
                    ul.className = "clearfix";
                    ul.innerHTML = data.map(function(item){
                        var imgurl = item.imgurl.split(',')[1];
                            return `
                                <li guid="${item.id}">
                                    <div class="wrap">
                                        <div class="s-img">
                                            <a href="../html/details.html"><img class="lazy" src="${imgurl}"></a>
                                        </div>
                                        <div class="s-info clearfix">
                                            <span class="s-unit pull-right font-color">
                                                ￥${item.price}
                                            </span>
                                            ${item.name}
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
                        
                    }).join('');
                    goods.appendChild(ul);

                    // 处理分页
                    var page = document.querySelector('.page');
                    page.innerText = '';
                    var pageNo = data1.pageNo;
                    var pageQty = Math.ceil(data1.total/data1.qty);
                    for(var i=1;i<=pageQty;i++){
                        var span = document.createElement('span');
                        span.innerHTML = i;

                        if(i == pageNo){
                            span.className = 'active';
                        }
                        page.appendChild(span);
                    }


                }
            });

            // 点击分页切换
            var page = document.querySelector('.page');
            var spans = page.children;

            page.onclick = function(e){
                if(e.target.tagName.toLowerCase() === 'span'){
                    var pageNo1 = e.target.innerText*1;
                    for(var i=0;i<spans.length;i++){
                        spans[i].className = ''; 
                    }
                    e.target.className = 'active';
                    var ul = document.querySelector('.f-list .leftpart ul');
                    ul.parentNode.removeChild(ul);
                    $.ajax({
                        url:'http:../api/list.php',
                        data:{
                            // category:"'xianguo'",
                            pageNo:pageNo1,
                            qty:10
                        },
                        success:function(data){
                            data1 = JSON.parse(data);
                            
                            data = data1.data;
                            var ul = document.createElement('ul');
                            ul.className = "clearfix";
                            ul.innerHTML = data.map(function(item){
                                var imgurl = item.imgurl.split(',')[1];
                                    return `
                                        <li guid="${item.id}">
                                            <div class="wrap">
                                                <div class="s-img">
                                                    <a href="../html/details.html"><img class="lazy" src="${imgurl}"></a>
                                                </div>
                                                <div class="s-info clearfix">
                                                    <span class="s-unit pull-right font-color">
                                                        ￥${item.price}
                                                    </span>
                                                    ${item.name}
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
                                
                            }).join('');
                            goods.appendChild(ul);


                        }
                    })
                }
            }

            // $('.f-list .leftpart').on('click','.s-img a .lazy',function(){

            // })
            
            goods.onclick = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;

                if(target.className === 'lazy'){
                    var guid = target.parentNode.parentNode.parentNode.parentNode.getAttribute('guid');
                    console.log(type(guid));
                    var date = new Date();
                    date.setDate(date.getDate()+7);
                    document.cookie = 'id=' + JSON.stringify(guid) + ';expires=' + date.toUTCString();
                }
            }
        });

        
    })
})