import React from 'react';
import {Steps} from "@douyinfe/semi-ui";

const Step1 = ({seconds}) => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    let num = 6 - Math.ceil(seconds / 60 / 10);
    setCurrent(num + 2);
  }, [seconds]);

  return (
    <Steps direction={'vertical'} type={'basic'} current={current} onChange={setCurrent}>
      <Steps.Step title={'自来水烧开'} description={'用于去氯气（消毒剂），桶内会有水垢'} />
      <Steps.Step title={'静置降温'} description={'等待降温到70°C'} />
      <Steps.Step title={'放入麦芽物'} description={'控制温度在 65°C - 70°C之间'} />
      <Steps.Step title={'搅拌一下.'} />
      <Steps.Step title={'搅拌一下..'} />
      <Steps.Step title={'搅拌一下...'} />
      <Steps.Step title={'时间快到了'} description={'吊出大麦网袋，持续2分钟沥出剩余麦芽汁'} />
    </Steps>
  );
};

export default Step1;
