export default function TransactionContainer({
    budgetIcon,
    title,
    subtitle,
    amount,
}: {
    budgetIcon: React.ReactNode;
    title: string;
    subtitle: string;
    amount: number;
    }) {
    return (
        <div className="flex justify-between">
            <div className="flex w-full items-center gap-2">
                {budgetIcon}
                <div className="flex flex-col">
                    <span className="text-xs font-bold">{title}</span>
                    <span className="text-xs font-extralight text-neutral-400">
                        {subtitle}
                    </span>
                </div>
            </div>
            <div className="flex w-1/4 items-center justify-end">
                <span className={`text-xs ${amount <= 0 ? 'text-neutral-400 font-light' : 'text-emerald-600 font-bold'}`}>
                    {amount < 0 ? `-\u20B1 ${Number(amount * -1).toLocaleString()}` : `\u20B1 ${Number(amount).toLocaleString()}`}
                </span>
            </div>
        </div>
    );
}
