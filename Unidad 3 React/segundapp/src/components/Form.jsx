import { useRef } from "react"

export default function Form( {fAddUsuario} ) {

    const email = useRef("")
    const pass = useRef("")
    const check = useRef(false)


    return <div className="col-6 p-3 m-3 text-center">
    <div className="mb-3">
      <label className="form-label">Email address</label>
      <input onChange={(e) => { email.current = e.target.value }}
       type="text" className="form-control" />
    </div>
    <div className="mb-3">
      <label className="form-label">Password</label>
      <input onChange={(e) => { pass.current = e.target.value }}
      type="text" className="form-control" />
    </div>
    <div className="mb-3 form-check">
      <input onChange={ (e) => { 
            check.current = e.target.checked 
            console.log(check.current) 
        }}
      type="checkbox" className="form-check-input" />
      <label className="form-check-label">Check me out</label>
    </div>
    <button onClick={()=>{ fAddUsuario(email.current, pass.current, check.current) }} type="submit" className="btn btn-primary">Submit</button>
  </div>
};
