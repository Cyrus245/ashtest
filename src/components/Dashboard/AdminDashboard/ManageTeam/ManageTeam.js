import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Table, Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { UserContext } from '../../../../App';
import TableLoader from '../../../Shared/TableLoader/TableLoader';
import AddTeam from '../AddTeam/AddTeam';
const ManageTeam = () => {
    
    const {user : { email }} = useContext(UserContext)
    const [teams, setTeams] = useState([])
    const [isUpdated, setIsUpdated] = useState(false)
    const [edit, setEdit] = useState(null);

    useEffect(() => {
        axios.get('https://backend.ashinteriorbd.com/api/team/v1/team/list')
        .then(res => {
            setTeams(res?.data.data.team);
            setIsUpdated(false)
        })
    }, [isUpdated, edit])
    
    const checkPermission = (id, action) => {

        const getMainheaders = teams.slice(0, 6)
        const getService = getMainheaders.find(({_id}) => id === _id)
        
     
            if(action === 'edit'){
                setEdit(id)
            } else {
                handleDelete(id)
            }
       
    }

    const handleDelete = (id) => {
        setIsUpdated(false)
        swal({
            title: "Are you sure?",
            text: "Are you sure! you want to delete this service?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then( wantDelete => {
            if (wantDelete) {
                const loading = toast.loading('deleting...Please wait!')
                axios.delete(`https://backend.ashinteriorbd.com/api/team/v1/team/delete/${id}`)
                .then(res => {
                    toast.dismiss(loading)
                    if(res){
                        setIsUpdated(true);
                        toast.success('Service has been deleted successfully!');
                    }
                    else{
                        toast.error('Something went wrong, please try again');
                    }
                })
                .catch(err => {
                    toast.dismiss(loading)
                    swal({
                        title: "Failed!",
                        text: 'Something went wrong, please try again',
                        icon: "error",
                      });
                })
            } 
          })
    }
    
    
    return (
        <>
        { edit ? 
            <AddTeam edit={edit} setEdit={setEdit} teams={teams}/> 
            : 
            teams.length === 0 ?
            <TableLoader/>
            :
           <div className="orderList">
                <Table hover width="100%">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Designation</th>
                            <th>CreatedAt</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            teams.map(({_id, name, designation, createdAt}) => {
                                let des = designation;
                                let tit = name;
                                let shortDes = des.substring(0,30);
                                let shortTit = tit.substring(0,25);
                                let shortCreatedAt = createdAt.substring(0,10);
                                return(
                                    <tr key={_id}>
                                        <td>{shortTit}</td>
                                        <td>{`${shortDes}...`}</td>
                                        <td>{shortCreatedAt}</td>
                                        <td>
                                            <Button variant="outline-success" onClick={() => checkPermission(_id, 'edit')}> <FontAwesomeIcon icon={faEdit}/> Edit</Button>
                                            <Button className="ml-2" variant="outline-danger" onClick={() => checkPermission(_id, 'delete')}> <FontAwesomeIcon icon={faTrashAlt}/> Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        }
        </>
    );
};

export default ManageTeam;