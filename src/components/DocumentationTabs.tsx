"use client"
import { FC, useEffect, useState } from 'react'
import { Tabs , TabsList , TabsTrigger ,TabsContent } from './ui/Tabs'
import Code from './Code'
import { people , archie ,frontenddeveloper} from '@/helpers/documentation-code'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
interface DocumentationTabsProps {
  
}

const DocumentationTabs: FC<DocumentationTabsProps> = ({}) => {

    return <Tabs defaultValue='archie' className='max-w-2xl w-full'>
        <TabsList>
            <TabsTrigger value='archie'>archie.ts</TabsTrigger>
            <TabsTrigger value='frontend'>frontend.ts</TabsTrigger>
            <TabsTrigger value='people'>people.ts</TabsTrigger>
        </TabsList>
        <TabsContent value='archie'>
        <SimpleBar>
            <Code animated language='javascript' code={archie} show/>
        </SimpleBar>
        </TabsContent>
        <TabsContent value='frontend'>
        <SimpleBar>
            <Code animated language='javascript' code={frontenddeveloper} show/>
        </SimpleBar>
        </TabsContent>
        <TabsContent value='people'>
        <SimpleBar>
            <Code animated language='javascript' code={people} show/>
        </SimpleBar>
        </TabsContent>
    </Tabs>
}

export default DocumentationTabs