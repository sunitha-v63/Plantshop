import React from 'react'
import ImageGallery from '../Components/ImageGallery'

function Privacy() {
    return (
        <>
            <div className="container-fluid p-0 m-0" style={{
                backgroundColor: "#EAF6EF",
                height: "90px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h2 className="fw-bold"> Privacy Policy</h2>
            </div>
            <div className="container about-section">
                <h5>PRIVACY POLICY</h5>
                <p>
                    Sonee Sports works to ensure that your privacy is protected when using our website. We
                    have a policy setting out how your personal data will be processed and protected.
                    Applicable law and our practices change over time. If we decide to update our Policy, we
                    will post the changes on this site. You should check this page from time to time to ensure
                    that you are happy with any changes.<br />Your Personal Data<br />
                    In providing your personal data, you consent to us using the data collected in order to
                    meet our commitments to you and to provide you with the service you expect. We need
                    your data for the following purposes
                </p>
                <ul className="text-start mx-auto">
                    <li><p>To create your personal account at Sonee Sports (i.e. your name and email address)</p></li>
                    <li><p>To validate that you are of legal age for shopping online (i.e. date of birth).</p></li>
                    <li><p>To process your orders through our website (i.e. your name, postal address, and mode
                        of payment)</p></li>
                    <li><p>To send you marketing offers such as newsletters and latest sports Sonee affiliated
                        events (i.e. your name and email address).</p></li>
                    <li><p> To update and contact you in the event of any problems with the delivery of your
                        items (i.e. contact number, address).</p></li>
                    <li><p> To answer your queries and to inform you of important updates (i.e. your email
                        address).</p></li>
                    <li><p> To notify the winners in competitions arranged online if in case you joined (i.e. your
                        email address, name, home address and telephone number).</p></li>
                    <li><p> To analyze your personal data to provide you with relevant marketing offers and
                        information (i.e. name, buying habits).</p></li>
                </ul>
                <p>We will only keep your data for as long as necessary to carry out our services to you and
                    for as long as we are required by the Maldivian laws. After this, your personal data will be
                    deleted. We cannot remove your data when there is a legal storage requirement, such as
                    for taxation purposes or anything legally important held by the Maldivian Laws.
                    User Profile Image Upload - Sonee Sports Mobile App</p>
                <p>At Sonee Sports Mobile App, we are committed to safeguarding the privacy of our users.
                    This Privacy Policy outlines how we collect, use, disclose, and protect your personal
                    information, particularly concerning user profile image uploads. By using our services
                    and uploading your profile image, you agree to the terms outlined in this policy.
                    Information We Collect:<br />When you upload a profile image on Sonee Sports, we may collect the following
                    information.</p>
            </div>
            <ImageGallery />
        </>
    )
}

export default Privacy