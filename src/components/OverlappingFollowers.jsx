import React from "react";

const OverlappingFollowers = ({ overlpaingUser }) => {
    return (
        // <div>
        //     {overlpaingUser.map((user, index) => (
        //         <div key={index}>
        //             <h1>{user}</h1>
        //         </div>
        //     ))}
        //     <h1>OverlappingFollowers</h1>
        // </div>
        <>
            <input type="checkbox" id="overlappingModal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label
                        for="overlappingModal"
                        class="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 class="md:text-lg font-bold mb-5">Followers List</h3>
                    <div class="overflow-x-auto">
                        <table class="table w-full overflow-x-auto">
                            <thead>
                                <tr>
                                    <th></th>

                                    <th>username</th>
                                    <th>Profile</th>
                                </tr>
                            </thead>
                            <tbody>
                                {overlpaingUser.map((follower, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}.</th>
                                        <td>
                                            <span className="hidden md:block">
                                                {follower.slice(0, 19)}
                                            </span>
                                            <span className=" md:hidden">
                                                {follower.slice(0, 5)}..
                                            </span>
                                        </td>
                                        <td>
                                            <button class="btn btn-xs btn-info">
                                                <a
                                                    href={`https://www.instagram.com/${follower}/?hl=en`}
                                                    target="__blank"
                                                >
                                                    Go Profile{" "}
                                                </a>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OverlappingFollowers;
