"use client"
import * as Accordion from "@radix-ui/react-accordion";
import { AccordionTrigger } from "@radix-ui/react-accordion";
import { Icon } from "@iconify/react";
import { FC } from 'react'
import { useTheme  } from 'next-themes'
import Image from "next/image";
import projectImg from "public/img/xin-flight-1.avif"
import * as ScrollArea from "@radix-ui/react-scroll-area";

// import { ChevronDownIcon } from "@radix-ui/react-icons";
// import "./styles.css";
export interface AccordionSectionProps{
}


const AccordionSection:FC<AccordionSectionProps> = () => {
	const {theme: applicationTheme} = useTheme()
	console.log('檢查image路徑: ' , projectImg)

	return (
		<Accordion.Root className="w-full" type="single" collapsible>
			<Accordion.Item value="item-1">
				<Accordion.Header>
					<Accordion.Trigger className="w-full p-4 hover:bg-white/30">
					<div className=" w-full flex justify-between">
								<div className="flex">
									<span>2024 APR - NOW</span>
									<div className=" ml-10">
										<div className="text-left">Jet EVCharging</div>
										<div className=" opacity-40 text-left">Jet Energy</div>
									</div>
								</div>
					
								<div >
									<a href="https://www.google.com/" target="_blank" className="flex  items-center">Visit 
									<span className="text-5xl ml-2">👉</span>
									</a>
								</div>
							</div>
					</Accordion.Trigger>
				</Accordion.Header>

				<Accordion.Content className="p-4">
				
					<p>{`Led the end-to-end frontend development of the Xin Flight project, from conception to completion. Assisted in implementing Server-Side Rendering ( SSR ) for the company's website, significantly enhancing user experience and SEO performance.`}</p>
					
					<div className="flex mt-3">
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

					<div className="flex overflow-auto mt-3">
						<Image className=" w-[calc(33%-0.2rem)] mr-2" src={projectImg} alt="img" />
						<Image className=" w-[calc(33%-0.2rem)] mr-2" src={projectImg} alt="img" />
						<Image className=" w-[calc(33%-0.2rem)] mr-2" src={projectImg} alt="img" />
						<Image className=" w-[calc(33%-0.2rem)] mr-2" src={projectImg} alt="img" />
						<Image className=" w-[calc(33%-0.2rem)] mr-2" src={projectImg} alt="img" />
						<Image className=" w-[calc(33%-0.2rem)] mr-2" src={projectImg} alt="img" />
					</div>
				
				</Accordion.Content>
			</Accordion.Item>


			<Accordion.Item value="item-2">
				<Accordion.Header>
						<Accordion.Trigger className="w-full">
							<div className=" w-full flex justify-between">
								<div className="flex">
									<span>2024 APR - NOW</span>
									<div className=" ml-10">
										<div className="text-left">Jet EVCharging</div>
										<div className=" opacity-40 text-left">Jet Energy</div>
									</div>
								</div>
					
								<div >
									<a href="https://www.google.com/" target="_blank" className="flex  items-center">Visit 
									<span className="text-5xl ml-2">👉</span>
									</a>
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

			<Accordion.Item value="item-3">
				<Accordion.Header>
					<Accordion.Trigger className="w-full">
						<div className=" w-full flex justify-between">
							<div className="flex">
								<span>2024 APR - NOW</span>
								<div className=" ml-10">
									<div className="text-left">Jet EVCharging</div>
									<div className=" opacity-40 text-left">Jet Energy</div>
								</div>
							</div>
				
							<div >
								<a href="https://www.google.com/" target="_blank" className="flex  items-center">Visit 
								<span className="text-5xl ml-2">👉</span>
								</a>
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
		</Accordion.Root>
	)
};

export default AccordionSection