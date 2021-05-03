import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddServices = () => {
  const { register, handleSubmit } = useForm();
  const [imageUrl, setImageUrl] = useState([]);

  const onSubmitForm = (data) => {
    const serviceData = {
      title: data.title,
      price: data.price,
      desc: data.description,
      image:imageUrl,

    }
    fetch("http://localhost:4403/add-services", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(serviceData),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Successfully");
        }
      });
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "afb192523dc0f0b73f32894b333d8602");
    imageData.append("image", event.target.files[0]);
    axios.post("https://api.imgbb.com/1/upload", imageData)
      .then(response => {
        setImageUrl(response.data.data.display_url)
        
    }).catch(err => console.log(err))
  }
  return (
    <div className="row mt-5">
      <div className="col-md-3"></div>
      <div className="col-md-6 gx-3 gy-2">
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <h1 className="text-center">Add Services</h1>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Service Title"{...register("title")}/>
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Service Price"{...register("price")}/>
          </div>
          <div className="mb-3">
            <textarea type="text" className="form-control"rows="3" placeholder="Service Description" {...register("description")}
            ></textarea>
          </div>
          <div className="mb-3">
            <input type="file" className="form-control" {...register("image")} onSubmit={handleImageUpload}/>
          </div>
          <button className="btn btn-danger" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="col-md-3"></div>
    </div>
  );
};
export default AddServices;
