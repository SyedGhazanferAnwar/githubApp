import React, { PureComponent } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity
} from 'react-native';
import Modal from 'react-native-modal';

import { Icon } from "react-native-elements"
class PopupModal extends PureComponent {

    componentDidMount() {

    }
    render() {
        console.log(this.props.data)
        return (
            <View style={{ backgroundColor: "white" }}>
                <View style={{ flex: 1, alignSelf: "flex-end", marginVertical: 15, marginRight: 10, }} >
                    <TouchableOpacity style={styles.padding} onPress={this.props.handleClose}>
                        <Icon name="close" />
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>

                    <View style={styles.subContainer}>
                        <View style={styles.subContainer}>
                            <Image style={styles.image} source={{uri:this.props.data.avatar_url}} />
                            <Text style={styles.nameText}>{this.props.data.name}</Text>
                        </View>
                        <View style={styles.followContainer}>
                            <Text style={styles.followText}>Followers: {this.props.data.followers}</Text>

                            <Text style={styles.followText}>Following:  {this.props.data.following}</Text>
                        </View>
                            <Text style={styles.followText}>Location:  {this.props.data.location}</Text>

                    </View>
                </View>
            </View >

        )
    }
}

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", padding: 40 },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    subContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    nameText: {
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 10
    },
    followContainer: {
        flexDirection: "row",
        marginTop: 20,
        marginBottom:10,
        justifyContent: "space-between",
        width: "100%",

    },
    followText: {
        fontSize: 16,

    },
    padding:{
        padding:8,

    }

})
export default PopupModal