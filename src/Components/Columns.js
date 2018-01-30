import React, {Component} from 'react';
import Cards from './Cards';

const colStyle = {
    backgroundColor:'#f8f8f8',

}
class Column extends Component {
    render() {
        return (
        <div style={colStyle}>
            <Cards />
        </div>
     )
    }
}

export default Column;
