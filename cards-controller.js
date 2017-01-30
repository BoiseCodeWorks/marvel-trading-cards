function CardsController() {


  var dataStore = new MarvelService()


  dataStore.getCharacters(ready)

  function ready(data) {

    draw(data)

    this.onAdd = function () {
      //this function will take the player that was clicked and add them to your team through the dataStore.

    }

    this.onRemove = function () {
      //this will remove the character from your team
    }


    function draw(list) {
      //target is the id of the element where the list will be rendered
      var marvelElem = document.getElementById('marvel-characters')
      var myElem = document.getElementById('my-characters')
      marvelElem.innerHTML = ''
      myElem.innerHTML = ''

      var marvelTemplate = ''
      var myTemplate = ''

      for (var i in list) {
        console.log(list)
        var character = list[i];
        console.log(character);
        marvelTemplate += `
      <div class="card">
        <img src="${character.thumbnail.path}.${character.thumbnail.extension}" width="100">
        <h3>${character.name}</h3>
        <div>
          <button class="btn-success" id="${character.id}">Add to Team</button>
        </div>
      <div>
      `
        myTemplate += `
      <div class="card">
        <img src="${character.thumbnail.path}.${character.thumbnail.extension}" width="100">
        <h3>${character.name}</h3>
        <div>
          <button class="btn-danger" id="${character.id}">DESTROY FOREVER</button>
        </div>
      <div>
      `
      }
      
      marvelElem.innerHTML = marvelTemplate
      myElem.innerHTML = myTemplate;

    }

  }


}