let textArea = document.getElementById("text")
let activeVoiceBtn = document.getElementsByTagName("button")[0]
let speechSpeed = document.getElementById("speech-speed")
let showSpeechSpeed = document.getElementById("speech-speed-value")
let changeVoiceSelector = document.getElementById("change-voice")
let voiceList =[]

// Without this snippet getVoices() return null array
window.onload = function() {
   speechSynthesis.getVoices()
}
    
setTimeout(showVoices, 50)
speechSpeed.addEventListener("mousemove", function() {
    showSpeechSpeed.innerHTML = speechSpeed.value
})
activeVoiceBtn.addEventListener("click", textToSpeach)


function showVoices(){
    voiceList = speechSynthesis.getVoices()

    for(let i = 0; i < voiceList.length; i++){
        let option = document.createElement("option")
            option.setAttribute("name", voiceList[i].name)
            option.innerHTML = voiceList[i].name
            changeVoiceSelector.append(option)
    }
}

function textToSpeach(){
    let read = new SpeechSynthesisUtterance()
    let voice = changeVoiceSelector.value
    
    for(let i = 0; i < voiceList.length; i++){
        if (voiceList[i].name === voice){
            read.voice = voiceList[i]
        }
    }

    read.text = textArea.value
    read.rate = speechSpeed.value
    speechSynthesis.speak(read)
}
