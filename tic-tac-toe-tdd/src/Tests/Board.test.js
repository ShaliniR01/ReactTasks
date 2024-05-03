import Board from "../Components/Board";
import { screen, render, fireEvent } from "@testing-library/react";

describe('Board Component',()=>{

    it('should display the game board', () => {
        let squares = Array(9).fill(null);
        onPlay = jest.fn();
        render(<Board xIsNext={true} squares={squares} onPlay={onPlay}/>);
        const gameboard = screen.getByTestId('gameboard');
        expect(gameboard).toBeInTheDocument();
    });

    it('should display 9 squares ', () => {
        let squares = Array(9).fill(null);
        onPlay = jest.fn();
        render(<Board xIsNext={true} squares={squares}/>);
        const square = screen.getAllByTestId('square');
        expect(square.length).toBe(9);
    });

    it('should display the status', () => {
        let squares = Array(9).fill(null);
        onPlay = jest.fn();
        render(<Board xIsNext={true} squares={squares} onPlay={onPlay}/>);
        const status = screen.getByTestId('status');
        expect(status).toBeInTheDocument();
    });

    it('should not have any values in the squares before clicking', () => {
        let squares = Array(9).fill(null);
        onPlay = jest.fn();
        render(<Board xIsNext={true} squares={squares} onPlay={onPlay}/>);
        const squareButton = screen.getAllByTestId('square');
        for(let i=0;i<9;i++){
          expect(squareButton[i].textContent).toBe('');
      }
    });

    it('should call the function onPlay with the square value', () => {
        let squares = Array(9).fill(null);
        onPlay = jest.fn();
        render(<Board xIsNext={true} squares={squares} onPlay={onPlay}/>);
        const square = screen.getAllByTestId('square');
        fireEvent.click(square[0]);
        squares[0]='X';
        expect(onPlay).toHaveBeenCalledWith(squares);
    });

    it('should call the function onPlay correct number of times ', () => {
        let squares = Array(9).fill(null);
        onPlay = jest.fn();
        render(<Board xIsNext={true} squares={squares} onPlay={onPlay}/>);
        const square = screen.getAllByTestId('square');
        fireEvent.click(square[0]);
        render(<Board xIsNext={true} squares={squares} onPlay={onPlay}/>);
        const square1 = screen.getAllByTestId('square');
        fireEvent.click(square1[1]);
        expect(onPlay).toHaveBeenCalledTimes(2);
    });

    it('should display X and O in the board', () => {
        onPlay = jest.fn();
        let squares = ['X' , null, null, 'O' , null, null, null, null, null];
        render(<Board xIsNext={true} squares={squares} onPlay={onPlay}/>);
        const squareButton = screen.getAllByTestId('square');
        expect(squareButton[0].textContent).toBe('X');
        expect(squareButton[3].textContent).toBe('O');
    });

    it('should display Next Player - X at the begining', () => {
        let squares = Array(9).fill(null);
        onPlay = jest.fn();
        render(<Board xIsNext={true} squares={squares} onPlay={onPlay}/>);
        let status = screen.getByTestId('status');
        expect(status).toHaveTextContent('Next Player: X');
    });

    it('should display the winner as status after the winner declaration', () => {
        let squares = ['X', 'X', 'X', null, null, null, null, null, null];
        onPlay = jest.fn();
        render(<Board xIsNext={true} squares={squares} onPlay={onPlay}/>);
        const status = screen.getByTestId('status');
        expect(status).toHaveTextContent('Winner: X');
    });

})
