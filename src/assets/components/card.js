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
            {props.name.substring(5).replace(".png", "")}
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
const Ranks = () => {
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
/** */
const CharacterCard = (props) => {
  return (
    <Card
      className="charactercard"
      onClick={(e) => {
        props.setDia(true);
        props.setPicsrc(characters(props.name));
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={characters(props.name)}
          alt={props.name}
        />
        <CardContent>
          <Typography variant="h3" className="h1">
            {props.name.substring(2).replace(".png", "")}
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
const Characters = () => {
  /** Variables */
  const [dia, setDia] = React.useState(false);
  const [picsrc, setPicsrc] = React.useState(characters(characters.keys()[0]));
  return (
    <>
      <BigPic dia={dia} setDia={setDia} picsrc={picsrc} images={characters}/>
      {characters.keys().map((item, i) => (
        <Grid item key={"frag-" + i} xs={12} md={6} xl={4}>
          <hr className="space" key={"hr--" + i} />
          <CharacterCard key={item.name + i} name={item} setDia={setDia} setPicsrc={setPicsrc} />
        </Grid>
      ))}
    </>
  );
};
export { Ranks, Characters };
