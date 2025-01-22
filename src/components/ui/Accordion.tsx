"use client"
import * as Accordion from "@radix-ui/react-accordion";
import { AccordionTrigger } from "@radix-ui/react-accordion";
import { Icon } from "@iconify/react";
import { FC } from 'react'
import { useTheme  } from 'next-themes'
import Image from "next/image";
import { StaticImageData } from "next/image";

interface I_AccordionItem {
	id: string
	time: string //2023 JUL - NOW | 2021 JUL - 2023 JUL
	projectName: string 
	company: string
	webLink: string
	describe: string
	skills: string[] // skill-icons:typescript , skill-icons:gitlab-light
	images: {
		src: StaticImageData,
		href: string
	}[]
}

export interface AccordionSectionProps{
	datas: I_AccordionItem[]
}



const AccordionSection:FC<AccordionSectionProps> = ({
	datas
}) => {	
	return (

		<Accordion.Root className="w-full" defaultValue="id-1" type="single" collapsible>
			{datas.map(({id ,time , projectName , company , webLink , describe , skills , images })=> <Accordion.Item key={id} value={id}>
				<Accordion.Header>
					<Accordion.Trigger className="w-full pb-4 sm:p-4 hover:bg-white/30 dark:hover:bg-black/20">
						<div className=" w-full flex justify-between items-center">
							<div className="flex flex-col sm:flex-row items-start">
								<span className="sm:min-w-40 text-xs sm:text-base dark:text-slate-300 text-left">{time}</span>
								<div className="ml-0 sm:ml-10">
									<div className="dark:text-slate-300 text-left">{projectName}</div>
									<div className="dark:text-slate-300 opacity-60 text-left">{company}</div>
								</div>
							</div>
				
							<div >
								<a href={webLink} target="_blank" className="flex items-center dark:text-slate-300">Visit 
									<Icon icon="charm:arrow-up-right" className="sm:w-12 sm:h-12 w-8 h-8" />
								</a>
							</div>
						</div>

					</Accordion.Trigger>
					<hr className="  border-slate-500 dark:border-stone-400"/>

				</Accordion.Header>

				<Accordion.Content className=" overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
				
                    <div className="py-4 sm:p-4 ">
                        <p className=" dark:text-slate-300 ">
                            {describe}
                        </p>
                        
                        <div className="flex flex-wrap m-3">
							
                            {skills.map((data, i )=> <div  key={i} className="w-12 h-12 sm:m-2 m-4">
									<Icon icon={data} width="50" height="50" className="w-full" /> 
								</div>
							)}
                        </div>

                        <div className=" sm:flex  sm:overflow-x-auto mt-3">

                            {images.map(({src , href} , i)=> <a key={i} href={href} target="_blank" className=" bg-slate-800 flex justify-center items-center w-full accordionItem sm:mr-2 my-2 ">
                                <Image className="w-full" src={src} alt="img" />
                            </a> )}
                        </div>
                    </div>
					
				</Accordion.Content>
			</Accordion.Item>
		)}
		</Accordion.Root>
	)
};

export default AccordionSection