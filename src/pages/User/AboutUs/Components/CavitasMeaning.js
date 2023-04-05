import React from 'react'

const CavitasMeaning = () => {
  return (
    <section className='aboutUs__cavitasMeaning'>
      <div className='aboutUs__cavitasMeaning__detailsBox'>
        <h1>What Cavitas mean?</h1>
        <p>
        The Latin word "Cavitas" implies "cavity" or "cavity in the human body." Oral cavity with gums and teeth is very important area of the mouth. Cardiovascular disease, diabetes, and respiratory infections have all been related to poor dental health. Healthy teeth, gums, and mouth can help lower the chance of developing these and other serious illnesses.</p>      </div>
      <div className='aboutUs__cavitasMeaning__pictureBox'>
        <img src={require("../../../../assets/CavitasMean-image.png")} alt="" />
      </div>
    </section>
  )
}

export default CavitasMeaning