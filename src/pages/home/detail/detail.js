import './detail.css'
import React from 'react';
import { Radio} from 'antd';
import { Image } from 'antd';
export default function Detail(){
   
   
    return(
        <>
        <div>
           <div className="arrow" onClick={()=>{window.history.back()}}></div>
            <div className='inform1'>停车场细节</div>
        </div>
  <Image
    width={'100%'}
    className='tu'
    src='https://news.winshang.com/zt/ynzt/2015/tingchechang/images/02.jpg'/>

<div className='lao'>
<div className='lao11'>老君洞道观停车场</div>
    <div className='lao22'>重庆市南岸区南山街道老君坡29号老君洞内</div>
    </div>
    <div className='shou'></div>
    <Radio.Button value="a" checked='true' className='Radio-a'>1.2km</Radio.Button>
    <Radio.Button value="a" checked='true' className='Radio-b'>8:00am - 10:00pm</Radio.Button>
    <Radio.Button value="a" checked='true' className='Radio-c'>拥挤</Radio.Button>

    <p className='describle'>描述</p>
    <div className='describle1'>老君洞道观停车场位于山脚下，环境幽静，交通便利。停车场内设有宽敞的停车位，方便游客前来参观游览。在这里，您可以欣赏到周围的自然风光，感受道教文化的氛围。
            停车场周边有许多餐馆和商店，提供各种美食和纪念品，供您品尝和购买。此外，停车场附近还有公交车站和地铁站，方便您前往市区或其他景点。
         总之，老君洞道观停车场是一个非常适合前来参观游览的地方，不仅交通便利，而且环境优美，是您不容错过的选择。</div>
<div className='pay2'>
    <p className='pa2'>$2.00</p>
    <p className='patime'>每小时</p>
</div>
<div>
    <div className='cacel'>取消</div>
    <div className='yud' onClick={()=>{window.location.href='/calendar'}}>预订</div>
</div>
        </>
     
    )
}