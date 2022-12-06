import React, { useState, Fragment } from "react";
// import { EuiHealth } from "@elastic/eui";
import {
  EuiCallOut,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiTitle,
  EuiSwitch,
  EuiBasicTable,
  EuiSearchBar,
  EuiBadge,
  EuiIcon,
  EuiPanel,
  EuiButton,
} from "@elastic/eui";

import { talks } from "../../data/talks";
import {
  renderDepartmentTags,
  renderGenreTags,
} from "../../utilities/genreTags";
import { addEvent } from "../../utilities/AddAvatar";
import { renderSpeakers } from "./TalksPanel";
import { showTime } from "../../utilities/showLocalTime";

// const departments = [
//   { name: "IT", color: "danger" },
//   { name: "CS", color: "primary" },
//   { name: "BCA", color: "success" },
//   { name: "ECS", color: "accent" },
// ];

// const loadDepartments = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(
//         departments.map((department) => ({
//           value: department.name,
//           view: (
//             <EuiHealth color={department.color}>{department.name}</EuiHealth>
//           ),
//         }))
//       );
//     }, 2000);
//   });
// };

const initialQuery = EuiSearchBar.Query.MATCH_ALL;

export const SearchBar = () => {
  const [query, setQuery] = useState(initialQuery);
  const [error, setError] = useState(null);
  const [incremental, setIncremental] = useState(false);
  const [showEst, setState] = useState(false);

  const onChange = ({ query, error }) => {
    if (error) {
      setError(error);
    } else {
      setError(null);
      setQuery(query);
    }
  };

  const toggleIncremental = () => {
    setIncremental(!incremental);
  };

  const renderShowEstButton = () => {
    return (
      <>
        <EuiFlexGroup>
          {/* <EuiPanel> */}
          <EuiFlexItem>
            <div>
              <EuiButton
                minWidth={"200px"}
                iconType="clock"
                onClick={() => {
                  if (!showEst) {
                    setState(true);
                  } else {
                    setState(false);
                  }
                }}
              >
                Show times in {showEst ? "Local" : "EDT"}
              </EuiButton>
            </div>
          </EuiFlexItem>
          {/* </EuiPanel> */}
        </EuiFlexGroup>
      </>
    );
  };

  const renderSearch = () => {
    const filters = [
      {
        type: "field_value_toggle",
        name: "IT",
        field: "department",
        value: "IT",
      },
      {
        type: "field_value_toggle",
        name: "CS",
        field: "department",
        value: "CS",
      },
      {
        type: "field_value_toggle",
        name: "BCA",
        field: "department",
        value: "BCA",
      },
      {
        type: "field_value_toggle",
        name: "ECS",
        field: "department",
        value: "ECS",
      },
      // {
      //   type: "field_value_selection",
      //   field: "department",
      //   name: "Department",
      //   multiSelect: "or",
      //   operator: "exact",
      //   cache: 10000, // will cache the loaded tags for 10 sec
      //   options: () => loadDepartments(),
      // },
    ];

    const schema = {
      strict: true,
      fields: {
        sessionDate: {
          type: "string",
        },
        sessionTime: {
          type: "string",
        },
        title: {
          type: "string",
        },
        genre: {
          type: "string",
        },
        speaker: {
          type: "string",
        },
        department: {
          type: "string",
        },

        // departments: {
        //   type: "string",
        //   validate: (value) => {
        //     if (value !== "" && !departments.some((department) => department.name === value)) {
        //       throw new Error(
        //         `unknown tag (possible values: ${departments
        //           .map((department) => department.name)
        //           .join(",")})`
        //       );
        //     }
        //   },
        // },
      },
    };

    return (
      <>
        <EuiFlexGroup gutterSize="xl">
          <EuiFlexItem grow={6}>
            <EuiSearchBar
              defaultQuery={initialQuery}
              box={{
                placeholder: "Search for Title/Genre/Department",
                schema,
              }}
              filters={filters}
              onChange={onChange}
            ></EuiSearchBar>
          </EuiFlexItem>
          <EuiFlexItem alignItems="right" paddingSize="l">
            <EuiSwitch
              paddingSize="l"
              alignItems="center"
              label="Incremental"
              checked={incremental}
              onChange={toggleIncremental}
            />
          </EuiFlexItem>

          <EuiFlexItem alignItems="right">{renderShowEstButton()}</EuiFlexItem>
        </EuiFlexGroup>
      </>
    );
  };

  const renderError = () => {
    if (!error) {
      return;
    }
    return (
      <Fragment>
        <EuiCallOut
          iconType="faceSad"
          color="danger"
          title={`Invalid search: ${error.message}`}
        />
        <EuiSpacer size="l" />
      </Fragment>
    );
  };

  const renderTable = () => {
    const columns = [
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
            {showTime(sessionTime, showEst)}
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
        ),
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
          <EuiBadge color={renderDepartmentTags(department)}>
            {department}
          </EuiBadge>
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
            onClick: (e) => {
              addEvent(e);
            },
          },
        ],
      },
    ];

    const queriedItems = EuiSearchBar.Query.execute(query, talks, {
      defaultFields: ["department", "speaker", "genre", "title"],
    });

    return <EuiBasicTable items={queriedItems} columns={columns} />;
  };

  let esQueryDsl;
  let esQueryString;
  // console.log(esQueryDsl,esQueryString)
  try {
    esQueryDsl = EuiSearchBar.Query.toESQuery(query);
  } catch (e) {
    esQueryDsl = e.toString();
  }
  try {
    esQueryString = EuiSearchBar.Query.toESQueryString(query);
  } catch (e) {
    esQueryString = e.toString();
  }

  const content = renderError() || (
    <EuiFlexGroup>
      <EuiFlexItem grow={6}>
        <EuiTitle size="s">
          <h3>Up Coming Events</h3>
        </EuiTitle>

        <EuiSpacer size="l" />

        <EuiPanel paddingSize="l" >{renderTable()}</EuiPanel>
      </EuiFlexItem>
    </EuiFlexGroup>
  );

  return (
    <Fragment>
      <EuiFlexGroup alignItems="left" grow={true}>
        <EuiPanel>
          <EuiFlexItem grow={true}>{renderSearch()}</EuiFlexItem>
          {/* <EuiFlexItem alignItems="right">{renderShowEstButton()}</EuiFlexItem> */}
        </EuiPanel>
      </EuiFlexGroup>
      <EuiSpacer size="xl" />
      {content}
    </Fragment>
  );
};
