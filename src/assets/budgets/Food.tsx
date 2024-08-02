export default function Food({ size = 20 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            fill="#ffffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M1 21.98c0 .56.45 1.01 1.01 1.01H15c.56 0 1.01-.45 1.01-1.01V21H1v.98ZM8.5 8.99C4.75 8.99 1 11 1 15h15c0-4-3.75-6.01-7.5-6.01ZM3.62 13c1.11-1.55 3.47-2.01 4.88-2.01 1.41 0 3.77.46 4.88 2.01H3.62ZM1 17h15v2H1v-2ZM18 5V1h-2v4h-5l.23 2h9.56l-1.4 14H18v2h1.72c.84 0 1.53-.65 1.63-1.47L23 5h-5Z"></path>
        </svg>
    );
}
