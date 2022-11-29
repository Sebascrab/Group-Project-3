
import { Col, Row, Container } from "react-bootstrap"
import Avatar from "react-avatar"
import avatarPic from "../../assets/images/Sebas-dog.jpeg"
import Auth from "../../utils/auth"
import { Query_Me } from "../../utils/queries"


export const FriendCard = ({ friend }) => {

    return (

        <div className="">
            <div className="">
                <div className="bg-white rounded-9 shadow-sm py-5 px-4">
                    <h5 className="mb-0">{friend.firstName + " " + friend.lastName}</h5>
                    <span className="small text-uppercase text-muted">@{friend.username}</span>
                    <ul className="social mb-0 list-inline mt-3">
                        <li className="list-inline-item">
                            <a href="#" className="social-link">
                                <i className="fa-sharp fa-solid fa-trash"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>




    )
}