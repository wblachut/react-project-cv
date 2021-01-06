import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: props.editMode,
      userName: "Somebody Anybody",
      userPhone: "123-456-789",
      userEmail: "dummy@email.com",
      userFacebook: "Facebook Profile",
      userLinkedin: "LinkedIn Profile",
      userGithub: "GitHub Portfolio",
      userIntroName: "Personal Profile",
      userIntroTxt: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
    };
  }

  // eslint-disable-next-line no-dupe-class-members
  inputTextHandler(e) {
    this.setState({ [e.target.dataset.key]: e.target.value })
  }

  render() {
    if (this.props.editMode) {
      return (
        <div className="summary">
          <h1>Somebody Anybody</h1>
          <input type="text" data-key="userName"
            value={this.state.userName} 
           onChange={(e) => this.inputTextHandler(e) } />
          <div className="personal-content">
          
          <div className="personal-info">
          <h5><FontAwesomeIcon icon={["fas", "phone"]} className="gh-edit" />
           <input type="text" data-key="userPhone"
            value={this.state.userPhone} 
            onChange={(e) => this.inputTextHandler(e) } /> 
           </h5>
          <h5><FontAwesomeIcon icon={["fas", "envelope"]} className="gh-edit" />
           <input type="text" data-key="userEmail"
            value={this.state.userEmail} 
            onChange={(e) => this.inputTextHandler(e) } /> 
          </h5>
          <h5><FontAwesomeIcon icon={["fab", "facebook"]} className="gh-edit" />
          <input type="text" data-key="userFacebook"
           value={this.state.userFacebook}
           onChange={(e) => this.inputTextHandler(e) } />
          </h5> 
          <h5><FontAwesomeIcon icon={["fab", "linkedin"]} className="gh-edit" />
          <input type="text" data-key="userLinkedin"
           value={this.state.userLinkedin}
           onChange={(e) => this.inputTextHandler(e) }/>
          </h5> 
          <h5><FontAwesomeIcon icon={["fab", "github"]} className="gh-edit" />
          <input type="text" data-key="userGithub"
           value={this.state.userGithub}
           onChange={(e) => this.inputTextHandler(e) }/>
          </h5> 
          </div>
  
          <div className="personal-prof">
          <h2>Personal Profile<input type="text" data-key="userIntroName"
           value = {this.state.userIntroName} 
           onChange={(e) => this.inputTextHandler(e) }/></h2>
          <textarea name="personal-txt"
           cols="100" rows="5" data-key="userIntroTxt"
           value={this.state.userIntroTxt}
           onChange={(e) => this.inputTextHandler(e) }>
           </textarea>
          </div>
          </div>
          <hr/>
        </div>
      )
    } else {
    return (
      <div className="summary">
        <h1>{this.state.userName}</h1>
        <div className="personal-content">
        
        <div className="personal-info">
        <h5><FontAwesomeIcon icon={["fas", "phone"]} className="gh-edit" />
         {this.state.userPhone} </h5>
        <h5><FontAwesomeIcon icon={["fas", "envelope"]} className="gh-edit" />
        {this.state.userEmail} </h5>
        <h5><FontAwesomeIcon icon={["fab", "facebook"]} className="gh-edit" />
        {this.state.userFacebook}</h5> 
        <h5><FontAwesomeIcon icon={["fab", "linkedin"]} className="gh-edit" /> 
        {this.state.userLinkedin}</h5> 
        <h5><FontAwesomeIcon icon={["fab", "github"]} className="gh-edit" /> 
        {this.state.userGithub}</h5> 
        </div>

        <div className="personal-prof">
        <h2>{this.state.userIntroName}</h2>
        <p>{this.state.userIntroTxt}.</p>
        </div>
        </div>
        <hr/>
      </div>
    )
  }

  }
}  


