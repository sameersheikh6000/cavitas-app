import React from 'react'

const CavitasMeaning = () => {
  return (
    <section className='aboutUs__cavitasMeaning'>
      <div className='aboutUs__cavitasMeaning__detailsBox'>
        <h1>What Cavitas mean?</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      </div>
      <div className='aboutUs__cavitasMeaning__pictureBox'>
        <img src={require("../../../../assets/CavitasMean-image.png")} alt="" />
      </div>
    </section>
  )
}

export default CavitasMeaning