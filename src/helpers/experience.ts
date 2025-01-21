import { ExperienceAccordionAccordionProps } from "@/app/about/ExperienceAccordion"


const experience = (theme:string | undefined): ExperienceAccordionAccordionProps =>{
    theme = theme ? theme : 'light'  
    const datas: ExperienceAccordionAccordionProps  = {
        datas: [
            {
                "id": "id-1",
                "time": "2023 JUL - NOW",
                "company": "Jet OPTO",
                "describe": "In less than a year, I completed the charging station project, which is now live and operational. This project allows the company to earn around ten thousand dollars per month. Additionally, we are developing more powerful features to increase customer retention and attract potential future clients.",
                "skills": [
                    `skill-icons:angular-${theme}`,
                    `skill-icons:tailwindcss-${theme}`,
                    `skill-icons:expressjs-${theme}`,
                    `skill-icons:sequelize-${theme}`,
                    `skill-icons:postgresql-${theme}`,
                    `skill-icons:aws-${theme}`,
                    `skill-icons:gitlab-${theme}`,
                    "skill-icons:sass",
                    "skill-icons:typescript",
                ],
            },
            {
                "id": "id-2",
                "time": "2021 JUL - 2023 JUL",
                "company": "Lion Travel",
                "describe": "Focused on developing shared web components for Lion Travel and enhancing the Lion Travel membership system. Collaborated with backend engineers to coordinate API specifications, ensuring seamless integration and significantly reducing the likelihood of issues.",
                "skills": [
                    `skill-icons:react-${theme}`,
                    `skill-icons:nodejs-${theme}`,
                    `skill-icons:nextjs-${theme}`,
                    "skill-icons:sass",
                    "skill-icons:typescript",
                ],
            },
            {
                "id": "id-3",
                "time": "2019 DEC - 2020 SEP",
                "company": "SUBKARMA",
                "describe": "Undertook and managed project design and execution while communicating with clients to understand their requirements, ensuring the final deliverables met their expectations.",
                "skills": [

                    "skill-icons:illustrator",
                    "skill-icons:photoshop",
                ],
            },
            {
                "id": "id-4",
                "time": "2019 JUL - 2019 DEC",
                "company": "Cosmo",
                "describe": "Understand the client's design requirements and proceed with the design based on those directions, ensuring the final outcome meets the client's expectations.",
                "skills": [
                    "skill-icons:illustrator",
                    "skill-icons:photoshop",
                ],
            },
            
        ]
    }

    return datas
}

export { experience }