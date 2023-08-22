import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button/Button";

import { addDays, format } from "date-fns";

const pastMonth = new Date(2020, 10, 15);

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const IconLeft = (props: React.SVGProps<SVGSVGElement>) => (
	<ChevronLeft className='h-4 w-4' {...props} />
);
const IconRight = (props: React.SVGProps<SVGSVGElement>) => (
	<ChevronRight className='h-4 w-4' {...props} />
);

const Calendar = ({
	className,
	classNames,
	showOutsideDays = true,
	...props
}: CalendarProps) => {
	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			className={cn("p-3", className)}
			classNames={{
				months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
				month: "space-y-4",
				caption: "flex justify-center pt-1 relative items-center",
				caption_label: "text-sm font-medium",
				nav: "space-x-1 flex items-center",
				nav_button: cn(
					buttonVariants({ variant: "outline" }),
					"h-7 w-7 p-0 opacity-50 hover:opacity-100 bg-primary-500 hover:bg-primary-500"
				),
				nav_button_previous: "absolute left-1",
				nav_button_next: "absolute right-1",
				table: "w-full border-collapse space-y-1",
				head_row: "flex text-primary-800",
				head_cell:
					"text-primary-500 rounded-md w-12 font-normal text-[0.8rem] dark:text-primary-400",
				row: "flex w-full mt-2",
				cell: "text-center text-sm p-0 relative text-primary-400 [&:has([aria-selected])]:bg-primary-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 dark:[&:has([aria-selected])]:bg-primary-800",
				day: cn(
					buttonVariants({ variant: "ghost" }),
					"h-9 w-12 p-0 font-normal aria-selected:opacity-100"
				),
				day_selected:
					"bg-primary-400 text-primary-100 hover:bg-primary-500 hover:text-primary-100 focus:bg-primary-400 focus:primarytext-primary-100 dark:bg-primary-50 dark:text-primary-900 dark:hover:bg-primary-50 dark:hover:text-primary-900 dark:focus:bg-primary-50 dark:focus:text-primary-900",
				day_today:
					"bg-primary-100 text-primary-900 dark:bg-primary-800 dark:primarytext-primary-100",
				day_outside:
					"text-primary-500 opacity-50 dark:text-primary-400",
				day_disabled:
					"text-primary-500 opacity-50 dark:text-primary-400",
				day_range_middle:
					"aria-selected:bg-primary-100 aria-selected:text-primary-900 dark:aria-selected:bg-primary-800 dark:aria-selected:primarytext-primary-100",
				day_hidden: "invisible",
				...classNames,
			}}
			components={{
				IconLeft,
				IconRight,
			}}
			{...props}
		/>
	);
};
Calendar.displayName = "Calendar";

const CalendarSingle = () => {
	const [selectedDay, setSelectedDay] = React.useState<Date>();

	const footer = selectedDay ? (
		<p>You selected {format(selectedDay, "PPP")}.</p>
	) : (
		<p>Please pick a day.</p>
	);

	return (
		<Calendar
			mode='single'
			selected={selectedDay}
			onSelect={setSelectedDay}
			footer={footer}
		/>
	);
};
const CalendarMultiple = () => {
	const initialDays: Date[] = [];
	const [days, setDays] = React.useState<Date[] | undefined>(initialDays);

	const footer =
		days && days.length > 0 ? (
			<p>You selected {days.length} day(s).</p>
		) : (
			<p>Please pick one or more days.</p>
		);
	return (
		<Calendar
			mode='multiple'
			min={1}
			selected={days}
			onSelect={setDays}
			footer={footer}
		/>
	);
};
const CalendarRange = () => {
	const defaultSelected: DateRange = {
		from: pastMonth,
		to: addDays(pastMonth, 4),
	};
	const [range, setRange] = React.useState<DateRange | undefined>(
		defaultSelected
	);

	let footer = <p>Please pick the first day.</p>;
	if (range?.from) {
		if (!range.to) {
			footer = <p>{format(range.from, "PPP")}</p>;
		} else if (range.to) {
			footer = (
				<p>
					{format(range.from, "PPP")}–{format(range.to, "PPP")}
				</p>
			);
		}
	}
	return (
		<Calendar
			id='test'
			mode='range'
			defaultMonth={pastMonth}
			selected={range}
			footer={footer}
			onSelect={setRange}
		/>
	);
};

export type CalendarComponentProps = {
	variant: "single" | "multiple" | "range";
};

const CalendarComponent = ({ variant = "single" }: CalendarComponentProps) => {
	switch (variant) {
		case "single":
			return <CalendarSingle />;

		case "multiple":
			return <CalendarMultiple />;

		case "range":
			return <CalendarRange />;

		default:
			return <CalendarSingle />;
	}
};

export { CalendarComponent };
