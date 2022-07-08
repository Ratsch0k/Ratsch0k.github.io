import {IconProps} from './Icon';

const Logo = (props: IconProps) => {
  return (
    <svg
      color="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 987.46 938.07"
      fill='none'
      stroke='currentColor'
      strokeMiterlimit={10}
      strokeWidth={32}
      strokeLinecap='round'
      {...props}
    >
      <path d="M78.49 75.42Q16 134.79 16 239.68q0 97.67 44 158.85t145.18 105.19q104.58 46.43 138.85 80.17t34.28 96.45c0 96.46-56.08 151.73-169.55 151.73H55.58M596.01 172.4v-66.08a90.25 90.25 0 0 0-90.25-90.25h0c-49.32-.13-198.37 0-255.84 0a327.49 327.49 0 0 0-65 6.08m692.68 8.22-222.74 337.7h0c-17.63 26.45-58.85 14-58.85-17.81v-61.41m277 406.92L732.3 429.52a32.15 32.15 0 0 1 1.6-32.7L956.51 64.64M505.6 714.07l-.05 176.39a31.56 31.56 0 0 0 31.56 31.61h26.72a32.14 32.14 0 0 0 32.15-32.18l-1.22-293.94a32 32 0 0 1 5.54-18.06l33.53-44a32.15 32.15 0 0 1 55.14 3.2l192 367.61a32.15 32.15 0 0 0 28.49 17.37h29.81a32.16 32.16 0 0 0 28.49-47.2l-40.12-75.89M135.39 339.75q-31.84-37.37-31.85-98.86c0-83.99 47.22-134.82 142.22-134.82h227.5a32.48 32.48 0 0 1 32.5 32.5l-.11 421.83M55.23 922.07H208.1q124 0 191.37-66t67.36-181.75q0-88.62-40.13-145T266.95 419.93"/>
    </svg>
  )
}

Logo.defaultProps = {
  size: 'medium',
}

export default Logo;