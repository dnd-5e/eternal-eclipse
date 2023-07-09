import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid
} from "@mui/material";
import * as React from "react";
import {BigPic/**, Dia*/} from "./dialog";
/** Variables */
/** Load images */
const ranks = require.context("../pics/ranks/", true);
const characters = require.context("../pics/characters/", true);
/** Variables */
/** */
const RankCard = (props) => {
  console.log(props);
  return (
    <Card
      className="rankcard"
      onClick={(e) => {
        props.setDia(true);
        props.setPicsrc(ranks(props.name));
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={ranks(props.name)}
          alt={props.name}
        />
        <CardContent>
          <Typography variant="h3" className="h1">
            {props.name.replace("./", "").replace(".png", "")}
          </Typography>
          <Typography variant="h3" className="h2">
            Another textfield
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
/** */
const Pic = () => {
  /** Variables */
  const [dia, setDia] = React.useState(false);
  const [picsrc, setPicsrc] = React.useState(ranks(ranks.keys()[0]));
  return (
    <>
      <BigPic dia={dia} setDia={setDia} picsrc={picsrc} images={ranks}/>
      {ranks.keys().map((item, i) => (
        <Grid item key={"frag" + i} xs={12} md={6} xl={4}>
          <hr className="space" key={"hr-" + i} />
          <RankCard key={item.name + i} name={item} setDia={setDia} setPicsrc={setPicsrc} />
        </Grid>
      ))}
    </>
  );
};
export { Pic };
