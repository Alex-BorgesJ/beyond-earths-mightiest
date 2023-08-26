import React from "react";
import { Button, Container } from "react-bootstrap";
import { FaFilePdf, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function FooterPage() {
  return (
    <footer
      className="text-center text-white bg-dark"
    >
      <Container className="pt-4">
        <section className="mb-4">
          <Button
            variant="link"
            size="lg"
            className="text-ligth m-1"
            href="https://www.linkedin.com/in/alex-borges-da-silva-junior/" target="_blank"
            role="button"
          >
            <FaLinkedin />
          </Button>

          <Button
            variant="link"
            size="lg"
            className="text-white m-1"
            href="https://github.com/Alex-BorgesJ" target="_blank"
            role="button"
          >
            <FaGithub />
          </Button>

          <Button
            variant="link"
            size="lg"
            className="text-danger m-1"
            href="https://youtu.be/ZjCGYo7LSUk"
            target="_blank"
            role="button"
          >
            <FaYoutube />
          </Button>

          <Button
            variant="link"
            size="lg"
            className="text-white m-1"
            href="https://fatecspgov-my.sharepoint.com/:w:/g/personal/alex_silva187_fatec_sp_gov_br/EVdGCCRDEI1KszZKySpoZvsBKsFp904TovYzhkOBLS5qoQ?e=IfXRqn"
            role="button" target="_blank"
          >
            <FaFilePdf />
          </Button>
        </section>
      </Container>

      <div
        className="text-center text-white p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:  Alex Borges da Silva Junior
        
      </div>
    </footer>
  );
}
