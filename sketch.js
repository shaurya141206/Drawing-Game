var gameState = 1;
var canvas;
var database;
var isDrawing = false;
var currentPath = [];
var drawing = [];
var dB_drawing = [];
var Timer = 30; 
var Player1score = 0;
var Player2score = 0;
var crazyidea=1;
var matching;
var notmatching;

function preload (){
    image1 = loadImage('Images/image1.jpeg');
    image2 = loadImage('Images/image2.jpeg');
    image3 = loadImage('Images/image3.jpeg');
    image4 = loadImage('Images/image4.jpeg');
    image5 = loadImage('Images/image5.jpeg');
    image6 = loadImage('Images/image6.jpeg');
    image7 = loadImage('Images/image7.jpeg');
    image8 = loadImage('Images/image8.jpeg');
    image9 = loadImage('Images/image9.jpeg');
}

function setup() {
    canvas = createCanvas(displayWidth, displayHeight - 300);
    //canvas.parent("canvascontainer");
    database = firebase.database();
    canvas.mousePressed(startPath);
    canvas.mouseReleased(endPath);
    input = createInput("Player 2 Name");
    input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    input1 = createInput("Player 1 Name");
    input1.position(displayWidth/2 - 40 , displayHeight/2 - 120);
    playbutton = createSprite(displayWidth/2 + 30, displayHeight/2, 198, 50)
    playbutton.scale = 2.5
    playbutton.addImage(image9)
    matching = createSprite (displayWidth/2 - 90, 575, 198, 50);
    matching.scale = 1.5
    matching.addImage(image7)
    notmatching = createSprite (displayWidth/2 - -135, 575, 198, 50)
    notmatching.scale = 1.5
    notmatching.addImage(image8)
    matching.visible=false
    notmatching.visible=false
}

function startPath() {
    isDrawing = true;
    currentPath = [];
    drawing.push(currentPath);
}

function endPath() {
    isDrawing = false;
    //dBref.push(drawing);
}

function draw() {
    background("white");
   
    if (gameState === 1){
        textSize(100);
        text("Draw the Picture!!!", displayWidth/2 - 350, displayHeight/2 - 300)
        textSize(20)
        fill("black")
    }

    if (mousePressedOver(playbutton)){
        input.hide();
        input1.hide();
        playbutton.destroy();
        gameState = 2;
    }

    if(gameState===3){
        picture123.scale = 0.5;
        Timer = Timer - 0.05;
        textSize(25);
        fill("black");
        text("Timer : "+Math.round(Timer), displayWidth - 200, displayHeight - 750)
        textSize(25)
        fill("black")
        text("Player 1 : "+Player1score, displayWidth - 400, displayHeight - 850);
        text("Player 2 : "+Player2score, displayWidth - 200, displayHeight - 850) 
        if(mouseWentUp("leftButton")){
            crazyidea=2;
            console.log(crazyidea)
            }
    }
    if(gameState===7){
        picture123.scale = 0.5;
        Timer = Timer - 0.05;
        textSize(25);
        fill("black");
        text("Timer : "+Math.round(Timer), displayWidth - 200, displayHeight - 750)
        textSize(25)
        fill("black")
        text("Player 1 : "+Player1score, displayWidth - 400, displayHeight - 850);
        text("Player 2 : "+Player2score, displayWidth - 200, displayHeight - 850) 
        if(mouseWentUp("leftButton")){
            crazyidea=1;
            console.log(crazyidea)
            }
    }

    if (gameState === 2) {
        var saveButton = select('#saveButton');
        saveButton.size(198, 50);
        saveButton.mousePressed(saveDrawing);
        var clearButton = select('#clearButton');
        clearButton.size(198, 50);
        clearButton.mousePressed(clearDrawing);
        picture123 = createSprite(200,200);
        picture123.addImage(image1);
        picture123.scale = 0.5;
        Timer = Timer - 0.05;
        textSize(25);
        fill("black");
        text("Timer : "+Math.round(Timer), displayWidth - 200, displayHeight - 750)
        textSize(25)
        fill("black")
        text("Player 1 : "+Player1score, displayWidth - 400, displayHeight - 850);
        text("Player 2 : "+Player2score, displayWidth - 200, displayHeight - 850)
        }
    if ( Timer <= 0) {
            gameState = 4;
            textSize(25)
            fill("black")
            text("Player 1 : "+Player1score, displayWidth - 400, displayHeight - 850);
            text("Player 2 : "+Player2score, displayWidth - 200, displayHeight - 850)
            text("Is the painting matching the picture?", displayWidth/2 - 200, 500)
            fill("red");
            text("Time Over",displayWidth - 200, displayHeight - 750);
            matching.visible=true
            notmatching.visible=true
            
            if (mousePressedOver(matching)&&crazyidea===1){
                
                gameState=3
                Player1score += 1;
                Timer=30
                notmatching.visible = false;
                matching.visible = false;
                var ran = Math.round (random(1,6));
               
                switch(ran){
                    case 1 : picture123.addImage(image1)
                    break;
                    case 2 : picture123.addImage(image2)
                    break;
                    case 3 : picture123.addImage(image3)
                    break;
                    case 4 : picture123.addImage(image4)
                    break;
                    case 5 : picture123.addImage(image5)
                    break;
                    case 6 : picture123.addImage(image6)
                    break;
                    default:
                        break;
                } 
            }
        
    
            if (mousePressedOver(matching)&&crazyidea===2){
                gameState=7
                Player2score += 1;
                Timer=30
                notmatching.visible = false;
                matching.visible = false;
                var ran = Math.round (random(1,6));
                
                switch(ran){
                    case 1 : picture123.addImage(image1)
                    break;
                    case 2 : picture123.addImage(image2)
                    break;
                    case 3 : picture123.addImage(image3)
                    break;
                    case 4 : picture123.addImage(image4)
                    break;
                    case 5 : picture123.addImage(image5)
                    break;
                    case 6 : picture123.addImage(image6)
                    break;
                    default:
                        break;
                } 
                if(mouseWentUp("leftButton")){
                    crazyidea=1
                    console.log(crazyidea)
                    }
               
            }
        
            if(mousePressedOver(notmatching)){
                gameState=3
                Timer=30
                notmatching.visible = false;
                matching.visible = false;
                var ran = Math.round (random(1,6));
                switch(ran){
                    case 1 : picture123.addImage(image1)
                    break;
                    case 2 : picture123.addImage(image2)
                    break;
                    case 3 : picture123.addImage(image3)
                    break;
                    case 4 : picture123.addImage(image4)
                    break;
                    case 5 : picture123.addImage(image5)
                    break;
                    case 6 : picture123.addImage(image6)
                    break;
                    default:
                        break;
                } 
            }
         
        }
       
    drawSprites();
        if (isDrawing) {
        var point = {
            x: mouseX,
            y: mouseY
        };
        currentPath.push(point);
    }
    stroke(25, 34, 234);
    strokeWeight(4);
    noFill();
    for (var i = 0; i < drawing.length; i++) {
        var path = drawing[i];
        beginShape();
        for (var j = 0; j < path.length; j++) {
            vertex(path[j].x, path[j].y);
        }
        endShape();
    }

    //Reading from database
    readData();
    stroke(255, 0, 0);
    strokeWeight(4);
    noFill();

    for (var i = 0; i < dB_drawing.length; i++) {
         var path = dB_drawing[i];
         beginShape();
         for (var j = 0; j < path.length; j++) {
             vertex(path[j].x, path[j].y);
         }
         endShape();
    }
}

function readData() {
    database.ref('MonaLisa/Session1/drawing/').on('child_added', function(data) {
        dB_drawing.push(data.val());
        console.log(dB_drawing);
    })
}

function saveDrawing() {
    var dBref = database.ref('MonaLisa');
    var data = {
        name: 'JSH',
        drawing: drawing,
        //    color: [120, 18, 234],

    };
    //dBref.push(data);
    dBref.set({
        "Session1": data
    })
}

//clear all data in database
function clearDrawing() {
    dB_drawing = [];
    var dBref = database.ref('MonaLisa');
    dBref.remove();
}