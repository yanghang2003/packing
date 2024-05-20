import './save.css';

import {Empty} from 'antd'
export default function Save(){


const saveList = [
    {
     contbig:'老君洞道观停车场',
     contsmall:'25000+收藏',
    },
    {
    contbig:'江北区观音桥停车场',
    contsmall:'5000+收藏',},
    {
    contbig:'中央广场停车场',
    contsmall:'3000+收藏',},
    {
    contbig:'泮溪路停车场',
    contsmall:'2000+收藏',},
    {
    contbig:'阳光花城停车场',
    contsmall:'15000+收藏',}
]
    return(
        <>
        <div className="save-head">收藏</div>
        <div className="save-search">
            <div className="save-icon"></div>
            <input className="save-input" placeholder='搜索'/>
        </div>

        
        

<div>
    {saveList.map((item,index)=>{
        return(
            <div className='save-content'>
               <div className={'save-content-image' + index}></div>
            <div className='save-contents'>
                <div className='save-contents-big'>{item.contbig}</div>
                <div className='save-contents-small'>{item.contsmall}</div>
            </div>
            <div className='save-contents-icon'></div>
        </div>
        )
    })}
</div>
<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
        </>
    )
    
}