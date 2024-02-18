import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import css from './PhoneForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../../redux/contacts/contacts-slice';
import { getAllContact } from '../../../redux/contacts/contacts-selectors';
import { useState } from 'react';



const INITIAL_STATE = {
  name: '',
  number: '',
};

const PhoneForm = () => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const dispatch = useDispatch();
  const { items } = useSelector(getAllContact);



  const isDulecate = ({ name }) => {
    const normalazeName = name.toLowerCase();
    const dublicate = items.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      return normalazeName === normalizedCurrentName;
    });
    return Boolean(dublicate);
  };

  const addForPhenebook = data => {
    const action = addContact(data);
    dispatch(action);
  };

  const nameId = useMemo(() => nanoid(), []);
  const numbId = useMemo(() => nanoid(), []);

  const handelChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handelSubmit = e => {
    e.preventDefault();
    if (isDulecate(state)) {
      return alert(`Name ${state.name} already in Phonebook`);
    }
    setState({ ...INITIAL_STATE });
    addForPhenebook({ ...state });
  };
  const { name, number } = state;
  return (
    <form onSubmit={handelSubmit} className={css.form}>
      <h1 className={css.titel}>Phonebook</h1>
      <div>
        <label htmlFor={nameId}>Name</label>
        <input
          pattern="^[a-zA-Zа-яА-Я]+(([' \\\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          onChange={handelChange}
          className={css.input}
          id={nameId}
          type="text"
          name="name"
          required
          placeholder="Enter you name "
        ></input>
      </div>

      <div>
        <label htmlFor={numbId}>Number </label>
        <input
          pattern="(\+?\d{1,4}[ \-]?)?(\(?\d{1,3}\)?[ \-]?)?\d{1,4}[ \-]?\d{1,4}[ \-]?\d{1,9}"
          title="Enter the correct phone number"
          value={number}
          onChange={handelChange}
          className={css.input}
          id={numbId}
          type="tel"
          name="number"
          required
          placeholder="Enter you number "
        ></input>
      </div>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default PhoneForm;
