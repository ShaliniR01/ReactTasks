import Square from "../Components/Square";
import { screen, render, fireEvent } from "@testing-library/react";

describe('Square Component',()=>{

    it('should have the value in the square button ', () => {
        onSquareClick = jest.fn();
        render(<Square value='X' onSquareClick={onSquareClick} />);
        const square = screen.getByTestId('square');
        expect(square).toHaveTextContent('X');
    });

    it('should call the function onSquareClick', () => {
        onSquareClick = jest.fn();
        render(<Square value='X' onSquareClick={onSquareClick} />);
        const square = screen.getByTestId('square');
        fireEvent.click(square);
        expect(onSquareClick).toHaveBeenCalled();
    });

    it('should call the function onSquareClick correct number of times ', () => {
        onSquareClick = jest.fn();
        render(<Square value='X' onSquareClick={onSquareClick} />);
        fireEvent.click(screen.getByTestId('square'));
        fireEvent.click(screen.getByTestId('square'));
        expect(onSquareClick).toHaveBeenCalledTimes(2);
    });
})
