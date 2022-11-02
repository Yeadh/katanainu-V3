const Downloads = () =>{
    return (
        <>
          {/* download-area */}
          <section className="download-area">
          <div className="container">
            <div className="row align-items-end justify-content-center">

              <div className="col-xl-5 col-lg-9">
                <div className="download-content">
                  <h4 className="title">BETA VERSION COMING SOON!</h4>
                  <h6 className="desc">Our Beta will be an 3vs3 version and more game modes following soon.</h6>
                  <p>You can test and play the demo 1vs1 now</p>
                  <h2 className="download-now">Download Now &amp; <span><img src="assets/img/images/text.png" alt="" /></span></h2>
                  <div className="download-btn-wrap">
                    <a href="# "><img src="assets/img/images/download_btn.png" alt="" /></a>

                  </div>
                  <div className="system-req">
                    <h6 className="req-title">System Requirements</h6>
                    <p>Standard computer with a sustainable graphic.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-9">
                <div className="download-img">
                  <img src="assets/img/images/download_img.png" alt="img" />
                  <div className="about-video">
                    <iframe src={"https://www.youtube.com/embed/9c7pDf-WFAk?autoplay=1&iv_load_policy=0&loop=1&playsinline=1&controls=0&mute=1&origin=" + window.location.origin} title="YouTube video player" frameBorder={0} allowFullScreen></iframe>
                  </div>
                </div>

              </div>

            </div>
          </div>
          </section>
          {/* download-area-end */}
        </>
    )
}

export default Downloads