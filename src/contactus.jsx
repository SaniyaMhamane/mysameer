import React from 'react';


import AOS from 'aos';
import 'aos/dist/aos.css';

const Contactus = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div style={{ backgroundColor: 'white' }}>
      <form id="form1" action="">
        <div style={{ height: '850px', backgroundColor: 'white' }}>
          <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#2F2FA2', borderStyle: 'none!important' }}>
            <div className="container-fluid">
              <a className="navbar-brand" href="HOME.aspx">SAMEER & SONS</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a style={{ color: 'white' }} className="nav-link active mycustmenu" aria-current="page" href="HOME.aspx">Home</a>
                  </li>
                  <li className="nav-item">
                    <a style={{ color: 'white' }} className="nav-link mycustmenu" href="#">R&D</a>
                  </li>
                  <li className="nav-item">
                    <a style={{ color: 'white' }} className="nav-link mycustmenu" href="About Us.aspx">About US</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a style={{ color: 'white' }} className="nav-link dropdown-toggle mycustmenu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Product
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="Reactive_me_dies.aspx">Reactive Me Dyes</a></li>
                      <li><a className="dropdown-item" href="Vinylsulphone VS Dyes.aspx">VinylSulphone Dyes</a></li>
                      <li><a className="dropdown-item" href="RGB_AND_RR_DYES.aspx">RGB & RR Dyes</a></li>
                      <li><a className="dropdown-item" href="Premium series Dye.aspx">Premium series Dyes</a></li>
                      <li><a className="dropdown-item" href="reactive he_dyes.aspx">Reactive He Dyes</a></li>
                      <li><a className="dropdown-item" href="direct dyes.aspx">Direct Dyes</a></li>
                      <li><a className="dropdown-item" href="REACTIVE COLD.aspx">Reactive cold Dyes</a></li>
                      <li><a className="dropdown-item" href="PRINTING DYES.aspx">Reactive printing Dyes</a></li>
                      <li><a className="dropdown-item" href="Pigment_Textile_Auxilliaries.aspx">Pigment / Textile Auxilliaries</a></li>
                      <li><a className="dropdown-item" href="pigment_dies.aspx">Pigment Dyes</a></li>
                      <li><a className="dropdown-item" href="disperse_dyes.aspx">Disperse Dyes</a></li>
                      <li><a className="dropdown-item" href="Acid_basic_dyes.aspx">Acid & Basic Dyes</a></li>
                      <li><a className="dropdown-item" href="Napthol_Based.aspx">Napthol Base</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a style={{ color: 'white' }} className="nav-link mycustmenu" href="Contact Us.aspx">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <br />
          <center>
            <div style={{ backgroundColor: '#ACDDDE', marginLeft: '40px', width: '530px', opacity: '.9 !important', height: '213px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px' }} className="style1 shadow" data-aos="zoom-in">
              <span className="style5">Sameer Pathak&nbsp; :&nbsp;&nbsp;&nbsp; <a href="tel:9822559360">9822559360</a><br />
              Rajendra Pathak :&nbsp; <a href="tel:9423592264">9423592264</a><br />
              Abhay Pathak&nbsp;&nbsp; :&nbsp; <a href="tel:7666117911">7666117911</a><br />
              Gmail : <a href="mailto:pathaksameer79@gmail.com">pathaksameer79@gmail.com</a>
              </span>
            </div>
          </center>
          <br />
          <div className="container">
            <div className="row">
              <div style={{ backgroundColor: '#ACDDDE', marginLeft: '0px', padding: '50px', textAlign: 'center', height: '328px' }} className="style1 shadow col col-sm-6" data-aos="zoom-in" data-aos-duration="2500">
                <span className="style2"><strong>Address</strong></span><br />
                <span className="style3">Rama Prem Nivas 34/a/46,New paccha peth,Solapur,Maharashtra 413006<br />
                B6/501,suryanjali residency,amroli cross road,Surat<br />
                Minara mension 3/57 Sant sena marg Mumbai 400004</span>
              </div>
              <div className="col col-sm-6">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe title="gmap" width="448" height="431" src="https://maps.google.com/maps?q=sameer%20and%20sons,solapur,maharashtra&t=k&z=19&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contactus;
