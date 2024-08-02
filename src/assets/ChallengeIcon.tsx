export default function ChallengeIcon({
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
            <path
                fillRule="evenodd"
                d="M7.2 0a2.4 2.4 0 0 0-2.4 2.4v.8H4a4 4 0 1 0 0 8h1.21a7.207 7.207 0 0 0 5.99 4.756V22.4H6.4V24h11.2v-1.6h-4.8v-6.444a7.207 7.207 0 0 0 5.99-4.756H20a4 4 0 0 0 0-8h-.8v-.8A2.4 2.4 0 0 0 16.8 0H7.2Zm12 4.8v4c0 .27-.015.537-.044.8H20a2.4 2.4 0 1 0 0-4.8h-.8ZM4 4.8h.8v4c0 .27.015.537.044.8H4a2.4 2.4 0 0 1 0-4.8Z"
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
                d="M7.2 1.55a.85.85 0 0 0-.85.85v6.4a5.65 5.65 0 1 0 11.3 0V2.4a.85.85 0 0 0-.85-.85H7.2Zm-2.35.85A2.35 2.35 0 0 1 7.2.05h9.6a2.35 2.35 0 0 1 2.35 2.35v.85H20a3.95 3.95 0 0 1 0 7.9h-1.245a7.157 7.157 0 0 1-6.005 4.761v6.539h4.85v1.5H6.4v-1.5h4.85v-6.539a7.157 7.157 0 0 1-6.005-4.761H4a3.95 3.95 0 1 1 0-7.9h.85V2.4Zm0 2.35H4a2.45 2.45 0 1 0 0 4.9h.9a7.223 7.223 0 0 1-.05-.85V4.75Zm14.25 4.9h.9a2.45 2.45 0 1 0 0-4.9h-.85V8.8c0 .288-.017.571-.05.85Z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
