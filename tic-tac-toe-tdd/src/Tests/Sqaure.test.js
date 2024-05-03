import Square from "../Components/Square";
import { screen, render, fireEvent } from "@testing-library/react";

describe('Square Component',()=>{

    it('should have the value ', () => {
        onSquareClick = jest.fn();
        render(<Square value='X' onSquareClick={onSquareClick} />);
        const square = screen.getByTestId('square');
        expect(square).toHaveTextContent('X');
    });

    it('should call the function ', () => {
        onSquareClick = jest.fn();
        render(<Square value='X' onSquareClick={onSquareClick} />);
        const square = screen.getByTestId('square');
        fireEvent.click(square);
        expect(onSquareClick).toHaveBeenCalled();
    });

    it('should call the function correct number of times ', () => {
        onSquareClick = jest.fn();
        render(<Square value='X' onSquareClick={onSquareClick} />);
        const square = screen.getAllByTestId('square');
        fireEvent.click(square[0]);
        render(<Square value='X' onSquareClick={onSquareClick} />);
        const square1 = screen.getAllByTestId('square');
        fireEvent.click(square1[1]);
        expect(onSquareClick).toHaveBeenCalledTimes(2);
    });
})
