import './svt.css'
import ChevronRight from './../img/ChevronRight.svg'
import MessageSquareText from './../img/MessageSquareText.svg'
import PhoneCall from './../img/PhoneCall.svg'
import telegram_svgrepo from './../img/telegram_svgrepo.com.svg'

function SVT () {
  return (
    <div className='SVT'>
        <div className='SMS'><img src={MessageSquareText}/><p>SMS OTP</p><a href=''><img src = {ChevronRight}/></a></div>
        <div className='PhoneCall'><img src={PhoneCall}/><p>Voice OTP</p><a href=''><img src = {ChevronRight}/></a></div>
        <div className='Telegram'><img src={telegram_svgrepo}/><div className='TelegramText'>Telegram OTP<p>Your Telegram number must match the number registered on 247Bet</p></div><a href=''><img src = {ChevronRight}/></a></div>
    </div>
  )
}

export default SVT;