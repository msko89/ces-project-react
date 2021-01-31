import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import Moment from 'react-moment';
import './Bidet.css';

export default function Bidet() {
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

  const [numbers, setNumbers] = useState([]);

  if (numbers.length < 4) {
    setNumbers([...numbers, randomNumber]);
  }

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

  const minTime = 1;
  const maxTime = 10;
  const randomTime = Math.floor(Math.random() * (maxTime - minTime)) + minTime;

  const [patterns, setPatterns] = useState([]);

  if (patterns.length < 3) {
    setPatterns([...patterns, randomTime]);
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
                  value: numbers[0],
                  color: colors[Math.floor(numbers[0] / 25)],
                },
              ]}
              label={({ dataEntry }) => dataEntry.value}
            />
          </div>

          <dl
            className={`text_info01 ${
              numbers[0] ? healthInfo[Math.floor(numbers[0] / 25)].class : ''
            }`}
          >
            <dt>
              Health Index :
              {numbers[0] ? healthInfo[Math.floor(numbers[0] / 25)].text : ''}
            </dt>
            <dd>
              {numbers[0]
                ? healthInfo[Math.floor(numbers[0] / 25)].summary
                : ''}
            </dd>
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
                style={{ width: `${numbers[1]}%` }}
              >
                <span className="value">{numbers[1]} lb</span>
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
                style={{ width: `${numbers[2]}%` }}
              >
                <span className="value">{numbers[2]} L</span>
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
                style={{ width: `${numbers[3]}%` }}
              >
                <span className="value">{numbers[3]} b</span>
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
          <div>
            <div>
              Average daily usage time <b>5 minutes</b>
            </div>
            <div>
              Longest usage time <b>10 minutes 3 seconds</b>
            </div>
          </div>
          <div id="chart" className="graphWrap"></div>
        </article>
      </section>

      <footer>
        <button type="button" id="report">
          REPORT
        </button>
      </footer>
    </div>
  );
}
