import './result.css'
import React, { useState } from 'react';
import { Button, Drawer,Carousel} from 'antd';
export default function Result(){
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('bottom');
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    
const resultList = [
   
    { big:'老君洞道观',
    small:'西门停车场',
    distance:'1.2km',
    price:'$3.22/时'},
    {big:'黄桷垭',
    small:'老街停车场',
    distance:'1km',
    price:'$2.48/时'},
    { big:'南山一棵树景区',
    small:'二号停车场',
    distance:'2km',
    price:'$2.77/时'},
    { big:'龙门浩老街',
    small:'地下停车场',
    distance:'3.3km',
    price:'$1.49/时'},
    { big:'重庆来福士',
    small:'地下停车场',
    distance:'4.6km',
    price:'$4.43/时'},
    { big:'洪崖洞民俗风貌区',
    small:'地下停车场',
    distance:'4.7km',
    price:'$6.41/时'},
    { big:'龙洞坡',
    small:'老火锅停车场',
    distance:'4.8km',
    price:'$2.31/时'},
    { big:'观音桥',
    small:'地铁站2号',
    distance:'9km',
    price:'$ 4.21/时'},
    { big:'观音桥',
    small:'好吃街地下停车场',
    distance:'9.2km',
    price:'$3.48/时'},
    { big:'苹果派二期西',
    small:'沙坪坝区富州路停车场',
    distance:'14km',
    price:'$1.48/时'},
    { big:'兴亚美丽山水东北',
    small:'沙冰路9号',
    distance:'1km',
    price:'$2.48/时'},
    { big:'云水路',
    small:'渝南大道',
    distance:'18km',
    price:'$3.12/时'},
    { big:'红地院东北',
    small:'五红路',
    distance:'19km',
    price:'$1.48/时'},
    { big:'鲁能星城',
    small:'9街区A区南',
    distance:'20km',
    price:'$1.38/时'},
    { big:'渝北区第二人民医院',
    small:'五菱路一号',
    distance:'23km',
    price:'$2.48/时'}
]




  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };




    return(
        <>
        <div className="search1">
        <div className="search-icon"></div>
            <input className="search-input" placeholder='老君洞道观'/>
             
            <div className="search-detail"></div>
        </div>
        <div className="result">结果(1,566)</div>
        <div className='resultlist'>{resultList.map((item)=>{
            return(
                <div className="result1">
                <div className='result-icon' onClick={showDrawer}></div>
                <div className='result-name'>
                    <div className='big'>{item.big}</div>
                    <div className='small'>{item.small}</div>
                </div>
                <div className='result-detail'>
                    <div className='result-distance'>{item.distance}</div>
                    <div className='result-price'>{item.price}</div>
                </div>
            </div>
            )
        })}</div>




 
  
    
      <Drawer
        title="details"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        className='yy'
      >
         <Carousel afterChange={onChange}>
      <div className='contentStyle1'>
    
      </div>
      <div className='contentStyle2'>
     
      </div>
      <div className='contentStyle3'>
      
      </div>
      <div className='contentStyle4'>
   
      </div>
    </Carousel>
    <div className='lao1'>老君洞道观停车场</div>
    <div className='lao2'>重庆市南岸区南山街道老君坡29号老君洞内</div>
    <Button className="reset1" onClick={onClose}>取消</Button>
    <Button className="apply1" type="primary" onClick={()=>{window.location.href = '/detail'}}>细节+ </Button>
      </Drawer>


















        </>
    )
}