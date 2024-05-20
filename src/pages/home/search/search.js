import React from "react";
import './search.css'
import { useState } from "react";
import {Slider, Button, Drawer,Flex } from 'antd';
import { useEffect } from "react";

export default function Search(){
    
    const [open, setOpen] = useState(false);
    const [show,setShow] = useState([])
    const [a,seta] = useState(0)
    const [placement, setPlacement] = useState('bottom');
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    const [inputValue, setInputValue] = useState("");
    const [inputValueTemp, setInputValueTemp] = useState(""); // 添加一个新的状态变量
 
    function setValue(){
        window.localStorage.setItem(`${inputValueTemp}`,`${inputValueTemp}`);
        setInputValueTemp(inputValue); // 更新新的状态变量让它多更新一次
        // 在新位置创建一个新的盒子      
    }


 
    const [ hasRun ,sethasrun] = useState(false)
  
    useEffect(() => {
      
      console.log(show.length)
      seta(show.length)
      if (!hasRun) {
        for (var key in window.localStorage) {
          if (window.localStorage.hasOwnProperty(key)) {
            if (key === 'token') {
              return;
            } else {
              
              console.log(show[show.length - 1]);
              show.push(window.localStorage[key]);
              const newBox = document.createElement('li');
              newBox.className = 'newBox'; // 设置新盒子的类名
            newBox.style.color = 'rgba(117, 117, 117, 1)';
            newBox.style.width = '33 ** x';
            newBox.style.height = '20px';
            newBox.style.lineHeight="20px";
            newBox.style.fontSize = '1 ** x'
            newBox.innerHTML = `<span class='cha'>${show[show.length - 1]}</span> `
                               
            // 将新盒子添加到父元素中
            document.querySelector('.recode').appendChild(newBox);
            sethasrun(true); // 标记为已经运行过effect
          }
        }
      }
    }}, [open]); //

    return(
        <>
        <div className="search1">
        <div className="search-icon" onClick={()=>{
          setValue();
          window.location.href ='/result';
        }}></div>
            <input className="search-input"      
             value={inputValueTemp} // 使用新的状态变量来设置输入框的值
             onChange={(e) => {setInputValueTemp(e.target.value)
             }}/>
             
            <div className="search-detail" onClick={showDrawer}></div>
        </div>
        <div className="divide"></div>
        <div className="recent">历史记录</div>
        <ul className="recode" style={{
        height: `${a* 20}px`, overflow:'hidden'
        }}></ul>

        <>
      
      <Drawer
        title="筛选"
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        closable={false}
      
      >
        <p>排序</p>
        <Flex gap="small" wrap>
        <Button className="chou1" type="primary">距离</Button>
        <Button className="chou1">名额</Button>
        <Button className="chou1">价钱</Button> 
        </Flex>
        <p>距离</p>
        <Slider defaultValue={10}  />
        <Button className="reset" onClick={onClose}>重置</Button>
        <Button className="apply" type="primary" onClick={onClose}>应用</Button>
        
      </Drawer>
    </>
        </>
    )
}
