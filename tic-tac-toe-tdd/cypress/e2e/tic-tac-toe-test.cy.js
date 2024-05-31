describe('Testing Tic-Tac-Toe Game till winner declaration', () => {

  beforeEach(()=>{ cy.visit('http://localhost:3000'); })

  it('should display game board and status', () => {
    cy.get('[data-testid="gameboard"]').should("exist");
    cy.get('[data-testid="status"]').should("exist");
  });

  it('should display nine square buttons and also they do not have any values before clicking', () => {
    cy.get('[data-testid="square"]').should('have.length',9);
    for(let i=0;i<9;i++){
        cy.get('[data-testid="square"]').eq(i).should('have.text','');
    }
  });

  it('should display X and O alternatively', () => {
    cy.get('[data-testid="square"]').eq(2).click().should('have.text',"X");
    cy.get('[data-testid="square"]').eq(0).click().should('have.text',"O");
    cy.get('[data-testid="square"]').eq(4).click().should('have.text',"X");
    cy.get('[data-testid="square"]').eq(6).click().should('have.text',"O");
    cy.get('[data-testid="square"]').eq(5).click().should('have.text',"X");
  });

  it('should render status correctly', () => {
    cy.get('[data-testid="status"]').should('have.text',"Next Player: X");
    cy.get('[data-testid="square"]').eq(0).click();
    cy.get('[data-testid="status"]').should('have.text',"Next Player: O");
    cy.get('[data-testid="square"]').eq(1).click();
    cy.get('[data-testid="status"]').should('have.text',"Next Player: X");
  });

  it('should display the winner as X in the status after the winner declaration', () => {
    cy.get('[data-testid="square"]').eq(0).click();
    cy.get('[data-testid="square"]').eq(1).click();
    cy.get('[data-testid="square"]').eq(2).click();
    cy.get('[data-testid="square"]').eq(3).click();
    cy.get('[data-testid="square"]').eq(4).click();
    cy.get('[data-testid="square"]').eq(5).click();
    cy.get('[data-testid="square"]').eq(6).click();
    cy.get('[data-testid="status"]').should('have.text',"Winner: X");
  });

  it('should display the winner as O in the status after the winner declaration', () => {
    cy.get('[data-testid="square"]').eq(0).click();
    cy.get('[data-testid="square"]').eq(1).click();
    cy.get('[data-testid="square"]').eq(2).click();
    cy.get('[data-testid="square"]').eq(4).click();
    cy.get('[data-testid="square"]').eq(3).click();
    cy.get('[data-testid="square"]').eq(7).click();
    cy.get('[data-testid="status"]').should('have.text',"Winner: O");
  });

  it('should not mark in the squares after the winner declaration', () => {
    cy.get('[data-testid="square"]').eq(0).click();
    cy.get('[data-testid="square"]').eq(1).click();
    cy.get('[data-testid="square"]').eq(2).click();
    cy.get('[data-testid="square"]').eq(3).click();
    cy.get('[data-testid="square"]').eq(4).click();
    cy.get('[data-testid="square"]').eq(5).click();
    cy.get('[data-testid="square"]').eq(6).click();
    cy.get('[data-testid="square"]').eq(7).click().should('have.text','');
  });

})

describe('Testing the time travel functionality', () => {

  beforeEach(()=>{ cy.visit('http://localhost:3000'); })

  it('should display the Restart button at the begining', () => {
    cy.get('[data-testid="gameinfo"]').should('have.length',1).should('have.text',"Restart");
  });

  it('should display the next gameinfo button after the player started playing', () => {
    cy.get('[data-testid="square"]').eq(0).click();
    cy.get('[data-testid="gameinfo"]').should('have.length',2);
  });

  it('should move back to the particular move after clicking the corresponding gameinfo button', () => {
    cy.get('[data-testid="square"]').eq(0).click();
    cy.get('[data-testid="square"]').eq(1).click();
    cy.get('[data-testid="square"]').eq(2).click();
    cy.get('[data-testid="square"]').eq(3).click();
    cy.get('[data-testid="square"]').eq(4).click();

    cy.get('[data-testid="gameinfo"]').eq(2).click();

    cy.get('[data-testid="square"]').eq(0).should('have.text','X');
    cy.get('[data-testid="square"]').eq(1).should('have.text','O');
    cy.get('[data-testid="square"]').eq(2).should('have.text','');
    cy.get('[data-testid="square"]').eq(3).should('have.text','');
    cy.get('[data-testid="square"]').eq(4).should('have.text','');
    cy.get('[data-testid="square"]').eq(5).should('have.text','');
    cy.get('[data-testid="square"]').eq(6).should('have.text','');
    cy.get('[data-testid="square"]').eq(7).should('have.text','');
    cy.get('[data-testid="square"]').eq(8).should('have.text','');
  });

  it('should not display the remaining button after clicking the particular gameinfo button', () => {
    cy.get('[data-testid="square"]').eq(0).click();
    cy.get('[data-testid="square"]').eq(1).click();
    cy.get('[data-testid="square"]').eq(2).click();
    cy.get('[data-testid="square"]').eq(3).click();
    cy.get('[data-testid="square"]').eq(4).click();
    cy.get('[data-testid="square"]').eq(5).click();

    cy.get('[data-testid="gameinfo"]').eq(2).click();

    cy.get('[data-testid="square"]').eq(3).click();
    cy.get('[data-testid="gameinfo"]').should('have.length',4);
  });

})
