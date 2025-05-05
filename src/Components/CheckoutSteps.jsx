import React from 'react';

function CheckoutSteps({ currentStep }) {
  const steps = ['BAG', 'ADDRESS', 'PAYMENT'];

  return (
    <div className="d-flex justify-content-center align-items-center mb-5 flex-wrap">
      {steps.map((step, index) => {
        const isActive = steps.indexOf(currentStep) >= index;
        const isCurrent = steps.indexOf(currentStep) === index;

        return (
          <React.Fragment key={step}>
            <div
              className={`px-3 py-2 rounded ${isActive ? 'black' : 'bg-light text-muted'}`}
              style={{
                fontWeight: isCurrent ? 'bold' : 'normal',
                fontSize: '20px',
                textAlign: 'center',
              }}
            >
              {step}
            </div>
            {index < steps.length - 1 && (
              <span className="mx-2 fs-5 text-muted">{'>'}</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default CheckoutSteps;
