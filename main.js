function setup(){
    canvas=createCanvas(899, 699)
}
x=0;
y=0;
draw_rectangle=""
draw_circle=""
draw_triangle=""
draw_square=""

var SpeechRecognition=window.webkitSpeechRecognition
var recognition= new SpeechRecognition()

function start(){
    document.getElementById("status").innerHTML="System is listenin' please talk";
    recognition.start()
}
recognition.onresult=function(event){
    console.log("testin'")
    console.log(event)
    content=event.results[0][0].transcript;
    content=content.toLowerCase()
    if(content=="rectangle"){
        draw_rectangle="set"
    }
    else if(content=="circle"){
        draw_circle="set"
    }
    else if(content=="square"){
        draw_square="set"
    }
    else if(content=="triangle"){
        draw_triangle="set"
    }
    document.getElementById("status").innerHTML="Th' speech's been recognised as "+content;
}
function draw(){
    x=Math.floor(Math.random()*850)
    y=Math.floor(Math.random()*650)
    radius=Math.floor(Math.random()*100)
    width=Math.floor(Math.random()*100)
    height=Math.floor(Math.random()*100)
    if(draw_rectangle=="set"){
        rect(x, y, width, height)
        document.getElementById("status").innerHTML="Rectangle's been drawn";
        draw_rectangle=""
    }
    if(draw_square=="set"){
        rect(x, y, width, width)
        document.getElementById("status").innerHTML="Square's been drawn";
        draw_square=""
    }
    if(draw_circle=="set"){
        circle(x, y, radius)
        document.getElementById("status").innerHTML="Circle's been drawn";
        draw_circle=""
    }
    if(draw_triangle=="set"){
        triangle(x, y, x+50, y-50, x+100, y)
        document.getElementById("status").innerHTML="Triangle's been drawn";
        draw_triangle=""
    }
}