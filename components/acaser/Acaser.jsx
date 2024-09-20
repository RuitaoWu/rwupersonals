
import "./acas.css"
const Acaser = () => {
    const items = [
        { id: 1, name: "Summer Camp Counselor -- The SysteMs & InteLligEnce Laboratory (SMILE) and Talent Search SDSU 2023"
        },
        { id: 2, name: "STEM Pathways Mentor -- SDSU 2023"
        }
    ];
  return (
    <div className="section acas section" id="acas">
        <h2 className="section__title">Academic Service</h2>
    <ul className="acasitem-list">
            {items.map(item => (
                <li key={item.id} className="acasitem">
                {item.name}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Acaser