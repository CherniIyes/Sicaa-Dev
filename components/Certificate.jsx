"use client";
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

// Array of resumes with associated images
const resumes = [
  { name: 'Iyess Cherni', file: 'Iyes_Cherni_Resume.pdf', image: 'iyess.jpg', certificate: 'https://credsverse.com/credentials/d9ec9903-8eac-400e-aa4e-f18c33a0e979?preview=1' },
  { name: 'Khalil Cherni', file: 'Khalil-Cherni.pdf', image: 'khalil.jpg', certificate: 'https://credsverse.com/credentials/dc5efc73-386d-4165-827d-25cdcc63bf10?preview=1' },
  { name: 'Abdelhak Barbouche', file: 'Developer.pdf', image: 'ha9.jpg', certificate: 'https://credsverse.com/credentials/9bea193f-56a2-4aa6-8f0e-75ad3c835dab?preview=1&fbclid=IwZXh0bgNhZW0CMTAAAR1xxVL5HT8weqj5Wti8ByIk2ZLfeoXtQ0xEL_6upX3koUnXL-r3rcz4K7M_aem_AZ4Nk4A9LSDqG_BHbmDO3szliPQ1EAo6FV8l3076ey7_j6kR7j10DTSgEfWAjZv2GVEt6dq8yiDdLFWTbVKeRnXI' },
  { name: 'Iyed Amri', file: 'iyed_amris_resume.pdf', image: 'iyed.jpg', certificate: 'https://credsverse.com/credentials/c3b56d7c-75a3-4572-be79-ad614858e05d?preview=1' },
  { name: 'Firas Lamouchi', file: 'Khalil-Cherni.pdf', image: 'firas.jpg', certificate: 'https://credsverse.com/credentials/00a3091d-2642-4994-afa3-e79792d9a8e4?preview=1&fbclid=IwZXh0bgNhZW0CMTAAAR2c7yPyM-hd4cw1sX-OO3N_DVsbP-84yFrpgeIwPdjfloIJd_MchohHxHU_aem_AZ6FXwH0wSwdE3uMPS0ctNWD8NEkRicr0UCVsyNxrWnRAW2pXX6tiYVooUCDIHpNGuHRTTteghuiaBq9B98WIUaf' },
];

const ResumeDownload = () => {
  const handleDownload = (file) => {
    const link = document.createElement('a');
    link.href = `/${file}`; // Path to your CV file in the public folder
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container id='Certificate'>
      <Title>Download Resumes and Certificates</Title>
      <ResumeList>
        {resumes.map((resume, index) => (
          <ResumeItem key={index}>
            <Info>
              <Image src={`/${resume.image}`} alt={resume.name} />
              <Name>{resume.name}</Name>
            </Info>
            <Buttons>
              <Link href={resume.certificate} passHref>
                <Button className="button">
                  <span className="text">View Certificate</span>
                </Button>
              </Link>
              <Button onClick={() => handleDownload(resume.file)} className="button">
                <span className="text ">
                  <p className=''>
                    Download Resume
                  </p>
                </span>
              </Button>
            </Buttons>
          </ResumeItem>
        ))}
      </ResumeList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const ResumeList = styled.div`
  width: 100%;
  max-width: 600px;
`;

const ResumeItem = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  margin-bottom: 20px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 25px rgba(0,0,0,0.2);
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  gap: 15px;
  background-color: #181717;
  outline: 3px #181717 solid;
  outline-offset: -3px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 400ms;
  .text {
    color: white;
    font-weight: 700;
    font-size: 1em;
    transition: 400ms;
  }
  svg path {
    transition: 400ms;
  }
  &:hover {
    background-color: transparent;
  }
  &:hover .text {
    color: #181717;
  }
  &:hover svg path {
    fill: #181717;
  }
`;

export default ResumeDownload;
