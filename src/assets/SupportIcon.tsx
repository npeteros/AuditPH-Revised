export default function SupportIcon({
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
                d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12Zm8.8-2.4A3.2 3.2 0 0 1 12 6.4h.96A3.04 3.04 0 0 1 16 9.44v.16a3.2 3.2 0 0 1-3.2 3.2v1.6h-1.6v-3.2h1.6a1.6 1.6 0 0 0 1.6-1.6v-.16A1.44 1.44 0 0 0 12.96 8H12a1.6 1.6 0 0 0-1.6 1.6H8.8Zm2.4 8V16h1.6v1.6h-1.6Z"
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
                d="M.05 12C.05 5.4 5.4.05 12 .05S23.95 5.4 23.95 12 18.6 23.95 12 23.95.05 18.6.05 12ZM12 1.55C6.229 1.55 1.55 6.23 1.55 12c0 5.771 4.679 10.45 10.45 10.45 5.771 0 10.45-4.679 10.45-10.45 0-5.771-4.679-10.45-10.45-10.45ZM8.85 9.6A3.15 3.15 0 0 1 12 6.45h.96a2.99 2.99 0 0 1 2.99 2.99v.16a3.15 3.15 0 0 1-3.15 3.15h-.05v1.65h-1.5v-3.15h1.55a1.65 1.65 0 0 0 1.65-1.65v-.16a1.49 1.49 0 0 0-1.49-1.49H12a1.65 1.65 0 0 0-1.65 1.65h-1.5Zm3.95 6.45v1.5h-1.6v-1.5h1.6Z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
