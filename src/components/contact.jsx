import { useState } from 'react'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  let [{ name, email, message }, setState] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ name, email, message } = initialState);
    setState(initialState.name = '');
    setState(initialState.message = '');
    setState(initialState.email = '');
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.telegram : '/'}>
                      <i class="fa fa-telegram" ></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : '/'}>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
