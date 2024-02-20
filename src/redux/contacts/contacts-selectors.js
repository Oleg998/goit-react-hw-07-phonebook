export const selectAllContact = store => store.contacts;


export const selectFilterByContact = store => {
  const { filter, contacts } = store;
  const {items }=contacts
  if (!filter) {
    return contacts;
  }
  const normalazeNameFilter = filter.toLowerCase();
  const filterName = items.filter(({ name }) => {
    const filterCurentName = name.toLowerCase();
    return filterCurentName.includes(normalazeNameFilter);
  });
  return {
    items:filterName,
    isLoading:false,
    error:null
}}