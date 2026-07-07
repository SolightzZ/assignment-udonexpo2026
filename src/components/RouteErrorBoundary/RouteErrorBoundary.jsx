import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Component } from 'react';
import i18n from '../../i18n';

export default class RouteErrorBoundary extends Component {
   constructor(props) {
      super(props);
      this.state = { hasError: false };
      this._onLangChange = () => this.forceUpdate();
   }

   static getDerivedStateFromError() {
      return { hasError: true };
   }

   componentDidMount() {
      i18n.on('languageChanged', this._onLangChange);
   }

   componentWillUnmount() {
      i18n.off('languageChanged', this._onLangChange);
   }

   render() {
      if (this.state.hasError) {
         return (
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '100vh',
                  gap: 2,
                  p: 3,
                  textAlign: 'center',
               }}>
               <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                  {i18n.t('error.title')}
               </Typography>
               <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 400 }}>
                  {i18n.t('error.message')}
               </Typography>
               <Button variant="contained" onClick={() => window.location.reload()}>
                  {i18n.t('error.reload')}
               </Button>
            </Box>
         );
      }
      return this.props.children;
   }
}
