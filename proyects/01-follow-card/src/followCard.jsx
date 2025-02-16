import {useState} from 'react'
import "./App.css"

export function FollowCard ({username, name, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    // const state = useState(false)
    // const isFollowing = state[0]
    // const setIsFollowing = state[1]
    
    const followText = isFollowing ? "Siguiendo" : "Seguir"
    const className = isFollowing ? "following" : ""

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article>
            <header>
                <img src="./vite.svg" alt="" />
                <div>
                    <strong>{name}</strong>
                    <span>@{username}</span>
                </div>
            </header>

            <aside>
                <button className={className} onClick={handleClick}>
                    <span className='follow-text'>{followText}</span>
                    <span className='stop-follow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}