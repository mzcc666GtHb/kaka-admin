import React, {Component} from 'react';

class HearList extends Component {
    render() {
        return (
            <div>
                <ul className="hero-list">
                    {this.props.data.map(item => {
                        return (
                            <li key={item.name}>
                                <p>姓名:{item.name}</p>
                                <p>绰号:{item.nick}</p>
                                <p>职位:{item.nick}</p>
                                <p>技能:{item.pos}</p>
                                <p>详细介绍:{item.detail}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default HearList;
