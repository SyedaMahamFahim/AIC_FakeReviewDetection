import React from "react";
import { Link } from "react-router-dom";
import FooterData from "../../Data/FooterData";
const Footer = () => {
 
    
  return (
    <>
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#1c2331", marginTop: "150px" }}
      >
        <section
          className="d-flex justify-content-between p-4"
          style={{ backgroundColor: "#6351ce" }}
        >
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            {FooterData.filter(
              (category) => category.category === "SoicalFooterLinks"
            ).map((socialLinks, index) => (
              <FooterSocialComponent key={index} socialLinks={socialLinks} />
            ))}
          </div>
        </section>
        <section className>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">AIC</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                  provident totam mollitia minus aliquam, aut, dolorum ex
                  necessitatibus
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                {FooterData.filter(
                  (category) => category.category === "Products"
                ).map((productLinks, index) => (
                  <FooterProductComponent
                    key={index}
                    productLinks={productLinks}
                  />
                ))}
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                {FooterData.filter(
                  (category) => category.category === "Useful_Links"
                ).map((usefulLinks, index) => (
                  <FooterUsefulLinksComponent
                    key={index}
                    usefulLinks={usefulLinks}
                  />
                ))}
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                {FooterData.filter(
                  (category) => category.category === "Contact"
                ).map((contactLinks, index) => (
                  <FooterContactLinksComponent
                    key={index}
                    contactLinks={contactLinks}
                  />
                ))}
                
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © {new Date().getFullYear()} Copyright : 
         
          <Link
          to={{ pathname: "http://aiclub.rcai.pk" }}
          target="_blank"
          className="text-white"
        >
           {" "}AIC-NED 
        </Link>
        </div>
      </footer>
    </>
  );
};

const FooterSocialComponent = ({ socialLinks }) => {
  return (
    <>
      <Link
        to={{ pathname: socialLinks.url }}
        target="_blank"
        className="text-white me-4"
      >
        <socialLinks.iconName />
      </Link>
    </>
  );
};

const FooterProductComponent = ({ productLinks }) => {
  return (
    <>
      <p>
        <Link
          to={{ pathname: productLinks.url }}
          target="_blank"
          className="text-white"
        >
          {productLinks.title}
        </Link>
      </p>
    </>
  );
};

const FooterUsefulLinksComponent = ({ usefulLinks }) => {
  return (
    <>
      <p>
        <Link
          to={{ pathname: usefulLinks.url }}
          target="_blank"
          className="text-white"
        >
          {usefulLinks.title}
        </Link>
      </p>
    </>
  );
};

const FooterContactLinksComponent = ({ contactLinks }) => {
  return (
    <>
      <p>
        <contactLinks.iconName className="text-white"/> {contactLinks.title}
      </p>
    </>
  );
};
export default Footer;
