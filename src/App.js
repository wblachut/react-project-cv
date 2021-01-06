import './style/App.css';
import './style/Header.css';
import { Component } from 'react';

import { Header } from "./components/Header";
import { Personal } from "./components/Personal";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Others } from "./components/OthersHook";

class App extends Component {
  constructor() {
    super();
    this.state = {
      editTag: "Edit",
      editMode: false,
    };
  }

// functionality goes here
  onEdit(editMode, editTag) {
    if (this.state.editMode) {
      this.setState({
        editMode: false,
        editTag: "Edit"
      });
      console.log(this.state.editTag);
    } else {
      this.setState({
        editMode: true,
        editTag: "Submit"
      });
      console.log(this.state.editTag);
    }
  }

render() {
  return (
    <div className="Cv-App">
      <Header
          editTag={this.state.editTag}
          editMode={this.state.editMode}
          edit={() => this.onEdit()}
      />
        <div className="cv-container">
          <Personal editMode = {this.state.editMode}/>
          <Experience editMode = {this.state.editMode}/>
          <Education editMode = {this.state.editMode}/>
          <Skills editMode = {this.state.editMode}/>
          <Others editMode = {this.state.editMode}/>

        </div>

    </div>
  );
}
}


export default App;
