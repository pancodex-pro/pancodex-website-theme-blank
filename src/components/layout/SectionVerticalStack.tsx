import React from 'react';

interface SectionVerticalStackProps {
    children: React.ReactNode;
}

export function SectionVerticalStack({children}: SectionVerticalStackProps) {
    return (
        // <div className="flex flex-col relative px-6 md:px-16 xl:px-60 2xl:px-80 h-full">
        <div className="container flex flex-col relative h-full">
            {children}
        </div>
    );
}
