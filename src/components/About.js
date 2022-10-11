import React from 'react'
import { Link } from "react-router-dom";
export default function About(props) {
    
  // props.setProgress(40)
  // <LoadingBar
  //        height={3}
  //       color='#f11946'
  //       progress={80}
      // />
  return (
    <>
    <div className='container'>
      <div className="row my-5">
    <div className="card text-center my-5 mx-5 ">
      <div className="img">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAAB9CAMAAAAoYSedAAAAM1BMVEXR1dr////N0tf6+vv29vfR09nr7u/p6+3U2Nzv8PHo6OvP0NbU1dni5Ofy8/Tf4eXb2+DXgFdRAAADZklEQVR4nO2c2baDIAxFNRjF2f//2qtt7bWTJIhy2uV+8TVnASETJsnJycnJyUkMmImIx29sQ/zgxNq+KsqszNvefqEIor7qTHrHFLEtUsI8FAv7byosxbZLDlNfPgu4ivia/cRD907BSBbbNDHFBwUjRR3bOBH8aREuNJbwD4XN1iRcNlQb20YH66swq+iR14JygYSRFtdBcS+TMIqAXYnm5V77yBDb1g/Qild9BvWqqOUS0rSCPBLUajSkkBoSiV/9p49t7jsGlYQ0Q3RNuq2UGsTNpNtKkO6VlBIQD4TVasC7q0kcZ8xUeBoqrYYCT4Mi0LiSxzb5BXpbBvgyDVrXiqjBmYSeGo5ArwHQL+k1wAVMer8EeMfpNcCtQ6K+p/FqZcpMNP2NuBUwf0iUEoyNbfArjVZDAueX1G4pNWiXnLKocQVrN+mzhwmshfDTkENp4F/QoL6lJ8D2krqqgadBf0tPoFWYfDSgRUzqFGgkts3PCDuiSwzYVpK3RP+BS+SsvCc6AzdGo8+BwDzrhLbQV8Y2+B2sWgm8bPqCprQBuJGuKBYCdBlUiVCD5pNm3ANYdxhVg/xAlKjHQeGZYI+DPAJHrC3NSAv4qNNLF4SRH1ry84BorhIu6H5CFL72qI71iqQ4gNfEesJdLYMcvnrENbjRoa/CRL1+rqEHpWccA9PQfnXGkdDBZg5LaN29/oSG2PZJcAwnfoUGx9h3F9s+CY4GKXTMOuPIqpFzhzuuiOkLNDhbcwN+sOEINaAfNM04MwjcmsYdd20jtoVOBGUB9GhDNDCAHX7LOinYr8GF4wIGdSW4tvIGRAVZNGarmtkwaA326S8IrbYx2kGVmZhJreCiwhKKDEq8FEyUGIeb6179fGNBbqP/J4GS3mfa5GEthrg/o9m2BjdM2URcC0UTcZ0yUmJEiivNiSlixB82wC56VHGwAFr7I4u3ikO7pX5XmptsOGpD8RDqKL9SHlIxIP3LHw0HTOOzf1whJdvZz7LfYLcO09Y7bigOdqmts2PnlIe999HMbo3H4ySM/qnZR4Pitz4BROyyEkcc5wV79E/1Q7jb2KNP4WgVhicPvpv8XstsIvw8+DE3w5LgUYfXg59thB7V8nsAt5HARTQ+fiuFDjlY+yo3CF3Yy9rrTetWjMi0P+vUJQed8CcbAAAAAElFTkSuQmCC" alt="card" srcset="" className="card_img" />
      </div>
      <div className="card_details">
        <h6 className="details">Venkat sai</h6>
        <p className="details">This Website is Developed on React JS. This website is made on educational purpose </p>
        <Link to="#" ><button className="button">Contact Me</button></Link>
      </div>
    </div>
    <div className="card text-center my-5 mx-5 ">
      <div className="img">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAAB9CAMAAAAoYSedAAAAM1BMVEXR1dr////N0tf6+vv29vfR09nr7u/p6+3U2Nzv8PHo6OvP0NbU1dni5Ofy8/Tf4eXb2+DXgFdRAAADZklEQVR4nO2c2baDIAxFNRjF2f//2qtt7bWTJIhy2uV+8TVnASETJsnJycnJyUkMmImIx29sQ/zgxNq+KsqszNvefqEIor7qTHrHFLEtUsI8FAv7byosxbZLDlNfPgu4ivia/cRD907BSBbbNDHFBwUjRR3bOBH8aREuNJbwD4XN1iRcNlQb20YH66swq+iR14JygYSRFtdBcS+TMIqAXYnm5V77yBDb1g/Qild9BvWqqOUS0rSCPBLUajSkkBoSiV/9p49t7jsGlYQ0Q3RNuq2UGsTNpNtKkO6VlBIQD4TVasC7q0kcZ8xUeBoqrYYCT4Mi0LiSxzb5BXpbBvgyDVrXiqjBmYSeGo5ArwHQL+k1wAVMer8EeMfpNcCtQ6K+p/FqZcpMNP2NuBUwf0iUEoyNbfArjVZDAueX1G4pNWiXnLKocQVrN+mzhwmshfDTkENp4F/QoL6lJ8D2krqqgadBf0tPoFWYfDSgRUzqFGgkts3PCDuiSwzYVpK3RP+BS+SsvCc6AzdGo8+BwDzrhLbQV8Y2+B2sWgm8bPqCprQBuJGuKBYCdBlUiVCD5pNm3ANYdxhVg/xAlKjHQeGZYI+DPAJHrC3NSAv4qNNLF4SRH1ry84BorhIu6H5CFL72qI71iqQ4gNfEesJdLYMcvnrENbjRoa/CRL1+rqEHpWccA9PQfnXGkdDBZg5LaN29/oSG2PZJcAwnfoUGx9h3F9s+CY4GKXTMOuPIqpFzhzuuiOkLNDhbcwN+sOEINaAfNM04MwjcmsYdd20jtoVOBGUB9GhDNDCAHX7LOinYr8GF4wIGdSW4tvIGRAVZNGarmtkwaA326S8IrbYx2kGVmZhJreCiwhKKDEq8FEyUGIeb6179fGNBbqP/J4GS3mfa5GEthrg/o9m2BjdM2URcC0UTcZ0yUmJEiivNiSlixB82wC56VHGwAFr7I4u3ikO7pX5XmptsOGpD8RDqKL9SHlIxIP3LHw0HTOOzf1whJdvZz7LfYLcO09Y7bigOdqmts2PnlIe999HMbo3H4ySM/qnZR4Pitz4BROyyEkcc5wV79E/1Q7jb2KNP4WgVhicPvpv8XstsIvw8+DE3w5LgUYfXg59thB7V8nsAt5HARTQ+fiuFDjlY+yo3CF3Yy9rrTetWjMi0P+vUJQed8CcbAAAAAElFTkSuQmCC" alt="card" srcset="" className="card_img" />
      </div>
      <div className="card_details">
        <h6 className="details">Venkat sai</h6>
        <p className="details">This Website is Developed on React JS. This website is made on educational purpose </p>
        <Link to="#" ><button className="button">Contact Me</button></Link>
      </div>
    </div>
    <div className="card text-center my-5 mx-5 ">
      <div className="img">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAAB9CAMAAAAoYSedAAAAM1BMVEXR1dr////N0tf6+vv29vfR09nr7u/p6+3U2Nzv8PHo6OvP0NbU1dni5Ofy8/Tf4eXb2+DXgFdRAAADZklEQVR4nO2c2baDIAxFNRjF2f//2qtt7bWTJIhy2uV+8TVnASETJsnJycnJyUkMmImIx29sQ/zgxNq+KsqszNvefqEIor7qTHrHFLEtUsI8FAv7byosxbZLDlNfPgu4ivia/cRD907BSBbbNDHFBwUjRR3bOBH8aREuNJbwD4XN1iRcNlQb20YH66swq+iR14JygYSRFtdBcS+TMIqAXYnm5V77yBDb1g/Qild9BvWqqOUS0rSCPBLUajSkkBoSiV/9p49t7jsGlYQ0Q3RNuq2UGsTNpNtKkO6VlBIQD4TVasC7q0kcZ8xUeBoqrYYCT4Mi0LiSxzb5BXpbBvgyDVrXiqjBmYSeGo5ArwHQL+k1wAVMer8EeMfpNcCtQ6K+p/FqZcpMNP2NuBUwf0iUEoyNbfArjVZDAueX1G4pNWiXnLKocQVrN+mzhwmshfDTkENp4F/QoL6lJ8D2krqqgadBf0tPoFWYfDSgRUzqFGgkts3PCDuiSwzYVpK3RP+BS+SsvCc6AzdGo8+BwDzrhLbQV8Y2+B2sWgm8bPqCprQBuJGuKBYCdBlUiVCD5pNm3ANYdxhVg/xAlKjHQeGZYI+DPAJHrC3NSAv4qNNLF4SRH1ry84BorhIu6H5CFL72qI71iqQ4gNfEesJdLYMcvnrENbjRoa/CRL1+rqEHpWccA9PQfnXGkdDBZg5LaN29/oSG2PZJcAwnfoUGx9h3F9s+CY4GKXTMOuPIqpFzhzuuiOkLNDhbcwN+sOEINaAfNM04MwjcmsYdd20jtoVOBGUB9GhDNDCAHX7LOinYr8GF4wIGdSW4tvIGRAVZNGarmtkwaA326S8IrbYx2kGVmZhJreCiwhKKDEq8FEyUGIeb6179fGNBbqP/J4GS3mfa5GEthrg/o9m2BjdM2URcC0UTcZ0yUmJEiivNiSlixB82wC56VHGwAFr7I4u3ikO7pX5XmptsOGpD8RDqKL9SHlIxIP3LHw0HTOOzf1whJdvZz7LfYLcO09Y7bigOdqmts2PnlIe999HMbo3H4ySM/qnZR4Pitz4BROyyEkcc5wV79E/1Q7jb2KNP4WgVhicPvpv8XstsIvw8+DE3w5LgUYfXg59thB7V8nsAt5HARTQ+fiuFDjlY+yo3CF3Yy9rrTetWjMi0P+vUJQed8CcbAAAAAElFTkSuQmCC" alt="card" srcset="" className="card_img" />
      </div>
      <div className="card_details">
        <h6 className="details">Venkat sai</h6>
        <p className="details">This Website is Developed on React JS. This website is made on educational purpose </p>
        <Link to="#" ><button className="button">Contact Me</button></Link>
      </div>
    </div>
    <div className="card text-center my-5 mx-5 ">
      <div className="img">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAAB9CAMAAAAoYSedAAAAM1BMVEXR1dr////N0tf6+vv29vfR09nr7u/p6+3U2Nzv8PHo6OvP0NbU1dni5Ofy8/Tf4eXb2+DXgFdRAAADZklEQVR4nO2c2baDIAxFNRjF2f//2qtt7bWTJIhy2uV+8TVnASETJsnJycnJyUkMmImIx29sQ/zgxNq+KsqszNvefqEIor7qTHrHFLEtUsI8FAv7byosxbZLDlNfPgu4ivia/cRD907BSBbbNDHFBwUjRR3bOBH8aREuNJbwD4XN1iRcNlQb20YH66swq+iR14JygYSRFtdBcS+TMIqAXYnm5V77yBDb1g/Qild9BvWqqOUS0rSCPBLUajSkkBoSiV/9p49t7jsGlYQ0Q3RNuq2UGsTNpNtKkO6VlBIQD4TVasC7q0kcZ8xUeBoqrYYCT4Mi0LiSxzb5BXpbBvgyDVrXiqjBmYSeGo5ArwHQL+k1wAVMer8EeMfpNcCtQ6K+p/FqZcpMNP2NuBUwf0iUEoyNbfArjVZDAueX1G4pNWiXnLKocQVrN+mzhwmshfDTkENp4F/QoL6lJ8D2krqqgadBf0tPoFWYfDSgRUzqFGgkts3PCDuiSwzYVpK3RP+BS+SsvCc6AzdGo8+BwDzrhLbQV8Y2+B2sWgm8bPqCprQBuJGuKBYCdBlUiVCD5pNm3ANYdxhVg/xAlKjHQeGZYI+DPAJHrC3NSAv4qNNLF4SRH1ry84BorhIu6H5CFL72qI71iqQ4gNfEesJdLYMcvnrENbjRoa/CRL1+rqEHpWccA9PQfnXGkdDBZg5LaN29/oSG2PZJcAwnfoUGx9h3F9s+CY4GKXTMOuPIqpFzhzuuiOkLNDhbcwN+sOEINaAfNM04MwjcmsYdd20jtoVOBGUB9GhDNDCAHX7LOinYr8GF4wIGdSW4tvIGRAVZNGarmtkwaA326S8IrbYx2kGVmZhJreCiwhKKDEq8FEyUGIeb6179fGNBbqP/J4GS3mfa5GEthrg/o9m2BjdM2URcC0UTcZ0yUmJEiivNiSlixB82wC56VHGwAFr7I4u3ikO7pX5XmptsOGpD8RDqKL9SHlIxIP3LHw0HTOOzf1whJdvZz7LfYLcO09Y7bigOdqmts2PnlIe999HMbo3H4ySM/qnZR4Pitz4BROyyEkcc5wV79E/1Q7jb2KNP4WgVhicPvpv8XstsIvw8+DE3w5LgUYfXg59thB7V8nsAt5HARTQ+fiuFDjlY+yo3CF3Yy9rrTetWjMi0P+vUJQed8CcbAAAAAElFTkSuQmCC" alt="card" srcset="" className="card_img" />
      </div>
      <div className="card_details">
        <h6 className="details">Venkat sai</h6>
        <p className="details">This Website is Developed on React JS. This website is made on educational purpose </p>
        <Link to="#" ><button className="button">Contact Me</button></Link>
      </div>
    </div>
    <div className="card text-center my-5 mx-5 ">
      <div className="img">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAAB9CAMAAAAoYSedAAAAM1BMVEXR1dr////N0tf6+vv29vfR09nr7u/p6+3U2Nzv8PHo6OvP0NbU1dni5Ofy8/Tf4eXb2+DXgFdRAAADZklEQVR4nO2c2baDIAxFNRjF2f//2qtt7bWTJIhy2uV+8TVnASETJsnJycnJyUkMmImIx29sQ/zgxNq+KsqszNvefqEIor7qTHrHFLEtUsI8FAv7byosxbZLDlNfPgu4ivia/cRD907BSBbbNDHFBwUjRR3bOBH8aREuNJbwD4XN1iRcNlQb20YH66swq+iR14JygYSRFtdBcS+TMIqAXYnm5V77yBDb1g/Qild9BvWqqOUS0rSCPBLUajSkkBoSiV/9p49t7jsGlYQ0Q3RNuq2UGsTNpNtKkO6VlBIQD4TVasC7q0kcZ8xUeBoqrYYCT4Mi0LiSxzb5BXpbBvgyDVrXiqjBmYSeGo5ArwHQL+k1wAVMer8EeMfpNcCtQ6K+p/FqZcpMNP2NuBUwf0iUEoyNbfArjVZDAueX1G4pNWiXnLKocQVrN+mzhwmshfDTkENp4F/QoL6lJ8D2krqqgadBf0tPoFWYfDSgRUzqFGgkts3PCDuiSwzYVpK3RP+BS+SsvCc6AzdGo8+BwDzrhLbQV8Y2+B2sWgm8bPqCprQBuJGuKBYCdBlUiVCD5pNm3ANYdxhVg/xAlKjHQeGZYI+DPAJHrC3NSAv4qNNLF4SRH1ry84BorhIu6H5CFL72qI71iqQ4gNfEesJdLYMcvnrENbjRoa/CRL1+rqEHpWccA9PQfnXGkdDBZg5LaN29/oSG2PZJcAwnfoUGx9h3F9s+CY4GKXTMOuPIqpFzhzuuiOkLNDhbcwN+sOEINaAfNM04MwjcmsYdd20jtoVOBGUB9GhDNDCAHX7LOinYr8GF4wIGdSW4tvIGRAVZNGarmtkwaA326S8IrbYx2kGVmZhJreCiwhKKDEq8FEyUGIeb6179fGNBbqP/J4GS3mfa5GEthrg/o9m2BjdM2URcC0UTcZ0yUmJEiivNiSlixB82wC56VHGwAFr7I4u3ikO7pX5XmptsOGpD8RDqKL9SHlIxIP3LHw0HTOOzf1whJdvZz7LfYLcO09Y7bigOdqmts2PnlIe999HMbo3H4ySM/qnZR4Pitz4BROyyEkcc5wV79E/1Q7jb2KNP4WgVhicPvpv8XstsIvw8+DE3w5LgUYfXg59thB7V8nsAt5HARTQ+fiuFDjlY+yo3CF3Yy9rrTetWjMi0P+vUJQed8CcbAAAAAElFTkSuQmCC" alt="card" srcset="" className="card_img" />
      </div>
      <div className="card_details">
        <h6 className="details">Venkat sai</h6>
        <p className="details">This Website is Developed on React JS. This website is made on educational purpose </p>
        <Link to="#" ><button className="button">Contact Me</button></Link>
      </div>
    </div>
    <div className="card text-center my-5 mx-5 ">
      <div className="img">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAAB9CAMAAAAoYSedAAAAM1BMVEXR1dr////N0tf6+vv29vfR09nr7u/p6+3U2Nzv8PHo6OvP0NbU1dni5Ofy8/Tf4eXb2+DXgFdRAAADZklEQVR4nO2c2baDIAxFNRjF2f//2qtt7bWTJIhy2uV+8TVnASETJsnJycnJyUkMmImIx29sQ/zgxNq+KsqszNvefqEIor7qTHrHFLEtUsI8FAv7byosxbZLDlNfPgu4ivia/cRD907BSBbbNDHFBwUjRR3bOBH8aREuNJbwD4XN1iRcNlQb20YH66swq+iR14JygYSRFtdBcS+TMIqAXYnm5V77yBDb1g/Qild9BvWqqOUS0rSCPBLUajSkkBoSiV/9p49t7jsGlYQ0Q3RNuq2UGsTNpNtKkO6VlBIQD4TVasC7q0kcZ8xUeBoqrYYCT4Mi0LiSxzb5BXpbBvgyDVrXiqjBmYSeGo5ArwHQL+k1wAVMer8EeMfpNcCtQ6K+p/FqZcpMNP2NuBUwf0iUEoyNbfArjVZDAueX1G4pNWiXnLKocQVrN+mzhwmshfDTkENp4F/QoL6lJ8D2krqqgadBf0tPoFWYfDSgRUzqFGgkts3PCDuiSwzYVpK3RP+BS+SsvCc6AzdGo8+BwDzrhLbQV8Y2+B2sWgm8bPqCprQBuJGuKBYCdBlUiVCD5pNm3ANYdxhVg/xAlKjHQeGZYI+DPAJHrC3NSAv4qNNLF4SRH1ry84BorhIu6H5CFL72qI71iqQ4gNfEesJdLYMcvnrENbjRoa/CRL1+rqEHpWccA9PQfnXGkdDBZg5LaN29/oSG2PZJcAwnfoUGx9h3F9s+CY4GKXTMOuPIqpFzhzuuiOkLNDhbcwN+sOEINaAfNM04MwjcmsYdd20jtoVOBGUB9GhDNDCAHX7LOinYr8GF4wIGdSW4tvIGRAVZNGarmtkwaA326S8IrbYx2kGVmZhJreCiwhKKDEq8FEyUGIeb6179fGNBbqP/J4GS3mfa5GEthrg/o9m2BjdM2URcC0UTcZ0yUmJEiivNiSlixB82wC56VHGwAFr7I4u3ikO7pX5XmptsOGpD8RDqKL9SHlIxIP3LHw0HTOOzf1whJdvZz7LfYLcO09Y7bigOdqmts2PnlIe999HMbo3H4ySM/qnZR4Pitz4BROyyEkcc5wV79E/1Q7jb2KNP4WgVhicPvpv8XstsIvw8+DE3w5LgUYfXg59thB7V8nsAt5HARTQ+fiuFDjlY+yo3CF3Yy9rrTetWjMi0P+vUJQed8CcbAAAAAElFTkSuQmCC" alt="card" srcset="" className="card_img" />
      </div>
      <div className="card_details">
        <h6 className="details">Venkat sai</h6>
        <p className="details">This Website is Developed on React JS. This website is made on educational purpose </p>
        <Link to="#" ><button className="button">Contact Me</button></Link>
      </div>
    </div>
    <div className="card text-center my-5 mx-5 ">
      <div className="img">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAAB9CAMAAAAoYSedAAAAM1BMVEXR1dr////N0tf6+vv29vfR09nr7u/p6+3U2Nzv8PHo6OvP0NbU1dni5Ofy8/Tf4eXb2+DXgFdRAAADZklEQVR4nO2c2baDIAxFNRjF2f//2qtt7bWTJIhy2uV+8TVnASETJsnJycnJyUkMmImIx29sQ/zgxNq+KsqszNvefqEIor7qTHrHFLEtUsI8FAv7byosxbZLDlNfPgu4ivia/cRD907BSBbbNDHFBwUjRR3bOBH8aREuNJbwD4XN1iRcNlQb20YH66swq+iR14JygYSRFtdBcS+TMIqAXYnm5V77yBDb1g/Qild9BvWqqOUS0rSCPBLUajSkkBoSiV/9p49t7jsGlYQ0Q3RNuq2UGsTNpNtKkO6VlBIQD4TVasC7q0kcZ8xUeBoqrYYCT4Mi0LiSxzb5BXpbBvgyDVrXiqjBmYSeGo5ArwHQL+k1wAVMer8EeMfpNcCtQ6K+p/FqZcpMNP2NuBUwf0iUEoyNbfArjVZDAueX1G4pNWiXnLKocQVrN+mzhwmshfDTkENp4F/QoL6lJ8D2krqqgadBf0tPoFWYfDSgRUzqFGgkts3PCDuiSwzYVpK3RP+BS+SsvCc6AzdGo8+BwDzrhLbQV8Y2+B2sWgm8bPqCprQBuJGuKBYCdBlUiVCD5pNm3ANYdxhVg/xAlKjHQeGZYI+DPAJHrC3NSAv4qNNLF4SRH1ry84BorhIu6H5CFL72qI71iqQ4gNfEesJdLYMcvnrENbjRoa/CRL1+rqEHpWccA9PQfnXGkdDBZg5LaN29/oSG2PZJcAwnfoUGx9h3F9s+CY4GKXTMOuPIqpFzhzuuiOkLNDhbcwN+sOEINaAfNM04MwjcmsYdd20jtoVOBGUB9GhDNDCAHX7LOinYr8GF4wIGdSW4tvIGRAVZNGarmtkwaA326S8IrbYx2kGVmZhJreCiwhKKDEq8FEyUGIeb6179fGNBbqP/J4GS3mfa5GEthrg/o9m2BjdM2URcC0UTcZ0yUmJEiivNiSlixB82wC56VHGwAFr7I4u3ikO7pX5XmptsOGpD8RDqKL9SHlIxIP3LHw0HTOOzf1whJdvZz7LfYLcO09Y7bigOdqmts2PnlIe999HMbo3H4ySM/qnZR4Pitz4BROyyEkcc5wV79E/1Q7jb2KNP4WgVhicPvpv8XstsIvw8+DE3w5LgUYfXg59thB7V8nsAt5HARTQ+fiuFDjlY+yo3CF3Yy9rrTetWjMi0P+vUJQed8CcbAAAAAElFTkSuQmCC" alt="card" srcset="" className="card_img" />
      </div>
      <div className="card_details">
        <h6 className="details">Venkat sai</h6>
        <p className="details">This Website is Developed on React JS. This website is made on educational purpose </p>
        <Link to="#" ><button className="button">Contact Me</button></Link>
      </div>
    </div>
    <div className="card text-center my-5 mx-5 ">
      <div className="img">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAAB9CAMAAAAoYSedAAAAM1BMVEXR1dr////N0tf6+vv29vfR09nr7u/p6+3U2Nzv8PHo6OvP0NbU1dni5Ofy8/Tf4eXb2+DXgFdRAAADZklEQVR4nO2c2baDIAxFNRjF2f//2qtt7bWTJIhy2uV+8TVnASETJsnJycnJyUkMmImIx29sQ/zgxNq+KsqszNvefqEIor7qTHrHFLEtUsI8FAv7byosxbZLDlNfPgu4ivia/cRD907BSBbbNDHFBwUjRR3bOBH8aREuNJbwD4XN1iRcNlQb20YH66swq+iR14JygYSRFtdBcS+TMIqAXYnm5V77yBDb1g/Qild9BvWqqOUS0rSCPBLUajSkkBoSiV/9p49t7jsGlYQ0Q3RNuq2UGsTNpNtKkO6VlBIQD4TVasC7q0kcZ8xUeBoqrYYCT4Mi0LiSxzb5BXpbBvgyDVrXiqjBmYSeGo5ArwHQL+k1wAVMer8EeMfpNcCtQ6K+p/FqZcpMNP2NuBUwf0iUEoyNbfArjVZDAueX1G4pNWiXnLKocQVrN+mzhwmshfDTkENp4F/QoL6lJ8D2krqqgadBf0tPoFWYfDSgRUzqFGgkts3PCDuiSwzYVpK3RP+BS+SsvCc6AzdGo8+BwDzrhLbQV8Y2+B2sWgm8bPqCprQBuJGuKBYCdBlUiVCD5pNm3ANYdxhVg/xAlKjHQeGZYI+DPAJHrC3NSAv4qNNLF4SRH1ry84BorhIu6H5CFL72qI71iqQ4gNfEesJdLYMcvnrENbjRoa/CRL1+rqEHpWccA9PQfnXGkdDBZg5LaN29/oSG2PZJcAwnfoUGx9h3F9s+CY4GKXTMOuPIqpFzhzuuiOkLNDhbcwN+sOEINaAfNM04MwjcmsYdd20jtoVOBGUB9GhDNDCAHX7LOinYr8GF4wIGdSW4tvIGRAVZNGarmtkwaA326S8IrbYx2kGVmZhJreCiwhKKDEq8FEyUGIeb6179fGNBbqP/J4GS3mfa5GEthrg/o9m2BjdM2URcC0UTcZ0yUmJEiivNiSlixB82wC56VHGwAFr7I4u3ikO7pX5XmptsOGpD8RDqKL9SHlIxIP3LHw0HTOOzf1whJdvZz7LfYLcO09Y7bigOdqmts2PnlIe999HMbo3H4ySM/qnZR4Pitz4BROyyEkcc5wV79E/1Q7jb2KNP4WgVhicPvpv8XstsIvw8+DE3w5LgUYfXg59thB7V8nsAt5HARTQ+fiuFDjlY+yo3CF3Yy9rrTetWjMi0P+vUJQed8CcbAAAAAElFTkSuQmCC" alt="card" srcset="" className="card_img" />
      </div>
      <div className="card_details">
        <h6 className="details">Venkat sai</h6>
        <p className="details">This Website is Developed on React JS. This website is made on educational purpose </p>
        <Link to="#" ><button className="button">Contact Me</button></Link>
      </div>
    </div>
    <div className="card text-center my-5 mx-5 ">
      <div className="img">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAAB9CAMAAAAoYSedAAAAM1BMVEXR1dr////N0tf6+vv29vfR09nr7u/p6+3U2Nzv8PHo6OvP0NbU1dni5Ofy8/Tf4eXb2+DXgFdRAAADZklEQVR4nO2c2baDIAxFNRjF2f//2qtt7bWTJIhy2uV+8TVnASETJsnJycnJyUkMmImIx29sQ/zgxNq+KsqszNvefqEIor7qTHrHFLEtUsI8FAv7byosxbZLDlNfPgu4ivia/cRD907BSBbbNDHFBwUjRR3bOBH8aREuNJbwD4XN1iRcNlQb20YH66swq+iR14JygYSRFtdBcS+TMIqAXYnm5V77yBDb1g/Qild9BvWqqOUS0rSCPBLUajSkkBoSiV/9p49t7jsGlYQ0Q3RNuq2UGsTNpNtKkO6VlBIQD4TVasC7q0kcZ8xUeBoqrYYCT4Mi0LiSxzb5BXpbBvgyDVrXiqjBmYSeGo5ArwHQL+k1wAVMer8EeMfpNcCtQ6K+p/FqZcpMNP2NuBUwf0iUEoyNbfArjVZDAueX1G4pNWiXnLKocQVrN+mzhwmshfDTkENp4F/QoL6lJ8D2krqqgadBf0tPoFWYfDSgRUzqFGgkts3PCDuiSwzYVpK3RP+BS+SsvCc6AzdGo8+BwDzrhLbQV8Y2+B2sWgm8bPqCprQBuJGuKBYCdBlUiVCD5pNm3ANYdxhVg/xAlKjHQeGZYI+DPAJHrC3NSAv4qNNLF4SRH1ry84BorhIu6H5CFL72qI71iqQ4gNfEesJdLYMcvnrENbjRoa/CRL1+rqEHpWccA9PQfnXGkdDBZg5LaN29/oSG2PZJcAwnfoUGx9h3F9s+CY4GKXTMOuPIqpFzhzuuiOkLNDhbcwN+sOEINaAfNM04MwjcmsYdd20jtoVOBGUB9GhDNDCAHX7LOinYr8GF4wIGdSW4tvIGRAVZNGarmtkwaA326S8IrbYx2kGVmZhJreCiwhKKDEq8FEyUGIeb6179fGNBbqP/J4GS3mfa5GEthrg/o9m2BjdM2URcC0UTcZ0yUmJEiivNiSlixB82wC56VHGwAFr7I4u3ikO7pX5XmptsOGpD8RDqKL9SHlIxIP3LHw0HTOOzf1whJdvZz7LfYLcO09Y7bigOdqmts2PnlIe999HMbo3H4ySM/qnZR4Pitz4BROyyEkcc5wV79E/1Q7jb2KNP4WgVhicPvpv8XstsIvw8+DE3w5LgUYfXg59thB7V8nsAt5HARTQ+fiuFDjlY+yo3CF3Yy9rrTetWjMi0P+vUJQed8CcbAAAAAElFTkSuQmCC" alt="card" srcset="" className="card_img" />
      </div>
      <div className="card_details">
        <h6 className="details">Venkat sai</h6>
        <p className="details">This Website is Developed on React JS. This website is made on educational purpose </p>
        <Link to="#" ><button className="button">Contact Me</button></Link>
      </div>
    </div>
    </div>
    </div>
    <footer>
      <div className="contacts">
        <section className="title_name">
          <div className='box mt-5'>
          <h2 className='mb-4'>Personal Assistant</h2>
          <p>This is Website is  build by 2nd year students at sathyabama unversity as a project </p></div>
        </section>
        <section className="Contacts_of_us">
            <div className="links">
              <h3>Linked In</h3>
              <a href="https://www.linkedin.com/in/yogeswar-venkatsai-726275235/" className='link' rel="noreferrer" target={"_blank"}>Venkat Sai</a>
              </div>
            <div className="links">
              <h3>Git Hub</h3>
              <a href="https://www.instagram.com/464venkatsai/" rel="noreferrer" target={"_blank"} className='link'>Venkat Sai</a>
            </div>
            <div className="links">
              <h3>Instagram</h3>
              <a href="https://github.com/464venkatsai" rel="noreferrer" target={"_blank"} className='link'>Venkat Sai</a>
            </div>
            
        </section>
        </div>
        <div className="foot">
          <div className='fle'>
            <h3 className='paras mx-5'>Personal Assistant |</h3>
            <p className="para">Copyrights &#169; personal assistant 2022</p>
          </div>
        <div className="f">
        <a href="https://www.linkedin.com/in/yogeswar-venkatsai-726275235/"  rel="noreferrer"target={"_blank"}><img src="https://cdn.pixabay.com/photo/2017/10/20/03/13/linked-in-2869962_960_720.png" alt="Linked in" id="linkedin" className="in_logos"/></a>
        <a href="https://github.com/464venkatsai" rel="noreferrer" target={"_blank"}><img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt="Github"  className="in_logos"/></a>
        <a href="https://www.instagram.com/464venkatsai/" rel="noreferrer" target={"_blank"}><img src="https://cdn.pixabay.com/photo/2021/11/29/14/46/instagram-6832782_960_720.png" alt="Instagram" className="in_logos"/></a>
        </div>
      </div>
    </footer>
    </>
  )
}
