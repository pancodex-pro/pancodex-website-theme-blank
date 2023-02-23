import React from 'react';

interface OutlineButtonProps {
    label?: string;
    icon?: React.ReactNode;
    circle?: boolean;
}

export function OutlineButton({icon, circle, label}: OutlineButtonProps) {
    if (circle) {
        return (
            <div className="flex space-x-2 justify-center">
                <div>
                    <button type="button"
                            className="flex items-center justify-center rounded-full border-TheMuse5 border-[2px] uppercase shadow-md hover:bg-TheMuse5 text-TheMuse5 hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-TheMuse5 active:shadow-lg transition duration-150 ease-in-out p-5">
                        <span className="h-3 w-3">{icon}</span>
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className="flex space-x-2 justify-center">
            <div>
                <button type="button"
                        className="button-label flex items-center px-6 pt-2.5 pb-2 border-TheMuse5 border-[1px] rounded shadow-md hover:bg-TheMuse5 text-TheMuse5 hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-TheMuse4 active:shadow-lg transition duration-150 ease-in-out flex align-center">
                    {!!icon && <span className="h-3 w-3">{icon}</span>}
                    <span className="ml-2 truncate">
                        {label || ''}
                    </span>
                </button>
            </div>
        </div>
    );
}