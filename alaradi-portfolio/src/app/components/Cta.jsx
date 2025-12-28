"use client";

import { Send } from "lucide-react";

function Cta({ colors }) {
  return (
    <div>
      {/* CTA Section */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              backgroundColor: colors.bgSecondary,
              border: `1px solid ${colors.borderSubtle}`,
              borderRadius: "1rem",
              padding: "clamp(3rem, 8vw, 4rem)",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: "bold",
                marginBottom: "1.5rem",
              }}
            >
              Ready to Start Your Project?
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                color: colors.textSecondary,
                marginBottom: "2.5rem",
                maxWidth: "42rem",
                margin: "0 auto 2.5rem",
              }}
            >
              Let&apos;s discuss how we can bring your vision to life with
              modern web solutions
            </p>
            <button
              style={{
                backgroundColor: colors.accent,
                color: "white",
                padding: "1.25rem 2.5rem",
                fontWeight: 600,
                fontSize: "1.125rem",
                border: "none",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                transition: "all 0.2s",
                boxShadow: "0 10px 20px -5px rgba(255, 217, 190, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.accentLight;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.accent;
              }}
            >
              Get in Touch <Send size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cta;
