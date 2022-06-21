import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase-Setup/firebase.init";

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    };
    return (
        <div className="bg-black py-5 flex justify-between items-center px-[5%] md:px-[10%]">
            <h1 className="text-center text-white text-xl font-semibold uppercase">
                influcerrcy
            </h1>
            {user ? (
                <div className="relative antialiased -order-1 lg:order-1">
                    <div className=" group cursor-pointer relative ">
                        {user.photoURL ? (
                            <img
                                className="w-14 h-14 rounded-full"
                                src={user.photoURL}
                                alt="profile"
                            />
                        ) : (
                            <img
                                className="w-14 h-14 rounded-full"
                                src="https://i.ibb.co/KDfw63R/Pngtree-business-male-icon-vector-4187852.png"
                                alt="profile"
                            />
                        )}

                        <div className="absolute   hidden right-0 top-0 mt-10 bg-white rounded-md shadow-lg  lg:group-hover:block hover:block">
                            <div>
                                <div className="flex flex-col p-4 space-y-1 font-medium border-b">
                                    <span className="text-gray-800">
                                        {user.displayName
                                            ? user.displayName
                                            : "User"}
                                    </span>
                                    <span className="text-sm text-gray-400">
                                        {user.email
                                            ? user.email
                                            : "dealer@example.com"}
                                    </span>
                                </div>

                                <div className="flex items-center text-xl justify-center p-4 text-blue-600 underline border-t">
                                    <span onClick={handleSignOut}>Logout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Header;
