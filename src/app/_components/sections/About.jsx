import React from 'react';

const AboutSection = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 mt-5 pt-5 pb-5" style={styles.container}>
        <div className="d-flex flex-column flex-md-row" style={styles.flexContainer}>
          <div className="col-md-5 px-4" style={styles.leftColumnWrapper}>
            <div className="h-100 w-100" style={styles.leftColumn}>
              <img
                src="/img/photo/vr1.webp"
                alt="Digital Transformation"
                style={styles.image}
              />
              <div className="d-flex justify-content-center align-items-center" style={styles.tagline}>
                <span style={{ textAlign: "center" }}>
                  <span style={styles.highlight}>DECADE</span> <span>OF SUCCESSFUL WORK</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-7" style={styles.rightColumn}>
            <h1 style={styles.heading}>TRANSFORMING DIGITAL GOALS INTO REALITY</h1>
            <p style={styles.paragraph}>
              In the rapidly evolving digital landscape, businesses face a series of interconnected challenges that threaten growth and stability:
            </p>
            <div style={styles.grid}>
              {gridData.map((item, index) => (
                <div key={index} style={styles.gridItem}>
                  <div style={styles.iconBox}>
                    <img src={item.icon} alt={item.title} style={styles.icon} />
                  </div>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
            <p style={styles.footerText}>
              These challenges create an urgent need for businesses to rethink their strategies and embrace solutions that foster resilience and agility.
            </p>
            <div style={styles.cta}>
              <span style={{ color: "#17283E" }}>DISCOVER OUR SERVICES</span>
              {/* <span style={styles.arrow,styles.iconBox}>→</span> */}
              <span style={{ ...styles.arrow, ...styles.iconBox }}>→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const gridData = [
  { title: 'Complex IT Ecosystems', icon: '/img/icons/about1.png' },
  { title: 'Rising Cybersecurity Threats', icon: '/img/icons/about2.png' },
  { title: 'Disruptive Cloud Migrations', icon: '/img/icons/about3.png' },
  { title: 'Maintaining Uptime', icon: '/img/icons/about4.png' },
  { title: 'Compliance Pressure', icon: '/img/icons/about5.png' },
  { title: 'Lack of Real-Time Insights', icon: '/img/icons/about6.png' },
];

const styles = {
  container: {
    backgroundColor: "rgb(248, 248, 248)",
    padding: '2rem',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column', // Stacks content vertically on smaller screens
    justifyContent: 'center',
  },
  leftColumnWrapper: {
    position: 'relative',
    flex: 1,
    maxWidth: '100%', // Prevents shrinking of the image
    display: 'flex',
    justifyContent: 'center',
  },
  leftColumn: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    objectFit: 'cover', // Ensures the image stays fully covered without shrinking
  },
  tagline: {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  highlight: {
    color: '#17283E',
  },
  rightColumn: {
    flex: 1,
    padding: '0 1.5rem',
    display: 'flex',
    flexDirection: 'column', // Ensures the content is aligned vertically
    justifyContent: 'center',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: "#17283E",
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.5',
    marginBottom: '1.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem',
    borderRadius: '5px',
  },
  iconBox: {
    // backgroundColor: 'rgb(188, 255, 0)',
    backgroundColor:"#17283E",
    padding: '0.5rem',
    // borderRadius: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: '24px',
    height: '24px',
  },
  footerText: {
    fontSize: '1rem',
    lineHeight: '1.5',
    marginBottom: '1.5rem',
  },
  cta: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  arrow: {
    fontSize: '1.2rem',
    color: '#D4FF00',
  },

  // Media Queries for responsiveness
  '@media (max-width: 768px)': {
    container: {
      padding: '1rem',
    },
    heading: {
      fontSize: '1.8rem',
    },
    grid: {
      gridTemplateColumns: '1fr', // Stack grid items on smaller screens
    },
    tagline: {
      fontSize: '1rem',
    },
    cta: {
      flexDirection: 'column', // Stack cta items vertically
      alignItems: 'center',
    },
  },
  '@media (max-width: 992px)': {
    heading: {
      fontSize: '2.2rem',
    },
    grid: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  '@media (max-width: 480px)': {
    image: {
      height: '250px', // Set a fixed height for the image on small screens
      objectFit: 'cover', // Prevents shrinking and distorting of the image
    },
    tagline: {
      position: 'absolute',
      bottom: '0px',
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: '0.9rem',
    },
    cta: {
      fontSize: '1rem',
    },
  },
};

export default AboutSection;
