//TODO - ORDENAR ESTOOOOO
// SACAR LOS COSOS DE INPUTS PARA AFUERA

/* --- Variables ---*/

// DOM
// let input_field = document.getElementById("input");
let resultado_field = document.getElementById("result");
let req_op_field = document.getElementById("op_req");
let op_selected_field = document.getElementById('func_selector');

// LOCAL
let _res = ""; // final result
let _op_done = "";
let _result_temp = "";
let _res_op_temp = "";

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
	var input = document.getElementById("input_field");
	input = "";
	//input = parseInt(input_field.value);
	input = eval(input_field.value);
	console.log(input);
}

function TwoInputs () {
	
}

function ThreeInputs () {
	
}


/* --- Function Selector --- */

function functionSelect(_op) {
	switch (_op) {
		case "1":
			// Alg. Euclides
			console.log("Launched alg. de euclides");
			console.log("Function not implemented yet.");
			break;

		case "2":
			// Fact. Primos
			console.log("Launched desc. factores primos");

			var input = document.getElementById("input_field");
			input = "";
			//input = parseInt(input_field.value);
			input = eval(input_field.value);
			console.log(input);

			_result_temp = launchFactoresPrimos(input);
			_op_done = func_array[2];
			_res_op_temp = func_array[2] + " of " + input;
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

			var input = document.getElementById("input_field");
			input = "";
			//input = parseInt(input_field.value);
			input = eval(input_field.value);
			console.log(input);

			_result_temp = launchFactorial(input);
			_op_done = func_array[4];
			_res_op_temp = func_array[4] + " of " + input;
			console.log(_result_temp);
			break;

		case "5":
			console.log("Combinations");
			var _inp_1 = eval(document.getElementById("input_field_1").value);
			var _inp_2 = eval(document.getElementById("input_field_2").value);
			console.log(_inp_1);
			console.log(_inp_2);
			_result_temp = launchCombinations(_inp_1, _inp_2);
			_op_done = func_array[5];
			_res_op_temp = func_array[5] + " of (" + _inp_1 + "," + _inp_2 + ").";
			console.log(_res_op_temp);
			break;

		case "6":
			console.log("Arreglos");
			var _inp_1 = eval(document.getElementById("input_field_1").value);
			var _inp_2 = eval(document.getElementById("input_field_2").value);
			console.log(_inp_1);
			console.log(_inp_2);
			_result_temp = LaunchArranges(_inp_1, _inp_2);
			_op_done = func_array[6];
			_res_op_temp = _op_done + " of (" + _inp_1 + "," + _inp_2 + ").";
			console.log(_res_op_temp);
			break;


		/* --- --- */

		case "0":
			console.log("No function selected");
			alert("Por favor, selecciona una operación.");
			break;
	}
	_op_done = _res_op_temp;
	opCompleted();
}

function opCompleted() {
	_res = _result_temp;
	console.log("Function completed");
}