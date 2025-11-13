import React from "react";
import { PacmanLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="min-h-screen flex  justify-center items-center">
            <PacmanLoader color={'red'}></PacmanLoader>
        </div>
    );
};

export default Loading;