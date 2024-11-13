/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [walletAddress, setWalletAddress] = useState(null);
    const [isConnected, setIsConnected] = useState(false);

    // Check if MetaMask is installed
    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', handleAccountChange);
            window.ethereum.on('chainChanged', handleChainChange);
            checkWalletConnection();
        }
    }, []);

    // Function to handle MetaMask account change
    const handleAccountChange = (accounts) => {
        if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
            setIsConnected(true);
        } else {
            setWalletAddress(null);
            setIsConnected(false);
        }
    };

    // Function to handle MetaMask network (chain) change
    const handleChainChange = (chainId) => {
        // You can handle network changes if needed here
    };

    // Check wallet connection
    const checkWalletConnection = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
            setIsConnected(true);
        }
    };

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setWalletAddress(accounts[0]);
                setIsConnected(true);
            } catch (error) {
                console.error('MetaMask connection error:', error);
            }
        } else {
            alert('Please install MetaMask!');
        }
    };

    return (
        <div className='navbar flex justify-between items-center py-[1.5rem] px-[2rem] bg-gray-800 shadow-md text-white'>
            {/* Logo Section */}
            <Link to='/'>
            <div className="logoDiv">
                <h1 className="logo text-[28px] font-bold text-blue-400 tracking-wider">
                    Access<span className="text-white">Cloud</span>
                </h1>
            </div>
            </Link>

            {/* Menu Items for Desktop */}
            <div className="hidden md:flex gap-8 items-center">
                <Link to="/dashboard">
                    <li className="menuList list-none text-[18px] font-medium hover:text-blue-400 transition-all duration-300 cursor-pointer">
                        Dashboard
                    </li>
                </Link>
                <Link to="/access-control">
                    <li className="menuList list-none text-[18px] font-medium hover:text-blue-400 transition-all duration-300 cursor-pointer">
                        Access Control
                    </li>
                </Link>
                <Link to="/file-management">
                    <li className="menuList list-none text-[18px] font-medium hover:text-blue-400 transition-all duration-300 cursor-pointer">
                        File Management
                    </li>
                </Link>
                <Link to="/logs">
                    <li className="menuList list-none text-[18px] font-medium hover:text-blue-400 transition-all duration-300 cursor-pointer">
                        Logs
                    </li>
                </Link>
                
                <Link to="/profile">
                    <li className="menuList list-none text-[18px] font-medium hover:text-blue-400 transition-all duration-300 cursor-pointer">
                        Profile
                    </li>
                </Link>
                <Link to="/logout">
                    <li className="menuList list-none text-[18px] font-medium text-red-500 hover:text-red-600 transition-all duration-300 cursor-pointer">
                        Logout
                    </li>
                </Link>
                {/* Connect Wallet Button */}
                <button
                    onClick={connectWallet}
                    className={`py-2 px-6 rounded-lg font-semibold ${isConnected ? 'bg-green-600' : 'bg-blue-600'} hover:bg-blue-500 transition duration-200`}
                >
                    {isConnected ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
                </button>
            </div>

            {/* Hamburger Icon for Mobile View */}
            <div className="md:hidden flex items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-[5rem] left-0 w-full bg-gray-800 shadow-lg md:hidden flex flex-col gap-6 py-6 px-6">
                    <Link to="/dashboard">
                        <li className="menuList list-none text-[18px] font-medium text-white hover:text-blue-400 transition-all duration-300 cursor-pointer">
                            Dashboard
                        </li>
                    </Link>
                    <Link to="/access-control">
                        <li className="menuList list-none text-[18px] font-medium text-white hover:text-blue-400 transition-all duration-300 cursor-pointer">
                            Access Control
                        </li>
                    </Link>
                    <Link to="/file-management">
                        <li className="menuList list-none text-[18px] font-medium text-white hover:text-blue-400 transition-all duration-300 cursor-pointer">
                            File Management
                        </li>
                    </Link>
                    <Link to="/logs">
                        <li className="menuList list-none text-[18px] font-medium text-white hover:text-blue-400 transition-all duration-300 cursor-pointer">
                            Logs
                        </li>
                    </Link>
                    <Link to="/settings">
                        <li className="menuList list-none text-[18px] font-medium text-white hover:text-blue-400 transition-all duration-300 cursor-pointer">
                            Settings
                        </li>
                    </Link>
                    <Link to="/profile">
                        <li className="menuList list-none text-[18px] font-medium text-white hover:text-blue-400 transition-all duration-300 cursor-pointer">
                            Profile
                        </li>
                    </Link>
                    <Link to="/logout">
                        <li className="menuList list-none text-[18px] font-medium text-red-500 hover:text-red-600 transition-all duration-300 cursor-pointer">
                            Logout
                        </li>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default NavBar;
