import { useState } from 'react';
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from 'sweetalert2';

const baseURL = "http://localhost:3000/journal/entries";

export const useModalEntry = (loadDataEntries) => {

    const [open, setOpen] = useState(false);
    const [post, setPost] = useState(null);
    
    const [inputs, setInputs] = useState({
      title: "",
      description: "",
      date: new Date(),
      rating: 0,
      image: {},
      user: useSelector( state => state.auth.uid)
    });
    
    const handleSaveEntries = () => {
      const data = new FormData();
      data.append("title", inputs.title);
      data.append("description", inputs.description);
      data.append("date", inputs.date);
      data.append("rating", inputs.rating);
      data.append("image", inputs.image);
      data.append("user", inputs.user);
      
      axios
        .post(baseURL, data, { "Content-Type": "multipart/form-data" })
        .then((response) => {
          setPost(response.data);
          Swal.fire(
            'Success!',
            response.data.msj,
            'success'
          )
          loadDataEntries();
          setInputs({});
        });
      handleClose();
    }
  
    const handleFileChange = (event) => {
    
      const name = event.target.name;
      if (event.target.files) {
        setInputs(values => ({ ...values, [name]: event.target.files[0] }));
      }
    };
  
    const handleInputChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
  
      setInputs(values => ({ ...values, [name]: value }));
    }
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return {
        open,
        post,
        inputs,
        handleSaveEntries,
        handleFileChange ,
        handleInputChange,
        handleClickOpen,
        handleClose
    }
}
