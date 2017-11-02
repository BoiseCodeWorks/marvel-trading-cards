function MarvelService(){
  var key = '?apikey=e44062bbc76b37176b08325d5265a0f3';
  var baseUrl = 'http://gateway.marvel.com/v1/public/'
  
  var marvelCharacters = [];
  var myCharacters = [];
  
  
  this.getMarvelCharacters = function(){
    //what should this function return
  }
  
  this.getMyCharacters = function(){
    //what should this function return
  }
  
  this.addToMyCharacters = function(id){
    //in order to add a character to your list you will first need to find 
    //the character by its id in the marvelCharacters array
  }
  
  this.removeMyCharacter = function(id){
    //you need to find the character that you want to remove by its id
    //and remove it.
  }
  
  
  this.getCharacters = function(callWhenDone){
    //Use &offset=Number to add pagination
    $.get(baseUrl + 'characters'+key, function(response){
      marvelCharacters = response.data.results;
      callWhenDone(marvelCharacters)
    })
  }
  
  
}
