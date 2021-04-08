import React, { useState, useRef } from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 1px solid white;
  width: 100%;
  height: 84vh;
  margin-bottom: 85px;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 97vw;
`;

const StyledControlFields = styled.div`
  display: flex;
  margin: 5px;
`;

const breakPoints = [
  { width: 200, itemsToShow: 1 },
  { width: 600, itemsToShow: 2 },
];
const toggle = updater => () => updater(o => !o);

const CheckBox = ({ label, onToggle, ...rest }) => {
  return (
    <StyledControlFields>
      <label htmlFor={label}>{label}</label>
      <input {...rest} id={label} type="checkbox" onChange={toggle(onToggle)} />
    </StyledControlFields>
  );
};

const DemoApp = () => {
  const [items, setItems] = useState([1, 2, 3]);
  const [showArrows, setShowArrows] = useState(true);
  const [pagination, setPagination] = useState(true);
  const [verticalMode, setVerticalMode] = useState(false);
  const carouselRef = useRef();

  const goTo = ({ target }) => {
    carouselRef.current.goTo(Number(target.value));
  };

  return (
    <Layout>
      <Carousel
        ref={carouselRef}
        verticalMode={verticalMode}
        itemsToShow={1}
        pagination={pagination}
        showArrows={false}
      >
        {items.map(item => (
          <Item key={item}>{item}</Item>
        ))}
      </Carousel>
    </Layout>
  );
};

export default DemoApp;
