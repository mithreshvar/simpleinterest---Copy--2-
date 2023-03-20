/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import InputSlider from '../Components/Cagr/InputSlider.js';
import LineChart from "../Components/SSYLineChart.js";
import DoughnutChart from "../Components/SSYDoughnutChart.js";
import InfoBox from "../Components/Cagr/InfoBox.js";
import RelatedCalculators from "../Components/Cagr/RelatedCalculators.js";

import ChartToggle from "../Components/Cagr/ChartToggle.js";
import { VscCircleFilled } from "react-icons/vsc";


export default function Home() {

  const [yearlyInvestment, setYearlyInvestment] = useState(10000);
  const [age, setAge] = useState(10);

  const [maturityValue, setMaturityValue] = useState(225000);
  const [maturityAge, setMaturityAge] = useState(2045);
  const [totalInvestment, setTotalInvestment] = useState(150000);
  const [totalInterest, setTotalInterest] = useState(75000);
  const [years, setYears] = useState(2035);
  const [investment, setInvestment] = useState(10000);

  const [isLineChart, setCheck] = useState(true);
  const [graphPoints, setGraphPoints] = useState([
    10760, 22338, 34795, 48200, 62623, 78142
  ]);

  function calculate() {
    if ((yearlyInvestment >= 250 && yearlyInvestment <= 150000) && (age >= 1 && age <= 10)) {
      setTotalInvestment(15 * yearlyInvestment);
      setMaturityAge(2034 + (10 - age));
      setInvestment(yearlyInvestment);
      if (age <= 6) setYears(2037);
      else setYears(2037 - (age - 6));

      let balanceYear = 0;
      let interest = 0;
      let cumulativeInterest = 0;
      let cumulativeBalance = 0;

      let points = [], temage = age;
      let conyear = 0, i = 1;

      for (i = 1; i <= 11 + (10 - age); i++) {

        if (i > 15) break;
        temage++;
        conyear += yearlyInvestment;
        balanceYear = (i * yearlyInvestment) + cumulativeInterest;
        interest = (balanceYear * 7.6) / 100;
        cumulativeInterest = (balanceYear - (i * yearlyInvestment)) + interest;
        cumulativeBalance = (i * yearlyInvestment) + cumulativeInterest;
        points.push(Math.round(cumulativeBalance));
      }
      console.log(points);
      temage--;

      while (temage < 21) {
        balanceYear = cumulativeBalance;
        interest = (balanceYear * 7.6) / 100;
        cumulativeInterest = (balanceYear - conyear) + interest;
        cumulativeBalance = (conyear) + cumulativeInterest;
        points.push(Math.round(cumulativeBalance));
        temage++;
      }
      console.log(points);

      setTotalInterest(Math.round(cumulativeInterest));
      setMaturityValue(points[points.length - 1]);

      let plot = [];
      for (let i = 0; i <= 15 - age; i++) {
        plot.push(points[i]);
      }
      setGraphPoints(plot);
      console.log(plot);

    }

  }

  return (
    <div className="app-bg-container overflow-hidden">
      <Head>
        <title>SSY calculator</title>
        <link rel="icon" href="./logo.png" />
        {/* <link href="/dist/output.css" rel="stylesheet" > */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          as="font"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&amp;family=Rubik:wght@400;500;600&amp;display=swap"
        />
        <meta name="description" content="SSY Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Background image */}
      <div
        className={
          "bg-bg_image w-full h-full bg-center bg-cover object-cover fixed"
        }
      />

      <main
        className={
          "relative [@media(max-width:470px)]:px-[20px] [@media(max-width:1280px)]:px-[40px] xl:px-[80px] py-[50px] w-full overflow-x-hidden flex-col justify-between text-[#464143] font-['poppins'] leading-[18px] [@media(min-width:1920px)]:leading-[22px] "
        }
      >
        <div>
          {/* Heading */}
          <div
            className={
              "text-[#000000] text-[40px] mt-[50px] font-semibold text-center leading-tight  [@media(max-width:300px)]:text-3xl [@media(max-width:1366px)]:text-[36px]  [@media(min-width:1920px)]:text-[60px] "
            }>
            <span className={"text-[#0161FF]"}>SSY</span>{" "}Calculator
          </div>
          {/* Subheading */}
          <p className={"text-[#464143] mt-[10px] text-center  [@media(max-width:300px)]:text-sm text-[14px] [@media(min-width:1920px)]:text-[18px] font-normal"}>
            SSY (Sukanya Samriddhi Yojana) is a government-sponsored savings scheme for the girl child. It is a long-term investment option that offers attractive interest rates and tax benefits.An SSY calculator is a tool that helps you calculate the maturity amount you can expect to receive at the end of the investment period. It takes into account factors such as the investment amount, interest rate, and the tenure of the investment to estimate the final maturity value.
          </p>
        </div>

        {/* Calculator and side pannel */}
        <div
          className={
            "xl:flex max-xl:flex-col flex-wrap w-full h-fit  mt-[50px] [@media(max-width:500px)]:mt-[30px]  justify-between "
          }
        >
          {/* Calculator and graph (WRAPPER) */}
          <div
            className={
              "lg:flex max-md:flex-col p-[30px] xl:w-[75%]  max-lg:space-y-7  border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px]"}
          >
            {/* Calculator */}
            <div className={"text-left text-lg lg:w-[50%] text-[14px]"}>
              {/* Input box wrapper */}
              <div
                className={
                  "flex-col justify-evenly font-medium text-[14px] [@media(min-width:1920px)]:text-[18px] max-sm:space-y-[12px]  xl:space-y-[20px] sm:space-y-[15px]"
                }
              >
                {/* Input box */}
                <div>
                  {/*Yearly investment block*/}
                  <div>Yearly investment</div>
                  <InputSlider
                    id="initialInvestment"
                    type="rupees"
                    min={250}
                    max={150000}
                    step={250}
                    value={yearlyInvestment}
                    setValue={setYearlyInvestment}
                  />
                </div>


                <div>
                  {/*age block*/}
                  <div>Girl&#39;s Age</div>
                  <InputSlider
                    type="years"
                    min={1}
                    max={10}
                    value={age}
                    setValue={setAge}
                  />
                </div>

                <div className="flex flex-row justify-between ">
                  <h3 className=" mt-4 w-[58%] ">Last Interest Rate</h3>
                  <div className={'h-[40px]  w-[39%] lg:ml-[25px] ml-[10px] min-w-[150px] [@media(max-width:500px)]:min-w-[120px]  text-[#1B1C20] mt-4 bg-[#D1E3FF] bg-opacity-[0.39] p-1.5 border-2 border-solid border-[#9BB0D3] rounded-[100px] text-center text-[14px] font-semibold'}>
                    7.6%
                  </div>

                </div>

              </div>

              {/* Control Box Wrapper */}
              <div
                className={
                  "flex flex-warp justify-center mt-[30px] cursor-pointer "
                }
              >
                {/* Control boxes */}
                <div
                  className={
                    " border-[1px] border-dashed border-[#00D382] p-[4px] rounded-[35px] w-[250px] h-[56px] flex justify-center items-center"
                  }
                >
                  <div
                    className={
                      "flex justify-center items-center text-white font-semibold rounded-[35px]  w-[242px] h-[48px]   shadow-lg shadow-[#36b3665d] bg-[#00d382] text-[18px]"
                    }
                    onClick={calculate}
                  >
                    Calculate
                  </div>
                </div>
              </div>
            </div>

            {/* vertical line */}
            <div
              className={
                " -my-4 mx-[20px] w-0  max-lg:h-0 max-lg:w-auto max-lg:-mx-2   rounded-[50px] border-[1px] border-solid border-[#707070] opacity-10"
              }
            ></div>

            {/* Charts/Graph wrapper */}
            <div className={"lg:w-[50%]"}>
              {/* Toggle Button */}
              <ChartToggle isLineChart={isLineChart} setCheck={setCheck} />

              {/* Charts/Graph */}
              <div className={" relative object-right-top "}>
                {isLineChart ? (
                  <>
                    <LineChart key='' points={graphPoints} />

                    <div className={"mb-3 text-[14px]"}>
                      Investments of {" "}
                      <span className={"font-semibold"}>
                        Rs.{investment.toLocaleString("en-In")}
                      </span>{" "}
                      each year should be made to the SSY account until the year{" "}
                      <span className={"font-semibold"}>{years}</span> years.
                    </div>

                    <div className={"text-[14px]"}>
                      The maturity amount received at the end of year {" "}
                      <span className={"font-semibold"}>{maturityAge}</span> {" "}
                      will be {" "}
                      <span className={"font-semibold"}>
                        Rs.{maturityValue.toLocaleString("en-In")}
                      </span>.
                    </div>
                  </>
                ) : (
                  <>
                    <DoughnutChart
                      totalInterest={totalInterest}
                      totalInvestment={totalInvestment}
                    />

                    <div className=" pr-3 text-[14px]">
                      <div className={"flex justify-between font-medium mb-3"}>
                        <div className=" font-medium">Maturity Year</div>
                        <div className={"font-semibold text-[#1B1C20] "}>
                          {maturityAge}
                        </div>
                      </div>

                      <div className={"flex justify-between font-medium mb-3"}>
                        <div className="font-medium">Total Investment</div>
                        <div className={"font-semibold text-[#1B1C20]"}>
                          {totalInvestment.toLocaleString("en-In")}
                        </div>
                      </div>

                      <div className={"flex justify-between font-medium mb-3"}>
                        <div >Total Interest</div>
                        <div className={"font-semibold text-[#1B1C20]"}>
                          {totalInterest.toLocaleString("en-In")}
                        </div>
                      </div>

                      <div className={"flex justify-between font-medium"}>
                        <div >Maturity Value</div>
                        <div className={"font-semibold text-[#1B1C20] "}>
                          {'\u20B9'}{maturityValue.toLocaleString("en-In")}
                        </div>
                      </div>

                    </div>
                  </>
                )}
              </div>


            </div>
          </div>

          {/* Side Pannel */}
          <div className="xl:max-h-[381.2px]  xl:w-[23%] ">
            <InfoBox
              type="sidePannel"
              contents={[
                ["Sukanya Samriddhi Yojana", "Sukanya Samriddhi Yojana (SSY) is a government-sponsored savings scheme in India for the girl child. It is a long-term investment option that offers attractive interest rates and tax benefits."],
                ["Historical interest rates",
                  <div className="w-full" key=''>
                    <table className=" border-2 border-solid w-full ">
                      <thead>
                        <tr className=" border-2 border-solid ">
                          <th className=" border border-solid p-2 ">Financial Year</th>
                          <th className=" border border-solid p-2 ">Interest Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className=" border border-solid ">
                          <td className=" border border-solid px-4 py-2 text-center">2014-15</td>
                          <td className=" border border-solid px-4 py-2 text-center">9.1%</td>
                        </tr>
                        <tr className=" border border-solid ">
                          <td className=" border border-solid px-4 py-2 text-center">2015-16</td>
                          <td className=" border border-solid px-4 py-2 text-center">9.2%</td>
                        </tr>
                        <tr className=" border border-solid ">
                          <td className=" border border-solid px-4 py-2 text-center">2016-17</td>
                          <td className=" border border-solid px-4 py-2 text-center">8.6%</td>
                        </tr>
                        <tr className=" border border-solid ">
                          <td className=" border border-solid px-4 py-2 text-center">2016-17</td>
                          <td className=" border border-solid px-4 py-2 text-center">8.5%</td>
                        </tr>
                        <tr className=" border border-solid ">
                          <td className=" border border-solid px-4 py-2 text-center">2017-18</td>
                          <td className=" border border-solid px-4 py-2 text-center">8.4%</td>
                        </tr>
                        <tr className=" border border-solid ">
                          <td className=" border border-solid px-4 py-2 text-center">2017-18</td>
                          <td className=" border border-solid px-4 py-2 text-center">8.3%</td>
                        </tr>
                        <tr className=" border border-solid ">
                          <td className=" border border-solid px-4 py-2 text-center">2017-18</td>
                          <td className=" border border-solid px-4 py-2 text-center">8.1%</td>
                        </tr>
                        <tr className=" border border-solid ">
                          <td className=" border border-solid px-4 py-2 text-center">2018-19</td>
                          <td className=" border border-solid px-4 py-2 text-center">8.1%</td>
                        </tr>
                        <tr className=" border border-solid ">
                          <td className=" border border-solid px-4 py-2 text-center">2018-19</td>
                          <td className=" border border-solid px-4 py-2 text-center">8.5%</td>
                        </tr>
                        <tr className=" border border-solid ">
                          <td className=" border border-solid px-4 py-2 text-center">2019-20</td>
                          <td className=" border border-solid px-4 py-2 text-center">8.5%</td>
                        </tr>
                        <tr className=" border border-solid ">
                          <td className=" border border-solid px-4 py-2 text-center">2019-20</td>
                          <td className=" border border-solid px-4 py-2 text-center">8.4%</td>
                        </tr>
                        <tr className=" border border-solid ">
                          <td className=" border border-solid px-4 py-2 text-center">2020-21</td>
                          <td className=" border border-solid px-4 py-2 text-center">7.6%</td>
                        </tr>
                        <tr className=" border border-solid ">
                          <td className=" border border-solid px-4 py-2 text-center">2021-22</td>
                          <td className=" border border-solid px-4 py-2 text-center">7.6%</td>
                        </tr>
                        <tr className=" border border-solid ">
                          <td className=" border border-solid px-4 py-2 text-center">2022-23</td>
                          <td className=" border border-solid px-4 py-2 text-center">7.6%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>],
                ["Maturity value of the investment", " The returns depend on the invested amount and current interest rates offered.Use the calculator to get an accurate maturity value"],
                ["Maturity year", "SSY deposit matures at age 22 of the girl child."],
              ]}
            />
          </div>
        </div>

        {/* FAQ box */}
        <InfoBox
          type="faq"
          contents={[
            ["What is Sukanya Samriddhi Yojana?",
              <>
                <div>Sukanya Samriddhi Yojana (SSY) is a government-sponsored savings scheme in India for the girl child. It is a long-term investment option that offers attractive interest rates and tax benefits.</div>
                <br />
                <div>Under SSY, parents or guardians can open a savings account in the name of a girl child aged 10 years or below and make regular deposits until the girl reaches the age of 21. The deposit amount is eligible for tax benefits under Section 80C of the Income Tax Act, and the interest earned on the deposit is tax-free.</div>
                <br />
                <div>The main objective of SSY is to encourage parents to save for the future education and marriage expenses of their girl child and provide financial security for her. The scheme is considered to be a safe and secure investment option with a low risk of capital loss.</div>
              </>
            ],
            ["What is an SSY calculator?", "An SSY calculator is a tool that helps you calculate the maturity amount you can expect to receive at the end of the investment period. It takes into account factors such as the investment amount, interest rate, and the tenure of the investment to estimate the final maturity value."],
            ["How can you use the SSY calculator?",
              <>
                <div>This calculator can be used to calculate the returns of your SSY investment. Just input the yearly investment amount, the age of the girl child and the year of start of investment. The calculator will give you the maturity year, total invested amount, total interest earned and total corpus at the time of maturity.</div>
              </>
            ],
            ["How does the SSY calculator work?",
              <>
                <div>The SSY calculator takes 3 inputs namely, Yearly investment, age of the girl child, and the year of investment.</div>
                <div>It uses the following logic</div>
                <br />
                <div className="font-bold">A = P(1+r/n)^nt </div>
                <div>P = Initial Deposit </div>
                <div>r = Rate of interest </div>
                <div>n = Number of years the interest compounds </div>
                <div>t = Number of years </div>
                <div>A = Amount at maturity</div>

              </>
            ],
            ["When does my SSY investment mature? ",
              <>
                <div>The maturity period of the Sukanya Samriddhi Yojana (SSY) savings scheme in India is 21 years from the date of opening the account or until the girl child reaches the age of 21, whichever is earlier.</div>
                <br />
                <div>During this period, parents or guardians can make regular deposits into the account, subject to the prevailing limits and conditions. The deposit amount earns interest at the rate set by the government, which is reviewed and revised periodically.</div>
                <br />
                <div>Once the maturity period is reached, the account can be closed, and the deposit amount along with the accumulated interest can be withdrawn.
                </div>
              </>
            ],
            ["What are the tax implications of SSY returns?",
              <>
                <ul>
                  <li className=" flex flex-row "><VscCircleFilled className=" text-[#00DD6F] mt-[2px] mr-[2px] relative flex-shrink-0 " />Deduction under Section 80C: The deposit made into an SSY account is eligible for a tax deduction under Section 80C of the Income Tax Act, up to a limit of ₹1.5 lakh per financial year.</li>
                  <li className=" flex flex-row "><VscCircleFilled className=" text-[#00DD6F] mt-[2px] mr-[2px]  relative flex-shrink-0" />Tax-free interest: The interest earned on the deposit in an SSY account is exempt from tax.</li>
                  <li className=" flex flex-row"><VscCircleFilled className=" text-[#00DD6F] mt-[2px] mr-[2px] relative flex-shrink-0" />Exemption under Section 10(10D): The maturity amount received on the closure of the SSY account is exempt from tax under Section 10(10D) of the Income Tax Act.</li>
                </ul>
              </>
            ],
            ["Is withdrawal permitted before maturity?", 'Withdrawals under Sukanya Samriddhi Account, are allowed only after the girl child turns 18 years and can be used for higher education purposes.'],
          ]}
        />



        {/* Related Calculators */}
        <RelatedCalculators
          contents={[
            ["FD Calculator", "/fd"],
            ["RD Calculator", "/rd"],
            ["NSC Calculator", "/ssy"],//same page
            ["Simple Interest Calculator", "/simpleInterest"],
          ]}
        />
      </main >
    </div >
  );
}