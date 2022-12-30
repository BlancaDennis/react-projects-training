import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }else{
    return []
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({show: false, msg: '', type: ''});


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name ){
      //display alert
      showAlert(true, 'Please enter a value', 'danger')
    }else if(name && isEditing){
      //deal with edith
      setList(list.map((item)=>{
        if(item.id === editId){
          return {...item, title:name}
        }
        return item;
      }))
      setName('');
      setEditId(null);
      setIsEditing(false);
      showAlert(true, 'Value change', 'success')
    }else {
      // show alert
      showAlert(true, 'Item added to the list', 'success' );
      const newItem = { id: new Date().getTime().toString(), title: name, };
      setList([...list, newItem]);
      setName('');
    }
  }

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({show: show, msg, type})
  }

  const clearList = () => {
    showAlert(true, 'empty list' ,'danger')
  }

  const removeItem = (id) => {
    showAlert(true, 'Item removed', 'danger');
    setList(list.filter((item)=> item.id !== id));
  }

  const editItem = (id) => {
    const specificItem = list.find((item)=> item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])
  


  
  return (
  <section className='section-center'>  
  <form className='grocery-form' onSubmit={handleSubmit}>
    {alert.show && <Alert  {...alert} removeAlert={showAlert} list={list}/>}
    <h3>Grocery List</h3>
    <div className='form-control'>
      <input 
        type='text'
        className='grocery' 
        placeholder='Eg. Egss' 
        value={name} 
        onChange={(e)=>setName(e.target.value)}
        />
      <button type='submit' className='submit-btn'>
        {isEditing ? 'Edit' : 'Submit'}
      </button>
    </div>
  </form>
  {list.length > 0  && 
    <div className='grocery-container'>
      <List items={list} removeItem={removeItem} editItem={editItem}/>
      <button className='clear-btn' onClick={clearList}>Clear</button>
    </div>
  }
  </section>)
}

export default App
