import React, { useState } from "react";
import { FaArrowLeft,FaArrowUp } from "react-icons/fa";
import Section from '../section/Section'
import Section2 from '../section/Section2'
import Section3 from '../section/Section3'
import Section4 from '../section/Section4'
import Form1 from '../form/Form1'
import Form2 from '../form/Form2'
import Form3 from '../form/Form3'
import Form4 from '../form/Form4'
import './style.scss';
import {Link} from 'react-router-dom'
function Design() {
  const [color, setColor] = useState({
    rang: [
      { id: 1, color: "#AD1FEA" },
      { id: 2, color: "#4661E6" },
      { id: 3, color: "#373F68" },
      { id: 4, color: "#B9BECD" },
      { id: 5, color: "#F2F4FF" },
      { id: 6, color: "#F7F8FD" },
      { id: 7, color: "#3A4374" },
      { id: 8, color: "#647196" },
      { id: 9, color: "#F49F85" },
      { id: 10, color: "#62BCFA" }, 
    ],
  });
  return (
    <>
    <Link className={'goback'} to="/">&larr; Back</Link> 
      <div className="nav">
        <div className="contain">
          <div className="rgb"></div>
          <span>DESIGN SYSTEM</span>
        </div>
      </div>
      <div className="number">
        <div className="sonlar">
          <span>01</span>
        </div>
        <span className={"col"}>COLORS</span>
      </div>
      <div className="generation">
        <div className="cardlar">
          {color.rang.map((i, idx) => (
            <div className="card" key={i.id}>
              <div className="rang" style={{ background: `${i.color}` }}>
                <div className="hoverr"></div>
                <span>{i.color}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="number">
        <div className="sonlar">
          <span>02</span>
        </div>
        <span className={"col"}>TYPOGRAPHY</span>
      </div>
      <div className="simbol">
        <div className="harflar">
          <div className="kard"></div>
          <div className="row">
            <div className="col-4">
              <div className="div">
                <h6 className={"title"}>
                  H1 - Jost Bold | 24px; 35px Line; -0.33 Spacing
                </h6>
                <h1 className="text">Sed egestas ante et vulputate volutpat</h1>
              </div>
              <div className="div">
                <h6 className={"title"}>
                  H2 - Jost Bold | 20px; 29px Line; -0.25 Spacing
                </h6>
                <h2 className="text">
                  Vestibulum volutpat acus a ultrices sagittis
                </h2>
              </div>
              <div className="div">
                <h6 className={"title"}>
                  H3 - Jost Bold | 18px; 26px Line; -0.25 Spacing
                </h6>
                <h3 className="text">
                  Pellentesque a diam sit amet mi ullamcorper vehicula
                </h3>
              </div>
              <div className="div">
                <h6 className={"title"}>
                  H4 - Jost Bold | 14px; 20px Line; -0.2 Spacing
                </h6>
                <h4 className="text">
                  Ut scelerisque hendrerit tellus. Integer sagittis
                </h4>
              </div>
            </div>
            <div className="col-6">
              <div className="div2">
                <h6 className="title">
                  Body 1 - Jost Regular | 16px; 23px Line
                </h6>
                <h6 className="text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                  nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                  pretium, ligula sollicitudin laoreet viverra, tortor libero
                  sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis.
                </h6>
              </div>
              <div className="div2">
                <h6 className="title">
                  Body 2 - Jost Regular | 15px; 22px Line
                </h6>
                <h6 className="text">
                  Sed egestas, ante et vulputate volutpat, eros pede semper est,
                  vitae luctus metus libero eu augue. Morbi purus libero,
                  faucibus adipiscing, commodo quis, gravida id, est. Sed
                  lectus. Praesent elementum hendrerit tortor. Sed semper lorem
                  at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                  neque euismod dui, eu pulvinar nunc sapien ornare nisl.
                  Phasellus pede arcu
                </h6>
              </div>
              <div className="div2">
                <h6 className="title">
                  Body 3 - Jost Semibold | 13px; 19px Line
                </h6>
                <h6 className="text">
                  Sed egestas, ante et vulputate volutpat, eros pede semper est,
                  vitae luctus metus libero eu augue. Morbi purus libero,
                  faucibus adipiscing, commodo quis, gravida id, est. Sed
                  lectus. Praesent elementum hendrerit tortor. Sed semper lorem
                  at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                  neque euismod dui, eu pulvinar nunc sapien ornare nisl.
                  Phasellus pede arcu
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="number">
        <div className="sonlar">
          <span>03</span>
        </div>
        <span className={"col"}>BUTTONS</span>
      </div>
      <div className="battonlar">
        <div className="flex">
          <div className="btnlar">
            <button className="btn">Button 1</button>
            <span>Default</span>
            <button className="btn2">Button 2</button>
            <span>Hover</span>
          </div>
          <div className="btnlar">
            <button className="btn">Button 1</button>
            <span>Default</span>
            <button className="btn2">Button 2</button>
            <span>Hover</span>
          </div>
          <div className="btnlar">
            <button className="btn">Button 1</button>
            <span>Default</span>
            <button className="btn2">Button 2</button>
            <span>Hover</span>
          </div>
          <div className="btnlar">
            <button className="btn">Button 1</button>
            <span>Default</span>
            <button className="btn2">Button 2</button>
            <span>Hover</span>
          </div>
        </div>
        <div className="flex2">
          <div className="btnlar2">
            <button className="btn">
              {" "}
              <FaArrowLeft style={{ paddingTop: "7px", fontSize: "18px" }} /> Go
              Back
            </button>
            <span>Default</span>
            <button className="btn2">
              {" "}
              <FaArrowLeft
                style={{ paddingTop: "7px", fontSize: "18px" }}
              />{" "}
              <a href="#">Go Back</a>
            </button>
            <span>Hover</span>
          </div>
          <div className="btnlar2">
            <button className="btn" style={{ color: "#fff" }}>
              {" "}
              <FaArrowLeft style={{ paddingTop: "7px", fontSize: "18px" }} /> Go
              Back
            </button>
            <span>Default</span>
            <button className="btn2" style={{ color: "#fff" }}>
              <FaArrowLeft style={{ paddingTop: "7px", fontSize: "18px" }} />{" "}
              <a href="#" style={{ color: "#fff" }}>
                Go Back
              </a>
            </button>
            <span>Hover</span>
          </div>
        </div>
      </div>
      <div className="number">
        <div className="sonlar">
          <span>04</span>
        </div>
        <span className={"col"}>interactive elements </span>
      </div>
      <div className="el">
        <div className="elem">
        <div className="btnlar">
        <button className={'btn'}> <FaArrowUp className={'icon'}/> <span className={'number'}>99</span> </button>
            <span className={'title'}>Default</span> 
          </div>
          <div className="btnlar">
        <button className={'btn'}> <FaArrowUp className={'icon'}/> <span className={'number'}>99</span> </button>
            <span className={'title'}>Hover</span> 
          </div>
          <div className="btnlar">
        <button className={'btn'}> <FaArrowUp className={'icon'}/> <span className={'number'}>99</span> </button>
            <span className={'title'}>Active</span> 
          </div> 
        </div>
        <div className="elem">
        <div className="btnlar">
        <button className={'btn'}> UX </button>
            <span className={'title'}>Default</span> 
          </div>
          <div className="btnlar">
        <button className={'btn'}> UX </button>
            <span className={'title'}>Hover</span> 
          </div>
          <div className="btnlar">
        <button className={'btn'}  > UX </button>
            <span className={'title'}>Active</span> 
          </div>
        </div> 
         
      </div>
      <div className="number" style={{marginTop:'30px'}}>
        <div className="sonlar">
          <span>05</span>
        </div>
        <span className={"col"}>FORM ELEMENTS</span>
      </div> 
      <div className="frm">
        <div className="form">
          <div className="frmlar">
          <span className={'title'}>Text Field - Default</span>
          <Form1/>
          </div>
          <div className="frmlar">
          <span className={'title'}>Text Field - Filled</span>
          <Form2/>
          </div>
          <div className="frmlar">
          <span className={'title'}>Text Field - Active</span>
          <Form3/>
          </div>
          <div className="frmlar">
          <span className={'title'}>Text Field - Error</span>
          <Form4/>
          </div>
        </div>
        <div className="form">
          <div className="frmlar">
          <span className={'title'}>Dropdown - Default</span>
          <Section/>
          </div>
          <div className="frmlar">
          <span className={'title'}>Dropdown - Active</span>
          <Section2/>
          </div>
          <div className="frmlar">
          <span className={'title'}>Dropdown - Menu</span>
          <Section3/>
          </div>
          <div className="frmlar">
          <span className={'title'}>Dropdown - Error</span>
          <Section4/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Design;
