function Grid (target) {
	this._innerMethods._initialize(target);
}

(function () {
	var grid = this;
	var _innerProps = (function () {
		return {
			viewCanvas: null,
			columns: null
		}
	})();
	
	grid._innerMethods = {
		_initialize: function (target) {
			var target = document.getElementById(target);
			var canvas = document.createElement('canvas');
			canvas.style.width = '100%';
			canvas.style.height = '100%';
			canvas.style.border = '1px solid black'
			
			if(!target) {
				throw {
					err: 'target Id must be exist!!'
				}
			}
			target.append(canvas);
			for(var i in _innerProps) {
				// 속성값 getter, setter 생성
				(function (prop) {
					var getter = makeMethodName(prop, true);
					var setter = makeMethodName(prop, false);
					
					// TODO 왜 중복할당이 되는지 알아볼것				
					grid[getter] = function () {
						return _innerProps[prop];
					};
					grid[setter] = function (_prop) {
						_innerProps[prop] = _prop;
						return _prop;
					};
				})(i);
			}
			grid.setViewCanvas(canvas);			
			this._redraw ();
		},
		_clear: function () {
			// TODO call clear method by grid event 
			console.log('canvas cleared')
		},
		_redraw: function () {
			this._clear ();
			var canvas = grid.getViewCanvas();
			var ctx = canvas.getContext("2d");
			var columns = grid.getColumns();
			if(!columns) {				
				ctx.font = "15px Arial";				
				ctx.fillText("must set columns", 10, 50);
			}
		}			
	}
	function makeMethodName (strProp, isGetter) {
		var arrPropNames = strProp.split('');
		var prefix = isGetter ? 'get' : 'set';
		arrPropNames[0] = arrPropNames[0].toUpperCase();		
		return prefix + arrPropNames.join('');
	}
	
}.bind(Grid.prototype))();

