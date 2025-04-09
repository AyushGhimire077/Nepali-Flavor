import { createContext, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Create the context
const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    const backendUrl = "http://localhost:8000";
    const [isLoggedin, setIsLogin] = useState(false);
    const navigate = useNavigate();

    // Handle Register
    const handleUserRegister = useCallback(async (userName, email, password) => {
        if (!userName || !password || !email) {
            toast.error("All fields are required");
            return;
        }

        try {
            const { data } = await axios.post(
                `${backendUrl}/api/auth/register`,
                { userName, email, password },
                { withCredentials: true }
            );

            if (data.success) {
                navigate('/');
                toast.success(data.message || "User registered successfully");
            } else {
                toast.error(data.message || "Registration failed");
            }
        } catch (error) {
            console.error("Error during registration:", error);
            toast.error("Something went wrong, please try again");
        }
    }, [backendUrl, navigate]);

    // Handle Login
    const handleUserLogin = useCallback(async (email, password) => {
        if (!email || !password) {
            toast.error("All fields are required");
            return;
        }

        try {
            const { data } = await axios.post(
                `${backendUrl}/api/auth/login`,
                { email, password },
                { withCredentials: true }
            );

            if (data.success) {
                navigate('/');
                toast.success(data.message || "User logged in successfully");
            } else {
                toast.error(data.message || "Login failed");
            }
        } catch (error) {
            console.error(error);
            toast.error("Internal server error");
        }
    }, [backendUrl, navigate]);

    // Handle Logout
    const handleUserLogout = useCallback(async () => {
        try {
            const { data } = await axios.post(
                `${backendUrl}/api/auth/logout`,
                {},
                { withCredentials: true }
            );

            if (data.success) {
                setIsLogin(false);
                navigate('/');
                toast.success(data.message || "User logged out successfully");
            } else {
                toast.error("Logout failed");
            }
        } catch (error) {
            console.error("Error during logout:", error);
        }
    }, [backendUrl, navigate]);

    // Check if user is logged in
    const checkUserLogged = useCallback(async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/auth/check-auth`, {
                withCredentials: true,
            });
            if (data.success) {
                setIsLogin(true);
            }
        } catch (error) {
            setIsLogin(false);
        }
    }, [backendUrl]);

    // On mount, check if user is logged in
    useEffect(() => {
        checkUserLogged();
    }, [checkUserLogged, navigate, isLoggedin]);

    const value = {
        handleUserRegister,
        handleUserLogin,
        checkUserLogged,
        handleUserLogout,
        isLoggedin,
    };

    return (
        <MainContext.Provider value={value}>
            {children}
        </MainContext.Provider>
    );
};

export { MainContext, MainContextProvider };
