import './book.css'
import React from 'react';
import { Tabs } from 'antd';
import Future from '../future/future';
import Completed from '../completed/completed';
import Going from '../going/going';
export default function Book(){

    const items = [
        {
          key: '1',
          label: '未来时',
          children: <Future></Future>
        },
        {
          key: '2',
          label: '已完成',
          children: <Completed></Completed>
        },
        {
          key: '3',
          label: '进行中',
          children: <Going></Going>
        },
    ]

    const onChange = (key) => {
        console.log(key);
      };
    return(
        <>
        <div className='book-head'>
            <div className="book-head-title">预订</div>
            <div className='book-head-search-icon' onClick={()=>{window.location.href='/search'}}></div>
        </div>

      



 <Tabs defaultActiveKey="1" items={items} onChange={onChange} centered={true} tabBarGutter={50} />















        </>
           )
}