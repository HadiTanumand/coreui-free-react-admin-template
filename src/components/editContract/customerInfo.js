import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CFormInput } from '@coreui/react'
import { toast, ToastContainer } from 'react-toastify'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CInputGroup,
  CInputGroupText,
  CForm,
  CFormCheck,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormSwitch,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import axios from 'axios'
import DatePicker from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import 'react-multi-date-picker/styles/layouts/mobile.css'
import transition from 'react-element-popper/animations/transition'
import TimePicker from 'react-multi-date-picker/plugins/time_picker'


const CustomerInfo = ({formdata,setFormData,handleInput,handleSwitch})=>{
  return(
    <>
     <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong> اطلاعات مشتری</strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3 needs-validation">
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01"> نام و نام خانوادگی داماد:</CFormLabel>
                <CFormInput
                  name="fullnameMan"
                  type="text"
                  id="validationServer01"
                  value={formdata.full_name_man ? formdata.full_name_man : ''}
                  // onChange={handleInputValue}
                  required
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServerUsername">شماره تماس:</CFormLabel>
                <CInputGroup className="has-validation">
                  <CFormInput
                    name="mobbileMan"
                    type="number"
                    id="validationServerUsername"
                    aria-describedby="inputGroupPrepend03"
                    required
                    value={formdata.mobile_man ? formdata.mobile_man : ''}
                    // onChange={handleInputValue}
                  />
                  <CInputGroupText id="inputGroupPrepend03">98+</CInputGroupText>
                  <CFormFeedback invalid>Please choose a username.</CFormFeedback>
                </CInputGroup>
              </CCol>
              <CCol md={4}></CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01"> نام و نام خانوادگی عروس:</CFormLabel>
                <CFormInput
                  name="fullnameWoman"
                  type="text"
                  id="validationServer01"
                  required
                  value={formdata.full_name_woman ? formdata.full_name_woman : ''}
                  // onChange={handleInputValue}
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServerUsername">شماره تماس:</CFormLabel>
                <CInputGroup className="has-validation">
                  <CFormInput
                    name="mobileWoman"
                    type="number"
                    id="validationServerUsername"
                    aria-describedby="inputGroupPrepend03"
                    required
                    value={formdata.full_name_man ? formdata.mobile_woman : ''}
                    // onChange={handleInputValue}
                  />
                  <CInputGroupText id="inputGroupPrepend03">98+</CInputGroupText>
                  <CFormFeedback invalid>Please choose a username.</CFormFeedback>
                </CInputGroup>
              </CCol>
              <CCol md={4}></CCol>
              <CCol md={4} className="mt-5">
                <CFormLabel htmlFor="validationServer01"> ت-ت داماد: </CFormLabel>
                <DatePicker
                  value={formdata.man_birthday ? formdata.man_birthday : ''}
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                  // onChange={handleChangeMan}
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
                  value={formdata.woman_birthday ? formdata.woman_birthday : ''}
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                  // onChange={handleChangeWoman}
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
                <CFormLabel htmlFor="exampleFormControlTextarea1">آدرس مشتری :</CFormLabel>
                <CFormTextarea
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="address"
                  value={formdata.address}
                  // onChange={handleInputValue}
                ></CFormTextarea>
              </div>
            </CForm>
            <CButton
              color="primary"
              type="submit"
              className="mt-4"
              //  onClick={handleBuildContract}
            >
              ثبت ویرایش اطلاعات اولیه
            </CButton>
            <CButton
              color="danger"
              type="submit"
              className="mt-4 ms-3 text-white"
              //  onClick={handleBuildContract}
            >
              حذف اطلاعات اولیه قرارداد
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  )
}

export default CustomerInfo;