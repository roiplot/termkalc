// SACAR LOS COSOS DE INPUTS PARA AFUERA

/* --- Variables ---*/

// DOM
var resultado_field = $('#result').get(0);
var req_op_field = $('#op_req').get(0);
var op_selected_field = $('#func_selector').get(0);

// LOCAL
var _res = ""; // final result
var _op_done = "";
var _result_temp = "";
var _res_op_temp = "";

var _input_1, _input_2, _input_3; 

// RESET
//input_field.value = "";
resultado_field.value = "";
req_op_field.value = "";

/* --- input process --- */

function load_output() {
	resultado_field.value = _res;
	req_op_field.value = _op_done;
}

function submit_request() {

	console.log(op_selected_field.value);
	functionSelect(op_selected_field.value);
	// raiz_test(input);
	load_output();
	// req_op_field.value = _op_done;
	// resultado.value = res;
}

/* --- Templates --- */

function OneInput () {
	_input_1 = $('#input_field').get(0);
	//_input_1 = "";
	_input_1 = eval(input_field.value);
	console.log(_input_1);
}

function TwoInputs () {
	_input_1 = eval($('#input_field_1').get(0).value);
	_input_2 = eval($('#input_field_2').get(0).value);
	console.log(_input_1);
	console.log(_input_2);
}

function ThreeInputs () {
	
}


/* --- Function Selector --- */

function functionSelect(_op) {
	switch (_op) {
		case "1":
			// Alg. Euclides
			console.log("Launched Euclidean algorithm");
			console.log("Function not implemented yet.");
			break;

		case "2":
			// Fact. Primos
			console.log("Launched desc. factores primos");
			OneInput();
			_result_temp = launchFactoresPrimos(_input_1);
			_op_done = func_array[2];
			_res_op_temp = func_array[2] + " of " + _input_1;
			console.log(_result_temp);
			break;

		case "3":
			// Congruence
			console.log("Congruence");
			console.log("Function not implemented yet.");
			break;


		case "4":
			// Factorial
			console.log("Launched factorial");
			OneInput();
			_result_temp = launchFactorial(_input_1);
			_op_done = func_array[4];
			_res_op_temp = func_array[4] + " of " + _input_1;
			console.log(_result_temp);
			break;

		case "5":
			console.log("Combinations");
			TwoInputs();
			_result_temp = launchCombinations(_input_1, _input_2);
			_op_done = func_array[5];
			_res_op_temp = func_array[5] + " of (" + _input_1 + "," + _input_2 + ").";
			console.log(_res_op_temp);
			break;

		case "6":
			console.log("Arreglos");
			TwoInputs();
			_result_temp = LaunchArrangements(_input_1, _input_2);
			_op_done = func_array[6];
			_res_op_temp = _op_done + " of (" + _input_1 + "," + _input_2 + ").";
			console.log(_res_op_temp);
			break;

		/* --- --- */

		case "0":
			console.log("No function selected");
			alert("Please, select any function.");
			break;
	}
	_op_done = _res_op_temp;
	opCompleted();
}

function opCompleted() {
	_res = _result_temp;
	console.log("Function completed");
}