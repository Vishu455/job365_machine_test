import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const CreatePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else if (!isChecked) {
      setError('You must agree to the terms');
    } else {
      setError('');
      console.log('Account created');
    }
  };

  return (
    <div >
      <div className="text-center mb-8 ">

      </div>
      <div className="bg-card p-8 ml-10 rounded-lg shadow-none w-full max-w-md border-none">
        <h2 className=" not-italic font-sans font-bold text-2xl text-sky-600">Create Password</h2>
        <br />
        <form onSubmit={handleSubmit}>

          <div className="mb-4 relative">

            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="w-full p-2 pl-4 border border-border rounded-[15px]"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash className="text-sky-600" />  :<FaEye className="text-sky-600" /> }
            </span>
          </div>


          <div className="mb-4 relative">

            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirm-password"
              className="w-full p-2 pl-4 border border-border rounded-[15px]"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ?  <FaEyeSlash className="text-sky-600" /> : <FaEye className="text-sky-600" />}
            </span>
          </div>


          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}


          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="terms"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="mr-2"
              required
            />
            <label htmlFor="terms" className="  text-sm text-muted-foreground">
              By clicking on "Sign up", you’re agreeing to the Job 365<span className="text-sky-500" >Terms of Service</span> and <span className="text-sky-500" >Privacy Policy</span>
            </label>
          </div>


          <button type="submit" className=" font-bold w-full p-2 border border-border rounded-[15px] text-white bg-sky-600">
            Create Account
          </button>
        </form>


      </div>
    </div>
  );
};

export default CreatePassword;
