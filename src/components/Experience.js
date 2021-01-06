import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: props.editMode,
      jobList: [
        {
            id: 0,
            period: '2332 - 2349',
            company: 'Goods of Shire Ltd.',
            position: 'Farmer',
            workDuties:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        },
        {
            id: 1,
            period: '2349 - 2366',
            company: 'The Rohirrims',
            position: 'Armour-bearer',
            workDuties:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
        },
    ],
      jobsTitle: "Experience",
      workCompany: "",
      workPosition: "",
      workPeriod: "",
      workDuties: "",
    };
  }

  inputTextHandler(e) {
    this.setState({ [e.target.dataset.key]: e.target.value })
  }

  onSubmitItem() {
    const workCompany = this.state.workCompany;
    const workPosition = this.state.workPosition;
    const workPeriod = this.state.workPeriod;
    const workDuties = this.state.workDuties;
    let jobList = [...this.state.jobList, {company: workCompany, position: workPosition, period: workPeriod, workDuties: workDuties} ];
    this.setState({jobList});
    console.log(this.state.jobList)
  }
  
  onDeleteItem(index) {
       let jobList = [...this.state.jobList];
       jobList.splice(index, 1)
       this.setState({jobList})
  }

  render() {
    if (this.props.editMode) {
      return (
        <div className="experience">
          <h2>{this.state.jobsTitle}
          <input type="text" data-key="jobsTitle" placeholder=" "
           value={this.state.jobsTitle}
           onChange={(e) => this.inputTextHandler(e) } />
             </h2>
           <h5>Position
              <input type="text" data-key="workPosition" placeholder=" "
                onChange={(e) => this.inputTextHandler(e) } />  </h5>
           <h5>Company
              <input type="text" data-key="workCompany" placeholder=" "
                onChange={(e) => this.inputTextHandler(e) } /> </h5>
           <h5>Period
              <input type="text" data-key="workPeriod" placeholder=" "
                onChange={(e) => this.inputTextHandler(e) } />  </h5>
           <h5>Duties
               <input type="text" data-key="workDuties" placeholder=" "
                onChange={(e) => this.inputTextHandler(e) } /> </h5>

            <button className="add-new-btn" onClick = {this.onSubmitItem.bind(this)}> Add
                  <FontAwesomeIcon icon={["fas", "plus-circle"]} className="gh-add"/>
                 </button>

            <ul>
              {this.state.jobList.map((job, i) => {
                return <li key={i}>
                  <button id={i} onClick = {() => this.onDeleteItem(i)}
                  className="trash-del"><FontAwesomeIcon icon={["fas", "trash"]} /></button>
                  <h3>{job.position}</h3>
                  <h5>{job.company} ({job.period})</h5>
                  <span>{job.workDuties}</span>
                </li>
              })}
            </ul>
            <hr/>
        </div>
      )
    } else {
     return (
      <div className="experience">
        <h2> {this.state.jobsTitle} </h2>
        <ul>
          {this.state.jobList.map((job, i) => {
                return <li key={i}>
                <h3>{job.position}</h3>
                <h5>{job.company} ({job.period})</h5>
                <span>{job.workDuties}</span>
            </li>
          })}
        </ul>
        <hr/>
      </div>
    )

    }
  }
}
