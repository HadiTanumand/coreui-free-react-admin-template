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


const PictureBoard = ({pictureBoardsList,getPictureList})=>{
  return(
    <>
     <CCol xs={12}>
        <CButton color="primary" type="submit" className="mt-4 mb-3" onClick={getPictureList}>
          مشاهده لیست شاسی های قرارداد
        </CButton>
        {pictureBoardsList.map((picture, index) => {
          return (
            <>
              <CCard className="mb-4">
                <CCardHeader>
                  <strong> شاسی {index + 1}</strong>
                </CCardHeader>
                <CCardBody>
                  <CForm className="row g-3 needs-validation">
                    <CCol md={4}>
                      <CFormLabel htmlFor="validationServer04"> نوع شاسی</CFormLabel>
                      <CFormSelect
                        // onChange={(e) => {
                        //   setformdata({
                        //     ...formdata,
                        //     picture_type_id: Number(e.target.value) + 1,
                        //   })
                        // }}
                        required
                      >
                        {/* <option>انتخاب کنید</option> */}
                        {/* {pictureBoard.picture_boards.map((a, index) => {
                    return <option value={index}>{a.title}</option>
                  })} */}
                      </CFormSelect>
                    </CCol>
                    <CCol md={4}>
                      <CFormLabel htmlFor="validationServer04" required>
                        جنس
                      </CFormLabel>
                      <CFormSelect
                      // onChange={(e) => {
                      //   setformdata({
                      //     ...formdata,
                      //     paperpic_type_id: Number(e.target.value) + 1,
                      //   })
                      // }}
                      >
                        {/* <option>انتخاب کنید</option> */}
                        {/* {paperType.paper_types.map((a, index) => {
                    return <option value={index}>{a.title}</option>
                  })} */}
                      </CFormSelect>
                    </CCol>
                    <CCol md={4}>
                      <CFormLabel htmlFor="validationServer04" required>
                        سایز
                      </CFormLabel>
                      <CFormSelect
                      // onChange={(e) => {
                      //   setformdata({
                      //     ...formdata,
                      //     picture_size_id: Number(e.target.value) + 1,
                      //   })
                      // }}
                      >
                        {/* <option>انتخاب کنید</option> */}
                        {/* {objSize.object_sizes.map((a, index) => {
                    return <option value={index}>{a.ob_size}</option>
                  })} */}
                      </CFormSelect>
                    </CCol>
                    <CCol md={4}>
                      <CFormLabel htmlFor="validationServer01" required>
                        تعداد:
                      </CFormLabel>
                      <CFormInput
                        // onChange={(e) => {
                        //   setformdata({
                        //     ...formdata,
                        //     number_of_picpaper: Number(e.target.value) + 1,
                        //   })
                        // }}
                        className="shadow"
                        type="number"
                      />
                    </CCol>
                    <CCol md={4}>
                      <CFormLabel htmlFor="validationServer01" required>
                        هزینه (تومان):
                      </CFormLabel>
                      <CFormInput
                        className="shadow"
                        type="text"
                        // onChange={(e) => {
                        //   setformdata({
                        //     ...formdata,
                        //     price: Number(e.target.value) + 1,
                        //   })
                        // }}
                      />
                    </CCol>
                    <CCol md={4}>
                      <CFormLabel htmlFor="validationServer01" required>
                        تخفیف (درصد):
                      </CFormLabel>
                      <CFormInput
                        className="shadow"
                        type="text"
                        // onChange={(e) => {
                        //   setformdata({
                        //     ...formdata,
                        //     discount: Number(e.target.value) + 1,
                        //   })
                        // }}
                      />
                    </CCol>
                  </CForm>
                </CCardBody>
                <CCol md={4} className="mt-3">
                  <CButton
                    color="success"
                    // onClick={RegisterAlbumPaperDetail}
                    type="submit"
                    className="m-3 text-white"
                  >
                    ثبت جدید
                  </CButton>
                  <CButton
                    color="primary"
                    // onClick={RegisterAlbumPaperDetail}
                    type="submit"
                    className="m-3"
                  >
                    ویرایش
                  </CButton>
                  <CButton
                    color="danger"
                    // onClick={RegisterAlbumPaperDetail}
                    type="submit"
                    className="m-3 text-white"
                  >
                    حذف
                  </CButton>
                </CCol>
              </CCard>
            </>
          )
        })}
      </CCol>
    </>
  )
}

export default PictureBoard;