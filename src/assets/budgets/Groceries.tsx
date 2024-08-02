export default function Groceries({ size = 20 }: { size?: number }) {
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
                d="m.082 1.015 1.436-.43.8 2.665H20a3.95 3.95 0 0 1 3.95 3.95v10.35H5.042L.082 1.015ZM2.768 4.75l3.39 11.3H22.45V7.2A2.45 2.45 0 0 0 20 4.75H2.768Zm6.032 16a.85.85 0 1 0 0 1.7.85.85 0 0 0 0-1.7Zm-2.35.85a2.35 2.35 0 1 1 4.7 0 2.35 2.35 0 0 1-4.7 0Zm11.2 0a2.35 2.35 0 1 1 4.7 0 2.35 2.35 0 0 1-4.7 0Zm2.35-.85a.85.85 0 1 0 0 1.7.85.85 0 0 0 0-1.7Z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
