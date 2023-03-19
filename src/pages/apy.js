/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import { useEffect, useState } from "react";
import InputSlider from '../Components/Cagr/InputSlider.js';
import InfoBox from "../Components/Cagr/InfoBox.js";
import RelatedCalculators from "../Components/Cagr/RelatedCalculators.js";
import DropdownBox from "../Components/APYDropdownBox.js";


export default function Home() {

  const [age, setAge] = useState(18);
  const [frequency, setFrequency] = useState(3);
  const [pensionAmount, setPensionAmount] = useState(1000);

  const [year, setYear] = useState("Half-Yearly");
  const [Investment, setInvestment] = useState(390);
  const [Duration, setDuration] = useState(36);
  const [TotalAmount, setTotalAmount] = useState(10000);


  function calculate() {
    setDuration(60 - age);
    setYear(frequency == 1 ? "Monthly" : (frequency == 2 ? "Quarterly" : "Half-Yearly"));
    let time = 60 - age;
    if (frequency == 1) {
      let monthly = [
        [42, 84, 126, 168, 210],
        [46, 92, 138, 183, 228],
        [50, 100, 150, 198, 248],
        [54, 108, 162, 215, 269],
        [59, 117, 177, 234, 292],
        [64, 127, 192, 254, 318],
        [70, 139, 208, 277, 346],
        [76, 151, 226, 301, 376],
        [82, 164, 246, 327, 409],
        [90, 178, 268, 356, 446],
        [97, 194, 292, 388, 485],
        [106, 212, 318, 423, 529],
        [116, 231, 347, 462, 577],
        [126, 252, 379, 504, 630],
        [138, 276, 414, 551, 689],
        [151, 302, 453, 602, 752],
        [165, 330, 495, 659, 824],
        [181, 362, 543, 722, 902],
        [198, 396, 594, 792, 990],
        [218, 436, 654, 870, 1087],
        [240, 480, 720, 957, 1196],
        [264, 528, 792, 1054, 1318]
      ];
      let row = age - 18, col = (pensionAmount / 1000) - 1;
      let answer = monthly[row][col];
      setInvestment(answer);
      setTotalAmount(12 * answer * time);

    }
    else if (frequency == 2) {
      let quarterly = [
        [125, 250, 376, 501, 626],
        [137, 274, 411, 545, 679],
        [149, 298, 447, 590, 739],
        [161, 322, 483, 641, 802],
        [176, 349, 527, 697, 870],
        [191, 378, 572, 757, 948],
        [209, 414, 620, 826, 1031],
        [226, 450, 674, 897, 1121],
        [244, 489, 733, 975, 1219],
        [268, 530, 799, 1061, 1329],
        [289, 578, 870, 1156, 1445],
        [316, 632, 948, 1261, 1577],
        [346, 688, 1034, 1377, 1720],
        [376, 751, 1129, 1502, 1878],
        [411, 823, 1234, 1642, 2053],
        [450, 900, 1350, 1794, 2241],
        [492, 983, 1475, 1964, 2456],
        [539, 1079, 1618, 2152, 2688],
        [590, 1180, 1770, 2360, 2950],
        [650, 1299, 1949, 2593, 3239],
        [715, 1430, 2146, 2852, 3564],
        [787, 1574, 2360, 3141, 3928]
      ];

      let row = age - 18, col = (pensionAmount / 1000) - 1;
      let answer = quarterly[row][col];
      setInvestment(answer);
      setTotalAmount(3 * answer * time);

    }
    else {
      let halfly = [
        [248, 496, 744, 991, 1239],
        [271, 543, 814, 1080, 1346],
        [295, 590, 885, 1169, 1464],
        [319, 637, 956, 1269, 1588],
        [348, 690, 1046, 1381, 1723],
        [378, 749, 1133, 1499, 1877],
        [413, 820, 1228, 1635, 2042],
        [449, 891, 1334, 1776, 2219],
        [484, 968, 1452, 1930, 2414],
        [531, 1050, 1582, 2101, 2632],
        [572, 1145, 1723, 2290, 2862],
        [626, 1251, 1877, 2496, 3122],
        [685, 1363, 2048, 2727, 3405],
        [744, 1487, 2237, 2974, 3718],
        [814, 1629, 2443, 3252, 4066],
        [891, 1782, 2673, 3553, 4438],
        [974, 1948, 2921, 3889, 4863],
        [1068, 2136, 3205, 4261, 5323],
        [1169, 2337, 3506, 4674, 5843],
        [1287, 2573, 3860, 5134, 6415],
        [1416, 2833, 4249, 5648, 7058],
        [1558, 3116, 4674, 6220, 7778]
      ];
      let row = age - 18, col = (pensionAmount / 1000) - 1;
      if (pensionAmount < 1000) setInvestment(0);
      else {
        let answer = halfly[row][col];
        setInvestment(answer);
        setTotalAmount(2 * answer * time);
      }
    }
  }

  return (
    <div className='app-bg-contanier overflow-hidden'>
      <Head>
        <title>APY Calculator</title>
        <link rel="icon" href="./logo.png" />
        <link href="/dist/output.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          as="font"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&amp;family=Rubik:wght@400;500;600&amp;display=swap"
        />
        <meta name="description" content="APY Calculator" />
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
        <div className="mt-[50px] ">
          {/* Heading */}
          <div
            className={
              "text-[#000000] text-[40px] font-semibold text-center leading-tight  [@media(max-width:300px)]:text-3xl [@media(max-width:1366px)]:text-[36px]  [@media(min-width:1920px)]:text-[60px] "
            }
          >
            <span className={"text-[#0161FF]"}>APY</span>{" "}
            Calculator
          </div>
          {/* Subheading */}
          <p className={"text-[#464143] mt-[10px] text-center  [@media(max-width:300px)]:text-sm text-[14px] [@media(min-width:1920px)]:text-[18px] font-normal"}>
            The Atal Pension Yojana (APY) is a pension scheme launched by the Indian government in 2015. It is a voluntary, contributory pension scheme aimed at providing a guaranteed pension to individuals in the unorganized sector, such as self-employed individuals, small business owners, and agricultural workers, who do not have access to a formal pension system.
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
                  "flex-col justify-evenly font-medium  max-sm:space-y-3 text-[14px] xl:space-y-[10px] lg:space-y-[15px]"
                }
              >
                {/* Input box */}

                <div className=" flex flex-row justify-between mb-3">
                  {/* {/Yearly investment block/} */}
                  <div className="mt-1.5">Payment Frequency</div>
                  <div className=" w-[39%] lg:ml-[25px] ml-[10px] min-w-[150px] [@media(max-width:500px)]:min-w-[120px]  text-[#1B1C20]">
                    <DropdownBox value={frequency} setValue={setFrequency} />
                  </div>
                </div>

                <div>
                  {/* {/age block/} */}
                  <div>Desired Monthly Pension</div>
                  <InputSlider
                    type="rupees"
                    min={1000}
                    max={5000}
                    step={1000}
                    value={pensionAmount}
                    setValue={setPensionAmount}
                  />
                </div>

                <div>
                  {/* {/age block/} */}
                  <div >Joining age (Years)</div>
                  <InputSlider
                    type="years"
                    min={18}
                    max={39}
                    step={1}
                    value={age}
                    setValue={setAge}
                  />
                </div>



                {/* Control Box Wrapper */}
                <div
                  className={
                    "flex  justify-center cursor-pointer "
                  }
                >
                  {/* Control boxes */}
                  <div
                    className={
                      " border-[1px] border-dashed border-[#00D382] p-[4px] mt-[20px] rounded-[35px] w-[250px] h-[56px] flex justify-center items-center"
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
            </div>

            {/* vertical line */}
            <div
              className={
                " -my-4 mx-[20px] w-0  max-lg:h-0 max-lg:w-auto max-lg:-mx-2   rounded-[50px] border-[1px] border-solid border-[#707070] opacity-10"
              }
            ></div>

            {/* Output Container */}

            <div className={"lg:w-[50%] self-center text-[14px] "}>

              <div className={"flex justify-between  text-[#1B1C20] font-[18px] [@media(max-width:500px)]:text-[15px] "}>

                <div className={" font-medium  "}>
                  {year} Investment
                </div>

                <div className={"font-semibold text-[#1B1C20] "}>
                  {Investment.toLocaleString("en-In")}
                </div>

              </div>

              <div className={"flex justify-between my-4"}>
                <div className=" font-medium ">Investment Duration</div>
                <div className={"font-semibold  text-[#1B1C20] "}>
                  {Duration.toLocaleString("en-In")} {" "} Years
                </div>
              </div>

              <div className={"flex justify-between my-4 "}>
                <div className=" font-medium ">Total Amount</div>
                <div className={"font-semibold text-[#1B1C20] "}>
                  {TotalAmount.toLocaleString("en-In")}
                </div>
              </div>
            </div>

          </div>


          {/* Side Pannel */}
          <div className="xl:max-h-[347.2px]  xl:w-[23%] ">
            <InfoBox
              type="sidePannel"
              contents={[
                ["Atal Pension Yojna", "Atal Pension Yojana (APY) is a government-backed pension scheme in India launched in 2015"],
                ["Find out how much I can earn with APY", "APY provides an assured pension of your choice from 1000,2000,3000,4000 or 5000 rupees. You can use the FundsIndia APY calculator to find out how much you can earn."],
                ["Maturity", "APY matures when the depositor attains the age of 60."],
                ["Premature withdrawal implications",
                  <div key=''>
                    <div className="mb-2"> There are two options.</div>
                    <div className="mb-2">a) Exit due to specified illness – Exit before 60 years of age may be permitted only in exceptional circumstances such as due to specified illness of the Subscriber and the accumulated corpus (Subscriber contribution, Government Contribution and the returns thereon) in the Subscriber&#39;s account will be returned to the Subscriber.
                    </div>
                    <div>b) Voluntary exit - In case a Subscriber chooses to voluntarily exit from APY before attaining 60 years of age, he/she will be refunded only the contributions made by him/her to APY alongwith the returns thereon</div>
                  </div>
                ],
              ]}
            />
          </div>
        </div>

        {/* FAQ box */}
        <InfoBox
          type="faq"
          contents={[
            ["What is APY?", "Atal Pension Yojana (APY) is a government-backed pension scheme in India launched in 2015. It aims to provide a regular and guaranteed pension to workers in the unorganized sector who do not have access to any formal retirement scheme. Under the scheme, subscribers can receive a fixed pension amount per month, depending on their contribution amount and age at the time of joining."],
            ["Why should I calculate my APY returns?", "Calculating the Atal Pension Yojana (APY) can help you understand the amount of pension you may receive under the scheme, based on your contribution and age. By calculating your APY, you can determine the amount you need to contribute regularly to receive the desired pension amount. This can help you plan your finances better and ensure that you have a regular stream of income during your retirement."],
            ["How to use FundsIndia APY Calculator?", "FundsIndia APY Calculator does not require any technical knowledge to operate. Just plug in your desired monthly pension and your joining age. The calculator then displays how much you have to contribute, tenure and your total corpus at end of maturity."],
            ["When does APY mature?", "APY matures when the depositor attains the age of 60."],
            ["Can we choose our preferred amount of pension? ", "Under the scheme, subscribers can receive a fixed minimum pension of Rs. 1000, Rs. 2000, Rs. 3000, Rs. 4000, or Rs. 5000 per month, depending on their contribution amount and age at the time of joining."],
            ["Who can open an APY account?", "An Atal Pension Yojana (APY) account can be opened by any Indian citizen between the ages of 18 and 40 years. The subscriber should have a valid mobile number and savings bank account, which will be linked to the APY account for making contributions and receiving the pension."],
          ]}
        />

        {/* Related Calculators */}
        <RelatedCalculators
          contents={[
            ["SSY Calculator", "/ssy"],
            ["SWP Calculator", ""],
            ["SWP Calculator", ""],
            ["SWP Calculator", ""],
            ["SWP Calculator", ""],
            ["SWP Calculator", ""],
          ]}
        />
      </main>
    </div>
  );
}