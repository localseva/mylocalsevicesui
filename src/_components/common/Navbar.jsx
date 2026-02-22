import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Select,
  MenuItem,
  IconButton,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "../../_contexts/LanguageContext";

export default function Navbar() {
  const { t, lang, setLang, LANGS } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyle = {
    color: "#1A1A1A",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 15,
    padding: "6px 14px",
    borderRadius: 8,
    transition: "0.2s",
  };

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: scrolled ? "rgba(250,250,247,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #E5E7EB" : "none",
          transition: "0.3s",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}
        >
          {/* LOGO */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 38,
                height: 38,
                background: "linear-gradient(135deg, #FF6B35, #e85d2a)",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                boxShadow: "0 4px 12px rgba(255, 107, 53, 0.25)",
              }}
            >
              🔨
            </div>

            <span
              style={{
                fontFamily: "'Baloo 2', cursive",
                fontWeight: 800,
                fontSize: 22,
                color: "#1A1A1A",
              }}
            >
              Rozgaar
            </span>
          </div>

          {/* DESKTOP LINKS */}
          {!isMobile && (
            <div style={{ display: "flex", gap: 4 }}>
              <a href="#" style={navLinkStyle}>{t.nav_home}</a>
              <a href="#categories" style={navLinkStyle}>{t.nav_find}</a>
              <a href="/register" style={navLinkStyle}>{t.nav_register}</a>
            </div>
          )}

          {/* RIGHT SECTION */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {!isMobile && (
              <>
                <span
                  style={{
                    fontSize: 13,
                    color: "#6B7280",
                    fontWeight: 600,
                  }}
                >
                  {t.lang_label}
                </span>

                <Select
                  size="small"
                  value={lang}
                  onChange={(e) => setLang(e.target.value)}
                  sx={{
                    bgcolor: "white",
                    borderRadius: 2,
                  }}
                >
                  {LANGS.map((l) => (
                    <MenuItem key={l.code} value={l.code}>
                      {l.label}
                    </MenuItem>
                  ))}
                </Select>

                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    background: "#FF6B35",
                    borderRadius: 3,
                    px: 2,
                    boxShadow:
                      "0 4px 20px rgba(255, 107, 53, 0.25)",
                  }}
                >
                  {t.nav_login}
                </Button>
              </>
            )}

            {isMobile && (
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, p: 3 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <a href="#">{t.nav_home}</a>
            <a href="#categories">{t.nav_find}</a>
            <a href="/register">{t.nav_register}</a>

            <Select
              size="small"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              {LANGS.map((l) => (
                <MenuItem key={l.code} value={l.code}>
                  {l.label}
                </MenuItem>
              ))}
            </Select>

            <Button variant="contained">
              {t.nav_login}
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}