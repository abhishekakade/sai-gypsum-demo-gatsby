import React from "react"
import Layout from "../../components/layout"
import "../../components/Products/Products.css"

const MoistureResistant = () => {
  return (
    <Layout>
      <article className="product-details skip-nav">
        <section className="container-div">
          <h4 className="product-title">
            SIG - Moisture Resistant Gypsum Boards
          </h4>

          <p className="product-intro">
            <strong>SIG MR</strong> is produced from high purity natural gypsum
            core being sheeted in closely adhering paper liners.
            <strong> SIG MR</strong> is produced in compliance to
            <strong> ASTM C1396 and EN 520 standards. SIG MR</strong> is tested
            and certified by leading third party laboratories. They are produced
            in wide variety of length, width, thickness and edge types to cover
            the entire spectrum of the requirement.
          </p>
          <p className="product-intro">
            SIG MR due to its formulation offers higher level of moisture
            resistance as compared to Regular Plasterboard and is thus{" "}
            <em className="text-highlighter">
              used for dry wall partitions where higher level of moisture
              exposure is expected such as kitchens, washrooms, swimming pools,
              sauna etc.
            </em>
          </p>
          <p className="product-intro">
            SIG MR is laminated with green paper on face and grey paper on the
            back. It is
            <em className="text-highlighter">
              {" "}
              specially designed to perform in the interiors with high humidity.
            </em>{" "}
            It is designed for direct attachment by screws, nails or adhesive to
            wood or metal framing and even existing surfaces.
          </p>
        </section>

        <section className="table-section">
          <h5 className="product-subtitle">Details</h5>

          <table
            className="table one-col"
            style={{
              textAlign: "center",
              background: "white",
            }}
          >
            <thead className="thead">
              <tr>
                <th style={{ textAlign: "center" }} scope="col">
                  Length (mm)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Standard 1830</td>
              </tr>
              <tr>
                <td>Can produce Between 1800 - 4000</td>
              </tr>

              <tr>
                <th scope="col">Width (mm)</th>
              </tr>

              <tr>
                <td>Standard 1220</td>
              </tr>
              <tr>
                <td>Can Produce Between 1200 – 1220</td>
              </tr>

              <tr>
                <th scope="col">Thickness (mm)</th>
              </tr>

              <tr>
                <td>Standard 12.5mm</td>
              </tr>
              <tr>
                <td>On request: 15/18/19</td>
              </tr>
              <tr>
                <th scope="col">Edge</th>
              </tr>
              <tr>
                <td>Tapered</td>
              </tr>
              <tr>
                <th scope="col">Colour</th>
              </tr>
              <tr>
                <td>Face: Green, Back: Grey</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="table-section">
          <h5 className="product-subtitle">Specifications</h5>
          <table
            className="responsive table mr2"
            style={{
              textAlign: "center",
            }}
          >
            <caption>Properties (Per 12.5mm)</caption>
            <thead
              className="thead-dark"
              style={{
                textAlign: "center",
              }}
            >
              <tr>
                <th scope="col">Properties</th>
                <th scope="col">ASTM C1396</th>
                <th scope="col">DIN EN 520</th>
                <th scope="col">SIG – MR</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Thickness (mm)</td>
                <td>&plusmn; 0.4</td>
                <td>&plusmn; 0.5</td>
                <td>&plusmn; 0.3</td>
              </tr>
              <tr>
                <td>Length (mm)</td>
                <td>0 to -6</td>
                <td>0 to -5</td>
                <td>0 to -4</td>
              </tr>
              <tr>
                <td>Width (mm)</td>
                <td>0 to -3</td>
                <td>O to -4</td>
                <td>0 to -3</td>
              </tr>
              <tr>
                <td>Squareness</td>
                <td>&le; 3</td>
                <td>&le; 2.5</td>
                <td>&le; 2</td>
              </tr>
              <tr>
                <td>Flexural Strength (N) Longitudinal</td>
                <td>&ge; 489</td>
                <td>&ge; 550</td>
                <td>&ge; 630</td>
              </tr>
              <tr>
                <td>Flexural Strength (N) Transverse</td>
                <td>&ge; 178</td>
                <td>&ge; 210</td>
                <td>&ge; 260</td>
              </tr>
              <tr>
                <td>Core Hardness (N)</td>
                <td>&ge; 67</td>
                <td>Not Specified</td>
                <td>&ge; 100</td>
              </tr>

              <tr>
                <td>End hardness (N)</td>
                <td>&ge; 67</td>
                <td>Not Specified</td>
                <td>&ge; 100</td>
              </tr>

              <tr>
                <td>Edge Hardness (N)</td>
                <td>&ge; 67</td>
                <td>Not Specified</td>
                <td>&ge; 100</td>
              </tr>

              <tr>
                <td>Nail Pull (N)</td>
                <td>&ge; 356</td>
                <td>Not Specified</td>
                <td>&ge; 360</td>
              </tr>

              <tr>
                <td>
                  Weight (kg/m<sup>2</sup>)
                </td>
                <td>-</td>
                <td>-</td>
                <td>9.5 &plusmn; 0.2</td>
              </tr>

              <tr>
                <td>Water Absorption</td>
                <td>&le; 5.0%</td>
                <td>H-1, H-2, H-3</td>
                <td>3%</td>
              </tr>

              <tr>
                <td>Surface Water Absorption</td>
                <td>&le; 1.5%</td>
                <td>-</td>
                <td>1.04%</td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    </Layout>
  )
}

export default MoistureResistant
