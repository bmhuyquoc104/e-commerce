export const lightTheme = {
  body: {
    backgroundColor: "hsl(0, 0%, 100%)",
  },
  header: {
    backgroundColor: "#fefefe",
    li: {
      color: `var(--clr_gb)`,
      hv_color: `var(--clr_b)`,
    },
    cartContainer: {
      backgroundColor: "#fefefe",
      border: "rgba(0, 0, 0, 0.2)",
    },
    cartTitle: {
      color: `var(--clr_b)`,
    },
  },
  activeHeader: {
    backgroundColor: "var(--clr_w)",
    li: {
      color: "var(--clr_b)",
    },
  },
  flex: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

export const darkTheme = {
  body: {
    backgroundColor: "hsl(0, 0%, 0%)",
  },
  header: {
    backgroundColor: "hsl(0, 0%, 2%)",
    li: {
      color: `var(--clr_gb)`,
      hv_color: `var(--clr_orange)`,
    },
    cartTitle: {
      color: `var(--clr_w)`,
    },
    cartContainer: {
      backgroundColor: "#0e0e0e",
      border: "rgba(255, 255, 255, 0.9)",
    },
  },
  activeHeader: {
    backgroundColor: "var(--clr_b)",
    li: {
      color: "var(--clr_w)",
    },
  },
  flex: {
    backgroundColor: "rgba(255,255,255,0.2)",
  },
};
