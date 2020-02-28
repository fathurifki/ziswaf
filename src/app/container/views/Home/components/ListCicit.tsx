import React, {useContext} from 'react'
import { H1 } from '@/app/container/components'
import { HomeContext } from '../Controller'
const ListCicit = () => {
    const data = useContext(HomeContext)
    return (
        <div>
            <H1>I am List Cicit</H1>
            {JSON.stringify(data.data)}
        </div>
    )
}

export default ListCicit;
