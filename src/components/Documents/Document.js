import React from "react";

// Import PDFs
import pdf from "../../Assets/../Assets/Manshur-Ali_Resume.pdf";
import sscMarksheet from "../../Assets/docs/ssc_marksheet.pdf";
import tenthMarksheet from "../../Assets/docs/hsc_marksheet.pdf";
import twelfthMarksheet from "../../Assets/docs/hsc_attemt_marksheet.pdf";
import degreeCertificate from "../../Assets/docs/leaving_certificate.pdf";
import degreeCertificate1 from "../../Assets/docs/mu_1st.pdf";
import degreeCertificate2 from "../../Assets/docs/mu_2nd.pdf";
import degreeCertificate3 from "../../Assets/docs/mu_3rd.pdf";

// Common icon
import pdfIcon from "../../Assets/docs/pdf_icon.png";

const Document = () => {
  const documents = [
    { title: "RESUME", url: pdf },
    { title: "S.S.C MARKSHEET", url: sscMarksheet },
    { title: "H.S.C MARKSHEET", url: tenthMarksheet },
    { title: "H.S.C CERTIFICATE", url: twelfthMarksheet },
    { title: "Leaving Certificate", url: degreeCertificate },
    { title: "MU 1st Year", url: degreeCertificate1 },
    { title: "MU 2nd Year", url: degreeCertificate2 },
    { title: "MU 3rd Year", url: degreeCertificate3 },
  ];

  return (
    <div style={{ padding: "20px", marginTop: "80px" }}>
      <h1
        style={{
          color: "#C16CFF",
          marginBottom: "30px",
          fontSize: "32px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        My PDF Documents
      </h1>

      {/* GRID: 2 PER ROW (RESPONSIVE) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          justifyItems: "center",
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {documents.map((doc, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              maxWidth: "350px",
              minHeight: "140px",
              borderRadius: "16px",
              padding: "20px",
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <img src={pdfIcon} alt="PDF" style={{ width: "55px" }} />

            <div>
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: "600",
                  color: "#C16CFF",
                  marginBottom: "8px",
                }}
              >
                {doc.title}
              </p>

              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  background: "#C16CFF",
                  padding: "7px 14px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                View PDF
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ONLINE CERTIFICATES SECTION */}
      <h2
        style={{
          color: "#C16CFF",
          fontSize: "26px",
          fontWeight: "bold",
          marginTop: "40px",
          textAlign: "center",
        }}
      >
        Online Certifications
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          justifyItems: "center",
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "350px",
            minHeight: "140px",
            borderRadius: "16px",
            padding: "20px",
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <img src={pdfIcon} alt="Certificate" style={{ width: "55px" }} />

          <div>
            <p
              style={{
                fontSize: "17px",
                fontWeight: "600",
                color: "#C16CFF",
                marginBottom: "8px",
              }}
            >
              View Online Certification
            </p>

            <a
              href="https://www.credly.com/users/manshur-ali/badges#credly"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#fff",
                background: "#C16CFF",
                padding: "7px 14px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Open Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Document;
