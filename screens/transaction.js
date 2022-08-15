
import React,{Component}  from "react";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native";
import * as Permissions from "expo-permissions";
import {BarCodeScanner} from "expo-barcode-scanner";


export default class TransactionScreen extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            donstate: "normal",
            camerapermission: null,
            scanned: false,
            scannerdata: ""
        }
    }

    getCameraPermission = async donstate =>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);

        this.setState({
            /*
            status === "granted" é verdadeiro se o usuario conceder a permissão
            status === "granted" é falso se o usuario não conceder a permissão
            */
            camerapermission:status === "granted",
            donstate:donstate,
             scanned: false
        })
    }

    randomBarCodeScanned = async ({type,data}) => {
        this.setState({
            scannerdata:data,donstate:"normal",scanned:true
        })
    }

    render(){
        const {donstate,camerapermission,scanned,scannerdata}= this.state;
        
        if (donstate=== "scanner"){
            return(
                <BarCodeScanner 
                onBarCodeScanned={scanned ? undefined: this.randomBarCodeScanned}
                style ={StyleSheet.absoluteFillObject}
                />
            )
        }

        return(
            <View style ={styles.container}>
                 <Text>
                    {camerapermission ? scannerdata :"solicitar permissão para a camera"}
                 </Text>
                <TouchableOpacity style ={styles.button} onPress={()=> this.getCameraPermission("scanner")}>
                <Text style ={styles.buttonText}>
                    digitalizar qr code
                </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#5653D4",

    },
    text:{
        color:"#ffffff",
        fontSize:15,
    },
    button:{
        width:"43%",
        height:"55%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#F48D20",
        borderRadius:15
    },
    buttonText:{
        color:"#ffffff",
        fontSize:24,
    }
    

})