// import { EuiAvatar, EuiSpacer, EuiTitle } from "@elastic/eui";
// import { addAvatar } from "./utilities/addAvatar";


  export var gapi = window.gapi
  var CLIENT_ID = process.env.CLIENT_ID
  var API_KEY = process.env.API_KEY
  var DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest']
  var SCOPES = 'https://www.googleapis.com/auth/calendar.events'
  var PLUGIN_NAME = "Event Manager"

  const handleClick = () => {
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

      var auth2 = gapi.auth2.getAuthInstance()
        
      auth2.signIn()
      .then(() => {
        
        var event = {
          'summary': 'Awesome Event!',
          'location': '800 Howard St., San Francisco, CA 94103',
          'description': 'Really great refreshments',
          'start': {
            'dateTime': '2022-09-28T09:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
          },
          'end': {
            'dateTime': '2022-09-29T9:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
          },
          'recurrence': [
            'RRULE:FREQ=DAILY;COUNT=2'
          ],
          'attendees': [
            {'email': 'lpage@example.com'},
            {'email': 'sbrin@example.com'}
          ],
          'reminders': {
            'useDefault': false,
            'overrides': [
              {'method': 'email', 'minutes': 24 * 60},
              {'method': 'popup', 'minutes': 10}
            ]
          }
        }

        

        var request = gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': event,
        })


        request.execute(event => {
          console.log(event)
          window.open(event.htmlLink)
        })
        

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
    })
  }
  

  

//   export function profile(){
//     if (auth2.isSignedIn.get()) {
//         var profile = auth2.currentUser.get().getBasicProfile();
//         console.log('ID: ' + profile.getId());
//         console.log('Full Name: ' + profile.getName());
//         console.log('Given Name: ' + profile.getGivenName());
//         console.log('Family Name: ' + profile.getFamilyName());
//         console.log('Image URL: ' + profile.getImageUrl());
//         console.log('Email: ' + profile.getEmail());
//       }
//   }
// export var gapi


  
export default handleClick;


  