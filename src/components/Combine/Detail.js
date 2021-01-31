import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const Detail = ({ history }) => {
  const colors = ['#fa6c40', '#f6a428', '#35d1d3', '#2baaf2'];

  const min = 1;
  const max = 100;
  const rand = Math.floor(Math.random() * (max - min)) + min;

  const [numbers, setNumbers] = useState([]);

  if (numbers.length < 3) {
    setNumbers([...numbers, rand]);
  }

  return (
    <div className="combine_popWrap">
      <header>
        <button type="button" className="btn_close" onClick={history.goBack}>
          닫기
        </button>
      </header>
      <section className="contentsWrap">
        <article className="totviewbox homeWrap">
          <h2 className="tit">
            <span>MS Ko's Home</span>
          </h2>
          <div className="legends">
            <ul>
              <li className="good">
                <span>GOOD</span>
              </li>
              <li>
                <span>NORMAL</span>
              </li>
              <li className="bad">
                <span>BAD</span>
              </li>
              <li className="verybad">
                <span>VERY BAD</span>
              </li>
            </ul>
          </div>

          <div className="chartbox">
            <div>
              <div className="box">
                <div className="out good">
                  <dl>
                    <dt>Outdoor</dt>
                  </dl>
                </div>

                <div className="in">
                  <dl>
                    <dt>Indoor</dt>
                    <dd>
                      <p>
                        <span>35</span>
                        <sub>℃</sub>
                      </p>
                      <p>
                        <span>56</span>
                        <sub>%</sub>
                      </p>
                    </dd>
                  </dl>
                </div>
              </div>
              <dl>
                <dt>Comprehensive air quality</dt>
                <dd>40 minute operation of air cleaner</dd>
              </dl>
            </div>

            <div>
              <PieChart
                data={[
                  {
                    value: numbers[0],
                    color: colors[Math.floor(numbers[0] / 25)],
                  },
                ]}
                startAngle={270}
                totalValue={100}
                lineWidth={20}
                label={({ dataEntry }) => dataEntry.value}
                labelStyle={{
                  fontSize: '2.5em',
                  fontFamily: 'sans-serif',
                  fill: '#202020',
                }}
                labelPosition={0}
                style={{ height: '100px' }}
                rounded
                animate
              />
              <dl>
                <dt>Water purification feature</dt>
                <dd>Waterway sterilization under progress</dd>
              </dl>
            </div>
          </div>
        </article>

        <article className="totviewbox myWrap">
          <h2 className="tit">
            <span>MS Ko</span>
          </h2>
          <div className="legends">
            <ul>
              <li className="good">
                <span>GOOD</span>
              </li>
              <li>
                <span>NORMAL</span>
              </li>
              <li className="bad">
                <span>BAD</span>
              </li>
              <li className="verybad">
                <span>VERY BAD</span>
              </li>
            </ul>
          </div>

          <div className="chartbox">
            <div>
              <PieChart
                data={[
                  {
                    value: numbers[1],
                    color: colors[Math.floor(numbers[1] / 25)],
                  },
                ]}
                startAngle={270}
                totalValue={100}
                lineWidth={20}
                label={({ dataEntry }) => dataEntry.value}
                labelStyle={{
                  fontSize: '2.5em',
                  fontFamily: 'sans-serif',
                  fill: '#202020',
                }}
                labelPosition={0}
                style={{ height: '100px' }}
                rounded
                animate
              />
              <dl>
                <dt>Comprehensive health index</dt>
                <dd>Body water index 16.2%, below standard </dd>
              </dl>
            </div>
            <div>
              <PieChart
                data={[
                  {
                    value: numbers[2],
                    color: colors[Math.floor(numbers[2] / 25)],
                  },
                ]}
                startAngle={270}
                totalValue={100}
                lineWidth={20}
                label={({ dataEntry }) => dataEntry.value}
                labelStyle={{
                  fontSize: '2.5em',
                  fontFamily: 'sans-serif',
                  fill: '#202020',
                }}
                labelPosition={0}
                style={{ height: '100px' }}
                rounded
                animate
              />
              <dl>
                <dt>Comprehensive sleep index</dt>
                <dd>Lack of sleep</dd>
              </dl>
            </div>
          </div>
        </article>
      </section>

      <footer className="actionguide">
        <div className="icon water">
          <span>250ml</span>
        </div>
        <dl>
          <dt>Action Guide</dt>
          <dd>
            <em>Intake of 250ml of water</em> is recommended for preventing
            respiratory diseases, supplementing shortage of body water and
            recovery of fatigue recoving fatigue
          </dd>
        </dl>
      </footer>
    </div>
  );
};

export default Detail;
