import React from 'react';

export function Button({ color = 'blue', size = 'small', children, ...props }) {
    return (
        <button {...props} className={`btn btn-${size} bg-${color}-500 hover:bg-${color}-600 text-white font-bold py-2 px-4 rounded`}>
            {children}
        </button>
    );
}