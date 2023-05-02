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
  CFormSwitch,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import DatePicker from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import 'react-multi-date-picker/styles/layouts/mobile.css'
import axios from 'axios'

const CustomerService = (props) => {
  const currentUser = localStorage.getItem('curent_user');
  const token = localStorage.getItem('token ateliyeh');
  const [ disable , setDisable] = useState(false);

  const handleBuildContract = () => {
    const data = {
      api_key: localStorage.getItem('api_key'),
      current_user: currentUser,
      contract_detail_id: props.formdata.contract_id,
      full_name_man: props.formdata.fullnameMan,
      full_name_woman: props.formdata.fullnameWoman,
      mobile_man: props.formdata.mobbileMan,
      mobile_woman: props.formdata.mobileWoman,
      man_birthday: props.formdata.manBirthdate,
      woman_birthday: props.formdata.womanBirthdate,
      address: props.formdata.address,
    }
    axios({
      method: 'post',
      url: '/api/AdminDashboard/RegisterOther',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        setDisable(true)
        toast.success('اطلاعات اولیه قرارداد با موفقیت ثبت شد', {
          position: toast.POSITION.TOP_RIGHT,
        })
      })
      .catch((err) => {
        console.log(err)
        toast.error('خطا در ایجاد اطلاعات اولیه قرارداد', {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'dark',
        })
      })


  }

  const handleInputValue = (e) => {
    props.setformdata({
      ...props.formdata,
      [e.target.name]: e.target.value,
    })
  }

  function handleChangeMan(value) {
    //تغییرات روی تاریخ رو اینجا اعمال کنید
    console.log(value.year)
    console.log(value.month.number)
    console.log(value.day)
    props.setformdata({
      ...props.formdata,
      manBirthdate: `${value.year}/${value.month.number}/${value.day}`,
    })
  }
  function handleChangeWoman(value) {
    //تغییرات روی تاریخ رو اینجا اعمال کنید
    console.log(value.year)
    console.log(value.month.number)
    console.log(value.day)
    props.setformdata({
      ...props.formdata,
      womanBirthdate: `${value.year}/${value.month.number}/${value.day}`,
    })
  }

  return (
    <>
      <ToastContainer rtl bodyClassName="toastBody" />
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong> اطلاعات مشتری</strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3 needs-validation">
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01">
                  {' '}
                  نام و نام خانوادگی داماد:
                </CFormLabel>
                <CFormInput
                  name="fullnameMan"
                  type="text"
                  id="validationServer01"
                  value={props.formdata.fullnameMan}
                  onChange={handleInputValue}
                  required
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServerUsername">
                  شماره تماس:
                </CFormLabel>
                <CInputGroup className="has-validation">
                  <CFormInput
                    name="mobbileMan"
                    type="text"
                    id="validationServerUsername"
                    aria-describedby="inputGroupPrepend03"
                    required
                    value={props.formdata.mobbileMan}
                    onChange={handleInputValue}
                  />
                  <CInputGroupText id="inputGroupPrepend03">98+</CInputGroupText>
                  <CFormFeedback invalid>Please choose a username.</CFormFeedback>
                </CInputGroup>
              </CCol>
              <CCol md={4}></CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01">
                  {' '}
                  نام و نام خانوادگی عروس: 
                </CFormLabel>
                <CFormInput
                  name="fullnameWoman"
                  type="text"
                  id="validationServer01"
                  required
                  value={props.formdata.fullnameWoman}
                  onChange={handleInputValue}
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServerUsername">
                  شماره تماس: 
                </CFormLabel>
                <CInputGroup className="has-validation">
                  <CFormInput
                    name="mobileWoman"
                    type="text"
                    id="validationServerUsername"
                    aria-describedby="inputGroupPrepend03"
                    required
                    value={props.formdata.mobileWoman}
                    onChange={handleInputValue}
                  />
                  <CInputGroupText id="inputGroupPrepend03">98+</CInputGroupText>
                  <CFormFeedback invalid>Please choose a username.</CFormFeedback>
                </CInputGroup>
              </CCol>
              <CCol md={4}></CCol>
              <CCol md={4} className="mt-5">
                <CFormLabel htmlFor="validationServer01"> ت-ت داماد: </CFormLabel>
                <DatePicker
                value={props.formdata.manBirthdate}
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                  onChange={handleChangeMan}
                  style={{
                    backgroundColor: 'aliceblue',
                    height: '45px',
                    width: '150px',
                    borderRadius: '8px',
                    fontSize: '18px',
                    padding: '3px 10px',
                    marginRight: '7px',
                  }}
                />
              </CCol>
              <CCol md={4} className="mt-5">
                <CFormLabel htmlFor="validationServer01"> ت-ت عروس: </CFormLabel>
                <DatePicker
                  value={props.formdata.womanBirthdate}
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                  onChange={handleChangeWoman}
                  style={{
                    backgroundColor: 'aliceblue',
                    height: '45px',
                    width: '150px',
                    borderRadius: '8px',
                    fontSize: '18px',
                    padding: '3px 10px',
                    marginRight: '7px',
                  }}
                />
              </CCol>
              <CCol md={4}></CCol>
              <div className="mb-3 mt-5">
                <CFormLabel htmlFor="exampleFormControlTextarea1">
                  آدرس مشتری :
                </CFormLabel>
                <CFormTextarea
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="address"
                  value={props.formdata.address}
                  onChange={handleInputValue}
                ></CFormTextarea>
              </div>
            </CForm>
            <CButton disabled={disable}
             color="primary" type="submit" className="mt-4" onClick={handleBuildContract}>
              ارسال اطلاعات اولیه قرارداد
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  )
}

export default CustomerService
