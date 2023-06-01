import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: `航拍无人机a`
        }
    }   
    componentDidMount() {
        axios.get('https://dofs-api-cn.dji.com/variants/status').then((res) => {
            console.log(res, 'res');
            this.setState({
                data: res.data
            })
        })
    }

    render() {
        const { data } = this.state;
        return (
            <div className="login_background">
                <div className='contain'>
                   <div className='icon-nav'>
                        <a href='' style={{backgroundImage: `url("//stormsend1.djicdn.com/stormsend/uploads/860566baa96fc10a206d0641bfd2a21d.jpg")`}}>
                            <div className='text'>{data}</div>
                        </a>
                   </div>
                   <div className='icon-nav'>
                        <a href='' style={{backgroundImage: `url("//stormsend1.djicdn.com/stormsend/uploads/860566baa96fc10a206d0641bfd2a21d.jpg")`}}>
                            <div className='text'>{data}</div>
                        </a>
                   </div><div className='icon-nav'>
                        <a href='' style={{backgroundImage: `url("//stormsend1.djicdn.com/stormsend/uploads/860566baa96fc10a206d0641bfd2a21d.jpg")`}}>
                            <div className='text'>{data}</div>
                        </a>
                   </div><div className='icon-nav'>
                        <a href='' style={{backgroundImage: `url("//stormsend1.djicdn.com/stormsend/uploads/860566baa96fc10a206d0641bfd2a21d.jpg")`}}>
                            <div className='text'>{data}</div>
                        </a>
                   </div><div className='icon-nav'>
                        <a href='' style={{backgroundImage: `url("//stormsend1.djicdn.com/stormsend/uploads/860566baa96fc10a206d0641bfd2a21d.jpg")`}}>
                            <div className='text'>{data}</div>
                        </a>
                   </div><div className='icon-nav'>
                        <a href='' style={{backgroundImage: `url("//stormsend1.djicdn.com/stormsend/uploads/860566baa96fc10a206d0641bfd2a21d.jpg")`}}>
                            <div className='text'>{data}</div>
                        </a>
                   </div><div className='icon-nav'>
                        <a href='' style={{backgroundImage: `url("//stormsend1.djicdn.com/stormsend/uploads/860566baa96fc10a206d0641bfd2a21d.jpg")`}}>
                            <div className='text'>{data}</div>
                        </a>
                   </div><div className='icon-nav'>
                        <a href='' style={{backgroundImage: `url("//stormsend1.djicdn.com/stormsend/uploads/860566baa96fc10a206d0641bfd2a21d.jpg")`}}>
                            <div className='text'>{data}</div>
                        </a>
                   </div>
                </div>
            </div>

        );
    }
}

export default Home