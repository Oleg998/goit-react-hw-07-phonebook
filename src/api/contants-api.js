import axios from "axios";

const contactsInstance = axios.create({
  baseURL: 'https://65d1e401987977636bfb9f8e.mockapi.io/api/contacts'
});


export const requestContacts = async () =>{
    const {data} =await contactsInstance.get("/");    
    return data;
}

export const requestAddContacts = async (body) =>{
  const {data} =await contactsInstance.post("/",body);    
  return data;
}

export const requestDeleteContacts = async(id)=>{
  const {data}=await contactsInstance.delete(`/${id}`)
  return data;
}
