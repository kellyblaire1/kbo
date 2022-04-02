import React from "react";
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

const HireModal = () => {
    const channels = [
        {
            name:'WhatsApp',
            url:'https://wa.me/+2348064362365',
            icon: <FaWhatsapp className="text-5xl text-success"/>
        },
        {
            name:'LinkedIn',
            url:'https://www.linkedin.com/in/kelechukwu-okere-12129912a/',
            icon: <FaLinkedin className="text-5xl text-info"/>
        },
        {
            name:'Email',
            url:'mailto: info@bloomnet.com.ng',
            icon: <FaEnvelope className="text-5xl text-error"/>
        },
        {
            name:'Phone Call',
            url:'tel:+2348100984175',
            icon: <FaPhone className="text-5xl text-secondary"/>
        },
    ];

    const channel = channels.map((chan)=> <div className="m-5 grid justify-center justify-items-center"><a href={chan.url} target="_blank"> {chan.icon} {chan.name}</a></div>)
  return (
    <div>
      <input type="checkbox" id="hireme" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-5xl text-primary">
            Hire Me!
          </h3>
          <p class="py-4">
            You can reach me via any of the channels below, so we can discuss your next project.
          </p>

          <div className="flex justify-between">
{channel}
          </div>
          <div class="modal-action">
            <label for="hireme" class="btn btn-primary rounded-full">
              Ok
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireModal;
