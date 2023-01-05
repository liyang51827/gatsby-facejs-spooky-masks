import React, { useEffect } from "react"
import { maskify } from "../util/maskify"

import "./styles.css"

export default () => {
  useEffect(() => {
    maskify([
      "/images/overlay-cat-black.png",
      "/images/overlay-cat-brown.png",
      "/images/overlay-cat-white.png",
      "/images/overlay-dog-gray.png",
      "/images/overlay-dog-puppy.png",
      "/images/overlay-reindeer.png"
    ])
  }, [])

  return (
    <>
      <header>
        <h1>Facial Recognition, and Funny Masks! - TensorFlowJS</h1>
        <p>
          This demo uses{" "}
          <a href="https://github.com/justadudewhohacks/face-api.js">
            face-api.js
          </a>{" "}
          to find faces, then we do some math to determine face size and angle
          so we can put some spooky masks on these folks!
        </p>
      </header>
      <main className="content">
        <div className="grid">
          <div className="grid-item">
            <img
              src="https://media.istockphoto.com/id/685132245/photo/mature-businessman-smiling-over-white-background.jpg?s=612x612&w=0&k=20&c=OJk6U-oCZ31F3TGmarAAg2jVli8ZWTagAcF4P-kNIqA="
              alt="male 01"
            />
            <small>Male 01</small>
          </div>
          <div className="grid-item">
            <img
              src="https://thumbs.dreamstime.com/b/nice-to-talk-smart-person-indoor-shot-attractive-interesting-caucasian-guy-smiling-broadly-nice-to-112345489.jpg"
              alt="male 02"
            />
            <small>Male 02</small>
          </div>
          <div className="grid-item">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=750&q=60"
              alt="female 01"
            />
            <small>Female 01</small>
          </div>
          <div className="grid-item">
            <img
              src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=300&q=60"
              alt="A man wearing a shoulder bag in a park."
            />
            <small>A man wearing a shoulder bag in a park</small>
          </div>
          <div className="grid-item">
            <img
              src="https://images.unsplash.com/photo-1544549269-414016cccf40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=300&q=60"
              alt="A man sitting under a warning sign."
            />
            <small>A man sitting under a warning sign</small>
          </div>
          <div className="grid-item">
            <img
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=300&q=60"
              alt="A man making a face, standing in front of graffiti."
            />
            <small>A man making a face, standing in front of graffiti</small>
          </div>
        </div>
      </main>

      <footer>
        <p>
          @liyang51827. All Rights Reserved.
        </p>
      </footer>
    </>
  )
}
