import MoonIcon from "@/assets/MoonIcon";
import NotificationsIcon from "@/assets/NotificationsIcon";

export default function Header({ title }: { title: string }) {
    return (
        <header>
            <div className="flex w-full items-center justify-between">
                <span className="text-2xl font-bold text-white">{title}</span>
                <div className="flex gap-4">
                    <div className="rounded-md border border-neutral-400 p-3">
                        <MoonIcon active />
                    </div>
                    <div className="rounded-md border border-neutral-400 p-3">
                        <NotificationsIcon />
                    </div>
                </div>
            </div>
        </header>
    );
}
