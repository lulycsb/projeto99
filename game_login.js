// Crie a função addUser()
function addUser() {
  // Obtenha o valor do usuário através das ids player1_name_input e player2_name_input
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value ;
  // Armazene esses valores localmente
    localStorage.setItem ("player1_name",player1_name);   
    localStorage.setItem ("player2_name",player2_name);
  // Atribua "game_page.html" para window.location
    window.location="game_page.html"
}

