import React, { PureComponent } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';


class ListItem extends PureComponent {

    render() {
        let name=this.props.data.login
        return (
            <View style={styles.mainContainer}>
                <Image style={styles.image} source={{uri:this.props.data.avatar_url}} />
                <View>
                    <Text style={styles.nameText}>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
                    <Text style={styles.linkText}>{this.props.data.html_url}</Text>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 20,
        marginVertical: 0,
        flexDirection: "row",
        alignItems:"center"
    },
    image: {
        height: 70,
        width: 70,
        backgroundColor:"#f6f6f6",
        borderRadius:50
    },
    nameText:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:30
    },
    linkText:{
        fontSize:17,
        marginLeft:30,
        maxWidth:230
    }
})

export default ListItem