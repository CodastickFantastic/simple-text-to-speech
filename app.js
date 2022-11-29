let textArea = document.getElementById("text")
let activeVoiceBtn = document.getElementsByTagName("button")[0]
let voiceLang = document.getElementById("txt-lang")
let speechSpeed = document.getElementById("speech-speed")
let showSpeechSpeed = document.getElementById("speech-speed-value")

speechSpeed.addEventListener("mousemove", function() {
    showSpeechSpeed.innerHTML = speechSpeed.value
})
activeVoiceBtn.addEventListener("click", textToSpeach)


function textToSpeach(){
    let read = new SpeechSynthesisUtterance()
    read.text = textArea.value
    read.lang = voiceLang.value
    read.rate = speechSpeed.value
    speechSynthesis.speak(read)
}