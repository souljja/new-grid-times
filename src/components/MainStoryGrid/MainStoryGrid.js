import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import {QUERIES} from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionsList>
          {OPINION_STORIES.map((story) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionsList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  --list-gap: 32px;
  display: flex;
  flex-direction: column;
  gap: var(--list-gap);
  
  a + a {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      height: 1px;
      top: calc(-1 * var(--list-gap) / 2);
      left: 0;
      width: 100%;
      transform: translateY(-50%);
      background-color: var(--color-gray-300);
    }
  }
`;

const OpinionsList = styled(StoryList)`
  @media (${QUERIES.tabletOnly}) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(172px, 100%),1fr));
    
    a + a {
      position: revert;
      &::before {
        content: none;
      }
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

const Wrapper = styled.div`
  --gap-basis: 32px;
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: calc(var(--gap-basis) * 1.5);
  margin-bottom: calc(var(--gap-basis) * 1.5);

  @media (${QUERIES.tabletOnly}) {
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories'
    ;
    grid-template-columns: 2fr minmax(252px, 1fr);
  }
  
  @media (${QUERIES.tabletAndUp}) {
    gap: var(--gap-basis);

    ${MainStorySection} {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 1px;
        top: 0;
        right: calc(-1 * var(--gap-basis) / 2);
        transform: translateX(-50%);
        background-color: var(--color-gray-300);
      }
    }
  }
  
  @media (${QUERIES.laptopAndUp}) {
    grid-template-areas:
    'main-story secondary-stories opinion-stories'
    'main-story advertisement advertisement'
    ;
    grid-template-columns: 3fr 2fr minmax(273px,1fr);

    ${SecondaryStorySection} {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 1px;
        top: 0;
        right: calc(-1 * var(--gap-basis) / 2);
        transform: translateX(-50%);
        background-color: var(--color-gray-300);
      }
    }

    ${AdvertisementSection} {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        height: 1px;
        width: 100%;
        left: 0;
        top: calc(-1 * var(--gap-basis) / 2);
        transform: translateY(-50%);
        background-color: var(--color-gray-300);
      }
    }
  }
`;

export default MainStoryGrid;
