import React from 'react';
import './PromoContent.css';
import { FaGraduationCap } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
const PromoContent = () => {
    return (
        <div style={{ backgroundColor: '#556B2F' }} className="promo">

            <div className='promoitem'>
                <FaGraduationCap className='icon' />
                <h4 style={{ fontWeight: 1000, marginBottom: '1rem' }}>Certificate</h4>
                <span style={{ fontSize: '1rem' }}>A Google Docs scam that appears to be widespread began landing in Wednesday  what seemed to be a phishing attack.</span>
            </div>

            <div className='promoitem'>
                <BsPersonFill className='icon' />
                <h4 style={{ fontWeight: 1000, marginBottom: '1rem' }}>Expert Instructors</h4>
                <span style={{ fontSize: '1rem' }}>A Google Docs scam that appears to be widespread began landing in Wednesday  what seemed to be a phishing attack.</span>
            </div>

            <div className='promoitem'>
                <FaBrain className='icon' />
                <h4 style={{ fontWeight: 1000, marginBottom: '1rem' }}>Learn from anywhere</h4>
                <p style={{ fontSize: '1rem' }}>A Google Docs scam that appears to be widespread began landing in Wednesday  what seemed to be a phishing attack.</p>
            </div>
        </div>
    );
};

export default PromoContent;