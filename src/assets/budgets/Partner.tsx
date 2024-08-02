export default function Partner({ size = 20 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            fill="#ffffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                d="M6.457 3.15a4.907 4.907 0 0 0-3.47 8.377L12 20.538l9.013-9.013a4.907 4.907 0 1 0-6.94-6.939L12.53 6.13a.75.75 0 0 1-1.06 0L9.927 4.587a4.907 4.907 0 0 0-3.47-1.437ZM.05 8.057a6.407 6.407 0 0 1 10.937-4.53L12 4.539l1.013-1.012a6.407 6.407 0 1 1 9.06 9.06L12.53 22.13a.75.75 0 0 1-1.06 0l-9.543-9.543A6.407 6.407 0 0 1 .05 8.057Z"
                clip-rule="evenodd"
            ></path>
        </svg>
    );
}
