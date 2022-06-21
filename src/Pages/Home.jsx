import React, { useState } from "react";
import FollowersModal from "../components/FollowersModal";
import OverlappingFollowers from "../components/OverlappingFollowers";
import AbishekImg from "../assets/images/Abishek.jpg";
import GopalImg from "../assets/images/Gopal Sarda.jpg";
const Home = ({ overlpaingUser, Followers1, Followers2 }) => {
    const [followersModal, setFollowersModal] = useState(null);
    return (
        <>
            <div className="px-[10%] py-10 ">
                <h1 className="text-center text-3xl font-bold text-info mb-8">
                    Influencer Information
                </h1>
                {/* home top  */}
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex justify-between items-center p-10 bg-white rounded-lg shadow-lg">
                        <div>
                            <img
                                className="h-64 w-64 rounded-full"
                                src={AbishekImg}
                                alt="profile"
                            />
                        </div>
                        <div>
                            <h1 className="text-center mb-3">Information</h1>
                            <h1>username: zgodofficial</h1>

                            <h1>Name: 𝑨𝒃𝒉𝒊𝒔𝒉𝒆𝒌 𝑪𝒉𝒐𝒖𝒅𝒉𝒂𝒓𝒚</h1>
                            <h1>Name: Gamer</h1>

                            <h1>359K followers</h1>
                            <div className="flex justify-center mt-3 ">
                                <button
                                    onClick={() =>
                                        setFollowersModal(Followers1)
                                    }
                                >
                                    <label
                                        for="followersModal"
                                        class="btn btn-info  text-white modal-button"
                                    >
                                        See Follower List
                                    </label>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-10 bg-white rounded-lg shadow-lg">
                        <div>
                            <img
                                className="h-64 w-64 rounded-full"
                                src={GopalImg}
                                alt="profile"
                            />
                        </div>
                        <div>
                            <h1 className="text-center mb-3">Information</h1>
                            <h1>username: hastarbtc</h1>
                            <h1>Name: Gopal Sarda</h1>
                            <h1>Name: Gamer</h1>

                            <h1>135K followers</h1>
                            <div className="flex justify-center mt-3 ">
                                <button
                                    onClick={() =>
                                        setFollowersModal(Followers2)
                                    }
                                >
                                    <label
                                        for="followersModal"
                                        class="btn btn-info  text-white modal-button"
                                    >
                                        See Follower List
                                    </label>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <OverlappingFollowers overlpaingUser={overlpaingUser} /> */}
            {followersModal && <FollowersModal Followers={followersModal} />}
        </>
    );
};

export default Home;
