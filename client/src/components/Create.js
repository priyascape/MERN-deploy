import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router'


const Create = () => {
    const [petInfo, setPetInfo] = useState({
        name: "",
        petType: "",
        desc: "",
        skills: ""
    })
    const [errors, setErrors] = useState({})

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets/create', petInfo)
        .then(res=>{
            console.log(res)
            if(res.data.results){
                navigate("/")
            }else{
                console.log(res.data.errors)
                setErrors(res.data.errors)
                
            }
        })
        .catch(err=>console.log(err))
    }

    const changeHandler =(e)=>{
        setPetInfo({
            ...petInfo,
            [e.target.name] : e.target.value
        })
    }
    return (
        <form onSubmit={onSubmitHandler}>
        <p>
            <label>Name</label><br/>
            <input type="text" onChange={changeHandler} name ="name" value={petInfo.name}/>
        </p>
        <p style = {{color:"red"}}>{errors.name? errors.name.message :""}</p>
        <p>
            <label>Pet Type:</label><br/>
            <input type="text" onChange={changeHandler} name ="petType" value={petInfo.petType}/>
        </p>
        <p style = {{color:"red"}}>{errors.petType? errors.petType.message :""}</p>
        <p>
            <label>Description</label><br/>
            <input type="text" onChange={changeHandler} name ="desc" value={petInfo.desc}/>
        </p>
        <p style = {{color:"red"}}>{errors.desc? errors.desc.message :""}</p>
        <p>
            <label>Skills (optional): </label><br/>
            <div className="container">
            <p><input type="text" onChange={changeHandler} name ="skills1" value={petInfo.skills1}/></p>
            <p style = {{color:"red"}}>{errors.skills1? errors.skills1.message :""}</p>
            <p><input type="text" onChange={changeHandler} name ="skills2" value={petInfo.skills2}/></p>
            <p style = {{color:"red"}}>{errors.skills2? errors.skills2.message :""}</p>
            <p><input type="text" onChange={changeHandler} name ="skills3" value={petInfo.skills3}/></p>
            <p style = {{color:"red"}}>{errors.skills3? errors.skills3.message :""}</p>
            </div>
            
        </p>
        

        <input type="submit"/>
    </form>
    );
};



export default Create;