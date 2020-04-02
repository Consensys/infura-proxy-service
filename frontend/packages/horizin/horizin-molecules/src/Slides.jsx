import React, { useEffect, useState } from "react";
import { useRef } from "react";
import useComponentSize from "@rehooks/component-size";
import { Component } from "@horizin/ui-compose";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonFirst,
  ButtonLast,
  DotGroup,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Flex } from "@horizin/atoms";
export const Slides = ({ children, ...props }) => {
  const [width, setWidth] = useState(props.naturalSlideHeight);
  const [height, setHeight] = useState(props.naturalSlideHeight);

  return (
    <CarouselProvider
      naturalSlideWidth={width}
      naturalSlideHeight={height}
      totalSlides={props.totalSlides}
      visibleSlides={props.visibleSlides}
    >
      <Slider>
        {props.items &&
          Array.isArray(props.items) &&
          props.items.map((item, index) => (
            <Slide index={index}>
              <ComponentResize
                item={item}
                setHeight={setHeight}
                setWidth={setWidth}
              />
            </Slide>
          ))}
      </Slider>
      <Flex center column sx={{ my: 3 }}>
        <Flex>
          <ButtonFirst>First</ButtonFirst>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
          <ButtonLast>Last</ButtonLast>
        </Flex>
        <DotGroup dotNumbers />
      </Flex>
    </CarouselProvider>
  );
};

const ComponentResize = ({ item, setHeight, setWidth }) => {
  let ref = useRef(null);
  let size = useComponentSize(ref);

  useEffect(() => {
    if (size.height > 100) {
      setHeight(size.height);
      setWidth(size.width);
    }
    console.log(size, "sizesize");
  }, [size, setHeight, setWidth]);
  return <Flex>{Component(item, { ref: ref })}</Flex>;
};
