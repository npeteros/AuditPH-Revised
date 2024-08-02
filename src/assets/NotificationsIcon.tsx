export default function NotificationsIcon({
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
            <path d="M12 0a8.8 8.8 0 0 0-8.8 8.8V16H1.6v1.6h20.8V16h-1.6V8.8A8.8 8.8 0 0 0 12 0Z"></path>
            <path d="M8 20v-.8h8v.8a4 4 0 0 1-8 0Z"></path>
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
                d="M12 1.55A7.25 7.25 0 0 0 4.75 8.8v7.25h14.5V8.8A7.25 7.25 0 0 0 12 1.55Zm8.75 14.5V8.8a8.75 8.75 0 1 0-17.5 0v7.25H1.6v1.5h20.8v-1.5h-1.65ZM8.05 20v-.8h1.5v.8a2.45 2.45 0 0 0 4.9 0v-.8h1.5v.8a3.95 3.95 0 1 1-7.9 0Z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
