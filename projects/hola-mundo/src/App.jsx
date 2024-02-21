import { TwitterFollowCard } from "./TwitterFollowCard"
import './App.css'
import { useState } from "react"
const users = [
    {
        userName: "midudev",
        name:"fasfasf",
        isFollowing: true
    },
    {
        userName: "paco",
        name:"fasfasf",
        isFollowing: false
    }
]
export function App(){
    return (
        <section className="App"> 
           {
            users.map(user=>{
                const {userName, name, isFollowing} = user
                return (
                    <TwitterFollowCard userName = {userName}
                    initialIsFollowing = {isFollowing}
                    key={userName}
                    >
                        {name}

                    </TwitterFollowCard>
                )
            })
           }
           
        </section> 

    )
}