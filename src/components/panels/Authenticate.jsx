import React, { useState } from 'react';
import { EuiFieldText, EuiFieldPassword, EuiFormRow, EuiButton,EuiEmptyPrompt, EuiText, EuiImage} from '@elastic/eui';
import { adminImage } from '../../data/consts';
import { SearchBar } from './SearchBar';


export default function Authenticate() {
  const [username, setUser] = useState('Null');
  const [password, setPass] = useState('Null');
  const [dual, setDual] = useState(true);
  const [show, setShow] = useState(true)
  const onChange = (e) => {
    setUser(e.target.value);
    setDual(false)
  };
  const onShow = (f) => {
    setShow(f);
  }

  function renderImage() {
    return (
      <EuiImage
        size="xl"
        alt="Admin"
        src = {adminImage}
      />
    );
  };
  
  function renderMoreDetails() {
      return (
        <EuiEmptyPrompt
          title={
            <span>
              Perform the Admin Login to Add Events For Somaiya!
            </span>
          }
          body={
            <EuiText>
              {/* Two sessions with different talks at each one, so join both if you
              can! */}
            </EuiText>
          }
        />
      );
    };


  function checkLogin() {

    if(username==="nikhil"){
      onShow(false)
    }
    
  }

  function render(){
    return (
      <>
    
      <EuiFormRow>
        <EuiFieldText
          placeholder="Placeholder text"
          username={username}
          onChange={(e) => onChange(e)}
          aria-label="Use aria labels when no actual label is in use"
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiFieldPassword 
          placeholder="Placeholder text"
          type={dual ? 'dual' : undefined}
          password={password}
          onChange={(e) => setPass(e.target.value)}
          aria-label="Use aria labels when no actual label is in use"
        />  
      </EuiFormRow>

      <EuiButton color='danger' alignItems="right" onClick={checkLogin}>
                        Admin login
      </EuiButton>

      <EuiFormRow>
        {renderImage()}
      </EuiFormRow>

      <EuiFormRow>
        {renderMoreDetails()}
      </EuiFormRow>
    </>
    )
  }

  return (
    // show?SearchBar():console.log('e')
    show?render():<SearchBar/>
  );
}
