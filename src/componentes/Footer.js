import React from "react";
import styled from 'styled-components';

export default function Footer() {
    return (
        <Box>
            <h1 style={{
                color: "var(--mainYellow)",
                textAlign: "center",
                marginTop: "-50px"
            }}>
                NossoQueijo
            </h1>
            <Container>
                <Row>
                    <Column>
                        <Heading>Sobre nós</Heading>
                        <FooterLink href="#">Humberto Júnior</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};

export const Box = styled.div`
  padding: 80px 60px;
  background: var(--mainDark);
  margin: auto;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 60px 30px;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: auto;
    width: 50%;
    padding: 10px;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  font-size: 14px;
  text-decoration: none;
   
  &:hover {
      color: var(--lightBlue);
      transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 20px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;