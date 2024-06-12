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

const VinylSulphone =() => {
    return(

        <div>
        <h6>
            <strong><h2 style="color: #2f2fa2">VinylSulphone VS Dyes</h2></strong>
            <ul>
                  <li>Advantage :: Easy Wash off, Good wet fastness & discharge ability and Outstanding color strength.</li>
        <li>Application :: Exhaust Dyeing (60°C) , Cold-Pad-Batch, Continuous Dyeing & Printing also.</li>
                
            </ul>
        </h6>

   <table className="style1" style={{ border: 'medium solid #000000' }}>
   <tbody>
       <tr>
           <td className="style28" colSpan={3} style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
               <span className="style20"><strong style={{ fontFamily: 'Bodoni MT', color: '#2f2fa2' }}>SAMEER &amp; SONS</strong></span><br />
               <br />
               <span className="style21"><strong>VinylSulphone VS Dyes</strong></span>
           </td>
           <td className="style29" align="center" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }} valign="baseline">
               Solubility g/l AT RT
           </td>
           <td className="style29" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
               light
           </td>
           <td className="style29" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
               washing
           </td>
           <td className="style29" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
               perspiration
           </td>
           <td className="style29" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
               hypochlorite
           </td>
           <td className="style29" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
               Dischargeability
           </td>
       </tr>
       <tr>
           <td className="style8" style={{ border: 'thin solid #000000', backgroundColor: '#FEDD02', height: '50px', width: '100px' }}>
           </td>
           <td className="style8" style={{ border: 'thin solid #000000', backgroundColor: '#F3CB2B' }}>
               &nbsp;
           </td>
           <td className="style24" style={{ border: 'thin solid #000000' }}>
               <span className="style23"><strong>YELLOW R</strong></span><br className="style23" />
               <span className="style23">YELLOW 77</span>
           </td>
           <td className="style11" style={{ border: 'thin solid #000000' }}>
               100
           </td>
           <td className="style11" style={{ border: 'thin solid #000000' }}>
               5
           </td>
           <td className="style11" style={{ border: 'thin solid #000000' }}>
               4
           </td>
           <td className="style11" style={{ border: 'thin solid #000000' }}>
               4-5
           </td>
           <td className="style19" style={{ border: 'thin solid #000000' }}>
               1
           </td>
           <td className="style19" style={{ border: 'thin solid #000000' }}>
               G
           </td>
       </tr>
   </tbody>
</table>
</div>
        
    );
};


export default VinylSulphone;


