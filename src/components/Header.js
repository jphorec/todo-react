import React, {Component} from 'react';

class Header extends Component {
    render () {
        return (
            <div className="navbar navbar-inverse avbar-fixed-top"> 
                <div className="container">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> 
                    <ul className="nav navbar-brand">
                        <li>  
                            <a href="#">Todo App</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;