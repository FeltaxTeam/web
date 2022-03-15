import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";

export default function Navigate(props:{to:string}){
  const navigate = useNavigate();
  useEffect(()=>{
    navigate(props.to ?? '/');
  }, []);
  return <></>;
}