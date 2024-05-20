import './completed.css'
import { Empty } from 'antd';
export default function Completed(){
    return(
        <>
          <div className="go-content">
            <div className='completd-image1'></div>
            <div className='gotent'>
                <div className='go-name'>南山停车场</div>
                <div className='go-time'>昨天8:00am-4:00pm</div>
                <div className='go-detail'>
                    <div className='go-pay'>$18.12</div>
                    <div className='go-tatal-time'>/ 8 hour</div>
                    <div className='completed1'>完成</div>
                </div>

            </div>
        </div>
        <div className="go-content">
            <div className='completd-image2'></div>
            <div className='gotent'>
                <div className='go-name'>老火锅停车场</div>
                <div className='go-time'>5月10号10:00am-4:00pm</div>
                <div className='go-detail'>
                    <div className='go-pay'>$12.13</div>
                    <div className='go-tatal-time'>/ 6 hour</div>
                    <div className='completed1'>完成</div>
                </div>

            </div>
        </div>
        
        
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
        </>
    )
}