import React, { Component } from "react";
import styled from "styled-components";
import { parseDateTime } from "../../helpers/conversions";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  margin: 10px 20px 20px 20px;
`;

const StyledTitle = styled.h2`
  font-family: "Source Serif Pro", serif;
  font-weight: 600;
  font-size: 1.125rem;
  color: #333333;
  margin: 0.5rem 0;
`;

const StyledContent = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 0.8125rem;
  color: #333333;
  line-height: 1.375rem;
  margin: 0.5rem 0;
`;

const StyledInfoDiv = styled.div`
  margin: 10px 0;
`;

const StyledInfo = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  font-size: 0.8125rem;
  color: #7f8c8d;
  margin: 5px 0;
`;

const StyledImg = styled.img`
  border: 1px solid black;
  width: 100%;
`;

class UpdateItem extends Component {
  render() {
    const {
      title,
      content,
      user_id,
      tags,
      datetime,
      first_name,
      last_name,
      image_url
    } = this.props.data;
    const { date, time } = parseDateTime(datetime);
    return (
      <StyledDiv>
        <StyledTitle>{title}</StyledTitle>
        {image_url && <StyledImg src={image_url} />}
        <StyledContent>{content}</StyledContent>
        <StyledInfoDiv>
          <StyledInfo>
            Posted by{" "}
            <Link to={`/profile/${user_id}`}>
              {first_name} {last_name}
            </Link>{" "}
            in {tags.split(",").join(", ")}
          </StyledInfo>
          <StyledInfo>
            on {date} at {time}
          </StyledInfo>
        </StyledInfoDiv>
      </StyledDiv>
    );
  }
}

export default UpdateItem;
