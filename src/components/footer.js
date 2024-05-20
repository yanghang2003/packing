import React from 'react';

import {Layout, Menu} from 'antd';

const { Footer } = Layout;



const items = [
  {
    "key": "1",
    "label": "Home",
    "path":"/home1"
  },
  {
    "key": "2",
    "label": "Saved",
    "path":"/save2"
  },
  {
    "key": "3",
    "label": "Booking",
    "path":"/book3"
  },
  {
    "key": "4",
    "label": "Profile",
    "path":"/profile4"
  }
]
const NavFooter = () => {
  const jude = window.location.href;
  const part = jude.split("/").pop(); 
  const extractedPart = part.slice(-1);
  console.log(extractedPart)



  return (    
      <Footer
      
          style={{
          position: 'fixed',
          height:40,
          padding:0,
          bottom: 0,
          zIndex: 3,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Menu mode="horizontal" defaultSelectedKeys={['2']} style={{display: 'flex',width:'100%',height:40}}>
        {items.map((item, index) => (
        <div onClick={() => {
          window.location.href = item.path
        }} key={item.key}  style={{ width: '25%', textAlign:'center',color:extractedPart===item.key? 'blue':'black' }}>
        {item.label}
        </div>
        ))}
        </Menu>
      </Footer>
    
  );
};
export default NavFooter;