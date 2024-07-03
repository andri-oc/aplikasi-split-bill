import { useState } from 'react';
import FormAddFriend from './component/FormAddFriend';
import FriendList from './component/FriendList';
import FormSplitBill from './component/FormSplitBill';
import './index.css'

const initialFriends = [
  {
    id: 118836,
    name: "Budi",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sukma",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Parjo",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [ShowAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);


  function handleShowAddFriend(){
    setShowAddFriend((ShowAddFriend) => !ShowAddFriend);
  }
  
  function handleAddFriend (friend){
    setFriends((friends) => [...friends, friend]);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends}/>
       {ShowAddFriend &&  <FormAddFriend onAddFriend={handleAddFriend}/>}
        <button className='button' onClick={handleShowAddFriend}>{ShowAddFriend ? 'Tutup': 'Tambah Teman'}</button>
      </div>
        <FormSplitBill/>
    </div>
  )
}

export default App
