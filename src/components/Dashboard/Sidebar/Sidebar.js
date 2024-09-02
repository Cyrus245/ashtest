import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Siderbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCommentAlt, faUserPlus, faCog, faFileMedical, faList,
faUserCircle} from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';
import { faBuffer } from '@fortawesome/free-brands-svg-icons';

const Sidebar = ({setTitle}) => {
    const { admin } = useContext(UserContext);

    return (
        <div>
            <div className="sideBrand">
                {/* <div className="sideBrnIcon"><FontAwesomeIcon icon={faBuffer}/></div> */}
                <h2>Ash <span className="navHighlight">Interior</span></h2>
            </div>
            <nav id="sideNavbar">
                <ul>    
                        {/* <li>
                            <NavLink onClick={() => setTitle('Profile')} activeClassName="activePage" exact to="/dashboard/profile">
                                <FontAwesomeIcon icon={faUserCircle} className="iconC"/> Profile
                            </NavLink>
                        </li> */}
                    {admin ?
                        <>
                            {/* <li>
                                <NavLink onClick={() => setTitle('Order List')} activeClassName="activePage" to="/dashboard/orderList">
                                    <FontAwesomeIcon icon={faList} className="iconC"/> Order list
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink onClick={() => setTitle('Add Header')} activeClassName="activePage" to="/dashboard/addHeader">
                                    <FontAwesomeIcon icon={faFileMedical} className="iconC"/> Add Header Content
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Add Service')} activeClassName="activePage" to="/dashboard/addService">
                                    <FontAwesomeIcon icon={faFileMedical} className="iconC"/> Add Service
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Add Project')} activeClassName="activePage" to="/dashboard/addProject">
                                    <FontAwesomeIcon icon={faFileMedical} className="iconC"/> Add Project
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Add Team')} activeClassName="activePage" to="/dashboard/addTeam">
                                    <FontAwesomeIcon icon={faFileMedical} className="iconC"/> Add TeamMember
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Add Gallery')} activeClassName="activePage" to="/dashboard/addGallery">
                                    <FontAwesomeIcon icon={faFileMedical} className="iconC"/> Add Gallery
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink onClick={() => setTitle('Make Admin')} activeClassName="activePage" to="/dashboard/makeAdmin">
                                    <FontAwesomeIcon icon={faUserPlus} className="iconC"/> Make Admin
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink onClick={() => setTitle('Manage Services')} activeClassName="activePage" to="/dashboard/manageServices">
                                    <FontAwesomeIcon icon={faCog} className="iconC"/> Manage Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Manage Header')} activeClassName="activePage" to="/dashboard/manageHeader">
                                    <FontAwesomeIcon icon={faCog} className="iconC"/> Manage Header 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Manage Project')} activeClassName="activePage" to="/dashboard/manageProject">
                                    <FontAwesomeIcon icon={faCog} className="iconC"/> Manage Project
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Manage Team')} activeClassName="activePage" to="/dashboard/manageTeam">
                                    <FontAwesomeIcon icon={faCog} className="iconC"/> Manage Team
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Manage Gallery')} activeClassName="activePage" to="/dashboard/manageGallery">
                                    <FontAwesomeIcon icon={faCog} className="iconC"/> Manage gallery
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Manage Contact')} activeClassName="activePage" to="/dashboard/manageContact">
                                    <FontAwesomeIcon icon={faCog} className="iconC"/> Manage Contact
                                </NavLink>
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <NavLink onClick={() => setTitle('Book')} activeClassName="activePage" exact to="/dashboard/book">
                                    <FontAwesomeIcon icon={faShoppingCart} className="iconC"/> Book
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Booking List')} activeClassName="activePage" to="/dashboard/booking">
                                    <FontAwesomeIcon icon={faList} className="iconC"/> Booking List
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Review')} activeClassName="activePage" to="/dashboard/review">
                                    <FontAwesomeIcon icon={faCommentAlt} className="iconC"/> Review
                                </NavLink>
                            </li>
                        </>}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;