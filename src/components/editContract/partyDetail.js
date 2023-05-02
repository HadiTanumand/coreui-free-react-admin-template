import React, { useEffect, useState } from 'react'
import { CFormInput } from '@coreui/react'
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
import DatePicker from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import 'react-multi-date-picker/styles/layouts/mobile.css'
import transition from 'react-element-popper/animations/transition'
import TimePicker from 'react-multi-date-picker/plugins/time_picker'


const PartyDetail = ({formdata,setFormData,handleInput,handleSwitch,deleteContract,updateContract})=>{
  return(
    <>
    <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>اطلاعات تکمیلی و خدماتی قرارداد</strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3 needs-validation">
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={formdata.f_building}
                  onClick={handleSwitch}
                  label="فیلم برداری عمارت"
                  name="f_building"
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  label="فیلم برداری محضر"
                  checked={formdata.f_mahzar}
                  name="f_mahzar"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  label="عکاسی کامل عمارت"
                  checked={formdata.p_building}
                  name="p_building"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  label="عکاسی لابی"
                  checked={formdata.p_lobby}
                  name="p_lobby"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  label="عکاسی طبقه اول"
                  checked={formdata.p_first_floor}
                  name="p_first_floor"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={formdata.p_mahzar}
                  label="عکاسی محضر"
                  name="p_mahzar"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={formdata.p_house_flower}
                  label="عکاسی گلخانه"
                  name="p_house_flower"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={formdata.p_second_floor}
                  label="عکاسی طبقه دوم"
                  name="p_second_floor"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={formdata.p_roof_garden}
                  label="عکاسی روف گاردن"
                  name="p_roof_garden"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={formdata.p_hani_moon}
                  label="عکاسی هانی مون"
                  name="p_hani_moon"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={formdata.f_dowry}
                  label="فیلم برداری جهیزیه"
                  name="f_dowry"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={formdata.f_beauty_shop}
                  label="فیلم برداری آرایشگاه"
                  name="f_beauty_shop"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={formdata.heli_shot_entry}
                  label="هلی شات ورود"
                  name="heli_shot_entry"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={formdata.heli_shot_out}
                  label="هلی شات خروج"
                  onClick={handleSwitch}
                  name="heli_shot_out"
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={formdata.heli_shot_celebration_woman}
                  label="هلی شات قسمت  بانوان"
                  name="heli_shot_celebration_woman"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={formdata.heli_shot_celebration_man}
                  label="هلی شات قسمت آقایان"
                  name="heli_shot_celebration_man"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={formdata.t_celebration_man}
                  label="عکاسی جشن قسمت آقایان"
                  name="t_celebration_man"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={formdata.t_celebration_woman}
                  label="عکاسی جشن قسمت بانوان"
                  name="t_celebration_woman"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={formdata.live}
                  label="لایو"
                  name="live"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={formdata.clip}
                  label="کلیپ روز"
                  name="clip"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={formdata.show_clip_atelie}
                  label="پخش کلیپ آتلیه"
                  name="show_clip_atelie"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={formdata.edit_film}
                  label="تدوین فیلم"
                  name="edit_film"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={formdata.show_clip_hall}
                  label="پخش کلیپ سالن"
                  name="show_clip_hall"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  label="اسلایدشو عکس"
                  checked={formdata.picture_slide_show}
                  name="picture_slide_show"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={formdata.play_pic_slide_hall}
                  label="اسلایدشو سالن"
                  name="play_pic_slide_hall"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={formdata.play_pic_slide_atelie_tv}
                  label="پخش اسلاید شو TV"
                  name="play_pic_slide_atelie_tv"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={formdata.play_pic_slide_atelie_videowall}
                  label="پخش ویدئو وال"
                  name="play_pic_slide_atelie_videowall"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={formdata.instagram_clip_count}
                  label="کلیپ اینستاگرام"
                  name="instagram_clip_count"
                  onClick={handleSwitch}
                />
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong> </strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3 needs-validation">
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01"> تعداد دوربین جشن:</CFormLabel>
                <CFormInput
                  type="number"
                  name="number_of_camera"
                  value={formdata.number_of_camera}
                  onChange={handleInput}
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01"> کاربر آقا:</CFormLabel>
                <CFormInput
                  type="number"
                  name="number_of_camera_man"
                  value={formdata.number_of_camera_man}
                  onChange={handleInput}
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01"> کاربر خانم:</CFormLabel>
                <CFormInput
                  type="number"
                  name="number_of_cameras_woman"
                  value={formdata.number_of_cameras_woman}
                  onChange={handleInput}
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01">تعداد کرین جشن:</CFormLabel>
                <CFormInput
                  type="number"
                  name="number_of_crane"
                  value={formdata.number_of_crane}
                  onChange={handleInput}
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01">کرین آقا:</CFormLabel>
                <CFormInput
                  type="number"
                  name="number_of_crane_man"
                  value={formdata.number_of_crane_man}
                  onChange={handleInput}
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01">کرین خانم:</CFormLabel>
                <CFormInput
                  type="number"
                  name="number_of_crane_woman"
                  value={formdata.number_of_crane_woman}
                  onChange={handleInput}
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01"> تعداد استابلایزر:</CFormLabel>
                <CFormInput
                  type="number"
                  name="stop_laser"
                  value={formdata.stop_laser}
                  onChange={handleInput}
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01"> </CFormLabel>
                <CFormSwitch
                  size="xl"
                  label="استابلایزر مرد"
                  checked={formdata.stop_laser_man}
                  name="stop_laser_man"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01"> </CFormLabel>
                <CFormSwitch
                  size="xl"
                  checked={formdata.stop_laser_woman}
                  label="استابلایزر خانم"
                  name="stop_laser_woman"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4} className="mt-5">
                <CFormLabel className="ml-4" htmlFor="validationServer01">
                  تاریخ مراسم:
                </CFormLabel>
                <DatePicker
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                  // onChange={handleChange}
                  style={{
                    backgroundColor: 'aliceblue',
                    height: '45px',
                    width: '150px',
                    borderRadius: '8px',
                    fontSize: '18px',
                    padding: '3px 10px',
                    marginRight: '7px',
                  }}
                  plugins={[<TimePicker position="bottom" />]}
                  editable={false}
                  animations={[transition()]}
                />
              </CCol>
              <div className="mb-3 mt-5">
                <CFormLabel htmlFor="exampleFormControlTextarea1">آدرس مکان مراسم :</CFormLabel>
                <CFormTextarea
                  name="celebration_address"
                  value={formdata.celebration_address}
                  onChange={handleInput}
                  rows="3"
                ></CFormTextarea>
              </div>
            </CForm>
            <CButton 
            color="primary"
             type="submit"
              className="mt-4"
              onClick={updateContract}
              >
              ثبت ویرایش اطلاعات تکمیلی
            </CButton>
            <CButton 
            color="danger"
             type="submit"
              className="mt-4 ms-3 text-white"
              onClick={deleteContract}
              >
              حذف اطلاعات تکمیلی
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  )
}

export default PartyDetail;