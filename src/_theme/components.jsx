

const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        padding: "12px 28px",
        fontSize: "16px",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-2px)",
        },
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 24,
        boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
      },
    },
  },

  MuiTextField: {
    defaultProps: {
      variant: "outlined",
    },
    styleOverrides: {
      root: {
        "& .MuiOutlinedInput-root": {
          borderRadius: 12,
        },
      },
    },
  },
};

export default components;