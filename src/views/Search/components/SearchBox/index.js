import { useState } from "react";

import "./style.css";

export default function SearchBox({onClose, onSearch, isUp}){
   const [searchText, setSearchText] = useState("");

   const handleClose = () =>{
      onClose();
      setSearchText("");
   }

   return(
      <div className="search-box">
         <h2 className="search-box__title">Buscador de personal</h2>
         <div className="search-box__buttons">
            <label className="search-box__label">Buscar: </label>
            <input className="search-box__input" type="text" value={searchText} onChange={e=>setSearchText(e.target.value)}/>
            <button onClick={() => onSearch(searchText)} 
               className="search-box__button search-box__button--search"
               disabled={!searchText?.length}>
               Buscar
            </button>
            {isUp && <button onClick={handleClose} className="search-box__button">Cancelar</button>}
            {/*<button onClick={handleClose} className={`search-box__button ${isUp ? "search-box__button--show" : "search-box__button--hide"}`}>Cancelar</button>*/}
         </div>
      </div>
   );
}