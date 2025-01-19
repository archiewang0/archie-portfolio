"use client"
import * as Accordion from "@radix-ui/react-accordion";
import { AccordionTrigger } from "@radix-ui/react-accordion";
import { Icon } from "@iconify/react";
import { FC } from 'react'
import { useTheme  } from 'next-themes'
import Image from "next/image";
import projectImg from "public/img/xin-flight-1.avif"
import * as ScrollArea from "@radix-ui/react-scroll-area";

export interface ExperienceAccordionAccordionProps{
}


const ExperienceAccordion:FC<ExperienceAccordionAccordionProps> = () => {
	const {theme: applicationTheme} = useTheme()
	return (

		<Accordion.Root className="w-full" defaultValue="item-1" type="single" collapsible>
			<Accordion.Item value="item-1">
				<Accordion.Header>
					<Accordion.Trigger className="w-full pb-4 sm:p-4 hover:bg-white/30 dark:hover:bg-black/20">
						<div className=" w-full flex justify-between items-center">
							<div className="flex flex-col sm:flex-row  items-start">
								<span className="text-xs sm:text-base dark:text-slate-300">2024 APR - NOW</span>
								<div className="ml-0 sm:ml-10">
									<div className="dark:text-slate-300 text-left">Jet EVCharging</div>
									<div className="dark:text-slate-300 opacity-60 text-left">Jet OPTO</div>
								</div>
							</div>
				
							<div >
								<a href="https://www.google.com/" target="_blank" className="flex items-center dark:text-slate-300">Visit 
									<Icon icon="charm:arrow-up-right" className="sm:w-12 sm:h-12 w-8 h-8" />
								</a>
							</div>
						</div>

					</Accordion.Trigger>
					<hr className="  border-slate-500 dark:border-stone-400"/>

				</Accordion.Header>

				<Accordion.Content className="py-4 sm:p-4 overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
				
					<p className=" dark:text-slate-300 ">{`Led the end-to-end frontend development of the Xin Flight project, from conception to completion. Assisted in implementing Server-Side Rendering ( SSR ) for the company's website, significantly enhancing user experience and SEO performance.`}</p>
					
					<div className="flex flex-wrap m-3">
						<Icon icon={`skill-icons:angular-${applicationTheme}`} width="50" height="50" className="sm:m-2 m-4" />
						<Icon icon={`skill-icons:tailwindcss-${applicationTheme}`} width="50" height="50" className="sm:m-2 m-4" />
						<Icon icon={`skill-icons:expressjs-${applicationTheme}`} width="50" height="50" className="sm:m-2 m-4" />
						<Icon icon={`skill-icons:sequelize-${applicationTheme}`} width="50" height="50" className="sm:m-2 m-4" />
						<Icon icon={`skill-icons:postgresql-${applicationTheme}`} width="50" height="50" className="sm:m-2 m-4" />
						<Icon icon={`skill-icons:aws-${applicationTheme}`} width="50" height="50" className="sm:m-2 m-4" />
						<Icon icon={`skill-icons:gitlab-${applicationTheme}`} width="50" height="50" className="sm:m-2 m-4" />
						<Icon icon="skill-icons:sass" width="50" height="50" className="sm:m-2 m-4"/>
						<Icon icon="skill-icons:typescript" width="50" height="50" className="sm:m-2 m-4"/>
					</div>

					<div className="sm:flex sm:overflow-auto mt-3">
						<Image className="w-full sm:w-[calc(33%-0.2rem)] sm:mr-2 my-2" src={projectImg} alt="img" />
						<Image className="w-full sm:w-[calc(33%-0.2rem)] sm:mr-2 my-2" src={projectImg} alt="img" />
						<Image className="w-full sm:w-[calc(33%-0.2rem)] sm:mr-2 my-2" src={projectImg} alt="img" />
						<Image className="w-full sm:w-[calc(33%-0.2rem)] sm:mr-2 my-2" src={projectImg} alt="img" />
						<Image className="w-full sm:w-[calc(33%-0.2rem)] sm:mr-2 my-2" src={projectImg} alt="img" />
						<Image className="w-full sm:w-[calc(33%-0.2rem)] sm:mr-2 my-2" src={projectImg} alt="img" />
					</div>
				
				</Accordion.Content>
			</Accordion.Item>


			<Accordion.Item value="item-2">
				<Accordion.Header>
					<Accordion.Trigger className="w-full pb-4 sm:p-4 hover:bg-white/30 dark:hover:bg-black/20">
						<div className=" w-full flex justify-between items-center">
							<div className="flex flex-col sm:flex-row  items-start">
								<span className="text-xs sm:text-base dark:text-slate-300">2024 APR - NOW</span>
								<div className="ml-0 sm:ml-10">
									<div className="dark:text-slate-300 text-left">Jet EVCharging</div>
									<div className="dark:text-slate-300 opacity-60 text-left">Jet OPTO</div>
								</div>
							</div>
				
							<div >
								<a href="https://www.google.com/" target="_blank" className="flex items-center dark:text-slate-300">Visit 
									<Icon icon="charm:arrow-up-right" className="sm:w-12 sm:h-12 w-8 h-8" />
								</a>
							</div>
						</div>

					</Accordion.Trigger>
					<hr className="  border-slate-500 dark:border-stone-400"/>

				</Accordion.Header>

				<Accordion.Content className="py-4 sm:p-4 overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
				
					<p className=" dark:text-slate-300 ">{`Led the end-to-end frontend development of the Xin Flight project, from conception to completion. Assisted in implementing Server-Side Rendering ( SSR ) for the company's website, significantly enhancing user experience and SEO performance.`}</p>
					
					<div className="flex flex-wrap m-3">
						<Icon icon={`skill-icons:angular-${applicationTheme}`} width="50" height="50" className="sm:m-2 m-4" />
						<Icon icon={`skill-icons:tailwindcss-${applicationTheme}`} width="50" height="50" className="sm:m-2 m-4" />
						<Icon icon={`skill-icons:expressjs-${applicationTheme}`} width="50" height="50" className="sm:m-2 m-4" />
						<Icon icon={`skill-icons:sequelize-${applicationTheme}`} width="50" height="50" className="sm:m-2 m-4" />
						<Icon icon={`skill-icons:postgresql-${applicationTheme}`} width="50" height="50" className="sm:m-2 m-4" />
						<Icon icon={`skill-icons:aws-${applicationTheme}`} width="50" height="50" className="sm:m-2 m-4" />
						<Icon icon={`skill-icons:gitlab-${applicationTheme}`} width="50" height="50" className="sm:m-2 m-4" />
						<Icon icon="skill-icons:sass" width="50" height="50" className="sm:m-2 m-4"/>
						<Icon icon="skill-icons:typescript" width="50" height="50" className="sm:m-2 m-4"/>
					</div>

					<div className="sm:flex sm:overflow-auto mt-3">
						<Image className="w-full sm:w-[calc(33%-0.2rem)] sm:mr-2 my-2" src={projectImg} alt="img" />
						<Image className="w-full sm:w-[calc(33%-0.2rem)] sm:mr-2 my-2" src={projectImg} alt="img" />
						<Image className="w-full sm:w-[calc(33%-0.2rem)] sm:mr-2 my-2" src={projectImg} alt="img" />
						<Image className="w-full sm:w-[calc(33%-0.2rem)] sm:mr-2 my-2" src={projectImg} alt="img" />
						<Image className="w-full sm:w-[calc(33%-0.2rem)] sm:mr-2 my-2" src={projectImg} alt="img" />
						<Image className="w-full sm:w-[calc(33%-0.2rem)] sm:mr-2 my-2" src={projectImg} alt="img" />
					</div>
				
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item value="item-3">
				<Accordion.Header>
					<Accordion.Trigger className="w-full pb-4 sm:p-4 hover:bg-white/30 dark:hover:bg-black/20">
						<div className=" w-full flex justify-between items-center">
							<div className="flex flex-col sm:flex-row  items-start">
								<span className="text-xs sm:text-base dark:text-slate-300">2024 APR - NOW</span>
								<div className="ml-0 sm:ml-10">
									<div className="dark:text-slate-300 text-left">Jet EVCharging</div>
									<div className="dark:text-slate-300 opacity-60 text-left">Jet OPTO</div>
								</div>
							</div>
				
							<div >
								<a href="https://www.google.com/" target="_blank" className="flex items-center dark:text-slate-300">Visit 
									<Icon icon="charm:arrow-up-right" className="sm:w-12 sm:h-12 w-8 h-8" />
								</a>
							</div>
						</div>

					</Accordion.Trigger>
					<hr className="  border-slate-500 dark:border-stone-400"/>

				</Accordion.Header>

				<Accordion.Content className="py-4 sm:p-4 overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
				
					<p className=" dark:text-slate-300 ">{`Led the end-to-end frontend development of the Xin Flight project, from conception to completion. Assisted in implementing Server-Side Rendering ( SSR ) for the company's website, significantly enhancing user experience and SEO performance.`}</p>
					
					<div className="flex flex-wrap m-3">
						<Icon icon={`skill-icons:angular-${applicationTheme}`} width="50" height="50" className="sm:m-2 m-4" />
						<Icon icon={`skill-icons:tailwindcss-${applicationTheme}`} width="50" height="50" className="sm:m-2 m-4" />
						<Icon icon={`skill-icons:expressjs-${applicationTheme}`} width="50" height="50" className="sm:m-2 m-4" />
						<Icon icon={`skill-icons:sequelize-${applicationTheme}`} width="50" height="50" className="sm:m-2 m-4" />
						<Icon icon={`skill-icons:postgresql-${applicationTheme}`} width="50" height="50" className="sm:m-2 m-4" />
						<Icon icon={`skill-icons:aws-${applicationTheme}`} width="50" height="50" className="sm:m-2 m-4" />
						<Icon icon={`skill-icons:gitlab-${applicationTheme}`} width="50" height="50" className="sm:m-2 m-4" />
						<Icon icon="skill-icons:sass" width="50" height="50" className="sm:m-2 m-4"/>
						<Icon icon="skill-icons:typescript" width="50" height="50" className="sm:m-2 m-4"/>
					</div>

					<div className="sm:flex sm:overflow-auto mt-3">
						<Image className="w-full sm:w-[calc(33%-0.2rem)] sm:mr-2 my-2" src={projectImg} alt="img" />
						<Image className="w-full sm:w-[calc(33%-0.2rem)] sm:mr-2 my-2" src={projectImg} alt="img" />
						<Image className="w-full sm:w-[calc(33%-0.2rem)] sm:mr-2 my-2" src={projectImg} alt="img" />
						<Image className="w-full sm:w-[calc(33%-0.2rem)] sm:mr-2 my-2" src={projectImg} alt="img" />
						<Image className="w-full sm:w-[calc(33%-0.2rem)] sm:mr-2 my-2" src={projectImg} alt="img" />
						<Image className="w-full sm:w-[calc(33%-0.2rem)] sm:mr-2 my-2" src={projectImg} alt="img" />
					</div>
				
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	)
};

export default ExperienceAccordion