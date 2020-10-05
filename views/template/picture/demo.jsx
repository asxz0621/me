import React,{useState,useEffect} from "react";
import axios from "axios";
const Clarifai = require('clarifai');
/* 将组件改变成函数写法 */
export default function speech() {
    const [file, setfile] = useState([]);/* 图片名称选择列表 */
    const [pic, setpic] = useState("");/* 显示新的图片 */
    const [list, setlist] = useState([]);/* tag加载列表 */
    const [con, setcon] = useState([]);/* 数据库记录显示 */
    const [type, settype] = useState("");/* 选中的文字信息 */
    const [loading, setloading] = useState(false);/* 加载状态 */
    useEffect(() => {
        setpic("");
        repng()
        formlist()
      },[])
    /* 上传信息到数据库 */
    function savetxt() {
        console.log(pic)
        axios.post('/picture/add', {
            path:pic,
            desc:type
        })
        .then(function (res) {
            if (res.data.result == 'success') {
                console.log(res);
                formlist()
            }

        })
        .catch(function (error) {
            console.log(error);
        });
    }
    /* 数据库显示列表数据渲染 */
    function formlist() {
        axios.get('/picture/findAll', {
        })
        .then(function (res) {
            setcon(res.data);
            console.log(res);
            /* 获取新的图片内容 */
            repng();
        })
        .catch(function (error) {
            console.log(error);
        });
        // setlist()
    }
    /* 刷新图片 */
    function repng() {
        setloading(true)
        setpic("")
        setfile([])
        
    /* 刷新获取到数据前，先令图片为空，列表为空 */
        const app = new Clarifai.App({
            apiKey: '1d01e05c06c34ae893ad8109eaebf6a3'
        });
        var now = new Date().getTime();
        
        axios.get('http://picsum.photos/v2/list')
            .then(function (res) {
                
                console.log(res);
                var c =  Math.floor((Math.random() * res.data.length))
                let mypic = res.data[c].download_url;
                setpic(mypic);
                // Prediction on general model using video API
                app.models.predict(Clarifai.GENERAL_MODEL,mypic)
                    .then((res) => {
                        setloading(false)
                    console.log(res)
                    let result = res.outputs[0].data.concepts.filter((ele, i) => { return i < 10 })
                    console.log(result)
                    setfile(result)
                    
                })
                .catch((err)=> {
                    console.log(err)
                });
        })
        .catch(function (error) {
            console.log(error);
        });


        let mypic =  "http://picsum.photos/200/200.jpg?dates=" + now;

    }
    /* 获取选中的类型文字信息 */
    function choose(e) {
        settype(e.target.innerHTML)
    }
    return (
        <div>
            <h2>picture</h2>
            <p>Please choose the corresponding name according to the picture</p>
            <div className="conpng">
                <img src={pic+'?random='+Date.parse(new Date())} alt="" />
                <h2>choose your tag</h2>
                <div className="chooselist">
                    <ul>
                    {file.map((item,i) =>
                        <li key={i} data-uid={i} className={type == item.name ? "sure" : ""} onClick={choose}>
                            {item.name}
                        </li>
                    )}
                    </ul>
                </div>
            </div>
            <div className="formname">
                
                <ul>
                    {list.map((item,i) =>
                        <li key={i} >{i}{item.desc}</li>
                    )}
                </ul>
            </div>
            <div className="conbtns">
            <button onClick={savetxt}>save in database</button>
            <button onClick={repng}>Refresh picture</button>
            </div>

            <h2>show list</h2>
            <div className="conlist">
                
                <ul>
                    {con.map((item,i) =>
                        <li key={i} >
                            <div className="png"><img src={item.path} alt="" /></div>
                            <div className="txt">{item.desc}</div>
                            </li>
                    )}
                </ul>
            </div>
            <div  className={loading==true?"show loading":" loading"}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
        </div>
    
    )
}