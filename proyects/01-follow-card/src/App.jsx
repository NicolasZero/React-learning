// import {useState} from 'react'
import {FollowCard} from './followCard.jsx'


export function App () {
    const users = [{
        username: "@joseph22",
        name: "Joseph",
        initialIsFollowing: false
    },{
        username: "@steve01",
        name: "Steve",
        initialIsFollowing: false
    }]
    return (
        <>
            {
                users.map(user => {
                    const {username, name, initialIsFollowing} = user
                    return <FollowCard key={username} username={username} name={name} initialIsFollowing={initialIsFollowing} />
                })
            }
        </>
    )
}