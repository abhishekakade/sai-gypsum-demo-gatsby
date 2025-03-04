import React from "react"
import { CheckSquare, PlusSquare } from "styled-icons/fa-solid"
import Layout from "../components/layout"
import "../components/Products/Products.css"

const Tiles = () => {
  return (
    <Layout>
      <article className="product-details skip-nav">
        <section className="container-div">
          <h4 className="product-title">SIG – Tiles</h4>

          <p className="product-intro">
            <strong>SIG – Tiles</strong> are laminated with&nbsp;
            <em className="text-highlighter">PVC film</em> on the face
            side,&nbsp;
            <em className="text-highlighter">Metalised Polyester film</em> on
            the backside. They are mainly used in Offices, Hospitals, High Rise
            Buildings, Malls, etc. They provide the standard&nbsp;
            <em className="text-highlighter">
              light reflectance of more than 70%.
            </em>
          </p>
        </section>

        <section className="container-div">
          <div
            className="main-list-container"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              // negative marginTop to negate the top margin on list-container divs
              marginTop: "-1rem",
            }}
          >
            <div
              className="list-container"
              style={{
                display: "block",
                margin: "1rem",
                border: "2px solid black",
                borderRadius: "5px",
              }}
            >
              <h5
                className="product-subtitle"
                style={{
                  padding: "0.5rem 2rem",
                }}
              >
                Available in 3 Designs
              </h5>
              <ul className="list-group">
                <li>
                  <CheckSquare className="checksquare" size="1rem" />
                  SIG-154
                </li>
                <li>
                  <CheckSquare className="checksquare" size="1rem" />
                  SIG-569
                </li>
                <li>
                  <CheckSquare className="checksquare" size="1rem" />
                  SIG-975
                </li>
                <li>Size: 595 x 595 x 7mm</li>
              </ul>
            </div>

            <div
              className="list-container"
              style={{
                display: "block",
                margin: "1rem",
                border: "2px solid black",
                borderRadius: "5px",
              }}
            >
              <h5 className="product-subtitle">Advantages</h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <PlusSquare className="plussquare" size="1rem" />
                  Easy to Install
                </li>
                <li className="list-group-item">
                  <PlusSquare className="plussquare" size="1rem" />
                  Maintenance Free
                </li>
                <li className="list-group-item">
                  <PlusSquare className="plussquare" size="1rem" />
                  Long-lasting
                </li>
                <li className="list-group-item">
                  <PlusSquare className="plussquare" size="1rem" />
                  No Emission of Harmful Chemicals
                </li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default Tiles
