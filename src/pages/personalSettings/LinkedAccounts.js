import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LinkNewAccount from "../../reuseComponents/LinkNewAccount";



function LinkedAccounts(){
    return (
        <div>
            <Navbar />

            <div>
            <Link to="/myaccount">
            <button className=' text-dark-green text-2xl font-semibold mt-5 ml-10 underline'>Back</button>
            </Link>
            </div>
            
            <div className='flex justify-center text-semibold text-4xl py-5'>
            <h1>Linked Accounts</h1>
            </div>
            
            <div>
                
            <LinkNewAccount />

            </div>

            <div className='space-x-12 drop-shadow-xl text-center pb-12'>
        <Link to="/myaccount">
          <button className='bg-dark-green text-white text-sm py-3 px-12 rounded-full mt-12 font-normal mx-auto'>
            Return to Account Settings
          </button>
        </Link>
      </div> 
            
    
          <Footer />
    
        </div>
    
    )
    }

export default LinkedAccounts;