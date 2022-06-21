// import Influencer1 from "zgodofficial8003followers.json";

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

// import Influencer2 from "hastarbtc8008followers.json";
function App() {
    const [Influencer1, setInfluencer1] = useState([]);
    const [Influencer2, setInfluencer2] = useState([]);
    useEffect(() => {
        fetch("zgodofficial8003followers.json")
            .then((res) => res.json())
            .then((data) => setInfluencer1(data));
    }, []);
    useEffect(() => {
        fetch("hastarbtc8008followers.json")
            .then((res) => res.json())
            .then((data) => setInfluencer2(data));
    }, []);

    const data1 = [];
    const data2 = [];
    Influencer1.forEach((activity) => {
        data1.push(activity);
    });

    Influencer2.forEach((activity) => {
        data2.push(activity);
    });
    const infuencerData1 = [];
    const infuencerData2 = [];
    data1.map((user) => {
        return infuencerData1.push(user.username);
    });

    data2.map((user) => {
        return infuencerData2.push(user.username);
    });

    const overlpaingUser = infuencerData1.filter((element) =>
        infuencerData2.includes(element)
    );

    return (
        <div className="bg-gray-50 min-h-screen">
            <Routes>
                <Route
                    path="/"
                    element={
                        <RequireAuth>
                            <Home />
                        </RequireAuth>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    );
}

export default App;
