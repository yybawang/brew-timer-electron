import React from 'react';
import {Steps, Toast} from "@douyinfe/semi-ui";
import {STATUSES} from "./const";
import Step1 from "./Step1";
import Timer from "./Timer";

const Index = () => {
  const [step, setStep] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  function start(id){
    if(seconds > 0){
      Toast.warning('倒计时还未完成');
      return;
    }
    setStep(id);
    setSeconds(3600);
  }

  function reset(){
    setSeconds(0);
  }

  return (
    <div className={'h-screen flex items-stretch'}>
      <div className={'basis-2/3 bg-gray-200'}>
        <div className={'h-full flex flex-col items-center justify-around'}>
          <div className={'flex w-full justify-around'}>
            <div className={['action', STATUSES[0].bg].join(' ')} onClick={() => start(0)}><div>开始糖化</div></div>
            <div className={['action', STATUSES[1].bg].join(' ')} onClick={() => start(1)}><div>开始煮沸</div></div>
          </div>

          <Timer seconds={seconds} setSeconds={setSeconds} />
          <div className={['action bg-gray-400 text-white'].join(' ')} onClick={() => reset()}><div>重置计时</div></div>
        </div>
      </div>
      <div className={['basis-1/3 p-4', STATUSES[step].bg].join(' ')}>
        <div className={'flex justify-center text-xl'}>{STATUSES[step].name}</div>
        <div className={'mt-4'}><Step1 seconds={seconds} /></div>
      </div>
    </div>
  );
};

export default Index;
