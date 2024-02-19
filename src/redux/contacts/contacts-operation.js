import { requestContacts , requestAddContacts , requestDeleteContacts } from '../../api/contants-api';
import {
  deleteContactInProgress,
  deleteContactSuccess,
  deleteContactError,
  addContactsInProgress,
  addContactsSuccess,
  addContactsError,
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './contacts-slice';

export const fetchContacts = () => {    
  const func = async dispatch => {    
    try {        
        dispatch(fetchingInProgress());
        const data = await requestContacts(); 
        dispatch(fetchingSuccess(data));        
    } catch (error) {
        dispatch(fetchingError(error.message));        
    }  
  }
  return func
};

export const addContacts = (body)=>{
  const func = async (dispatch) => {
    try{
       dispatch( addContactsInProgress())
       const data = await requestAddContacts(body)
       dispatch(addContactsSuccess(data))
    }
    catch (error){
        dispatch(addContactsError(error.message))
    }
  }
  return func
}


export const deleteContacts = (id)=> {
  const func =async(dispatch) => {
    try {
      dispatch(deleteContactInProgress())
      await requestDeleteContacts(id)
      dispatch(deleteContactSuccess(id))

    }
    catch(error){
       dispatch(deleteContactError())
    }
  }
  return func 
}