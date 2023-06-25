video = "";
status = "";
input = ""
objects = []
function preload(){
    video = createCapture(VIDEO)
    video.hide()
    
}

function setup() {
    canvas = createCanvas(480,380)
    canvas.center()
}

function draw() {
    image(video,0,0,480,380)
    if (status!="") {
        object_detector.detect(video,gotResult)
        
        for (i = 0; i < objects.length; i++) {
            if (objects[i].label == input) {
                video.stop()
                object_detector.detect(gotResult)
                speech = new SpeechSynthesisUtterance(input);
                speech.speak(utterThis)

            } else {
                document.getElementById("status").innerHTML = "deu ruin"
            }
document.getElementById("status").innerHTML = "Status: Objetos detect"
document.getElementById("number").innerHTML = objects.length
fill('#ff0000')
percent = floor(objects[i].confidence*100)
text(objects[i].label + "" + percent + "" + objects[i].x + 15 + objects[i].y + 15)
noFill()
stroke('#ff0000')
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    }
}
function gotResult(error, results) {
    if (error) console.log(error)
    console.log(results)
    objects = results
    }
    
function toggle() {
object_detector = ml5.objectDetector('cocossd', modelLoaded)
document.getElementById("status").innerHTML = "Carregando objetos"
input = document.getElementById("ot").value
}
function modelLoaded() {
    console.log("Loaded!")
    status = true
}
console.log(Math.random(300))