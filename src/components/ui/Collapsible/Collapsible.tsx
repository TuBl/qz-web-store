import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const { CollapsibleTrigger } = CollapsiblePrimitive;

const { CollapsibleContent } = CollapsiblePrimitive;

const CollapsibleDemo = () => {
	return (
		<Collapsible className='text-primary-800'>
			<CollapsibleTrigger className=' m-b-6'>
				Can I use this in my project?
			</CollapsibleTrigger>
			<CollapsibleContent>
				Yes. Free to use for personal and commercial projects. No
				attribution required.
			</CollapsibleContent>
		</Collapsible>
	);
};

export { Collapsible, CollapsibleTrigger, CollapsibleContent, CollapsibleDemo };
