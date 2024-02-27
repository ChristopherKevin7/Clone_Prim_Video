import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232F3E",
        alignItems: "flex-start",
    },

    headerHome: {
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center",
    },

    amazonLogoImg: {
        marginTop: -32,
        marginLeft: 30,
    },

    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
        marginBottom: 15,
    },

    categoryText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#FFFFFF"
    },

    primeText: {
        padding: 15,
        fontSize: 18,
        fontWeight: "700",
        color: "#00A8E1",
        marginLeft: 10,
        paddingRight: 0,
    },

    continueWatching: {
        padding: 20,
        fontSize: 18,
        fontWeight: "700",
        color: "#FFFFFF",
    },

    movieText: {
        padding: 15,
        fontSize: 18,
        fontWeight: "700",
        color: "#FFFFFF",
        paddingLeft: 3,
    },

    movieImageThumbnail: {
        width: "100%",
        alignItems: "center",
    },

    contentList: {
        paddingLeft: 18,
        paddingRight: 30,
    },

    contentMovies: {

    },

    pages: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 12,
        marginBottom: 10,
        paddingHorizontal: 20,
    },

    pagesIcons: {
        opacity: 0.3,
    },

    currentPageIcon: {
        opacity: 0.9,
    },

    pagesText: {
        color: '#ffffff',
        opacity: 0.3,
    },

    currentPageText: {
        opacity: 0.9,
    },

    pagesSelector: {
        alignItems: "center"
    },

    headerTv: {
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#232F000",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    TextHeader: {
        padding: 30,
        paddingTop: 50,
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: '800'
    },

    TVText: {
        padding: 15,
        fontSize: 18,
        fontWeight: "700",
        color: "#FFFFFF",
    },

    titleSection: {
        flexDirection: 'row',
    },

    payText: {
        padding: 20,
        fontSize: 18,
        fontWeight: "700",
        color: "#FFD700",
        paddingLeft: 25,
    },

    paySection: {
        width: "90%"
    },

    Canais: {
        borderRadius: 10,
        width: 90,
        height: 60,
        margin: 20,
        marginTop: 0,
        opacity: 0.7,
    },

    userIcon: {
        width: 50,
        height: 50,
        marginLeft: 15
    },

    rightHeader: {
        flex: 1,
        alignItems: 'flex-end'
    },

    componentsRight: {
        flexDirection: 'row',
    },

    connectivity: {
        marginTop: 10,
    },

    pagedownload: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 300,
    },

    textdownload:{
        fontSize: 18,
        fontWeight: "700",
        color: "#FFFFFF",
    },
});

export default styles;