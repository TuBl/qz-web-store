/* eslint-disable jsx-a11y/heading-has-content */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
// can also import Waves / FileWarning from lucide-react
import { AlertCircle, Terminal } from "lucide-react";

import { cn } from "@/lib/utils";

const alertVariants = cva(
	"relative w-full rounded-lg border border-slate-200 p-4 [&:has(svg)]:pl-11 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-slate-950 dark:border-slate-800 dark:[&>svg]:text-slate-50",
	{
		variants: {
			variant: {
				default:
					"bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
				destructive:
					"border-red-500/50 text-red-500 dark:border-red-500 [&>svg]:text-red-500 dark:border-red-900/50 dark:text-red-900 dark:dark:border-red-900 dark:[&>svg]:text-red-900",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

const Alert = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
	<div
		ref={ref}
		role='alert'
		className={cn(alertVariants({ variant }), className)}
		{...props}
	/>
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h5
		ref={ref}
		className={cn(
			"font-medium leading-none mb-1 tracking-tight",
			className
		)}
		{...props}
	/>
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("[&_p]:leading-relaxed text-sm", className)}
		{...props}
	/>
));
AlertDescription.displayName = "AlertDescription";

type AlertProps = {
	variant: "default" | "destructive" | null | undefined;
	title: string;
	description: string;
};

const AlertComponent = ({ variant, description, title }: AlertProps) => {
	return (
		<Alert variant={variant ?? "default"}>
			{variant === "destructive" ? (
				<AlertCircle className='h-4 w-4' />
			) : (
				<Terminal className='h-4 w-4' />
			)}
			<AlertTitle>{title}</AlertTitle>
			<AlertDescription>{description}</AlertDescription>
		</Alert>
	);
};

export { Alert, AlertTitle, AlertDescription, AlertComponent };
