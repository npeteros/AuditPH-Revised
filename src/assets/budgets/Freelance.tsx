export default function Freelance({ size = 20 }: { size?: number }) {
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
                d="M4 3.15a.85.85 0 0 0-.85.85v12.8c0 .47.38.85.85.85h16c.47 0 .85-.38.85-.85V4a.85.85 0 0 0-.85-.85H4ZM1.65 4A2.35 2.35 0 0 1 4 1.65h16A2.35 2.35 0 0 1 22.35 4v12.8A2.35 2.35 0 0 1 20 19.15H4a2.35 2.35 0 0 1-2.35-2.35V4ZM24 22.35H0v-1.5h24v1.5Z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
