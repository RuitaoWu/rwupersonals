
import "./memb.css"
const Membership = () => {
    const items = [
        { id: 1, name: "The SysteMs & InteLligEnce (SMILE) Laboratory Alumni"
        },
        { id: 2, name: " Laboratory for Sustainable and Additive Manufacturing Alumni"
        },
        { id: 3, name: " NASA -- The Autonomy Research Center for STEAHM Student Fellow"
        },
        { id: 4, name: " Association for Computing Machinery, Student Member"
        },
        { id: 5, name: " Institute of Electrical and Electronics Engineers, Student Member"
        }
    ];
  return (
    <div className="section acas section" id="mems">
        <h2 className="section__title">Membership</h2>
    <ul className="memblist">
            {items.map(item => (
                <li key={item.id} className="memblistele">
                {item.name}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Membership