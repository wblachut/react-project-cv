import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Header extends React.Component {
  constructor(props) {
    super();

    this.state = {};
  } 

  static getDerivedStateFromProps(props, state) {
      if ((props.editTag && state.editTag !== props.editTag) &&
      (props.editMode && state.editMode !== props.editMode)) {
        return {
          editTag: props.editTag,
          editMode: props.editMode
        }
      }
      return null
    }
  
  // necessary ?
  onEditToggle() {
    this.props.edit(this.state.editMode);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <div className="cv">Curriculum Vitae</div>
            <div className="right-elements">
              <button className="edit-cv-btn" 
                  onClick={this.onEditToggle.bind(this)}>
                  <FontAwesomeIcon icon={["fas", "user-edit"]} className="gh-edit"/>
                {this.props.editTag}</button>
              <a href="https://github.com/wblachut" className="gh-btn">
                <FontAwesomeIcon icon={["fab", "github"]} className="gh-icon" />
                  </a><i className="fab fa-github"></i>
            </div>
          </div>
        </div>
      </nav>
    )
  }
} 

// Header.propTypes = {
//   editTag: React.PropTypes.string,
//   editMode: React.PropTypes.string,
//   edit: React.PropTypes.func,
// };