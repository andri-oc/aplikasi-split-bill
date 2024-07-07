import { useState } from "react"

export default function FormSplitBill({selectedFriend, onSplitBill}){

    const [amount, setAmount] = useState("");
    const [mybill, setMybill] = useState("");
    const friendBill = amount ? amount - mybill : '';
    const [whoIsPay, setWhoIsPay] = useState("user");

    function handleSubmit(event){
        event.prevenDefault();

        if(!amount || !mybill) return;
        onSplitBill(whoIsPay === "user" ? friendBill : -mybill);
    }

    return (

        <form action="" className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Patungan Bareng Si {selectedFriend.name}</h2>

            <label htmlFor="">total tagihan</label>
            <input type="text" value={amount} onChange={(event) => setAmount(event.target.value)}/>

            <label htmlFor="">Tagihan kamu</label>
            <input type="text" value={mybill} onChange={(event) => setMybill(event.target.value)}/>

            <label htmlFor="">Tagihan {selectedFriend.name}</label>
            <input type="text" value={friendBill} disabled/>

            <label htmlFor="">Ditalangin sama</label>

            <select value={whoIsPay} onChange={(event) => setWhoIsPay(event.target.value) }>                
            <option value="user">Kamu</option>
            <option value="friend">{selectedFriend.name}</option>
            </select>

        <button className="button">Tambah</button>
        </form>
    )
}