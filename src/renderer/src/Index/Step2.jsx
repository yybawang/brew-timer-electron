import React from 'react';
import {Steps} from "@douyinfe/semi-ui";

const Step2 = ({seconds}) => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    let num = 6 - Math.ceil(seconds / 60 / 10);
    setCurrent(num);
  }, [seconds]);

  return (
    <Steps direction={'vertical'} type={'basic'} current={current} onChange={setCurrent}>
      <Steps.Step title={'开始煮沸'} description={'煮开水，但不要煮成鼓水'} />
      <Steps.Step title={'搅拌一下.'} />
      <Steps.Step title={'搅拌一下..'} />
      <Steps.Step title={'放入啤酒花'} description={'卡斯卡特15g'} />
      <Steps.Step title={'搅拌一下.'} />
      <Steps.Step title={'放入第二次啤酒花'} description={'卡斯卡特啤酒花10g'} />
      <Steps.Step title={'时间到了'} description={'关火。搅拌勺顺时针旋转，使残渣集中于桶底中心。可选择投放「东肯特」啤酒花然后静置15分钟'} />
    </Steps>
  );
};

export default Step2;
