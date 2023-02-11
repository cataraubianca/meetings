import React from "react";
import Navbar from "../navbar/navbar";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import {Post} from "../PostComponent/Post";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Home = () => {
    const history = useNavigate();
    const [meetings, setMeetings] = useState([]);
    const [user, setUser] = useState('');
    const meetingsCollectionRef = collection(db,"meetings")

    const getMeetings = async () => {
        const data = await getDocs(meetingsCollectionRef);
        setMeetings(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        
        console.log(data);
    }
    const sliceMeetings = async () => {
        meetings.slice(0,1);

    }

    const setThisUser = async () => {
        setUser(window.localStorage.getItem('currentUser'));
    }
    useEffect(() => {
        getMeetings();
        setThisUser();

    }, [])

    return(
        <>
        <Navbar></Navbar>
        <div className="contentt">
        <h1 className="titlee">About us</h1>
        <h3 className="titlee2">This is a platform for finding and building local communities. People use this platform to meet new people, learn new things, find support, get out of their comfort zones, and pursue their passions, together.</h3>
        </div>
        <div className="rec">
            <h3 className="recuser">Hi {user}! These are the recommendations that we have for you today:</h3>
        </div>
        
        <div > {
                        
                        meetings.slice(0,2).map((product, i) => <Post {...product} key={i}/>) 
                        }</div>
        </>
    ) 
}