import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/contacts-slice';
import { setFilter } from '../../../redux/filter/filter-slice';
import { getFilterByContact } from '../../../redux/contacts/contacts-selectors';
import css from './PhoneList.module.css';

const PhoneList = () => {
  const contacts = useSelector(getFilterByContact);
  const dispatch = useDispatch();
  const deleteName = id => {
    dispatch(deleteContact(id));
  };
  const handelSearce = ({ target }) => dispatch(setFilter(target.value));
  const elements = contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name} :{number}
      <button
        onClick={() => deleteName(id)}
        type="button"
        className={css.btn_delete}
      >
        Delete
      </button>
    </li>
  ));

  return (
    <div className={css.wrapper}>
      <h2>Contacts</h2>
      <p> Find Cotacts by Name</p>
      <input
        name="filter"
        onChange={handelSearce}
        placeholder="Searce Name"
      ></input>
      <ul className={css.phone_list}>{elements}</ul>
    </div>
  );
};

export default PhoneList;
