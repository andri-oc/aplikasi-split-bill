import Friend from "./Friend"

export default function FriendList({friend}){
    return (        
            <ul className="card-container">
                {friend.map((friend, index) =>{
                return <Friend friend={friend} key={index}/>
                })}
            </ul>                
    )   
};