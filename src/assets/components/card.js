import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import * as React from "react";
/** Variables */
/** Load images */
const ranks = require.context("../pics/ranks/", true);
const characters = require.context("../pics/characters/", true);
/** Variables */
/** */
const RankCard = (props) => {
  return (
    <Card className="rankcard" onClick={(e) => {}}>
      <CardActionArea>
        <CardMedia component="img" image={ranks(props.name)} alt={props.name} />
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
  return (
    <>
      {ranks.keys().map((item, i) => (
        <Grid item key={"frag" + i} xs={12} md={6} xl={4}>
          <hr className="space" key={"hr-" + i} />
          <RankCard key={item.name + i} name={item} />
        </Grid>
      ))}
    </>
  );
};
/** */
const CharacterCard = (props) => {
  return (
    <Card className="charactercard" onClick={(e) => {}}>
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
  return (
    <>
      {characters.keys().map((item, i) => (
        <Grid item key={"frag-" + i} xs={12} md={6} xl={4}>
          <hr className="space" key={"hr--" + i} />
          <CharacterCard key={item.name + i} name={item} />
        </Grid>
      ))}
    </>
  );
};
export { Ranks, Characters };
