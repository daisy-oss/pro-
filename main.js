nosex=0;
nosey=0;
function preload(){
 doggy=loadImage('https://th.bing.com/th/id/OIP.cI-PBTO2pTXxCIqDa7e3gQAAAA?w=229&h=200&c=7&o=5&pid=1.7');
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
Video=createCapture(VIDEO);
Video.hide();

poseNet=ml5.poseNet(Video,modelLoaded);
poseNet.on('pose',gotposes);
}

function draw(){
image(Video,0,0,300,300);
 //image(doggy,nosex,nosey,20,20);
 fill(255,0,0);
 stroke(0,255,0);
 circle(nosex,nosey,20);
}

function take_pic(){
    save('realtime_filter.png');
}

function modelLoaded(){
    console.log("modelLoaded");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
    }
}