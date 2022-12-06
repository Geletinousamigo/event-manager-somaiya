import {
  EuiFlexGroup,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiSpacer,
} from "@elastic/eui";
import React from 'react'
import {  useState } from "react";
import BottomBar from "./BottomBar";
import EventDetails from "./panels/EventDetails";
import SpeakersPanel from "./panels/SpeakersPanel";
import TalksPanel from "./panels/TalksPanel";
import Navbar from "./Navbar";
import AdminPanel from "./panels/AdminPanel";




function MainPage() {
  const [selectedTab, setSelectedTab] = useState("event");
  
  // var gapi = window.gapi
  // gapi.client.init({
  //   apiKey: API_KEY,
  //   clientId: CLIENT_ID,
  //   discoveryDocs: DISCOVERY_DOCS,
  //   scope: SCOPES,
  //   plugin_name: PLUGIN_NAME
  // })
  // var auth2 = gapi.auth2.getAuthInstance();
  // // var isSignnedIn =auth2.isSignedIn.get();
  // var profile = auth2.currentUser.get().getBasicProfile();
  // var username = profile.getName() 

  const onSelectedTabChanged = (id) => {
    setSelectedTab(id);
  };

  const showSelectedContent = () => {
    switch (selectedTab) {
      case "event":
        return tabs[0].content;
      case "speakers":
        return tabs[1].content;
      case "talks":
        return tabs[2].content;
      case "admin":
        return tabs[3].content;
      default:
        return tabs[0].content;
    }
  };

  const tabs = [
    {
      id: "event",
      isSelected: selectedTab === "event",
      label: "Event Details",
      onClick: () => onSelectedTabChanged("event"),
      content: <>
        <EventDetails />
      </>
     
    },
    {
      id: "speakers",
      isSelected: selectedTab === "speakers",
      label: "Speakers",
      onClick: () => onSelectedTabChanged("speakers"),
      content:
       <>
        <SpeakersPanel />
      </>
    },
    {
      id: "talks",
      isSelected: selectedTab === "talks",
      label: "Talks",
      onClick: () => onSelectedTabChanged("talks"),
      // content: <SearchBarFilters />,
      content: <TalksPanel />,
    },
    {
      id: "Admin",
      isSelected: selectedTab === "admin",
      label: "Admin",
      onClick: () => onSelectedTabChanged("admin"),
      content: <AdminPanel/>,
    },
  ];

  return (
    <EuiPage paddingSize="none">
      <EuiFlexGroup className="eui-fullHeight">
        <EuiPageBody panelled>
          <Navbar tabs={tabs} />
          <EuiPageContent
            hasBorder={false}
            hasShadow={false}
            paddingSize="none"
            color="transparent"
            borderRadius="none"
            verticalPosition="center"
            horizontalPosition="center"
          >
            <EuiPageContentBody>{showSelectedContent()}</EuiPageContentBody>
            <EuiSpacer size="1" />
          </EuiPageContent>

          <BottomBar/>
        </EuiPageBody>
      </EuiFlexGroup>
    </EuiPage>
  );
}

export default MainPage;
