import React from 'react'

export default function CardHeader() {
  return (
    <header>
      <img 
        src="https://images.unsplash.com/photo-1570288685280-7802a8f8c4fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80" 
        alt=""
        className="avatar-img" 
      />

      <div className="avatar-info">
        <h1>Señor Sensei</h1>
        <h3>Frontend Developer</h3>
        <p>sensei.com</p>
      </div>

      <div className="contact-btns">
        <button className="btn">
          <i className="fa-solid fa-envelope"></i>
          Email
        </button>
        <button className="btn blue">
          <i className="fa-brands fa-linkedin"></i>
          LinkedIn
        </button>
      </div>
    </header>
  )
}