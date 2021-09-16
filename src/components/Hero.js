import React from 'react';
import styled from 'styled-components';
import bkimg from '../assets/bkimg.jpg';

const Section = styled.section` 
    background-image: url(${bkimg});
    height: 785px;
    display: block;
    background-repeat: no-repeat;
    background-size: contain;
`;
const Content = styled.div`
    width: 100px;
    height: 100px;
`;
const Left = styled.div`
    padding-left:220px;
    padding-top:143px;
`;
const Title = styled.p`
    font-size: 55px;
    color: red;
    font-weight: 400;
`;
const Desc = styled.p`
    width: 472px;
    font-size: 20px;
    color: white;
    line-height: 30px;
    margin-top: 58px;
`;
const Button = styled.a``;


const Hero = () => {
    return (
        <div>
            <Section>
                <Content>
                    <Left>
                        <Title>Get twofree stox!<br />Get Rich!!</Title>
                        <Desc> Open account NOW!!!</Desc>
                            <Button />

                    </Left>
                </Content>
            </Section>
        </div>
    )
}

export default Hero;