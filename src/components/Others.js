import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export class Others extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: props.editMode,
      othersList: [
        {
            id: 0,
            name: 'Reference',
            description: 'Reference from King Theoden son of Thengel',
            additional: 'the King has passed',
        },
        {
            id: 1,
            name: 'Reference',
            description: 'Reference from King Eomere son of Eomund',
            additional: 'Meduseld, Edoras, Rohan, Middle-earth',
        },
        {
            id: 1,
            name: 'One of Fellowship of The Ring',
            description: 'Accompanied Ring-bearer till Rauros waterfalls',
            additional: 'helped Frodo with travel to Rivendel and joined the Fellowship afterwards',
        },
    ],
      othersTitle: "Others",
      newOtherName: "",
      newOtherDetails: "",
      newOtherAdditional: "",
    };
  }

  inputTextHandler(e) {
    this.setState({ [e.target.dataset.key]: e.target.value })
  }

  onSubmitItem() {
    const newOtherName = this.state.newOtherName;
    const newOtherDetails = this.state.newOtherDetails;
    const newOtherAdditional = this.state.newOtherAdditional;
    let othersList = [...this.state.othersList, {name: newOtherName, description: newOtherDetails, additional: newOtherAdditional} ];
    // no other expertise
    this.setState({othersList});
    console.log(this.state.othersList)
  }
  
  onDeleteItem(index) {
      console.log(index);
       let othersList = [...this.state.othersList];
       othersList.splice(index, 1)
       this.setState({othersList: othersList})
  }

  render() {
    if (this.props.editMode) {
      return (
        <div className="others">
          <h2>{this.state.othersTitle}
          <input type="text" data-key="othersTitle"  placeholder=" "
          value = {this.state.othersTitle} 
           onChange={(e) => this.inputTextHandler(e) } />
             </h2>
           <h5>{this.state.othersTitle}: name
              <input type="text" data-key="newOtherName" placeholder=" "
                onChange={(e) => this.inputTextHandler(e) } />  </h5>
           <h5>{this.state.othersTitle}: description 
              <input type="text" data-key="newOtherDetails" placeholder=" "
                onChange={(e) => this.inputTextHandler(e) } /> </h5>

            <button className="add-new-btn" onClick = {this.onSubmitItem.bind(this)}> Add
                  <FontAwesomeIcon icon={["fas", "plus-circle"]} className="gh-add"/>
                 </button>

            <ul>
              {this.state.othersList.map((other, i) => {
                return <li key={i}>
                <button id={i} onClick = {() => this.onDeleteItem(i)}
                className="trash-del"><FontAwesomeIcon icon={["fas", "trash"]} /></button>
                  <h3>{other.name}</h3>
                  <h5>{other.description}</h5>
                   <span>{other.additional}</span>
                </li>
              })}
            </ul>
            <hr/>
        </div>
      )
    } else {
     return (
      <div className="others">
        <h2> {this.state.othersTitle} </h2>
        <ul>
          {this.state.othersList.map((other, i) => {
                return <li key={i}>
                <h3>{other.name}</h3>
                <h5>{other.description}</h5>
                <span>{other.additional}</span>
            </li>
          })}
        </ul>
        <hr/>
      </div>
    )

    }
  }
}
