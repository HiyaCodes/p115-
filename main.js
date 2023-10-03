https://i.postimg.cc/nV3xyYcn/pngtree-cute-barbie-pink-lips-lips-clipart-png-image-5725703.jpg

lipX=0
lipY=0

function preload(){
    lip=loadImage("https://i.postimg.cc/nV3xyYcn/pngtree-cute-barbie-pink-lips-lips-clipart-png-image-5725703.jpg")
}

function setup(){
   canvas= createCanvas(300,300)
   canvas.center()
   video = createCapture(VIDEO)
   video.size(300, 300)
   video.hide()
   poseNet = ml5.poseNet(video, modelLoaded)
   poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log("poseNet Initialised!")
}

function draw() {
    image(video, 0, 0, 300, 300)
    fill("red");
 stroke("white")
image(lip,lipX-15,lipY-15,25,25)
}



function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
        console.log("lip x= " + lipX)
        console.log("lip y= " + lipY)
    }


    
}
function take_snapshot(){
    save('my_filter.png')
}
