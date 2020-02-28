import React from 'react'
import { H1 } from '@/app/container/components'
import ListChild from './ListChild'
const List = () => {
    return (
        <div>
            <H1>I Am List</H1>
            <div>
                <ListChild />
            </div>
        </div>
    )
}

export default List
