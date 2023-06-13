import React, { useEffect } from 'react';

export default function Invite() {
  useEffect(() => {
    window.location.href = "https://discord.com/oauth2/authorize?client_id=568435616153337916&permissions=8&redirect_uri=https%3A%2F%2Ffeltax.xyz%2F&response_type=code&scope=applications.commands%20bot%20";
  }, []);
  return (<></>);
}