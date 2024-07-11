import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

export const Link = (props: NextLinkProps & MuiLinkProps) => {
  return <MuiLink component={NextLink} {...props}></MuiLink>;
};
