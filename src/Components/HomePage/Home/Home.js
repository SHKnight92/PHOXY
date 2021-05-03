import React from 'react';
import Header from '../Header/Header';
import PhotoProject from "../Project/PhotoProject";
import Services from '../Services/Services';
import Navbar from '../../Navbar/Navbar';
import Testimonials from '../Testimonials/Testimonials';
import AboutUs from '../AboutUs/AboutUs';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <PhotoProject></PhotoProject>
            <Services></Services>
            <Testimonials></Testimonials>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;