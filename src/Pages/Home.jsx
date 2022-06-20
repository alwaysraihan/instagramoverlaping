import React from "react";

const Home = () => {
    return (
        <div className="px-[10%] py-10 ">
            {/* home top  */}
            <div className="grid grid-cols-2 gap-8">
                <div className="flex justify-between items-center p-10 bg-white rounded-lg shadow-lg">
                    <div>
                        <img
                            className="h-64 w-64"
                            src="https://influcracy.com/static/media/shruti.c1356eef.png"
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
                            <button className="btn btn-info  text-white">
                                See Follower List
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center p-10 bg-white rounded-lg shadow-lg">
                    <div>
                        <img
                            className="h-64 w-64"
                            src="https://influcracy.com/static/media/shruti.c1356eef.png"
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
                            <button className="btn btn-info  text-white">
                                See Follower List
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
