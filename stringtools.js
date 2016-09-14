/**
 * 获取字符长度函数
 * 
 * desc: 中文字符长度为2，截取字符串
 */
function getLen(str) {
    return str.replace(/[^\x00-\xff]/g, 'aa').length;
}

/**
 * 截取字符函数
 * 
 * desc: 中文字符长度为2，截取字符串
 * @param {string} str 字符
 * @param {int} len 长度
 */
function cut(str, len) {
    var goal = len;
    var count = 0; 
    return sub(len);
    function sub(len) {
    	count++;
    	// 截得字串
        var _result = str.substr(0, len);
        //字节长度
        var _byteLen = getLen(_result);
        console.log('第'+ count + '次:', _byteLen);

        if (_byteLen <= goal) {
        	console.log('位置: ',len);
            return _result;
        } else {
        	var _newLen = parseInt((goal + 2 * _result.length - _byteLen) / 2) ;
            return sub(_newLen);
        }
    }
}
