import './profile.css'

export default function Profile(){
    return(
        <>
        <div>
        <div className="profile-title">简介</div>
        </div>
        <div className="proflie-headimage"></div>
        <div className="profile-name">小白</div>
        <div className="profile-email">ssy@eamil.com</div>
        <div className='profile-content'>
            <div className='edit'>
                <div className='edit-icon1'></div>
                <div className='edit-cont'>编辑简介</div>
            </div>
            <div className='edit'>
                <div className='edit-icon2'></div>
                <div className='edit-cont'>支付</div>
            </div>
            <div className='edit'>
                <div className='edit-icon3'></div>
                <div className='edit-cont' onClick={()=>{window.location.href='/clock'}}>提醒</div>
            </div>
            <div className='edit'>
                <div className='edit-icon4'></div>
                <div className='edit-cont'>安全</div>
            </div>
            <div className='edit'>
                <div className='edit-icon5'></div>
                <div className='edit-cont'>帮助</div>
            </div>
            <div className='edit'>
                <div className='edit-icon6'></div>
                <div className='edit-cont'>退出</div>
            </div>
        </div>

        </>
    )
}