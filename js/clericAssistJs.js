// IDs
var newCharDiv = document.getElementById("new-character-div");
var addCharButton = document.getElementById("add-char-button");
var nameField = document.getElementById('name-field');
var submitCharButton = document.getElementById("submit-char-button");

// GLOBALS
var characterFields = ["name-field", "hp-field", "ac-field"];
var addCharButtonClicked = false;
var editValues = {};

// FUNCTIONS FOR ADDING
function addNewCharacter() {
  if (!addCharButtonClicked) {
    newCharDiv.setAttribute('style', 'display : block');
    nameField.focus();
    addCharButton.value = "-";
    addCharButtonClicked = true;
  } else {
    clearFields();
  }
}

// FUNCTIONS FOR SUBMITTING
function submitNewCharacter() {
  isValid = true;
  console.log("entering");
  characterFields.forEach(id => {
    if (document.getElementById(id).value == '') {
      isValid = false;
    }
  });

  if (isValid) {
    var tbl = document.getElementById("player-table");
    var newTextRow = tbl.insertRow(tbl.rows.length);
    characterFields.forEach(id => insertData(newTextRow, document.getElementById(id)));

    var newEditRow = tbl.insertRow(tbl.rows.length);
    characterFields.forEach(id => insertEditCells(newEditRow, document.getElementById(id)));
    newEditRow.setAttribute('style', 'display : none');

    createButton(newTextRow, newEditRow, "Edit");
    createButton(newEditRow, newTextRow, "Save");
    clearFields();
  } else {
    alert("ENTER IN VALUES K THX");
  }
}

function insertData(row, data) {
  var td = document.createElement("td");
  td = row.insertCell(-1);
  var textNode = document.createTextNode(data.value);
  td.append(textNode);
}

function insertEditCells(row, data, id) {
  var td = document.createElement('td');
  td = row.insertCell(-1);
  var editNode = document.createElement('INPUT');

  if (data.type == 'text') {
    editNode.setAttribute("type", "text");
  } else if (data.type == 'number') {
    editNode.setAttribute("type", "number");
  }
  editNode.value = data.value;
  td.append(editNode);
}

function createButton(row, otherRow, text) {
  var td = document.createElement("td");
  td = row.insertCell(-1);
  var button = document.createElement('BUTTON');
  button.innerHTML = text;
  button.onclick = function() {
    row.setAttribute("style", "display : none");
    otherRow.setAttribute("style", "display : contents");
    if (text == 'Save') {
    }
  }
  td.append(button);
}

function clearFields() {
  newCharDiv.setAttribute('style', 'display : none');
  addCharButton.value = "+";
  addCharButtonClicked = false;
  characterFields.forEach(id => document.getElementById(id).value = "");
}

// FUNCTIONS FOR EDITING
function editCharacter() {
  // convert all the fields into textfields with
  // on edit set contenteditable for the associated fields
}

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return;
  }

  switch (event.key) {
    case "Enter":
      if (newCharDiv.style.display == 'block' && document.activeElement !== submitCharButton) {
        console.log('here');
        submitNewCharacter();
      } else if (newCharDiv.style.display !== 'block') {
        addNewCharacter();
      }
      break;
    case "Esc":
    case "Escape":
      if (newCharDiv.style.display === 'block') {
        clearFields();
      }
      break;
    default:
      return;
  }
});
