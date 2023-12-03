import '../Style/Banner.css'

const Banner = () => {
  return (
    <div className='Banner'>
      <div className='banner-div'>
        <p className='banner-Number'> 1K+</p>
        <p className='banner-text'> Overall <br/> Poducts</p>
      </div>
      <hr className='line'/>
      <div className='banner-div'>
        <p className='banner-Number'> 10K</p>
        <p className='banner-text'> Satisfied <br/> Customers</p>
      </div>
      <hr className='line'/>
      <div className='banner-div'>
        <p className='banner-Number'> 40+</p>
        <p className='banner-text'> Country  <br/> Shipping</p>
      </div>
    </div>
  )
}

export default Banner
