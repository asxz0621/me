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
            <div className="footer fn-clear">
                <div className="fl contxt">
                    NEWSLETTER SIGN
                    <input placeholder="Enter your email"></input>
                    <a className="submitbtn">submit</a>
                </div> 
                <div className="contactus fl">
                    <span className="fl">CONNECT US</span>
                    <a  className="fl"><img src='/images/facebook.png'></img></a>
                    <a  className="fl"><img src='/images/twitter43.png'></img></a>
                </div>  
            </div>
        )   
    }
}

export default index