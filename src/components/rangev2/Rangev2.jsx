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
        let divLLL = document.getElementById('lll');
        let divNNN = document.getElementById('nnn');

        let divYYY2 = document.getElementById('yyy2');
        let divCCC2 = document.getElementById('ccc2');
        let divLLL2 = document.getElementById('lll2');
        let divNNN2 = document.getElementById('nnn2');

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
                      console.log('#offset', divNNN.offsetLeft);

                      // info - cross nro one
                      if (left >= 188) {
                          divCCC.style.left = left + 'px';
                          divLLL.style.left = left + 'px';
                      }

                      if (left <= 188) {
                          divCCC.style.left = '188px';
                          divLLL.style.left = left + 'px';
                      }

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
                      if (left >= 290) {
                          divCCC.style.left = left + 'px';
                          divLLL.style.left = left + 'px';
                      } else {
                          divCCC.style.left = '188px';
                      }

                      if (left <= 188) {
                          divCCC.style.left = '188px';
                          divLLL.style.left = left + 'px';
                      }

                      divLLL.style.left = left + 'px';
                  },
                  false
              )
            : false;

        // two

        divYYY2 != null
            ? divYYY2.addEventListener(
                  'mousedown',
                  () => {
                      divYYY2.style.display = 'none';
                  },
                  false
              )
            : false;

        divNNN2 != null
            ? divNNN2.addEventListener(
                  'mouseup',
                  () => {
                      divYYY2.style.display = 'block';
                  },
                  false
              )
            : false;

        divNNN2 != null
            ? divNNN2.addEventListener(
                  'mousemove',
                  en => {
                      divLLL2.style.color = '#55a';
                      left = en.clientX;

                      console.log('#Go', left);
                      console.log('#offset', divNNN2.offsetLeft);

                      // info - cross nro two
                      if (left <= 668 && left >= 210) {
                          divCCC2.style.left = left + 'px';
                          divLLL.style.left = left + 'px';
                      }

                      if (left >= 668) {
                          divCCC2.style.left = '688px';
                          divLLL2.style.left = left + 'px';
                      }

                      if (left === 210) {
                          divCCC2.style.left = '210px';
                          divLLL2.style.left = left + 'px';
                      }

                      divLLL2.style.left = left + 'px';
                  },
                  false
              )
            : false;

        divNNN2 != null
            ? divNNN2.addEventListener(
                  'mouseout',
                  () => {
                      divYYY2.style.display = 'block';
                  },
                  false
              )
            : false;

        divNNN2 != null
            ? divNNN2.addEventListener(
                  'mouseover',
                  en => {
                      divLLL2.style.color = '#55a';
                      left = en.clientX;

                      console.log('#Back', left);

                      // info - cross nro two
                      if (left <= 668) {
                          divCCC2.style.left = left + 'px';
                          divLLL.style.left = left + 'px';
                      }

                      if (left >= 668) {
                          divCCC2.style.left = '688px';
                          divLLL2.style.left = left + 'px';
                      }

                      if (left === 210) {
                          divCCC2.style.left = '210px';
                          divLLL2.style.left = left + 'px';
                      }

                      divLLL2.style.left = left + 'px';
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
            {/* <div id="ccc2" className="example_block"></div> */}
            <div id="lll" className="example_text"></div>
            <div id="nnn" className="touch"></div>
            <div id="yyy" className="overlay"></div>

            <div id="sss2" className="example_path_2"></div>
            <div id="ccc2" className="example_block_2"></div>
            <div id="lll2" className="example_text_2"></div>
            <div id="nnn2" className="touch_2"></div>
            <div id="yyy2" className="overlay_2"></div>

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
