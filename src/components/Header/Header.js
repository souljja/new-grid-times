import React from 'react';
import styled from 'styled-components/macro';
import {Menu, Search, User} from 'react-feather';

import {QUERIES} from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
    const commonActions = (
        <ActionGroup>
            <button>
                <Search size={24}/>
            </button>
            <button>
                <Menu size={24}/>
            </button>
        </ActionGroup>
    );

    return (
        <HeaderWrapper>
            <SuperHeader>
                <Row>
                    {commonActions}
                    <ActionGroup>
                        <button>
                            <User size={24}/>
                        </button>
                    </ActionGroup>
                </Row>
            </SuperHeader>
            <MainHeader>
                <CommonActions>
                    {commonActions}
                </CommonActions>
                <Logo/>
                <SubscribeActions>
                    <Button>Subscribe</Button>
                    <AlreadySubscriberLink>Already a subscriber?</AlreadySubscriberLink>
                </SubscribeActions>
            </MainHeader>
        </HeaderWrapper>
    );
};


const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: var(--color-white);
`;

const HeaderWrapper = styled.header`
  @media (${QUERIES.laptopAndUp}) {
    ${SuperHeader} {
      display: none;
    }
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */

  svg {
    display: block;
  }
`;

const CommonActions = styled.div`
  display: none;
  justify-self: start;
`;

const SubscribeActions = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  align-self: end;
  justify-self: end;
`;

const AlreadySubscriberLink = styled.a`
  font-style: italic;
  font-weight: var(--font-weight-normal);
  font-size: 0.875rem;
  line-height: 1.375rem;
  text-decoration-line: underline;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  
  @media (${QUERIES.tabletAndUp}) {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media (${QUERIES.laptopAndUp}) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-content: revert;
    margin-top: 16px;
    ${CommonActions} {
      display: block;
    }
    
    ${SubscribeActions} {
      display: flex;
    }
  }
`;

export default Header;
