export default function GoalIcon({
    width = 16,
    height = 16,
    fill = "white",
    active = false,
}: {
    width?: number;
    height?: number;
    fill?: string;
    active?: boolean;
}) {
    return active ? (
        <svg
            width={width}
            height={height}
            fill={fill}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M11.2 12a.8.8 0 1 1 1.6 0 .8.8 0 0 1-1.6 0Z"></path>
            <path
                fillRule="evenodd"
                d="M12 6.4a5.6 5.6 0 1 0 0 11.2 5.6 5.6 0 0 0 0-11.2Zm0 3.2a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Z"
                clipRule="evenodd"
            ></path>
            <path
                fillRule="evenodd"
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0ZM4.8 12a7.2 7.2 0 1 1 14.4 0 7.2 7.2 0 0 1-14.4 0Z"
                clipRule="evenodd"
            ></path>
        </svg>
    ) : (
        <svg
            width={width}
            height={height}
            fill={fill}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                d="M.05 12C.05 5.4 5.4.05 12 .05S23.95 5.4 23.95 12 18.6 23.95 12 23.95.05 18.6.05 12ZM12 1.55C6.229 1.55 1.55 6.23 1.55 12c0 5.771 4.679 10.45 10.45 10.45 5.771 0 10.45-4.679 10.45-10.45 0-5.771-4.679-10.45-10.45-10.45ZM4.85 12a7.15 7.15 0 1 1 14.3 0 7.15 7.15 0 0 1-14.3 0ZM12 6.35a5.65 5.65 0 1 0 0 11.3 5.65 5.65 0 0 0 0-11.3ZM9.65 12a2.35 2.35 0 1 1 4.7 0 2.35 2.35 0 0 1-4.7 0Zm2.35-.85a.85.85 0 1 0 0 1.7.85.85 0 0 0 0-1.7Z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
