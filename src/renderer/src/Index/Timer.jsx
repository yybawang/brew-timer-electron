import React from 'react';
import {wait} from "../utils/helper";

const Timer = ({seconds, setSeconds}) => {
  const [hour, setHour] = React.useState('00');
  const [minute, setMinute] = React.useState('00');
  const [second, setSecond] = React.useState('00');
  const [pause, setPause] = React.useState(false);
  const hourRef = React.useRef(hour);
  const minuteRef = React.useRef(minute);
  const secondRef = React.useRef(second);

  hourRef.current = hour;
  minuteRef.current = minute;
  secondRef.current = second;

  React.useEffect(() => {
    if(seconds <= 0){
      setHour('00');
      setMinute('00');
      setSecond('00');
      return;
    }
    pause || start();
  }, [seconds, pause]);

  async function start(){
    let hours = ''+Math.floor(seconds / 60 / 60);
    let minutes = ''+Math.floor((seconds - hours * 3600) / 60);
    let secs = ''+(seconds % 60);
    setHour(hours.padStart(2, '0'));
    setMinute(minutes.padStart(2, '0'));
    setSecond(secs.padStart(2, '0'));
    await wait(1000);
    setSeconds(val => val - 1)
  }

  function toggle(){
    seconds > 0 && setPause(val => !val);
  }

  return (
    <div className={'h-72 w-full bg-gray-500 flex items-center justify-center'} onClick={() => toggle()}>
      <div className={'timer bg-white font-medium flex justify-center items-center'} style={{width: 240}}><span>{hourRef.current}</span></div>
      <div className={'timer text-gray-400'}><span>:</span></div>
      <div className={'timer bg-white font-medium flex justify-center items-center'} style={{width: 240}}><span>{minuteRef.current}</span></div>
      <div className={'timer text-gray-400'}><span>:</span></div>
      <div className={'timer bg-white font-medium flex justify-center items-center'} style={{width: 240}}><span>{secondRef.current}</span></div>
    </div>
  );
};

export default Timer;
