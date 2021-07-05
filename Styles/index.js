import { StyleSheet } from 'react-native';
import { Color, Font } from '../Constants'
const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#fff',
      },
      container__Inside: {
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
      },
      Header: {
            fontFamily: Font.Font.Bold,
            fontSize: 18
      },
      container__Inside2: {
            flex: 5,
            alignItems: "center"
      },
      boxes: {
            height: ("7.96875%"),
            width: ("90%"),
            backgroundColor: Color.Secondary,
            borderRadius: 5,
            
            alignItems: "flex-start",
            justifyContent: "center",
            paddingLeft: 20,
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
            width: ('100%'),
            textAlign:"center"
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
      ResultBox:{
      backgroundColor:"#fff",
      width:("90%"),
      height:('30%'),
      borderWidth:2,
      borderColor:"#ffd11d",
      elevation:2,
      borderRadius:20,
      justifyContent:"center",
      alignItems:"center",
      marginVertical:40,
      },
      ResultTextBig:{
            textAlign:"center",
            fontFamily:Font.Font.Book,
            fontSize:64
      },
      ResultTextSmall:{
            textAlign:"center",
            fontFamily:Font.Font.Book,
            fontSize:20,
       marginHorizontal:10,
      }
});
export default styles;