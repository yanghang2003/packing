import './home.css'
import { Button, Drawer,Carousel} from 'antd';
import React, { useState } from 'react';
export default function Home() {

    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('bottom');
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };

    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };


    return (
        <div className='main'>
            <div className='office'></div>
            <div className='fitness'></div>
             <div className='station'></div>
             <div className='hosipital'></div>
             <div className='layout'></div>
            <div className='station'></div>
            <div className='search' onClick={()=>{window.location.href='/search'}}></div>
            <div className='clock' onClick={()=>{window.location.href='/clock'}}></div>
            <div className='circle1'></div>
            <div className='circle2'></div>
            <div className='car'></div>
            <div className='roadline' ></div>
            <div className='packing1' onClick={showDrawer}></div>
            <div className='packing2'></div>
            <div className='packing3'></div>
            <div className='packing4'></div>

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
        </div>
    );
}