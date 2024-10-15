import React, { useState } from 'react';

const EducationalDetails = () => {
  
  const [qualification, setQualification] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [idCard, setIdCard] = useState('');
  const [panCard, setPanCard] = useState('');

  return (
    <div className="p-4">
      <h2 className="font-bold text-lg text-sky-600">Educational Details</h2>
      <form className="mt-4 space-y-4">
        <div className="flex flex-col space-y-4">
          <select
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            className="w-full p-2 border border-gray-200 rounded-[50px] text-gray-500"
          >
            <option value="" disabled hidden>
              Educational Qualification
            </option>
            <option value="highschool">High School</option>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="phd">PhD</option>
          </select>

          <h2 className="font-bold text-lg text-sky-600">Account Details</h2>

          <input
            type="text"
            placeholder="Bank Account number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="w-full p-2 pl-4 border border-gray-200 rounded-[50px]"
          />
          <input
            type="text"
            placeholder="IFSC Code"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value)}
            className="w-full p-2 pl-4 border border-gray-200 rounded-[50px]"
          />

          <select
            value={idCard}
            onChange={(e) => setIdCard(e.target.value)}
            className="w-full p-2 border border-gray-400 rounded-[50px] text-gray-500"
          >
            <option value="" disabled hidden>
              Select ID Card
            </option>
            <option value="aadhaar">Aadhaar Card</option>
            <option value="voter">Voter ID</option>
            <option value="passport">Passport</option>
            <option value="driving">Driving License</option>
          </select>

          <input
            type="text"
            placeholder="Pancard Number"
            value={panCard}
            onChange={(e) => setPanCard(e.target.value.replace(/\D/g, ''))}
            className="w-full p-2 pl-4 border border-gray-200 rounded-[50px]"
            pattern="\d*"
            inputMode="numeric" 
          />
        </div>
      </form>
    </div>
  );
};

export default EducationalDetails;
