export const root = {
   minHeight: '100vh',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   background: 'linear-gradient(135deg, #0d3b0f 0%, #1B5E20 50%, #2e7d32 100%)',
};

export const errorCode = {
   fontSize: { xs: '6rem', md: '8rem' },
   fontWeight: 700,
   color: 'rgba(255,255,255,0.08)',
   lineHeight: 1,
   mb: -4,
   userSelect: 'none',
};

export const divider = {
   width: 80,
   height: 3,
   background: 'linear-gradient(90deg, transparent, #C8A64E, transparent)',
   mx: 'auto',
   mb: 4,
};

export const title = {
   color: '#fff',
   fontWeight: 600,
   mb: 2,
   fontSize: { xs: '1.5rem', md: '1.75rem' },
};

export const message = {
   color: 'rgba(255,255,255,0.7)',
   mb: 5,
   maxWidth: 420,
   mx: 'auto',
   lineHeight: 1.7,
};

export const backButton = {
   background: '#C8A64E',
   color: '#0d3b0f',
   fontWeight: 600,
   px: 5,
   py: 1.5,
   borderRadius: 2,
   '&:hover': {
      background: '#d4b35a',
   },
};
