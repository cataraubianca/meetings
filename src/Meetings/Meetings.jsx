import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import {Post} from "../PostComponent/Post";
export const Meetings = () => {
    const d = new Date();
    const [meetings, setMeetings] = useState([]);
    const [cateogry, setCategory] = useState();
    const [date, setDate] = useState(d.getTime());
    const [description, setDescription] = useState();
    const [imageURL, setImageURL] = useState();
    const [name, setName] = useState();
    const [place, setPlace] = useState();
    const meetingsCollectionRef = collection(db,"meetings")

    const getMeetings = async () => {
        const data = await getDocs(meetingsCollectionRef);
        setMeetings(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        console.log(data);
    }
    const createMeeting = async () => {
        
        await addDoc(meetingsCollectionRef, {cateogry: cateogry, date: date, description: description, imageURL: imageURL, name: name, place: place})
        getMeetings();
        setCategory();
        setDescription();
        setImageURL();
        setName();
        setPlace();
    }
    useEffect(() => {
        getMeetings();
    }, [])
    return(
        <>
        <Navbar></Navbar>
        <div className="auth-form-container-login">
        <input className="input-login" placeholder="Category" 
        onChange={(event) => {setCategory(event.target.value)}}
        ></input>
        {/* <input placeholder="Date" 
        onChange={(event) => {setDate(event.target.value)}}
        ></input> */}
        <input className="input-login" placeholder="Description"
        onChange={(event) => {setDescription(event.target.value)}}
        
        ></input>
        <input className="input-login" placeholder="ImageURL"
        onChange={(event) => {setImageURL(event.target.value)}}
        ></input>
        <input className="input-login" placeholder="Name"
        onChange={(event) => {setName(event.target.value)}}
        
        ></input>
        <input className="input-login" placeholder="Place"
        onChange={(event) => {setPlace(event.target.value)}}
        
        ></input>
        <button onClick={createMeeting}>Create a new meeting</button>
        </div>
        <div > {
                        meetings.map((product, i) => <Post {...product} key={i}/>) 
                        }</div>
        </>
    )
}