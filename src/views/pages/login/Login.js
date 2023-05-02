import React, { useState, useRef, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CToaster,
  CToast,
  CToastBody,
  CToastClose,
  CToastHeader,
  CSpinner,
} from '@coreui/react'
import { toast, ToastContainer } from 'react-toastify'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import axios from 'axios'
import { AuthContext } from 'src/context/auth/AuthContext'

const Login = (props) => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [spinner, setSpinner] = useState(false)
  const [password, setPassword] = useState('')
  const { dispatch } = useContext(AuthContext)



  const handleLogin = (e) => {
    e.preventDefault()
    setSpinner(true)
    const data = {
      api_key: 'gd4Bsh7mDfk7Hd%tG$jsVqk53vpS0525SnvlWkgdfwo2b7hM2187EkV7JSwd37f',
      username: userName,
      password: password,
    }
    axios
      .post('/api/Login', data)
      .then((result) => {
        setSpinner(false)
        // console.log(result);
        const token = result.data.token
        const currentUser = result.data.user_id
        // const userType = result.data;
        localStorage.setItem('curent_user', currentUser)
        localStorage.setItem(
          'api_key',
          'gd4Bsh7mDfk7Hd%tG$jsVqk53vpS0525SnvlWkgdfwo2b7hM2187EkV7JSwd37f',
        )
        dispatch({
          type: 'login',
          payload: token,
        })
        navigate('/dashboard')
      })
      .catch((err) => {
        // console.log(err);
        toast.error('خطا در ورود، لطفا اطلاعات را بادقت تکمیل کنید.', {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'dark',
        })
        setSpinner(false)
        setPassword('')
        setUserName('')
      })
  }
  return (
    <>
      <ToastContainer rtl bodyClassName="toastBody" />
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={8}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <h1>ورود به حساب</h1>
                      <p className="text-medium-emphasis">به اکانت خود وارد شوید</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                          onChange={(e) => setUserName(e.target.value)}
                          placeholder="نام کاربری"
                          autoComplete="username"
                          value={userName}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          placeholder="رمز ورود"
                          autoComplete="current-password"
                          value={password}
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs={6}>
                          <CButton
                            color="primary"
                            type="submit"
                            onClick={handleLogin}
                            className="px-4"
                          >
                            {spinner ? (
                              <CSpinner component="span" size="sm" aria-hidden="true" />
                            ) : (
                              'ورود'
                            )}
                          </CButton>
                        </CCol>
                        <CCol xs={6} className="text-right"></CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard className="text-white bg-primary py-5">
                  <CCardBody className="text-center">
                    <div>
                      <h2>نام آتلیه</h2>
                      <p>
                        به پنل مدیریت آتلیه خوش آمدید لطفا جهت استفاده از خدمات این نرم افزار ابتدا
                        با نام کاربری و کلمه عبور خود وارد شوید.
                      </p>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  )
}

export default Login
