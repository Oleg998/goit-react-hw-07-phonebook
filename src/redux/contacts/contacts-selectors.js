export const getAllContact = store => store.contacts;


export const getFilterByContact = store => {
  const { filter, contacts } = store;
  if (!filter) {
    return contacts;
  }
  const normalazeNameFilter = filter.toLowerCase();
  const filterName = contacts.filter(({ name }) => {
    const filterCurentName = name.toLowerCase();
    return filterCurentName.includes(normalazeNameFilter);
  });
  return filterName;
};