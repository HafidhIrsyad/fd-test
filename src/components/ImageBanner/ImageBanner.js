import React from 'react';
import './styles.css'

export default function ImageBanner(){
  return (
    <div className="">
      <img
        className="image-top"
        src="https://studio.femaledaily.com/modules/ps_imageslider/images/0519c6f8bed0712acb75662e4153ec969c4f514f_FD%20Beauty%20Studio%20Web%20Banner10.jpg"
        alt=""
      />
      <img 
        className="image"
        src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-banner-pic/c590cce0e1c948245fa26c7c748850e4.jpg"
        alt="top review"
      />
    </div>
  )
}