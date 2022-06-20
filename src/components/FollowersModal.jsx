import React from "react";

const FollowersModal = ({ Followers }) => {
    console.log(Followers);
    return (
        <>
            <input type="checkbox" id="followersModal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label
                        for="followersModal"
                        class="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 class="text-lg font-bold mb-5">Followers List</h3>
                    <div class="overflow-x-auto">
                        <table class="table w-full">
                            <thead>
                                <tr>
                                    <th></th>

                                    <th>username</th>
                                    <th>Profile</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Followers.map((follower, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}.</th>
                                        <td>{follower.slice(0, 19)}</td>
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

export default FollowersModal;
