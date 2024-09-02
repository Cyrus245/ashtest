// import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import Profile from '../../Profile/Profile';
// import AddGallery from '../AddGallery/AddGallery';
// import AddHeader from '../AddHeader/AddHeader';
// import AddProject from '../AddProject/AddProject';
// import AddService from '../AddService/AddServices';
// import AddTeam from '../AddTeam/AddTeam';
// import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import ManageContact from '../ManageContact/ManageContact';
// import ManageGallery from '../ManageGallery/ManageGallery';
// import ManageHeader from '../ManageHeader/ManageHeader';
// import ManageProject from '../ManageProject/ManageProject';
// import ManageServices from '../ManageServices/ManageServices';
// import ManageTeam from '../ManageTeam/ManageTeam';
// import OrderList from '../OrderList/OrderList';

// const AdminDashboard = () => {
//     return (
//         <Switch>
//             <Route exact path="/dashboard/profile"><Profile/></Route>
//             <Route exact path="/dashboard/orderList"><OrderList/></Route>
//             <Route path="/dashboard/addService"><AddService/></Route>
//             <Route path="/dashboard/addHeader"><AddHeader/></Route>
//             <Route path="/dashboard/addProject"><AddProject/></Route>
//             <Route path="/dashboard/addTeam"><AddTeam/></Route>
//             <Route path="/dashboard/addGallery"><AddGallery/></Route>
//             <Route path="/dashboard/makeAdmin"><MakeAdmin/></Route>
//             <Route path="/dashboard/manageServices"><ManageServices/></Route>
//             <Route path="/dashboard/manageHeader"><ManageHeader/></Route>
//             <Route path="/dashboard/manageProject"><ManageProject/></Route>
//             <Route path="/dashboard/manageTeam"><ManageTeam/></Route>
//             <Route path="/dashboard/manageGallery"><ManageGallery/></Route>
//             <Route path="/dashboard/manageContact"><ManageContact/></Route>
//         </Switch>
//     );
// };

// export default AdminDashboard;

import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Profile = lazy(() => import('../../Profile/Profile'));
const AddGallery = lazy(() => import('../AddGallery/AddGallery'));
const AddHeader = lazy(() => import('../AddHeader/AddHeader'));
const AddProject = lazy(() => import('../AddProject/AddProject'));
const AddService = lazy(() => import('../AddService/AddServices'));
const AddTeam = lazy(() => import('../AddTeam/AddTeam'));
const MakeAdmin = lazy(() => import('../MakeAdmin/MakeAdmin'));
const ManageContact = lazy(() => import('../ManageContact/ManageContact'));
const ManageGallery = lazy(() => import('../ManageGallery/ManageGallery'));
const ManageHeader = lazy(() => import('../ManageHeader/ManageHeader'));
const ManageProject = lazy(() => import('../ManageProject/ManageProject'));
const ManageServices = lazy(() => import('../ManageServices/ManageServices'));
const ManageTeam = lazy(() => import('../ManageTeam/ManageTeam'));
const OrderList = lazy(() => import('../OrderList/OrderList'));

const AdminDashboard = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/dashboard/profile"><Profile/></Route>
                <Route exact path="/dashboard/orderList"><OrderList/></Route>
                <Route path="/dashboard/addService"><AddService/></Route>
                <Route path="/dashboard/addHeader"><AddHeader/></Route>
                <Route path="/dashboard/addProject"><AddProject/></Route>
                <Route path="/dashboard/addTeam"><AddTeam/></Route>
                <Route path="/dashboard/addGallery"><AddGallery/></Route>
                <Route path="/dashboard/makeAdmin"><MakeAdmin/></Route>
                <Route path="/dashboard/manageServices"><ManageServices/></Route>
                <Route path="/dashboard/manageHeader"><ManageHeader/></Route>
                <Route path="/dashboard/manageProject"><ManageProject/></Route>
                <Route path="/dashboard/manageTeam"><ManageTeam/></Route>
                <Route path="/dashboard/manageGallery"><ManageGallery/></Route>
                <Route path="/dashboard/manageContact"><ManageContact/></Route>
            </Switch>
        </Suspense>
    );
};

export default AdminDashboard;
