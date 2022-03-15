import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router, useSearchParams } from 'react-router-dom';

export default function Invite() {
  useEffect(() => {
    window.location.href = "https://discord.com/api/oauth2/authorize?client_id=568435616153337916&permissions=1644972474359&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2F&response_type=code&scope=bot%20applications.commands%20identify";
  }, []);
  return (<></>);
}