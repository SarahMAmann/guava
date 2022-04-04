import React, { useEffect } from 'react'
import Input from '../elements/Input';
import Button from '../elements/Button';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class Contact extends React.Component {

//  handleClick() {
//   toast.success("Thank you! We'll get back to you shortly.", {
//     position: "top-center",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     })
//  }


  render() {
    useEffect(() => {
      if ( window.location.search.includes('success=true') ) {
        toast.success("Thank you! We'll get back to you shortly.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
      }
    }, []);
    // const notify = () => toast.success("Thank you! We'll get back to you shortly.", {
    //       position: "top-center",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       });
    const options = [
        {
          label: '30-minute consulting session',
          value: 'thirty'
        },
        {
          label: 'Discovery call to learn more about long term consulting partnerships',
          value: 'discovery'
        }
      ];
    return (
        <form name="contact" action="/success=true" method="POST" data-netlify="true" netlify-honeypot="bot-field" >
            <input type="hidden" name="form-name" value="contact" />
          <div>
            <p className="hidden">
                <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
            </p>
            <Input style={{borderRadius: '4px'}} type="text" placeholder="Name" name="name" id="name" required />   
          </div>
          <div style={{marginTop: '20px'}}>
            <Input style={{borderRadius: '4px'}} type="email" placeholder="Email" name="email" id="timezone" required />
          </div>
          <div style={{marginTop: '20px'}}>
            <Input style={{borderRadius: '4px'}} type="text" placeholder="Location/Timezone" name="timezone" id="timezone" required />
          </div>
          <div style={{marginTop: '20px'}}>
            <Select name="callType" id="callType" required options={options} placeholder={'I\'m interested in...'} />
          </div>
          <div style={{marginTop: '20px'}}>
            <Input style={{borderRadius: '4px'}} type="textarea" name="message" id="message" placeholder="Message" required />
          </div>
          <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
            <Button color="primary" type="submit" value="Submit message" onClick={this.handleClick}>Submit</Button>
          </div>
          <ToastContainer />
        </form>
    );
  }
}

export default Contact;