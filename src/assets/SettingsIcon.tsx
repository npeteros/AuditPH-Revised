export default function SettingsIcon({
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
            <path d="M9.642 12c0-1.324 1.056-2.4 2.356-2.4 1.301 0 2.356 1.076 2.356 2.4 0 1.324-1.055 2.4-2.356 2.4-1.3 0-2.356-1.076-2.356-2.4Z"></path>
            <path
                fillRule="evenodd"
                d="M8.91 0h6.176l.262 1.339v.004l.431 2.137a9.402 9.402 0 0 1 1.71 1.004l2.15-.733 1.275-.403.666 1.164 1.74 2.966.68 1.19-1.013.9-1.614 1.4c.05.313.098.668.098 1.032s-.047.719-.098 1.033l1.62 1.405 1.007.894-.685 1.197-1.735 2.959-.666 1.167-1.291-.411-2.135-.728a9.4 9.4 0 0 1-1.709 1.004l-.43 2.137-.001.004L15.086 24H8.91l-.259-1.342-.432-2.138a9.394 9.394 0 0 1-1.71-1.004l-2.149.733-1.277.406-.664-1.168L.677 16.52 0 15.332l1.01-.9 1.614-1.4A6.52 6.52 0 0 1 2.526 12c0-.363.048-.72.098-1.032L1.002 9.56 0 8.668.682 7.47l1.736-2.959.664-1.164 1.292.408 2.135.728a9.4 9.4 0 0 1 1.71-1.004l.431-2.138L8.91 0Zm3.088 8c-2.167 0-3.927 1.79-3.927 4s1.76 4 3.927 4c2.168 0 3.927-1.791 3.927-4s-1.76-4-3.927-4Z"
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
                d="M8.774.655A.75.75 0 0 1 9.51.05h4.978a.75.75 0 0 1 .736.604l.138.694v.004l.444 2.161c.639.28 1.23.628 1.777 1.024l2.198-.735.016-.006.691-.214a.75.75 0 0 1 .87.339l.358.614 1.772 2.964.36.617a.75.75 0 0 1-.155.944l-.533.464-1.665 1.417c.053.32.103.68.103 1.052 0 .371-.05.732-.103 1.052l1.671 1.422.527.459a.75.75 0 0 1 .155.943l-.364.624-1.768 2.958-.357.615a.75.75 0 0 1-.872.338l-.691-.215-.015-.005-2.198-.735a9.571 9.571 0 0 1-1.777 1.023l-.443 2.161-.001.005-.139.694a.75.75 0 0 1-.735.604H9.51a.75.75 0 0 1-.736-.606l-.136-.692-.001-.006-.445-2.16a9.567 9.567 0 0 1-1.776-1.023l-2.199.735-.014.005-.691.215a.75.75 0 0 1-.873-.34l-.356-.614L.51 16.485l-.359-.617a.75.75 0 0 1 .155-.941l.533-.466 1.665-1.417a6.444 6.444 0 0 1-.104-1.051c0-.37.051-.733.104-1.052L.831 9.518l-.525-.46a.75.75 0 0 1-.155-.94l.364-.626 1.768-2.957.356-.613a.75.75 0 0 1 .871-.34l.691.214.016.006 2.199.735a9.57 9.57 0 0 1 1.776-1.024l.446-2.162.136-.696Zm1.353.895-.02.1-.526 2.557a.75.75 0 0 1-.467.55c-.762.29-1.46.705-2.1 1.206a.75.75 0 0 1-.7.121L3.75 5.227l-.112-.035-.064.109-1.768 2.957-.046.078.056.05 1.986 1.69c.2.17.297.432.254.69l-.045.271c-.06.357-.11.644-.11.956 0 .311.05.599.11.955l.045.27a.75.75 0 0 1-.254.692L1.815 15.6l-.056.05.046.078 1.774 2.966.058.1.111-.035 2.566-.858a.75.75 0 0 1 .7.121c.64.501 1.338.916 2.1 1.207a.75.75 0 0 1 .467.55l.528 2.563.018.094h3.746l.019-.096v-.004l.525-2.557a.75.75 0 0 1 .467-.55 8.084 8.084 0 0 0 2.1-1.207.75.75 0 0 1 .7-.12l2.566.857.113.035.064-.109 1.767-2.958.046-.078-.056-.048-1.987-1.69a.75.75 0 0 1-.254-.695l.04-.234c.064-.37.115-.669.115-.99 0-.32-.051-.619-.115-.988a45.3 45.3 0 0 1-.04-.235.75.75 0 0 1 .254-.694l1.987-1.69.056-.049-.046-.078-1.771-2.964-.06-.103-.114.036-2.565.857a.75.75 0 0 1-.7-.12 8.082 8.082 0 0 0-2.1-1.208.75.75 0 0 1-.467-.55l-.525-2.56-.02-.096h-3.745ZM12 9.545a2.45 2.45 0 0 0-2.45 2.448 2.45 2.45 0 0 0 4.9 0A2.45 2.45 0 0 0 12 9.545Zm-3.95 2.448a3.95 3.95 0 0 1 7.9 0 3.95 3.95 0 0 1-7.9 0Z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
