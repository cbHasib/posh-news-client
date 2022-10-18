import React from "react";
import { Button } from "react-bootstrap";

import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitch,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  return (
    <div>
      <div className="d-grid gap-1">
        <Button
          variant="outline-primary"
          className="rounded-0 rounded-top"
          size="md"
        >
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button
          variant="outline-dark"
          className="rounded-0 rounded-bottom"
          size="md"
        >
          <FaGithub></FaGithub> Login with GitHub
        </Button>
      </div>

      <div className="py-3">
        <h5>Find Us On: </h5>
        <div className="d-flex flex-column gap-1">
          <Button variant="light" className="w-100 text-start px-3">
            <FaFacebook /> Facebook
          </Button>
          <Button variant="light" className="w-100 text-start px-3">
            <FaWhatsapp /> WhatsApp
          </Button>
          <Button variant="light" className="w-100 text-start px-3">
            <FaTwitter /> Twitter
          </Button>
          <Button variant="light" className="w-100 text-start px-3">
            <FaTwitch /> Twitch
          </Button>
        </div>
      </div>

      <BrandCarousel />
    </div>
  );
};

export default RightSideNav;
