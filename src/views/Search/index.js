import { useState } from "react/cjs/react.development";
import SearchBox from "./components/SearchBox";

import "./style.css";

import data from "../../data/users.json";
import SearchResults from "./components/SearchResults";

export default function Search() {
   const [isTop, setIsTop] = useState(false);
   const [usersData, setUsersData] = useState(data);
   const [results, setResults] = useState([]);

   const handleSearchClick = (searchText) => {
      setIsTop(true);
      if(usersData?.length && searchText?.length){
         const filteredData = usersData.filter((value) => (
            value.name.toLowerCase().includes(searchText.toLowerCase()) ||
            value.phone.includes(searchText.toLowerCase()) ||
            value.email.includes(searchText.toLowerCase()) ||
            value.username.includes(searchText.toLowerCase())
         ));
         setResults(filteredData);
      }
   }

   const handleCloseClick = () => {
      setIsTop(false);
   };
   
   return(
      <div className={`search ${isTop ? "search--top" : "search--center"}`}>
         <SearchBox onSearch={handleSearchClick} onClose={handleCloseClick} isUp={isTop}/>
         <SearchResults results={results} isUp={isTop}/>
      </div>
   );
}