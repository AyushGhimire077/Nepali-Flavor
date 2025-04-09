import React, { useContext, useState } from 'react';
import { MainContext } from '../context/MainProvider';

const InputField = ({ id, label, type = "text", value, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
    <input  type={type}  id={id}  value={value}  onChange={onChange}  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"  />
  </div>
);

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { handleUserRegister, handleUserLogin } = useContext(MainContext);

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin) {
      handleUserRegister(userName, email, password);
    } else {
      handleUserLogin(email, password);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-5 ">
      <div className="w-full sm:w-[90%] md:max-w-md p-6 sm:p-8 bg-[#ccc] shadow-lg rounded-lg mb-40">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#27374D] text-center mb-6">
          {isLogin ? 'Login' : 'Register'}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <InputField  id="name"  label="Full Name"  value={userName}  onChange={(e) => setUserName(e.target.value)} />
          )}
          <InputField  id="email"  label="Email"  type="email"  value={email}  onChange={(e) => setEmail(e.target.value)} />
          <InputField  id="password"  label="Password"  type="password"  value={password}  onChange={(e) => setPassword(e.target.value)}  />

          <button type="submit" className="bg-[#526D82] hover:bg-[#27374D] text-white py-2 text-base sm:text-lg px-8 sm:px-12 rounded-full mx-auto block transition duration-500">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <button onClick={toggleForm} className="mt-4 text-sm text-cyan-800 hover:underline w-full text-center transition duration-200">
          {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default Auth;
