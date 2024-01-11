// create the Football class
class Football extends React.Component {
  shoot = () => {
    alert(this);  // this will print the object 
  }

  render() {
    return (
      <button onClick={this.shoot}>Take the shot!</button>
    );
  }
}

ReactDOM.render(<Football />, document.getElementById('root'));
