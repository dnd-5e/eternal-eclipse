import {
  Modal,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import * as React from "react";

const FullScreenModal = ({ modal, setModal, image, name }) => {
  return (
    <Modal
      open={modal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={() => setModal(false)}
    >
      <Card
        className="modal"
        onClick={(e) => {
          setModal(true);
        }}
      >
        <CardActionArea>
          <CardMedia component="img" image={image} alt={name} />
          <CardContent>
            <Typography variant="h3" className="h1">
              {name.substring(5).replace(".png", "")}
            </Typography>
            <Typography variant="h3" className="h2">
              Another textfield
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Modal>
  );
};
export { FullScreenModal };
