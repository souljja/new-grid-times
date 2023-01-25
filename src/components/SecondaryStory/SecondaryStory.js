import React from 'react';
import styled from 'styled-components/macro';
import {QUERIES} from "../../constants";

const SecondaryStory = ({id, title, image, location, abstract}) => {
    return (
        <a href={`/story/${id}`}>
            <Wrapper>
                <Image alt={image.alt} src={image.src}/>
                <Abstract>
                    <Heading>{title}</Heading>
                    <Info>{abstract}</Info>
                </Abstract>
            </Wrapper>
        </a>
    );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-areas:
    'image heading'
    'image abstract';
  gap: 4px 16px;
  grid-template-columns: 120px 1fr;
  color: var(--color-gray-900);

  @media (${QUERIES.tabletOnly}) {
    grid-template-areas:
      'image'
      'heading'
      'abstract'
  ;
    gap: 4px 16px;
    grid-template-columns: 1fr;
  }
`;

const Image = styled.img`
  grid-area: image;
  display: block;
  width: 100%;
  height: 120px;
  border-radius: 4px;
  object-fit: cover;
`;

const Heading = styled.h2`
  grid-area: heading;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.5rem;
  /* Optical alignment */
  margin-top: -2px;
`;

const Abstract = styled.div`
  grid-area: abstract;
`;

const Info = styled.p`
  font-size: 1rem;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export default SecondaryStory;
