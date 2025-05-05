import React from 'react'
import blogheader1 from '../assets/Image/blogheader1.png'
import image1 from '../assets/Image/image1.png'
import image2 from '../assets/Image/image2.png'
import image3 from '../assets/Image/image3.png'
import image4 from '../assets/Image/image4.png'
import image5 from '../assets/Image/image5.png'
import Social from '../Components/Social'
function BlogContent() {
    return (
        <>
            <div className="container-fluid p-0 m-0">
                <img
                    src={blogheader1}
                    alt="img"
                    className="img-fluid w-100"
                />
            </div>
            {/* container2 */}
            <div className="container my-5 text-center">
                <h2 className="mb-3 fw-bold" style={{ color: "#0D4F36" }}>The Ultimate Guide to <br />Indoor Plants</h2>

                <p className="mb-4 fs-3 fw-semibold mt-5">
                    Indoor Plants should be an essential component of every interior design. Greenery
                    brightens up indoor spaces and is known to have mood-boosting qualities.
                </p>
                <p className="mb-4 fs-3 fw-semibold">Indoor plants are popular because they are relatively easy to take care of, provide
                    health benefits and can be used in a variety of indoor décor themes. Indoor plants
                    are a great option for those who have little yard space for an outdoor garden or for
                    those who live in climates with severely cold winters.</p>
                <p className="mb-4 fs-3 fw-semibold">So, if you're caring for indoor plants for the first time, our ultimate guide will provide
                    you with the necessary information to allow your green friends to thrive.</p>
                <p className="mb-4 fs-3 fw-semibold">To provide you with expert insight, we asked our Senior Horticulturist at Ambius, Matt
                    Kostelnick, to answer the most frequently asked questions about indoor plants.</p>
                <img
                    src={image1}
                    alt="img"
                    className="img-fluid"
                />
                <h2 className="mb-3 fw-bold mt-4" style={{ color: "#0D4F36" }}>What are indoor plants?</h2>
                <p className="mb-4 fs-3 fw-semibold"> Indoor plants are plants that grow indoors. There are a variety of tropical plants, like
                    palms, that thrive in indoor environments.</p>
                <h2 className="mb-3 fw-bold mt-4" style={{ color: "#0D4F36" }}>How do you plant indoor plants?</h2>
                <p className="mb-4 fs-3 fw-semibold">Most of the time, indoor plants are already in containers, so there is no need to plant
                    them. There are typically only two reasons you need to plant an indoor plant.</p>
                <div>
                    <span className="mb-4 fs-3 fw-semibold">1. If your plant is getting too big, then you will need to replant.</span><br />
                    <span className="mb-4 fs-3 fw-semibold">2. If you wanted to grow bulbs indoors, then you will need to plant the bulbs <br />yourself.</span>
                </div>

                <div className="container py-4 w-50">
                    <div className="gallery">
                        <img className="blog1 img-grid" src={image2} alt="img1" />
                        <img className="blog2 img-grid" src={image3} alt="img2" />
                        <img className="blog3 img-grid" src={image4} alt="img3" />
                    </div>
                </div>
                <h2 className="mb-3 fw-bold mt-4" style={{ color: "#0D4F36" }}> How much light do indoor plants need?</h2>
                <p className="mb-4 fs-3 fw-semibold">Succulents and cacti need continuous, daily sunlight. Plants with foliage need roughly 8hours of light per day. The amount of light depends on the plants you are growing, so we suggest doing research on the specific plants you are growing.</p>

                <div className="container text-center px-3 py-4">
                    <h2 className="mb-3 fw-bold mt-4" style={{ color: "#0D4F36" }}>What qualities make for a good indoor plant?</h2>
                    <p className="mb-2 fw-semibold fs-3">
                        There are several qualities to look for when selecting an indoor plant.
                    </p>
                    <ol className="text-start mx-auto fw-semibold fs-3">
                        <li className="mb-2 ">
                            <p>A good root system - This is incredibly important when choosing a plant. It's not practical to pull a plant out of its pot to check its roots but if it is a small plant, this can be done. Healthy roots are thick and light in color.</p>
                        </li>
                        <li className="mb-2">
                            <p>Foliage - Here's a good rule of thumb when it comes to plant foliage: if you can't see through it, the foliage is thick enough.</p>
                        </li>
                        <li>
                            <p>Check for disease - Some signs of a plant with pests or disease are: white dots, sticky residue on the leaves and a bad odor.</p>
                        </li>
                    </ol>

                    <h2 className="mb-3 fw-bold mt-4" style={{ color: "#0D4F36" }}>Which indoor plants require low light?</h2>
                    <p className="fw-semibold fs-3 mb-3">
                        Indoor plants that need little light could be good fits for locations where light is dimmer. Some plants that require low light are:
                    </p>
                    <ul className="text-start mx-auto fw-semibold fs-3">
                        <li className="mb-2">
                            Philodendron - A very common indoor plant that rarely attracts pests. It's a hearty plant that is adaptable to various environments.
                        </li>
                        <li className="mb-2">
                            Pothos or Devil's Ivy - A plant with colorful and vibrant leaves. This plant does great in a variety of environments, thriving in low light or in bright, indirect light.
                        </li>
                        <li className="mb-2">
                            Dracaena - This is another popular indoor plant with long green leaves. This is one indoor plant you will want to prune if foliage gets too long.
                        </li>
                        <li>
                            Peace Lily - This plant thrives best when the soil is moist, but not over watered. If you want flowers to appear on your peace lily plant, move your plant to a darker room.
                        </li>
                    </ul>
                </div>
                <img
                    src={image5}
                    alt="img"
                    className="img-fluid"
                />
                <h2 className="mb-3 fw-bold mt-4" style={{ color: "#0D4F36" }}> Which indoor plants are the easiest to take care of?</h2>
                <p className="mb-4 fs-3 fw-semibold"> Below is a list of indoor plants that are easy to take care of:</p>
                <ul className="fw-semibold fs-3" style={{ listStylePosition: "inside", textAlign: "center" }}>
                    <li>Sansevieria</li>
                    <li>Philodendro</li>
                    <li>Most succulents
                        <ul style={{ listStylePosition: "inside", listStyleType: "disc" }}>
                            <li>Pothos</li>
                            <li>ZZ plant</li>
                        </ul>
                    </li>
                </ul>
                <h2 className="mb-3 fw-bold mt-4" style={{ color: "#0D4F36" }}> Which plants are considered indoor plants?</h2>
                <p className="mb-4 fs-3 fw-semibold"> Plants that require a low amount of light and water to thrive are typically known as
                    indoor plants. Ambius considers these plants as examples of common indoor plants:</p>
                <ul className="fw-semibold fs-3" style={{ listStylePosition: "inside", textAlign: "center" }}>
                    <li>Dracaena</li>
                    <li>Hedera Helix</li>
                    <li>Sansevieria Zeylanica Superba</li>
                    <li>Scindapsus</li>
                </ul>

                <p className="mb-4 fs-3 fw-semibold">You likely learned about a process called photosynthesis in grade school
                    science class. During photosynthesis, plants capture sunlight and convert it into
                    energy. In order to survive and maintain strength, plants will strive to get as
                    much sunlight as they can. In darker environments, plants sometimes stretch to
                    receive as much light as possible — possibly from a nearby window or another
                    light source. This stretching is called etiolation. You likely learned about a
                    process called photosynthesis in grade school science class. During
                    photosynthesis, plants capture sunlight and convert it into energy. You likely
                    learned about a process called photosynthesis in grade school science class.
                    During photosynthesis, plants capture sunlight and convert it into energy.</p>
            </div>
            <Social />



        </>
    )
}

export default BlogContent