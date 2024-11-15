
const Footer = () => {
    return (
        <div className='footer p-10 bg-gray-800 rounded-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center text-center lg:text-left'>
            <div className="logo-section">
                <div className="logoDiv">
                    <h1 className="logo text-2xl text-white pb-4 font-bold">
                        Access<span className="text-blue-500">Cloud</span>
                    </h1>
                </div>
                <p className='text-gray-300 opacity-70 leading-7'>
                    Secure and seamless access to your cloud resources.
                </p>
            </div>

            <div className='grid'>
                <span className='divTitle text-lg font-semibold py-3 text-gray-200'>
                    Project
                </span>
                <ul className='grid gap-2'>
                    <li><a href="#about" className='text-gray-400 hover:text-white'>About Us</a></li>
                    <li><a href="#careers" className='text-gray-400 hover:text-white'>Careers</a></li>
                    <li><a href="#press" className='text-gray-400 hover:text-white'>Press</a></li>
                    <li><a href="#partners" className='text-gray-400 hover:text-white'>Partners</a></li>
                </ul>
            </div>

            <div className='grid'>
                <span className='divTitle text-lg font-semibold py-3 text-gray-200'>
                    Resources
                </span>
                <ul className='grid gap-2'>
                    <li><a href="#documentation" className='text-gray-400 hover:text-white'>Documentation</a></li>
                    <li><a href="#api" className='text-gray-400 hover:text-white'>API Reference</a></li>
                    <li><a href="#guides" className='text-gray-400 hover:text-white'>Integration Guides</a></li>
                </ul>
            </div>

            <div className='grid'>
                <span className='divTitle text-lg font-semibold py-3 text-gray-200'>
                    Support
                </span>
                <ul className='grid gap-2'>
                    <li><a href="#contact" className='text-gray-400 hover:text-white'>Contact Support</a></li>
                    <li><a href="#security" className='text-gray-400 hover:text-white'>Security</a></li>
                    <li><a href="#status" className='text-gray-400 hover:text-white'>System Status</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
