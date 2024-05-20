import './clock.css';
import React from 'react';

export default function Clock(){
    return(
        <div>
            <div className="arrow" onClick={()=>{window.history.back()}}></div>
            <div className='inform'>通知</div>
            <div className='today'>今天</div>
            <div className='today1'>
                <div className='pay'></div>
                <div className='message0'>
                    <div className='message1'>付款成功！</div>
                    <div className='message2'>在Portley预订车位成功</div>
                </div>               
            </div>
            <div className='today2'>
            <div className='cancel'></div>
                <div className='message0'>
                    <div className='message1'>停车预订取消</div>
                    <div className='message2'>您已取消在Gouse停车</div>
                </div>
            </div>
            <div className='yesterday'>昨天</div>
            <div className='yesterday1'>
                <div className='pay1'></div>
                <div className='message0'>
                    <div className='message1'>2步验证成功</div>
                    <div className='message2'>Google Authenticator设置成功</div>
                </div>               
            </div>
            <div className='yesterday2'>
            <div className='cancel1'></div>
                <div className='message0'>
                    <div className='message1'>连接成功！</div>
                    <div className='message2'>钱包已连接到农业银行</div>
                </div>
            </div>
            <div className='ago'>2024年5月17号</div>
            <div className='ago1'>
            <div className='register'></div>            
                <div className='message0'>
                    <div className='message1'>验证成功！</div>
                    <div className='message2'>用户验证完成</div>
                </div>
            </div>
            <div className='ago2'></div>

            
            </div>
        
            

        
    )
}