// establish that browser has speech recognition
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Creating new instances
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';
const synthesis = window.speechSynthesis;

startSpeechRecognition = (e) => {
  console.log("start speech");
  // define speech recognition settings
  recognition.continuous = true;

  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

    console.log(transcript);
    speecharea.innerHTML = transcript;
  });
  recognition.start();
};

stopSpeechRecognition = (e) => {
  console.log("stop speech");
  recognition.stop();
};

clearSpeech = (e) => {
  let node = document.getElementById("speecharea");
  node.innerHTML = "";
}

replaySpeech = (e) => {
  console.log("speech synthesis");
  let text = new SpeechSynthesisUtterance(document.getElementById("speecharea").innerHTML);
  synthesis.speak(text);
}
