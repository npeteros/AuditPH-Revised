export default function BudgetIcon({
    icon,
    color,
    size = 10,
    padding = true
}: {
    icon: React.ReactNode;
    color: string;
    size?: number;
    padding?: boolean
}) {
    return (
        <div
            className={`grid size-${size} place-items-center rounded-full ${color} ${padding ? 'p-2' : ''}`}
        >
            {icon}
        </div>
    );
}
