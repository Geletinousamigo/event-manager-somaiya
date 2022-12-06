import {
  EuiEmptyPrompt,
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiText,
} from "@elastic/eui";
import React from "react";
import { addCalButtons } from "../../utilities/addCalButtons";
import { sessionOne, sessionTwo } from "../../data/consts";
import { centerImage } from "../../data/consts";

export default class EventDetails extends React.Component {
  renderHero = () => {
    return (
      <EuiImage
        align-item="center"
        size="xl"
        alt="Rainbow Stack Summit banner"
        src = {centerImage}
      />
    );
  };

  renderMoreDetails = () => {
    return (
      <EuiEmptyPrompt
        title={
          <span>
            Bringing Students together to share ideas, learn from
            each other, and have fun together!
          </span>
        }
        body={
          <>
          <EuiText>
            Two sessions with different talks at each one, so join both if you
            can!
          </EuiText>
          <EuiText>
            Register for the event by clicking on the following Buttons
          </EuiText>
          </>
        }
        actions={[
          addCalButtons(sessionOne.dateAndTime, sessionOne.calendarLink),
          addCalButtons(sessionTwo.dateAndTime, sessionTwo.calendarLink),
        ]}
      />
    );
  };

  render() {
    return (
      <>
        <EuiFlexGroup gutterSize="l">
          <EuiFlexItem>{this.renderHero()}</EuiFlexItem>
        </EuiFlexGroup>
        <EuiFlexGroup gutterSize="l">
          <EuiFlexItem>{this.renderMoreDetails()}</EuiFlexItem>
        </EuiFlexGroup>
      </>
    );
  }
}
