import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from './react-lib/components/element/elementTextfiled'
import InputAdornment from "@material-ui/core/InputAdornment";
import {AccountCircle} from "@material-ui/icons";
import axiox from 'axios'

class Test extends React.Component{
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        
        const ws = new WebSocket(`wss://115.29.139.81:433/ws/exceptionOrder`);
       //                            wss://115.29.139.81:433/ws/exceptionOrder
        ws.onopen = function (ev){
            console.log("建立连接")
            ws.send("建立连接")
        }
        ws.onmessage = function (event){
            if (event.data){
                let lists = Object.keys(event.data).map((item, index) => ({key: item, value:event.data[item]}))
                setErrorOrders(lists)
            }
        }
        
        
        let url = 'https://petstore.swagger.io/v2/pet/1'
        axiox({url:url})
            .then((res)=>{
                console.log(res.data)
                console.log(res.status)
            })
            .catch((err)=>{
                console.log(err.response)
            })
    }

    oneItem = {
        id:'phone',
        error:false,
        inputProps: {startAdornment: (<InputAdornment><AccountCircle /></InputAdornment>)}
    }

    render() {
        return (
            <div>
                <TextInput oneItem={this.oneItem} />
            </div>
        )
    }
}


ReactDOM.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
  document.getElementById('root')
);
