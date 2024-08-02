export default function TransactionIcon({
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
            <path d="M21.6 3.2A2.4 2.4 0 0 1 24 5.6V8H0V5.6a2.4 2.4 0 0 1 2.4-2.4h19.2Z"></path>
            <path
                fillRule="evenodd"
                d="M0 9.6v8.8a2.4 2.4 0 0 0 2.4 2.4h19.2a2.4 2.4 0 0 0 2.4-2.4V9.6H0ZM3.2 16h9.6v-1.6H3.2V16Zm17.6 0H16v-1.6h4.8V16Z"
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
                d="M2.4 4.75a.85.85 0 0 0-.85.85v2.45h20.9V5.6a.85.85 0 0 0-.85-.85H2.4Zm20.05 4.8H1.55v8.85c0 .47.38.85.85.85h19.2c.47 0 .85-.38.85-.85V9.55ZM.05 5.6A2.35 2.35 0 0 1 2.4 3.25h19.2a2.35 2.35 0 0 1 2.35 2.35v12.8a2.35 2.35 0 0 1-2.35 2.35H2.4A2.35 2.35 0 0 1 .05 18.4V5.6ZM12.8 15.95H3.2v-1.5h9.6v1.5Zm8 0H16v-1.5h4.8v1.5Z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
