import React from 'react'
import { H1 } from '@/app/container/components'
import ListCucu from './ListCucu'
const ListChild = () => {
    return (
        <div>
            <H1>I am List Child</H1>
            <div>
                <ListCucu />
            </div>
        </div>
    )
}

export default ListChild
