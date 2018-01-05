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
            });

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
            });

            //注册按钮
            var $btn = $('.fr-regist .btn');
            $btn.click(function(){
                $_user = $user.val();
                $_pw = $pd.val();
                $checkbox = $('#blankCheckbox');
                if($show1.hasClass('iconError') || $_user === ''){
                    alert('请输入正确手机号码');
                    return false;
                }else if($show2.hasClass('iconError') || $_pw === ''){
                    alert('请输入正确密码格式');
                    return false;
                }else{
                    alert('恭喜您，登录成功');

                    //记住密码
                    if($checkbox.prop('checked')){
                        var now = new Date();
                        now.setDate(now.getDate()+7);
                        document.cookie = 'username=' + $_user + ';expires=' + now.toUTCString();
                        document.cookie = 'password=' + $_pw + ';expires=' + now.toUTCString();

                        
                    }
                }
            })

            // 获取cookie
            var cookies = document.cookie.split('; ');

            // 遍历数组
            cookies.forEach(function(item){

                var arr = item.split('=');
                if(arr[0] === 'username'){
                    $user.val(arr[1]);
                    $user.css({
                        background:'#FFFF6F'
                    })
                    $('#blankCheckbox').prop('checked',true);
                }else if(arr[0] === 'password'){
                    $pd.val(arr[1]);
                    $pd.css({
                        background:'#FFFF6F'
                    })
                }
            })
            
            
        })
    })
})