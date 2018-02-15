import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 90%;
  max-width: 500px;
  font-family: "Open Sans", sans-serif;
`;

export const StyledFieldDiv = styled.div`
  width: 100%;
`;

export const StyledInput = styled.input`
  font-family: "Source Serif Pro", serif;
  border: 1px solid #ecf0f1;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 23px;
  padding-left: 10px;
  width: 100%;
  font-size: 1rem;
  color: #333333;
  height: 29px;
`;

// const StyledInputField = styled.div`
//   margin-bottom: 2px;
//   font-size: 1rem;
//   display: flex;
//   flex-direction: column;
//   font-family: "Source Serif Pro", serif;
// `;

// const StyledInput = styled.input`
//   /* border: 1px solid red; */
//   background: rgba(255, 255, 255, 0.05);
//   width: 275px;
//   height: 29px;
//   color: white;
//   border-radius: 4px;
//   border: 1px solid rgba(205, 205, 205, 0.42);
//   margin-top: 10px;
//   font-family: "Source Serif Pro", serif;
//   padding-left: 10px;
//   font-size: 1rem;
// `;

export const StyledCheckbox = styled.input`
  margin: 5px 5px 2px 0;
  position: relative;
  top: 1px;
`;
export const StyledTextArea = styled.textarea`
  font-family: "Source Serif Pro", serif;
  border: 1px solid #ecf0f1;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 23px;
  padding-top: 5px;
  padding-left: 10px;
  width: 100%;
  font-size: 1rem;
  color: #333333;
  height: 100px;
  font-size: 1rem;
  color: #333333;
`;
export const StyledHideFileUpload = StyledInput.extend`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const StyledErrorDiv = styled.div`
  color: red;
`;

export const StyledP = styled.p`
  margin: 5px 0;
  font-family: "Source Serif Pro", serif;
  font-weight: 600;
`;
export const StyledLabel = styled.label`
  font-family: "Source Serif Pro", serif;
  font-weight: 600;
  font-size: 1.2rem;
  color: #333333;
`;
export const StyledTagsLabel = styled.label`
  font-size: 0.9rem;
`;

export const StyledRadioLabel = styled.label`
  display: block;
  margin: 0.5rem;
`;
