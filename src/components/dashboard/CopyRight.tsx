import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';

export const Copyright = (props: any) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" { ...props }>
            { 'CopyRight ©'}
            <Link color="inherit" href="https://github.com/katiaku/code-verifier-frontend">
            Code Verifier Repo
            </Link>
            { new Date().getFullYear() }
        </Typography>
    )
}