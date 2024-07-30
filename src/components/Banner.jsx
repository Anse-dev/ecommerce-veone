import React from 'react';

const Banner = () => (
    <div className="bg-cover mt-18 bg-center h-64" style={{ backgroundImage: "url('https://via.placeholder.com/1200x300')" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
            <h2 className="text-white text-3xl font-bold">Welcome to MyStore</h2>
        </div>
    </div>
);

export default Banner;
