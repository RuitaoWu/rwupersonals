// import React from 'react'
import "./conf.css"
const Conf = () => {
  const items = [
    { id: 1, name: "2022 IEEE Green Energy and Smart System Systems (IGESSC), Long Beach, CA, USA"
    },
    { id: 2, name: "2022 IEEE Green Energy and Smart Systems Conference–Student Poster Competition Session"
    },
    {
      id:3,name:" 2022 CSU, Northridge’s Autonomy Research Center for STEAHM poster presentation at JPL"
    }
];
  return (
    <div className="section conf section" id="conf">
    <h2 className="section__title">Conference✨</h2>
        <ul className="conflist">
            {items.map(item => (
                <li key={item.id} className="conflist_ele">
                {item.name}
                </li>
            ))}
        </ul>
    
    
    </div>
  )
}

export default Conf