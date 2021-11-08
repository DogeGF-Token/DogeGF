import { styled } from '@mui/styles';
import Typography from '@mui/material/Typography';

export default styled(Typography)(({ theme }) => ({
	padding: '8px 25px',
	borderRadius: 60,
	backgroundColor: '#E3E8FA',
	color: '#0044EB',
	fontWeight: 600,
	fontSize: '0.688rem',
	lineHeight: '0.813rem',
	textAlign: 'center',
	letterSpacing: '0.05em',
	textTransform: 'uppercase',
	width: 'fit-content',
}));
