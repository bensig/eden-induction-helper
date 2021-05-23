import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'style.css';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inductee: '<inductee>',
      inductor: '<inductor>',
      witness1: '<witness 1>',
      witness2: '<witness 2>'
    };
  }
  inductee = event => {
    this.setState({ inductee: event.target.value });
  };
  witness1 = event => {
    this.setState({ witness1: event.target.value });
  };
  inductor = event => {
    this.setState({ inductor: event.target.value });
  };
  witness2 = event => {
    this.setState({ witness2: event.target.value });
  };

  render() {
    return (
      <form>
        <h1>Eden 🍏 Induction Helper</h1>
        <h2>Instructions</h2>
        <ol>
          <li>
            We advise everyone to think carefully about who they invite to Eden,
            as a general rule of thumb, it's recommeded that you invite someone
            who you would trust to be in your house alone when you are not
            there.
          </li>
          <li>
            Please be sure that the inductee has read and understands the{' '}
            <a href="https://www.notion.so/Eden-Peace-Treaty-5b15633ca09c4c6495a5b60f7bc92db2">
              Peace Treaty
            </a>{' '}
            before you begin.
          </li>
          <li>
            Fill out everyone's names in the form below and read through it. The
            entire script (except for the parts in parentheses) is meant to be
            read by the "inductor."
          </li>
          <li>
            Start recording video of all partipants in gallery mode and follow
            the script.
          </li>
        </ol>
        <p>
          Enter name of inductee:
          <input type="text" onChange={this.inductee} />
        </p>
        <p>
          Enter name of inductor:
          <input type="text" onChange={this.inductor} />
        </p>
        <p>
          Enter name of witness 1:
          <input type="text" onChange={this.witness1} />
        </p>
        <p>
          Enter name of witness 2:
          <input type="text" onChange={this.witness2} />
        </p>

        <h2>Induction Script for {this.state.inductee}</h2>
        <p>
          My name is {this.state.inductor}. We are here today to induct{' '}
          {this.state.inductee} into the Eden community. I am joined by{' '}
          {this.state.witness1} and {this.state.witness2} of the Eden community
          who wish to express their support for the addition of{' '}
          {this.state.inductee}.
        </p>
        <p>
          {this.state.inductee}, have you read and understood the Eden Peace
          Treaty?
        </p>
        <p>
          ({this.state.inductee} confirms or declines - If they say no, then you
          can stop here.)
        </p>
        <p>{this.state.inductee} do you agree to abide by the Peace Treaty?</p>
        <p>
          ({this.state.inductee} confirms or declines - if they say no, then you
          can stop here.)
        </p>
        <p>
          {this.state.witness1}, do you believe {this.state.inductee}{' '}
          understands and will abide by the Peace Treaty?
        </p>
        <p>
          ({this.state.witness1} confirms or declines - if they say no, then you
          can stop here.)
        </p>
        <p>
          {this.state.witness2} do you believe {this.state.inductee} understands
          and will abide by the Peace Treaty?
        </p>
        <p class="italic">
          ({this.state.witness2} confirms or declines - - if they say no, then
          you can stop here.)
        </p>
        <p>
          I believe {this.state.inductee} understands the Peace Treaty and will
          abide by it.
        </p>
        <p>{this.state.inductee}, welcome to the Eden!</p>
        <p>(You can stop recording now.)</p>
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
