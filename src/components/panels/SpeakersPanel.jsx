import {
  EuiBadge,
  EuiCard,
  EuiFlexGrid,
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiText,
} from "@elastic/eui";
import React from "react";
import { speakers } from "../../data/speakers";
// import { personImage } from "../../data/consts";

export default class SpeakersPanel extends React.Component {
  renderAllSpeakers() {
    return (
      <>
        {speakers.map((speaker) => {
          return (
            <EuiFlexGroup justifyContent="spaceEvenly">
            <EuiFlexItem key={speaker}>
              <EuiCard 
                aria-label={speaker.name}
                image={<EuiImage hasShadow 
                  allowFullScreen alt="{personImage}" size={200} src={speaker.avatar}></EuiImage>}
                footer={speaker.shortBio}
                description={
                  <>
                    <EuiText color="success">
                      <strong>{speaker.title}</strong>
                    </EuiText>
                    <EuiBadge color="primary" iconType="branch">
                      {speaker.team}
                    </EuiBadge>
                    <EuiBadge color="warning" iconType="globe">
                      {speaker.basedIn}
                    </EuiBadge>
                    <EuiBadge color="success" iconType="faceHappy">
                      {speaker.pronouns}
                    </EuiBadge>
                  </>
                }
                title={speaker.name}
              />
            </EuiFlexItem>
            </EuiFlexGroup>
          );
        })}
      </>
    );
  }

  render() {
    return (
      <>
        <EuiFlexGrid
          columns={3}
          direction="row"
          gutterSize="l"
          className="xMargin"
        >
          {this.renderAllSpeakers()}
        </EuiFlexGrid>
      </>
    );
  }
}
