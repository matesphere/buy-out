import React, { FC } from 'react'
import { ApolloError } from '@apollo/client'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

export const Error: FC<{ error: ApolloError }> = ({ error }) => {
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
        <div className="blue-holder-border questies-holder">
            <div className="small-questies">
                <GatsbyImage
                    alt=""
                    image={data.image1.childImageSharp.gatsbyImageData}
                />
            </div>
            <p className="sm-type-lead small-questies-holder">Error! {error.message}</p>
        </div>
    )
}
