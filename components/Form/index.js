import { useState } from "react";
import { StyledForm, StyledInputContainer } from "./Form.styled";

export default function Form() {
  const [mountainState, setMountainState] = useState({
    name: "Mount Everest",
    montainValues: {
      altitude: 8848,
      mountainRange: "Himalayas",
    },
  });

  function handleNameChange(event) {
    const montainFormValue = event.target.value;
    setMountainState((currentMountainState) => {
      return {
        ...currentMountainState,
        name: montainFormValue,
      };
    });
  }

  //  function handleNameChange(event) {
  //   const montainFormValue= event.target.value;
  //   setMountainState((currentMountainState)=>({
  //     ...currentMountainState,
  //     name: montainFormValue,
  //   }));

  function handleAltitudeChange(event) {
    const montainFormValue = event.target.value;
    setMountainState((currentMountainState) => {
      return {
        ...currentMountainState,
        montainValues: {
          ...currentMountainState.montainValues,
          altitude: montainFormValue ? parseInt(montainFormValue) : 0,
        },
      };
    });
  }

  function handleMountainRangeChange(event) {
    const montainFormValue = event.target.value;
    setMountainState((currentMountainState) => {
      return {
        ...currentMountainState,
        montainValues: {
          ...currentMountainState.montainValues,
          mountainRange: montainFormValue,
        },
      };
    });
  }

  return (
    <StyledForm>
      <StyledInputContainer>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={mountainState.name}
          onChange={handleNameChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="altitude">Altitude:</label>
        <input
          id="altitude"
          value={mountainState.montainValues.altitude}
          onChange={handleAltitudeChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="mountainRange">Mountain Range:</label>
        <input
          id="mountainRange"
          value={mountainState.montainValues.mountainRange}
          onChange={handleMountainRangeChange}
        />
      </StyledInputContainer>
      <output>
        <i>{mountainState.name}</i>
        {" is "}
        {mountainState.montainValues.altitude}
        {" meters high"}
        <br />
        (and located in the {mountainState.montainValues.mountainRange})
      </output>
    </StyledForm>
  );
}
