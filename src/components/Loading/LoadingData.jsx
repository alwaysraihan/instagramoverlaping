import React from "react";

const LoadingData = () => {
    return (
        <>
            <div class="w-full flex items-center flex-col">
                <div class="flex bg-white shadow-md p-4 rounded-md">
                    <div
                        data-placeholder
                        class="mr-2 h-20 w-20 rounded-full overflow-hidden relative bg-gray-200"
                    ></div>
                    <div class="flex flex-col justify-between">
                        <div
                            data-placeholder
                            class="mb-2 h-5 w-40 overflow-hidden relative bg-gray-200"
                        ></div>
                        <div
                            data-placeholder
                            class="h-10 w-40 overflow-hidden relative bg-gray-200"
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoadingData;
