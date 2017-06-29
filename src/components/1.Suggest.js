import React,{Component} from 'react';
export default class Suggest extends Component{
    constructor(){
        super();
        this.state = {words:['a','b']};
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {
                                        this.state.words.map((word,index)=>(
                                            <li key={index} className="list-group-item">{word}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}