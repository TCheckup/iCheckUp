import React from 'react'

import '../styles/HowItWorks/HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className = "howitworks_description">
      <p>iCheckUp application is capable to diagnose diseases and ilness that a patient's symptoms he/she currently suffers. This information can be used for further by a medical practitioner for later on consultation. This application allows users to share their symptoms based on the disease chosen then it processes data to predict the disease. The system evaluates the symptoms provided by the user as input and gives the probability of the disease as an output Disease Prediction.</p>
      <p>Other feature that the iCheckUp provides is that, there is also a Pill/Medicine identifier that ask from the patient's pill identification such as size, color, and shape to determine the possibilities that the pill/medicine is based on those factors.</p>
      <p>Another feature that this site possess is the Symptoms tracker that observe the patient's symptoms on timely bases to further tracks the healing or severness growth in a period of time. It is a good idea to keep track of your symptoms, by taking note of the types of symptoms and their intensity. This information can be very helpful to both you and your doctor in tracking your medical condition.</p>
      <p>Other features includes an Encyclopedia of diseases/illness, the feature first aid and remedies, for information library and guides. It can also provide important information about disease trends and risk factors, outcomes of treatment or public health interventions, functional abilities, patterns of care, and health care costs and use.</p>
      <p>This site also includes a Google Map feature to locate and find clinics and hospitals in your area. Google Maps makes it easy to accurately determine the patient’s location before connecting them with the correct physician.</p>
    </div>
  )
}

export default HowItWorks