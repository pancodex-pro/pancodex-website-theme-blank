import React from 'react';
import {IconEntry, IconKey} from '../icons/IconEntry';

interface PrimaryButtonProps {
    label?: string;
    icon?: IconKey;
    circle?: boolean;
}

export function PrimaryButton({icon, circle, label}: PrimaryButtonProps) {

    if (circle) {
        return (
            <div className="flex space-x-2 justify-center">
                <div>
                    <button type="button"
                            className="bg-TheMuse3 flex items-center justify-center text-white bg-TheMuse3 active:bg-TheMuse5 hover:bg-TheMuse4 rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out p-5">
                        {icon && <IconEntry iconKey={icon} className={"text-white h-5 w-5"} />}
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className="flex space-x-2 justify-center">
            <div>
                <button type="button"
                        className="button-label flex items-center justify-center text-white bg-TheMuse3 active:bg-TheMuse5 hover:bg-TheMuse4 px-6 pt-2.5 pb-2 rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
                    {icon && <IconEntry iconKey={icon} className={"text-white h-5 w-5"} />}
                    <span className="ml-2 truncate">
                        {label || ''}
                    </span>
                </button>
            </div>
        </div>
    );
}