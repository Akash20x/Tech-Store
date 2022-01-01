import React from 'react';
import Footer from './footer';
import Icon from './icons';

export default function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>About Us</Footer.Title>
                        <Footer.Link href="#">Your Experience</Footer.Link>
                        <Footer.Link href="#">Privacy Policy</Footer.Link>
                        <Footer.Link href="#">Order Tracking</Footer.Link>
                        <Footer.Link href="#">
                            Delivery Terms & Conditions
                        </Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Help</Footer.Title>
                        <Footer.Link href="#">How to Order</Footer.Link>
                        <Footer.Link>EMI Policy</Footer.Link>
                        <Footer.Link href="#">
                            Warranty & Refund Policy
                        </Footer.Link>
                        <Footer.Link href="#">Procedures of Refund</Footer.Link>
                        <Footer.Link href="#">
                            How to Exchange Any Device
                        </Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Contact Us</Footer.Title>
                        <Footer.Link>
                            <Icon className="fas fa-home" />
                            My Shop
                        </Footer.Link>
                        <Footer.Link>
                            <Icon className="fas fa-map-marker-alt" />
                            Lorel ipsum
                        </Footer.Link>
                        <Footer.Link>
                            <Icon className="fas fa-phone-alt" />
                            4327473242
                        </Footer.Link>
                        <Footer.Link>
                            <Icon className="fas fa-envelope" />
                            sample@email.com
                        </Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Social</Footer.Title>
                        <Footer.Link href="https://www.facebook.com/">
                            <Icon className="fab fa-facebook-f" />
                            Facebook
                        </Footer.Link>
                        <Footer.Link href="https://www.instagram.com/">
                            <Icon className="fab fa-instagram" />
                            Instagram
                        </Footer.Link>
                        <Footer.Link href="https://www.youtube.com/">
                            <Icon className="fab fa-youtube" />
                            Youtube
                        </Footer.Link>
                        <Footer.Link href="https://twitter.com/">
                            <Icon className="fab fa-twitter" />
                            Twitter
                        </Footer.Link>
                    </Footer.Column>
                </Footer.Row>
                <Footer.LastRow>
                    <Footer.LastColumn>
                        <Footer.LastTitle>Created By Akash Jain</Footer.LastTitle>
                    </Footer.LastColumn>
                </Footer.LastRow>
            </Footer.Wrapper>
        </Footer>
    );
}
