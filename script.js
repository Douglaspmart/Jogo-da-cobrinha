let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); 
let box = 32;
let snake = [];
snake[0] ={
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let foodps = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect (0, 0, 16 * box, 16 * box);
}

function criarCobra(){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "#519C0A";
        context.fillRect (snake[i].x, snake[i].y, box, box);
    }   
}

function food(){
    context.fillStyle = "red"
    context.fillRect (foodps.x, foodps.y, box, box)
}

document.addEventListener('keydown', update);

function update(event){
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 38 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarjogo(){ 
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;
    
   
    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Você não é tão bom assim, é um fracassado :( ');
        }
    }
    
    criarBG();
    criarCobra();
    food();

    let snakex = snake[0].x;
    let snakey = snake[0].y;

    if (direction == "right") snakex += box;
    if (direction == "left") snakex -= box;
    if (direction == "up") snakey -= box;
    if (direction == "down") snakey += box;

    if (snakex != foodps.x || snakey != foodps.y){
        snake.pop();
    }
    else{
        foodps.x = Math.floor(Math.random() * 15 + 1) * box;
        foodps.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let head = {
        x: snakex,
        y: snakey
    }

    snake.unshift(head);
}
let jogo = setInterval(iniciarjogo, 100);
