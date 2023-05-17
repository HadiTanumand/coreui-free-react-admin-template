import React, { useEffect, useState } from 'react'
import { CFormInput } from '@coreui/react'
import { toast } from 'react-toastify'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormLabel,
  CFormSelect,
} from '@coreui/react'
import axios from 'axios'
import 'react-multi-date-picker/styles/layouts/mobile.css'

const PictureBoard = ({
  pictureBoardsList,
  getPictureList,
  setPictureBoardList,
  contract_id,
  updatePictureBoard,
  deletePictureBoard,
  RegisterPictureBoardDetail
}) => {
  const [objSize, setObjSize] = useState({ object_sizes: [] })
  const [paperType, setPaperType] = useState({ paper_types: [] })
  const token = localStorage.getItem('token ateliyeh')
  const currentUser = localStorage.getItem('curent_user')
  const [pictureBoard, setPictureBoard] = useState({ picture_boards: [] })

  useEffect(() => {
    getData('/api/AdminDashboard/GetObjectSize', setObjSize)
    getData('/api/AdminDashboard/GetPaperType', setPaperType)
    getData('/api/AdminDashboard/GetPictureBoard', setPictureBoard)
  }, [])

  const handleInput = (e, id) => {
    const newState = pictureBoardsList.map((obj) => {
      // 👇️ if id equals 2, update country property
      if (obj.id === id) {
        return { ...obj, [e.target.name]: e.target.value }
      }

      // 👇️ otherwise return the object as is
      return obj
    })

    setPictureBoardList(newState)
  }

  const data = {
    api_key: localStorage.getItem('api_key'),
    contract_detail_id: contract_id,
    current_user: currentUser,
  }

  function getData(url, fun) {
    axios({
      method: 'post',
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        fun(result.data)
      })
      .catch((err) => {
        toast.error('خطا در دریافت اطلاعات', {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'dark',
        })
      })
  }

  return (
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
                        onChange={(e) => handleInput(e, picture.id)}
                        value={picture.picture_type_id}
                        name="picture_type_id"
                      >
                        {/* <option>انتخاب کنید</option> */}
                        {pictureBoard.picture_boards.map((a, index) => {
                          return <option value={index + 1}>{a.title}</option>
                        })}
                      </CFormSelect>
                    </CCol>
                    <CCol md={4}>
                      <CFormLabel htmlFor="validationServer04">جنس</CFormLabel>
                      <CFormSelect
                        onChange={(e) => handleInput(e, picture.id)}
                        value={picture.paper_type_id}
                        name="paper_type_id"
                      >
                        {/* <option>انتخاب کنید</option> */}
                        {paperType.paper_types.map((a, index) => {
                          return <option value={index + 1}>{a.title}</option>
                        })}
                      </CFormSelect>
                    </CCol>
                    <CCol md={4}>
                      <CFormLabel htmlFor="validationServer04" required>
                        سایز
                      </CFormLabel>
                      <CFormSelect
                        onChange={(e) => handleInput(e, picture.id)}
                        value={picture.picture_size_id}
                        name="picture_size_id"
                      >
                        {/* <option>انتخاب کنید</option> */}
                        {objSize.object_sizes.map((a, index) => {
                          return <option value={index + 1}>{a.ob_size}</option>
                        })}
                      </CFormSelect>
                    </CCol>
                    <CCol md={4}>
                      <CFormLabel htmlFor="validationServer01" required>
                        تعداد:
                      </CFormLabel>
                      <CFormInput
                        onChange={(e) => handleInput(e, picture.id)}
                        className="shadow"
                        type="number"
                        value={picture.number_of_paper}
                        name="number_of_paper"
                      />
                    </CCol>
                    <CCol md={4}>
                      <CFormLabel htmlFor="validationServer01" required>
                        هزینه (تومان):
                      </CFormLabel>
                      <CFormInput
                        className="shadow"
                        type="text"
                        onChange={(e) => handleInput(e, picture.id)}
                        value={picture.price}
                        name="price"
                      />
                    </CCol>
                    <CCol md={4}>
                      <CFormLabel htmlFor="validationServer01" required>
                        تخفیف (درصد):
                      </CFormLabel>
                      <CFormInput
                        className="shadow"
                        type="text"
                        onChange={(e) => handleInput(e, picture.id)}
                        value={picture.discount}
                        name="discount"
                      />
                    </CCol>
                  </CForm>
                </CCardBody>
                <CCol md={4} className="mt-3">
                  <CButton
                    color="success"
                    onClick={()=>RegisterPictureBoardDetail(index)}
                    type="submit"
                    className="m-3 text-white"
                  >
                    ثبت جدید
                  </CButton>
                  <CButton
                    color="primary"
                    onClick={()=>updatePictureBoard(index , picture.id)}
                    type="submit"
                    className="m-3"
                  >
                    ویرایش
                  </CButton>
                  <CButton
                    color="danger"
                    onClick={()=>deletePictureBoard(picture.id)}
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

export default PictureBoard
