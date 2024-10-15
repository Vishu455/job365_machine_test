import React, { useState } from 'react';

const AccountDetails = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [pinCode, setPinCode] = useState('');

    return (
        <div className="p-4">
            <h1 className="text-2xl text-stone-700 font-bold">Create Account</h1>

            <h2 className="font-bold pt-2 text-lg text-sky-600">Personal Information</h2>
            <form className="mt-4 space-y-4">
                <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full p-2 pl-4 border border-gray-100 rounded-[50px]"
                />

                <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full p-2 pl-4 border border-gray-100 rounded-[50px]"
                />
                <input
                    type="tel"
                    placeholder="Mobile no"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value.replace(/\D/g, ''))} 
                    className="w-full p-2 pl-4 border border-gray-100 rounded-[50px]"
                    pattern="\d*"
                    // inputMode="numeric" 
                />
                <input
                    type="email"
                    placeholder="Email id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2  pl-4 border border-gray-100 rounded-[50px]"
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full p-2 pl-4 border border-gray-100 rounded-[50px]"
                />
                <div className="flex space-x-2">
                    <select
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-full p-2 pl-4 border border-gray-300 rounded-[50px] text-gray-400"
                    >
                        <option value="" disabled hidden>
                            Select state
                        </option>
                        <option value="state1">Maharashtra</option>
                        <option value="state2">Kerala</option>
                        <option value="state3">karnataka</option>
                    </select>

                    <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full p-2 pl-4 border border-gray-500 rounded-[50px] text-gray-400"
                    >
                        <option value="" disabled hidden>
                            Select city
                        </option>
                        <option value="city1">Mumbai</option>
                        <option value="city2">Trivandrum</option>
                        <option value="city3">Bengaluru</option>
                    </select>
                </div>
                <input
                    type="text"
                    placeholder="Pin code"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    className="w-full p-2 pl-4 border border-gray-100 rounded-[50px]"
                />
            </form>
        </div>
    );
};

export default AccountDetails;
