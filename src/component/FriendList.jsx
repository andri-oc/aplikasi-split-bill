import Friend from "./Friend"

export default function FriendList({friends}){
    return (        
            <ul className="card-container">
                {friends.map((friends, index) =>{
                return <Friend friend={friends} key={index}/>
                })}
            </ul>                
    )   
};