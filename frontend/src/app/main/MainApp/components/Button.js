import { styled } from '@mui/styles';
import Button from '@mui/material/Button';

export default styled(Button)(({ theme }) => ({
	width: 210,
	padding: '18px 0',
	borderRadius: 8,
	fontWeight: 600,
	fontSize: '1.25rem',
	lineHeight: '1.5rem',
	'&.MuiButton-outlined': {
		border: `2px solid ${theme.palette.primary.main}`,
	},
}));
