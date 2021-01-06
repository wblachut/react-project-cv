import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: props.editMode,
      skillList: [
        {
            id: 0,
            name: 'Cooking',
            description: 'Pretty decent cook even for a hobbit.',
        },
        {
            id: 1,
            name: 'Sword fighting',
            description: 'Small but brave! Fought the Wraith King in the War of the Ring.',
        },
    ],
      skillsTitle: "Skills",
      skillName: "",
      skillDescription: "",
      skillExpertise: "",
    };
  }

  inputTextHandler(e) {
    this.setState({ [e.target.dataset.key]: e.target.value })
  }

  onSubmitItem() {
    const skillName = this.state.skillName;
    const skillDescription = this.state.skillDescription;
    let skillList = [...this.state.skillList, {name: skillName, description: skillDescription} ];
    // no skill expertise
    this.setState({skillList});
    console.log(this.state.skillList)
  }
  
  onDeleteItem(index) {
      console.log(index);
       let skillList = [...this.state.skillList];
       skillList.splice(index, 1)
       this.setState({skillList: skillList})
  }

  render() {
    if (this.props.editMode) {
      return (
        <div className="skills">
          <h2>{this.state.skillsTitle}
          <input type="text" data-key="skillsTitle"  placeholder=" "
          value = {this.state.skillsTitle} 
           onChange={(e) => this.inputTextHandler(e) } />
             </h2>
           <h5>Skill name
              <input type="text" data-key="skillName" placeholder=" "
                onChange={(e) => this.inputTextHandler(e) } />  </h5>
           <h5>Skill description
              <input type="text" data-key="skillDescription" placeholder=" "
                onChange={(e) => this.inputTextHandler(e) } /> </h5>
           <h5>Skill expertise
               <input type="number" range={0-5} data-key="skillExpertise" placeholder=" "
                onChange={(e) => this.inputTextHandler(e) } /> </h5>

            <button className="add-new-btn" onClick = {this.onSubmitItem.bind(this)}> Add
                  <FontAwesomeIcon icon={["fas", "plus-circle"]} className="gh-add"/>
                 </button>

            <ul>
              {this.state.skillList.map((skill, i) => {
                return <li key={i}>
                <button id={i} onClick = {() => this.onDeleteItem(i)}
                className="trash-del"><FontAwesomeIcon icon={["fas", "trash"]} /></button>
                  <h3>{skill.name}</h3>
                  <h5>{skill.description}</h5>
                </li>
              })}
            </ul>
            <hr/>
        </div>
      )
    } else {
     return (
      <div className="skills">
        <h2> {this.state.skillsTitle} </h2>
        <ul>
          {this.state.skillList.map((skill, i) => {
                return <li key={i}>
                <h3>{skill.name}</h3>
                <h5>{skill.description}</h5>
            </li>
          })}
        </ul>
        <hr/>
      </div>
    )

    }
  }
}
