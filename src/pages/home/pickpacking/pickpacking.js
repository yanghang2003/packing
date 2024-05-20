import './pickpacking.css'



export default function Pickpacking(){
    return(
        <>
        <div className='pick-head'>
           <div className="arrow" onClick={()=>{window.location.href='/detail'}}></div>
            <div className='inform1'>选择位置</div>
        </div>
        <div className='pick-floor'>
            <div className='pick-1'>1楼</div>
            <div className='pick-2'>2楼</div>
            <div className='pick-3'>3楼</div>
        </div>
        <div className='pick-line'></div>
        <div className='pick-slect'>
            <div className='pick-groub1'>
                <div className='pick-left1'><div className='pick-car1'></div></div><div className='pick-right1'><div className='pick-car4'>A04</div></div>
                <div className='pick-left2'><div className='pick-car2'>A02</div></div><div className='pick-right2'><div className='pick-car5'></div></div>
                <div className='pick-left3'><div className='pick-car3'>A03</div></div><div className='pick-right3'><div className='pick-car6'></div></div>
            </div>
            <div className='middle-line'></div>
            <div className='pick-groub2'>
                <div className='pick-left4'><div className='pick-car7'></div></div><div className='pick-right4'><div className='pick-car10'>A10</div></div>
                <div className='pick-left5'><div className='pick-car8'></div></div><div className='pick-right5'><div className='pick-car11'></div></div>
                <div className='pick-left6'><div className='pick-car9'>A09</div></div><div className='pick-right6'><div className='pick-car12'></div></div>
            </div>
        </div>

        <div className='pick-continue' onClick={()=>{window.location.href = '/clock'}}>继续</div>
        </>
    )
}