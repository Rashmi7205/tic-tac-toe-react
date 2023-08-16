import { useState } from "react"
import Card from "./Card";
import './css/Grid.css';
import checkWinnerIs from "../helpers/checkWinneris";


function Grid({numberOfGrid}) {
    const [board,setBoard] = useState(Array(numberOfGrid).fill(""));
    const [turn,setTurn] = useState(true) // true=>X ,false=>O
    const [winner,setWinner] = useState(null);
    // const []

    const play = (index)=>{
        if(turn===true){
            board[index]="X";
        }
        else{
            board[index]="O"
        }
        const win = checkWinnerIs(board,turn?"X":"O");

        if(win){
            setWinner(win);
        }
        setBoard([...board]);
        setTurn(!turn);
    }

    function reset(){
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberOfGrid).fill(""));
    }

    return (
    <>
    <div>
        {
            winner && (
                <>
                 <h1 className="turn-highlight">Winner is {winner}</h1>
                <button className="reset" onClick={reset}>Reset Game</button>
                </>
               
            )
        }
    </div>
    <h1 className="turn-highlight">Now is {turn?"X":"O"} turn</h1>
    <div className="grid">
        {
            board.map((ele,ind)=><Card key={ind} 
            gameEnd={winner?true:false}
            player={ele} onPlay={play} index={ind}/>)
        }        
     </div>
    </>
    
  )
}

export default Grid