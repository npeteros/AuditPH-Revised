export default function MoonIcon({
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
            <path d="M12.33.004a.8.8 0 0 0-.599 1.354A9.565 9.565 0 0 1 14.401 8a9.6 9.6 0 0 1-11.58 9.396.8.8 0 0 0-.83 1.225A11.99 11.99 0 0 0 12 24c6.627 0 12-5.373 12-12C24 5.483 18.804.18 12.33.004Z"></path>
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
                d="M11.623.5a.75.75 0 0 1 .706-.446C18.777.23 23.95 5.51 23.95 12c0 6.6-5.35 11.95-11.95 11.95a11.94 11.94 0 0 1-9.968-5.357.75.75 0 0 1 .779-1.148A9.65 9.65 0 0 0 14.45 8a9.615 9.615 0 0 0-2.683-6.677.75.75 0 0 1-.144-.822Zm2.41 1.248A11.101 11.101 0 0 1 15.95 8c0 6.158-4.992 11.15-11.15 11.15-.144 0-.286-.003-.429-.008A10.42 10.42 0 0 0 12 22.45c5.771 0 10.45-4.679 10.45-10.45 0-5.076-3.619-9.306-8.417-10.252Z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
