import React, { useContext, useEffect } from "react";
import Context from '../Home/Controller';
export default function Product(): JSX.Element {
    const { state, dispatch } = useContext(Context)
    console.log('state product', state);
    return (
        <React.Fragment>
            <h1>Product List</h1>
        </React.Fragment>
    )
}
