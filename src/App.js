//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import { Dropdown, Table, Container, Row, Col, Alert } from 'react-bootstrap'
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios'
const para = ['adress', 'bank_id', 'branch', 'city', 'district', 'ifsc', 'state']
function App() {

  useEffect(() => {
    
    get()


  }, [])
  const search = () => {


    var text = document.getElementById('1').value;

    //console.log('text', text)


    // console.log('start',text)
    const newData = maindata.filter(function (item) {
      console.log(item.address, text)


      const itemData = item.state
      // ? item.toUpperCase()
      // : ''.toUpperCase();
      const textData = text.toUpperCase();
      const itemData1 = item.city
      const itemData2 = item.branch
      const itemData3 = item.district
      const itemData5 = item.address
      // ? item.title.toUpperCase()
      // : ''.toUpperCase();
      // const itemData2 = item.hashtags
      //     ? item.hashtags.toUpperCase()
      //     : ''.toUpperCase();
      // const textData2 = text.toUpperCase();
      // return itemData.indexOf(textData) > -1 
      return itemData.indexOf(textData) > -1 || itemData1.indexOf(textData) > -1 || itemData2.indexOf(textData) > -1 || itemData3.indexOf(textData) > -1 || itemData5.indexOf(textData) > -1;
    });
    console.log(newData)
    setData(newData)
  }
  const [branch, setBranch] = useState('Select Branch')
  const [page,setPage]=useState(1)
const [totalpage,setTotalpage]=useState(0)
  const [data, setData] = useState([])
  const [maindata, setMainData] = useState([])
  const post1 = async (text) => {
    setBranch(text)
    const axios = require('axios');

    let config = {
      method: 'get',
      url: `https://princefylepython.herokuapp.com/api/branches/autocomplete?q=${text}`,
      headers: {}
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.banks[0]));
        setData(response.data.banks)
        setMainData(response.data.banks)
        setTotalpage(response.data.page_count)
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });


  }
  const get = async () => {
    console.log('start', branch)
    const axios = require('axios');

    let config = {
      method: 'get',
      url: `https://princefylepython.herokuapp.com/api/branches/autocomplete`,
      headers: {}
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.banks[0]));
        setData(response.data.banks)
        setMainData(response.data.banks)
        setTotalpage(response.data.page_count)
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });


  }
  const post = async () => {
    console.log('start', branch)
    const axios = require('axios');

    let config = {
      method: 'get',
      url: `https://princefylepython.herokuapp.com/api/branches/autocomplete?q=${branch}`,
      headers: {}
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.banks[0]));
        setData(response.data.banks)
        setMainData(response.data.banks)
        setTotalpage(response.data.page_count)
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });


  }
  const handleChange = (event, value) => {
    console.log(value)
    setPage(value);
    console.log('start', branch)
    const axios = require('axios');

    let config = {
      method: 'get',
      url: `https://princefylepython.herokuapp.com/api/branches/autocomplete?q=${branch}&offset=${value}`,
      headers: {}
    };

    axios(config)
      .then((response) => {
         console.log(JSON.stringify(response.data.banks[0]));
        setData(response.data.banks)
        setMainData(response.data.banks)
        setTotalpage(response.data.page_count)
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });

  };

  return (


    <Container>
      <h2>
        Bank Branches
    </h2>
      <Row style={{ margin: '2%' }}>


        <Col>
          <input
            style={{ marginLeft: '2%', alignSelf: 'center', justifyContent: 'center' }}
            type="text"
            id="1"
            placeholder={'search'}
            onChange={search}
          />
          {branch === 'Select Branch' ?


            <Alert style={{ marginTop: '2%' }} variant={'warning'}>
              Please Select Your Branch First
 </Alert> : ''
          }

        </Col>
        <Col>

        </Col>
        <Col>




          <Dropdown style={{ alignSelf: 'center', marginLeft: "80%", }}>
            <Dropdown.Toggle variant="success" id="dropdown-basic" >
              {branch}
            </Dropdown.Toggle>

            <Dropdown.Menu id='item' style={{ flexDirection: 'column', padding: 10 }}>
              {/* {maindata.map((item1, index) => (






                // < Dropdown.Item key = { index } href="#/MUMBAI">{item1.branch}</Dropdown.Item>

              )) */}

              <Dropdown.Item onClick={() => { post1('ABHYUDAYA NAGAR') }} href="#/ABHYUDAYA NAGAR">ABHYUDAYA NAGAR</Dropdown.Item>
              <Dropdown.Item onClick={() => { post1('BAIL BAZAR') }} href="#/BAIL BAZAR">BAIL BAZAR</Dropdown.Item>
              <Dropdown.Item onClick={() => { post1('BANDRA') }} href="#/BANDRA">BANDRA</Dropdown.Item>
              <Dropdown.Item onClick={() => { post1('BANGALORE') }} href="#/BANGALORE">BANGALORE</Dropdown.Item>
              <Dropdown.Item onClick={() => { post1('BHANDUP') }} href="#/BHANDUP">BHANDUP</Dropdown.Item>
              <Dropdown.Item onClick={() => { post1('KANJUR') }} href="#/KANJUR">KANJUR</Dropdown.Item>
              <Dropdown.Item onClick={() => { post1('MUMBAI') }} href="#/MUMBAI">MUMBAI</Dropdown.Item>
              <Dropdown.Item onClick={() => { post1('PUNE') }} href="#/PUNE">PUNE</Dropdown.Item>
              <Dropdown.Item onClick={() => { post1('RTGS-HO') }} href="#/RTGS-HO">RTGS-HO</Dropdown.Item>
              <Dropdown.Item onClick={() => { post1('DARUKHANA') }} href="#/DARUKHANA">DARUKHANA</Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
        </Col>


      </Row>

      {
        branch !== 'Select Branch' ?
          <Table responsive striped bordered hover size="sm">
            <thead>
              <tr>
                <th>No</th>
                {
                  para.map((_, index) => (

                    <th key={index}>{_}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {data.map((i, ind) => (


                <tr>

                  <td>{ind + 1}</td>
                  <td>{i.address}</td>

                  <td>{i.bank_id}</td>
                  <td>{i.branch}</td>
                  <td>{i.city}</td>
                  <td>{i.district}</td>
                  <td>{i.ifsc}</td>
                  <td>{i.state}</td>



                  {/* <td>
                {i.isfc}
              </td> */}
                </tr>
              ))
              }

            </tbody>
          </Table> : null
      }

<Pagination id='page' page={page} count={totalpage} onChange={handleChange}  />
    </Container >
  );
}


export default App;
