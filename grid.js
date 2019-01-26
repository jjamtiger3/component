function Grid (target) {
	this.target = target;
	this._innerMethods._initialize();
}

(function () {
	var grid = this;
	grid._innerProps = {
		columns: null
	};
	grid._innerMethods = {
		_initialize: function () {
			for(var i in grid._innerProps) {
				var getter = makeMethodName(i, true);
				var setter = makeMethodName(i, false);
				console.log(getter);
				grid[getter] = function () {
					return grid._innerProps[i];
				}
				grid[setter] = function (prop) {
					grid._innerProps[i] = prop;
					return prop;
				}
			}			
		},
		_redraw: function () {
			console.log('redrawed');
		}			
	}
	function makeMethodName (strProp, isGetter) {
		var arrPropNames = strProp.split('');
		var prefix = isGetter ? 'get' : 'set';
		arrPropNames[0] = arrPropNames[0].toUpperCase();		
		return prefix + arrPropNames.join('');
	}
	
}.bind(Grid.prototype))();

