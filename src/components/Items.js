import React from "react";
import "../App.css";
function Items(promps){
   
    return (
        <>
        <div className='inline-flex items-center w-full relative justify-between text-lg  gap-5 py-6 pl-4 pr-10 shadow-default bg-black text-white listbox'>
              <div className="flex  w-full listtext break-word ">{promps.text}</div>
              <i className="fa-solid fa-edit text-lg cursor-pointer absolute bottom-2 right-2 focuscl " onClick={()=>{
                promps.onEdit(promps.id,promps.text);
            }}></i>
            <i className="fa-solid fa-delete-left absolute list-cancel-set right-0 text-lg cursor-pointer focuscl" onClick={()=>{
                promps.onSelect(promps.id);
            }}></i>
             
            
            
            </div>
        </>
    );

}

export default Items;