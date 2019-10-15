import React from 'react';

const Friend = ({ person }) => {
    return (
        <div>
            <h1>name: {person.name}</h1>
            <p>age: {person.age}</p>
            <p>email: {person.email}</p>
        </div>
    )
}

export default Friend;