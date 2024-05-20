import './calendar.css'

import React from 'react';
import { Calendar, theme ,Slider,TimePicker} from 'antd';


export default function Calendar1(){

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };

      const { token } = theme.useToken();
      const wrapperStyle = {
        width: 333,
        height:352,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
        marginLeft:20,
      };
    return(
        <>
        <div style={wrapperStyle}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
      <div className='duration'>持续时间</div>
      <div className='duration1'>
      <Slider defaultValue={10}  />
      </div>
      <div className='duration'>选择时间</div>
    <div className='selecter-time'>
    <TimePicker.RangePicker />
    </div>
    <div className='duration'>全部</div>
      <div className='total'>
        <span className='total-pay'>$8.00</span>
        <span className='total-time'>/ 4 hours</span>
      </div>
<div className='continue' onClick={()=>{window.location.href = '/Pickpacking'}}>继续</div>
      </>
    )
}





