import React, {useState} from 'react';
import { Hint } from 'react-autocomplete-hint';
import './App.css';
import { MenuButton, OrderButton } from './App.js';


function Userform () {
    const [text, setText] = useState('')
    const dorms = ["Chase", "Fulton", "Nyland", "Tavilla", "Wilson", "Evans", "Ferrin", "Bromley", "Village"];

    return (
        <>
            <h1 className="text-center mt-3 margin70">Please enter your credentials</h1>
            <input
                className="autocomplete"
                placeholder="Enter your name"
            />

            <Hint options={dorms} allowTabFill>
                <input
                    className="autocomplete"
                    placeholder="Enter your dorm"
                    />
            </Hint>

            <input
                className="autocomplete"
                placeholder="Enter your phone #"
            />
            <OrderButton />
            <MenuButton />
        </>

    )
}

export default Userform;

/*
I'm sad that I couldn't get this to work. Short on time.
I wanted to get a form that recorded the user's inputs and sent user an alert along with an email.
The issue was autofill wasn't working, and if I wanted to use an AutoComplete component, I had to add
a lot more code, and I just don't have the time for that right now
*/

// class Inputs extends Component {
//     state = {
//         name: '',
//         dorm: '',
//         phone: '',
//     }
//     handleName = (text) => {
//         this.setState({ name: text })
//     }
//     handleDorm = (text) => {
//         this.setState({ dorm: text })
//     }
//     handlePhone = (text) => {
//         this.setState({ phone: text })
//     }
//     order = (name, dorm, phone) => {
//         alert("Hi " + name + "! Food will be delivered to " + dorm + " shortly. We'll call " + phone + " when we're here!")
//     }

//     render() {
//         return (
//             <View style = {styles.container}>
//                 <TextInput style = {styles.input}
//                     placeholder = "Enter your name"
//                     onChangeText = {this.handleName}/>

//                 <Autocomplete style = {styles.input}
//                     data={"Chase", "Fulton", "Nyland", "Tavilla", "Wilson", "Evans", "Ferrin", "Bromley", "Village"}
//                     placeholder = "Enter your dorm"
//                     onChangeText = {this.handleDorm}/>

//                 <TextInput style = {styles.input}
//                     placeholder = "Enter your phone #"
//                     onChangeText = {this.handlePhone}/>
                
//                 <TouchableOpacity
//                     style = {styles.submitButton}
//                     onPress = {
//                         () => this.order(this.state.name, this.state.dorm, this.state.phone)
//                     }>
//                     <Text style = {styles.submitButtonText}> Confirm Order </Text>
//                 </TouchableOpacity>
//             </View>
//         )
//     }
// }
// export default Inputs

// const styles = StyleSheet.create({
//    container: {
//       paddingTop: 23
//    },
//    input: {
//         margin: 'auto',
//         marginBottom: '70px',
//         display: 'block',
//         fontSize: '20px',
//         width: '25%',
//         height: '3em',
//         borderColor: '#7a42f4',
//         borderWidth: 3
//     },
//     submitButton: {
//         backgroundColor: '#7a42f4',
//         padding: 10,
//         margin: 15,
//         height: 40,
//    },
//    submitButtonText:{
//       color: 'white'
//    },
// })