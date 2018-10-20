import React from 'react'
import Child from './Child'

class Mine extends React.Component{
    render (){
        return(
            <div>
                <div id="mine">
                    HELLO WORLD
                </div>
                < div > React js is cool </div>
            <Child />
            <br/>
            < Child / >
            </div>
        );
    }
}

export default Mine;