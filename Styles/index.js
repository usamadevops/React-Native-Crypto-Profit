import { StyleSheet } from 'react-native';
import { Color, Font } from '../Constants'
const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: Color.Primary

      },
      container__Inside: {
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderBottomEndRadius: 30,
            borderBottomStartRadius: 30,
            marginBottom: 23
      },
      Header: {
            fontFamily: Font.Font.Bold,
            fontSize: 24,
            color: Color.Secondary
      },
      container__Inside2: {
            flex: 6.5,
            alignItems: "center"
      },
      boxes: {

            height: ("7.96875%"),
            width: ("90%"),
            backgroundColor: Color.Secondary,
            borderRadius: 5,

            alignItems: "flex-start",
            justifyContent: "center",
            paddingLeft: 10,
            marginBottom: 10,

      },
      Inside__Box: {
            flexDirection: "row",
            width: ('70%'),
            alignItems: "center",



      },
      Text: {
            fontFamily: Font.Font.Book,
            fontSize: 18,
            color: Color.Primary,
            width: ('100%'),

      },
      Text2: {
            fontFamily: Font.Font.Medium,
            fontSize: 16,
            color: Color.Primary,

            paddingLeft: 10
      },
      Text3: {
            fontFamily: Font.Font.Medium,
            fontSize: 16,
            color: Color.Secondary,
            marginLeft: '5%',
            marginBottom: 10,
            alignSelf: "flex-start"

      },
      ButtonView: {
            width: ("90%"),
            height: ("7%"),
            backgroundColor: "#FF5C00",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",

      },
      Button: {
            justifyContent: "center",
            alignItems: "center"
      },
      ResultBox: {
            backgroundColor: Color.Primary,
            minWidth: ("80%"),
            minHeight: ('23%'),
            borderWidth: 0.5,
            borderColor: Color.Secondary,
            elevation: 2,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
      },
      ResultTextBig: {
            textAlign: "center",
            fontFamily: Font.Font.Book,
            fontSize: 78
      },
      ResultTextSmall: {
            textAlign: "center",
            fontFamily: Font.Font.Book,
            fontSize: 20,
            marginHorizontal: 10,
      }
});
export default styles;