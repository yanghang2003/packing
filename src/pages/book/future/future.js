import './future.css'
import { Empty } from 'antd';
export default function Future(){
    return(
        <>
        <div className="go-content">
            <div className='go-image'></div>
            <div className='gotent'>
                <div className='go-name'>老君洞道观停车场</div>
                <div className='go-time'>明天0:00am-6:00am</div>
                <div className='go-detail'>
                    <div className='go-pay'>$10.48</div>
                    <div className='go-tatal-time'>/ 6 hour</div>
                    <div className='go-cancel'>取消</div>
                </div>

            </div>
        </div>
        <div className="go-content">
            <div className='go-image1'></div>
            <div className='gotent'>
                <div className='go-name'>观音桥停车场</div>
                <div className='go-time'>明天10:00am-4:00pm</div>
                <div className='go-detail'>
                    <div className='go-pay'>$17.13</div>
                    <div className='go-tatal-time'>/ 6 hour</div>
                    <div className='go-cancel'>取消</div>
                </div>

            </div>
        </div>
        <div className="go-content">
            <div className='go-image2'></div>
            <div className='gotent'>
                <div className='go-name'>沙坪坝停车场</div>
                <div className='go-time'>后天8:00am-3:00pm</div>
                <div className='go-detail'>
                    <div className='go-pay'>$21.75</div>
                    <div className='go-tatal-time'>/ 7 hour</div>
                    <div className='go-cancel'>取消</div>
                </div>
            </div>
        </div>
        <div className="go-content">
            <div className='go-image3'></div>
            <div className='gotent'>
                <div className='go-name'>朝天门地下停车场</div>
                <div className='go-time'>5月28号8:00am-6:00pm</div>
                <div className='go-detail'>
                    <div className='go-pay'>$24.38</div>
                    <div className='go-tatal-time'>/ 10 hour</div>
                    <div className='go-cancel'>取消</div>
                </div>

            </div>
        </div>
        <div className="go-content">
            <div className='go-image4'></div>
            <div className='gotent'>
                <div className='go-name'>科技城地下停车场</div>
                <div className='go-time'>5月29号8:00am-6:00pm</div>
                <div className='go-detail'>
                    <div className='go-pay'>$14.18</div>
                    <div className='go-tatal-time'>/ 10 hour</div>
                    <div className='go-cancel'>取消</div>
                </div>

            </div>
        </div>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
        </>
    )
}