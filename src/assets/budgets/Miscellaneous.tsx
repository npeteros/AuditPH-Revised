export default function Miscellaneous({ size = 20 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            fill="#ffffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                d="M11.25 1.65V0h1.5v1.65h2.45a5.55 5.55 0 0 1 5.55 5.55h-1.5a4.05 4.05 0 0 0-4.05-4.05H8.8a4.05 4.05 0 0 0 0 8.1h6.4a5.55 5.55 0 1 1 0 11.1h-2.45V24h-1.5v-1.65H8.8a5.55 5.55 0 0 1-5.55-5.55h1.5a4.05 4.05 0 0 0 4.05 4.05h6.4a4.05 4.05 0 1 0 0-8.1H8.8a5.55 5.55 0 1 1 0-11.1h2.45Z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
