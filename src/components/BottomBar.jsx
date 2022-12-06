import {
  EuiButton,
  EuiBottomBar,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
} from "@elastic/eui";
import React from "react";

export default class Bottombar extends React.Component {
  render() {
    return (
      <>
        <EuiBottomBar position="static">
          <EuiFlexGroup direction="row" alignItems="center" >
            <EuiFlexItem>
              <EuiText >
                <h4>Hosted by Somaiya Vidyavihar</h4>
              </EuiText>
              <EuiText>Events to increase Students Practical knowledge about topics</EuiText>
            </EuiFlexItem>

            <EuiFlexItem grow={false}>
              <EuiButton color="success" fill href="#" target={"_blank"}>
                Sign in for updates
              </EuiButton>
            </EuiFlexItem>

            <EuiFlexItem grow={false}>
              <EuiButton color="primary" fill href="#" target={"_blank"}>
                Admin login
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiBottomBar>
      </>
    );
  }
}
