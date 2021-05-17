import React from 'react';
import { Range } from '../../components/range/Range';

export const NormalView = () => {
    // info - get data mockeable . . . .
    return (
        <div className="Normal">
            <div className="Msg">
                <div className="MsgType">
                    <h2>Range component - Normal Type</h2>
                </div>
                <div className="MsgDesc">
                    <p>set fixed attribute with false</p>
                </div>
                <div className="MsgDesc">
                    <a
                        href={`${window.location.origin}/exercise2`}
                    >
                        <p>Go to fixed type</p>
                    </a>
                </div>
            </div>

            <Range min={1} max={1000} fixed={false} />
        </div>
    );
};
