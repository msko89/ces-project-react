import React, { useState, useEffect, useMemo } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { Chart } from 'react-charts';
import Moment from 'react-moment';
import './Bidet.css';

export default function Bidet({ history }) {
  const healthInfo = [
    {
      class: 'verybad',
      text: 'Very Bad',
      summary:
        'To manage body fat, eat a lot of vegetables and fruits rich in fiber. Please use the clinic mode right after using the toilet.',
    },
    {
      class: 'bad',
      text: 'Bad',
      summary:
        'To manage body fat, eat a lot of vegetables and fruits rich in fiber. Please use the clinic mode right after using the toilet.',
    },
    {
      class: 'normal',
      text: 'Normal',
      summary:
        'To manage body fat, eat a lot of vegetables and fruits rich in fiber. Please use the clinic mode right after using the toilet.',
    },
    {
      class: 'good',
      text: 'Good',
      summary:
        'To manage body fat, eat a lot of vegetables and fruits rich in fiber. Please use the clinic mode right after using the toilet.',
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
  const [charts, setCharts] = useState([
    [0, 0],
    [3, 0],
    [6, 0],
    [9, 0],
    [12, 0],
    [15, 0],
    [18, 0],
    [21, 0],
    [24, 0],
  ]); //Bidet Working Hours

  const [updateFlag, setUpdateFlag] = useState(false);

  const chartData = useMemo(
    () => [
      {
        data: charts,
      },
    ],
    [charts]
  );

  const series = React.useMemo(
    () => ({
      type: 'bar',
    }),
    []
  );
  const axes = useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { position: 'left', type: 'linear', stacked: false },
    ],
    []
  );

  if (y > 100 && y < 300) {
    const randomBar = Math.floor(Math.random() * (max - min)) + min;

    if (bars.length < 3) {
      setBars([...bars, randomBar]);
    }
  } else if (y > 300 && y < 500) {
    const minTime = 1;
    const maxTime = 10;
    const randomTime =
      Math.floor(Math.random() * (maxTime - minTime)) + minTime;

    if (patterns.length < 3) {
      setPatterns([...patterns, randomTime]);
    }
  } else if (y > 600) {
    if (!updateFlag) {
      setUpdateFlag(true);

      setCharts([
        [0, 0],
        [3, 1],
        [6, 2],
        [9, 9],
        [12, 6],
        [15, 5],
        [18, 7],
        [21, 6],
        [24, 3],
      ]);
    }
  }

  return (
    <div className="bidet_mainWrap">
      <header>
        <p className="today">
          <Moment date={new Date()} format="YYYY.MM.DD" />
        </p>
        <button
          type="button"
          className="btn_tip"
          onClick={() => setTipStatus(true)}
        >
          <strong>BIDET</strong> Index
        </button>
        <div className={`tip ${tipStatus ? ' open' : ''}`}>
          <p>Integrated Health Index's been updated.</p>
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
            <ul className="bidet_legends">
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
              Health Index :
              {number ? healthInfo[Math.floor(number / 25)].text : ''}
            </dt>
            <dd>{number ? healthInfo[Math.floor(number / 25)].summary : ''}</dd>
          </dl>

          <div className="healthchk">
            <dl>
              <dt>
                <span>
                  Bowel
                  <br />
                  Habits
                </span>
              </dt>
              <dd>Good</dd>
            </dl>
            <dl className="normal">
              <dt>
                <span>Weight</span>
              </dt>
              <dd>Average</dd>
            </dl>
            <dl className="bad">
              <dt>
                <span>
                  Body
                  <br />
                  Fat
                </span>
              </dt>
              <dd>Bad</dd>
            </dl>
            <dl className="verybad">
              <dt>
                <span>
                  Body
                  <br />
                  Water
                </span>
              </dt>
              <dd>Very Bad</dd>
            </dl>
          </div>
        </article>

        <article className="sub_cont bodycomp">
          <h2 className="tit01">Body Composition</h2>
          <dl>
            <dt>체중</dt>
            <dd>
              <p className="axis">X축</p>
              <div
                id="bodyWeight"
                className="bar"
                style={{ width: `${bars[0]}%` }}
              >
                <span className="value">{bars[0]} lb</span>
              </div>
              <p className="stat_guide">
                <span>Below Standard</span>
                <span>Standard</span>
                <span>Above Standard</span>
              </p>
            </dd>
          </dl>
          <dl>
            <dt>체수분</dt>
            <dd>
              <p className="axis">X축</p>
              <div
                id="bodyWater"
                className="bar"
                style={{ width: `${bars[1]}%` }}
              >
                <span className="value">{bars[1]} L</span>
              </div>
              <p className="stat_guide">
                <span>Below Standard</span>
                <span>Standard</span>
                <span>Above Standard</span>
              </p>
            </dd>
          </dl>
          <dl>
            <dt>체지방</dt>
            <dd>
              <p className="axis">X축</p>
              <div
                id="bodyFat"
                className="bar"
                style={{ width: `${bars[2]}%` }}
              >
                <span className="value">{bars[2]} b</span>
              </div>
              <p className="stat_guide">
                <span>Below Standard</span>
                <span>Standard</span>
                <span>Above Standard</span>
              </p>
            </dd>
          </dl>
        </article>

        <article className="sub_cont">
          <h2 className="tit01">Bidet Usage Pattern</h2>

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
                  label={({ dataEntry }) => `${dataEntry.value / 10} Times`}
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
          <h2 className="tit01">Bidet Working Hours(Per)</h2>
          <div className="description">
            <div>
              Average daily usage time <b>5 minutes</b>
            </div>
            <div>
              Longest usage time <b>10 minutes 3 seconds</b>
            </div>
          </div>
          <div className="grapWrap">
            <Chart data={chartData} series={series} axes={axes} />
          </div>
        </article>
      </section>

      <footer>
        <button type="button" onClick={() => history.goBack()}>
          REPORT
        </button>
      </footer>
    </div>
  );
}
