import * as Accordion from "@radix-ui/react-accordion";
// import { ChevronDownIcon } from "@radix-ui/react-icons";
// import "./styles.css";

const AccordionSection = () => (
	<Accordion.Root type="single">
		<Accordion.Item value="item-1">
			<Accordion.Header>
				<Accordion.Trigger className="AccordionTrigger">
					<span>Trigger text</span>
					👇
				</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content>…</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
);

export default AccordionSection