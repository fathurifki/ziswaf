import React from 'react'
import { H1 } from '@/app/container/components'
import ListChild from './ListChild'
const List = (data) => {
    return (
        <div>
            <H1>I Am List</H1>
            <div>
                <ListChild data={data} />
            </div>
        </div>
    )
}

export default List
