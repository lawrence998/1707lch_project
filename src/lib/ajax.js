/**
 *  
 * @param  {Object} options [请求的参数]
 */
function ajax(options){
    // 默认值
    var defaults = {
        type:'get',//get,post,jsonp
        jsonpCallbackName:'callback'
        // data:{}
    }

    // var opt = Object.assign({},defaults,options);
    var opt = Object.assign({},defaults,options);
    // for(var attr in options){
    //  defaults[attr] = options[attr];
    // }
    // var opt = defaults;

    // 重置大小写
    opt.type = opt.type.toLowerCase();

    // opt.data:{pageNo:1,qyt:10} => pageNo=1&qty=10
    if(opt.data){
        var params = '';
        for(var attr in opt.data){
            params += attr + "=" + opt.data[attr] + "&";
        }

        // 删除多余的&
        params = params.slice(0,-1)
        
    }

    if(opt.type === 'jsonp'){
        // 预设全局函数
        var fnName = 'getData' + Date.now();
        window[fnName] = function(data){
                typeof opt.success === 'function' && opt.success(data);

                // 移除script标签
                document.body.removeChild(script);
        }

        // 创建script标签
        var script = document.createElement('script');

        // 判断opt.url中是否存在?
        opt.url += opt.url.indexOf('?')>=0 ? params : '?'+params;

        script.src = opt.url + '&'+opt.jsonpCallbackName+'='+fnName;

        // 把script标签写入页面
        document.body.appendChild(script);
        return;
    }


    var xhr = null;
    try{
        xhr = new XMLHttpRequest();
    }catch(error){
        try{
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        }catch(err){
            try{
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }catch(e){
                 alert('你的浏览器太low了，这个世界不适合你');
            }
        }
    }

    // 返回数据
    var status = [200,304];
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && status.indexOf(xhr.status)>=0){
            var res = xhr.responseText;
            try{
                res = JSON.parse(res);
            }catch(err){
                res = res;
            }

            // if(typeof opt.success === 'function'){
            //  opt.success(res);
            // }

            typeof opt.success === 'function' && opt.success(res);
        }
    }

    

    if(opt.type === 'get'){
        opt.url += opt.url.indexOf('?')>=0 ? params : '?'+params;
        params = null;
    }else if(opt.type === 'post'){
        // 添加请求头
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    }

    xhr.open(opt.type,opt.url);
    xhr.send(params);
}

ajax.get = function(options){
    options.type = 'get';
    this(options);
}

ajax.post = function(options){
    options.type = 'post';
    this(options);
}

ajax.jsonp = function(options){
    options.type = 'jsonp';
    this(options);
}

// ajax({
//  type:'get'
//  url:'http://localhost/api/football.php?pageNo=1',
//  data:{qyt:10},
//  jsonpCallbackName:'cb'
//  success:250
// })
// ajax.get()