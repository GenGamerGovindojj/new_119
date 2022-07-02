function setup() {
    canvas=createCanvas(400, 300)
    canvas.position(450,250)
    background("white")
}

function clearCanvas() {
    background("white")
}


function preload() {
    classifier=ml5.imageClassifier("DoodleNet")
}

function draw() {
   strokeWeight(11) 
   stroke(0)
   if(mouseIsPressed)
   {
       line(pmouseX,pmouseY,mouseX,mouseY)
   }
}

function classifycanvas() {
    classifier.classify(canvas,gotResult)
}
    
function gotResult(error,results) {
    if(error){
        console.error(error)
    }

    console.log(results)
    document.getElementById("Score").innerHTML="my_score"+results[0].label
    document.getElementById("Timer").innerHTML="my_timer"+Math.round(results[0].confidence*100)+"%"
    utterThis=new SpeechSynthesisUtterance(results[0].label)
    synth.speak(utterThis)
}

