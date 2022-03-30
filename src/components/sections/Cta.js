// import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { SectionProps } from '../../utils/SectionProps';
// import Input from '../elements/Input';
// import Button from '../elements/Button';
// import SectionHeader from './partials/SectionHeader';

// const propTypes = {
//   ...SectionProps.types,
//   split: PropTypes.bool
// }

// const defaultProps = {
//   ...SectionProps.defaults,
//   split: false
// }

// const Cta = ({
//   className,
//   topOuterDivider,
//   bottomOuterDivider,
//   topDivider,
//   bottomDivider,
//   hasBgColor,
//   invertColor,
//   split,
//   ...props
// }) => {

// const outerClasses = classNames(
//   'cta section center-content-mobile reveal-from-bottom',
//   topOuterDivider && 'has-top-divider',
//   bottomOuterDivider && 'has-bottom-divider',
//   hasBgColor && 'has-bg-color',
//   invertColor && 'invert-color',
//   className
// );

// const innerClasses = classNames(
//   'testimonial-inner section-inner',
//   topDivider && 'has-top-divider',
// );  

// const sectionHeader = {
//   title: 'Contact Us',
//   paragraph: 'We\'d love to hear about your project.'
// };

// const encode = (data) => {
//   return Object.keys(data)
//       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//       .join("&");
// }

// handleSubmit = e => {
//   fetch("/", {
//     method: "POST",
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: encode({ "form-name": "contact", ...this.state })
//   })
//     .then(() => alert("Success!"))
//     .catch(error => alert(error));

//   e.preventDefault();
// };

// handleChange = e => this.setState({ [e.target.name]: e.target.value });


//   return (
//     <section
//       {...props}
//       className={outerClasses}
//     >
//       <div className="container">
//         <div className={innerClasses}>
//           <SectionHeader data={sectionHeader} className="center-content" />
//           <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" >
//             <Input>
//             {/* <p class="hidden">
//               <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
//             </p> */}
//             <Input type="text" placeholder="Full name*" name="name" />   
//             </Input>
//             <Input>
//               <Input type="email" placeholder="Email*" name="email" />
//             </Input>
//             <Input>
//               <textarea name="message" placeholder="Message*" ></textarea>
//             </Input>
//             <Button type="submit">Submit</Button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// Cta.propTypes = propTypes;
// Cta.defaultProps = defaultProps;

// export default Cta;

import React from 'react';
import Input from '../elements/Input';
import Button from '../elements/Button';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Cta extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={this.handleSubmit} >
        <div>
        <p class="hidden">
          <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
        </p>
        <Input type="text" placeholder="Full name*" name="name" value={name} onChange={this.handleChange} />   
        </div>
        <div>
          <Input type="email" placeholder="Email*" name="email" value={email} onChange={this.handleChange} />
        </div>
        <div>
          <textarea name="message" placeholder="Message*" value={message} onChange={this.handleChange} ></textarea>
        </div>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    );
  }
}

export default Cta;