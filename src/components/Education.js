import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: props.editMode,
      eduList: [
        {
            id: 0,
            period: '2329 - 2332',
            institution: 'School of Hobbiton',
            field: 'Agriculture & Brewery',
            eduExpertise:
                'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
        },
    ],
      educationTitle: "Education",
      eduInstitution: "",
      eduField: "",
      eduPeriod: "",
      eduExpertise: "",
    };
  }

  inputTextHandler(e) {
    this.setState({ [e.target.dataset.key]: e.target.value })
  }

  onSubmitItem() {
    const eduInstitution = this.state.eduInstitution;
    const eduField = this.state.eduField;
    const eduPeriod = this.state.eduPeriod;
    const eduExpertise = this.state.eduExpertise;
    let eduList = [...this.state.eduList, {institution: eduInstitution, field: eduField, period: eduPeriod, eduExpertise: eduExpertise} ];
    this.setState({eduList});
    console.log(this.state.eduList)
  }
  
  onDeleteItem(index) {
       let eduList = [...this.state.eduList];
       eduList.splice(index, 1)
       this.setState({eduList: eduList})
  }

  render() {
    if (this.props.editMode) {
      return (
        <div className="experience">
          <h2>{this.state.educationTitle}
          <input type="text" data-key="educationTitle" placeholder=" "
            value={this.state.educationTitle}
           onChange={(e) => this.inputTextHandler(e) } />
             </h2>
           <h5>Field of Study / Major
              <input type="text" data-key="eduField" placeholder=" "
                onChange={(e) => this.inputTextHandler(e) } />  </h5>
           <h5>Institution
              <input type="text" data-key="workCompany" placeholder=" "
                onChange={(e) => this.inputTextHandler(e) } /> </h5>
           <h5>Period
              <input type="text" data-key="eduPeriod" placeholder=" "
                onChange={(e) => this.inputTextHandler(e) } />  </h5>
           <h5>Expertise
               <input type="text" data-key="eduExpertise" placeholder=" "
                onChange={(e) => this.inputTextHandler(e) } /> </h5>

            <button className="add-new-btn" onClick = {this.onSubmitItem.bind(this)}> Add
                  <FontAwesomeIcon icon={["fas", "plus-circle"]} className="gh-add"/>
                 </button>

            <ul>
              {this.state.eduList.map((edu, i) => {
                return <li key={i}>
                <button id={i} onClick = {() => this.onDeleteItem(i)}
                className="trash-del"><FontAwesomeIcon icon={["fas", "trash"]} /></button>
                  <h3>{edu.field}</h3>
                  <h5>{edu.institution} ({edu.period})</h5>
                  <span>{edu.eduExpertise}</span>
                </li>
              })}
            </ul>
            <hr/>
        </div>
      )
    } else {
     return (
      <div className="experience">
        <h2> {this.state.educationTitle} </h2>
        <ul>
          {this.state.eduList.map((edu, i) => {
                return <li key={i}>
                <h3>{edu.field}</h3>
                <h5>{edu.institution} ({edu.period})</h5>
                <span>{edu.eduExpertise}</span>
            </li>
          })}
        </ul>
        <hr/>
      </div>
    )

    }
  }
}
