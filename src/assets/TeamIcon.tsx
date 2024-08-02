import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function TeamIcon({
    width = 16,
    height = 16,
    color,
    bg,
}: {
    width?: number;
    height?: number;
    color?: string;
    bg: string;
}) {
    return color ? (
        <div className={`${color} grid size-6 place-items-center rounded-full`}>
            {bg}
        </div>
    ) : (
        <Image
            src={bg}
            alt={bg}
            width={100}
            height={100}
            className="size-6 rounded-full object-cover"
        />
    );
}
