import React from 'react';
// import Input from '../elements/Input';
// import Button from '../elements/Button';
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
    // const options = [
    //     {
    //       name: '30-minute consulting session',
    //       value: 'thirty'
    //     },
    //     {
    //       name: 'Discovery call to learn more about long term consulting partnerships',
    //       value: 'discovery'
    //     }
    //   ];
    return (
        // <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={this.handleSubmit} >
        //     <input type="hidden" name="form-name" value="contact" />
        //   <div>
        //     <p className="hidden">
        //         <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
        //     </p>
        //     <Input style={{borderRadius: '4px'}} type="text" placeholder="Name" name="name" id="name" required value={name} onChange={this.handleChange} />   
        //   </div>
        //   <div style={{marginTop: '20px'}}>
        //     <Input style={{borderRadius: '4px'}} type="text" placeholder="Message" name="message" id="message" required value={message} onChange={this.handleChange} />
        //   </div>
        //   {/* <div style={{marginTop: '20px'}}>
        //     <Input style={{borderRadius: '4px'}} type="text" placeholder="Location/Timezone" name="timezone" required value={timezone} onChange={this.handleChange} />
        //   </div>
        //   <div style={{marginTop: '20px'}}>
        //     <select name="callType" required onChange={this.handleChange} value={callType} style={{width: '100%', height: '50px', borderRadius: '4px'}}>
        //       <option value="" disabled>I'm interested in...</option>
        //         {options.map(item => (
        //         <option key={item.value} value={item.value}>
        //           {item.name}
        //         </option>
        //       ))}
        //     </select>
        //   </div> */}
        //   {/* <div style={{marginTop: '20px'}}>
        //     <Input style={{borderRadius: '4px'}} type="textarea" name="message" placeholder="Message" required value={message} onChange={this.handleChange} />
        //   </div> */}
        //   <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        //     <Button color="primary" type="submit">Submit</Button>
        //     <ToastContainer />
        //   </div>
        // </form>

        <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
    );
  }
}

export default Contact;