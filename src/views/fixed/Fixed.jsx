import React from 'react';
import { Range } from '../../components/range/Range';

export const FixedView = () => {
    // info - get data mockeable . . . .
    return (
        <div className="Normal">
            <div className="Msg">
                <div className="MsgType">
                    <h2>Range component - Fixed Type</h2>
                </div>
                <div className="MsgDesc">
                    <p>set fixed attribute with true</p>
                </div>
                <div className="MsgDesc">
                    <a
                        href={`${window.location.origin}/exercise1`}
                    >
                        <p>Go to normal type</p>
                    </a>
                </div>
            </div>

            <Range min={1.99} max={70.99} fixed={true} />
        </div>
    );
};
