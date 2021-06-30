import React, { FC } from 'react'
import { ApolloError } from '@apollo/client'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
const Error: FC<{ error: ApolloError }> = ({ error }) => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "blue-404.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)
    return (
        <div className="blue-holder-border">
            <div className="small-image">
                <GatsbyImage
                    alt=""
                    image={
                        data.image1.childImageSharp
                            .gatsbyImageData
                    }
                />
            </div>
            <p className="small-image-holder">Error! ${error.message}</p>
        </div>
    )
}

export default Error

