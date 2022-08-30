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
                <p>I am studying towards becoming a Fullstack Junior Developer at CodeClan as part of their 16 week immersive Proffesional Software Development course. </p>
                <p>safgasrgsfsfbvsfbsfbvasfvsfvsvsv</p>
                
            </Paragraph>
            {/* <Picture src={require(".//HENRIK-LARSSON-SCORES-KILMARNOCK-2000.jpeg")}></Picture> */}
            </HomePage>
        </div>
    )

}

export default Home;