import React, { useCallback, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

export const Range = ({ min, max, fixed }) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);

    useEffect(() => {
      // info - check if fixed or normal range
        if (fixed) {
        document.getElementById('ballMin').disabled = true;
        document.getElementById('ballMax').disabled = true;
        }
    }, []);

    // Convert to percentage
    const getPercent = useCallback(
        value => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    return (
        <div className="rangeConteiner">
            <div className="minValue">
                <input
                    type="text"
                    className="editMinValue"
                    min={min}
                    max={max}
                    value={minVal}
                    onChange={event => {
                        const value = Math.min(
                            Number(event.target.value),
                            maxVal - 1
                        );
                        setMinVal(value);
                        minValRef.current = value;
                    }}
                />
                <div className="amount">€</div>
            </div>
            <div className="container">
                <input
                    type="range"
                    id="ballMin"
                    min={min}
                    max={max}
                    value={minVal}
                    onChange={event => {
                        const value = Math.min(
                            Number(event.target.value),
                            maxVal - 1
                        );
                        setMinVal(value);
                        minValRef.current = value;
                    }}
                    className="thumb thumb--left"
                    style={{ zIndex: minVal > max - 100 && '5' }}
                />
                <input
                    type="range"
                    id="ballMax"
                    min={min}
                    max={max}
                    value={maxVal}
                    onChange={event => {
                        const value = Math.max(
                            Number(event.target.value),
                            minVal + 1
                        );
                        setMaxVal(value);
                        maxValRef.current = value;
                    }}
                    className="thumb thumb--right"
                />

                <div className="slider">
                    <div className="slider__track" />
                    <div ref={range} className="slider__range" />
                </div>
            </div>
            <div className="maxValue">
                <input
                    type="text"
                    className="editMaxValue"
                    min={min}
                    max={max}
                    value={maxVal}
                    onChange={event => {
                        const value = Math.min(
                            Number(event.target.value),
                            maxVal - 1
                        );
                        setMaxVal(value);
                        maxValRef.current = value;
                    }}
                />
                <div className="amount">€</div>
            </div>
        </div>
    );
};

Range.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    fixed: PropTypes.bool.isRequired
};
