import React from 'react';

interface VerticalStackProps {
    children: React.ReactNode;
}

export function VerticalStack({children}: VerticalStackProps) {
    return (
        <div className="flex flex-col relative">
            {children}
        </div>
    );
}
