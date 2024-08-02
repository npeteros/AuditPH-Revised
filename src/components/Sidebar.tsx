import Image from "next/image";
import SupportIcon from "@/assets/SupportIcon";
import Logo from "@/assets/Logo";
import HomeIcon from "@/assets/HomeIcon";
import GoalIcon from "@/assets/GoalIcon";
import BudgetNav from "@/assets/BudgetNav";
import TransactionIcon from "@/assets/TransactionIcon";
import ChallengeIcon from "@/assets/ChallengeIcon";
import AnalyticsIcon from "@/assets/AnalyticsIcon";
import AddIcon from "@/assets/AddIcon";
import TeamIcon from "@/assets/TeamIcon";
import SettingsIcon from "@/assets/SettingsIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Border from "./Border";

export default function Sidebar() {
    return (
        <div className="min-h-screen w-48 gap-2 border-r border-neutral-400 text-xs">
            <div className="flex h-full flex-col justify-between px-6 pb-4">
                <div className="flex flex-col">
                    <div className="grid place-items-center py-10">
                        <Logo width={120} height={120} />
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-8">
                            <div className="flex items-center gap-2 text-white">
                                <HomeIcon active />
                                <span className="font-bold">Home</span>
                            </div>
                            <div className="flex items-center gap-2 text-white">
                                <GoalIcon />
                                <span>Goals</span>
                            </div>
                            <div className="flex items-center gap-2 text-white">
                                <BudgetNav />
                                <span>Budgets</span>
                            </div>
                            <div className="flex items-center gap-2 text-white">
                                <TransactionIcon />
                                <span>Transactions</span>
                            </div>
                            <div className="flex items-center gap-2 text-white">
                                <ChallengeIcon />
                                <span>Challenges</span>
                            </div>
                            <div className="flex items-center gap-2 text-white">
                                <AnalyticsIcon />
                                <span>Analytics</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between gap-2 text-white">
                                <span>Teams</span>
                                <AddIcon />
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2 text-white">
                                    <TeamIcon bg="F" color="bg-teal-600" />
                                    <span>Family</span>
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <TeamIcon bg="B" color="bg-cyan-600" />
                                    <span>Besties</span>
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <TeamIcon bg="/partner.jpg" />
                                    <span>Partner</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2 text-white">
                            <SettingsIcon />
                            <span>Settings</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <SupportIcon />
                            <span>Support</span>
                        </div>
                    </div>
                    <Border />
                    <div className="flex items-center gap-2 text-white">
                        <Avatar>
                            <AvatarImage src="/me.jpg" alt="Profile" />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-1 text-white">
                            <span className="text-xs">Neal Peteros</span>
                            <span className="text-[8px] font-extralight">
                                n.peteros2003@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
