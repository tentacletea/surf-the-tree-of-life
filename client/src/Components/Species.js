import React from 'react'
import { useState } from 'react'

// const fetchSpecies = (body, dataSetter) => {
//     return fetch("http://localhost:8080/api/species", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(body),
//     }).then((res) => res.json())
// }

const Species = ( { species, comment} ) => {


    const [show, setShow] = useState(false);
    // const [commentState, setCommentState] = useState(comment)
    const showDetails = () => {
        setShow(true)
    }

  return (
        show ?  
        <div>
            <li onClick={showDetails}>Name: {species.name}  Id: {species._id} Extinct: {species.extinct.toString()} Parent: {species.parent}</li>
            {/* <input type="text" onChange={(e) => setCommentState(e.target.value)} value={commentState}></input> */}
        </div>
        : 
        <li onClick={showDetails}>Name: {species.name}</li>
  )
}

export default Species
