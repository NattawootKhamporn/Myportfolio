import { Grid } from "@mui/material";
import mypic from "./asset/Profile pic.png";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ActionAreaCard from "./component/card";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import project1 from "./asset/Project1.jpg";
import project2 from "./asset/Project2.jpg";
import project4 from "./asset/Project4.jpg";
import continental1 from "./asset/Continental1.jpg";
import continental2 from "./asset/Continental2.jpg";
import continental3 from "./asset/Continental3.jpg";
import bas1 from "./asset/Bas1.jpg";
import bas2 from "./asset/Bas2.jpg";
import bas3 from "./asset/Bas3.jpg";
import bas4 from "./asset/Bas4.jpg";
import guitar from "./asset/Guitar.jpg";
import axios from "axios";
import { useState, useEffect } from "react";

const itemData = [
  {
    img: project1,
    title: "Bed",
  },
  {
    img: project2,
    title: "Kitchen",
  },
  {
    img: project4,
    title: "Books",
  },
  {
    img: continental1,
    title: "Chairs",
  },
  {
    img: continental2,
    title: "Candle",
  },
  {
    img: continental3,
    title: "Laptop",
  },
  {
    img: guitar,
    title: "Doors",
  },
  {
    img: bas2,
    title: "Coffee",
  },
  {
    img: bas1,
    title: "Storage",
  },
  {
    img: bas3,
    title: "Coffee table",
  },
  {
    img: bas4,
    title: "Blinds",
  },
];
const App = () => {
  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/infomation");
      setData(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  const history = "Born on December 27 2000 in Nan Province I am 23 years old.";

  const education = [
    "• King Mongkut's University of Technology North Bangkok",
    "Bachelor of Instrument engineer",
    "GPA 2.65",
    "• 2021 Rayong technical collage",
    "High Voc. Cert of Electrical ",
  ];
  const experience = [
    "2020-2021",
    "• Continental WIL Program in C&D engineering",
    "April-June 2023",
    "• Internship at Inspire Tech Co.,Ltd.",
  ];
  const skill = [
    "• PLC Programing",
    "• Experience using Microsoft office suite",
    "• Enjoy working under pressure and challenge",
  ];
  const talent = ["• Play the guitar", "• Play the basketball"];
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgb(44,45,255) 0%, rgba(61, 64, 67, 0.99) 24%, rgba(61, 64, 67, 0.99) 77%, rgb(240,27,86) 100%)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
      }}
      className="bodyApp"
    >
      <Grid container columnSpacing={2}>
        <Grid item xs={12} md={5}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <img
              src={mypic}
              sx={{
                objectFit: "contain",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          container
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
        >
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontFamily: "Courier New",
              textShadow: "2px -1px 6px  rgba(0, 250, 4, 1)",
              boxShadowSpread: 10,
              boxShadowBlur: 20,
              boxShadowOffset: "0px 10px",
            }}
          >
            PORTFOLIO
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              transition: "ease-in 0.7s",
              fontFamily: "Courier New",
              "&:hover": {
                backgroundColor: "transparent",
                fontSize: "85px",
                textShadow: "2px -1px 6px  rgba(0, 250, 4, 1)",
                boxShadowSpread: 10,
                boxShadowBlur: 20,
                boxShadowOffset: "0px 10px",
              },
            }}
          >
            NATTAWOOT KHAMPORN
          </Typography>
          <Typography
            variant="h2"
            style={{ color: "white", fontFamily: "Courier New" }}
          >
            A INSTRUMENT ENGINEER
          </Typography>
          <Typography
            variant="h3"
            style={{ color: "white", fontFamily: "Courier New" }}
          >
            KMUTNB
          </Typography>
          <Typography
            sx={{ fontFamily: "Courier New" }}
            variant="subtitle1"
            style={{ color: "white" }}
          >
            {history}
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: "150px" }}>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActionAreaCard />
        </Grid>
        <Grid item xs={12} md={6} sx={{ borderLeft: "2px solid white" ,paddingLeft: "50px"}}>
          <Typography
            style={{
              color: "white",
              marginTop: "20px",
              fontFamily: "Courier New",
            }}
            variant="h4"
          >
            <br />
            EDUCATION
          </Typography>
          {data?.education?.map((item) => (
            <Grid
              sx={{
                color: "white",
                marginTop: "5px",
                fontFamily: "Courier New",
                "&:hover": {
                  backgroundColor: "transparent",
                  fontSize: "30px",
                  transform: "translateX(20px)",
                  transition: "2.0s",
                  textShadow: "2px -1px 6px  rgba(0, 250, 4, 1)",
                  boxShadowSpread: 10,
                  boxShadowBlur: 20,
                  boxShadowOffset: "0px 10px",
                },
              }}
              variant="h7"
            >
              {item}
            </Grid>
          ))}

          <Typography
            style={{
              color: "white",
              marginTop: "5px",
              fontFamily: "Courier New",
            }}
            variant="h4"
          >
            <br />
            EXPERIENCE
          </Typography>
          {data?.experience?.map((item) => (
            <Grid
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "transparent",
                  fontSize: "30px",
                  transform: "translateX(20px)",
                  transition: "2.0s",
                  textShadow: "2px -1px 6px  rgba(0, 250, 4, 1)",
                  boxShadowSpread: 10,
                  boxShadowBlur: 20,
                  boxShadowOffset: "0px 10px",
                },
              }}
              variant="h7"
            >
              {item}
            </Grid>
          ))}

          <Typography
            style={{ color: "white", fontFamily: "Courier New" }}
            variant="h4"
          >
            <br />
            PROJECT
          </Typography>

          {data?.project?.map((item) => (
            <Grid
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "transparent",
                  fontSize: "30px",
                  transform: "translateX(20px)",
                  transition: "2.0s",
                  textShadow: "2px -1px 6px  rgba(0, 250, 4, 1)",
                  boxShadowSpread: 10,
                  boxShadowBlur: 20,
                  boxShadowOffset: "0px 10px",
                },
              }}
              variant="h4"
            >
              {item}
            </Grid>
          ))}
          <Typography
            style={{ color: "white", fontFamily: "Courier New" }}
            variant="h4"
          >
            <br />
            SKILL
          </Typography>
          {data?.skill?.map((item) => (
            <Grid
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "transparent",
                  fontSize: "30px",
                  transform: "translateX(20px)",
                  transition: "2.0s",
                  textShadow: "2px -1px 6px  rgba(0, 250, 4, 1)",
                  boxShadowSpread: 10,
                  boxShadowBlur: 20,
                  boxShadowOffset: "0px 10px",
                },
              }}
              variant="h7"
            >
              {item}
            </Grid>
          ))}
          <Typography
            style={{ color: "white", fontFamily: "Courier New" }}
            variant="h4"
          >
            <br />
            Talent
          </Typography>
          {data?.talent?.map((item) => (
            <Grid
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "transparent",
                  fontSize: "30px",
                  transform: "translateX(20px)",
                  transition: "2.0s",
                  textShadow: "2px -1px 6px  rgba(0, 250, 4, 1)",
                  boxShadowSpread: 10,
                  boxShadowBlur: 20,
                  boxShadowOffset: "0px 10px",
                },
              }}
              variant="h7"
            >
              {item}
            </Grid>
          ))}
          <br />
        </Grid>
      </Grid>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "60px",
          color: "white",
          fontFamily: "Courier New",
          marginTop: "100px",
          borderTop: "2px solid white",
          width: "70%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop:"50px"
        }}
      >
        Relevant picture
      </Typography>
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <ImageList
          sx={{
            width: 800,
            height: 650,
            borderRadius: "5px",
            padding: "50px",
          }}
          variant="woven"
          cols={3}
          gap={25}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  transform: "scale(1.3)",
                  transition: "2.0s",
                },
              }}
            >
              <img
                style={{
                  borderRadius: "15px",
                  boxShadow: "2px 2px 8px 8px rgba(117, 51, 240, 0.5)",
                }}
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=161&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </div>
  );
};
export default App;
