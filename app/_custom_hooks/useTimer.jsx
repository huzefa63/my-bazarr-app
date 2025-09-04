'use client';

import { useEffect, useState } from "react";

function useStopwatch({minutes = 5, hours = false, timerEndsText = ''}) {
    const [seconds,setSeconds] = useState(minutes * 60);
    let [timer,setTimer] = useState('');
    useEffect(() => {
        let interval;

            interval = setInterval(() => {
              setSeconds((sec) => {
                if(sec === 0){
                    clearInterval(interval);
                    return timerEndsText;
                }
                return sec - 1;
              });
            }, 1000);

        return () => {
            clearInterval(interval);
            setSeconds(minutes * 60);
            setTimer('');
        }
    },[])

    useEffect(() => {
        const second = `${seconds % 60}`.padStart(2,'0');
        const minute = `${Math.floor((seconds % 3600) / 60)}`.padStart(2,'0');
        const hour = `${Math.floor(seconds / 3600)}`.padStart(2,'0');
        const string = `${hours ? `${hour}:`:''}${minute}:${second}`;
        setTimer(string);
    },[seconds])

    return {timer};
}

export default useStopwatch;