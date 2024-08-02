export default function BudgetNav({
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
                d="M1.6 2.4A2.4 2.4 0 0 1 4 0h16a2.4 2.4 0 0 1 2.4 2.4v19.2A2.4 2.4 0 0 1 20 24H4a2.4 2.4 0 0 1-2.4-2.4V2.4ZM6.4 8h11.2V6.4H6.4V8Zm0 6.4H8v-1.6H6.4v1.6Zm6.4 0h-1.6v-1.6h1.6v1.6Zm3.2 0h1.6v-1.6H16v1.6Zm-8 4.8H6.4v-1.6H8v1.6Zm3.2 0h1.6v-1.6h-1.6v1.6Zm6.4 0H16v-1.6h1.6v1.6Z"
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
                d="M1.65 2.4A2.35 2.35 0 0 1 4 .05h16a2.35 2.35 0 0 1 2.35 2.35v19.2A2.35 2.35 0 0 1 20 23.95H4a2.35 2.35 0 0 1-2.35-2.35V2.4ZM4 1.55a.85.85 0 0 0-.85.85v19.2c0 .47.38.85.85.85h16c.47 0 .85-.38.85-.85V2.4a.85.85 0 0 0-.85-.85H4Zm13.6 6.4H6.4v-1.5h11.2v1.5ZM8 14.35H6.4v-1.5H8v1.5Zm4.8 0h-1.6v-1.5h1.6v1.5Zm4.8 0H16v-1.5h1.6v1.5ZM8 19.15H6.4v-1.5H8v1.5Zm4.8 0h-1.6v-1.5h1.6v1.5Zm4.8 0H16v-1.5h1.6v1.5Z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
