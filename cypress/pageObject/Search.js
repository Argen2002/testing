// Ваш Page Object для страницы поиска
export class Search {
  findUser(name) {
    // Используйте селектор и текст, который вы хотите найти
    return cy.contains('.crm-navigator-table__date', name);
  }
}
