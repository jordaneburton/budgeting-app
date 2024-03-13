import { useEffect, useState } from 'react';
import { usePageContext } from '../utils/PageContext';
import Col from 'react-bootstrap/esm/Col';
// import PageHeader from '../components/PageHeader';
import NavBar from '../components/NavBar';
import { useQuery, useLazyQuery } from '@apollo/client';
import { QUERY_BY_USER} from '../utils/queries';
import NavCanvas from '../components/NavCanvas';
import Header from '../components/Header';
import Row from 'react-bootstrap/esm/Row';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations';



function ProfilePage () {
  const { _, setPage } = usePageContext();
  const [inputs, setInputs] = useState({});
  useEffect(() => {
    setPage("Profile");
    window.scrollTo(0, 0);
  }, []);



  const { loading, queryData } = useQuery(QUERY_BY_USER);
  const [updateUser, { error, mutationData }] = useMutation(UPDATE_USER);
  const [finduser, {loading: userLoading, data: userData}] = useLazyQuery(QUERY_BY_USER)
  const users = queryData?.users || [];
  console.log(users);

  const page = {
    header: "Edit Users"
  }
const onClick = async (selection) => {
await finduser( {
  variables: {userId: selection}
 } )
}
  const testData = userData?.user 


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(inputs);
  

  try {
    const { mutationData } = await updateUser({
        variables: { ...formState },
    });

} catch (e) {
    console.error(e);
}
};

  
  // const page = {
  //   header: "CURRENT_USER_NAME"
  // }
  return (
    <>
    <NavBar />
    <Col xs={12} md={9} className='p-0'>
    <Header header={page.header}/>
      <h2>
      Profile
      </h2>
      <Row>
            <Col xs={10} md={8} className='position-relative my-2 z-1 d-flex flex-wrap flex-column align-items-end'>
              <div className='form-container d-flex flex-wrap flex-column pill-button justify-content-center  bg-info w-75 mb-4'>
                <h2 className='fw-semibold'>{users[0]?.name?.toUpperCase()}</h2>
                <form onSubmit={handleSubmit}>
      <label>Username:
      <input 
        type="text" 
        name="username" 
        value={testData?.amount || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Email:
        <input 
          type="email" 
          name="age" 
          value={testData?.timeFrame || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Password:
        <input 
          type="password" 
          name="age" 
          value={testData?.timeFrame || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
              </div>
            </Col>
          </Row>
    </Col>
  <NavCanvas />

    </>
  );
}

export default ProfilePage