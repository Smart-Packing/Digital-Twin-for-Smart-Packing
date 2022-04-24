import React from "react";
import styled from "styled-components";
export const Root1 = ({}) => {
  return (
    <RootRoot>
      <Homepage>
        <CmsorHozzadsa
          src={"https://file.rendit.io/n/VPAHUSEhSUL22v8pVLOO.png"}
        />
        <SilverText margin={"0px 0px 13px 0px"}>
          Scan boxes automatically
        </SilverText>
        <SilverText margin={"0px 0px 13px 0px"}>Scan boxes manually</SilverText>
        <SilverText margin={"0px 0px 41px 0px"}>Run algorithm </SilverText>
        <FlexRow>
          <Text2>Previous results</Text2>
          <Element67>
            <SilverFlexRow>
              <Search1
                src={"https://file.rendit.io/n/AnGxvQmV0BWy8hIa1xHN.png"}
              />
            </SilverFlexRow>
            <Text3 placeholder={"Search"} />
          </Element67>
        </FlexRow>
        <FlexRow1 margin={"0px 0px 5px 0px"}>
          <Image1 src={"https://file.rendit.io/n/T1HTOyrO4wJIgvXn7omX.svg"} />
          <SilverRectangle />
          <SilverRectangle />
        </FlexRow1>
        <FlexRow2>
          <Text4>Vehicle 1</Text4>
          <Text5>Vehicle 2</Text5>
          <Text6>Vehicle 3</Text6>
        </FlexRow2>
        <FlexRow3 margin={"0px 0px 9px 0px"}>
          {[0, 1, 2].map((i) => (
            <SilverRectangle />
          ))}
        </FlexRow3>
        <FlexRow4>
          <Text7>Vehicle 4</Text7>
          <Text8>Vehicle 5</Text8>
          <Text6>Vehicle 6</Text6>
        </FlexRow4>
        <FlexRow1 margin={"0px 0px 11px 0px"}>
          {[0, 1, 2].map((i) => (
            <SilverRectangle />
          ))}
        </FlexRow1>
        <FlexRow6>
          <Text4>Vehicle 7</Text4>
          <Text5>Vehicle 8</Text5>
          <Text6>Vehicle 9</Text6>
        </FlexRow6>
        <FlexRow3 margin={"0px 0px 5px 0px"}>
          <Image1 src={"https://file.rendit.io/n/T1HTOyrO4wJIgvXn7omX.svg"} />
          <SilverRectangle />
          <SilverRectangle />
        </FlexRow3>
        <FlexRow8>
          <Vehicle15 margin={"0px 18px 0px 0px"}>Vehicle{"  "}10</Vehicle15>
          <Vehicle15 margin={"0px 24px 0px 0px"}>Vehicle 11</Vehicle15>
          <Text6>Vehicle 12</Text6>
        </FlexRow8>
        <FlexRow9>
          {[0, 1, 2].map((i) => (
            <SilverRectangle />
          ))}
        </FlexRow9>
        <FlexRow10 margin={"0px 0px 9px 0px"}>
          <Vehicle15 margin={"0px 24px 0px 0px"}>Vehicle 13</Vehicle15>
          <Vehicle15 margin={"0px 19px 0px 0px"}>Vehicle 14</Vehicle15>
          <Text6>Vehicle 15</Text6>
        </FlexRow10>
        <FlexRow3 margin={"0px 0px 11px 0px"}>
          {[0, 1, 2].map((i) => (
            <SilverRectangle />
          ))}
        </FlexRow3>
        <FlexRow10 margin={"0"}>
          <Vehicle15 margin={"0px 24px 0px 0px"}>Vehicle 16</Vehicle15>
          <Vehicle15 margin={"0px 22px 0px 0px"}>Vehicle 17</Vehicle15>
          <Text6>Vehicle 18</Text6>
        </FlexRow10>
      </Homepage>
      <ScanAutomatically>
        <FlexRow13>
          <Image3 src={"https://file.rendit.io/n/8bCPuP8HxDWBlmv0G5jO.svg"} />
          <CmsorHozzadsa1
            src={"https://file.rendit.io/n/dO6P34pbjYe9KdmSRz6g.png"}
          />
        </FlexRow13>
        <Line src={"https://file.rendit.io/n/DWPzE1GiV88xTtqUAL76.svg"} />
        <Text21 margin={"0px 0px 31px 48.5px"}>Set timer</Text21>
        <Element68>
          <Ellipse>
            <Ellipse1
              src={"https://file.rendit.io/n/OVnHRSSylIvgjZMwnSZo.svg"}
            />
          </Ellipse>
          <Line1 src={"https://file.rendit.io/n/89zpa8XgjfY0jaJRdcVK.svg"} />
        </Element68>
        <Text22>00 : 00 : 00</Text22>
        <FlexRow14>
          {[
            {
              childText: "H",
            },
            {
              childText: "M",
            },
            {
              childText: "S",
            },
          ].map((data) => (
            <Text23>{data.childText}</Text23>
          ))}
        </FlexRow14>
        <Text21 margin={"0px 0px 30px 41.5px"}>
          Export<ExportInto color={"rgba(0, 0,0, 0.63)"}> </ExportInto>
          <ExportInto color={"#000000"}>into</ExportInto>
        </Text21>
        <FlexRow15>
          <Ellipse2 src={"https://file.rendit.io/n/L2Ezd2l1Hckus1Argblc.svg"} />
          <Ellipse3 src={"https://file.rendit.io/n/L2Ezd2l1Hckus1Argblc.svg"} />
          <Ellipse4 src={"https://file.rendit.io/n/L2Ezd2l1Hckus1Argblc.svg"} />
        </FlexRow15>
        <FlexRow16>
          <Text26>Json</Text26>
          <Text27>PDF</Text27>
          <Text28>Plain text</Text28>
        </FlexRow16>
        <SilverText2>Start scanning</SilverText2>
        <SilverText3>Continue without timer</SilverText3>
      </ScanAutomatically>
      <ScanningManually>
        <FlexRow17>
          <Image3 src={"https://file.rendit.io/n/8bCPuP8HxDWBlmv0G5jO.svg"} />
          <CmsorHozzadsa1
            src={"https://file.rendit.io/n/dO6P34pbjYe9KdmSRz6g.png"}
          />
        </FlexRow17>
        <Line2 src={"https://file.rendit.io/n/Fbjzi2g1z9cuhDPOrrOh.svg"} />
        <Text21 margin={"0px 0px 36px 36px"}>Export into</Text21>
        <FlexRow18>
          <Ellipse5 src={"https://file.rendit.io/n/YNtTxzqPEhH3IiOJqes9.svg"} />
          <Ellipse6 src={"https://file.rendit.io/n/YNtTxzqPEhH3IiOJqes9.svg"} />
          <Ellipse7 src={"https://file.rendit.io/n/YNtTxzqPEhH3IiOJqes9.svg"} />
        </FlexRow18>
        <FlexRow19>
          <Vehicle15 margin={"0px 70px 0px 0px"}>Json</Vehicle15>
          <Vehicle15 margin={"0px 46px 0px 0px"}>PDF</Vehicle15>
          <Text32>Plain text</Text32>
        </FlexRow19>
        <Element69 margin={"0px 0px 216.5px 0px"}>
          <Line3 src={"https://file.rendit.io/n/DWPzE1GiV88xTtqUAL76.svg"} />
          <Line3 src={"https://file.rendit.io/n/RKSbYAoNWl1g65YqRo6h.svg"} />
        </Element69>
        <Ellipse9 src={"https://file.rendit.io/n/xQKptBC7k2tEHPIKdNkS.svg"} />
        <Ellipse10 src={"https://file.rendit.io/n/n5sogDbN9wdHh76hSQuh.svg"} />
        <Text33>1x</Text33>
        <Ellipse11 src={"https://file.rendit.io/n/n5sogDbN9wdHh76hSQuh.svg"} />
        <Ellipse13 src={"https://file.rendit.io/n/xQKptBC7k2tEHPIKdNkS.svg"} />
        <Element69 margin={"0px 0px 10px 0px"}>
          <Line3 src={"https://file.rendit.io/n/DWPzE1GiV88xTtqUAL76.svg"} />
          <Line3 src={"https://file.rendit.io/n/cZGCVTzoKqw89pqW7zfp.svg"} />
        </Element69>
        <Text34>Capture</Text34>
      </ScanningManually>
      <Dimensions1>
        <FlexRow20>
          <Image3 src={"https://file.rendit.io/n/8bCPuP8HxDWBlmv0G5jO.svg"} />
          <CmsorHozzadsa1
            src={"https://file.rendit.io/n/dO6P34pbjYe9KdmSRz6g.png"}
          />
        </FlexRow20>
        <Line7 src={"https://file.rendit.io/n/DWPzE1GiV88xTtqUAL76.svg"} />
        <Text35>Dimensions</Text35>
        <FlexRow21>
          <Text21 margin={"0"}>Height</Text21>
          <SilverText4 padding={"6px 0px 5px 0px"}>90</SilverText4>
        </FlexRow21>
        <FlexRow22>
          <Text37>Width</Text37>
          <SilverText4 padding={"5px 0px 6px 0px"}>80</SilverText4>
        </FlexRow22>
        <FlexRow23>
          <Text21 margin={"5px 0px 0px 0px"}>Length</Text21>
          <SilverText4 padding={"5px 0px 6px 0px"}>80</SilverText4>
        </FlexRow23>
        <Text39>State of the box</Text39>
        <SilverText7>No damage detected</SilverText7>
        <Text40>Destination</Text40>
        <SilverText8>Name of city</SilverText8>
        <SilverText9>Export</SilverText9>
      </Dimensions1>
      <RunAlgorithm1>
        <FlexRow24>
          <Image3 src={"https://file.rendit.io/n/8bCPuP8HxDWBlmv0G5jO.svg"} />
          <CmsorHozzadsa1
            src={"https://file.rendit.io/n/dO6P34pbjYe9KdmSRz6g.png"}
          />
        </FlexRow24>
        <Line8 src={"https://file.rendit.io/n/DWPzE1GiV88xTtqUAL76.svg"} />
        <SilverText10>Import data</SilverText10>
        <Text21 margin={"0px 0px 22px 38px"}>Add box</Text21>
        <FlexRow25>
          <Box src={"https://file.rendit.io/n/MNranpnT6uxOlmD0eEWZ.png"} />
          <Text42 width={"16px"}>W</Text42>
          <Text42 width={"12px"}>H</Text42>
          <Text44 margin={"1px 0px 0px 0px"}>L</Text44>
        </FlexRow25>
        <FlexRow26 padding={"0px 33px"}>
          <Vehicle15 margin={"5px 53px 0px 0px"}>1.</Vehicle15>
          <Ellipse14 padding={"6px 5px 5px 5px"}>
            <Text46 width={"20px"}>60</Text46>
          </Ellipse14>
          <Ellipse15>
            <Text46 width={"20px"}>90</Text46>
          </Ellipse15>
          <Ellipse16 margin={"0px 32px 0px 0px"}>
            <Text46 width={"19px"}>70</Text46>
          </Ellipse16>
          <SilverText11 margin={"0px 0px 2px 0px"}>Add</SilverText11>
        </FlexRow26>
        <FlexRow27>
          <Vehicle15 margin={"5px 52px 0px 0px"}>2.</Vehicle15>
          <Ellipse17 padding={"5px 5px 6px 5px"}>
            <Text46 width={"20px"}>60</Text46>
          </Ellipse17>
          <Ellipse18>
            <Text46 width={"20px"}>90</Text46>
          </Ellipse18>
          <Ellipse19>
            <Text46 width={"19px"}>70</Text46>
          </Ellipse19>
          <SilverText11 margin={"0"}>Add</SilverText11>
        </FlexRow27>
        <FlexRow28>
          <Vehicle15 margin={"2px 47px 0px 0px"}>3.</Vehicle15>
          <Ellipse17 padding={"6px 6px 5px 4px"}>
            <Text46 width={"20px"}>60</Text46>
          </Ellipse17>
          <Ellipse14 padding={"6px 7px 5px 3px"}>
            <Text46 width={"20px"}>90</Text46>
          </Ellipse14>
          <Ellipse22>
            <Text46 width={"19px"}>70</Text46>
          </Ellipse22>
          <SilverText11 margin={"0"}>Add</SilverText11>
        </FlexRow28>
        <FlexRow29>
          <Text57 margin={"5px 46px 0px 0px"}>4.</Text57>
          <Ellipse23>
            <Text46 width={"20px"}>60</Text46>
          </Ellipse23>
          <Ellipse24>
            <Text46 width={"20px"}>90</Text46>
          </Ellipse24>
          <Ellipse25 margin={"0px 32px 0px 0px"}>
            <Text46 width={"19px"}>70</Text46>
          </Ellipse25>
          <SilverText14>Add</SilverText14>
        </FlexRow29>
        <SilverText15>Confirm</SilverText15>
        <Text21 margin={"0px 0px 37px 43px"}>Optimization</Text21>
        <SilverFlexColumn>
          <SilverText16>Max utilization</SilverText16>
        </SilverFlexColumn>
        <SilverText17>Most GHG saving</SilverText17>
        <Text21 margin={"0px 0px 0px 108px"}>
          <br />
        </Text21>
      </RunAlgorithm1>
      <UtilityResult>
        <FlexRow30 gap={"256px"}>
          <Image7 src={"https://file.rendit.io/n/8bCPuP8HxDWBlmv0G5jO.svg"} />
          <CmsorHozzadsa1
            src={"https://file.rendit.io/n/dO6P34pbjYe9KdmSRz6g.png"}
          />
        </FlexRow30>
        <Line8 src={"https://file.rendit.io/n/DWPzE1GiV88xTtqUAL76.svg"} />
        <Text21 margin={"0px 0px 39px 33px"}>Package results</Text21>
        <FlexRow31>
          <Box1 src={"https://file.rendit.io/n/MNranpnT6uxOlmD0eEWZ.png"} />
          <Text63 width={"16px"}>W</Text63>
          <Text63 width={"12px"}>H</Text63>
          <Text44 margin={"0px 59px 3px 0px"}>L</Text44>
          <Vehicle15 margin={"0px 0px 3px 0px"}>State</Vehicle15>
        </FlexRow31>
        <FlexRow26 padding={"0px 19px"}>
          <Vehicle15 margin={"5px 74px 0px 0px"}>1.</Vehicle15>
          <Ellipse14 padding={"6px 5px 5px 5px"}>
            <Text46 width={"20px"}>60</Text46>
          </Ellipse14>
          <Ellipse15>
            <Text46 width={"20px"}>90</Text46>
          </Ellipse15>
          <Ellipse16 margin={"0px 29px 0px 0px"}>
            <Text46 width={"19px"}>70</Text46>
          </Ellipse16>
          <Vehicle15 margin={"6px 0px 0px 0px"}>No damage</Vehicle15>
        </FlexRow26>
        <FlexRow33>
          <Vehicle15 margin={"5px 73px 0px 0px"}>2.</Vehicle15>
          <Ellipse17 padding={"5px 5px 6px 5px"}>
            <Text46 width={"20px"}>60</Text46>
          </Ellipse17>
          <Ellipse18>
            <Text46 width={"20px"}>90</Text46>
          </Ellipse18>
          <Ellipse33>
            <Text46 width={"19px"}>70</Text46>
          </Ellipse33>
          <Text76 margin={"0px 0px 5px 0px"}>No damage</Text76>
        </FlexRow33>
        <FlexRow34>
          <Vehicle15 margin={"2px 68px 0px 0px"}>3.</Vehicle15>
          <Ellipse17 padding={"6px 6px 5px 4px"}>
            <Text46 width={"20px"}>60</Text46>
          </Ellipse17>
          <Ellipse14 padding={"6px 7px 5px 3px"}>
            <Text46 width={"20px"}>90</Text46>
          </Ellipse14>
          <Ellipse36>
            <Text46 width={"19px"}>70</Text46>
          </Ellipse36>
          <Text76 margin={"0px 0px 3px 0px"}>No damage</Text76>
        </FlexRow34>
        <FlexRow35>
          <Text57 margin={"5px 67px 0px 0px"}>4.</Text57>
          <Ellipse23>
            <Text46 width={"20px"}>60</Text46>
          </Ellipse23>
          <Ellipse24>
            <Text46 width={"20px"}>90</Text46>
          </Ellipse24>
          <Ellipse25 margin={"0px 26px 0px 0px"}>
            <Text46 width={"19px"}>70</Text46>
          </Ellipse25>
          <Vehicle15 margin={"0px 0px 4px 0px"}>No damage</Vehicle15>
        </FlexRow35>
        <SilverFlexColumn1 margin={"0px 0px 24px 0px"}>
          <Text46 width={"91px"}>Show more</Text46>
        </SilverFlexColumn1>
        <Text88 margin={"0px 0px 25px 31px"}>Overall utilization</Text88>
        <Text89>87%</Text89>
        <Text90>Number of packages in the container</Text90>
        <Text91 margin={"0"}>120</Text91>
      </UtilityResult>
      <CityResult>
        <FlexRow30 gap={"259px"}>
          <Image8 src={"https://file.rendit.io/n/8bCPuP8HxDWBlmv0G5jO.svg"} />
          <CmsorHozzadsa1
            src={"https://file.rendit.io/n/dO6P34pbjYe9KdmSRz6g.png"}
          />
        </FlexRow30>
        <Line8 src={"https://file.rendit.io/n/DWPzE1GiV88xTtqUAL76.svg"} />
        <Text21 margin={"0px 0px 39px 33px"}>Package results</Text21>
        <FlexRow31>
          <Box1 src={"https://file.rendit.io/n/MNranpnT6uxOlmD0eEWZ.png"} />
          <Text63 width={"16px"}>W</Text63>
          <Text63 width={"12px"}>H</Text63>
          <Text44 margin={"0px 59px 3px 0px"}>L</Text44>
          <Vehicle15 margin={"0px 0px 3px 0px"}>State</Vehicle15>
        </FlexRow31>
        <FlexRow26 padding={"0px 19px"}>
          <Vehicle15 margin={"5px 78px 0px 0px"}>1</Vehicle15>
          <Ellipse14 padding={"6px 5px 5px 5px"}>
            <Text46 width={"20px"}>60</Text46>
          </Ellipse14>
          <Ellipse15>
            <Text46 width={"20px"}>90</Text46>
          </Ellipse15>
          <Ellipse16 margin={"0px 29px 0px 0px"}>
            <Text46 width={"19px"}>70</Text46>
          </Ellipse16>
          <Vehicle15 margin={"6px 0px 0px 0px"}>No damage</Vehicle15>
        </FlexRow26>
        <FlexRow33>
          <Vehicle15 margin={"5px 78px 0px 0px"}>2</Vehicle15>
          <Ellipse17 padding={"5px 5px 6px 5px"}>
            <Text46 width={"20px"}>60</Text46>
          </Ellipse17>
          <Ellipse18>
            <Text46 width={"20px"}>90</Text46>
          </Ellipse18>
          <Ellipse33>
            <Text46 width={"19px"}>70</Text46>
          </Ellipse33>
          <Text76 margin={"0px 0px 5px 0px"}>No damage</Text76>
        </FlexRow33>
        <FlexRow34>
          <Vehicle15 margin={"2px 72px 0px 0px"}>3</Vehicle15>
          <Ellipse17 padding={"6px 6px 5px 4px"}>
            <Text46 width={"20px"}>60</Text46>
          </Ellipse17>
          <Ellipse14 padding={"6px 7px 5px 3px"}>
            <Text46 width={"20px"}>90</Text46>
          </Ellipse14>
          <Ellipse36>
            <Text46 width={"19px"}>70</Text46>
          </Ellipse36>
          <Text76 margin={"0px 0px 3px 0px"}>No damage</Text76>
        </FlexRow34>
        <FlexRow35>
          <Text57 margin={"5px 71px 0px 0px"}>4</Text57>
          <Ellipse23>
            <Text46 width={"20px"}>60</Text46>
          </Ellipse23>
          <Ellipse24>
            <Text46 width={"20px"}>90</Text46>
          </Ellipse24>
          <Ellipse25 margin={"0px 26px 0px 0px"}>
            <Text46 width={"19px"}>70</Text46>
          </Ellipse25>
          <Vehicle15 margin={"0px 0px 4px 0px"}>No damage</Vehicle15>
        </FlexRow35>
        <SilverFlexColumn1 margin={"0px 0px 34px 0px"}>
          <Text46 width={"91px"}>Show more</Text46>
        </SilverFlexColumn1>
        <Text88 margin={"0px 0px 15px 36px"}>Overall utilization</Text88>
        <Text89>87%</Text89>
        <Text90>Number of packages in the container</Text90>
        <Text91 margin={"0px 0px 69px 0px"}>120</Text91>
        <SilverFlexRow1>
          <Text122>Show route</Text122>
        </SilverFlexRow1>
      </CityResult>
      <Routes>
        <FlexRow42 margin={"0px 0px 6.5px 0px"}>
          <Image3 src={"https://file.rendit.io/n/8bCPuP8HxDWBlmv0G5jO.svg"} />
          <CmsorHozzadsa1
            src={"https://file.rendit.io/n/dO6P34pbjYe9KdmSRz6g.png"}
          />
        </FlexRow42>
        <Line11 src={"https://file.rendit.io/n/DWPzE1GiV88xTtqUAL76.svg"} />
        <FlexRow43>
          <Clipboard
            src={"https://file.rendit.io/n/m4JNY2cSo6ZD68LiKKtQ.png"}
          />
          <Box3 src={"https://file.rendit.io/n/MNranpnT6uxOlmD0eEWZ.png"} />
          <Placeholder
            src={"https://file.rendit.io/n/W75rMpgE6qfAcQE3Uasn.png"}
          />
        </FlexRow43>
        <FlexRow44>
          <Vehicle15 margin={"0px 59px 0px 0px"}>Order</Vehicle15>
          <Vehicle15 margin={"0px 60px 0px 0px"}>Box ID</Vehicle15>
          <Text6>Location</Text6>
        </FlexRow44>
        <Element71>
          <Line12 src={"https://file.rendit.io/n/DkaWADGKxN8cnGGFrI1W.svg"} />
          <Line13 src={"https://file.rendit.io/n/DWPzE1GiV88xTtqUAL76.svg"} />
        </Element71>
        <FlexRow45>
          <Text76 margin={"0px 95px 0px 0px"}>1</Text76>
          <Vehicle15 margin={"0px 56px 0px 0px"}>3</Vehicle15>
          <Text128>North parkway</Text128>
        </FlexRow45>
        <Line14 src={"https://file.rendit.io/n/lV62HnyErNmwjSVwpuO2.svg"} />
        <FlexRow46>
          <Text129>2</Text129>
          <Vehicle15 margin={"0px 61px 0px 0px"}>5</Vehicle15>
          <Text131>Tillman Street</Text131>
        </FlexRow46>
        <Line15 src={"https://file.rendit.io/n/lV62HnyErNmwjSVwpuO2.svg"} />
        <FlexRow47>
          <Vehicle15 margin={"0px 93px 0px 0px"}>3</Vehicle15>
          <Text76 margin={"0px 68px 0px 0px"}>4</Text76>
          <Text134>Scott street</Text134>
        </FlexRow47>
        <Line16 src={"https://file.rendit.io/n/lV62HnyErNmwjSVwpuO2.svg"} />
        <FlexRow48>
          <Vehicle15 margin={"0px 93px 1px 0px"}>4</Vehicle15>
          <Vehicle15 margin={"0px 63px 0px 0px"}>1</Vehicle15>
          <Text131>Central Avenue</Text131>
        </FlexRow48>
        <Line16 src={"https://file.rendit.io/n/lV62HnyErNmwjSVwpuO2.svg"} />
        <FlexRow49>
          <Text57 margin={"0px 92px 0px 0px"}>5</Text57>
          <Text76 margin={"0px 45px 0px 0px"}>2</Text76>
          <Text128>Hacks Cross Road</Text128>
        </FlexRow49>
        <SilverText18>Open in maps</SilverText18>
      </Routes>
      <Maps>
        <FlexRow42 margin={"0"}>
          <Image3 src={"https://file.rendit.io/n/8bCPuP8HxDWBlmv0G5jO.svg"} />
          <CmsorHozzadsa1
            src={"https://file.rendit.io/n/dO6P34pbjYe9KdmSRz6g.png"}
          />
        </FlexRow42>
        <Element72>
          <Line18 src={"https://file.rendit.io/n/DWPzE1GiV88xTtqUAL76.svg"} />
          <Screenshotat
            src={"https://file.rendit.io/n/oHUaYpd2tP82hHXQyTTS.png"}
          />
        </Element72>
      </Maps>
    </RootRoot>
  );
};
const RootRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  min-width: 4560px;
  align-items: flex-start;
`;
const Homepage = styled.div`
  height: 1121px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  align-self: center;
  flex-direction: column;
  padding: 44px 78px 35px 60px;
  margin: 0px 61px 0px 0px;
`;
const CmsorHozzadsa = styled.img`
  width: 222px;
  height: 139px;
  align-self: flex-end;
  margin: 0px 25px 48px 0px;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 28px;
  align-items: flex-start;
  margin: 0px 0px 26px 0px;
`;
const Text2 = styled.div`
  font-size: 20px;
  font-family: Inter;
  font-weight: 400;
  margin: 6px 0px 0px 0px;
`;
const Element67 = styled.div`
  align-self: stretch;
  width: 111px;
  height: 37px;
  position: relative;
  flex-grow: 1;
`;
const SilverFlexRow = styled.div`
  width: 87px;
  background-color: #c4c4c4;
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 8px 6px 8px;
`;
const Search1 = styled.img`
  width: 26.9px;
  height: 26px;
`;
const Text3 = styled.input`
  width: 66px;
  height: 23px;
  font-size: 14px;
  font-family: Inter;
  font-weight: 400;
  position: absolute;
  top: 9px;
  left: 45px;
  padding: 0px;
  border-width: 0px;
  background: none;
  :: placeholder {
    color: undefined;
  }
  display: inline-block;
  outline-width: 0px;
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 7px;
  margin: 0px 0px 6px 0px;
`;
const FlexRow4 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 10px 0px 13px;
  margin: 0px 0px 9px 0px;
`;
const Text7 = styled.div`
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  margin: 0px 31px 0px 0px;
`;
const Text8 = styled.div`
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  margin: 0px 27px 0px 0px;
`;
const FlexRow6 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  margin: 0px 0px 13px 0px;
`;
const FlexRow8 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 6px 0px 9px;
  margin: 0px 0px 6px 0px;
`;
const FlexRow9 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 28px;
  align-items: center;
  padding: 0px 7px;
  margin: 0px 0px 9px 0px;
`;
const ScanAutomatically = styled.div`
  height: 910px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px 0px 8px 0.5px;
  margin: 0px 96px 0px 0px;
`;
const FlexRow13 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 253px;
  align-items: center;
  padding: 0px 13px;
  margin: 0px 0px 3.5px 0px;
`;
const Line = styled.img`
  width: 427.5px;
  height: 1px;
  align-self: center;
  margin: 0px 0px 30.5px 0px;
`;
const Element68 = styled.div`
  height: 261px;
  position: relative;
  min-width: 427.5px;
  margin: 0px 0px 27px 0px;
`;
const Ellipse = styled.div`
  height: 260px;
  background-image: url("https://file.rendit.io/n/5ZeasunOIhuzCWZWwuEG.svg");
  background-size: cover;
  position: absolute;
  top: 1px;
  left: 83.5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 125px;
`;
const Ellipse1 = styled.img`
  width: 10px;
  height: 10px;
`;
const Line1 = styled.img`
  width: 1px;
  height: 127px;
  position: absolute;
  left: 213px;
`;
const Text22 = styled.div`
  font-size: 32px;
  font-family: Inter;
  font-weight: 400;
  align-self: flex-end;
  margin: 0px 116px 14px 0px;
`;
const FlexRow14 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 47px;
  align-items: center;
  padding: 0px 122px 0px 137.5px;
  margin: 0px 0px 32px 0px;
`;
const FlexRow15 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 103px 0px 126.5px;
  margin: 0px 0px 14px 0px;
`;
const Ellipse2 = styled.img`
  width: 30px;
  height: 30px;
  margin: 0px 52px 0px 0px;
`;
const Ellipse3 = styled.img`
  width: 30px;
  height: 30px;
  margin: 0px 56px 0px 0px;
`;
const Ellipse4 = styled.img`
  width: 30px;
  height: 30px;
`;
const FlexRow16 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 71px;
  margin: 0px 0px 40px 0px;
`;
const Text26 = styled.div`
  font-size: 20px;
  font-family: Inter;
  font-weight: 400;
  margin: 0px 36px 0px 0px;
`;
const Text27 = styled.div`
  font-size: 20px;
  font-family: Inter;
  font-weight: 400;
  margin: 0px 30px 0px 0px;
`;
const Text28 = styled.div`
  width: 88px;
  height: 24px;
  font-size: 20px;
  font-family: Inter;
  font-weight: 400;
`;
const SilverText2 = styled.div`
  display: flex;
  font-size: 20px;
  font-family: Inter;
  font-weight: 400;
  align-self: flex-end;
  width: 138px;
  height: 24px;
  background-color: #c4c4c4;
  flex-direction: row;
  padding: 14px 20px 14px 30px;
  margin: 0px 114px 19px 0px;
`;
const SilverText3 = styled.div`
  display: flex;
  font-size: 20px;
  font-family: Inter;
  font-weight: 400;
  align-self: flex-end;
  width: 217px;
  height: 24px;
  background-color: #c4c4c4;
  flex-direction: row;
  padding: 14px 56px 14px 45px;
  margin: 0px 44px 0px 0px;
`;
const ScanningManually = styled.div`
  height: 906px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 10px 0px 10px 1px;
  margin: 0px 96px 0px 0px;
`;
const FlexRow17 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 271px;
  align-items: center;
  padding: 0px 7px;
  margin: 0px 0px 7.5px 0px;
`;
const Line2 = styled.img`
  width: 425px;
  height: 1px;
  margin: 0px 0px 18.5px 0px;
`;
const FlexRow18 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 110px 0px 87px;
  margin: 0px 0px 12px 0px;
`;
const Ellipse5 = styled.img`
  width: 25px;
  height: 25px;
  margin: 0px 77px 0px 0px;
`;
const Ellipse6 = styled.img`
  width: 25px;
  height: 25px;
  margin: 0px 78px 0px 0px;
`;
const Ellipse7 = styled.img`
  width: 25px;
  height: 25px;
`;
const FlexRow19 = styled.div`
  align-self: stretch;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 77px;
  margin: 0px 0px 22.5px 0px;
`;
const Text32 = styled.div`
  width: 88px;
  height: 24px;
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  align-self: flex-end;
`;
const Ellipse9 = styled.img`
  width: 19px;
  height: 19px;
  margin: 0px 16px 9px 0px;
`;
const Ellipse10 = styled.img`
  width: 7px;
  height: 7px;
  margin: 0px 22px 13px 0px;
`;
const Text33 = styled.div`
  display: flex;
  font-size: 12px;
  font-family: Inter;
  font-weight: 400;
  width: 19px;
  height: 15px;
  background-image: url("https://file.rendit.io/n/xQKptBC7k2tEHPIKdNkS.svg");
  background-size: cover;
  flex-direction: row;
  justify-content: center;
  padding: 2px 0px;
  margin: 0px 16px 10px 0px;
`;
const Ellipse11 = styled.img`
  width: 7px;
  height: 7px;
  margin: 0px 22px 10px 0px;
`;
const Ellipse13 = styled.img`
  width: 19px;
  height: 19px;
  margin: 0px 16px 219px 0px;
`;
const Text34 = styled.div`
  display: flex;
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  align-self: flex-start;
  width: 61px;
  height: 100px;
  background-image: url("https://file.rendit.io/n/OQS8M5awieaT33tbYj8G.svg");
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px 0px 19px;
  margin: 0px 0px 0px 149px;
`;
const Dimensions1 = styled.div`
  height: 906px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 0px 10px 1px;
  margin: 0px 102px 0px 0px;
`;
const FlexRow20 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  gap: 265px;
  align-items: center;
  padding: 0px 15px 0px 19px;
  margin: 0px 0px 7.5px 0px;
`;
const Line7 = styled.img`
  width: 427px;
  height: 1px;
  align-self: center;
  margin: 0px 0px 39.5px 0px;
`;
const Text35 = styled.div`
  font-size: 24px;
  font-family: Inter;
  font-weight: 400;
  margin: 0px 0px 64px 34px;
`;
const FlexRow21 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  gap: 77px;
  align-items: center;
  padding: 0px 66px 0px 44px;
  margin: 0px 0px 19px 0px;
`;
const FlexRow22 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  gap: 85px;
  align-items: center;
  padding: 0px 66px 0px 44px;
  margin: 0px 0px 24px 0px;
`;
const Text37 = styled.div`
  font-size: 24px;
  font-family: Inter;
  font-weight: 400;
  align-self: flex-end;
`;
const FlexRow23 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  gap: 72px;
  align-items: center;
  padding: 0px 66px 0px 44px;
  margin: 0px 0px 35px 0px;
`;
const Text39 = styled.div`
  font-size: 24px;
  font-family: Inter;
  font-weight: 400;
  margin: 0px 0px 23px 45px;
`;
const SilverText7 = styled.div`
  display: flex;
  font-size: 20px;
  font-family: Inter;
  font-weight: 400;
  width: 275px;
  height: 24px;
  background-color: #c4c4c4;
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px 21px 44px 21px;
  margin: 0px 0px 17px 44px;
`;
const Text40 = styled.div`
  font-size: 24px;
  font-family: Inter;
  font-weight: 400;
  margin: 0px 0px 17px 46px;
`;
const SilverText8 = styled.div`
  display: flex;
  font-size: 24px;
  font-family: Inter;
  font-weight: 400;
  align-self: center;
  width: 306px;
  height: 29px;
  background-color: #c4c4c4;
  flex-direction: row;
  justify-content: flex-start;
  padding: 9px 13px;
  margin: 0px 0px 61px 0px;
`;
const SilverText9 = styled.div`
  display: flex;
  font-size: 20px;
  font-family: Inter;
  font-weight: 400;
  width: 63px;
  height: 24px;
  background-color: #c4c4c4;
  flex-direction: row;
  padding: 22px 122px 21px 149px;
  margin: 0px 0px 0px 44px;
`;
const RunAlgorithm1 = styled.div`
  height: 900px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  padding: 13px 0px 13px 1px;
  margin: 0px 114px 0px 0px;
`;
const FlexRow24 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 19px;
  margin: 0px 0px 7.5px 0px;
`;
const SilverText10 = styled.div`
  display: flex;
  font-size: 20px;
  font-family: Inter;
  font-weight: 400;
  align-self: center;
  width: 111px;
  height: 24px;
  background-color: #c4c4c4;
  flex-direction: row;
  padding: 13px 89px 13px 105px;
  margin: 0px 0px 44px 0px;
`;
const FlexRow25 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 50px;
  margin: 0px 0px 16px 0px;
`;
const Box = styled.img`
  width: 26px;
  height: 26px;
  align-self: center;
  margin: 0px 52px 0px 0px;
`;
const FlexRow27 = styled.div`
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px 33px;
  margin: 0px 0px 22px 0px;
`;
const Ellipse19 = styled.div`
  background-image: url("https://file.rendit.io/n/L2Ezd2l1Hckus1Argblc.svg");
  background-size: cover;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 5px 6px 6px;
  margin: 0px 31px 0px 0px;
`;
const FlexRow28 = styled.div`
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px 33px;
  margin: 0px 0px 17px 0px;
`;
const Ellipse22 = styled.div`
  height: 24px;
  background-image: url("https://file.rendit.io/n/L2Ezd2l1Hckus1Argblc.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 3px 6px 3px 5px;
  margin: 2px 32px 0px 0px;
`;
const FlexRow29 = styled.div`
  height: 33px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0px 33px;
  margin: 0px 0px 41px 0px;
`;
const SilverText14 = styled.div`
  display: flex;
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  width: 31px;
  height: 19px;
  background-color: #c4c4c4;
  flex-direction: row;
  padding: 4px 23px 5px 26px;
  margin: 0px 0px 2px 0px;
`;
const SilverText15 = styled.div`
  display: flex;
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  align-self: flex-end;
  width: 131px;
  height: 19px;
  background-color: #c4c4c4;
  flex-direction: row;
  justify-content: center;
  padding: 12px 0px;
  margin: 0px 134px 39px 0px;
`;
const SilverFlexColumn = styled.div`
  background-color: #c4c4c4;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 29px 0px;
`;
const SilverText16 = styled.div`
  display: flex;
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  width: 110px;
  height: 19px;
  background-color: #c4c4c4;
  flex-direction: row;
  padding: 11px 60px 9px 51px;
`;
const SilverText17 = styled.div`
  display: flex;
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  align-self: center;
  width: 132px;
  height: 19px;
  background-color: #c4c4c4;
  flex-direction: row;
  padding: 10px 42px 10px 47px;
  margin: 0px 0px 38px 0px;
`;
const UtilityResult = styled.div`
  height: 892px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  padding: 17px 0px 17px 1px;
  margin: 0px 129px 0px 0px;
`;
const Image7 = styled.img`
  width: 25px;
  height: 26.4px;
  align-self: flex-start;
  margin: 12px 0px 0px 0px;
`;
const CityResult = styled.div`
  height: 1016px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  padding: 17px 0px 17px 1px;
  margin: 0px 55px 0px 0px;
`;
const Image8 = styled.img`
  width: 25px;
  height: 26.4px;
  align-self: flex-start;
  margin: 9px 0px 0px 0px;
`;
const SilverFlexRow1 = styled.div`
  background-color: #c4c4c4;
  display: flex;
  align-self: center;
  flex-direction: row;
  align-items: center;
  padding: 12px 44px 13px 66px;
`;
const Text122 = styled.div`
  width: 106px;
  height: 22px;
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
`;
const Routes = styled.div`
  height: 914px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  padding: 6px 0px;
  margin: 0px 55px 0px 0px;
`;
const Line11 = styled.img`
  width: 427px;
  height: 1px;
  align-self: flex-end;
  margin: 0px 0px 65.5px 0px;
`;
const FlexRow43 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 92px;
  margin: 0px 0px 8px 0px;
`;
const Clipboard = styled.img`
  width: 23.6px;
  height: 26px;
  margin: 0px 79.4px 0px 0px;
`;
const Box3 = styled.img`
  width: 26px;
  height: 26px;
  margin: 0px 95px 0px 0px;
`;
const Placeholder = styled.img`
  width: 21.4px;
  height: 26px;
`;
const FlexRow44 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 68px 0px 82px;
  margin: 0px 0px 15.5px 0px;
`;
const Element71 = styled.div`
  height: 1px;
  position: relative;
  min-width: 428px;
  margin: 0px 0px 11.5px 0px;
`;
const Line12 = styled.img`
  width: 425px;
  height: 1px;
  position: absolute;
`;
const Line13 = styled.img`
  width: 428px;
  height: 1px;
  position: absolute;
`;
const FlexRow45 = styled.div`
  height: 22px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px 53px;
  margin: 0px 0px 13.5px 0px;
`;
const Line14 = styled.img`
  width: 424px;
  height: 1px;
  align-self: flex-end;
  margin: 0px 0px 15.5px 0px;
`;
const FlexRow46 = styled.div`
  height: 22px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0px 56px;
  margin: 0px 0px 13.5px 0px;
`;
const Text129 = styled.div`
  width: 4px;
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  margin: 0px 98px 1px 0px;
`;
const Line15 = styled.img`
  width: 424px;
  height: 1px;
  align-self: flex-end;
  margin: 0px 0px 19.5px 0px;
`;
const FlexRow47 = styled.div`
  height: 21px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px 63px;
  margin: 0px 0px 14px 0px;
`;
const Text134 = styled.div`
  text-align: center;
  font-size: 15px;
  font-family: Inter;
  font-weight: 400;
  margin: 1px 0px 0px 0px;
`;
const FlexRow48 = styled.div`
  height: 23px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0px 47px;
  margin: 0px 0px 17px 0px;
`;
const FlexRow49 = styled.div`
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 41px;
  margin: 0px 0px 67px 0px;
`;
const SilverText18 = styled.div`
  display: flex;
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  align-self: center;
  width: 211px;
  height: 19px;
  background-color: #c4c4c4;
  flex-direction: row;
  justify-content: center;
  padding: 12px 0px;
`;
const Maps = styled.div`
  height: 926px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  gap: 6px;
`;
const Element72 = styled.div`
  height: 846px;
  position: relative;
  min-width: 428px;
`;
const Line18 = styled.img`
  width: 427px;
  height: 1px;
  position: absolute;
  top: 0.5px;
  left: 1px;
`;
const Screenshotat = styled.img`
  width: 428px;
  height: 846px;
  position: absolute;
`;
const SilverText = styled.div`
  display: flex;
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  align-self: flex-end;
  width: 272px;
  height: 19px;
  background-color: #c4c4c4;
  flex-direction: row;
  justify-content: center;
  padding: 20px 0px;
  margin: ${(props) => props.margin};
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 28px;
  align-items: center;
  padding: 0px 7px;
  margin: ${(props) => props.margin};
`;
const Image1 = styled.img`
  width: 72px;
  height: 70px;
`;
const SilverRectangle = styled.div`
  width: 72px;
  height: 70px;
  background-color: #c4c4c4;
`;
const Text4 = styled.div`
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  margin: 0px 33px 0px 0px;
`;
const Text5 = styled.div`
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  margin: 0px 29px 0px 0px;
`;
const Text6 = styled.div`
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
`;
const FlexRow3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 28px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 9px;
  margin: ${(props) => props.margin};
`;
const Vehicle15 = styled.div`
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  white-space: pre-wrap;
  margin: ${(props) => props.margin};
`;
const FlexRow10 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 1px;
  margin: ${(props) => props.margin};
`;
const Image3 = styled.img`
  width: 25px;
  height: 26.4px;
`;
const CmsorHozzadsa1 = styled.img`
  width: 103px;
  height: 62px;
`;
const Text21 = styled.div`
  font-size: 24px;
  font-family: Inter;
  font-weight: 400;
  align-self: flex-start;
  margin: ${(props) => props.margin};
`;
const Text23 = styled.div`
  font-size: 32px;
  font-family: Inter;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.63);
`;
const ExportInto = styled.div`
  font-size: 24px;
  font-family: Inter;
  font-weight: 400;
  display: contents;
  white-space: pre-wrap;
  color: ${(props) => props.color};
`;
const Element69 = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  min-width: 427px;
  margin: ${(props) => props.margin};
`;
const Line3 = styled.img`
  width: 427px;
  height: 1px;
  position: absolute;
`;
const SilverText4 = styled.div`
  display: flex;
  font-size: 24px;
  font-family: Inter;
  font-weight: 400;
  width: 165px;
  height: 29px;
  background-color: #c4c4c4;
  flex-direction: row;
  justify-content: center;
  padding: ${(props) => props.padding};
`;
const Line8 = styled.img`
  width: 427px;
  height: 1px;
  align-self: center;
  margin: 0px 0px 41.5px 0px;
`;
const Text42 = styled.div`
  height: 19px;
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  margin: 1px 53px 0px 0px;
  width: ${(props) => props.width};
`;
const Text44 = styled.div`
  width: 9px;
  height: 19px;
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  margin: ${(props) => props.margin};
`;
const FlexRow26 = styled.div`
  height: 34px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0px 0px 21px 0px;
  padding: ${(props) => props.padding};
`;
const Ellipse14 = styled.div`
  background-image: url("https://file.rendit.io/n/L2Ezd2l1Hckus1Argblc.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 36px 0px 0px;
  padding: ${(props) => props.padding};
`;
const Text46 = styled.div`
  height: 19px;
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  width: ${(props) => props.width};
`;
const Ellipse15 = styled.div`
  background-image: url("https://file.rendit.io/n/L2Ezd2l1Hckus1Argblc.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 4px 5px 6px;
  margin: 0px 35px 0px 0px;
`;
const Ellipse16 = styled.div`
  background-image: url("https://file.rendit.io/n/L2Ezd2l1Hckus1Argblc.svg");
  background-size: cover;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 6px 6px 5px;
  margin: ${(props) => props.margin};
`;
const SilverText11 = styled.div`
  display: flex;
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  align-self: flex-end;
  width: 31px;
  height: 19px;
  background-color: #c4c4c4;
  flex-direction: row;
  padding: 4px 23px 5px 26px;
  margin: ${(props) => props.margin};
`;
const Ellipse17 = styled.div`
  background-image: url("https://file.rendit.io/n/L2Ezd2l1Hckus1Argblc.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 38px 0px 0px;
  padding: ${(props) => props.padding};
`;
const Ellipse18 = styled.div`
  background-image: url("https://file.rendit.io/n/L2Ezd2l1Hckus1Argblc.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 6px 6px 4px;
  margin: 0px 32px 0px 0px;
`;
const Text57 = styled.div`
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  align-self: flex-start;
  margin: ${(props) => props.margin};
`;
const Ellipse23 = styled.div`
  height: 22px;
  background-image: url("https://file.rendit.io/n/L2Ezd2l1Hckus1Argblc.svg");
  background-size: cover;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 4px 5px;
  margin: 0px 36px 0px 0px;
`;
const Ellipse24 = styled.div`
  height: 22px;
  background-image: url("https://file.rendit.io/n/L2Ezd2l1Hckus1Argblc.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 4px 4px 6px;
  margin: 0px 39px 0px 0px;
`;
const Ellipse25 = styled.div`
  height: 22px;
  background-image: url("https://file.rendit.io/n/L2Ezd2l1Hckus1Argblc.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 4px 10px 4px 1px;
  margin: ${(props) => props.margin};
`;
const FlexRow30 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 12px;
  margin: 0px 0px 12.5px 0px;
  gap: ${(props) => props.gap};
`;
const FlexRow31 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px 46px 0px 39px;
  margin: 0px 0px 18px 0px;
`;
const Box1 = styled.img`
  width: 26px;
  height: 26px;
  align-self: center;
  margin: 0px 73px 0px 0px;
`;
const Text63 = styled.div`
  height: 19px;
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  margin: 0px 53px 3px 0px;
  width: ${(props) => props.width};
`;
const FlexRow33 = styled.div`
  height: 33px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px 22px;
  margin: 0px 0px 25px 0px;
`;
const Ellipse33 = styled.div`
  background-image: url("https://file.rendit.io/n/L2Ezd2l1Hckus1Argblc.svg");
  background-size: cover;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 5px 6px 6px;
  margin: 0px 25px 0px 0px;
`;
const Text76 = styled.div`
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  align-self: flex-end;
  margin: ${(props) => props.margin};
`;
const FlexRow34 = styled.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px 22px;
  margin: 0px 0px 20px 0px;
`;
const Ellipse36 = styled.div`
  height: 24px;
  background-image: url("https://file.rendit.io/n/L2Ezd2l1Hckus1Argblc.svg");
  background-size: cover;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 3px 6px 3px 5px;
  margin: 0px 26px 0px 0px;
`;
const FlexRow35 = styled.div`
  height: 33px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0px 22px;
  margin: 0px 0px 26px 0px;
`;
const SilverFlexColumn1 = styled.div`
  background-color: #c4c4c4;
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  padding: 6px 4px 9px 7px;
  margin: ${(props) => props.margin};
`;
const Text88 = styled.div`
  text-align: center;
  font-size: 24px;
  font-family: Inter;
  font-weight: 400;
  align-self: flex-start;
  margin: ${(props) => props.margin};
`;
const Text89 = styled.div`
  display: flex;
  font-size: 36px;
  font-family: Inter;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.63);
  align-self: flex-start;
  width: 72px;
  height: 100px;
  background-image: url("https://file.rendit.io/n/OQS8M5awieaT33tbYj8G.svg");
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  padding: 0px 12px 0px 16px;
  margin: 0px 0px 41px 150px;
`;
const Text90 = styled.div`
  font-size: 20px;
  font-family: Inter;
  font-weight: 400;
  align-self: flex-start;
  margin: 0px 0px 28px 28px;
`;
const Text91 = styled.div`
  display: flex;
  font-size: 32px;
  font-family: Inter;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.63);
  align-self: center;
  width: 55px;
  height: 100px;
  background-image: url("https://file.rendit.io/n/OQS8M5awieaT33tbYj8G.svg");
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  padding: 0px 22px 0px 23px;
  margin: ${(props) => props.margin};
`;
const FlexRow42 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 262px;
  align-items: center;
  padding: 0px 10px;
  margin: ${(props) => props.margin};
`;
const Text128 = styled.div`
  text-align: center;
  font-size: 15px;
  font-family: Inter;
  font-weight: 400;
`;
const Text131 = styled.div`
  text-align: center;
  font-size: 15px;
  font-family: Inter;
  font-weight: 400;
  align-self: flex-start;
`;
const Line16 = styled.img`
  width: 424px;
  height: 1px;
  align-self: flex-end;
  margin: 0px 0px 17px 0px;
`;
