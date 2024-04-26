import React from 'react';
import PriceCard from './PriceCard';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin: 30px 0;

  @media only screen and (max-width: 480px) {
    margin: 10px;
  }
`;

export default function Price() {

  const BasicElement = (
    <List>
      <ListItem>200 Hand-Crafted Templates</ListItem>
      <ListItem>Exclusive Support</ListItem>
      <ListItem>50+ PreBuilt Websites</ListItem>
      <ListItem>Basic Plugins</ListItem>{" "}
    </List>
  );

  const PremiumElement = (
    <List>
      <ListItem>500 Hand-Crafted Templates</ListItem>
      <ListItem>Exclusive Support</ListItem>
      <ListItem>100+ PreBuilt Websites</ListItem>
      <ListItem>Premium Plugins</ListItem>{" "}
    </List>
  );

  const AdvanceElement = (
    <List>
      <ListItem>1000 Hand-Crafted Templates</ListItem>
      <ListItem>Exclusive Support</ListItem>
      <ListItem>15+ PreBuilt Websites</ListItem>
      <ListItem>Advance Plugins</ListItem>{" "}
    </List>
  );

  return (
    <Container>
      <PriceCard
        price="10" 
        type="Basic" 
        ulElement={BasicElement}
      />
      <PriceCard
        price="35" 
        type="Premium" 
        ulElement={PremiumElement}
       />
      <PriceCard
       price="85" 
       type="Advance"
       ulElement={AdvanceElement}
       />
    </Container>
  );
}
