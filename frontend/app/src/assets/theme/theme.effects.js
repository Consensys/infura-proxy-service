export default {
  common: {
    alignCenter: {
      alignItems: 'center',
    },
    between: {
      justifyContent: 'space-between',
    },
    evenly: {
      justifyContent: 'space-evenly',
    },
    column: {
      flexDirection: 'column',
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    gutter3: {
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      '& > *': {
        width: '30%',
        marginRright: '5%',
      },
      '& > *:nth-child(3n)': {
        width: '30%',
        marginRright: '5%',
      },
      '& > *:nth-child(n+4)': {
        marginTop: '50px',
      },
    },
    gutter4: {
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      '& > *': {
        width: '21%',
        marginRright: '4%',
      },
      '& > *:nth-child(4n)': {
        width: '21%',
        marginRright: '4%',
      },
      '& > *:nth-child(n+5)': {
        marginTop: '30px',
      },
    },

    paper: {
      bg: 'paper',
      color: 'text',
    },
    neutral: {
      bg: 'neutral',
      color: 'text',
    },
    curve: {
      borderRadius: 12,
    },
    rounded: {
      borderRadius: 32,
    },
    circle: {
      borderRadius: 9999,
    },
    raised: {
      boxShadow: 6,
    },
    pointer: {
      cursor: 'pointer',
    },

    block: {
      display: 'block',
    },
    inlinBlock: {
      display: 'inline-block',
    },
    m0: {
      m: 0,
    },
    my0: {
      my: 0,
    },
    mx0: {
      mx: 0,
    },
    mt0: {
      mt: 0,
    },
    mb0: {
      mb: 0,
    },
    m1: {
      m: 1,
    },
    mt1: {
      mt: 1,
    },
    mb1: {
      mb: 1,
    },
    my1: {
      my: 1,
    },
    mx1: {
      mx: 1,
    },
    m2: {
      m: 1,
    },
    my2: {
      my: 2,
    },
    mt2: {
      mt: 2,
    },
    mb2: {
      mb: 2,
    },
    mx2: {
      mx: 2,
    },
    m3: {
      m: 1,
    },
    my3: {
      my: 3,
    },
    mt3: {
      mt: 3,
    },
    mb3: {
      mb: 3,
    },
    mx3: {
      mx: 3,
    },
    p1: {
      p: 1,
    },
    p2: {
      p: 1,
    },
    p3: {
      p: 1,
    },

    wordWrap: {
      wordBreak: 'break-all',
    },

    title: {
      fontSize: [2, 2, 3],
      mb: [10],
    },
    tagline: {
      fontSize: [1, 1, 2],
      mb: [10],
    },

    // Tag
    card: {
      bg: 'neutral',
      border: '1px solid #e0e0e0',
      borderColor: 'borderShadow',
      boxShadow: 0,
      borderRadius: 4,
      color: 'text',
      my: 3,
      p: 3,
    },
    tag: {
      bg: 'neutral',
      border: '1px solid #e0e0e0',
      borderColor: 'borderShadow',
      boxShadow: 0,
      borderRadius: 8,
      color: 'text',
      my: 1,
      p: 2,
    },
    gem: {
      bg: 'neutral',
      border: '1px solid #e0e0e0',
      borderColor: 'borderShadow',
      boxShadow: 0,
      borderRadius: '8px 22px 8px 14px',
      color: 'text',
      my: 1,
      p: 2,
    },
    bgWhite: {
      bg: 'white',
    },
    cNight: {
      color: 'night',
    },
  },

  // Text (Heading, Span, Paragraph)
  text: {
    sm: {
      fontSize: 0,
    },
    lg: {
      fontSize: 3,
    },
    xl: {
      fontSize: 4,
    },
    xxl: {
      fontSize: 5,
    },
    giga: {
      fontSize: 6,
    },
    mega: {
      fontSize: 7,
    },
    thin: {
      fontWeight: 300,
    },
    normal: {
      fontWeight: 400,
    },
    strong: {
      fontWeight: 700,
    },
    bold: {
      fontWeight: 800,
    },
    heavy: {
      fontWeight: 800,
    },
  },

  card: {
    primary: {
      bg: 'neutral',
      border: '1px solid #e0e0e0',
      borderColor: 'borderShadow',
      boxShadow: 0,
      borderRadius: 4,
      color: 'text',
    },
    sm: {
      p: 2,
    },
    lg: {
      p: 4,
    },
    xl: {
      p: 5,
    },
  },

  /* --- Button Effects --- */
  button: {
    curve: {
      borderRadius: 12,
    },
    rounded: {
      borderRadius: 12,
    },
    sm: {
      fontSize: 0,
      p: 2,
    },
    md: {
      fontSize: 2,
      p: '10px',
    },
    lg: {
      fontSize: 3,
      p: '12px',
      px: '16px',
    },
    xl: {
      p: 5,
    },
    primary: {
      bg: 'primary',
      color: 'white',
    },
    secondary: {
      bg: 'secondary',
      color: 'white',
    },
    white: {
      bg: 'paper',
      border: '1px solid #e0e0e0',
      borderColor: 'borderShadow',
      boxShadow: 0,
      borderRadius: 4,
      color: 'text',
    },
    disabled: {
      bg: 'muted',
      color: 'text',
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 0,
        top: 0,
      },
      '&:active': {
        boxShadow: 0,
        top: 0,
      },
    },
    red: {
      bg: 'red',
      color: 'white',
    },
    blue: {
      bg: 'blue',
      color: 'white',
    },
    green: {
      bg: 'green',
      color: 'white',
    },
    orange: {
      bg: 'orange',
      color: 'white',
    },
    purple: {
      bg: 'purple',
      color: 'white',
    },
  },
};
