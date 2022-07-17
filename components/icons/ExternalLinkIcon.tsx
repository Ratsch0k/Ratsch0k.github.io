import {defaultIconProps, IconProps, sizes} from './Icon';

export const ExternalLinkIcon = (props: IconProps) => {
    const {size, ...rest} = props;
    const dimension = sizes[size];

    return (
        <svg
            width={dimension}
            height={dimension}
            viewBox='0 0 48 48'
            stroke='currentColor'
            fill='none'
            strokeWidth={5}
            strokeLinecap='round'
            xmlns='http://www.w3.org/2000/svg'
            {...rest}
        >
            <path
                d='m 40.130172,24 v 13.539188 c 0,3.437396 -2.76729,6.204686 -6.204685,6.204686 H 10.460811 c -3.4373959,0 -6.2046855,-2.76729 -6.2046855,-6.204686 V 14.074512 c 0,-3.437395 2.7673011,-6.2135906 6.2046855,-6.2046847 L 24,7.904906' />
            <path
                d='M 32,4 H 44 V 16 M 24,24 44,4' />
        </svg>

    )
}

ExternalLinkIcon.defaultProps = defaultIconProps;

export default ExternalLinkIcon;