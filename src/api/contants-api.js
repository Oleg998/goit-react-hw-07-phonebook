import axios from "axios";

const contactsInstance = axios.create({
  baseURL: 'https://65d1e401987977636bfb9f8e.mockapi.io/api/contacts'
});


export const requestContacts = async () =>{
    const {data} =await contactsInstance.get("/");    
    return data;
}

