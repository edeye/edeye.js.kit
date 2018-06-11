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
		var funcName = 'checkKit';
		var funcDes = 'this is a check kit';
		var func = {};

		// 整数范围
		// integerRange(123, '&&', [ '>', 122.99 ], [ '<=',123.01 ]);
		func.integerRange = function(number,type,condition1,condition2) {
			if(!this.isInteger(number)){
				return false;
			}
			if('&&' !== type && '||' != type){
				return false;
			}
			if(!(condition1 instanceof Array)){
				return false;
			}
			if(!(condition2 instanceof Array)){
				return false;
			}
			if(condition1.length !== 2){
				return false;
			}
			if(condition2.length !== 2){
				return false;
			}
			if(condition1[0] !== '<=' && condition1[0] !== '>=' && condition1[0] !== '>' && condition1[0] !== '>'){
				return false;
			}
			if(condition2[0] !== '<=' && condition2[0] !== '>=' && condition2[0] !== '>' && condition2[0] !== '>'){
				return false;
			}
			if(!this.isNumber(condition1[1])){
				return false;
			}
			if(!this.isNumber(condition2[1])){
				return false;
			}
			
			var condition1Flag = false;
			if(condition1[0] === '<='){
				condition1Flag = (number <= condition1[1]);
			}else if(condition1[0] === '>='){
				condition1Flag = (number >= condition1[1]);
			}else if(condition1[0] === '<'){
				condition1Flag = (number < condition1[1]);
			}else if(condition1[0] === '>'){
				condition1Flag = (number > condition1[1]);
			}

			var condition2Flag = false;
			if(condition2[0] === '<='){
				condition2Flag = (number <= condition2[1]);
			}else if(condition1[0] === '>='){
				condition2Flag = (number >= condition2[1]);
			}else if(condition1[0] === '<'){
				condition2Flag = (number < condition2[1]);
			}else if(condition1[0] === '>'){
				condition2Flag = (number > condition2[1]);
			}
			
			if('&&' === type){
				return condition1Flag && condition2Flag;
			}else if('||' === type){
				return condition1Flag || condition2Flag;
			}
			
			return false;
		}

		// 小数范围
		// decimalRange(123, '&&', [ '>', 122.99 ], [ '<=',123.01 ]);
		func.decimalRange = function(number,type,condition1,condition2) {
			if(!this.isDecimal(number)){
				return false;
			}
			if('&&' !== type && '||' != type){
				return false;
			}
			if(!(condition1 instanceof Array)){
				return false;
			}
			if(!(condition2 instanceof Array)){
				return false;
			}
			if(condition1.length !== 2){
				return false;
			}
			if(condition2.length !== 2){
				return false;
			}
			if(condition1[0] !== '<=' && condition1[0] !== '>=' && condition1[0] !== '>' && condition1[0] !== '>'){
				return false;
			}
			if(condition2[0] !== '<=' && condition2[0] !== '>=' && condition2[0] !== '>' && condition2[0] !== '>'){
				return false;
			}
			if(!this.isNumber(condition1[1])){
				return false;
			}
			if(!this.isNumber(condition2[1])){
				return false;
			}
			
			var condition1Flag = false;
			if(condition1[0] === '<='){
				condition1Flag = (number <= condition1[1]);
			}else if(condition1[0] === '>='){
				condition1Flag = (number >= condition1[1]);
			}else if(condition1[0] === '<'){
				condition1Flag = (number < condition1[1]);
			}else if(condition1[0] === '>'){
				condition1Flag = (number > condition1[1]);
			}

			var condition2Flag = false;
			if(condition2[0] === '<='){
				condition2Flag = (number <= condition2[1]);
			}else if(condition1[0] === '>='){
				condition2Flag = (number >= condition2[1]);
			}else if(condition1[0] === '<'){
				condition2Flag = (number < condition2[1]);
			}else if(condition1[0] === '>'){
				condition2Flag = (number > condition2[1]);
			}
			
			if('&&' === type){
				return condition1Flag && condition2Flag;
			}else if('||' === type){
				return condition1Flag || condition2Flag;
			}
			
			return false;
		}

		// 数字范围
		// numberRange(123, '&&', [ '>', 122.99 ], [ '<=',123.01 ]);
		func.numberRange = function(number,type,condition1,condition2) {
			if(this.isNullOrUndefinedOrNaNOrInfinity(number)){
				return false;
			}
			if('&&' !== type && '||' != type){
				return false;
			}
			if(!(condition1 instanceof Array)){
				return false;
			}
			if(!(condition2 instanceof Array)){
				return false;
			}
			if(condition1.length !== 2){
				return false;
			}
			if(condition2.length !== 2){
				return false;
			}
			if(condition1[0] !== '<=' && condition1[0] !== '>=' && condition1[0] !== '>' && condition1[0] !== '>'){
				return false;
			}
			if(condition2[0] !== '<=' && condition2[0] !== '>=' && condition2[0] !== '>' && condition2[0] !== '>'){
				return false;
			}
			if(!this.isNumber(condition1[1])){
				return false;
			}
			if(!this.isNumber(condition2[1])){
				return false;
			}
			
			var condition1Flag = false;
			if(condition1[0] === '<='){
				condition1Flag = (number <= condition1[1]);
			}else if(condition1[0] === '>='){
				condition1Flag = (number >= condition1[1]);
			}else if(condition1[0] === '<'){
				condition1Flag = (number < condition1[1]);
			}else if(condition1[0] === '>'){
				condition1Flag = (number > condition1[1]);
			}

			var condition2Flag = false;
			if(condition2[0] === '<='){
				condition2Flag = (number <= condition2[1]);
			}else if(condition1[0] === '>='){
				condition2Flag = (number >= condition2[1]);
			}else if(condition1[0] === '<'){
				condition2Flag = (number < condition2[1]);
			}else if(condition1[0] === '>'){
				condition2Flag = (number > condition2[1]);
			}
			
			if('&&' === type){
				return condition1Flag && condition2Flag;
			}else if('||' === type){
				return condition1Flag || condition2Flag;
			}
			
			return false;
		}

		// 判断是否为整数
		func.isInteger = function(number) {
			if(!this.isNumber(number)){
				return false;
			}
			return String(number).indexOf(".") === -1;
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
				if (param !== '') {
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
