import { EuiAvatar, EuiButton } from "@elastic/eui";
import { useState } from "react";
// import handleClick from "../login";
import React from "react";
import { personImage } from "../data/consts";
import { getDocs } from "firebase/firestore";





var gapi = window.gapi
  var CLIENT_ID = "166331538941-7tf04jvv50qlqj8l78nhgh47fsgk82i6.apps.googleusercontent.com"
  var API_KEY = "AIzaSyCC8pvdSLL7eGEI9oFs9PiHHM3JlcSgook"
  var DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest']
  var SCOPES = 'https://www.googleapis.com/auth/calendar.events'
  var PLUGIN_NAME = "Event Manager"
  
  // var name="Login In"
  // var img = personImage
  

 export const addEvent = (event) => {
        
          var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event,
          })
  
  
          request.execute(event => {
            console.log(event)
            window.open(event.htmlLink)
          })
    }

// export const showEvents = () =>{
//   var request = gapi.client.calendar.events.list({
//     'calendarId': 'primary',
//     'timeMin': (new Date()).toISOString(),
//     'showDeleted': false,
//     'singleEvents': true,
//     'maxResults': 10,
//     'orderBy': 'startTime'
//   })
//   request.then(response => {
//     const events = response.result.items
//     JSON.stringify(events)
//     console.log('EVENTS: ', events)
//     console.log(typeof(events))
//     return events 
//   })
// }

 export default function AddAvatar() {

    const [name1, setName] = useState("Login");
    const [img1, setImg] = useState(personImage)
    const [events, setEvents] = useState([]);

    
    const getEvents = async() => {

      const data = await getDocs(usersCollectionRef);
      setEvents(data.docs.map((docs) => ({...docs.data(), id: data.id })))
      console.log(events)

      
    }

    function setProfile(x,y){
      setName(x)
      setImg(y)
    }

    function handleClick() {
      gapi.load('client:auth2', () => {
        console.log('loaded client')
  
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
          plugin_name: PLUGIN_NAME
        })
  
        gapi.client.load('calendar', 'v3', () => console.log('bam!'))
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signIn()
        .then(() => {
          if (auth2.isSignedIn.get()) {
            console.log("Token is :",auth2)
              var profile = auth2.currentUser.get().getBasicProfile();
              // name = profile.getName()
              // img = profile.getImageUrl()
              console.log('ID: ' + profile.getId());
              console.log('Full Name: ' + profile.getName());
              console.log('Given Name: ' + profile.getGivenName());
              console.log('Family Name: ' + profile.getFamilyName());
              console.log('Image URL: ' + profile.getImageUrl());
              console.log('Email: ' + profile.getEmail());
            }
            // this.forceUpdate()
            setProfile(profile.getName(), profile.getImageUrl())
  
          /*
              Uncomment the following block to get events
          */
          
          // get events
          // gapi.client.calendar.events.list({
          //   'calendarId': 'primary',
          //   'timeMin': (new Date()).toISOString(),
          //   'showDeleted': false,
          //   'singleEvents': true,
          //   'maxResults': 10,
          //   'orderBy': 'startTime'
          // }).then(response => {
          //   const events = response.result.items
          //   console.log('EVENTS: ', events)
          // })
          
  
        })
      // }
        
      })
    }
  
   
  

  return (
    
    <>
    <div>
        <EuiButton fill
            color="primary"
            onClick={handleClick}>
            {name1} 
        </EuiButton>
            
        &emsp;
        <EuiAvatar
          size="l"
          name={name1}
          imageUrl={img1}
        />
        &emsp;
        
      </div>

      {/* <div>
        {events.map((event)=>{
          return 
          <div>
            {" "}
            <h1>{event.summary}</h1>  
          </div>
        })}
      </div> */}
      </>
  );
};


