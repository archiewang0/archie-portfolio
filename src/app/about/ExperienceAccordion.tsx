"use client"
import * as Accordion from "@radix-ui/react-accordion";
import { Icon } from "@iconify/react";
import { FC } from 'react'

interface ExperienceAccordionAccordionItem {
	id: string
	company: string
	time: string
	describe: string
	skills: string[]
}
export interface ExperienceAccordionAccordionProps{
	datas: ExperienceAccordionAccordionItem[]
}


const ExperienceAccordion:FC<ExperienceAccordionAccordionProps> = ({datas}) => {
	return (

		<Accordion.Root className="w-full" defaultValue="id-1" type="single" collapsible>

			{datas.map(({id , company , time , describe , skills}) => <Accordion.Item key={id} value={id}>
				<Accordion.Header>
					<Accordion.Trigger className=" mt-3 w-full pb-4 sm:p-4 hover:bg-white/30 dark:hover:bg-black/20">
						<div className="w-full flex justify-between">
							<div className="text-xl dark:text-slate-300 text-left">{company}</div>
							<div className=" text-right opacity-80  text-xs dark:text-slate-300">{time}</div>
						</div>
					</Accordion.Trigger>
					<hr className="  border-slate-500 dark:border-stone-400"/>

				</Accordion.Header>

				<Accordion.Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">

                    <div className="py-4 sm:p-4 ">
                        <p className=" dark:text-slate-300 ">
                            {describe}
                        </p>
                        
                        {/* <div className="flex flex-wrap m-3">
                            {skills.map((item , i)=> <Icon key={i} icon={item} width="50" height="50" className="sm:m-2 m-4 w-12 h-12" />)}
                        </div> */}
                    </div>
				
				</Accordion.Content>
			</Accordion.Item>

			)}

		</Accordion.Root>
	)
};

export default ExperienceAccordion