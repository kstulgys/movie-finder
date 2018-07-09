import React from "react";
import InputRange from "react-input-range";
import styled from "styled-components";

import "react-input-range/lib/css/index.css";
// import "./Slider.css";

const SliderStyle = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  padding-left: 15px;
  // padding: 40px;
`;

const Label = styled.label`
  margin: 30px 0 30px -10px;
  color: #555;
`;

class Slider extends React.Component {
  onChange = range => {
    this.props.onChange({
      type: this.props.data.label,
      value: range
    });
  };

  render() {
    const { min, max, step, value, label } = this.props.data;
    return (
      <SliderStyle>
        <Label>{label}</Label>
        <InputRange
          minValue={min}
          maxValue={max}
          step={step}
          onChange={this.onChange}
          value={value}
        />
      </SliderStyle>
    );
  }
}

export default Slider;
