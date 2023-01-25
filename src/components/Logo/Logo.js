import React from 'react';
import styled from 'styled-components/macro';
import format from 'date-fns/format';
import {QUERIES} from "../../constants";

const Logo = (props) => {
  return (
    <Wrapper>
      <Link href="/" {...props}>
        New Grid Times
      </Link>
      <TodaysDate>
        {format(new Date(), 'EEEE, MMMM do, yyyy')}
      </TodaysDate>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const Link = styled.a`
  --current-value: calc(7.8vw + 1rem);
  font-family: var(--font-family-logo);
  font-size: clamp(3rem,
  var(--current-value),
  4rem);
  line-height: clamp(4rem,
  calc(var(--current-value) * 2),
  5.25rem);
`;

const TodaysDate = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  margin-top: -0.875rem;
  line-height: 1.5rem;
`;

export default Logo;
