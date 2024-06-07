import { useState,useEffect } from 'react';
import './App.css';
import Items from './components/Items'
function App() {

  const [inputList,setInputList]=useState("");
  const [items,setItems]=useState(()=>{
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if(storedTodos){
      return storedTodos;
        }   
  });
  const [label,setLabel]=useState(true);
  const [editid,setEditId]=useState(0);

  //lodading retrive from local storage and set to array
  

  useEffect(()=>{
       localStorage.setItem('todos',JSON.stringify(items))
  },[items]);

  function removeitem(id){
      setItems((prev)=>{
        return items.filter((_,i)=>{
              return i!==id;
           })
     })
}
function deleteall(){
  setItems([]);
  setInputList("");
}
function editsetup(id,text){
  setLabel(false);
  setInputList(text);
  setEditId(id);
  
}
  const itemEvent=(e)=>{
    setInputList(e.target.value);
  }

  const listofitems=()=>{
     setItems((prev)=>{
      if(inputList!==''){
       // localStorage.setItem('todos', JSON.stringify([...prev,inputList]));
      return [...prev,inputList];
      
      }
    else{
      
      return [...prev]
    }

    
    
     })
     setInputList("");
  }
  
  function edititem(){
    setItems((prev)=>{
      return prev.filter((e,i,arr)=>{
             if(i===editid)
                arr[i]=inputList;
           return e;
        })
   })
   setLabel(true);
   setInputList("");
  }

  
  return (
    <>
       <div className='flex min-h-screen w-full justify-center bg-slate-600'>
        <div className='flex flex-col gap-6  items-center w-full  todobox p-5 bgroot'>
          <h1 className='text-8xl font-normal text-white rootheading mt-20'>Just do it!</h1>
          <div className='flex flex-wrap  w-full my-5 justify-center  gap-4'>
            <input
               className='py-2 px-3 w-2/4 iteminput min-w-20 rounded-xl border-default bg-black text-white shrink-0'
               placeholder='add item'
               onChange={itemEvent}
               value={inputList}
             />
             {(label===true)? <button className=' bg-slate-800 bgbtn text-white rounded-xl px-6 py-2 focusbg' onClick={listofitems}>add</button>: <button className=' bg-slate-800 bgbtn text-white rounded-xl px-6 py-2 focusbg' onClick={edititem}>edit</button>}
             <button className=' bg-slate-800 text-white bgbtn rounded-xl px-6 py-2 focusbg' onClick={deleteall}>delete all</button>
          </div>

          <div className='flex flex-col px-5 overflow-auto 
          
           items-center  itembox gap-5' id='listid'>
            {items?.map((e,index)=>{
              return <Items 
              key={index}
              id={index}
              text={e}
              onSelect={removeitem}
              onEdit={editsetup}
              />
            })}
          </div>
        </div>
       </div>
    </>
  );
}

export default App;
