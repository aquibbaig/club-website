import React from "react";
import IndexContainer from "../containers/indexContainer";
import NavigationBar from "../components/Navigationbar";
//image imports
import { graphql } from "gatsby";
import Img from "gatsby-image";

export default props => (
  <div>
    <NavigationBar />
    <Img fluid={props.data.imageOne.childImageSharp.fluid} title="ZAIRZA" />
    <IndexContainer />
  </div>
);

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "index.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }
  }
`;
