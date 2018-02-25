//To house entering and email and signing a user in

//going to be a class based component

import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
    //add state to recive input from user
    state = { text: ''};


    //TextInput -> user types text -> onChange Text event called -> 'setstate' with new text -> component rerenders 
    // when TextInput rendere, we tell it that its value is this.state.text

    render(){
        return ( 
            <Card>
                <CardSection>
                    <TextInput 
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}
                    style={{ height: 20, width: 100}}/>
                    
                </CardSection>    
                <CardSection />
                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>    
             </Card>
        ); 
    }
}

export default LoginForm;