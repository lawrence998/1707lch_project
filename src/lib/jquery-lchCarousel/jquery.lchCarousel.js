;(function($){
    // $.prototype.lchCarousel = function(){}
    $.fn.lchCarousel = function(options){
        var defaults = {
            //宽高
            width:1424,
            height:400,

            // 默认索引值
            index:0,

            autoPlay:true,
            
            // 页码与左右按钮
            page:true,
            buttons:false,
            seamless:false,


            // 轮播类型
            type:'horizontal',//horizontal,seamless,fade,

            duration:3000
        };

        //这里的this:实例$('#box')
        this.each(function(idx,ele){
            var $self = $(ele);
            var $page;
            var opt = $.extend({},defaults,options);

            //添加特定类
            $self.addClass('lch-carousel');

            //设置基础样式
            $self.css({
                width:opt.width,
                height:opt.height
            });


            var lch = {
                init:function(){

                    opt.len = opt.imgs.length;

                    var $ul = $('<ul/>');

                    $ul.html(opt.imgs.map(function(url){
                        return '<li><a href="#"><img src="' + url + '"/></a></li>'
                    }).join(''));

                    //把ul写入页面
                    $self.append($ul);

                    if(opt.buttons){
                        $('<span/>').addClass('btn-prev').html('&lt;').appendTo($self);
                        $('<span/>').addClass('btn-next').html('&gt;').appendTo($self);
                    }

                    //生成页码
                    if(opt.page){
                        $page = $('<div/>');
                        $page.addClass('page');

                        for(var $i=0;$i<opt.len;$i++){
                            var $span = $('<span/>');
                            $span.text($i + 1);

                            //高亮
                            if($i === opt.index){
                                $span.addClass('active');
                            }

                            $page.append($span);
                        }

                        $self.append($page);
                    }

                    //无缝滚动
                    if(opt.seamless){
                        $ul.append($ul.children().first().clone());
                        opt.len++;
                    }

                    opt.len = $self.find('ul').children().length;


                    //移入移出 hover([over,]out)
                    $self.hover(function(){
                        clearInterval($self.timer);
                    },function(){
                        lch.move();
                    }).on('click','.btn-prev',function(){
                        opt.index--;
                        lch.show();
                    }).on('click','.btn-next',function(){
                        opt.index++;
                        lch.show();
                    }).on('click','.page span',function(){
                        opt.index = this.innerText -1;
                        lch.show();
                    })

                    

                    this.show();
                    this.move();


                    return this;
                },
                move:function(){
                    if(opt.autoPlay){
                        clearInterval($self.timer);
                        $self.timer = setInterval(function(){
                            opt.index++;
                            lch.show();
                        },opt.duration);
                    }
                    

                    return this;
                },
                show:function(){
                    // 处理index
                    var $ul = $self.find('ul');
                    if(opt.index >= opt.len){
                        if(opt.seamless){
                            //一瞬间移动到初始位置
                            if(opt.type == 'horizontal'){
                                $ul.css({left:0});
                                opt.index = 1;
                            }else if(opt.type == 'vertical'){
                                $ul.css({top:0});
                                opt.index = 1;
                            }else if(opt.type == 'show'){
                                $ul.css({left:0,top:0,opactity:0});
                                opt.index = 0;
                            }
                            opt.index = 1;
                        }else{
                            opt.index = 0;
                        }
                        
                    }else if(opt.index<0){
                        opt.index = opt.len-1;
                    }

                    //动画
                    if(opt.type == 'vertical'){
                        $ul.animate({
                            top:-opt.index*opt.height
                        });
                    }else if(opt.type == 'horizontal'){
                        $ul.width(opt.width*opt.len);
                        $ul.animate({
                            left:-opt.index*opt.width
                        });
                    }else if(opt.type == 'fade'){
                        $ul.children().eq(opt.index).fadeIn(opt.duration).siblings().fadeOut(opt.duration);
                    }else if(opt.type == 'show'){
                        $ul.children().eq(opt.index).show(opt.duration).siblings().hide(opt.duration);
                    }

                    //分页高亮
                    
                    for(var i=0,len=opt.seamless?opt.len-1:opt.len;i<len;i++){
                        $page.children().eq(i).removeClass('active');
                    }

                    //当图片滚动到复制图片时,显示第一分页高亮
                    if(opt.seamless){
                        if(opt.index==opt.len-1){
                            $page.children().first().addClass('active');
                        }else{
                            $page.children().eq(opt.index).addClass('active');
                        }
                    }else{
                        $page.children().eq(opt.index).addClass('active');
                    }
                    

                    return this;
                }
            }
            
            lch.init();
        })

        return this;
    }

    
})(jQuery);
