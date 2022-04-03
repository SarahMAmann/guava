import React from 'react';
import Input from '../elements/Input';
import Button from '../elements/Button';
import SectionHeader from './partials/SectionHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const sectionHeader = {
  title: 'Tell Us About Your Project',
  paragraph: ''
};

class Cta extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", callType: "", message: "", 
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
      message: ''
    });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, callType, message, options} = this.state;
    return (
      <div className="container" id="contact" style={{marginTop: '100px', width: '60%'}}>
        <SectionHeader data={sectionHeader} className="center-content" />
        <form name="contact" netlify method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={this.handleSubmit} >
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
      </div>
    );
  }
}

export default Cta;