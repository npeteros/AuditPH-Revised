import Image from "next/image";

export default function Logo({
    theme = "dark",
    width = 100,
    height = 100,
}: {
    theme?: "dark" | "classic";
    width?: number;
    height?: number;
}) {
    return theme == "dark" ? (
        <Image
            src="/audit-white.png"
            alt="AuditPH"
            width={width}
            height={height}
        />
    ) : (
        <Image
            src="/audit-black.png"
            alt="AuditPH"
            width={width}
            height={height}
        />
    );
}
