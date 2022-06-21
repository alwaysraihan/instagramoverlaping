import React, { useEffect, useState } from "react";
import FollowersModal from "../components/FollowersModal";
import OverlappingFollowers from "../components/OverlappingFollowers";
import AbishekImg from "../assets/images/Abishek.jpg";
import GopalImg from "../assets/images/Gopal Sarda.jpg";
import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Line,
    ResponsiveContainer,
    Legend,
    BarChart,
    Bar,
} from "recharts";
const Home = ({ overlpaingUser, Followers1, Followers2 }) => {
    const [followersModal, setFollowersModal] = useState(null);
    const [charData, setChartData] = useState([]);
    const getChartData = async () => {
        const respnose = await fetch("chartData.json");
        setChartData(await respnose.json());
    };
    useEffect(() => {
        getChartData();
    }, []);
    const data = [
        {
            name: "𝑨𝒃𝒉𝒊𝒔𝒉𝒆𝒌 𝑪𝒉𝒐𝒖𝒅𝒉𝒂𝒓𝒚",
            FollowersCount: 8003,
            overlap: overlpaingUser.length,
        },
        {
            name: "Gopal Sarda",
            FollowersCount: 8008,
            overlap: overlpaingUser.length,
        },
    ];
    return (
        <>
            <div className="px-[5%] md:px-[10%] py-10  ">
                <h1 className="text-center text-2xl md:text-3xl font-bold text-info mb-8">
                    Influencer Information
                </h1>
                {/* home top  */}
                <div className="grid  grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex flex-col md:flex-row justify-between items-center p-10 bg-white rounded-lg shadow-lg">
                        <div>
                            <img
                                className="h-28 w-28 md:h-64 md:w-64 lg:h-48 lg:w-48 2xl:h-64 2xl:w-64 rounded-full"
                                src={AbishekImg}
                                alt="profile"
                            />
                        </div>
                        <div>
                            <h1 className="text-center mb-3">Information</h1>
                            <h1>username: zgodofficial</h1>

                            <h1>Name: 𝑨𝒃𝒉𝒊𝒔𝒉𝒆𝒌 𝑪𝒉𝒐𝒖𝒅𝒉𝒂𝒓𝒚</h1>
                            <h1>Category: Gamer</h1>

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
                    <div className="flex flex-col md:flex-row justify-between items-center p-10 bg-white rounded-lg shadow-lg">
                        <div>
                            <img
                                className="h-28 w-28 md:h-64 md:w-64 lg:h-48 lg:w-48 2xl:h-64 2xl:w-64 rounded-full"
                                src={GopalImg}
                                alt="profile"
                            />
                        </div>
                        <div>
                            <h1 className="text-center mb-3">Information</h1>
                            <h1>username: hastarbtc</h1>
                            <h1>
                                Name:{" "}
                                <span className="font-semibold">
                                    Gopal Sarda
                                </span>
                            </h1>
                            <h1>Category: Gamer</h1>

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

                {followersModal && (
                    <FollowersModal Followers={followersModal} />
                )}

                <div className="md:flex mt-10  justify-between items-center p-2 md:p-4 xl:p-8 2xl:p-10 bg-white rounded-lg shadow-xl">
                    <div className="w-full py-5 px-2 lg:py-0 lg:px-0 lg:w-[50%] md:px-4 leading-6 font-semibold text-gray-600 xl:px-8 ">
                        <h1 className="mb-5 text-center md:text-xl font-semibold">
                            𝑨𝒃𝒉𝒊𝒔𝒉𝒆𝒌 𝑪𝒉𝒐𝒖𝒅𝒉𝒂𝒓𝒚{" "}
                            <span className="font-thin">VS</span>{" "}
                            <span className="font-bold">Gopal Sarda</span>
                        </h1>
                        <h1>
                            Here we count the 8003 followers of Abhishek and the
                            number of Gopal 8008 followers. The total number of
                            followers here is 16011 And {overlpaingUser.length}{" "}
                            total overlapping users were found.
                        </h1>
                    </div>
                    <div className="w-full lg:w-[50%] h-full ">
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="FollowersCount" fill="#8884d8" />
                                <Bar dataKey="overlap" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            {/* <OverlappingFollowers overlpaingUser={overlpaingUser} /> */}
        </>
    );
};

export default Home;
