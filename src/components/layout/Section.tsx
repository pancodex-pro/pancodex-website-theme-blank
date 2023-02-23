import React, {CSSProperties} from 'react';

interface SectionProps {
    sectionClasses?: string;
    backgroundImageSrc?: string;
    children?: React.ReactNode;
    isOverlay?: boolean;
    overlayClasses?: string;
}

export function Section({isOverlay, overlayClasses, backgroundImageSrc, sectionClasses, children}: SectionProps) {
    const style: CSSProperties = {};
    if (backgroundImageSrc) {
        style.backgroundImage = `url("${backgroundImageSrc}")`;
    }
    return (
        <div className={`w-full ${sectionClasses || ''}`} style={style}>
            {isOverlay && (
                <div className={`absolute inset-0 ${overlayClasses || ''}`} />
            )}
            {children}
        </div>
    );
}
