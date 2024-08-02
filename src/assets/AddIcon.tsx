export default function AddIcon({
    width = 16,
    height = 16,
    fill = "white",
}: {
    width?: number;
    height?: number;
    fill?: string;
}) {
    return (
        <svg
            width={width}
            height={height}
            fill={fill}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                d="M11.25 11.25V1.6h1.5v9.65h9.65v1.5h-9.65v9.65h-1.5v-9.65H1.6v-1.5h9.65Z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
