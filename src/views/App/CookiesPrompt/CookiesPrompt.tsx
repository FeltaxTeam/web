import React from "react";
import './CookiesPrompt.scss';

export default function CookiesPrompt() {
  const hide = async () => {
    document.cookie = 'cookieConsent=true'
    document.getElementById('cookies').style.transform = 'translateY(120%)';
    document.getElementById('cookies').style.visibility = 'hidden';
  }
  const decline = async () => {
    document.cookie = 'cookieConsent=false'
    document.getElementById('cookies').style.transform = 'translateY(120%)';
    document.getElementById('cookies').style.visibility = 'hidden';
  }

  if (document.cookie.includes('cookieConsent=true')) {
    console.warn('This user does not have the cookies accepted!!!');
    return <></>;
  }

  return (
    <>
      <React.Fragment>
        <div id="cookies">
          <div className="text">
            <p>
              By continuing to use this site you agree to our use of cookies.
            </p>
          </div>
          <div className="buttons">
            <button className="accept" onClick={hide}>Accept</button>
            <button className="decline" onClick={decline}> Decline</button>
          </div>
        </div>
      </React.Fragment>
    </>
  )
}