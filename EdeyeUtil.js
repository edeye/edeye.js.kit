(function(window) {

	var _version = '18.06.11';

	var _Edeye = {
		version: _version,
		printDemo: function() {
			console.log(` {
				var func = {};

				func.test = function() {
					console.log('ok');
				}

				_Edeye.load('demo', func);
			}`);
		},
		load: function(name, des, param) {
			param['des'] = function() {
				console.log(des);
			}
			this[name] = param;
		}
	};
	
	{
		var funcName = 'demo';
		var funcDes = 'this is a demo';
		var func = {};
		

		_Edeye.load(funcName, funcDes, func);
	}

	{
		var funcName = 'checkKit';
		var funcDes = 'this is a check kit';
		var func = {};
		
		// 综合验证
		func.finalCheck = function(obj,allCheckRetFlag,condition){
			
			var demo = `
				var ret = Edeye.checkKit.finalCheck(objParam,true,{
					'name': {
						method:'strRange',
						methodParam:['&&', [ '>=', 2 ], [ '<=', 16 ]],
						msg:'名称在2~16个字之间'
					},
					'gender': {
						method:'strRange',
						methodParam:['&&', [ '>=', 1 ], [ '<=', 1 ]],
						msg:'请选择性别'
					},
					'age': {
						method:'integerRange',
						methodParam:['&&', [ '>=', 18 ], [ '<=', 75 ]],
						msg:'年龄必须在18~75之间'
					}
				});
			`
			var ret = {
				flag : true,
				msg : []
			}
			
			for(var tmpKey in condition){
				condition[tmpKey].methodParam.unshift(obj[tmpKey]);
				var applyRet = this[condition[tmpKey].method].apply(this,condition[tmpKey].methodParam);
				if(!applyRet){
					if(!allCheckRetFlag){
						ret.flag = false;
						ret.msg = [condition[tmpKey].msg]
						break;
					}else{
						ret.flag = false;
						ret.msg.push(condition[tmpKey].msg);
					}
				}
			}
			
			return ret;
		}
		
		//字符范围
		func.strRange = function(str,type,condition1,condition2){
			if(this.isNullOrUndefinedOrNaNOrInfinity(str)){
				return false;
			}
			var str = String(str);
			if('&&' !== type && '||' != type || !(condition1 instanceof Array) || !(condition2 instanceof Array) || condition1.length !== 2 || condition2.length !== 2){
				return false;
			}
			if(condition1[0] !== '<=' && condition1[0] !== '>=' && condition1[0] !== '>' && condition1[0] !== '<' && condition2[0] !== '<=' && condition2[0] !== '>=' && condition2[0] !== '>' && condition2[0] !== '<'){
				return false;
			}
			if(!this.isNumber(condition1[1]) || !this.isNumber(condition2[1])){
				return false;
			}
			var condition1Flag = eval("str.length " + condition1[0] + " condition1[1]");
			var condition2Flag = eval("str.length " + condition2[0] + " condition2[1]");
			return eval("condition1Flag " + type + " condition2Flag");
		}

		// 整数范围
		// integerRange(123, '&&', [ '>', 122.99 ], [ '<=',123.01 ]);
		func.integerRange = function(number,type,condition1,condition2) {
			if(!this.isInteger(number)){
				return false;
			}
			if('&&' !== type && '||' != type || !(condition1 instanceof Array) || !(condition2 instanceof Array) || condition1.length !== 2 || condition2.length !== 2){
				return false;
			}
			if(condition1[0] !== '<=' && condition1[0] !== '>=' && condition1[0] !== '>' && condition1[0] !== '<' && condition2[0] !== '<=' && condition2[0] !== '>=' && condition2[0] !== '>' && condition2[0] !== '<'){
				return false;
			}
			if(!this.isNumber(condition1[1]) || !this.isNumber(condition2[1])){
				return false;
			}
			var condition1Flag = eval("number " + condition1[0] + " condition1[1]");
			var condition2Flag = eval("number " + condition2[0] + " condition2[1]");
			return eval("condition1Flag " + type + " condition2Flag");
		}

		// 小数范围
		// decimalRange(123, '&&', [ '>', 122.99 ], [ '<=',123.01 ]);
		func.decimalRange = function(number,type,condition1,condition2) {
			if(!this.isDecimal(number)){
				return false;
			}
			if('&&' !== type && '||' != type || !(condition1 instanceof Array) || !(condition2 instanceof Array) || condition1.length !== 2 || condition2.length !== 2){
				return false;
			}
			if(condition1[0] !== '<=' && condition1[0] !== '>=' && condition1[0] !== '>' && condition1[0] !== '<' && condition2[0] !== '<=' && condition2[0] !== '>=' && condition2[0] !== '>' && condition2[0] !== '<'){
				return false;
			}
			if(!this.isNumber(condition1[1]) || !this.isNumber(condition2[1])){
				return false;
			}
			var condition1Flag = eval("number " + condition1[0] + " condition1[1]");
			var condition2Flag = eval("number " + condition2[0] + " condition2[1]");
			return eval("condition1Flag " + type + " condition2Flag");
		}

		// 数字范围
		// numberRange(123, '&&', [ '>', 122.99 ], [ '<=',123.01 ]);
		func.numberRange = function(number,type,condition1,condition2) {
			if(this.isNullOrUndefinedOrNaNOrInfinity(number)){
				return false;
			}
			if('&&' !== type && '||' != type || !(condition1 instanceof Array) || !(condition2 instanceof Array) || condition1.length !== 2 || condition2.length !== 2){
				return false;
			}
			if(condition1[0] !== '<=' && condition1[0] !== '>=' && condition1[0] !== '>' && condition1[0] !== '<' && condition2[0] !== '<=' && condition2[0] !== '>=' && condition2[0] !== '>' && condition2[0] !== '<'){
				return false;
			}
			if(!this.isNumber(condition1[1]) || !this.isNumber(condition2[1])){
				return false;
			}
			var condition1Flag = eval("number " + condition1[0] + " condition1[1]");
			var condition2Flag = eval("number " + condition2[0] + " condition2[1]");
			return eval("condition1Flag " + type + " condition2Flag");
		}

		// 判断是否为整数
		func.isInteger = function(number) {
			if(!this.isNumber(number)){
				return false;
			}
			return String(number).indexOf(".") === -1;
		}
		
		// 判断是否为字符小数
		func.isStringDecimal = function(number) {
			if(!this.isStringNumber(number)){
				return false;
			}
			var stringVal = String(number).split('.');
			if(parseInt(stringVal[stringVal.length - 1], 10) === 0){
				return false;
			}
			return String(number).indexOf(".") > -1;
		}
		
		// 判断是否为小数
		func.isDecimal = function(number) {
			if(!this.isNumber(number)){
				return false;
			}
			return String(number).indexOf(".") > -1;
		}
		
		// 判断是否为字符数字
		func.isStringNumber = function(number) {
			if(this.isNullOrUndefinedOrNaNOrInfinity(number)){
				return false;
			}
			var typeofValue = typeof(number)
			if('string' === typeofValue){
				return /^[0-9]+.?[0-9]*$/.test(number);
			}
			return 'number' === typeofValue;
		}
		
		// 判断是否为数字
		func.isNumber = function(number) {
			if(this.isNullOrUndefinedOrNaNOrInfinity(number)){
				return false;
			}
			return 'number' === typeof(number);
		}
		
		// 判断参数是否为Null,Undefined,NaN,Infinity
		func.isNullOrUndefinedOrNaNOrInfinity = function(param){
			if (!param) {
				if (param !== '' && param !== '0' && param !== 0) {
					return true;
				}
			} else if (param === Infinity) {
				return true;
			}
			return false;
		}
		

		_Edeye.load(funcName, funcDes, func);
	}

	window.Edeye = _Edeye;
})(window);
