import React, { useCallback, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

export const Rangev2 = ({ min, max, fixed }) => {
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

        let left = 0;

        let divYYY = document.getElementById('yyy');
        let divCCC = document.getElementById('ccc');
        let divCCC2 = document.getElementById('ccc2');
        let divLLL = document.getElementById('lll');
        let divNNN = document.getElementById('nnn');

        // info - 240
        divCCC.style.left = '188px';
        divCCC2.style.left = '668px';

        console.log('step');

        divYYY != null
            ? divYYY.addEventListener(
                  'mousedown',
                  () => {
                      divYYY.style.display = 'none';
                  },
                  false
              )
            : false;

        divNNN != null
            ? divNNN.addEventListener(
                  'mouseup',
                  () => {
                      divYYY.style.display = 'block';
                  },
                  false
              )
            : false;

        divNNN != null
            ? divNNN.addEventListener(
                  'mousemove',
                  en => {
                      divLLL.style.color = '#55a';
                      left = en.clientX;

                      console.log('#Go', left);

                      // info - cross nro one
                      if (left >= 188 && left < 428) {
                          divCCC.style.left = left - divNNN.offsetLeft + 'px';
                          divLLL.style.left = left + 'px';
                      }
                      // info - cross nro two
                      if (left > 428 && left <= 668) {
                          divCCC2.style.left = left - divNNN.offsetLeft + 'px';
                          divLLL.style.left = left + 'px';
                      }

                      //   divCCC.style.left = left + 'px';
                      divLLL.style.left = left + 'px';
                  },
                  false
              )
            : false;

        divNNN != null
            ? divNNN.addEventListener(
                  'mouseout',
                  () => {
                      divYYY.style.display = 'block';
                  },
                  false
              )
            : false;

        divNNN != null
            ? divNNN.addEventListener(
                  'mouseover',
                  en => {
                      divLLL.style.color = '#55a';
                      left = en.clientX;

                      console.log('#Back', left);

                      // info - cross nro one
                      if (left >= 290 && left < 428) {
                          divCCC.style.left = left - divNNN.offsetLeft + 'px';
                          divLLL.style.left = left + 'px';
                      }else{
                          divCCC.style.left = '188px';
                      }
                      // info - cross nro two
                      if (left > 428 && left <= 668) {
                          divCCC2.style.left = left - divNNN.offsetLeft + 'px';
                          divLLL.style.left = left + 'px';
                      }

                      //   if (left <= 668) {
                      //       divCCC.style.left = left - divNNN.offsetLeft + 'px';
                      //       divCCC2.style.left = left - divNNN.offsetLeft + 'px';
                      //       divLLL.style.left = left + 'px';
                      //   }
                      //   divCCC.style.left = left + 'px';
                      divLLL.style.left = left + 'px';
                      //   let v = Math.round(
                      //       ((left - divNNN.offsetLeft) * 100) / 540
                      //   );
                  },
                  false
              )
            : false;
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
            {/* <div className="minValue">
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
            </div> */}
            {/* <div className="container"> */}
            {/* <div
                    id="ballMin"
                    onChange={event => {
                        const value = Math.min(
                            Number(event.target.value),
                            maxVal - 1
                        );
                        setMinVal(value);
                        minValRef.current = value;
                    }}
                    className="thumb thumb--left"
                    style={{
                        zIndex: minVal > max - 100 && '5'
                    }}
                /> */}

            {/* without range input */}
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

            <div id="sss" className="example_path"></div>
            <div id="ccc" className="example_block"></div>
            <div id="ccc2" className="example_block"></div>
            <div id="lll" className="example_text"></div>
            <div id="nnn" className="touch"></div>
            <div id="yyy" className="overlay"></div>

            {/* <div
                    id="ballMax"
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
                </div> */}
            {/* </div> */}
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

Rangev2.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    fixed: PropTypes.bool.isRequired
};
