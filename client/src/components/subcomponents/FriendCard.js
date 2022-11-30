
import { Col, Row, Container } from "react-bootstrap"
import Auth from "../../utils/auth"
import { Query_Me } from "../../utils/queries"


export const FriendCard = ({ friend }) => {

    return (

        <div className="mt-3">
            <div className="">
                <div className="bg-white rounded-9 shadow-lg py-5 px-4">
                    <h5 className="mb-0">{friend.firstName + " " + friend.lastName}</h5>
                    <span className="small text-uppercase text-muted">@{friend.username}</span>
                    <ul className="social mb-0 list-inline mt-3">
                        {/* <li className="list-inline-item">
                            <a href="#" className="social-link">
                                <i className="fa-sharp fa-solid fa-trash"></i>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>

        </div>




    )
}