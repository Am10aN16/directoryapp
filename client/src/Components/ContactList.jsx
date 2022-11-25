import React from 'react'

const ContactList = ({current}) => {
    const colours = [
        "#34568B",
        "#FF6F61 ",
        "#6B5B95",
        "#F7CAC9",
        "#D65076",
        "#45B8AC",
      ];
  return (
    <div>
        <div className="card"  style={{ backgroundColor : colours[current % 6] }}>
  
  <div className="card-body">
    <h5 className="card-title">Name</h5>
    <p className="card-text">Address: Dummy</p>
    
  </div>
  <h4 className="card-header">Contact No:- 23923483</h4>
</div>
    </div>
  )
}

export default ContactList