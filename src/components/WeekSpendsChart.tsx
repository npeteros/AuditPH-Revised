"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
    {
        month: "Sunday",
        groceries: Math.random() * (400- 100) + 100,
        food: Math.random() * (600- 400) + 400,
        transportation: Math.random() * (800- 600) + 600,
    },
    {
        month: "Monday",
        groceries: Math.random() * (400- 100) + 100,
        food: Math.random() * (600- 400) + 400,
        transportation: Math.random() * (800- 600) + 600,
    },
    {
        month: "Tuesday",
        groceries: Math.random() * (400- 100) + 100,
        food: Math.random() * (600- 400) + 400,
        transportation: Math.random() * (800- 600) + 600,
    },
    {
        month: "Wednesday",
        groceries: Math.random() * (400- 100) + 100,
        food: Math.random() * (600- 400) + 400,
        transportation: Math.random() * (800- 600) + 600,
    },
    {
        month: "Thursday",
        groceries: Math.random() * (400- 100) + 100,
        food: Math.random() * (600- 400) + 400,
        transportation: Math.random() * (800- 600) + 600,
    },
    {
        month: "Friday",
        groceries: Math.random() * (400- 100) + 100,
        food: Math.random() * (600- 400) + 400,
        transportation: Math.random() * (800- 600) + 600,
    },
    {
        month: "Saturday",
        groceries: Math.random() * (400- 100) + 100,
        food: Math.random() * (600- 400) + 400,
        transportation: Math.random() * (800- 600) + 600,
    },
];

const chartConfig = {
    groceries: {
        label: "Groceries",
        color: "#D97706",
    },
    food: {
        label: "Food",
        color: "#0891B2",
    },
    transportation: {
        label: "Transportation",
        color: "#4F46E5",
    },
} satisfies ChartConfig;

export default function Component() {
    return (
        <Card className="border-0 bg-transparent">
            <CardContent>
                <ChartContainer config={chartConfig} className="h-60 w-full">
                    <BarChart
                        accessibilityLayer
                        data={chartData}

                    >
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <ChartLegend
                            content={<ChartLegendContent />}
                            className="text-white"
                        />
                        <Bar
                            dataKey="groceries"
                            stackId="a"
                            fill="var(--color-groceries)"
                            radius={[0, 0, 4, 4]}
                        />
                        <Bar
                            dataKey="food"
                            stackId="a"
                            fill="var(--color-food)"
                            radius={[0, 0, 0, 0]}
                        />
                        <Bar
                            dataKey="transportation"
                            stackId="a"
                            fill="var(--color-transportation)"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none text-emerald-500">
                    Trending up by 5.2% this week{" "}
                    <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total expenditures by budget for the last week
                </div>
            </CardFooter>
        </Card>
    );
}
