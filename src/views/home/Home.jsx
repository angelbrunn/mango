import React from 'react';
import { Range } from '../../components/range/Range';

export const Home = () => {

    // info - get data mockeable . . . .
    return (
        <>
            <div>Aca una desc del range</div>
            <Range min={0} max={1000} fixed={false} />
        </>
    );
};
