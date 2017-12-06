export function selectBook(book) {
// Select Book is an ActionCreator, it needs to return an
// action (type, payload)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
