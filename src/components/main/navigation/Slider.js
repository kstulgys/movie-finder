import React from "react";
import InputRange from "react-input-range";
import styled from "styled-components";

import "react-input-range/lib/css/index.css";
// import "./Slider.css";

const SliderStyle = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
// margin-top: 30px;
  span {
    color: white;
    font-size: 1rem;
    font: inherit;
  }
  /* padding: 40px; */
`;

const Label = styled.div`
  margin-top: 5px
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > p {
    text-transform: capitalize;
    font-size: 1.25rem;
  }
`;

class Slider extends React.Component {
  state = {
    values: this.props.data.value
  };

  handleChange = e => {
    const { name, value } = e.target;
    const values = { ...this.state.values };
    const parsedVal = parseInt(value);
    values[name] = parsedVal;
    if (name === "max" && values.min < values.max) {
      this.setState({ values: { ...values } });
      this.props.onChange({
        type: this.props.data.label,
        value: this.state.values
      });
    }
    if (name === "min" && values.min < values.max) {
      this.setState({ values: { ...values } });
      this.props.onChange({
        type: this.props.data.label,
        value: this.state.values
      });
    }
    // console.log(this.state.values);
  };

  render() {
    const { min, max, step, value, label } = this.props.data;
    return (
      <SliderStyle
        className="wow fadeIn"
        data-wow-duration="4s"
        data-wow-delay="2s"
      >
        <Label>
          {label === "runtime" ? <p> {label} (min) </p> : <p> {label} </p>}
          <div style={{ display: "flex" }}>
            <p>{value.min}</p> <p>-</p> <p>{value.max}</p>
          </div>
        </Label>

        <input
          name="min"
          type="range"
          min={min}
          max={max}
          value={this.state.values.min}
          step={step}
          onChange={this.handleChange}
        />
        <input
          name="max"
          type="range"
          min={min}
          max={max}
          value={this.state.values.max}
          step={step}
          onChange={this.handleChange}
        />
      </SliderStyle>
    );
  }
}

//  style={{position: 'relative', top: -25, zIndex: 0}}

export default Slider;
