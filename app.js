// Text to Speech Inputs
let textArea = document.getElementById("text")
let speechToTextBtn = document.getElementsByTagName("button")[0]
let speechSpeed = document.getElementById("speech-speed")
let showSpeechSpeed = document.getElementById("speech-speed-value")
let changeVoiceSelector = document.getElementById("change-voice")
let voiceList =[]
let read = new SpeechSynthesisUtterance()

// Speech to Text
let startRecordingBtn = document.getElementsByTagName("button")[1]
let stopRecordingBtn = document.getElementsByTagName("button")[2]
let showVoiceRecogantionArea = document.getElementById("collected-text")
let recordingLanguage = document.getElementById("recording-language")
//Withouth following snippet SpeechRecognation() is not defined
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()


//------------------------------Section1: Text to Speech Code------------------------------

// Without this snippet getVoices() return null array
window.onload = function() {
   speechSynthesis.getVoices()
}

//Main events
setTimeout(showVoices, 50)
speechSpeed.addEventListener("mousemove", function() {
    showSpeechSpeed.innerHTML = speechSpeed.value
})
speechToTextBtn.addEventListener("click", textToSpeach)


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

//------------------------------Section 2: Speech to Text------------------------------

startRecordingBtn.addEventListener("click", function() {
    recognition.onerror = function(event){alert(event.error)}
    recognition.onend = function(){recognition.start()}
    let collectedText = ""
    recognition.onresult = function(event){
        if(!event){
            console.log("a")
        } else {
            console.log("b")
        }

        if(event.results.length > 0){
            collectedText += " " +event.results[0][0].transcript
            showVoiceRecogantionArea.value = collectedText
        }
    }
    recognition.lang = recordingLanguage.value
    recognition.start()
})

stopRecordingBtn.addEventListener("click", function(){
    recognition.onend = function(){recognition.stop()}
    recognition.stop()
})