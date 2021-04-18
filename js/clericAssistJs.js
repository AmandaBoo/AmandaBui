// IDs
var newCharDiv = document.getElementById("new-character-div");
var addCharButton = document.getElementById("add-char-button");
var nameField = document.getElementById('name-field');
var submitCharButton = document.getElementById("submit-char-button");

// GLOBALS
var characterFields = ["name-field", "hp-field", "ac-field"];
var addCharButtonClicked = false;
var editValues = [];

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
    clearFields();
  } else {
    alert("ENTER IN VALUES K THX");
  }
}
// TODO : CLICKING ENTER WHILE IN EDIT MODE SHOULD TURN OFF EDIT MODE NOT ALLOW FOR "ENTER"
// NEW CHARACTER
function insertData(row, data) {
  var td = document.createElement("td");
  td = row.insertCell(-1);
  td.contentEditable = true;
  td.addEventListener("keypress", function(event) {
    if (data.type == 'number') {
      // prevent users from entering in chars in HP and AC field
      if (event.charCode < 48 || event.charCode > 57) {
        event.preventDefault();
      }
    }
  });
  var textNode = document.createTextNode(data.value);
  if (data.type == 'text') {
    td.spellcheck = false;
  }
  td.append(textNode);
}

function clearFields() {
  newCharDiv.setAttribute('style', 'display : none');
  addCharButton.value = "+";
  addCharButtonClicked = false;
  characterFields.forEach(id => document.getElementById(id).value = "");
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

console.log("testing");
