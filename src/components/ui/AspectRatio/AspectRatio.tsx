import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { cn } from "@/lib/utils";

const AspectRatio = AspectRatioPrimitive.Root;

export type IconDimensions = {
	width: 50 | 64 | 96 | 128;
	height: 50 | 64 | 96 | 128;
};

export type HeroDimensions = {
	width: 256 | 450 | 512 | 640 | 768 | 1024 | 1280 | 1440 | 1920 | 2560;
	height: 256 | 450 | 512 | 640 | 768 | 1024 | 1280 | 1440 | 1920 | 2560;
};

export type ImageComponentProps<T> = {
	src: string;
	alt: string;
	className?: string;
} & T;

const widthClassMapping = {
	50: "w-50",
	64: "w-64",
	96: "w-96",
	128: "w-128",
	256: "w-256",
	450: "w-450",
	512: "w-512",
	640: "w-640",
	768: "w-768",
	1024: "w-1024",
	1280: "w-1280",
	1440: "w-1440",
	1920: "w-1920",
	2560: "w-2560",
};

const heightClassMapping = {
	50: "h-50",
	64: "h-64",
	96: "h-96",
	128: "h-128",
};

const ImageComponent = ({
	src,
	alt,
	height,
	width,
	className,
}: ImageComponentProps<IconDimensions | HeroDimensions>) => {
	const widthClass = widthClassMapping[width];
	return (
		<div className={widthClass}>
			<AspectRatio ratio={width / height ?? 16 / 9}>
				<Image
					src={src}
					alt={alt}
					height={height}
					width={width}
					className={cn("rounded-md object-cover", className)}
				/>
			</AspectRatio>
		</div>
	);
};

const Icon = ({
	src,
	height,
	width,
	alt,
	className,
}: ImageComponentProps<IconDimensions>) => {
	const heightClass = heightClassMapping[height];
	return (
		<ImageComponent
			src={src}
			width={width}
			height={height}
			alt={alt}
			className={cn("rounded-full", heightClass, className)}
		/>
	);
};

const Hero = ({
	src,
	height,
	width,
	alt,
	className,
}: ImageComponentProps<HeroDimensions>) => {
	return (
		<ImageComponent
			src={src}
			width={width}
			height={height}
			alt={alt}
			className={className}
		/>
	);
};

export { AspectRatio, ImageComponent, Icon, Hero };
