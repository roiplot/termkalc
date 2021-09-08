let func_selector = document.getElementById("func_selector");
let _area = document.getElementById("input_area");


function clear() {
    _area.innerHTML = "";
    _area.innerText = "";
}

function loadFuncSelector() {
    for (let op_index = 0; op_index < func_array.length; op_index++) {
        var item = document.createElement("option");
        item.value = op_index;
        item.innerHTML = func_array[op_index];
        func_selector.appendChild(item);
    }
}

/* --- Input Templates --- */

let _default_placeholder = "Input";

function LoadOneInput(_placeholder) {
    var _input_1 = document.createElement("input");
    _input_1.value = "";
    _input_1.placeholder = _placeholder;
    _input_1.setAttribute("id", "input_field");
    _input_1.setAttribute("class", "form-control");
    _area.appendChild(_input_1);
}

function LoadTwoInputs(_placeholder_1, _placeholder_2) {
    var _input_1 = document.createElement("input");
    _input_1.value = "";
    _input_1.placeholder = _placeholder_1;
    _input_1.setAttribute("id", "input_field_1")
    _input_1.setAttribute("class", "form-control");
    var _input_2 = document.createElement("input");
    _input_2.value = "";
    _input_2.placeholder = _placeholder_2;
    _input_2.setAttribute("id", "input_field_2")
    _input_2.setAttribute("class", "form-control");
    _area.appendChild(_input_1);
    _area.appendChild(_input_2);
}

function LoadThreeInptus() {

}

/* --- --- */
function loadProperFields() {
    clear();
    let _current = func_selector.value;
    switch (_current) {
        case "1": // MCD
            LoadTwoInputs("First Number", "Second Number");
            break;

        case "2": // Prime fact
            LoadOneInput("Number");
            break;

        case "3": // Congruence
            var _input_1 = document.createElement("input");
            _input_1.value = "";
            _input_1.placeholder = "First number";
            _input_1.setAttribute("class", "form-control");
            var _icon = document.createElement("h3");
            _icon.innerText = "≡";
            var _input_2 = document.createElement("input");
            _input_2.value = "";
            _input_2.placeholder = "Second number";
            _input_2.setAttribute("class", "form-control");
            // Append
            _area.appendChild(_input_1);
            _area.appendChild(_icon);
            _area.appendChild(_input_2);
            break;

        case "4": // Factorial

            LoadOneInput("Number");
            break;

        case "5": // Combinations
            LoadTwoInputs('Input "a"', 'Input "b"');
            break;

        case "6": // Arreglos
            LoadTwoInputs('Input "a"', 'Input "b"');
            break;
        /* --- --- */

        case "0":
            clear();
            break;
    }
}

function loadFooter() {
    let _footer = document.getElementById("footer");
    _footer.setAttribute("center", "text-align");
    _footer.innerHTML = _footer_text;
}