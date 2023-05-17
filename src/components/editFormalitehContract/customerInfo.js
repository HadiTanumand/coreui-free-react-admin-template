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


const CustomerInfo = ({formdata,
  setFormData,
  handleInput,
  deleteOtherContract,
  updateOtherContract,
  handleChangeMan,
  handleChangeWoman
})=>{
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
                  name="full_name_man"
                  type="text"
                  id="validationServer01"
                  value={formdata.full_name_man ? formdata.full_name_man : ''}
                  onChange={handleInput}
                  required
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServerUsername">شماره تماس:</CFormLabel>
                <CInputGroup className="has-validation">
                  <CFormInput
                  maxLength={11}
                    name="mobile_man"
                    type="text"
                    id="validationServerUsername"
                    aria-describedby="inputGroupPrepend03"
                    required
                    value={formdata.mobile_man ? formdata.mobile_man : ''}
                    onChange={handleInput}
                  />
                  <CInputGroupText id="inputGroupPrepend03">98+</CInputGroupText>
                  <CFormFeedback invalid>Please choose a username.</CFormFeedback>
                </CInputGroup>
              </CCol>
              <CCol md={4}></CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01"> نام و نام خانوادگی عروس:</CFormLabel>
                <CFormInput
                  name="full_name_woman"
                  type="text"
                  id="validationServer01"
                  required
                  value={formdata.full_name_woman ? formdata.full_name_woman : ''}
                  onChange={handleInput}
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServerUsername">شماره تماس:</CFormLabel>
                <CInputGroup className="has-validation">
                  <CFormInput
                  maxLength={11}
                    name="mobile_woman"
                    type="text"
                    id="validationServerUsername"
                    aria-describedby="inputGroupPrepend03"
                    required
                    value={formdata.full_name_man ? formdata.mobile_woman : ''}
                    onChange={handleInput}
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
                  value={formdata.woman_birthday ? formdata.woman_birthday : ''}
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
                <CFormLabel htmlFor="exampleFormControlTextarea1">آدرس مشتری :</CFormLabel>
                <CFormTextarea
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="address"
                  value={formdata.address}
                  onChange={handleInput}
                ></CFormTextarea>
              </div>
            </CForm>
            <CButton
              color="primary"
              type="submit"
              className="mt-4"
               onClick={updateOtherContract}
            >
               ویرایش
            </CButton>
            <CButton
              color="danger"
              type="submit"
              className="mt-4 ms-3 text-white"
               onClick={deleteOtherContract}
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