import React from "react";
import styled from "@emotion/styled";

import Image from "@components/Image";

import mediaqueries from "@styles/media";
import { IAuthor } from "@types";

import SocialLinks from "@components/SocialLinks";

interface AuthorHeroProps {
  author: IAuthor;
}

const AuthorHero = ({ author }: AuthorHeroProps) => {
  return (
    <Hero>
      <HeroImage>
        <Image src={author.avatar.large} />
      </HeroImage>
      <Heading>{author.name}</Heading>
      <Subheading>{author.bio}</Subheading>
      <Social>
        <SocialLinks links={author.social} />
      </Social>
    </Hero>
  );
};

export default AuthorHero;

const Hero = styled.div`
  margin-top: 90px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroImage = styled.div`
  position: relative;
  z-index: 1;
  height: 164px;
  width: 164px;
  margin-bottom: 35px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid ${p => p.theme.colors.background};
  box-shadow: 0px 15.619px 31.2381px rgba(0, 0, 0, 0.15);

  ${mediaqueries.tablet`
    width: 146px;
    height: 146px;
  `}

  ${mediaqueries.phablet`
    width: 136px;
    height: 136px;
    margin-bottom: 25px;
  `}
`;

const Heading = styled.h1`
  font-size: 48px;
  font-family: "Noe Text";
  color: ${p => p.theme.colors.primary};
  margin-bottom: 5px;
  font-weight: 700;

  ${mediaqueries.tablet`
  `}

  ${mediaqueries.phablet`
  `}
`;

const Subheading = styled.p`
  margin: 0 auto;
  max-width: 450px;
  color: ${p => p.theme.colors.primary};
  font-size: 18px;
  font-family: ${p => p.theme.fonts.sansSerif};
  line-height: 1.4;
  
  text-align: center;

  ${mediaqueries.phablet`
    font-size: 16px;
  `}
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 40px;

  ${mediaqueries.desktop`
    font-size: 15px;
  `}
`;
