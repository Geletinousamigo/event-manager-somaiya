import {
  EuiAvatar,
  EuiBadge,
  EuiBasicTable,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiPanel,
  EuiText,

} from "@elastic/eui";
import React from "react";
import { talks } from "../../data/talks";
import { renderDepartmentTags, renderGenreTags } from "../../utilities/genreTags";
import { showTime } from "../../utilities/showLocalTime";
import { addEvent } from "../../utilities/AddAvatar";
import { SearchBar } from "./SearchBar";



export const renderShowEstButton=(state)=> {
  return (
    <> 
      <EuiFlexGroup>
      <EuiPanel>
        <EuiFlexItem>
        <EuiButton
        minWidth={"300px"}
        iconType="clock"
        onClick={() => {
          if (!state.showEst) {
            // setState({ showEst: true });
          } else {
            // setState({ showEst: false });
          }
        }}
      >
        Show times in {state.showEst ? "Local" : "EDT"}
      </EuiButton>
      </EuiFlexItem>
      </EuiPanel>
      </EuiFlexGroup>
      </>
  );
}



export const renderSpeakers = (speakers) => {
  if (speakers.length > 1) {
    return speakers.map((speaker) => (
      <>
        <EuiFlexGroup>
          <EuiFlexItem className="speaker-info">
            <EuiAvatar
              imageUrl={speaker.avatar}
              size="s"
              name={speaker.name}
              className="xMargin"
            />
              <EuiText>{speaker.name}</EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
      </>
    ));
  } else {
    return (
      <>
        <EuiFlexGroup>
          <EuiFlexItem className="speaker-info">
            <EuiAvatar
              imageUrl={speakers[0].avatar}
              size="s"
              name={speakers[0].name}
              className="xMargin"
            />
            <EuiText>{speakers[0].name}</EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
      </>
    );
  }
};


export default class TalksPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showEst: false,
    };
  }

  renderTalkTable (){
    return (
      <EuiFlexItem>
        <EuiBasicTable items={talks} columns={this.columns}/>
      </EuiFlexItem>
    );
  }

  


  
  columns = [
    {
      field: "sessionDate",
      name: "Session",
      render: (sessionDate) => (
        <EuiBadge color={sessionDate === "Sept 8th" ? "primary" : "success"}>
          {sessionDate}
        </EuiBadge>
      ),
    },
    {
      field: "sessionTime",
      name: "Time",
      render: (sessionTime) => (
        <>
          <EuiIcon type="clock" />
          {showTime(sessionTime, this.state.showEst)}
        </>
      ),
    },
    {
      field: "title",
      name: "Title",
    },
    {
      field: "description",
      name: "Description",
    },
    {
      field: "speaker",
      name: "Speaker",
      render: (speaker) => (
        <EuiFlexGroup direction="column">
          {renderSpeakers(speaker)}
        </EuiFlexGroup>
      )
    },
    {
      field: "genre",
      name: "Genre",
      render: (genre) => (
        
        <EuiBadge color={renderGenreTags(genre)}>{genre}</EuiBadge>
      ),
    },
    {
      field: "department",
      name: "Department",
      render: (department) => (
        <EuiFlexGroup direction="column">
          <EuiBadge  color={renderDepartmentTags(department)}>{department}</EuiBadge>
        </EuiFlexGroup>
      ),
    },
    {
      name: "Actions",
      actions: [
        {
          name: "Add to cal",
          description: "Add session to your calendar",
          type: "icon",
          icon: "calendar",
          onClick: (e) => {addEvent(e)},
        },
      ],
    },
  ];

    

  

  render() {
    return (
      <>
        <EuiFlexGroup
          margin = "xxl"
          className="xMargin"
          gutterSize="s"
          alignItems="start"
          justifyContent="spacearound"
        >
          <EuiFlexItem grow={true}>
            <SearchBar/>
          </EuiFlexItem>


        </EuiFlexGroup>
      </>
    );
  }
}
