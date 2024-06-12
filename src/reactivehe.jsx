import React from 'react';
import styled from 'styled-components';



// Define the styled components
const Table = styled.table`
  border: medium solid #000000;
  border-top-width: medium;
  border-top-style: solid;
  border-top-color: #000000;
  border-right-width: medium;
  border-right-style: solid;
  border-right-color: #000000;
  border-bottom-width: medium;
  border-bottom-style: solid;
  border-bottom-color: #000000;
  border-left-width: medium;
  border-left-style: solid;
  border-left-color: #000000;
  
`;

const Td = styled.td`
  border: thin solid #000000;
`;

const TdHeader = styled(Td)`
  background-color: ${(props) => props.bgColor};
`;





// Define the React component
const MyTable = () => {
  return (
    <div>
    <h6 style={{ color: '#2f2fa2' }}>
    <strong>
      <h2 style={{ color: '#2f2fa2' }}>Reactive HE Dyes (Bismonochlorotriazine Type Dyes)</h2>
    </strong>
    <ul>
      <li>Advantage :: Wide range of colours, excellent colour fastness and compatible in combination.</li>
      <li>Application :: Exhaust Dyeing (80-85°C).</li>
    </ul>
  </h6>

    
    <Table className="style1">
      <tbody>
        <tr>
          <TdHeader className="style7" colspan="3" bgColor="#F1F1F1">
            <span style={{ fontFamily: 'Bodoni MT', color: '#2f2fa2' }}>
              <strong>SAMEER & SONS</strong>
            </span>
            <br />
            HE DYES<br />
            BISMONOCHLOROTRIAZINE TYPE DYES
          </TdHeader>
          <TdHeader className="style4" align="center" valign="baseline" bgColor="#F1F1F1">
            Solubility g/l AT RT
          </TdHeader>
          <TdHeader className="style4" bgColor="#F1F1F1">
            Light
          </TdHeader>
          <TdHeader className="style4" bgColor="#F1F1F1">
            Washing
          </TdHeader>
          <TdHeader className="style4" bgColor="#F1F1F1">
            Persipration
          </TdHeader>
          <TdHeader className="style4" bgColor="#F1F1F1">
            Hypochrorite
          </TdHeader>
          <TdHeader className="style4" bgColor="#F1F1F1">
            Dischargibilty
          </TdHeader>
        </tr>
        <tr>
        <Td className="style8" style={{ border: 'thin solid #000000' }} bgcolor="#FFF460" height="50px" width="100px">
      </Td>
      <Td className="style9" style={{ border: 'thin solid #000000' }} bgcolor="#FFF102">
        &nbsp;
      </Td>
      <Td className="style18" style={{ border: 'thin solid #000000' }}>
        <strong>YELLOW HE6G</strong>
        <br />
        YELLOW 135
      </Td>
      <Td className="style11" style={{ border: 'thin solid #000000' }}>
        70
      </Td>
      <Td className="style11" style={{ border: 'thin solid #000000' }}>
        4-5
      </Td>
      <Td className="style11" style={{ border: 'thin solid #000000' }}>
        4
      </Td>
      <Td className="style11" style={{ border: 'thin solid #000000' }}>
        4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        3
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        G
      </Td>
            </tr>

    <tr>
    <Td className="style8" style={{ border: 'thin solid #000000' }} bgcolor="#F8EE59" height="50px" width="100px">
        &nbsp;
      </Td>
      <Td className="style8" bgcolor="#FFE500" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>YELLOW HE4G</strong>
        <br />
        YELLOW 105
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        80
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        2-3
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        G
      </Td>
    </tr>
    <tr>
    <Td className="style8" height="50px" width="100px" bgcolor="#F9D831" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style8" bgcolor="#FDC210" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>YELLOW HE4R</strong>
        <br />
        YELLOW 84
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        80
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </Td>
    </tr>
    <tr>
    <Td className="style8" bgcolor="#FEDD02" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style8" bgcolor="#F4CC2C" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>GOLDEN YELLOW HER</strong>
        <br />
        YELLOW 84A
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        70
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        3
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </Td>
    </tr>
    <tr>
    <Td className="style8" bgcolor="#F7A01D" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style8" bgcolor="#F17A20" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>ORANGE HE2R NMJ</strong>
        <br />
        ORANGE 94<br />
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        100
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        3
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </Td>
    </tr>
    <tr>
    <Td className="style8" bgcolor="#F9A81B" height="50" width="100" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style8" bgcolor="#F58320" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>ORANGE HE2R</strong>
        <br />
        ORANGE 94A
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        100
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        3-4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        3
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </Td>
    </tr>
    <tr>
    <Td className="style8" bgcolor="#EA979F" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style8" bgcolor="#DF577F" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>RED HE3B</strong>
        <br />
        RED 120
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        100
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </Td>
    </tr>
    <tr>
    <Td className="style8" bgcolor="#D67294" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style8" bgcolor="#CF5181" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>RED HE5B</strong>
        <br />
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        120
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </Td>
    </tr>
    <tr>
    <Td className="style8" bgcolor="#D37899" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style8" bgcolor="#C14C83" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>RED HE7B</strong>
        <br />
        RED 141
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        120
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </Td>

    </tr>
    <tr>
    <Td className="style8" bgcolor="#C46E9B" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style8" bgcolor="#C33D86" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>RED HE8B</strong>
        <br />
        RED 152
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        150
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        3-4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </Td>
    </tr>
    <tr>
    <Td className="style8" bgcolor="#34C1EC" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style8" bgcolor="#2384C8" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>BLUE HEGH</strong>
        <br />
        BLUE 198
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        100
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        1
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </Td>
    </tr>
    <tr>
    <Td className="style8" bgcolor="#5DAFDE" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style8" bgcolor="#2A78A8" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>BLUE HERD</strong>
        <br />
        BLUE 160
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        100
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        3
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        F
      </Td>
    </tr>
    <tr>
    <Td className="style8" bgcolor="#6B6EB1" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style8" bgcolor="#004684" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>NAVY BLUE HE2R</strong>
        <br />
        BLUE 172
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        150
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        1
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        F
      </Td>
    </tr>
    <tr>
    <Td className="style8" bgcolor="#557DA1" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style8" bgcolor="#005782" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>NAVY BLUE HER</strong>
        <br />
        BLUE 171
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        80
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        3-4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        3-4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        F
      </Td>
    </tr>
    <tr>
    <Td className="style8" bgcolor="#3A416B" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style8" bgcolor="#162659" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>BLACK HEBL</strong>
        <br />
        BLACK 160
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        80
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        3-3
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </Td>
    </tr>
    <tr>
    <Td className="style8" bgcolor="#144C41" height="50PX" width="100PX" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style8" bgcolor="#1D2824" height="50PX" width="100PX" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>GREEN HE4BD</strong>
        <br />
        GREEN 19 A
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        80
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        3-4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        2-3
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </Td>
    </tr>
    <tr>
    <Td className="style8" bgcolor="#005950" height="50PX" width="100PX" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style8" bgcolor="#192420" height="50PX" width="100PX" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>GREEN HE4BD</strong>
        <br />
        GREEN 19A
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        80
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        3
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        3-4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        2-3
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </Td>
    </tr>
    <tr>
    <Td className="style8" bgcolor="#5CC8E4" height="50PX" width="100PX" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style8" bgcolor="#029ECE" height="50PX" width="100PX" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>TUR.BLUE H5G</strong>
        <br />
        BLUE 25
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        120
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        3
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </Td>
    </tr>
    <tr>
    <Td className="style8" bgcolor="#3C4CA1" height="50PX" width="100PX" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style8" bgcolor="#454E8F" height="50PX" width="100PX" style={{ border: 'thin solid #000000' }}>
        &nbsp;
      </Td>
      <Td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>NAVY BLUE RX</strong>
        <br />
        BLUE 59
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        60
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        3
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        3
      </Td>
      <Td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </Td>
    </tr>
      </tbody>
    </Table>
    </div>
  );
};

export default MyTable;
