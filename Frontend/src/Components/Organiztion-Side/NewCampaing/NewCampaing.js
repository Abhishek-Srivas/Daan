import React, { useState } from "react";
import { ButtonFill } from "../../UI Elements/Buttons/Buttons";
import "./NewCampaing.css";
import firebase from "../../../firebase/firebase";

const formValues = {
  image: "",
  heading: "",
  description: "",
  tag: "",
  amount: "",
};

const NewCampaing = () => {
  const [campaingValues, setCampaingForm] = useState(formValues);

  const formHandler = (e) => {
    const { name, value } = e.target;

    setCampaingForm({
      ...campaingValues,
      [name]: value,
    });
  };
  
 const handleImageChange = (e) =>{
    if(e.target.files[0]){
      this.setState({
      image: e.target.files[0]
    })
  }}

  const handleUpload = () =>{
    let file = campaingValues.image;
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var uploadTask = storageRef.child('folder/' + file.name).put(file);
  
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>{
        var progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes))*100
        this.setState({progress})
      },(error) =>{
        throw error
      },() =>{
        // uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{
  
        uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
          this.setState({
            downloadURL: url
          })
        })
      document.getElementById("file").value = null
  
     }
   ) 
  }

  return (
    <div className="NewCampaing-Container">
      <form className="NewCampaingForm" onSubmit={formHandler}>
        <input
          type="text"
          onChange={formHandler}
          className="HospitalSignupForm-Input"
          placeholder="Title"
          name="heading"
        />

        <textarea
          onChange={formHandler}
          // className="HospitalSignupForm-Input "
          placeholder="Description"
          name="description"
          maxLength="200"
          rows="5"
        />

        <select
          onChange={formHandler}
          name="tag"
          className="NewCampaingForm-Tag"
        >
          <option value="" disabled selected>
            Choose your tag
          </option>
          <option value="Money">Money</option>
          <option value="Education">Education</option>
          <option value="Clothes">Clothes</option>
          <option value="Blood">Blood</option>
          <option value="Beds not available">Food/Water</option>
        </select>
        <input
          type="number"
          onChange={formHandler}
          className="HospitalSignupForm-Input"
          placeholder="Amount to be raised"
          name="amount"
        />
        <p className="uploadImg">Upload an Image for your Campaign</p>
        <input
          type="file"
          name="image"
          id="image"
          onChange={handleImageChange}
          accept="image/jpeg, image/png, image/svg"
        />
        <div className="HospitalSignup-Button">
          <ButtonFill type="submit" width="100%">
            Submit
          </ButtonFill>
        </div>
      </form>
    </div>
  );
};

export default NewCampaing;
