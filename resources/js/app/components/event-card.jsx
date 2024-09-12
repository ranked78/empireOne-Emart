import React from 'react';

function EventCard({ datas, columns }) {
    return (
        <div className='flex flex-wrap gap-4 place-content-start mt-12 ml-44'>
            {datas.map((event) => (
                <div
                    key={event.id}
                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                    <a href="#">
                        <img className="rounded-t-lg" src="https://empireonecontactcenter.com/wp-content/uploads/2023/03/Contact-Center-logo.png" alt="" />
                    </a>
                    <div className="p-5">
                        {/* Render the name outside of the loop */}
                        {columns.includes('name') && (
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{event.name}</h5>
                            </a>
                        )}
                        {/* Automatically render other columns in <p> tags */}
                        {columns.filter(col => col !== 'name').map((col) => (
                            <div key={col} className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {event[col]}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default EventCard;
