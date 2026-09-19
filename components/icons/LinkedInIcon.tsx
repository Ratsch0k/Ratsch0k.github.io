import {defaultIconSize, IconProps, sizes} from './Icon';

export const LinkedInIcon = (icon: IconProps) => {
    const {size = defaultIconSize} = icon;
    const dimension = sizes[size];

    return (
        <img
            style={{
                height: dimension,
                width: dimension,
            }}
            className='transition-all invert dark:invert-0'
            src='/images/linked_in.png'
        />
    );
}

export default LinkedInIcon;
