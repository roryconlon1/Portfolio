import React from "react";
import styled from "styled-components";

const HomePage = styled.div`
display: flex;
justify-content: space-between;
margin: 5px;
padding: 5px;`

const Picture = styled.img`
float: right;
padding-bottom: 100px;`

const Paragraph = styled.div`
display: flex;
flex-direction: column;`

const Heading = styled.h1`
margin: 5px;
padding: 5px;`

const Home = () => {

    return (
        <div>
            <Heading>Rory Conlon</Heading>
            <HomePage>
            <Paragraph>
                <p>adtfbdfbsfbsfbfbfbfb</p>
                <p>safgasrgsfsfbvsfbsfbvasfvsfvsvsv</p>
                <p>vsvsvsvsvsdvsdvsdvdsv</p>
                <p>sfSgvsdvsvsdvsdvsdvds</p>
                <p>Hello there</p>
            </Paragraph>
            {/* <Picture src={require(".//HENRIK-LARSSON-SCORES-KILMARNOCK-2000.jpeg")}></Picture> */}
            </HomePage>
        </div>
    )

}

export default Home;