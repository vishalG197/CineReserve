import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Foot>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
                nec, ultricies sed, dolor.
              </p>
            </div>
            <div class="col-md-4">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Movies</a>
                </li>
                <li>
                  <a href="#">Locations</a>
                </li>
                <li>
                  <a href="#">Sign In</a>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <h3>Contact Us</h3>
              <p>
                123 Main Street
                <br />
                Anytown, USA 12345
                <br />
                Phone: (123) 456-7890
                <br />
                Email: info@cinereserve.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Foot>
  );
};

export default Footer;

const Foot = styled.div`
/* Footer */
.footer {
  background-color: #333;
  color: #fff;
  padding: 50px 0;
}

.footer h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer p {
  font-size: 1.2rem;
  line-height: 1.5;
}

.footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer ul li {
  margin-bottom: 10px;
}

.footer ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
}

@media screen and (max-width: 768px) {
  .footer {
    text-align: center;
  }

  .footer h3 {
    margin-top: 20px;
  }

  .footer ul {
    margin-top: 20px;
  }
}

`;
