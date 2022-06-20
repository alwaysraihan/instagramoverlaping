import React from "react";

const OverlappingFollowers = ({ overlpaingUser }) => {
    return (
        <div>
            {overlpaingUser.map((user, index) => (
                <div key={index}>
                    <h1>{user}</h1>
                </div>
            ))}
            <h1>OverlappingFollowers</h1>
        </div>
    );
};

export default OverlappingFollowers;
