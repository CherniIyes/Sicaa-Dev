'use client'; // Ensure this component is treated as a client component

import React from 'react';

// Array of resumes with associated images
const resumes = [
  { name: 'Iyess Cherni', file: 'Iyes_Cherni_Resume.pdf', image: 'iyess.jpg' },
  { name: 'Khalil Cherni', file: 'Khalil-Cherni.pdf', image: 'khalil.jpg' },
  { name: 'Abdelhak Barbouche', file: 'Developer.pdf', image: 'ha9.jpg' },
  { name: 'Iyed Amri', file: 'iyed_amris_resume.pdf', image: 'iyed.jpg' },
  { name: 'Firas Lamouchi', file: 'Khalil-Cherni.pdf', image: 'firas.jpg' },
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
    <div style={styles.container}>
      {resumes.map((resume, index) => (
        <div key={index} style={styles.person}>
          <img src={`/${resume.image}`} alt={resume.name} style={styles.image} />
          <h1 style={styles.name}>{resume.name}</h1>
          <button onClick={() => handleDownload(resume.file)} style={styles.button}>Resume</button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    minHeight: '100vh',
  },
  person: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '600px',
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: '5px',
    transition: 'transform 0.2s ease-in-out',
  },
  image: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '20px',
  },
  name: {
    fontSize: '1.2em',
    flex: '1',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default ResumeDownload;
