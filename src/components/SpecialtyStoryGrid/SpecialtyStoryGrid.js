import React from 'react';
import styled from 'styled-components/macro';

import {MARKET_DATA, SPORTS_STORIES} from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import {QUERIES} from "../../constants";

const SpecialtyStoryGrid = () => {
    return (
        <Wrapper>
            <MarketsSection>
                <SectionTitle
                    cornerLink={{
                        href: '/markets',
                        content: 'Visit Markets data »',
                    }}
                >
                    Markets
                </SectionTitle>
                <MarketCards>
                    {MARKET_DATA.map((data) => (
                        <MarketCard key={data.tickerSymbol} {...data} />
                    ))}
                </MarketCards>
            </MarketsSection>
            <SportsSection>
                <SectionTitle
                    cornerLink={{
                        href: '/sports',
                        content: 'Visit Sports page »',
                    }}
                >
                    Sports
                </SectionTitle>
                <SportsStories>
                    {SPORTS_STORIES.map((data) => (
                        <SportsStoryWrapper key={data.id}>
                            <MiniStory  {...data} />
                        </SportsStoryWrapper>
                    ))}
                </SportsStories>
            </SportsSection>
        </Wrapper>
    );
};

const MarketsSection = styled.section``;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(min(183px, 100%), 1fr));
`;

const SportsSection = styled.section`
  overflow: hidden;
`;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(min(183px, 100%), 1fr));

  @media (${QUERIES.tabletAndUp}) {
    grid-auto-flow: column;
    overflow: auto;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
`;

const SportsStoryWrapper = styled.div`
  @media (${QUERIES.tabletAndUp}) {
    min-width: 220px
  }
`;

const Wrapper = styled.div`
  --gap-basis: 32px;
  display: grid;
  gap: calc(var(--gap-basis) * 1.5);

  @media (${QUERIES.laptopAndUp}) {
    grid-template-columns: 1fr 1fr;
    gap: var(--gap-basis);

    ${MarketsSection} {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 1px;
        top: 0;
        right: calc(-1 * var(--gap-basis) / 2);
        transform: translateX(50%);
        background-color: var(--color-gray-300);
      }
    }
  }
`;

export default SpecialtyStoryGrid;
