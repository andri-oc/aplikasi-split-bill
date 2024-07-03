import { useState } from "react";
export default function FormAddFriend({ onAddFriend }) {
  
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48/");

  function handleOnSubmit(event) {
    event.preventDefault();

    if (!name || !image) return;

    let id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);
    setName("");
    setImage("");
  }

  return (
    <form action="" className="form-add-friend" onSubmit={handleOnSubmit}>
      <label htmlFor="">Nama</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="">Foto</label>
      <input
        type="text"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />

      <button className="button">Tambah</button>
    </form>
  );
}
