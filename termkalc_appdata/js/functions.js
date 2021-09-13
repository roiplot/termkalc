/* --- Variables --- */
let _ret = "";

/* --- Simple functions --- */

function Fact(_n)
{
    var init=1;
    for (var i = 2; i <= _n; i++)
        init = init * i;
    return init;
}

/* --- Common Functions --- */

/* --- Functions --- */

function Arrangements(_num1, _num2) {
	var _top = Fact(_num1);
	var _bottom = Fact(_num1 - _num2);
	return _top/_bottom;
}

function Combinations(_num1, _num2) {
	var _top = Fact(_num1);
	var _bottom = Fact(_num1 - _num2) * Fact(_num2);
	return _top/_bottom;
}

function raiz_test(a) {
    res = math.sqrt(a);
    _op_done = func_array[op_selected.value];
    console.log(res);
}

function printPrimeFactors(_n) {
	_ret = "";
	while (_n % 2 == 0) 
	{ 
		// concatenar resultado
		_ret += "2 x ";
		_n = _n/2;
	}
	for (var i = 3; i <= math.sqrt(_n); i = i + 2) 
	{
		while (_n % i == 0)
        {
            //concatenar resultado
            _ret += i + " x ";
            _n = _n / i;
        }
	}
	if (_n > 2) 
	{
		_ret += _n;
		//concatenar resultado

	}
	// Agrego este " x 1" solo para saber que terminó
	_ret += " x 1";
	return _ret;
}

function mcd(_a, _b){

}

/* --- Launchers --- */

function launchFactorial(_nmb) {
	return Fact(_nmb);
}

function launchFactoresPrimos(_nmb) {
    return printPrimeFactors(_nmb);

}

function launchCombinations(_num1, _num2) {
	return Combinations(_num1, _num2);
}

function LaunchArrangements(_num1, _num2) {
	return Arrangements(_num1, _num2);
}

function launchMcd(_a, _b){

}