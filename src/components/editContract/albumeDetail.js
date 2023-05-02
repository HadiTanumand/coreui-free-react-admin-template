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
import 'react-multi-date-picker/styles/layouts/mobile.css'

const AlbumeDetail = ({
  albumePaperList,
  getListAlbume,
  albumeList,
  getPaperList,
  contract_id,
  deleteAlbume,
  setAlbumPaperList,
  setAlbumList,
  updateAlbume,
  updatePaperAlbume,
  deletePaperAlbume,
  RegisterAlbumDetail,
  RegisterAlbumPaperDetail
}) => {
  const [albumType, setAlbumType] = useState({ albume_types: [] })
  const [albumSkin, setAlbumSkin] = useState({ albume_skins: [] })
  const [albumBag, setAlbumBag] = useState({ albume_bags: [] })
  const [objSize, setObjSize] = useState({ object_sizes: [] })
  const [paperType, setPaperType] = useState({ paper_types: [] })
  const [pictureBoard, setPictureBoard] = useState({ picture_boards: [] })
  const token = localStorage.getItem('token ateliyeh')
  const currentUser = localStorage.getItem('curent_user')

  useEffect(() => {
    getData('/api/AdminDashboard/GetAlbumeType', setAlbumType)
    getData('/api/AdminDashboard/GetAlbumeSkin', setAlbumSkin)
    getData('/api/AdminDashboard/GetAlbumeBag', setAlbumBag)
    getData('/api/AdminDashboard/GetObjectSize', setObjSize)
    getData('/api/AdminDashboard/GetPaperType', setPaperType)
    getData('/api/AdminDashboard/GetPictureBoard', setPictureBoard)
  }, [])

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

  const handleInput = (e , id) => {
    const newState = albumeList.map(obj => {
      // 👇️ if id equals 2, update country property
      if ((obj.id) === id + 1) {
        return {...obj, [e.target.name]: e.target.value};
      }

      // 👇️ otherwise return the object as is
      return obj;
    });

    setAlbumList(newState);
  }
  const handleInputPaper = (e , id) => {
    const newState = albumePaperList.map(obj => {
      // 👇️ if id equals 2, update country property
      if ((obj.id) === id + 1) {
        return {...obj, [e.target.name]: e.target.value};
      }

      // 👇️ otherwise return the object as is
      return obj;
    });

    setAlbumPaperList(newState);
  }

  return (
    <>
      <CCol xs={12}>
        <CButton color="primary" type="submit" className="mt-4 mb-3" onClick={getListAlbume}>
          مشاهده لیست آلبوم های قرارداد
        </CButton>
        {albumeList.map((albume, index) => {
          return (
            <>
              <CCard className="mb-4">
                <CCardHeader>
                  <strong>{` آلبوم ${index + 1}`}</strong>
                </CCardHeader>
                <CCardBody>
                  <CForm className="row g-3 needs-validation">
                    <CCol md={4}>
                      <CFormLabel htmlFor="validationServer04"> نوع آلبوم</CFormLabel>
                      <CFormSelect
                        onChange={(e)=>handleInput(e,index)}
                        name="type_id"
                        value={albume.type_id}
                        required
                      >
                        {/* <option>انتخاب کنید</option> */}
                        {albumType.albume_types.map((a, index) => {
                          return <option value={index + 1}>{a.title}</option>
                        })}
                      </CFormSelect>
                    </CCol>
                    <CCol md={4}>
                      <CFormLabel htmlFor="validationServer04" required>
                        سایز آلبوم
                      </CFormLabel>
                      <CFormSelect
                        onChange={(e)=>handleInput(e,index)}
                        name="albume_size_id"
                        value={albume.albume_size_id}
                      >
                        {/* <option>انتخاب کنید</option> */}
                        {objSize.object_sizes.map((a, index) => {
                          return <option value={index + 1}>{a.ob_size}</option>
                        })}
                      </CFormSelect>
                    </CCol>
                    <CCol md={4}>
                      <CFormLabel htmlFor="validationServer01" required>
                        تعداد صفحات:
                      </CFormLabel>
                      <CFormInput
                        className="shadow"
                        type="number"
                        onChange={(e)=>handleInput(e,index)}
                        name="number_of_papers"
                        value={albume.number_of_papers}
                        required
                      />
                    </CCol>
                  </CForm>
                </CCardBody>
                <CCardBody>
                  <CForm className="row g-3 needs-validation">
                    <CCol md={4}>
                      <CFormLabel htmlFor="validationServer04"> جنس آلبوم</CFormLabel>
                      <CFormSelect
                       onChange={(e)=>handleInput(e,index)}
                        name="skin_id"
                        required
                        value={albume.skin_id}
                      >
                        {/* <option>انتخاب کنید</option> */}
                        {albumSkin.albume_skins.map((a, index) => {
                          return <option value={index + 1}>{a.title}</option>
                        })}
                      </CFormSelect>
                    </CCol>
                    <CCol md={4}>
                      <CFormLabel htmlFor="validationServer04" required>
                        کیف آلبوم
                      </CFormLabel>
                      <CFormSelect
                       onChange={(e)=>handleInput(e,index)} 
                      name="bag_id" 
                      value={albume.bag_id}>
                        <option value={-1}>نیاز ندارد</option>
                        {albumBag.albume_bags.map((a, index) => {
                          return <option value={index + 1}>{a.title}</option>
                        })}
                      </CFormSelect>
                    </CCol>
                    <CCol md={4}>
                      <CFormLabel htmlFor="validationServer04" required>
                        سایز کیف مسافرتی
                      </CFormLabel>
                      <CFormSelect
                        onChange={(e)=>handleInput(e,index)}
                        name="travel_album_size_id"
                        value={albume.travel_album_size_id}
                      >
                        {/* <option>انتخاب کنید</option> */}
                        {objSize.object_sizes.map((a, index) => {
                          return <option value={index + 1}>{a.ob_size}</option>
                        })}
                      </CFormSelect>
                    </CCol>
                  </CForm>
                  <CButton 
                  color="success"
                   type="submit"
                    className="mt-4 text-white"
                    onClick={()=>RegisterAlbumDetail(index)}
                    >
                    ثبت جدید
                  </CButton>
                  <CButton
                    color="primary"
                    type="submit"
                    className="mt-4 ms-3 text-white"
                    onClick={()=>updateAlbume(index , albume.id)}
                  >
                    ویرایش
                  </CButton>
                  <CButton
                    color="danger"
                    type="submit"
                    className="mt-4 ms-3 text-white"
                    onClick={() => deleteAlbume(albume.id)}
                  >
                    حذف آلبوم
                  </CButton>
                </CCardBody>
                <CCol md={4}>
                  <CButton
                    color="primary"
                    type="submit"
                    className="mt-4 mb-3 ms-3"
                    onClick={() => getPaperList(albume.id)}
                  >
                    مشاهده ی کاغذهای آلبوم
                  </CButton>
                </CCol>
                {albumePaperList.map((paper, index) => {
                  return (
                    <>
                      <CCardBody className="m-2 mb-3  border rounded bg-light">
                        <CForm className="row g-3 needs-validation">
                          <CCol md={4}>
                            <CFormLabel htmlFor="validationServer04">{paper.id}نوع صفحه</CFormLabel>
                            <CFormSelect
                               onChange={(e)=>handleInputPaper(e,index)}
                              name="paper_type_id"
                              value={paper.paper_type_id}
                              required
                            >
                              {/* <option>انتخاب کنید</option> */}
                              {paperType.paper_types.map((a, index) => {
                                return <option value={index + 1}>{a.title}</option>
                              })}
                            </CFormSelect>
                          </CCol>
                          <CCol md={4}>
                            <CFormLabel htmlFor="validationServer01" required>
                              تعداد صفحات:
                            </CFormLabel>
                            <CFormInput
                              type="number"
                              value={paper.number_of_paper}
                              onChange={(e)=>handleInputPaper(e,index)}
                              name="number_of_paper"
                              className="shadow"
                            />
                          </CCol>
                        </CForm>
                        <CCol md={4} className="mt-3">
                          <CButton
                            color="success"
                            onClick={()=>RegisterAlbumPaperDetail(albume.id , index)}
                            type="submit"
                            className="m-3 text-white"
                          >
                            ثبت جدید
                          </CButton>
                          <CButton
                            color="primary"
                            onClick={()=>updatePaperAlbume(albume.id , paper.id , index)}
                            type="submit"
                            className="m-3"
                          >
                            ویرایش
                          </CButton>
                          <CButton
                            color="danger"
                            onClick={()=>deletePaperAlbume(paper.id)}
                            type="submit"
                            className="m-3 text-white"
                          >
                            حذف
                          </CButton>
                        </CCol>
                      </CCardBody>
                    </>
                  )
                })}
              </CCard>
            </>
          )
        })}
      </CCol>
    </>
  )
}

export default AlbumeDetail
