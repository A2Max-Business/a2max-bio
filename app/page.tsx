export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        backgroundColor: "#0a0a0a",
        color: "#fafafa",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
        A2Max Bio
      </h1>
      <p style={{ fontSize: "1rem", color: "#a1a1aa", marginBottom: "1.5rem" }}>
        Performance e Inteligência de Negócios
      </p>
      <p style={{ fontSize: "0.875rem", color: "#52525b" }}>
        Fundação técnica em desenvolvimento.
      </p>
    </main>
  );
}
