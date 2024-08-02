export default function HomeIcon({
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
            <path d="M12.52.193a.8.8 0 0 0-1.04 0L0 10.033V21.6A2.4 2.4 0 0 0 2.4 24h6.4a.8.8 0 0 0 .8-.8v-4.8a2.4 2.4 0 1 1 4.8 0v4.8a.8.8 0 0 0 .8.8h6.4a2.4 2.4 0 0 0 2.4-2.4V10.032L12.52.192Z"></path>
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
                d="M11.512.23a.75.75 0 0 1 .976 0l11.462 9.825V21.6a2.35 2.35 0 0 1-2.35 2.35h-6.4a.75.75 0 0 1-.75-.75v-4.8a2.45 2.45 0 0 0-4.9 0v4.8a.75.75 0 0 1-.75.75H2.4A2.35 2.35 0 0 1 .05 21.6V10.055L11.512.231ZM1.55 10.746V21.6c0 .47.38.85.85.85h5.65V18.4a3.95 3.95 0 0 1 7.9 0v4.05h5.65c.47 0 .85-.38.85-.85V10.745L12 1.788 1.55 10.745Z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
