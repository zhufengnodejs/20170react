import React,{Component} from 'react';
export default class MessageBox extends Component{
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading"></div>
                            <div className="panel-body"></div>
                            <div className="panel-footer"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}