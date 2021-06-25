const Repeats = prompt("Ingrese la cantidad de veces que desea que se repita el juego");

const numberOfRepeats = Number.parseInt(Repeats);

console.log(`El usuario quiere que el juego se repita un numero de ${numberOfRepeats} veces`); 


//creacion de ciclo for para la jugada y sus repeticiones
for( let count = 1; count <= numberOfRepeats; count = count + 1  ){
    //ingreso de la jugada del usuario
    let playerMove = prompt("Ingrese su jugada, puede ser piedra, papel, o tijeras") 

    //ingreso de las jugadas aleatorias de la maquina
    const randomMove = Math.floor(Math.random() * 3) ;// opciones aleatorias

   //creacion de variable sin contenido (tipo string) para darle un valor si es que es 0, 1 y 2 abajo
    let randomMoveAlert = "";
   //Definicion de las opciones aleatorias a piedra(0) papel(1) y tijeras(2)
    if( randomMove === 0){
        randomMoveAlert = "piedra" //decision de la maquina traducida a un string
    }else if (randomMove === 1){
        randomMoveAlert = "papel"
    }else if (randomMove === 2){
        randomMoveAlert = "tijeras"
    }else{
        console.error(`la opcion randomMoveAlert no es valida: ${randomMove}`)
    }
   
//creacion de variable winner para llamar a un string cada vez que se cumpla la condicion

    winner = "" // randomMove, playerMove, both. 

 //Definicion de qué le gana a qué

     // si la maquina hace piedra    
    if( randomMoveAlert === "piedra"){
        if(playerMove === "papel"){
            winner = "playerMove"
        }else if(playerMove === "tijeras"){
            winner = "randomMoveAlert"
        }else{
            winner = "both"
        }
      // si la maquina hace papel      
    }else if( randomMoveAlert === "papel"){
        if(playerMove === "tijeras"){
            winner = "playerMove"
        }else if(playerMove === "piedra"){
            winner = "randomMoveAlert"
        }else{
            winner = "both"
        }
        // si la maquina hace tijera    
    }else if( randomMoveAlert === "tijeras"){
        if(playerMove === "piedra"){
            winner = "playerMove"
        }else if(playerMove = "papel"){
            winner = "randomMoveAlert"
        }else{
            winner = "both"
        }
    };

    //Mostrar los resultados al usuario

    //Mostrar con un console log los movimientos que hizo cada uno
    console.log({ playerMove, randomMoveAlert });

    document.write("<br>" + `Tu jugada: ${playerMove} ` + "<br>"  )
    document.write(`Jugada de la maquina: ${randomMoveAlert}` + "<br>" )
    
    //Condicionar una respuesta

    if( winner === "playerMove"){
        document.write( " Felicidades, ganaste ! c:" + "<br>"  )
    }else if( winner === "randomMoveAlert" ){
        document.write(" Perdiste conta la maquina :( " + "<br>" )
    }else{
        document.write(" Empataron :o" + "<br>"  )
    }       
}