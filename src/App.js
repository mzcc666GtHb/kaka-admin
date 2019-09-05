import React, {Component} from 'react';
import HeroList from './views/HeroList'
import hearData  from './data/hero'
import './assets/css/base.less'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: hearData
        }
    }
    render() {
        return (
            <div>
                <HeroList data={this.state.arr}></HeroList>
            </div>
        );
    }
}

export default App;
