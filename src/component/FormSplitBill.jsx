export default function FormSplitBill(){
    return (
        <form action="" className="form-split-bill">
            <h2>Patungan Bareng Si X</h2>

            <label htmlFor="">total tagihan</label>
            <input type="text" />

            <label htmlFor="">Tagihan kamu</label>
            <input type="text" />

            <label htmlFor="">Tagihan x</label>
            <input type="text" disabled/>

            <label htmlFor="">Ditalangin sama</label>
            <select name="" id="">
            <option value="user">Kamu</option>
            <option value="friend">x</option>
            </select>

        <button className="button">Tambah</button>
        </form>
    )
}