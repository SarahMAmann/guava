import React from 'react';
import Input from '../elements/Input';
import Button from '../elements/Button';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const encode = (data) => {
//     return Object.keys(data)
//     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// }

// const createFormDataObj = data => {
//     const formData = new FormData();
//     Object.keys(data).forEach(k => {
//       formData.append(k, data[k]);
//     });
//     return formData;
//   };


class Contact extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state = { name: "", message: "" };
//   }

//   handleSubmit = e => {
//       console.log(this.state);
//       const data = {
//         'form-name': 'contact-us',
//         name: this.state.name,
//         message: this.state.message,
//       };
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: new URLSearchParams(createFormDataObj(data)).toString(),
//     //   body: encode({ "form-name": "contact", ...this.state })
//     })
//       .then(() => toast.success("Thank you! We'll get back to you shortly.", {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         }))
//       .catch(error => toast.error("Sorry, we're having trouble processing your request.", {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         }));

//     e.preventDefault();
//     this.setState({
//       name: '',
//       message: ''
//     });
//   };

//   handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    // const { name, message } = this.state;
    const options = [
        {
          name: '30-minute consulting session',
          value: 'thirty'
        },
        {
          name: 'Discovery call to learn more about long term consulting partnerships',
          value: 'discovery'
        }
      ];
    return (
        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" >
            <input type="hidden" name="form-name" value="contact" />
          <div>
            <p className="hidden">
                <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
            </p>
            <Input style={{borderRadius: '4px'}} type="text" placeholder="Name" name="name" id="name" required />   
          </div>
          <div style={{marginTop: '20px'}}>
            <Input style={{borderRadius: '4px'}} type="text" placeholder="Location/Timezone" name="timezone" id="timezone" required />
          </div>
          <div style={{marginTop: '20px'}}>
            <select name="callType" id="callType" required style={{width: '100%', height: '50px', borderRadius: '4px'}}>
              <option value="" disabled>I'm interested in...</option>
                {options.map(item => (
                <option key={item.value} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div style={{marginTop: '20px'}}>
            <Input style={{borderRadius: '4px'}} type="textarea" name="message" id="message" placeholder="Message" required />
          </div>
          <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
            <Button color="primary" type="submit" value="Submit message">Submit</Button>
            {/* <ToastContainer /> */}
          </div>
        </form>

    //     <form name="contact" method="post">
    //     <input type="hidden" name="form-name" value="contact" />
    //     <p>
    //       <label htmlFor="name">Name</label> <br />
    //       <input type="text" id="name" name="name" required />
    //     </p>
    //     <p>
    //       <label htmlFor="email">Email</label> <br />
    //       <input type="email" id="email" name="email" required />
    //     </p>
    //     <p>
    //       <label htmlFor="message">Message</label> <br />
    //       <textarea id="message" name="message" required></textarea>
    //     </p>
    //     <p>
    //       <input type="submit" value="Submit message" />
    //     </p>
    //   </form>
    );
  }
}

export default Contact;