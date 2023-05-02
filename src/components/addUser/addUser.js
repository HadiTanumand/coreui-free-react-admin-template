import React, { useState } from 'react'
import { CFormInput, CInputGroup, CInputGroupText } from '@coreui/react'
import { toast, ToastContainer } from 'react-toastify'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CRow,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'
import 'react-multi-date-picker/styles/layouts/mobile.css'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cilPhone } from '@coreui/icons'
import axios from 'axios'

const AddUser = (props) => {
  const [mobile, setMobile] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState('7')
  const token = localStorage.getItem('token ateliyeh')
  const currentUser = localStorage.getItem('curent_user')

  const handleAddUser = () => {
    const data = {
      api_key: localStorage.getItem('api_key'),
      mobile: mobile,
      password: password,
      full_name: customerName,
      user_type: userType,
      current_user: currentUser,
    }
    axios({
      method: 'post',
      url: '/api/AdminDashboard/Register',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        toast.success("کاربر جدید با موفقیت ثبت شد.", {
          position: toast.POSITION.TOP_RIGHT
        });
        // toast.update(id, { render: "کاربر با موفقیت ثبت شد", type: "success", isLoading: false });
      })
      .catch((err) => {
        console.log(err)
        toast.error("خطا در ایجاد کاربر جدید مجددا تلاش کنید", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark"
        });
        // toast.update(id, { render: "خطا در ثبت کاربر", type: "error", isLoading: false });
      })
  }

  return (
    <>
    <ToastContainer rtl bodyClassName="toastBody"/>
      <CCol xs={12} className="shadow">
        <CCard className="mb-4">
          <CCardHeader>
            <strong>ایجاد کاربر جدید</strong>
          </CCardHeader>
          <CCardBody>
            <CRow className="justify-content-center">
              <CCol md={9} lg={7} xl={6}>
                <CCard className="mx-4">
                  <CCardBody className="p-4">
                    <CForm>
                      <h1>ساخت کاربر جدید </h1>
                      <p className="text-medium-emphasis">اطلاعات زیر را تکمیل فرمایید.</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="نام و نام خانوادگی کاربر"
                          autoComplete="username"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilPhone} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="تلفن همراه"
                          autoComplete="phone"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="رمزورود"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CCol md={4}>
                          <CFormLabel htmlFor="validationServer01"> نوع کاربر</CFormLabel>
                          <CFormSelect
                            id="validationServer01"
                            className="shadow"
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                            required
                          >
                            <option value={7}>کاربر عادی</option>
                          </CFormSelect>
                        </CCol>
                      </CInputGroup>
                      <div className="d-grid">
                        <CButton color="success text-white" onClick={handleAddUser}>
                          ارسال اطلاعات
                        </CButton>
                      </div>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>

            <CListGroup className="mt-4 col-lg-4 shadow"></CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  )
}

export default AddUser
