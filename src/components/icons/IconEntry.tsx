import React, {FC, SVGProps} from 'react';
import {ReactComponent as Money} from './money.svg';
import {ReactComponent as PhoneCall} from './phone-call.svg';
import {ReactComponent as HQSign} from './hq-sign.svg';
import {ReactComponent as PhotoCamera} from './photo-camera.svg';

export type IconKey = 'phone-call' | 'money' | 'hq-sign' | 'photo-camera';

export const iconsMap: Map<string, FC<SVGProps<SVGSVGElement>>> = new Map();
iconsMap.set('money', Money);
iconsMap.set('phone-call', PhoneCall);
iconsMap.set('hq-sign', HQSign);
iconsMap.set('photo-camera', PhotoCamera);

interface IconEntryProps {
    iconKey: IconKey;
    className?: string;
}

export function IconEntry(props: IconEntryProps) {
    const {iconKey, className} = props;
    const Icon: React.FC<React.SVGProps<SVGSVGElement>> | undefined = iconsMap.get(iconKey);
    if (Icon) {
        return (<Icon className={className} />);
    }
    return null;
}
