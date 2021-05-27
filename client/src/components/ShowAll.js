import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router'


const ShowAll = () => {
    const [pets, setPets] = useState([])
    const [deleteClicked, setDeleteClicked] = useState([false])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets")
            .then(res=>{
                console.log("hello lovely pet")
                setPets(res.data.results)
            })
            .catch(err=>{
                console.log(err)
            })
    }, [deleteClicked])

const deletePet = (e, petId) =>{
    console.log("delete this pet,", petId)
    axios.delete(`http://localhost:8000/api/pets/delete/${petId}`)
        .then (response =>{
            console.log("This pet is deleted")
            setDeleteClicked(!deleteClicked)
        })
        .catch(err=> console.log(err))
}
    return (
    <>
        <div className="d-flex justify-content-end">
        <Link to="/pets/new">Add a pet to the shelter</Link>
        </div>
        <div className="mt-5">
            <h5 className="mt-3">These pets are looking for a good home</h5>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Actions</th> 
                    </tr>
                </thead>

                <tbody>
                {
                pets.map((pet,i) => {
                    return (
                        <tr key={i}>
                            <td><Link to ={`/pets/${pet._id}`}>{pet.name}</Link></td>
                            <td>{pet.petType}</td>

                            <td>
                            <Link to={`/pets/${pet._id}`} >Details</Link> | <Link to={`/pets/update/${pet._id}`} >Edit</Link>
                            </td>     
                        </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    </>
    );
};



export default ShowAll;