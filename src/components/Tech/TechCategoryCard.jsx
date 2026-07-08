import AnimationIcon from '@mui/icons-material/Animation';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import PaletteIcon from '@mui/icons-material/Palette';
import StorageIcon from '@mui/icons-material/Storage';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { COLORS } from '../../theme/theme';
import IconCircle from '../IconCircle';
import Reveal from '../Reveal';
import useScramble from '../../hooks/useScramble';
import {
   ReactIcon,
   ViteIcon,
   ReactRouterIcon,
   MUIIcon,
   EmotionIcon,
   FramerIcon,
   I18NextIcon,
   ReactI18NextIcon,
   LangDetectIcon,
   CSSIcon,
   ScrambleIcon,
   RolldownIcon,
   OxlintIcon,
   GitHubActionsIcon,
   PoppinsIcon,
   NotoThaiIcon,
   NotoSCIcon,
} from './TechIcons';

export const TECH_CATEGORIES = [
   {
      key: 'framework',
      icon: CodeIcon,
      techs: [
         { name: 'React 19', desc: 'tech.framework.react', Icon: ReactIcon },
         { name: 'Vite 8', desc: 'tech.framework.vite', Icon: ViteIcon },
         { name: 'React Router', desc: 'tech.framework.router', Icon: ReactRouterIcon },
      ],
   },
   {
      key: 'ui',
      icon: PaletteIcon,
      techs: [
         { name: 'MUI v9', desc: 'tech.ui.mui', Icon: MUIIcon },
         { name: 'Emotion', desc: 'tech.ui.emotion', Icon: EmotionIcon },
         { name: 'Framer Motion', desc: 'tech.ui.framer', Icon: FramerIcon },
      ],
   },
   {
      key: 'i18n',
      icon: LanguageIcon,
      techs: [
         { name: 'i18next', desc: 'tech.i18n.i18next', Icon: I18NextIcon },
         { name: 'react-i18next', desc: 'tech.i18n.reactI18next', Icon: ReactI18NextIcon },
         { name: 'Language Detector', desc: 'tech.i18n.detector', Icon: LangDetectIcon },
      ],
   },
   {
      key: 'animation',
      icon: AnimationIcon,
      techs: [
         { name: 'Framer Motion', desc: 'tech.animation.framer', Icon: FramerIcon },
         { name: 'CSS Animations', desc: 'tech.animation.css', Icon: CSSIcon },
         { name: 'Scramble Effect', desc: 'tech.animation.scramble', Icon: ScrambleIcon },
      ],
   },
   {
      key: 'build',
      icon: BuildCircleIcon,
      techs: [
         { name: 'Vite / Rolldown', desc: 'tech.build.vite', Icon: RolldownIcon },
         { name: 'Oxlint', desc: 'tech.build.oxlint', Icon: OxlintIcon },
         { name: 'GitHub Actions', desc: 'tech.build.ghActions', Icon: GitHubActionsIcon },
      ],
   },
   {
      key: 'font',
      icon: StorageIcon,
      techs: [
         { name: 'Poppins', desc: 'tech.font.poppins', Icon: PoppinsIcon },
         { name: 'Noto Sans Thai', desc: 'tech.font.notoThai', Icon: NotoThaiIcon },
         { name: 'Noto Sans SC', desc: 'tech.font.notoSC', Icon: NotoSCIcon },
      ],
   },
];

export default function TechCategoryCard({ category, index, t }) {
   const { key, icon: Icon, techs } = category;
   const color = COLORS.techCategories[index];
   const scrambledTitle = useScramble(t(`tech.${key}.title`));

   return (
      <Reveal delay={index * 0.1} style={{ height: '100%', width: '100%' }}>
         <Card
            sx={{
               height: '100%',
               display: 'flex',
               flexDirection: 'column',
               borderRadius: '32px',
                bgcolor: 'background.paper',
                boxShadow: (theme) => theme.palette.custom.cardShadow,
                border: '1px solid',
                borderColor: 'divider',
               transition: 'transform .35s ease, box-shadow .35s ease',
               '&:hover': {
                  transform: 'translateY(-6px)',
                   boxShadow: (theme) => theme.palette.custom.cardShadowHover,
               },
            }}>
            <CardContent sx={{ p: { xs: 3, md: 4 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5, minHeight: { xs: 56, md: 64 } }}>
                  <IconCircle icon={Icon} color={color} size={48} iconSize={24} />
                  <Typography
                     variant="h6"
                     sx={{
                        fontWeight: 700,
                        color: (theme) => theme.palette.mode === 'dark' ? '#fff' : 'primary.dark',
                        fontSize: '1.15rem',
                     }}>
                     {scrambledTitle}
                  </Typography>
               </Box>

               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexGrow: { xs: 0, sm: 1 } }}>
                  {techs.map(({ name, desc, Icon: TechIcon }) => (
                     <Box
                        key={name}
                        sx={{
                            flex: { xs: 'initial', sm: 1 },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            background: (theme) => theme.palette.custom.techItemBg,
                           borderRadius: '16px',
                           p: { xs: 1.5, md: 2 },
                            border: '1px solid', borderColor: (theme) => theme.palette.custom.techItemBorder,
                        }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                           {TechIcon && <TechIcon />}
                           <Typography
                              variant="subtitle2"
                              sx={{
                                 fontWeight: 700,
                                 color: (theme) => theme.palette.mode === 'dark' ? '#fff' : 'primary.main',
                                 fontSize: '0.85rem',
                                 fontFamily: '"Poppins", "Noto Sans Thai", "Noto Sans SC", monospace',
                                 letterSpacing: '0.01em',
                              }}>
                              {name}
                           </Typography>
                        </Box>
                        <Typography
                           variant="body2"
                           sx={{
                              color: 'text.secondary',
                              fontSize: '0.82rem',
                              lineHeight: 1.5,
                           }}>
                           {t(desc)}
                        </Typography>
                     </Box>
                  ))}
               </Box>
            </CardContent>
         </Card>
      </Reveal>
   );
}
