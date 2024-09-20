// import React from 'react'
import "./pub.css"

const Pub = () => {
    const items = [
        { id: 1, name: 
            <span>
                <font color="red">Ruitao Wu</font> et al &quot;Real-time Vehicle Detection System for Intelligent Transportation using Machine Learning,&quot; 2022 IEEE Green Energy and Smart System Systems (IGESSC), Long Beach, CA, USA, 2022, pp. 1-6, doi: 10.1109/IGESSC55810.2022.9955329.
                &nbsp;&nbsp;<a href="https://ieeexplore.ieee.org/document/9955329">Download</a>
            </span>
        },
        { id: 2, name: 
                <span>
                    Zhang, H., Wang, B., <font color="red">Wu, R.,</font> Xie, J., Wan, Y., Fu, S., & Lu, K. (2023). &quot;Exploring Networked Airborne Computing: A Comprehensive Approach with Advanced Simulator and Hardware Testbed. Unmanned Systems&quot;.
                    &nbsp;&nbsp;<a href="https://www.worldscientific.com/doi/10.1142/S2301385024420056?srsltid=AfmBOorFMzSLQpviB9_K9L1qg1QI5XpekR74NuxzjMjyx7h2yyXpQk9N">Download</a>
                </span> 
        }
    ];
  return (
        

    <div className="section pub section" id="pub">
        <h2 className="section__title">Publication 🔎</h2>
        <ul className="publist">
            {items.map(item => (
                <li key={item.id} className="pubele">
                {item.name}
                </li>
            ))}
        </ul>
    </div>
  )
}
export default Pub