import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <img className='h-20 ' src="/Dukaan.png" alt="" />
                <p>Dokaan Online Shop BD </p>
                <p>Providing reliable tech since 1992</p>
                <div className='flex gap-3'>
                    <p className='text-2xl'><FaFacebook /></p>
                    <p className='text-2xl'><FaInstagram /></p>
                    <p className='text-2xl'><FaTwitter /></p>
                    <p className='text-2xl'><FaLinkedin /></p>
                    <p className='text-2xl'><FaYoutube /></p>
                </div>
            </div>
            <div>
                <span className="footer-title"> About</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title"> Partnership</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Information</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div>
                <p>Get App</p>
                <div className='flex flex-col gap-5'>
                    <img src="/gg.svg" alt="" />
                    <img src="/market.png" alt="" />
                </div>
            </div>


        </footer>
    )
}
