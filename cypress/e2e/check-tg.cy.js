context('Actions', () => {    
  it('check tg link',  { pageLoadTimeout: 1200000 }, () => {
      cy.intercept('GET', 'https://mc.yandex.ru/**', { statusCode: 200, body: {} }).as('blockYandex');
      cy.intercept('GET', 'https://googleads.g.doubleclick.net/**', { statusCode: 200, body: {} }).as('blockGoogle');
      cy.visit("https://www.google.ru/");
      cy.get('.gLFyf').type("Byndyusoft {enter}");
      cy.get('.g a').first().invoke('removeAttr', 'target').click();
      cy.origin("https://byndyusoft.com/", () => {
          cy.get('.knowMore').find(".btn").click();
          cy.get(".popup-callback__contacts-tg").invoke('attr', 'href').should('eq',"http://t.me/alexanderbyndyu");
    })
  })
})