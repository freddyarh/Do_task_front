import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { NotesAppBar } from './NotesAppBar';
import axios from 'axios';
import Swal from 'sweetalert2';

export const NoteScreen = () => {

    const baseURL = "http://localhost:3000/journal/";

    const id = useSelector( state => state.auth.uid);

    const [lastEntry, setLastEntry] = useState(null);

    const [inputs, setInputs] = useState({
        id: "",
        title: "",
        description: "",
    });

    useEffect(() => {
        loadDailyImage();
    }, [])

    const loadDailyImage = async() => {
        return await axios.get(`${ baseURL }/lastEntry`)
            .then(function (res) {
            setLastEntry(res.data.lastEntry);
            setInputs( val => ({ ...val, id: res.data.lastEntry[0]._id, title: res.data.lastEntry[0].title, description:res.data.lastEntry[0].description }));
            
        })
        .catch(function (error) {
            console.log(error);
        })
    };

    const handleUpdateLastEntry = async() => {

        axios.put(`${ baseURL }/updateLastEntry/${ inputs.id }`, { title: inputs.title, description: inputs.description })
            .then((response) => {
                console.log(response)
            Swal.fire(
                'Success!',
                response.data.msj,
                'success'
            )
            })
            .catch( err => console.log(err) )
    };

    const handleInputChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;
    
        setInputs(values => ({ ...values, [name]: value }));
    }

    if(!lastEntry) return null;
    
    return (
        <div className="notes__main-content"> 

            <NotesAppBar />
            <div className="notes__body-content">
                <div className="notes__graphic">
                    <h2>Daily summary </h2>
                    <h3 style={{ marginTop: "12px" }}>Title</h3>
                    <input 
                        className="notes__title-input"
                        name={ "title" }
                        placeholder= "Title"
                        type="text"
                        value={ inputs.title }
                        onChange={ handleInputChange }
                    />

                    <h3 style={{ marginTop: "12px" }}>Description</h3>
                    <textarea
                        className="notes__textarea"
                        name={ "description"}
                        placeholder= "Description"
                        value={ inputs.description }
                        onChange={ handleInputChange }
                    ></textarea>
                    <button className="notes__btn" onClick={ handleUpdateLastEntry }>
                        Update
                    </button>
                </div>
                <div className="notes__content">

                    <h2>Favourite daily photo</h2>

                    <div className="notes__image">
                        <img 
                            style={{ width: '35%' }}
                            // src={`${ baseURL }/entriesImageFile/asdasd`}
                            src={`${ baseURL }/entriesImageFile/${lastEntry[0].image}`}
                            alt="imgen"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}