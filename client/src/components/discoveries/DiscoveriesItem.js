import React, { Component } from "react";
import { Link } from "react-router-dom";
import Parser from "html-react-parser";
import { parseDateTime } from "../../helpers/conversions";
import {
  StyledDiv,
  StyledContent,
  StyledInfoDiv,
  StyledInfo,
  StyledImg
} from "../styledDefaults/postStyles";

class DiscoveriesItem extends Component {
  render() {
    const {
      user_id,
      image_url,
      content,
      datetime,
      first_name,
      last_name
    } = this.props.data;
    const { date, time } = parseDateTime(datetime);
    return (
      <StyledDiv>
        {image_url && <StyledImg src={image_url} />}
        <StyledContent>{Parser(content)}</StyledContent>
        <StyledInfoDiv>
          <StyledInfo>
            Posted by{" "}
            <Link to={`/profile/${user_id}`}>
              {first_name} {last_name}
            </Link>
          </StyledInfo>
          <StyledInfo>
            on {date} at {time}
          </StyledInfo>
        </StyledInfoDiv>
      </StyledDiv>
    );
  }
}

export default DiscoveriesItem;
