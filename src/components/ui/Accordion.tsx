"use client"
import * as Accordion from "@radix-ui/react-accordion";
import { AccordionTrigger } from "@radix-ui/react-accordion";
import { Icon } from "@iconify/react";
import { FC } from 'react'
import { useTheme  } from 'next-themes'


// import { ChevronDownIcon } from "@radix-ui/react-icons";
// import "./styles.css";
export interface AccordionSectionProps{
}


const AccordionSection:FC<AccordionSectionProps> = () => {
	const {theme: applicationTheme} = useTheme()

	return (
		<Accordion.Root className="w-full" type="single" collapsible>
			<Accordion.Item value="item-1">
				<Accordion.Header>
					<Accordion.Trigger >
						<div className=" w-full flex ">
							<span>2024 APR - NOW</span>
							<div className=" ml-10">
								<div className="text-left">Jet EVCharging</div>
								<div className=" opacity-40 text-left">Jet Energy</div>
							</div>
						</div>
					</Accordion.Trigger>
				</Accordion.Header>

				<Accordion.Content>
					<div className="flex">
						<Icon icon={`skill-icons:angular-${applicationTheme}`} width="50" height="50" className="mr-2" />
						<Icon icon={`skill-icons:tailwindcss-${applicationTheme}`} width="50" height="50" className="mr-2" />
						<Icon icon={`skill-icons:expressjs-${applicationTheme}`} width="50" height="50" className="mr-2" />
						<Icon icon={`skill-icons:sequelize-${applicationTheme}`} width="50" height="50" className="mr-2" />
						<Icon icon={`skill-icons:postgresql-${applicationTheme}`} width="50" height="50" className="mr-2" />
						<Icon icon={`skill-icons:aws-${applicationTheme}`} width="50" height="50" className="mr-2" />
						<Icon icon={`skill-icons:gitlab-${applicationTheme}`} width="50" height="50" className="mr-2" />
						<Icon icon="skill-icons:sass" width="50" height="50" className="mr-2"/>
						<Icon icon="skill-icons:typescript" width="50" height="50" className="mr-2"/>
					</div>
					<p>{`Led the end-to-end frontend development of the Xin Flight project, from conception to completion. Assisted in implementing Server-Side Rendering ( SSR ) for the company's website, significantly enhancing user experience and SEO performance.`}</p>
					

					
				</Accordion.Content>
			</Accordion.Item>


			<Accordion.Item value="item-2">
				<Accordion.Header>
					<Accordion.Trigger >
						<div className=" border-2 border-red-600 w-full ">
							<span>Trigger text</span>👇

						</div>
					</Accordion.Trigger>
				</Accordion.Header>

				<Accordion.Content>內容物</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item value="item-3">
				<Accordion.Header>
					<Accordion.Trigger >
						<div className=" border-2 border-red-600 w-full ">
							<span>Trigger text</span>👇

						</div>
					</Accordion.Trigger>
				</Accordion.Header>

				<Accordion.Content>內容物</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	)
};

export default AccordionSection