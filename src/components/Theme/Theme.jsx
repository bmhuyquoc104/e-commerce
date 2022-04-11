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
    totalPrice:{
      color:`var(--clr_b)`
    }
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
  main:{
    productTitle:{
      color:`var(--clr_b)`
    },
    productDescription:{
      color:`var(--clr_dark_graishBlue)`
    },
    productPrice:{
      color:`var(--clr_b)`
    },
    addButton:{
      boxShadow: `0 10px 5px 4px var(--clr_paleOrange)`
    },
  }

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
    totalPrice:{
      color:`var(--clr_w)`
    }
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
  main:{
    productTitle:{
      color:`var(--clr_w)`
    },
    productDescription:{
      color:`var(--clr_gb)`
    },
    productPrice:{
      color:`var(--clr_w)`
    },
    addButton:{
      boxShadow: `0 10px 5px 4px var(--clr_b)`
    },
  }

};
