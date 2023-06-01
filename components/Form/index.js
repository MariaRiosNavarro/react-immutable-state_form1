// import { useState } from "react";
import {}
import { StyledForm, StyledInputContainer } from "./Form.styled";

export default function Form() {
  //useImmer Version: 
  const [mountainState, setMountainState] = useState({
    name: "Mount Everest",
    montainValues: {
      altitude: 8848,
      mountainRange: "Himalayas",
    },
  });

  //--------useStateVersion

  // -------------first handle function
  // function handleNameChange(event) {
  //   const montainFormValue = event.target.value;
  //   setMountainState((currentMountainState) => {
  //     return {
  //       ...currentMountainState,
  //       name: montainFormValue,
  //     };
  //   });
  // }
  //  short Notation of the same function avobe:

  //  function handleNameChange(event) {
  //   const montainFormValue= event.target.value;
  //   setMountainState((currentMountainState)=>({
  //     ...currentMountainState,
  //     name: montainFormValue,
  //   }));
// -------------second handle function
  // function handleAltitudeChange(event) {
  //   const montainFormValue = event.target.value;
  //   setMountainState((currentMountainState) => {
  //     return {
  //       ...currentMountainState,
  //       montainValues: {
  //         ...currentMountainState.montainValues,
  //         altitude: montainFormValue ? parseInt(montainFormValue) : 0,
  //       },
  //     };
  //   });
  // }
// -------------third handle function
  // function handleMountainRangeChange(event) {
  //   const montainFormValue = event.target.value;
  //   setMountainState((currentMountainState) => {
  //     return {
  //       ...currentMountainState,
  //       montainValues: {
  //         ...currentMountainState.montainValues,
  //         mountainRange: montainFormValue,
  //       },
  //     };
  //   });
  // }

//--------useImmerVersion 
















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
