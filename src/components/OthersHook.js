import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Others = (props) => {
  const [state, setState] = useState({
    othersTitle: "Others",
    newOtherName: "",
    newOtherDetails: "",
    newOtherAdditional: ""
  })

  const [othersList, setOthersList] = useState([
      {
          id: 0,
          name: 'Reference',
          description: 'Reference from King Theoden son of Thengel',
          additional: 'the King has passed'
      },
      {
          id: 1,
          name: 'Reference',
          description: 'Reference from King Eomere son of Eomund',
          additional: 'Meduseld, Edoras, Rohan, Middle-earth',
      },
      {
          id: 2,
          name: 'One of Fellowship of The Ring',
          description: 'Accompanied Ring-bearer till Rauros waterfalls',
          additional: 'helped Frodo with travel to Rivendel and joined the Fellowship afterwards',
      }
  ]);

  const inputTextHandler = (e) => {
  setState({ ...state, [e.target.dataset.key]: e.target.value });
  console.log(state);
}

  const onSubmitItem = () => {
    const newListElement = {
      id: othersList.length,
      name: state.newOtherName,
      description: state.newOtherDetails,
      additional: state.newOtherAdditional }
      setOthersList([...othersList, newListElement ]);
  }
  
  const onDeleteItem = (index) => {
      let newOthersList = [...othersList];
      newOthersList.splice(index, 1)
      setOthersList(newOthersList)
  }

    if (props.editMode) {
      return (
        <div className="others">
          <h2>{state.othersTitle}
          <input type="text" data-key="othersTitle"  placeholder=" "
          value = {state.othersTitle} 
           onChange={(e) => inputTextHandler(e) } />
             </h2>
           <h5>{state.othersTitle}: name
              <input type="text" data-key="newOtherName" placeholder=" "
                onChange={(e) => inputTextHandler(e) } />  </h5>
           <h5>{state.othersTitle}: description 
              <input type="text" data-key="newOtherDetails" placeholder=" "
                onChange={(e) => inputTextHandler(e) } /> </h5>

            <button className="add-new-btn" onClick = {onSubmitItem.bind(this)}> Add
                  <FontAwesomeIcon icon={["fas", "plus-circle"]} className="gh-add"/>
                 </button>

            <ul>
              {othersList.map((other, i) => {
                return <li key={i}>
                <button id={i} onClick = {() => onDeleteItem(i)} className="trash-del"><FontAwesomeIcon icon={["fas", "trash"]} /></button>
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
        <h2> {state.othersTitle} </h2>
        <ul>
          {othersList.map((other, i) => {
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