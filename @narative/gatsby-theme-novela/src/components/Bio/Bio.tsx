import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Image from '@components/Image';
import { IAuthor } from '@types';
import mediaqueries from "@styles/media";


function Bio({ author }: IAuthor) {
  return (
    <BioContainer>
      <BioAvatar
        as={author.authorsPage ? Link : 'div'}
        to={author.slug}
        data-a11y="false"
        aria-label="Author's bio"
      >
        <BioAvatarInner>
          <Image src={author.avatar.medium} />
        </BioAvatarInner>
      </BioAvatar>
      <TextContainer>
        <BioLabel
        style={{ marginBottom: '5px', }}>
          Featured Author: <BioLink to={author.slug}>{author.name}</BioLink></BioLabel>
        <BioText dangerouslySetInnerHTML={{ __html: author.bio }} />
      </TextContainer>
    </BioContainer>
  );
}

export default Bio;

const TextContainer = styled.div`
  display: block;

`

const BioLabel = styled('h3')`
  color: ${p => p.theme.colors.primary};
  font-weight: 500;
  font-size: 18px;
  font-family: 'GT America Cond';
  ${mediaqueries.phablet`
    font-size: 18px;
  `};
  ${mediaqueries.phone_small`
    font-size: 15px;
  `};
`

const BioLink = styled(Link)`
  color: ${p => p.theme.colors.articleText};
  border-bottom: 1px solid;
  border-color: ${p => p.theme.colors.articleText};
`
const BioContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;

const BioAvatar = styled.div`
  display: block;
  position: relative;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 16px;
  margin: 10px 26px 10px 10px;

  &::after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: 70px;
    height: 70px;
    border: 2px solid ${p => p.theme.colors.accent};
  }
`;

const BioAvatarInner = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 16px;
  overflow: hidden;
`;

const BioText = styled.p`
  max-width: 430px;
  font-size: 18px;
  line-height: 1.;
  font-weight: 300;
  color: ${p => p.theme.colors.primary};
  ${mediaqueries.desktop`
    
  `};

  ${mediaqueries.tablet`
    m
  `};

  ${mediaqueries.phablet`
    font-size: 16px;
  `};
  ${mediaqueries.phone_small`
    font-size: 14px;
  `};

  a {
    color: ${p => p.theme.colors.accent};
    text-decoration: underline;
  }
`;
