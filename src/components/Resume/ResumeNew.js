import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLinkView =
  "https://raw.githubusercontent.com/gaurav-padaliya/Portfolio-gaurav/main/src/Assets/Resume.pdf";

const resumeLinkDownload =
  "https://drive.google.com/uc?export=download&id=1fIg1b63fZyIkcqq45VSCYixbelV0Qsn5";

// drive.google.com/file/d/1fIg1b63fZyIkcqq45VSCYixbelV0Qsn5/view?usp=sharing

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeLinkDownload}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={resumeLinkView}
            className={`d-flex justify-content-center ${
              width < 500 && "flex-column"
            }`}
          >
            <Page
              pageNumber={1}
              scale={width > 500 ? 0.9 : 0.6}
              className={`mt-2 ${width < 500 ? "m-auto" : "m-1"}`}
            />
            <Page
              pageNumber={2}
              scale={width > 500 ? 0.9 : 0.6}
              className={`mt-2 ${width < 500 ? "m-auto" : "m-1"}`}
            />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeLinkDownload}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
