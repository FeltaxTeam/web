import React from "react";
import './CookiesPrompt.css'

export default function CookiesPrompt() {
  const hide = () => {
    document.getElementById('cookies').style.transform = 'translateY(100%)';
    document.getElementById('cookies').style.visibility = 'hidden';
  }
  return (
    <>
      <React.Fragment>
        <div id="cookies">
          <div className="text">
            <p>
              This website uses cookies to ensure you get the best experience on our website.
            </p>
            <p>
              By continuing to use this site you agree to our use of cookies.
            </p>
          </div>
          <div className="buttons">
            <button className="accept" onClick={hide}>Accept</button>
            <button className="decline">Decline</button>
          </div>
        </div>
      </React.Fragment>
    </>
  )
}