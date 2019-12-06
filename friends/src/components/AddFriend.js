import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const AddFriend = () => {

 const [friendData, setFriendData] = useState({
     name: '', 
     age: '', 
     email: ''})

 const handleChange = e => {
   setFriendData(
     {
       ...friendData,
       [e.target.name]: e.target.value
     }
   )
 }

 const onSubmit = e => {
   e.preventDefault()
   axiosWithAuth()
   .post('/friends', friendData)
   .then(res => {
     setFriendData(
       {
         ...friendData,
         name: '',
         age: '',
         email:''
       }
     )
   })
   .catch(err => console.log(err.response));
 };

 return (
     <form onSubmit = {onSubmit} >
         <input type = "text" name="name" 
         value={friendData.name} placeholder="Name"
         onChange={handleChange}
         />
          <input 
          type = "text" 
          name = "email" 
          value = {friendData.email}
          placeholder = "Email"
          onChange={handleChange}
         />
          <input 
          type = "text" name="age" 
         value={friendData.age} placeholder="Age"
         onChange={handleChange}
         />
             <button>Add Friend</button>

     </form>
 )
}

export default AddFriend;