
import "./awar.css"
const Award = () => {
        const items = [
          { id: 1, name: "Dean’s List Fall 19 | Fall 20 | Spring 20, California State University, Northridge"
          },
          { id: 2, name: "Senior Design competition FIRST place in Department of Computer Science, California State University, Northridge"
          }
      ];
  return (
    <div className="section award section" id="award">
        <h2 className="section__title">Award/Honner</h2>
        <ul className="itemlist">
            {items.map(item => (
                <li key={item.id} className="awaritem">
                {item.name}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Award