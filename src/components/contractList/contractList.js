import React, { useEffect, useState } from 'react'
import {
  CSpinner,
  CListGroup,
  CCardBody,
  CCard,
  CCardHeader,
  CButton,
  CCol,
  CRow,
  CFormInput,
  CListGroupItem,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CPagination ,
  CPaginationItem ,
} from '@coreui/react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Pagination from './pagination';

const ContractList = () => {
  const [contractlist, setContractList] = useState([])
  const history = useNavigate();
  const [userList, setUsersList] = useState([])
  const [userName, setUserName] = useState('')
  const [allContractsCounter, setAllContractsCounter] = useState(0)
  const [spinner, setSpinner] = useState(false)
  const token = localStorage.getItem('token ateliyeh')
  const currentUser = localStorage.getItem('curent_user')
  useEffect(() => {}, [])

  const getContract = () => {
    const data = {
      api_key: localStorage.getItem('api_key'),
      current_user: currentUser,
      customer_id: localStorage.getItem('userID_fro_contract')? localStorage.getItem('userID_fro_contract') : 0,
      take: 10,
      skip: 0,
    }

    axios({
      method: 'post',
      url: '/api/AdminDashboard/ContractDetailList',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        console.log(result)
        setContractList(result.data.contract)
      })
      .catch((err) => {
        console.log(err)
        toast.error('خطا در دریافت اطلاعات', {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'dark',
        })
      })
  }
  const getContractCount = () => {
    const data = {
      api_key: localStorage.getItem('api_key'),
      current_user: currentUser,
      customer_id: localStorage.getItem('userID_fro_contract')? localStorage.getItem('userID_fro_contract') : 0,
    }

    axios({
      method: 'post',
      url: '/api/AdminDashboard/ContractDetailListCount',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        setAllContractsCounter(Number(result.data.contract_count))
        console.log(allContractsCounter);
      
      })
      .catch((err) => {
        console.log(err)
        toast.error('خطا در دریافت اطلاعات', {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'dark',
        })
      })
  }

  const updateContract = (id) => {

    history(`/editContract/${id}`)
   }


  const deleteContract = (id) => {
    alert(id)
    // const data = {
    //   api_key: localStorage.getItem('api_key'),
    //   current_user: currentUser,
    //   customer_id: localStorage.getItem('userID_fro_contract'),
    //   take: 6,
    //   skip: 0,
    // }

    // axios({
    //   method: 'post',
    //   url: '/api/AdminDashboard/ContractDetailList',
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    //   data,
    // })
    //   .then((result) => {
    //     console.log(result)
    //     setContractList(result.data.contract)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //     toast.error('خطا در دریافت اطلاعات', {
    //       position: toast.POSITION.TOP_RIGHT,
    //       theme: 'dark',
    //     })
    //   })
  }

  const searchUser = async () => {
    const data = {
      api_key: localStorage.getItem('api_key'),
      user_type: 7,
      current_user: currentUser,
    }

    setSpinner(true)
    axios({
      method: 'post',
      url: '/api/AdminDashboard/GetUsers',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        setUsersList(result.data.users)
        setSpinner(false)
      })
      .catch((err) => {
        console.log(err)
        setSpinner(false)
        toast.error('خطا در دریافت لیست مشتریان مجددا تلاش کنید', {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'dark',
        })
      })
  }

  return (
    <>
      <CCol xs={12} className="shadow">
        <CCard className="mb-4">
          <CCardHeader>
            <strong>انتخاب مشتری برای مشاهده ی لیست قراردهایش</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol lg={6}>
                <CFormInput
                  className="mt-4 shadow"
                  placeholder="نام مشتری را واردکنید و جستجو رابزنید..."
                  value={userName}
                  type="text"
                  id="validationServer01"
                  required
                />
              </CCol>
              <CCol lg={6} className="mt-4">
                <CButton
                  onClick={searchUser}
                  className="shadow text-white"
                  color="info"
                  type="submit"
                >
                  {spinner ? <CSpinner component="span" size="sm" aria-hidden="true" /> : 'جستجو'}
                </CButton>
              </CCol>
            </CRow>

            <CListGroup className="mt-4 col-lg-4 shadow">
              {userList.map((user) => {
                return (
                  <CListGroupItem
                    component="button"
                    onClick={() => {
                      localStorage.setItem('userID_fro_contract', user.id)
                      localStorage.setItem('username_fro_contract', user.full_name)
                      setUserName(user.full_name)
                    }}
                  >
                    {user.full_name}
                  </CListGroupItem>
                )
              })}
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} className="shadow mb-4">
        <CButton onClick={()=>{
          getContractCount()
          getContract();
          }} className="shadow text-white" color="info" type="submit">
          {spinner ? (
            <CSpinner component="span" size="sm" aria-hidden="true" />
          ) : (
            'دریافت لیست قراردادهای مشتری موردنظر'
          )}
        </CButton>
        <CTable className="mt-5">
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">شماره قرارداد</CTableHeaderCell>
              <CTableHeaderCell scope="col">تاریخ ایجاد</CTableHeaderCell>
              <CTableHeaderCell scope="col">حذف/ویرایش</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {contractlist.map((contract) => {
              return (
                <CTableRow key={contract.id}>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>{contract.contract_number}</CTableDataCell>
                  <CTableDataCell>{contract.created_at.slice(0, 10)}</CTableDataCell>
                  <CTableDataCell>
                    <CButton
                      onClick={()=>updateContract(contract.id)}
                      className="shadow text-white"
                      color="info"
                      type="submit"
                    >
                      ویرایش
                    </CButton>
                    <CButton
                      onClick={()=>deleteContract(contract.id)}
                      className="shadow text-white ms-3"
                      color="danger"
                      type="submit"
                    >
                      حذف
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              )
            })}
          </CTableBody>
        </CTable>
        <Pagination total={allContractsCounter}/>
      </CCol>
    </>
  )
}

export default ContractList
