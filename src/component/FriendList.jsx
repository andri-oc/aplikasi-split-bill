import Friend from "./Friend"

export default function FriendList({friends, onSelected, selectedFriend}){
    return (        
            <ul className="card-container">
                {friends.map((friends, index) => {
                return <Friend friend={friends} key={index} onSelected={onSelected} selectedFriend={selectedFriend}/>
                })}
            </ul>                
    )   
};