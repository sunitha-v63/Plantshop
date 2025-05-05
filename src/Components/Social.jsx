import React from 'react'

function Social() {
  return (
    <div className="container my-5" style={{ backgroundColor: '#EAF6EF' }}>
    <div className="row text-center gy-4 px-3 py-4 rounded">

      <div className="col-12 col-md-6 col-lg-3">
        <div className="card-single p-4 rounded text-center">
          <div className="icon-circle mb-3 mx-auto">
            <i className="bi bi-truck" style={{ fontSize: "45px" }}></i>
          </div>
          <h6 className="fw-bold mb-1 fs-5" style={{color:"#0d4f36"}}>Free Delivery</h6>
          <p className="fs-6 mb-0 fw-bold">For all orders <br/>above ₹545</p>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-3">
        <div className="card-single p-4 rounded text-center">
          <div className="icon-circle mb-3 mx-auto">
            <i className="bi bi-headset" style={{ fontSize: "45px" }}></i>
          </div>
          <h6 className="fw-bold mb-1 fs-5" style={{color:"#0d4f36"}}>Customer Care</h6>
          <p className="fs-6 mb-0 fw-bold">Free care tips for <br/>every purchase</p>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-3">
        <div className="card-single p-4 rounded text-center">
          <div className="icon-circle mb-3 mx-auto">
            <i className="bi bi-arrow-repeat" style={{ fontSize: "45px" }}></i>
          </div>
          <h6 className="fw-bold mb-1 fs-5" style={{color:"#0d4f36"}}>Easy Return</h6>
          <p className="fs-6 mb-0 fw-bold">Return window is activated till 30 <br/>days</p>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-3">
        <div className="card-single p-4 rounded text-center">
          <div className="icon-circle mb-3 mx-auto">
            <i className="bi bi-credit-card-2-front-fill" style={{ fontSize: "45px" }}></i>
          </div>
          <h6 className="fw-bold mb-1 fs-5" style={{color:"#0d4f36"}}>Secure Payment</h6>
          <p className="fs-6 mb-0 fw-bold">Confidence on all your devices</p>
        </div>
      </div>

    </div>
  </div>

  )
}

export default Social