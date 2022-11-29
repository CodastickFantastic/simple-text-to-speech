let textArea = document.getElementById("text")
let activeVoiceBtn = document.getElementsByTagName("button")[0]

activeVoiceBtn.addEventListener("click", textToSpeach)

function textToSpeach(){

    let read = new SpeechSynthesisUtterance()
    read.text = textArea.value
    read.lang = "pl-PL"
    read.rate = 1.2
    speechSynthesis.speak(read)
    console.log(read)
}