import React from 'react'
import {FiChevronRight} from "react-icons/fi"
const Admission = () => {
  return (
    <div className="wrapper bg-gray-600">
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    
      <div className="border-2 border-gray-900 m-4">
        <card className="card">
          <img src="./images/Feature/adm.png" alt="" />
          <h3>Admission Information</h3>
          <p>
            For enrollment and enquiry call us @+919073985529 , +919836067424
            .
          </p>
          <button type="button" className="btn">LEARN MORE</button>
        </card>
      </div>
    
      <div className="border-2 border-gray-900 m-4">
        <card className="card">
          <img src="./images/Feature/adm2.png" alt="" />
          <h3>Session 2021-2022</h3>
         
          <div className="flex justify-evenly items-center pl-2 pr-2 pb-4">
            <div className="bg-lightYellow w-6 h-6 rounded-full">
              <span className="text-white"><FiChevronRight /></span>
            </div>
            <div>Announcements</div>
          </div>
         
          <div className="flex justify-evenly items-center pl-2 pr-2 pb-4">
            <div className="bg-lightYellow w-6 h-6 rounded-full">
              <span className="text-white"><FiChevronRight /></span>
            </div>
            <div>School Calender</div>
          </div>
         
          <div className="flex justify-evenly items-center pl-2 pr-2 pb-4">
            <div className="bg-lightYellow w-6 h-6 rounded-full">
              <span className="text-white"><FiChevronRight /></span>
            </div>
            <div>Awards and achievements</div>
          </div>
         
          <div className="flex justify-evenly items-center pl-2 pr-2 pb-4">
            <div className="bg-lightYellow w-6 h-6 rounded-full">
              <span className="text-white"><FiChevronRight /></span>
            </div>
            <div>ICSE and ISC result</div>
          </div>
          
        </card>
      </div>
    
      <div className="border-2 border-gray-900 m-4">
        <card className="card">
          <img src="./images/Feature/adm3.png" alt="" />
          <h3>Academics</h3>
         
          <div className="flex justify-evenly items-center pl-2 pr-2 pb-4">
            <div className="bg-fadedGreen w-6 h-6 rounded-full">
              <span className="text-white"><FiChevronRight /></span>
            </div>
            <div>Syllabus</div>
          </div>
        
          <div className="flex justify-evenly items-center pl-2 pr-2 pb-4">
            <div className="bg-fadedGreen w-6 h-6 rounded-full">
              <span className="text-white"><FiChevronRight /></span>
            </div>
            <div>Exam Schedule</div>
          </div>
       
          <div className="flex justify-evenly items-center pl-2 pr-2 pb-4">
            <div className="bg-fadedGreen w-6 h-6 rounded-full">
              <span className="text-white"><FiChevronRight /></span>
            </div>
            <div>Subjects we offer</div>
          </div>
         
          <div className="flex justify-evenly items-center pl-2 pr-2 pb-4">
            <div className="bg-fadedGreen w-6 h-6 rounded-full">
              <span className="text-white"><FiChevronRight /></span>
            </div>
            <div>List of Toppers</div>
          </div>
        
        </card>
      </div>
     
      <div className="border-2 border-gray-900 m-4">
        <card className="card">
          <img src="./images/Feature/adm4.png" alt="" />
          <h3>Transport</h3>
         
          <div className="flex justify-evenly items-center pl-2 pr-2 pb-4">
            <div className="bg-lightOrange w-6 h-6 rounded-full">
              <span className="text-white"><FiChevronRight /></span>
            </div>
            <div>Bus Routes</div>
          </div>
         
          <div className="flex justify-evenly items-center pl-2 pr-2 pb-4">
            <div className="bg-lightOrange w-6 h-6 rounded-full">
              <span className="text-white"><FiChevronRight /></span>
            </div>
            <div>Do's and Don'ts</div>
          </div>
         
          <div className="flex justify-evenly items-center pl-2 pr-2 pb-4">
            <div className="bg-lightOrange w-6 h-6 rounded-full">
              <span className="text-white"><FiChevronRight /></span>
            </div>
            <div>Contact Information</div>
          </div>
         
        </card>
      </div>
    
    </div>
  </div>
  )
}

export default Admission