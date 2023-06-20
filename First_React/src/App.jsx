import "./styles.css"

export default function App() {
  return (
    <>
    <form className="new-item-form ">
    <div className="form-row">
      <label htmlFor="">New Item</label>
      <input type="text" id="item"/>
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">Todo list</h1>
  <ul className="list">
    <li>
      <label >
        <input type="checkbox" />
        item 1
      </label>
      <button className="btn btn-danger">DELETE</button>
    </li>
  </ul>
  </>
  )
}