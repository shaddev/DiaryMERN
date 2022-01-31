import React from "react";
import Editor from 'react-medium-editor';
import DiaryTitle from './DiaryTitle'
import {v4 as uuid} from 'uuid';
import {
    useLocation,
    useNavigate,
    useParams
  } from "react-router-dom";
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');
  


class DiaryEntry extends React.Component{
    constructor(props){
        super(props);
        if (props.editHandler){
            const {id} = this.props.router.params;
            const entry = props.findHandler(id)
            this.state = {...entry}
        }
        else{
        this.state = {text: 'Start your journal entry here...', title:''}
        }
        this.onChangeText = this.onChangeText.bind(this)
        this.publish = this.publish.bind(this)
        this.titleHandler = this.titleHandler.bind(this)
    }

    onChangeText = (text) => {
        this.setState({text: text})
    }

    publish(){
        if(this.state.title === ''){
            alert("Title needed")
            return
        }

        if (this.props.editHandler){
            this.props.editHandler({...this.state});
            
        }
        else{
        this.props.publishHandler({...this.state, id: uuid().replaceAll("-","").slice(0,24), date: new Date().toDateString()})
        }
        this.props.router.navigate('/')
    }

    titleHandler(title){
        this.setState({title: title})
    }

    render(){
    return(
        <div className="diaryEntry">
            <h1>
                Your Diary Entry
                <button className="publishButton" onClick={this.publish}>Publish</button>
            </h1>

            <DiaryTitle titleHandler={this.titleHandler} titleText={this.state.title}/>

            <h2>
                Entry
            </h2>
            <Editor className='bodyEditor'
                     text={this.state.text} 
                     onChange={this.onChangeText}
                      />
        </div>
    )
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }


export default withRouter(DiaryEntry);