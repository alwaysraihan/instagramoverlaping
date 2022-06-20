// import Influencer1 from "zgodofficial8003followers.json";

import { useEffect, useState } from "react";

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
    const infu1 = [];
    const infu2 = [];
    data1.map((user) => {
        return infu1.push(user.username);
    });
    // console.log(infu1);
    data2.map((user) => {
        return infu2.push(user.username);
    });
    // console.log(infu2);

    const intersection = infu1.filter((element) => infu2.includes(element));

    return (
        <div>
            <h1>User List</h1>
            {intersection.map((user, index) => (
                <div key={index}>
                    <h1>{user}</h1>
                </div>
            ))}
        </div>
    );
}

export default App;
