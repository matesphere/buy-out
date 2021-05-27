import React from 'react'
import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import '../../../../scss/index.scss'
import Slider from 'react-slick'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import HelpIcon from '../../../../assets/help-icon.svg'

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    fadeIn: false,
    autoplay: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
}

const CommunityHousingPage = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "community-housing.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image2: file(relativePath: { eq: "community-buiness.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image3: file(relativePath: { eq: "community-campsite.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image4: file(relativePath: { eq: "community-forest.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image5: file(relativePath: { eq: "community-hydro.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image6: file(relativePath: { eq: "community-market.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image7: file(relativePath: { eq: "community-park.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image8: file(relativePath: { eq: "community-shop.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image9: file(relativePath: { eq: "community-wind.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            
        }
    `)

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 2 - Community</title>
            </Helmet>
            <main className="the-quest">
                <Header headerText="Stage 2" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Community
                            </h2>

                            <p className="sm-type-guitar sm-type-guitar--medium mb-2">
                                Click on the buttons, or swipe left below to see what the community and experts have to say.
                            </p>


                        </div>
                        <div className="col-lg-4">
                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">
                                <span className="side-icon side-icon-orange">
                                    <HelpIcon />
                                </span>
                                Helpful information
                            </p>
                            <div className="side-grey">
                                <p className="sm-type-amp">
                                    Hear from the community of Glenclas and experts.
                                    Find out what you need to move on to the
                                    next quest.
                                </p>
                                <p className="sm-type-amp">
                                    They all have facts and opinions about
                                    Glenclas.
                                </p>
                                <p className="sm-type-amp">
                                    <Link to="/student/stage-2">
                                        Back to Stage 2
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <Slider {...settings}>
                                <div className="side-grey">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <h2 className="sm-type-drum mb-2">Affordable Housing Scheme</h2>
                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">
                                                What are the key points of this development idea from your perspective?
                                            </p>
                                            <p className="sm-type-bigamp mb-2">
                                                If this community is to thrive and grow, we need to be able to provide more decent houses for people to live in. The houses that there are in the Glen are mostly large, old and expensive. A lot of them need work done on them and they are very expensive to heat.
                                            </p>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mt-4">
                                                <div className="community-holder mb-2">
                                                <GatsbyImage
                                                    image={
                                                        data.image1.childImageSharp
                                                            .gatsbyImageData
                                                    }
                                                />
                                                <p className="sm-type-amp sm-type-amp--medium">
                                                    Community member
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-lg-12">
                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">What problem does this idea solve for you?</p>

                                            <p className="sm-type-bigamp mb-2">As a young adult in this community, I can’t see myself ever being able to afford to buy a
                                                house here. When a house does come onto the market it is often snatched up by someone
                                                from the Central Belt or from England and this pushes the prices up. They then renovate the
                                                house and maybe add an extension which means that the next time that house comes on
                                                the market it is going to be even more expensive. There are very few houses in the Glen that
                                                are available for renting because landlords can make much more money by renting their
                                                houses out as holiday lets to tourists. On top of all of that, there are very few job
                                                opportunities locally, and the jobs that are available tend to be pretty low paid.</p>

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">Why do you think this is the right approach for yourself and the community?</p>

                                            <p className="sm-type-bigamp mb-2">I think that this is just what we need. The houses that could be built as part of this scheme would
                                                remain under the control of the Community and so the needs of people requiring somewhere to live
                                                in the Glen would be looked after. Not only will the rents be affordable to people on low incomes,
                                                but the houses they want to build will also be really energy efficient so that the heating cost per year
                                                will be very low.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="side-grey">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <h2 className="sm-type-drum mb-2">Business Hub Scheme</h2>

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">What are the key points of this development idea from your perspective?</p>
                                            <p className="sm-type-bigamp mb-2">This is a great community to live in, but there have to be opportunities for people to earn a living. We already have a few small businesses operating from the Glen, but I know that a lack of business facilities is preventing others from coming here and it is holding back some people who already live here and have dreams of running their own small business.</p>

                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mt-4">
                                                <div className="community-holder mb-2">
                                                    <GatsbyImage
                                                        image={
                                                            data.image2.childImageSharp
                                                                .gatsbyImageData
                                                        }
                                                    />
                                                    <p className="sm-type-amp sm-type-amp--medium">
                                                        Community member
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-lg-12">

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">What problem does this idea solve for you?</p>
                                            <p className="sm-type-bigamp mb-2">I am a jewellery maker and I have lived in this community for about 5 years. During that time, I have been making my jewellery in the spare bedroom of our house, which has worked reasonably well up until now. We have an addition to our family coming in a few months and we need the spare bedroom as a nursery. Having my own workshop in one of the units of the proposed Business Hub would allow me to expand what I do and might also allow me to employ an assistant.</p>

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">Why do you think this is the right approach for yourself and the community?</p>
                                            <p className="sm-type-bigamp mb-2">Creating a Business Hub would help to create a more vibrant community here in Glenclas. It would allow more people to make a living here and possibly provide further employment opportunities. This would mean that you would have more working age people, with families, living in the Glen as the place is in danger of becoming a community of retired people surrounded by loads of holiday homes. The Community would remain in control of the Hub and would set reasonable rents. The building planned would also be highly energy efficient so our overheads would be low. If it turns out to be a successful project, the Hub can easily be expanded by adding on extra units to bring even more businesses to the Glen.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="side-grey">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <h2 className="sm-type-drum mb-2">Campsite and Cabins Scheme</h2>

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">What are the key points of this development idea from your perspective?</p>
                                            <p className="sm-type-bigamp mb-2">I work in the Glenclas Inn and the tourist trade is really important to us. Obviously, we serve the local community but the extra business that the tourists bring, particularly in terms of our restaurant, is really important to us. Anything that improves the facilities for tourists is going to be good for the Glen and a campsite with spaces for caravans and campervans, together with cabins, would be great for us, because people who rent cottages tend to be much more self -contained and don’t eat out as much.</p>

                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mt-4">
                                                <div className="community-holder mb-2">
                                                    <GatsbyImage
                                                        image={
                                                            data.image3.childImageSharp
                                                                .gatsbyImageData
                                                        }
                                                    />
                                                    <p className="sm-type-amp sm-type-amp--medium">
                                                        Community member
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-lg-12">

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">What problem does this idea solve for you?</p>
                                            <p className="sm-type-bigamp mb-2">There is a problem in the Glen with campervans – people just stop overnight anywhere in the Glen, including in passing places on the single-track road. This can cause real problems when getting up and down the Glen at the height of the tourist season. Some people would still choose to park up somewhere other than in the campsite, but it would definitely reduce the problem.</p>

                                            <p className="sm-type-bigamp mb-2">There is also another, unfortunate, problem with people emptying their chemical toilets over walls, beside lay-bys – just about anywhere in fact. I know that this is a problem in many parts of Scotland where there aren’t facilities for people to dispose of their waste properly. A campsite with the appropriate facilities would solve this serious problem.</p>

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">Why do you think this is the right approach for yourself and the community?</p>
                                            <p className="sm-type-bigamp mb-2">Having a properly organised campsite would make it look like the Community is taking tourism seriously. This would both encourage more people to visit our Glen (and bring their money with them!) and give them a better experience while they are here. Word would then get around that Glenclas is a great place to take your holidays and after the Pandemic, more people are looking at spending holidays at home rather than abroad.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="side-grey">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <h2 className="sm-type-drum mb-2">Forestry Scheme</h2>

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">Can you sum up your development idea for us in simple terms?</p>
                                            <p className="sm-type-bigamp mb-2">I work in Conservation and the huge benefits, to both the local and global environment as well as to the local community, of restoring areas of Scotland to forest or woodland are well known.</p>
                                            <p className="sm-type-bigamp mb-2">The natural vegetation for this part of Scotland is birch, oak and hazel ‘broadleaf’ woodland. Once mature, these forests, unlike commercial coniferous plantations, become complex, stable ecosystems which provide a habitat to a vast range of species, many of which are becoming increasingly endangered. As more and more areas across the country are returned to forest, the richer the whole natural environment becomes. It also opens the door to some of the rewilding aspirations of many people in Scotland for species such as the lynx, and also to the recovery of species like the Scottish Wildcat, which is near extinction. This area already benefits from the presence of a breeding pair of White-tailed Sea Eagles which has become something of a local tourist attraction.</p>

                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mt-4">
                                                <div className="community-holder mb-2">
                                                <GatsbyImage
                                                    image={
                                                        data.image4.childImageSharp
                                                            .gatsbyImageData
                                                    }
                                                />
                                                <p className="sm-type-amp sm-type-amp--medium">
                                                    Expert
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-lg-12">

                                            <p className="sm-type-bigamp mb-2">Trees absorb large quantities of carbon dioxide as they grow and therefore become what is known as a ‘carbon sink’, storing the carbon and keeping it out of the atmosphere where it would otherwise contribute to global warming. Hence, planting a forest contributes to a global effort to reduce the concentration of carbon dioxide in the atmosphere.</p>

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">What do you believe this can bring in terms of improvements to the community here in Glenclas?</p>
                                            <p className="sm-type-bigamp mb-2">The presence of a broadleaved forest on the hill overlooking the village of Glenclas will undoubtedly enhance its scenic beauty. There is nothing that emphasises the changing seasons more than trees, as they colour up in spring, provide a mosaic of different shades of green through the summer and then turn to rich browns and yellow before the leaves finally fall, leaving the skeletal outlines of the trees to face the winter months.</p>

                                            <p className="sm-type-bigamp mb-2">A carefully planned path through the forest would provide a wonderful amenity for the local community as well as for visitors.</p>

                                            <p className="sm-type-bigamp mb-2">In the future, it would be possible to graze cattle within the forest at certain times of the year and so the land could also then be used for agricultural productivity.</p>

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">What is it about the development that you think will mean it will be viable and successful?</p>
                                            <p className="sm-type-bigamp mb-2">This is definitely a low-risk option for the Community as forestry schemes like this are being pushed very hard by the Government at the moment. The benefits of the scheme are very clear and there is funding available through Government schemes.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="side-grey">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <h2 className="sm-type-drum mb-2">Micro-hydro Scheme</h2>

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">Can you sum up your development idea for us in simple terms?</p>
                                            <p className="sm-type-bigamp mb-2">The West Coast of Scotland is famous for its rain, that falls surprisingly consistently throughout the year. This means that, although there can be dry or wet spells during each year, there is no dry or wet season. The topography of the land is inherently mountainous and these two factors combine to provide perfect opportunities to ‘harvest’ energy. Hydraulic power can be captured wherever a flow of water falls from a higher level to a lower level and two factors are required: a substantial Flow Rate of water (Q) and a significant vertical fall of the water, the Head (H). The high rainfall provides Q and the local topography provides H.</p>

                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mt-4">
                                                <div className="community-holder mb-2">
                                                <GatsbyImage
                                                    image={
                                                        data.image5.childImageSharp
                                                            .gatsbyImageData
                                                    }
                                                />
                                                    <p className="sm-type-amp sm-type-amp--medium">
                                                    Expert
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-lg-12">

                                            <p className="sm-type-bigamp mb-2">Loch na Lochain lies 150m above Glenclas village, with its outflow coming down the hillside to the south of the village. This loch provides both a potential storage of water which accumulates from a significant catchment area in the hills, ensuring a consistent Q and its height above the village ensures a good H.</p>

                                            <p className="sm-type-bigamp mb-2">The scheme would benefit the Community financially, as well as reducing the carbon emissions from the Community as this is a renewable source of energy.</p>

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">What do you believe this can bring in terms of improvements to the community here in Glenclas?</p>
                                            <p className="sm-type-bigamp mb-2">The most cost-effective way of making use of the electricity generated from a scheme like this is to sell it to the local community at a lower price than they pay to their current provider. In this way all of the community would reap the benefit of the scheme. However, the demand for electricity is not constant over 24 hours, unlike the generation of that electricity. There will therefore be a surplus at certain times, such as night time, and possibly a deficit at other, peak demand, times. The residents will therefore still need to be connected to the Grid, so that they can purchase some power from the existing provider, during peak times. Also, the Scheme would sell to the Grid (unfortunately at a low price) at low demand times. The benefit of selling some power to the Grid is that this would provide funds for other Community projects.</p>


                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">What is it about the development that you think will mean it will be viable and successful?</p>
                                            <p className="sm-type-bigamp mb-2">Hydro schemes, such as this use tried and tested technology, are extremely reliable, have relatively low maintenance costs and have very long life-spans; they could still be running after 100 years. Over this period of time a scheme pays for itself many times over, with the Community benefiting from the lower energy costs over that whole period of time.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="side-grey">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <h2 className="sm-type-drum mb-2">Market Garden Scheme</h2>

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">What are the key points of this development idea from your perspective?</p>
                                            <p className="sm-type-bigamp mb-2">This scheme makes use of 1 hectare of land at the eastern end of the area that has come up for sale. The idea is to produce fruit and vegetables for local consumption, selling to the Hotel and Lodge, as well as providing opportunities for selling to visitors who stay in the many holiday cottages and camp.</p>

                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mt-4">
                                                <div className="community-holder mb-2">
                                                <GatsbyImage
                                                    image={
                                                        data.image6.childImageSharp
                                                            .gatsbyImageData
                                                    }
                                                />
                                                    <p className="sm-type-amp sm-type-amp--medium">
                                                    Community member
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-lg-12">

                                            <p className="sm-type-bigamp mb-2">The weather conditions here make growing fruit and veg quite a challenge and so much of the growing would be done inside greenhouses or polytunnels. Another benefit of this is that they can be heated and lit through the winter and so growing could continue throughout the whole year.</p>

                                            <p className="sm-type-bigamp mb-2">The produce could be sold through the village shop, as long as some way is found to keep it open, direct ‘from the gate’ and also there is discussion about the possibility of having a ‘veg box’ delivery service.</p>

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">What problem does this idea solve for you?</p>
                                            <p className="sm-type-bigamp mb-2">I have lived in the Glen for most of my life and as I get older, I value my health more and more. I know that one of the keys to good health is having a good diet and thar eating lots of good quality fruit and veg, that is free from harmful (to us as well as the environment) chemicals, is really important.</p>

                                            <p className="sm-type-bigamp mb-2">When I was growing up in the Glen, the supply of fresh fruit and veg was really quite limited, particularly over the winter months. This situation has improved, but as I get older, I find it harder to travel all the way to our nearest supermarket to buy my fresh food and, unlike in other parts of the country, the supermarket won’t deliver to us all the way out here. Our village shop does sell some fruit and veg, but it’s not always that fresh and the future of the shop is uncertain at the moment.</p>

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">Why do you think this is the right approach for yourself and the community?</p>
                                            <p className="sm-type-bigamp mb-2">I think that there is a lot of support for this scheme from within the Community as there are many other people in my situation.  Not only would we be getting the health benefits from this locally grown food, but we would also be helping to reduce, what they call, ‘food miles’ and therefore helping to reduce the carbon footprint of our Community.</p>

                                            <p className="sm-type-bigamp mb-2">The Scheme will create a full-time Manager’s job but it could also provide opportunities for people like me to go along as a volunteer to help grow the food. This could be a great way of bringing some members of the Community together in a way that helps other people as well.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="side-grey">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <h2 className="sm-type-drum mb-2">Playpark and/or Skatepark Scheme</h2>

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">What are the key points of this development idea from your perspective?</p>
                                            <p className="sm-type-bigamp mb-2">The Playpark would have a rubberised safety surface and a variety of equipment, such as a climbing tower with a ‘high’ walkway, swings and roundabouts. It would be close enough to the primary school so that the kids could use it, under supervision, during their breaks and lunchtimes.</p>

                                            <p className="sm-type-bigamp mb-2">The skatepark would be professionally designed to make sure that it would be appropriate for the location and of a long-lasting design. It would have exciting skate-lines that fit comfortably within the surroundings with the aim to create a safe and stimulating experience.</p>

                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mt-4">
                                                <div className="community-holder mb-2">
                                                <GatsbyImage
                                                    image={
                                                        data.image7.childImageSharp
                                                            .gatsbyImageData
                                                    }
                                                />
                                                    <p className="sm-type-amp sm-type-amp--medium">
                                                    Community member
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-lg-12">

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">What problem does this idea solve for you?</p>
                                            <p className="sm-type-bigamp mb-2">When I was in Glenclas Primary School we didn’t have any equipment to play on in the playground. There were a few games marked out on the ground, but that was all. We had to make up our own games and lunchtimes, in particular, were really boring. To have a playpark that the Primary kids could use during their breaks and lunchtimes would make such a difference. Not only that, they would be able to use it at weekends and in the holidays, which I’m sure their parents would be really pleased about.</p>

                                            <p className="sm-type-bigamp mb-2">We have nothing in the Glen at the moment for teenagers and this inevitably leads to boredom and sometimes people getting into trouble. We really need something that brings young people together and even if not everyone is a skater, a skatepark would act as a focus for young people and would give them somewhere to meet together.</p>

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">Why do you think this is the right approach for yourself and the community?</p>
                                            <p className="sm-type-bigamp mb-2">The Glen needs to both attract young families and also keep them if it is to have a vibrant future. There therefore needs to be some investment in the young people of the Community. I know that there are various other schemes that are being considered, but most of them don’t include young people. The Glen also needs to attract in visitors and facilities like these, which keep the kids entertained, are going to make it more likely that families will want to spend their holidays here.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="side-grey">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <h2 className="sm-type-drum mb-2">Community Shop and Post Office</h2>

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">What are the key points of this development idea from your perspective?</p>
                                            <p className="sm-type-bigamp mb-2">Unless something is done, we are going to lose our shop and post office. The current shop keepers are due to retire and they have not been able to find anyone else to take on the lease from the local Landowner. He has said that he will lease the property as a residential house, although he has also indicated that he would be willing to include the sale of the property to the Community as part of the land buyout deal.</p>

                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mt-4">
                                                <div className="community-holder mb-2">
                                                <GatsbyImage
                                                    image={
                                                        data.image8.childImageSharp
                                                            .gatsbyImageData
                                                    }
                                                />
                                                    <p className="sm-type-amp sm-type-amp--medium">
                                                    Community member
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-lg-12">

                                            <p className="sm-type-bigamp mb-2">If the Community purchased the shop it would look for a Manager who would occupy the flat above the shop, which consists of 2 bedrooms, a kitchen, living room, study and bathroom. The shop would be staffed with volunteers from the Community, overseen by the Manager. This would mean that the hours worked by the Manager would not be as all-consuming as the current shop keepers have to work now. This is probably the reason why nobody has been found to take on the lease under the current arrangements.</p>

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">What problem does this idea solve for you?</p>
                                            <p className="sm-type-bigamp mb-2">It is 26 miles to the nearest town and this is just too far for some of our more elderly residents, like myself. We really rely on the shop for our weekly essentials and it also performs an important role as a meeting place where people can have a chat. It is also a place where local information is displayed and everybody can therefore keep up with what’s going on up and down the Glen. It is not an exaggeration to say that I, and many of my friends and neighbours would be lost without our shop.</p>

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">Why do you think this is the right approach for yourself and the community?</p>
                                            <p className="sm-type-bigamp mb-2">We can get funding to make the purchase of the property, but the start-up costs to get the new business up and running would have to be met by the Community buying shares in the business. Unlike other share options, there would be no dividends paid out to the shareholders and therefore there would be no annual return for those people who buy share. However, the ‘pay-back’ is that people would secure the future of their shop.</p>

                                            <p className="sm-type-bigamp mb-2">The other bonus of having a share option is that the Community would have a stake in how well the shop did in the future. It would encourage people to spend more money in our shop than they might have done before (even if they travel out of the Glen everyday for work) and it would make it more likely that people would want to volunteer to do a stint working in the shop, if only for a few hours a week.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="side-grey">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <h2 className="sm-type-drum mb-2">Wind Turbine Scheme</h2>

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">Can you sum up your development idea for us in simple terms?</p>
                                            <p className="sm-type-bigamp mb-2">The west of Scotland has some of the best, most reliable wind resources in the world. The hill to the south of Glenclas would provide an ideal site for a turbine as it provides an elevation that would give increased wind speed. Obviously there are days when the wind will not have sufficient velocity to turn the turbine, but these days are relatively few on the west coast.</p>

                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mt-4">
                                                <div className="community-holder mb-2">
                                                <GatsbyImage
                                                    image={
                                                        data.image9.childImageSharp
                                                            .gatsbyImageData
                                                    }
                                                />
                                                    <p className="sm-type-amp sm-type-amp--medium">
                                                    Expert
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-lg-12">

                                            <p className="sm-type-bigamp mb-2">Wind power provides clean, renewable energy with relatively straightforward construction and engineering challenges. There would need to be a carrow road/track constructed from the coast road to the base of the turbine to both allow the turbine itself to be brough in and also to give the construction and then maintenance crews access.</p>

                                            <p className="sm-type-bigamp mb-2">The is a perception that wind turbines are noisy, but the most recent generation of turbines are really very quiet. There has also already been an environmental impact survey carried out by a qualified ecologist and which has identified that this site for the turbine would not have a significant impact on the local wildlife. Most importantly, the local Sea Eagles do not come near to this site.</p>

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">What do you believe this can bring in terms of improvements to the community here in Glenclas?</p>
                                            <p className="sm-type-bigamp mb-2">The wind turbine could provide cheaper electricity for the community than the residents can buy from their existing suppliers. This would be the best way to utilise the electricity generated as selling onto the Grid would bring lower returns. However, it would still be necessary for the turbine to be connected to the grid as there will be times of low demand, such as at night, when the wind is blowing strongly when there is surplus electricity and that would need to be sold onto the Grid, even though the price paid would be lower than the residents would be paying.</p>

                                            <p className="sm-type-bigamp mb-2">The residents would also need to be connected to the Grid as there will be times of peak demand when the turbine would not fulfil the requirements of the Community and there will also be times when the wind is not blowing. At these times the residents will have to pay the standard (higher) rate to one of the energy companies.</p>

                                            <p className="sm-type-lead sm-type-lead-medium green-highlight mb-2">What is it about the development that you think will mean it will be viable and successful?</p>
                                            <p className="sm-type-bigamp mb-2">It would take about 12 years for the Scheme to start providing funding for community projects and the turbine could be expected to have a working life of 20 years. There would therefore be a period of 8 years when funds for projects would be available if the scheme itself was funded purely using a bank loan. It is very possible that with the increasing need to combat climate change, alternative funding streams will become available to, at least part, fund community renewable energy schemes such as this.3</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default CommunityHousingPage
