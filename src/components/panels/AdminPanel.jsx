// import { EuiFieldText, EuiFormRow } from '@elastic/eui';
import React from 'react';
// import React, { useState } from 'react';
// import { EuiFieldPassword, EuiSwitch } from '@elastic/eui';
// import { func } from 'prop-types';
import Authenticate from './Authenticate';
import { EuiFlexGroup, EuiFlexItem, EuiFormRow } from '@elastic/eui';
import { gapi } from '../../login';



export default class AdminPanel extends React.Component{

  // constructor(props){
  //   super(props)
  //   this.isSignedIn = false
  // }

     isSignedIn () {
    var auth2 = gapi.auth2.getAuthInstance();
    // var isSignin = auth2.isSignedIn.get()
    var profile = auth2.currentUser.get().getBasicProfile();
    if (auth2.isSignedIn.get()===null){
      console.log("Nal hai")
    }
    if (profile.getName()==="Nikhil Parab"){
      return true
    }else{
      return false
    }
    
  };

    render() {

      

        return (
          (this.isSignedIn)?
          <>
        <EuiFlexGroup gutterSize='xl'>
          <EuiFlexItem>

            <EuiFormRow>
                <Authenticate/>
            </EuiFormRow>

            </EuiFlexItem>
        </EuiFlexGroup> 
      </>
      :
      <div>
          Login in first
        </div>
        
          
        );
      }
}
