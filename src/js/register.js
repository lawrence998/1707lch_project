require(['config'],function(){
    require(['jquery','ajax','common'],function($){
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

            
            //表单验证
            //手机验证
            var $user = $('#user');
            var $show1 = $user.next();
            $user.on('blur',function(){
                var $_user = $user.val();
                if(/^1[34578]\d{9}$/.test($_user)){
                    $show1.css({
                        display:'block'
                    });
                }else{
                    $show1.addClass('iconError');
                    $user.addClass('hasError');
                    $show1.css({
                        display:'block'
                    })
                }
            }).on('focus',function(){
                $show1.css({
                    display:'none'
                });
                $show1.removeClass('iconError');
                $user.removeClass('hasError');
            })

            //密码验证
            var $pd = $('#passwd')
            var $show2 = $pd.next();
            $pd.on('focus',function(){
                    $show2.css({
                        display:'none'
                    });
                    $show2.removeClass('iconError');
                    $pd.removeClass('hasError');
                
            }).on('blur',function(){
                var $_pw = $pd.val();
                if(/^[\w\-]{6,20}$/.test($_pw)){
                    $show2.css({
                        display:'block'
                    });
                }else{
                    $show2.addClass('iconError');
                    $pd.addClass('hasError');
                    $show2.css({
                        display:'block'
                    });
                }
            })

            //确认密码验证
            var $cpw = $('#Apasswd');
            var $show3 = $cpw.next();
            $cpw.on('blur',function(){
                var $_pw = $pd.val();
                var $_cpw = $cpw.val();
                if($_pw == $_cpw){
                    $show3.css({
                        display:'block'
                    });
                }else{
                    $show3.addClass('iconError');
                    $cpw.addClass('hasError');
                    $show3.css({
                        display:'block'
                    });
                }
            }).on('focus',function(){
                $show3.css({
                        display:'none'
                });
                $show3.removeClass('iconError');
                $cpw.removeClass('hasError');
            })

            //验证码
            var $verify = $('#verify');
            var $yanzm = $('.yanzm-num');
            var $update = $('.update');
            var $show4 = $verify.next();
            $yanzm.text(
                randomNumber(1000,9999)
                );
            $update.on('click',function(){
                $yanzm.text(
                randomNumber(1000,9999)
                );
            });

            $verify.on('blur',function(){
                var $_verify = $verify.val();
                var $_yanzm = $yanzm.text();
                if($_verify == $_yanzm){
                    $show4.css({
                        display:'block'
                    });
                }else{
                    $show4.addClass('iconError');
                    $verify.addClass('hasError');
                    $show4.css({
                        display:'block'
                    });
                }
            }).on('focus',function(){
                $show4.css({
                        display:'none'
                });
                $show4.removeClass('iconError');
                $verify.removeClass('hasError');
            })

            //发送验证码
            var $mobile = $('.send');
            var $sendnum = $('.send-num');
            var $timeout = $('#timeout');
            var $tel = $('#telverify');
            console.log($mobile.children().first(),$mobile.children(1))
            $sendnum.click(function(){
                
                $_user = $user.val();
                $_pw = $pd.val();
                $_verify = $verify.val();
                $_cpw = $cpw.val();
                if($show1.hasClass('iconError') || $_user === ''){
                    alert('请输入正确手机号码');

                }else if($show2.hasClass('iconError') || $_pw === ''){
                    alert('请输入正确密码格式');
                }else if($show3.hasClass('iconError') || $_cpw === ''){
                    alert('两次密码输入不一致');
                }else if($show4.hasClass('iconError') || $_verify === ''){
                    alert('请输入正确验证码');
                }else{
                    $mobile.children().first().css({
                        display:'none'
                    });
                    $mobile.children(1).removeClass('hide');
                    $tel.prop('disabled',false);
                    var timer = setInterval(function(){
                        
                        var time = $timeout.text();
                        time--;
                        $timeout.text(time);
                        if(time == 0){
                            clearInterval(timer);
                            $timeout.text(60);
                            $mobile.children().first().css({
                                display:'block'
                            });
                            $tel.prop('disabled',true);
                            $mobile.children().last().addClass('hide');
                        }
                    },1000)
                }
                
            })

            //注册按钮
            var $btn = $('.btn-lg1');
            $btn.click(function(){
                $_user = $user.val();
                $_pw = $pd.val();
                $_verify = $verify.val();
                $_cpw = $cpw.val();
                if($show1.hasClass('iconError') || $_user === ''){
                    alert('请输入正确手机号码');
                    return false;
                }else if($show2.hasClass('iconError') || $_pw === ''){
                    alert('请输入正确密码格式');
                    return false;
                }else if($show3.hasClass('iconError') || $_cpw === ''){
                    alert('两次密码输入不一致');
                    return false;
                }else if($show4.hasClass('iconError') || $_verify === ''){
                    alert('请输入正确验证码');
                    return false;
                }else{
                    alert('恭喜您，成功注册账号。赶紧去登录吧');
                }
            })
        })
    })
})