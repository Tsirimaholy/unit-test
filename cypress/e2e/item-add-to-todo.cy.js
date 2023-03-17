describe('Adding todo', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    })

    it('The typed todo item is added to todo list', () => {
        cy.get('input[id="add-todo"]')
            .type("some todo")
            .type('{enter}');
        cy.get("ul").should('contain', 'some todo');
    });

    it('Should move a checked todo item to done', ()=>{
        cy.get('ul').first().as("todoList");
        cy.get('input[id="add-todo"]')
            .type("some todo")
            .type('{enter}');

        cy.get("@todoList")
            .get("li:first").click();


        cy.get('ul').last().as("doneList");
        cy.get("@doneList").get("li")
            .should("have.length.greaterThan", 0);
        cy.get("@doneList").should("contain", "some todo")
    })
})
