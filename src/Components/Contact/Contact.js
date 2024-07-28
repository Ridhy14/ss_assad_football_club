import React from 'react'
import './Contact.css'
import msg_icon from '../../Assets/msg-icon.png'
import mail_icon from '../../Assets/mail-icon.png'
import phone_icon from '../../Assets/phone-icon.png'
import location_icon from '../../Assets/location-icon.png'
const Contact = () => {
        const [result, setResult] = React.useState("");

        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "6529ee6c-ffa0-4df9-ab29-947bed150a44");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
                console.log("Success", data)
            setResult("Form Submitted Successfully");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        };

return (
        <div className='contact'>
                <div className="contact-col">
                        <h3>Send Us a Message <img src={msg_icon} alt=""/></h3>
                        <p>For more information about our services, please contact us at:</p>
                        <ul>
                                <li> <img src={ mail_icon} alt=""/>Contact SS ASSAD</li>
                                <li><img src={ phone_icon} alt=""/>Phone: 123-456-7890</li>
                                <li><img src={ location_icon} alt=""/>Address: 123 Main St, City, State</li>
                        </ul>
                </div>
                <div className="contact-col">
                        <form onSubmit={onSubmit}>
                                <div className="form-group">
                                        <label> Your name</label>
                                        <input type="text" name="name" placeholder="enteryourname" required/>
                                        <label> Phone Number</label>
                                        <input type="tel" id="email" placeholder="enter your mobile number" required/>
                                        <label>Write Your messages here</label>
                                        <textarea id="message" rows={6} placeholder='Enter your message' required></textarea>
                                </div>
        <button type="submit" className='btn' style={{ backgroundColor: 'yellow' }}>Submit now</button>
                        </form>
                        <span>{result}</span>
                </div>
        </div>
)
}

export default Contact