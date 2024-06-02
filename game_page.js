//Estas linhas recuperam os nomes dos jogadores armazenados no armazenamento local do navegador e os atribuem às variáveis 
//player1_name e player2_name, respectivamente.

player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

//Inicializam as pontuações dos jogadores, definindo as variáveis player1_score e player2_score como 0. 

	player1_score = 0;
	player2_score = 0;

	//Atualizam o conteúdo dos elementos HTML com os IDs "player1_name" e "player2_name" para exibir os nomes dos jogadores 
	//com dois pontos (":") após eles.

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

//Atualizam o conteúdo dos elementos HTML com os IDs "player1_score" e "player2_score" para exibir as pontuações dos jogadores, 
//que foram inicializadas anteriormente como 0.

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

//Atualizam o conteúdo dos elementos HTML com os IDs "player_question" e "player_answer" para indicar qual jogador tem o turno de fazer 
//perguntas e qual jogador tem o turno de responder.

document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player2_name ;

//Define uma função chamada send(), que é chamada quando o botão "Enviar" é clicado.

function send() {

	//O restante do código JavaScript implementa a lógica do jogo de adivinhação de palavras, onde os jogadores tentam adivinhar uma palavra com base em dicas 
	//apresentadas. Ele lida com a entrada do jogador, verifica se a resposta está correta e atualiza as pontuações e os turnos dos jogadores conforme necessário.

	get_numer1 = document.getElementById("numer1").value;
	// numer1 = get_numer1.toLowerCase();
	console.log("o primeiro número é  = " + get_numer1);

    get_numer2 = document.getElementById("numer2").value;
	// word = get_word.toLowerCase();
	console.log("o segundo número é = " + get_numer2);

	//Mulltiplica os dois números
	resposta_certa=parseInt(get_numer1)*parseInt(get_numer2);
	console.log(resposta_certa);
	question_number="<h4>"+get_numer1+" X "+get_numer2+"</h4>";
	input_box="<br>Resposta : <input type='text'id='input_check_box'>";
	check_button = "<br><br><button class='btn btn-info' onclick='check()'>Verificar</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("numer1").value = "";
	document.getElementById("numer2").value = "";
}

question_turn = "player1_name";
answer_turn = "player2_name";

 function check()
 {
 	get_answer = document.getElementById("input_check_box").value;
 	if(get_answer == resposta_certa)	
 	{
 		if(answer_turn == "player1_name")
 		{
			player1_score = player1_score +1;
 		    document.getElementById("player1_score").innerHTML = player1_score;
		}
 		else 
		{
 			player2_score = player2_score +1;
 		    document.getElementById("player2_score").innerHTML = player2_score;
 		}
 	}
	
 	if(question_turn == "player1_name")
 	{
 		question_turn = "player2_name"
 		document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player2_name ;
 	}
 	else 
 	{
 		question_turn = "player1_name"
 		document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player1_name ;
 	}

 	if(answer_turn == "player1_name")
 	{
 		answer_turn = "player2_name"
 		document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player2_name ;
 	}
 	else 
 	{
 		answer_turn = "player1_name"
 		document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player1_name ;
 	}

     document.getElementById("output").innerHTML = "";
}
	//O comando charAt1 = word.charAt(1); em JavaScript retorna o caractere na posição especificada em uma string.
    //word: é uma variável que contém uma string.
    //.charAt(1): é um método de string que retorna o caractere na posição especificada, onde 1 é o índice do caractere que queremos recuperar. 
	//É importante notar que em JavaScript, os índices começam em 0, então o primeiro caractere tem índice 0, o segundo tem índice 1 e assim por diante.

    //Portanto, charAt1 receberá o caractere na segunda posição da string armazenada na variável word.

    // charAt1 = word.charAt(1);
	// console.log(charAt1);

	//O comando lenght_divide_2 = Math.floor(word.length/2); em JavaScript calcula a metade do comprimento da string armazenada na variável word.

	// lenght_divide_2 = Math.floor(word.length/2);
	// charAt2 = word.charAt(lenght_divide_2);
	// console.log(charAt2);

	//O comando lenght_minus_1 = word.length - 1; em JavaScript calcula o índice do último caractere em uma string, subtraindo 1 do comprimento total da string.

    // lenght_minus_1 = word.length - 1; 
    // charAt3 = word.charAt(lenght_minus_1); 
	// console.log(charAt3);

	//O comando remove_charAt1 = word.replace(charAt1, "_"); em JavaScript substitui todas as ocorrências de um determinado caractere em uma string por outro caractere.

//     remove_charAt1 = word.replace(charAt1, "_");
//     remove_charAt2 = remove_charAt1.replace(charAt2, "_");
//     remove_charAt3 = remove_charAt2.replace(charAt3, "_");
// 	console.log(remove_charAt3);

//     question_word = "<h4 id='word_display'> P. "+remove_charAt3+"</h4>";
//     input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
//     check_button = "<br><br><button class='btn btn-info' onclick='check()'>Verificar</button>";
//     row =  question_word + input_box + check_button ; 
//     document.getElementById("output").innerHTML = row;
// document.getElementById("word").value = "";




