import React, { useState, useEffect } from 'react';
import { MenuBtn } from '../components/MenuBtn';
import './Home.css';
import AboutImg from '../utils/img/about-img.jpg';
import { Link } from 'react-router-dom';
import { ImageGallery } from '../components/ImageGallery';
import { ContactInfo } from '../components/ContactInfo';
import ContactImage from '../utils/img/contact-img.jpg';
import axios from 'axios'; // Import Axios;
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

function Home() {
    const [menuData, setMenuData] = useState(null);
    const [currentDay, setCurrentDay] = useState("");
    const [tomorrowDay, setTomorrowDay] = useState();
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await axios.get('./Buffet.json'); // Use axios.get instead of fetch
                const data = response.data; // Access response data directly
                console.log(data);
                setMenuData(data);

                // Determine current day
                const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                const today = new Date().getDay();
                const tomorrow = today + 1;
                setCurrentDay(days[today]);
                setTomorrowDay(days[tomorrow])
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
        };

        fetchMenuData();
    }, []);

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedItem) {
            // Placeholder function to send selected item to WhatsApp
            sendToWhatsApp(selectedItem);
        } else {
            alert('Please select an item before sending!');
        }
    };
    
    // Placeholder function to send selected item to WhatsApp
    const sendToWhatsApp = (item) => {
        const whatsappNumber = '+250788314732'; // Replace with your WhatsApp number
        const message = `I want to order ${item.item}`;
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    };
    
    // Function to handle selecting an item
    const handleSelectItem = (item) => {
        setSelectedItem(item);
    };


    // Render menu items
    const renderMenuItems = () => {
        if (!menuData || !currentDay || !menuData[currentDay]) {
            return <p> We don't serve Buffet in weekends...</p>;
        }

        return menuData[currentDay].map(item => (
            <li id={'_' + Math.random().toString(36).substr(2, 9)} key={item.id} className='d-flex justify-content-between' onClick={() => handleSelectItem(item)}>
                <label className='fs-3 mx-2' htmlFor={item.id}>{item.item}</label>
                {/* <p>{id}</p> */}
                <input type='checkbox' id={item.id} name={item.id} value={item.id} />
            </li>
        ));
    };

    const renderTomorrowMenuItems = () => {
        if (!menuData || !tomorrowDay || !menuData[tomorrowDay]) {
            return <p> We don't serve Buffet in weekends...</p>;
        }

        return menuData[tomorrowDay].map(item => (
            <li id={'_' + Math.random().toString(36).substr(2, 9)} key={item.id} className='d-flex justify-content-between'>
                <label className='fs-3 mx-2' htmlFor={item.id}>{item.item}</label>
                {/* <p>{id}</p> */}
                <input type='checkbox' id={item.id} name={item.id} value={item.id} />
            </li>
        ));
    };

    return (
        <div className='home-page'>
            {/* Header section */}
            <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                            <h2 className='mb-0 text-black fw-bold'>Welcome To</h2>
                            <h1 className='mb-5 text-black fw-bold text-center text-sm-start'>Cravings Restaurant</h1>
                            <MenuBtn />
                        </div>
                    </div>
                </div>
            </header>

            {/* Menu section */}
            <div className='menu-section py-5 text-light shadow'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Our Buffet</h2>
                    <div className='row mb-5 w-100'>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>Today ({currentDay})</h3>
                            <form onSubmit={handleSubmit}>
                                <ul className='px-0'>
                                    {/* Placeholder drinks */}
                                    {renderMenuItems(currentDay)}
                                </ul>
                                <button type='submit' className='btn btn-outline-success btn-lg'>Send Order</button>
                            </form>
                        </div>
                        {/* Drinks section */}
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>Tomorrow ({tomorrowDay})</h3>
                            <ul className='px-0'>
                                {/* Placeholder drinks */}
                                {renderTomorrowMenuItems()}
                            </ul>
                        </div>
                    </div>
                    <MenuBtn />
                </div>
            </div>

            {/* Image gallery section */}

            {/* <ImageGallery /> */}

            {/* About Us section */}
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <img src={AboutImg} className='img-fluid w-50' alt="about img" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>About Us</h2>
                        <p>We inaugurated our establishment amidst the challenges of the pandemic, operating solely as a delivery-based restaurant called BackYard.
                            As newcomers to the industry, we embarked on a journey of learning, navigating through the complexities with determination.
                            However, shortly after our debut, we encountered setbacks that compelled us to temporarily cease operations.
                            Reflecting on our experiences, we conscientiously analyzed our missteps, diligently absorbing invaluable lessons from each one.
                            Today, fortified by our newfound wisdom, we stand resolute, committed to delivering exceptional service and culinary experiences that exceed expectations.
                            Welcome to our enduring commitment to excellence.</p>
                        {/* <Link to="/about">
                            <button type='button' className='btn btn-outline-success btn-lg'>More About Us</button>
                        </Link> */}
                    </div>
                </div>
            </div>

            {/* Contact section */}
            <div className='bg-dark text-light py-5 shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                            <ContactInfo />
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={ContactImage} className='img-fluid w-50' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
