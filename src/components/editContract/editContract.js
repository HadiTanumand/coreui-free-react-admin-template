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

import CustomerInfo from './customerInfo'
import PartyDetail from './partyDetail'
import PictureBoard from './pictureBoard'
import AlbumeDetail from './albumeDetail'

const editContract = () => {
  const params = useParams()
  const token = localStorage.getItem('token ateliyeh')
  const currentUser = localStorage.getItem('curent_user')
  const [formdata, setFormData] = useState({})
  const [albumePaperList, setAlbumPaperList] = useState([])
  const [albumeList, setAlbumList] = useState([])
  const [pictureBoardsList, setPictureBoardList] = useState([])

  useEffect(() => {
    getContractEdit()
  }, [])


  ////// get Data //////////////////////

  const getContractEdit = () => {
    const data = {
      api_key: localStorage.getItem('api_key'),
      current_user: currentUser,
      contract_detail_id: params.id,
    }

    axios({
      method: 'post',
      url: '/api/AdminDashboard/GetContractDetail',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        setFormData(result.data.contract)
        console.log(result.data.contract)
        toast.success("قرارداد مورد نظر برای ویرایش دریافت شد", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark"
        });
      })
      .catch((err) => {
        console.log(err)
        toast.error("خطا در دریافت اطلاعات قرارداد موردنظر", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark"
        });
      })
  }

  const getListAlbume = () => {
    const data = {
      api_key: localStorage.getItem('api_key'),
      current_user: currentUser,
      contract_detail_id: params.id,
    }

    axios({
      method: 'post',
      url: '/api/AdminDashboard/GetContractAlbumes',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        console.log(result);
        if(result.data.albumes) setAlbumList(result.data.albumes);
        if(result.data.albumes== null){
          toast.success("آلبومی وجود ندارد", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "dark"
          });
        }else{
          toast.success("لیست آلبوم ها به روز شد", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "dark"
          });
        }
       
      })
      .catch((err) => {
        console.log(err.response.data.message)
        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark"
        });
      })
  }
  const getPictureList = () => {
    const data = {
      api_key: localStorage.getItem('api_key'),
      current_user: currentUser,
      contract_detail_id: params.id,
    }

    axios({
      method: 'post',
      url: '/api/AdminDashboard/GetContractPictureBoards',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        console.log(result.data.picture_boards);
        setPictureBoardList(result.data.picture_boards)  
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getPaperList = (id) => {
    const data = {
      api_key: localStorage.getItem('api_key'),
      current_user: currentUser,
      albume_detail_id: id,
    }

    axios({
      method: 'post',
      url: '/api/AdminDashboard/GetContractAlbumePapers',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        console.log(result);
        setAlbumPaperList(result.data.albume_papers);
        toast.success("لیست کاغذ ها به روز شد", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark"
        });
      })
      .catch((err) => {
        console.log(err)
        toast.error('خطا در دریافت کاغذها دوباره تلاش کنید.', {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark"
        });
      })
  }

  /////// Update Data //////////////////////
  const updatePictureBoard = (pictureID ,ID)=>{
    const data = {
      api_key: localStorage.getItem('api_key'),
      current_user: currentUser,
      contract_detail_id: params.id,
      picture_type_id: pictureBoardsList[pictureID].picture_type_id,
      picture_size_id: pictureBoardsList[pictureID].picture_size_id,
      paper_type_id: pictureBoardsList[pictureID].paper_type_id,
      number_of_paper: pictureBoardsList[pictureID].number_of_paper,
      price: pictureBoardsList[pictureID].price,
      discount: pictureBoardsList[pictureID].discount,
      picture_board_detail_id: ID,
    }

    axios({
      method: 'post',
      url: '/api/AdminDashboard/UpdatePictureBoardDetail',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const updateAlbume = (albumeID , ID)=>{
    const data = {
      api_key: localStorage.getItem('api_key'),
      current_user: currentUser,
      contract_detail_id: params.id,
      type_id: albumeList[albumeID].type_id,
      albume_size_id: albumeList[albumeID].albume_size_id,
      skin_id: albumeList[albumeID].skin_id,
      bag_id: albumeList[albumeID].bag_id,
      number_of_papers: albumeList[albumeID].number_of_papers,
      travel_album_size_id: albumeList[albumeID].travel_album_size_id,
      albume_detail_id: ID,
    }

    axios({
      method: 'post',
      url: '/api/AdminDashboard/UpdateAlbumeDetail',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err)
      })

  }

  const updatePaperAlbume = (albumeID , ID , PaperID)=>{
    const data = {
      api_key: localStorage.getItem('api_key'),
      current_user: currentUser,
      contract_detail_id: params.id,
      albume_detail_id: albumeID,
      paper_type_id: albumePaperList[PaperID].paper_type_id,
      number_of_paper: albumePaperList[PaperID].number_of_paper,
      albume_paper_detail_id: ID,
    }

    axios({
      method: 'post',
      url: '/api/AdminDashboard/UpdateAlbumePaperDetail',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        console.log(result);
        // toast.success("آلبوم مورد نظر  ویرایش  شد", {
        //   position: toast.POSITION.TOP_RIGHT,
        //   theme: "dark"
        // });
      })
      .catch((err) => {
        console.log(err)
        // toast.error("قرارداد مورد نظر برای ویرایش دریافت شد", {
        //   position: toast.POSITION.TOP_RIGHT,
        //   theme: "dark"
        // });
      })

  }

  const updateContract = ()=>{
    const data = {
      api_key: localStorage.getItem('api_key'),
      current_user: currentUser,
      contract_detail_id: params.id,
      f_building: formdata.f_building,
      f_mahzar: formdata.f_mahzar,
      p_building: formdata.p_building,
      p_lobby: formdata.p_lobby,
      p_first_floor: formdata.p_first_floor,
      p_mahzar: formdata.p_mahzar,
      p_house_flower: formdata.p_house_flower,
      p_second_floor: formdata.p_second_floor,
      p_roof_garden: formdata.p_roof_garden,
      p_hani_moon: formdata.p_hani_moon,
      number_of_camera: formdata.number_of_camera,
      number_of_camera_man: formdata.number_of_camera_man,
      number_of_cameras_woman: formdata.number_of_cameras_woman,
      number_of_crane: formdata.number_of_crane,
      number_of_crane_man: formdata.number_of_crane_man,
      number_of_crane_woman: formdata.number_of_crane_woman,
      stop_laser: formdata.stop_laser,
      stop_laser_man: formdata.stop_laser_man,
      stop_laser_woman: formdata.stop_laser_woman,
      heli_shot_entry: formdata.heli_shot_entry,
      heli_shot_out: formdata.heli_shot_out,
      heli_shot_celebration_man: formdata.heli_shot_celebration_man,
      heli_shot_celebration_woman: formdata.heli_shot_celebration_woman,
      t_celebration_man: formdata.t_celebration_man,
      t_celebration_woman: formdata.t_celebration_woman,
      f_dowry: formdata.f_dowry,
      f_beauty_shop: formdata.f_beauty_shop,
      live: formdata.live,
      clip: formdata.clip,
      show_clip_atelie: formdata.show_clip_atelie,
      show_clip_hall: formdata.show_clip_hall,
      edit_film: formdata.edit_film,
      instagram_clip_count: formdata.instagram_clip_count,
      picture_slide_show: formdata.picture_slide_show,
      play_pic_slide_hall: formdata.play_pic_slide_hall,
      play_pic_slide_atelie_tv: formdata.play_pic_slide_atelie_tv,
      play_pic_slide_atelie_videowall: formdata.play_pic_slide_atelie_videowall,
      celebration_date: formdata.celebration_date,
      celebration_time: formdata.celebration_time,
      celebration_address: formdata.celebration_address,
    }

    sendDataForServer('/api/AdminDashboard/UpdateContract',data)

  }


  const updateOtherContract=()=>{
    const data = {
      api_key: localStorage.getItem('api_key'),
      current_user: currentUser,
      contract_detail_id: params.id,
      full_name_man: formdata.full_name_man,
      full_name_woman: formdata.full_name_woman,
      mobile_man: formdata.mobile_man,
      mobile_woman: formdata.mobile_woman,
      man_birthday: formdata.man_birthday,
      woman_birthday: formdata.woman_birthday,
      address: formdata.address,
    }

    sendDataForServer('/api/AdminDashboard/UpdateOther',data)
  }



  //////// Delete Data ///////////////////////
  const deleteAlbume = (id)=>{
    const data = {
      api_key: localStorage.getItem('api_key'),
      current_user: currentUser,
      albume_detail_id: id,
    }

    axios({
      method: 'post',
      url: '/api/AdminDashboard/DeleteAlbumeDetail',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        console.log(result);
        getListAlbume();
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const deletePaperAlbume = (id)=>{
    const data = {
      api_key: localStorage.getItem('api_key'),
      current_user: currentUser,
      albume_paper_detail_id: id,
    }

    axios({
      method: 'post',
      url: '/api/AdminDashboard/DeleteAlbumePaperDetail',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        console.log(result);
        getListAlbume();
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const deletePictureBoard = (id)=>{
    const data = {
      api_key: localStorage.getItem('api_key'),
      current_user: currentUser,
      picture_board_detail_id: id,
    }

    axios({
      method: 'post',
      url: '/api/AdminDashboard/DeletePictureBoardDetail',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        console.log(result);
        getListAlbume();
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const deleteContract = ()=>{
    const data = {
      api_key: localStorage.getItem('api_key'),
      current_user: currentUser,
      contract_detail_id: params.id,
    }

    sendDataForServer('/api/AdminDashboard/DeleteContract',data)
  }

  const deleteOtherContract = ()=>{
    const data = {
      api_key: localStorage.getItem('api_key'),
      current_user: currentUser,
      contract_detail_id: params.id,
    }
    sendDataForServer('/api/AdminDashboard/DeleteOther',data)

  }


  /////////// Register New Data /////////////////
  const RegisterAlbumDetail = (albumeID) => {
    const data = {
      api_key: localStorage.getItem('api_key'),
      contract_detail_id: params.id,
      current_user: currentUser,
      type_id: albumeList[albumeID].type_id,
      albume_size_id: albumeList[albumeID].albume_size_id,
      skin_id: albumeList[albumeID].skin_id,
      bag_id: albumeList[albumeID].bag_id,
      number_of_papers: albumeList[albumeID].number_of_papers,
      travel_album_size_id: albumeList[albumeID].travel_album_size_id,
    }

    sendDataForServer('/api/AdminDashboard/RegisterAlbumeDetail', data)
    
  }

  const RegisterAlbumPaperDetail = (albumeID , PaperID) => {
    const data = {
      api_key: localStorage.getItem('api_key'),
      contract_detail_id: params.id,
      current_user: currentUser,
      albume_detail_id: albumeID,
      paper_type_id: albumePaperList[PaperID].paper_type_id,
      number_of_paper: albumePaperList[PaperID].number_of_paper,
    }
    sendDataForServer('/api/AdminDashboard/RegisterAlbumePaperDetail', data)
  }

  const RegisterPictureBoardDetail = (pictureID) => {
    const data = {
      api_key: localStorage.getItem('api_key'),
      contract_detail_id: params.id,
      current_user: currentUser,
      picture_type_id: pictureBoardsList[pictureID].picture_type_id,
      picture_size_id: pictureBoardsList[pictureID].picture_size_id,
      paper_type_id: pictureBoardsList[pictureID].paper_type_id,
      number_of_paper: pictureBoardsList[pictureID].number_of_paper,
      price: pictureBoardsList[pictureID].price,
      discount: pictureBoardsList[pictureID].discount,
    }
    sendDataForServer('/api/AdminDashboard/RegisterPictureBoardDetail', data)
  }


  function sendDataForServer(url, data) {
    axios({
      method: 'post',
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        toast.success(result.data.msg, {
          position: toast.POSITION.TOP_RIGHT,
        })
      })
      .catch((err) => {
        console.log(err)
        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'dark',
        })
      })
  }




  ////////////// Handle Change Data /////////////
  const handleSwitch = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.checked,
    })
  }


  const handleInput = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    })
  }


  



  return (
    <>
      <ToastContainer rtl bodyClassName="toastBody" />
      <CustomerInfo formdata={formdata}
      handleSwitch={handleSwitch} 
      handleInput={handleInput} 
      setFormData={setFormData}
      deleteOtherContract={deleteOtherContract}
      updateOtherContract={updateOtherContract}
      />

      <PartyDetail formdata={formdata}
      handleSwitch={handleSwitch} 
      handleInput={handleInput} 
       setFormData={setFormData}
       deleteContract={deleteContract}
       updateContract={updateContract}
       />

      <AlbumeDetail
      albumeList={albumeList}
      setAlbumList={setAlbumList}
      getListAlbume={getListAlbume}
      albumePaperList={albumePaperList}
      getPaperList={getPaperList}
      setAlbumPaperList={setAlbumPaperList}
      contract_id={params.id}
      deleteAlbume={deleteAlbume}
      updateAlbume={updateAlbume}
      updatePaperAlbume={updatePaperAlbume}
      deletePaperAlbume={deletePaperAlbume}
      RegisterAlbumDetail={RegisterAlbumDetail}
      RegisterAlbumPaperDetail={RegisterAlbumPaperDetail}
       />

      <PictureBoard formdata={formdata}
      handleSwitch={handleSwitch}  
      handleInput={handleInput}  
      setFormData={setFormData} 
      pictureBoardsList={pictureBoardsList}
      getPictureList={getPictureList}
      setPictureBoardList={setPictureBoardList}
      contract_id={params.id}
      updatePictureBoard={updatePictureBoard}
      deletePictureBoard={deletePictureBoard}
      RegisterPictureBoardDetail={RegisterPictureBoardDetail}
      />
      
     
    </>
  )
}

export default editContract
