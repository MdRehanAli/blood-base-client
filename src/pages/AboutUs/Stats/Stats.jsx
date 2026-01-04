import React from 'react';

const Stats = () => {
    const stats = [
        { value: "14", label: "Years of Experience" },
        { value: "663", label: "Blood Donations" },
        { value: "21", label: "Total Awards" },
        { value: "30", label: "Blood Cooperations" }
    ];
    return (
        <section className="my-20">
            <h1 className='text-center text-3xl md:text-5xl font-bold text-red-600'>Gallery</h1>
            <p className='my-3 text-red-400 text-center'>Explore recent blood donation events</p>

            <div className="bg-primary text-white pt-8">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <h2 className="text-4xl font-bold">{stat.value}</h2>
                            <p className="uppercase text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;