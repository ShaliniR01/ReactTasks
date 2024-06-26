export default function Square({value, onSquareClick}){

    return(
      <button className="square" data-testid="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }