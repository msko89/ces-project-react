import React, { useState, useEffect, useMemo } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { Chart } from 'react-charts';
import Moment from 'react-moment';
import './Water.css';

export default function Water({ history }) {
  const healthInfo = [
    {
      class: 'verybad',
      text: 'Very Bad',
      summary: 'After 30 minutes of sterilization, enjoy some water!',
    },
    {
      class: 'bad',
      text: 'Bad',
      summary: 'After 30 minutes of sterilization, enjoy some water!',
    },
    {
      class: 'normal',
      text: 'Normal',
      summary: 'After 30 minutes of sterilization, enjoy some water!',
    },
    {
      class: 'good',
      text: 'Good',
      summary: 'After 30 minutes of sterilization, enjoy some water!',
    },
  ];

  const colors = ['#fa6c40', '#f6a428', '#35d1d3', '#2baaf2'];
  const pieChartDefaultOptions = {
    background: '#f4f4f4',
    startAngle: 270,
    totalValue: 100,
    lineWidth: 10,
    labelPosition: 0,
    rounded: 'rounded',
    animate: 'animate',
    labelStyle: {
      fontSize: '2.5em',
      fontFamily: 'sans-serif',
      fill: '#202020',
    },
  };

  const [tipStatus, setTipStatus] = useState(false);

  const min = 1;
  const max = 100;
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  //상단 건강 그래프 Number
  const [number, setNumber] = useState(0);
  if (!number) setNumber(randomNumber);

  //Scroll Hook
  const useScroll = () => {
    const [scroll, setScroll] = useState({ x: 0, y: 0 });

    const onScroll = () => {
      setScroll({ x: window.scrollX, y: window.scrollY });
    };

    useEffect(() => {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return scroll;
  };

  const { y } = useScroll();
  const [bars, setBars] = useState([]); //Body Composition
  const [patterns, setPatterns] = useState([]); //Bidet Usage Pattern

  if (y > 100 && y < 200) {
    const randomBar = Math.floor(Math.random() * (max - min)) + min;

    if (bars.length < 4) {
      setBars([...bars, randomBar]);
    }
  } else if (y > 200 && y < 300) {
    const minTime = 1;
    const maxTime = 10;
    const randomTime =
      Math.floor(Math.random() * (maxTime - minTime)) + minTime;

    if (patterns.length < 3) {
      setPatterns([...patterns, randomTime]);
    }
  }

  return (
    <div className="water_mainWrap">
      <header>
        <p className="today">
          <Moment date={new Date()} format="YYYY.MM.DD" />
        </p>
        <button
          type="button"
          className="btn_tip"
          onClick={() => setTipStatus(true)}
        >
          <strong>Mattress</strong> Index
        </button>
        <div className={`tip ${tipStatus ? ' open' : ''}`}>
          <p>Water Purification Capability`s been updated.</p>
          <button
            type="button"
            className="btn_close"
            onClick={() => setTipStatus(false)}
          >
            닫기
          </button>
        </div>
      </header>

      <section className="contentsWrap">
        <article className="total">
          <div className="graphWrap total">
            <ul className="water_legends">
              <li className="good">GOOD</li>
              <li className="normal">NORMAL</li>
              <li className="bad">BAD</li>
              <li className="verybad">VERY BAD</li>
            </ul>
            <PieChart
              {...pieChartDefaultOptions}
              data={[
                {
                  value: number,
                  color: colors[Math.floor(number / 25)],
                },
              ]}
              label={({ dataEntry }) => dataEntry.value}
            />
          </div>

          <dl
            className={`text_info01 ${
              number ? healthInfo[Math.floor(number / 25)].class : ''
            }`}
          >
            <dt>
              Water purification capability:{' '}
              {number ? healthInfo[Math.floor(number / 25)].text : ''}
            </dt>
            <dd>{number ? healthInfo[Math.floor(number / 25)].summary : ''}</dd>
          </dl>

          <div className="healthchk">
            <dl>
              <dt>
                <span>
                  TDS
                  <br />
                  Removal
                </span>
              </dt>
              <dd>Good</dd>
            </dl>
            <dl className="normal">
              <dt>
                <span>
                  Water
                  <br />
                  Usage
                </span>
              </dt>
              <dd>Average</dd>
            </dl>
            <dl>
              <dt>
                <span>
                  Filter
                  <br />
                  Usage
                </span>
              </dt>
              <dd>Good</dd>
            </dl>
            <dl>
              <dt>
                <span>
                  Sterilization
                  <br />
                  Operation
                </span>
              </dt>
              <dd>Good</dd>
            </dl>
          </div>
        </article>

        <div className="container01">
          <article className="sub_cont">
            <h2 className="tit01 st02">Water Usage</h2>

            <div className="water_usage">
              <dl className="tot">
                <dt>Total</dt>
                <dd>
                  <span>
                    {(
                      (Math.round((bars[0] || 0 / 1.5) * 100) +
                        Math.round((bars[1] || 0 / 1.5) * 100) +
                        Math.round((bars[2] || 0 / 1.5) * 100) +
                        Math.round((bars[3] || 0 / 1.5) * 100)) /
                      1000
                    ).toFixed(1)}
                  </span>
                  <em>L</em>
                </dd>
              </dl>
              <div className="detail">
                <dl>
                  <dt>Clean Water</dt>
                  <dd>
                    <div className="bottle">
                      <div>
                        <em style={{ height: `${bars[0]}%` }}></em>
                      </div>
                      <div>
                        <em style={{ height: `${bars[1]}%` }}></em>
                      </div>
                    </div>
                    <span className="liter">
                      {`${(
                        (Math.round((bars[0] || 0 / 1.5) * 100) +
                          Math.round((bars[1] || 0 / 1.5) * 100)) /
                        1000
                      ).toFixed(1)}L`}
                    </span>
                  </dd>
                </dl>
                <dl>
                  <dt>Cold Water</dt>
                  <dd>
                    <div className="bottle">
                      <div>
                        <span className="hide">1.5L bottle</span>
                        <em style={{ height: `${bars[2]}%` }}></em>
                      </div>
                    </div>
                    <span className="liter">
                      {`${Math.round(
                        ((bars[2] || 0 / 1.5) * 100) / 1000
                      ).toFixed(1)}L`}
                    </span>
                  </dd>
                </dl>
                <dl>
                  <dt>Hot Water</dt>
                  <dd>
                    <div className="bottle">
                      <div>
                        <em style={{ height: `${bars[3]}%` }}></em>
                      </div>
                    </div>
                    <span className="liter">{`${Math.round(
                      ((bars[3] || 0 / 1.5) * 100) / 1000
                    ).toFixed(1)}L`}</span>
                  </dd>
                </dl>
              </div>
            </div>
          </article>

          <article className="sub_cont">
            <h2 className="tit01">Filter Usage</h2>

            <div className="graphWrap pattern">
              {patterns.map((value, index) => {
                return (
                  <PieChart
                    {...pieChartDefaultOptions}
                    key={index}
                    data={[
                      {
                        value: value * 10,
                        color: colors[2],
                      },
                    ]}
                    label={({ dataEntry }) => `${dataEntry.value / 10}%`}
                    labelStyle={{
                      fontSize: '1em',
                      fontFamily: 'sans-serif',
                      fill: '#43d8a0',
                    }}
                    style={{ height: '90px' }}
                  />
                );
              })}
            </div>
          </article>

          <article className="sub_cont">
            <h2 className="tit01 st02">Sterilization operation</h2>
            <div className="steri_list">
              <dl>
                <dt>
                  <span>
                    Sterilization
                    <br />
                    Cycle
                  </span>
                </dt>
                <dd>
                  <span>1 Day Before</span>
                </dd>
              </dl>
              <dl>
                <dt>
                  <span>
                    Waterway
                    <br />
                    Sterilization
                  </span>
                </dt>
                <dd>
                  <span>9 Hours Before</span>
                </dd>
              </dl>
              <dl>
                <dt>
                  <span>
                    Faucet
                    <br />
                    Sterilization
                  </span>
                </dt>
                <dd>
                  <span>3 Days Before</span>
                </dd>
              </dl>
            </div>
          </article>
        </div>
      </section>

      <footer>
        <button type="button" onClick={() => history.goBack()}>
          REPORT
        </button>
      </footer>
    </div>
  );
}
