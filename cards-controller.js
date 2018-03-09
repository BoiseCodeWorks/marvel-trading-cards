function CardsController() {
var marvelService = new MarvelService()

  this.add = function add(id){
    console.log('characterId', id)
  }

  marvelService.getCharacters(ready)

  function ready(data) {

    updateMarvel(data)
  }

    function updateMarvel(list) {
      var elem = document.getElementById('marvel-characters')
      elem.innerHTML = ''
      var marvelTemplate = ''
      for (var i in list) {
        var character = list[i];
        character.thumbnail.path = character.thumbnail.path.replace('http:', '')
        marvelTemplate += `
      <div class="card">
        <img src="${character.thumbnail.path}.${character.thumbnail.extension}" width="100">
        <h3>${character.name}</h3>
        <div>
          <button class="btn-success" id="${character.id}" onclick="app.controllers.marvelController.add('${character.id}')">Add to Team</button>
        </div>
      <div>
      `

        elem.innerHTML = marvelTemplate
      }

    }

}
