import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Border from "@/components/Border";
import TransactionContainer from "@/assets/TransactionContainer";
import Groceries from "@/assets/budgets/Groceries";
import BudgetIcon from "@/assets/BudgetIcon";
import Miscellaneous from "@/assets/budgets/Miscellaneous";
import Freelance from "@/assets/budgets/Freelance";
import Food from "@/assets/budgets/Food";
import Transportation from "@/assets/budgets/Transportation";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import WeekSpendsChart from "@/components/WeekSpendsChart";
import TeamIcon from "@/assets/TeamIcon";
import * as Progress from "@radix-ui/react-progress";
import Partner from "@/assets/budgets/Partner";

export default function Home() {
    return (
        <div className="min-w-screen flex min-h-screen">
            <Sidebar />
            <main className="flex w-full flex-col px-12 pt-12">
                <Header title="Dashboard" />
                <div className="flex w-full flex-wrap gap-10 py-4">
                    <div className="flex grow flex-col gap-8">
                        <div className="w-full rounded-lg bg-neutral-700 p-4">
                            <div className="flex flex-col gap-4">
                                <div className="w-full rounded-md bg-neutral-800">
                                    <div className="flex items-center justify-between p-4">
                                        <div className="flex flex-col gap-1 text-white">
                                            <span className="text-xs">
                                                Total Balance
                                            </span>
                                            <span className="text-2xl font-bold">
                                                &#8369; 53,124.75
                                            </span>
                                        </div>
                                        <span className="text-emerald-600">
                                            +15%
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 text-white">
                                    <span className="text-xs font-light">
                                        Recent
                                    </span>
                                    <TransactionContainer
                                        budgetIcon={
                                            <BudgetIcon
                                                color="bg-amber-600"
                                                icon={<Groceries />}
                                            />
                                        }
                                        title="Groceries"
                                        subtitle="Today, 16:36"
                                        amount={-2000}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-col gap-2 text-xs text-white">
                            <div className="flex justify-between">
                                <span className="uppercase">
                                    Latest Activity
                                </span>
                                <span className="font-extralight">See all</span>
                            </div>
                            <Border />
                            <div className="flex flex-col gap-4">
                                <span className="w-full text-center uppercase text-neutral-400">
                                    Today
                                </span>
                                <TransactionContainer
                                    budgetIcon={
                                        <BudgetIcon
                                            color="bg-amber-600"
                                            icon={<Groceries />}
                                        />
                                    }
                                    title="Purchased monthly groceries"
                                    subtitle="Groceries"
                                    amount={-2000}
                                />
                                <TransactionContainer
                                    budgetIcon={
                                        <BudgetIcon
                                            color="bg-lime-600"
                                            icon={<Freelance />}
                                        />
                                    }
                                    title="Commission for AuditPH Project"
                                    subtitle="Freelance"
                                    amount={7172}
                                />
                                <TransactionContainer
                                    budgetIcon={
                                        <BudgetIcon
                                            color="bg-teal-600"
                                            icon={<Miscellaneous />}
                                        />
                                    }
                                    title="Monthly Allowance"
                                    subtitle="Income"
                                    amount={4000}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-sm uppercase text-white">
                                        Remaining Expense Budgets
                                    </span>
                                    <div>
                                        <span className="text-xs font-light text-red-600">
                                            (-2)
                                        </span>
                                        <span className="text-xs font-light text-neutral-400">
                                            {" "}
                                            reached the limit this month
                                        </span>
                                    </div>
                                </div>
                                <span className="text-sm text-neutral-400">
                                    See all
                                </span>
                            </div>
                            <table className="border-separate border-spacing-2 text-left text-xs text-white">
                                <thead className="uppercase">
                                    <tr>
                                        <th className="w-2/5">Budget</th>
                                        <th className="w-1/5">Icon</th>
                                        <th className="w-1/5">Limit</th>
                                        <th className="w-1/5">Progress</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-sm">Groceries</td>
                                        <td>
                                            <BudgetIcon
                                                color="bg-amber-600"
                                                icon={<Groceries size={14} />}
                                                size={6}
                                                padding={false}
                                            />
                                        </td>
                                        <td>&#8369; 4,000</td>
                                        <td className="flex flex-col">
                                            <span className="text-xs text-white">
                                                100%
                                            </span>
                                            <Progress.Root
                                                value={100}
                                                className="relative h-2 w-full overflow-hidden rounded-full bg-neutral-600"
                                            >
                                                <Progress.Indicator
                                                    className="size-full bg-sky-600"
                                                    style={{
                                                        transform: `translateX(-${100 - 100}%)`,
                                                    }}
                                                />
                                            </Progress.Root>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-sm">Food</td>
                                        <td>
                                            <BudgetIcon
                                                color="bg-teal-600"
                                                icon={<Food size={14} />}
                                                size={6}
                                                padding={false}
                                            />
                                        </td>
                                        <td>&#8369; 3,000</td>
                                        <td className="flex flex-col">
                                            <span className="text-xs text-white">
                                                100%
                                            </span>
                                            <Progress.Root
                                                value={100}
                                                className="relative h-2 w-full overflow-hidden rounded-full bg-neutral-600"
                                            >
                                                <Progress.Indicator
                                                    className="size-full bg-sky-600"
                                                    style={{
                                                        transform: `translateX(-${100 - 100}%)`,
                                                    }}
                                                />
                                            </Progress.Root>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-sm">Busay Laag</td>
                                        <td>
                                            <BudgetIcon
                                                color="bg-indigo-600"
                                                icon={
                                                    <Transportation size={14} />
                                                }
                                                size={6}
                                                padding={false}
                                            />
                                        </td>
                                        <td>&#8369; 1,000</td>
                                        <td className="flex flex-col">
                                            <span className="text-xs text-white">
                                                63%
                                            </span>
                                            <Progress.Root
                                                value={63}
                                                className="relative h-2 w-full overflow-hidden rounded-full bg-neutral-600"
                                            >
                                                <Progress.Indicator
                                                    className="size-full bg-sky-600"
                                                    style={{
                                                        transform: `translateX(-${100 - 63}%)`,
                                                    }}
                                                />
                                            </Progress.Root>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-sm">Partner</td>
                                        <td>
                                            <BudgetIcon
                                                color="bg-rose-600"
                                                icon={<Partner size={14} />}
                                                size={6}
                                                padding={false}
                                            />
                                        </td>
                                        <td>&#8369; 1,000</td>
                                        <td className="flex flex-col">
                                            <span className="text-xs text-white">
                                                47%
                                            </span>
                                            <Progress.Root
                                                value={47}
                                                className="relative h-2 w-full overflow-hidden rounded-full bg-neutral-600"
                                            >
                                                <Progress.Indicator
                                                    className="size-full bg-sky-600"
                                                    style={{
                                                        transform: `translateX(-${100 - 47}%)`,
                                                    }}
                                                />
                                            </Progress.Root>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex grow flex-col gap-4">
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-4">
                                <span className="text-xl font-bold text-white">
                                    Weekly Expenditures
                                </span>
                                <div className="flex gap-2">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <BudgetIcon
                                                    icon={
                                                        <Groceries size={16} />
                                                    }
                                                    color="bg-amber-600"
                                                    size={8}
                                                />
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-amber-600 text-white">
                                                &#8369; 405
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <BudgetIcon
                                                    color="bg-teal-600"
                                                    icon={<Food size={16} />}
                                                    size={8}
                                                />
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-teal-600 text-white">
                                                &#8369; 405
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <BudgetIcon
                                                    color="bg-indigo-600"
                                                    icon={
                                                        <Transportation
                                                            size={16}
                                                        />
                                                    }
                                                    size={8}
                                                />
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-indigo-600 text-white">
                                                &#8369; 405
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center gap-2 rounded-lg bg-neutral-700 px-5">
                                <span className="text-sm font-bold text-white">
                                    &#8369; 3,055
                                </span>
                                <span className="text-xs font-light text-white">
                                    Total Spent
                                </span>
                            </div>
                        </div>
                        <Border />
                        <div className="h-full">
                            <WeekSpendsChart />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-sm uppercase text-white">
                                        Upcoming Goals
                                    </span>
                                    <div>
                                        <span className="text-xs font-light text-emerald-600">
                                            (+2)
                                        </span>
                                        <span className="text-xs font-light text-neutral-400">
                                            {" "}
                                            completed this month
                                        </span>
                                    </div>
                                </div>
                                <span className="text-sm text-neutral-400">
                                    See all
                                </span>
                            </div>
                            <table className="border-separate border-spacing-2 text-left text-xs text-white">
                                <thead className="uppercase">
                                    <tr>
                                        <th className="w-2/5">Goal</th>
                                        <th className="w-1/5">Team</th>
                                        <th className="w-1/5">Target</th>
                                        <th className="w-1/5">Progress</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-sm">
                                            Anniversary Date
                                        </td>
                                        <td>
                                            <TeamIcon bg="/partner.jpg" />
                                        </td>
                                        <td>&#8369; 4,000</td>
                                        <td className="flex flex-col">
                                            <span className="text-xs text-white">
                                                60%
                                            </span>
                                            <Progress.Root
                                                value={60}
                                                className="relative h-2 w-full overflow-hidden rounded-full bg-neutral-600"
                                            >
                                                <Progress.Indicator
                                                    className="size-full bg-sky-600"
                                                    style={{
                                                        transform: `translateX(-${100 - 60}%)`,
                                                    }}
                                                />
                                            </Progress.Root>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-sm">Japan Trip</td>
                                        <td>
                                            <TeamIcon
                                                color="bg-teal-600"
                                                bg="F"
                                            />
                                        </td>
                                        <td>&#8369; 56,000</td>
                                        <td className="flex flex-col">
                                            <span className="text-xs text-white">
                                                43%
                                            </span>
                                            <Progress.Root
                                                value={43}
                                                className="relative h-2 w-full overflow-hidden rounded-full bg-neutral-600"
                                            >
                                                <Progress.Indicator
                                                    className="size-full bg-sky-600"
                                                    style={{
                                                        transform: `translateX(-${100 - 43}%)`,
                                                    }}
                                                />
                                            </Progress.Root>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-sm">Busay Laag</td>
                                        <td>
                                            <TeamIcon
                                                color="bg-cyan-600"
                                                bg="B"
                                            />
                                        </td>
                                        <td>&#8369; 1,500</td>
                                        <td className="flex flex-col">
                                            <span className="text-xs text-white">
                                                87%
                                            </span>
                                            <Progress.Root
                                                value={87}
                                                className="relative h-2 w-full overflow-hidden rounded-full bg-neutral-600"
                                            >
                                                <Progress.Indicator
                                                    className="size-full bg-sky-600"
                                                    style={{
                                                        transform: `translateX(-${100 - 87}%)`,
                                                    }}
                                                />
                                            </Progress.Root>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-sm">
                                            Mcdonald's Date
                                        </td>
                                        <td>
                                            <TeamIcon bg="/partner.jpg" />
                                        </td>
                                        <td>&#8369; 400</td>
                                        <td className="flex flex-col">
                                            <span className="text-xs text-white">
                                                95%
                                            </span>
                                            <Progress.Root
                                                value={95}
                                                className="relative h-2 w-full overflow-hidden rounded-full bg-neutral-600"
                                            >
                                                <Progress.Indicator
                                                    className="size-full bg-sky-600"
                                                    style={{
                                                        transform: `translateX(-${100 - 95}%)`,
                                                    }}
                                                />
                                            </Progress.Root>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
