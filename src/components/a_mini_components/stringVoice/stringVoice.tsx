import React, { } from 'react';
import './stringVoice.sass'
const StringVoice = ({ children, className, text }: { children: any, className?: any, text: string }) => {
  return (
    <div className={`StringVoice flex ${className}`}>
      <i
        style={{ position: "relative", top: "-3px" }}
        className="fs-5 far fa-play-circle mx-1 text-primary cursor-pointer"
        onClick={() => {
          let speech = new SpeechSynthesisUtterance();
          speech.text = text
          speech.lang = "en"
          window.speechSynthesis.speak(speech);
        }}
      ></i>
      {children}
    </div>
  )
}
export default StringVoice
