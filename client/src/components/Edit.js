import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router'


const Edit = (props) => {
    const [inputs, setInputs] = useState({
        name:"",
        type:"",
        description:"",
        skill1: "",
        skill2: "",
        skill3: "",
    })
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
        .then(res => {
            console.log("***********", res);
            setInputs(res.data.results)
        })
        .catch(err => console.log(err))
    }, [])

    const onChange = e => {
        setInputs({
        ...inputs,
        [e.target.name]: e.target.value
    })
}

const onSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/pets/update/${props.id}`, inputs)
        .then(res => {
            console.log(res)
            if(res.data.results){
                navigate("/")
            }else{
                console.log(res.data)
                setErrors(res.data)
            }
        })
        .catch(err=> console.log(err))
}

    return (
        <div className="container">
                    <div className="d-flex justify-content-end">
                    <Link to="/" className="btn btn-outline-info float-right mr-5">Back to Home</Link>
                    </div>
                    <h3 className="mt-5">Edit {inputs.name}</h3>
                    <form onSubmit= { onSubmit } style={{border: "1px solid black", padding:"10px" }}>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="name">Pet Name:</label>
                                    <input type="text" name="name"  onChange= { onChange } className="form-control" value={inputs.name}/>
                                    <p className="text-danger">{errors.name? errors.name.message: ""}</p> 
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="type">Pet Type:</label>
                                    <input type="text" name="petType"  onChange= { onChange } className="form-control" value={inputs.petType}/>
                                    <p className="text-danger">{errors.petType? errors.petType.message: ""}</p> 
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="description">Pet Description:</label>
                                    <input type="text" name="desc"  onChange= { onChange } className="form-control" value={inputs.desc}/>
                                    <p className="text-danger">{errors.desc? errors.desc.message: ""}</p> 
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="skill1">Skill 1:</label>
                                    <input type="text" name="skill1"  onChange= { onChange } className="form-control" value={inputs.skills1}/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="skill2">Skill 2:</label>
                                    <input type="text" name="skill2"  onChange= { onChange } className="form-control" value={inputs.skills2}/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="skill3">Skill 3:</label>
                                    <input type="text" name="skill3"  onChange= { onChange } className="form-control" value={inputs.skills3}/> 
                                </div>
                            </div>
                        </div>
                        <input type="submit" className="btn btn-success" value="Edit Pet"/>
                    </form>
                </div>
    );
};

Edit.propTypes = {};

export default Edit;
