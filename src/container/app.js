import React ,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import movieList from '../action';
import Display from '../component/displayComponent'

class App extends Component{

    componentDidMount(){
        this.props.movieList();
    }

    render(){
        return(
            <React.Fragment>
                 <h1>React-redux demo</h1>
                 <Display data={this.props.data}></Display>
            </React.Fragment>

           
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    return{
        data:state.movies
    }
        
    
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({movieList},dispatch);
}



export default connect(mapStateToProps,mapDispatchToProps)(App);