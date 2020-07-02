let isLoaded = false;

window.onload = () =>{
    isLoaded = true;
}

const MainCard = ({ skill, code, follower }) => {

    return (
        <div className="main-card">
            <div className="flex-container">
                <div className="front-card"></div>
                <div className="left-card">

                    <div className="wrapper">
                        <p className="heading">About</p>
                        <p className="summary">
                            I'm Abdul Moqueet playing around with React.js </p>
                        <a href="https://abdulmoqueet.github.io" className="text material-fix">
                            <span className="material-icons">link</span>
                My Portfolio</a>
                        <p className="text material-fix">
                            <span className="material-icons">location_on</span>
                India</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <p className="skills"><span>{skill}</span> Skills</p>
                <p className="codes"><span>{code}</span> Codes</p>
                <p className="followers"><span>{follower}+</span> Followers</p>
            </div>
        </div>
    );
}

class App extends React.Component {

    state = {
        skill:11,
        code: 41,
        follower: 0
    }

    counter(){
        if(!isLoaded)
            return;

        this.state.follower < 1000 ? (
            this.setState(prevState => ({
              follower: prevState.follower + 1
            }))) : (
                this.setState({
                    follower:'1k'
                }),
            clearInterval(this.intervalId));
    }

    componentDidMount() {
        this.intervalId = setInterval(() => this.counter(), 10);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
      }

    render() {
        return (
            <div className="main-container">
                <MainCard skill={this.state.skill} code={this.state.code} follower={this.state.follower} />
            </div>
        );
    }

}

ReactDOM.render(<App />, document.getElementById('root'));