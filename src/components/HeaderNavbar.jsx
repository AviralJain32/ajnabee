import React from 'react';

const LandingPage = () => {
    const navLinks=["Home","Near You","About","Contact"];
    return (
        <>
            <div className="flex text-xl justify-between bg-transparent text-white h-10vh max-w-full px-10 py-5 items-center sticky top-0 z-50">
                <div className="border-2 border-white rounded-3xl px-8 py-1 hover:cursor-pointer">Get App</div> 
                <div className="text-white">
                    {navLinks.map((links,index) => (
                        <a key={index} href={`/${links}`} className="text-white px-10">{links}</a>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-white mr-6">Login</span>
                    {/* <button className="border-2 border-yellow-400 rounded-3xl px-4 bg-yellow-400 text-black">Sign up</button> */}
                    <button className=" border-2 border-yellow-400 rounded-full px-4 bg-yellow-400 text-black ">Sign up</button>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
