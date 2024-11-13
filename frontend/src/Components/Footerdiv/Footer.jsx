
const Footer = () => {
    return (
        <div className='footer p-[5rem] mb-4 bg-gray-800 rounded-[10px] gap-[8px] grid grid-cols-5 m-auto items-center justify-center'>
            <div>
                <div className="logoDiv">
                    <h1 className="logo text-[25px] text-white pb-[1.5rem]">
                        <strong>Access</strong>Cloud
                    </h1>
                </div>
                <p className='text-gray-300 pb-[13px] opacity-70 leading-7'>
                    Secure and seamless access to your cloud resources.
                </p>
            </div>

            <div className='grid'>
                <span className='divTitle text-[18px] font-semibold py-[1.5rem] text-gray-200'>
                    Company
                </span>

                <div className='grid gap-3'>
                    <li className='text-gray-400 hover:text-white cursor-pointer'>About Us</li>
                    <li className='text-gray-400 hover:text-white cursor-pointer'>Careers</li>
                    <li className='text-gray-400 hover:text-white cursor-pointer'>Press</li>
                    <li className='text-gray-400 hover:text-white cursor-pointer'>Partners</li>
                </div>
            </div>

            <div className='grid'>
                <span className='divTitle text-[18px] font-semibold py-[1.5rem] text-gray-200'>
                    Resources
                </span>

                <div className='grid gap-3'>
                    <li className='text-gray-400 hover:text-white cursor-pointer'>Documentation</li>
                    <li className='text-gray-400 hover:text-white cursor-pointer'>API Reference</li>
                    <li className='text-gray-400 hover:text-white cursor-pointer'>Integration Guides</li>
                </div>
            </div>

            <div className='grid'>
                <span className='divTitle text-[18px] font-semibold py-[1.5rem] text-gray-200'>
                    Support
                </span>

                <div className='grid gap-3'>
                    <li className='text-gray-400 hover:text-white cursor-pointer'>Contact Support</li>
                    <li className='text-gray-400 hover:text-white cursor-pointer'>Security</li>
                    <li className='text-gray-400 hover:text-white cursor-pointer'>System Status</li>
                </div>
            </div>

            

                
            </div>
        
    );
};

export default Footer;
