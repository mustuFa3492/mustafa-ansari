const MainSection: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Mustufa</h1>
      <p style={styles.subtitle}>
        Frontend Developer • React • .NET
      </p>
    </div>
  );
};


const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: "100vh",
    padding: "80px",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    opacity: 0.7,
  },
};

export default MainSection;