import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import "../css/main.css";

const Wrapper = styled("div")`
  margin: auto;
`

const Banner = styled("div")`

`

const Logo = styled("div")`
  position: absolute;
  top: 10px;
  left: 16px;
  width: 400px;
  height: 400px;
`

const InfoBox = styled("div")`
  position: absolute;
  top: 350px;
  left: 16px;
  color: white;
  font-size: 1.5em;
  font-family: lato, sans-serif;
`
const StayTuned = styled("div")`
  font-family: dodger;
  font-size: 3.5em;
  color: rgb(176, 34, 38);
  text-align: center;
`

const IndexPage = (props) => {

  return (
    <Wrapper>
      <Banner>
        <StaticImage
          src="../images/stay_tuned.png"
          alt="Stay tuned"/>
      </Banner>
      <Logo>
        <StaticImage
          src="../images/logo.png"
          alt="Adamobile logo"/>
      </Logo>
      <InfoBox>
        <p>Adamobiles are NFT-Collectables on the cardano blockchain</p>
        <p>You can buy, sell, or gift Adamobiles. Or simply enjoy them parked in your wallet</p>
      </InfoBox>
      <StayTuned>
        <p>Engines starting soon</p>
        <p>Stay tuned!</p>
      </StayTuned>
    </Wrapper>
  )
}

export default IndexPage
