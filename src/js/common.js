/**
 * [得到某个范围内的随机数]
 * @param  {Number} min [最小值]
 * @param  {Number} max [最大值]
 * @return {Number}     [返回值]
 */
function randomNumber(min,max){
	return parseInt(Math.random()*(max-min+1)) + min;//0:得到一个最小数min,1:得到一个最大值max
}

// 如果封装没有思路，先使用
// randomNumber(10,20);//得到一个随机整数
// randomNumber('abc',20);//得到一个随机整数


// createTable(10,6);//得到一个10行6列的表格

/**
 * [得到一个随机颜色]
 * @return {String} [返回rgb格式颜色]
 */
function randomColor(){
	// 生成rgb颜色
	// var r = parseInt(Math.random()*256);
	var r = randomNumber(0,255);
	var g = randomNumber(0,255);
	var b = randomNumber(0,255);

	return 'rgb('+ r +','+ g +','+ b +')';
}
// randomColor();//得到一个随机颜色'rgb(255,0,0)'

/**
 * [得到一个16进制的随机颜色]
 * #cccccc;#58bc58
 * @return {String} [返回16进制的随机颜色]
 */
function getColor(){
	// 写出所有颜色可能的字符
	var str = '0123456789abcdef';

	// 创建一个变量，用于保存随机生成的颜色
	var res = '#';

	// 循环6次，每次随机获取一个字符
	for(var i=0;i<6;i++){
		// 生成随机索引值
		// var idx = Math.random()*str.length;
		var idx = randomNumber(0,str.length-1);

		res += str.charAt(idx);
	}

	// 返回随机颜色
	return res;
}

// getColor();//#58bc58


// 	封装一个删除非元素节点的函数
// 	兼容版本浏览（IE8-）
var element = {
	/**
	 * [获取元素节点]
	 * @param  {Nodes} nodes [节点]
	 * @return {Array}       [返回所有元素节点]
	 */
	get:function(nodes){
		// 创建空数组，用于存放结果
		var res = [];
		for(var i=0;i<nodes.length;i++){
			if(nodes[i].nodeType === 1){
				res.push(nodes[i]);
			}
		}

		// 返回结果
		return res;
	},
	// 获取所有子元素
	children:function(node){

	},
	// 下一个兄弟元素
	next:function(node){

	},
	// 上一个兄弟元素
	prev:function(node){

	},
	// 父元素
	parent:function(node){

	},
	// 兼容ie8-
	getByClassName:function(className){
		// return documebnt.getElementsByClassName(className)
	}
}

// element.get(nodes);//[element,element]
// element.children(document.body);
// element.next(baidu);//
// element.getByClassName()

/**
 * [获取css样式,兼容ie8-]
 * @param  {Element} ele [要获取样式的元素]
 * @param  {String} key [css属性]
 * @return {String}     [css属性值]
 */
function getCss(ele,key){
	//判断思路：判断用户使用的浏览器是否支持getComputedStyle
	if(window.getComputedStyle){
		return getComputedStyle(ele)[key]
	}else if(ele.currentStyle){
		return ele.currentStyle[key]
	}else{
		// 如果以上都不支持，直接返回内联样式
		return ele.style[key];
	}
}
// getCss(box,'font-size');//16px

/**
 * [事件绑定函数，支持冒泡/捕获]
 * @param  {Node} ele     [需绑定事件的节点]
 * @param  {String} type    [事件类型]
 * @param  {Function} handler [事件处理函数]
 * @param  {Boolean} capture [是否捕获]
 */
function bind(ele,type,handler,capture){
	// 判断是否支持addEventListener
	if(ele.addEventListener){
		ele.addEventListener(type,handler,capture);
	}else if(ele.attachEvent){
		ele.attachEvent('on'+type,handler);
	}else{
		ele['on'+type] = handler
	}
}

// bind(box,'click',function(){},true)

/*
	cookie操作
		* 增
		* 删
		* 查
		* 改
 */
var cookie = {
	/**
	 * [读取cookie]
	 * @param  {String} name [cookie名]
	 * @return {String}      [返回name对应的cookie值]
	 */
	get:function(name){
		var cookies = document.cookie;
		var res = '';
		if(cookies.length){
			cookies = cookies.split('; ');//[]

			// 循环优化方式
			for(var i=0,len=cookies.length;i<len;i++){
				// 拆分cookie名、cookie值
				var arr = cookies[i].split('=');
				if(arr[0] === name){
					res = arr[1];
				}
			}
		}

		return res;
	},
	/**
	 * [添加cookie]
	 * @param {String} name    [cookie名]
	 * @param {String} val     [cookie值]
	 * @param {[Date]} expires [有效期]
	 * @param {[String]} path    [路径]
	 */
	set:function(name,val,expires,path){
		var str = name+'='+value;

		// 传入有效期时
		if(expire){
			str += ';expires=' + expires.toUTCString();
		}

		if(path){
			str += ';path=' + path;
		}

		document.cookie = str;
	},
	/**
	 * [删除cookie]
	 * @param  {String} name [cookie名]
	 */
	remove:function(name){
		var now = new Date();
		now.setDate(now.getDate()-10);
		// document.cookie = name + '=null;expires=' + now.toUTCString();
		this.set(name,'null',now);
	}
}

// cookie.get('carlistabcdefg');//[{}]
// cookie.set('carlist',JSON.stingify(carlist),now);//[{}]
// cookie.remove('carlist');

/**
 * [动画函数]
 * @param  {Element} ele    [动画元素]
 * @param  {Object} opt   [动画属性集合]
 * @param  {Function} callback   [回调函数]
*/
function animate(ele,opt,callback){
    //动画数量
    var timerQty = 0;

    //遍历属性
    for(var attr in opt){
        createTimer(attr);
        timerQty++;
    }

    function createTimer(attr){
        //根据属性定义定时器的名字
        var timerName = attr + 'timer';

        // 获取目标值
        var target = opt[attr];

        clearInterval(ele[timerName]);
        ele[timerName] = setInterval(function(){
            //获取当前值
            var current = getCss(ele,attr);

            //提取单位
            var unit = current.match(/[a-z]+$/);
            unit = unit ? unit[0] : '';

            //提取值
            current = parseFloat(current);

            // 计算速度（最小变化值：1/-1）
            // 避免速度变成0
            var speed = (target-current)/10;
            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

            //针对opacity属性计算速度
            if(attr === 'opacity'){
                speed = speed>0 ? 0.01 : -0.01;
            }

            // 到达目标值后清除动画定时器
            if(current === target || speed === 0){
                clearInterval(ele[timerName]);

                //重置目标值
                current = target - speed;

                // 动画完成数量减一
                timerQty--;

                //执行回调函数
                if(timerQty === 0 && typeof callback === 'function'){
                    callback();
                }
            }

            ele.style[attr] = current + speed + unit;
        },30)
    }
}

/**
 * [判断数据类型函数]
 * @param  {All} data  [数据]
*/
function type(data){
    //data.toString()
    //"[Object Array]"
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}
// type(11)
// "number"
// type('sss')
// "string"


/**
 *  
 * @param  {Object} options [请求的参数]
 */
function ajax(options){
    //默认值
    var defaults = {
        type:'get',//get,post,jsonp
        jsonpCallbackName:'callback'
    }

    //var opt = Object.assign({},defaults,options);
    for(var attr in defaults){
        defaults[attr] = options[attr];
    }
    var opt = defaults;

    //重置大小写
    opt.type = opt.type.toLowerCase();

    // opt.data:{pageNo:1,qyt:10} => pageNo=1&qty=10
    if(opt.data){
        var params = '';
        for(var attr in opt.data){
            params += attr + '=' + opt.data[attr] + '&';
        }

        //删除多余的&
        params = params.slice(0,-1);
    }

    if(opt.type === 'jsonp'){
        // 预设全局函数
        var fnName = 'getData' + Date.now();
        window[fnName] = function(data){
            typeof opt.success === 'function' && opt.success(data);

            //移除script标签
            document.body.removeChild(script);
        }

        //创建script标签
        var script = document.createElement('script');

        //判断opt.url是否存在?号
        opt.url += opt.url.indexOf('?')>=0 ? params : '?' + params;

        script.src = opt.url + '&' + opt.jsonpCallbackName + '=' + fnName;

        //把script标签写入页面
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
                res = JSON.parese(res);
            }catch(err){
                res = res;
            }

            // if(typeof opt.success === 'function'){
            //  opt.success(res);
            // }

            typeof opt.success === 'function' && opt.success(res);
        }
    }

    if(opt.type === 'get'){   console.log(opt.url);
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