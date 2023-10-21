import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import contactpic from "../asset/Contact pic.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { Phone } from "@mui/icons-material";
import Link from '@mui/material/Link';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 450 , backgroundColor: 'rgba(39, 38, 38, 0.4)',boxShadow: "6px -1px 16px 12px rgba(251, 36, 255, 0.34)" , borderRadius: "15px" ,"&:hover": {
        backgroundColor: "transparent",
        transform: "scale(1.3)",
        transition:  "3.0s"
      }}} >
      <CardActionArea >
        <CardMedia component="img" height="350px" image={contactpic} />
        <CardContent >
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ color: "#ffebee" }}
          >
            CONTACT
          </Typography>

           <Link href="https://www.facebook.com/nattawoot.khamporn.7/" underline="hover" style={{ display: "flex", alignItems: "center" }}>
            <FacebookIcon style={{ color: "#ffebee" }} />

            <Typography variant="h6" sx={{ color: "#ffebee" }}>
              Nattawoot Khamporn
            </Typography >
            <br />
          </Link>
          <Link href="https://www.instagram.com/new.nattawoot/?hl=cs" underline="hover"
            style={{ display: "flex", alignItems: "center", marginTop: "5px" }}
          >
            <InstagramIcon style={{ color: "pink" }} />
            <Typography variant="h6" sx={{ color: "#ffebee" }}>
              new.nattawoot
            </Typography>
          </Link>
          <div
            style={{
              color: "black",
              display: "flex",
              alignItems: "center",
              marginTop: "5px",
            }}
          >
            <EmailIcon sx={{ color: "#ffebee" }}/>
            <Typography variant="h6" sx={{ color: "#ffebee" }}>
              {" "}
              s6401072510117@email.kumtnb.ac.th
            </Typography>
          </div>
          <div
            style={{
              color: "black",
              display: "flex",
              alignItems: "center",
              marginTop: "5px",
            }}
          >
            <Phone sx={{ color: "#ffebee" }}/>
            <Typography variant="h6" sx={{ color: "#ffebee" }}>
              062-358-5813
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
