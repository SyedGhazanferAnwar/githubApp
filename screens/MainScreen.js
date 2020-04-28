import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    ActivityIndicator,
} from 'react-native';

import { fetchUsers, fetchUserDetail } from "../redux/actions/usersAction"
import { connect } from "react-redux"
import UserList from '../components/UserList';
import PopupModal from "../components/PopupModal"
import Modal from 'react-native-modal';

class MainScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openPopup: false,
            username: "",
            id: -1,
            users: this.props.users.usersData
        }
    }
    handleInitialization = async () => {
        await this.props.actions.fetchUsers()
        this.setState({
            users: this.props.users.usersData
        })

    }
    componentDidMount() {
        this.handleInitialization()
    }

    handleItemClick = async (data) => {
        this.props.actions.fetchUserDetail(data.login)
        this.setState({ username: data.login, openPopup: true, id: data.id })
    }
    handleBackdrop = () => {
        this.setState({ openPopup: false })
    }
    render() {
        console.log("AA", this.props.users.usersData.length)
        console.log("BB", this.state.users[0])
        return (
            <SafeAreaView style={styles.container}>
                {!this.props.users.usersData.length > 0 ?
                    <ActivityIndicator style={styles.loader} size="large" /> :
                    <UserList data={this.props.users.searchTerm ?
                        this.state.users.filter((user) => (user.login.includes(this.props.users.searchTerm.toLowerCase()))) :
                        this.state.users
                    }
                        itemClick={this.handleItemClick} />

                }
                <Modal isVisible={this.state.openPopup} useNativeDriver={true}
                    onBackdropPress={this.handleBackdrop}>
                    {this.state.id != this.props.users.userDetail.id ?
                        <View style={styles.containerPopUp}>
                            <ActivityIndicator />
                        </View>
                        :
                        <PopupModal handleClose={this.handleBackdrop} data={this.props.users.userDetail} />
                    }

                </Modal>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    loader: {
        alignItems: "center",
        alignSelf: "center"
    },
    containerPopUp: { backgroundColor: "#fff", padding: 80 },


})
const mapStateToProps = (state) => {
    return {
        users: state
    }

}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            fetchUsers: () => dispatch(fetchUsers()),
            fetchUserDetail: (name) => dispatch(fetchUserDetail(name))
        }
    };
}

// export default connect(mapStateToProps, { fetchUsers })(MainScreen)
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)