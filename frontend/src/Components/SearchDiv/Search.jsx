/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Search = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl bg-white rounded-lg shadow-lg p-8 space-y-6">
                <h1 className="text-3xl font-bold text-center text-gray-900">
                    Blockchain-Based Security Schema in the Cloud
                </h1>
                <p className="text-lg text-gray-700 text-center leading-relaxed">
                    Our project leverages the power of blockchain technology to revolutionize the security landscape in cloud computing. By integrating decentralized systems, we aim to provide enhanced data privacy, integrity, and authentication for cloud-based services. 
                    This innovative approach ensures that critical information is not only secured but also transparent, tamper-proof, and resistant to centralized vulnerabilities.
                </p>

                <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                    <p>
                        <span className="font-semibold text-gray-800">Key Features:</span>
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Decentralized access control and authentication for cloud environments</li>
                        <li>Secure storage and sharing of sensitive data with blockchain-backed encryption</li>
                        <li>Improved transparency and auditability of cloud transactions</li>
                        <li>Reduced risk of centralized attacks by distributing data and management</li>
                        <li>Integration with existing cloud infrastructure for seamless adoption</li>
                    </ul>
                </div>

                <p className="text-lg text-gray-700 text-center leading-relaxed">
                    With this solution, cloud providers and organizations can ensure the highest levels of security, while businesses and individuals can have full control over their data and digital identity. This blockchain-based schema is designed to adapt to a wide range of use cases in the cloud computing domain, from enterprise-scale systems to personal cloud storage.
                </p>

                <div className="text-center">
                    <span className="text-xl font-semibold text-gray-800">Empowering the Future of Cloud Security with Blockchain Technology</span>
                </div>
            </div>
        </div>
    );
}

export default Search;
