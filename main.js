// <javascript>
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
  document.getElementById("text_box").innerHTML = " ";
  recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML = content;

    console.log(content);

    if (content == "take my selfie") {
      speak(); 
      console.log("taking selfie ----")
    }
    
}

function speak() {
  var synth = window.speechSynthesis;
  SpeekData = " taking your selfie in 5 ,,, 4 ,,, 3 ,,, 2,,, 1  and ,, click";

  var UtterThiss = new SpeechSynthesisUtterance(SpeekData);

  synth.speak(UtterThiss);
  Webcam.attach(camera);
  setTimeout(function()
  {
     takeSnapshot();
    save();
  },
  5000
  );
}

camera = document.getElementById("camera");
Webcam.set({

  width:400,
  height:300,
  
  image_format:'png',
  png_quality:90
});

function takeSnapshot() {
  
  Webcam.snap(function (data_uri)
  {
    document.getElementById("result").innerHTML = '<img id = "selfie_img" src = "'+ data_uri +'"/>';
  }
  );
}

function save(){

  link = document.getElementById("link");
  image = document.getElementById("selfie_img").src;

  link.href = image;
  link.click();
}
// </javascript>