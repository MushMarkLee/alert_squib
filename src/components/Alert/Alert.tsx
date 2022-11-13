import React, {Dispatch, useEffect, SetStateAction} from "react";
import './Alert.scss';

interface Props {
    title:string;
    text:string;
    cookies: boolean;
    setCookiesOn: Dispatch<SetStateAction<boolean>>;
    onSomething: Function;
}

export const Alert: React.FC<Props> = ({title, text,cookies, setCookiesOn, onSomething}) => {

    const alert = () =>{
        let element = document.getElementById('popup-inner')
        // @ts-ignore
        element.style.animation = "popFromTop 0.5s ease-in-out";
        const timer = setTimeout(() => {
            setCookiesOn(true);
        }, 500);
        return () => clearTimeout(timer);
    }

    if (cookies) return null
    return(
      <div className='popup'>
        <div id='popup-inner'>
            <h3 id='title'>{title}</h3>
            <p id='text'>{text}</p>
            <button className='ok-btn' onClick={() => alert()}> Okay </button>
            <button className='cs-btn' onClick={() => onSomething()}>Anpassen</button>
        </div>
      </div>
    )

}