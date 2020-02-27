import React from "react";
import { Button } from '@/app/container/components/button/button';
import { Container } from '@/app/container/components/container/container';
import { H1 } from '@/app/container/components/H1/H1';

const Product = () => {
    return (
        <React.Fragment>
            <Container>
                <H1>React Starter Kit</H1>
                <Button>Primary</Button>
            </Container>
        </React.Fragment>
    )
}
export default Product;
