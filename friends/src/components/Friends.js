import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';
import Friend from './Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);


    useEffect(() => {
        axiosWithAuth()
        .get('/friends')
        .then(response => setFriends(response.data))
        .catch(error => console.log(error.response))
    })
    return(
        <div>
            <AddFriend />
            <h1>My Friends!</h1>
            {friends.map(friend => (
                <div key={friend.id} >
                    <Friend 
                    person={friend}
                    />
                </div>
            ))}
        </div>
    )


}

export default Friends;