import React from 'react';
import Input from '../elements/Input';
import Button from '../elements/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const encode = (data) => {
    return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", callType: "", message: "", timezone: "",
      options: [
        {
          name: '30-minute consulting session',
          value: 'thirty'
        },
        {
          name: 'Discovery call to learn more about long term consulting partnerships',
          value: 'discovery'
        }
      ]
    };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => toast.success("Thank you! We'll get back to you shortly.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }))
      .catch(error => toast.error("Sorry, we're having trouble processing your request.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }));

    e.preventDefault();
    this.setState({
      name: '',
      email: '',
      callType: '',
      message: '',
      timezone: ''
    });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, timezone, callType, message, options} = this.state;
    return (
        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={this.handleSubmit} >
          <div>
          <p className="hidden">
            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
          </p>
          <Input style={{borderRadius: '4px'}} type="text" placeholder="Name" name="name" required value={name} onChange={this.handleChange} />   
          </div>
          <div style={{marginTop: '20px'}}>
            <Input style={{borderRadius: '4px'}} type="email" placeholder="Email" name="email" required value={email} onChange={this.handleChange} />
          </div>
          <div style={{marginTop: '20px'}}>
            <Input style={{borderRadius: '4px'}} type="text" placeholder="Location/Timezone" name="timezone" required value={timezone} onChange={this.handleChange} />
          </div>
          <div style={{marginTop: '20px'}}>
            <select name="callType" required onChange={this.handleChange} value={callType} style={{width: '100%', height: '50px', borderRadius: '4px'}}>
              <option value="" disabled>I'm interested in...</option>
                {options.map(item => (
                <option key={item.value} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div style={{marginTop: '20px'}}>
            <Input style={{borderRadius: '4px'}} type="textarea" name="message" placeholder="Message" required value={message} onChange={this.handleChange} />
          </div>
          <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
            <Button color="primary" type="submit">Submit</Button>
            <ToastContainer />
          </div>
        </form>
    );
  }
}

export default Contact;