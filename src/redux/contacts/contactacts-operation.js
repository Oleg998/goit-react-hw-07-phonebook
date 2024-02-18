import { requestContacts } from '../../api/contants-api';
import {
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
