'use client';

import * as React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
const chartData = [
  { date: '2024-07-28', desktop: 222, mobile: 150 },
  { date: '2024-07-29', desktop: 97, mobile: 180 },
  { date: '2024-07-30', desktop: 167, mobile: 120 },
  { date: '2024-07-31', desktop: 242, mobile: 260 },
  { date: '2024-08-01', desktop: 373, mobile: 290 },
  { date: '2024-08-02', desktop: 301, mobile: 340 },
  { date: '2024-08-03', desktop: 245, mobile: 180 },
  { date: '2024-08-04', desktop: 409, mobile: 320 },
  { date: '2024-08-05', desktop: 59, mobile: 110 },
  { date: '2024-08-06', desktop: 261, mobile: 190 },
  { date: '2024-08-07', desktop: 327, mobile: 350 },
  { date: '2024-08-08', desktop: 292, mobile: 210 },
  { date: '2024-08-09', desktop: 342, mobile: 380 },
  { date: '2024-08-10', desktop: 137, mobile: 220 },
  { date: '2024-08-11', desktop: 120, mobile: 170 },
  { date: '2024-08-12', desktop: 138, mobile: 190 },
  { date: '2024-08-13', desktop: 446, mobile: 360 },
  { date: '2024-08-14', desktop: 364, mobile: 410 },
  { date: '2024-08-15', desktop: 243, mobile: 180 },
  { date: '2024-08-16', desktop: 89, mobile: 150 },
  { date: '2024-08-17', desktop: 137, mobile: 200 },
  { date: '2024-08-18', desktop: 224, mobile: 170 },
  { date: '2024-08-19', desktop: 138, mobile: 230 },
  { date: '2024-08-20', desktop: 387, mobile: 290 },
  { date: '2024-08-21', desktop: 215, mobile: 250 },
  { date: '2024-08-22', desktop: 75, mobile: 130 },
  { date: '2024-08-23', desktop: 383, mobile: 420 },
  { date: '2024-08-24', desktop: 122, mobile: 180 },
  { date: '2024-08-25', desktop: 315, mobile: 240 },
  { date: '2024-08-26', desktop: 454, mobile: 380 },
  { date: '2024-08-27', desktop: 165, mobile: 220 },
  { date: '2024-08-28', desktop: 293, mobile: 310 },
  { date: '2024-08-29', desktop: 247, mobile: 190 },
  { date: '2024-08-30', desktop: 385, mobile: 420 },
  { date: '2024-08-31', desktop: 481, mobile: 390 },
  { date: '2024-09-01', desktop: 498, mobile: 520 },
  { date: '2024-09-02', desktop: 388, mobile: 300 },
  { date: '2024-09-03', desktop: 149, mobile: 210 },
  { date: '2024-09-04', desktop: 227, mobile: 180 },
  { date: '2024-09-05', desktop: 293, mobile: 330 },
  { date: '2024-09-06', desktop: 335, mobile: 270 },
  { date: '2024-09-07', desktop: 197, mobile: 240 },
  { date: '2024-09-08', desktop: 197, mobile: 160 },
  { date: '2024-09-09', desktop: 448, mobile: 490 },
  { date: '2024-09-10', desktop: 473, mobile: 380 },
  { date: '2024-09-11', desktop: 338, mobile: 400 },
  { date: '2024-09-12', desktop: 499, mobile: 420 },
  { date: '2024-09-13', desktop: 315, mobile: 350 },
  { date: '2024-09-14', desktop: 235, mobile: 180 },
  { date: '2024-09-15', desktop: 177, mobile: 230 },
  { date: '2024-09-16', desktop: 82, mobile: 140 },
  { date: '2024-09-17', desktop: 81, mobile: 120 },
  { date: '2024-09-18', desktop: 252, mobile: 290 },
  { date: '2024-09-19', desktop: 294, mobile: 220 },
  { date: '2024-09-20', desktop: 201, mobile: 250 },
  { date: '2024-09-21', desktop: 213, mobile: 170 },
  { date: '2024-09-22', desktop: 420, mobile: 460 },
  { date: '2024-09-23', desktop: 233, mobile: 190 },
  { date: '2024-09-24', desktop: 78, mobile: 130 },
  { date: '2024-09-25', desktop: 340, mobile: 280 },
  { date: '2024-09-26', desktop: 178, mobile: 230 },
  { date: '2024-09-27', desktop: 178, mobile: 200 },
];

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export function AreaChartComponent() {
  const [timeRange, setTimeRange] = React.useState('90d');

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const now = new Date();
    let daysToSubtract = 90;
    if (timeRange === '30d') {
      daysToSubtract = 30;
    } else if (timeRange === '7d') {
      daysToSubtract = 7;
    }
    now.setDate(now.getDate() - daysToSubtract);
    return date >= now;
  });

  return (
    <Card>
      <CardHeader className='flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row'>
        <div className='grid flex-1 gap-1 text-center sm:text-left'>
          <CardTitle>Area Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className='w-[160px] rounded-lg sm:ml-auto'
            aria-label='Select a value'
          >
            <SelectValue placeholder='Last 3 months' />
          </SelectTrigger>
          <SelectContent className='rounded-xl'>
            <SelectItem value='90d' className='rounded-lg'>
              Last 3 months
            </SelectItem>
            <SelectItem value='30d' className='rounded-lg'>
              Last 30 days
            </SelectItem>
            <SelectItem value='7d' className='rounded-lg'>
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className='px-2 pt-4 sm:px-6 sm:pt-6'>
        <ChartContainer
          config={chartConfig}
          className='aspect-auto h-[250px] w-full'
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id='fillDesktop' x1='0' y1='0' x2='0' y2='1'>
                <stop
                  offset='5%'
                  stopColor='var(--color-desktop)'
                  stopOpacity={0.8}
                />
                <stop
                  offset='95%'
                  stopColor='var(--color-desktop)'
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id='fillMobile' x1='0' y1='0' x2='0' y2='1'>
                <stop
                  offset='5%'
                  stopColor='var(--color-mobile)'
                  stopOpacity={0.8}
                />
                <stop
                  offset='95%'
                  stopColor='var(--color-mobile)'
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='date'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value as string);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value as string).toLocaleDateString(
                      'en-US',
                      {
                        month: 'short',
                        day: 'numeric',
                      },
                    );
                  }}
                  indicator='dot'
                />
              }
            />
            <Area
              dataKey='mobile'
              type='natural'
              fill='url(#fillMobile)'
              stroke='var(--color-mobile)'
              stackId='a'
            />
            <Area
              dataKey='desktop'
              type='natural'
              fill='url(#fillDesktop)'
              stroke='var(--color-desktop)'
              stackId='a'
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
