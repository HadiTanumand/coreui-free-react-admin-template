import React, { useState } from 'react'
import { CFormInput } from '@coreui/react'
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
import axios from 'axios'
import DatePicker from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import 'react-multi-date-picker/styles/layouts/mobile.css'
import transition from 'react-element-popper/animations/transition'
import TimePicker from 'react-multi-date-picker/plugins/time_picker'

const PartyService = (props) => {
  const [dateValue, setDateValue] = useState();
  const [disableBtn, setDisableBtn] = useState(false)
  const currentUser = localStorage.getItem('curent_user')
  const token = localStorage.getItem('token ateliyeh')

  function handleChange(value) {
    props.setformdata({
      ...props.formdata,
      celebration_date: `${value.year}-${value.month.number}-${value.day}`,
    })
    props.setformdata({
      ...props.formdata,
      celebration_time: `${value.hour}:${value.minute}:10`,
    })
  }

  const handleSwitch = (e) => {
    props.setformdata({
      ...props.formdata,
      [e.target.name]: e.target.checked,
    })
  }
  const handleInput = (e) => {
    props.setformdata({
      ...props.formdata,
      [e.target.name]: e.target.value,
    })
  }

  const handleBuildContract = (e) => {
    e.preventDefault()
    const data = {
      api_key: localStorage.getItem('api_key'),
      current_user: currentUser,
      contract_detail_id: props.formdata.contract_id,
      f_building: props.formdata.f_building,
      f_mahzar: props.formdata.f_mahzar,
      p_building: props.formdata.p_building,
      p_lobby: props.formdata.p_lobby,
      p_first_floor: props.formdata.p_first_floor,
      p_mahzar: props.formdata.p_mahzar,
      p_house_flower: props.formdata.p_house_flower,
      p_second_floor: props.formdata.p_second_floor,
      p_roof_garden: props.formdata.p_roof_garden,
      p_hani_moon: props.formdata.p_hani_moon,
      number_of_camera: props.formdata.number_of_camera,
      number_of_camera_man: props.formdata.number_of_camera_man,
      number_of_cameras_woman: props.formdata.number_of_cameras_woman,
      number_of_crane: props.formdata.number_of_crane,
      number_of_crane_man: props.formdata.number_of_crane_man,
      number_of_crane_woman: props.formdata.number_of_crane_woman,
      stop_laser: props.formdata.stop_laser,
      stop_laser_man: props.formdata.stop_laser_man,
      stop_laser_woman: props.formdata.stop_laser_woman,
      heli_shot_entry: props.formdata.heli_shot_entry,
      heli_shot_out: props.formdata.heli_shot_out,
      heli_shot_celebration_man: props.formdata.heli_shot_celebration_man,
      heli_shot_celebration_woman: props.formdata.heli_shot_celebration_woman,
      t_celebration_man: props.formdata.t_celebration_man,
      t_celebration_woman: props.formdata.t_celebration_woman,
      f_dowry: props.formdata.f_dowry,
      f_beauty_shop: props.formdata.f_beauty_shop,
      live: props.formdata.live,
      clip: props.formdata.clip,
      show_clip_atelie: props.formdata.show_clip_atelie,
      show_clip_hall: props.formdata.show_clip_hall,
      edit_film: props.formdata.edit_film,
      instagram_clip_count: props.formdata.instagram_clip_count,
      picture_slide_show: props.formdata.picture_slide_show,
      play_pic_slide_hall: props.formdata.play_pic_slide_hall,
      play_pic_slide_atelie_tv: props.formdata.play_pic_slide_atelie_tv,
      play_pic_slide_atelie_videowall: props.formdata.play_pic_slide_atelie_videowall,
      celebration_date: props.formdata.celebration_date,
      celebration_time: props.formdata.celebration_time,
      celebration_address: props.formdata.celebration_address,
    }
    axios({
      method: 'post',
      url: '/api/AdminDashboard/RegisterContract',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        setDisableBtn(true)
        toast.success('اطلاعات تکمیلی قرارداد با موفقیت ثبت شد', {
          position: toast.POSITION.TOP_RIGHT,
        })
      })
      .catch((err) => {
        console.log(err)
        toast.error('خطا در ایجاد اطلاعات تکمیلی قرارداد', {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'dark',
        })
      })
  }

  return (
    <>
      <ToastContainer rtl bodyClassName="toastBody" />
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>اطلاعات تکمیلی و خدماتی قرارداد فرمالیته</strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3 needs-validation">
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.f_building}
                  onClick={handleSwitch}
                  label="آفرود"
                  name="f_building"
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  label="شعفی"
                  checked={props.formdata.f_mahzar}
                  name="f_mahzar"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  label="  دیزاین"
                  checked={props.formdata.p_building}
                  name="p_building"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  label=" میکاپ آرتیست"
                  checked={props.formdata.p_lobby}
                  name="p_lobby"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  label="لباس عروس"
                  checked={props.formdata.p_first_floor}
                  name="p_first_floor"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.p_mahzar}
                  label=" تصویربرداری پارت"
                  name="p_mahzar"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.p_house_flower}
                  label="عکاسی گلخانه"
                  name="p_house_flower"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.p_second_floor}
                  label="هلی شات پارت"
                  name="p_second_floor"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.live}
                  label="لایو"
                  name="live"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.clip}
                  label="کلیپ روز"
                  name="clip"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.show_clip_atelie}
                  label="پخش کلیپ آتلیه"
                  name="show_clip_atelie"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.edit_film}
                  label="تدوین فیلم"
                  name="edit_film"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.show_clip_hall}
                  label="پخش کلیپ سالن"
                  name="show_clip_hall"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  label="اسلایدشو عکس"
                  checked={props.formdata.picture_slide_show}
                  name="picture_slide_show"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.play_pic_slide_hall}
                  label="اسلایدشو سالن"
                  name="play_pic_slide_hall"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.play_pic_slide_atelie_tv}
                  label="پخش اسلاید شو TV"
                  name="play_pic_slide_atelie_tv"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.play_pic_slide_atelie_videowall}
                  label="پخش ویدئو وال"
                  name="play_pic_slide_atelie_videowall"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.instagram_clip_count}
                  label="کلیپ اینستاگرام"
                  name="instagram_clip_count"
                  onClick={handleSwitch}
                />
              </CCol>
              {/* <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.p_roof_garden}
                  label="عکاسی پارت"
                  name="p_roof_garden"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.p_hani_moon}
                  label="عکاسی هانی مون"
                  name="p_hani_moon"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.f_dowry}
                  label="فیلم برداری جهیزیه"
                  name="f_dowry"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.f_beauty_shop}
                  label="فیلم برداری آرایشگاه"
                  name="f_beauty_shop"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.heli_shot_entry}
                  label="هلی شات ورود"
                  name="heli_shot_entry"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.heli_shot_out}
                  label="هلی شات خروج"
                  onClick={handleSwitch}
                  name="heli_shot_out"
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.heli_shot_celebration_woman}
                  label="هلی شات قسمت  بانوان"
                  name="heli_shot_celebration_woman"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.heli_shot_celebration_man}
                  label="هلی شات قسمت آقایان"
                  name="heli_shot_celebration_man"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.t_celebration_man}
                  label="عکاسی جشن قسمت آقایان"
                  name="t_celebration_man"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.t_celebration_woman}
                  label="عکاسی جشن قسمت بانوان"
                  name="t_celebration_woman"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.live}
                  label="لایو"
                  name="live"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.clip}
                  label="کلیپ روز"
                  name="clip"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.show_clip_atelie}
                  label="پخش کلیپ آتلیه"
                  name="show_clip_atelie"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.edit_film}
                  label="تدوین فیلم"
                  name="edit_film"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.show_clip_hall}
                  label="پخش کلیپ سالن"
                  name="show_clip_hall"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  label="اسلایدشو عکس"
                  checked={props.formdata.picture_slide_show}
                  name="picture_slide_show"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.play_pic_slide_hall}
                  label="اسلایدشو سالن"
                  name="play_pic_slide_hall"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.play_pic_slide_atelie_tv}
                  label="پخش اسلاید شو TV"
                  name="play_pic_slide_atelie_tv"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.play_pic_slide_atelie_videowall}
                  label="پخش ویدئو وال"
                  name="play_pic_slide_atelie_videowall"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.instagram_clip_count}
                  label="کلیپ اینستاگرام"
                  name="instagram_clip_count"
                  onClick={handleSwitch}
                />
              </CCol> */}
            </CForm>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong> </strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3 needs-validation">
              {/* <CCol md={4}>
                <CFormLabel htmlFor="validationServer01"> تعداد دوربین جشن:</CFormLabel>
                <CFormInput
                min={0}
                  type="number"
                  name="number_of_camera"
                  value={props.formdata.number_of_camera}
                  onChange={handleInput}
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01"> کاربر آقا:</CFormLabel>
                <CFormInput
                min={0}
                  type="number"
                  name="number_of_camera_man"
                  value={props.formdata.number_of_camera_man}
                  onChange={handleInput}
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01"> کاربر خانم:</CFormLabel>
                <CFormInput
                  type="number"
                  name="number_of_cameras_woman"
                  value={props.formdata.number_of_cameras_woman}
                  onChange={handleInput}
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01">تعداد کرین جشن:</CFormLabel>
                <CFormInput
                min={0}
                  type="number"
                  name="number_of_crane"
                  value={props.formdata.number_of_crane}
                  onChange={handleInput}
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01">کرین آقا:</CFormLabel>
                <CFormInput
                min={0}
                  type="number"
                  name="number_of_crane_man"
                  value={props.formdata.number_of_crane_man}
                  onChange={handleInput}
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01">کرین خانم:</CFormLabel>
                <CFormInput
                min={0}
                  type="number"
                  name="number_of_crane_woman"
                  value={props.formdata.number_of_crane_woman}
                  onChange={handleInput}
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01"> تعداد استابلایزر:</CFormLabel>
                <CFormInput
                min={0}
                  type="number"
                  name="stop_laser"
                  value={props.formdata.stop_laser}
                  onChange={handleInput}
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01"> </CFormLabel>
                <CFormSwitch
                  size="xl"
                  label="استابلایزر مرد"
                  checked={props.formdata.stop_laser_man}
                  name="stop_laser_man"
                  onClick={handleSwitch}
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01"> </CFormLabel>
                <CFormSwitch
                  size="xl"
                  checked={props.formdata.stop_laser_woman}
                  label="استابلایزر خانم"
                  name="stop_laser_woman"
                  onClick={handleSwitch}
                />
              </CCol> */}
              <CCol md={6} className="mt-5">
                <CFormLabel className="ml-4" htmlFor="validationServer01">
                  تاریخ وساعت فرمالیته:
                </CFormLabel>
                <DatePicker
                  value={dateValue}
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                  onChange={handleChange}
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
                <span className="ms-3" style={{ fontSize: '25px' }}>{props.formdata.celebration_time}</span>
              </CCol>
              <div className="mb-3 mt-5">
                <CFormLabel htmlFor="exampleFormControlTextarea1">آدرس مکان مراسم :</CFormLabel>
                <CFormTextarea
                  name="celebration_address"
                  value={props.formdata.celebration_address}
                  onChange={handleInput}
                  rows="3"
                ></CFormTextarea>
              </div>
              <CButton 
              color="primary" 
              type="submit" 
              className="mt-4" 
              onClick={handleBuildContract}
              disabled={disableBtn}>
                ارسال اطلاعات تکمیلی قرارداد
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  )
}

export default PartyService
