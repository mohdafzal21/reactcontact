import React from "react";
import PropTypes from "prop-types";

//stateless funcitonal component
class ListContacts extends React.Component {
  constructor(props) {
    super();
    this.state = {
      query: ""
    };
  }
  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }));
  };
  clearQuery = () => {
    this.updateQuery('')
  }
  render() {
    const { query } = this.state
    const { contacts, onDeleteContact } = this.props
    const showingContacts = query === ''
      ? contacts
      : contacts.filter((c) => (
          c.name.toLowerCase().includes(query.toLowerCase())
        ))
    return (
      <div className="contact-list">
      {JSON.stringify(this.state)}
        <div className="contact-list-top">
          <input
          
            type="text"
            placeholder="search contacts"
            className="search-contacts"
            value={query}
            onChange={event => this.updateQuery(event.target.value)}
          />
        </div>

{showingContacts.length !== contacts.length && (
    <div className='showing-contacts'>
      <span>Now showing {showingContacts.length} of {contacts.length}</span>
      <button onClick={this.clearQuery}>Show all</button>
    </div>
  )}
        
        <ol className="contact-list">
          {showingContacts.map(contacts => (
            <li key={contacts.id} className="contact-list-item">
              <div
                className="contact-avatar"
                style={{
                  backgroundImage: `url(${contacts.avatarURL})`
                }}
              />
              <div className="contact-details">
                <p>{contacts.name}</p>
                <p>{contacts.handle}</p>
              </div>
              <button
                onClick={() => onDeleteContact(contacts)}
                className="contact-remove"
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};

export default ListContacts;

// class ListContacts extends React.Component{
//     render(){
//         return(
//             <ol className='contact-list'>
//             {this.props.contacts.map((contacts)=>(
//              <li key={contacts.id} className='contact-list-item'>
//              <div
//               className = 'contact-avatar'
//               style = {{
//                   backgroundImage : `url(${contacts.avatarURL})`}}>
//               </div>
//              <div className='contact-details'>
//              <p>{contacts.name}</p>
//              <p>{contacts.handle}</p>
//              </div>
//              <button
//               onClick = {()=>this.props.onDeleteContact(contacts)}
//              className='contact-remove'>Remove</button>
//              </li>

//             ))}

//             </ol>
//         )
//     }
// }
