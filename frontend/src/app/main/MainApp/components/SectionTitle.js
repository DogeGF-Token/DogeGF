import { styled } from '@mui/styles';
import Typography from '@mui/material/Typography';

export default styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.headText,
	fontWeight: 800,
	fontSize: '3.75rem',
	lineHeight: '4.5rem',
}));
