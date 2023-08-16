import Icon from "./Icon";
import './css/Card.css';

function Card({gameEnd,player,onPlay,index}) {
    let icon = <Icon />
    if(player==='X'){
        icon = <Icon name={"cross"}/>
    }
    else if(player==="O"){
        icon = <Icon name={"circle"}/>
    }
  return (
    <div className='card' onClick={()=> player=="" &&!gameEnd && onPlay(index)}>
        {
            icon
        }
    </div>
  )
}

export default Card