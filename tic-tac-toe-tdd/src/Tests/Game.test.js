import Game from "../Components/Game";
import { render, screen, fireEvent } from "@testing-library/react";

describe('Game Component',()=>{
    it('should render the button as a gameinfo', () => {
        render(<Game />);
        const gameinfo = screen.getAllByTestId('gameinfo');
        expect(gameinfo.length).toBe(1);
    });

    it('should display the Restart button at the begining', () => {
        render(<Game />);
        const gameinfo = screen.getAllByTestId('gameinfo');
        expect(gameinfo[0].textContent).toBe("Restart");
    });

    it('should display the next gameinfo button after the player started playing', () => {
        render(<Game />);
        const squareButton = screen.getAllByTestId('square');
        fireEvent.click(squareButton[0]);
        const gameinfo = screen.getAllByTestId('gameinfo');
        expect(gameinfo.length).toBe(2);
    });

    it('should display X and O alternatively and also render the correct status', () => {
        render(<Game />);
        const squareButton = screen.getAllByTestId('square');
        fireEvent.click(squareButton[0]);
        expect(squareButton[0].textContent).toBe('X');
        const statusO = screen.getByTestId('status');
        expect(statusO).toHaveTextContent('Next Player: O');
        fireEvent.click(squareButton[1]);
        expect(squareButton[1].textContent).toBe('O');
        const statusX = screen.getByTestId('status');
        expect(statusX).toHaveTextContent('Next Player: X');

    });

    it('should not display the values in the squares after clicking restart button', () => {
        render(<Game />);
        const squareButton = screen.getAllByTestId('square');
        fireEvent.click(squareButton[0]);
        fireEvent.click(squareButton[1]);
        fireEvent.click(squareButton[2]);
        fireEvent.click(squareButton[3]);
        fireEvent.click(squareButton[4]);

        const gameinfo = screen.getAllByTestId('gameinfo');
        fireEvent.click(gameinfo[0]);
        for(let i=0;i>9;i--){
            expect(squareButton[i].textContent).toBe("");
        }
    });

    it('play game and should display the winner as status after the winner declaration', () => {
        render(<Game />);
        const squareButton = screen.getAllByTestId('square');
        fireEvent.click(squareButton[0]);
        fireEvent.click(squareButton[1]);
        fireEvent.click(squareButton[2]);
        fireEvent.click(squareButton[3]);
        fireEvent.click(squareButton[4]);
        fireEvent.click(squareButton[5]);
        fireEvent.click(squareButton[6]);
        const status = screen.getByTestId('status');
        expect(status).toHaveTextContent('Winner: X');
    });

    it('should move back to the particular move after clicking the corresponding gameinfo button', () => {
        render(<Game />);
        const squareButton = screen.getAllByTestId('square');
        fireEvent.click(squareButton[0]);
        fireEvent.click(squareButton[1]);
        fireEvent.click(squareButton[2]);
        fireEvent.click(squareButton[3]);
        fireEvent.click(squareButton[4]);

        const gameinfo = screen.getAllByTestId('gameinfo');
        fireEvent.click(gameinfo[2]);

        expect(squareButton[0].textContent).toBe("X");
        expect(squareButton[1].textContent).toBe("O");
        expect(squareButton[2].textContent).toBe("");
        expect(squareButton[3].textContent).toBe("");
        expect(squareButton[4].textContent).toBe("");
        expect(squareButton[5].textContent).toBe("");
        expect(squareButton[6].textContent).toBe("");
        expect(squareButton[7].textContent).toBe("");
        expect(squareButton[8].textContent).toBe("");

    });

    it('should not display the remaining button after clicking the particular gameinfo button', () => {
        render(<Game />);
        const squareButton = screen.getAllByTestId('square');
        fireEvent.click(squareButton[0]);
        fireEvent.click(squareButton[1]);
        fireEvent.click(squareButton[2]);
        fireEvent.click(squareButton[3]);
        fireEvent.click(squareButton[4]);
        fireEvent.click(squareButton[5]);

        const gameinfo = screen.getAllByTestId('gameinfo');
        fireEvent.click(gameinfo[2]);

        fireEvent.click(squareButton[3]);

        const gameinfoafter = screen.getAllByTestId('gameinfo');
        expect(gameinfoafter.length).toBe(4);

    });
})
