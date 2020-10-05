import React, {
    Component
} from 'react'
/**
 *
 * @ author: 
 * @ email: 
 * @ date: 2020-09-19 21:20
 */

class index extends Component {

    render() {
        return (
            <div className="guide fn-clear">
                <span className="logo fl">
                    Home
                </span>
                <a href="" className="login fr">Login</a>
                <span className="serchbox fr">
                    <input type="text"></input>
                    <a href="" className="searchbtn">
                        <img src="/images/search.png" alt=""></img>
                    </a>
                </span>
                <ul className="fr">
                    <li className="fl"><a href="/index/index">index</a></li>
                    <li className="fl"><a href="/index/speech">speech</a></li>
                    <li className="fl"><a href="/index/pic">picture</a></li>
                    <li className="fl"><a href="/index/chat">chat</a>
                    </li>
                </ul>
            </div>
        )   
    }
}

export default index