import React, { PureComponent } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput
} from 'react-native';

import { SearchBar } from 'react-native-elements';
import {setSearchQuery} from "../redux/actions/usersAction"
import { connect } from "react-redux"

class Search extends PureComponent {

    changeText=(value)=>{
        this.props.setSearchQuery(value)
    }
    // updateSearch = search => {
    //     this.setState({ search });
    //   };
    render(){
        return(
            <SearchBar
            placeholder="Type Here..."
            onChangeText={this.changeText}
            platform="ios"
            value={this.props.state.searchTerm}
          />
        )
    }
}
const styles=StyleSheet.create({
    textInput:{
        marginVertical:10,
        height:50,
        width:"100%",
        backgroundColor:"#f6f6e1"
    }
})
const mapStateToProps = (state) => {
    return {
        state: state
    }

}
export default connect(mapStateToProps, { setSearchQuery })(Search)
// export default Search
