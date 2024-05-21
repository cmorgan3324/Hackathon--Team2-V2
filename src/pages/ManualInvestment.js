import React from 'react'
import DOB from '../reuseComponents/DOB'
import EmploymentStatus from '../reuseComponents/EmploymentStatus'
import YearlyIncome from '../reuseComponents/YearlyIncome'
import SSN from '../reuseComponents/SSN'
import BankAccount from '../reuseComponents/BankAccount'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ManualInvestment() {
  return (
    <div>     
      <Navbar />
      <button className='text-dark-green text-2xl font-semibold mt-5 ml-10 underline'>Back</button>
      <div className="text-center font-semibold text-4xl mt-5">
        <h1>Account Setup: Manual Investment</h1>
        <DOB />
        <EmploymentStatus />
        <YearlyIncome />
        <SSN />
        <BankAccount />
      </div>        
      <Footer />
    </div>
  )
}

export default ManualInvestment