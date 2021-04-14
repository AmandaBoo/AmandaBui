// need script to read from jsons of spells and create cards for them
function displayEresseaHealCards(spellList) {
  var myRequest = new Request('json/eressea.json');

  fetch(myRequest)
    .then(response => response.json())
    .then(json => createHealCards(json.healingSpells));
}

function createHealCards(spellList) {
  // spelllist is a json array
  console.log(spellList);
  var div = document.getElementById('eressea-heal-div');
  for (i = 0; i < spellList.length; i++) {
      // create new div for each of the spells and give them the same class
      const newDiv = document.createElement("div");
      const newContent = document.createTextNode("Hi there and greetings!");

      // add the text node to the newly created div
      newDiv.appendChild(newContent);
      document.body.insertBefore(newDiv, div.nextSibling);
  }
}
function createEresseaAttackCards() {
  console.log("ATTACK");
}
