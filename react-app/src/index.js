import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from './react-lib/components/element/elementTextfiled'
import InputAdornment from "@material-ui/core/InputAdornment";
import {AccountCircle} from "@material-ui/icons";


class Test extends React.Component{
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {

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
