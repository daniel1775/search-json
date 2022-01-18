

export default function SearchResults({results, isUp}){
   return(
      <div>
         {results?.map(value => {
            return(
               <div>
                  {isUp && <div key={value.id} style={{backgroundColor: "#E8E7E7", marginTop: "1rem", padding: "10px"}}>
                     <p>{value.name}</p>
                     <p>{value.email}</p>
                  </div>}
               </div>
            )
         })}
      </div>
   );
}