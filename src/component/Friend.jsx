export default function Friend({friend}){
    return (
        <li className="card">
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            
                {friend.balance < 0 && (
                    <p className="red">Kamu Berhutang Rp.{Math.abs(friend.balance)} ke {friend.name}</p>
                )}
                {friend.balance > 0 && (
                    <p className="green">{friend.name} Berhutang Rp.{Math.abs(friend.balance)} ke Kamu</p>
                )}
                {friend.balance === 0 && (
                    <p>Kamu dan {friend.balance} tidak Punya hutang</p>
                )}
            <button className="button">Pilih</button>
        </li>
    )
}