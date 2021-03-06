// 使用userAgent判断页面是否在Ipad里面打开
function isIpad(){
	var ua = navigator.userAgent;
	var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
	if(ipad) return true;
	else return false;
}

//清除字符串内部的空格
function clearSpace(str){
	var result = [],
		len = str.length;
	for(var i = 0;i < len;i++){
		if(str[i] = ' ') continue;
		result.push(str[i]);
	}
	return result.join("");
}

//判断用户身份证是否正确
function isCardID(sId) {
    var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" }
    var iSum = 0;
    var info = "";
    let sBirthday = "";
    if (!/(^\d{15}$)|(^\d{17}(\d|x|X)$)/.test(sId)) return "输入的身份证长度或格式错误";
    if (sId.length == 15) {
        return true;
    }
    else {
        sId = sId.replace(/x$/i, "a");
        if (aCity[parseInt(sId.substr(0, 2))] == null) return "输入的身份证格式错误";//地区
        sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
        var d = new Date(sBirthday.replace(/-/g, "/"));
        if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) return "输入的身份证格式错误";//日期
        for (var i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
        if (iSum % 11 != 1) return "你输入的身份证号非法";
        return true;
    }
}

/***
<加密类型>|<版本号>|<密文数据>
	rsa加密，加密后检测密码是否合法
	需要引入JSEncrypt.js(https://github.com/travist/jsencrypt)
*/

export function rsaEncrypt(val,PUB_KEY){
	var encrypt = new JSEncrypt();
	encrypt.setPublicKey(PUB_KEY);
	var encrypted = encrypt.encrypt(val + '');
	if(encrypted.length!=344 || encrypted.substr(encrypted.length-2)!="==")
		rsaEncrypt(val)
	else
		return '0|1.0.0|'+ encrypted 
}




