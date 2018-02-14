import React, { Component } from "react";
import { parseDateTime } from "../../helpers/conversions";
import { Link } from "react-router-dom";
import {
  StyledDiv,
  StyledTitle,
  StyledContent,
  StyledInfoDiv,
  StyledInfo,
  StyledImg
} from "../styledDefaults/postStyles";

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
