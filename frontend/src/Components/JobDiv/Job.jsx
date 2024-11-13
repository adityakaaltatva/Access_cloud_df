/* eslint-disable no-unused-vars */
import { BiTimeFive } from "react-icons/bi";
import { FaBriefcase } from "react-icons/fa"; // Icon for access type
import { AiOutlineShop } from "react-icons/ai"; // Icon for organization
import { MdLocationOn } from "react-icons/md"; // Icon for access location
import { AiOutlineFileAdd } from "react-icons/ai"; // Icon for file upload

// Sample data to replace job listings with access permissions
const Data = [
    {
        id: 1,
        title: 'View Access',
        time: '10 mins ago',
        location: 'Ethereum Mainnet',
        desc: 'Grant read-only access to the specified user.',
        organization: 'AWS S3'
    },
    {
        id: 2,
        title: 'Upload Permission',
        time: 'Just now',
        location: 'Polygon Network',
        desc: 'Grant permission to upload files to the cloud storage.',
        organization: 'Decentralized S3'
    },
    {
        id: 3,
        title: 'Admin Access',
        time: '1 hr ago',
        location: 'Testnet',
        desc: 'Admin access to manage permissions and view logs.',
        organization: 'Cloud Management'
    },
];

const Permissions = () => {
    return (
        <div className="py-12 px-6 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="permissionContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {Data.map(({ id, title, time, location, desc, organization }) => (
                        <div
                            key={id}
                            className="group singlePermission w-full p-[25px] bg-white rounded-[15px] hover:bg-green-600 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
                        >
                            <div className="flex justify-between items-center">
                                <h1 className="text-[18px] font-semibold text-gray-800 group-hover:text-white flex items-center">
                                    <FaBriefcase className="mr-2 text-green-600 group-hover:text-white" />
                                    {title}
                                </h1>
                                <span className="flex items-center text-gray-500 gap-1">
                                    <BiTimeFive /> {time}
                                </span>
                            </div>
                            <h6 className="text-gray-500 mt-2 flex items-center">
                                <MdLocationOn className="mr-1 text-gray-500" />
                                {location}
                            </h6>
                            <p className="text-[14px] text-gray-600 mt-4 border-t-[1px] pt-[10px] group-hover:text-white">
                                {desc}
                            </p>
                            <div className="organization flex items-center gap-3 mt-4">
                                <AiOutlineShop className="w-[12%] h-[12%] text-gray-500" />
                                <span className="text-[14px] text-gray-700 group-hover:text-white">
                                    {organization}
                                </span>
                            </div>
                            <button className="mt-6 bg-green-600 text-white w-full py-[10px] rounded-[10px] font-semibold group-hover:bg-white group-hover:text-green-600 transition-colors">
                                Request Access
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Permissions;
